import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private _http: HttpClient) { }

  _url = "http://localhost:3000/email";


  subscribe(emailData){
    return this._http.post(this._url,emailData);
  }

}
