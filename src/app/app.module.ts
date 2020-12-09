import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { GuideComponent } from './guide/guide.component';
import { BoardComponent } from './board/board.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { GridListComponent } from './grid-list/grid-list.component';
import {MatGridTileHarness} from '@angular/material/grid-list/testing';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    GuideComponent,
    BoardComponent,
    SwitchCaseComponent,
    GridListComponent,
    LoginScreenComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule

    // RouterModule.forRoot(routes {
    //   useHash: true,
    //   enableTracing: false
    //  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }