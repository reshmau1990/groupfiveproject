import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewCourseService {

  course= {
    cname:'',
    duration:'',
    fee:''}

  constructor(private http:HttpClient,private router: Router) { }
  newcourse(course:any)
    {   
      // return this.http.post(`${this.server_address}/studentsignup/insert`,{"item":user})
      return this.http.post("http://localhost:3000/adminhome/courses/insert",{"item":course})
    }
}
