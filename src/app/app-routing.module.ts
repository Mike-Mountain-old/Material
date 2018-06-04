import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskBoardComponent } from './task-board/task-board.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { CreateTaskComponent } from './create-task/create-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'task-board', component: TaskBoardComponent },
  { path: 'dashboard', component: AppDashboardComponent },
  { path: 'new-task', component: CreateTaskComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
