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
    const rover = new Rover({ ...initialParams, startingPoint: [0, 1] })
    rover.runCommands(['f'])
    expect(rover.position).toEqual([0, 0])
  })
  it('moves backward looking to the north', () => {
    const rover = new Rover(initialParams)
    rover.runCommands(['b'])
    expect(rover.position).toEqual([0, 1])
  })
  it('moves forward looking to the south', () => {
    const rover = new Rover({ ...initialParams, direction: 'S' })
    rover.runCommands(['f'])
    expect(rover.position).toEqual([0, 1])
  })
  it('moves backward looking to the south', () => {
    const rover = new Rover({
      ...initialParams,
      direction: 'S',
      startingPoint: [0, 1],
    })
    rover.runCommands(['b'])
    expect(rover.position).toEqual([0, 0])
  })

  it('throws an error if it goes out of bounds to the north', () => {
    const rover = new Rover(initialParams)
    expect(() => rover.runCommands(['f'])).toThrow('ERR_MOVING_OUT_OF_BOUNDS')
  })
  it('throws an error if it goes out of bounds to the south', () => {
    const rover = new Rover({ ...initialParams, startingPoint: [0, 10] })
    expect(() => rover.runCommands(['b'])).toThrow('ERR_MOVING_OUT_OF_BOUNDS')
  })
  it('throws an error if it goes out of bounds to the east', () => {
    const rover = new Rover({
      ...initialParams,
      direction: 'E',
      startingPoint: [10, 0],
    })
    expect(() => rover.runCommands(['f'])).toThrow('ERR_MOVING_OUT_OF_BOUNDS')
  })
  it('throws an error if it goes out of bounds to the west', () => {
    const rover = new Rover({ ...initialParams, direction: 'W' })
    expect(() => rover.runCommands(['f'])).toThrow('ERR_MOVING_OUT_OF_BOUNDS')
  })

  it('throws an error if the starting point is out of bounds', () => {
    expect(() => {
      const rover = new Rover({ ...initialParams, startingPoint: [0, 11] })
    }).toThrow('ERR_STARTING_POINT_OUT_OF_BOUNDS')
  })
  it('throws an error if the starting point is not an array of numbers', () => {
    expect(() => {
      const rover = new Rover({ ...initialParams, startingPoint: ['a', 'b'] })
    }).toThrow('ERR_STARTING_POINT_INVALID')
  })
  it('throws an error if the grid size is not an array of numbers', () => {
    expect(() => {
      const rover = new Rover({ ...initialParams, gridSize: ['a', 'b'] })
    }).toThrow('ERR_GRID_SIZE_INVALID')
  })
})
