const weekDays = ['Su','Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
const DayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);
    console.log(new Date(dateInFuture).getDate())
    return weekDays[new Date(dateInFuture).getDay()]
}
const result = getDayOfWeek(new Date(2002, 1, 1), 10)