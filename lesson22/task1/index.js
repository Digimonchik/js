const spanElem = document.querySelector('.rect_span');
const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const eventsListElem = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');
eventsListElem.innerHTML = '';

const logTarget = (text, color) => {
    eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}

const logGreenDiv = logTarget.bind(null, 'div', 'green');
const logGreenP = logTarget.bind(null, 'p', 'green');
const logGreenSpan = logTarget.bind(null, 'span', 'green');

const logGrayDiv = logTarget.bind(null, 'div', 'gray');
const logGrayP = logTarget.bind(null, 'p', 'gray');
const logGraySpan = logTarget.bind(null, 'span', 'gray');

clearBtn.addEventListener('click', () => {
    eventsListElem.innerHTML = '';
})
const attachHandlers = () => {

    divElem.addEventListener('click', logGrayDiv, true);
    divElem.addEventListener('click', logGreenDiv);

    pElem.addEventListener('click', logGrayP, true);
    pElem.addEventListener('click', logGreenP);

    spanElem.addEventListener('click', logGraySpan, true);
    spanElem.addEventListener('click', logGreenSpan);
};
attachHandlersBtn.addEventListener('click', attachHandlers);
document.addEventListener('DOMContentLoaded', () => {
    attachHandlers()
});
  
removeHandlersBtn.addEventListener('click', () => {

    divElem.removeEventListener('click', logGrayDiv, true);
    divElem.removeEventListener('click', logGreenDiv);

    pElem.removeEventListener('click', logGrayP, true);
    pElem.removeEventListener('click', logGreenP);

    spanElem.removeEventListener('click', logGraySpan, true);
    spanElem.removeEventListener('click', logGreenSpan);
});


