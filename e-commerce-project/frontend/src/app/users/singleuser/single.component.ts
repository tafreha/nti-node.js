import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';
import { AuthService } from 'src/app/providers/services/auth.service';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleUserComponent implements OnInit {
id:any
img:any={}
isLoaded:boolean=false
errMsg:string=""
  constructor(private _auth:AuthService, private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this._activatedRoute.snapshot.params["id"]
    this.getSingle(this.id)
  }
  getSingle(id:any){
    this._auth.getSingleImg(id).subscribe(
      res=>console.log(res),
      e=>{
        this.errMsg=e.message
        this.isLoaded=true
      },
      ()=>{
        this.isLoaded=true
    
      }

    )
  }

}
