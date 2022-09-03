import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  errMsg=""
  editForm:FormGroup=new FormGroup({
    userName:new FormControl(),
  email:new FormControl(),
  password:new FormControl(),
    address:new FormControl(),
  
  
  })
    constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
    if(this._auth.userData)
    this.editForm.patchValue(this._auth.userData)
    else this._router.navigateByUrl("/login")
  }
  edit(){
    if(this._auth.userData)
this._auth.editUsers(this._auth.userData?.['_id'],this.editForm.value).subscribe(res=>{console.log("data edited")
console.log(this._auth.userData)},
  e=>{         this.errMsg= e
  },
  ()=>{
    this._router.navigateByUrl("/home")
  })
  }

}
