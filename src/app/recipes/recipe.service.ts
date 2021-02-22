import { Injectable, EventEmitter } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'
import { Recipe } from './recipe.module'

@Injectable({
    providedIn: 'root'
})

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'Hamburger', 
            'Super burger', 
            'https://lh3.googleusercontent.com/proxy/zUn8aKT1kwlI3ZK_1GCdvUifPr0dzgO76DkdA9RY81HbbHv-QUvSEmLl7pOI10ewf47xwtFLU1vnQNAPDfP85R9OK0nsTS-5d4XjeOIJT6U8NMKwkkn5Z-uOHiWO7x-w0eq9swM',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Cheesecake', 
            'Best cheesecake ever', 
            'https://i2.wp.com/kuchenaltareposteria.com/wp-content/uploads/2017/10/cheesecake-con-brownie.png?resize=300%2C214', 
            [
                new Ingredient('Sugar', 20),
                new Ingredient('Butter', 1)
            ]),
        ]

    recipeSelected = new EventEmitter<Recipe>()

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes() {
        return this.recipes.slice()
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients)
    }
}