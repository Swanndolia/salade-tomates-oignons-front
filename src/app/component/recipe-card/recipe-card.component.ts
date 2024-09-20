import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-card[recipe]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  @Input() recipe!: {
    name: string;
    description: string;
    imageUrl: string;
    cookTime: number;
    servings: number;
  };
}
