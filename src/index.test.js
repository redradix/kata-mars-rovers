const rover = require('./index')

let roverState = {
    grid: [[5],[5]],
    state: [0,0,'N']
}


describe('Mars Rovers', () => {

    it('Initial state to start', () => {
        const result = rover(roverState)
        expect(result).toEqual(roverState)
    })

    it('Move Rover to right from 0,0 to 0,1', () => {
        const result = rover(roverState,["r","f"])
        expect(result).toEqual([0,1,'E'])
    })

    it('Move Rover to left from 0,1 to 0,0', () => {
        const result = rover(roverState,["l","l","f"])
        expect(result).toEqual([0,0,"W"])
    })

    it('Move Rover to down from 0,0 to 0,5', () => {
        const result = rover(roverState,["l","f","f","f","f","f"])
        expect(result).toEqual([5,0,"S"])
    })

    it('Move Rover to up from 0,5 to 0,0', () => {
        const result = rover(roverState,["r","r","f","f","f","f","f"])
        expect(result).toEqual([0,0,"N"])
    })
    
    it('Move Rover to down from 0,0 to 0,5 using back', () => {
        const result = rover(roverState,["b","b","b","b","b"])
        expect(result).toEqual([5,0,"N"])
    })

    it('Move Rover to rigth from 5,0 to 5,5 using back', () => {
        const result = rover(roverState,["l","b","b","b","b","b"])
        expect(result).toEqual([5,5,"W"])
    })
    
    it('Move Rover to up from 5,5 to 0,5 using back', () => {
        const result = rover(roverState,["l","b","b","b","b","b"])
        expect(result).toEqual([0,5,"S"])
    })

    it('Move Rover to up from 0,5 to 0,0 using back', () => {
        const result = rover(roverState,["l","b","b","b","b","b"])
        expect(result).toEqual([0,0,"E"])
    })

    it('Command incorrect', () => {
        const result = rover(roverState,["z"])
        expect(result).toEqual([0,0,"E"])
    })

    it('Dont move Rover to leave grid using forward in the east grid',() => {
        const result = rover(roverState,["f","f","f","f","f","f"])
        expect(result).toEqual([0,5,"E"])
    })

    it('Dont move Rover to leave grid using backward in the nord grid',() => {
        const result = rover(roverState,["r","b",])
        expect(result).toEqual([0,5,"S"])
    })

    it('Dont move Rover to leave grid using forward in the shout grid',() => {
        const result = rover(roverState,["f","f","f","f","f","f"])
        expect(result).toEqual([5,5,"S"])
    })
})