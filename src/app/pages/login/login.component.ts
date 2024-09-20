import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../utils/services/auth.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class LoginComponent {
  isLoginMode = true;
  username: string = '';
  password: string = '';
  email: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.isLoginMode) {
      this.login();
    } else {
      this.register();
    }
  }

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(['/profile']);
      },
      error: (error) => {
        this.errorMessage = 'Invalid username or password';
        console.error('Login error', error);
      }
    });
  }

  register() {
    this.authService.register(this.username, this.email, this.password).subscribe({
      next: (response: { token: string }) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      },
      error: (error: Error) => {
        this.errorMessage = 'Registration failed. Please try again.';
        console.error('Register error', error);
      }
    });
  }
}
