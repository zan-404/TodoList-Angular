import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { TodoService } from '../service/todo.service';
import { Todo } from '../model/todo';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  faTrashAlt  =faTrashAlt;
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {

    this.todoService.getTodo().subscribe( (todo) => 
    {
      this.todos = todo
      });
      
  }

  changeTodoStatus(todo:Todo)
  {
    this.todoService.editTodo(todo)
  }

  deleteTodo(todo:Todo)
  {
    this.todoService.deleteTodo(todo)
  }

}
