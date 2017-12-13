import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service.client";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  userId: String;
  users = [{}];
  userIdentity;

  constructor(private router:Router,private userService:UserService, private activatedRoute: ActivatedRoute,private sharedService:SharedService) { }
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );
    this.activatedRoute.params.subscribe(params => {
      this.userIdentity = this.sharedService.user;
    });

    this.userService.findAllUsers(this.userId)
      .subscribe(
        (data: any) => {
          this.users = data;
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
