import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Goal } from './App-models/appModels';
import { ReturnMessageService } from './return-message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
};


@Injectable({
  providedIn: 'root'
})
export class GoalInfoService {

  constructor(
    private http: HttpClient,
    private returnMessageService: ReturnMessageService
  ) { }

  private log(message: string) {
    this.returnMessageService.add('GoalService says: ' + message);
  }

  private goalsUrl = 'http://localhost:1337/goal';

  getGoals(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.goalsUrl)
      .pipe(
        tap(goals => this.log('Fetched Goals')),
        catchError(this.handleError('getGoals', []))
      );
  } 
  
  /** GET Goal by id. Will 404 if id not found */
  getGoalDetail(id: string) {
    const url = `${this.goalsUrl}/${id}`;
    console.log(`${this.goalsUrl}/${id}`);
    return this.http.get<Goal>(url).pipe(
      tap(_ => this.log(`Fetched Goal id=${id}`)),
      catchError(this.handleError<Goal>(`getGoal id=${id}`))
    );
  }

  /** PUT: update the Goal on the server */
  updateGoal (goal: Goal, id: string): Observable<any> {
    const goalsUpdateUrl = `${this.goalsUrl}/${id}`;
    return this.http.put(goalsUpdateUrl, goal, httpOptions).pipe(
      tap(_ => this.log(`Updated goal id=${goal.id}`)),
      catchError(this.handleError<any>('updatedGoal'))
    );
  }

  /** POST: add a new Goal to the server */
  addGoal(goal: Goal): Observable<Goal> {
    return this.http.post<Goal>(this.goalsUrl, goal, httpOptions).pipe(
      tap((goal: Goal) => this.log(`added goal w/ id=${goal.id}`)),
      catchError(this.handleError<Goal>('addGoal'))
    )
  }

  /** DELETE: delete the Goal from the server */
  deleteGoal(goal: Goal): Observable<Goal> {
    const id = goal.id;
    const url = `${this.goalsUrl}/${id}`;

    return this.http.delete<Goal>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted goal id=${id}`)),
      catchError(this.handleError<Goal>('deleteGoal'))
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
