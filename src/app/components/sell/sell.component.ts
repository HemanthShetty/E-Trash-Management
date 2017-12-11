import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import {GoogleMapsService} from "../../services/googlemaps.service.client";
import {SharedService} from "../../services/shared.service.client";
import {CollectionPointService} from "../../services/cpoint.service.client";
import {CollectionPoint} from "../../models/cpoint.model.client";
import {Observable} from "rxjs/Observable";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service.client";

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  public latitude;
  public longitude;
  public searchControl: FormControl;
  public zoom: number;
  userIdentity;
  collectionPoints :CollectionPoint[];
  latLongs = [{}];
  selectCollectionPoint;
  selected=false;
  selectCollectionPointName: String;
  userId;


  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(private userService:UserService,private activatedRoute:ActivatedRoute,private router:Router,private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone, private mapsService: GoogleMapsService, private sharedService:SharedService,private collectionPointService: CollectionPointService) { }


  ngOnInit() {
    this.userIdentity = this.sharedService.user;
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;


    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();
    this.populateCollectionPoints();
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );


    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private populateCollectionPoints()
  {
    this.collectionPointService.findCollectionPoints().subscribe(
      (data: any) => {
        this.collectionPoints=data;
        for (var i = 0; i < this.collectionPoints.length; ++i) {
          this.returnLatLong(i,this.collectionPoints[i]);
        }
      },
      (error: any) => {

      }
    );
  }

  private returnLatLong(index,collectionPoint)
  {
    let i=index;
    this.mapsService.findLatLong(collectionPoint.street+','+collectionPoint.city+','+collectionPoint.state+' '+collectionPoint.postCode)
      .subscribe(
        (data: any) => {
          this.latLongs[i]['lat'] = data.results[0].geometry.location.lat;
          this.latLongs[i]['lng'] = data.results[0].geometry.location.lng;
          this.latLongs[i]['id'] = this.collectionPoints[i]._id;
          this.latLongs[i]['name']= this.collectionPoints[i].name;
        },
        (error: any) => {

        }
      );
  }

  private setCurrentPosition() {
    this.mapsService.findLatLong(this.userIdentity.address)
      .subscribe(
        (data: any) => {
          this.latitude = data.results[0].geometry.location.lat;
          this.longitude = data.results[0].geometry.location.lng;
          this.zoom = 12;
        },
        (error: any) => {

        }
      );
  }

  updateDiv(collectionPointLatLong)
  {
    this.selectCollectionPoint=collectionPointLatLong.id;
    this.selectCollectionPointName=collectionPointLatLong.name;
    this.selected=true;
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

  createDropOff()
  {
    this.router.navigate(['/user', this.userId , 'sell' ,this.selectCollectionPoint,'dropoff','new']);
  }

}
