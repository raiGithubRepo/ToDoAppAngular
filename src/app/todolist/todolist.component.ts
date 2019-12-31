import { Component, OnInit } from "@angular/core";
import { ToDoService } from "../services/todo.service";
@Component({
  selector: "ToDoList",
  templateUrl: "./todolist.component.html",
  styleUrls: ["./todolist.component.css"]
})
export class ToDoListComponent implements OnInit {
  todoList: any[] = [];
  constructor(private todoService: ToDoService) {}
  ngOnInit() {
    this.todoService.getToDoList().subscribe((data: any[]) => {
      this.todoList = data;
    });
  }
}
