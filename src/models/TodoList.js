export class TodoList {
    description = ''
    title = ''
    isActive = true
    listId = `list${new Date().getTime()}`
    dateCreated = new Date()

    constructor(title) {
        this.title = title
    }

    get title() {
        return this._title
    }

    set title(value) {
        this._title = value
    }

    get description() {
        return this._description
    }

    set description(value) {
        this._description = value
    }

    get listId() {
        return this._listId
    }

    set listId(id) {
        this._listId = id
    }

    get isActive() {
        return this._isActive
    }

    set isActive(boolVal) {
        this._isActive = boolVal
    }
}
