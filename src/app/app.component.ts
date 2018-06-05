import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  lightTheme: boolean = false; 

  changeTheme() {
    if (this.lightTheme === false) {
      this.lightTheme = true;
    } else {
      this.lightTheme = false;
    }
  }
  
}
