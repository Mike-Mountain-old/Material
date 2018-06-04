import { Component, OnInit } from '@angular/core';

import { Task } from '../task-template';
import { TaskInfoService } from '../task-info.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskInfoService: TaskInfoService) { }

  ngOnInit() {
  }

  add(title: string, priority: number, description: string, category: string, due_date: string, comments: string, progress: string) {
    title = title.trim();
    if (!title) {return;}
    this.taskInfoService.addTask({title, priority, description, category, due_date, comments, progress} as Task)
      .subscribe(task => {
        this.tasks.push(task);
      })
  }

}
