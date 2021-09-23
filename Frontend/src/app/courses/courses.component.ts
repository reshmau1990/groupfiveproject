import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbar.service';
import { NewCourseService } from '../new-course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  course= {
    cname:'',
    duration:'',
    fee:''}

    constructor(private _router: Router,public header: HeaderService, public nav: NavbarService, public nCourse: NewCourseService) { }


  ngOnInit(): void {
    this.nav.show();
    this.header.hide();
  }
  adCourse(){
    this.nCourse.newcourse(this.course)
      .subscribe(
        res =>{
          alert('Sucessfully added!!')
          this._router.navigate(['/adminhome/courses']);
        },
  
        err => {
          alert("Error in adding course");
          this._router.navigate(["/adminhome/courses"]);
        }
      )
  }
}
