import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameWindowComponent } from './Components/game-window/game-window.component';
import { CodeWindowComponent } from './Components/code-window/code-window.component';

@NgModule({
  declarations: [
    AppComponent,
    GameWindowComponent,
    CodeWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
