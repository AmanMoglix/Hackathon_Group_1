import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {

  dataTable:boolean = false;
  formData:boolean = false;
  constructor(private rooute:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.rooute.queryParams.subscribe((params: any)=> {
      console.log(params['datatableId'])
      if(params['formId']!=null){
        this.formData=true;
      }
      if(params['datatableId']!=null){
        this.dataTable=true;
        console.log("**********")
      }
    })
  }

}
