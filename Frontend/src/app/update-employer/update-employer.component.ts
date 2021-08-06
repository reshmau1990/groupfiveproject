import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerService } from '../employer.service';

@Component({
  selector: 'app-update-employer',
  templateUrl: './update-employer.component.html',
  styleUrls: ['./update-employer.component.css']
})
export class UpdateEmployerComponent implements OnInit {
  employerItem= {
    fname:'',
    email :'',
    quali:'',
  }
 
  
constructor(private router:Router,private employeeService:EmployerService) { }

  ngOnInit(): void {
    let employerId = localStorage.getItem("editEmployerId");
    this.employeeService.getEmployer(employerId).subscribe((data:any)=>{
      this.employerItem=JSON.parse(JSON.stringify(data));
  })
  }
  editEmployer()
  {    
    this.employeeService.editEmployer(this.employerItem);   
    alert("Success");
    this.router.navigate(['/adminhome/employers']);
  }

}