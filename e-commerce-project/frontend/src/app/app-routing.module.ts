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
import { ProfileComponent } from './users/profile/profile.component';
import { RegisterComponent } from './users/register/register.component';
import { SingleUserComponent } from './users/singleuser/single.component';
import { ViewDetailsComponent } from './users/view-details/view-details.component';

const routes: Routes = [
{path:"", component:HomeComponent},
{path:"profile",redirectTo:"/profile"},
{path:"home",redirectTo:""},
{path:"login",redirectTo:"/login"},
  {path:"register",component:RegisterComponent},
  {path:"profile",component:ProfileComponent},
{path:"user/single/:id",component:SingleUserComponent},
{path:"login", component:LoginComponent},
{path:"logout",component:LogoutComponent},
{path:"user/all",component:AllUsersComponent},
{path:"user/edit/:id",component:EditUserComponent},
{path:"user/delete/:id",component:DeleteUserComponent},
{path:"user/all/:id",component:SingleUserComponent},
{path:"product/add",component:AddComponent},
{path:"viewDetails/:id",component:ViewDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
