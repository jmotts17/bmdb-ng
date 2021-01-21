import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/service/system.service';
import { Genre } from '../../../model/genre.class';
import { GenreService } from '../../../service/genre.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {

  title = "Genre List";
  genres: Genre[] = [];

  constructor(private genreSvc: GenreService,
              private sysSvc: SystemService) { }

  ngOnInit(): void {
    // if coming from login we should have an authenticated user inside sysSvc
    console.log("genre list - loggedInUser?", this.sysSvc.loggedInUser);    
    // populate list of genres
    this.genreSvc.getAll().subscribe(
      resp => {
        this.genres = resp as Genre[];
        console.log('Genres', this.genres);
      },
      err => {
        console.log(err);
      }
    )
  }

}
