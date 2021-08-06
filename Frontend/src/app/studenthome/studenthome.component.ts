import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbar.service';
import { StudentsignupService } from '../studentsignup.service';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {
  students=[{
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
  }];
  student={
    _id:"",
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
userId:any;
  constructor(private _auth:AuthService,
    private _router:Router, public header: HeaderService,private studentService: StudentserviceService, public nav: NavbarService, private signupService: StudentsignupService) { }

  ngOnInit(): void {
    this.nav.show();
    this.header.hide();
  }
 
  


}
