import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ToDoService {
  API_URL: string =
    "https://app.fakejson.com/q/4R7WJrAI?token=ZDeSSxbIQmVIP8qnPLCKwQ";
  constructor(private http: HttpClient) {}
  getToDoList() {
    return this.http.get(this.API_URL);
  }
}
