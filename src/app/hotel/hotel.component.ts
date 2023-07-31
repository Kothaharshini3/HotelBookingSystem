import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '../hotel';
import { HotelBookingSystemService } from '../hotel-booking-system.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
})
export class HotelComponent implements OnInit {
  // hotel: Hotel = new Hotel();
  hotel: Hotel[] = [];
  id:any;
  // string:any;

  constructor(
    private hotelSer: HotelBookingSystemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllHotels();
  }

  navigate() {
    this.router.navigate(['create_hotel']);
  }


  navigateToUpdate(id: number) {
    this.router.navigateByUrl(`update_hotel/${id}`);
  }

  getAllHotels() {
    return this.hotelSer.getAllHotels().subscribe((data: any) => {
      this.hotel = data;
      console.log(data);
    });
  } 

  deleteHotel(id: number) {
    if(confirm('Are you sure you want to delete this hotel')){
      this.hotelSer.deleteHotel(id).subscribe(
       (data) => {
        console.log(data);
       },
       (error) => console.log(error)
      );
      setTimeout(() => {
        this.getAllHotels();
      }, 1000);
    }
  } 
}
