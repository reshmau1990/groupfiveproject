import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StudentserviceService } from '../studentservice.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-stdhome',
  templateUrl: './stdhome.component.html',
  styleUrls: ['./stdhome.component.css']
})
export class StdhomeComponent implements OnInit {

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
    value:''
  }];
  userId:any;
  constructor(public _auth:AuthService,private _router:Router,private route: ActivatedRoute,private studentService: StudentserviceService) { }

  ngOnInit(): void {
    // let userId = this._auth.getUserId(); 
    // this.studentService.getStudent(userId).subscribe((data:any)=>{
    // this.student=JSON.parse(JSON.stringify(data));
    // })
    this.studentService.viewStudents().subscribe((data:any)=>{
    this.students=JSON.parse(JSON.stringify(data));
  })
  }


viewprofile(student:any)
  {
    localStorage.setItem("getStudentId", this.userId);
    this._router.navigate(['studenthome/stdhome/viewprofile']);
  }

 editprofile(student:any)
  {
    localStorage.setItem("getStudentId", this.userId);
    this._router.navigate(['studenthome/stdhome/editprofile']);
  }

}
