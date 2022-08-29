import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userData={
    "userName":"",
    "password":"",
    "email":"" ,
    "address":"", 
   }
  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }
  
  handleregister(register:NgForm){
    console.log(this.userData)
this._data.register(this.userData)
.subscribe(data=>{
  console.log(data)
console.log("tmam")},
e=>{console.log(e)
  console.log("error")
})
  }

}
