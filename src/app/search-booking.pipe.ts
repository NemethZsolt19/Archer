import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBooking'
})
export class SearchBookingPipe implements PipeTransform {

  transform(bookings:any[], uid:string): any {
    if (!bookings) return null;
    if (!uid) return bookings;

    return bookings.filter(booking => booking.uid === uid);

  }

}
