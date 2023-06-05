import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }





  getAllUsers():Observable<any>{
    return this.http.get('http://localhost:5000/api/login')
  }

  isUserLoged(user:any):Observable<any>{

    let data = JSON.stringify(user)
    return this.http.post('http://localhost:5000/api/login/',data)
  }
}
