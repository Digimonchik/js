const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
]
const renderTasks = taskList => {
    const listElem = document.querySelector('.list');
    
    const listItemsElems = taskList.map(({ text, done }) => {
        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');
        const checkboxElem = document.createElement('input')
        checkboxElem.setAttribute('type', 'checkbox');
        checkboxElem.checked = done;
        if (checkboxElem.checked == true) {
            listItemElem.classList.toggle('list__item_done')
        }
        checkboxElem.classList.add('list__item-checkbox');
        listItemElem.append(checkboxElem, text);

        return listItemElem
    })
    listElem.append(...listItemsElems)
}

renderTasks(tasks)
