import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addShopProduct(data:any){
    return this.http.post('http://localhost:3000/addNewShopProduct',data)
  }

  getshopProducts(shop:any){
    return this.http.post('http://localhost:3000/getShopProducts',shop)
  }

  deleteProduct(id:any){
    return this.http.post('http://localhost:3000/deleteShopProduct',id)
  }

  editProduct(data:any){
    return this.http.post('http://localhost:3000/editShopProduct',data)
  }

  addGodownProduct(data:any){
    return this.http.post('http://localhost:3000/addNewProduct',data)
  }

  getGodownProducts(){
    return this.http.get('http://localhost:3000/getAllProducts')
  }

  deleteGodownProduct(id:any){
    return this.http.post('http://localhost:3000/deleteProduct',id)
  }

  editGodownProduct(data:any){
    return this.http.post('http://localhost:3000/editProduct',data)
  }
  
}
