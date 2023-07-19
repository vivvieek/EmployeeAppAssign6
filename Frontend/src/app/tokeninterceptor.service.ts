import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor{

  token=localStorage.getItem('token');
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenizedrequest=req.clone({
      setHeaders:{
        Authorization:'Bearer '+this.token
      }
    })
    return next.handle(tokenizedrequest); 
  }
  

}
