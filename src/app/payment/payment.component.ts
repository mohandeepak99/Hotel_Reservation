import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BooknowComponent } from '../booknow/booknow.component';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


msg:any;

  constructor(public api:Router,public userSer:ConnectionService) { }

  ngOnInit(): void {


  }

  pay(){

      this.api.navigateByUrl("/paymentsuccess");
    

  }



}
