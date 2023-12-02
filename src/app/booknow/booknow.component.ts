import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {

  msg:any;
  msg1:string;
  requestedby:any;
  constructor(public userSer:ConnectionService,public api:Router,public myRouter:ActivatedRoute) { }

  ngOnInit(): void {

    this.myRouter.params.subscribe((param:Params)=>{
      if(param.hotelid){
        this.userSer.booknow(param.hotelid).subscribe((data:any[])=>{
          this.msg1=data[0].uname;
        })
      }
    })

  }

  reserve(form:NgForm){
    console.log(form.value);
    const requestedby=this.userSer.wantuserid();

    this.userSer.hotelreservation(form.value,requestedby).subscribe((data:string)=>{

      console.log(data);
      this.msg=data;
      this.api.navigateByUrl("/payment");

      

      

    },(error:any)=>{
      this.msg="something went wrong";

    });

    

 
  }

}
