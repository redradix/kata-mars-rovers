const { createRoverCommander } = require('./index')

describe('Mars Rovers', () => {
  const exampleGridSize = [10, 10]
  const exampleInitialPosition = [0, 0]
  const exampleFacing = 'S'

  test('faces the initial facing when no command is given', () => {
    const expectedFacing = [ 'N', 'E', 'S', 'W' ]

    const roverCommanders = expectedFacing
      .map((direction) => createRoverCommander(
        exampleGridSize,
        exampleInitialPosition,
        direction,
      ))

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
      .map((position) => createRoverCommander(
        exampleGridSize,
        position,
        exampleFacing,
      ))

    roverCommanders.forEach((roverCommander, i) => {
      const { position } = roverCommander('')

      expect(position).toBe(expectedPosition[i])
    })
  })

  test('throws an error when initial position is not in grid size', () => {
    const gridSize = [5, 5]
    const initialPosition = [10, 10]

    expect(() => createRoverCommander(
      gridSize,
      initialPosition,
      exampleFacing,
    )).toThrow()
  })
})
