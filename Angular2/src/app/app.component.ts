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
  showdbDemo():void{
    this.ShowDataBindingDemo=true;
    this.ShowDirectiveDemo=false;
  }
  showDirectiveDemo():void{
    this.ShowDataBindingDemo=false;
    this.ShowDirectiveDemo=true;
  }
}
