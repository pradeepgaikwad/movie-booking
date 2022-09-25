import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesInTheatre } from '../model/movies-in-theatre.model';
import { DataService } from '../service/data.service';
import { HttpAPIService } from '../service/http-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public moviesInTheatre : MoviesInTheatre[]
  constructor(
    private router : Router,
    private http: HttpAPIService,
    private dataservice: DataService    
  ) { }

  ngOnInit(): void {
    this.getTheatreDetails();
  }
  handleClick() {
    console.log('Inside handleClick');
    this.router.navigate(['movie-details']);
    
  }

  getTheatreDetails(){
    this.http.getTheatreDetails("getAllMoviesInTheatre").subscribe(
      result => {
        console.log('Data Received ==>> ',result);        
        this.moviesInTheatre=result;
        this.dataservice.setMoviesInTheatrerDetails(this.moviesInTheatre);
        console.log('this.moviesInTheatre ',this.moviesInTheatre);
        
      },
      error => {
        console.log('Error===>> ',error);
      }
    );
  }
}
