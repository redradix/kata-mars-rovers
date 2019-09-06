/* eslint-disable */
const rover = require("./index");

describe('Mars Rovers', () => {
    const gridSize = [3, 3];
    const dirs = {
        North: "North", South: "South",
        East: "East", West: "West"
    };

    test('stays in the same position when executes an unknowns command', () => 
        expect(rover([0, 0], dirs.North, gridSize, 'unknown')).toEqual({
            position: [0, 0],
            direction: dirs.North
        })
    );

    test('turn left', () => 
        expect(rover([0, 0], dirs.North, gridSize, 'l')).toEqual({
            position: [0, 0],
            direction: dirs.West
        })
    );
    
    test('turn right', () =>
        expect(rover([0, 0], dirs.North, gridSize, 'r')).toEqual({
            position: [0, 0],
            direction: dirs.East
        })
    );

    test('try to left from the bounds forwarding', () =>
        expect(rover([2, 2], dirs.North, gridSize, 'f')).toEqual({
            position: [2, 2],
            direction: dirs.North
        })
    );

    test('drive the rover to forward', () =>
        expect(rover([0, 0], dirs.North, gridSize, 'f')).toEqual({
            position: [0, 1],
            direction: dirs.North
        })
    );

    test('drive the rover to backward', () => 
        expect(rover([0, 1], dirs.North, gridSize, 'b')).toEqual({
            position: [0, 0],
            direction: dirs.North
        })
    );

    test('execute multiple commands', () => 
        expect(rover([0, 0], dirs.North, gridSize, 'ff')).toEqual({
            position: [0, 2],
            direction: dirs.North
        })
    );
})