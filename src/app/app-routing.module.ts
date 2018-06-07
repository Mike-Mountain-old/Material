import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskBoardComponent } from './task-board/task-board.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoalsComponent } from './goals/goals.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'task-board', component: TaskBoardComponent },
  { path: 'new-task', component: CreateTaskComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'goals', component: GoalsComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
