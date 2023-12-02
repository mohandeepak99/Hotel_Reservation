import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  msg:any;
  motels:any[];

  constructor(public userSer:ConnectionService) { }

  ngOnInit(): void {
    this.userSer.getallhotels().subscribe((data:any[])=>{
      console.log(data);
      this.motels=data;
      

    },(error:any)=>{
      console.log(error);
    
    })
  }
  searchhotel(search:string){

    this.userSer.searchhotel(search).subscribe((data:any[])=>{

      console.log(data);

      this.motels = data;

    },(error:any)=>{

      console.log(error);
      
    });
  }
}
