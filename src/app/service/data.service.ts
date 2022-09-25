import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../model/movie.model';
import { MoviesInTheatre } from '../model/movies-in-theatre.model';
import { Theatre } from '../model/theatre.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  observer = new Subject();
  public subscriber$ = this.observer.asObservable();

  private movieDetails : Movie | undefined ;

  private moviesInTheatre : MoviesInTheatre[] | undefined;

  constructor() { }

  emitData(data: Movie) {
    this.observer.next(data);
    this.movieDetails = data;
    console.log("Data from DataService==>> ",data);
  }

  getData() {
    return this.movieDetails;
  }

  setMoviesInTheatrerDetails(theatres : MoviesInTheatre[]){
    this.moviesInTheatre = theatres;
  }

  getMoviesInTheatrer(){
    return this.moviesInTheatre;
  }

}
