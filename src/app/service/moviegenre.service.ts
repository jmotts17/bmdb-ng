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

  // get by id
  getById(id) : Observable<MovieGenre> {
    return this.http.get(URL+'/'+id) as Observable<MovieGenre>;
  }

  // create movieGenre
  create(movieGenre: MovieGenre) : Observable<MovieGenre> {
    return this.http.post(URL+'/', movieGenre) as Observable<MovieGenre>;
  }

  // update movieGenre
  update(movieGenre: MovieGenre) : Observable<MovieGenre> {
    return this.http.put(URL+'/', movieGenre) as Observable<MovieGenre>;
  }

  // delete movieGenre
  delete(id) : Observable<MovieGenre> {
    return this.http.delete(URL+'/'+id) as Observable<MovieGenre>;
  }
}
