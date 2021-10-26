import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router: Router, private route: ActivatedRoute) { }

  signInUser(credentials: any){
    return this.http.post<any>(environment.base_url+'/api/login', credentials)
    .pipe(map(user=>{
      //console.log(user.token)
      if(user.token){
        localStorage.setItem(environment.oauth_token, user.token);
      }

    }))
  }

  logOut(){
    environment.bearer_token_header.Authorization = "Bearer "
    localStorage.removeItem(environment.oauth_token);
    this.router.navigate(['/user/login'])
  }
  isAuthenticated() {
    console.log("2 -"+localStorage.getItem(environment.oauth_token));
    
    if(!localStorage.getItem(environment.oauth_token) || localStorage.getItem(environment.oauth_token) == 'undefined'){
      return false;
    }

    const token= (localStorage.getItem(environment.oauth_token)|| '{}')

    const exp=JSON.parse(JSON.stringify(jwt_decode(token))).exp;
    //console.log(exp   , (Date.now()))
    if(exp>(Date.now()/1000)) return true;
    else return false;
  }

  getUserName(){
    const token= (localStorage.getItem(environment.oauth_token)|| '{}')
    const userName= JSON.parse(JSON.stringify(jwt_decode(token))).firstname;
    return userName;
  }
  getRole(){
    const token= (localStorage.getItem(environment.oauth_token)||'{}')
    const role=JSON.parse(JSON.stringify(jwt_decode(token))).authority;
    return role;
  }
}
