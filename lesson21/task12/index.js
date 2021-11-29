function getsection(num) {
        let elem = document.querySelector(`span[data-number="${num}"]`)
    let elemParent = elem.parentElement;
    console.log(elemParent.dataset.section)
}