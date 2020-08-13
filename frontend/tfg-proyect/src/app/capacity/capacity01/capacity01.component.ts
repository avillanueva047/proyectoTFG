import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capacity01',
  templateUrl: './capacity01.component.html',
  styleUrls: ['./capacity01.component.css']
})
export class Capacity01Component implements OnInit {

  constructor() { }

  title: string = "CAPACITY";
  maxCapacity: number;
  currCapacity: number;

  ngOnInit(): void {
    this.maxCapacity = 9999;
    this.currCapacity = 0;
    this.loop();
  }

  loop(){
    let state = document.getElementById("state");
    let slash = document.getElementById("slash");
    let current = document.getElementById("Current");
    let limit = document.getElementById("Limit");
    setInterval(
      () => {
        if(this.currCapacity == this.maxCapacity){
          current.style.setProperty("fill", "red");
          slash.style.setProperty("fill", "red");
          limit.style.setProperty("fill", "red");
          state.style.setProperty("fill", "red");
        }
        if(this.currCapacity < this.maxCapacity){
          this.currCapacity++;
        }
      }
    ), 200
  }
}
