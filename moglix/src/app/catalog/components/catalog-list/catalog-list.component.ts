import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/app.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'productName', 'productDescription','Action'];
  dataSource: any 
  catalogData: any=[];
  constructor(private router: Router,private appService: AppService) { }

  ngOnInit(): void {

    this.catalogData=[];
    environment.api_url= environment.base_url +"/catalog";
    this.appService.getAll()
    .subscribe(data => {
      console.log(data)
      this.catalogData=data;
      this.dataSource=data;
    },err => console.log(err))

  }
  onCustomAction(event:any){
    //console.log(event,JSON.stringify(this.employeeData))
    if(event!=null){
      this.catalogData=[]
      //let employeeId= this.employeeData.filter(x=>x.id == event)[0]['id']
      this.router.navigate(['/catalog/',{params:JSON.stringify(this.catalogData),data:event}],{skipLocationChange:true});
      //this.router.navigate(['',{params: JSON.stringify(this.employeeData),action:event.action, data: event.id}] , {  relativeTo: this.route.parent, skipLocationChange: true });
    }
  }
}
