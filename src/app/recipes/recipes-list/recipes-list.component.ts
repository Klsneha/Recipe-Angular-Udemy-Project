import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  
  recipes:Recipe[];
  constructor(private recipeService:RecipeService, private route:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }
  onNewRecipe(){
    this.route.navigate(['new'],{relativeTo:this.activeRoute});
  }
  

}
