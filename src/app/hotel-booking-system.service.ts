import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './booking';
import { Hotel } from './hotel';
import { User } from './user';
import{Location} from './location'
import { Wishlist } from './wishlist';



@Injectable({
  providedIn: 'root'
})
export class HotelBookingSystemService {
  private baseURL = 'http://localhost:8080';

  hotelList:any;
  userDetails: any;

  getCartById(wishList: any) {
    throw new Error('Method not implemented.');
  }


  constructor(private httpClient: HttpClient) {}

  //User CRUD Operations

  createUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + '/users/list', user);
  }

  getAllUsers() {
    return this.httpClient.get(`${this.baseURL}` + '/users/list');
  }

  getUserByID(id: number): Observable<User> {
    return this.httpClient.get<User>(
      `${this.baseURL}` + '/users/list' + `/${id}`
    );
  }

  updateUser(id: number, user: User): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}` + '/users/list', user);
  }

  deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}` + '/users/list' + `/${id}`);
  }

  //Hotel CRUD Operations

  getAllHotels() {
    return this.httpClient.get(`${this.baseURL}` + '/hotels/list');
  }

  getHotelByID(id: number): Observable<Hotel> {
    return this.httpClient.get<Hotel>(
      `${this.baseURL}` + '/hotels/list' + `/${id}`
    );
  }

  createHotel(hotel: Hotel): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + '/hotels/list', hotel);
  }

  updateHotel(hotel: Hotel): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}` + '/hotels/list', hotel);
  }

  deleteHotel(id: number): Observable<Object> {
    return this.httpClient.delete(
      `${this.baseURL}` + '/hotels/list' + `/${id}`
    );
  }

  // Location CRUD operations

  getAllLocations() {
    return this.httpClient.get(`${this.baseURL}` + '/locations/list');
  }

  getLocationByID(id: number): Observable<Location> {
    return this.httpClient.get<Location>(
      `${this.baseURL}` + '/locations/list' + `/${id}`
    );
  }

  createLocation(location: Location): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + '/locations/list', location);
  }

  updateLocation(id: number, location: Location): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}` + '/locations/list', location);
  }

  deleteLocation(id: number): Observable<Object> {
    return this.httpClient.delete(
      `${this.baseURL}` + '/locations/list' + `/${id}`
    );
  }

  //Booking CRUD operations
  getAllBookings() {
    return this.httpClient.get(`${this.baseURL}` + '/bookings/list');
  }

  getBookingByID(id: number): Observable<Booking> {
    return this.httpClient.get<Booking>(
      `${this.baseURL}` + '/bookings/list' + `/${id}`
    );
  }

  createBooking(booking: Booking): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + '/bookings/list', booking);
  }

  //cart crud

  getAllWishlists() {
    return this.httpClient.get(`${this.baseURL}` + '/cart/list');
  }

  getWishlistByID(id: number): Observable<Wishlist> {
    return this.httpClient.get<Wishlist>(
      `${this.baseURL}` + '/cart/list' + `/${id}`
    );
  }

  createWishlist(wishlist: any): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}` + '/cart/list', wishlist);
  }

  updateWishlist(id: number, wishlist: Wishlist): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}` + '/cart/list', wishlist);
  }

  deleteWishlist(id: number): Observable<Object> {
    return this.httpClient.delete(
      `${this.baseURL}` + '/cart/list' + `/${id}`
    );
  }


 
  // // Billing

  // billing(price:number, noOfRooms:number, noOfDays:number){
  //   return price*noOfRooms*noOfDays;
  // }






}
