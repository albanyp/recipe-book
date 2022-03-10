import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe(
      'Pound cake',
      'While the pound cake has the richest flavor of all the cakes, it is also the denser of the two types of cakes.',
      'https://d3m7xw68ay40x8.cloudfront.net/assets/2018/11/19143832/true_pound_cake_feat.jpg'
    ),
    new Recipe(
      'Cheesecake',
      'Sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese eggs, and sugar.',
      'https://thumbor.thedailymeal.com/dByKB_8zfbFOFoE7ea20aGnRStg=/870x565/https://www.thedailymeal.com/sites/default/files/story/2020/cheesecake_istock-debbismirnoff_450x360_0.jpg'
    ),
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    console.log(recipe)
    this.recipeWasSelected.emit(recipe)
  }

}
