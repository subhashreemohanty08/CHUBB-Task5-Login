import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productData:Array<any>=[];
  constructor(private http:HttpClient) { }
  addProduct(data:any){
    return this.http.post(`https://60c7623a06f3160017d293ce.mockapi.io/products`,data)
  
}
returnProduct(){
  return this.http.get(`https://60c7623a06f3160017d293ce.mockapi.io/products`)
}
returnproductById(id:number){
  //return this.productData.find(p=>p.id==id)
  return this.http.get(`https://60c7623a06f3160017d293ce.mockapi.io/products/${id}`)
}
updateProductById(id:any,data:any){
  //  let index=this.productData.findIndex(p=>p.id==id);
   // data.id=id;
   // this.productData[index]=data;
   return this.http.put(`https://60c7623a06f3160017d293ce.mockapi.io/products/${id}`,data)
  }
} 



 