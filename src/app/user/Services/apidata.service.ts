import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { apiEndPoint,postApi,loginVerfiy } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  //declaring variable as apiEndPoint
  apiEndPoint:any;
  //Post endPoint
  postapi:any;

  //login endpoint
  loginVerfiy:any;

  constructor(private httpClient:HttpClient) {
    this.apiEndPoint = apiEndPoint;
    this.postapi =postApi;
    this.loginVerfiy = loginVerfiy;

   }
  

  //reading data from webapi
  getData() : Observable<any>{
    const apiCall =this.apiEndPoint+"/user";
    
    return this.httpClient.get(apiCall);
  } 
  
  //Post data to webapi
  postData(data) : Observable<any>{
    const headers = {'content-type' : 'application/json'}
    return this.httpClient.post(this.postapi,JSON.stringify(data),{headers})
  }

  //Login functionality implementation
  login(data): Observable<any>{
    
    const headers = {'content-type' : 'application/json'}

    return this.httpClient.post(this.loginVerfiy,JSON.stringify(data),{headers});
  }
}
