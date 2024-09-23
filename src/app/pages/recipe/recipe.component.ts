import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipeDto } from '../../utils/models/recipe';
@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})

export class RecipeComponent implements OnInit {
  recipe: RecipeDto | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const recipeData = history.state.recipe;
    if (recipeData) {
      this.recipe = recipeData;
    } else {
      console.error('Recipe data not found in history state');
    }
  }
}
