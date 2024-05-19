import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-revenue',
  standalone: true,
  imports: [],
  templateUrl: './revenue.component.html',
  styleUrl: './revenue.component.css'
})
export class RevenueComponent {

   chart1:any;
   chart2: any;
  ngOnInit(){
    this.chart1 = new Chart("Mychart", {
      type: 'bar', 

      data: {// values on X-Axis
        labels: ['Jan ', 'Feb', 'Mar' ], 
	       datasets: [
          {
            label: " Domestic Tours",
            data: ['46','57', '79'],
            backgroundColor: 'blue'
          },
          {
            label: " International Tours",
            data: ['54', '54', '53'],
            backgroundColor: 'limegreen'
          }  
        ]
      }
      
    });

    this.chart1 = new Chart("Mychart2", {
      type: 'bar', 

      data: {// values on X-Axis
        labels: ['Jan ', 'Feb', 'Mar' ], 
	       datasets: [
          {
            label: "Dometic Tours",
            data: ['460','570', '790'],
            backgroundColor: 'blue'
          },
          {
            label: "International Tours",
            data: ['140', '420', '330'],
            backgroundColor: 'limegreen'
          }  
        ]
      }
      
    });

  }
}
