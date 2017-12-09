import { Component, OnInit } from '@angular/core';
import {CollectionPointService} from '../../../services/cpoint.service.client';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-collectionpoint-list',
  templateUrl: './collectionpoint-list.component.html',
  styleUrls: ['./collectionpoint-list.component.css']
})
export class CollectionpointListComponent implements OnInit {


  userId: String;
  collectionPoints = [{}];

  constructor(private collectionPointService: CollectionPointService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
        }
      );

    this.collectionPointService.findCollectionPoints()
      .subscribe(
        (data: any) => {
          this.collectionPoints = data;
        },
        (error: any) => {
        }
      );
  }
}
