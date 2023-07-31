import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private router:Router){}

  navigate(){
    this.router.navigate(['user_crud']);
  }

  navigateToHotel(){
    this.router.navigate(['hotel']);
  }

  navigateToLocation(){
    this.router.navigate(['location']);
  }

  navigateToBooking(){
    this.router.navigate(['booking']);
  }




}
