import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbar.service';
import { StdformService } from '../stdform.service';


@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.css']
})
export class StdformComponent implements OnInit {

  std={
    fname:'',
    age:'',
    address:'',
    district:'',
    email:'',
    phno:'',
    dob:'',
    gender:'',
    quali:'',
    poy:'',
    skill:'',
    wstatus:'',
    techtrain:'',
    year:'',
    course:'',
    photo:''
  };

  constructor(private _auth:AuthService,
    private _router:Router, public header: HeaderService, public nav: NavbarService, public stdform:StdformService) { }

  ngOnInit(): void {
    this.nav.show();
    this.header.hide();
  }

  proceed(){
    this.stdform.newStudent(this.std)
      .subscribe(
        res =>{
          alert('Waiting for approval!!')
          this._router.navigate(['/studenthome/stdhome']);
        },
  
        err => {
          alert("Error in submitting form");
          this._router.navigate(["/studenthome/stdform"]);
        }
      )
  }

}
