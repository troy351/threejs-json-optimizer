function downloadFile(filename, blob) {
  const a = document.createElement('a')
  a.download = filename
  a.href = URL.createObjectURL(blob)
  a.click()
}

export function exportJSON(json, filename = 'app') {
  downloadFile(filename + '-optimize.json', new Blob([JSON.stringify(json)]))
}