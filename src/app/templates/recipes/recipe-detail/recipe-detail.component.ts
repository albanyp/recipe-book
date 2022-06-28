import { Component, HostListener, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe
  displayMenu: boolean = false
  id: number;

  
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }
  
  ngOnInit(): void {
    this.route.params
      .subscribe((newParams: Params) => {
        this.id = +newParams['id']
        this.recipe = this.recipeService.getRecipe(this.id)
      })

    // this.recipe = this.recipeService.getRecipe(this.route['id'])
  }

  @HostListener('click') toggleMenu() {
    this.displayMenu = !this.displayMenu
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route })
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route })
  }

  onDeleteRecipe() {
      this.recipeService.deleteRecipe(this.id)
      this.router.navigate(['/recipes'])
  }


}
