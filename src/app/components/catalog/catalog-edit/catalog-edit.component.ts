import {Component, OnInit, ViewChild} from '@angular/core';
import {CatalogService} from "../../../services/catalog.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Catalog} from "../../../models/catalog.model.client";

@Component({
  selector: 'app-catalog-edit',
  templateUrl: './catalog-edit.component.html',
  styleUrls: ['./catalog-edit.component.css']
})
export class CatalogEditComponent implements OnInit {

  userId: String;
  itemId: String;
  errorFlag: boolean;
  errorMsg: String;
  catalogItem: Catalog;
  catalogItemDetails: Catalog;
  @ViewChild('f') websiteForm: NgForm;

  constructor(private catalogService: CatalogService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.catalogItem = new Catalog('', '' , '' , '','','');
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.itemId = params['catalogId'];
        }
      );

    this.catalogService.findItemById(this.itemId)
      .subscribe(
        (data: any) => {
          if (data == null) {
            this.errorFlag = true;
            this.errorMsg = 'Error Fetching Website details' ;
          }else {
            this.catalogItem = data;
          }
        },
        (error: any) => {
          this.errorFlag = true;
          this.errorMsg = 'Error Fetching Website details' ;
        }
      );
    this.catalogItemDetails = new Catalog('', '' , '' , '','','');
  }

  updateCatalogItem() {
    if (this.websiteForm.valid) {
      this.catalogItemDetails.name = this.websiteForm.value.catalogName;
      this.catalogItemDetails.description = this.websiteForm.value.catalogDescription;
      this.catalogItemDetails.price = this.websiteForm.value.catalogPrice;
      this.catalogItemDetails.quantity = this.websiteForm.value.catalogQuantity;
      this.catalogItemDetails.imageUrl = this.websiteForm.value.catalogUrl;
      this.catalogService.updateCatalogItem(this.itemId, this.catalogItemDetails)
        .subscribe(
          (data: any) => {
            if (data == null) {
              this.errorFlag = true;
              this.errorMsg = 'Error Updating Website details' ;
            } else {
              this.router.navigate(['/user', this.userId , 'catalog' ]);
            }
          },
          (error: any) => {
            this.errorFlag = true;
            this.errorMsg = 'Error Updating Website details' ;
          }
        );
    } else {
      this.errorMsg = 'Please Enter The Correct Values';
      this.errorFlag = true ;
    }
  }

  deleteCatalogItem() {
    this.catalogService.deleteCatalogItem(this.itemId)
      .subscribe(
        (data: any) => {
          if (data.success) {
            this.router.navigate(['/user', this.userId , 'catalog' ]);
          } else {
            this.errorFlag = true;
            this.errorMsg = 'Error Deleting Catalog Item' ;
          }
        },
        (error: any) => {
        }
      );
  }


}
