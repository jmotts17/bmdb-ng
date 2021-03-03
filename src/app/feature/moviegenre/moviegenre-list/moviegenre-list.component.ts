import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/service/system.service';
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
  sortCriteria: string = "id";
  sortOrder: string = "asc";
  colClasses = "btn btn-link font-weight-bold";

  constructor(private moviegenreSvc: MoviegenreService,
              private sysSvc: SystemService) { }

  ngOnInit(): void {
    // if coming from login we should have an authenticated user inside sysSvc
    console.log("movie genre list - loggedInUser?", this.sysSvc.loggedInUser);   
    // populate list of moviegenres
    this.moviegenreSvc.getAll().subscribe(
      resp => {
        this.movieGenres = resp as MovieGenre[];
        for(let mg of this.movieGenres) {
          mg.movieTitle = mg.movie.title;
          mg.movieGenre = mg.genre.name;
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  sortBy(column: string): void {
    if(column == this.sortCriteria){
      this.sortOrder = (this.sortOrder == "desc") ? "asc" : "desc";
    }
    this.sortCriteria = column;
  }

}
