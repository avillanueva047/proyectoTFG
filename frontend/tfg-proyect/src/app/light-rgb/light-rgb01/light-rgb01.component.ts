import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-rgb01',
  templateUrl: './light-rgb01.component.html',
  styleUrls: ['./light-rgb01.component.css']
})
export class LightRgb01Component implements OnInit {

  constructor() { }

  red : number = 0;
  green : number = 0;
  blue : number = 0;

  ngOnInit(): void {
    this.loop();
  }

  loop(){

  }

}
