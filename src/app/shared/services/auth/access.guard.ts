import { inject } from "@angular/core"
import { AuthService } from "./auth.service"
import { Router } from "@angular/router";

// гарда для проверки авторизации
export const canActivateAuth = () => {
  const isLoggedIn = inject(AuthService).isAuth();
  if (isLoggedIn) return true;
  return inject(Router).createUrlTree(['/login']);
};
