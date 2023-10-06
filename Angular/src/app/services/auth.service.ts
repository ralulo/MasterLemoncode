import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username:string, password:string):boolean
  {
    if(username === "master@lemoncode.net" && password === "12345678")
    {
      localStorage.setItem("username", username);
      return true;
    }
    return false;
  }

  logout():any
  {
    localStorage.removeItem("username");
  }

  isLogged():Observable<boolean>
  {
    if(localStorage.getItem("username") !== null)
    {
      return of(true);
    }
    return of(false);
  }

  getUsername():any
  {
    return localStorage.getItem("username");
  }
}
