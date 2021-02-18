import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/service/system.service';
import { Actor } from '../../../model/actor.class';
import { ActorService } from '../../../service/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  title = "Actor List";
  actors: Actor[] = [];
  sortCriteria: string = "id";
  sortOrder: string = "asc";
  colClasses = "btn btn-link font-weight-bold";

  constructor(private actorSvc: ActorService,
              private sysSvc: SystemService) { }

  ngOnInit(): void {
    // if coming from login we should have an authenticated user inside sysSvc
    console.log("actor list - loggedInUser?", this.sysSvc.loggedInUser);
    // populate list of actors
    this.actorSvc.getAll().subscribe(
      resp => {
        this.actors = resp as Actor[];
        console.log('Actors', this.actors);
      },
      err => {
        console.log(err);
      }
    )
  }

  sortBy(column: string): void {
    console.log("movie list sortBy called")
    if(column == this.sortCriteria){
      this.sortOrder = (this.sortOrder == "desc") ? "asc" : "desc";
    }
    this.sortCriteria = column;
  }

}
