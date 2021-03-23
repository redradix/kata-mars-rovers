const marsRovers = require('./index')

describe('it starts at points (x,y) and faces the given direction', () => {
    it('it starts at points (x,y)', () => {
       const MARSROVERS = marsRovers([1,1]);
       expect(MARSROVERS.position).toEqual([1,1])
	});
    it('starts at [0,0] when not given starting points', () => {
        const MARSROVERS = marsRovers();
        expect(MARSROVERS.position).toEqual([0,0])
     });
    it('it stares at a given direction regardless of starting point', () => {
        const MARSROVERS = marsRovers([0,1], 'E');
        expect(MARSROVERS.direction).toEqual('E')
    });
});

describe('receives a grid size and makes sures it does not fall out', () => {
    it('it receives a grid size', () => {
       const MARSROVERS = marsRovers([1,1], 'N', [3,3]);
       expect(MARSROVERS.grid).toEqual([3,3])
	});
    it('sets a size when not receiving one', () => {
        const MARSROVERS = marsRovers([1,1], 'N');
        expect(MARSROVERS.grid).toEqual([10,10])
     });
    it('initial position is bigger than size and returns to max position available', () => {
        const MARSROVERS = marsRovers([3,3], 'N', [1,1]);
        expect(MARSROVERS.position).toEqual([1,1])
    });
    
});

describe('receives a series of commands that moves the rover', () => {
    it('receives an empty array, stays in same position', () => {
        const MARSROVERS = marsRovers([0,0], 'E', [10,10], []);
        expect(MARSROVERS.position).toEqual([0,0]);
        expect(MARSROVERS.direction).toEqual('E');
	});

    it('receives an array with invalid command, rover does not move', () => {
        const MARSROVERS = marsRovers([0,0], 'N', [10,10], ['g']);
        expect(MARSROVERS.position).toEqual([0,0]);
	});

    it('receives an array, initial direction N, moves rover', () => {
        const MARSROVERS = marsRovers([0,0], 'N', [10,10], ['f', 'f', 'r']);
        expect(MARSROVERS.position).toEqual([1,2]);
	});

    it('if rover goes over grid size, returns to further point', () => {
        const MARSROVERS = marsRovers([0,0], 'N', [2,2], ['f', 'f', 'f', 'r']);
        expect(MARSROVERS.position).toEqual([1,2]);
	});

    it('when facing different direction, it moves accordingly', () => {
        const MARSROVERS = marsRovers([2,2], 'S', [10,10], ['f', 'f', 'b', 'r']);
        expect(MARSROVERS.position).toEqual([1,1]);
	});

    it('when facing different direction, it moves accordingly', () => {
        const MARSROVERS = marsRovers([2,2], 'E', [10,10], ['r']);
        expect(MARSROVERS.position).toEqual([2,1]);
	});
});