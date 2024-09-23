import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FridgeComponent } from '../../component/fridge/fridge.component';
import { RecipesComponent } from '../../component/recipes/recipes.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FridgeComponent, RecipesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  currentView: string = 'recipes';

  ngOnInit() {}

  onViewChange(view: string) {
    this.currentView = view;
  }
}
