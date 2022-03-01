export function itemEditor(item) {
    const pageOverlay = document.createElement('div')
    pageOverlay.classList.add('page-overlay')
    pageOverlay.id = 'page-overlay'
    document.body.appendChild(pageOverlay)

    const itemEditor = document.createElement('div')
    itemEditor.classList.add('editor-card')
    itemEditor.id = 'editor-card'
    pageOverlay.appendChild(itemEditor)

    const itemHeader = document.createElement('h2')
    itemHeader.id = 'item-header'
    itemHeader.innerText = `Edit "${item.title}"`
    itemEditor.appendChild(itemHeader)

    const itemForm = document.createElement('form')
    itemForm.id = 'item-form'
    itemEditor.appendChild(itemForm)

    const titleLabel = document.createElement('label')
    titleLabel.id = 'title-label'
    titleLabel.innerText = 'Title: '
    itemForm.appendChild(titleLabel)

    const titleInput = document.createElement('input')
    titleInput.id = 'item-title'
    titleInput.type = 'text'
    titleInput.value = item.title
    titleLabel.appendChild(titleInput)

    const dueDateLabel = document.createElement('label')
    dueDateLabel.id = 'due-date-label'
    dueDateLabel.innerText = 'Due Date: '
    itemForm.appendChild(dueDateLabel)

    const itemDueDate = document.createElement('input')
    itemDueDate.id = 'item-due-date'
    itemDueDate.type = 'date'
    itemDueDate.placeholder = 'Item Due Date'
    dueDateLabel.appendChild(itemDueDate)

    const priorityLabel = document.createElement('label')
    priorityLabel.id = 'priority-label'
    priorityLabel.innerText = 'Urgent: '
    itemForm.appendChild(priorityLabel)

    const itemPriority = document.createElement('input')
    itemPriority.id = 'item-priority'
    itemPriority.type = 'checkbox'
    itemPriority.setAttribute = item.isUrgent ? (itemPriority.checked = true) : (itemPriority.checked = false)
    priorityLabel.appendChild(itemPriority)

    const itemSubmit = document.createElement('button')
    itemSubmit.id = 'item-submit'
    itemSubmit.type = 'button'
    itemSubmit.innerText = 'Update item'
    itemForm.appendChild(itemSubmit)
}
