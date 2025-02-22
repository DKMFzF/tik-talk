import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_ORIGIN } from '../../../environment/env';
import { IAuthPost, IAuthResponse } from '../../../types/auth';
import { Observable, tap } from 'rxjs';
import { TApi, TStroke } from '../../../types/evn';
import { CookieService } from 'ngx-cookie-service';
import { createFormData } from '../../utils/utils';

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
  
  public token: null | string =  null;
  private refreshToken: string | null = null;

  public isAuth(): boolean {
    if (!this.token) this.token = this.cookieService.get('token'); // при повтороной авторизации пробуем войти и остаться в системе
    return !!this.token;
  }

  public login(payload: IAuthPost): Observable<IAuthResponse> {
    const fd: FormData = createFormData<IAuthPost>(payload);
    return this.http.post<IAuthResponse>(`${this.baseUrl}/token`, fd).pipe(
      tap(val => {
        this.token = val.access_token;
        this.refreshToken = val.refresh_token;

        this.cookieService.set('token', this.token);
        this.cookieService.set('refreshToken', this.refreshToken);
      })
    );
  }
}
