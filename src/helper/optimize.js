import {
  removeDuplicate,
  attachJSONAndSort,
  removeAttachedJSON,
  getIgnoreName,
  sortByDict,
  isContainer,
  isUnmovedContainer,
} from './utils'
import { delay } from './delay'
import { isUUID, getReplacedUuidFromMap, isUuidList } from './uuid'
import { traversal } from './traversal'
import { ARR_FIELDS } from './merge'

export function processImage(image, toJPG, max2048) {
  return new Promise(resolve => {
    const url = image.url

    const img = new Image()
    img.src = url

    img.onload = function() {
      const log2Width = Math.log2(img.width)
      const log2Height = Math.log2(img.height)

      const shouldResize =
        Math.floor(log2Width) !== log2Width ||
        Math.floor(log2Height) !== log2Height ||
        (max2048 && log2Width > 11) ||
        (max2048 && log2Height > 11)
      const shouldConvert = toJPG && !url.startsWith('data:image/jpeg')

      // no need to resize
      if (!shouldResize && !shouldConvert) {
        resolve(false)
        return
      }

      let width = 2 ** Math.round(log2Width)
      let height = 2 ** Math.round(log2Height)

      const MAX_RES = 2 ** 11
      if (shouldResize) {
        if (width > MAX_RES) {
          height = (height / width) * MAX_RES
          width = MAX_RES
        }

        if (height > MAX_RES) {
          width = (width / height) * MAX_RES
          height = MAX_RES
        }
      }

      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height

      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, width, height)

      // threejs editor's default quality is 0.6
      image.url = canvas.toDataURL(
        // if not to jpg, convert to its original type
        toJPG ? 'image/jpeg' : url.match(/:(.+);/)[1],
        toJPG ? 0.6 : 1,
      )

      resolve(true)
    }
  })
}

export const removeDuplicateImages = delay((images, uuidMap) => {
  sortByDict(images, 'url')

  return removeDuplicate(images, img => img.url, uuidMap)
})

export const removeDuplicateTextures = delay((textures, uuidMap) => {
  // set replace image
  textures.forEach(texture => {
    const image = uuidMap.get(texture.image)
    if (image) texture.image = image
  })

  attachJSONAndSort(textures)

  const count = removeDuplicate(textures, texture => texture.json, uuidMap)

  removeAttachedJSON(textures)

  return count
})

export const removeDuplicateMaterials = delay((materials, uuidMap) => {
  // replace different map type
  materials.forEach(material => {
    Object.entries(material).forEach(([key, val]) => {
      if (isUUID(val) && uuidMap.has(val)) material[key] = uuidMap.get(val)
    })
  })

  attachJSONAndSort(materials)

  const count = removeDuplicate(materials, texture => texture.json, uuidMap)

  removeAttachedJSON(materials)

  return count
})

export const removeDuplicateGeometries = delay((geometries, uuidMap) => {
  attachJSONAndSort(geometries)

  const count = removeDuplicate(geometries, texture => texture.json, uuidMap)

  removeAttachedJSON(geometries)

  return count
})

export const reattachObjectUUID = delay((object, uuidMap) => {
  let count = 0

  function reattach(obj) {
    Object.entries(obj).forEach(([key, value]) => {
      // if children, recursive
      if (key === 'children' && Array.isArray(value)) {
        value.forEach(val => reattach(val))
        return
      }

      // replace if its uuid
      obj[key] = getReplacedUuidFromMap(value, uuidMap)

      if (obj[key] !== value) count++
    })
  }

  reattach(object)

  return count
})

export const removeInvisible = delay(object => {
  let count = 0

  traversal(object, (val, key, obj) => {
    if (obj.children) {
      const length = obj.children.length
      obj.children = obj.children.filter(el => el.visible !== false)
      count += length - obj.children.length
    }
  })

  return count
})

export const removeDuplicateObjects = delay(object => {
  const clone = JSON.parse(JSON.stringify(object))

  const collectedMap = {}
  const collected = []

  /**
   * to determine whether two meshs are the same:
   * there may be moved container (e.g. Group) which will case inside mesh moved,
   * so not only the mesh should be same, all parent moved container should be the same too.
   */

  // remove all name if ignore name and attach parent
  traversal(clone, (val, key, obj) => {
    if (!collectedMap[obj.uuid]) {
      collectedMap[obj.uuid] = true
      collected.push([obj.uuid, obj])
    }

    if (getIgnoreName()) delete obj.name
    delete obj.uuid
    if (obj.children) obj.children.forEach(o => (o.parent = obj))
  })

  // collect all json and sort
  const jsonArr = collected
    .map(arr => {
      const [key, val] = arr
      if (isContainer(val)) return

      // remove all unmoved parent
      const v = JSON.parse(
        JSON.stringify(
          arr[1],
          (key, val) => (key === 'children' ? undefined : val),
        ),
      )

      let p = v
      while (p) {
        while (isUnmovedContainer(p.parent)) p.parent = p.parent.parent
        p = p.parent
      }

      return [key, JSON.stringify(v)]
    })
    .filter(arr => arr)

  sortByDict(jsonArr, 1)

  // record and count duplicate json
  let count = 0
  const removeSet = new Set()
  jsonArr.forEach((el, index, arr) => {
    if (!index) return
    if (el[1] === arr[index - 1][1]) {
      removeSet.add(arr[index][0])
      count++
    }
  })

  // remove duplicate objects
  traversal(object, (val, key, obj) => {
    if (!obj.children) return

    obj.children = obj.children.filter(el => !removeSet.has(el.uuid))
  })

  return count
})

export const removeUnused = delay(scene => {
  const mapObj = {}
  let count = ARR_FIELDS.reduce((sum, key) => sum + (scene[key] || []).length, 0)

  // remove all empty Group or Object3d
  while (true) {
    let hasRemoved = false

    traversal(scene.object, (value, key, obj) => {
      if (!obj.children) return

      obj.children = obj.children.filter(el => {
        const keep = !isContainer(el) || obj.children.length
        hasRemoved = hasRemoved || !keep
        count += !keep
        return keep
      })
    })

    if (!hasRemoved) break
  }

  function tagUUid(value) {
    if (isUUID(value)) {
      mapObj[value] = true
    } else if (Array.isArray(value) && isUuidList(value)) {
      value.forEach(val => mapObj[val] = true)
    }
  }

  // collect all uuids
  traversal(scene.object, tagUUid)

  if (scene.geometries) {
    scene.geometries = scene.geometries.filter(geo => mapObj[geo.uuid])
    scene.geometries.forEach(geo => (mapObj[geo.uuid] = true))
  }

  if (scene.materials) {
    scene.materials = scene.materials.filter(mat => mapObj[mat.uuid])
    scene.materials.forEach(material =>
      Object.entries(material).forEach(([key, val]) => tagUUid(val)),
    )
  }

  if (scene.textures) {
    scene.textures = scene.textures.filter(text => mapObj[text.uuid])
    scene.textures.forEach(text => (mapObj[text.image] = true))
  }

  if (scene.images) {
    scene.images = scene.images.filter(img => mapObj[img.uuid])
  }

  return count - ARR_FIELDS.reduce((sum, key) => sum + (scene[key] || []).length, 0)
})

export const removeUserData = delay(object => {
  let count = 0

  traversal(object, (val, key, obj) => {
    if (key === 'userData') {
      delete obj.userData
      count++
    }
  })

  return count
})