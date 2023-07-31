import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';
import { HotelBookingSystemService } from '../hotel-booking-system.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  booking: Booking[] = [];
  id:any;

  constructor(
    private hotelSer: HotelBookingSystemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllBookings();
  }

  getAllBookings() {
    return this.hotelSer.getAllBookings().subscribe((data: any) => {
      this.booking = data;
      console.log(data);
    });
  }

}
