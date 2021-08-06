import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Enrollment System';
  constructor(private _auth:AuthService,
    private _router:Router,public header: HeaderService, public nav: NavbarService){}

  ngOnInit(){
    this.header.hide();
    this.nav.hide();
  }
}
