import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  addData(data: any){
    environment.bearer_token_header.Authorization = "Bearer " + localStorage.getItem(environment.oauth_token)
    return this.http.post(`${environment.api_url}`,data,{headers: environment.bearer_token_header})
  }
  getById(id: any){
    environment.bearer_token_header.Authorization = "Bearer " + localStorage.getItem(environment.oauth_token)
    return this.http.get(environment.api_url +id,{headers: environment.bearer_token_header})
  }
  deleteById(id: any){
    environment.bearer_token_header.Authorization = "Bearer " + localStorage.getItem(environment.oauth_token)
    return this.http.delete(environment.api_url +id,{headers: environment.bearer_token_header})
  }
  getAll(){
    environment.bearer_token_header.Authorization = "Bearer "+ localStorage.getItem(environment.oauth_token)
    return this.http.get(environment.api_url ,{headers: environment.bearer_token_header})
  }
  deleteAll(){
    environment.bearer_token_header.Authorization = "Bearer "+ localStorage.getItem(environment.oauth_token)
    return this.http.get(environment.api_url ,{headers: environment.bearer_token_header})
  }
  getNewObject(obj: any, type?: any) {
   console.log(JSON.parse(JSON.stringify(obj)))
    return JSON.parse(JSON.stringify(obj))
  }
  signUp(data: any){
    return this.http.post(`${environment.api_url}`,data,{headers: environment.bearer_header})
  }
}
