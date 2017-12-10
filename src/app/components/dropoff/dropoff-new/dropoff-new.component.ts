import { Component, OnInit } from '@angular/core';
import {CatalogService} from "../../../services/catalog.service.client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dropoff-new',
  templateUrl: './dropoff-new.component.html',
  styleUrls: ['./dropoff-new.component.css']
})
export class DropoffNewComponent implements OnInit {
  userId: String;
  catalog = [{}];
  constructor(private catalogService: CatalogService, private activatedRoute: ActivatedRoute) { }

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

}
