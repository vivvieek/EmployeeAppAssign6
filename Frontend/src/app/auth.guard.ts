import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginservService } from './loginserv.service';
import { HttpClient } from '@angular/common/http';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn:'root'
})

export class authGuard{
  isToken!:boolean;
  
  constructor(private auth:LoginservService,private route:Router){}
  
  canActivate(){
    
    if(this.auth.loggedIn()){
      return true;
    }
    else{
      this.route.navigate([''])
      return false
    }
  }

}