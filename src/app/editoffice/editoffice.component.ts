import { Component } from '@angular/core';
import { Office } from '../office';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-editoffice',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './editoffice.component.html',
  styleUrl: './editoffice.component.css'
})
export class EditofficeComponent {

  id:number=0;
  toEdit:Office={id:0,manager:'',location:'',phoneNumber:0,pincode:0};

   constructor(private activeRoute:ActivatedRoute,private service:DataService,private route:Router){
   this.id = activeRoute.snapshot.params['id']

      service.findOfficeById(this.id).subscribe(data => { this.toEdit=data ;console.log(this.toEdit)});
   }

   update(){
    console.log(this.toEdit);
    let id = this.toEdit.id;
    this.service.updateOffice(id,this.toEdit).subscribe(data => { this.route.navigate(['offices'])})
   }
}
