import { Component, OnInit } from '@angular/core';
import { Task, Goal } from '../App-models/appModels';

import { GoalInfoService } from '../goal-info.service';

@Component({
  selector: 'app-goals-dash',
  templateUrl: './goals-dash.component.html',
  styleUrls: ['./goals-dash.component.scss']
})
export class GoalsDashComponent implements OnInit {

  goals: Goal[] = [];
  loading = true;

  constructor(private goalInfoService: GoalInfoService) { }

  ngOnInit() {
    this.fetchGoals();
  }

  fetchGoals() {
    this.goalInfoService.getGoals()
      .subscribe(payload => {
        this.goals = payload; 
        this.loading=false;
        console.log("goalsDash-this.goals");
        console.log(this.goals);
      });
  }

}
