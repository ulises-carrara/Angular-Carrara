import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/layouts/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const authService = inject(AuthService)
  //return 
  return authService.verifyToken()
  .pipe(
    map((verificado) => verificado? true : router.createUrlTree(['auth', 'login'])))
};
