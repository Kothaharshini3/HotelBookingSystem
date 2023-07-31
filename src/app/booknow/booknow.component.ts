import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Booking } from '../booking';
import { Hotel } from '../hotel';
import { HotelBookingSystemService } from '../hotel-booking-system.service';
import { User } from '../user';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BookNowComponent implements OnInit {
  id: any;
  user: User = new User();
  hotel: Hotel = new Hotel();
  booking: Booking = new Booking();
  userId = localStorage.getItem('userId');
  bookingSuccessful: boolean = false;
  checkIn:any;
  checkOut:any;
  days:any;
  date1 = new Date();
  date2 = new Date();
 



  constructor(
    private hotelSer: HotelBookingSystemService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: SocialAuthService
  ) {}

  ngOnInit(): void {

    console.log('enter');
    this.id = this.route.snapshot.params['id'];
    this.hotelSer.getHotelByID(this.id).subscribe(
      (data) => {
        this.hotel = data;
        console.log(data);
      },
      (error) => console.log(error)
    );

    this.getDate();

   
  }

  createBooking() {
    this.bookingSuccessful = false;
    this.booking.hotelId = this.hotel.hotelId;
    this.booking.userId = this.userId;
    
    if (this.booking.noOfRooms <= this.hotel.noOfRooms) {
      this.hotelSer.createBooking(this.booking).subscribe(
        (data) => {
          console.log(data);
          this.bookingSuccessful = true;
          if (this.bookingSuccessful) {
            this.hotel.noOfRooms =
              this.hotel.noOfRooms - this.booking.noOfRooms;
            this.hotelSer.updateHotel(this.hotel).subscribe((data: any) => {
              console.log(data);
              setTimeout(() => {
                this.router.navigateByUrl('client');
              }, 1000);
              var price =
                this.hotel.hotelPrice *
                this.booking.noOfRooms *
                this.booking.noOfDays;
              localStorage.setItem('price', price.toString());

            });
          }
        },
        (error) => console.log(error)
      );
    } else {
      alert('Rooms not available');
    }

  }
  onSubmit() {
    console.log(this.booking);
    this.createBooking();
  }

   
  calculateDays(type: string, e: any) {
    console.log(type, e.target.value);
    if (type == 'checkIn') {
      this.date1 = new Date(e.target.value);
    } else {
      this.date2 = new Date(e.target.value);
    }
    console.log(this.date2.getTime());
    console.log(this.date1.getTime());

    const Time = (Math.abs(this.date2.getTime() - this.date1.getTime()));
    this.days = (Time / (1000 * 3600 * 24)) + 1;
    this.booking.noOfDays = this.days;
  }
  minDate:any;

  getDate(){
    var date:any = new Date();
    var toDate:any = date.getDate();
    if(toDate < 10){
      toDate= '0' + toDate;
    }
    var month = date.getMonth() + 1;
    if(month <10){
      month = '0' + month;
    }
    var year= date.getFullYear();
    this.minDate = year + "-" + month + "-" + toDate;
    console.log(this.minDate);

  }

  signOut(): void {
    this.authService.signOut();
    window.location.replace('/login')
  }

 

  }
  

  
