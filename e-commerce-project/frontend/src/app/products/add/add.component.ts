import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/services/auth.service';
import {ProductService} from 'src/app/providers/services/product.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent 
implements OnInit {
  errMsg: any= {}

  addProduct:FormGroup =new FormGroup({
name:new FormControl("",[
  Validators.minLength(5),
Validators.required,
Validators.maxLength(40)
]),
category:new FormControl("",[
  Validators.minLength(5),
Validators.required,
Validators.maxLength(40)
]),
description:new FormControl("",[
  Validators.minLength(160),
Validators.required,
Validators.maxLength(500)
]),
price:new FormControl(),
Images:new FormControl()

  })
  constructor(private _auth:AuthService, private _authProduct:ProductService, private _router:Router) { }

  ngOnInit(): void {
  }
  handleAddProduct(){
    let products:any=this.addProduct.value 
     if(this.addProduct.valid)
    console.log(this.addProduct.value)
    this._authProduct.add(products).subscribe(
      res=>{console.log(res), console.log("done")},
      e=>{
        this.errMsg=e
      },
      ()=>{
        this._router.navigateByUrl("/home")
      }
    )
  }

}
