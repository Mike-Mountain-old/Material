import { Component, OnInit } from '@angular/core';

import { Task } from '../App-models/appModels';
import { TaskInfoService } from '../task-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tasks: Task[] = [];

  taskToDo: Task[] = [];
  taskInProgress: Task[] = [];
  taskComplete: Task[] = [];

  constructor(private taskInfoService: TaskInfoService) { }

  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskInfoService.getTasks()
      .subscribe(tasks => this.setTaskStatus(tasks));
  }

  setTaskStatus(tasks) {
    this.tasks = tasks;
    for (let task of this.tasks) {
      switch(task.progress) {
        case 'To Do':
            this.taskToDo.push(task);
            break;
        case 'In Progress':
            this.taskInProgress.push(task);
            break;
        case 'Complete':
            this.taskComplete.push(task);
            break;
        default:
            break;       
      } 
    }
  }

}
