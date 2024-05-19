import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { HeaderComponent } from '../header/header.component';
import { Tour } from '../tour';
import { RouterLink } from '@angular/router';
import { DataService } from '../data.service';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tourpackages',
  standalone: true,
  imports: [HeaderComponent,RouterLink,UpperCasePipe,FormsModule],
  templateUrl: './tourpackages.component.html',
  styleUrl: './tourpackages.component.css'
})
export class TourpackagesComponent {


  tourList:Tour[] =[ 
  ]

  srchValue:string =''
  constructor(private service:DataService){}



 ngOnInit() {
  console.log('Init method called')
  this.service.getAllTour().subscribe({
    next:(data)=> this.tourList=data,
    error:err => console.log(err),
    complete: () => console.log('completed')
  });

}
}
