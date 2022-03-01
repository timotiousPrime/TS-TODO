export function listEditor(list) {
    console.log('this has been called')
    const pageOverlay = document.createElement('div')
    pageOverlay.classList.add('page-overlay')
    pageOverlay.id = 'page-overlay'
    document.body.appendChild(pageOverlay)
    console.log(pageOverlay)

    const listEditor = document.createElement('div')
    listEditor.classList.add('editor-card')
    listEditor.id = 'editor-card'
    pageOverlay.appendChild(listEditor)

    const listHeader = document.createElement('h2')
    listHeader.id = 'list-header'
    listHeader.innerText = `Edit "${list.title}" list`
    listEditor.appendChild(listHeader)

    const listForm = document.createElement('form')
    listForm.id = 'list-form'
    listEditor.appendChild(listForm)

    const titleLabel = document.createElement('label')
    titleLabel.id = 'title-label'
    titleLabel.innerText = 'Title: '
    listForm.appendChild(titleLabel)

    const listTitle = document.createElement('input')
    listTitle.id = 'list-title'
    listTitle.type = 'text'
    listTitle.placeholder = 'List Title'
    titleLabel.appendChild(listTitle)

    const descriptionLabel = document.createElement('label')
    descriptionLabel.id = 'list-description'
    descriptionLabel.innerText = 'Description'
    listForm.appendChild(descriptionLabel)

    const listDescription = document.createElement('input')
    listDescription.id = 'list-description'
    listDescription.type = 'text'
    listDescription.placeholder = 'List Descriptio;n'
    descriptionLabel.appendChild(listDescription)

    const listSubmit = document.createElement('button')
    listSubmit.id = 'list-submit'
    listSubmit.type = 'button'
    listSubmit.innerText = 'Update List'
    listForm.appendChild(listSubmit)

    return pageOverlay
}

// export const listEditCard = {
//     title: '',
//     template: `
//     <div id="editListOverLay">
//         <div id="editListCard">
//             <h2>Editing ${list.title}</h2>
//             <form action="">
//                 <label for="list-title-input">
//                     <input id="list-title-input" type="text">
//                 </label>
//             </form>
//         </div>
//     </div>
//     `,
// }

// export function listEditor(list) {
//     const editListOverlay = document.createElement('div')
//     editListOverlay.id = 'editListOverlay'
//     editListOverlay.innerHTML = `
//         <div id="editListCard">
//             <h2>Editing ${list.title}</h2>
//             <form action="">
//                 <label for="list-title-input">
//                     <input id="list-title-input" type="text">
//                 </label>
//             </form>
//         </div>
//     `
//     return editListOverlay
// }
