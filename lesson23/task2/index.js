const generateNumbers = (from, to) => {
const range = []
    for (let i = from; i <= to; i++) {
        range.push(i);
    }
    return range
}
const getLineSeats = () => 
    generateNumbers(1, 10)
        .map(seatNumber =>
            `<div
                class ="sector__seat"
                data-seat-number = "${seatNumber}"></div>`)
    .join('')


const getSectorLines = () =>
    generateNumbers(1, 10)
        .map(lineNumber =>
            `<div
                class ="sector__line"
                data-line-number = "${lineNumber}">${getLineSeats()}</div>`)
        .join('');
const arenaElem = document.querySelector('.arena');
const renderArena =  () => {
    const sectorString = generateNumbers(1, 3).map(sectorNumber => `
    <div class = "sector"
    data-sector-number = "${sectorNumber}"> ${getSectorLines()}</div>`).join('');
    arenaElem.innerHTML = sectorString
}
const myBoard = document.querySelector('.board__selected-seat')

const onSeatSelect = event => {
    const isSeat = event.target.classList.contains('sector__seat');

    if (!isSeat) {
        return;
    }       

    const seatNumber = event.target.dataset.seatNumber;
    event.target.classList.toggle('background-red')
    const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
    const sectorNumber = event.target.closest('.sector').dataset.sectorNumber; 
    myBoard.textContent = `S ${seatNumber} - L ${lineNumber} - S ${sectorNumber}`
}
arenaElem.addEventListener('click', onSeatSelect)

