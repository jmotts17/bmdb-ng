import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from 'src/app/model/genre.class';
import { Movie } from 'src/app/model/movie.class';
import { MovieGenre } from 'src/app/model/moviegenre.class';
import { GenreService } from 'src/app/service/genre.service';
import { MovieService } from 'src/app/service/movie.service';
import { MoviegenreService } from 'src/app/service/moviegenre.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-moviegenre-edit',
  templateUrl: './moviegenre-edit.component.html',
  styleUrls: ['./moviegenre-edit.component.css']
})
export class MoviegenreEditComponent implements OnInit {
  title = "Movie Genre Edit";
  submitBtnTitle = "Save";
  moviegenreId: number = 0;
  moviegenre: MovieGenre = null;
  movies: Movie[] = [];
  genres: Genre[] = [];

  constructor(private moviegenreSvc: MoviegenreService,
              private movieSvc: MovieService,
              private genreSvc: GenreService,
              private route: ActivatedRoute,
              private router: Router,
              private loc: Location) { }

  ngOnInit(): void {
    // get the id from the url
    this.route.params.subscribe(
      parms => {this.moviegenreId = parms['id'];
    });
    // get moviegenre by id
    this.moviegenreSvc.getById(this.moviegenreId).subscribe(
      resp => {
        this.moviegenre = resp as MovieGenre;
      },
      err => {
        console.log(err);
      }
    );
    // get list of movies
    this.movieSvc.getAll().subscribe(
      resp => {
        this.movies = resp as Movie[];
      },
      err => {
        console.log(err);
      }
    );
    // get list of genres
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
    // save the moviegenre to the DB
    this.moviegenreSvc.create(this.moviegenre).subscribe(
      resp => {
        this.moviegenre = resp as MovieGenre;
        // forward to the moviegenre list component
        this.router.navigateByUrl("/moviegenre-list");
      },
      err => {
        console.log(err);
      }
    );
  }

  backClicked() {
    this.loc.back();
  }
  
  compMovie(a: Movie, b: Movie): boolean {
    return a && b && a.id === b.id;
  }

  compGenre(a: Genre, b: Genre): boolean {
    return a && b && a.id === b.id;
  }

}
