import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeDto } from '../models/recipe';
import { IngredientDto } from '../models/ingredient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  fetchRecipes(): Observable<{ content: RecipeDto[] }> {
    return this.http.get<{ content: RecipeDto[] }>('http://localhost:8080/v1/recipes');
  }

  searchIngredients(searchTerm: string): Observable<{ content: IngredientDto[] }> {
    return this.http.get<{ content: IngredientDto[] }>(`http://localhost:8080/v1/ingredients/${searchTerm}/ingredients`);
  }

  updateFridgeContents(fridgeContents: IngredientDto[]): void {
    localStorage.setItem('fridge', JSON.stringify(fridgeContents));
  }
}