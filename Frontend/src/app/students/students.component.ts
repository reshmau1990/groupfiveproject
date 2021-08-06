import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentserviceService } from '../studentservice.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  pageTitle: string = 'Student Details';
  imageWidth: number = 50;
  imageMargin: number = 2;

  students=[{
    fname:'',
    email:'',
    quali:'',
    poy:'',
    skill:'',
    course:'',
    photo:''}]
  constructor(private router:Router,private studentService: StudentserviceService, public _auth:AuthService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data:any)=>{
    this.students=JSON.parse(JSON.stringify(data));
  })
  }
  editStudent(student:any)
  {
    localStorage.setItem("editStudentId", student._id.toString());
    this.router.navigate(['/adminhome/students/update']);
  }
  deleteStudent(student:any)
  {
    this.studentService.deleteStudent(student._id)
      .subscribe((data:any) => {
        this.students = this.students.filter(s => s !== student);
  })
  }

  getStudent(student:any)
  {
    localStorage.setItem("getStudentId", student._id.toString());
    this.router.navigate(['adminhome/students/viewprof']);
  }
}
