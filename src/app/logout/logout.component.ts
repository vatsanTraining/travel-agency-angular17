import { Component } from '@angular/core';
import { UtitlityService } from '../utitlity.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  constructor(private service:UtitlityService,private router:Router){}

  ngOnInit(){
    this.service.changeCurrentStatus('logout')
    this.router.navigate(['tours'])
    sessionStorage.setItem("islogged","false")

  }

  signOut(){
    this.service.changeCurrentStatus('logout')
    this.router.navigate(['tours'])
    sessionStorage.setItem("islogged","false")

  }
}
