import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { firstValueFrom } from 'rxjs';

export const IsAuthGuard: CanMatchFn = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  try {
    const isAuthenticated = await firstValueFrom(authService.checkStatus());

    if (!isAuthenticated) {
  
      router.navigateByUrl('/');
      return false;
    }

    return true;
  } catch (error) {

    router.navigateByUrl('/');
    return false;
  }
};
