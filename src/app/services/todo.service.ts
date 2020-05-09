import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return [
      {
        id: 1,
        title: "todo_1",
        completed: false
      },
      {
        id: 2,
        title: "todo_2",
        completed: true
      },
      {
        id: 3,
        title: "todo_3",
        completed: false
      },
      {
        id: 4,
        title: "todo_4",
        completed: true
      },
    ]
  }
}
