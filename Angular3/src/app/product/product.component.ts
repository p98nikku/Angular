import { Component, OnInit } from '@angular/core';
import {IProduct} from './IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: IProduct[]=[];
  constructor() { }

  ngOnInit(): void {
    this.products=this.getProducts();
    //Console.log(this.products);
  }

  getProducts():IProduct[]{
    return[
      {
        Id:1,
        Title:"Pencil",
        Price:12,
        ExpiryDate:"10-02-2020",
        inStock:true,
        Quantity:20
      },
      {
        Id:2,
        Title:"Pen",
        Price:12,
        ExpiryDate:"10-03-2020",
        inStock:false,
        Quantity:200
      },
      {
        Id:3,
        Title:"Sharpner",
        Price:12,
        ExpiryDate:"10-04-2020",
        inStock:true,
        Quantity:300
      },
      {
        Id:4,
        Title:"Eraser",
        Price:5,
        ExpiryDate:"10-05-2020",
        inStock:false,
        Quantity:10
      }
    ]
  }

}
