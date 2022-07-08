import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FooditemsService } from 'src/app/modules/fooditems/service/fooditems.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute,private foodservice:FooditemsService) { }

  ngOnInit(): void {
  }

  getQuerry(querry:any)
  {
    this.foodservice.setQuerry(querry);
    this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.router.onSameUrlNavigation='reload';
    this.router.navigate([''],{
      relativeTo:this.route
    })
  }
 

}
