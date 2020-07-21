import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature03',
  templateUrl: './temperature03.component.html',
  styleUrls: ['./temperature03.component.css']
})
export class Temperature03Component implements OnInit {

  celsius_value = 0;
  fahrenheit_value = 0;

  constructor() { }

  ngOnInit(): void {
    this.fill()
  }

  fill(){
    let progress_celsius = document.getElementById("st0_fill");
    let progress_fahrenheit = document.getElementById("st1_fill");
    setInterval(
      () => {
        //Values
        this.celsius_value = Math.round((Math.random() * 80) - 30);
        this.fahrenheit_value = Math.round((Math.random() * 180) - 30);

        //Animation
        var initialStroke_Celsius = Math.round((this.celsius_value + 30) * 27.5);
        var lastStroke_Celsius = 2200 - initialStroke_Celsius;

        var initialStroke_Fahrenheit =  Math.round((this.fahrenheit_value + 30) * 12.22);
        var lastStroke_Fahrenheit = 2200 -  initialStroke_Fahrenheit;
        progress_celsius.style.setProperty('--initialStroke', `${initialStroke_Celsius} ${lastStroke_Celsius}`);
        progress_fahrenheit.style.setProperty('--initialStroke', `${initialStroke_Fahrenheit} ${lastStroke_Fahrenheit}`);
      }, 1500);
  }
}
