import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';
import { Cart, IAlert, Product } from 'src/app/shared/models/modelInterface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public alerts: Array<IAlert> = [];
  products:Product[]=[];
  cart:Cart[]=[]
  cartObj:Cart = new Cart();
  quantity:number =1;
  
  constructor(private appService: AppService) { }

  ngOnInit(): void {

    this.getProductList();
  }
  getProductList() {
    environment.api_url= environment.base_url +"/inventory/txn/list"
    this.appService.getAll().subscribe((res:any)=>{
     // console.log(res)
      this.products=res;
    })

    this.getCartItems()
  }
  getCartItems(){
    this.cart=[]
    environment.api_url= environment.base_url +"/online"
    this.appService.getAll().subscribe((res:any)=>{
      this.cart=res
      //console.log(this.cart=res)
    })
  }
  getTotal(){
    return this.cart.length;
  }

  i=1;
  AddQuantity(){
if(this.i!=10){
  this.i++;
  this.quantity=this.i;
}
  }
  RemoveQuantity(){
    if(this.i!=1){
      this.i--;
      this.quantity=this.i;
    }
  }
  addToCart(item:Product){
     console.log(item)
    console.log(this.cart)
   let obj=this.cart.filter(x=>x.productId == item.productId && x.supplierId == item.supplier.id)[0]
     console.log(obj)
    if(obj!=null){
      let obj=this.cart.filter(x=>x.productId == item.productId)[0]
      console.log(obj)
      this.alerts.push({
        id: 2,
        type: 'danger',
        message: 'Product already exist in cart.'
      });
      setTimeout(()=>{   
        this.closeAlert(this.alerts);
   }, 2000);
      // this.saveToCart(obj)
    }
    else{  
      console.log("**********************")
      this.cartObj.productId=item.productId
      this.cartObj.stockId=item.stockId
      this.cartObj.supplierId=item.supplier.id
      this.cartObj.totalPrice=item.productPrice;
      this.cartObj.productQuantity=1;   
       this.saveToCart(this.cartObj)
    }
    //this.alerts.push({id: 1,type: 'success', message: 'Product added to cart.' });
   console.log(item)
  
  //  environment.api_url=environment.base_url +"/online"
  //  this.appService.addData(this.cartObj).subscribe(res=>{
  //    console.log(res)
  //  },error=>{console.log(error)})
 
  
  }
  saveToCart(obj: any){
    console.log(obj)
  environment.api_url=environment.base_url +"/online"
   this.appService.addData(obj).subscribe(res=>{
     console.log(res)
     this.alerts.push({
      id: 2,
      type: 'success',
      message: 'Product addedd successfully ..'
    });
    setTimeout(()=>{   
      this.closeAlert(this.alerts);
 }, 2000);
     this.getCartItems()

   },error=>{console.log(error)})
   
console.log("*******************************************")
  }
  closeAlert(id:any){
    const index: number = this.alerts.indexOf(id);
    this.alerts.splice(index, 1);
  }
 
}
