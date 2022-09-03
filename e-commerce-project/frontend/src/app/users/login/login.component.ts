import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/providers/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  
  errMsg: any= {}


  loginForm:FormGroup=new FormGroup({
    
  email:new FormControl(),
  password:new FormControl(),
 
  
  
  })
    constructor(private _auth:AuthService,private _router:Router) { }
  
    ngOnInit(): void {
      if(this._auth.isLoggedIn) this._router.navigateByUrl("/profile")
    }
    login(){
      let userData:User=this.loginForm.value
      if(this.loginForm.valid)
      console.log(this.loginForm.value)
      this._auth.login(userData).subscribe(
        res=> {
          console.log(res)
          console.log("done")
        localStorage.setItem("Ecomerce1Token",res.data.token)
    this._auth.isLoggedIn=true
    this._auth.userData=res.data.userData
    },
        e=>{
          this.errMsg= e

          if(e.error.message.includes("email")) this.errMsg.email=e.error.message
          if(e.error.message.includes("password")) this.errMsg.password=e.error.message
          
        },
        ()=>{
          this._router.navigateByUrl("/profile")
        }
    )
    }
    get email(){return this.loginForm.get('email')}
    get password(){return this.loginForm.get('password')}
  
  }
  


