const { createRoverCommander, DIRECTIONS } = require('./index')
const { NORTH, EAST, SOUTH, WEST } = DIRECTIONS

describe('Mars Rovers', () => {
  const exampleGridSize = [10, 10]
  const exampleInitialPosition = [0, 0]
  const exampleFacing = SOUTH

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

      expect(position).toEqual(expectedPosition[i])
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
    const facing = SOUTH
    const initialPosition = [0, 0]
    const expectedPosition = [0, 1]

    const roverCommander = createRoverCommander(
      exampleGridSize,
      initialPosition,
      facing,
    )
    const { position } = roverCommander(commands)

    expect(position).toEqual(expectedPosition)
  })

  test('moves forward to the north', () => {
    const commands = 'f'
    const facing = NORTH
    const initialPosition = [0, 1]
    const expectedPosition = [0, 0]

    const roverCommander = createRoverCommander(
      exampleGridSize,
      initialPosition,
      facing,
    )
    const { position } = roverCommander(commands)

    expect(position).toEqual(expectedPosition)
  })

  test('moves forward to the east', () => {
    const commands = 'f'
    const facing = EAST
    const initialPosition = [0, 0]
    const expectedPosition = [1, 0]

    const roverCommander = createRoverCommander(
      exampleGridSize,
      initialPosition,
      facing,
    )
    const { position } = roverCommander(commands)

    expect(position).toEqual(expectedPosition)
  })

  test('moves forward to the west', () => {
    const commands = 'f'
    const facing = WEST
    const initialPosition = [1, 0]
    const expectedPosition = [0, 0]

    const roverCommander = createRoverCommander(
      exampleGridSize,
      initialPosition,
      facing,
    )
    const { position } = roverCommander(commands)

    expect(position).toEqual(expectedPosition)
  })

  test('moves backwards facing south', () => {
    const commands = 'b'
    const facing = SOUTH
    const initialPosition = [0, 1]
    const expectedPosition = [0, 0]

    const roverCommander = createRoverCommander(
      exampleGridSize,
      initialPosition,
      facing,
    )
    const { position } = roverCommander(commands)

    expect(position).toEqual(expectedPosition)
  })

  test('moves backwards facing north', () => {
    const commands = 'b'
    const facing = NORTH
    const initialPosition = [0, 0]
    const expectedPosition = [0, 1]

    const roverCommander = createRoverCommander(
      exampleGridSize,
      initialPosition,
      facing,
    )
    const { position } = roverCommander(commands)

    expect(position).toEqual(expectedPosition)
  })

  test('moves backwards facing east', () => {
    const commands = 'b'
    const facing = EAST
    const initialPosition = [1, 0]
    const expectedPosition = [0, 0]

    const roverCommander = createRoverCommander(
      exampleGridSize,
      initialPosition,
      facing,
    )
    const { position } = roverCommander(commands)

    expect(position).toEqual(expectedPosition)
  })

  test('moves backwards facing west', () => {
    const commands = 'b'
    const facing = WEST
    const initialPosition = [0, 0]
    const expectedPosition = [1, 0]

    const roverCommander = createRoverCommander(
      exampleGridSize,
      initialPosition,
      facing,
    )
    const { position } = roverCommander(commands)

    expect(position).toEqual(expectedPosition)
  })

  test('turns left for every initial facing', () => {
    const commands = 'l'
    const initialFacings =  [ NORTH, WEST , SOUTH, EAST  ]
    const expectedFacings = [ WEST , SOUTH, EAST , NORTH ]

    const roverCommanders = initialFacings
      .map((facing) => createRoverCommander(
        exampleGridSize,
        exampleInitialPosition,
        facing,
      ))

    roverCommanders.forEach((roverCommander, i) => {
      const { facing } = roverCommander(commands)

      expect(facing).toBe(expectedFacings[i])
    })
  })

  test('turns right for every initial facing', () => {
    const commands = 'r'
    const initialFacings =  [ NORTH, EAST , SOUTH, WEST  ]
    const expectedFacings = [ EAST , SOUTH, WEST , NORTH ]

    const roverCommanders = initialFacings
      .map((facing) => createRoverCommander(
        exampleGridSize,
        exampleInitialPosition,
        facing,
      ))

    roverCommanders.forEach((roverCommander, i) => {
      const { facing } = roverCommander(commands)

      expect(facing).toBe(expectedFacings[i])
    })
  })
})
