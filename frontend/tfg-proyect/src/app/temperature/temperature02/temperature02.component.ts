import { Component, OnInit } from '@angular/core';
import { ApireqService } from '../../apireq.service';

@Component({
  selector: 'app-temperature02',
  templateUrl: './temperature02.component.html',
  styleUrls: ['./temperature02.component.css']
})
export class Temperature02Component implements OnInit {

  value = 0;
  type: String;
  td: any;

  constructor(private apireq: ApireqService) { }

  ngOnInit(): void {
    this.apireq.tdReq("http://localhost:9000/virtual/temperature_sensor/temperature_celsius").subscribe(
      (data) => {
        this.td = data; 
      }
    );
    this.loop();
  }

  loop(){
    setInterval(
      () => {
        this.type = this.td.properties.temperature.properties.value["@type"];
        this.apireq.tdReq(this.td.properties.temperature.forms[0].href).subscribe(
          (data: any) => {
            this.value = Math.round(data.value);
            if(this.value < -30){
              document.getElementById("stop1").setAttribute("offset", (0)+"%");
              document.getElementById("stop2").setAttribute("offset", (0)+"%");
            }else{
              document.getElementById("stop1").setAttribute("offset", (this.value+40)*1.1111+"%");
              document.getElementById("stop2").setAttribute("offset", (this.value+40)*1.1111+"%");
              if(this.value > 99){
                document.getElementById("top-level").setAttribute("fill", "red");
              }
              else{
                document.getElementById("top-level").setAttribute("fill", "white");
              }
            }
          }
        );
      }, 2000
    );
  }
}
