import { displayState } from "./index";
import { listHoverOptionsComponent } from "./components/ListHoverOptions";
import { itemCardHoverOptionsComponent } from "./components/ItemHoverOptions";
import { state } from "./models/State";
import { TodoList } from "./models/TodoList";
import { TodoItem } from "./models/TodoItem";
import { itemEditor } from "./components/editItem";
import { listEditor } from "./components/editList";

export function handleEvents() {
  // Add list
  const addListBtn = document.getElementById("list-creator-btn");
  addListBtn.onclick = () => addNewList();

  // Add item
  const addItemBtn = document.getElementById("todo-item-submit");
  addItemBtn.onclick = () => addNewItem();

  // set active list
  const listElements: HTMLElement[] = Array.from(
    document.querySelectorAll(".list")
  );
  listElements.forEach((list) => {
    list.onclick = () => makeActiveList(list.id);
  });

  // item hover option
  const itemsCards: HTMLElement[] = Array.from(
    document.querySelectorAll(".itemCard")
  );
  itemsCards.forEach((item) => {
    item.onmouseenter = (e) => {
      item.classList.add("itemCard-hover");
      addItemOptions(e);
    };
    item.onmouseleave = () => {
      item.classList.remove("itemCard-hover");
      removeHoverOptions();
    };
  });

  //  List hover options
  const listCards: HTMLElement[] = Array.from(
    document.querySelectorAll(".list")
  );
  listCards.forEach((list) => {
    list.onmouseenter = (e) => {
      list.classList.add("listCard-hover");
      addListOptions(e);
    };
    list.onmouseleave = () => {
      list.classList.remove("listCard-hover");
      removeListHoverOptions();
    };
  });
}

function makeActiveList(listId: string): void {
  state.clearActive();
  state.findList(listId)
    ? (state.findList(listId).isActive = true)
    : (state.todoLists[0].isActive = true);
  state.save();

  displayState();
}

function addNewList() {
  const listInput: string = document.getElementById("list-creator-input").value;
  const todoList = new TodoList(listInput);

  state.clearActive();
  state.addTodoLists = todoList;
  state.save();

  displayState();
}

function addNewItem() {
  const input = document.getElementById("todo-item-input").value;
  const listId = state.activeList.listId;
  const item = new TodoItem(listId, input);

  state.addItem = item;
  state.save();
  displayState();
}

function handleEditList(e) {
  const list = state.findList(e.target.parentElement.parentElement.id);

  document.body.appendChild(listEditor(list));

  const pageOverlay = document.getElementById("page-overlay");
  pageOverlay.addEventListener("click", (e) => {
    if (e.target.id === "page-overlay") {
      pageOverlay.remove();
    }
  });

  const submitBtn = document.getElementById("list-submit");
  submitBtn.onclick = (e) => {
    e.preventDefault();
    list.title = document.getElementById("list-title").value;

    state.save();
    displayState();
  };
}

function handleDeleteList(e) {
  const listId = e.target.parentElement.parentElement.id;

  state.removeListItems(listId);
  state.removeList(listId);
  makeActiveList(state.todoLists[0].listId);
  state.save();
  displayState();
}

function handleDeleteItem(e) {
  const itemId = e.target.parentElement.parentElement.id;

  state.removeItem(itemId);
  state.save();
  displayState();
}

function handleCompleteItem(e) {
  const itemId = e.target.parentElement.parentElement.id;
  const item = state.findItem(itemId);
  const DOMelement = document.getElementById(itemId);

  item.isCompleted === true
    ? (item.isCompleted = false)
    : (item.isCompleted = true);
  state.save();
  displayState();
}

function handleEditItem(e) {
  const item = state.findItem(e.target.parentElement.parentElement.id);

  itemEditor(item);
  // pageOverlay.style.display = 'block'

  const pageOverlay = document.getElementById("page-overlay");
  pageOverlay.addEventListener("click", (e) => {
    if (e.target.id === "page-overlay") {
      pageOverlay.remove();

      console.log("clicked outside of form");
    }
  });

  const submitBtn = document.getElementById("item-submit");
  submitBtn.onclick = (e) => {
    e.preventDefault();
    item.title = document.getElementById("item-title").value;
    item.dueDate = document.getElementById("item-due-date").value;
    item.isUrgent = document.getElementById("item-priority").checked
      ? true
      : false;

    console.log(item);

    state.save();
    displayState();
  };

  console.log("Edit Item");
}

function addItemOptions(e) {
  const itemId: string = e.target.id;
  const itemElement: HTMLElement = e.target;
  const options = itemCardHoverOptionsComponent(itemId);

  itemElement.appendChild(options);
  listenForOptionClick();
}

function addListOptions(e) {
  const listId = e.target.id;
  const listElement = e.target;
  const options = listHoverOptionsComponent(listId);

  listElement.appendChild(options);
  listenForOptionClick();
}

function removeHoverOptions() {
  const hoverOptions = document.getElementById("itemCardHoverOptions");
  hoverOptions.remove();
}

function removeListHoverOptions() {
  const hoverOptions = document.getElementById("listHoverOptions");
  hoverOptions.remove();
}

function listenForOptionClick() {
  // const id = e.target.parentElement.id
  const deleteBtn = document.getElementById("delete-btn");
  const editBtn = document.getElementById("edit-btn");
  const completeBtn = document.getElementById("complete-btn") || null;

  deleteBtn.onclick = (e) => {
    e.target.parentElement.id === "listHoverOptions"
      ? handleDeleteList(e)
      : handleDeleteItem(e);
  };

  editBtn.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target.parentElement.id);
    e.target.parentElement.id === "listHoverOptions"
      ? handleEditList(e)
      : handleEditItem(e);
  };

  if (completeBtn) completeBtn.onclick = (e) => handleCompleteItem(e);
}
