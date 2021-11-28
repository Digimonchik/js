export function finishList() {
    const numberOne = document.createElement('li');
    const numberFour = document.createElement('li');
    const numberSix = document.createElement('li');
    const numberEight = document.createElement('li');
    const itemsList = document.querySelector('.list');
    const specialItem = document.querySelector('.special');
    numberOne.textContent = '1';
    numberFour.textContent = '4';
    numberSix.textContent = '6';
    numberEight.textContent = '8';
    itemsList.prepend(numberOne);
    itemsList.append(numberEight)
    specialItem.before(numberFour)
    specialItem.after(numberSix)
}