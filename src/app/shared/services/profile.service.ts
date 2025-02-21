import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProfile } from '../../types/profiles';
import { Observable } from 'rxjs';
import { API_ORIGIN } from '../../environment/env';

interface IProfileService {
  getTestAcc(): Observable<IProfile[]>;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements IProfileService {
  private http = inject(HttpClient);
  private baseUrl = API_ORIGIN; // Убедитесь, что baseUrl задан в environment.ts

  getTestAcc(): Observable<IProfile[]> {
    return this.http.get<IProfile[]>(`${this.baseUrl}/account/test_accounts`);
  }
}
