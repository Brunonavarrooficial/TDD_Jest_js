const { sum, inOneHour } = require('./my-code')

describe('match function', () => {
    /*beforeAll(() => {
        console.log('before all')
    })
    beforeEach(() => {
        console.log('before each')
    })
    afterAll(() => {
        console.log('after All')
    })*/
    it('sums 2 numbers', () => {
        expect(sum(1, 2)).toBe(3)
    })
    it('sums 2 numbers', () => {
        expect(sum(1, 2)).toBe(3)
    })
})

describe('time functions', () => {
    it('returns the timestamp for one hour ahead', () => {
        const realDateNow = Date.now.bind(global.Date)
        global.Date.now = jest.fn(() => 0)
        expect(inOneHour()).toBe(3600000)
        global.Date.now = realDateNow
    })
})

