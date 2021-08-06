import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    email:"",
    password:""
  };
  constructor(private _auth: AuthService, private _router:Router,public header: HeaderService, public nav: NavbarService) { }

  ngOnInit(): void {
    this.header.show();
    this.nav.hide();
  }

  loginuser () {
    
    this._auth.loginUser(this.user)
    .subscribe(
      res => {

        if(this.user.email == "admn4928@gmail.com" && this.user.password == "Admin@123"){
          localStorage.setItem('token', res.token);
        }
          this._router.navigate(['/adminhome/dashboard']);
      },
      err => {
        console.log(err);
        alert('Invalid login credentials')
        this._router.navigate(['/login'])
      }
    ) 
  }
}