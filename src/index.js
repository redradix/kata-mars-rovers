/**
 * This function returns the direction of rover for a command
 * @param {String} cmd command
 * @returns {Object}
 */
function getCompass(cmd){
    switch (cmd){
        default:
            return {};
        case 'r':
            return {
                North: 'East', East: 'South',
                South: 'West', West: 'North'
            }
        case 'l':
            return {
                North: 'West', West: 'South',
                South: 'East', East: 'North'
            }
        case 'f':
            return {
                North: [0, 1], South: [0, -1],
                West: [-1, 0], East: [1, 0]
            }
        case 'b':
            return {
                North: [0, -1], South: [0, 1],
                West: [1, 0], East: [-1, 0],
            }
    }
}


/**
 * This function gets if the position is out of the bounds
 * @param {Array} pos pos
 * @param {Array} gridSize gridSize
 * @returns {Boolean}
 */
function isOutOfBounds(pos, gridSize){
    return pos[0] >= gridSize[0] || pos[1] >= gridSize[1] || pos[0] < 0 || pos[1] < 0
}


/**
 * This function drives the rover
 * @param {Array} pos pos
 * @param {String} dir dir
 * @param {String} cmd cmd
 * @returns {Object}
 */
function drive(pos, dir, cmd){
    const pitch = getCompass(cmd)[dir];
    const lastPos = [...pos];

    pos.map((position, it) => {
        pos[it] = position + pitch[it]
    });

    return {
        position: isOutOfBounds() ? lastPos : pos,
        direction: dir
    }
}


/**
 * This function process the rover commands
 * @param {Array} pos pos
 * @param {String} dir dir
 * @param {Array} gridSize gridSize
 * @param {String} cmd cmd
 * @returns {Object}
 */
function commandProcesor(pos, dir, gridSize, cmd){
    switch (cmd){
        case 'l':
        case 'r':
            return {
                position: pos,
                direction: getCompass(cmd)[dir]
            }
        case 'f':
        case 'b':
            return drive(pos, dir, gridSize, cmd)
        default:
            return { position: pos, direction: dir }
    }
}


module.exports = (pos, dir, gridSize, cmds) => cmds.split('').map(cmd => commandProcesor(pos, dir, gridSize, cmd)).pop()