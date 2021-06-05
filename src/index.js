const moveRover = (roverState, commands) => {
    commands.forEach(command => {
        if(command === 'r' || command === 'l') rotateRoverAction(roverState,command)
        if(command === 'f' || command === 'b') moveRoverAction(roverState,command)
    })
    return roverState.state
}

const rotateRoverAction = (roverState, command) => {
    const DIRECTIONRIGTH = {'N':'E','E':'S','S':'W','W':'N'}
    const DIRECTIONLEFT = {'N':'W','W':'S','S':'E','E':'N'}
    return roverState.state[2] = (command==="r") ? DIRECTIONRIGTH[roverState.state[2]] : DIRECTIONLEFT[roverState.state[2]]
}

const moveRoverAction = (roverState,command) => {
    if(roverState.state[2]==="E") return (command==="f") ? checkGrid(roverState, 1, "up") :  checkGrid(roverState, 1, "down")
    if(roverState.state[2]==="W") return (command==="f") ? checkGrid(roverState, 1, "down") :  checkGrid(roverState, 1, "up")
    if(roverState.state[2]==="S") return (command==="f") ? checkGrid(roverState, 0, "up") :  checkGrid(roverState, 0, "down")
    if(roverState.state[2]==="N") return (command==="f") ? checkGrid(roverState, 0, "down") :  checkGrid(roverState, 0, "up")
}

const checkGrid = (roverState, matriz ,nextMove) => {
    let location = roverState.state[matriz]
    return (nextMove==="up") 
        ? checkNextLocation(roverState, matriz, location + 1) 
        : checkNextLocation(roverState, matriz, location - 1)
}

const checkNextLocation = (roverState, matriz, location) => {
    return (roverState.grid[1] >= location && roverState.grid[0] >= location && location >= 0) 
        ? roverState.state[matriz] = location 
        : false
}

const rover = (roverState, commands) => {
    if (commands) return moveRover(roverState, commands)
    if (!commands) return roverState
}

module.exports = rover