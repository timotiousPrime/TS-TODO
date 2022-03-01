export function itemCardHoverOptionsComponent() {
    const itemCardHoverOptions = document.createElement('div')
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
    completeBtn.setAttribute('id', 'complete-btn')
    completeBtn.setAttribute('src', ICON.complete)
    completeBtn.classList.add('optionsBtn')
    completeBtn.innerText = 'Complete'

    itemCardHoverOptions.appendChild(editBtn)
    itemCardHoverOptions.appendChild(deleteBtn)
    itemCardHoverOptions.appendChild(completeBtn)
    itemCardHoverOptions.classList.add('itemCardHoverOptions')
    itemCardHoverOptions.setAttribute('id', 'itemCardHoverOptions')

    return itemCardHoverOptions
}

// Font Awesome Icons
export const ICON = {
    edit: 'data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cpath d="M18.988 2.012l3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287l-3-3L8 13z" %2F%3E%3Cpath d="M19 19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z" %2F%3E%3C%2Fsvg%3E',
    delete: 'data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"%3E%3Cpath d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z" %2F%3E%3C%2Fsvg%3E',
    complete:
        'data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15"%3E%3Cg fill="none"%3E%3Cpath d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14z" stroke="currentColor"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E',
}
