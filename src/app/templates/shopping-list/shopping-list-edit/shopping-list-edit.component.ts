import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') ingredientNameReference: ElementRef
  // @ViewChild('amountInput') ingredientAmountReference: ElementRef
  @ViewChild('form', { static: false}) ingredientsForm: NgForm
  subscription: Subscription
  editMode: boolean = false
  editedItem: number 
  item: Ingredient

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItem = index
          this.editMode = true;
          this.item = this.shoppingListService.getIngredient(index)
          this.ingredientsForm.setValue({
            name: this.item.name,
            amount: this.item.amount
          })
        }
      )
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount)

    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItem, newIngredient)
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredient(newIngredient)
    }

    this.onResetForm()
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItem)
    this.onResetForm()
  }

  onResetForm() {
    this.ingredientsForm.reset()
    this.editMode = false
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
