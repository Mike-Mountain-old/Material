import { Component, OnInit } from '@angular/core';

import { Task } from '../task-template';
import { TaskInfoService } from '../task-info.service';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {

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
      .subscribe(tasks => this.setTaskStatus(tasks)); //TODO: Add parameter to look for tasks in state "to do".
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
