import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit } from '../model/credit.class';

const URL = "http://localhost:8080/credits";
@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private http: HttpClient) { }

  // service functions
  //get all credits
  getAll() : Observable<Credit[]> {
    return this.http.get(URL+'/') as Observable<Credit[]>;
  }
}
