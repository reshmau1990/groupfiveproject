import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  user= {
    fname:'',
    quali:'',
    username:'',
    email:'',
    password:''
  }

  constructor(private http:HttpClient,private router: Router) { }
  newUserData(user:any)
  {   
    // return this.http.post(`${this.server_address}/studentsignup/insert`,{"item":user})
    return this.http.post("http://localhost:3000/signup/insert",{"item":user})
  }
}
