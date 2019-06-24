import { encode } from "@msgpack/msgpack";

function downloadFile(filename, blob) {
  const a = document.createElement('a')
  a.download = filename
  a.href = URL.createObjectURL(blob)
  a.click()
}

export function exportJSON(json, filename = 'app') {
  downloadFile(filename + '-optimize.json', new Blob([JSON.stringify(json)]))
}

export function compressJSON(json, filename = 'app') {
  downloadFile(filename + '-compress.msgpack', new Blob([encode(json)], { type: "application/octet-stream" }))
}