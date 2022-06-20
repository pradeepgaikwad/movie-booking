import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service';
import { HttpAPIService } from './service/http-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-booking';
  constructor(
    private http: HttpAPIService,
    private authService: AuthenticationService,
    private router : Router
  ) { }

  
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
