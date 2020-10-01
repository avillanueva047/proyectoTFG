import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wave01',
  templateUrl: './wave01.component.html',
  styleUrls: ['./wave01.component.css']
})
export class Wave01Component implements OnInit {


  level : number = 9;
  max_reached : boolean = false;
  description: string;

  constructor() { }

  ngOnInit(): void {
    this.loop();
  }

  loop(){
    let third_color = document.getElementById("third-color");
    let fourth_color = document.getElementById("fourth-color");
    let des = document.getElementById("description");
    setInterval(
      () => {
        if(!this.max_reached){
          if(this.level < 9){
            this.level++;
          }
          if(this.level == 9){
            this.max_reached = true;
          }
        }
        else{
          if(this.level > 0){
            this.level--;
          }
          if(this.level == 0){
            this.max_reached = false;
          }
        }

        switch (this.level){
          case(1):
            this.description = "VERY LOW";
            des.setAttribute("transform", "matrix(1 0 0 1 390 1020)");
          break;
          case(2):
            this.description = "LOW";
            des.setAttribute("transform", "matrix(1 0 0 1 520 1020)");
          break;
          case(3):
            this.description = "LIGHT";
            des.setAttribute("transform", "matrix(1 0 0 1 485 1020)");
          break;
          case(4):
            this.description = "MODERATE";
            des.setAttribute("transform", "matrix(1 0 0 1 365 1020)");
          break;
          case(5):
            this.description = "MOD ROUGH";
            des.setAttribute("transform", "matrix(1 0 0 1 335 1020)");
          break;
          case(6):
            this.description = "ROUGH";
            des.setAttribute("transform", "matrix(1 0 0 1 460 1020)");
          break;
          case(7):
            this.description = "HIGH";
            des.setAttribute("transform", "matrix(1 0 0 1 500 1020)");
          break;
          case(8):
            this.description = "VERY HIGH";
            des.setAttribute("transform", "matrix(1 0 0 1 360 1020)");
          break;
          case(9):
            this.description = "CONFUSED";
            des.setAttribute("transform", "matrix(1 0 0 1 360 1020)");
          break;
          default:
            this.description = "NO WAVES";
            des.setAttribute("transform", "matrix(1 0 0 1 370 1020)");
          break;
        }
        third_color.setAttribute("offset", (100 - (this.level + 1) * 10) + "%");
        fourth_color.setAttribute("offset", (100 - (this.level + 1) * 10) + "%");
      }, 500
    )
  }

}
