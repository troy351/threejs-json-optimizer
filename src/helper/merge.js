import { generateUUID } from './uuid'
import { resetUUID } from './resetUuid'
import { delay } from './delay'

function createGroup(name = '', type = 'Group') {
  return {
    uuid: generateUUID(),
    type,
    name,
    layers: 1,
    matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    children: [],
  }
}

export const ARR_FIELDS = ['geometries', 'images', 'materials', 'textures']

export const mergeJSONS = delay((jsons, names) => {
  // reset all uuid to prevent duplicate uuid
  jsons.forEach((j) => resetUUID(j))

  const target = { ...jsons[0] }

  // clear fields
  ARR_FIELDS.forEach((field) => (target[field] = []))
  target.object = createGroup('merged-group')

  // merge
  jsons.forEach((json, index) => {
    // merge array fields, note `images` may not exists 
    ARR_FIELDS.forEach(
      (key) => (target[key] = target[key].concat(json[key] || []))
    )

    // merge objects, object name should be file name
    json.object.name = names[index]
    target.object.children.push(json.object)
  })

  return target
})
