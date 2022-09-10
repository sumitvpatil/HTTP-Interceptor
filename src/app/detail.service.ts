import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  public arr:any[]=[];
  constructor(private _http:HttpClient) { }

  getDetails(){
    return this._http.get<{message:string,result:any}>(environment.baseUrl+'/getData');
  }

  saveDetails(info:any){
    return this._http.post<{message:string,result:any}>(environment.baseUrl+'/postData',info);
  }
  
  deleteDetails(info:any){
    return this._http.delete<{message:string}>(environment.baseUrl+"/deleteData"+info);
  }
}
