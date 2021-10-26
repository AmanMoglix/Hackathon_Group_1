import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
    // console.log("subdomain")
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(state.url + "******" +route.url)
      const pattern='.*/login'
      const pattern1='.*/register'
      const pattern2='.*/admin'
      const pattern3='.*/agent'
      const pattern4='.*/user'
      const pattern5='.*/dashboard'
      const pattern6='.*/catalog'
      const pattern7='.*/stock'
      const pattern8='.*/creation'
     
      if(state.url.match(pattern)){
        //this.router.navigate(['/user/login'])
        return true;
      }
      if(state.url.match(pattern1)){
        //this.router.navigate(['/user/register']);
        return true;
      }
      if(!state.url.match(pattern)||(!state.url.match(pattern1))){
        //need to check whether user is logged in or not
        if(this.authService.isAuthenticated()){

          // if user logged in as suplier  than only accessbily supplier dashboard3

            if(state.url.match(pattern3) && (route.url[0].toString()=='dashboard')){
              console.log("Agent login works");
              
              if(this.authService.getRole() == "ROLE_SUPPLIER"){
                return true;
              }
              this.authService.logOut()
              return false;
            }
            if(state.url.match(pattern2) && (route.url[0].toString()=='dashboard')){
              console.log("Admin login works")
              if(this.authService.getRole() == "ROLE_ADMIN"){
                return true;
              }
              this.authService.logOut()
              return false;
            }
            if(state.url.match(pattern4) && (route.url[0].toString()=='dashboard')){
              console.log("user login works")
              if(this.authService.getRole() == "ROLE_CUSTOMER"){
                return true;
              }
              this.authService.logOut()
              return false;
            }
            if((route.url[0].toString()=='catalog')&&(!state.url.includes("stock"))){
              if(this.authService.getRole() == "ROLE_ADMIN"){
                return true;
              }
              this.authService.logOut()
              return false;
            }
            if(route.url[0].toString()=='creation'){
              if(this.authService.getRole() == "ROLE_ADMIN"){
                return true;
              }
              this.authService.logOut()
              return false;
            }
            if((route.url[0].toString()=='catalog')&&(state.url.includes("stock"))){
              if(this.authService.getRole() == "ROLE_ADMIN"){
                return true;
              }
              if(this.authService.getRole() == "ROLE_SUPPLIER"){
                return true;
              }
              return false;
            }
                 
          return this.authService.isAuthenticated();
        }
        //return false;
        return this.router.navigate(['/user/login']);
      }

    return true;
  }
  
}
