import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Injectable({ providedIn: 'root' })

export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient[]>()

  private ingredients:Ingredient[] = [
    new Ingredient('Lettuce', 10),
    new Ingredient('Bananas', 12)
  ]

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientAdded.emit(this.ingredients.slice())
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientAdded.emit(this.ingredients.slice())
  }
}