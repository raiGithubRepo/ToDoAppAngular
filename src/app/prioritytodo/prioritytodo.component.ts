import { Component, OnInit } from "@angular/core";
import { ToDoService } from "../services/todo.service";

@Component({
  selector: "PriorityToDo",
  templateUrl: "./prioritytodo.component.html",
  styleUrls: ["./prioritytodo.component.css"]
})
export class PriorityToDo implements OnInit {
  todoList: any[] = [];
  constructor(private todoService: ToDoService) {}
  ngOnInit() {
    this.todoService.getToDoList().subscribe((data: any[]) => {
      const filteredData = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].numberBool === true) {
          filteredData.push(data[i]);
        }
      }
      console.log(filteredData);
      this.todoList = filteredData;
    });
  }
}
