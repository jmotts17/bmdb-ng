import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieGenre } from 'src/app/model/moviegenre.class';
import { MoviegenreService } from 'src/app/service/moviegenre.service';

@Component({
  selector: 'app-moviegenre-detail',
  templateUrl: './moviegenre-detail.component.html',
  styleUrls: ['./moviegenre-detail.component.css']
})
export class MoviegenreDetailComponent implements OnInit {
  title = "Movie Genre Detail";
  movieGenre: MovieGenre = null;
  movieGenreId: number = 0;

  constructor(private movieGenreSvc: MoviegenreService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the id from the url
    this.route.params.subscribe(
      parms => {this.movieGenreId = parms['id'];
      console.log("movieGenreID = " +  this.movieGenre);
    });
    // get movieGenre by id
    this.movieGenreSvc.getById(this.movieGenreId).subscribe(
      resp => {
        this.movieGenre = resp as MovieGenre;
        console.log("MovieGenre", this.movieGenre);
      },
      err => {
        console.log(err);
      }
    );
  }

  delete() {
    // delete the movieGenre from the DB
    this.movieGenreSvc.delete(this.movieGenre.id).subscribe(
      resp => {
        this.movieGenre = resp as MovieGenre;
        console.log('MovieGenre deleted', this.movieGenre);
        // forward to the actor list component
        this.router.navigateByUrl("/moviegenre-list");
      },
      err => {
        console.log(err);
      }
    );
    }

}
