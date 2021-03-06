import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  title = "User Create";
  submitBtnTitle = "Create";
  user: User = new User();

  constructor(private userSvc: UserService,
              private router: Router,
              private loc: Location) { }

  ngOnInit(): void {
  }

  save() {
    // save the user to the DB
    this.userSvc.create(this.user).subscribe(
      resp => {
        this.user = resp as User;
        // forward to the user list component
        this.router.navigateByUrl("/user-list");
      },
      err => {
        console.log(err);
      }
    )
  }

  backClicked() {
    this.loc.back();
  }

}
