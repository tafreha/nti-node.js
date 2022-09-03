import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/services/auth.service';
import { ProductService } from '../providers/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
items:any
isLoaded:boolean=false
errMsg:string=""
  constructor(private _auth:AuthService,private _authProduct:ProductService,private _router:Router) { }

  ngOnInit(): void {
    this.getMyData()
  }
  getMyData(){
this._authProduct.allProducts().subscribe(
  data=>{
    console.log(data)
    this.items=data
  },
  e=>{
    this.errMsg=e.message
    this.isLoaded=true
  },
  ()=>{
    this.isLoaded=true

  }
)  }


delete( id:string ){
  if(this._auth.isLoggedIn) this._router.navigateByUrl(`/product/delete/${id}`)
}
edit(id:string){
       if(this._auth.isLoggedIn) this._router.navigateByUrl(`/product/edit/${id}`)

}
showDetails(id:string){
  if(this._auth.isLoggedIn) this._router.navigateByUrl(`/product/single/${id}`)
}
}
