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
  // getImages():Observable<any>{
  //   return this._http.get("http://localhost:3000/product")
  //      }
      //  getSingleImg(id:string):Observable<any>{
      //   return this._http.get(`https://localhost:3000/product/single/${id}`)
      //  }
  allProducts():Observable<any>{
    return this._http.get("http://localhost:3000/product")

  }
  singleProudect(id:string):Observable<any>{
    return this._http.get(`${this.baseUrl}single/${id}`)

  }
  // router.delete("/single/:id", auth, product.delete)
  delete(id:string):Observable<any>{
    return this._http.delete(`${this.baseUrl}delete/${id}`)

  }
  // router.patch("/single/:id", auth, product.edit)
  editProudect(id:string,data:Product):Observable<any>{
    return this._http.patch(`${this.baseUrl}edit/${id}`,data)

  }
  addImg(data:any):Observable<any>{
    return this._http.post(`${this.baseUrl}imageUpload`,data)

  }
}
