import {calc} from "./calculator";
it('sum numbers', () => {
    const result = calc('1 + 2');
    expect(result).toEqual(3)
}) 
it('subtr numbers', () => {
    const result = calc('2 - 2');
    expect(result).toEqual(0)
})
it('div numbers', () => {
    const result = calc('2 / 2');
    expect(result).toEqual(1)
})
it('multiply numbers', () => {
    const result = calc('2 * 2');
    expect(result).toEqual(4)
})
it('multiply numbers', () => {
    const result = calc(3);
    expect(result).toEqual(null)
}) 