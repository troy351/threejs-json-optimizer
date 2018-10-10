// copy from https://github.com/mrdoob/three.js/blob/0d808345069701da51833ffb1de87c9d73433e72/src/math/Math.js#L11-L39

const lut = []

for (let i = 0; i < 256; i++) {
  lut[i] = (i < 16 ? '0' : '') + i.toString(16)
}

export function generateUUID() {
  const d0 = (Math.random() * 0xffffffff) | 0
  const d1 = (Math.random() * 0xffffffff) | 0
  const d2 = (Math.random() * 0xffffffff) | 0
  const d3 = (Math.random() * 0xffffffff) | 0
  const uuid =
    lut[d0 & 0xff] +
    lut[(d0 >> 8) & 0xff] +
    lut[(d0 >> 16) & 0xff] +
    lut[(d0 >> 24) & 0xff] +
    '-' +
    lut[d1 & 0xff] +
    lut[(d1 >> 8) & 0xff] +
    '-' +
    lut[((d1 >> 16) & 0x0f) | 0x40] +
    lut[(d1 >> 24) & 0xff] +
    '-' +
    lut[(d2 & 0x3f) | 0x80] +
    lut[(d2 >> 8) & 0xff] +
    '-' +
    lut[(d2 >> 16) & 0xff] +
    lut[(d2 >> 24) & 0xff] +
    lut[d3 & 0xff] +
    lut[(d3 >> 8) & 0xff] +
    lut[(d3 >> 16) & 0xff] +
    lut[(d3 >> 24) & 0xff]

  // .toUpperCase() here flattens concatenated strings to save heap memory space.
  return uuid.toUpperCase()
}

const UUID_REGEXP = /^[0-9A-Z]{8}-([0-9A-Z]{4}-){3}[0-9A-Z]{12}$/

export function isUUID(val) {
  return typeof val === 'string' && UUID_REGEXP.test(val)
}
