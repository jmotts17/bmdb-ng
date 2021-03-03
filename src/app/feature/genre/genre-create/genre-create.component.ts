import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from 'src/app/model/genre.class';
import { GenreService } from 'src/app/service/genre.service';

@Component({
  selector: 'app-genre-create',
  templateUrl: './genre-create.component.html',
  styleUrls: ['./genre-create.component.css']
})
export class GenreCreateComponent implements OnInit {

  title = "Genre Create";
  submitBtnTitle = "Create";
  genre: Genre = new Genre();

  constructor(private genreSvc: GenreService,
              private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    // save the genre to the DB
    this.genreSvc.create(this.genre).subscribe(
      resp => {
        this.genre = resp as Genre;
        // forward to the genre list component
        this.router.navigateByUrl("/genre-list");
      },
      err => {
        console.log(err);
      }
    )
  }

}
