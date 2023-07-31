import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HotelBookingSystemService } from '../hotel-booking-system.service';
import { User } from '../user';
import { NotificationService } from '../notification.service';
import { SocialAuthService } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  un: any;
  pwd: any;
  users: User[] = [];
  count:number | undefined;
  user:any;
  loggedIn:any;
  constructor(
    private route: Router,
    private hotelService: HotelBookingSystemService,
    private notifyService : NotificationService,
    private authService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.route.navigateByUrl('user');
    });
  
  }

  login(loginform: any) {
   this.count=0;
    this.hotelService.getAllUsers().subscribe((data: any) => {
      this.users = data;
      this.users.forEach((user) => {
        if (
          loginform.un == user.userName &&
          loginform.pwd == this.decryptPassword(user.userPassword)
        ) {
          this.count=1;
          // invalidCredentials = false;
      
          localStorage.setItem('userId', user.userId);
          localStorage.setItem('userName',user.userName);
          if (user.userName == 'admin') {
            this.route.navigateByUrl('admin');
          } else {
            this.route.navigateByUrl('user');
          }
        }
      });
      if(this.count==0)
      // if (invalidCredentials) {
       // alert('Invalid Credentials');
       this.notifyService.userLogin();
      // }
    });
  }

  decryptPassword(encryptedString: string):string {
    let decryptedString: string = '';
    if(encryptedString) {
      try {
        return atob(atob(encryptedString.split('').reverse().join('')));
      } catch (error: any) {
        alert(error);
      }
    }
    return decryptedString;
  }
}
