import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dimmer02',
  templateUrl: './dimmer02.component.html',
  styleUrls: ['./dimmer02.component.css']
})
export class Dimmer02Component implements OnInit {

  degree : number = 0;
  state : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.loop();
  }

  loop(){
    let regulator = document.getElementById("Regulator");
    var minReached = true;
    setInterval(
      () => {
        if(!this.state){
          this.state = true;
          this.degree = 10;
        }

        if(minReached){
          if (this.degree > 260){
            minReached = false;
          }
          this.degree = this.degree + 2.6;
        }
        else{
          if (this.degree < 10){
            minReached = true;
            this.degree = 0;
            this.state = false;
          }
          this.degree = this.degree - 2.6;
        }

        regulator.style.setProperty("transform", `rotate(${this.degree}deg)`);
      }, 100
    );
  }
}
