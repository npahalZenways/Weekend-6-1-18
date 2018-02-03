import { Component, OnInit } from "@angular/core";
import { MyService } from "./Services/myService";
import { Router } from "@angular/router";

@Component({
    templateUrl: './login.html'
})
export class login implements OnInit{
    uname;
    key;
    constructor(private loginService: MyService, private r: Router) {
        
    }
    login(){
        if(this.uname == 'admin' && this.key == 'admin@123'){
            this.loginService.setUser(true);
            sessionStorage.setItem('IsUserLoggedIn', 'true')
            this.r.navigate(['/home']);
        } else {
            alert('Invalid credentials');
        }
    }
    ngOnInit(){
        if(this.loginService.getUser()){
            this.r.navigate(['/home'])
        }
    }
}