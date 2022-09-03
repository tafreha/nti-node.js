import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/services/auth.service';
import { ProductService } from '../providers/services/product.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private _auth:AuthService, private _authProduct:ProductService, private _router:Router) { }
  errMsg: any= {}
file:any
  ngOnInit(): void {
  }

  onChangeImage(event:any){
    this.file=event.target.file
   console.log(this.file)
  }
  onSubmit(){
    let myData=new FormData()
    myData.append("myImg",this.file,this.file.name)
    console.log(this.file)
    console.log("image done")
  //   this._authProduct.addImg(products).subscribe(
  //     res=>{console.log(res), console.log("done")},
  //     e=>{
  //       this.errMsg=e
  //     },
  //     ()=>{
  //       this._router.navigateByUrl("/home")
  //     }
  //   )
  }

}
