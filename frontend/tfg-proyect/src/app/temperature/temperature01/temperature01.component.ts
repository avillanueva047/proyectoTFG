import { Component, OnInit } from '@angular/core';
import { ApireqService } from '../../apireq.service';

@Component({
  selector: 'app-temperature01',
  templateUrl: './temperature01.component.html',
  styleUrls: ['./temperature01.component.css']
})
export class Temperature01Component implements OnInit {

  value = 0;
  type: String;
  td: any;

  constructor(private apireq: ApireqService) { }

  ngOnInit(): void {
    this.apireq.tdReq("http://localhost:9000/virtual/temperature-sensor/").subscribe(
      (data)=>{
        this.td = data;
        this.type = this.td.properties.temp.properties.value["@type"];
    });
    this.loop();
  }

  loop(){
    setInterval(
      () => {
        this.apireq.tdReq(this.td.properties.temp.forms[0].href).subscribe(
          (data: any)=>{
            this.value = Math.round(data.value);
            document.getElementById("stop3").setAttribute("offset", (Math.round(this.value + 30 * 1.11))+"%");
            document.getElementById("stop4").setAttribute("offset", (Math.round(this.value + 30 * 1.11))+"%");
        })
    }, 2000)
  }
  
}
