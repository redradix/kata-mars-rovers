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
})
