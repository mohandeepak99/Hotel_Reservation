import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  result:any[];
  msg:any;

  constructor(public userSer:ConnectionService) { }

  ngOnInit(): void {

    this.userSer.reghotel().subscribe((data:any[])=>{
      console.log(data);

      this.result=data;


    },(error:any)=>{
      console.log(error);
      this.msg="something went wrong";
    })
  }

}
