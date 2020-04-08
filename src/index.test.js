const move = require('./index')

describe('Mars Rovers', () => {
  it('When facing north and moving fordward, increase the y coord (1)', () => {
    expect(move([1, 1, 'N'], 7, 'f')).toEqual([1, 2, 'N'])
  })

  it('When facing north and moving fordward, increase the y coord (2)', () => {
    expect(move([2, 2, 'N'], 7, 'f')).toEqual([2, 3, 'N'])
  })

  it('When facing east and moving fordward, increase the x coord (1)', () => {
    expect(move([1, 1, 'E'], 7, 'f')).toEqual([2, 1, 'E'])
  })

  it('When facing east and moving fordward, increase the x coord (2)', () => {
    expect(move([2, 2, 'E'], 7, 'f')).toEqual([3, 2, 'E'])
  })

  it('When facing south and moving fordward, decrease the y coord', () => {
    expect(move([1, 1, 'S'], 7, 'f')).toEqual([1, 0, 'S'])
  })

  it('When facing west and moving fordward, increase the y coord', () => {
    expect(move([1, 1, 'W'], 7, 'f')).toEqual([1, 2, 'W'])
  })

})