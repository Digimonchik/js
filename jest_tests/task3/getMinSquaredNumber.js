export const getMinSquaredNumber = arr => {
    const newArr = arr.map(num => Math.abs(num))
    console.log(newArr)
    const minSquaredNumber = Math.min(...newArr) * Math.min(...newArr);
    return minSquaredNumber
}