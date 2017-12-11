import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CollectionPointService} from "../../../services/cpoint.service.client";
import {CollectionPoint} from "../../../models/cpoint.model.client";
import {UserService} from "../../../services/user.service.client";

@Component({
  selector: 'app-collectionpoint-new',
  templateUrl: './collectionpoint-new.component.html',
  styleUrls: ['./collectionpoint-new.component.css']
})
export class CollectionpointNewComponent implements OnInit {

  userId: String;
  cDetails;
  errorFlag: boolean;
  errorMsg: String;
  @ViewChild('f') websiteForm: NgForm;

  constructor(private userService:UserService,private collectionPointService: CollectionPointService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );
    this.cDetails=new CollectionPoint('','','','','','','');
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

  createCollectionPoint() {
    if (this.websiteForm.valid) {
      this.cDetails.name = this.websiteForm.value.cPointName;
      this.cDetails.street = this.websiteForm.value.cPointStreet;
      this.cDetails.city = this.websiteForm.value.cPointCity;
      this.cDetails.state = this.websiteForm.value.cPointState;
      this.cDetails.postCode = this.websiteForm.value.cPointPostCode;
      this.cDetails.country = this.websiteForm.value.cPointCountry;

      delete this.cDetails._id;
      this.collectionPointService.createCollectionPoint(this.cDetails)
        .subscribe(
          (data: any) => {
            this.router.navigate(['/user', this.userId , 'cpoint' ]);
          },
          (error: any) => {
            this.errorMsg = 'Please Enter The Correct Values';
            this.errorFlag = true ;
          }
        );
    } else {
      this.errorMsg = 'Please Enter The Correct Values';
      this.errorFlag = true ;
    }
  }
}
