import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CatalogService} from "../../services/catalog.service.client";

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  catalog = [{}];

  constructor(private router:Router,private catalogService: CatalogService) { }

  ngOnInit() {
    console.log('buy hit');
    this.catalogService.getItems()
      .subscribe(
        (data: any) => {
          this.catalog = data;
        },
        (error: any) => {
        }
      );
  }

  buy() {
    this.router.navigate(['/login']);
  }


}
