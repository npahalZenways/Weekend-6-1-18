import { Injectable } from "@angular/core";

@Injectable()
export class MyService {
    isTrue: boolean = false;
    constructor() {
        if(sessionStorage.IsUserLoggedIn == 'true') this.isTrue = true;
    }
    setUser(val: boolean){
        this.isTrue = val;
    }
    getUser(): boolean{
        return this.isTrue;
    }
}