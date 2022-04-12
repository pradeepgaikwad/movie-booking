import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpAPIService {


  constructor(private http:HttpClient) { }

  getService(url:any,formData:any): Observable<any>{
    let baseUrl ='http://localhost:8080/';
    //let baseUrl ='/';
     let urlpath = baseUrl.concat(url);
    console.log("URL ",url);
    console.log("formData ",formData);
     return this.http.post<any>(urlpath,formData);
   }

   postLogout() {
    let baseUrl ='http://localhost:8080/';
    //let baseUrl ='/';
     console.log('Inside postLogout');
    let urlpath = baseUrl.concat("logout");
    return this.http.post<any>(urlpath,"");
   }
}
