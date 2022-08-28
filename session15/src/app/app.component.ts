import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // monNum : number|null = null
  // /*
  // birthYear % 12 
  // */
  // yearOfBirth:any
  // abrag : string[]= [  
  //   "monkey" , 
  //   "rooster" ,
  //   "dog" ,
  //   "pig" ,
  //   "rat",
  //    "ox", 
  //   "tiger", 
  //   "rabbit", 
  //   "dragon", 
  //   "snake", 
  //   "horse", 
  //   "sheep" 
  // ]
  // clicked : boolean= false
  // onPress(){
  //   this.clicked=!this.clicked
  // }
  // gender :any =""
  // onChangeGender(type:string){
  //   this.gender = type
  // }

  status : boolean = true
  changeStatus( ) { this.status = !this.status }
}
