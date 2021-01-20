import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from 'src/app/model/genre.class';
import { Movie } from 'src/app/model/movie.class';
import { MovieGenre } from 'src/app/model/moviegenre.class';
import { MoviegenreService } from 'src/app/service/moviegenre.service';
import { GenreService } from 'src/app/service/genre.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-moviegenre-create',
  templateUrl: './moviegenre-create.component.html',
  styleUrls: ['./moviegenre-create.component.css']
})
export class MoviegenreCreateComponent implements OnInit {
  title = "Movie Genre Create";
  submitBtnTitle = "Create";
  moviegenre: MovieGenre = new MovieGenre();
  movies: Movie[] = [];
  genres: Genre[] = [];

  constructor(private moviegenreSvc: MoviegenreService,
              private movieSvc: MovieService,
              private genreSvc: GenreService,
              private router: Router) { }

  ngOnInit(): void {
    this.movieSvc.getAll().subscribe(
      resp => {
        this.movies = resp as Movie[];
      },
      err => {
        console.log(err);
      }
      );

      this.genreSvc.getAll().subscribe(
        resp => {
          this.genres = resp as Genre[];
        },
        err => {
          console.log(err);
        }
      );
    }

    save() {
      // save the movie genre to the DB
      this.moviegenreSvc.create(this.moviegenre).subscribe(
        resp => {
          this.moviegenre = resp as MovieGenre;
          // forward to the credit list component
          this.router.navigateByUrl("/moviegenre-list");
        },
        err => {
          console.log(err);
        }
      );
    }
    
}
