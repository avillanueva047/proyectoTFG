import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-louver01',
  templateUrl: './louver01.component.html',
  styleUrls: ['./louver01.component.css']
})
export class Louver01Component implements OnInit {

  aperture = 0;

  constructor() { }

  ngOnInit(): void {
    this.loop();
  }

  loop(){
    setInterval(
      () => {
        this.aperture = Math.round(Math.random() * 100);
        console.log(this.aperture);
        document.getElementById("stop1").setAttribute("offset", (this.aperture)+"%");
        document.getElementById("stop2").setAttribute("offset", (this.aperture)+"%");
      }, 2000
    )
  }

}
