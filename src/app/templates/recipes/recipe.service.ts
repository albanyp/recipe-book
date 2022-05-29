import { Injectable } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable({ providedIn: 'root' })

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      '1',
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
      '2',
      'Cheesecake',
      'Sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese eggs, and sugar.',
      'https://images.aws.nestle.recipes/resized/d9f9eccdd87752c78993ef0c67e345d3_Cheseecake-de-fresa_1200_600.jpg',
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

  getRecipe(id: number): Recipe {
    return this.recipes[id]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
}