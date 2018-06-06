import { Component, OnInit } from '@angular/core';

import { Task } from '../task-template';
import { TaskInfoService } from '../task-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskInfoService: TaskInfoService) { }

  ngOnInit() {
    this.fetchTasks();
  }

  fetchTasks() {
    this.taskInfoService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
  }

}
