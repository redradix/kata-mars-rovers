const { createRoverCommander, DIRECTIONS, COMMANDS } = require('./index')
const { NORTH, EAST, SOUTH, WEST } = DIRECTIONS
const { LEFT, RIGHT, FORWARD, BACKWARD } = COMMANDS

describe('Mars Rovers', () => {
  const exampleGridSize = [10, 10]
  const exampleInitialPosition = [0, 0]
  const exampleFacing = SOUTH
  const NO_COMMAND = []

  test('faces the initial facing when no command is given', () => {
    const expectedFacing = Object.values(DIRECTIONS)

    const roverCommanders = expectedFacing
      .map((direction) => createRoverCommander(
        exampleGridSize,
        exampleInitialPosition,
        direction,
      ))

    roverCommanders.forEach((roverCommander, i) => {
      const { facing } = roverCommander(NO_COMMAND)

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
      const { position } = roverCommander(NO_COMMAND)

      expect(position).toEqual(expectedPosition[i])
    })
  })

  Array.of(
    { initialPosition: [-10,  0], text: 'has a negative row' },
    { initialPosition: [  0,-10], text: 'has a negative column' },
    { initialPosition: [ 10,  0], text: 'is greater than grid height' },
    { initialPosition: [  0, 10], text: 'is greater than grid width' },
  ).forEach(({ initialPosition, text }) => {
    test(`throws an error when initial position ${ text }`, () => {
      expect(() => createRoverCommander(
        [5, 5],
        initialPosition,
        SOUTH,
      )).toThrow()
    })
  })

  test('moves forward to the south', () => {
    const commands = [ FORWARD ]
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
    const commands = [ FORWARD ]
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
    const commands = [ FORWARD ]
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
    const commands = [ FORWARD ]
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
    const commands = [ BACKWARD ]
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
    const commands = [ BACKWARD ]
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
    const commands = [ BACKWARD ]
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
    const commands = [ BACKWARD ]
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
    const commands = [ LEFT ]
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
    const commands = [ RIGHT ]
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

  test('turns right and then moves forward', () => {
    const commands = [ RIGHT, FORWARD ]
    const initialFacing =  EAST
    const expectedFacing = SOUTH
    const initialPosition = [0, 0]
    const expectedPosition = [0, 1]

    const roverCommander = createRoverCommander(
      exampleGridSize,
      initialPosition,
      initialFacing,
    )

    const result = roverCommander(commands)

    expect(result).toEqual({
      facing: expectedFacing,
      position: expectedPosition,
    })
  })

  test('takes a small walk, turning left and right and moving forwards and backwards', () => {
    const commands = [
      LEFT, FORWARD,
      RIGHT, FORWARD,
      RIGHT, BACKWARD,
      LEFT, BACKWARD,
    ]
    const initialFacing = SOUTH
    const initialPosition = [0, 0]
    const expectedFacing = SOUTH
    const expectedPosition = [2, 0]

    const roverCommander = createRoverCommander(
      exampleGridSize,
      initialPosition,
      initialFacing,
    )

    const result = roverCommander(commands)

    expect(result).toEqual({
      facing: expectedFacing,
      position: expectedPosition,
    })
  })
})
