import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { HttpAPIService } from '../service/http-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private http: HttpAPIService,
    private authService: AuthenticationService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  logout(){
    console.log('Inside Logout');
    this.authService.userLoggedOut();
    this.http.postLogout();
    this.router.navigate(['login']);
  }

  isUserLoggedIn(){
    return this.authService.isUserLoggedIn();
  }
}
