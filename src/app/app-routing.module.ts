import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';


const routes: Routes = [
  { path: 'todo', component: TodosComponent },
  { path: '',   redirectTo: '/todo', pathMatch: 'full' },   // redirect to `todo`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
