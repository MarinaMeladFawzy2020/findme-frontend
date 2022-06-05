import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL : string = apiURL;

  constructor(private http: HttpClient) {}

  getchecklogin(): Observable<any> {
    return this.http.get(this.URL+"login");
  }

  checklogin(_f:any) { 
    console.log(_f);
    //{"username":"Mas.ahmed22@gmail.com","password":"1234"}
    // const formData = new FormData();
    // formData.append('username', "emailtest@xmmvx.com");
    // formData.append('password', "password");
    // console.log (formData);
     return this.http.post<any>(this.URL+"login" , _f )
    .pipe(map(response=> {
      console.log("response");
      console.log(response);
      sessionStorage.setItem('token',response.Authorization)
      sessionStorage.setItem("UserInfo", JSON.stringify(response.UserInfo));
      sessionStorage.setItem("username", _f.username);
      return response;
  }));


}

signuplogin(_f:any): Observable<any> {
  let headersNew = 
  {
  "Access-Control-Allow-Origin":"*",
  "Access-Control-Allow-Headers":"*",
  'Content-Type': 'application/json'
  }
  console.log(_f)
  return this.http.post(this.URL+"register/new" , _f, { headers: headersNew});
}


logoutUser() {
  sessionStorage.removeItem('token');
  sessionStorage.clear();
}

getToken(): string {
return sessionStorage.getItem('token') || '';
}

getTokenExpirationDate(token: string): any {
  token = this.getToken()
  const decoded: any = jwt_decode(token);

  if (decoded.exp === undefined) return null;

  const date = new Date(0);
  date.setUTCSeconds(decoded.exp);
  return date;
}

isTokenExpired(token?: string): boolean {
 //debugger;
  if (!token) token = this.getToken();
 // console.log(token);
  if (!token || token == "undefined") return false;

  const date = this.getTokenExpirationDate(token);
  if (date === undefined) return false;
  const d = date.valueOf();
  const nd = new Date().valueOf();
  const r = !(date.valueOf() > new Date().valueOf());
  return !(date.valueOf() > new Date().valueOf());
}


getAuthStatus(): boolean {
  if(sessionStorage.getItem('token')){
    console.log("token");
    return true ;
  }else{
    return false;
  }
}
}
