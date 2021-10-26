import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
profile: any;
error: any={};
userName: any;
show: boolean=false;
  constructor(private router:Router, private authService:AuthService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params)
      if(params['orderId']!=null){
        this.show= true;
      }
      
    })

  this.getUserName()
  }
  getUserName(){
    this.userName=this.authService.getUserName()
  }
}
