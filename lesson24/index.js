let weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su']
let date = new Date();
console.log(date.getDate())
date.setDate(10)
console.log(date.getDate())
let getDay = (date, days) => {
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);
    return weekdays[new Date(dateInFuture).getDay()]
}
