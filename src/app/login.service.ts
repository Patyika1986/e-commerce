import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  registUser(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http.post(
      'https://e-commerce-294cd-default-rtdb.firebaseio.com/register.json',
      user,
      { headers }
    );
  }

  getAllUsers(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    return this.http
      .get('https://e-commerce-294cd-default-rtdb.firebaseio.com/register.json')
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
}
