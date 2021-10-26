import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
dataForm: FormGroup;
error: any={}

  constructor(private fb:FormBuilder,private appService:AppService,private router: Router) { }

  ngOnInit(): void {
      this.dataForm=this.fb.group({
        firstName:'',
        lastName:'',
        username:'',
        password:'',
      })
  }

  signUp(){
    console.log(this.dataForm.value)
    environment.api_url=environment.base_url +"/api/customer"
    this.appService.signUp(this.dataForm.value).subscribe(data => {
      console.log(data)
      this.router.navigate(['/user/login'],{skipLocationChange:true})
    },err => console.log(err))
  }
}
