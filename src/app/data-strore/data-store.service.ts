import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductsInterface } from '../productsInterface';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  constructor(private http: HttpClient) {}



  getItems():Observable<ProductsInterface[]>{
    return this.http.get('https://e-commerce-294cd-default-rtdb.firebaseio.com/products.json').pipe(map((res:any) => {
      const products = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          products.push({...res[key], id:key});
        }
      }
      return products;
    }));
  }
  

  addToBasket(item: ProductsInterface[]): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.post(
      'https://e-commerce-294cd-default-rtdb.firebaseio.com/basket.json',
      item,
      {headers}
    );
  }


    getItemsFromBasket():Observable<any>{
    return this.http.get('https://e-commerce-294cd-default-rtdb.firebaseio.com/basket.json').pipe(map((res:any) => {
      const products = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          products.push({...res[key], id:key});
        }
      }
      return products;
    }));
  }


  // postProduct(item: any): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json',
  //   });
  //   return this.http.post(
  //     'https://e-commerce-294cd-default-rtdb.firebaseio.com/products.json',
  //     item,
  //     { headers }
  //   );

  // }




  // updateItem(id: any, item:any): Observable<any> {
  //   const data = this.http.put('https://e-commerce-294cd-default-rtdb.firebaseio.com/basket.json',item,id);
  //   console.log(data,'data from service');
    
  //   return data;
  // }



}
