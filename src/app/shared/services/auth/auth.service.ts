import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_ORIGIN } from '../../../environment/env';
import { IAuthPost, IAuthResponse } from '../../../types/auth';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { TApi, TStroke } from '../../../types/evn';
import { CookieService } from 'ngx-cookie-service';
import { createFormData } from '../../utils/utils';
import { Router } from '@angular/router';

export interface IAuthService {
  login(payload: IAuthPost): Observable<any>;
  isAuth(): boolean;
}

/**
 * аунтификация
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {
  private http: HttpClient = inject(HttpClient);
  private baseUrl: TApi<TStroke> = `${API_ORIGIN}/auth`;
  private cookieService: CookieService = inject(CookieService);
  private router: Router = inject(Router);
  public token: null | string =  null;
  private refreshToken: string | null = null;

  public isAuth(): boolean {
    if (!this.token) {
      this.token = this.cookieService.get('token'); // при повтороной авторизации пробуем войти и остаться в системе
      this.refreshToken = this.cookieService.get('refreshToken');
    }
    return !!this.token;
  }

  public login(payload: IAuthPost): Observable<IAuthResponse> {
    const fd: FormData = createFormData<IAuthPost>(payload);
    return this.http.post<IAuthResponse>(`${this.baseUrl}/token`, fd).pipe(
      tap(val => this.saveTokens(val))
    );
  }

  public refreshAutTokenMethod() {
    return this.http.post<IAuthResponse>(`${this.baseUrl}/refresh`, {
      refresh_token: this.refreshToken
    }).pipe(
      tap(res => this.saveTokens(res)),
      catchError(error => {
        this.logout()
        return throwError(error);
      })
    )
  }

  logout() {
    this.cookieService.deleteAll('token');
    this.token = null
    this.refreshToken = null
    this.router.navigate(['/login']);
  }

  saveTokens(res: IAuthResponse): void {
    this.token = res.access_token;
    this.refreshToken = res.refresh_token;

    this.cookieService.set('token', this.token);
    this.cookieService.set('refreshToken', this.refreshToken);
  }
}
