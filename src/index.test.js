const { rover } = require('./index')
describe('Mars Rovers', () => {
  const gridSize = [3,3]
  const makePosition = (x,y,o) => ({
    position: [x,y],
    orientation: o
  })
  
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
      const position = makePosition(0,0,'N')
      const command = 'm'
      const endPosition = rover(position, gridSize, command)
      expect(endPosition).toEqual({
        position: [0,1],
        orientation: 'N'
      })
    })

  })

  describe('turning', () => {
    describe('left', () => {
      [
        { start: makePosition(0, 0, 'N'), command: 'l', end: makePosition(0, 0, 'W')},
        { start: makePosition(0, 0, 'W'), command: 'l', end: makePosition(0, 0, 'S')},
        { start: makePosition(0, 0, 'S'), command: 'l', end: makePosition(0, 0, 'E')},
        { start: makePosition(0, 0, 'E'), command: 'l', end: makePosition(0, 0, 'N')}
      ].forEach(sample => {
        it(`faces ${sample.end.orientation} when facing ${sample.start.orientation}`, () => {
          const position = sample.start
          const endPosition = rover(position, gridSize, sample.command)
          expect(endPosition).toEqual(sample.end)
        })
      })
    })

    describe('right', () => {
      [
        { start: makePosition(0, 0, 'N'), command: 'r', end: makePosition(0, 0, 'E')},
        { start: makePosition(0, 0, 'W'), command: 'r', end: makePosition(0, 0, 'N')},
        { start: makePosition(0, 0, 'S'), command: 'r', end: makePosition(0, 0, 'W')},
        { start: makePosition(0, 0, 'E'), command: 'r', end: makePosition(0, 0, 'S')}
      ].forEach(sample => {
        it(`faces ${sample.end.orientation} when facing ${sample.start.orientation}`, () => {
          const position = sample.start
          const endPosition = rover(position, gridSize, sample.command)
          expect(endPosition).toEqual(sample.end)
        })
      })
    })

  })

  describe('multiple commands', () => {
    it('moves two positions for mm command', ()=>{
      const initialPosition = makePosition(0, 0,'N')
      const command = 'mm'
      
      const endPosition = rover(initialPosition, gridSize, command)

      expect(endPosition).toEqual(makePosition(0, 2,'N'))
    })
  })
})