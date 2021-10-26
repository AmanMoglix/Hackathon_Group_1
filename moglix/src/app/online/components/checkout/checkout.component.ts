import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/shared/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
@Input() carts: any[]
dataForm: FormGroup;
  constructor(private fb:FormBuilder,private appService:AppService) { }

  ngOnInit(): void {
    this.dataForm=this.fb.group({
      status:'',
      orders:new FormArray([])
    })
    this.getLenth()
  }
  get f(){ return this.dataForm.controls}
  get ft() { return this.f.orders as FormArray}
getLenth(){
  return this.carts.length;
}
subtotal(){
  console.log(  this.carts)
  this.carts.forEach(x=>{
    this.ft.push(this.fb.group(
      {
       id:'',
       userId:'',
       stockId:x.stockId,
       productId: x.productId,
       productQuantity: x.productQuantity,
       totalPrice: x.totalPrice,
       grandTotal:'',
       supplierId:x.supplierId,
      }
    ))
  })
  console.log(this.dataForm.value)
  environment.api_url= environment.base_url +"/oms"
  this.appService.addData(this.dataForm.value).subscribe(data=>{
    console.log(data)
    this.cartUpdate()
  },error=>{console.log(error)})

}
cartUpdate(){
environment.api_url= environment.base_url +"/online/delete"
this.appService.deleteAll().subscribe(data=>{
  console.log(data)
})
}

}
