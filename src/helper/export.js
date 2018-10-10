export function exportJSON(json, filename = 'app') {
  const a = document.createElement('a')
  const blob = new Blob([JSON.stringify(json)])

  a.download = filename + '-optimize.json'

  a.href = URL.createObjectURL(blob)
  a.click()
}
