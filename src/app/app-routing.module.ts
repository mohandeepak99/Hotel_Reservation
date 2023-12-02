import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { AdminGuard } from './admin.guard';
import { AuthGuard } from './auth.guard';
import { BookingComponent } from './booking/booking.component';
import { BooknowComponent } from './booknow/booknow.component';
import { EdithotelComponent } from './edithotel/edithotel.component';
import { HotelmanagementComponent } from './hotelmanagement/hotelmanagement.component';
import { LoginComponent } from './login/login.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { NewsComponent } from './news/news.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { PhotosComponent } from './photos/photos.component';
import { RegisterComponent } from './register/register.component';
import { RoleGuard } from './role.guard';
import { UsersComponent } from './users/users.component';




const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"news",component:NewsComponent,canActivate:[AuthGuard]},
  {path:"hotel",component:HotelmanagementComponent,canActivate:[AuthGuard && RoleGuard]},
  {path:"addhotel",component:AddhotelComponent,canActivate:[AuthGuard]} ,
  {path:"booking",component:BookingComponent,canActivate:[AuthGuard]},
  {path:"edithotel/:hotelid",component:EdithotelComponent,canActivate:[AuthGuard]},
  {path:"user",component:UsersComponent,canActivate:[AuthGuard && RoleGuard]},
  {path:"booknow/:hotelid",component:BooknowComponent,canActivate:[AuthGuard]},
  {path:"payment",component:PaymentComponent,canActivate:[AuthGuard]},
  {path:"paymentsuccess",component:PaymentsuccessComponent},
  {path:"mybookings/:userId",component:MybookingsComponent},
  {path:"photos",component:PhotosComponent,canActivate:[AuthGuard]}   
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
