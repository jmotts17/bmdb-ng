import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-create',
  templateUrl: './actor-create.component.html',
  styleUrls: ['./actor-create.component.css']
})
export class ActorCreateComponent implements OnInit {

  title = "Actor Create";
  submitBtnTitle = "Create";
  actor: Actor = new Actor();

  constructor(private actorSvc: ActorService,
              private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    // save the actor to the DB
    this.actorSvc.create(this.actor).subscribe(
      resp => {
        this.actor = resp as Actor;
        // forward to the actor list component
        this.router.navigateByUrl("/actor-list");
      },
      err => {
        console.log(err);
      }
    )
  }

}
