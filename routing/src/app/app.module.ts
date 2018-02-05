import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router";
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { AddNewGameComponent } from './add-new-game/add-new-game.component';
import { myHome } from './home/home.component';
import { HomeChildComponent } from './home-child/home-child.component';

// const routes: Route[] = [{
//   path: '',
//   redirectTo: 'home',
//   pathMatch: 'full'
// }, {
//   path: 'home',
//   component: myHome,
//   children: [{
//     path: '',
//     redirectTo: 'child',
//     pathMatch: 'full'
//   }, {
//     path: 'child',
//     component: HomeChildComponent,
//     children: [{
//       path: '',
//       redirectTo: 'mychild',
//       pathMatch: 'full'
//     },{
//       path: 'mychild',
//       component: GameComponent
//     }]
//   }]
// }]

const myroutes: Route[] = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},{
  path: 'home',
  component: myHome
},{
  path: 'homechild',
  component: HomeChildComponent
},{
  path: 'game',
  component: GameComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AddNewGameComponent,
    myHome,
    HomeChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
