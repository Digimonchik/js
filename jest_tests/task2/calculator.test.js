import getSum, { getSquareArray,getOddNumbers } from "./calculator";

it('square the array', () => {
    const result = getSquareArray([1,3,4,5])
    expect(result).toEqual([1,9,16,25])
})

it('gets ods', () => {
    const result = getOddNumbers([1, 2, 3]);
    expect(result).toEqual([1,3])
})

it('gets sum', () => {
    const result = getSum(8, 4);
    expect(result).toEqual(12);
})