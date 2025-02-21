import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private http = inject(HttpClient)
  private baseUrl = 'https://icherniakov.ru/yt-course' 
  
  constructor() { }

  getTestAcc() {
    this.http.get(`${this.baseUrl}/account/test_accounts`);
  }
}
