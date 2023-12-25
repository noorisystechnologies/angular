import { CanActivateFn } from '@angular/router';
import { DatabaseService } from '../../service/database.service';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = new DatabaseService
  if(loginService.isAuthenticated()){
    return true;
  } else {
    console.warn('Unauthorized access. Redirecting to login page.');
    return false;
  }
  // return true
};
