import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class myHome implements OnInit {
  //dependency injection
  constructor(private myRouter: Router) { }
  gotogame(){
    this.myRouter.navigate(['/newgame'])
  }
  ngOnInit(){

  }
}