const { createRoverCommander } = require('./index')

describe('Mars Rovers', () => {
  test('faces the initial facing when no command is given', () => {
    const expected = [ 'N', 'E', 'S', 'W' ]

    const roverCommanders = expected
      .map((direction) => createRoverCommander(direction))

    roverCommanders.forEach((roverCommander, i) => {
      const { facing } = roverCommander('')

      expect(facing).toBe(expected[i])
    })
  })
})
