import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-actor-edit',
  templateUrl: './actor-edit.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {
  title = "Actor Edit";
  actor: Actor = null;
  actorId: number = 0;
  submitBtnTitle = "Save";

  constructor(private actorSvc: ActorService,
              private router: Router,
              private route: ActivatedRoute,
              private loc: Location) { }

  ngOnInit(): void {
    // get the id from the url
    this.route.params.subscribe(
      parms => {this.actorId = parms['id'];
    });

    // get actor by id
    this.actorSvc.getById(this.actorId).subscribe(
      resp => {
        this.actor = resp as Actor;
      },
      err => {
        console.log(err);
      }
    );
  }

  save() {
    // save the actor to the DB
    this.actorSvc.update(this.actor).subscribe(
      resp => {
        this.actor = resp as Actor;
        // forward to the actor list componenet
        this.router.navigateByUrl("/actor-list");
      },
      err => {
        console.log(err);
      }
    );
  }

  backClicked() {
    this.loc.back();
  }

}
