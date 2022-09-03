import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 baseUrl='http://localhost:3000/user/'
 public userData=null
 public isLoggedIn=false
  constructor(private _http:HttpClient, private _router:Router) { }
  register(data:User):Observable<any>{
    return this._http.post(`${this.baseUrl}register`,data)
  }
  login(data:any):Observable<any>{
    return this._http.post(`${this.baseUrl}login`,data)
  }
  allUsers():Observable<any>{
    return this._http.get(`${this.baseUrl}`)

  }
  singleUsers(id:string):Observable<any>{
    return this._http.get(`${this.baseUrl}single/${id}`)

  }

  deleteUsers(id:string):Observable<any>{
    return this._http.delete(`${this.baseUrl}delete/${id}`)

  }
 
  editUsers(id:string,data:User):Observable<any>{
    return this._http.put(`${this.baseUrl}edit/${id}`,data)

  }
  profile():Observable<any>{
    return this._http.get(`${this.baseUrl}profile`)

  }

   activate():Observable<any>{
    return this._http.get(`${this.baseUrl}activate`)

  }
  logout(){
  // localStorage.removeItem('Ecomerce1Token')
  // this._router.navigateByUrl("/home")
  return this._http.get(`${this.baseUrl}logout`)

  }
  logoutAll():Observable<any>{
    return this._http.get(`${this.baseUrl}logoutAll`)

  }

  getImages():Observable<any>{
    return this._http.get("http://localhost:3000/product")
       }
       getSingleImg(id:string):Observable<any>{
        return this._http.get(`https://localhost:3000/product/single/${id}`)
       }
       getAllUsers():Observable<any>{
        // return this._http.get("http://localhost:3000/user")
        return this._http.get(`${this.baseUrl}`)
           }
           getSingleUser(id:string):Observable<any>{
            return this._http.get(`${this.baseUrl}single/${id}`)
           }
 

}
