import {toggle} from './array'

describe('array/toggle', () => {
    it('appends a value to an empty list', () => {
        expect(toggle(1, [])).toEqual([1])
    })
    it('appends a value if the list does not include it', () => {
        expect(toggle(1, [2, 3])).toEqual([2, 3, 1])
    })
    it('removes a value from a list that already includes it', () => {
        expect(toggle(1, [1, 2, 3])).toEqual([2, 3])
    })
    it('removes all occurences of a value from a list', () => {
        expect(toggle(1, [1, 1, 1, 2, 3])).toEqual([2, 3])
    })
})
