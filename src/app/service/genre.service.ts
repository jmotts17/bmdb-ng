import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Genre } from '../model/genre.class';

const URL = "http://localhost:8080/genres";
@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }

  // service functions
  // get all genres
  getAll() : Observable<Genre[]> {
    return this.http.get(URL+'/') as Observable<Genre[]>;
  }
}
