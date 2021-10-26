import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/app.service';
import { environment } from 'src/environments/environment';
export class RoleType{
  constructor(public id:any,public authority:any){}
}
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
dataForm: FormGroup
error: any={};
allRoles:RoleType[] =[]
showMessage:boolean = false;
message:string;
  constructor(private fb:FormBuilder,private appService: AppService,private router: Router) { }

  ngOnInit(): void {
    this.dataForm=this.fb.group({
      firstName:'',
      lastName:'',
      username:'',
      password:'',
      role:''
    })

    this.getAllRole()
  }
  getAllRole(){
    environment.api_url= environment.base_url +"/api/role/view"
    this.appService.getAll().subscribe((res:any)=>{
      console.log(res)
      this.allRoles=res;
    })
  }
  signUp(){
    console.log(this.dataForm.value)
    environment.api_url= environment.base_url +"/api"
    this.appService.addData(this.dataForm.value).subscribe(
      (data:any) => {
        if(data['errorMessage']!=null){
          this.showMessage=true;
          this.message=data['errorMessage'];
        }
         this.router.navigate(['/dashboard/admin']);
      }
      ,err=>{console.log(this.error=err)}
    )
  }

}
