const MarsApi = require('./index')

const generateNumber = () => {
  return Math.floor(Math.random() * (10 - 1) + 1)
}

const generateGridSize = ({x, y} = {x: generateNumber(), y: generateNumber()}) => {
  return [x, y]
}

const generateFacing = () => {
  return ['N', 'S', 'E', 'W'][(generateNumber() % 4)]
}

const generateInitalPosition = ({x, y} = {x: generateNumber(), y: generateNumber()}) => {
  return [x, y]
}

const generateInitalPositionAndFacing = (initialPosition, initialFacing) => {
  return [...(initialPosition || generateInitalPosition()), initialFacing || generateFacing()]
}

describe('Mars Rovers', () => {
    it("We don't receive commands so we expect to stay in the same place", () => {
        const initialPosition = generateInitalPositionAndFacing()

        const marsRoversPosition = MarsApi.executeCommands(initialPosition, generateGridSize(), [])

        expect(marsRoversPosition.position).toStrictEqual(initialPosition)
    })

    it("We receive the command to turn right while facing to the north so we expect to stay in the same place facing the east", () => {
      const initialCoordinates = generateInitalPosition()
      const initialPosition = generateInitalPositionAndFacing(initialCoordinates, "N")

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generateGridSize(), ["R"])

      expect(marsRoversPosition.position).toStrictEqual([...initialCoordinates, "E"])
    })

    it("We receive the command to turn left while facing to the north so we expect to stay in the same place facing the west", () => {
      const initialCoordinates = generateInitalPosition()
      const initialPosition = generateInitalPositionAndFacing(initialCoordinates, "N")

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generateGridSize(), ["L"])

      expect(marsRoversPosition.position).toStrictEqual([...initialCoordinates, "W"])
    })

    it("We receive the command to turn right while facing to the south so we expect to stay in the same place facing the west", () => {
      const initialCoordinates = generateInitalPosition()
      const initialPosition = generateInitalPositionAndFacing(initialCoordinates, "S")

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generateGridSize(), ["R"])

      expect(marsRoversPosition.position).toStrictEqual([...initialCoordinates, "W"])
    })

    it("We receive the command to turn left while facing to the south so we expect to stay in the same place facing the east", () => {
      const initialCoordinates = generateInitalPosition()
      const initialPosition = generateInitalPositionAndFacing(initialCoordinates, "S")

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generateGridSize(), ["L"])

      expect(marsRoversPosition.position).toStrictEqual([...initialCoordinates, "E"])
    })

    it("We receive the command to turn right while facing to the west so we expect to stay in the same place and face to the north", () => {
      const initialCoordinates = generateInitalPosition()
      const initialPosition = generateInitalPositionAndFacing(initialCoordinates, "W")

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generateGridSize(), ["R"])

      expect(marsRoversPosition.position).toStrictEqual([...initialCoordinates, "N"])
    })

    it("We receive the command to turn left while facing to the west so we expect to stay in the same place facing the south", () => {
      const initialCoordinates = generateInitalPosition()
      const initialPosition = generateInitalPositionAndFacing(initialCoordinates, "W")

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generateGridSize(), ["L"])

      expect(marsRoversPosition.position).toStrictEqual([...initialCoordinates, "S"])
    })

    it("We receive the command to turn right while facing to the east so we expect to stay in the same place and face to the south", () => {
      const initialCoordinates = generateInitalPosition()
      const initialPosition = generateInitalPositionAndFacing(initialCoordinates, "E")

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generateGridSize(), ["R"])

      expect(marsRoversPosition.position).toStrictEqual([...initialCoordinates, "S"])
    })

    it("We receive the command to turn left while facing to the east so we expect to stay in the same place facing the north", () => {
      const initialCoordinates = generateInitalPosition()
      const initialPosition = generateInitalPositionAndFacing(initialCoordinates, "E")

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generateGridSize(), ["L"])

      expect(marsRoversPosition.position).toStrictEqual([...initialCoordinates, "N"])
    })

    it("We receive the command to turn right while face to an unknown direction so we expect to stay in the same place and face to the same direction", () => {
      const initialCoordinates = generateInitalPosition()
      const initialPosition = generateInitalPositionAndFacing(initialCoordinates, "X")

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generateGridSize(), ["R"])

      expect(marsRoversPosition.position).toStrictEqual([...initialCoordinates, "X"])
    })

    it("We receive the command to turn left while facing to an unknow direction so we expect to stay in the same place facing to the same direction", () => {
      const initialCoordinates = generateInitalPosition()
      const initialPosition = generateInitalPositionAndFacing(initialCoordinates, "X")

      const marsRoversPosition = MarsApi.executeCommands(initialPosition, generateGridSize(), ["L"])

      expect(marsRoversPosition.position).toStrictEqual([...initialCoordinates, "X"])
    })

})