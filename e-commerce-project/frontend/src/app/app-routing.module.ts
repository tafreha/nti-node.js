import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './products/add/add.component';
import { EditComponent } from './products/edit/edit.component';
import { SingleComponent } from './products/single/single.component';
import { AllUsersComponent } from './users/all-users/all-users.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';
import { RegisterComponent } from './users/register/register.component';
import { SingleUserComponent } from './users/singleuser/single.component';

const routes: Routes = [
{path:"", component:HomeComponent},
{path:"profile",redirectTo:"/profile"},
{path:"home",redirectTo:""},
  {path:"register",component:RegisterComponent},
{path:"login", component:LoginComponent},
{path:"logout",component:LogoutComponent},
{path:"user/all",component:AllUsersComponent},
{path:"user/edit/:id",component:EditUserComponent},
{path:"user/delete/:id",component:DeleteUserComponent},
{path:"user/all/:id",component:SingleUserComponent},
{path:"product/add",component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
