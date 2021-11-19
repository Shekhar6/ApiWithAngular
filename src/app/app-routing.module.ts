import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGaurdService } from './AuthServices/auth-gaurd.service';

import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  {path:"",redirectTo:"/login",pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent,canActivate:[AuthGaurdService]},
  {path:"login/register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
