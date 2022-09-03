import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/providers/services/auth.service';
import { ProductService } from 'src/app/providers/services/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  errMsg=""
  id:any
  item:any={}  
   constructor(private _authProduct:ProductService,private _auth:AuthService,private _router:Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    if(this._auth.userData)
    {
      this.id=this._activatedRoute.snapshot.params["id"]
if(this.id)
console.log(this.id.data)

    this.delete(this.id)
  }
    else this._router.navigateByUrl("/login")
  }
  
  delete(id:string){
    if(this._auth.userData)
this._authProduct.delete(id).subscribe(
  res=>{ this.item=res.data
    this._router.navigateByUrl("/home")
    console.log("data deleted")
  console.log(res.data)
},
  e=>{  this.errMsg= e
  },
  ()=>{
    this._router.navigateByUrl("/home")
  })
  }
}


