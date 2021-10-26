import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/shared/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'grandTotal','Action'];
  dataSource: any 
  catalogData: any=[];
  show:boolean = false;
  constructor(private appService: AppService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params['datatableId']!=null) {
        this.getAllOrders()
      }
      if(params['formId']!=null){
        this.getallPendingOrders()
      }
    })
  }
  getAllOrders(){
    this.show=false;
    environment.api_url= environment.base_url +"/oms/list"
    this.appService.getAll().subscribe((res:any)=>{

      this.dataSource=res
      this.catalogData=res;
      console.log(this.catalogData)
    })
  }
  onCustomAction(event:any){
    this.show= true;
    console.log(event)
  }
  getallPendingOrders(){
    this.show=false;
    environment.api_url= environment.base_url +"/oms/pending"
    this.appService.getAll().subscribe((res:any)=>{

      this.dataSource=res
      this.catalogData=res;
      console.log(this.catalogData)
    })
  }

}
