const rover = require("./index");

describe('Mars Rovers', () => {
    const gridSize = [3, 3];
    const dirs = {
        North: "North", South: "South",
        East: "East", West: "West"
    };

    test('stays in the same position when executes an unknowns command', () => 
        expect(rover([1, 1], dirs.North, gridSize, 'unkonown')).toEqual({
            position: [1, 1],
            direction: dirs.North
        })
    );

    test('turn left', () => 
        expect(rover([1, 1], dirs.North, gridSize, 'l')).toEqual({
            position: [1, 1],
            direction: dirs.West
        })
    );
    
    test('turn right', () =>
        expect(rover([1, 1], dirs.North, gridSize, 'r')).toEqual({
            position: [1, 1],
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
        expect(rover([1, 1], dirs.North, gridSize, 'f')).toEqual({
            position: [1, 2],
            direction: dirs.North
        })
    );


    test('drove the rover to backward', () => 
        expect(rover([1, 1], dirs.North, gridSize, 'b')).toEqual({
            position: [1, 0],
            direction: dirs.North
        })
    );
})