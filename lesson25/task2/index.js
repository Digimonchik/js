const date1 = new Date(2005, 1, 2, 13, 45);
const date2 = new Date(2001, 2, 3, 5,33);


const getDiff = (date1, date2) => {
    const diff = Math.abs((date2.getTime() - date1.getTime()));
    const day = Math.floor(diff / 86400000);
    const hour = Math.floor((diff % 86400000) / 3600000);
    const minute = Math.floor(((diff % 86400000) % 3600000) / 60000);
    const seconds = Math.floor((((diff % 86400000) % 3600000) % 60000) / 1000);
    const result = `${day}d ${hour}h ${minute}m ${seconds}s`
    return result
}
