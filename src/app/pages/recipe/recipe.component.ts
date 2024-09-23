import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit {
  recipe: {
    id: string;
    label: string;
    publicRecipe: boolean;
    instruction: string;
    duration: number;
    picture: string;
    recipeIngredientsDto: {
      quantity: number;
      consumed: boolean;
      ingredientDto: {
        id: string;
        label: string;
        vegetarian: boolean;
        vegan: boolean;
        glutenFree: boolean;
        lactoseFree: boolean;
        calorie: number;
        animalId: string;
        animalLabel: string;
        unitId: string;
        unitLabel: string;
      }
    }[];
  } | undefined;

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
