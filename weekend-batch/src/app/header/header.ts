import { Component, Input, Output, EventEmitter, ViewChild } from "@angular/core";

@Component({
    selector: 'app-header',
    // template: `
    //     <p>This is a Header component</p>
    //     <div>
    //         <p *ngIf="isTrue">Para inside div</p>
    //         <button (click)="isTrue = true">Click</button>
    //     </div>
    // `
    // we can use only one template for one component
    templateUrl: './header.html',
    // styles: ['p{color: blue}', "div{background-color: yellow}"]
    styleUrls: ['./header.css', './header1.css'], //we can use multiple stylesheets for a component
    // inputs: ['name']
})
export class HeaderComponent {

    userData = {
        name: '',
        email: '',
        password: '',
        phone: ''
    }

    @ViewChild('myForm') public tempForm;

    // @Input is a property decorator
    @Input('name') receivedName;
    isTrue = false;
    outputToSent = 'Output is here';

    @Output('outputevent') myEvent = new EventEmitter();
    send(){
        this.myEvent.emit(this.outputToSent);
    }
    formData(){
        // this.userData = {
        //     name: '',
        //     email: '',
        //     password: '',
        //     phone: ''
        // }
        this.tempForm.reset();
        // this.tempForm.form.markAsUntouched();
        console.log(this.userData)
    }
}