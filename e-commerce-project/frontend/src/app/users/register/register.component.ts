import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements 
OnInit
{
  errMsg: any= {}


registerForm:FormGroup=new FormGroup({
  userName:new FormControl(),
email:new FormControl(),
password:new FormControl(),

address:new FormControl(),


})
  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
  }
  register(){
    let userData:User=this.registerForm.value
    if(this.registerForm.valid)
    console.log(this.registerForm.value)
    this._auth.register(userData).subscribe(
      res=> {console.log(res), console.log("done")},
      e=>{
        this.errMsg= e
        if(e.error.message.includes("userName")) this.errMsg.userName=e.error.message
        if(e.error.message.includes("email")) this.errMsg.email=e.error.message
        if(e.error.message.includes("password")) this.errMsg.password=e.error.message
        if(e.error.message.includes("address")) this.errMsg.address=e.error.message
      },
      ()=>{
        this._router.navigateByUrl("/home")
      }
  )
  }
  get userName(){return this.registerForm.get('userName')}
  get email(){return this.registerForm.get('email')}
  get password(){return this.registerForm.get('password')}
  get address(){return this.registerForm.get('address')}

}
