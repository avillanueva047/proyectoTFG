import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: any;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
  }



  prueba(token: any){
    const url = `http://localhost:4100/prueba`;
    const httpOptions = {
      headers: {
        Accept: '*/*',
        Authorization: token,
        'Content-Type': 'application/json'
      }
    }

    //console.log(this.http.post(url, {} , httpOptions));
    this.http.post(url, {} , httpOptions).subscribe(
      (data) => {
        console.log(data);
      }
    )
    return false;
  }
}
