it('17 is 17', () => { expect(17).toEqual(17) });
it('17 is not 18', () => { expect(17).not.toEqual(18) });

const getEvenNumbers = arr => arr.filter(el => el % 2 === 0 )
it('is even', () => {
    const result = getEvenNumbers([1, 2, 3, 4]);
    expect(result).toEqual([2, 4])
})