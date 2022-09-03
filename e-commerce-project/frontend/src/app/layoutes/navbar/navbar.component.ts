import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
    this.profile()
  }
profile(){
  this._auth.profile().subscribe(
res=>{
  console.log(res)
  this._auth.userData=res.data
},
err=>{
  this._auth.isLoggedIn=false
  this._auth.userData=null
  this._router.navigateByUrl("/login")

},
()=>{
  this._auth.isLoggedIn=true

}

  )
}
}
