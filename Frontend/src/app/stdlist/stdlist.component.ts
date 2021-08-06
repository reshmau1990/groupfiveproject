import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbar.service';
import { StdformService } from '../stdform.service';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-stdlist',
  templateUrl: './stdlist.component.html',
  styleUrls: ['./stdlist.component.css']
})
export class StdlistComponent implements OnInit {

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

  constructor(public _auth:AuthService, private studentService: StudentserviceService,
    private _router:Router, public header: HeaderService, public nav: NavbarService, public stdform:StdformService) { }

  ngOnInit(): void {
    this.studentService.viewStudents().subscribe((data:any)=>{
    this.students=JSON.parse(JSON.stringify(data));
    })
  }

  viewStudent(student:any)
  {
    localStorage.setItem("viewStudentId", student._id.toString());
    this._router.navigate(['adminhome/dashboard/stdlist/student']);
  }
}
