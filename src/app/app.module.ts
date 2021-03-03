import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,} from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import {HttpClientModule } from '@angular/common/http';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { SelectseatComponent } from './selectseat/selectseat.component';

import { UserLoginComponent } from './user-login/user-login.component';
import { ChooseTheaterComponent } from './choose-theater/choose-theater.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { ShoeMoviesComponent } from './shoe-movies/shoe-movies.component';
import { RouterModule } from '@angular/router';
import { ShowMoviesComponent } from './show-movies/show-movies.component';
@NgModule({
  declarations: [
    
    AppComponent,
    AboutusComponent,
    AdminSignupComponent,
    UserSignupComponent,
    ContactusComponent,
    ErrorpageComponent,
    HomepageComponent,
    WelcomepageComponent,
    SelectseatComponent,
   
    UserLoginComponent,
    ChooseTheaterComponent,
    EditAdminComponent,
    EditUserComponent,
    PaymentComponent,
    AdminLoginComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    BookingHistoryComponent,
    ShoeMoviesComponent,
    ShowMoviesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
