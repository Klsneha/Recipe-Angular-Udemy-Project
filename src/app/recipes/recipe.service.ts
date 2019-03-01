import {Recipe} from '../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServices } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{



    private recipes: Recipe[]=[
        new Recipe(
            'A Test Recipe', 
            'This is simply a test Recipe',
            'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
        [
            new Ingredient('aloo',1)
        ]),
        new Recipe(
            'A Test Recipe1',
             'This is simply a test Recipe1',
             'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
            [
            new Ingredient('Spinach',2),
            new Ingredient('paneer',10)
            ])
        ];
 
    constructor(private slService:ShoppingListServices){}

    getRecipes(){
        return this.recipes.slice();  
    }

    getRecipe(index:number){
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredients:Ingredient[]){
        console.log('at recipe service'+ingredients.values);
        this.slService.addIngredients(ingredients);
    }
}

