const { sum } = require('./my-code')

describe('match function', () => {
    beforeAll(() => {
        console.log('before all')
    })
    beforeEach(() => {
        console.log('before each')
    })
    afterAll(() => {
        console.log('after All')
    })
    it('sums 2 numbers', () => {
        expect(sum(1, 2)).toBe(3)
    })
    it('sums 2 numbers', () => {
        expect(sum(1, 2)).toBe(3)
    })
})

