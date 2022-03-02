import { Item } from "./TodoItem";
import { List } from "./TodoList";

export interface State {
  lists: List[];
  todoItems: Item[];
}

export class State {
  lists: List[] = [];
  todoItems: Item[] = [];

  constructor(initialState: State) {
    this.lists = [...initialState.lists] || [];
    this.todoItems = [...initialState.items] || [];
  }

  set addTodoLists(list: List) {
    this.lists = [...this.lists, list];
    // this.lists = this.lists.push(list);
  }

  get todoLists(): List[] {
    return this.lists;
  }

  removeList(listId: string) {
    this.lists = this.lists.filter((element) => element.listId !== listId);
  }

  set addItem(item: Item) {
    this.todoItems = [...this.todoItems, item];
  }

  get items(): Item[] {
    return this.todoItems;
  }

  removeItem(itemId: string) {
    this.todoItems = this.todoItems.filter(
      (element) => element.itemId !== itemId
    );
  }

  removeListItems(listId: string) {
    this.todoItems = this.todoItems.filter((item) => item.listId !== listId);
  }

  clearActive(): void {
    this.todoLists.forEach((list) => {
      list.isActive = false;
    });
  }

  findList(listId: string): List {
    return this.todoLists.find((list) => list.listId === listId);
  }

  findItem(itemId: string): Item {
    return this.todoItems.find((item) => item.itemId === itemId);
  }

  get activeList(): List {
    return (
      this.todoLists.find((list) => list.isActive === true) || this.todoLists[0]
    );
  }

  set activeList(list: List) {
    const listId = list.listId;
    this.todoLists.find((list) => list.listId === listId).isActive = true;
  }

  save(): void {
    const stateJSON = JSON.stringify(this);
    localStorage.setItem("myAwesomeTodoState", stateJSON);
  }
}

// const initialState = JSON.parse(localStorage.getItem('myAwesomeTodoState'));
const data = localStorage.getItem("myAwesomeTodoState");

const defaultState = {
  todoLists: [
    {
      title: "Default List",
      description: "A list to help you get started",
      isActive: true,
      listId: "list1",
    },
  ],
  todoItems: [
    {
      title: "add a todo item",
      itemId: "item1",
      listId: "list1",
    },
    {
      title: "edit an item",
      itemId: "item2",
      listId: "list1",
    },
    {
      title: "edit urgency of ite",
      itemId: "item3",
      listId: "list1",
    },
    {
      title: "delete an item",
      itemId: "item4",
      listId: "list1",
    },
    {
      title: "add a list",
      itemId: "item5",
      listId: "list1",
    },
    {
      title: "edit a list",
      itemId: "item6",
      listId: "list1",
    },
    {
      title: "delete a list",
      itemId: "item7",
      listId: "list1",
    },
  ],
};

const initialState = data ? JSON.parse(data) : defaultState;

export const state = new State(initialState);
