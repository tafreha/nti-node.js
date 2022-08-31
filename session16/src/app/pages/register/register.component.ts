import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Directive } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
  })

export class RegisterComponent  {
userData={
  userName:"",
  email:"",
  password:"",
  confirmPassword:"",
  address:"",
}
  constructor(private _data:DataService) { }
handleRegister(register:NgForm){
  if(register.valid){
    console.log(this.userData)
        this._data.register(this.userData)
        .subscribe(data => {console.log(data)
        console.log("done")},
        e=>{
          console.log(e)
        console.log("error")
      })
  }
}
}
