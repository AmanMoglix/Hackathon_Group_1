import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/app.service';
import { environment } from 'src/environments/environment';
export interface stockData{
  id:any;
  productId:any;
  productPrice:any;
  quantity:any;
  catalog:Catalog[];
}
export interface Catalog{
  id:any;
  productName:any;
}
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['productName', 'productPrice', 'quantity','Action'];
  dataSource: any 
  data: stockData[];
  constructor(private router: Router,private appService: AppService) { }

  ngOnInit(): void {
   this.getAll()
  
  }
  getAll(){
    environment.api_url= environment.base_url +"/inventory/stocks"
    this.appService.getAll().subscribe((res: any)=>{
      console.log(res)
      this.data=res
      this.dataSource=res
    })
  }

  onCustomAction(catalogId: any){
console.log(catalogId)
  }
}
