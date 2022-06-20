import { Component, OnInit } from '@angular/core';
import { HttpAPIService } from 'src/app/service/http-api.service';
import { MovieTrial } from 'src/app/trial/movie-trial.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  datas : string;
  passedvalue='';
  public trailMovies : MovieTrial[];
  constructor(
    private httpservice : HttpAPIService
  ) { }

  ngOnInit(): void {
  }
  pm(value : any) {    
    console.log('Value In Parent',value);
    this.passedvalue = value;
  }

  testData() {
    //console.log(this.httpservice.getTestService("getMovies"));
    this.httpservice.getMovieTrial("getAllMovies").subscribe(
      result => {
        this.trailMovies = result;
        this.datas=JSON.stringify(result);
        console.log('Movie Trails data '+this.trailMovies);
        console.log('Movie Trails this.datas '+this.datas);

      },
      error => {
        console.log('Movie Trails error '+error);
      }
    )
//console.log(this.httpservice.getMovieTrial("getAllMovies"));
console.log('Movie Trails data ***** '+this.trailMovies);
  }
}
