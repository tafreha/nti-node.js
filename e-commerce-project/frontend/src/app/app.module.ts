import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layoutes/navbar/navbar.component';
import { FooterComponent } from './layoutes/footer/footer.component';
import { HeaderComponent } from './layoutes/header/header.component';
import { SidebarComponent } from './layoutes/sidebar/sidebar.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';
import { AllUsersComponent } from './users/all-users/all-users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { AddComponent } from './products/add/add.component';
import { EditComponent } from './products/edit/edit.component';
import { SingleComponent } from './products/single/single.component';
import { DeleteComponent } from './products/delete/delete.component';
import { AllProductsComponent } from './products/all-products/all-products.component';
import { AllComponent } from './cart/all/all.component';
import { HomeComponent } from './home/home.component';
import {SingleUserComponent} from './users/singleuser/single.component'
import { AuthInterceptor } from './providers/interceptors/auth.interceptor';
import { ProfileComponent } from './users/profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SingleUserComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AllUsersComponent,
    EditUserComponent,
    DeleteUserComponent,
    AddComponent,
    EditComponent,
    SingleComponent,
    DeleteComponent,
    AllProductsComponent,
    AllComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
