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
  jsons.forEach(j => resetUUID(j))

  const json = JSON.parse(JSON.stringify(jsons[0]))
  const scene = json.scene

  // clear fields
  json.scripts = {}
  ARR_FIELDS.forEach(field => (scene[field] = []))
  scene.object = createGroup('Scene', 'Scene')
  scene.object.background = jsons[0].scene.object.background

  // merge
  jsons.forEach((j, index) => {
    const s = j.scene

    // merge scripts
    Object.assign(json.scripts, j.scripts)

    // merge array fields
    ARR_FIELDS.forEach(key => (scene[key] = scene[key].concat(s[key])))

    // merge objects, to make each json file into a group
    const group = createGroup(names[index])
    group.children = s.object.children
    scene.object.children.push(group)
  })

  return json
})
