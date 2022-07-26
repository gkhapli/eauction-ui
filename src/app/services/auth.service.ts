import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as appGlobalConstants from '../../app-global-constants';
import * as moment from "moment";
import { AuthResult } from '../models/AuthResult';
import { shareReplay, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private router: Router) { }

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
    this.router.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('jwttoken');
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      let expiration = localStorage.getItem("expiresAt")!;
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  } 
}
