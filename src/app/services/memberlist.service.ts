import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberlistService {

  URL : string = apiURL;
  constructor(private http: HttpClient) { }

  getmemberCategory(): Observable<any> {
    return this.http.get(this.URL+`settings/memberCat`);
  }

  getGardMembersCategory(gardId :any): Observable<any> {
    return this.http.get(this.URL+`family-member/GardMembers/${gardId}`);
  }


}
