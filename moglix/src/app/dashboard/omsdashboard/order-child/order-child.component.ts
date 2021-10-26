import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/app.service';

@Component({
  selector: 'app-order-child',
  templateUrl: './order-child.component.html',
  styleUrls: ['./order-child.component.css']
})
export class OrderChildComponent implements OnInit {

  @Input() order_data: any[]
  displayedColumns: string[] = ['username', 'productName','productQuantity','totalPrice'];
    dataSource: any 
    constructor(private appService: AppService) { }
  
    ngOnInit(): void {
      
      
      let data=this.appService.getNewObject(this.order_data);
      console.log(data)
      data.forEach((x:any)=>{
        console.log(x['order'])
        this.dataSource=x['order'];
      })
      
   
      //this.dataSource=this.order_data
    }

}
