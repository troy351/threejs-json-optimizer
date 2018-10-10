export async function readJSONFiles(files) {
  return await Promise.all(
    files.map(
      file =>
        new Promise(resolve => {
          const reader = new FileReader()

          reader.onload = function() {
            const json = JSON.parse(this.result)

            resolve(json)
          }

          reader.readAsText(file)
        }),
    ),
  )
}
