import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import * as appGlobalConstants from '../../app-global-constants';
import { Product } from '.././models/Product';
import { ProductBidDetails } from '.././models/ProductBidDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${appGlobalConstants.TOKEN}`
    })
    return this.http.get<Product[]>(appGlobalConstants.ZUULSERVICEAPI+"/e-auction/api/v1/sellerService/report/products",{headers:headers});
  }

  getProductById(productId:Number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${appGlobalConstants.TOKEN}`
    })
    return this.http.get<Product[]>(appGlobalConstants.ZUULSERVICEAPI+"/e-auction/api/v1/sellerService/report/products/"+productId,{headers:headers});
  }

  showBids(productId:Number): Observable<any> {
    const params = new HttpParams().set('page',0).set('size',10);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${appGlobalConstants.TOKEN}`
    })
    return this.http.get<any>(appGlobalConstants.ZUULSERVICEAPI+"/e-auction/api/v1/sellerService/report/show-bids/"+productId,{headers:headers,params:params});
  }

  getAll(productId:Number,request: any): Observable<any> {
    
		const params = new HttpParams().set('page',request['page']).set('size',request['size']);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${appGlobalConstants.TOKEN}`
    })
    return this.http.get<any>(appGlobalConstants.ZUULSERVICEAPI+"/e-auction/api/v1/sellerService/report/show-bids/"+productId,{headers:headers,params:params});
  
	}
}
