import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData={
    
    "password":"",
    "email":"" ,
   
   }
  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }
  handleLogin(login:NgForm){
    console.log(this.userData)
this._data.login(this.userData)
.subscribe(data=>{
  console.log(data)
console.log("tmam")},
e=>{console.log(e)
  console.log("error")
})
  }

}
