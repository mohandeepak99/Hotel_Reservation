import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ConnectionService } from './connection.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(public userSer :ConnectionService,public nav:Router){

  }
  canActivate(): boolean{

    if(!this.userSer.isLoggedin())
    {
      this.nav.navigateByUrl("/");

    }

     return this.userSer.isLoggedin(); 
  }
  
}
