import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbar.service';
import { StdformService } from '../stdform.service';
import { StudentserviceService } from '../studentservice.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-viewprof',
  templateUrl: './viewprof.component.html',
  styleUrls: ['./viewprof.component.css']
})
export class ViewprofComponent implements OnInit {

  student={
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
    photo:'',
    value:''
  };

  pageTitle: string = 'STUDENT PROFILE';
  imageWidth: number = 50;
  imageMargin: number = 2;

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
    photo:'',
    value:''}];
 
    constructor(public _auth:AuthService, private studentService: StudentserviceService, private route: ActivatedRoute,
      private _router:Router, public header: HeaderService, public nav: NavbarService, public stdform:StdformService) { }
  

  ngOnInit(): void {
    let studentId = localStorage.getItem("getStudentId");
    this.studentService.getStudent(studentId).subscribe((data)=>{
    this.student=JSON.parse(JSON.stringify(data));
    })
  }

}
