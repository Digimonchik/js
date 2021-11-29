function manageClasses() {
    let elemOne = document.querySelector('.one');
    let elemTwo = document.querySelector('.two');
    let elemThree = document.querySelector('.three');
    console.log(elemThree)
    let elemFour = document.querySelector('.four');
    elemOne.classList.add('selected');
    elemTwo.classList.remove('selected');
    elemThree.classList.toggle('three_done');
    if (elemFour.classList.contains('some-class'))
    {
        elemFour.classList.add('another-class')
        }

}