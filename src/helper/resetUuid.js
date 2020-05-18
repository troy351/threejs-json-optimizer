import { generateUUID, getReplacedUuidFromMap } from './uuid'
import { traversal } from './traversal'

export function resetUUID(json) {
  const map = new Map()

  // collect and generate map for uuid
  traversal(json, (value, key) => {
    if (key === 'uuid' && !map.get(value)) map.set(value, generateUUID())
  })

  // apply new uuid
  traversal(json, (value, key, obj) => {
    obj[key] = getReplacedUuidFromMap(value, map)
  })
}
