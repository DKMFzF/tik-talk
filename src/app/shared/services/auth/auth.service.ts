import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_ORIGIN } from '../../../environment/env';
import { IAuthPost, IAuthResponse, IToken } from '../../../types/auth';
import { Observable, tap } from 'rxjs';
import { TApi, TStroke } from '../../../types/evn';

export interface IAuthService {
  login(payload: IAuthPost): Observable<any>;
  isAuth(): boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {
  private http: HttpClient = inject(HttpClient);
  private baseUrl: TApi<TStroke> = `${API_ORIGIN}/auth`;
  public token: IToken = {
    access_token: null,
    refresh_token: null
  };

  public isAuth(): boolean {
    return !!this.token;
  }

  public login(payload: IAuthPost): Observable<IAuthResponse> {
    const fd: FormData = this.createFormData(payload);
    return this.http.post<IAuthResponse>(`${this.baseUrl}/token`, fd).pipe(
      tap(val => {
        this.token.access_token = val.access_token;
        this.token.refresh_token = val.refresh_token;
      })
    );
  }

  private createFormData(obj: Record<string, any>): FormData {
    const fd: FormData = new FormData();
    Object.entries(obj).forEach(([key, value]) => fd.append(key, value));
    return fd;
  }
}
