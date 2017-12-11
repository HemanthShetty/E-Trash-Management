import {Component, EventEmitter, OnInit} from '@angular/core';
import {CollectionPointService} from '../../../services/cpoint.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from "../../../services/user.service.client";


@Component({
  selector: 'app-collectionpoint-list',
  templateUrl: './collectionpoint-list.component.html',
  styleUrls: ['./collectionpoint-list.component.css']
})
export class CollectionpointListComponent implements OnInit {


  userId: String;
  collectionPoints = [{}];

  constructor(private router:Router,private userService:UserService,private collectionPointService: CollectionPointService, private activatedRoute: ActivatedRoute) { }
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

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

  delete(cPointId)
  {
    this.collectionPointService.deleteCollectionPoint(cPointId)
      .subscribe(
        (data: any) => {
          if (data.success) {
            for(let i=0;i<this.collectionPoints.length;i++)
            {
                if(this.collectionPoints[i]['_id']==cPointId)
                {
                  this.collectionPoints.splice(i,1);
                }
            }
          } else {
            alert('Error deleting the collection point');
          }
        },
        (error: any) => {
        }
      );
  }



}
