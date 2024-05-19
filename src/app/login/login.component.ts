import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { UtitlityService } from '../utitlity.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild("loginForm") form:any

  currentUser:User = {userName:'',password:''}

  constructor(private router:Router,private service:UtitlityService){

  }
  onSubmit(){
    console.log(this.currentUser)

    if(this.currentUser.userName==='india' && this.currentUser.password==="india")
      {
        this.service.changeCurrentStatus('logged')
       this.router.navigate(['tours'])
       sessionStorage.setItem("islogged","true")
      }
  }
  reset() {

    this.form.reset();
}
}
