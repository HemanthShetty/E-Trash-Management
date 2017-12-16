webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n</router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        // template: `<router-outlet></router-outlet>`,
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_payment_payment_component__ = __webpack_require__("../../../../../src/app/components/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_collectionpoint_collectionpoint_edit_collectionpoint_edit_component__ = __webpack_require__("../../../../../src/app/components/collectionpoint/collectionpoint-edit/collectionpoint-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_collectionpoint_collectionpoint_new_collectionpoint_new_component__ = __webpack_require__("../../../../../src/app/components/collectionpoint/collectionpoint-new/collectionpoint-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_collectionpoint_collectionpoint_list_collectionpoint_list_component__ = __webpack_require__("../../../../../src/app/components/collectionpoint/collectionpoint-list/collectionpoint-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_cpoint_service_client__ = __webpack_require__("../../../../../src/app/services/cpoint.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_catalog_catalog_list_catalog_list_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog-list/catalog-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_catalog_catalog_new_catalog_new_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog-new/catalog-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_catalog_catalog_edit_catalog_edit_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog-edit/catalog-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_catalog_service_client__ = __webpack_require__("../../../../../src/app/services/catalog.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_sell_sell_component__ = __webpack_require__("../../../../../src/app/components/sell/sell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_googlemaps_service_client__ = __webpack_require__("../../../../../src/app/services/googlemaps.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_dropoff_dropoff_new_dropoff_new_component__ = __webpack_require__("../../../../../src/app/components/dropoff/dropoff-new/dropoff-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_dropoff_service_client__ = __webpack_require__("../../../../../src/app/services/dropoff.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_dropoff_customer_dropoffs_customer_dropoffs_component__ = __webpack_require__("../../../../../src/app/components/dropoff/customer-dropoffs/customer-dropoffs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_dropoff_dropoff_collectionpoint_dropoff_collectionpoint_component__ = __webpack_require__("../../../../../src/app/components/dropoff/dropoff-collectionpoint/dropoff-collectionpoint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_personal_personal_component__ = __webpack_require__("../../../../../src/app/components/personal/personal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_user_create_create_component__ = __webpack_require__("../../../../../src/app/components/user/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_user_edit_edit_component__ = __webpack_require__("../../../../../src/app/components/user/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_user_list_list_component__ = __webpack_require__("../../../../../src/app/components/user/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_dropoff_dropoff_collectionpoint_dropoff_edit_dropoff_edit_component__ = __webpack_require__("../../../../../src/app/components/dropoff/dropoff-collectionpoint/dropoff-edit/dropoff-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_buy_buy_component__ = __webpack_require__("../../../../../src/app/components/buy/buy.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_catalog_catalog_list_catalog_list_component__["a" /* CatalogListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_payment_payment_component__["a" /* PaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_collectionpoint_collectionpoint_edit_collectionpoint_edit_component__["a" /* CollectionpointEditComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_collectionpoint_collectionpoint_new_collectionpoint_new_component__["a" /* CollectionpointNewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_collectionpoint_collectionpoint_list_collectionpoint_list_component__["a" /* CollectionpointListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_catalog_catalog_list_catalog_list_component__["a" /* CatalogListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_catalog_catalog_new_catalog_new_component__["a" /* CatalogNewComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_catalog_catalog_edit_catalog_edit_component__["a" /* CatalogEditComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_sell_sell_component__["a" /* SellComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_dropoff_dropoff_new_dropoff_new_component__["a" /* DropoffNewComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_dropoff_customer_dropoffs_customer_dropoffs_component__["a" /* CustomerDropoffsComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_dropoff_dropoff_collectionpoint_dropoff_collectionpoint_component__["a" /* DropoffCollectionpointComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_personal_personal_component__["a" /* PersonalComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_user_create_create_component__["a" /* CreateComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_user_edit_edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_user_list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_dropoff_dropoff_collectionpoint_dropoff_edit_dropoff_edit_component__["a" /* DropoffEditComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_buy_buy_component__["a" /* BuyComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_14__agm_core__["a" /* AgmCoreModule */].forRoot({ apiKey: 'AIzaSyCMwJEcq8gK7hFL32MqJ91CwQNy1k6z6dw',
                libraries: ["places"]
            })
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_12__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_13__services_shared_service_client__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_18__services_cpoint_service_client__["a" /* CollectionPointService */], __WEBPACK_IMPORTED_MODULE_22__services_catalog_service_client__["a" /* CatalogService */], __WEBPACK_IMPORTED_MODULE_24__services_googlemaps_service_client__["a" /* GoogleMapsService */], __WEBPACK_IMPORTED_MODULE_26__services_dropoff_service_client__["a" /* DropOffService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_collectionpoint_collectionpoint_list_collectionpoint_list_component__ = __webpack_require__("../../../../../src/app/components/collectionpoint/collectionpoint-list/collectionpoint-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_collectionpoint_collectionpoint_new_collectionpoint_new_component__ = __webpack_require__("../../../../../src/app/components/collectionpoint/collectionpoint-new/collectionpoint-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_collectionpoint_collectionpoint_edit_collectionpoint_edit_component__ = __webpack_require__("../../../../../src/app/components/collectionpoint/collectionpoint-edit/collectionpoint-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_catalog_catalog_list_catalog_list_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog-list/catalog-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_catalog_catalog_new_catalog_new_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog-new/catalog-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_catalog_catalog_edit_catalog_edit_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog-edit/catalog-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_sell_sell_component__ = __webpack_require__("../../../../../src/app/components/sell/sell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dropoff_dropoff_new_dropoff_new_component__ = __webpack_require__("../../../../../src/app/components/dropoff/dropoff-new/dropoff-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dropoff_customer_dropoffs_customer_dropoffs_component__ = __webpack_require__("../../../../../src/app/components/dropoff/customer-dropoffs/customer-dropoffs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dropoff_dropoff_collectionpoint_dropoff_collectionpoint_component__ = __webpack_require__("../../../../../src/app/components/dropoff/dropoff-collectionpoint/dropoff-collectionpoint.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_personal_personal_component__ = __webpack_require__("../../../../../src/app/components/personal/personal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_list_list_component__ = __webpack_require__("../../../../../src/app/components/user/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_create_create_component__ = __webpack_require__("../../../../../src/app/components/user/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_user_edit_edit_component__ = __webpack_require__("../../../../../src/app/components/user/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_dropoff_dropoff_collectionpoint_dropoff_edit_dropoff_edit_component__ = __webpack_require__("../../../../../src/app/components/dropoff/dropoff-collectionpoint/dropoff-edit/dropoff-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_buy_buy_component__ = __webpack_require__("../../../../../src/app/components/buy/buy.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/**
 * Created by sesha on 7/26/17.
 */





















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'personal', component: __WEBPACK_IMPORTED_MODULE_15__components_personal_personal_component__["a" /* PersonalComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'buy', component: __WEBPACK_IMPORTED_MODULE_20__components_buy_buy_component__["a" /* BuyComponent */] },
    { path: 'user/:uid/manage/user', component: __WEBPACK_IMPORTED_MODULE_16__components_user_list_list_component__["a" /* ListComponent */] },
    { path: 'user/:uid/manage/user/new', component: __WEBPACK_IMPORTED_MODULE_17__components_user_create_create_component__["a" /* CreateComponent */] },
    { path: 'user/:uid/manage/user/:userId', component: __WEBPACK_IMPORTED_MODULE_18__components_user_edit_edit_component__["a" /* EditComponent */] },
    { path: 'user/:userId/cpoint', component: __WEBPACK_IMPORTED_MODULE_5__components_collectionpoint_collectionpoint_list_collectionpoint_list_component__["a" /* CollectionpointListComponent */] },
    { path: 'user/:uid/dropoff', component: __WEBPACK_IMPORTED_MODULE_13__components_dropoff_customer_dropoffs_customer_dropoffs_component__["a" /* CustomerDropoffsComponent */] },
    { path: 'user/:uid/cpoint/new', component: __WEBPACK_IMPORTED_MODULE_6__components_collectionpoint_collectionpoint_new_collectionpoint_new_component__["a" /* CollectionpointNewComponent */] },
    { path: 'user/:uid/cpoint/:wid', component: __WEBPACK_IMPORTED_MODULE_7__components_collectionpoint_collectionpoint_edit_collectionpoint_edit_component__["a" /* CollectionpointEditComponent */] },
    { path: 'user/:uid/catalog', component: __WEBPACK_IMPORTED_MODULE_8__components_catalog_catalog_list_catalog_list_component__["a" /* CatalogListComponent */] },
    { path: 'user/:uid/catalog/new', component: __WEBPACK_IMPORTED_MODULE_9__components_catalog_catalog_new_catalog_new_component__["a" /* CatalogNewComponent */] },
    { path: 'user/:uid/catalog/:catalogId', component: __WEBPACK_IMPORTED_MODULE_10__components_catalog_catalog_edit_catalog_edit_component__["a" /* CatalogEditComponent */] },
    { path: 'user/:uid/sell', component: __WEBPACK_IMPORTED_MODULE_11__components_sell_sell_component__["a" /* SellComponent */] },
    { path: 'user/:uid/sell/:cid/dropoff/new', component: __WEBPACK_IMPORTED_MODULE_12__components_dropoff_dropoff_new_dropoff_new_component__["a" /* DropoffNewComponent */] },
    { path: 'user/:uid/cpoint/:cid/dropoff', component: __WEBPACK_IMPORTED_MODULE_14__components_dropoff_dropoff_collectionpoint_dropoff_collectionpoint_component__["a" /* DropoffCollectionpointComponent */] },
    { path: 'user/:uid/cpoint/:cid/dropoff/:dropOffId', component: __WEBPACK_IMPORTED_MODULE_19__components_dropoff_dropoff_collectionpoint_dropoff_edit_dropoff_edit_component__["a" /* DropoffEditComponent */] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/buy/buy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/buy/buy.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar-inverse bg-inverse bg-primary\" >\n\n\n  <div class=\" container-fluid topnav\" id=\"myTopnav\">\n    <a class=\"navbar-brand pull-left\" href=\"#\">Home</a>\n    <a class=\"navbar-brand pull-left\" href=\"#\">About Us</a>\n    <a class=\"navbar-brand pull-left\" [routerLink]= \" [ '/buy']\">Buy</a>\n    <a class=\"navbar-brand pull-right\" [routerLink]= \" [ '/login']\">Login</a>\n    <a class=\"navbar-brand pull-right\" [routerLink]= \" [ '/register']\">Register</a>\n  </div>\n</nav>\n\n\n\n<div class =container-fluid style=\"margin-top: 50px\">\n    <div class=\"row-fluid\">\n      <div class=\"span3\"><span class=\"h4 text-primary\">Catalog</span> <p class=\"pull-right\">\n        <a [routerLink]= \" [ '/user' , userId , 'catalog' , 'new']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n      </div>\n    </div>\n    <div class=\"container-fluid\" *ngFor=\"let item of catalog\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-md-4 col-lg-4 col-xs-2\">\n              <img class=\"etm-catalog-image\" src={{item.imageUrl}} alt=\"\" />\n            </div>\n            <div class=\"col-md-8 col-lg-8 col-xs-10\">\n              <a><b>{{item.name}}</b></a>\n              <a [routerLink]= \" [ '/user' , userId , 'catalog' , item._id]\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a><br/>\n              <span>Description:{{item.description}}</span><br/>\n              <span>Price:{{item.price}}</span>\n              <span>Quantity:{{item.quantity}}</span>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  <button type=\"button\" class=\"pull-right btn btn-success btn-lg\" (click)=\"buy()\">NEXT <span class=\"glyphicon glyphicon-arrow-right\"></span></button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/buy/buy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_catalog_service_client__ = __webpack_require__("../../../../../src/app/services/catalog.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuyComponent = (function () {
    function BuyComponent(router, catalogService) {
        this.router = router;
        this.catalogService = catalogService;
        this.catalog = [{}];
    }
    BuyComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('buy hit');
        this.catalogService.getItems()
            .subscribe(function (data) {
            _this.catalog = data;
        }, function (error) {
        });
    };
    BuyComponent.prototype.buy = function () {
        this.router.navigate(['/login']);
    };
    return BuyComponent;
}());
BuyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-buy',
        template: __webpack_require__("../../../../../src/app/components/buy/buy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/buy/buy.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_catalog_service_client__["a" /* CatalogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_catalog_service_client__["a" /* CatalogService */]) === "function" && _b || Object])
], BuyComponent);

var _a, _b;
//# sourceMappingURL=buy.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog-edit/catalog-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog-edit/catalog-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--heading on the nav bar-->\n      <div class=\"col-sm-11 col-md-10 col-lg-10 col-xs-11\">\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'||userIdentity.role=='Employee'||userIdentity.role=='Organization'\">\n        <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user']\">\n        <b>Home</b>\n      </a>\n    </p>\n  <span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'\">\n    <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user' , userId, 'sell']\">\n        <b>Sell</b>\n      </a>\n    </p>\n\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'dropoff']\" >\n            <b>DropOffs</b>\n          </a>\n        </p>\n  </span>\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='Employee'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'cpoint']\" >\n            <b>Collection Points</b>\n          </a>\n        </p>\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'catalog']\" >\n            <b>Catalog</b>\n          </a>\n        </p>\n</span>\n  <span *ngIf=\"userIdentity.role=='Admin'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'manage','user']\" >\n            <b>Manage Users</b>\n          </a>\n        </p>\n</span>\n  <!--tick mark-->\n</span>\n\n\n      </div>\n      <div class=\"col-sm-1 col-md-2 col-lg-2 col-xs-1\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">\n          <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n\n<div class=\"etm-page-body\">\n  <div class=\"container-fluid\">\n    <form #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"catalogName\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"catalogName\" name=\"catalogName\" placeholder=\"Name\" [(ngModel)]=this.catalogItem.name #catalogName=\"ngModel\" required>\n        <span class=\"help-block\"\n              *ngIf=\"!catalogName.valid && catalogName.touched\">\n            Enter a valid name for catalog Item!!\n          </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"catalogDescription\">Description</label>\n        <textarea rows=\"5\" type=\"text\" class=\"form-control\" id=\"catalogDescription\" name=\"catalogDescription\" placeholder=\"Enter the description\" [(ngModel)]=this.catalogItem.description #catalogDescription=\"ngModel\" required></textarea>\n        <span class=\"help-block\"\n              *ngIf=\"!catalogDescription.valid && catalogDescription.touched\">\n            Enter a description!!\n          </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"catalogPrice\">Price</label>\n        <input type=\"text\" class=\"form-control\" id=\"catalogPrice\" name=\"catalogPrice\" placeholder=\"Enter the price\" [(ngModel)]=this.catalogItem.price #catalogPrice=\"ngModel\" required>\n        <span class=\"help-block\"\n              *ngIf=\"!catalogPrice.valid && catalogPrice.touched\">\n            Enter a price!!\n          </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"catalogQuantity\">Quantity</label>\n        <input type=\"text\" class=\"form-control\" id=\"catalogQuantity\" name=\"catalogQuantity\" placeholder=\"Enter the Quantity\" [(ngModel)]=this.catalogItem.quantity #catalogQuantity=\"ngModel\" required>\n        <span class=\"help-block\"\n              *ngIf=\"!catalogQuantity.valid && catalogQuantity.touched\">\n            Enter a quantity!!\n          </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"catalogUrl\">Image Url</label>\n        <input type=\"text\" class=\"form-control\" id=\"catalogUrl\" name=\"catalogUrl\" placeholder=\"Enter the Url\" [(ngModel)]=this.catalogItem.imageUrl #catalogUrl=\"ngModel\" required>\n        <span class=\"help-block\"\n              *ngIf=\"!catalogUrl.valid && catalogUrl.touched\">\n            Enter a url for Catalog Item Image!!\n          </span>\n      </div>\n      <div *ngIf=\"errorFlag\"\n           class=\"alert alert-danger\">\n        {{errorMsg}}\n      </div>\n      <div class=\"form-group\">\n      <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"updateCatalogItem()\">Update</button>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"deleteCatalogItem()\">Delete</button>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog-edit/catalog-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_catalog_service_client__ = __webpack_require__("../../../../../src/app/services/catalog.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_catalog_model_client__ = __webpack_require__("../../../../../src/app/models/catalog.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CatalogEditComponent = (function () {
    function CatalogEditComponent(userService, catalogService, activatedRoute, router, sharedService) {
        this.userService = userService;
        this.catalogService = catalogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
    }
    CatalogEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIdentity = this.sharedService.user;
        this.catalogItem = new __WEBPACK_IMPORTED_MODULE_4__models_catalog_model_client__["a" /* Catalog */]('', '', '', '', 0, '');
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.itemId = params['catalogId'];
        });
        this.catalogService.findItemById(this.itemId)
            .subscribe(function (data) {
            if (data == null) {
                _this.errorFlag = true;
                _this.errorMsg = 'Error Fetching Website details';
            }
            else {
                _this.catalogItem = data;
            }
        }, function (error) {
            _this.errorFlag = true;
            _this.errorMsg = 'Error Fetching Website details';
        });
        this.catalogItemDetails = new __WEBPACK_IMPORTED_MODULE_4__models_catalog_model_client__["a" /* Catalog */]('', '', '', '', 0, '');
    };
    CatalogEditComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    CatalogEditComponent.prototype.updateCatalogItem = function () {
        var _this = this;
        if (this.websiteForm.valid) {
            this.catalogItemDetails.name = this.websiteForm.value.catalogName;
            this.catalogItemDetails.description = this.websiteForm.value.catalogDescription;
            this.catalogItemDetails.price = this.websiteForm.value.catalogPrice;
            this.catalogItemDetails.quantity = this.websiteForm.value.catalogQuantity;
            this.catalogItemDetails.imageUrl = this.websiteForm.value.catalogUrl;
            this.catalogService.updateCatalogItem(this.itemId, this.catalogItemDetails)
                .subscribe(function (data) {
                if (data == null) {
                    _this.errorFlag = true;
                    _this.errorMsg = 'Error Updating Website details';
                }
                else {
                    _this.router.navigate(['/user', _this.userId, 'catalog']);
                }
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMsg = 'Error Updating Website details';
            });
        }
        else {
            this.errorMsg = 'Please Enter The Correct Values';
            this.errorFlag = true;
        }
    };
    CatalogEditComponent.prototype.deleteCatalogItem = function () {
        var _this = this;
        this.catalogService.deleteCatalogItem(this.itemId)
            .subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/user', _this.userId, 'catalog']);
            }
            else {
                _this.errorFlag = true;
                _this.errorMsg = 'Error Deleting Catalog Item';
            }
        }, function (error) {
        });
    };
    return CatalogEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], CatalogEditComponent.prototype, "websiteForm", void 0);
CatalogEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-catalog-edit',
        template: __webpack_require__("../../../../../src/app/components/catalog/catalog-edit/catalog-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/catalog/catalog-edit/catalog-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_catalog_service_client__["a" /* CatalogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_catalog_service_client__["a" /* CatalogService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */]) === "function" && _f || Object])
], CatalogEditComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=catalog-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog-list/catalog-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog-list/catalog-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--heading on the nav bar-->\n      <div class=\"col-sm-11 col-md-10 col-lg-10 col-xs-11\">\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'||userIdentity.role=='Employee'||userIdentity.role=='Organization'\">\n        <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user']\">\n        <b>Home</b>\n      </a>\n    </p>\n  <span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'\">\n    <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user' , userId, 'sell']\">\n        <b>Sell</b>\n      </a>\n    </p>\n\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'dropoff']\" >\n            <b>DropOffs</b>\n          </a>\n        </p>\n  </span>\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='Employee'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'cpoint']\" >\n            <b>Collection Points</b>\n          </a>\n        </p>\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'catalog']\" >\n            <b>Catalog</b>\n          </a>\n        </p>\n</span>\n  <span *ngIf=\"userIdentity.role=='Admin'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'manage','user']\" >\n            <b>Manage Users</b>\n          </a>\n        </p>\n</span>\n  <!--tick mark-->\n</span>\n\n\n      </div>\n      <div class=\"col-sm-1 col-md-2 col-lg-2 col-xs-1\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">\n          <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n\n<div class=\"etm-page-body\">\n  <div class=\"container-fluid\">\n    <div class=\"row-fluid\">\n      <div class=\"span3\"><span class=\"h4 text-primary\">Catalog</span> <p class=\"pull-right\">\n        <a [routerLink]= \" [ '/user' , userId , 'catalog' , 'new']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n      </div>\n    </div>\n    <div class=\"container-fluid\" *ngFor=\"let item of catalog\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-md-4 col-lg-4 col-xs-2\">\n              <img class=\"etm-catalog-image\" src={{item.imageUrl}} alt=\"\" />\n            </div>\n            <div class=\"col-md-8 col-lg-8 col-xs-10\">\n              <a><b>{{item.name}}</b></a>\n              <a [routerLink]= \" [ '/user' , userId , 'catalog' , item._id]\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a><br/>\n              <span>Description:{{item.description}}</span><br/>\n              <span>Price:{{item.price}}</span>\n              <span>Quantity:{{item.quantity}}</span>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog-list/catalog-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_catalog_service_client__ = __webpack_require__("../../../../../src/app/services/catalog.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CatalogListComponent = (function () {
    function CatalogListComponent(router, userService, catalogService, activatedRoute, sharedService) {
        this.router = router;
        this.userService = userService;
        this.catalogService = catalogService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.catalog = [{}];
    }
    CatalogListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIdentity = this.sharedService.user;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.catalogService.getItems()
            .subscribe(function (data) {
            _this.catalog = data;
        }, function (error) {
        });
    };
    CatalogListComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    return CatalogListComponent;
}());
CatalogListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-catalog-list',
        template: __webpack_require__("../../../../../src/app/components/catalog/catalog-list/catalog-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/catalog/catalog-list/catalog-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_catalog_service_client__["a" /* CatalogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_catalog_service_client__["a" /* CatalogService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _e || Object])
], CatalogListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=catalog-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog-new/catalog-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog-new/catalog-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--heading on the nav bar-->\n      <div class=\"col-sm-11 col-md-10 col-lg-10 col-xs-11\">\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'||userIdentity.role=='Employee'||userIdentity.role=='Organization'\">\n        <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user']\">\n        <b>Home</b>\n      </a>\n    </p>\n  <span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'\">\n    <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user' , userId, 'sell']\">\n        <b>Sell</b>\n      </a>\n    </p>\n\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'dropoff']\" >\n            <b>DropOffs</b>\n          </a>\n        </p>\n  </span>\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='Employee'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'cpoint']\" >\n            <b>Collection Points</b>\n          </a>\n        </p>\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'catalog']\" >\n            <b>Catalog</b>\n          </a>\n        </p>\n</span>\n  <span *ngIf=\"userIdentity.role=='Admin'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'manage','user']\" >\n            <b>Manage Users</b>\n          </a>\n        </p>\n</span>\n  <!--tick mark-->\n</span>\n\n\n      </div>\n      <div class=\"col-sm-1 col-md-2 col-lg-2 col-xs-1\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">\n          <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n\n<div class=\"etm-page-body\">\n  <div class=\"container-fluid\">\n    <form #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"catalogName\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"catalogName\" name=\"catalogName\" placeholder=\"Name\" ngModel=\"\" #catalogName=\"ngModel\" required>\n        <span class=\"help-block\"\n              *ngIf=\"!catalogName.valid && catalogName.touched\">\n            Enter a valid name for catalog Item!!\n          </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"catalogDescription\">Description</label>\n        <textarea rows=\"5\" type=\"text\" class=\"form-control\" id=\"catalogDescription\" name=\"catalogDescription\" placeholder=\"Enter the description\" ngModel=\"\" #catalogDescription=\"ngModel\" required></textarea>\n        <span class=\"help-block\"\n              *ngIf=\"!catalogDescription.valid && catalogDescription.touched\">\n            Enter a description!!\n          </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"catalogPrice\">Price</label>\n        <input type=\"text\" class=\"form-control\" id=\"catalogPrice\" name=\"catalogPrice\" placeholder=\"Enter the price\" ngModel=\"\" #catalogPrice=\"ngModel\" required>\n        <span class=\"help-block\"\n              *ngIf=\"!catalogPrice.valid && catalogPrice.touched\">\n            Enter a price!!\n          </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"catalogQuantity\">Quantity</label>\n        <input type=\"text\" class=\"form-control\" id=\"catalogQuantity\" name=\"catalogQuantity\" placeholder=\"Enter the Quantity\" ngModel=\"\" #catalogQuantity=\"ngModel\" required>\n        <span class=\"help-block\"\n              *ngIf=\"!catalogQuantity.valid && catalogQuantity.touched\">\n            Enter a quantity!!\n          </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"catalogUrl\">Image Url</label>\n        <input type=\"text\" class=\"form-control\" id=\"catalogUrl\" name=\"catalogUrl\" placeholder=\"Enter the Url\" ngModel=\"\" #catalogUrl=\"ngModel\" required>\n        <span class=\"help-block\"\n              *ngIf=\"!catalogUrl.valid && catalogUrl.touched\">\n            Enter a url for Catalog Item Image!!\n          </span>\n      </div>\n      <div *ngIf=\"errorFlag\"\n           class=\"alert alert-danger\">\n        {{errorMsg}}\n      </div>\n      <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"createCatalogItem()\">OK <span class=\"glyphicon glyphicon-ok\"></span></button>\n    </form>\n  </div>\n</div>\n\n\n\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog-new/catalog-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_catalog_service_client__ = __webpack_require__("../../../../../src/app/services/catalog.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_catalog_model_client__ = __webpack_require__("../../../../../src/app/models/catalog.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CatalogNewComponent = (function () {
    function CatalogNewComponent(userService, catalogService, activatedRoute, router, sharedService) {
        this.userService = userService;
        this.catalogService = catalogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
    }
    CatalogNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIdentity = this.sharedService.user;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.cDetails = new __WEBPACK_IMPORTED_MODULE_4__models_catalog_model_client__["a" /* Catalog */]('', '', '', '', 0, '');
    };
    CatalogNewComponent.prototype.createCatalogItem = function () {
        var _this = this;
        if (this.websiteForm.valid) {
            this.cDetails.name = this.websiteForm.value.catalogName;
            this.cDetails.description = this.websiteForm.value.catalogDescription;
            this.cDetails.price = this.websiteForm.value.catalogPrice;
            this.cDetails.quantity = this.websiteForm.value.catalogQuantity;
            this.cDetails.imageUrl = this.websiteForm.value.catalogUrl;
            delete this.cDetails._id;
            this.catalogService.createCatalogItem(this.cDetails)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'catalog']);
            }, function (error) {
                _this.errorMsg = 'Please Enter The Correct Values';
                _this.errorFlag = true;
            });
        }
        else {
            this.errorMsg = 'Please Enter The Correct Values';
            this.errorFlag = true;
        }
    };
    CatalogNewComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    return CatalogNewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], CatalogNewComponent.prototype, "websiteForm", void 0);
CatalogNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-catalog-new',
        template: __webpack_require__("../../../../../src/app/components/catalog/catalog-new/catalog-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/catalog/catalog-new/catalog-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_catalog_service_client__["a" /* CatalogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_catalog_service_client__["a" /* CatalogService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */]) === "function" && _f || Object])
], CatalogNewComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=catalog-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/collectionpoint/collectionpoint-edit/collectionpoint-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/collectionpoint/collectionpoint-edit/collectionpoint-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  collectionpoint-edit works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/collectionpoint/collectionpoint-edit/collectionpoint-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionpointEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CollectionpointEditComponent = (function () {
    function CollectionpointEditComponent() {
    }
    CollectionpointEditComponent.prototype.ngOnInit = function () {
    };
    return CollectionpointEditComponent;
}());
CollectionpointEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-collectionpoint-edit',
        template: __webpack_require__("../../../../../src/app/components/collectionpoint/collectionpoint-edit/collectionpoint-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/collectionpoint/collectionpoint-edit/collectionpoint-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CollectionpointEditComponent);

//# sourceMappingURL=collectionpoint-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/collectionpoint/collectionpoint-list/collectionpoint-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/collectionpoint/collectionpoint-list/collectionpoint-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--heading on the nav bar-->\n      <div class=\"col-sm-11 col-md-10 col-lg-10 col-xs-11\">\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'||userIdentity.role=='Employee'||userIdentity.role=='Organization'\">\n        <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user']\">\n        <b>Home</b>\n      </a>\n    </p>\n  <span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'\">\n    <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user' , userId, 'sell']\">\n        <b>Sell</b>\n      </a>\n    </p>\n\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'dropoff']\" >\n            <b>DropOffs</b>\n          </a>\n        </p>\n  </span>\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='Employee'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'cpoint']\" >\n            <b>Collection Points</b>\n          </a>\n        </p>\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'catalog']\" >\n            <b>Catalog</b>\n          </a>\n        </p>\n</span>\n  <span *ngIf=\"userIdentity.role=='Admin'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'manage','user']\" >\n            <b>Manage Users</b>\n          </a>\n        </p>\n</span>\n  <!--tick mark-->\n</span>\n\n\n      </div>\n      <div class=\"col-sm-1 col-md-2 col-lg-2 col-xs-1\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">\n          <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n<!--\n<div class=\"container-fluid\">\n  <div class=\"container-fluid\">\n  <h3>Collection Points</h3>\n  <p class=\"pull-right\">\n    <a [routerLink]= \" [ '/user' , userId , 'cpoint' , 'new']\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n  </p>\n  </div>\n  <div class=\"container-fluid\" *ngFor=\"let cpoint of collectionPoints\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"><a [routerLink]= \" [ '/user' , userId , 'cpoint' , cpoint._id ,'details']\"><b>{{cpoint.name}}</b></a>\n        <a [routerLink]= \" [ '/user' , userId , 'cpoint' , cpoint._id ]\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n-->\n\n<div class=\"etm-page-body\">\n<div class=\"container-fluid\">\n  <div class=\"row-fluid\">\n    <div class=\"span3\"><span class=\"h4 text-primary\">Collection Points</span> <p class=\"pull-right\">\n      <a [routerLink]= \" [ '/user' , userId , 'cpoint' , 'new']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n    </div>\n  </div>\n  <div class=\"container-fluid\" *ngFor=\"let cpoint of collectionPoints\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"><a [routerLink]= \" [ '/user' , userId , 'cpoint' , cpoint._id ,'dropoff']\"><b>{{cpoint.name}}</b></a>\n        <a (click)=\"delete(cpoint._id)\"> <span class=\"pull-right glyphicon glyphicon-trash\"></span></a>\n      </li>\n    </ul>\n  </div>\n</div>\n</div>\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/collectionpoint/collectionpoint-list/collectionpoint-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cpoint_service_client__ = __webpack_require__("../../../../../src/app/services/cpoint.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionpointListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CollectionpointListComponent = (function () {
    function CollectionpointListComponent(router, userService, collectionPointService, activatedRoute, sharedService) {
        this.router = router;
        this.userService = userService;
        this.collectionPointService = collectionPointService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.collectionPoints = [{}];
    }
    CollectionpointListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIdentity = this.sharedService.user;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.collectionPointService.findCollectionPoints()
            .subscribe(function (data) {
            _this.collectionPoints = data;
        }, function (error) {
        });
    };
    CollectionpointListComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    CollectionpointListComponent.prototype.delete = function (cPointId) {
        var _this = this;
        this.collectionPointService.deleteCollectionPoint(cPointId)
            .subscribe(function (data) {
            if (data.success) {
                for (var i = 0; i < _this.collectionPoints.length; i++) {
                    if (_this.collectionPoints[i]['_id'] == cPointId) {
                        _this.collectionPoints.splice(i, 1);
                    }
                }
            }
            else {
                alert('Error deleting the collection point');
            }
        }, function (error) {
        });
    };
    return CollectionpointListComponent;
}());
CollectionpointListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-collectionpoint-list',
        template: __webpack_require__("../../../../../src/app/components/collectionpoint/collectionpoint-list/collectionpoint-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/collectionpoint/collectionpoint-list/collectionpoint-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_cpoint_service_client__["a" /* CollectionPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cpoint_service_client__["a" /* CollectionPointService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _e || Object])
], CollectionpointListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=collectionpoint-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/collectionpoint/collectionpoint-new/collectionpoint-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/collectionpoint/collectionpoint-new/collectionpoint-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--heading on the nav bar-->\n      <div class=\"col-sm-11 col-md-10 col-lg-10 col-xs-11\">\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'||userIdentity.role=='Employee'||userIdentity.role=='Organization'\">\n        <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user']\">\n        <b>Home</b>\n      </a>\n    </p>\n  <span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'\">\n    <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user' , userId, 'sell']\">\n        <b>Sell</b>\n      </a>\n    </p>\n\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'dropoff']\" >\n            <b>DropOffs</b>\n          </a>\n        </p>\n  </span>\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='Employee'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'cpoint']\" >\n            <b>Collection Points</b>\n          </a>\n        </p>\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'catalog']\" >\n            <b>Catalog</b>\n          </a>\n        </p>\n</span>\n  <span *ngIf=\"userIdentity.role=='Admin'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'manage','user']\" >\n            <b>Manage Users</b>\n          </a>\n        </p>\n</span>\n  <!--tick mark-->\n</span>\n\n\n      </div>\n      <div class=\"col-sm-1 col-md-2 col-lg-2 col-xs-1\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">\n          <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n\n<div class=\"etm-page-body\">\n<div class=\"container-fluid\">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"cPointName\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"cPointName\" name=\"cPointName\" placeholder=\"Name\" ngModel=\"\" #cPointName=\"ngModel\" required>\n      <span class=\"help-block\"\n            *ngIf=\"!cPointName.valid && cPointName.touched\">\n            Enter a valid collection point name!!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"cPointStreet\">Street</label>\n      <input type=\"text\" class=\"form-control\" id=\"cPointStreet\" name=\"cPointStreet\" placeholder=\"Enter the street\" ngModel=\"\" #cPointStreet=\"ngModel\" required>\n      <span class=\"help-block\"\n            *ngIf=\"!cPointStreet.valid && cPointStreet.touched\">\n            Enter a street address!!\n          </span>\n    </div>\n    <div class=\"form-group\">\n    <label for=\"cPointCity\">City</label>\n    <input type=\"text\" class=\"form-control\" id=\"cPointCity\" name=\"cPointCity\" placeholder=\"Enter the city\" ngModel=\"\" #cPointCity=\"ngModel\" required>\n    <span class=\"help-block\"\n          *ngIf=\"!cPointCity.valid && cPointCity.touched\">\n            Enter a city name!!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"cPointState\">State</label>\n      <input type=\"text\" class=\"form-control\" id=\"cPointState\" name=\"cPointState\" placeholder=\"Enter the State\" ngModel=\"\" #cPointState=\"ngModel\" required>\n      <span class=\"help-block\"\n            *ngIf=\"!cPointState.valid && cPointState.touched\">\n            Enter a State name!!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"cPointPostCode\">PostCode</label>\n      <input type=\"text\" class=\"form-control\" id=\"cPointPostCode\" name=\"cPointPostCode\" placeholder=\"Enter the PostCode\" ngModel=\"\" #cPointPostCode=\"ngModel\" required>\n      <span class=\"help-block\"\n            *ngIf=\"!cPointPostCode.valid && cPointPostCode.touched\">\n            Enter a PostCode!!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"cPointCountry\">Country</label>\n      <input type=\"text\" class=\"form-control\" id=\"cPointCountry\" name=\"cPointCountry\" placeholder=\"Enter the Country\" ngModel=\"\" #cPointCountry=\"ngModel\" required>\n      <span class=\"help-block\"\n            *ngIf=\"!cPointCountry.valid && cPointCountry.touched\">\n            Enter a Country!!\n          </span>\n    </div>\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"createCollectionPoint()\">OK <span class=\"glyphicon glyphicon-ok\"></span></button>\n  </form>\n</div>\n</div>\n\n\n\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/collectionpoint/collectionpoint-new/collectionpoint-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cpoint_service_client__ = __webpack_require__("../../../../../src/app/services/cpoint.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_cpoint_model_client__ = __webpack_require__("../../../../../src/app/models/cpoint.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionpointNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CollectionpointNewComponent = (function () {
    function CollectionpointNewComponent(userService, collectionPointService, activatedRoute, router, sharedService) {
        this.userService = userService;
        this.collectionPointService = collectionPointService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
    }
    CollectionpointNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIdentity = this.sharedService.user;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.cDetails = new __WEBPACK_IMPORTED_MODULE_4__models_cpoint_model_client__["a" /* CollectionPoint */]('', '', '', '', '', '', '');
    };
    CollectionpointNewComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    CollectionpointNewComponent.prototype.createCollectionPoint = function () {
        var _this = this;
        if (this.websiteForm.valid) {
            this.cDetails.name = this.websiteForm.value.cPointName;
            this.cDetails.street = this.websiteForm.value.cPointStreet;
            this.cDetails.city = this.websiteForm.value.cPointCity;
            this.cDetails.state = this.websiteForm.value.cPointState;
            this.cDetails.postCode = this.websiteForm.value.cPointPostCode;
            this.cDetails.country = this.websiteForm.value.cPointCountry;
            delete this.cDetails._id;
            this.collectionPointService.createCollectionPoint(this.cDetails)
                .subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'cpoint']);
            }, function (error) {
                _this.errorMsg = 'Please Enter The Correct Values';
                _this.errorFlag = true;
            });
        }
        else {
            this.errorMsg = 'Please Enter The Correct Values';
            this.errorFlag = true;
        }
    };
    return CollectionpointNewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], CollectionpointNewComponent.prototype, "websiteForm", void 0);
CollectionpointNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-collectionpoint-new',
        template: __webpack_require__("../../../../../src/app/components/collectionpoint/collectionpoint-new/collectionpoint-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/collectionpoint/collectionpoint-new/collectionpoint-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_cpoint_service_client__["a" /* CollectionPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_cpoint_service_client__["a" /* CollectionPointService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */]) === "function" && _f || Object])
], CollectionpointNewComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=collectionpoint-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dropoff/customer-dropoffs/customer-dropoffs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dropoff/customer-dropoffs/customer-dropoffs.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--heading on the nav bar-->\n      <div class=\"col-sm-11 col-md-10 col-lg-10 col-xs-12\">\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'||userIdentity.role=='Employee'||userIdentity.role=='Organization'\">\n        <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user']\">\n        <b>Home</b>\n      </a>\n    </p>\n  <span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'\">\n    <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user' , userId, 'sell']\">\n        <b>Sell</b>\n      </a>\n    </p>\n\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'dropoff']\" >\n            <b>DropOffs</b>\n          </a>\n        </p>\n  </span>\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='Employee'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'cpoint']\" >\n            <b>Collection Points</b>\n          </a>\n        </p>\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'catalog']\" >\n            <b>Catalog</b>\n          </a>\n        </p>\n</span>\n  <span *ngIf=\"userIdentity.role=='Admin'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'manage','user']\" >\n            <b>Manage Users</b>\n          </a>\n        </p>\n</span>\n  <!--tick mark-->\n</span>\n\n\n      </div>\n      <div class=\"col-sm-1 col-md-2 col-lg-2 col-xs-1\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">\n          <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n<div class=\"etm-page-body\">\n  <div class=\"container-fluid\">\n    <div class=\"row-fluid\">\n      <div class=\"span3\"><span class=\"h4 text-primary\">My DropOffs</span> <p class=\"pull-right\">\n      </p>\n      </div>\n    </div>\n    <div class=\"container-fluid\" *ngFor=\"let dropOff of dropOffs\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <b> ID : {{dropOff._id}}</b>\n          <div class=\"container-fluid\" *ngFor=\"let inventoryItem of dropOff.inventory\">\n            <div *ngIf=\"inventoryItem.quantity>0\">\n            <p><label> <u>{{inventoryItem.itemName}}</u> </label></p>\n            <p><label> Quantity:{{inventoryItem.quantity}} </label></p>\n            </div>\n          </div>\n          <b> Status : {{dropOff.status}}</b>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dropoff/customer-dropoffs/customer-dropoffs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dropoff_service_client__ = __webpack_require__("../../../../../src/app/services/dropoff.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerDropoffsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerDropoffsComponent = (function () {
    function CustomerDropoffsComponent(route, router, dropOffService, sharedService, userService) {
        this.route = route;
        this.router = router;
        this.dropOffService = dropOffService;
        this.sharedService = sharedService;
        this.userService = userService;
    }
    CustomerDropoffsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIdentity = this.sharedService.user;
        this.route.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.dropOffService.findDropOffsForUser(_this.userId).subscribe(function (data) {
                if (data) {
                    _this.dropOffs = data;
                }
            }, function (error) {
            });
        });
    };
    CustomerDropoffsComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    return CustomerDropoffsComponent;
}());
CustomerDropoffsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-customer-dropoffs',
        template: __webpack_require__("../../../../../src/app/components/dropoff/customer-dropoffs/customer-dropoffs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dropoff/customer-dropoffs/customer-dropoffs.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_dropoff_service_client__["a" /* DropOffService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dropoff_service_client__["a" /* DropOffService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _e || Object])
], CustomerDropoffsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=customer-dropoffs.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dropoff/dropoff-collectionpoint/dropoff-collectionpoint.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dropoff/dropoff-collectionpoint/dropoff-collectionpoint.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--heading on the nav bar-->\n      <div class=\"col-sm-11 col-md-10 col-lg-10 col-xs-11\">\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'||userIdentity.role=='Employee'||userIdentity.role=='Organization'\">\n        <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user']\">\n        <b>Home</b>\n      </a>\n    </p>\n  <span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'\">\n    <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user' , userId, 'sell']\">\n        <b>Sell</b>\n      </a>\n    </p>\n\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'dropoff']\" >\n            <b>DropOffs</b>\n          </a>\n        </p>\n  </span>\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='Employee'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'cpoint']\" >\n            <b>Collection Points</b>\n          </a>\n        </p>\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'catalog']\" >\n            <b>Catalog</b>\n          </a>\n        </p>\n</span>\n  <span *ngIf=\"userIdentity.role=='Admin'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'manage','user']\" >\n            <b>Manage Users</b>\n          </a>\n        </p>\n</span>\n  <!--tick mark-->\n</span>\n\n\n      </div>\n      <div class=\"col-sm-1 col-md-2 col-lg-2 col-xs-1\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">\n          <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n<div class=\"etm-page-body\">\n  <div class=\"container-fluid\">\n    <div class=\"row-fluid\">\n      <div class=\"span3\"><span class=\"h4 text-primary\">Customer Drop Offs At This Location</span> <p class=\"pull-right\">\n      </p>\n      </div>\n    </div>\n    <table class=\"table\">\n      <thead>\n      <tr>\n        <th>ID</th>\n        <th>Customer ID</th>\n        <th>Status</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let dropOff of dropOffs\">\n        <td>{{dropOff._id}}</td>\n        <td>{{dropOff.customerId}}</td>\n        <td>\n          <span *ngIf=\"dropOff.status=='Uncollected'\">\n            <label class=\"label label-warning\">{{dropOff.status}}</label>\n          </span>\n          <span *ngIf=\"dropOff.status=='Collected'\">\n            <label class=\"label label-success\">{{dropOff.status}}</label>\n          </span>\n          <a [routerLink]= \" ['/user' , userId , 'cpoint' , collectionPointId,'dropoff',dropOff._id]\">\n            <span class=\"pull-right glyphicon glyphicon-edit\">\n            </span>\n          </a>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/dropoff/dropoff-collectionpoint/dropoff-collectionpoint.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_dropoff_service_client__ = __webpack_require__("../../../../../src/app/services/dropoff.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropoffCollectionpointComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DropoffCollectionpointComponent = (function () {
    function DropoffCollectionpointComponent(router, userService, dropOffPointService, activatedRoute, sharedService) {
        this.router = router;
        this.userService = userService;
        this.dropOffPointService = dropOffPointService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.dropOffs = [{}];
    }
    DropoffCollectionpointComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIdentity = this.sharedService.user;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.collectionPointId = params['cid'];
        });
        this.dropOffPointService.findDropOffs(this.collectionPointId)
            .subscribe(function (data) {
            _this.dropOffs = data;
        }, function (error) {
        });
    };
    DropoffCollectionpointComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    return DropoffCollectionpointComponent;
}());
DropoffCollectionpointComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-dropoff-collectionpoint',
        template: __webpack_require__("../../../../../src/app/components/dropoff/dropoff-collectionpoint/dropoff-collectionpoint.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dropoff/dropoff-collectionpoint/dropoff-collectionpoint.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_dropoff_service_client__["a" /* DropOffService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_dropoff_service_client__["a" /* DropOffService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _e || Object])
], DropoffCollectionpointComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=dropoff-collectionpoint.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dropoff/dropoff-collectionpoint/dropoff-edit/dropoff-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dropoff/dropoff-collectionpoint/dropoff-edit/dropoff-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--heading on the nav bar-->\n      <div class=\"col-sm-11 col-md-10 col-lg-10 col-xs-11\">\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'||userIdentity.role=='Employee'||userIdentity.role=='Organization'\">\n        <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user']\">\n        <b>Home</b>\n      </a>\n    </p>\n  <span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'\">\n    <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user' , userId, 'sell']\">\n        <b>Sell</b>\n      </a>\n    </p>\n\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'dropoff']\" >\n            <b>DropOffs</b>\n          </a>\n        </p>\n  </span>\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='Employee'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'cpoint']\" >\n            <b>Collection Points</b>\n          </a>\n        </p>\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'catalog']\" >\n            <b>Catalog</b>\n          </a>\n        </p>\n</span>\n  <span *ngIf=\"userIdentity.role=='Admin'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'manage','user']\" >\n            <b>Manage Users</b>\n          </a>\n        </p>\n</span>\n  <!--tick mark-->\n</span>\n\n\n      </div>\n      <div class=\"col-sm-1 col-md-2 col-lg-2 col-xs-1\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">\n          <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n\n<div class=\"container-fluid\">\n  <div class=\"panel panel-primary\" style=\"margin:50px;\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Edit Customer DropOff Status</h3>\n    </div>\n    <div class=\"panel-body\">\n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <h3>{{customerName}}</h3>\n        </div>\n\n        <div class=\"container-fluid\" *ngFor=\"let inventoryItem of dropOff.inventory\">\n          <label>{{inventoryItem.itemName}}</label>\n          <div class=\"form-group\">\n            <label for={{inventoryItem.itemId}}>Quantity</label>\n            <input type=\"number\" name={{inventoryItem.itemId}} class=\"form-control\" id={{inventoryItem.itemId}} [(ngModel)]=\"inventoryItem.quantity\" #{{inventoryItem.itemId}}=\"ngModel\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Status</label>\n          <select id=\"status\" name=\"status\" [(ngModel)]=dropOff.status>\n            <option *ngFor=\"let status of statuses\" [ngValue]=\"status\" >{{status}}</option>\n          </select>\n        </div>\n\n\n        <div *ngIf=\"isInvalid\"\n             class=\"alert alert-danger\">\n          {{notificationMessage}}\n        </div>\n\n        <div class=\"form-group\">\n          <a class=\"btn btn-primary btn-block\"\n             (click)=\"editDropOff()\">Approve DropOff</a>\n        </div>\n        <div class=\"form-group\">\n          <a class=\"btn btn-danger btn-block\"\n             (click)=\"deleteDropOff()\" >Delete</a>\n        </div>\n\n      </form>\n    </div>\n\n\n  </div>\n</div>\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/dropoff/dropoff-collectionpoint/dropoff-edit/dropoff-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_dropOff_model_client__ = __webpack_require__("../../../../../src/app/models/dropOff.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_dropoff_service_client__ = __webpack_require__("../../../../../src/app/services/dropoff.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropoffEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DropoffEditComponent = (function () {
    function DropoffEditComponent(route, userService, router, dropOffService, sharedService) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.dropOffService = dropOffService;
        this.sharedService = sharedService;
        this.dropOff = new __WEBPACK_IMPORTED_MODULE_0__models_dropOff_model_client__["a" /* DropOff */]('', '', '', [], '');
        this.statuses = ['Uncollected', 'Collected'];
    }
    DropoffEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIdentity = this.sharedService.user;
        this.route.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.route.params
            .subscribe(function (params) {
            _this.dropId = params['dropOffId'];
            _this.dropOffService.getDropOff(_this.dropId).subscribe(function (data) {
                if (data) {
                    _this.dropOff = data;
                    _this.userService.findUserById(_this.dropOff.customerId).subscribe(function (data) {
                        if (data) {
                            _this.customer = data;
                        }
                    }, function (error) {
                    });
                }
            }, function (error) {
            });
        });
        this.route.params
            .subscribe(function (params) {
            _this.cId = params['cid'];
        });
    };
    DropoffEditComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    DropoffEditComponent.prototype.editDropOff = function () {
        var _this = this;
        if (this.profileForm.valid) {
            this.dropOff.status = this.profileForm.value.status;
            this.dropOffService.updateDropOff(this.cId, this.dropOff, this.dropId).subscribe(function (data) {
                if (data) {
                    _this.router.navigate(['/user', _this.userId, 'cpoint', _this.cId, 'dropoff']);
                }
            }, function (error) {
            });
        }
        else {
        }
    };
    return DropoffEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], DropoffEditComponent.prototype, "profileForm", void 0);
DropoffEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({
        selector: 'app-dropoff-edit',
        template: __webpack_require__("../../../../../src/app/components/dropoff/dropoff-collectionpoint/dropoff-edit/dropoff-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dropoff/dropoff-collectionpoint/dropoff-edit/dropoff-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_dropoff_service_client__["a" /* DropOffService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_dropoff_service_client__["a" /* DropOffService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_shared_service_client__["a" /* SharedService */]) === "function" && _f || Object])
], DropoffEditComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=dropoff-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dropoff/dropoff-new/dropoff-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dropoff/dropoff-new/dropoff-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--heading on the nav bar-->\n      <div class=\"col-sm-11 col-md-10 col-lg-10 col-xs-11\">\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'||userIdentity.role=='Employee'||userIdentity.role=='Organization'\">\n        <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user']\">\n        <b>Home</b>\n      </a>\n    </p>\n  <span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'\">\n    <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user' , userId, 'sell']\">\n        <b>Sell</b>\n      </a>\n    </p>\n\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'dropoff']\" >\n            <b>DropOffs</b>\n          </a>\n        </p>\n  </span>\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='Employee'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'cpoint']\" >\n            <b>Collection Points</b>\n          </a>\n        </p>\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'catalog']\" >\n            <b>Catalog</b>\n          </a>\n        </p>\n</span>\n  <span *ngIf=\"userIdentity.role=='Admin'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'manage','user']\" >\n            <b>Manage Users</b>\n          </a>\n        </p>\n</span>\n  <!--tick mark-->\n</span>\n\n\n      </div>\n      <div class=\"col-sm-1 col-md-2 col-lg-2 col-xs-1\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">\n          <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n\n<div class=\"container-fluid\">\n<div class=\"etm-page-body\">\n    <div class=\"row-fluid\">\n      <div class=\"span3\"><h4 class=\"text-primary\">Select The Items You Want To Drop Off</h4><br/>\n      </div>\n    </div>\n    <div class=\"container-fluid\" *ngFor=\"let item of catalog\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <div class=\"row\">\n            <div class=\"col-md-4 col-lg-4 col-xs-2\">\n              <img class=\"etm-catalog-image\" src={{item.imageUrl}} alt=\"\" />\n            </div>\n            <div class=\"col-md-8 col-lg-8 col-xs-10\">\n              <a><b>{{item.name}}</b></a>\n              <span>Description:{{item.description}}</span><br/>\n              <span>Estimated Price:{{item.price}}</span>\n              <input type=\"number\" name=\"quantity\" min=\"0\" (input)=\"item.quantity = $event.target.value\">\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n    <div class=\"container-fluid\">\n    <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"createDropOff()\">OK <span class=\"glyphicon glyphicon-ok\"></span></button>\n    <div *ngIf=\"sFlag\"\n         class=\"alert alert-success\">\n      {{sMsg}}\n    </div>\n    </div>\n  </div>\n</div>\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dropoff/dropoff-new/dropoff-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_catalog_service_client__ = __webpack_require__("../../../../../src/app/services/catalog.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_dropOff_model_client__ = __webpack_require__("../../../../../src/app/models/dropOff.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_inventory_model_client__ = __webpack_require__("../../../../../src/app/models/inventory.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_dropoff_service_client__ = __webpack_require__("../../../../../src/app/services/dropoff.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropoffNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DropoffNewComponent = (function () {
    function DropoffNewComponent(router, userService, catalogService, activatedRoute, dropOffService, sharedService) {
        this.router = router;
        this.userService = userService;
        this.catalogService = catalogService;
        this.activatedRoute = activatedRoute;
        this.dropOffService = dropOffService;
        this.sharedService = sharedService;
        this.catalog = [{}];
        this.sFlag = false;
        this.sMsg = "";
    }
    DropoffNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIdentity = this.sharedService.user;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.collectionPointId = params['cid'];
        });
        this.catalogService.getItems()
            .subscribe(function (data) {
            _this.catalog = data;
            for (var i = 0; i < _this.catalog.length; i++) {
                _this.catalog[i]['quantity'] = 0;
            }
        }, function (error) {
        });
    };
    DropoffNewComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    DropoffNewComponent.prototype.createDropOff = function () {
        var _this = this;
        this.inventory = new Array();
        for (var i = 0; i < this.catalog.length; i++) {
            this.inventory[i] = new __WEBPACK_IMPORTED_MODULE_4__models_inventory_model_client__["a" /* Inventory */](this.catalog[i]['_id'], this.catalog[i]['quantity'], this.catalog[i]['name']);
        }
        this.dropOffs = new __WEBPACK_IMPORTED_MODULE_3__models_dropOff_model_client__["a" /* DropOff */]('', this.userId, this.collectionPointId, this.inventory, 'Uncollected');
        delete this.dropOffs._id;
        this.dropOffService.createDropOff(this.dropOffs, this.userId).subscribe(function (data) {
            _this.sFlag = true;
            _this.sMsg = "Your Drop Off Has Been SuccessFully Created";
        }, function (error) {
        });
    };
    return DropoffNewComponent;
}());
DropoffNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-dropoff-new',
        template: __webpack_require__("../../../../../src/app/components/dropoff/dropoff-new/dropoff-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dropoff/dropoff-new/dropoff-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_catalog_service_client__["a" /* CatalogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_catalog_service_client__["a" /* CatalogService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_dropoff_service_client__["a" /* DropOffService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_dropoff_service_client__["a" /* DropOffService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_shared_service_client__["a" /* SharedService */]) === "function" && _f || Object])
], DropoffNewComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=dropoff-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar-inverse bg-inverse bg-primary\" >\n\n\n  <div class=\" container-fluid topnav\" id=\"myTopnav\">\n    <a class=\"navbar-brand pull-left\" href=\"#\">Home</a>\n    <a class=\"navbar-brand pull-left\" href=\"#\">About Us</a>\n    <a class=\"navbar-brand pull-left\" [routerLink]= \" [ '/buy']\">Buy</a>\n    <a class=\"navbar-brand pull-right\" [routerLink]= \" [ '/login']\">Login</a>\n    <a class=\"navbar-brand pull-right\" [routerLink]= \" [ '/register']\">Register</a>\n  </div>\n</nav>\n<div class =container-fluid style=\"margin-top: 50px\">\n  <img src=\"http://ewastecleanup.com/wp-content/uploads/2015/09/Electronic-waste-disposal-los-angeles-Ca.jpg\">\n  <H2>At E‐Trash Management, we provide a full suite of asset management platform to the Users to manage buy or sell their electronic waste rather than dumping it in trash.</H2>\n  <H4>E‐Trash Management  can be a complex challenge, sometimes requiring multiple vendors to handle shipping, packaging, storage, inventory, data destruction, logistics, disposal and recycling.\n    If not done properly, you and your company could face serious penalties for improper disposal as well as extreme data security risks.\n    We can help you eliminate that risk!</H4>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/payment/payment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/payment/payment.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  payment works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/payment/payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentComponent = (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-payment',
        template: __webpack_require__("../../../../../src/app/components/payment/payment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/payment/payment.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PaymentComponent);

//# sourceMappingURL=payment.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/personal/personal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbody {\n  font-family: 'Lato', arial, sans-serif;\n  color: #434343;\n  background: #DAE3E7;\n  font-size: 16px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 700;\n  color: #778492;\n}\na {\n  color: #3AAA64;\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -ms-transition: all 0.4s ease-in-out;\n  -o-transition: all 0.4s ease-in-out;\n}\na:hover {\n  text-decoration: underline;\n  color: #5f6b77;\n  color: #2d844e;\n}\na:focus {\n  text-decoration: none;\n}\n.btn,\na.btn {\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -ms-transition: all 0.4s ease-in-out;\n  -o-transition: all 0.4s ease-in-out;\n  font-family: 'Montserrat', arial, sans-serif;\n  padding: 8px 16px;\n  font-weight: bold;\n}\n.btn .fa,\na.btn .fa {\n  margin-right: 5px;\n}\n.btn:focus,\na.btn:focus {\n  color: #fff;\n}\na.btn-cta-primary,\n.btn-cta-primary {\n  background: #54ba4e;\n  border: 1px solid #54ba4e;\n  color: #fff;\n  font-weight: 600;\n  text-transform: uppercase;\n}\na.btn-cta-primary:hover,\n.btn-cta-primary:hover {\n  background: #49ac43;\n  border: 1px solid #49ac43;\n  color: #fff;\n}\na.btn-cta-secondary,\n.btn-cta-secondary {\n  background: #479FC8;\n  border: 1px solid #479FC8;\n  color: #fff;\n  font-weight: 600;\n  text-transform: uppercase;\n}\na.btn-cta-secondary:hover,\n.btn-cta-secondary:hover {\n  background: #3893bd;\n  border: 1px solid #3893bd;\n  color: #fff;\n}\n.text-highlight {\n  color: #32383e;\n}\n.label-theme {\n  background: #3AAA64;\n  font-size: 12px;\n}\na.dotted-link {\n  border-bottom: 1px dotted #778492;\n  color: #778492;\n}\na.dotted-link:hover {\n  text-decoration: none;\n  color: #49515a;\n}\n/*\niframe {\n\n    .header {\n        padding: 0;\n    }\n}\n\n.iframe-wrapper {\n    overflow: auto;\n    -webkit-overflow-scrolling:touch;\n}\n*/\n/* ======= Header ======= */\n.header {\n  padding: 30px 0;\n  background: #f5f5f5;\n  border-top: 10px solid #778492;\n}\n.header .btn {\n  margin-top: 60px;\n  font-weight: bold;\n}\n.header .profile-image {\n  margin-right: 30px;\n}\n.header .profile-content .name {\n  color: #49515a;\n  font-size: 38px;\n  margin-bottom: 5px;\n  margin-top: 30px;\n}\n.header .profile-content .desc {\n  color: #778492;\n  font-family: \"Lato\", arial, sans-serif;\n  font-weight: 400;\n  font-size: 24px;\n  margin-top: 0;\n  margin-bottom: 15px;\n}\n.header .profile-content .social a {\n  background: #b0b7bf;\n  width: 36px;\n  height: 36px;\n  display: inline-block;\n  border-radius: 50%;\n  background-clip: padding-box;\n  color: #fff;\n  text-align: center;\n}\n.header .profile-content .social a:hover {\n  background: #778492;\n}\n.header .profile-content .social a .fa {\n  font-size: 20px;\n  padding-top: 8px;\n}\n/* ======= Sections======= */\n.sections-wrapper {\n  padding-top: 60px;\n  padding-bottom: 60px;\n}\n.section {\n  margin-bottom: 30px;\n}\n.section .section-inner {\n  background: #fff;\n  padding: 30px;\n}\n.section .heading {\n  margin-top: 0;\n  margin-bottom: 30px;\n  color: #545e69;\n  font-size: 24px;\n}\n.section .content .more-link .fa {\n  margin-right: 5px;\n  font-size: 14px;\n}\n/* About Section */\n/* Latest Section */\n.latest .item {\n  margin-bottom: 30px;\n}\n.latest .item .title {\n  font-size: 18px;\n  margin-top: 0;\n}\n.latest .item .title .label {\n  margin-left: 5px;\n  font-size: 12px;\n}\n.latest .item .title a {\n  color: #778492;\n}\n.latest .item .title a:hover {\n  color: #5f6b77;\n}\n.latest .item .project-image:hover {\n  -webkit-opacity: 0.8;\n  -moz-opacity: 0.8;\n  opacity: 0.8;\n}\n.latest .divider {\n  margin-bottom: 60px;\n}\n.latest .featured {\n  margin-bottom: 60px;\n}\n.latest .featured .title {\n  margin-bottom: 5px;\n  font-size: 20px;\n}\n.latest .featured .summary {\n  margin-bottom: 30px;\n  color: #778492;\n}\n.latest .featured img {\n  margin-bottom: 30px;\n}\n.latest .featured .desc {\n  margin-bottom: 30px;\n}\n.latest .featured-image {\n  position: relative;\n}\n.latest .featured-image .text {\n  background: #3AAA64;\n  color: #fff;\n}\n.latest .featured-image .ribbon {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  width: 110px;\n  height: 110px;\n  overflow: hidden;\n}\n.latest .featured-image .ribbon .text {\n  font-family: 'Montserrat', sans-serif;\n  position: relative;\n  left: -8px;\n  top: 18px;\n  width: 158px;\n  padding: 10px 10px;\n  font-size: 15px;\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fff;\n  background-color: #479FC8;\n  -webkit-transform: rotate(45deg) translate3d(0, 0, 0);\n  -moz-transform: rotate(45deg) translate3d(0, 0, 0);\n  -ms-transform: rotate(45deg) translate3d(0, 0, 0);\n  -o-transform: rotate(45deg) translate3d(0, 0, 0);\n}\n.latest .featured-image .ribbon .text:before,\n.latest .featured-image .ribbon .text:after {\n  content: '';\n  position: absolute;\n  bottom: -5px;\n  border-top: 5px solid #276582;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n.latest .featured-image .ribbon .text:before {\n  left: 0;\n}\n.latest .featured-image .ribbon .text:after {\n  right: 0;\n}\n/* Projects Section */\n.projects .item {\n  margin-bottom: 30px;\n}\n.projects .item .title {\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 5px;\n  line-height: 1.5;\n}\n.projects .item .title a {\n  color: #778492;\n}\n.projects .item .title a:hover {\n  color: #5f6b77;\n}\n/* Work Section */\n.experience .item {\n  margin-bottom: 30px;\n}\n.experience .item .title {\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 5px;\n  line-height: 1.5;\n}\n.experience .item .title .place {\n  color: #999;\n  font-weight: normal;\n}\n.experience .item .title .place a {\n  color: #999;\n}\n.experience .item .title .place a:hover {\n  color: #666666;\n}\n.experience .item .title .year {\n  color: #999;\n  font-weight: normal;\n}\n/* Git section */\n.github-graph {\n  margin-bottom: 30px;\n}\n.github-graph .js-calendar-graph-svg {\n  max-width: 100%;\n}\n.ghfeed {\n  height: 600px;\n}\n.ghfeed,\n.ghfeed *,\n.ghfeed *:before,\n.ghfeed *:after {\n  box-sizing: content-box;\n}\n/* Info Section */\n.info .fa {\n  margin-right: 15px;\n  color: #ccd1d6;\n}\n.info .fa.fa-envelope-o {\n  font-size: 14px;\n}\n.info ul {\n  margin-bottom: 0;\n}\n.info li {\n  margin-bottom: 15px;\n}\n.info li:last-child {\n  margin-bottom: 0;\n}\n/* Skills Section */\n.skills .intro {\n  margin-bottom: 30px;\n}\n.skills .skillset .item {\n  margin-bottom: 30px;\n}\n.skills .skillset .level-title {\n  font-size: 16px;\n  position: relative;\n  margin-top: 0;\n  margin-bottom: 10;\n}\n.skills .skillset .level-title .level-label {\n  color: #ccd1d6;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: \"Lato\", arial, sans-serif;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.skills .skillset .level-bar {\n  height: 15px;\n  background: #e8e8e8;\n}\n.skills .skillset .level-bar-inner {\n  height: 15px;\n  background: #66cb8c;\n}\n/* Testimonials section */\n.testimonials .item {\n  margin-bottom: 30px;\n}\n.testimonials .item:last-child {\n  margin-bottom: 0;\n}\n.testimonials .item .quote {\n  color: #666;\n  font-size: 16px;\n  border-left-color: #9fdeb7;\n  margin-bottom: 15px;\n}\n.testimonials .item .quote .fa {\n  color: #79d19a;\n  margin-right: 15px;\n}\n.testimonials .item .source {\n  font-size: 14px;\n  padding-left: 30px;\n  font-weight: 500;\n}\n.testimonials .item .source .name {\n  color: #939ea9;\n  font-weight: 600;\n}\n.testimonials .item .source .title {\n  color: #999;\n}\n/* Education section */\n.education .item {\n  margin-bottom: 30px;\n}\n.education .item:last-child {\n  margin-bottom: 0;\n}\n.education .item .title {\n  font-size: 16px;\n  margin-top: 0;\n}\n.education .item .university {\n  font-family: \"Lato\", arial, sans-serif;\n  font-size: 13px;\n  color: #999;\n  font-weight: 600;\n  padding-left: 25px;\n}\n.education .item .university .year {\n  color: #b0b7bf;\n  font-weight: 500;\n}\n/* Language Section */\n.languages .item {\n  margin-bottom: 15px;\n}\n.languages .item .title {\n  color: #778492;\n}\n.languages .item .level {\n  color: #999;\n}\n.languages .item:last-child {\n  margin-bottom: 0;\n}\n.languages .item .fa {\n  color: #79d19a;\n}\n/* Blog Section */\n.blog .item {\n  margin-bottom: 30px;\n}\n.blog .item .title {\n  font-size: 18px;\n  line-height: 1.3;\n}\n.blog .item .title a {\n  color: #778492;\n}\n.blog .item .title a:hover {\n  color: #5f6b77;\n}\n.blog .item:last-child {\n  margin-bottom: 0;\n}\n/* List section */\n.list ul li {\n  margin-bottom: 10px;\n}\n.list ul li .fa {\n  margin-right: 5px;\n}\n.list ul li a {\n  color: #778492;\n}\n.list ul li a:hover {\n  color: #49515a;\n}\n/* Credits */\n.credits ul li {\n  margin-bottom: 10px;\n}\n.credits ul li .fa {\n  margin-right: 5px;\n}\n.credits ul li a {\n  color: #778492;\n}\n.credits ul li a:hover {\n  color: #49515a;\n}\n.credits .btn {\n  margin-bottom: 15px;\n}\n/* ======= Footer ======= */\n.footer {\n  background: #32383e;\n  color: #fff;\n  padding: 10px 0;\n}\n.footer .copyright {\n  line-height: 1.6;\n  color: #a1aab4;\n  font-size: 14px;\n}\n.footer a {\n  color: #fff;\n}\n.footer .fa-heart {\n  color: #fb866a;\n}\n/* Extra small devices (phones, less than 768px) */\n@media (max-width: 767px) {\n  .header {\n    text-align: center;\n  }\n  .header .profile-image {\n    float: none !important;\n    margin: 0 auto;\n  }\n  .header .profile-content {\n    float: none !important;\n    text-align: center;\n  }\n  .header .btn {\n    margin-top: 30px;\n    float: none !important;\n  }\n  .project-image {\n    margin-bottom: 15px;\n  }\n}\n/* Small devices (tablets, 768px and up) */\n/* Medium devices (desktops, 992px and up) */\n/* Large devices (large desktops, 1200px and up) */\n/* Ex-Large devices (large desktops, 1200px and up) */\n@media (min-width: 1400px) {\n  .container {\n    width: 1360px;\n  }\n}\n/*\n * Template Name: Developer - Responsive Website Template for Developers\n * Version: 1.5\n * Author: Xiaoying Riley\n * Twitter: @3rdwave_themes\n * License: Creative Commons Attribution 3.0 License\n * Website: http://themes.3rdwavemedia.com/\n*/\n/* ======= Base ======= */\nbody {\n  font-family: 'Lato', arial, sans-serif;\n  color: #434343;\n  background: #DAE3E7;\n  font-size: 16px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 700;\n  color: #778492;\n}\na {\n  color: #3AAA64;\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -ms-transition: all 0.4s ease-in-out;\n  -o-transition: all 0.4s ease-in-out;\n}\na:hover {\n  text-decoration: underline;\n  color: #5f6b77;\n  color: #2d844e;\n}\na:focus {\n  text-decoration: none;\n}\n.btn,\na.btn {\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition: all 0.4s ease-in-out;\n  -ms-transition: all 0.4s ease-in-out;\n  -o-transition: all 0.4s ease-in-out;\n  font-family: 'Montserrat', arial, sans-serif;\n  padding: 8px 16px;\n  font-weight: bold;\n}\n.btn .fa,\na.btn .fa {\n  margin-right: 5px;\n}\n.btn:focus,\na.btn:focus {\n  color: #fff;\n}\na.btn-cta-primary,\n.btn-cta-primary {\n  background: #54ba4e;\n  border: 1px solid #54ba4e;\n  color: #fff;\n  font-weight: 600;\n  text-transform: uppercase;\n}\na.btn-cta-primary:hover,\n.btn-cta-primary:hover {\n  background: #49ac43;\n  border: 1px solid #49ac43;\n  color: #fff;\n}\na.btn-cta-secondary,\n.btn-cta-secondary {\n  background: #479FC8;\n  border: 1px solid #479FC8;\n  color: #fff;\n  font-weight: 600;\n  text-transform: uppercase;\n}\na.btn-cta-secondary:hover,\n.btn-cta-secondary:hover {\n  background: #3893bd;\n  border: 1px solid #3893bd;\n  color: #fff;\n}\n.text-highlight {\n  color: #32383e;\n}\n.label-theme {\n  background: #3AAA64;\n  font-size: 12px;\n}\na.dotted-link {\n  border-bottom: 1px dotted #778492;\n  color: #778492;\n}\na.dotted-link:hover {\n  text-decoration: none;\n  color: #49515a;\n}\n/*\niframe {\n\n    .header {\n        padding: 0;\n    }\n}\n\n.iframe-wrapper {\n    overflow: auto;\n    -webkit-overflow-scrolling:touch;\n}\n*/\n/* ======= Header ======= */\n.header {\n  padding: 30px 0;\n  background: #f5f5f5;\n  border-top: 10px solid #778492;\n}\n.header .btn {\n  margin-top: 60px;\n  font-weight: bold;\n}\n.header .profile-image {\n  margin-right: 30px;\n}\n.header .profile-content .name {\n  color: #49515a;\n  font-size: 38px;\n  margin-bottom: 5px;\n  margin-top: 30px;\n}\n.header .profile-content .desc {\n  color: #778492;\n  font-family: \"Lato\", arial, sans-serif;\n  font-weight: 400;\n  font-size: 24px;\n  margin-top: 0;\n  margin-bottom: 15px;\n}\n.header .profile-content .social a {\n  background: #b0b7bf;\n  width: 36px;\n  height: 36px;\n  display: inline-block;\n  border-radius: 50%;\n  background-clip: padding-box;\n  color: #fff;\n  text-align: center;\n}\n.header .profile-content .social a:hover {\n  background: #778492;\n}\n.header .profile-content .social a .fa {\n  font-size: 20px;\n  padding-top: 8px;\n}\n/* ======= Sections======= */\n.sections-wrapper {\n  padding-top: 60px;\n  padding-bottom: 60px;\n}\n.section {\n  margin-bottom: 30px;\n}\n.section .section-inner {\n  background: #fff;\n  padding: 30px;\n}\n.section .heading {\n  margin-top: 0;\n  margin-bottom: 30px;\n  color: #545e69;\n  font-size: 24px;\n}\n.section .content .more-link .fa {\n  margin-right: 5px;\n  font-size: 14px;\n}\n/* About Section */\n/* Latest Section */\n.latest .item {\n  margin-bottom: 30px;\n}\n.latest .item .title {\n  font-size: 18px;\n  margin-top: 0;\n}\n.latest .item .title .label {\n  margin-left: 5px;\n  font-size: 12px;\n}\n.latest .item .title a {\n  color: #778492;\n}\n.latest .item .title a:hover {\n  color: #5f6b77;\n}\n.latest .item .project-image:hover {\n  -webkit-opacity: 0.8;\n  -moz-opacity: 0.8;\n  opacity: 0.8;\n}\n.latest .divider {\n  margin-bottom: 60px;\n}\n.latest .featured {\n  margin-bottom: 60px;\n}\n.latest .featured .title {\n  margin-bottom: 5px;\n  font-size: 20px;\n}\n.latest .featured .summary {\n  margin-bottom: 30px;\n  color: #778492;\n}\n.latest .featured img {\n  margin-bottom: 30px;\n}\n.latest .featured .desc {\n  margin-bottom: 30px;\n}\n.latest .featured-image {\n  position: relative;\n}\n.latest .featured-image .text {\n  background: #3AAA64;\n  color: #fff;\n}\n.latest .featured-image .ribbon {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  width: 110px;\n  height: 110px;\n  overflow: hidden;\n}\n.latest .featured-image .ribbon .text {\n  font-family: 'Montserrat', sans-serif;\n  position: relative;\n  left: -8px;\n  top: 18px;\n  width: 158px;\n  padding: 10px 10px;\n  font-size: 15px;\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fff;\n  background-color: #479FC8;\n  -webkit-transform: rotate(45deg) translate3d(0, 0, 0);\n  -moz-transform: rotate(45deg) translate3d(0, 0, 0);\n  -ms-transform: rotate(45deg) translate3d(0, 0, 0);\n  -o-transform: rotate(45deg) translate3d(0, 0, 0);\n}\n.latest .featured-image .ribbon .text:before,\n.latest .featured-image .ribbon .text:after {\n  content: '';\n  position: absolute;\n  bottom: -5px;\n  border-top: 5px solid #276582;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n.latest .featured-image .ribbon .text:before {\n  left: 0;\n}\n.latest .featured-image .ribbon .text:after {\n  right: 0;\n}\n/* Projects Section */\n.projects .item {\n  margin-bottom: 30px;\n}\n.projects .item .title {\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 5px;\n  line-height: 1.5;\n}\n.projects .item .title a {\n  color: #778492;\n}\n.projects .item .title a:hover {\n  color: #5f6b77;\n}\n/* Work Section */\n.experience .item {\n  margin-bottom: 30px;\n}\n.experience .item .title {\n  font-size: 16px;\n  margin-top: 0;\n  margin-bottom: 5px;\n  line-height: 1.5;\n}\n.experience .item .title .place {\n  color: #999;\n  font-weight: normal;\n}\n.experience .item .title .place a {\n  color: #999;\n}\n.experience .item .title .place a:hover {\n  color: #666666;\n}\n.experience .item .title .year {\n  color: #999;\n  font-weight: normal;\n}\n/* Git section */\n.github-graph {\n  margin-bottom: 30px;\n}\n.github-graph .js-calendar-graph-svg {\n  max-width: 100%;\n}\n.ghfeed {\n  height: 600px;\n}\n.ghfeed,\n.ghfeed *,\n.ghfeed *:before,\n.ghfeed *:after {\n  box-sizing: content-box;\n}\n/* Info Section */\n.info .fa {\n  margin-right: 15px;\n  color: #ccd1d6;\n}\n.info .fa.fa-envelope-o {\n  font-size: 14px;\n}\n.info ul {\n  margin-bottom: 0;\n}\n.info li {\n  margin-bottom: 15px;\n}\n.info li:last-child {\n  margin-bottom: 0;\n}\n/* Skills Section */\n.skills .intro {\n  margin-bottom: 30px;\n}\n.skills .skillset .item {\n  margin-bottom: 30px;\n}\n.skills .skillset .level-title {\n  font-size: 16px;\n  position: relative;\n  margin-top: 0;\n  margin-bottom: 10;\n}\n.skills .skillset .level-title .level-label {\n  color: #ccd1d6;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: \"Lato\", arial, sans-serif;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.skills .skillset .level-bar {\n  height: 15px;\n  background: #e8e8e8;\n}\n.skills .skillset .level-bar-inner {\n  height: 15px;\n  background: #66cb8c;\n}\n/* Testimonials section */\n.testimonials .item {\n  margin-bottom: 30px;\n}\n.testimonials .item:last-child {\n  margin-bottom: 0;\n}\n.testimonials .item .quote {\n  color: #666;\n  font-size: 16px;\n  border-left-color: #9fdeb7;\n  margin-bottom: 15px;\n}\n.testimonials .item .quote .fa {\n  color: #79d19a;\n  margin-right: 15px;\n}\n.testimonials .item .source {\n  font-size: 14px;\n  padding-left: 30px;\n  font-weight: 500;\n}\n.testimonials .item .source .name {\n  color: #939ea9;\n  font-weight: 600;\n}\n.testimonials .item .source .title {\n  color: #999;\n}\n/* Education section */\n.education .item {\n  margin-bottom: 30px;\n}\n.education .item:last-child {\n  margin-bottom: 0;\n}\n.education .item .title {\n  font-size: 16px;\n  margin-top: 0;\n}\n.education .item .university {\n  font-family: \"Lato\", arial, sans-serif;\n  font-size: 13px;\n  color: #999;\n  font-weight: 600;\n  padding-left: 25px;\n}\n.education .item .university .year {\n  color: #b0b7bf;\n  font-weight: 500;\n}\n/* Language Section */\n.languages .item {\n  margin-bottom: 15px;\n}\n.languages .item .title {\n  color: #778492;\n}\n.languages .item .level {\n  color: #999;\n}\n.languages .item:last-child {\n  margin-bottom: 0;\n}\n.languages .item .fa {\n  color: #79d19a;\n}\n/* Blog Section */\n.blog .item {\n  margin-bottom: 30px;\n}\n.blog .item .title {\n  font-size: 18px;\n  line-height: 1.3;\n}\n.blog .item .title a {\n  color: #778492;\n}\n.blog .item .title a:hover {\n  color: #5f6b77;\n}\n.blog .item:last-child {\n  margin-bottom: 0;\n}\n/* List section */\n.list ul li {\n  margin-bottom: 10px;\n}\n.list ul li .fa {\n  margin-right: 5px;\n}\n.list ul li a {\n  color: #778492;\n}\n.list ul li a:hover {\n  color: #49515a;\n}\n/* Credits */\n.credits ul li {\n  margin-bottom: 10px;\n}\n.credits ul li .fa {\n  margin-right: 5px;\n}\n.credits ul li a {\n  color: #778492;\n}\n.credits ul li a:hover {\n  color: #49515a;\n}\n.credits .btn {\n  margin-bottom: 15px;\n}\n/* ======= Footer ======= */\n.footer {\n  background: #32383e;\n  color: #fff;\n  padding: 10px 0;\n}\n.footer .copyright {\n  line-height: 1.6;\n  color: #a1aab4;\n  font-size: 14px;\n}\n.footer a {\n  color: #fff;\n}\n.footer .fa-heart {\n  color: #fb866a;\n}\n/* Extra small devices (phones, less than 768px) */\n@media (max-width: 767px) {\n  .header {\n    text-align: center;\n  }\n  .header .profile-image {\n    float: none !important;\n    margin: 0 auto;\n  }\n  .header .profile-content {\n    float: none !important;\n    text-align: center;\n  }\n  .header .btn {\n    margin-top: 30px;\n    float: none !important;\n  }\n  .project-image {\n    margin-bottom: 15px;\n  }\n}\n/* Small devices (tablets, 768px and up) */\n/* Medium devices (desktops, 992px and up) */\n/* Large devices (large desktops, 1200px and up) */\n/* Ex-Large devices (large desktops, 1200px and up) */\n@media (min-width: 1400px) {\n  .container {\n    width: 1360px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/personal/personal.component.html":
/***/ (function(module, exports) {

module.exports = "\n<head>\n  <title>My Portfolio</title>\n  <meta charset=\"utf-8\">\n  <link href='http://fonts.googleapis.com/css?family=Lato:300,400,300italic,400italic' rel='stylesheet' type='text/css'>\n  <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>\n</head>\n\n<body>\n\n<header class=\"header\">\n  <div class=\"container\">\n    <img class=\"profile-image img-responsive pull-left\" src=\"https://www.google.com/search?q=tarunpreet+singh&tbm=isch&source=iu&ictx=1&fir=nQE_6hstJw-fyM%253A%252CJy52YyuHrZ_WVM%252C_&usg=__89TrgWRUWZh5A3_GpE_Cb86L6-Y%3D&sa=X&ved=0ahUKEwijqbmc2oDYAhVF94MKHdr3DoEQ9QEIRjAI#imgrc=nQE_6hstJw-fyM:\" />\n    <div class=\"profile-content pull-left\">\n      <h1 class=\"name\">Hemanth Shetty</h1>\n      <h2 class=\"desc\">Masters Student at Northeastern University</h2>\n    </div><!--//profile-->\n    <a class=\"btn btn-cta-primary pull-right\" href=\"https://www.linkedin.com/in/hemanth-shetty-neu\" target=\"_blank\"><i class=\"fa fa-paper-plane\"></i> Contact Me</a>\n  </div><!--//container-->\n</header><!--//header-->\n\n<div class=\"container sections-wrapper\">\n  <div class=\"row\">\n    <div class=\"primary col-md-8 col-sm-12 col-xs-12\">\n      <section class=\"about section\">\n        <div class=\"section-inner\">\n          <h2 class=\"heading\">About Me</h2>\n          <div class=\"content\">\n            <p>\n              I am pursuing my Masters in Computer Science at Northeastern University, Boston. I am passionate about solving problems and always believe in striving for excellence.\n\n              I have 3.6 years of industry experience and I have previously worked as a .NET developer in retail giant Tesco and in AirWatch by VMware, which is a leader in enterprise mobility management (EMM). I have worked as a Cloud Software Engineer- Intern in New York Life Insurance Labs.\n\n              At Northeastern University, I am pursuing my interest in Data Engineering and working towards building a profile in Information Retrieval and Parallel Data Processing using Map Reduce.\n            </p>\n\n          </div><!--//content-->\n        </div><!--//section-inner-->\n      </section><!--//section-->\n\n      <section class=\"latest section\">\n        <div class=\"section-inner\">\n          <h2 class=\"heading\">Latest Projects</h2>\n          <div class=\"content\">\n\n            <div class=\"item featured text-center\">\n              <h3 class=\"title\"><a href=\"https://e-trash-management.herokuapp.com\" target=\"_blank\">E-Trash Management</a></h3>\n              <div class=\"featured-image\">\n                <a href=\"#\" target=\"_blank\">\n                  <img class=\"img-responsive project-image\" src=\"../../components/home/images/profile.png\" alt=\"project name\" />\n                </a>\n                <div class=\"ribbon\">\n                  <div class=\"text\">New</div>\n                </div>\n              </div>\n\n              <div class=\"desc text-left\">\n                <p> At E‐Trash Management, we provide a full suite of asset management platform to the Users to manage buy or sell their electronic waste rather than dumping it in trash. </p>\n                <p> E‐Trash Management  can be a complex challenge, sometimes requiring multiple vendors to handle shipping, packaging, storage, inventory, data destruction, logistics, disposal and recycling.\n                  If not done properly, you and your company could face serious penalties for improper disposal as well as extreme data security risks.\n                  We can help you eliminate that risk!</p>\n              </div><!--//desc-->\n\n            </div><!--//item-->\n\n          </div><!--//content-->\n        </div><!--//section-inner-->\n      </section><!--//section-->\n\n      <section class=\"projects section\">\n        <div class=\"section-inner\">\n          <h2 class=\"heading\">Other Projects</h2>\n          <div class=\"content\">\n            <div class=\"item\">\n              <h3 class=\"title\"><a href=\"https://github.com/HemanthShetty/InformationRetrieval\">Page Rank Algorithm</a> <span class=\"label label-theme\">Open Source</span></h3>\n              <p class=\"summary\">•\tPageRank calculates the rank of the webpage depending upon the factors like in links, out links and key phrases. </p>\n              <p><a class=\"more-link\" href=\"https://github.com/HemanthShetty/InformationRetrieval\" target=\"_blank\"><i class=\"fa fa-external-link\"></i> View on GitHub</a></p>\n            </div><!--//item-->\n            <div class=\"item\">\n              <h3 class=\"title\"><a href=\"https://github.com/HemanthShetty/InformationRetrieval\">Web Crawler</a> <span class=\"label label-theme\">Open Source</span></h3>\n              <p class=\"summary\">the web crawler is developed using Java and elastic search.The crawler crawls the links within links of a webpage till it reaches certain depth.\n              </p>\n              <p><a class=\"more-link\" href=\"https://github.com/HemanthShetty/InformationRetrieval\" target=\"_blank\"><i class=\"fa fa-external-link\"></i> View on GitHub</a></p>\n            </div><!--//item-->\n\n          </div><!--//content-->\n        </div><!--//section-inner-->\n      </section><!--//section-->\n\n      <section class=\"experience section\">\n        <div class=\"section-inner\">\n          <h2 class=\"heading\">Work Experience</h2>\n          <div class=\"content\">\n            <div class=\"item\">\n              <h3 class=\"title\">Software Engineer Co-op <span class=\"place\"><a href=\"#\">New York Life Insurance Ventures</a></span> <span class=\"year\">(May 2016 - Dec 2016)</span></h3>\n              <p> As a Cloud Software Engineer I worked on cutting edge technologies like Amazon Web Services to create web and mobile applications that make it easy to sell life insurance products to millennials.\n\n                •\tCreated Lambda functions to process data from mobile apps and web applications and then store it in DynamoDB.\n                •\tWorked on creating a web portal using using Angular2, Node.Js and AWS services that could be used by the customer service team to handle issues.\n                •\tDeveloped a chat bot for recommending an insurance product to customers using AWS technologies like DynamoDB, API Gateway and serverless Lambda functions.\n                •\tSpearheaded the API project for NYL labs using Node.js, Express, Swagger and Apigee Edge API\n                management platform and created RESTful APIs for partner integration.\n\n              </p>\n            </div><!--//item-->\n            <div class=\"item\">\n              <h3 class=\"title\">Software Engineer - <span class=\"place\"><a href=\"#\">VMWare AirWatch</a></span> <span class=\"year\">(Oct 2014 - May 2015)</span></h3>\n              <p>\n                As a .NET developer I was working on developing cutting edge Enterprise mobility solutions. I was mainly involved in developing and testing RESTful APIs.\n\n                • Spearheaded the integration of ASP.NET Web API framework with the existing AirWatch code base.\n                • Migrated some of the SOAP endpoints to RESTful APIs while simultaneously improving the code base by incorporating best practices into it.\n              </p>\n            </div><!--//item-->\n\n            <div class=\"item\">\n              <h3 class=\"title\">Software Engineer <span class=\"place\"><a href=\"www.Biinfotech.com\">Tesco</a></span> <span class=\"year\">(july 2012 - Sept 2014)</span></h3>\n              <p>\n                Worked on enabling the fulfillment of online customer orders in Tesco International stores. I was part of a team that developed web services and an online web portal to enable picking items inside the store and delivering them to the customer.\n\n                • Worked on the creation of Web Services using WCF, ADO.NET, SQL Server 2008 and other .NET frameworks.\n                • Worked on adding features to an online web portal known as 'PCS Admin' using HTML, CSS, jQuery and ASP.NET MVC 3.\n                • Worked in an agile development process with comprehensive unit testing using MSTest and NUnit.\n                • Awarded the ‘Tesco Bright Spark’ yearly award for innovation, along with numerous other spot awards.\n              </p>\n            </div><!--//item-->\n\n          </div><!--//content-->\n        </div><!--//section-inner-->\n      </section><!--//section-->\n\n    </div><!--//primary-->\n    <div class=\"secondary col-md-4 col-sm-12 col-xs-12\">\n      <aside class=\"info aside section\">\n        <div class=\"section-inner\">\n          <h2 class=\"heading sr-only\">Basic Information</h2>\n          <div class=\"content\">\n            <ul class=\"list-unstyled\">\n              <li><i class=\"fa fa-map-marker\"></i><span class=\"sr-only\">Location:</span>Boston, MA</li>\n              <li><i class=\"fa fa-envelope-o\"></i><span class=\"sr-only\">Email:</span><a href=\"#\">shetty.h@huksy.neu.edu</a></li>\n              <li><i class=\"fa fa-link\"></i><span class=\"sr-only\">LinkedIn:</span><a href=\"#\">https://www.linkedin.com/in/hemanth-shetty-neu/</a></li>\n            </ul>\n          </div><!--//content-->\n        </div><!--//section-inner-->\n      </aside>\n\n\n      <aside class=\"info aside section\">\n        <div class=\"section-inner\">\n          <h2 class=\"heading sr-only\">Basic Information</h2>\n          <div class=\"content\">\n            <ul class=\"list-unstyled\">\n              <li>Web Development (CS5610) Assignments</li>\n              <li><i class=\"fa fa-book\"></i><a href=\"https://github.com/HemanthShetty/webdev-shetty-hemanth/releases/tag/1.0\" target=\"_blank\">Assignment 1</a></li>\n              <li><i class=\"fa fa-book\"></i><a href=\"https://github.com/HemanthShetty/webdev-shetty-hemanth/releases/tag/2.0\" target=\"_blank\">Assignment 2</a></li>\n              <li><i class=\"fa fa-book\"></i><a href=\"https://github.com/HemanthShetty/webdev-shetty-hemanth/releases/tag/3.0\" target=\"_blank\">Assignment 3</a></li>\n              <li><i class=\"fa fa-book\"></i><a href=\"https://github.com/HemanthShetty/webdev-shetty-hemanth/releases/tag/4.1\" target=\"_blank\">Assignment 4</a></li>\n              <li><i class=\"fa fa-book\"></i><a href=\"https://github.com/HemanthShetty/webdev-shetty-hemanth/releases/tag/5.0\" target=\"_blank\">Assignment 5</a></li>\n              <li><i class=\"fa fa-book\"></i><a href=\"https://github.com/HemanthShetty/webdev-shetty-hemanth/releases/tag/6\" target=\"_blank\">Assignment 6</a></li>\n\n            </ul>\n          </div><!--//content-->\n        </div><!--//section-inner-->\n      </aside>\n      <aside class=\"skills aside section\">\n        <div class=\"section-inner\">\n          <h2 class=\"heading\">Skills</h2>\n          <div class=\"content\">\n            <p class=\"intro\">\n              I am proficient in Java, C#, ASP.net</p>\n\n            <div class=\"skillset\">\n\n              <div class=\"item\">\n                <h3 class=\"level-title\">Java, ASP.NET & C#<span class=\"level-label\" data-toggle=\"tooltip\" data-placement=\"left\" data-animation=\"true\" title=\"You can use the tooltip to add more info...\">Expert</span></h3>\n                <div class=\"level-bar\">\n                  <div class=\"level-bar-inner\" data-level=\"96%\">\n                  </div>\n                </div><!--//level-bar-->\n              </div><!--//item-->\n\n              <div class=\"item\">\n                <h3 class=\"level-title\">Angular 4<span class=\"level-label\">Expert</span></h3>\n                <div class=\"level-bar\">\n                  <div class=\"level-bar-inner\" data-level=\"96%\">\n                  </div>\n                </div><!--//level-bar-->\n              </div><!--//item-->\n\n              <div class=\"item\">\n                <h3 class=\"level-title\">HTML5, CSS3 & Bootstrap<span class=\"level-label\">Expert</span></h3>\n                <div class=\"level-bar\">\n                  <div class=\"level-bar-inner\" data-level=\"96%\">\n                  </div>\n                </div><!--//level-bar-->\n              </div><!--//item-->\n\n              <div class=\"item\">\n                <h3 class=\"level-title\">Python<span class=\"level-label\">Pro</span></h3>\n                <div class=\"level-bar\">\n                  <div class=\"level-bar-inner\" data-level=\"85%\">\n                  </div>\n                </div><!--//level-bar-->\n              </div><!--//item-->\n\n            </div>\n          </div><!--//content-->\n        </div><!--//section-inner-->\n      </aside><!--//section-->\n\n\n      <aside class=\"education aside section\">\n        <div class=\"section-inner\">\n          <h2 class=\"heading\">Education</h2>\n          <div class=\"content\">\n            <div class=\"item\">\n              <h3 class=\"title\"><i class=\"fa fa-graduation-cap\"></i> Masters in Computer Science</h3>\n              <h4 class=\"university\">Northeastern University  <span class=\"year\">(2015-2017)</span></h4>\n            </div><!--//item-->\n            <div class=\"item\">\n              <h3 class=\"title\"><i class=\"fa fa-graduation-cap\"></i> B.E Computer Science</h3>\n              <h4 class=\"university\">PESIT, Bangalore <span class=\"year\">(2008-2012)</span></h4>\n            </div><!--//item-->\n          </div><!--//content-->\n        </div><!--//section-inner-->\n      </aside><!--//section-->\n\n      <aside class=\"languages aside section\">\n        <div class=\"section-inner\">\n          <h2 class=\"heading\">Languages</h2>\n          <div class=\"content\">\n            <ul class=\"list-unstyled\">\n              <li class=\"item\">\n                <span class=\"title\"><strong>English:</strong></span>\n                <span class=\"level\">Professional Proficiency <br class=\"visible-xs\"/><i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> </span>\n              </li><!--//item-->\n              <li class=\"item\">\n                <span class=\"title\"><strong>Kannada:</strong></span>\n                <span class=\"level\">Native Speaker <br class=\"visible-sm visible-xs\"/><i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i></span>\n              </li><!--//item-->\n              <li class=\"item\">\n                <span class=\"title\"><strong>Hindi:</strong></span>\n                <span class=\"level\">Native Speaker <br class=\"visible-sm visible-xs\"/><i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i> <i class=\"fa fa-star\"></i></span>\n              </li>\n            </ul>\n          </div><!--//content-->\n        </div><!--//section-inner-->\n      </aside><!--//section-->\n\n\n\n    </div><!--//secondary-->\n  </div><!--//row-->\n</div><!--//masonry-->\n\n<!-- ******FOOTER****** -->\n<footer class=\"footer\">\n  <div class=\"container text-center\">\n    <!--/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you'd like to use the template without the attribution, you can check out other license options via our website: themes.3rdwavemedia.com */-->\n    <small class=\"copyright\">Designed with <i class=\"fa fa-heart\"></i> by <a href=\"http:www.Linkedin.com/in/tarunpreet-singh\" target=\"_blank\">Tarunpreet</a></small>\n  </div><!--//container-->\n</footer><!--//footer-->\n\n<!-- Javascript -->\n\n</body>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/personal/personal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonalComponent = (function () {
    function PersonalComponent() {
    }
    PersonalComponent.prototype.ngOnInit = function () {
    };
    return PersonalComponent;
}());
PersonalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-personal',
        template: __webpack_require__("../../../../../src/app/components/personal/personal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/personal/personal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PersonalComponent);

//# sourceMappingURL=personal.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sell/sell.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sell/sell.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--heading on the nav bar-->\n      <div class=\"col-sm-11 col-md-10 col-lg-10 col-xs-11\">\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'||userIdentity.role=='Employee'||userIdentity.role=='Organization'\">\n        <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user']\">\n        <b>Home</b>\n      </a>\n    </p>\n  <span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'\">\n    <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user' , userId, 'sell']\">\n        <b>Sell</b>\n      </a>\n    </p>\n\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'dropoff']\" >\n            <b>DropOffs</b>\n          </a>\n        </p>\n  </span>\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='Employee'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'cpoint']\" >\n            <b>Collection Points</b>\n          </a>\n        </p>\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'catalog']\" >\n            <b>Catalog</b>\n          </a>\n        </p>\n</span>\n  <span *ngIf=\"userIdentity.role=='Admin'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'manage','user']\" >\n            <b>Manage Users</b>\n          </a>\n        </p>\n</span>\n  <!--tick mark-->\n</span>\n\n\n      </div>\n      <div class=\"col-sm-1 col-md-2 col-lg-2 col-xs-1\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">\n          <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n\n\n\n\n<div class=\"etm-page-body\">\n  <div class=\"container-fluid\">\n  <h1>Click On The Collection Center Where You Want to Drop Off Your E-Waste</h1>\n  <div class=\"form-group\">\n    <input placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\n  </div>\n  <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n    <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\" ></agm-marker>\n    <span *ngFor=\"let cpointLatLong of latLongs\">\n    <agm-marker [latitude]=\"cpointLatLong.lat\" [longitude]=\"cpointLatLong.lng\" (markerClick)=\"updateDiv(cpointLatLong)\" [iconUrl]=\"'assets/images/map-localization.png'\"></agm-marker>\n    </span>\n  </agm-map>\n</div>\n  <div class=\"container-fluid\">\n    <h3>YOUR SELECTION : {{this.selectCollectionPointName}}</h3>\n    <button [disabled]=\"!selected\" class=\"pull-right btn btn-primary\"  (click)=\"createDropOff()\">Next &raquo;</button>\n  </div>\n</div>\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/sell/sell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_googlemaps_service_client__ = __webpack_require__("../../../../../src/app/services/googlemaps.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cpoint_service_client__ = __webpack_require__("../../../../../src/app/services/cpoint.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_latlong_model_client__ = __webpack_require__("../../../../../src/app/models/latlong.model.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SellComponent = (function () {
    function SellComponent(userService, activatedRoute, router, mapsAPILoader, ngZone, mapsService, sharedService, collectionPointService) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.mapsService = mapsService;
        this.sharedService = sharedService;
        this.collectionPointService = collectionPointService;
        this.latLongs = new Array();
        this.selected = false;
    }
    SellComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIdentity = this.sharedService.user;
        //set google maps defaults
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]();
        //set current position
        this.setCurrentPosition();
        this.populateCollectionPoints();
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    SellComponent.prototype.populateCollectionPoints = function () {
        var _this = this;
        this.collectionPointService.findCollectionPoints().subscribe(function (data) {
            _this.collectionPoints = data;
            for (var i = 0; i < _this.collectionPoints.length; ++i) {
                _this.returnLatLong(i, _this.collectionPoints[i]);
            }
        }, function (error) {
        });
    };
    SellComponent.prototype.returnLatLong = function (index, collectionPoint) {
        var _this = this;
        var i = index;
        this.mapsService.findLatLong(collectionPoint.street + ',' + collectionPoint.city + ',' + collectionPoint.state + ' ' + collectionPoint.postCode)
            .subscribe(function (data) {
            _this.latLongs.push(new __WEBPACK_IMPORTED_MODULE_8__models_latlong_model_client__["a" /* LatLong */](data.results[0].geometry.location.lat, data.results[0].geometry.location.lng, _this.collectionPoints[i]._id, _this.collectionPoints[i].name));
        }, function (error) {
        });
    };
    SellComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        this.mapsService.findLatLong(this.userIdentity.address)
            .subscribe(function (data) {
            _this.latitude = data.results[0].geometry.location.lat;
            _this.longitude = data.results[0].geometry.location.lng;
            _this.zoom = 12;
        }, function (error) {
        });
    };
    SellComponent.prototype.updateDiv = function (collectionPointLatLong) {
        this.selectCollectionPoint = collectionPointLatLong.id;
        this.selectCollectionPointName = collectionPointLatLong.name;
        this.selected = true;
    };
    SellComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    SellComponent.prototype.createDropOff = function () {
        this.router.navigate(['/user', this.userId, 'sell', this.selectCollectionPoint, 'dropoff', 'new']);
    };
    return SellComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("search"),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object)
], SellComponent.prototype, "searchElementRef", void 0);
SellComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-sell',
        template: __webpack_require__("../../../../../src/app/components/sell/sell.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sell/sell.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* MapsAPILoader */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* NgZone */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_googlemaps_service_client__["a" /* GoogleMapsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_googlemaps_service_client__["a" /* GoogleMapsService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service_client__["a" /* SharedService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__services_cpoint_service_client__["a" /* CollectionPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_cpoint_service_client__["a" /* CollectionPointService */]) === "function" && _j || Object])
], SellComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=sell.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--heading on the nav bar-->\n      <div class=\"col-sm-10 col-md-10 col-lg-10 col-xs-10\">\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'||userIdentity.role=='Employee'||userIdentity.role=='Organization'\">\n        <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user']\">\n        <b>Home</b>\n      </a>\n    </p>\n  <span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'\">\n    <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user' , userId, 'sell']\">\n        <b>Sell</b>\n      </a>\n    </p>\n\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'dropoff']\" >\n            <b>DropOffs</b>\n          </a>\n        </p>\n  </span>\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='Employee'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'cpoint']\" >\n            <b>Collection Points</b>\n          </a>\n        </p>\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'catalog']\" >\n            <b>Catalog</b>\n          </a>\n        </p>\n</span>\n  <span *ngIf=\"userIdentity.role=='Admin'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'manage','user']\" >\n            <b>Manage Users</b>\n          </a>\n        </p>\n</span>\n  <!--tick mark-->\n</span>\n\n\n      </div>\n      <div class=\"col-sm-1 col-md-2 col-lg-2 col-xs-1\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">\n          <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"panel panel-primary\" style=\"margin:20px;\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Create User</h3>\n  </div>\n  <div class=\"panel-body\">\n    <form (ngSubmit)=\"createUser()\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input name=\"userName\"\n               id=\"userName\"\n               ngModel=\"\"\n               required=\"\"\n               placeholder=\"username\"\n               type=\"text\"\n               class=\"form-control\"\n               #userName=\"ngModel\"/>\n        <span class=\"help-block\"\n              *ngIf=\"!userName.valid && userName.touched\">\n            Please enter username!\n      </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input name=\"email\"\n               id=\"email\"\n               ngModel=\"\"\n               required=\"\"\n               placeholder=\"email\"\n               type=\"email\"\n               class=\"form-control\"\n               #email=\"ngModel\"\n               email/>\n        <span class=\"help-block\"\n              *ngIf=\"!email.valid && email.touched\">\n            Please enter email!\n          </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input name=\"firstName\"\n               id=\"firstName\"\n               ngModel=\"\"\n               required=\"\"\n               placeholder=\"First Name\"\n               type=\"text\"\n               class=\"form-control\"\n               #firstName=\"ngModel\"/>\n        <span class=\"help-block\"\n              *ngIf=\"!firstName.valid && firstName.touched\">\n            Please enter firstName!\n          </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"lastName\">Last Name</label>\n        <input name=\"lastName\"\n               id=\"lastName\"\n               ngModel=\"\"\n               required=\"\"\n               placeholder=\"Last Name\"\n               type=\"text\"\n               class=\"form-control\"\n               #lastName=\"ngModel\"/>\n        <span class=\"help-block\"\n              *ngIf=\"!lastName.valid && lastName.touched\">\n            Please enter lastName!\n          </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input name=\"password\"\n               id=\"password\"\n               ngModel=\"\"\n               required=\"\"\n               placeholder=\"password\"\n               type=\"password\"\n               class=\"form-control\"\n               #password=\"ngModel\"/>\n        <span class=\"help-block\"\n              *ngIf=\"!password.valid && password.touched\">\n            Please enter a password!\n          </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"verifyPassword\">Verify Password</label>\n        <input name=\"verifyPassword\"\n               id=\"verifyPassword\"\n               ngModel=\"\"\n               required\n               placeholder=\"verify password\"\n               type=\"password\"\n               class=\"form-control\"\n               #verifyPassword=\"ngModel\"/>\n        <span class=\"help-block\"\n              *ngIf=\"!verifyPassword.valid && verifyPassword.touched && isPasswordVerified()\">\n            Your passwords do not match!!\n          </span>\n      </div>\n      <div class=\"form-group\">\n        <label>Address</label>\n        <textarea id=\"address\"  class=\"form-control\" name=\"address\" rows=\"5\"  #buyerAddress=\"ngModel\" [(ngModel)]=this.address required>\n        </textarea>\n      </div>\n      <div class=\"form-group\">\n        <label>User Type</label>\n        <select name=\"roleType\" [(ngModel)]=\"userRole\">\n          <option *ngFor=\"let role of roles\" [ngValue]=\"role\" >{{role}}</option>\n        </select>\n      </div>\n      <div *ngIf=\"this.userRole=='Organization'\">\n        <div class=\"form-group\">\n          <label>Organization Name</label>\n          <input name=\"orgName\"\n                 id=\"orgName\"\n                 ngModel=\"\"\n                 required=\"\"\n                 placeholder=\"Organization Name\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 #lastName=\"ngModel\"/>\n        </div>\n      </div>\n      <div *ngIf=\"userRole=='Employee'\">\n        <div class=\"form-group\">\n          <label>EmployeeId</label>\n          <input name=\"empId\"\n                 id=\"empId\"\n                 ngModel=\"\"\n                 required=\"\"\n                 placeholder=\"Your Employee ID\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 #lastName=\"ngModel\"/>\n        </div>\n      </div>\n      <div *ngIf=\"userRole=='Buyer'\">\n        <div class=\"form-group\">\n          <label>Buyer Name</label>\n          <input name=\"buyerName\"\n                 id=\"buyerName\"\n                 ngModel=\"\"\n                 required=\"\"\n                 placeholder=\"Enter the name of the refinery or organization\"\n                 type=\"text\"\n                 class=\"form-control\"\n                 #lastName=\"ngModel\"/>\n        </div>\n      </div>\n      <div *ngIf=\"errorFlag\"\n           class=\"alert alert-danger\">\n        {{errorMsg}}\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-primary btn-block\"\n                [disabled]=\"!f.valid\">\n          Create User\n        </button>\n      </div>\n      <div class=\"form-group\">\n        <a class=\"btn btn-danger btn-block\"\n           routerLink=\"/login\">\n          Cancel\n        </a>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateComponent = (function () {
    function CreateComponent(userService, router, sharedService, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
        this.roles = ['User', 'Organization', 'Employee', 'Buyer', 'Admin'];
        this.address = '';
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__["a" /* User */]('', '', '', '', '', '', '', '', '', '', '');
        this.userRole = 'User';
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.creatorUserId = params['uid'];
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.userIdentity = _this.sharedService.user;
        });
    };
    CreateComponent.prototype.createUser = function () {
        var _this = this;
        if (this.registrationForm.valid) {
            this.user.username = this.registrationForm.value.userName;
            this.user.password = this.registrationForm.value.password;
            this.user.firstName = this.registrationForm.value.firstName;
            this.user.lastName = this.registrationForm.value.lastName;
            this.user.email = this.registrationForm.value.email;
            this.user.role = this.userRole.toString();
            this.user.employeeId = this.registrationForm.value.empId;
            this.user.organizationName = this.registrationForm.value.orgName;
            this.user.address = this.address;
            this.user.buyerName = this.registrationForm.value.buyerName;
            this.userService.createUser(this.user)
                .subscribe(function (data) {
                if (data) {
                    _this.router.navigate(['/user', _this.creatorUserId, 'manage', 'user']);
                }
                else {
                    _this.errorFlag = true;
                    _this.errorMsg = 'Failed to create the user';
                }
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMsg = 'Please enter the correct values';
            });
        }
        else {
            this.errorFlag = true;
            this.errorMsg = 'Please enter the correct values';
        }
    };
    CreateComponent.prototype.isPasswordVerified = function () {
        return (this.registrationForm.value.password === this.registrationForm.value.verifyPassword);
    };
    return CreateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], CreateComponent.prototype, "registrationForm", void 0);
CreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-create',
        template: __webpack_require__("../../../../../src/app/components/user/create/create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/create/create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], CreateComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--heading on the nav bar-->\n      <div class=\"col-sm-11 col-md-10 col-lg-10 col-xs-11\">\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'||userIdentity.role=='Employee'||userIdentity.role=='Organization'\">\n        <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user']\">\n        <b>Home</b>\n      </a>\n    </p>\n  <span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'\">\n    <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user' , userId, 'sell']\">\n        <b>Sell</b>\n      </a>\n    </p>\n\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'dropoff']\" >\n            <b>DropOffs</b>\n          </a>\n        </p>\n  </span>\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='Employee'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'cpoint']\" >\n            <b>Collection Points</b>\n          </a>\n        </p>\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'catalog']\" >\n            <b>Catalog</b>\n          </a>\n        </p>\n</span>\n  <span *ngIf=\"userIdentity.role=='Admin'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'manage','user']\" >\n            <b>Manage Users</b>\n          </a>\n        </p>\n</span>\n  <!--tick mark-->\n</span>\n\n\n      </div>\n      <div class=\"col-sm-1 col-md-2 col-lg-2 col-xs-1\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">\n          <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n\n\n<div class=\"container-fluid\">\n  <div class=\"panel panel-primary\" style=\"margin:50px;\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Edit User</h3>\n    </div>\n    <div class=\"panel-body\">\n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"username\">Username</label>\n          <input type=\"text\" name=\"username\" class=\"form-control\" id=\"username\" [(ngModel)]=\"user.username\"  ngModel=\"\" required #username=\"ngModel\">\n          <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n      </span>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"email\">Email </label>\n          <input type=\"email\" name=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"user.email\" ngModel=\"\" email #email=\"ngModel\">\n          <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n      Please enter a valid email!\n      </span>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"first-name\">First Name</label>\n          <input type=\"text\" name=\"firstname\" class=\"form-control\" id=\"first-name\" [(ngModel)]=\"user.firstName\" ngModel=\"\" required #firstname=\"ngModel\">\n          <span class=\"help-block\" *ngIf=\"!firstname.valid && firstname.touched\">\n      Please enter a valid first name!\n      </span>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"last-name\">Last Name</label>\n          <input type=\"text\" name=\"lastname\" class=\"form-control\" id=\"last-name\" [(ngModel)]=\"user.lastName\" ngModel=\"\" required #lastname=\"ngModel\">\n          <span class=\"help-block\" *ngIf=\"!lastname.valid && lastname.touched\">\n      Please enter a valid second name!\n      </span>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"address\">Address</label>\n          <textarea id=\"address\"  class=\"form-control\" name=\"address\" rows=\"5\"  #buyerAddress=\"ngModel\" [(ngModel)]=user.address required>\n        </textarea>\n        </div>\n\n        <div class=\"form-group\">\n          <label>User Type</label>\n          <select name=\"roleType\" [(ngModel)]=user.role>\n            <option *ngFor=\"let role of roles\" [ngValue]=\"role\" >{{role}}</option>\n          </select>\n        </div>\n\n        <div *ngIf=\"this.user.role=='Organization'\">\n          <div class=\"form-group\">\n            <label for=\"orgName\">Organization Name</label>\n            <input name=\"orgName\"\n                   id=\"orgName\"\n                   [(ngModel)]=\"user.organizationName\"\n                   required=\"\"\n                   placeholder=\"Organization Name\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   #lastName=\"ngModel\"/>\n          </div>\n        </div>\n\n        <div *ngIf=\"user.role=='Employee'\">\n          <div class=\"form-group\">\n            <label>EmployeeId</label>\n            <input name=\"empId\"\n                   id=\"empId\"\n                   [(ngModel)]=\"user.employeeId\"\n                   required=\"\"\n                   placeholder=\"Your Employee ID\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   #lastName=\"ngModel\"/>\n          </div>\n        </div>\n\n        <div *ngIf=\"user.role=='Buyer'\">\n          <div class=\"form-group\">\n            <label>Buyer Name</label>\n            <input name=\"buyerName\"\n                   id=\"buyerName\"\n                   [(ngModel)]=\"user.buyerName\"\n                   required=\"\"\n                   placeholder=\"Enter the name of the refinery or organization\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   #lastName=\"ngModel\"/>\n          </div>\n        </div>\n\n        <div *ngIf=\"isInvalid\"\n             class=\"alert alert-danger\">\n          {{notificationMessage}}\n        </div>\n\n        <div class=\"form-group\">\n        <a class=\"btn btn-primary btn-block\"\n           (click)=\"editProfile()\">Save Profile</a>\n        </div>\n        <div class=\"form-group\">\n          <a class=\"btn btn-danger btn-block\"\n             (click)=\"deleteUser()\" >Delete</a>\n        </div>\n\n      </form>\n    </div>\n\n\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditComponent = (function () {
    function EditComponent(userService, router, sharedService, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__["a" /* User */]('', '', '', '', '', '', '', '', '', '', '');
        this.roles = ['User', 'Organization', 'Employee', 'Buyer', 'Admin'];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.creatorUserId = params['uid'];
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.userIdentity = _this.sharedService.user;
        });
        this.userService.findUserById(this.userId)
            .subscribe(function (data) {
            _this.user = data;
        }, function (error) {
        });
    };
    EditComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    EditComponent.prototype.editProfile = function () {
        var _this = this;
        if (this.profileForm.valid) {
            this.user.username = this.profileForm.value.username;
            this.user.password = this.profileForm.value.password;
            this.user.firstName = this.profileForm.value.firstname;
            this.user.lastName = this.profileForm.value.lastname;
            this.user.email = this.profileForm.value.email;
            this.user.employeeId = this.profileForm.value.empId;
            this.user.organizationName = this.profileForm.value.orgName;
            this.user.address = this.profileForm.value.address;
            this.user.buyerName = this.profileForm.value.buyerName;
            this.userService.updateUser(this.userId, this.user).subscribe(function (data) {
                if (data == null) {
                    _this.isInvalid = true;
                    _this.notificationMessage = 'Error updating profile information';
                }
                else {
                    _this.isInvalid = false;
                    _this.router.navigate(['/user', _this.creatorUserId, 'manage', 'user']);
                }
            }, function (error) {
                _this.isInvalid = true;
                _this.notificationMessage = 'Error updating profile information';
            });
        }
        else {
            this.notificationMessage = 'Please Enter The Correct Values';
            this.isInvalid = true;
        }
    };
    EditComponent.prototype.deleteUser = function () {
        var _this = this;
        this.userService.deleteUser(this.userId)
            .subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/user', _this.creatorUserId, 'manage', 'user']);
            }
            else {
                _this.notificationMessage = 'Please Enter The Correct Values';
                _this.isInvalid = true;
            }
        }, function (error) {
        });
    };
    return EditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], EditComponent.prototype, "profileForm", void 0);
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-edit',
        template: __webpack_require__("../../../../../src/app/components/user/edit/edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/edit/edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _e || Object])
], EditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--heading on the nav bar-->\n      <div class=\"col-sm-11 col-md-10 col-lg-10 col-xs-11\">\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'||userIdentity.role=='Employee'||userIdentity.role=='Organization'\">\n        <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user']\">\n        <b>Home</b>\n      </a>\n    </p>\n  <span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'\">\n    <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user' , userId, 'sell']\">\n        <b>Sell</b>\n      </a>\n    </p>\n\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'dropoff']\" >\n            <b>DropOffs</b>\n          </a>\n        </p>\n  </span>\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='Employee'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'cpoint']\" >\n            <b>Collection Points</b>\n          </a>\n        </p>\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'catalog']\" >\n            <b>Catalog</b>\n          </a>\n        </p>\n</span>\n  <span *ngIf=\"userIdentity.role=='Admin'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'manage','user']\" >\n            <b>Manage Users</b>\n          </a>\n        </p>\n</span>\n  <!--tick mark-->\n</span>\n\n\n      </div>\n      <div class=\"col-sm-1 col-md-2 col-lg-2 col-xs-1\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">\n          <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"etm-page-body\">\n  <div class=\"container-fluid\">\n    <div class=\"row-fluid\">\n      <div class=\"span3\"><span class=\"h4 text-primary\">Application Users</span> <p class=\"pull-right\">\n        <a [routerLink]= \" [ '/user' , userId , 'manage' , 'user','new']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n      </div>\n    </div>\n    <table class=\"table table-striped\">\n      <thead>\n      <tr>\n        <th>ID</th>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Role</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let user of users\">\n      <td>{{user._id}}</td>\n      <td>{{user.firstName}}</td>\n      <td>{{user.lastName}}</td>\n      <td>{{user.role}}</td>\n      <td>\n        <a [routerLink]= \" ['/user' , userId , 'manage' , 'user',user._id]\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\n      </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = (function () {
    function ListComponent(router, userService, activatedRoute, sharedService) {
        this.router = router;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.users = [{}];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.userIdentity = _this.sharedService.user;
        });
        this.userService.findAllUsers(this.userId)
            .subscribe(function (data) {
            _this.users = data;
        }, function (error) {
        });
    };
    ListComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/components/user/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], ListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-inverse bg-inverse bg-primary\" >\n  <div class=\" container-fluid topnav\" id=\"myTopnav\">\n    <a class=\"navbar-brand pull-left\" href=\"#\">Home</a>\n    <a class=\"navbar-brand pull-left\" href=\"#\">About Us</a>\n    <a class=\"navbar-brand pull-left\" [routerLink]= \" [ '/buy']\">Buy</a>\n    <a class=\"navbar-brand pull-right\" [routerLink]= \" [ '/login']\">Login</a>\n    <a class=\"navbar-brand pull-right\" [routerLink]= \" [ '/register']\">Register</a>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <div class=\"panel panel-primary\" style=\"margin:20px;\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Login</h3>\n    </div>\n    <div class=\"panel-body\">\n      <input placeholder=\"username\"\n             [(ngModel)]=\"username\"\n             type=\"text\"\n             class=\"form-control\"/>\n      <input placeholder=\"password\"\n             [(ngModel)]=\"password\"\n             type=\"password\"\n             class=\"form-control\"/>\n      <div *ngIf=\"isInvalid\"\n           class=\"alert alert-danger\">\n        {{notificationMessage}}\n      </div>\n      <a class=\"btn btn-primary btn-block\" (click)=\"login(username,password)\">Login</a>\n      <a class=\"btn btn-success btn-block\" (click)=\"register()\">Register</a>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(sharedService, userService, router) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.userService.login(this.username, this.password)
            .subscribe(function (data) {
            if (data == null) {
                _this.notificationMessage = 'Please Enter a Valid User Name and Password';
                _this.isInvalid = true;
            }
            else {
                _this.isInvalid = false;
                _this.sharedService.user = data;
                _this.router.navigate(['/user']);
            }
        }, function (error) {
            _this.notificationMessage = 'Please Enter a Valid User Name and Password';
            _this.isInvalid = true;
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_shared_service_client__["a" /* SharedService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n    <!--heading on the nav bar-->\n      <div class=\"col-sm-11 col-md-10 col-lg-10 col-xs-11\">\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'||userIdentity.role=='Employee'||userIdentity.role=='Organization'\">\n        <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user']\">\n        <b>Home</b>\n      </a>\n    </p>\n  <span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='User'\">\n    <p class=\"pull-left navbar-text\">\n      <a [routerLink]= \" [ '/user' , userId, 'sell']\">\n        <b>Sell</b>\n      </a>\n    </p>\n\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'dropoff']\" >\n            <b>DropOffs</b>\n          </a>\n        </p>\n  </span>\n\n<span *ngIf=\"userIdentity.role=='Admin'||userIdentity.role=='Employee'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'cpoint']\" >\n            <b>Collection Points</b>\n          </a>\n        </p>\n\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'catalog']\" >\n            <b>Catalog</b>\n          </a>\n        </p>\n</span>\n  <span *ngIf=\"userIdentity.role=='Admin'\">\n        <p class=\"pull-left navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'manage','user']\" >\n            <b>Manage Users</b>\n          </a>\n        </p>\n</span>\n    <!--tick mark-->\n</span>\n\n\n  </div>\n      <div class=\"col-sm-1 col-md-2 col-lg-2 col-xs-1\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">\n          <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n        </button>\n      </div>\n  </div>\n  </div>\n</nav>\n\n\n\n\n\n<div class=\"container-fluid\">\n  <div class=\"panel panel-primary\" style=\"margin:50px;\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Profile</h3>\n    </div>\n    <div class=\"panel-body\">\n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"username\">Username</label>\n          <input type=\"text\" name=\"username\" class=\"form-control\" id=\"username\" [(ngModel)]=\"user.username\"  ngModel=\"\" required #username=\"ngModel\">\n          <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n      </span>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"email\">Email </label>\n          <input type=\"email\" name=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"user.email\" ngModel=\"\" email #email=\"ngModel\">\n          <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n      Please enter a valid email!\n      </span>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"first-name\">First Name</label>\n          <input type=\"text\" name=\"firstname\" class=\"form-control\" id=\"first-name\" [(ngModel)]=\"user.firstName\" ngModel=\"\" required #firstname=\"ngModel\">\n          <span class=\"help-block\" *ngIf=\"!firstname.valid && firstname.touched\">\n      Please enter a valid first name!\n      </span>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"last-name\">Last Name</label>\n          <input type=\"text\" name=\"lastname\" class=\"form-control\" id=\"last-name\" [(ngModel)]=\"user.lastName\" ngModel=\"\" required #lastname=\"ngModel\">\n          <span class=\"help-block\" *ngIf=\"!lastname.valid && lastname.touched\">\n      Please enter a valid second name!\n      </span>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"address\">Address</label>\n          <textarea id=\"address\"  class=\"form-control\" name=\"address\" rows=\"5\"  #buyerAddress=\"ngModel\" [(ngModel)]=user.address required>\n        </textarea>\n        </div>\n\n        <div *ngIf=\"this.user.role=='Organization'\">\n          <div class=\"form-group\">\n            <label for=\"orgName\">Organization Name</label>\n            <input name=\"orgName\"\n                   id=\"orgName\"\n                   [(ngModel)]=\"user.organizationName\"\n                   required=\"\"\n                   placeholder=\"Organization Name\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   #lastName=\"ngModel\"/>\n          </div>\n        </div>\n\n        <div *ngIf=\"user.role=='Employee'\">\n          <div class=\"form-group\">\n            <label>EmployeeId</label>\n            <input name=\"empId\"\n                   id=\"empId\"\n                   [(ngModel)]=\"user.employeeId\"\n                   required=\"\"\n                   placeholder=\"Your Employee ID\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   #lastName=\"ngModel\"/>\n          </div>\n        </div>\n\n        <div *ngIf=\"user.role=='Buyer'\">\n          <div class=\"form-group\">\n            <label>Buyer Name</label>\n            <input name=\"buyerName\"\n                   id=\"buyerName\"\n                   [(ngModel)]=\"user.buyerName\"\n                   required=\"\"\n                   placeholder=\"Enter the name of the refinery or organization\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   #lastName=\"ngModel\"/>\n          </div>\n        </div>\n\n        <div *ngIf=\"isInvalid\"\n             class=\"alert alert-danger\">\n          {{notificationMessage}}\n        </div>\n\n        <a class=\"btn btn-primary btn-block\"\n           (click)=\"editProfile()\">Save Profile</a>\n\n      </form>\n    </div>\n\n\n</div>\n</div>\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(route, userService, router, sharedService) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__["a" /* User */]('', '', '', '', '', '', '', '', '', '', '');
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userIdentity = _this.sharedService.user;
        });
        if (this.userIdentity) {
            this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__["a" /* User */](this.userIdentity._id, this.userIdentity.username, this.userIdentity.password, this.userIdentity.email, this.userIdentity.firstName, this.userIdentity.lastName, this.userIdentity.role, this.userIdentity.employeeId, this.userIdentity.organizationName, this.userIdentity.buyerName, this.userIdentity.address);
            this.userId = this.user._id;
        }
        else {
            this.router.navigate(['/login']);
        }
        /*
         this.userService.findUserById(this.userId)
         .subscribe(
         (data: any) => {
         this.user = data;
         if (!this.user) {
         this.router.navigate(['/login']);
         }
         },
         (error: any) => {
         this.isInvalid = true;
         this.notificationMessage = 'Error fetching users profile information' ;
         }
         );
         */
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    ProfileComponent.prototype.editProfile = function () {
        var _this = this;
        if (this.profileForm.valid) {
            this.user.username = this.profileForm.value.username;
            this.user.password = this.profileForm.value.password;
            this.user.firstName = this.profileForm.value.firstname;
            this.user.lastName = this.profileForm.value.lastname;
            this.user.email = this.profileForm.value.email;
            this.user.employeeId = this.profileForm.value.empId;
            this.user.organizationName = this.profileForm.value.orgName;
            this.user.address = this.profileForm.value.address;
            this.user.buyerName = this.profileForm.value.buyerName;
            this.userService.updateUser(this.userId, this.user).subscribe(function (data) {
                if (data == null) {
                    _this.isInvalid = true;
                    _this.notificationMessage = 'Error updating profile information';
                }
                else {
                    _this.isInvalid = false;
                }
            }, function (error) {
                _this.isInvalid = true;
                _this.notificationMessage = 'Error updating profile information';
            });
        }
        else {
            this.notificationMessage = 'Please Enter The Correct Values';
            this.isInvalid = true;
        }
    };
    return ProfileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], ProfileComponent.prototype, "profileForm", void 0);
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar-inverse bg-inverse bg-primary\" >\n  <div class=\" container-fluid topnav\" id=\"myTopnav\">\n    <a class=\"navbar-brand pull-left\" href=\"#\">Home</a>\n    <a class=\"navbar-brand pull-left\" href=\"#\">About Us</a>\n    <a class=\"navbar-brand pull-left\" [routerLink]= \" [ '/buy']\">Buy</a>\n    <a class=\"navbar-brand pull-right\" [routerLink]= \" [ '/login']\">Login</a>\n    <a class=\"navbar-brand pull-right\" [routerLink]= \" [ '/register']\">Register</a>\n  </div>\n</nav>\n\n<div class=\"panel panel-primary\" style=\"margin:20px;\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Registration Form</h3>\n  </div>\n<div class=\"panel-body\">\n  <form (ngSubmit)=\"createUser()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input name=\"userName\"\n             id=\"userName\"\n             ngModel=\"\"\n             required=\"\"\n             placeholder=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             #userName=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!userName.valid && userName.touched\">\n            Please enter username!\n      </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input name=\"email\"\n             id=\"email\"\n             ngModel=\"\"\n             required=\"\"\n             placeholder=\"email\"\n             type=\"email\"\n             class=\"form-control\"\n             #email=\"ngModel\"\n             email/>\n      <span class=\"help-block\"\n            *ngIf=\"!email.valid && email.touched\">\n            Please enter email!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input name=\"firstName\"\n             id=\"firstName\"\n             ngModel=\"\"\n             required=\"\"\n             placeholder=\"First Name\"\n             type=\"text\"\n             class=\"form-control\"\n             #firstName=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!firstName.valid && firstName.touched\">\n            Please enter firstName!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input name=\"lastName\"\n             id=\"lastName\"\n             ngModel=\"\"\n             required=\"\"\n             placeholder=\"Last Name\"\n             type=\"text\"\n             class=\"form-control\"\n             #lastName=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!lastName.valid && lastName.touched\">\n            Please enter lastName!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input name=\"password\"\n             id=\"password\"\n             ngModel=\"\"\n             required=\"\"\n             placeholder=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             #password=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!password.valid && password.touched\">\n            Please enter a password!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"verifyPassword\">Verify Password</label>\n      <input name=\"verifyPassword\"\n             id=\"verifyPassword\"\n             ngModel=\"\"\n             required\n             placeholder=\"verify password\"\n             type=\"password\"\n             class=\"form-control\"\n             #verifyPassword=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!verifyPassword.valid && verifyPassword.touched && isPasswordVerified()\">\n            Your passwords do not match!!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label>Address</label>\n      <textarea id=\"address\"  class=\"form-control\" name=\"address\" rows=\"5\"  #buyerAddress=\"ngModel\" [(ngModel)]=this.address required>\n        </textarea>\n    </div>\n    <div class=\"form-group\">\n      <label>User Type</label>\n      <select name=\"roleType\" [(ngModel)]=\"userRole\">\n        <option *ngFor=\"let role of roles\" [ngValue]=\"role\" >{{role}}</option>\n      </select>\n    </div>\n    <div *ngIf=\"this.userRole=='Organization'\">\n      <div class=\"form-group\">\n        <label>Organization Name</label>\n        <input name=\"orgName\"\n               id=\"orgName\"\n               ngModel=\"\"\n               required=\"\"\n               placeholder=\"Organization Name\"\n               type=\"text\"\n               class=\"form-control\"\n               #lastName=\"ngModel\"/>\n      </div>\n    </div>\n    <div *ngIf=\"userRole=='Employee'\">\n      <div class=\"form-group\">\n        <label>EmployeeId</label>\n        <input name=\"empId\"\n               id=\"empId\"\n               ngModel=\"\"\n               required=\"\"\n               placeholder=\"Your Employee ID\"\n               type=\"text\"\n               class=\"form-control\"\n               #lastName=\"ngModel\"/>\n      </div>\n    </div>\n    <div *ngIf=\"userRole=='Buyer'\">\n      <div class=\"form-group\">\n        <label>Buyer Name</label>\n        <input name=\"buyerName\"\n               id=\"buyerName\"\n               ngModel=\"\"\n               required=\"\"\n               placeholder=\"Enter the name of the refinery or organization\"\n               type=\"text\"\n               class=\"form-control\"\n               #lastName=\"ngModel\"/>\n      </div>\n    </div>\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-primary btn-block\"\n              [disabled]=\"!f.valid\">\n        Register\n      </button>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\"\n         routerLink=\"/login\">\n        Cancel\n      </a>\n    </div>\n  </form>\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(userService, router, sharedService) {
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.roles = ['User', 'Organization', 'Employee', 'Buyer', 'Admin'];
        this.address = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__["a" /* User */]('', '', '', '', '', '', '', '', '', '', '');
        this.userRole = 'User';
    };
    RegisterComponent.prototype.createUser = function () {
        var _this = this;
        console.log(this.userRole);
        if (this.registrationForm.valid) {
            this.user.username = this.registrationForm.value.userName;
            this.user.password = this.registrationForm.value.password;
            this.user.firstName = this.registrationForm.value.firstName;
            this.user.lastName = this.registrationForm.value.lastName;
            this.user.email = this.registrationForm.value.email;
            this.user.role = this.userRole.toString();
            this.user.employeeId = this.registrationForm.value.empId;
            this.user.organizationName = this.registrationForm.value.orgName;
            this.user.address = this.address;
            this.user.buyerName = this.registrationForm.value.buyerName;
            this.userService.register(this.user)
                .subscribe(function (data) {
                _this.user = data;
                if (_this.user) {
                    _this.sharedService.user = data;
                    _this.router.navigate(['/user']);
                }
                else {
                    _this.errorFlag = true;
                    _this.errorMsg = 'Failed to create the user';
                }
            }, function (error) {
                _this.errorFlag = true;
                _this.errorMsg = 'Please enter the correct values';
            });
        }
        else {
            this.errorFlag = true;
            this.errorMsg = 'Please enter the correct values';
        }
    };
    RegisterComponent.prototype.isPasswordVerified = function () {
        return (this.registrationForm.value.password === this.registrationForm.value.verifyPassword);
    };
    return RegisterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "registrationForm", void 0);
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service_client__["a" /* SharedService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/catalog.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Catalog; });
var Catalog = (function () {
    function Catalog(_id, name, description, price, quantity, imageUrl) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.imageUrl = imageUrl;
    }
    return Catalog;
}());

//# sourceMappingURL=catalog.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/cpoint.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionPoint; });
var CollectionPoint = (function () {
    function CollectionPoint(_id, name, street, city, state, postCode, country) {
        this._id = _id;
        this.name = name;
        this.street = street;
        this.city = city;
        this.state = state;
        this.postCode = postCode;
        this.country = country;
    }
    return CollectionPoint;
}());

//# sourceMappingURL=cpoint.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/dropOff.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropOff; });
/**
 * Created by hemanthshetty on 12/10/17.
 */
var DropOff = (function () {
    function DropOff(_id, customerId, collectionPointId, inventory, status) {
        this._id = _id;
        this.customerId = customerId;
        this.collectionPointId = collectionPointId;
        this.inventory = inventory;
        this.status = status;
    }
    return DropOff;
}());

//# sourceMappingURL=dropOff.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/inventory.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Inventory; });
var Inventory = (function () {
    function Inventory(id, quantity, itemName) {
        this.itemId = id;
        this.quantity = quantity;
        this.itemName = itemName;
    }
    return Inventory;
}());

//# sourceMappingURL=inventory.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/latlong.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LatLong; });
/**
 * Created by hemanthshetty on 12/13/17.
 */
var LatLong = (function () {
    function LatLong(lat, lng, id, name) {
        this.lat = lat;
        this.lng = lng;
        this.id = id;
        this.name = name;
    }
    return LatLong;
}());

//# sourceMappingURL=latlong.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, username, password, email, firstName, lastName, role, employeeId, organizationName, buyerName, address) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.employeeId = employeeId;
        this.organizationName = organizationName;
        this.buyerName = buyerName;
        this.address = address;
    }
    return User;
}());

