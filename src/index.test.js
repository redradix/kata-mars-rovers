const { createRoverCommander, DIRECTIONS, COMMANDS } = require('./index')
const { NORTH, EAST, SOUTH, WEST } = DIRECTIONS
const { LEFT, RIGHT, FORWARD, BACKWARD } = COMMANDS

describe('Mars Rovers', () => {
  const exampleGridSize = [10, 10]
  const exampleInitialPosition = [0, 0]
  const exampleFacing = SOUTH
  const NO_COMMAND = []

  Array.of(
    { initialFacing: NORTH, text: 'North' },
    { initialFacing: EAST , text: 'East' },
    { initialFacing: SOUTH, text: 'South' },
    { initialFacing: WEST , text: 'West' },
  ).forEach(({ initialFacing, text }) => {
    test(`faces the initial ${ text } facing when no command is given`, () => {
      const expectedFacing = initialFacing
      const executeCommands = createRoverCommander(
        [10, 10],
        [0, 0],
        initialFacing,
      )

      const { facing } = executeCommands(NO_COMMAND)

      expect(facing).toBe(expectedFacing)
    })
  })

  Array.of(
    { initialPosition: [0,0] },
    { initialPosition: [3,7] },
    { initialPosition: [9,9] },
  ).forEach(({ initialPosition }) => {
    test(`stays in the initial position (${ initialPosition}) when no command is given`, () => {
      const expectedPosition = initialPosition

      const executeCommands = createRoverCommander(
        [10, 10],
        initialPosition,
        SOUTH,
      )

      const { position } = executeCommands(NO_COMMAND)

      expect(position).toEqual(expectedPosition)
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

  Array.of(
    { facing: NORTH, expectedPosition: [2,1], text: 'North' },
    { facing: EAST , expectedPosition: [3,2], text: 'East' },
    { facing: SOUTH, expectedPosition: [2,3], text: 'South' },
    { facing: WEST , expectedPosition: [1,2], text: 'West' },
  ).forEach(({ facing, expectedPosition, text }) => {
    test(`moves forward to the ${ text }`, () => {
      const commands = [ FORWARD ]
      const initialPosition = [2, 2]
      const executeCommands = createRoverCommander(
        [5, 5],
        initialPosition,
        facing,
      )

      const { position } = executeCommands(commands)

      expect(position).toEqual(expectedPosition)
    })
  })

  Array.of(
    { facing: NORTH, expectedPosition: [2,3], text: 'North' },
    { facing: EAST , expectedPosition: [1,2], text: 'East' },
    { facing: SOUTH, expectedPosition: [2,1], text: 'South' },
    { facing: WEST , expectedPosition: [3,2], text: 'West' },
  ).forEach(({ facing, expectedPosition, text }) => {
    test(`moves backwards facing ${ text }`, () => {
      const commands = [ BACKWARD ]
      const initialPosition = [2, 2]
      const executeCommands = createRoverCommander(
        [5, 5],
        initialPosition,
        facing,
      )

      const { position } = executeCommands(commands)

      expect(position).toEqual(expectedPosition)
    })
  })

  Array.of(
    { initialFacing: NORTH, expectedFacing: WEST , text: 'North' },
    { initialFacing: WEST , expectedFacing: SOUTH, text: 'West' },
    { initialFacing: SOUTH, expectedFacing: EAST , text: 'South' },
    { initialFacing: EAST , expectedFacing: NORTH, text: 'West' },
  ).forEach(({ initialFacing, expectedFacing, text }) => {
    test(`turns left when facing ${ text }`, () => {
      const commands = [ LEFT ]
      const executeCommands = createRoverCommander(
        [1, 1],
        [0, 0],
        initialFacing,
      )

      const { facing } = executeCommands(commands)

      expect(facing).toBe(expectedFacing)
    })
  })

  Array.of(
    { initialFacing: NORTH, expectedFacing: EAST , text: 'North' },
    { initialFacing: WEST , expectedFacing: NORTH, text: 'West' },
    { initialFacing: SOUTH, expectedFacing: WEST , text: 'South' },
    { initialFacing: EAST , expectedFacing: SOUTH, text: 'West' },
  ).forEach(({ initialFacing, expectedFacing, text }) => {
    test(`turns right when facing ${ text }`, () => {
      const commands = [ RIGHT ]
      const executeCommands = createRoverCommander(
        [1, 1],
        [0, 0],
        initialFacing,
      )

      const { facing } = executeCommands(commands)

      expect(facing).toBe(expectedFacing)
    })
  })

  test('turns right and then moves forward', () => {
    const commands = [ RIGHT, FORWARD ]
    const initialFacing =  EAST
    const expectedFacing = SOUTH
    const initialPosition = [0, 0]
    const expectedPosition = [0, 1]

    const executeCommands = createRoverCommander(
      exampleGridSize,
      initialPosition,
      initialFacing,
    )

    const result = executeCommands(commands)

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

    const executeCommands = createRoverCommander(
      exampleGridSize,
      initialPosition,
      initialFacing,
    )

    const result = executeCommands(commands)

    expect(result).toEqual({
      facing: expectedFacing,
      position: expectedPosition,
    })
  })
})
