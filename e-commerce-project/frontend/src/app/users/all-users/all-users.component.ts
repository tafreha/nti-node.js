import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users:any[]=[]
  isLoaded:boolean=false
  errMsg:string=""
    constructor(public _auth:AuthService,private _router:Router) { }
  
    ngOnInit(): void {
      this.getMyData()
    }
    getMyData(){
  this. _auth.getAllUsers().subscribe(
    data=>{
      console.log(data)
      this.users=data.data
      let myId:any = this._auth.userData?.['_id']
    this.users = this.users.filter(function(user){ 
      return user._id != myId
    } )

    },
    e=>{
      this._auth.isLoggedIn=false
      this._auth.userData=null
      this._router.navigateByUrl("/login")
      this.errMsg=e.message
      this.isLoaded=true
    },
    ()=>{
      this.isLoaded=true
      this._auth.isLoggedIn=true
    }
  )  }
  delete( id:string ){
    if(this._auth.isLoggedIn) this._router.navigateByUrl(`/user/delete/${id}`)
  }
  edit(id:string){
         if(this._auth.isLoggedIn) this._router.navigateByUrl(`/user/edit/${id}`)

  }
  showDetails(id:string){
    if(this._auth.isLoggedIn) this._router.navigateByUrl(`/user/single/${id}`)
  }


}
