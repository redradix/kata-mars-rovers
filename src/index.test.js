const move = require('./index')

describe('Mars Rovers', () => {
  it('When facing north and moving fordward, increases Y', () => {
    expect(move([1, 1, 'N'], 'f')).toEqual([1, 2, 'N'])
    expect(move([2, 2, 'N'], 'f')).toEqual([2, 3, 'N'])
  })

  it('When facing east and moving fordward, increases X', () => {
    expect(move([1, 1, 'E'], 'f')).toEqual([2, 1, 'E'])
    expect(move([2, 2, 'E'], 'f')).toEqual([3, 2, 'E'])
  })

  it('When facing south and moving fordward, decreases Y', () => {
    expect(move([1, 1, 'S'], 'f')).toEqual([1, 0, 'S'])
    expect(move([2, 2, 'S'], 'f')).toEqual([2, 1, 'S'])
  })

  it('When facing west and moving fordward, decreases X', () => {
    expect(move([1, 1, 'W'], 'f')).toEqual([0, 1, 'W'])
    expect(move([2, 2, 'W'], 'f')).toEqual([1, 2, 'W'])
  })

  it('When facing north and moving backward, decreases Y', () => {
    expect(move([1, 1, 'N'], 'b')).toEqual([1, 0, 'N'])
    expect(move([2, 2, 'N'], 'b')).toEqual([2, 1, 'N'])
  })

  it('When facing east and moving backward, decreases X', () => {
    expect(move([1, 1, 'E'], 'b')).toEqual([0, 1, 'E'])
    expect(move([2, 2, 'E'], 'b')).toEqual([1, 2, 'E'])
  })

  it('When facing south and moving backward, increases Y', () => {
    expect(move([1, 1, 'S'], 'b')).toEqual([1, 2, 'S'])
    expect(move([2, 2, 'S'], 'b')).toEqual([2, 3, 'S'])
  })

})