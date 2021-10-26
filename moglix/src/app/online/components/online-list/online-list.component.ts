import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-online-list',
  templateUrl: './online-list.component.html',
  styleUrls: ['./online-list.component.css']
})
export class OnlineListComponent implements OnInit {
@Input() cart_products:any[];
products:any[];
quantity:any
basePrice:any;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    console.log(this.products)
    let obj=this.cart_products.filter(x=>x.productQuantity !=null)[0]["productQuantity"];
    console.log(obj)
    this.quantity=obj;
    let object=JSON.parse(JSON.stringify(this.cart_products))
    this.products=object;
  }

  
  AddQuantity(product:any){
    let obj=this.cart_products.filter(x=>x.productId == product.productId)[0]["totalPrice"]
    console.log(obj)
    product.productQuantity=product.productQuantity+1;
    product.totalPrice =obj*product.productQuantity;
   console.log(product.totalPrice )
    }
    RemoveQuantity(product:any){
      let obj=this.cart_products.filter(x=>x.productId == product.productId)[0]["totalPrice"]
        product.productQuantity=product.productQuantity-1;
        product.totalPrice =product.totalPrice-obj;

        if(product.productQuantity <1){
          this.removeItem(product.id)
        }
    }
    removeItem(cartId:any){
      console.log(cartId)

      environment.api_url= environment.base_url +"/online/"
      this.appService.deleteById(cartId).subscribe(data=>{
        console.log(data)
      }, err=>{console.log(err)});

    }
      }
  
      

