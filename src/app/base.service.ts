import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})

export class BaseService {

  bookingRef: AngularFireList<any>;
  // private url="https://localhost:7038/api/"
  constructor(private db:AngularFireDatabase) {
    this.bookingRef=db.list('/new-booking')
  }
  //getLoggedUser



  pushBooking(booking:any){ 
    this.bookingRef.push(booking);
  }
  getBooking(){
    return this.bookingRef
  }
  
}
