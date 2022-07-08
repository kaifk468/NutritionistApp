import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from 'src/app/model/Food';
import { RemoveFavorited } from 'src/app/model/RemoveFavorited';

import { FavouriteService } from '../../service/favourite.service';

@Component({
  selector: 'app-list-favourite-item',
  templateUrl: './list-favourite-item.component.html',
  styleUrls: ['./list-favourite-item.component.css'],
})
export class ListFavouriteItemComponent {
  expandToggleFlag = false;
  // foodArray:Food[]=new FoodUtill().convertToFoodItem(result);
  foodArray: Food[] | undefined;
  errorMsg: String | undefined;
  deletedFoodItm: Food | undefined;

  constructor(private service: FavouriteService) {
    this.fetchAllFoodItems();
    console.log(this.foodArray);
  }

  expandToggle() {
    this.expandToggleFlag = !this.expandToggleFlag;
    console.log(this.expandToggleFlag);
    return this.expandToggleFlag;
  }
  fetchAllFoodItems() {
    const observer = {
      next: (result: Food[]) => {
        this.foodArray = result;
        console.log(this.foodArray);
      },
      error: (error: Error) => {
        this.errorMsg = error.message;
      },
    };
    const observable: Observable<Food[]> = this.service.getFoodList();
    observable.subscribe(observer);
  }

  removeFoodItem(foodItem: Food) {
    alert('Track is removed from favourite list');
    console.log(foodItem);
    
    const observer = {
      next: (result: Food) => {
        this.deletedFoodItm = result;
        this.fetchAllFoodItems();
      },
      error: (error: Error) => {
        this.errorMsg = error.message;
      },
    };
    const observable: Observable<Food> =
      this.service.removeItemFromFavourite(foodItem);
    observable.subscribe(observer);
  }
}
