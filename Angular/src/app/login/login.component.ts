import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user: string = "";
  password: string = "";

  constructor(private router: Router,private authService:AuthService ) {}



  login()
  {
    if(this.user === "" || this.password === "")
    {

      return alert("Todos los campos son obligatorios");
    }
    if(this.authService.login(this.user, this.password))
    {
      this.router.navigate(['dashboard']);
    }else
    {
      alert("Usuario o contraseña incorrectos");
    }


  }

}
