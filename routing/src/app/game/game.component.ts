import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game_name;
  username = 'nitin';
  password: 'ab@123';
  constructor(private aroute: ActivatedRoute) { 
    
  }
  login(){

  }
  ngOnInit() {
    this.game_name = this.aroute.snapshot.params.id;
    localStorage.setItem('uname', 'abc');
    sessionStorage.setItem('uname', 'dfghj');
    console.log(localStorage.getItem('uname'), sessionStorage.uname)
  }

}
