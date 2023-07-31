import { Location } from '../location';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelBookingSystemService } from '../hotel-booking-system.service';

@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.css']
})
export class UpdateLocationComponent {
  id: any;
  location: Location = new Location();

  constructor(
    private hotelSer: HotelBookingSystemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('enter');
    this.id = this.route.snapshot.params['id'];
    this.hotelSer.getLocationByID(this.id).subscribe(
      (data) => {
        this.location = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.hotelSer.updateLocation(this.id, this.location).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
    setTimeout(() => {
      this.router.navigateByUrl('location');
    }, 1000);
  }
}
