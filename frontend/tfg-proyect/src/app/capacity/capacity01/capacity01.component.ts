import { Component, OnInit } from '@angular/core';
import { ApireqService } from '../../apireq.service';

@Component({
  selector: 'app-capacity01',
  templateUrl: './capacity01.component.html',
  styleUrls: ['./capacity01.component.css']
})
export class Capacity01Component implements OnInit {

  constructor(private apireq: ApireqService) { }

  title: string = "CAPACITY";
  maxCapacity: number = 0;
  currCapacity: number = 0;
  td: any = null;

  ngOnInit(): void {
    this.apireq.tdReq("http://localhost:9000/virtual/capacity-counter/").subscribe(
      (data) => {
        this.td = data;
        this.maxCapacity = this.td.properties.count.properties.value.maximum;
      }
    )
    this.currCapacity = 0;
    this.loop();
  }

  loop(){
    let title = document.getElementById("title");
    let state = document.getElementById("state");
    let slash = document.getElementById("slash");
    let current = document.getElementById("Current");
    let limit = document.getElementById("Limit");
    setInterval(
      () => {
        
        this.apireq.tdReq(this.td.properties.count.forms[0].href).subscribe(
          (data: any) => {
            this.currCapacity = Math.round(data.value);

            //Centering text
            switch(this.currCapacity.toString().length){
              case(1):
                current.setAttribute("transform", "matrix(1 0 0 1 320 745)");
              break;
              case(2):
                current.setAttribute("transform", "matrix(1 0 0 1 260 745)");
              break;
              case(3):
                current.setAttribute("transform", "matrix(1 0 0 1 200 745)");
              break;
              case(4):
                current.setAttribute("transform", "matrix(1 0 0 1 120 745)");
              break;
            }

            switch(this.maxCapacity.toString().length){
              case(1):
                limit.setAttribute("transform", "matrix(1 0 0 1 780 745)");
              break;
              case(2):
                limit.setAttribute("transform", "matrix(1 0 0 1 730 745)");
              break;
              case(3):
                limit.setAttribute("transform", "matrix(1 0 0 1 670 745)");
              break;
              case(4):
                limit.setAttribute("transform", "matrix(1 0 0 1 630 745)");
              break;
            }

            //Animation
            if(this.currCapacity == this.maxCapacity){
              title.style.setProperty("fill", "red");
              current.style.setProperty("fill", "red");
              slash.style.setProperty("fill", "red");
              limit.style.setProperty("fill", "red");
              state.style.setProperty("fill", "red");
            }
          }
        )
      }, 1000)
  }
}
