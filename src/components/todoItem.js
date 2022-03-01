export function todoItemComponent(item) {
    const itemCard = document.createElement('li')
    const title = document.createElement('h3')

    title.innerText = `${item.title}`
    itemCard.appendChild(title)
    itemCard.setAttribute('id', `${item.itemId}`)
    itemCard.classList.add('itemCard')
    item.isCompleted ? itemCard.classList.add('completed') : itemCard.classList.remove('completed')
    item.isUrgent ? itemCard.classList.add('urgent') : itemCard.classList.remove('urgent')
    // console.log(item.completed, itemCard, item)

    const itemContainer = document.getElementById('items-list')
    itemContainer.appendChild(itemCard)
}
