import { Component, OnInit } from "@angular/core";
import { ToDoService } from "../services/todo.service";
import { ToDoModel } from "../models/todomodel";

@Component({
  selector: "ToDoList",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"]
})
export class ToDoListComponent implements OnInit {
  todoList: any[] = [];
  selectedToDo: ToDoModel;
  constructor(private todoService: ToDoService) {}
  ngOnInit() {
    this.todoService.getToDoList().subscribe((data: any[]) => {
      this.todoList = data;
    });
  }
  onSelect(todo: ToDoModel): void {
    this.selectedToDo = todo;
  }
}
