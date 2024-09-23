import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeCardComponent } from '../../component/recipe-card/recipe-card.component';
import { HttpClient } from '@angular/common/http';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';

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
  quantity: number;
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
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RecipeCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  currentView: string = 'recipes';
  searchTerm: string = '';
  searchResults: IngredientDto[] = [];
  fridgeContents: IngredientDto[] = JSON.parse(localStorage.getItem('fridge') || '[]');

  private searchTerms = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchRecipes();
    this.setupSearchDebounce();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  fetchRecipes() {
    this.http.get<{ content: Recipe[] }>('http://localhost:8080/v1/recipes').subscribe({
      next: (data: { content: Recipe[] }) => {
        this.recipes = data.content;
      },
      error: (error: Error) => {
        console.error('Error fetching recipes:', error);
        this.recipes = [];
      }
    });
  }

  onViewChange() {
    if (this.currentView === 'recipes') {
      this.fetchRecipes();
    } else {
      this.searchIngredients();
    }
  }

  setupSearchDebounce() {
    this.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.searchIngredients();
    });
  }

  onSearchInput() {
    this.searchTerms.next(this.searchTerm);
  }

  searchIngredients() {
    if (this.searchTerm.trim() !== '') {
      this.http.get<{content: IngredientDto[]}>(`http://localhost:8080/v1/ingredients/${this.searchTerm}/ingredients`).subscribe({
        next: (data: {content: IngredientDto[]}) => {
          this.searchResults = data.content;
        },
        error: (error: Error) => {
          console.error('Error searching ingredients:', error);
          this.searchResults = [];
        }
      });
    } else {
      this.searchResults = [];
    }
  }

  addToFridge(ingredientDto: IngredientDto) {
    if (!this.fridgeContents.some(item => item.id === ingredientDto.id)) {
      this.fridgeContents.push(ingredientDto);
      this.updateFridgeContents();
      this.searchResults = this.searchResults.filter(item => item.id !== ingredientDto.id);
    }
  }

  removeFromFridge(ingredientDto: IngredientDto) {
    this.fridgeContents = this.fridgeContents.filter(item => item.id !== ingredientDto.id);
    this.updateFridgeContents();
    this.searchIngredients();
  }

  updateFridgeContents() {
    localStorage.setItem('fridge', JSON.stringify(this.fridgeContents));
  }
}
