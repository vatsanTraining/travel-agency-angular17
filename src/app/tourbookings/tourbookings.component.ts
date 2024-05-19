import { Component } from '@angular/core';
import { Tourbook } from '../tourbook';
import { DataService } from '../data.service';
import { NgFor, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-tourbookings',
  standalone: true,
  imports: [UpperCasePipe,FormsModule,FilterPipe,NgFor],
  templateUrl: './tourbookings.component.html',
  styleUrl: './tourbookings.component.css'
})
export class TourbookingsComponent {

  bookingsList :Tourbook[] =[]
  srchValue:string =''
  constructor(private service:DataService){}



 ngOnInit() {
  console.log('Init method in Tour Bookings called')
  this.service.getAllBookings().subscribe({
    next:(data)=> this.bookingsList=data,
    error:err => console.log(err),
    complete: () => console.log('completed')
  });

 }
}
