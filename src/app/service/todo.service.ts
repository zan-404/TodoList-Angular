import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from "../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos:Todo[];

  constructor() {
    this.todos= [
      {
        id:"1",
        title:'First todo',
        isComplete:true,
        date:new Date(),
      },
      {
        id:"2",
        title:'Second todo',
        isComplete:true,
        date:new Date(),

      },
      {
        id:"3",
        title:'Third todo',
        isComplete:true,
        date:new Date(),

      }
    ]
  }

  getTodo()
  {
    return of(this.todos);
  }

  createTodo(todo:Todo)
  {
    this.todos.push(todo);
    console.log("addes");
    console.log(this.todos)
  }

  editTodo(todo:Todo)
  {
    this.todos.map(singleTodo =>
      {
      if(singleTodo.id == todo.id)
      {
        todo.isComplete= !todo.isComplete;
      }
      })
    
  } 

  deleteTodo(todo:Todo)
  {
    const indexofTodo = this.todos.findIndex(
      (currentObj) => currentObj.id == todo.id
    );
    this.todos.splice(indexofTodo, 1);
    
  }


}
