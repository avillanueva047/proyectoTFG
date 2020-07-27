import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApireqService {

  private httpOptions = {
    headers: {
      Accept: '*/*',
    }
  };

  constructor(private http: HttpClient) { }

  tdReq(url){
    return this.http.get(url, this.httpOptions);
  }
}
