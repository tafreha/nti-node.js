import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl='http://localhost/3000/product/'

  constructor(private _http:HttpClient) { }

     add(data:Product):Observable<any>{
    return this._http.post(`${this.baseUrl}add`,data)
  }
  allProducts():Observable<any>{
    return this._http.get(`${this.baseUrl}`)

  }
  singleProudect(id:string):Observable<any>{
    return this._http.get(`${this.baseUrl}single/${id}`)

  }
  // router.delete("/single/:id", auth, product.delete)
  deleteProudect(id:string):Observable<any>{
    return this._http.delete(`${this.baseUrl}single/${id}`)

  }
  // router.patch("/single/:id", auth, product.edit)
  editProudect(id:string,data:Product):Observable<any>{
    return this._http.patch(`${this.baseUrl}single/${id}`,data)

  }
}
