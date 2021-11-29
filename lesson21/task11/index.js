function squaredNumbers() {
    let elems = document.querySelectorAll('.number');
    [...elems].forEach(el => el.setAttribute('data-squared-number', Math.pow(el.dataset.number, 2)))
}