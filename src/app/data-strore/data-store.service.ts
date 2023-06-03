import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductsInterface } from '../productsInterface';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  constructor(private http: HttpClient) {}

  getItems(): Observable<ProductsInterface[]> {
    return this.http
      .get('https://e-commerce-294cd-default-rtdb.firebaseio.com/product.json')
      .pipe(
        map((res: any) => {
          const products = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              products.push({ ...res[key], id: key });
            }
          }
          return products;
        })
      );
  }

  addToBasket(item: ProductsInterface[]): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.post(
      'https://e-commerce-294cd-default-rtdb.firebaseio.com/basket.json',
      item,
      { headers }
    );
  }

  // just for develop !
  postProduct(item: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.post(
      'https://e-commerce-294cd-default-rtdb.firebaseio.com/product.json',
      item,
      { headers }
    );
  }

  getItemsFromBasket(): Observable<any> {
    return this.http
      .get('https://e-commerce-294cd-default-rtdb.firebaseio.com/basket.json')
      .pipe(
        map((res: any) => {
          const products = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              products.push({ ...res[key], id: key });
            }
          }
          return products;
        })
      );
  }

  updateItem(id: any, item: any): Observable<any> {
    const data = this.http.put(
      'https://e-commerce-294cd-default-rtdb.firebaseio.com/basket/' +
        id +
        '.json',
      item
    );
    console.log(data, 'data from service');

    return data;
  }

  addToCart(item: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.post(
      'https://e-commerce-294cd-default-rtdb.firebaseio.com/cart.json',
      item,
      { headers }
    );
  }

  getAllItemsFromCart(): Observable<any> {
    return this.http
      .get('https://e-commerce-294cd-default-rtdb.firebaseio.com/cart.json')
      .pipe(
        map((res: any) => {
          const products = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              products.push({ ...res[key], id: key });
            }
          }
          return products;
        })
      );
  }

  removeItem(id: string): Observable<any> {
    return this.http
      .delete(
        `https://e-commerce-294cd-default-rtdb.firebaseio.com/cart/${id}.json`)
      .pipe(
        map((res: any) => {
          const products = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              products.push({ ...res[key], id: key });
            }
          }
          return products;
        })
      );
  }

  deleteAllBasketItems(): Observable<any> {
    return this.http.delete(
      'https://e-commerce-294cd-default-rtdb.firebaseio.com/basket.json'
    );
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
}
