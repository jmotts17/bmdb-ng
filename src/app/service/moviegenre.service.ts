import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieGenre } from '../model/moviegenre.class';
import { HttpClient } from '@angular/common/http';

const URL = "http://localhost:8080/movie-genres";
@Injectable({
  providedIn: 'root'
})
export class MoviegenreService {

  constructor(private http: HttpClient) { }

  // service functions
  //get all moviegenres
  getAll() : Observable<MovieGenre[]> {
    return this.http.get(URL+'/') as Observable<MovieGenre[]>;
  }
}
