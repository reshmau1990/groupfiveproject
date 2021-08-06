import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  title = 'AdminDashboard';
  constructor(public _auth:AuthService,
    private _router:Router,public header: HeaderService, public nav: NavbarService) { }

  ngOnInit(): void {
    this.header.hide();
    this.nav.show();
  }

}
