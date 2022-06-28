import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private subscription: Subscription
  ingredients: Ingredient[] = []

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients()
    this.subscription = this.shoppingListService.ingredientChanged
      .subscribe(
        (newIngredients: Ingredient[]) => {
          this.ingredients = newIngredients;
        }
      )
  }

  onEditItem(event: MouseEvent, id: number) {
    event.preventDefault()
    this.shoppingListService.startedEditing.next(id) 
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
