// const buttons = document.querySelectorAll('.btn');
// const handleClick = () => {
//     console.log(event.target.innerText)
// }
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', handleClick)
// }
// buttons.forEach(el => {
//     el.addEventListener('click',handleClick)
// })

let myElements = document.querySelectorAll('.pagination__page');
function handleClick() {
    console.log(this.dataset.pageNumber)
}
myElements.forEach(el => {
    el.addEventListener('click', handleClick)
})