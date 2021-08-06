import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  studentItem= {
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
    photo:''}
  

  constructor(private router:Router,private studentService:StudentserviceService) { }

  ngOnInit(): void {
    let studentId = localStorage.getItem("editStudentId");
    this.studentService.getStudent(studentId).subscribe((data:any)=>{
    this.studentItem=JSON.parse(JSON.stringify(data));
  })
  }
  editStudent()
  {    
    this.studentService.editStudent(this.studentItem);   
    alert("Success");
    this.router.navigate(['/adminhome/students']);
  }

}
