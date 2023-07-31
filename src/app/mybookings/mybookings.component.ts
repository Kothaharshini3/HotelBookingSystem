import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Booking } from '../booking';
import { HotelBookingSystemService } from '../hotel-booking-system.service';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent {
  booking: Booking[] = [];
  id:any;
  book: Booking = new Booking();
 
  userid = localStorage.getItem('userId');

  constructor(
    private hotelSer: HotelBookingSystemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllBookings();
  }

  getAllBookings() {
    if(this.userid== this.book.userId){
      this.hotelSer.getAllBookings().subscribe((data: any) => {
        this.booking = data;
        console.log(data);
      });
    }
  }

}