import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '../hotel';
import { Location } from '../location';
import { HotelBookingSystemService } from '../hotel-booking-system.service';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent {
  id: any;
  hotel: Hotel = new Hotel();
  location: Location[]=[];

  constructor(
    private hotelSer: HotelBookingSystemService,
    private router: Router,
    private route: ActivatedRoute
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
    this.getAllLocations();
  }

  getAllLocations() {
    return this.hotelSer.getAllLocations().subscribe((data:any)=>
    {
      this.location=data;
      console.log(data);
    })
  }
 

  onSubmit() {
    this.hotelSer.updateHotel(this.hotel).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
    setTimeout(() => {
      this.router.navigateByUrl('hotel');
    }, 1000);
  }
}
