import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addProduct =new FormGroup({
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
  constructor() { }

  ngOnInit(): void {
  }
  handleAddProduct(){    if(this.addProduct.valid)
    console.log(this.addProduct.value)
  }

}
