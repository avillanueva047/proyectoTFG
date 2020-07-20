import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature02',
  templateUrl: './temperature02.component.html',
  styleUrls: ['./temperature02.component.css']
})
export class Temperature02Component implements OnInit {

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
        if(this.value < 10){
          document.getElementById("stop1").setAttribute("offset", (0)+"%");
          document.getElementById("stop2").setAttribute("offset", (0)+"%");
        }else{
          document.getElementById("stop1").setAttribute("offset", (this.value)+"%");
          document.getElementById("stop2").setAttribute("offset", (this.value)+"%");
        }
        
        
        if(this.value > 99){
          document.getElementById("top-level").setAttribute("fill", "red");
        }
        else{
          document.getElementById("top-level").setAttribute("fill", "white");
        }
        this.value = Math.round(this.value*90 / 100) - 40
        
    }, 2000)
  }

}
