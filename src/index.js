/**
 * This function process the rover commands
 * @param {Array} pos 
 * @param {String} dir 
 * @param {Array} gridSize 
 * @param {String} cmd 
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


/**
 * 
 * @param {Array} pos 
 * @param {String} dir 
 * @param {Array} gridSize 
 * @param {String} cmd 
 */
function drive(pos, dir, gridSize, cmd){
    const pitch = getCompass(cmd)[dir];

    pos.map(position, it => pos[it] = position + pitch[it]);//Reasign the new cords
    
}


/**
 * This function returns the direction of rover for a command
 * @param {String} cmd command 
 * @returns {Object}
 */
function getCompass(cmd){
    switch (cmd){
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


module.exports = (initPos, dir, gridSize, cmd) => commandProcesor(initPos, dir, gridSize, cmd);