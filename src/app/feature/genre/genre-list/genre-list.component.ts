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
  sortCriteria: string = "id";
  sortOrder: string = "asc";
  colClasses = "btn btn-link font-weight-bold";

  constructor(private genreSvc: GenreService,
              private sysSvc: SystemService) { }

  ngOnInit(): void {    
    // populate list of genres
    this.genreSvc.getAll().subscribe(
      resp => {
        this.genres = resp as Genre[];
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
