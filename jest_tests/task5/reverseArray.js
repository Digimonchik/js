export const reverseArray = array => {
    if (Array.isArray(array) === false) {
        return null;
    }
    let result = [];
    result = array.slice().reverse()
    return result;
}