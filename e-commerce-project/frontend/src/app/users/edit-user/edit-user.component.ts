import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, TitleStrategy } from '@angular/router';

import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id:any
  user:any={} 
isLoaded:boolean=false
errMsg:string="" 
  editForm:FormGroup=new FormGroup({
    userName:new FormControl(),
  email:new FormControl(),
  password:new FormControl(),
    address:new FormControl(),
  })
  constructor(private _auth:AuthService,private _router:Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

 if(this._auth.userData)
    {
      this.id=this._activatedRoute.snapshot.params["id"]
this.getSingleUser(this.id)
   
    this.edit(this.id)
  }
    else this._router.navigateByUrl("/login")
  }

  getSingleUser(id:any){
    this._auth.getSingleUser(id).subscribe(
      res=>{console.log(res.data)
        this.user=res.data
        this.editForm.patchValue(this.user)


  
      },
      e=>{
        this.errMsg=e.message
        this.isLoaded=true
      },
      ()=>{
        this.isLoaded=true
    
      }

    )
  }
  edit(id:string){
    if(this._auth.userData)
this._auth.editUsers(id,this.editForm.value).subscribe(
  res=>{ this.user=res.data

    console.log("data edited")
  console.log(res.data)
},
  e=>{         this.errMsg= e
  },
  ()=>{
    this._router.navigateByUrl("/home")
  })
  }

}
