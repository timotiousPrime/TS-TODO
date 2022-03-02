export interface Item {
  title?: string;
  listId: string;
  itemId: string;
  urgent: boolean;
  completed: boolean;
  dueDate?: Date;
  createdDate: Date;
}

export class TodoItem {
  private title: string = "";
  private dueDate: Date;
  private urgent: boolean = false;
  private completed: boolean = false;
  readonly listId: string;
  readonly itemId = `item${new Date().getTime()}`;
  private createdDate = new Date();

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
