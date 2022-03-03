export interface List {
  title?: string;
  description?: string;
  isActive: boolean;
  listId: string;
  dateCreated: string;
}

export class TodoList {
  title: string = "";
  description: string = "";
  active: boolean = true;
  listId = `list${new Date().getTime()}`;
  dateCreated = String(new Date());

  constructor(title?: string) {
    this.title = title;
  }

  get listTitle() {
    return this.title;
  }

  set listTitle(value) {
    this.title = value;
  }

  get listDescription() {
    return this.description;
  }

  set listDescription(value) {
    this.description = value;
  }

  get id() {
    return this.listId;
  }

  get isActive() {
    return this.isActive;
  }

  set isActive(boolVal) {
    this.isActive = boolVal;
  }
}
