import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { ConnectionService } from './connection.service';

@Injectable({
  providedIn: 'root'
})


export class AdminGuard implements CanActivate {

  constructor(public userSer:ConnectionService,public nav:Router){

  }
  canActivate():boolean {
    if(!this.userSer.isLoggedadmin()){
      this.nav.navigateByUrl("/news");


    }
      return this.userSer.isLoggedadmin();

  
    

    
  }
  
}
