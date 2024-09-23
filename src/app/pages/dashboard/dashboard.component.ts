import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeCardComponent } from '../../component/recipe-card/recipe-card.component';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { IngredientDto } from '../../utils/models/ingredient';
import { RecipeDto } from '../../utils/models/recipe';
import { DashboardService } from '../../utils/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, RecipeCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit, OnDestroy {
  recipes: RecipeDto[] = [];
  currentView: string = 'recipes';
  searchTerm: string = '';
  searchResults: IngredientDto[] = [];
  fridgeContents: IngredientDto[] = JSON.parse(localStorage.getItem('fridge') || '[]');

  private searchTerms = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.fetchRecipes();
    this.setupSearchDebounce();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
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
      this.dashboardService.searchIngredients(this.searchTerm).subscribe({
        next: (data: { content: IngredientDto[] }) => {
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
    this.dashboardService.updateFridgeContents(this.fridgeContents);
  }
}
