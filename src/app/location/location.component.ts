import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelBookingSystemService } from '../hotel-booking-system.service';
import { Location } from '../location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
 // hotel: Hotel = new Hotel();
 location: Location[] = [];

 constructor(
   private hotelSer: HotelBookingSystemService,
   private router: Router,
   private route: ActivatedRoute
 ) {}

 ngOnInit(): void {
   this.getAllLocations();
 }

 navigate() {
   this.router.navigate(['create_location']);
 }

 navigateToUpdate(id: number) {
  this.router.navigateByUrl(`update_location/${id}`);
}

 getAllLocations() {
   return this.hotelSer.getAllLocations().subscribe((data: any) => {
     this.location = data;
     console.log(data);
   });
 }

 // updateHotel(id: number) {
 //   this.router.navigateByUrl(`update_user/${id}`);
 // }

 deleteLocation(id: number) {
  if(confirm('Are you sure you want to delete this location')){
   this.hotelSer.deleteLocation(id).subscribe(
     (data) => {
       console.log(data);
     },
     (error) => console.log(error)
   );
   setTimeout(() => {
     this.getAllLocations();
   }, 1000);
  }
 }
}

