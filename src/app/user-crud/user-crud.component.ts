import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelBookingSystemService } from '../hotel-booking-system.service';
import { User } from '../user';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.css'],
})
export class UserCRUDComponent implements OnInit {
  user: User[] = [];
  users: User = new User();
  id: any;

  constructor(
    private hotelSer: HotelBookingSystemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  
  navigateToUpdate(id: number) {
    this.router.navigateByUrl(`update_user/${id}`);
  }

  getAllUsers() {
    return this.hotelSer.getAllUsers().subscribe((data: any) => {
      this.user = data;
      console.log(data);
    });
  }

  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete this user')) {
      this.hotelSer.deleteUser(id).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => console.log(error)
      );
      setTimeout(() => {
        this.getAllUsers();
      }, 1000);
    }
  }


}
