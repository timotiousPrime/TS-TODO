export function todoListComponent(list) {
    const listContainer = document.createElement('div')
    const header = document.createElement('div')
    const listTitle = document.createElement('h2')
    const listDesc = document.createElement('p')
    const inputForm = document.createElement('form')
    const inputText = document.createElement('input')
    const inputBtn = document.createElement('button')
    const listItemsList = document.createElement('ul')

    header.appendChild(listTitle)
    header.appendChild(listDesc)
    header.appendChild(inputForm)
    header.setAttribute('id', `-header`)
    header.classList.add('list-header')

    listTitle.textContent = `${list.title} Todo List`
    listDesc.textContent = `${list.description}`

    inputForm.appendChild(inputText)
    inputForm.appendChild(inputBtn)
    inputForm.setAttribute('id', `${list.listId}-item-input-form`)
    inputForm.setAttribute('action', '')
    inputForm.classList.add('inputForm')

    inputText.setAttribute('type', 'text')
    inputText.setAttribute('name', 'todo-item-input')
    inputText.setAttribute('id', 'todo-item-input')
    inputText.setAttribute('placeholder', 'think of something to do')

    inputBtn.setAttribute('type', 'submit')
    inputBtn.setAttribute('name', 'todo-item-submit')
    inputBtn.setAttribute('id', 'todo-item-submit')
    inputBtn.innerText = 'Add'

    listItemsList.setAttribute('id', `items-list`)
    listItemsList.classList.add('items-list')

    listContainer.appendChild(header)
    listContainer.appendChild(listItemsList)
    listContainer.classList.add('todo-list-container')
    return listContainer
}
