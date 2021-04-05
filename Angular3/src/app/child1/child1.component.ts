import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  price:number;
  c:string;
  constructor(private logservice:LogService) { }
  ngOnInit(): void {

  }
  setPrice()
  {
    this.logservice.setPrice(this.price);
  }

}
