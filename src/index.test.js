const { createRoverCommander } = require('./index')

describe('Mars Rovers', () => {
  test('faces the initial facing when no command is given', () => {
    const expectedFacing = [ 'N', 'E', 'S', 'W' ]

    const roverCommanders = expectedFacing
      .map((direction) => createRoverCommander([0, 0], direction))

    roverCommanders.forEach((roverCommander, i) => {
      const { facing } = roverCommander('')

      expect(facing).toBe(expectedFacing[i])
    })
  })

  test('stays in the initial position when no command is given', () => {
    const expectedPosition = [
      [0, 0],
      [5, 5],
    ]

    const roverCommanders = expectedPosition
      .map((position) => createRoverCommander(position, 'S'))

    roverCommanders.forEach((roverCommander, i) => {
      const { position } = roverCommander('')

      expect(position).toBe(expectedPosition[i])
    })
  })
})
