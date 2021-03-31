import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:'Angular-Demo';
  ShowDataBindingDemo=true;
  ShowDirectiveDemo=false;
  showProductsTable=false;
  showdbDemo():void{
    this.ShowDataBindingDemo=true;
    this.ShowDirectiveDemo=false;
    this.showProductsTable=false;
  }
  showDirectiveDemo():void{
    this.ShowDataBindingDemo=false;
    this.ShowDirectiveDemo=true;
    this.showProductsTable=false;
  }
  showProducts():void{
    this.showProductsTable=true;
    this.ShowDataBindingDemo=false;
    this.ShowDirectiveDemo=false;
  }
}
