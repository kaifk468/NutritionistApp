import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Food } from 'src/app/model/Food';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  
  constructor(private client:HttpClient) { }

  getFoodList():Observable<Food[]>{
    const url="http://localhost:8585/favourites";
    const observable:Observable<Food[]>=this.client.get<Food[]>(url);
    return observable;
  }

  removeItemFromFavourite(food:Food):Observable<Food>{
    const userId=food.userId;
    const fdcId=food.fdcId;
    const url="http://localhost:8585/favourites/delete/"+userId+"/"+fdcId;
    const observable:Observable<Food>=this.client.delete<Food>(url);
    return observable;

  }

}
