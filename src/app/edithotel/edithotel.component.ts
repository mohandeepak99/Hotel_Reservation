import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-edithotel',
  templateUrl: './edithotel.component.html',
  styleUrls: ['./edithotel.component.css']
})
export class EdithotelComponent implements OnInit {



  constructor(public activeRoute:ActivatedRoute,public userSer:ConnectionService,public api:Router) { }

  hoteldata : {_id:number,uname:string,urate:string,uemail:string,uphone:string,uac:string,uyes:string};

  msg:any;

  ngOnInit(): void {
    


    this.activeRoute.params.subscribe((param:Params)=>{

      console.log(param);

      if(param.hotelid)
      {
        this.userSer.getsinglehoteldata(param.hotelid).subscribe((data:any[])=>{
          console.log(data); 

          this.hoteldata=data[0];
          



        },(error:any)=>{

          console.log(error);
        });
      }

    });

  }

  edithotel(form:NgForm){

    form.value._id=this.hoteldata._id;
    console.log(form.value);

    this.userSer.editsinglehoteldata(form.value).subscribe((data:string)=>{

      console.log(data);
      this.msg=data;

      this.api.navigateByUrl("/hotel");

    },(error:any)=>{
      this.msg="something went wrong"
    })

  



    

  }
  updateclick(){
    this.api.navigateByUrl("/hotel");
  }


}
