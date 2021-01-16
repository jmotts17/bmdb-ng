import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from 'src/app/model/genre.class';
import { GenreService } from 'src/app/service/genre.service';

@Component({
  selector: 'app-genre-edit',
  templateUrl: './genre-edit.component.html',
  styleUrls: ['./genre-edit.component.css']
})
export class GenreEditComponent implements OnInit {
  title = "Genre Detail";
  genre: Genre = null;
  genreId: number = 0;
  submitBtnTitle = "Save";

  constructor(private genreSvc: GenreService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
        // get the id from the url
        this.route.params.subscribe(
          parms => {this.genreId = parms['id'];
        console.log("GenreID = " + this.genreId);
        });
        // get genre by id
        this.genreSvc.getById(this.genreId).subscribe(
          resp => {
            this.genre = resp as Genre;
            console.log("Genre", this.genre);
          },
          err => {
            console.log(err);
          }
        );
  }

  save() {
    // save the genre to the DB
    this.genreSvc.update(this.genre).subscribe(
      resp => {
        this.genre = resp as Genre;
        console.log("Genre updated", this.genre);
        // forward to the movie list componenet
        this.router.navigateByUrl("/genre-list");
      },
      err => {
        console.log(err);
      }
    );
  }

}
