import { readJSONFiles } from './helper/reader'
import { mergeJSONS } from './helper/merge'
import {
  processImage,
  removeDuplicateImages,
  removeDuplicateTextures,
  removeDuplicateMaterials,
  removeDuplicateGeometries,
  reattachObjectUUID,
  removeUnused,
  removeInvisible,
  removeDuplicateObjects,
  removeUserData,
} from './helper/optimize'
import { setIgnoreName } from './helper/utils'
import { exportJSON } from './helper/export'
import { isUUID } from './helper/uuid'
import { findUUIDUsage } from './helper/usage'
import { traversal } from './helper/traversal'

const DEFAULT_CONFIG = {
  ignoreName: true,
  toJPG: true,
  resizeImage: true,
  removeInvisible: true,
  removeObjects: true,
  removeUserData: true,
  separateImages: false,
}

export default {
  name: 'app',
  data() {
    return {
      files: [],
      logs: [],
      step: 0,
      config: { ...DEFAULT_CONFIG },
      searchUUID: '',
      searchResult: '',
      rankResult: [],
      traceKeyword: '',
      traceResult: [],
    }
  },
  computed: {
    s2Visible() {
      return !!this.files.length
    },
    s3Visible() {
      return this.s2Visible && this.step >= 3
    },
    s4Visible() {
      return this.s3Visible && this.step >= 4
    },
  },
  methods: {
    reset() {
      this.logs = []
      this.config = { ...DEFAULT_CONFIG }
    },
    fileChange(e) {
      this.files = [...e.target.files]
      this.step = 1
      this.json = null
    },
    log(message) {
      this.logs.push(message)
    },
    fileCheck() {
      // empty check
      if (!this.files.length) return alert('Plase choose files at STEP 1')

      this.log(
        `${this.files.length} file${this.files.length > 1 ? 's' : ''} detected`
      )

      // file format check
      if (!this.files.every((f) => f.type === 'application/json'))
        return alert('Only json files are accepted')

      return true
    },
    async loadFile() {
      this.log(`loading`)

      const jsons = await readJSONFiles(this.files)

      // content format check, to ensure files are threejs editor exported jsons
      if (!jsons.every((f) => f.metadata))
        return alert(
          'Please choose valid json files exported by threejs editor'
        )

      this.log(`load complete`)

      // use scene when from publish
      this.jsons = jsons.map((f) => (f.metadata.type === 'App' ? f.scene : f))
    },
    async analyse() {
      this.reset()

      if (!this.fileCheck()) return

      await this.loadFile()

      const jsons = this.jsons

      this.json = jsons[0]

      if (jsons.length > 1) {
        this.log(`merging files`)

        this.json = await mergeJSONS(
          jsons,
          this.files.map((f) => f.name.slice(0, -5))
        )

        this.log(`merging complete`)
      }

      this.step = 3
    },
    async optimize() {
      const scene = this.json
      const config = this.config

      const uuidMap = new Map()

      let count = 0

      setIgnoreName(config.ignoreName)

      const images = scene.images || []

      this.log('removing duplicate images')
      count = await removeDuplicateImages(images, uuidMap)
      this.log(`${count} image${count > 1 ? 's were' : ' was'} removed`)

      this.log('processing images')
      this.log('0 image was processed')
      count = 0
      for (let i = 0; i < images.length; i++) {
        const result = await processImage(
          images[i],
          config.toJPG,
          config.resizeImage
        )

        if (result) {
          count++
          this.logs.pop()
          this.log(`${count} image${count > 1 ? 's were' : ' was'} processed`)
        }
      }

      this.log('removing duplicate textures')
      count = await removeDuplicateTextures(scene.textures || [], uuidMap)
      this.log(`${count} texture${count > 1 ? 's were' : ' was'} removed`)

      this.log('removing duplicate materials')
      count = await removeDuplicateMaterials(scene.materials, uuidMap)
      this.log(`${count} material${count > 1 ? 's were' : ' was'} removed`)

      this.log('removing duplicate geometries')
      count = await removeDuplicateGeometries(scene.geometries, uuidMap)
      this.log(`${count} geometr${count > 1 ? 'ies were' : 'y was'} removed`)

      this.log('reattach object attached uuids')
      count = await reattachObjectUUID(scene.object, uuidMap)
      this.log(`${count} object${count > 1 ? 's were' : ' was'} reattached`)

      if (config.removeInvisible) {
        this.log('removing invisible objects')
        count = await removeInvisible(scene.object)
        this.log(`${count} object${count > 1 ? 's were' : ' was'} removed`)
      }

      if (config.removeObjects) {
        this.log('removing duplicate objects')
        count = await removeDuplicateObjects(scene.object)
        this.log(`${count} object${count > 1 ? 's were' : ' was'} removed`)
      }

      this.log('removing unused resources')
      count = await removeUnused(scene)
      this.log(
        `${count} unused resource${count > 1 ? 's were' : ' was'} removed`
      )

      if (config.removeUserData) {
        this.log('removing userData')
        count = await removeUserData(scene)
        this.log(`${count} userData was removed`)
      }

      this.step = 4
    },
    download() {
      exportJSON(this.json, this.files[0].name.slice(0, -5))
    },
    search() {
      if (!isUUID(this.searchUUID)) return alert('Please input a valid uuid')

      if (!this.json) return alert('Please analyse a json in optimizer first')
      if (this.files.length > 1)
        return alert('Only support search in one json file')

      this.searchResult = findUUIDUsage(this.json, this.searchUUID)
    },
    rank() {
      // only search geometry and image
      if (!this.json) {
        alert('Please analyse a json in optimizer first')
        return
      }

      const scene = this.json

      const res = []
      if (scene.images) {
        scene.images.forEach((img) =>
          res.push({
            type: 'image',
            uuid: img.uuid,
            len: JSON.stringify(img).length,
          })
        )
      }

      if (scene.geometries) {
        scene.geometries.forEach((geo) =>
          res.push({
            type: 'geometry',
            uuid: geo.uuid,
            len: JSON.stringify(geo).length,
          })
        )
      }

      const ONE_KB = 1024
      const ONE_MB = ONE_KB ** 2

      function getOwnerInfo(item) {
        if (item.type === 'geometry') {
          let mesh
          traversal(
            scene.object,
            (val, key, obj) => obj.geometry === item.uuid && (mesh = obj)
          )

          return `Mesh: <em>${mesh.name}</em> (${mesh.uuid})`
        }

        if (item.type === 'image') {
          const texture = scene.textures.find((t) => t.image === item.uuid)

          let textureType
          const material = scene.materials.find((m) =>
            Object.entries(m).some(
              ([key, val]) => val === texture.uuid && (textureType = key)
            )
          )

          let mesh
          traversal(
            scene.object,
            (val, key, obj) =>
              obj.material &&
              (Array.isArray(obj.material)
                ? obj.material.includes(material.uuid)
                : obj.material === material.uuid) &&
              (mesh = obj)
          )

          return `Mesh: <em>${mesh.name}</em> (${mesh.uuid})<br>Material: <em>${material.name}</em> (${material.uuid})<br>MapType: <em>${textureType}</em> (${texture.uuid})`
        }
      }

      this.rankResult = res
        .sort((a, b) => b.len - a.len)
        .filter((item) => item.len > ONE_MB / 2)

      this.rankResult.forEach((item) => {
        item.size =
          item.len > ONE_MB
            ? `${(item.len / ONE_MB).toFixed(2)} MB`
            : `${(item.len / ONE_KB).toFixed(2)} KB`

        item.owner = getOwnerInfo(item)
      })
    },
    trace() {
      if (!this.traceKeyword) return alert('Please input a valid uuid or name')
      if (!this.json) return alert('Please analyse a json in optimizer first')
      if (this.files.length > 1)
        return alert('Only support trace in one json file')

      const keyword = this.traceKeyword.trim()
      const isUuid = isUUID(keyword)

      let mesh

      const object = JSON.parse(JSON.stringify(this.json.object))
      traversal(object, (val, key, obj) => {
        // add parent reference for object
        if (obj.children) obj.children.forEach((c) => (c.parent = obj))
        if (keyword === (isUuid ? obj.uuid : obj.name)) mesh = obj
      })

      const res = []
      while (mesh) {
        res.push({ name: mesh.name, uuid: mesh.uuid })
        mesh = mesh.parent
      }

      this.traceResult = res.reverse()
    },
  },
}
