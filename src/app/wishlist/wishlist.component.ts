import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../hotel';
import { WishlistService } from '../wishlist.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  constructor(private wishListServ: WishlistService,
    private router: Router,
    private authService: SocialAuthService

    ) {}
  
    wishList: Hotel[] = [];
 
  ngOnInit(): void {
    this.getWishList();
   }

 getWishList() {
  this.wishList = this.wishListServ.getWishList();
  console.log(this.wishList);
}
removeFromWishList(id: any) {
  this.wishListServ.removeFromWishList(id);
  this.getWishList();
}

navigateToDetails(id: number) {
  this.router.navigateByUrl(`hotel_details/${id}`);
}

signOut(): void {
  this.authService.signOut();
  window.location.replace('/login')
}

 

}
