import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/services/auth.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _router:Router, private _auth:AuthService) { }

  ngOnInit(): void {
    this.logout()
  }
  logout(){
    localStorage.removeItem('Ecomerce1Token')
this._auth.isLoggedIn=false
this._auth.userData=null
    this._router.navigateByUrl("/login")
  }

}
