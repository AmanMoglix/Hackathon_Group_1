import { Component, OnInit } from '@angular/core';
import { OnlineService } from 'src/app/online/service/online.service';
import { AppService } from 'src/app/shared/app.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Cart } from 'src/app/shared/models/modelInterface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
userRole:any
itemNumber:any;
carts:any={}
  constructor(private appService: AppService,private authService: AuthService,public onlineService: OnlineService) { }

  ngOnInit(): void {
   this.getRole()
  }
  getRole(){
this.userRole=this.authService.getRole();
if(this.userRole=="ROLE_CUSTOMER"){
this.getItems()
}
if(!(this.userRole=="ROLE_CUSTOMER")){
  this.itemNumber=null;
  }
  }
  getItems(){
    environment.api_url= environment.base_url +"/online"
    this.appService.getAll().subscribe((res:any)=>{
      console.log(res)
       this.carts=res;
    this.itemNumber=this.carts.length;
    return this.itemNumber?this.carts.length:null;
    },error=>{console.log(error)})
  }
}
