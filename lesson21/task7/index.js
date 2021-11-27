export function createButton(text) {
    let perent = document.querySelector('body');
    let elem = document.createElement('button');
    elem.textContent = text;
    perent.append(elem)
}