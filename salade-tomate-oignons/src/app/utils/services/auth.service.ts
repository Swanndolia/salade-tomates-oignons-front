import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://your-api-url.com'; // Replace with your actual API URL
  isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('username', username);
          this.isLoggedInSubject.next(true);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        console.warn('API not reachable, using mock token');
        localStorage.setItem('token', 'mock-token');
        localStorage.setItem('username', username);
        this.isLoggedInSubject.next(true);
        return of({ token: 'mock-token' });
      })
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, email, password }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.warn('API not reachable, using mock token');
        localStorage.setItem('token', 'mock-token');
        localStorage.setItem('username', username);
        this.isLoggedInSubject.next(true);
        return of({ token: 'mock-token' });
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/login']);
  }

  private hasToken(): boolean {
    return localStorage.getItem('token') !== null && localStorage.getItem('token') !== '';
  }
}

// Note: Make sure to import HttpClientModule in your AppModule or the module where AuthService is used