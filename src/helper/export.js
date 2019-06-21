import { encode } from "@msgpack/msgpack";

export function exportJSON(json, filename = 'app', compress = false) {
  const a = document.createElement('a')

  let blob
  if (compress) {
    blob = new Blob([encode(json)], { type: "application/octet-stream" })

    a.download = filename + '-optimize.msgpack'
  } else {
    blob = new Blob([JSON.stringify(json)])

    a.download = filename + '-optimize.json'
  }

  a.href = URL.createObjectURL(blob)
  a.click()
}
