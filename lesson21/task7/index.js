function createButton(text) {
    let perent = document.querySelector('body');
    let elem = document.createElement('button');
    elem.innerText = text;
    perent.append(elem)
}