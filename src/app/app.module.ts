import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule, 
  MatCardModule, 
  MatGridListModule, 
  MatMenuModule, 
  MatFormFieldModule,
  MatFormFieldControl,
  MatInputModule, 
  MatDividerModule,
  MatSelectModule,
  MatDatepickerModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatTabsModule,
  MatNativeDateModule,
  MatDialogModule,
} from '@angular/material';
import { TaskBoardComponent } from './task-board/task-board.component';
import { TasksComponent, taskDialogComponent } from './tasks/tasks.component';
import { TaskInfoService } from './task-info.service';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingleTaskComponent } from './single-task/single-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavigationComponent,
    TaskBoardComponent,
    TasksComponent,
    CreateTaskComponent,
    DashboardComponent,
    SingleTaskComponent,
    taskDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatTabsModule,
    MatNativeDateModule,
    MatDialogModule,
  ],
  providers: [TaskInfoService],
  entryComponents: [taskDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
