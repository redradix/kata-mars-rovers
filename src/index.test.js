const { createRoverCommander } = require('./index')

describe('Mars Rovers', () => {
  test('faces the initial facing when no command is given', () => {
    const expected = 'N'
    const roverCommander = createRoverCommander('N')

    const result = roverCommander('').facing

    expect(result).toBe(expected)
  })
})
