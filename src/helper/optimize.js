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
      if (isUUID(value)) obj[key] = uuidMap.get(value) || value
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
