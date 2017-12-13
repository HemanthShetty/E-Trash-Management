import {DropOff} from "../../../../models/dropOff.model.client";
import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { Validators } from '@angular/forms';
import {UserService} from "../../../../services/user.service.client";
import {DropOffService} from "../../../../services/dropoff.service.client";
import {SharedService} from "../../../../services/shared.service.client";



@Component({
  selector: 'app-dropoff-edit',
  templateUrl: './dropoff-edit.component.html',
  styleUrls: ['./dropoff-edit.component.css']
})
export class DropoffEditComponent implements OnInit {

  dropId: String ;
  dropOff: DropOff = new DropOff('', '', '', [], '');
  notificationMessage: String;
  isInvalid: boolean;
  cId;
  statuses=['Uncollected','Collected'];
  customer;
  userId;
  userIdentity;
  @ViewChild('f') profileForm: NgForm;
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router,
               private dropOffService:DropOffService,private sharedService:SharedService) {}

  ngOnInit() {
    this.userIdentity = this.sharedService.user;
    this.route.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );

    this.route.params
      .subscribe(
        (params: any) => {
          this.dropId = params['dropOffId'];
          this.dropOffService.getDropOff(this.dropId).subscribe(
            (data: any) => {
              if (data) {
                this.dropOff=data;
                this.userService.findUserById(this.dropOff.customerId).subscribe(
                  (data: any) => {
                    if (data) {
                      this.customer=data;
                    }
                  },
                  (error: any) => {

                  }
                );
              }
            },
            (error: any) => {

            }
          );
        }
      );

    this.route.params
      .subscribe(
        (params: any) => {
          this.cId = params['cid'];
        }
      );
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

  editDropOff() {
    if (this.profileForm.valid) {
      this.dropOff.status = this.profileForm.value.status;
      this.dropOffService.updateDropOff(this.cId,this.dropOff,this.dropId).subscribe(
        (data: any) => {
          if (data) {
            this.router.navigate(['/user',this.userId,'cpoint',this.cId,'dropoff']);
          }
        },
        (error: any) => {

        }
      );
    } else {

    }
  }
}
