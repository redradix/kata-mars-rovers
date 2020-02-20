const MarsApi = require('./index')

const generateNumber = () => {
  return Math.floor(Math.random() * (10 - 1) + 1)
}

const generateGridSize = ({x, y} = {x: generateNumber(), y: generateNumber()}) => {
  return [x, y]
}

const generateFacing = () => {
  return [MarsApi.directions.NORTH, MarsApi.directions.SOUTH, MarsApi.directions.EAST, MarsApi.directions.WEST][(generateNumber() % 4)]
}

const generateInitalPosition = ({x, y} = {x: generateNumber(), y: generateNumber()}) => {
  return [x, y]
}

const generateInitalPositionAndFacing = (initialPosition, initialFacing) => {
  return [...(initialPosition || generateInitalPosition()), initialFacing || generateFacing()]
}

module.exports = {generateGridSize, generateInitalPosition, generateInitalPositionAndFacing}