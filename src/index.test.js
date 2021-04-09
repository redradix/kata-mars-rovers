const executeCommands = require('./index')

describe('Mars Rovers', () => {
  it('move forward from 1,1,N returns 1,2,N', () => {
    const result = executeCommands([1, 1, 'N'], 'f')
    expect(result).toEqual([1, 2, 'N'])
  })

  it('move forward from 1,1,E returns 2,1,E', () => {
    const result = executeCommands([1, 1, 'E'], 'f')
    expect(result).toEqual([2, 1, 'E'])
  })

  it('move forward from 1,1,S returns 1,0,S', () => {
    const result = executeCommands([1, 1, 'S'], 'f')
    expect(result).toEqual([1, 0, 'S'])
  })

  it('move forward from 1,1,W returns 0,1,W', () => {
    const result = executeCommands([1, 1, 'W'], 'f')
    expect(result).toEqual([0, 1, 'W'])
  })

  it('throws error if unknown direction', () => {
    expect(() => {
      executeCommands([1, 1, 'X'], 'f')
    }).toThrow('Unknown direction')
  })

  it('rotate right from 1,1,N returns 1,1,E', () => {
    const result = executeCommands([1, 1, 'N'], 'r')
    expect(result).toEqual([1, 1, 'E'])
  })

  it('rotate right from 2,2,N returns 2,2,E', () => {
    const result = executeCommands([2, 2, 'N'], 'r')
    expect(result).toEqual([2, 2, 'E'])
  })

  it('rotate right from 1,1,E returns 1,1,S', () => {
    const result = executeCommands([1, 1, 'E'], 'r')
    expect(result).toEqual([1, 1, 'S'])
  })

  it('rotate right from 1,1,S returns 1,1,W', () => {
    const result = executeCommands([1, 1, 'S'], 'r')
    expect(result).toEqual([1, 1, 'W'])
  })

  it('rotate right from 1,1,W returns 1,1,N', () => {
    const result = executeCommands([1, 1, 'W'], 'r')
    expect(result).toEqual([1, 1, 'N'])
  })

})