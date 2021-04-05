import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errorhandler',
  templateUrl: './errorhandler.component.html',
  styleUrls: ['./errorhandler.component.css']
})
export class ErrorhandlerComponent implements OnInit {

  constructor() { }
  products=undefined;

  ngOnInit(): void {
  }
  getError(){
    this.products.sort();
  }
}
