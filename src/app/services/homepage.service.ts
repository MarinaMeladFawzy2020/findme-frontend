import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  URL : string = apiURL;
  headersNew1 = 
  {
  "Access-Control-Allow-Origin":"*",
  "Access-Control-Allow-Headers":"*",
  'Content-Type': 'application/json'
  }
  constructor(private http: HttpClient) { }



  getAllWebPage(): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json' );
    headers.append('Access-Control-Allow-Origin', '*' );
    headers.append('Access-Control-Allow-Credentials', 'true' || '' );
    headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS' );

    return this.http.get(this.URL+"settings?settingApp=WEB" , { headers: this.headersNew1});
  }

  getAllWebsocial(): Observable<any> {
    return this.http.get(this.URL+"settings/social"  , { headers: this.headersNew1});
  }


}
























// 