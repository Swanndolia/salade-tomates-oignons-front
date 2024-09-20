import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../utils/services/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isLoggedInSubject.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  logout() {
    this.authService.logout();
  }
}
