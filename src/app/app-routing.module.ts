import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskBoardComponent } from './task-board/task-board.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';

const routes: Routes = [
  { path: 'task-board', component: TaskBoardComponent },
  { path: 'dashboard', component: AppDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
