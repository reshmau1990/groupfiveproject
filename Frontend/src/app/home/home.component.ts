import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _auth:AuthService,
    private _router:Router,public header: HeaderService, public nav: NavbarService) { }

  ngOnInit(): void {
    this.header.show();
    this.nav.hide();
  }

}
