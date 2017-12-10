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
      this.cDetails.name = this.websiteForm.value.catalogName;
      this.cDetails.description = this.websiteForm.value.catalogDescription;
      this.cDetails.price = this.websiteForm.value.catalogPrice;
      this.cDetails.quantity = this.websiteForm.value.catalogQuantity;
      this.cDetails.imageUrl = this.websiteForm.value.catalogUrl;
      console.log(JSON.stringify(this.cDetails));

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


