// make functions async for vue to update UI
export const delay = callback => (...args) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(callback(...args))
    }, 0)
  })
