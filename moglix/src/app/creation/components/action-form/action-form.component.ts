import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.css']
})
export class ActionFormComponent implements OnInit {
employeeData: boolean = false;
roleData: boolean = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
       if(params['roleId']!=null){
         this.roleData=true
         this.employeeData=false
       }
       if(params['employeeId']!=null){
         this.employeeData=true;
         this.roleData=false;
       }
    })
  }

}
