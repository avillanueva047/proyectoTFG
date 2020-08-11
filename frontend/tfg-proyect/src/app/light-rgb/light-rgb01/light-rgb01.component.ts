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
  state = true;

  ngOnInit(): void {
    this.loop();
  }

  loop(){
    let led = document.getElementById("led");
    let rgb = document.getElementById("rgb");
    let st3 = document.getElementById("st3");

    setInterval(
      () => {
        if(this.state){
          this.red = Math.round(Math.random() * 255);
          this.green = Math.round(Math.random() * 255);
          this.blue = Math.round(Math.random() * 255);
          
          rgb.setAttribute("stop-color", `rgb(${this.red}, ${this.green}, ${this.blue})`);
          
          st3.style.setProperty("fill", "url(#light)");
          led.style.setProperty("fill", rgb.getAttribute("stop-color"));
          this.state = !this.state
        }
        else{
          st3.style.setProperty("fill", "none");
          led.style.setProperty("fill", "#E6E6E6");
          this.state = !this.state;
        }
      }, 2000
    )
  }

}
