import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tshirtdatabinding',
  templateUrl: './tshirtdatabinding.component.html',
  styleUrls: ['./tshirtdatabinding.component.css']
})
export class TshirtdatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  errorVar:any=undefined;
  GenerateError():void{
    this.errorVar.sort();
  }
  title="Choose Tshirt";
  //title = 'my-app';
  h=300;
  w=1000;
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
