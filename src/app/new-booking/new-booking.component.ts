import { Component, inject } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { BaseService } from '../base.service';
import { AuthService } from '../auth.service';
import { map } from 'rxjs'


@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrl: './new-booking.component.css'
})
export class NewBookingComponent {

  today = inject(NgbCalendar).getToday();

  model!: NgbDateStruct;
  date!: { year: number; month: number; };
  // name: any;
  // playgroundd: any;
  // type: any;
  // time: any;

  user: any

  // save() {
  //   console.log(this.model);
  // }

  bookings: any = {}

  newBooking2: any

  // columns = [
  //   { key: "displayName", label: "Név" },
  //   { key: "playgroundd", label: "Pálya" },
  //   { key: "type", label: "Játékmód" },
  //   { key: "date", label: "Datum" },
  //   { key: "time", label: "Idő" }
  // ]

  constructor(private base: BaseService, private auth: AuthService) {
    this.auth.getLoggedUser().subscribe(
      (user: any) => {
        this.user = user
        console.log("useruid", user.uid)
        console.log("userdName", user.displayName)
        console.log("user2", user)
        // this.newBooking = {}
        this.newBooking2 = {}
        this.newBooking2.displayName = user.displayName
        // this.newBooking2.uid = user.uid

        console.log("newBooking", this.newBooking2)
      }
    )


    this.base.getBooking().snapshotChanges().pipe(
      map(
        (changes) => changes.map(
          c => ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(
      (res) => {
        this.bookings = res
        console.log(this.bookings)
      }
    )


  }

  pushBooking() {

    if (!this.newBooking2.uid) {
      console.log("nBook1", this.newBooking2)
      this.newBooking2.uid = this.user.uid
      this.base.pushBooking(this.newBooking2)
    }
    else {
      console.log("nBook2", this.newBooking2)
      this.base.updateBooking(this.newBooking2)
    }
    // console.log("nBook", this.newBooking2)
    this.newBooking2 = {}
    this.newBooking2.displayName = this.user.displayName
    this.newBooking2.uid = this.user.uid
  }



  deleteBooking(booking: any) {
    this.base.deleteBooking(booking)
  }

  editBooking(booking: any) {
    this.newBooking2 = booking
  }


}


