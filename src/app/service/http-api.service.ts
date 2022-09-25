import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MovieTrial } from '../trial/movie-trial.model';
import { MovieTrialService } from '../interfaces/movie-trial.service';
@Injectable({
  providedIn: 'root'
})
export class HttpAPIService {


  constructor(private http:HttpClient,private adapter: MovieTrialService) { }

  getService(url:any,formData:any): Observable<any>{
    let baseUrl ='http://localhost:8080/';
    //let baseUrl ='/';
     let urlpath = baseUrl.concat(url);
     console.log('urlpath ',urlpath);
    console.log("URL ",url);
    console.log("formData ",formData);
    console.log();
    
     return this.http.post<any>(urlpath,formData);
   }



   getMovieTrial(url: any) : Observable<MovieTrial[]> {
     console.log("URL ",url);
     let movies : Observable<MovieTrial[]>;
    let baseUrl ='http://localhost:8080/';
     let urlpath = baseUrl.concat(url);
     console.log("urlpath ",urlpath);
     movies = this.http.get<any>(urlpath)
    .pipe(      
      map((data: MovieTrial[]) => data.map((item) => this.adapter.adapt(item)))
    );
    console.log("movies ==>>> ",movies);
    
    return movies;
  }

   getTestService(url:any): any{
    let baseUrl ='http://localhost:8080/';
    //let baseUrl ='/';
     let urlpath = baseUrl.concat(url);
     console.log('urlpath ',urlpath);
     let data: any;
    console.log("URL ",url);
    try {
      this.http.get<any>(urlpath).subscribe(
        res => {
          data=res;
          console.log(data);
          console.log("Result == >> ",res);
        }
      );
    } catch (error) {
      console.log('Error==> ',error);     
    }
     return data;
   }


   
   postLogout() {
    let baseUrl ='http://localhost:8080/';
    //let baseUrl ='/';
     console.log('Inside postLogout');
    let urlpath = baseUrl.concat("logout");
    return this.http.post<any>(urlpath,"");
   }

   getTheatreDetails(url:any) : Observable<any>{
    let baseUrl ='http://localhost:8080/';
    let urlpath = baseUrl.concat(url);
    return this.http.get<any>(urlpath);;
   }
}
