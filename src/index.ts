import "./style.css";
import { handleEvents } from "./eventListeners";
import {
  displayPageLayout,
  displayLists,
  clearPageContents,
  displayActiveList,
} from "./DOM";

export function displayState() {
  clearPageContents();
  displayPageLayout();
  displayLists();
  displayActiveList();

  handleEvents();
}

displayState();
