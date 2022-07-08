import { FoodNutrients } from "./FoodNutrients";



export class Food{
    userId:number|undefined;
    fdcId: number|undefined;
    description: string|undefined;
    brandOwner: string|undefined;
    foodNutrients:FoodNutrients[]|undefined;
}