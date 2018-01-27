import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first application';
  source = "https://pbs.twimg.com/profile_images/875749462957670400/T0lwiBK8.jpg";
  sty = "red";
  valueFromInput;
  myArray = [{
    name: 'Nitin',
    phone: 98765
  },
  {
    name: 'Nitin',
    phone: 98765
  },
  {
    name: 'Nitin',
    phone: 98765
  },
  {
    name: 'Nitin',
    phone: 98765
  }]
  printInConsole(){
    console.log(this.valueFromInput)
    // switch(/*condition*/){
    //   case 1:
    //     break;
    //   default:
    // }
  }
  receiveInputFromChild(e){
    console.log(e);
  }
}
