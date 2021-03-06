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

  // get by id
  getById(id) : Observable<Genre> {
    return this.http.get(URL+'/'+id) as Observable<Genre>;
  }

  // create genre
  create(genre: Genre) : Observable<Genre> {
    return this.http.post(URL+'/', genre) as Observable<Genre>;
  }

  // update genre
  update(genre: Genre) : Observable<Genre> {
    return this.http.put(URL+'/', genre) as Observable<Genre>;
  }

  // delete genre
  delete(id) : Observable<Genre> {
    return this.http.delete(URL+'/'+id) as Observable<Genre>;
  }
}
