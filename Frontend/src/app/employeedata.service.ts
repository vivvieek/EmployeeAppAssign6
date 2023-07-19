import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeedataService {

  constructor(public http:HttpClient) { }
  
  getemployee(){
    return this.http.get('link')
  }

  addemployee(data:any){
    return this.http.post<any>('http://localhost:3000/add',data)
  }
}
