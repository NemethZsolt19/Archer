import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})

export class BaseService {

  bookingRef: AngularFireList<any>;
  url="https://localhost:7038/api/"
  constructor(private db:AngularFireDatabase, private http:HttpClient) {
    this.bookingRef=db.list('Bookings')
  }
  //getLoggedUser


  getPlaygroundd(){
    return this.bookingRef
  }



  addBooking(booking: any, playgroundd: any, type: any, date: { year: number; month: number; }, p0: any){ 
    let body = {
      name:booking.name,
      playgroundd:booking.playgroundd,
      type:booking.type,
      date:booking.date,
      time:booking.time
    }
    this.bookingRef.push(body)
  }
}

