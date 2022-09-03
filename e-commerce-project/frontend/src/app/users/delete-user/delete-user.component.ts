import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  errMsg=""
  id:any
  user:any={}  
   constructor(private _auth:AuthService,private _router:Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    if(this._auth.userData)
    {
      this.id=this._activatedRoute.snapshot.params["id"]
if(this.id)
console.log(this.id.userData)

    this.delete(this.id)
  }
    else this._router.navigateByUrl("/login")
  }
  
  delete(id:string){
    if(this._auth.userData)
this._auth.deleteUsers(id).subscribe(
  res=>{ this.user=res.data
    this._router.navigateByUrl("user/all")

    console.log("data deleted")
  console.log(res.data)
},
  e=>{         this.errMsg= e
  },
  ()=>{
    this._router.navigateByUrl("user/all")
  })
  }
}


