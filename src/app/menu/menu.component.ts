import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UtitlityService } from '../utitlity.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  logo ='assets/images/logo.jpeg'
  profile ='assets/images/profilephoto.jpeg'
  showLogin: boolean=true
  showLogout: boolean=false;
  constructor(private service:UtitlityService){

  }

  ngOnInit(){

    this.service.currentStatus.subscribe(message =>{

      if(message==='logged'){
        this.showLogin =false
        this.showLogout=true
      }
    })

    this.service.currentStatus.subscribe(message =>{

      if(message==='logout'){
        this.showLogin =true
        this.showLogout=false
      }
    })

  }

}
