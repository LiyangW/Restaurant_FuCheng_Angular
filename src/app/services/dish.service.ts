import { Injectable } from '@angular/core';
import {Dish } from '../shared/dish';
import {DISHES} from '../shared/dishes';
import {of,Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {


  constructor() { }
  getDish(id:number):Observable<Dish>{
    return of(DISHES.filter((dish)=>(dish.id ===id))[0]).pipe(delay(1000));
  }
  
  getFeaturedDish():Observable<Dish>{
    return of(DISHES.filter(dish=>dish.featured)[0]).pipe(delay(1000));  }
  getDishes(): Observable<Dish[]>{
  	return of(DISHES).pipe(delay(1000));}
  	getDishIds(): Observable<number[]>{
  		return of(DISHES.map(dish=>dish.id));
  	}
  
}
