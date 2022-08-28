import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
name:string="marwa"
s="<h3>hello</h3>"
myImg="1.jpg"
myImg1="assets/1.jpg"
x="block"
classList="btn btn-primary"
btnText="hide"
val="hello"
  constructor() { }

  ngOnInit(): void {
  }
  test(){
    return "hello world"
  }
  test2(){
    window.alert ("hello world")
  }
  showHide(){
    if(this.x=="block"){
this.x="none"
this.btnText="show"
this.classList="btn btn-primary"

    }
    else{
      this.x="block"
this.btnText="hide"
this.classList="btn btn-danger"

    }
// this.x=="block"? this.x="none" : this.x="block"
}
handleInput(event:any){
  console.log(event.target.value)
  this.val=event.target.value
}
handle2(myInput:any){
  console.log(myInput.value)

}

}
