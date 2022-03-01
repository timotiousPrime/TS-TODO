import { ICON } from './ItemHoverOptions'

export function listHoverOptionsComponent() {
    const listHoverOptions = document.createElement('div')
    const editBtn = document.createElement('img')
    const deleteBtn = document.createElement('img')
    const completeBtn = document.createElement('img')

    editBtn.setAttribute('id', 'edit-btn')
    editBtn.setAttribute('src', ICON.edit)
    editBtn.classList.add('optionsBtn')
    editBtn.innerText = 'Edit'
    deleteBtn.setAttribute('id', 'delete-btn')
    deleteBtn.setAttribute('src', ICON.delete)
    deleteBtn.setAttribute('style', 'fill: red')
    deleteBtn.classList.add('optionsBtn')

    listHoverOptions.appendChild(editBtn)
    listHoverOptions.appendChild(deleteBtn)
    listHoverOptions.classList.add('listHoverOptions')
    listHoverOptions.setAttribute('id', 'listHoverOptions')

    return listHoverOptions
}
