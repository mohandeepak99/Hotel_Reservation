import { MessageSpan } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  


  constructor(public api:ConnectionService ,public nav:Router) { 

  }

  msg:any;
  

  ngOnInit(): void {
  }

  doLogin(form:NgForm){


    console.log(form.value);
    this.api.userlogin(form.value).subscribe((data:any[])=>{

      console.log(data);
      if(data.length==0){
        this.msg="Invalid login!!"
      }else{
        localStorage.setItem("loggeduser",data[0]._id);
        data[0].uname=="Adminuser"?localStorage.setItem('usertype','admin'):localStorage.setItem('usertype','user');
        this.nav.navigateByUrl("/booking");
      }
    
    
    },(error:any)=>{
      console.log(error);
    },()=>{
      console.log("call completed");
    }
    )

  }

}
