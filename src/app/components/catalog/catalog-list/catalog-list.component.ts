import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogService} from "../../../services/catalog.service.client";
import {UserService} from "../../../services/user.service.client";

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {

  userId: String;
  catalog = [{}];

  constructor(private router:Router,private userService:UserService,private catalogService: CatalogService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
        }
      );

    this.catalogService.getItems()
      .subscribe(
        (data: any) => {
          this.catalog = data;
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
