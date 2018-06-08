import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


import { Task } from './task-template';
import { ReturnMessageService } from './return-message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskInfoService { 

  constructor(
    private http: HttpClient,
    private returnMessageService: ReturnMessageService
  ) { }

  private log(message: string) {
    this.returnMessageService.add('TaskService says: ' + message);
  }

  private tasksUrl = 'http://localhost:1337/task';

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
      .pipe(
        tap(tasks => this.log('Fetched Tasks')),
        catchError(this.handleError('getTasks', []))
      );
  } 
  
  /** GET Task by id. Will 404 if id not found */
  getTaskDetail(id: string) {
    const url = `${this.tasksUrl}/${id}`;
    console.log(`${this.tasksUrl}/${id}`);
    return this.http.get<Task>(url).pipe(
      tap(_ => this.log(`Fetched Task id=${id}`)),
      catchError(this.handleError<Task>(`getTask id=${id}`))
    );
  }

  /** PUT: update the Task on the server */
  updateTask (task: Task, id: string): Observable<any> {
    const tasksUpdateUrl = `${this.tasksUrl}/${id}`;
    return this.http.put(tasksUpdateUrl, task, httpOptions).pipe(
      tap(_ => console.log(`Updated task id=${task.id}`)),
      catchError(this.handleError<any>('updatedTask'))
    );
  }

  /** POST: add a new Task to the server */
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, httpOptions).pipe(
      tap((task: Task) => this.log(`added task w/ id=${task.id}`)),
      catchError(this.handleError<Task>('addTask'))
    )
  }

  /** DELETE: delete the Task from the server */
  deleteTask(task: Task): Observable<Task> {
    const id = task.id;
    const url = `${this.tasksUrl}/${id}`;

    return this.http.delete<Task>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted task id=${id}`)),
      catchError(this.handleError<Task>('deleteTask'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
    
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
