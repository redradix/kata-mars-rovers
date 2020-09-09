const { createRoverCommander } = require('./index')

describe('Mars Rovers', () => {
  test('faces the initial facing when no command is given', () => {
    const expected = [ 'N', 'E', 'S', 'W' ]

    const roverCommanders = expected
      .map((direction) => createRoverCommander([0, 0], direction))

    roverCommanders.forEach((roverCommander, i) => {
      const { facing } = roverCommander('')

      expect(facing).toBe(expected[i])
    })
  })

  test('stays in the initial position when no command is given', () => {
    const expected = [
      [0, 0],
      [5, 5],
    ]

    const roverCommanders = expected
      .map((position) => createRoverCommander(position, 'S'))

    roverCommanders.forEach((roverCommander, i) => {
      const { position } = roverCommander('')

      expect(position).toBe(expected[i])
    })
  })
})
