import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title="Choose Tshirt";

  //title = 'my-app';
  h=300;
  w=300;
  imgSource='../assets/front.jpg';

  ChangeTshirtMouseEnter():void
  {
    this.imgSource='../assets/back.jpg';
  }
  ChangeTshirtMouseExit():void
  {
    this.imgSource='../assets/front.jpg';
  }
  setWidth():void{
    this.h=100;
    this.w=100;
  }
}
