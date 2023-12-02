import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {

  msg:any;
  hotelavailable=false;
  constructor(public userSer:ConnectionService,public api:Router) { }

  ngOnInit(): void {
  }

  addhotels(form:NgForm){

    console.log(form.value);
    this.userSer.Addhotels(form.value).subscribe((data:string)=>{
      console.log(data);
      this.msg=data;



      form.reset();
      this.api.navigateByUrl("/hotel");

    },(error:any)=>{
      console.log(error);
      this.msg="something went wrong";
    }
    );
  
  }
  hotelnamecheck(uname:string){
    this.userSer.hotelavailability(uname).subscribe((data:any[])=>{
      console.log(data);
      
      if(data.length==0)
      {
        this.msg="hotel is avaialble for you";
        this.hotelavailable=true;
      }
    
      else{
        this.msg="Hotel is unavailable right now";
        this.hotelavailable=false;
        
      }

      

    },(error:any)=>{
      console.log(error);

    })

  }

  

  

}
