import { Component, OnInit } from '@angular/core';
import { ApireqService } from 'src/app/apireq.service';

@Component({
  selector: 'app-light02',
  templateUrl: './light02.component.html',
  styleUrls: ['./light02.component.css']
})
export class Light02Component implements OnInit {

  constructor(private apireq: ApireqService) { }

  state: boolean = true;

  ngOnInit(): void {
    this.loop();
  }

  loop(){
    let interruptor = document.getElementById("switch");
    let led_off = document.getElementById("led_off");
    let led_on = document.getElementById("led_on");
    let light_off = document.getElementById("light_off");
    let light_on = document.getElementById("light_on");
    setInterval(
      () => {
        this.state = !this.state;

        //Animation
        if(this.state){
          interruptor.style.setProperty('transform', 'rotate(180deg)');
          led_off.style.setProperty('stroke', '#FF0000');
          light_off.style.setProperty('fill', 'url(#off)');
          led_on.style.setProperty('fill', '#797979');
          light_on.style.setProperty('fill', 'none');
        }
        else{
          interruptor.style.setProperty('transform', 'none');
          led_off.style.setProperty('stroke', '#797979');
          light_off.style.setProperty('fill', 'none');
          led_on.style.setProperty('fill', '#8AE28C');
          light_on.style.setProperty('fill', 'url(#on)');
        }
      }, 2000
    )
  }
}
