export function listElementComponent(list) {
    if (list) {
        // console.log(list.listId)
        const listElement = document.createElement('li')
        listElement.setAttribute('id', list.listId)
        listElement.setAttribute('class', 'list')
        listElement.textContent = list.title
        return listElement
    } else {
        return console.error(`list is ${list}`)
    }
}
