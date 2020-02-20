const MarsApi = require('./index')
const generators = require('./generators')

describe("Mars Rovers", () => {
    it("We don't receive commands so we expect to stay in the same place", () => {
      const initialPosition = generators.generateInitalPositionAndFacing()

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generators.generateGridSize(), [])

      expect(marsRoversPosition.position).toStrictEqual(initialPosition)
    })
    describe("Turn commands", () => {

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
    
    describe("Move commands", () => {
      it("We receive move forward command and facing the north, so we expect to move forward in the x axis and facing the north", () => {
        const [initialX, initialY] = generators.generateInitalPosition()
        const initialPosition = generators.generateInitalPositionAndFacing([initialX, initialY], MarsApi.directions.NORTH)

        const finalPosition = MarsApi.executeCommands(initialPosition, generators.generateGridSize(), ["F"])

        expect(finalPosition.position).toStrictEqual([initialX + 1, initialY, MarsApi.directions.NORTH])
      })

      it("We receive move forward command and facing the south, so we expect to move backward in the x axis and facing the south", () => {
        const [initialX, initialY] = generators.generateInitalPosition()
        const initialPosition = generators.generateInitalPositionAndFacing([initialX, initialY], MarsApi.directions.SOUTH)

        const finalPosition = MarsApi.executeCommands(initialPosition, generators.generateGridSize(), ["F"])

        expect(finalPosition.position).toStrictEqual([initialX - 1, initialY, MarsApi.directions.SOUTH])
      })

      it("We receive move forward command and facing the east, so we expect to move forward in the y axis and facing the east", () => {
        const [initialX, initialY] = generators.generateInitalPosition()
        const initialPosition = generators.generateInitalPositionAndFacing([initialX, initialY], MarsApi.directions.EAST)

        const finalPosition = MarsApi.executeCommands(initialPosition, generators.generateGridSize(), ["F"])

        expect(finalPosition.position).toStrictEqual([initialX, initialY + 1, MarsApi.directions.EAST])
      })

      it("We receive move forward command and facing the west, so we expect to move backward in the y axis and facing the west", () => {
        const [initialX, initialY] = generators.generateInitalPosition()
        const initialPosition = generators.generateInitalPositionAndFacing([initialX, initialY], MarsApi.directions.WEST)

        const finalPosition = MarsApi.executeCommands(initialPosition, generators.generateGridSize(), ["F"])

        expect(finalPosition.position).toStrictEqual([initialX, initialY - 1, MarsApi.directions.WEST])
      })
    })

})