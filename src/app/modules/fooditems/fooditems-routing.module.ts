import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFooditemsComponent } from './component/list-fooditems/list-fooditems.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full"

  },
  {
    path:"home",
    component:ListFooditemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooditemsRoutingModule { }
