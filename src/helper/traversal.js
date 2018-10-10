export function traversal(obj, callback) {
  if (obj === null || typeof obj !== 'object') return

  Object.entries(obj).forEach(([key, value]) => {
    // only try objects which has uuid
    if (obj.uuid) callback(value, key, obj)

    traversal(value, callback)
  })
}
