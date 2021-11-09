const Rover = require('./index')

describe('Mars Rovers', () => {
  const initialParams = {
    startingPoint: [0, 0],
    direction: 'N',
    gridSize: [10, 10],
  }

  it('turn right', () => {
    const rover = new Rover(initialParams)
    rover.runCommands(['r'])
    expect(rover.direction).toEqual('E')
  })
  it('turn three times right and once left', () => {
    const rover = new Rover(initialParams)
    rover.runCommands(['r', 'r', 'r', 'l'])
    expect(rover.direction).toEqual('S')
  })

  it('move forward looking to the east', () => {
    const rover = new Rover(initialParams)
    rover.runCommands(['r', 'f'])
    expect(rover.position).toEqual([1, 0])
  })
  it('move backward looking to the west', () => {
    const rover = new Rover(initialParams)
    rover.runCommands(['l', 'b'])
    expect(rover.position).toEqual([1, 0])
  })

  it('move forward looking to the west', () => {
    const rover = new Rover(initialParams)
    rover.runCommands(['r', 'f', 'r', 'r', 'f'])
    expect(rover.position).toEqual([0, 0])
  })
  it('move backward looking to the east', () => {
    const rover = new Rover(initialParams)
    rover.runCommands(['r', 'f', 'b'])
    expect(rover.position).toEqual([0, 0])
  })
})
