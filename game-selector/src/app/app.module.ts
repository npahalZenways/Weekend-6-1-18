import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { feb3Component } from "./Feb_3/feb-3";
import { MyService } from "./Services/myService";
import { RouterModule } from "@angular/router";
import { login } from "./login";
import { FormsModule } from "@angular/forms";
import { CustomPipe } from "./Pipes/custom-pipe";
import { MyDirective } from "./Directives/mydirective";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    feb3Component,
    login,
    CustomPipe,
    MyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    RouterModule.forRoot([{
      path:'',
      component: login
    },{
      path: 'home',
      component: feb3Component
    }])
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
