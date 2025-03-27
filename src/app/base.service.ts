import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class BaseService {

  bookingRef: AngularFireList<any>;
  // private url="https://localhost:7038/api/"
  constructor(private db:AngularFireDatabase,) {
    this.bookingRef=db.list('/new-booking')

    
  }
  //getLoggedUser



  pushBooking(booking:any){ 
    this.bookingRef.push(booking);
  }
  getBooking(){
    return this.bookingRef
  }
  
deleteBooking(booking:any){
  this.bookingRef.remove(booking.key)
}

updateBooking(booking:any){
  let key = booking.key
  delete booking.key
  this.bookingRef.update(key, booking)
}

}
