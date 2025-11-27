import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import { environment } from '../../environments/environment';
// import { AuthResponse } from '../shared/models/auth-response.model';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../auth-response.model';


@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = environment.apiBase;
  private tokenKey = 'smartlearn_token';


  constructor(private http: HttpClient) { }


  login(payload: { username: string; password: string }): Observable<string | null> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/users/login/`, payload)
      .pipe(
        map(res => {
          // try common locations for token
          // const token = (res && res.token) || null;
          debugger;
          const token = res?.token || res?.data?.access || null;
          return token as string | null;
        }),
        tap(token => {
          if (token) {
            localStorage.setItem(this.tokenKey, token);
          }
        })
      );
  }


  logout() {
    localStorage.removeItem(this.tokenKey);
  }


  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }


  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}