import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginservService {

  constructor(public http:HttpClient) { }

  senddetails(data:any){
    return this.http.post<any>('http://localhost:3000/login',data);
  }

  loggedIn():boolean{
    return !!localStorage.getItem('token')
  }
}
