import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProfileView } from '../../../types/profiles';
import { Observable } from 'rxjs';
import { API_ORIGIN } from '../../../environment/env';

interface IProfileService {
  getTestAcc(): Observable<IProfileView[]>;
}

/**
 * загрузка профилей пользователей
 */
@Injectable({
  providedIn: 'root'
})
export class ProfileService implements IProfileService {
  private http = inject(HttpClient);
  private baseUrl = API_ORIGIN;

  public getTestAcc(): Observable<IProfileView[]> {
    return this.http.get<IProfileView[]>(`${this.baseUrl}/account/test_accounts`);
  }
}
