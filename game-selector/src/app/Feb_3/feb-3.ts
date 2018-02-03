import { Component, OnInit } from "@angular/core";
import { MyService } from "../Services/myService";
import { Router } from "@angular/router";
import { Http, Headers, URLSearchParams, RequestOptions } from "@angular/http";

@Component({
    selector: 'feb3',
    templateUrl: './feb-3.html'
})
export class feb3Component implements OnInit{
    birthday = new Date();
    num = 21.53;
    color = 'red';
    fullname;
    firstname;
    lastname;
    myStr = "hello this is a string";
    myArray = [{
        name: 'Nitin',
        marks: 76
    }, {
        name: 'Amit',
        marks: 76
    }, {
        name: 'Sachin',
        marks: 76
    }, {
        name: 'Sahil',
        marks: 76
    }, {
        name: 'Akshay',
        marks: 76
    }, {
        name: 'Naveen',
        marks: 76
    }, {
        name: 'Gaurav',
        marks: 76
    }];
    header;
    params;
    options;
    constructor(private login: MyService, private r: Router, private http:Http){
        this.header = new Headers();
        // this.header.append('x-access-token', 'fghj')
        this.params = new URLSearchParams();
        this.params.set('base', 'INR');
        this.options = new RequestOptions({
            headers: this.header,
            params: this.params
        })
    }
    splitfirst(value){
        return value.split(" ")[0];
    }
    splitlast(value) {
        return value.split(" ")[1];
    }
    logout(){
        sessionStorage.clear();
        this.login.setUser(false);
        this.r.navigate(['/'])
    }

    ngOnInit(){
        if(!this.login.getUser()){
            this.r.navigate(['/']);
        }

        this.http.get('https://api.fixer.io/latest', this.options).subscribe(response=>{
            console.log(response.json());
        })
    }
}