import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';
import { Adapter } from './adapter';

@Injectable({
  providedIn: 'root'
})
export class MovieAdapterService implements Adapter<Movie>{

  constructor() { }
  adapt(item: Movie): Movie {
    //return new Movie();
    throw new Error('Method not implemented.');
  }
}
