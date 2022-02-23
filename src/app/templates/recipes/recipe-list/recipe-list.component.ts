import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pound cake',
      'While the pound cake has the richest flavor of all the cakes, it is also the denser of the two types of cakes.',
      'https://d3m7xw68ay40x8.cloudfront.net/assets/2018/11/19143832/true_pound_cake_feat.jpg'
    ),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
