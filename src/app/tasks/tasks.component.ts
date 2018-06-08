import { Component, OnInit, Input, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

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

  constructor(
    public dialog: MatDialog,
    private taskInfoService: TaskInfoService
  ){ }

  ngOnInit() {
  }
  
  onSelect(task: Task) {
    if (this.selectedTask === null || this.selectedTask === undefined) {
      this.selectedTask = task;
      console.log('The Task Has Been Selected! this.selectedTask = ' + this.selectedTask);
    } else {
      this.selectedTask = null;
      console.log('The Task Is No Longer Selected! this.selectedTask = ' + this.selectedTask);
    }
  }
  
  delete(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskInfoService.deleteTask(task).subscribe();
  } 

  openDialog(singleTask): void {
    let dialogRef = this.dialog.open(taskDialogComponent, {
      width: '50%',
      data: {
        task: singleTask
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'task-dialog',    
  templateUrl: './dialog.component.html',
  styles: ['.mat-form-field {display: block !important;}']
  })
  export class taskDialogComponent {

    constructor(
      public dialogRef: MatDialogRef<taskDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private taskInfoService: TaskInfoService
    ) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

    save() {
      console.log('The task is being saved');
      this.taskInfoService.updateTask(this.data.task, this.data.task.id)
        .subscribe(() => this.onNoClick());
    }

  }