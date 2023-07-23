import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeedataService {
  empdetail: any;

  constructor(public http:HttpClient) { }
  
  getemployeedata(){
    return this.http.get('http://localhost:3000/employeelist');
  }

  addemployee(data:any){
    return this.http.post<any>('http://localhost:3000/add',data);
  }

  editItem(updatedData:any,id:any){
    return this.http.put(`http://localhost:3000/edititem/${id}`,updatedData)
  }

  getOneItem(id:any){
    return this.http.get(`http://localhost:3000/getone/${id}`)
  }

  delItem(_id:any){
    return this.http.delete(`http://localhost:3000/deleteitem/${_id}`)
  }
}
