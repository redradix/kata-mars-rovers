const Rover = require('./index')

describe('Mars Rovers', () => {
  const initialParams = {
    startingPoint: [0, 0],
    direction: 'N',
    gridSize: [10, 10],
  }

  it('turns right', () => {
    const rover = new Rover(initialParams)
    rover.runCommands(['r'])
    expect(rover.direction).toEqual('E')
  })
  it('turns right and left several times', () => {
    const rover = new Rover(initialParams)
    rover.runCommands(['r', 'r', 'r', 'l'])
    expect(rover.direction).toEqual('S')
  })

  it('moves forward looking to the east', () => {
    const rover = new Rover({ ...initialParams, direction: 'E' })
    rover.runCommands(['f'])
    expect(rover.position).toEqual([1, 0])
  })
  it('moves backward looking to the east', () => {
    const rover = new Rover({
      ...initialParams,
      direction: 'E',
      startingPoint: [1, 0],
    })
    rover.runCommands(['b'])
    expect(rover.position).toEqual([0, 0])
  })
  it('moves forward looking to the west', () => {
    const rover = new Rover({
      ...initialParams,
      direction: 'W',
      startingPoint: [1, 0],
    })
    rover.runCommands(['f'])
    expect(rover.position).toEqual([0, 0])
  })
  it('moves backward looking to the west', () => {
    const rover = new Rover({ ...initialParams, direction: 'W' })
    rover.runCommands(['b'])
    expect(rover.position).toEqual([1, 0])
  })

  it('moves forward looking to the north', () => {
    const rover = new Rover({
      ...initialParams,
      direction: 'N',
      startingPoint: [0, 1],
    })
    rover.runCommands(['f'])
    expect(rover.position).toEqual([0, 0])
  })
  it('moves backward looking to the north', () => {
    const rover = new Rover({ ...initialParams, direction: 'N' })
    rover.runCommands(['b'])
    expect(rover.position).toEqual([0, 1])
  })
})
