import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  constructor(private http: HttpClient) {}


  postProduct(item: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.post(
      'https://e-commerce-294cd-default-rtdb.firebaseio.com/products.json',
      item,
      { headers }
    );
  }
}
