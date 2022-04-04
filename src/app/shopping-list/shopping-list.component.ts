import {Component} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  styleUrls: ['./shopping-list.component.css'],
  templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  addIngredients(ingredients: Ingredient) {
    this.ingredients.push(ingredients);
  }

}