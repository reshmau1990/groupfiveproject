import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router, public nav: NavbarService) { }

  ngOnInit(): void {
  }

  logoutUser()
  {
  localStorage.removeItem('token')
  localStorage.removeItem('user');
  this._router.navigate(['/'])
  }
}
