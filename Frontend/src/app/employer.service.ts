import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  item= {
    name:'',
    email:'',
    qualification:'',
    }
  constructor( private http:HttpClient) { }
  getEmployer(id:any){
    return this.http.get("http://localhost:3000/adminhome/employers/"+id);
  }
  getEmployers(){
    return this.http.get("http://localhost:3000/adminhome/employers");
  }

  newEmployer(item:any)
  {   
    return this.http.post("http://localhost:3000/adminhome/employers/newEmployer/insert",{"employer":item})
    .subscribe(data =>{console.log(data)})
  }
  
  deleteEmployer(id:any)
  {

    return this.http.delete("http://localhost:3000/adminhome/employers/remove/"+id)

  }
  editEmployer(employer:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/adminhome/employers/update-employer",employer)
    .subscribe(data =>{console.log(data)})
  }
}