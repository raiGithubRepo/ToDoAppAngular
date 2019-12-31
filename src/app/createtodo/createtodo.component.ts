import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ToDoModel } from "../models/todomodel";
import { ToDoService } from "../services/todo.service";

@Component({
  selector: "ToDo",
  templateUrl: "./createtodo.component.html",
  styleUrls: ["./createtodo.component.css"]
})
export class ToDo implements OnInit {
  todo: ToDoModel;

  constructor(
    private route: ActivatedRoute,
    private todoService: ToDoService,
    private location: Location
  ) {}
}
