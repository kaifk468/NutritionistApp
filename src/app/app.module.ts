
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FavouriteModule } from './modules/favourite/favourite.module';
import { FooditemsModule } from './modules/fooditems/fooditems.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FavouriteModule,
    FooditemsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
