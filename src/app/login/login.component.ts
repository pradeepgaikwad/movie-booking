import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { HttpAPIService } from '../service/http-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //log in check
  invalidLogin=false;
  //Validation error message
  errorMessage = 'Please enter valid credentials';

  loginForm:FormGroup;
  constructor(
    private http: HttpAPIService,
    private router: Router,
    private authService : AuthenticationService
    ) { 
    this.loginForm=new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
});
  }

  ngOnInit(): void {
  }

  login(loginFormData: any){
    console.log("===data==",loginFormData);
    this.http.getService("login",loginFormData).subscribe(
      response => {
        console.log('Response',response);
        if(response.Output==='Success'){
          console.log('Inside Success');
          this.authService.authenticate(loginFormData.username,loginFormData.password);
          this.router.navigate(['home']);          
        } else {
          this.invalidLogin = true;
        }
        
      }
    )
  }
}
