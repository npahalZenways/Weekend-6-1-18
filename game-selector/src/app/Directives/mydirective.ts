import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[my-directive]',
    host:{
        '(mouseenter)': 'highlight($event)'
    }
})
export class MyDirective {

    @Input('color') color;

    constructor(private ele: ElementRef) {
        
    }
    highlight(e){
        console.log(e)
        this.ele.nativeElement.style.color = this.color;
        this.ele.nativeElement.setAttribute('class', 'default');
    }
    @HostListener('mouseleave') remove() {
        this.ele.nativeElement.style.color = 'black';
    }

}