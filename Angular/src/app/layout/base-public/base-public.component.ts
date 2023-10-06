import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-base-public',
  templateUrl: './base-public.component.html',
  styleUrls: ['./base-public.component.scss']
})
export class BasePublicComponent {

constructor(private authService:AuthService) { }

getUsername():any
{
  return this.authService.getUsername();
}

}
