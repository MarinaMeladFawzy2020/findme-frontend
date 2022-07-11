import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL : string = apiURL;
  constructor(private http: HttpClient) { }

  getAllproduct(): Observable<any> {
    return this.http.get(this.URL+`product/getAll`);
  }

  getproductDetails(prodID:any): Observable<any> {
    return this.http.get(this.URL+`product/details/${prodID}`);
  }


}
