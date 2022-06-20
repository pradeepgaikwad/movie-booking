import { utf8Encode } from '@angular/compiler/src/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../model/movie.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  @Output()
  isEdit = new EventEmitter();
  ;

  @Input()
  city: string | undefined;
  
  @Input()
  time: string | undefined;

  @Input()
  seats: number | undefined;
  movie : Movie | undefined;
  constructor( private router : Router,
    private dataService : DataService ) { }

  ngOnInit(): void {
    console.log("This is from ConfirmationComponent ==>> ",this.dataService.getData());
    
  }
  moviesdetls(value: any) {
    this.movie = value
    console.log('Confirmed Movie Details==>> ',value)
    this.city = value.city;
    this.time=value.time;
    this.seats = value.seats;

  }

  edit() {
    console.log('Inside Edit');
    
    this.isEdit.emit(true);
  }

  paymentConfirmation() {
    this.router.navigate(['payment']);
  }
}
