import { expect } from 'chai'
import { removeDuplicateObjects } from '../../src/helper/optimize'
import { UNMOVED_MATRIX } from '../../src/helper/utils'

describe('optimize', () => {
  describe('remove duplicate objects', () => {
    it('remove when all parent elements are the same', async () => {
      const before = {
        uuid: 'B09849E7-1EF7-4292-8605-CEC82B4BB8CB',
        type: 'Scene',
        name: 'Scene',
        matrix: UNMOVED_MATRIX,
        children: [
          {
            uuid: '6BE858A4-C325-4CF9-90F8-B11D1345259E',
            type: 'Mesh',
            name: 'mesh1',
            matrix: UNMOVED_MATRIX,
            material: '8133381D-11B9-4B33-B636-CD8F9B5821AA',
          },
          {
            uuid: 'A59930B8-6AFA-4EB1-A18A-5085951D2F19',
            type: 'Group',
            matrix: UNMOVED_MATRIX,
            children: [
              {
                uuid: '9793C3BB-EA4C-4374-B98D-0207C860D831',
                type: 'Mesh',
                name: 'mesh2',
                matrix: UNMOVED_MATRIX,
                material: '8133381D-11B9-4B33-B636-CD8F9B5821AA',
              },
            ],
          },
        ],
      }

      const after = {
        uuid: 'B09849E7-1EF7-4292-8605-CEC82B4BB8CB',
        type: 'Scene',
        name: 'Scene',
        matrix: UNMOVED_MATRIX,
        children: [
          {
            uuid: '6BE858A4-C325-4CF9-90F8-B11D1345259E',
            type: 'Mesh',
            name: 'mesh1',
            matrix: UNMOVED_MATRIX,
            material: '8133381D-11B9-4B33-B636-CD8F9B5821AA',
          },
          {
            uuid: 'A59930B8-6AFA-4EB1-A18A-5085951D2F19',
            type: 'Group',
            matrix: UNMOVED_MATRIX,
            children: [],
          },
        ],
      }

      await removeDuplicateObjects(before)

      expect(before).to.deep.equal(after)
    })

    it('do not remove when all parent elements are not the same', async () => {
      const before = {
        uuid: 'B09849E7-1EF7-4292-8605-CEC82B4BB8CB',
        type: 'Scene',
        name: 'Scene',
        matrix: UNMOVED_MATRIX,
        children: [
          {
            uuid: '6BE858A4-C325-4CF9-90F8-B11D1345259E',
            type: 'Mesh',
            name: 'mesh1',
            matrix: UNMOVED_MATRIX,
            material: '8133381D-11B9-4B33-B636-CD8F9B5821AA',
          },
          {
            uuid: 'A59930B8-6AFA-4EB1-A18A-5085951D2F19',
            type: 'Group',
            matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1.2],
            children: [
              {
                uuid: '9793C3BB-EA4C-4374-B98D-0207C860D831',
                type: 'Mesh',
                name: 'mesh2',
                matrix: UNMOVED_MATRIX,
                material: '8133381D-11B9-4B33-B636-CD8F9B5821AA',
              },
            ],
          },
        ],
      }

      const after = JSON.parse(JSON.stringify(before))

      await removeDuplicateObjects(before)

      expect(before).to.deep.equal(after)
    })
  })
})
