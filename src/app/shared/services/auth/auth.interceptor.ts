import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { catchError, switchMap, throwError } from "rxjs";

let isRefreshing = false;

/**
 * Нужен что бы перехватить ключ доступа и хранить его
 * @param req - перехваченный запрос
 * @param next - отпустиь запрос
 */
export const authTokentInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.token;

  if (!token) return next(req);
  if (isRefreshing) return refreshAndProcced(authService, req, next);

  return next(addToken(req, token)).pipe(
    catchError(error => {
      if (error.status === 403) return refreshAndProcced(authService, req, next); // отправка запроса для обновления токена
      return throwError(error);
    })
  );
}


const refreshAndProcced = (
  authServicde: AuthService, 
  req: HttpRequest<any>, 
  next: HttpHandlerFn
) => {
  if (!isRefreshing) {
    isRefreshing = true;
    return authServicde.refreshAutTokenMethod().pipe(
      // часто используемый пайп
      // берёт текущий stream и меняем его на новый стрим
      switchMap((res) => {
        isRefreshing = false;
        return next(addToken(req, res.access_token));
      })
    );
  }
  return next(addToken(req, authServicde.token!));
}

const addToken = (req: HttpRequest<any>, token: string) => {
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
}
