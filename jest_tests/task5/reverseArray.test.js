import { reverseArray } from "./reverseArray";

it('returns reverse array', () => {
    const result = reverseArray(['f', 'g', 'h', 't']);
    expect(result).toEqual(['t', 'h', 'g', 'f'])
})
it('returns reverse array', () => {
    const result = reverseArray(['f', 'i', 'h', 't', 'llg']);
    expect(result).toEqual(['llg', 't', 'h', 'i', 'f'])
})
it('returns reverse array', () => {
    const result = reverseArray([1,2,3,4,5]);
    expect(result).toEqual([5,4,3,2,1])
})
