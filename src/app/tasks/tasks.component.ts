import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../task-template';
import { TaskInfoService } from '../task-info.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @Input() tasks: Task[] = [];

  selectedTask: Task;

  constructor(private taskInfoService: TaskInfoService) { }

  ngOnInit() {
  }
  
  onSelect(task: Task) {
    if (this.selectedTask === null || this.selectedTask === undefined) {
      this.selectedTask = task;
    } else {
      this.selectedTask = null;
    }
  }
  
}