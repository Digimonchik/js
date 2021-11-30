const spanElem = document.querySelector('.rect_span');
const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const eventsListElem = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');
const removeHandlersBtn = document.querySelector('.remove-handlers-btn');

const logTarget = (text, color) => {
    eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}

const logGreenDiv = logTarget.bind(null, 'div', 'green');
const logGreenP = logTarget.bind(null, 'p', 'green');
const logGreenSpan = logTarget.bind(null, 'span', 'green');

const logGreyDiv = logTarget.bind(null, 'div', 'grey');
const logGreyP = logTarget.bind(null, 'p', 'grey');
const logGreySpan = logTarget.bind(null, 'span', 'grey');

removeHandlersBtn.addEventListener('click', () => {

    divElem.removeEventListener('click', logGreyDiv, { capture: true });
    divElem.removeEventListener('click', logGreenDiv);

    pElem.removeEventListener('click', logGreyP, { capture: true });
    pElem.removeEventListener('click', logGreenP);

    spanElem.removeEventListener('click', logGreySpan, { capture: true });
    spanElem.removeEventListener('click', logGreenSpan);
});

clearBtn.addEventListener('click', () => {
    eventsListElem.innerHTML = null;
})
function attachHandlers() {
    divElem.addEventListener('click', logGreyDiv, true);
    divElem.addEventListener('click', logGreenDiv);

    pElem.addEventListener('click', logGreyP, true);
    pElem.addEventListener('click', logGreenP);

    spanElem.addEventListener('click', logGreySpan, true);
    spanElem.addEventListener('click', logGreenSpan);
};
attachHandlersBtn.addEventListener('click', () => {
    attachHandlers();
});

document.addEventListener('DOMContentLoaded', () => {
    attachHandlers();
    eventsListElem.innerHTML = null;
});
  


