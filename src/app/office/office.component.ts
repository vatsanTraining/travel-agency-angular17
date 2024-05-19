import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Office } from '../office';
import { JsonPipe, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-office',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,UpperCasePipe,JsonPipe],
  templateUrl: './office.component.html',
  styleUrl: './office.component.css'
})
export class OfficeComponent {


  officeList:Office[]=[];

  constructor(private service:DataService,private route:Router,private builder:FormBuilder){
    this.getExisitingOffices();
  }

  getExisitingOffices(){

    console.log('get Exisiting  method in office compoeent called')
    this.service.getAllOffices().subscribe({
      next:(data)=> this.officeList=data,
      error:err => console.log(err),
      complete: () => console.log('completed')
    });
  

  }
  remove(element:Office):void{

  
    this.service.removeOffice(element.id).subscribe(data =>{

      let idxPos =this.officeList.indexOf(element);

      this.officeList.splice(idxPos, 1);
  
    })
  
  }
  handleClick(){

    this.route.navigate(['addoffice'])
  }
  update(office:Office){
    this.route.navigate(['/editoffice'+'/'+office.id])
  }

}

