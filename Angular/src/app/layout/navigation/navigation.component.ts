import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @Input() username:string;

  constructor(private authService:AuthService, private router: Router) { }

  isLogged():boolean
  {
    let logged:boolean = false;
    this.authService.isLogged().subscribe((result:boolean) => {
      logged = result;
    });
    return logged;
  }

  logout()
  {
    this.authService.logout();
    this.username = "";
    this.router.navigate(["login"]);
  }

}


