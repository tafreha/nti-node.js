import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
imgs:any[]=[]
isLoaded:boolean=false
errMsg:string=""
  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
    this.getMyData()
  }
  getMyData(){
this. _auth.getImages().subscribe(
  data=>{
    console.log(data)
    this.imgs=data
  },
  e=>{
    this.errMsg=e.message
    this.isLoaded=true
  },
  ()=>{
    this.isLoaded=true

  }
)  }

}
