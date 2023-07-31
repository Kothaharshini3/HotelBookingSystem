import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelBookingSystemService } from '../hotel-booking-system.service';
import { User } from '../user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  id: any;
  user: User = new User();

  constructor(
    private hotelSer: HotelBookingSystemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('enter');
    this.id = this.route.snapshot.params['id'];
    this.hotelSer.getUserByID(this.id).subscribe(
      (data) => {
        this.user = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.hotelSer.updateUser(this.id, this.user).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => console.log(error)
    );
    setTimeout(() => {
      this.router.navigateByUrl('user_crud');
    }, 1000);
  }
}
