import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/shared/app.service';
import { environment } from 'src/environments/environment';
import { Category } from '../../models/Catagory';

@Component({
  selector: 'app-catalog-form',
  templateUrl: './catalog-form.component.html',
  styleUrls: ['./catalog-form.component.css']
})
export class CatalogFormComponent implements OnInit {
  update:boolean=false
  allCategory = [
    new Category(1, 'Developer'),
    new Category(2, 'Electronics'),
    new Category(3, 'Home Appliances'),
    new Category(4, 'Industry Tool'),
    new Category(5, 'Medica6l'),
    new Category(6, 'Stationary')
]

dataForm:FormGroup
catalogId:any
imagedoc:File 
  constructor(private fb:FormBuilder, private router:Router, private route: ActivatedRoute,private appService:AppService) { }

  ngOnInit(): void {
   this.route.params.subscribe(param => {
     console.log(param)
     this.catalogId=param.data
     this.setValue()
   })

    this.dataForm=this.fb.group({
      id:'',
      categoryId:'',
      productName:'',
      productDescription:'',
      productImage:'',
    })
  }
  get f(){ return this.dataForm.controls}

  uploadFileChange(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.imagedoc = event.target.files[0];
    }
  }
   setValue(){
     if(this.catalogId!=null){
       environment.api_url = environment.base_url + "/catalog/"
       this.appService.getById(this.catalogId)
       .subscribe((data:any) =>{
         console.log(data)
         this.dataForm.get('id')?.setValue(data['id'])
         this.dataForm.get('categoryId')?.setValue(data['categoryId'])
         this.dataForm.get('productName')?.setValue(data['productName'])
         this.dataForm.get('productDescription')?.setValue(data['productDescription'])
         this.dataForm.get('productImage')?.setValue(data['productImage'])

       this.update=true;
       },error=>{console.log(error)})
     }
   }

   onSubmit(){
    // console.log(this.dataForm.value)

    let payload=this.appService.getNewObject(this.dataForm.value)
    const uploadData: FormData = new FormData();


    // uploadData.append('object', new Blob([JSON.stringify(payload)], { type: 'application/json', }));
    // uploadData.append('imagedoc', this.imagedoc);
    // console.log(uploadData);
     environment.api_url=environment.base_url + "/catalog"
     this.appService.addData(this.dataForm.value)
     .subscribe(res =>{
       console.log(res)
       this.router.navigate(['/catalog/list',{params:JSON.stringify(res),data:1}],{skipLocationChange: true })
     })
   }

}
