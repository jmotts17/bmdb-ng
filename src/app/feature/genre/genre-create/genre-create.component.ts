import { Component, OnInit } from '@angular/core';
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

  constructor(private genreSvc: GenreService) { }

  ngOnInit(): void {
  }

  save() {
    // save the genre to the DB
    this.genreSvc.create(this.genre).subscribe(
      resp => {
        this.genre = resp as Genre;
        console.log('Genre created', this.genre);
      },
      err => {
        console.log(err);
      }
    )
  }

}
