const move = require('./index')

describe('Mars Rovers', () => {
  it('When facing north and moving fordward, increase the y coord (1)', () => {
    expect(move([1, 1, 'N'], 'f')).toEqual([1, 2, 'N'])
    expect(move([2, 2, 'N'], 'f')).toEqual([2, 3, 'N'])
  })

  it('When facing east and moving fordward, increase the x coord (1)', () => {
    expect(move([1, 1, 'E'], 'f')).toEqual([2, 1, 'E'])
    expect(move([2, 2, 'E'], 'f')).toEqual([3, 2, 'E'])
  })

  it('When facing south and moving fordward, decrease the y coord (1)', () => {
    expect(move([1, 1, 'S'], 'f')).toEqual([1, 0, 'S'])
    expect(move([2, 2, 'S'], 'f')).toEqual([2, 1, 'S'])
  })

  it('When facing west and moving fordward, decrease the x coord (1)', () => {
    expect(move([1, 1, 'W'], 'f')).toEqual([0, 1, 'W'])
    expect(move([2, 2, 'W'], 'f')).toEqual([1, 2, 'W'])
  })

})