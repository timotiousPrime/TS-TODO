import { state } from "./models/State";
import { todoItemComponent } from "./components/todoItem";
import { pageLayout } from "./components/pageLayout";
import { listElementComponent } from "./components/ListElement";
import { todoListComponent } from "./components/todoListComponent";

export function displayPageLayout() {
  const page = pageLayout.template;
  return (document.body.innerHTML = page);
}

export function displayLists() {
  removeListsDomElements();
  state.todoLists.forEach((list) => {
    const listElement = listElementComponent(list);
    document.getElementById("lists").appendChild(listElement);
  });
}

function removeListsDomElements() {
  const todoLists = document.getElementById("lists");
  while (todoLists.firstElementChild) {
    todoLists.firstElementChild.remove();
  }
}

export function clearPageContents() {
  while (document.body.firstChild) {
    document.body.removeChild(document.body.firstChild);
  }
}

export function displayActiveList() {
  const activeListDomElement = document.getElementById(
    `${state.activeList.listId}`
  );
  const main = document.getElementById("main");

  removeActiveClass();
  activeListDomElement.classList.add("active");

  main.appendChild(todoListComponent(state.activeList));

  state.todoItems.forEach((item) => {
    if (item.listId === state.activeList.listId) {
      todoItemComponent(item);
    }
  });
}

function removeActiveClass() {
  const lists = document.getElementById("lists");
  lists.childNodes.forEach((child) => child.classList.remove("active"));
}

export function setActiveList(listId) {
  const activeList = document.getElementById(listId);
  activeList.classList.add("active");
}
