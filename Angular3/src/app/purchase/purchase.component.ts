import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product/IProduct';
import { IPurchaseItem } from './IPurchaseItem';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  Items: IPurchaseItem[]=[];
  constructor() { }

  ngOnInit(): void {
   this.Items=this.getPurchase();
  }
  
  getPurchase():IPurchaseItem[]
  {
    return[{
        Pid:1,
        Ptitle:"Pencil",
        Pvendorname:"HARRY",
        Pdate:"10-02-2020",
        Items:[
            {
              Id:1,
              Title:"Apsara Pencil",
              Price:12,
              ExpiryDate:"10-02-2020",
              inStock:true,
              Quantity:20
            },
            {
              Id:2,
              Title:"Classmate Pencil",
              Price:12,
              ExpiryDate:"10-03-2020",
              inStock:false,
              Quantity:200
            }]
          },
          {
            Pid:2,
            Ptitle:"Sharpner",
            Pvendorname:"Sameer",
            Pdate:"10-02-2020",
            Items:[
                {
                  Id:1,
                  Title:"Natraj Sharpner",
                  Price:12,
                  ExpiryDate:"10-02-2020",
                  inStock:true,
                  Quantity:20
                },
                {
                  Id:2,
                  Title:"Classmate Sharpner",
                  Price:12,
                  ExpiryDate:"10-03-2020",
                  inStock:false,
                  Quantity:200
                }]
              },
              {
                Pid:3,
                Ptitle:"Pen",
                Pvendorname:"HEMANT",
                Pdate:"10-02-2020",
                Items:[
                    {
                      Id:1,
                      Title:"Gylcer Pen",
                      Price:12,
                      ExpiryDate:"10-02-2020",
                      inStock:true,
                      Quantity:20
                    },
                    {
                      Id:2,
                      Title:"Reynolds Pen",
                      Price:12,
                      ExpiryDate:"10-03-2020",
                      inStock:false,
                      Quantity:200
                    }]
                  },
                  {
                    Pid:4,
                    Ptitle:"Notebooks",
                    Pvendorname:"Duke",
                    Pdate:"10-02-2020",
                    Items:[
                        {
                          Id:1,
                          Title:"Classmate Notebook",
                          Price:120,
                          ExpiryDate:"10-02-2020",
                          inStock:true,
                          Quantity:20
                        },
                        {
                          Id:2,
                          Title:"Doodle notebook",
                          Price:110,
                          ExpiryDate:"10-03-2020",
                          inStock:false,
                          Quantity:200
                        }]
                      }
                      
        ];
          
      }
    }
