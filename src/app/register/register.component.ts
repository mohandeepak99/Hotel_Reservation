import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public api:ConnectionService,public nav:Router) { }

  ngOnInit(): void {
  }

  msg:any;
  username=false;

  register(reg:NgForm){

    console.log(reg.value);
    this.api.userreg(reg.value).subscribe((data:string)=>{
      console.log(data);
      this.msg=data;

      reg.reset();
      this.nav.navigateByUrl("/");


    },(error:string)=>{
      console.log(error);

    },()=>{
      console.log("api call completed")
    })
  }
  regnameavail(uname:string){
    console.log(uname);

    this.api.regnavail(uname).subscribe((data:any[])=>{

      console.log(data);
      if(data.length==0){
        this.username=true;

        this.msg="Username available for you";

      }else{
        this.username=false;
        this.msg="Username not available for you";
      }

    },(error:any)=>{

      console.log(error);
    })
  }

}
