import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgComponentOutlet } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReviewsComponent } from '../reviews/reviews.component';
import { RevenueComponent } from '../revenue/revenue.component';
import { WelcomeComponent } from '../welcome/welcome.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent,NgComponentOutlet,MatMenuModule,MatButtonModule,MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  currentComponent =WelcomeComponent ;
handleClick(choice:string) {
  switch(choice){
    case 'review':
     this.currentComponent= ReviewsComponent
     break;
     case 'revenue':
      this.currentComponent= RevenueComponent
      break;
      default:
      this.currentComponent=WelcomeComponent
  }
}




}
