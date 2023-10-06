import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from './auth.service';


export const Guard = (next: ActivatedRouteSnapshot) => {
  return inject(AuthService)
    .isLogged()
    .pipe(
      map((isLoggedIn) =>
        isLoggedIn ? true : (
          alert("No tiene permisos para acceder a esta página"),
        createUrlTreeFromSnapshot(next, ['/', 'login'])
        )

      )
    );
};
