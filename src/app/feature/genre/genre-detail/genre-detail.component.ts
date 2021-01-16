import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from 'src/app/model/genre.class';
import { GenreService } from 'src/app/service/genre.service';

@Component({
  selector: 'app-genre-detail',
  templateUrl: './genre-detail.component.html',
  styleUrls: ['./genre-detail.component.css']
})
export class GenreDetailComponent implements OnInit {
  title = "Genre Detail";
  genre: Genre = null;
  genreId: number = 0;

  constructor(private genreSvc: GenreService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the id from the url
    this.route.params.subscribe(
      parms => {this.genreId = parms['id'];
    console.log("GenreID = " + this.genre);
    });
    // get genre by id
    this.genreSvc.getById(this.genreId).subscribe(
      resp => {
        this.genre = resp as Genre;
        console.log('Genre', this.genre);
      },
      err => {
        console.log(err);
      }
    );
  }

  delete() {
    // delete the genre from the DB
    this.genreSvc.delete(this.genre.id).subscribe(
      resp => {
        this.genre = resp as Genre;
        console.log("Genre deleted", this.genre);
        // forward to the genre list component
        this.router.navigateByUrl("/genre-list");
      },
      err => {
        console.log(err);
      }
    );
  }

}
