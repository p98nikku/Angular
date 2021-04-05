import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from './product/IProduct';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  setData:IProduct={
    Id:1,
    Title:"Pencil",
    Price:12,
    ExpiryDate:"10-02-2020",
    inStock:true,
    Quantity:20
};
pinr$:BehaviorSubject<IProduct>
  constructor() {
    this.pinr$=new BehaviorSubject(this.setData)

   }
   setPrice(price:number){
     this.setData.Price=price;
     this.pinr$.next(this.setData);
   }

}
