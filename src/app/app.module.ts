import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { UserComponent } from './user/user.component';
import { UserCRUDComponent } from './user-crud/user-crud.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HotelComponent } from './hotel/hotel.component';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { LocationComponent } from './location/location.component';
import { CreateLocationComponent } from './create-location/create-location.component';
import { BookingComponent } from './booking/booking.component';
import { LocationPipe } from './location.pipe';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { UpdateLocationComponent } from './update-location/update-location.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { MessageComponent } from './message/message.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ClientComponent } from './client/client.component';
import { BookNowComponent } from './booknow/booknow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ContactComponent } from './contact/contact.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  
} from '@abacritt/angularx-social-login';
import { SucessComponent } from './sucess/sucess.component';
import { MybookingsComponent } from './mybookings/mybookings.component';



const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
  { path: '', component: HomeBodyComponent },
  { path: 'user_crud', component: UserCRUDComponent },
  { path: 'update_user/:id', component: UpdateUserComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'create_hotel', component: CreateHotelComponent},
  { path: 'location', component: LocationComponent },
  { path: 'create_location', component: CreateLocationComponent},
  { path: 'booking', component: BookingComponent },
  {path:'update_hotel/:id', component: UpdateHotelComponent},
  {path:'update_location/:id', component: UpdateLocationComponent},
  {path:'message',component:MessageComponent},
  {path:'hotel_details/:id',component:HotelDetailsComponent},
  {path:'book_now/:id', component: BookNowComponent},
  {path:'about_us', component:AboutUsComponent},
  {path:'client', component:ClientComponent},
  {path:'wishlist/:id', component: WishlistComponent},
  {path:'about', component: AboutUsComponent},
  {path:'contact', component: ContactComponent},
  {path:'success', component: SucessComponent},
  {path:'mybooking', component: MybookingsComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    FooterComponent,
    HomeBodyComponent,
    UserComponent,
    UserCRUDComponent,
    UpdateUserComponent,
    HotelComponent,
    CreateHotelComponent,
    LocationComponent,
    CreateLocationComponent,
    BookingComponent,
    LocationPipe,
    UpdateHotelComponent,
    UpdateLocationComponent,
    AdminheaderComponent,
    MessageComponent,
    HotelDetailsComponent,
    BookNowComponent,
    AboutUsComponent,
    ClientComponent,
    WishlistComponent,
    ContactComponent,
    SucessComponent,
    MybookingsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SocialLoginModule
    
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '988719531789-36t4g08pmpfr752j3gqserkmrn3mufdi.apps.googleusercontent.com'
          )
        }
        
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
