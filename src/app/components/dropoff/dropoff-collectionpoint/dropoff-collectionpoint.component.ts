import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service.client";
import {DropOffService} from "../../../services/dropoff.service.client";
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-dropoff-collectionpoint',
  templateUrl: './dropoff-collectionpoint.component.html',
  styleUrls: ['./dropoff-collectionpoint.component.css']
})
export class DropoffCollectionpointComponent implements OnInit {

  userId: String;
  collectionPointId: String;
  dropOffs = [{}];
  userIdentity;

  constructor(private router:Router,private userService:UserService,private dropOffPointService: DropOffService,
              private activatedRoute: ActivatedRoute, private sharedService:SharedService) { }
  ngOnInit() {
    this.userIdentity = this.sharedService.user;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.collectionPointId = params['cid'];
        }
      );

    this.dropOffPointService.findDropOffs(this.collectionPointId)
      .subscribe(
        (data: any) => {
          this.dropOffs = data;
        },
        (error: any) => {
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
