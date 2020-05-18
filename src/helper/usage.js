function collectAllUUID(json, map) {
  if (typeof json !== 'object') return

  if (json.uuid) map.set(json.uuid, json)

  const arr = Array.isArray(json) ? json : Object.values(json)

  arr.forEach(val => collectAllUUID(val, map))
}

export function findUUIDUsage(json, str) {
  const map = new Map()

  collectAllUUID(json, map)

  const logs = []
  map.forEach(val => {
    const vals = Object.values(val)
    const obj = vals.find(item => item.toString().includes(str))
    if (obj) logs.push(val)
  })

  return logs.length
    ? logs
      .map(j =>
        JSON.stringify(
          j,
          (key, val) => {
            // make long number string shorter
            if (Array.isArray(val) && typeof val[0] === 'number')
              return val.length > 5
                ? JSON.stringify(val.slice(0, 5)).slice(0, -1) + ' ...]'
                : JSON.stringify(val)

            // make image data uri shorter
            if (typeof val === 'string' && val.startsWith('data:image'))
              return val.slice(0, 100) + ' ...'

            return val
          },
          2,
        ),
      )
      .join(`\n\n${'-'.repeat(50)}\n\n`)
    : 'Nothing found'
}
