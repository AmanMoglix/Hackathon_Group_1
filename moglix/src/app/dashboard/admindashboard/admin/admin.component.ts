import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  profile: any;
  error: any={};
  userName: string;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {

    this.getUserName()
  }
  getUserName(){
    this.userName=this.auth.getUserName();
  }

}
