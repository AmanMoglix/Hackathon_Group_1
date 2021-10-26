import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-assigned-order',
  templateUrl: './assigned-order.component.html',
  styleUrls: ['./assigned-order.component.css']
})
export class AssignedOrderComponent implements OnInit {
  displayedColumns: string[] = ['id', 'grandTotal','Action'];
  dataSource: any 
  catalogData: any=[];
  show:boolean = false;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getAllOrders()
  }
  getAllOrders(){
    this.show=false;
    environment.api_url= environment.base_url +"/oms"
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
}
