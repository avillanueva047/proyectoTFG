import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-louver02',
  templateUrl: './louver02.component.html',
  styleUrls: ['./louver02.component.css']
})
export class Louver02Component implements OnInit {

  percentage : number = 0;

  constructor() { }

  ngOnInit(): void {
    this.fill();
  }

  fill(){
    let progress_celsius = document.getElementById("st0_fill");
    setInterval(
      () => {
        //Values
        this.percentage = Math.round((Math.random() * 100));

        //Animation
        var initialStroke_Celsius = Math.round((this.percentage) * 34);
        var lastStroke_Celsius = 3400 - initialStroke_Celsius;

        progress_celsius.style.setProperty('--initialStroke', `${initialStroke_Celsius} ${lastStroke_Celsius}`);
      }, 1500);
  }

}
