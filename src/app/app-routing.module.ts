import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';


const routes: Routes = [
  { path: '', redirectTo: 'PlayTilsGridList', pathMatch: 'full' }, // screen defualt
  { path: 'LoginScreen', component: LoginScreenComponent },
  { path: 'PlayTilsGridList', component: GridListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
