import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _http:HttpClient
    ) { }
  register(data:any):Observable<any>{
    return this._http.post("http://localhost:3000/user/register", data)
  }
  login(data:any):Observable<any>{
    return this._http.post("http://localhost:3000/user/login", data)
  }
}
