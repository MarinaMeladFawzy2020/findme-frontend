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

  getFamilyMember(fmId :any): Observable<any> {
    return this.http.get(this.URL+`family-member/${fmId}`);
  }

  createMember(fmobj :any): Observable<any> {
    return this.http.post(this.URL+`family-member` , fmobj);
  }

  updateMember( fmobj:any): Observable<any> {
    return this.http.put(this.URL+`family-member` , fmobj);
  }


}
