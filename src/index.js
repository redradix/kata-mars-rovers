const commandsBasedOnDirection = (direction) => {
    const switchedCommands = {
        'f' : [1, +1],
        'b' : [1, -1],
        'r' : [0, +1],
        'l' : [0, -1]
    };
    if(direction === 'S') {
        switchedCommands['f'] = [1, -1];
        switchedCommands['b'] = [1, +1];
        switchedCommands['r'] = [0, -1];
        switchedCommands['l'] = [0, +1];
    }
    if(direction === 'E') {
        switchedCommands['f'] = [0, +1];
        switchedCommands['b'] = [0, -1];
        switchedCommands['r'] = [1, -1];
        switchedCommands['l'] = [1, +1];
    }
    if(direction === 'W') {
        switchedCommands['f'] = [0, -1];
        switchedCommands['b'] = [0, +1];
        switchedCommands['r'] = [1, +1];
        switchedCommands['l'] = [1, -1];
    }
    return switchedCommands;
}
const controlsRoverFromFalling = (position, grid) => {
    if(position[0] > grid[0] || position[0] < 0) position[0] = grid[0];
    if(position[1] > grid[1] || position[1] < 0) position[1] = grid[1];

    return position;
}

const marsRovers = (points, startingDirection, gridSize, commands) => {
    let position = points ? points : [0,0];
    const direction = startingDirection ? startingDirection : 'N';
    const grid = gridSize ? gridSize : [10,10];

    position = controlsRoverFromFalling(position, grid);
    
    const switchedCommands = commandsBasedOnDirection(direction);
    if(!!commands && commands.length) {
        for(let i = 0; i < commands.length; i++){
            switch(commands[i]) {
                case 'f': position[switchedCommands['f'][0]] += switchedCommands['f'][1];
                break;
                case 'b': position[switchedCommands['b'][0]] += switchedCommands['b'][1];
                break;
                case 'r': position[switchedCommands['r'][0]] += switchedCommands['r'][1];
                break;
                case 'l': position[switchedCommands['l'][0]] += switchedCommands['l'][1];
                break;
                default: console.log('command not found, rover did not move')
                break;
            }  
        }
    }

    position = controlsRoverFromFalling(position, grid)

    return {position, direction, grid};
}

module.exports = marsRovers;