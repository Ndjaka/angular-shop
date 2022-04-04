import {Component} from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  styleUrls: ['./recipes.component.css'],
  templateUrl: './recipes.component.html'
})
export class RecipesComponent {

  selectedRecipe: Recipe;

  constructor() {
  }


}
