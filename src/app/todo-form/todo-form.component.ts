import { Component, OnInit } from '@angular/core';
import { Todo } from "../model/todo";
import { v4 as Uuidv4} from "uuid";
import {TodoService } from "../service/todo.service"
import { from } from 'rxjs';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoTitle : string;

  constructor(private todoservice:TodoService) { }

  ngOnInit(): void {
  }

  addTodo()
  {
    const newTodo : Todo = {
      id:Uuidv4(),
      title: this.todoTitle,
      date : new Date,
      isComplete : false,
    }
    console.log("asdfsaf")

    this.todoservice.createTodo(newTodo);
    this.todoTitle="";
    
  }

  

}
