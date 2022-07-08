import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Food } from 'src/app/model/Food';
import { FooditemsService } from '../../service/fooditems.service';

@Component({
  selector: 'app-list-fooditems',
  templateUrl: './list-fooditems.component.html',
  styleUrls: ['./list-fooditems.component.css']
})
export class ListFooditemsComponent {

  expandToggleFlag = false;
  expdOrColl:string="Expand";
  expendId:any|undefined;
  //PageNo:number=0;
  // foodArray:Food[]=new FoodUtill().convertToFoodItem(result);
  foodArray: Food[] | undefined;
  errorMsg: String | undefined;
  addedFood:Food|undefined;
  

  constructor(private router: Router,private route:ActivatedRoute,private service: FooditemsService) {
    this.fetchAllFoodItems();
    console.log(this.foodArray);
  }

  expandToggle(fdcid:any) {
    this.expandToggleFlag = !this.expandToggleFlag;
    this.expendId=fdcid;
    if(this.expandToggleFlag!=false)
     this.expdOrColl="Collaps"
     else
     this.expdOrColl="Expend"
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

  addToFavourite(foodItem: Food) {
    alert('Food is add from favourite list');
    console.log(foodItem);
    
    const observer = {
      next: (result: Food) => {
        this.addedFood = result;
       
      },
      error: (error: Error) => {
        this.errorMsg = error.message;
      },
    };
    const observable: Observable<Food> =
      this.service.addToFavourite(foodItem);
    observable.subscribe(observer);
  }
  getNext()
  {
    if(this.service.pageNo<8)
     this.service.pageNo++;
     this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.router.onSameUrlNavigation='reload';
    this.router.navigate([''],{
      relativeTo:this.route
    })
     console.warn(this.service.pageNo);
  }
  getPrev()
  {
     if(this.service.pageNo>0)
     this.service.pageNo--;
     this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.router.onSameUrlNavigation='reload';
    this.router.navigate([''],{
      relativeTo:this.route
    })
     //console.warn(this.service.pageNo);
  }

}
