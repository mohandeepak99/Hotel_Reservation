import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HotelmanagementComponent } from './hotelmanagement/hotelmanagement.component';
import { NewsComponent } from './news/news.component';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { BookingComponent } from './booking/booking.component';
import { EdithotelComponent } from './edithotel/edithotel.component';
import { UsersComponent } from './users/users.component';
import { BooknowComponent } from './booknow/booknow.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { PhotosComponent } from './photos/photos.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    HotelmanagementComponent,
    NewsComponent,
    AddhotelComponent,
    BookingComponent,
    EdithotelComponent,
    UsersComponent,
    BooknowComponent,
    PaymentComponent,
    PaymentsuccessComponent,
    MybookingsComponent,
    PhotosComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
