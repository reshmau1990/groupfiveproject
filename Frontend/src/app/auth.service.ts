 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  
  // private _loginUrl = "/api";
  private _loginUrl = "http://localhost:3000/studentlogin";
  private _logUrl = "http://localhost:3000/login";

  constructor(private http: HttpClient) { }


  userLogin(user:any)
  {
    return this.http.post<{userId:string}>(this._loginUrl, user)
  }

  loginUser(user:any)
  {
    return this.http.post<any>(this._logUrl, user)
  }

  loggedIn()
  {
    return (!!localStorage.getItem('token'));
  }
 
  getToken()
  {
    return localStorage.getItem('token')
  }
  getUserId()
  {
    return localStorage.getItem('userId')
  }
}