import { Component, OnInit } from '@angular/core';
import {CatalogService} from "../../../services/catalog.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {DropOff} from "../../../models/dropOff.model.client";
import {Inventory} from "../../../models/inventory.model.client";
import {DropOffService} from "../../../services/dropoff.service.client";
import {UserService} from "../../../services/user.service.client";

@Component({
  selector: 'app-dropoff-new',
  templateUrl: './dropoff-new.component.html',
  styleUrls: ['./dropoff-new.component.css']
})
export class DropoffNewComponent implements OnInit {
  userId: String;
  catalog = [{}];
  collectionPointId: String;
  dropOffs:DropOff;
  inventory:Inventory[];
  sFlag=false;
  sMsg="";
  constructor(private router:Router,private userService:UserService,private catalogService: CatalogService, private activatedRoute: ActivatedRoute,private dropOffService:DropOffService) { }

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
  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }
  createDropOff()
  {
    this.inventory= new Array();
    for(var i=0;i<this.catalog.length;i++)
    {
     this.inventory[i]=new Inventory(this.catalog[i]['_id'],this.catalog[i]['quantity']) ;
    }
    this.dropOffs=new DropOff('',this.userId, this.collectionPointId,this.inventory,'Uncollected');
    delete this.dropOffs._id;
    this.dropOffService.createDropOff(this.dropOffs,this.userId).subscribe(
      (data: any) => {
        this.sFlag=true;
        this.sMsg="Your Drop Off Has Been SuccessFully Created";
      },
      (error: any) => {
      }
    );
  }


}
