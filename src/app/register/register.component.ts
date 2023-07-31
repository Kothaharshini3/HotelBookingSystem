import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5';
import { HotelBookingSystemService } from '../hotel-booking-system.service';
import { User } from '../user';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  users: User[] = [];
  userExits: Boolean = false;
   md5 = new Md5();
   password:any;
   

  constructor(
    private userser: HotelBookingSystemService,
    private router: Router,
    private notifyService : NotificationService,
    

  ) {}

  ngOnInit(): void {
    this.password= this.user.userPassword;
   
    this.md5.appendStr(this.password);
     
  }

  saveUser() {
    this.userExits = false;
    this.userser.getAllUsers().subscribe((data: any) => {
      this.users = data;
      this.users.forEach((user) => {
        if (
          user.userName == this.user.userName ||
          user.userEmail == this.user.userEmail
        ) {
          //alert('User Already Exits with this name or email');
          this.notifyService.userError();
          this.userExits = true;
        }
      });
      if (!this.userExits) {
        this.userser.createUser(this.user).subscribe(
          (data) => {
            console.log(data);
            
            console.log(this.md5.appendStr('mystring')+ "encrypted");
          },
          (error) => console.log(error)
        );
        this.notifyService.userSuccess();
        //alert('You have successfully registered please login to continue');
        setTimeout(() => {
          this.router.navigateByUrl('login');
        }, 1000);
      }
    });
  }

  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }
}
