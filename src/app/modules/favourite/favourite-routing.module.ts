import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFavouriteItemComponent } from './component/list-favourite-item/list-favourite-item.component';

const routes: Routes = [
  {
    path:"favourite",
    component:ListFavouriteItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouriteRoutingModule { }
