import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature01',
  templateUrl: './temperature01.component.html',
  styleUrls: ['./temperature01.component.css']
})
export class Temperature01Component implements OnInit {

  value = 0;
  type: String = 'C';

  constructor() { }

  ngOnInit(): void {
    this.loop();
  }

  loop(){
    setInterval(
      () => {
        this.value = Math.round(Math.random() * 100);
        console.log(this.value);
        document.getElementById("stop3").setAttribute("offset", (this.value)+"%");
        document.getElementById("stop4").setAttribute("offset", (this.value)+"%");
    }, 2000)
  }
  
}
