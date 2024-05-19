import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Office } from '../office';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-addoffice',
  standalone: true,
  imports: [JsonPipe,FormsModule,ReactiveFormsModule],
  templateUrl: './addoffice.component.html',
  styleUrl: './addoffice.component.css'
})
export class AddofficeComponent {

  officeForm:FormGroup=new FormGroup({
    'id':new FormControl('',Validators.required),
    'manager':new FormControl('',Validators.required),
    'location':new FormControl(),
    'phoneNumber':new FormControl(),
    'pincode':new FormControl()


   });
  currentEntry: Office={id:0,location:'',manager:'',phoneNumber:0,pincode:0};
  
  constructor(private service:DataService,private route:Router){

  }

  submit(){
    console.log(this.officeForm.value);
    this.currentEntry=this.officeForm.value;


      console.log('Init method called')
      this.service.addOffice(this.currentEntry).subscribe({
        next:(data)=> this.route.navigate(['offices']),
        error:err => console.log(err),
        complete: () => console.log('completed')
      });
    

      }
}



