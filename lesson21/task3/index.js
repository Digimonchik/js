export function getItemsList() {
    const elementList = document.querySelectorAll('.technology');
    console.dir(elementList)
    return elementList
}

export function getItemsArray() {
    let elementsArr = []
    const elementList = document.querySelectorAll('.tool');
    // [...elementList].map(element => {
    //     elementsArr.push(element)
    // })
    elementsArr = Array.from(elementList)
    return elementsArr
}