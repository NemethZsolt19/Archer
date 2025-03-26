import { Component, inject } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { BaseService } from '../base.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrl: './new-booking.component.css'
})
export class NewBookingComponent {

	today = inject(NgbCalendar).getToday();

	model!: NgbDateStruct;
	date!: { year: number; month: number; };
	

  save() {
    console.log(this.model);
  }

  name:any
  playgroundd:any
  type:any
  year:any
  month:any
  time:any

  constructor(private base:BaseService, private auth:AuthService){
    
    this.base.addBooking(this.name, this.playgroundd, this.type, this.date, this.time)  
  }

  pushBooking(){
    this.base.addBooking(this.name, this.playgroundd, this.type, this.date, this.time)
  }

}
