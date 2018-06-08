import { Component, OnInit, Input } from '@angular/core';
import { Task, Goal } from '../App-models/appModels';

import { GoalInfoService } from '../goal-info.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  @Input() goals: Goal[] = [];

  constructor(private goalInfoService: GoalInfoService) { }

  ngOnInit() {
    console.log("this.goals");
    console.log(this.goals);
  }

}
