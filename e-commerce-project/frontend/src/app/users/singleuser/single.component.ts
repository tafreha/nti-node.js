import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { AuthService } from 'src/app/providers/services/auth.service';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleUserComponent implements OnInit {
id:any
user:any={}
isLoaded:boolean=false
errMsg:string=""
  constructor(private _auth:AuthService, private _activatedRoute:ActivatedRoute , private _router:Router) { }

  ngOnInit(): void {
    this.id=this._activatedRoute.snapshot.params["id"]
    this.getSingleUser(this.id)
  }
  
  getSingleUser(id:any){
    this._auth.getSingleUser(id).subscribe(
      res=>{console.log(res)
        this.user=res.data

  
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
  delete( id:string ){
    if(this._auth.isLoggedIn) this._router.navigateByUrl(`/user/delete/${id}`)
  }
  edit(id:string){
         if(this._auth.isLoggedIn) this._router.navigateByUrl(`/user/edit/${id}`)

  }
}
