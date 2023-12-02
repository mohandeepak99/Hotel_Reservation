import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {

  motels:any[];

  constructor(public userSer:ConnectionService,public myRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.myRouter.params.subscribe((param:Params)=>{
      if(param.userId){
        this.userSer.getmybookings(param.userId).subscribe((data:any[])=>{
          this.motels=data;
        },(error:any)=>{
          console.log(error);
        })



      }


    });

  }

}
