import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as appGlobalConstants from '../../app-global-constants';
import * as moment from "moment";
import { AuthResult } from '../models/AuthResult';
import { shareReplay, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username:string, password:string ) {
    return this.http
    .post<AuthResult>(appGlobalConstants.ZUULSERVICEAPI+'/token/generate-token', {username, password})
    .pipe(
      tap(res => this.setSession(res))
    );
  };

  private setSession(authResult:AuthResult) {
    const expiresAt = moment(authResult.expiresAt);
    console.log(expiresAt);
    localStorage.setItem('jwttoken', authResult.jwttoken);
    localStorage.setItem("expiresAt", JSON.stringify(expiresAt.valueOf()) );
  }
  
  logout() {
    localStorage.removeItem("jwttoken");
    localStorage.removeItem("expiresAt");
  }

  getToken() {
    return localStorage.getItem('jwttoken');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('jwttoken');
    return authToken !== null ? true : false;
  }
}
