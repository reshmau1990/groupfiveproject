import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployerService } from '../employer.service';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {
  pageTitle: string = 'Employers List';
  

  employers=[{
  
    fname:'',
    email:'',
    quali:''
    }]
  
  
  constructor(private router:Router,private employerService: EmployerService){   
    
  }
  ngOnInit(): void{
    this.employerService.getEmployers().subscribe((data:any)=>{
    this.employers=JSON.parse(JSON.stringify(data));
  })
  }
  editEmployer(employer:any)
  {
    localStorage.setItem("editEmployerId", employer._id.toString());
    this.router.navigate(['/adminhome/employers/update-employer']);

  }
  deleteEmployer(employer:any)
  {
    this.employerService.deleteEmployer(employer._id)
      .subscribe((data:any) => {
        this.employers = this.employers.filter(e => e !== employer);
      })
  

  }
}
