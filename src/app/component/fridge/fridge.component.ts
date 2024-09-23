import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs';
import { IngredientDto } from '../../utils/models/ingredient';
import { DashboardService } from '../../utils/services/dashboard.service';

@Component({
  selector: 'app-fridge',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fridge.component.html',
  styleUrl: './fridge.component.css'
})
export class FridgeComponent implements OnInit, OnDestroy {
  fridgeContents: IngredientDto[] = JSON.parse(localStorage.getItem('fridge') || '[]');
  searchTerm: string = '';
  searchResults: IngredientDto[] = [];

  private searchTerms = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.setupSearchDebounce();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
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