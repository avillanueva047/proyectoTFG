import { Component, OnInit } from '@angular/core';
import { ApireqService } from 'src/app/apireq.service';

@Component({
  selector: 'app-light01',
  templateUrl: './light01.component.html',
  styleUrls: ['./light01.component.css']
})
export class Light01Component implements OnInit {

  state: boolean = false;

  constructor(private apireq: ApireqService) { }

  ngOnInit(): void {
    //
    this.loop();
  }

  loop(){
    let light = document.getElementById("Light");
    let resistance =  document.getElementById("Resistance");
    setInterval(
      () => {
        this.state = !this.state;
        //Animation
        if(this.state){
          light.style.setProperty('fill', 'url(#state)');
          resistance.style.setProperty('stroke', '#faf9c2');
        }
        else{
          light.style.setProperty('fill', 'none');
          resistance.style.setProperty('stroke', '#333333');
        }
      }, 2000
    );
  }
}
