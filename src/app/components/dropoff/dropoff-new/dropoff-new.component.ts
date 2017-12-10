import { Component, OnInit } from '@angular/core';
import {CatalogService} from "../../../services/catalog.service.client";
import {ActivatedRoute} from "@angular/router";
import {DropOff} from "../../../models/dropOff.model.client";

@Component({
  selector: 'app-dropoff-new',
  templateUrl: './dropoff-new.component.html',
  styleUrls: ['./dropoff-new.component.css']
})
export class DropoffNewComponent implements OnInit {
  userId: String;
  catalog = [{}];
  collectionPointId: String;
  dropOffs:DropOff[];
  constructor(private catalogService: CatalogService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

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

    this.catalogService.getItems()
      .subscribe(
        (data: any) => {
          this.catalog = data;
        },
        (error: any) => {
        }
      );
  }

  createDropOff()
  {
   for(var i=0;i<this.catalog.length;i++)
   {
     this.dropOffs[i]=new DropOff('',this.userId, this.collectionPointId,this.catalog[i]['_id'],this.catalog[i]['quantity'],'');
     delete this.dropOffs[i]._id;
   }
  }


}
