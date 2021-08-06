import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { SignupService } from '../signup.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HeaderService } from '../header.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Output() tableDataValues=new EventEmitter<string>();

  errormsg:any;
  pwdstrength:any;
  textcolor:any;

  user= {
    fname:'',
    quali:'',
    username:'',
    email:'',
    password:'',
    cpassword:''}

  constructor(private _router: Router,public header: HeaderService, public nav: NavbarService, private signupService: SignupService) { }

  ngOnInit(): void {
    this.header.show();
    this.nav.hide();
  }
  validatepassword(){
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])(?=.*\\W))|((?=.*[a-z])(?=.*[0-9])(?=.*\\W))|((?=.*[A-Z])(?=.*[a-z])(?=.*\\W))).*$", "g");
    var enoughRegex = new RegExp("(?=.{3,}).*", "g");

    if(false == enoughRegex.test(this.user.password)){
      this.pwdstrength="Password Length:Too Short",
      this.textcolor="text-danger"
      
    }
    else if(strongRegex.test(this.user.password)){
      this.pwdstrength="Password Strength:Strong",
      this.textcolor="text-success"
    }
    else if(mediumRegex.test(this.user.password)){
      this.pwdstrength="Password Strength:Medium",
      this.textcolor="text-warning"
    }
    else{
      this.pwdstrength="Password Strength:Poor",
      this.textcolor="text-danger"
    }

  }

  onSubmit(){ 

    if(this.user.cpassword==this.user.password){
    
      this.signupService.newUserData(this.user)
      .subscribe(
        // data =>{console.log(data)},
        res =>{
          this.tableDataValues.emit(this.user.username)
          this._router.navigate(['/login']);
        },
  
        err => {
          this._router.navigate(["signup"]);
          alert("User already exists");
        }
      )
      
    }
    else{
      alert('User form is invalid!!, Confirm password does not match');
    }
  }

}
