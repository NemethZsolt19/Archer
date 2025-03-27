import { Component, inject } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { BaseService } from '../base.service';
import { AuthService } from '../auth.service';
import {map} from 'rxjs'


@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrl: './new-booking.component.css'
})
export class NewBookingComponent {

	today = inject(NgbCalendar).getToday();

	model!: NgbDateStruct;
	date!: { year: number; month: number; };
name: any;
playgroundd: any;
type: any;
time: any;
	

  save() {
    console.log(this.model);
  }

  booking:any={}
  newBooking:any={}
  columns=[
    {key:"name", label:"Név"},
    {key:"playgroundd", label:"Pálya"},
    {key:"type", label:"Játékmód"},
    {key:"date", label:"Datum"},
    {key:"time", label:"Idő"}
  ]

  constructor(private base:BaseService, private auth:AuthService){
    
    this.base.getBooking().snapshotChanges().pipe(
      map(
        (changes) => changes.map(
          c => ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(
      (res)=>this.booking=res
    )
  }

  pushBooking(){
    console.log(this.newBooking, "megy")
    this.base.pushBooking(this.newBooking)
    this.newBooking={}
   
  }




}


