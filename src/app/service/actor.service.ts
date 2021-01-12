import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from '../model/actor.class';

const URL = "http://localhost:8080/actors";
@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) { }

  // service functions
  // get all actors
  getAll() : Observable<Actor[]> {
    return this.http.get(URL+'/') as Observable<Actor[]>;
  }

  // create actor
  create(actor: Actor) : Observable<Actor> {
    return this.http.post(URL+'/', actor) as Observable<Actor>;
  }
}