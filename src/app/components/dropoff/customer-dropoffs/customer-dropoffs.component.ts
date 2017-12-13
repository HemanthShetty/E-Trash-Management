import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { Validators } from '@angular/forms';
import {DropOff} from "../../../models/dropOff.model.client";
import {DropOffService} from "../../../services/dropoff.service.client";
import {SharedService} from "../../../services/shared.service.client";
import {UserService} from "../../../services/user.service.client";


@Component({
  selector: 'app-customer-dropoffs',
  templateUrl: './customer-dropoffs.component.html',
  styleUrls: ['./customer-dropoffs.component.css']
})
export class CustomerDropoffsComponent implements OnInit {

  dropOffs: DropOff[];
  userId;
  userIdentity;
  constructor(private route: ActivatedRoute, private router: Router,
              private dropOffService:DropOffService,private sharedService:SharedService,private userService:UserService) {

  }


  ngOnInit() {
    this.userIdentity = this.sharedService.user;
    this.route.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.dropOffService.findDropOffsForUser(this.userId).subscribe(
            (data: any) => {
              if (data) {
                this.dropOffs=data;
              }
            },
            (error: any) => {

            }
          );
        }
      );
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

}
