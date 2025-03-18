import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

const  authService  =  inject(AuthService);
const  router  =  inject(Router);
export const authGuard: CanActivateFn = (route, state) => {
  if (authService.isLoggedIn()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
