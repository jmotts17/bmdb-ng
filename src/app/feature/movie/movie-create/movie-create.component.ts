import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  title = "Movie Create";
  submitBtnTitle = "Create";
  movie: Movie = new Movie();

  constructor(private movieSvc: MovieService) { }

  ngOnInit(): void {
  }

  save() {
    // save the movie to the DB
    this.movieSvc.create(this.movie).subscribe(
      resp => {
        this.movie = resp as Movie;
        console.log('Movie created', this.movie);
      },
      err => {
        console.log(err);
      }
    );
  }

}
