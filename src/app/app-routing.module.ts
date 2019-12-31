import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ToDoListComponent } from "./todolist/todolist.component";
import { ToDo } from "./createtodo/createtodo.component";
const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "all", component: ToDoListComponent, pathMatch: "full" },
  { path: "new", component: ToDo, pathMatch: "full" }
  //{ path: "priority", component: HomeComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
