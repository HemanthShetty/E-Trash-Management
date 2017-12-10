import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CatalogService} from "../../../services/catalog.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {Catalog} from "../../../models/catalog.model.client";

@Component({
  selector: 'app-catalog-new',
  templateUrl: './catalog-new.component.html',
  styleUrls: ['./catalog-new.component.css']
})
export class CatalogNewComponent implements OnInit {

  userId: String;
  cDetails;
  errorFlag: boolean;
  errorMsg: String;
  @ViewChild('f') websiteForm: NgForm;

  constructor(private catalogService: CatalogService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );
    this.cDetails=new Catalog('','','','','','');
  }
  createCatalogItem() {
    if (this.websiteForm.valid) {
      this.cDetails.name = this.websiteForm.value.cPointName;
      this.cDetails.street = this.websiteForm.value.cPointStreet;
      this.cDetails.city = this.websiteForm.value.cPointCity;
      this.cDetails.state = this.websiteForm.value.cPointState;
      this.cDetails.postCode = this.websiteForm.value.cPointPostCode;
      this.cDetails.country = this.websiteForm.value.cPointCountry;

      delete this.cDetails._id;
      this.catalogService.createCatalogItem(this.cDetails)
        .subscribe(
          (data: any) => {
            this.router.navigate(['/user', this.userId , 'catalog' ]);
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
