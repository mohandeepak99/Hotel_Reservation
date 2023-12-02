import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(public http:HttpClient) { }



  userlogin(data:any){

  return this.http.post<any[]>("http://localhost:3000/login",data);
  }

  userreg(data:string){
    return this.http.post<string>("http://localhost:3000/register",data);
  }
  isLoggedin(){

    return !!localStorage.getItem("loggeduser");
  }

  isLoggedadmin(){
    return !!localStorage.getItem("loggedadmin"); 
  }

  getallhotels()
  {
    return this.http.get<any[]>("http://localhost:3000/allhotels");
  }
  Addhotels(data:string){
    return this.http.post<string>("http://localhost:3000/addhotelss",data);
  }

  hotelavailability(uname:string){
    return this.http.get<any[]>("http://localhost:3000/hotelnamecheck/"+uname); 

  }
  allusers(){
    return this.http.get<any[]>("http://localhost:3000/allusers");
  }

  regnavail(uname:string){
    return this.http.get<any[]>("http://localhost:3000/regnameavailibilty/"+uname);
  }

  getsinglehoteldata(userId:string){
    return this.http.get<any[]>("http://localhost:3000/gethotel/"+userId);
  }
  editsinglehoteldata(data:any){

    return this.http.put<string>("http://localhost:3000/updatehotel",data);

    
  }
  deletesinglehoteldata(hotelid:number){
  
    return this.http.delete<string>("http://localhost:3000/deletehotel/"+hotelid);
  }

  hotelreservation(data:any,requestedby:any){
    data.requestedby=requestedby;
    return this.http.post<string>("http://localhost:3000/roomr",data);
  }

  reghotel(){
    return this.http.get<any[]>("http://localhost:3000/allcustomers");
  }

  booknow(hotelid:string){

    return this.http.get<any[]>("http://localhost:3000/booknow/"+hotelid);
  }
  wantuserid(){
    return localStorage.getItem("loggeduser");
  }
  getmybookings(userId:any){
    return this.http.get<any[]>("http://localhost:3000/mybookings/"+userId);
  }
  searchhotel(search:string){
    return this.http.get<any[]>("http://localhost:3000/search/"+search);
  }
  searchhotelinbookingpage(search : string){
    return this.http.get<any[]>("http://localhost:3000/searchinbookingpage/"+search);
  }
  
}
