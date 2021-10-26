import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/app.service';
import { environment } from 'src/environments/environment';
import { Category } from '../../models/Catagory';
import { Txn } from '../../models/TXn';

export class Status { 
  
  constructor(public statusId:any, public statusName:string) {
  }	
}
export interface Catalog{
  id:any;
  productName:any;
}
@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  allTxn = [
    new Txn("inward", 'INWARD'),
    new Txn("outward", 'OUTWARD')
]
allStatus = [
 new Status(2,'ADD'),
 new Status(3,'REMOVE')
]

dataForm: FormGroup
update:boolean= false
childFieldList: any = [];
catalog:Catalog[]= [];
  constructor(private fb:FormBuilder,private appService: AppService,private router:Router) { }

  ngOnInit(): void {

    this.dataForm=this.fb.group({
      id:[],
      type:[],
      billNo:[],
      remarks:[],
      status:[],
      billDate:[],
      totalTaxableAmount:[],
      grandTotal:[],
      txnDetailsCO: new FormArray([]),
    })
    this.getCatlog()
  }

  get f(){ return this.dataForm.controls}
  get ft() { return this.f.txnDetailsCO as FormArray}
  
  addChild(){
    this.ft.push(this.fb.group({
      id:'',
      productId:'',
      quantity:'',
      productPrice:'',
      totalPrice:'',
      status:''
    }))
  }
  removeChild(event:any){
    if(event>0){
      this.ft.removeAt(event)
      }
    
  }
   
  getCatlog(){
    environment.api_url= environment.base_url +"/catalog"
    this.appService.getAll().subscribe((data: any)=>{
      console.log(data)
      this.catalog=data
      this.addChild()
    })
  }

  onSubmit(){
console.log(this.dataForm.value)
environment.api_url=environment.base_url +"/catalog/inventory"
this.appService.addData(this.dataForm.value)
.subscribe(data=>{
  console.log(data)
  this.router.navigate(['/catalog/stockList'],{skipLocationChange: true })
},error=>{console.log(error)})
  }
}
