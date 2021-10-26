import { Injectable } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OnlineService {
  itemNumber:any;
  cart:any={}
  constructor(private appService:AppService) { }
  getCartItems(){
    environment.api_url= environment.base_url +"/online"
    this.appService.getAll().subscribe((res:any)=>{
      console.log(this.cart=res)
      this.itemNumber=this.cart.length;

    })
    this.getTotal()
}
getTotal(){
  
}
}
