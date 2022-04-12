import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username : string,password : string) {
    sessionStorage.setItem('USERNAME_VALUE',username);
  }

  isUserLoggedIn() {
    let username = sessionStorage.getItem('USERNAME_VALUE');
    return !(username===null);
  }

  userLoggedOut(){
    sessionStorage.removeItem('USERNAME_VALUE');
    sessionStorage.clear();
  }
}
