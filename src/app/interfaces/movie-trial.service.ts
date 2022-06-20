import { Injectable } from '@angular/core';
import { MovieTrial } from '../trial/movie-trial.model';
import { Adapter } from './adapter';

@Injectable({
  providedIn: 'root'
})
export class MovieTrialService implements Adapter<MovieTrial>{

  constructor() { }
  adapt(item: MovieTrial): MovieTrial {
    console.log("Inside MovieTrialService ",item);
    
    return new MovieTrial(item.movieId,item.name,item.category,item.dimension,item.duration,item.director,item.actor1,item.actor2,item.actor3,item.language);
  }
}
