let ignoreName = true

export function setIgnoreName(val) {
  ignoreName = val
}

export function getIgnoreName() {
  return ignoreName
}

export function sortByDict(arr, key) {
  arr.sort((a, b) => {
    if (a[key] < b[key]) return -1
    if (a[key] > b[key]) return 1
    return 0
  })
}

export function attachJSONAndSort(arr) {
  arr.forEach(item => {
    const clone = { ...item }

    // remove uuid and name which is not relevant
    delete clone.uuid
    if (ignoreName) delete clone.name

    item.json = JSON.stringify(clone)
  })

  sortByDict(arr, 'json')
}

export function removeAttachedJSON(arr) {
  arr.forEach(item => delete item.json)
}

export function removeDuplicate(arr, getValue, uuidMap) {
  let i = 1
  let count = 0

  while (i < arr.length) {
    if (getValue(arr[i]) !== getValue(arr[i - 1])) {
      i++
      continue
    }

    uuidMap.set(arr[i].uuid, arr[i - 1].uuid)

    arr.splice(i, 1)
    count++
  }

  return count
}
