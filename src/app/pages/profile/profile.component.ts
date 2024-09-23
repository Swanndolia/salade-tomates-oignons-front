import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../utils/services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string = '';
  email: string = '';
  dietaryPreferences: string[] = [];
  defaultServings: number = 4;
  isDarkTheme: boolean = true;
  favoriteIngredients: string[] = [];
  excludedIngredients: string[] = [];
  cookingSkillLevel: string = 'beginner';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.username = localStorage.getItem('username') || '';
    this.email = localStorage.getItem('email') || 'user@example.com';
    this.dietaryPreferences = JSON.parse(localStorage.getItem('dietaryPreferences') || '[]');
    this.defaultServings = Number(localStorage.getItem('defaultServings')) || 4;
    this.isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';
    this.favoriteIngredients = JSON.parse(localStorage.getItem('favoriteIngredients') || '[]');
    this.excludedIngredients = JSON.parse(localStorage.getItem('excludedIngredients') || '[]');
    this.cookingSkillLevel = localStorage.getItem('cookingSkillLevel') || 'beginner';
  }

  updateProfile() {
    localStorage.setItem('username', this.username);
    localStorage.setItem('email', this.email);
    localStorage.setItem('dietaryPreferences', JSON.stringify(this.dietaryPreferences));
    localStorage.setItem('defaultServings', this.defaultServings.toString());
    localStorage.setItem('isDarkTheme', this.isDarkTheme.toString());
    localStorage.setItem('favoriteIngredients', JSON.stringify(this.favoriteIngredients));
    localStorage.setItem('excludedIngredients', JSON.stringify(this.excludedIngredients));
    localStorage.setItem('cookingSkillLevel', this.cookingSkillLevel);

    console.log('Profile updated', {
      username: this.username,
      email: this.email,
      dietaryPreferences: this.dietaryPreferences,
      defaultServings: this.defaultServings,
      isDarkTheme: this.isDarkTheme,
      favoriteIngredients: this.favoriteIngredients,
      excludedIngredients: this.excludedIngredients,
      cookingSkillLevel: this.cookingSkillLevel
    });
  }

  toggleDietaryPreference(preference: string) {
    const index = this.dietaryPreferences.indexOf(preference);
    if (index > -1) {
      this.dietaryPreferences.splice(index, 1);
    } else {
      this.dietaryPreferences.push(preference);
    }
    localStorage.setItem('dietaryPreferences', JSON.stringify(this.dietaryPreferences));
  }

  addFavoriteIngredient(ingredient: string) {
    if (ingredient && !this.favoriteIngredients.includes(ingredient)) {
      this.favoriteIngredients.push(ingredient);
      localStorage.setItem('favoriteIngredients', JSON.stringify(this.favoriteIngredients));
    }
  }

  removeFavoriteIngredient(ingredient: string) {
    const index = this.favoriteIngredients.indexOf(ingredient);
    if (index > -1) {
      this.favoriteIngredients.splice(index, 1);
      localStorage.setItem('favoriteIngredients', JSON.stringify(this.favoriteIngredients));
    }
  }

  addExcludedIngredient(ingredient: string) {
    if (ingredient && !this.excludedIngredients.includes(ingredient)) {
      this.excludedIngredients.push(ingredient);
      localStorage.setItem('excludedIngredients', JSON.stringify(this.excludedIngredients));
    }
  }

  removeExcludedIngredient(ingredient: string) {
    const index = this.excludedIngredients.indexOf(ingredient);
    if (index > -1) {
      this.excludedIngredients.splice(index, 1);
      localStorage.setItem('excludedIngredients', JSON.stringify(this.excludedIngredients));
    }
  }

  toggleDarkTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('isDarkTheme', this.isDarkTheme.toString());
  }
}
