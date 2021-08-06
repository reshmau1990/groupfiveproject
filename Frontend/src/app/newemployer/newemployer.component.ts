import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newemployer',
  templateUrl: './newemployer.component.html',
  styleUrls: ['./newemployer.component.css']
})
export class NewemployerComponent implements OnInit {
  constructor(private employerService: EmployerService,private router: Router) { }
  employerItem= {
    fname:'',
    email:'',
    quali:'',
    }
  ngOnInit() {
  }
  AddEmployer()
  {    
    this.employerService.newEmployer(this.employerItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['adminhome/employers']);
  }
}
