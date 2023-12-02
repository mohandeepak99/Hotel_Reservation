import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  canActivate():boolean{

    let Role=localStorage.getItem("usertype");
    if(Role=="admin"){
      return true;
    }
    else{
      return false;
    }

  
    
      }
  
}
