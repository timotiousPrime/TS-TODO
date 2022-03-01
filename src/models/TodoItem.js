export class TodoItem {
    title = ''
    dueDate = ''
    isUrgent = false
    isCompleted = false
    listId = ''
    itemId = `item${new Date().getTime()}`
    createdDate = new Date()

    constructor(listId, title, dueDate, isUrgent) {
        this.title = title
        this.listId = listId
        this.dueDate = dueDate
        this.isUrgent = isUrgent
    }

    get title() {
        return this._title
    }

    set title(value) {
        this._title = value
    }

    set isCompleted(boolVal) {
        this._isCompleted = boolVal
    }

    get isCompleted() {
        return this._isCompleted
    }

    set id(value) {
        this._id = value
    }

    get id() {
        return this._id
    }

    get isUrgent(){
        return this._isUrgent
    }

    set isUrgent(value){
        this.isUrgent = value
    }
}

// I can be herre in the meantime :))))
