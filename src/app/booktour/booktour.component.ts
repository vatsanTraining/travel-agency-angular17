import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-booktour',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,JsonPipe],
  templateUrl: './booktour.component.html',
  styleUrl: './booktour.component.css'
})
export class BooktourComponent {

  bookingForm:FormGroup;
  
  constructor(private http:HttpClient){

    this.bookingForm = new FormGroup(
      {
     email: new FormControl(),
     customerName: new FormControl(),
     id: new FormControl() ,
     tour:new FormControl()
      }); 
   }
  message:string =''
   onSubmit(){
     console.log(this.bookingForm.value)

     let userToadd = this.bookingForm.value;
     this.http.post("http://localhost:3000/users",userToadd).subscribe(data => this.message="added");
   }
}
