export interface Item {
  title?: string;
  listId: string;
  id: string;
  isUrgent: boolean;
  isCompleted: boolean;
  dueDate?: Date;
  createdDate: Date;
}

export class TodoItem {
  title: string = "";
  dueDate: Date;
  urgent: boolean = false;
  private completed: boolean = false;
  readonly listId: string;
  readonly itemId = `item${new Date().getTime()}`;
  createdDate = new Date();

  constructor(
    listId: string,
    title?: string,
    dueDate?: Date,
    isUrgent?: boolean
  ) {
    this.title = title;
    this.listId = listId;
    this.dueDate = dueDate;
    this.urgent = isUrgent;
  }

  get itemTitle(): string {
    return this.title;
  }

  set itemTitle(value: string) {
    this.title = value;
  }

  set isCompleted(value: boolean) {
    this.completed = value;
  }

  get isCompleted(): boolean {
    return this.completed;
  }

  get id(): string {
    return this.itemId;
  }

  get isUrgent(): boolean {
    return this.urgent;
  }

  set isUrgent(value: boolean) {
    this.urgent = value;
  }
}
