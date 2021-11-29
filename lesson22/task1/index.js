const spanElem = document.querySelector('.rect_span');
const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const eventsListElem = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const atachHandlers = document.querySelector('.attach-handlers-btn')
const removeHandlers = document.querySelector('.remove-handlers-btn')
const logTarget = (text, color) => {
    
    eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}
    const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
    const logGreenP = logTarget.bind(null, 'P', 'green');
    const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

    const logGrayDiv = logTarget.bind(null, 'DIV', 'gray');
    const logGrayP = logTarget.bind(null, 'P', 'gray');
    const logGraySpan = logTarget.bind(null, 'SPAN', 'gray');

clearBtn.addEventListener('click', () => {
    eventsListElem.innerHTML = '';
})
divElem.addEventListener('click', logGrayDiv, true);
    divElem.addEventListener('click', logGreenDiv);

    pElem.addEventListener('click', logGrayP, true);
    pElem.addEventListener('click', logGreenP);

    spanElem.addEventListener('click', logGraySpan, true);
    spanElem.addEventListener('click', logGreenSpan);
atachHandlers.addEventListener('click', () => {
    divElem.addEventListener('click', logGrayDiv, true);
    divElem.addEventListener('click', logGreenDiv);

    pElem.addEventListener('click', logGrayP, true);
    pElem.addEventListener('click', logGreenP);

    spanElem.addEventListener('click', logGraySpan, true);
    spanElem.addEventListener('click', logGreenSpan);
});
removeHandlers.addEventListener('click', () => {
    divElem.removeEventListener('click', logGrayDiv, true);
    divElem.removeEventListener('click', logGreenDiv);

    pElem.removeEventListener('click', logGrayP, true);
    pElem.removeEventListener('click', logGreenP);

    spanElem.removeEventListener('click', logGraySpan, true);
    spanElem.removeEventListener('click', logGreenSpan)
})
