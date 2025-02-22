import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProfileView, Pageble } from '../../../types/profiles';
import { map, Observable } from 'rxjs';
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
  private baseUrl = `${API_ORIGIN}/account`;
  // private me = new BehaviorSubject<IProfileView>(null);

  public getTestAcc(): Observable<IProfileView[]> {
    return this.http.get<IProfileView[]>(`${this.baseUrl}/test_accounts`);
  }

  public getSubscribersList() {
    return this.http.get<Pageble<IProfileView>>(`${this.baseUrl}/subscribers/`).pipe(
      map(res => res.items.slice(0, 3)),
    );
  }

  public getUser() {
    return this.http.get<IProfileView>(`${this.baseUrl}/me`)
  }
}
