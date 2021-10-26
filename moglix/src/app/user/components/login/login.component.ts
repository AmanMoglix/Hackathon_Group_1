import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/shared/app.service';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment';
import jwtDecode from "jwt-decode"
import { AlertService } from 'src/app/shared/alerts.Service';
import { ToastrService } from 'ngx-toastr';
@Component({
  providers: [AlertService],
    selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
error:any={}
dataForm: FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private route: ActivatedRoute,private authService:AuthService,private alertService:AlertService) { }

  ngOnInit(): void {
    this.dataForm=this.fb.group({
      username:'',
      password:''
    })
  }
logIn() {
  console.log(this.dataForm.value)
  this.authService.signInUser(this.dataForm.value).subscribe(data => {
  console.log(data)
  
  
  this.redirectPage()
  },err => {
    this.error=err.error;
    this.alertService.typeError(this.error["errorCode"], this.error["errorMessage"]+"- "+this.error["error"])
    console.log(err)})
}

redirectPage(){
  const token =localStorage.getItem(environment.oauth_token)   
  console.log(token)
  if(!token) return false;
  const currentUserRole=JSON.parse(JSON.stringify(jwtDecode(token))).authority;
 console.log(currentUserRole)
 
 if(currentUserRole == "ROLE_ADMIN"){
   this.router.navigate(['/dashboard/admin'],{skipLocationChange: true});
 }
 if(currentUserRole == "ROLE_SUPER_ADMIN"){
 
 }
 if(currentUserRole == "ROLE_CUSTOMER"){
   this.router.navigate(['/dashboard/user'],{skipLocationChange: true});

 }
 if(currentUserRole == "ROLE_SUPPLIER"){
  this.router.navigate(['/dashboard/agent'],{skipLocationChange: true});

 }if(currentUserRole == "ROLE_MANAGER"){
   this.router.navigate(['/dashboard/oms'],{skipLocationChange: true})
 }
 return true;
}
}
