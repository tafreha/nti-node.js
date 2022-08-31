import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 baseUrl='http://localhost:3000/user/'
  constructor(private _http:HttpClient) { }
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
    return this._http.delete(`${this.baseUrl}single/${id}`)

  }
 
  editUsers(id:string,data:User):Observable<any>{
    return this._http.patch(`${this.baseUrl}single/${id}`,data)

  }
  profile():Observable<any>{
    return this._http.post(`${this.baseUrl}profile`,null)

  }

   activate():Observable<any>{
    return this._http.get(`${this.baseUrl}activate`)

  }
  getImages():Observable<any>{
    return this._http.get("http://localhost:3000/product")
       }
       getSingleImg(id:string):Observable<any>{
        return this._http.get(`https://localhost:3000/product/single${id}`)
       }
 

}
