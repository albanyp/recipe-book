import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListComponent } from './templates/shopping-list/shopping-list.component';
import { RecipesComponent } from './templates/recipes/recipes.component';
import { ShoppingListEditComponent } from './templates/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { IngredientComponent } from './templates/shopping-list/ingredient/ingredient.component';
import { RecipeDetailComponent } from './templates/recipes/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './templates/recipes/recipe/recipe.component';
import { RecipeListComponent } from './templates/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './templates/recipes/recipe-item/recipe-item.component';
import { ButtonComponent } from './components/button/button.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './templates/recipes/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingListService } from './templates/shopping-list/shopping-list.service';
import { RecipeService } from './templates/recipes/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipesComponent,
    ShoppingListEditComponent,
    IngredientComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent,
    RecipeListComponent,
    ButtonComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
