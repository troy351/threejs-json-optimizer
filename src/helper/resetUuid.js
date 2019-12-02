import { generateUUID, isUUID } from './uuid'
import { traversal } from './traversal'

export function resetUUID(json) {
  const map = {}

  // collect and generate map for uuid
  traversal(json, (value, key) => {
    if (key === 'uuid' && !map[value]) map[value] = generateUUID()
  })

  // apply new uuid
  traversal(json, (value, key, obj) => {
    if (isUUID(value)) obj[key] = map[value] || value
  })
}
