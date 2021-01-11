import { Component, OnInit } from '@angular/core';
import { MovieGenre } from '../../../model/moviegenre.class';
import { MoviegenreService } from '../../../service/moviegenre.service';

@Component({
  selector: 'app-moviegenre-list',
  templateUrl: './moviegenre-list.component.html',
  styleUrls: ['./moviegenre-list.component.css']
})
export class MoviegenreListComponent implements OnInit {

  title = "Movie Genre List";
  movieGenres: MovieGenre[] = [];

  constructor(private moviegenreSvc: MoviegenreService) { }

  ngOnInit(): void {
    // populate list of moviegenres
    this.moviegenreSvc.getAll().subscribe(
      resp => {
        this.movieGenres = resp as MovieGenre[];
        console.log('Movie Genres', this.movieGenres);
      },
      err => {
        console.log(err);
      }
    )
  }

}
