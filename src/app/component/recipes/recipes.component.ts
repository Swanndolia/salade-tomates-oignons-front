import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { RecipeDto } from '../../utils/models/recipe';
import { DashboardService } from '../../utils/services/dashboard.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule, RecipeCardComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {
  recipes: RecipeDto[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.fetchRecipes();
  }

  fetchRecipes() {
    this.dashboardService.fetchRecipes().subscribe({
      next: (data: { content: RecipeDto[] }) => {
        this.recipes = data.content;
      },
      error: (error: Error) => {
        console.error('Error fetching recipes:', error);
        this.recipes = [];
      }
    });
  }
}