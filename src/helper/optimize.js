import {
  removeDuplicate,
  attachJSONAndSort,
  removeAttachedJSON,
  getIgnoreName,
  sortByDict,
} from './utils'
import { delay } from './delay'
import { isUUID } from './uuid'
import { traversal } from './traversal'
import { ARR_FIELDS } from './merge'

export function processImage(image, toJPG, max2048) {
  return new Promise(resolve => {
    const url = image.url

    const img = new Image()
    img.src = url

    img.onload = function() {
      const log2 = Math.log2(img.width)

      const shouldResize = Math.floor(log2) !== log2 || (max2048 && log2 > 11)
      const shouldConvert = toJPG && !url.startsWith('data:image/jpeg')

      // no need to resize
      if (!shouldResize && !shouldConvert) {
        resolve(false)
        return
      }

      const size = Math.min(
        2 ** Math.round(log2),
        shouldResize ? 2 ** 11 : Number.MAX_SAFE_INTEGER,
      )

      const canvas = document.createElement('canvas')
      canvas.width = size
      canvas.height = size

      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, size, size)

      // threejs editor's default quality is 0.6
      image.url = canvas.toDataURL('image/jpeg', 0.6)

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
      if (isUUID(value)) obj[key] = uuidMap.get(value) || value
      if (obj[key] !== value) count++
    })
  }

  reattach(object)

  return count
})

export const removeDuplicateObjects = delay(object => {
  const clone = JSON.parse(JSON.stringify(object))

  const map = {}

  // remove all name if ignore name
  if (getIgnoreName()) {
    traversal(clone, (val, key, obj) => {
      map[obj.uuid] = obj
      delete obj.name
      delete obj.uuid
    })
  }

  // collect all json and sort
  const jsonArr = Object.entries(map).map(arr => [
    arr[0],
    JSON.stringify(arr[1]),
  ])
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
  const map = {}
  let count = ARR_FIELDS.reduce((sum, key) => sum + scene[key].length, 0)

  // remove all empty Group or Object3d
  while (true) {
    let hasRemoved = false

    traversal(scene.object, (value, key, obj) => {
      if (!obj.children) return

      obj.children = obj.children.filter(el => {
        const keep =
          Object.keys(el).toString !==
            'uuid,type,name,layers,matrix,children' || obj.children.length
        hasRemoved = hasRemoved || !keep
        count += !keep
        return keep
      })
    })

    if (!hasRemoved) break
  }

  // collect all uuids
  traversal(scene.object, value => {
    if (isUUID(value)) map[value] = true
  })

  scene.geometries = scene.geometries.filter(geo => map[geo.uuid])
  scene.geometries.forEach(geo => (map[geo.uuid] = true))

  scene.materials = scene.materials.filter(mat => map[mat.uuid])
  scene.materials.forEach(material =>
    Object.entries(material).forEach(([key, val]) => {
      if (isUUID(val)) map[val] = true
    }),
  )

  scene.textures = scene.textures.filter(text => map[text.uuid])
  scene.textures.forEach(text => (map[text.image] = true))

  scene.images = scene.images.filter(img => map[img.uuid])

  return count - ARR_FIELDS.reduce((sum, key) => sum + scene[key].length, 0)
})
