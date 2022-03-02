interface State {
    todoLists: TodoLists;
    todoItems: TodoItems;
}

export class State {
    todoLists = []
    todoItems = []

    constructor(initialState) {
        this.todoLists = [...initialState.todoLists] || []
        this.todoItems = [...initialState.todoItems] || []
    }

    set addTodoLists(list) {
        this._todoLists = this.todoLists.push(list)
    }

    get todoLists() {
        return this._todoLists
    }

    removeList(listId: string) {
        this.todoLists = this.todoLists.filter((element) => element.listId !== listId)
        // this.save()
    }

    set addItem(item) {
        // this._todoItems = [...this.todoItems, item]
        this._todoItems = this.todoItems.push(item)
    }

    get todoItems() {
        return this._todoItems
    }

    removeItem(itemId) {
        this.todoItems = this.todoItems.filter((element) => element.itemId !== itemId)
    }

    removeListItems(listId){
        this.todoItems = this.todoItems.filter((item) => item.listId !== listId)
    }

    clearActive() {
        this.todoLists.forEach((list) => {
            list.isActive = false
        })
    }

    findList(listId) {
        return this.todoLists.find((list) => list.listId === listId)
    }

    findItem(itemId) {
        return this.todoItems.find((item) => item.itemId === itemId)
    }

    get activeList() {
        return this.todoLists.find((list) => list.isActive === true) || this.todoLists[0]
    }

    set activeList(list) {
        const listId = list.id
        this.todoLists.find((list) => list.listId === listId).isActive = true
    }

    save() {
        const stateJSON = JSON.stringify(this)
        localStorage.setItem('myAwesomeTodoState', stateJSON)
    }
}

// const initialState = JSON.parse(localStorage.getItem('myAwesomeTodoState'));
const data = localStorage.getItem('myAwesomeTodoState')

const defaultState = {
    todoLists: [
        {
            title: 'Default List',
            description: 'A list to help you get started',
            isActive: true,
            listId: 'list1',
        },
    ],
    todoItems: [
        {
            title: 'add a todo item',
            itemId: 'item1',
            listId: 'list1',
        },
        {
            title: 'edit an item',
            itemId: 'item2',
            listId: 'list1',
        },
        {
            title: 'edit urgency of ite',
            itemId: 'item3',
            listId: 'list1',
        },
        {
            title: 'delete an item',
            itemId: 'item4',
            listId: 'list1',
        },
        {
            title: 'add a list',
            itemId: 'item5',
            listId: 'list1',
        },
        {
            title: 'edit a list',
            itemId: 'item6',
            listId: 'list1',
        },
        {
            title: 'delete a list',
            itemId: 'item7',
            listId: 'list1',
        },
    ],
}

const initialState = data ? JSON.parse(data) : defaultState

export const state = new State(initialState)
