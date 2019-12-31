import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ToDoService {
  API_URL: string =
    "https://my-json-server.typicode.com/raiGithubRepo/fakejsonapi/data";
  constructor(private http: HttpClient) {}
  getToDoList() {
    return this.http.get(this.API_URL);
  }
}
