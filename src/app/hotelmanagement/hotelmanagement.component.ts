import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-hotelmanagement',
  templateUrl: './hotelmanagement.component.html',
  styleUrls: ['./hotelmanagement.component.css']
})
export class HotelmanagementComponent implements OnInit {

  hotels:any[]

  msg:string;

  constructor(public userSer:ConnectionService) { }

  ngOnInit(): void {

    this.userSer.getallhotels().subscribe((data:any[])=>{
      console.log(data);

      this.hotels=data;

    },(error:any)=>{

      console.log(error);

      this.msg="something went wrong";

    })

  }

 
  dosearch(search:string){

    this.userSer.searchhotel(search).subscribe((data:any[])=>{

      console.log(data);

      this.hotels = data;

    },(error:any)=>{

      console.log(error);
      
    });
  }

  
}
