const MarsApi = require('./index')
const generators = require('./generators')

describe('Mars Rovers', () => {
    it("We don't receive commands so we expect to stay in the same place", () => {
        const initialPosition = generators.generateInitalPositionAndFacing()

        const marsRoversPosition = MarsApi.executeCommands(initialPosition, generators.generateGridSize(), [])

        expect(marsRoversPosition.position).toStrictEqual(initialPosition)
    })

    it("We receive the command to turn right while facing to the north so we expect to stay in the same place facing the east", () => {
      const initialCoordinates = generators.generateInitalPosition()
      const initialPosition = generators.generateInitalPositionAndFacing(initialCoordinates, MarsApi.directions.NORTH)

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generators.generateGridSize(), [MarsApi.commands.TURN_RIGHT])

      expect(marsRoversPosition.position).toStrictEqual([...initialCoordinates, MarsApi.directions.EAST])
    })

    it("We receive the command to turn left while facing to the north so we expect to stay in the same place facing the west", () => {
      const initialCoordinates = generators.generateInitalPosition()
      const initialPosition = generators.generateInitalPositionAndFacing(initialCoordinates, MarsApi.directions.NORTH)

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generators.generateGridSize(), [MarsApi.commands.TURN_LEFT])

      expect(marsRoversPosition.position).toStrictEqual([...initialCoordinates, MarsApi.directions.WEST])
    })

    it("We receive the command to turn right while facing to the south so we expect to stay in the same place facing the west", () => {
      const initialCoordinates = generators.generateInitalPosition()
      const initialPosition = generators.generateInitalPositionAndFacing(initialCoordinates, MarsApi.directions.SOUTH)

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generators.generateGridSize(), [MarsApi.commands.TURN_RIGHT])

      expect(marsRoversPosition.position).toStrictEqual([...initialCoordinates, MarsApi.directions.WEST])
    })

    it("We receive the command to turn left while facing to the south so we expect to stay in the same place facing the east", () => {
      const initialCoordinates = generators.generateInitalPosition()
      const initialPosition = generators.generateInitalPositionAndFacing(initialCoordinates, MarsApi.directions.SOUTH)

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generators.generateGridSize(), [MarsApi.commands.TURN_LEFT])

      expect(marsRoversPosition.position).toStrictEqual([...initialCoordinates, MarsApi.directions.EAST])
    })

    it("We receive the command to turn right while facing to the west so we expect to stay in the same place and face to the north", () => {
      const initialCoordinates = generators.generateInitalPosition()
      const initialPosition = generators.generateInitalPositionAndFacing(initialCoordinates, MarsApi.directions.WEST)

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generators.generateGridSize(), [MarsApi.commands.TURN_RIGHT])

      expect(marsRoversPosition.position).toStrictEqual([...initialCoordinates, MarsApi.directions.NORTH])
    })

    it("We receive the command to turn left while facing to the west so we expect to stay in the same place facing the south", () => {
      const initialCoordinates = generators.generateInitalPosition()
      const initialPosition = generators.generateInitalPositionAndFacing(initialCoordinates, MarsApi.directions.WEST)

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generators.generateGridSize(), [MarsApi.commands.TURN_LEFT])

      expect(marsRoversPosition.position).toStrictEqual([...initialCoordinates, MarsApi.directions.SOUTH])
    })

    it("We receive the command to turn right while facing to the east so we expect to stay in the same place and face to the south", () => {
      const initialCoordinates = generators.generateInitalPosition()
      const initialPosition = generators.generateInitalPositionAndFacing(initialCoordinates, MarsApi.directions.EAST)

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generators.generateGridSize(), [MarsApi.commands.TURN_RIGHT])

      expect(marsRoversPosition.position).toStrictEqual([...initialCoordinates, MarsApi.directions.SOUTH])
    })

    it("We receive the command to turn left while facing to the east so we expect to stay in the same place facing the north", () => {
      const initialCoordinates = generators.generateInitalPosition()
      const initialPosition = generators.generateInitalPositionAndFacing(initialCoordinates, MarsApi.directions.EAST)

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generators.generateGridSize(), [MarsApi.commands.TURN_LEFT])

      expect(marsRoversPosition.position).toStrictEqual([...initialCoordinates, MarsApi.directions.NORTH])
    })

    it("We receive the command to turn right while face to an unknown direction so we expect to stay in the same place and face to the same direction", () => {
      const initialCoordinates = generators.generateInitalPosition()
      const initialPosition = generators.generateInitalPositionAndFacing(initialCoordinates, "X")

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generators.generateGridSize(), [MarsApi.commands.TURN_RIGHT])

      expect(marsRoversPosition.position).toStrictEqual([...initialCoordinates, "X"])
    })

    it("We receive the command to turn left while facing to an unknow direction so we expect to stay in the same place facing to the same direction", () => {
      const initialCoordinates = generators.generateInitalPosition()
      const initialPosition = generators.generateInitalPositionAndFacing(initialCoordinates, "X")

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generators.generateGridSize(), [MarsApi.commands.TURN_LEFT])

      expect(marsRoversPosition.position).toStrictEqual([...initialCoordinates, "X"])
    })

})