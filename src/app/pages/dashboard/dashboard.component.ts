import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardComponent } from '../../component/recipe-card/recipe-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RecipeCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  recipes: any[] = [];

  ngOnInit() {
    // TODO: Fetch recipes from a service
    this.recipes = [
      {
        name: 'Spaghetti Carbonara',
        description: 'A classic Italian pasta dish with eggs, cheese, and pancetta.',
        imageUrl: 'https://www.giallozafferano.com/images/228-22832/spaghetti-carbonara_1200x800.jpg',
        cookTime: 30,
        servings: 4
      },
      {
        name: 'Chicken Stir Fry',
        description: 'A quick and easy Asian-inspired dish with vegetables and chicken.',
        imageUrl: 'https://www.recipetineats.com/wp-content/uploads/2020/01/Chicken-Stir-Fry_9-650x910.jpg',
        cookTime: 20,
        servings: 3
      },
      {
        name: 'Margherita Pizza',
        description: 'A simple and delicious Italian pizza with tomatoes, mozzarella, and basil.',
        imageUrl: 'https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg',
        cookTime: 25,
        servings: 2
      },
      {
        name: 'Beef Tacos',
        description: 'Flavorful Mexican-style tacos with seasoned ground beef and toppings.',
        imageUrl: 'https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Ground-Beef-Tacos-550.jpg',
        cookTime: 35,
        servings: 4
      },
      {
        name: 'Vegetable Curry',
        description: 'A hearty and spicy Indian curry packed with mixed vegetables.',
        imageUrl: 'https://www.acouplecooks.com/wp-content/uploads/2020/02/Vegetable-Curry-001.jpg',
        cookTime: 40,
        servings: 4
      },
      {
        name: 'Grilled Salmon',
        description: 'Healthy and delicious grilled salmon with lemon and herbs.',
        imageUrl: 'https://www.dinneratthezoo.com/wp-content/uploads/2019/05/grilled-salmon-3.jpg',
        cookTime: 20,
        servings: 2
      },
      {
        name: 'Caesar Salad',
        description: 'A classic salad with romaine lettuce, croutons, and Caesar dressing.',
        imageUrl: 'https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg',
        cookTime: 15,
        servings: 2
      },
      {
        name: 'Mushroom Risotto',
        description: 'Creamy Italian rice dish with mushrooms and Parmesan cheese.',
        imageUrl: 'https://www.seriouseats.com/thmb/O1C0cUWS5hGvzJUuEXeqcqNqHHM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__12__20141218-mushroom-risotto-daniel-gritzer-3-1500x1125-2a6f1d9915c54e5d8d5d3fa6ae3a6f4c.jpg',
        cookTime: 35,
        servings: 4
      },
      {
        name: 'Beef Bourguignon',
        description: 'A rich French stew with beef, red wine, and vegetables.',
        imageUrl: 'https://www.recipetineats.com/wp-content/uploads/2018/05/Beef-Bourguignon_3-650x910.jpg',
        cookTime: 180,
        servings: 6
      },
      {
        name: 'Chocolate Lava Cake',
        description: 'Decadent dessert with a gooey chocolate center.',
        imageUrl: 'https://preppykitchen.com/wp-content/uploads/2022/03/Lava-Cake-Recipe.jpg',
        cookTime: 20,
        servings: 2
      }
    ];
  }
}
