import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BaseService {
  url="https://localhost:7038/api/"
  constructor(private http:HttpClient) { }

  getPlaygroundd(){
    return this.http.get(this.url+"Playgroundd")
  }

  addBooking(booking:any) {
    return this.http.post(this.url+"Bookings", booking)
  }
}
