import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dimmer01',
  templateUrl: './dimmer01.component.html',
  styleUrls: ['./dimmer01.component.css']
})
export class Dimmer01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loop();
  }

  loop(){
    let light_yellow = document.getElementById("stop1");
    let light_white = document.getElementById("stop2");
    var offset_yellow = Number(light_yellow.getAttribute("offset")) + 0.1;
    var offset_white = Number(light_white.getAttribute("offset")) + 0.1;
    var minReached = true;
    setInterval(
      () => {
        if(minReached){
          if(offset_white > 1){
            minReached = false;
          }else{
            offset_yellow = offset_yellow + 0.0065;
            offset_white = offset_white + 0.009;
            light_yellow.setAttribute("offset", offset_yellow.toString());
            light_white.setAttribute("offset", offset_white.toString());
          }
        } else{
          if(offset_white < 0.1){
            minReached = true;
          }else{
            offset_yellow = offset_yellow - 0.0065;
            offset_white = offset_white - 0.009;
            light_yellow.setAttribute("offset", offset_yellow.toString());
            light_white.setAttribute("offset", offset_white.toString());
          }
        }
      }, 50
    )
  }
}
