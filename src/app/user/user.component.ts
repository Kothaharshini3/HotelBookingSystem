import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '../hotel';
import { HotelBookingSystemService } from '../hotel-booking-system.service';
import { NotificationService } from '../notification.service';
import { WishlistService } from '../wishlist.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  hotel: Hotel[] = [];
  id:any;
  searchText:any;
  hotl: Hotel = new Hotel();
  // userId = localStorage.getItem('userId');
  userName = localStorage.getItem('userName');
  
  

  constructor(
    private hotelSer: HotelBookingSystemService,
    private router: Router,
    private route: ActivatedRoute,
    private wishListServ: WishlistService,
    private notifyService : NotificationService,
    private authService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.getAllHotels();

  }


  navigateToBookNow(id: number) {
    this.router.navigateByUrl(`hotel_details/${id}`);
  }


  getAllHotels() {
    return this.hotelSer.getAllHotels().subscribe((data: any) => {
      this.hotel = data;
      console.log(data);
    });
  }

  addToWishList(id: any) {
    this.hotelSer.getHotelByID(id).subscribe((data: any) => {
      this.hotl = data;
      this.wishListServ.addHotelToWishList(this.hotl);
      
    });
  }

  navigateToWishlist(id: number) {
    this.addToWishList(id);
    // this.router.navigateByUrl(`wishlist/${id}`);
    this.notifyService.userFavourites();
    
  }

  signOut(): void {
    this.authService.signOut();
    window.location.replace('/login')
  }

  
 }



