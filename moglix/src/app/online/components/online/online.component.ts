import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {
  carts:any[]=[]
  itemNumber:any;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getItems();
  }
getItems(){
  environment.api_url= environment.base_url +"/online"
  this.appService.getAll().subscribe((res:any)=>{
     this.carts=res;
     console.log(this.carts);

  //this.itemNumber=this.carts.length;
  //return this.itemNumber?this.carts.length:null;
  },error=>{console.log(error)})
}
getCartLenth(){
    this.itemNumber=this.carts.length;

  return this.itemNumber?this.carts.length:0;
}
}

