import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  std= {
    fname:"",
    age:"",
    address:"",
    district:"",
    email:"",
    phno:"",
    dob:"",
    gender:"",
    quali:"",
    poy:"",
    skill:"",
    wstatus:"",
    techtrain:"",
    year:"",
    course:"",
    photo:""
  };
  constructor( private http:HttpClient) { }
  
  getStudent(id:any){
    return this.http.get("http://localhost:3000/adminhome/students/"+id);
  }
  getStudents(){
    return this.http.get("http://localhost:3000/adminhome/students");
  }


  viewStudent(id:any){
    return this.http.get("http://localhost:3000/adminhome/dashboard/stdlist/"+id);
  }

  viewStudents(){
    return this.http.get("http://localhost:3000/adminhome/dashboard/stdlist");
  }
  viewRegStudents(){
    return this.http.get("http://localhost:3000/adminhome/dashboard/stdreg");
  }

  deleteStudent(id:any)
  {

    return this.http.delete("http://localhost:3000/adminhome/students/remove/"+id)

  }
  removeStudent(id:any)
  {
    return this.http.delete("http://localhost:3000/adminhome/dashboard/stdlist/remove/"+id)
  }

  // viewProf(id:any){
  //   return this.http.get("http://localhost:3000/adminhome/students/"+id);
  // }
  editStudent(student:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/adminhome/students/update",student)
    .subscribe(data =>{console.log(data)})
  }
  approveStudent(student:any)
  {
    return this.http.post("http://localhost:3000/adminhome/dashboard/stdlist/student/approve",student)
    .subscribe(data =>{console.log(data)})
  }

  viewProfile(id:any){
    return this.http.get("http://localhost:3000/studenthome/stdhome/"+id);
  }

  editprofile(student:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/studenthome/stdhome/editprofile",student)
    .subscribe(data =>{console.log(data)})
  }
}
