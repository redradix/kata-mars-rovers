const { rover } = require('./index')
describe('Mars Rovers', () => {
  const gridSize = [3,3]
  
  describe('same position', () => {
    it('stays in the same position for an empty commands argument', () => {
      const initialPosition = {position: [1,1], orientation: 'W'}
      const command = ''
      
      const endPosition = rover(initialPosition, gridSize, command)

      expect(endPosition).toEqual(initialPosition)
    })

    it('stays in the same position moving outside the grid', () => {
      const initialPosition = {position: [2,2], orientation: 'N'}
      const command = 'm'
      
      const endPosition = rover(initialPosition, gridSize, command)

      expect(endPosition).toEqual(initialPosition)
    })

    it('stays in the same position moving outside the grid', () => {
      const initialPosition = {position: [2,2], orientation: 'N'}
      const command = 'l'
      
      const endPosition = rover(initialPosition, gridSize, command)

      expect(endPosition).toEqual({ position: [2, 2], orientation: 'W' })
    })
  })
    
  describe('advance', () => {
    it('advances 1 position when receiving `m`', () => {
      const pos = { position: [0,0], orientation: 'N'}
      const command = 'm'
      const endPosition = rover(pos, gridSize, command)
      expect(endPosition).toEqual({
        position: [0,1],
        orientation: 'N'
      })
    })

  })

  describe('turning', () => {
    describe('left', () => {
      [
        { start: { position: [0, 0], orientation: 'N' }, command: 'l', end: { position: [0, 0], orientation: 'W' }},
        { start: { position: [0, 0], orientation: 'W' }, command: 'l', end: { position: [0, 0], orientation: 'S' }},
        { start: { position: [0, 0], orientation: 'S' }, command: 'l', end: { position: [0, 0], orientation: 'E' }},
        { start: { position: [0, 0], orientation: 'E' }, command: 'l', end: { position: [0, 0], orientation: 'N' }}
      ].forEach(sample => {
        it(`faces ${sample.end.orientation} when facing ${sample.start.orientation}`, () => {
          const pos = sample.start
          const endPosition = rover(pos, gridSize, sample.command)
          expect(endPosition).toEqual(sample.end)
        })
      })
    })

    describe('right', () => {
      [
        { start: { position: [0, 0], orientation: 'N' }, command: 'r', end: { position: [0, 0], orientation: 'E' }},
        { start: { position: [0, 0], orientation: 'W' }, command: 'r', end: { position: [0, 0], orientation: 'N' }},
        { start: { position: [0, 0], orientation: 'S' }, command: 'r', end: { position: [0, 0], orientation: 'W' }},
        { start: { position: [0, 0], orientation: 'E' }, command: 'r', end: { position: [0, 0], orientation: 'S' }}
      ].forEach(sample => {
        it(`faces ${sample.end.orientation} when facing ${sample.start.orientation}`, () => {
          const pos = sample.start
          const endPosition = rover(pos, gridSize, sample.command)
          expect(endPosition).toEqual(sample.end)
        })
      })
    })

  })

  describe('multiple commands', () => {
    it('moves two positions for mm command', ()=>{
      const initialPosition = {position: [0, 0], orientation: 'E'}
      const command = 'mm'
      
      const endPosition = rover(initialPosition, gridSize, command)

      expect(endPosition).toEqual({position: [2, 0], orientation: 'E'})
    })
  })
})