//# sourceMappingURL=user.model.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/catalog.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogService; });
/**
 * Created by hemanthshetty on 12/9/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CatalogService = (function () {
    function CatalogService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    CatalogService.prototype.getItems = function () {
        return this._http.get(this.baseUrl + '/api/catalog')
            .map(function (res) {
            return res.json();
        });
    };
    CatalogService.prototype.createCatalogItem = function (catalogItem) {
        return this._http.post(this.baseUrl + '/api/catalog', catalogItem)
            .map(function (res) {
            return res.json();
        });
    };
    CatalogService.prototype.findItemById = function (itemId) {
        return this._http.get(this.baseUrl + '/api/catalog/' + itemId)
            .map(function (res) {
            return res.json();
        });
    };
    CatalogService.prototype.updateCatalogItem = function (itemId, catalogItemDetails) {
        return this._http.put(this.baseUrl + '/api/catalog/' + itemId, catalogItemDetails)
            .map(function (res) {
            return res.json();
        });
    };
    CatalogService.prototype.deleteCatalogItem = function (itemId) {
        return this._http.delete(this.baseUrl + '/api/catalog/' + itemId)
            .map(function (res) {
            return res.json();
        });
    };
    return CatalogService;
}());
CatalogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], CatalogService);

var _a;
//# sourceMappingURL=catalog.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/cpoint.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionPointService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CollectionPointService = (function () {
    function CollectionPointService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    CollectionPointService.prototype.findCollectionPoints = function () {
        return this._http.get(this.baseUrl + '/api/collectionpoint')
            .map(function (res) {
            return res.json();
        });
    };
    CollectionPointService.prototype.deleteCollectionPoint = function (cPointId) {
        return this._http.delete(this.baseUrl + '/api/collectionpoint/' + cPointId)
            .map(function (res) {
            return res.json();
        });
    };
    CollectionPointService.prototype.createCollectionPoint = function (collectionPoint) {
        return this._http.post(this.baseUrl + '/api/collectionpoint', collectionPoint)
            .map(function (res) {
            return res.json();
        });
    };
    return CollectionPointService;
}());
CollectionPointService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], CollectionPointService);

var _a;
//# sourceMappingURL=cpoint.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/dropoff.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropOffService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// injecting service into module
var DropOffService = (function () {
    function DropOffService(_http, sharedService, router) {
        this._http = _http;
        this.sharedService = sharedService;
        this.router = router;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]();
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    DropOffService.prototype.createDropOff = function (dropOff, userId) {
        return this._http.post(this.baseUrl + '/api/user/' + userId + '/dropoff', dropOff)
            .map(function (res) {
            return res.json();
        });
    };
    DropOffService.prototype.findDropOffs = function (collectionPointId) {
        return this._http.get(this.baseUrl + '/api/collection/' + collectionPointId + '/dropoff')
            .map(function (res) {
            return res.json();
        });
    };
    DropOffService.prototype.findDropOffsForUser = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId + '/dropoff')
            .map(function (res) {
            return res.json();
        });
    };
    DropOffService.prototype.getDropOff = function (dropId) {
        return this._http.get(this.baseUrl + '/api/dropoff/' + dropId)
            .map(function (res) {
            return res.json();
        });
    };
    DropOffService.prototype.updateDropOff = function (cId, dropOff, dropOffId) {
        return this._http.put(this.baseUrl + '/api/collection/' + cId + '/dropoff/' + dropOffId, dropOff)
            .map(function (res) {
            return res.json();
        });
    };
    return DropOffService;
}());
DropOffService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object])
], DropOffService);

var _a, _b, _c;
//# sourceMappingURL=dropoff.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/googlemaps.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// injecting service into module



var GoogleMapsService = (function () {
    function GoogleMapsService(_http) {
        this._http = _http;
    }
    GoogleMapsService.prototype.findLatLong = function (address) {
        return this._http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + 'AIzaSyCMwJEcq8gK7hFL32MqJ91CwQNy1k6z6dw')
            .map(function (res) {
            return res.json();
        });
    };
    return GoogleMapsService;
}());
GoogleMapsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], GoogleMapsService);

var _a;
//# sourceMappingURL=googlemaps.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = (function () {
    function SharedService() {
        this.user = '';
    }
    return SharedService;
}());
SharedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], SharedService);

//# sourceMappingURL=shared.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// injecting service into module
var UserService = (function () {
    function UserService(_http, sharedService, router) {
        this._http = _http;
        this.sharedService = sharedService;
        this.router = router;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]();
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    UserService.prototype.register = function (user) {
        this.options.withCredentials = true;
        var credentials = {
            username: user.username,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            employeeId: user.employeeId,
            organizationName: user.organizationName,
            address: user.address,
            buyerName: user.buyerName
        };
        return this._http.post(this.baseUrl + '/api/register', credentials, this.options)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        var credentials = {
            username: username,
            password: password,
        };
        return this._http.post(this.baseUrl + '/api/login', credentials, this.options)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== 0) {
                _this.sharedService.user = user; // setting user so as to share with all components
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.createUser = function (user) {
        var userDetails = {
            username: user.username,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            employeeId: user.employeeId,
            organizationName: user.organizationName,
            address: user.address,
            buyerName: user.buyerName
        };
        return this._http.post(this.baseUrl + '/api/manage/user', userDetails)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this._http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this._http.put(this.baseUrl + '/api/user/' + userId, user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this._http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (res) {
            var data = res;
        });
    };
    UserService.prototype.findAllUsers = function (userId) {
        return this._http.get(this.baseUrl + '/api/' + userId + '/manage/user')
            .map(function (res) {
            return res.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: 'https://e-trash-management.herokuapp.com'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map