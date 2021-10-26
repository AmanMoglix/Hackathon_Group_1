import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
formData:boolean=false;
tableData:boolean=false;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params :any)=> {
      if(params['formId']!=null){
        this.formData = true;
        this.tableData=false;
      }

      if(params['tableId']!=null){
        this.tableData = true;
        this.formData = false;
      }
    })
    this.route.params.subscribe(params => {
      console.log(params.data)
      let obj=params.data;
      if(obj){
        this.tableData = false;
        this.formData = true;
      }
    })
  }

}
