import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  error:any={}
  dataForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
   
    this.dataForm=this.fb.group({
      authority:''
    })
  }
  logIn() {
    console.log(this.dataForm.value)
  
  }
}
