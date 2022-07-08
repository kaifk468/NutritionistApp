import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from 'src/app/model/Food';

@Injectable({
  providedIn: 'root'
})
export class FooditemsService {
  querry:string="";

  pageNo:number=0;
  constructor(private client:HttpClient) { }
  setQuerry(querry:any)
  {
    this.querry=querry;
    console.log(this.querry);
    //this.getFoodList();
  }
  setPageNo(pageNo:number)
  {
     this.pageNo=pageNo;
     console.warn(pageNo);

  }
  getFoodList():Observable<Food[]>{

    let url="https://api.nal.usda.gov/fdc/v1/foods/list?dataType=Branded&pageSize=25&pageNumber="+this.pageNo+"&api_key=iF7Sd3cffQaE8VB45pGjBUxBmpEtvzg8uM8X8tOq";
    if(this.querry!=="")
    url="https://api.nal.usda.gov/fdc/v1/foods/list?dataType=Branded&query="+this.querry+"&pageSize=25&pageNumber="+this.pageNo+"&api_key=iF7Sd3cffQaE8VB45pGjBUxBmpEtvzg8uM8X8tOq";
    const observable:Observable<Food[]>=this.client.get<Food[]>(url);
    console.warn(url);
    return observable;

  }

  addToFavourite(requestdata:Food):Observable<Food>{
    requestdata.userId=2;
    const url="http://localhost:8585/favourites/add";
    const observable:Observable<Food>=this.client.post<Food>(url, requestdata);
    return observable;

  }





}
