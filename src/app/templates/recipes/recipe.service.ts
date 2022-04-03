import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable({ providedIn: 'root' })

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'Pound cake',
      'While the pound cake has the richest flavor of all the cakes, it is also the denser of the two types of cakes.',
      'https://d3m7xw68ay40x8.cloudfront.net/assets/2018/11/19143832/true_pound_cake_feat.jpg',
      [
        new Ingredient('Flour', 1),
        new Ingredient('Sugar', 1),
        new Ingredient('Butter', 0.5)
      ]
    ),
    new Recipe(
      'Cheesecake',
      'Sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese eggs, and sugar.',
      'https://thumbor.thedailymeal.com/dByKB_8zfbFOFoE7ea20aGnRStg=/870x565/https://www.thedailymeal.com/sites/default/files/story/2020/cheesecake_istock-debbismirnoff_450x360_0.jpg',
      [
        new Ingredient('Cream cheese', 1),
        new Ingredient('Sugar', 1),
        new Ingredient('Cookies', 2)
      ]    
    ),
  ]

  constructor(private shoppingListService: ShoppingListService) {} 

  getRecipes() {
    return this.recipes.slice()
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
}