import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Route } from "@angular/router";
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { AddNewGameComponent } from './add-new-game/add-new-game.component';
import { HomeComponent } from './home/home.component';
import { HomeChildComponent } from './home-child/home-child.component';

const routes: Route[] = [{

}];
@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AddNewGameComponent,
    HomeComponent,
    HomeChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: HomeComponent,
      children: [{
        path: '',
        redirectTo: 'child',
        pathMatch: 'full'
      }, {
        path: 'child',
        component: HomeChildComponent
      }]
    }, {
      path: 'game/:id',
      component: GameComponent
    }, {
      path: 'newgame',
      component: AddNewGameComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
