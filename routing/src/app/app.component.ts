import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private rou: Router){

  }
  nav(routename){
    if(routename == 'home'){
      this.rou.navigate(['/home']);
    }
    if (routename == 'child') {
      this.rou.navigate(['/homechild']);
    }
    if (routename == 'game') {
      this.rou.navigate(['/game']);
    }
  }
}
