import { Component, OnInit } from '@angular/core';
import { ApireqService } from '../../apireq.service';

@Component({
  selector: 'app-temperature03',
  templateUrl: './temperature03.component.html',
  styleUrls: ['./temperature03.component.css']
})
export class Temperature03Component implements OnInit {

  celsius_value = 0;
  fahrenheit_value = 0;
  td: any;

  constructor(private apireq: ApireqService) { }

  ngOnInit(): void {
    this.apireq.tdReq("http://localhost:9000/virtual/temperature-sensor/").subscribe(
      (data) => {
        this.td = data;
      }
    );
    this.loop();
  }

  loop(){
    let progress_celsius = document.getElementById("st0_fill");
    let progress_fahrenheit = document.getElementById("st1_fill");
    setInterval(
      () => {
        this.apireq.tdReq(this.td.properties.temp.forms[0].href).subscribe(
          (data: any) => {
            this.celsius_value = Math.round(data.value);
            this.fahrenheit_value = Math.round((this.celsius_value * (9/5)) + 32);

            //Animation
            var initialStroke_Celsius = (this.celsius_value + 30) * 24.44;
            var lastStroke_Celsius = 2200 - initialStroke_Celsius;

            var initialStroke_Fahrenheit =  (this.fahrenheit_value + 22) * 13.58;
            var lastStroke_Fahrenheit = 2200 -  initialStroke_Fahrenheit;
            progress_celsius.style.setProperty('--initialStroke', `${initialStroke_Celsius} ${lastStroke_Celsius}`);
            progress_fahrenheit.style.setProperty('--initialStroke', `${initialStroke_Fahrenheit} ${lastStroke_Fahrenheit}`);
          }
        )
      }, 1500);
  }
}
