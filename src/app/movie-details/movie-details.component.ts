import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from '../model/movie.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  // @Output() public myName =new EventEmitter<String>();
  movieDetails: FormGroup;
  public movies: Movie | undefined;
  view = true;
  isconfirmation = false;

  city='';
  time='';
  seats: number | undefined;

  constructor(
    private router: Router,
    private dataservice: DataService) {
    this.movieDetails = new FormGroup({
      city: new FormControl('', [Validators.required, Validators.requiredTrue]),
      time: new FormControl('', Validators.required),
      seats: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    console.log('Movie ', this.movies);
    console.log('ngOnInit ', this.view);
  }

  movieDetailsValues(details: any) {
    this.view = false;
    console.log('movieDetailsValues Before ', this.view);
    this.city=details.city;
    this.time = details.time;
    this.seats=details.seats;
    console.log('details===>>>> ', details);
    this.movies = new Movie(details.seats, details.city, details.time, 123);
    console.log('Movie ', this.movies);
    this.isconfirmation = true;
    console.log('movieDetailsValues After ', this.view);
    console.log("before");
    
    this.dataservice.emitData(this.movies);
    console.log("After");
    
  }

  editDetaisl(value: any) {
    console.log('editDetais : ',value);
    if(value) {
      this.view = true;
      this.isconfirmation = false;
    }
    
  }
}
