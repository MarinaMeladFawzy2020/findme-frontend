import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  URL : string = apiURL;
  constructor(private http: HttpClient) { }

  getGuardianByID(guardianId:any): Observable<any> {
    return this.http.get(this.URL+`guardian/${guardianId}`);
  }

  getGuardianByEmail(guardianEmail:any): Observable<any> {
    return this.http.get(this.URL+`guardian?email/${guardianEmail}`);
  }

  updateGuardian(guardianId:any , _f:any, updatePassword:boolean): Observable<any> {
    return this.http.put(this.URL+`guardian/${guardianId}?updatePassword=${updatePassword}` , _f);
  }


}
