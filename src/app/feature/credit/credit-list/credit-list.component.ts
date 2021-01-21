import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/service/system.service';
import { Credit } from '../../../model/credit.class';
import { CreditService } from '../../../service/credit.service';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {

  title = "Credit List";
  credits: Credit[] = [];
  
  constructor(private creditSvc: CreditService,
              private sysSvc: SystemService) { }

  ngOnInit(): void {
    // if coming from login we should have an authenticated user inside sysSvc
    console.log("credit list - loggedInUser?", this.sysSvc.loggedInUser);    
    //populate list of credits
    this.creditSvc.getAll().subscribe(
      resp => {
        this.credits = resp as Credit[];
        console.log('Credits', this.credits);
      },
      err => {
        console.log(err);
      }
    )
  }

}
