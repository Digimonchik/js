export const getSquareArray = arr => arr.map(el => el*el);

export const getOddNumbers = arr =>
    arr.filter(num => (num % 2 === 1));

export default (a,b) => a + b 