import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StdformService {

  std={
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

  constructor(private http:HttpClient,private router: Router) { }
    // server_address:string = '/api';
    newStudent(std:any)
    {   
      // return this.http.post(`${this.server_address}/studentsignup/insert`,{"item":user})
      return this.http.post("http://localhost:3000/stdform/insert",{"item":std})
    }
}
