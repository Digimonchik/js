import getSum, { getSquaredArray,getOddNumbers } from "./calculator";

it('square the array', () => {
    const result = getSquaredArray([1,2,3])
    expect(result).toEqual([1,4,9])
})

it('gets ods', () => {
    const result = getOddNumbers([1, 2, 3]);
    expect(result).toEqual([1,3])
})

it('gets sum', () => {
    const result = getSum(8, 4);
    expect(result).toEqual(12);
})
