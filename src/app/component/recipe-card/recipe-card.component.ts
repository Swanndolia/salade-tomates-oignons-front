import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface IngredientDto {
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

interface RecipeIngredientDto {
  quantity: number;
  consumed: boolean;
  ingredientDto: IngredientDto;
}

interface Recipe {
  id: string;
  label: string;
  publicRecipe: boolean;
  instruction: string;
  duration: number;
  picture: string;
  recipeIngredientsDto: RecipeIngredientDto[];
}

@Component({
  selector: 'app-recipe-card[recipe]',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;
}
