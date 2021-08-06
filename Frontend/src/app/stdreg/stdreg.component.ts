import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbar.service';
import { StdformService } from '../stdform.service';
import { StudentserviceService } from '../studentservice.service';
@Component({
  selector: 'app-stdreg',
  templateUrl: './stdreg.component.html',
  styleUrls: ['./stdreg.component.css']
})
export class StdregComponent implements OnInit {

  students= [{
    fname:'',
    email:'',
    password:'',
    cpassword:''}]

  constructor(private studentService: StudentserviceService,
    private _router:Router, public header: HeaderService, public nav: NavbarService, public stdform:StdformService) { }

    ngOnInit(): void {
      this.studentService.viewRegStudents().subscribe((data:any)=>{
      this.students=JSON.parse(JSON.stringify(data));
      })
    }

  }
