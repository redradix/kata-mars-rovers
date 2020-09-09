const { createRoverCommander, DIRECTIONS } = require('./index')

describe('Mars Rovers', () => {
  const exampleGridSize = [10, 10]
  const exampleInitialPosition = [0, 0]
  const exampleFacing = DIRECTIONS.SOUTH

  test('faces the initial facing when no command is given', () => {
    const expectedFacing = Object.values(DIRECTIONS)

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

  test('moves forward to the south', () => {
    const commands = 'f'
    const facing = DIRECTIONS.SOUTH
    const initialPosition = [0, 0]
    const expectedPosition = [0, 1]

    const roverCommander = createRoverCommander(
      exampleGridSize,
      initialPosition,
      facing,
    )
    const { position } = roverCommander(commands)

    expect(position).toBe(expectedPosition)
  })
})
