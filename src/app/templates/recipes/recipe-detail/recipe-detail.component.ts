import { Component, HostListener, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe
  displayMenu: boolean = false

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  @HostListener('click') toggleMenu() {
    this.displayMenu = !this.displayMenu
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }
}
