import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  

  userError(){
    this.toastr.warning("User Already Exits with this name or email")
  }

  userSuccess(){
    this.toastr.success("You have successfully registered")
  }
  
  userLogin(){
    this.toastr.error("Invalid credentials")
  }
  
  userFavourites(){
    this.toastr.success("Added to favourites")
  }

 
}
