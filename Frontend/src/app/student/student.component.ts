import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbar.service';
import { StdformService } from '../stdform.service';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

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
    photo:''
  };

  pageTitle: string = 'STUDENT DETAILS';
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
    photo:''}]

  constructor(public _auth:AuthService, private studentService: StudentserviceService,
    private _router:Router, public header: HeaderService, public nav: NavbarService, public stdform:StdformService) { }


    ngOnInit(): void {
      let studentId = localStorage.getItem("viewStudentId");
      this.studentService.viewStudent(studentId).subscribe((data)=>{
      this.student=JSON.parse(JSON.stringify(data));
    })
    }
    approveStudent(student:any)
    {    
    this.studentService.approveStudent(this.student);   
    alert("Success");
    this._router.navigate(['/adminhome/dashboard/stdlist']);
    }

    removeStudent(student:any)
    {
      this.studentService.removeStudent(student._id)
      .subscribe((data:any) => {
      this.students = this.students.filter(s => s !== student);
      this._router.navigate(["/adminhome/dashboard/stdlist"])
    })
  }
}