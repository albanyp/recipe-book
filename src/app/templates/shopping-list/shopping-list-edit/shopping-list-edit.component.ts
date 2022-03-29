import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientNameReference: ElementRef
  @ViewChild('amountInput') ingredientAmountReference: ElementRef
  @Output() onAdded = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    const ingredientName = this.ingredientNameReference.nativeElement.value
    const ingredientAmount = this.ingredientAmountReference.nativeElement.value

    const newIngredient = new Ingredient(ingredientName, ingredientAmount)
    this.onAdded.emit(newIngredient)
  }
}
