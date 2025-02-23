import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { IProfileView, Pageble } from '../../../types/profiles';
import { map, Observable, tap } from 'rxjs';
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
  me = signal<IProfileView | null>(null);

  public getTestAcc(): Observable<IProfileView[]> {
    return this.http.get<IProfileView[]>(`${this.baseUrl}/test_accounts`);
  }

  public getSubscribersList() {
    return this.http.get<Pageble<IProfileView>>(`${this.baseUrl}/subscribers/`).pipe(
      map(res => res.items.slice(0, 3)),
    );
  }

  public getUser() {
    return this.http.get<IProfileView>(`${this.baseUrl}/me`).pipe(
      tap(res => this.me.set(res))
    )
  }
}
