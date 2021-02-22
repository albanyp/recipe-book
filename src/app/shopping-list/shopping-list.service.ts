import { Injectable, EventEmitter } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'

@Injectable({
    providedIn: 'root'
})

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>()
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ]

    getIngredients() {
        return this.ingredients.slice()
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    addIngredients(listOfIngredients: Ingredient[]) {
        // for(let ingredient of listOfIngredients) {
        //     this.addIngredient(ingredient)
        // }
        // Emits too many unnecesary events

        this.ingredients.push(...listOfIngredients)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
}