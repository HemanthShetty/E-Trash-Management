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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_shipment_shipment_component__ = __webpack_require__("../../../../../src/app/components/shipment/shipment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_payment_payment_component__ = __webpack_require__("../../../../../src/app/components/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_shared_service_client__ = __webpack_require__("../../../../../src/app/services/shared.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_collectionpoint_collectionpoint_edit_collectionpoint_edit_component__ = __webpack_require__("../../../../../src/app/components/collectionpoint/collectionpoint-edit/collectionpoint-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_collectionpoint_collectionpoint_new_collectionpoint_new_component__ = __webpack_require__("../../../../../src/app/components/collectionpoint/collectionpoint-new/collectionpoint-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_collectionpoint_collectionpoint_list_collectionpoint_list_component__ = __webpack_require__("../../../../../src/app/components/collectionpoint/collectionpoint-list/collectionpoint-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_cpoint_service_client__ = __webpack_require__("../../../../../src/app/services/cpoint.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_catalog_catalog_list_catalog_list_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog-list/catalog-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_catalog_catalog_new_catalog_new_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog-new/catalog-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_catalog_catalog_edit_catalog_edit_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog-edit/catalog-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_catalog_service_client__ = __webpack_require__("../../../../../src/app/services/catalog.service.client.ts");
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
            __WEBPACK_IMPORTED_MODULE_20__components_catalog_catalog_list_catalog_list_component__["a" /* CatalogListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_shipment_shipment_component__["a" /* ShipmentComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_payment_payment_component__["a" /* PaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_collectionpoint_collectionpoint_edit_collectionpoint_edit_component__["a" /* CollectionpointEditComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_collectionpoint_collectionpoint_new_collectionpoint_new_component__["a" /* CollectionpointNewComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_collectionpoint_collectionpoint_list_collectionpoint_list_component__["a" /* CollectionpointListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_catalog_catalog_list_catalog_list_component__["a" /* CatalogListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_catalog_catalog_new_catalog_new_component__["a" /* CatalogNewComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_catalog_catalog_edit_catalog_edit_component__["a" /* CatalogEditComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_15__agm_core__["a" /* AgmCoreModule */].forRoot({ apiKey: 'AIzaSyCMwJEcq8gK7hFL32MqJ91CwQNy1k6z6dw'
            })
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_13__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_14__services_shared_service_client__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_19__services_cpoint_service_client__["a" /* CollectionPointService */], __WEBPACK_IMPORTED_MODULE_23__services_catalog_service_client__["a" /* CatalogService */]],
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/**
 * Created by sesha on 7/26/17.
 */











var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:userId/cpoint', component: __WEBPACK_IMPORTED_MODULE_5__components_collectionpoint_collectionpoint_list_collectionpoint_list_component__["a" /* CollectionpointListComponent */] },
    { path: 'user/:uid/cpoint/new', component: __WEBPACK_IMPORTED_MODULE_6__components_collectionpoint_collectionpoint_new_collectionpoint_new_component__["a" /* CollectionpointNewComponent */] },
    { path: 'user/:uid/cpoint/:wid', component: __WEBPACK_IMPORTED_MODULE_7__components_collectionpoint_collectionpoint_edit_collectionpoint_edit_component__["a" /* CollectionpointEditComponent */] },
    { path: 'user/:uid/catalog', component: __WEBPACK_IMPORTED_MODULE_8__components_catalog_catalog_list_catalog_list_component__["a" /* CatalogListComponent */] },
    { path: 'user/:uid/catalog/new', component: __WEBPACK_IMPORTED_MODULE_9__components_catalog_catalog_new_catalog_new_component__["a" /* CatalogNewComponent */] },
    { path: 'user/:uid/catalog/:catalogId', component: __WEBPACK_IMPORTED_MODULE_10__components_catalog_catalog_edit_catalog_edit_component__["a" /* CatalogEditComponent */] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

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

module.exports = "<p>\n  catalog-edit works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog-edit/catalog-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function CatalogEditComponent() {
    }
    CatalogEditComponent.prototype.ngOnInit = function () {
    };
    return CatalogEditComponent;
}());
CatalogEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-catalog-edit',
        template: __webpack_require__("../../../../../src/app/components/catalog/catalog-edit/catalog-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/catalog/catalog-edit/catalog-edit.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CatalogEditComponent);

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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--heading on the nav bar-->\n      <div class=\"col-sm-10 col-md-10 col-lg-10 col-xs-10\">\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user']\">\n            <b>Home</b>\n          </a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'sell']\">\n            <b>Sell</b>\n          </a>\n        </p>\n\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'payments']\" >\n            <b>Payments</b>\n          </a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'pickup']\" >\n            <b>Pickup</b>\n          </a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'cpoint']\" >\n            <b>Collection Points</b>\n          </a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'cpoint']\" >\n            <b>Catalog</b>\n          </a>\n        </p>\n        <!--tick mark-->\n\n\n      </div>\n      <div class=\"col-sm-2 col-md-2 col-lg-2 col-xs-2\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">\n          <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n\n<div class=\"etm-page-body\">\n  <div class=\"container-fluid\">\n    <div class=\"row-fluid\">\n      <div class=\"span3\"><span class=\"h4 text-primary\">Catalog</span> <p class=\"pull-right\">\n        <a [routerLink]= \" [ '/user' , userId , 'catalog' , 'new']\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n      </div>\n    </div>\n    <div class=\"container-fluid\" *ngFor=\"let item of catalog\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\"><a><b>{{item.name}}</b></a>\n          <a [routerLink]= \" [ '/user' , userId , 'catalog' , item._id ,'edit']\"> <span class=\"pull-right glyphicon glyphicon-trash\"></span></a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog-list/catalog-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_catalog_service_client__ = __webpack_require__("../../../../../src/app/services/catalog.service.client.ts");
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
    function CatalogListComponent(catalogService, activatedRoute) {
        this.catalogService = catalogService;
        this.activatedRoute = activatedRoute;
        this.catalog = [{}];
    }
    CatalogListComponent.prototype.ngOnInit = function () {
        var _this = this;
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
    return CatalogListComponent;
}());
CatalogListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-catalog-list',
        template: __webpack_require__("../../../../../src/app/components/catalog/catalog-list/catalog-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/catalog/catalog-list/catalog-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_catalog_service_client__["a" /* CatalogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_catalog_service_client__["a" /* CatalogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], CatalogListComponent);

var _a, _b;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--heading on the nav bar-->\n      <div class=\"col-sm-10 col-md-10 col-lg-10 col-xs-10\">\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user']\">\n            <b>Home</b>\n          </a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'sell']\">\n            <b>Sell</b>\n          </a>\n        </p>\n\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'payments']\" >\n            <b>Payments</b>\n          </a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'pickup']\" >\n            <b>Pickup</b>\n          </a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'cpoint']\" >\n            <b>Collection Points</b>\n          </a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'catalog']\" >\n            <b>Catalog</b>\n          </a>\n        </p>\n        <!--tick mark-->\n\n\n      </div>\n      <div class=\"col-sm-2 col-md-2 col-lg-2 col-xs-2\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">\n          <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n\n<div class=\"etm-page-body\">\n  <div class=\"container-fluid\">\n    <form #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"catalogName\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"catalogName\" name=\"catalogName\" placeholder=\"Name\" ngModel=\"\" #catalogName=\"ngModel\" required>\n        <span class=\"help-block\"\n              *ngIf=\"!catalogName.valid && catalogName.touched\">\n            Enter a valid name for catalog Item!!\n          </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"catalogDescription\">Description</label>\n        <textarea rows=\"5\" type=\"text\" class=\"form-control\" id=\"catalogDescription\" name=\"catalogDescription\" placeholder=\"Enter the description\" ngModel=\"\" #catalogDescription=\"ngModel\" required></textarea>\n        <span class=\"help-block\"\n              *ngIf=\"!catalogDescription.valid && catalogDescription.touched\">\n            Enter a description!!\n          </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"catalogPrice\">Price</label>\n        <input type=\"text\" class=\"form-control\" id=\"catalogPrice\" name=\"catalogPrice\" placeholder=\"Enter the price\" ngModel=\"\" #catalogPrice=\"ngModel\" required>\n        <span class=\"help-block\"\n              *ngIf=\"!catalogPrice.valid && catalogPrice.touched\">\n            Enter a price!!\n          </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"catalogQuantity\">Quantity</label>\n        <input type=\"text\" class=\"form-control\" id=\"catalogQuantity\" name=\"catalogQuantity\" placeholder=\"Enter the Quantity\" ngModel=\"\" #catalogQuantity=\"ngModel\" required>\n        <span class=\"help-block\"\n              *ngIf=\"!catalogQuantity.valid && catalogQuantity.touched\">\n            Enter a quantity!!\n          </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"catalogUrl\">Image Url</label>\n        <input type=\"text\" class=\"form-control\" id=\"catalogUrl\" name=\"catalogUrl\" placeholder=\"Enter the Url\" ngModel=\"\" #catalogUrl=\"ngModel\" required>\n        <span class=\"help-block\"\n              *ngIf=\"!catalogUrl.valid && catalogUrl.touched\">\n            Enter a url for Catalog Item Image!!\n          </span>\n      </div>\n      <div *ngIf=\"errorFlag\"\n           class=\"alert alert-danger\">\n        {{errorMsg}}\n      </div>\n      <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"createCatalogItem()\">OK <span class=\"glyphicon glyphicon-ok\"></span></button>\n    </form>\n  </div>\n</div>\n\n\n\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog-new/catalog-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_catalog_service_client__ = __webpack_require__("../../../../../src/app/services/catalog.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_catalog_model_client__ = __webpack_require__("../../../../../src/app/models/catalog.model.client.ts");
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
    function CatalogNewComponent(catalogService, activatedRoute, router) {
        this.catalogService = catalogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    CatalogNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.cDetails = new __WEBPACK_IMPORTED_MODULE_4__models_catalog_model_client__["a" /* Catalog */]('', '', '', '', '', '');
    };
    CatalogNewComponent.prototype.createCatalogItem = function () {
        var _this = this;
        if (this.websiteForm.valid) {
            this.cDetails.name = this.websiteForm.value.cPointName;
            this.cDetails.street = this.websiteForm.value.cPointStreet;
            this.cDetails.city = this.websiteForm.value.cPointCity;
            this.cDetails.state = this.websiteForm.value.cPointState;
            this.cDetails.postCode = this.websiteForm.value.cPointPostCode;
            this.cDetails.country = this.websiteForm.value.cPointCountry;
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
    return CatalogNewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], CatalogNewComponent.prototype, "websiteForm", void 0);
CatalogNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-catalog-new',
        template: __webpack_require__("../../../../../src/app/components/catalog/catalog-new/catalog-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/catalog/catalog-new/catalog-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_catalog_service_client__["a" /* CatalogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_catalog_service_client__["a" /* CatalogService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object])
], CatalogNewComponent);

var _a, _b, _c, _d;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--heading on the nav bar-->\n      <div class=\"col-sm-10 col-md-10 col-lg-10 col-xs-10\">\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user']\">\n            <b>Home</b>\n          </a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'sell']\">\n            <b>Sell</b>\n          </a>\n        </p>\n\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'payments']\" >\n            <b>Payments</b>\n          </a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'pickup']\" >\n            <b>Pickup</b>\n          </a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'cpoint']\" >\n            <b>Collection Points</b>\n          </a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'catalog']\" >\n            <b>Catalog</b>\n          </a>\n        </p>\n        <!--tick mark-->\n\n\n      </div>\n      <div class=\"col-sm-2 col-md-2 col-lg-2 col-xs-2\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">\n          <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n<!--\n<div class=\"container-fluid\">\n  <div class=\"container-fluid\">\n  <h3>Collection Points</h3>\n  <p class=\"pull-right\">\n    <a [routerLink]= \" [ '/user' , userId , 'cpoint' , 'new']\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n  </p>\n  </div>\n  <div class=\"container-fluid\" *ngFor=\"let cpoint of collectionPoints\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"><a [routerLink]= \" [ '/user' , userId , 'cpoint' , cpoint._id ,'details']\"><b>{{cpoint.name}}</b></a>\n        <a [routerLink]= \" [ '/user' , userId , 'cpoint' , cpoint._id ]\"> <span class=\"pull-right glyphicon glyphicon-cog\"></span></a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n-->\n\n<div class=\"etm-page-body\">\n<div class=\"container-fluid\">\n  <div class=\"row-fluid\">\n    <div class=\"span3\"><span class=\"h4 text-primary\">Collection Points</span> <p class=\"pull-right\">\n      <a [routerLink]= \" [ '/user' , userId , 'cpoint' , 'new']\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n    </div>\n  </div>\n  <div class=\"container-fluid\" *ngFor=\"let cpoint of collectionPoints\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\"><a [routerLink]= \" [ '/user' , userId , 'cpoint' , cpoint._id ,'details']\"><b>{{cpoint.name}}</b></a>\n        <a (click)=\"delete(cpoint._id)\"> <span class=\"pull-right glyphicon glyphicon-trash\"></span></a>\n      </li>\n    </ul>\n  </div>\n</div>\n</div>\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/collectionpoint/collectionpoint-list/collectionpoint-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cpoint_service_client__ = __webpack_require__("../../../../../src/app/services/cpoint.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function CollectionpointListComponent(collectionPointService, activatedRoute) {
        this.collectionPointService = collectionPointService;
        this.activatedRoute = activatedRoute;
        this.collectionPoints = [{}];
    }
    CollectionpointListComponent.prototype.ngOnInit = function () {
        var _this = this;
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_cpoint_service_client__["a" /* CollectionPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_cpoint_service_client__["a" /* CollectionPointService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], CollectionpointListComponent);

var _a, _b;
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <!--heading on the nav bar-->\n      <div class=\"col-sm-10 col-md-10 col-lg-10 col-xs-10\">\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user']\">\n            <b>Home</b>\n          </a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'sell']\">\n            <b>Sell</b>\n          </a>\n        </p>\n\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'payments']\" >\n            <b>Payments</b>\n          </a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'pickup']\" >\n            <b>Pickup</b>\n          </a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'cpoint']\" >\n            <b>Collection Points</b>\n          </a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'catalog']\" >\n            <b>Catalog</b>\n          </a>\n        </p>\n        <!--tick mark-->\n\n\n      </div>\n      <div class=\"col-sm-2 col-md-2 col-lg-2 col-xs-2\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">\n          <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n        </button>\n      </div>\n    </div>\n  </div>\n</nav>\n\n\n\n\n<div class=\"etm-page-body\">\n<div class=\"container-fluid\">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"cPointName\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"cPointName\" name=\"cPointName\" placeholder=\"Name\" ngModel=\"\" #cPointName=\"ngModel\" required>\n      <span class=\"help-block\"\n            *ngIf=\"!cPointName.valid && cPointName.touched\">\n            Enter a valid collection point name!!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"cPointStreet\">Street</label>\n      <input type=\"text\" class=\"form-control\" id=\"cPointStreet\" name=\"cPointStreet\" placeholder=\"Enter the street\" ngModel=\"\" #cPointStreet=\"ngModel\" required>\n      <span class=\"help-block\"\n            *ngIf=\"!cPointStreet.valid && cPointStreet.touched\">\n            Enter a street address!!\n          </span>\n    </div>\n    <div class=\"form-group\">\n    <label for=\"cPointCity\">City</label>\n    <input type=\"text\" class=\"form-control\" id=\"cPointCity\" name=\"cPointCity\" placeholder=\"Enter the city\" ngModel=\"\" #cPointCity=\"ngModel\" required>\n    <span class=\"help-block\"\n          *ngIf=\"!cPointCity.valid && cPointCity.touched\">\n            Enter a city name!!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"cPointState\">State</label>\n      <input type=\"text\" class=\"form-control\" id=\"cPointState\" name=\"cPointState\" placeholder=\"Enter the State\" ngModel=\"\" #cPointState=\"ngModel\" required>\n      <span class=\"help-block\"\n            *ngIf=\"!cPointState.valid && cPointState.touched\">\n            Enter a State name!!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"cPointPostCode\">PostCode</label>\n      <input type=\"text\" class=\"form-control\" id=\"cPointPostCode\" name=\"cPointPostCode\" placeholder=\"Enter the PostCode\" ngModel=\"\" #cPointPostCode=\"ngModel\" required>\n      <span class=\"help-block\"\n            *ngIf=\"!cPointPostCode.valid && cPointPostCode.touched\">\n            Enter a PostCode!!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"cPointCountry\">Country</label>\n      <input type=\"text\" class=\"form-control\" id=\"cPointCountry\" name=\"cPointCountry\" placeholder=\"Enter the Country\" ngModel=\"\" #cPointCountry=\"ngModel\" required>\n      <span class=\"help-block\"\n            *ngIf=\"!cPointCountry.valid && cPointCountry.touched\">\n            Enter a Country!!\n          </span>\n    </div>\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"createCollectionPoint()\">OK <span class=\"glyphicon glyphicon-ok\"></span></button>\n  </form>\n</div>\n</div>\n\n\n\n\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/collectionpoint/collectionpoint-new/collectionpoint-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cpoint_service_client__ = __webpack_require__("../../../../../src/app/services/cpoint.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_cpoint_model_client__ = __webpack_require__("../../../../../src/app/models/cpoint.model.client.ts");
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
    function CollectionpointNewComponent(collectionPointService, activatedRoute, router) {
        this.collectionPointService = collectionPointService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    CollectionpointNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.cDetails = new __WEBPACK_IMPORTED_MODULE_4__models_cpoint_model_client__["a" /* CollectionPoint */]('', '', '', '', '', '', '');
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
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], CollectionpointNewComponent.prototype, "websiteForm", void 0);
CollectionpointNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-collectionpoint-new',
        template: __webpack_require__("../../../../../src/app/components/collectionpoint/collectionpoint-new/collectionpoint-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/collectionpoint/collectionpoint-new/collectionpoint-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_cpoint_service_client__["a" /* CollectionPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_cpoint_service_client__["a" /* CollectionPointService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _d || Object])
], CollectionpointNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=collectionpoint-new.component.js.map

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

module.exports = "\n<nav class=\"navbar-inverse bg-inverse bg-primary\" >\n\n\n  <div class=\" container-fluid topnav\" id=\"myTopnav\">\n    <a class=\"navbar-brand\" href=\"#\">Home</a>\n    <a class=\"navbar-brand\" href=\"#\">About Us</a>\n    <a class=\"navbar-brand\" href=\"#\">Buy</a>\n    <a class=\"navbar-brand\" href=\"#\">Sell</a>\n    <a class=\"navbar-brand pull-right\" [routerLink]= \" [ '/login']\">Login</a>\n    <a class=\"navbar-brand pull-right\" [routerLink]= \" [ '/register']\">Register</a>\n\n  </div>\n</nav>\n<div class =container-fluid style=\"margin-top: 50px\">\n  <img src=\"http://ewastecleanup.com/wp-content/uploads/2015/09/Electronic-waste-disposal-los-angeles-Ca.jpg\">\n  <H2>At E‐Trash Management, we provide a full suite of asset management platform to the Users to manage buy or sell their electronic waste rather than dumping it in trash.</H2>\n  <H4>E‐Trash Management  can be a complex challenge, sometimes requiring multiple vendors to handle shipping, packaging, storage, inventory, data destruction, logistics, disposal and recycling.\n    If not done properly, you and your company could face serious penalties for improper disposal as well as extreme data security risks.\n    We can help you eliminate that risk!</H4>\n</div>\n"

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

/***/ "../../../../../src/app/components/shipment/shipment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shipment/shipment.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  shipment works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/shipment/shipment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShipmentComponent = (function () {
    function ShipmentComponent() {
    }
    ShipmentComponent.prototype.ngOnInit = function () {
    };
    return ShipmentComponent;
}());
ShipmentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-shipment',
        template: __webpack_require__("../../../../../src/app/components/shipment/shipment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shipment/shipment.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ShipmentComponent);

//# sourceMappingURL=shipment.component.js.map

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

module.exports = "<nav class=\"navbar-inverse bg-inverse bg-primary\" >\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]= \" [ '/home']\">Home</a>\n    <a class=\"navbar-brand\" href=\"#\">About Us</a>\n    <a class=\"navbar-brand\" href=\"#\">Buy</a>\n    <a class=\"navbar-brand\" href=\"#\">Sell</a>\n    <a class=\"navbar-brand pull-right\" [routerLink]= \" [ '/login']\">Login</a>\n    <a class=\"navbar-brand pull-right\" [routerLink]= \" [ '/register']\">Register</a>\n  </div>\n</nav>\n<div class=\"container-fluid\">\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <div class=\"panel panel-primary\" style=\"margin:20px;\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Login</h3>\n    </div>\n    <div class=\"panel-body\">\n      <input placeholder=\"username\"\n             [(ngModel)]=\"username\"\n             type=\"text\"\n             class=\"form-control\"/>\n      <input placeholder=\"password\"\n             [(ngModel)]=\"password\"\n             type=\"password\"\n             class=\"form-control\"/>\n      <div *ngIf=\"isInvalid\"\n           class=\"alert alert-danger\">\n        {{notificationMessage}}\n      </div>\n      <a class=\"btn btn-primary btn-block\" (click)=\"login(username,password)\">Login</a>\n      <a class=\"btn btn-success btn-block\" (click)=\"register()\">Register</a>\n    </div>\n</div>\n"

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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n    <!--heading on the nav bar-->\n      <div class=\"col-sm-10 col-md-10 col-lg-10 col-xs-10\">\n    <p class=\"navbar-text\">\n      <a [routerLink]= \" [ '/user']\">\n        <b>Home</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-text\">\n      <a [routerLink]= \" [ '/user' , userId, 'sell']\">\n        <b>Sell</b>\n      </a>\n    </p>\n\n\n    <p class=\"navbar-text\">\n      <a [routerLink]= \" [ '/user' , userId, 'payments']\" >\n        <b>Payments</b>\n      </a>\n    </p>\n\n    <p class=\"navbar-text\">\n      <a [routerLink]= \" [ '/user' , userId, 'pickup']\" >\n        <b>Pickup</b>\n      </a>\n    </p>\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'cpoint']\" >\n            <b>Collection Points</b>\n          </a>\n        </p>\n\n        <p class=\"navbar-text\">\n          <a [routerLink]= \" [ '/user' , userId, 'catalog']\" >\n            <b>Catalog</b>\n          </a>\n        </p>\n    <!--tick mark-->\n\n\n  </div>\n      <div class=\"col-sm-2 col-md-2 col-lg-2 col-xs-2\">\n        <button type=\"button\" class=\"btn btn-default btn-sm\" (click)=\"logout()\">\n          <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n        </button>\n      </div>\n  </div>\n  </div>\n</nav>\n\n\n\n\n\n<div class=\"container-fluid\">\n  <div class=\"panel panel-primary\" style=\"margin:50px;\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Profile</h3>\n    </div>\n    <div class=\"panel-body\">\n      <form #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"username\">Username</label>\n          <input type=\"text\" name=\"username\" class=\"form-control\" id=\"username\" [(ngModel)]=\"user.username\"  ngModel=\"\" required #username=\"ngModel\">\n          <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n      </span>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"email\">Email </label>\n          <input type=\"email\" name=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"user.email\" ngModel=\"\" email #email=\"ngModel\">\n          <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n      Please enter a valid email!\n      </span>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"first-name\">First Name</label>\n          <input type=\"text\" name=\"firstname\" class=\"form-control\" id=\"first-name\" [(ngModel)]=\"user.firstName\" ngModel=\"\" required #firstname=\"ngModel\">\n          <span class=\"help-block\" *ngIf=\"!firstname.valid && firstname.touched\">\n      Please enter a valid first name!\n      </span>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"last-name\">Last Name</label>\n          <input type=\"text\" name=\"lastname\" class=\"form-control\" id=\"last-name\" [(ngModel)]=\"user.lastName\" ngModel=\"\" required #lastname=\"ngModel\">\n          <span class=\"help-block\" *ngIf=\"!lastname.valid && lastname.touched\">\n      Please enter a valid second name!\n      </span>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"address\">Address</label>\n          <textarea id=\"address\"  class=\"form-control\" name=\"address\" rows=\"5\"  #buyerAddress=\"ngModel\" [(ngModel)]=user.address required>\n        </textarea>\n        </div>\n\n        <div *ngIf=\"this.user.role=='Organization'\">\n          <div class=\"form-group\">\n            <label for=\"orgName\">Organization Name</label>\n            <input name=\"orgName\"\n                   id=\"orgName\"\n                   [(ngModel)]=\"user.organizationName\"\n                   required=\"\"\n                   placeholder=\"Organization Name\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   #lastName=\"ngModel\"/>\n          </div>\n        </div>\n\n        <div *ngIf=\"user.role=='Employee'\">\n          <div class=\"form-group\">\n            <label>EmployeeId</label>\n            <input name=\"empId\"\n                   id=\"empId\"\n                   [(ngModel)]=\"user.employeeId\"\n                   required=\"\"\n                   placeholder=\"Your Employee ID\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   #lastName=\"ngModel\"/>\n          </div>\n        </div>\n\n        <div *ngIf=\"user.role=='Buyer'\">\n          <div class=\"form-group\">\n            <label>Buyer Name</label>\n            <input name=\"buyerName\"\n                   id=\"buyerName\"\n                   [(ngModel)]=\"user.buyerName\"\n                   required=\"\"\n                   placeholder=\"Enter the name of the refinery or organization\"\n                   type=\"text\"\n                   class=\"form-control\"\n                   #lastName=\"ngModel\"/>\n          </div>\n        </div>\n\n        <div *ngIf=\"isInvalid\"\n             class=\"alert alert-danger\">\n          {{notificationMessage}}\n        </div>\n\n        <a class=\"btn btn-primary btn-block\"\n           (click)=\"editProfile()\">Save Profile</a>\n\n      </form>\n    </div>\n\n\n</div>\n\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a href=\"profile.html\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n"

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
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
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

module.exports = "<nav class=\"navbar-inverse bg-inverse bg-primary\" >\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]= \" [ '/home']\">Home</a>\n    <a class=\"navbar-brand\" href=\"#\">About Us</a>\n    <a class=\"navbar-brand\" href=\"#\">Buy</a>\n    <a class=\"navbar-brand\" href=\"#\">Sell</a>\n    <a class=\"navbar-brand pull-right\" [routerLink]= \" [ '/login']\">Login</a>\n    <a class=\"navbar-brand pull-right\" [routerLink]= \" [ '/register']\">Register</a>\n  </div>\n</nav>\n<div class=\"panel panel-primary\" style=\"margin:20px;\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Registration Form</h3>\n  </div>\n<div class=\"panel-body\">\n  <form (ngSubmit)=\"createUser()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input name=\"userName\"\n             id=\"userName\"\n             ngModel=\"\"\n             required=\"\"\n             placeholder=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             #userName=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!userName.valid && userName.touched\">\n            Please enter username!\n      </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input name=\"email\"\n             id=\"email\"\n             ngModel=\"\"\n             required=\"\"\n             placeholder=\"email\"\n             type=\"email\"\n             class=\"form-control\"\n             #email=\"ngModel\"\n             email/>\n      <span class=\"help-block\"\n            *ngIf=\"!email.valid && email.touched\">\n            Please enter email!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input name=\"firstName\"\n             id=\"firstName\"\n             ngModel=\"\"\n             required=\"\"\n             placeholder=\"First Name\"\n             type=\"text\"\n             class=\"form-control\"\n             #firstName=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!firstName.valid && firstName.touched\">\n            Please enter firstName!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input name=\"lastName\"\n             id=\"lastName\"\n             ngModel=\"\"\n             required=\"\"\n             placeholder=\"Last Name\"\n             type=\"text\"\n             class=\"form-control\"\n             #lastName=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!lastName.valid && lastName.touched\">\n            Please enter lastName!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input name=\"password\"\n             id=\"password\"\n             ngModel=\"\"\n             required=\"\"\n             placeholder=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             #password=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!password.valid && password.touched\">\n            Please enter a password!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"verifyPassword\">Verify Password</label>\n      <input name=\"verifyPassword\"\n             id=\"verifyPassword\"\n             ngModel=\"\"\n             required\n             placeholder=\"verify password\"\n             type=\"password\"\n             class=\"form-control\"\n             #verifyPassword=\"ngModel\"/>\n      <span class=\"help-block\"\n            *ngIf=\"!verifyPassword.valid && verifyPassword.touched && isPasswordVerified()\">\n            Your passwords do not match!!\n          </span>\n    </div>\n    <div class=\"form-group\">\n      <label>Address</label>\n      <textarea id=\"address\"  class=\"form-control\" name=\"address\" rows=\"5\"  #buyerAddress=\"ngModel\" [(ngModel)]=this.address required>\n        </textarea>\n    </div>\n    <div class=\"form-group\">\n      <label>User Type</label>\n      <select name=\"roleType\" [(ngModel)]=\"userRole\">\n        <option *ngFor=\"let role of roles\" [ngValue]=\"role\" >{{role}}</option>\n      </select>\n    </div>\n    <div *ngIf=\"this.userRole=='Organization'\">\n      <div class=\"form-group\">\n        <label>Organization Name</label>\n        <input name=\"orgName\"\n               id=\"orgName\"\n               ngModel=\"\"\n               required=\"\"\n               placeholder=\"Organization Name\"\n               type=\"text\"\n               class=\"form-control\"\n               #lastName=\"ngModel\"/>\n      </div>\n    </div>\n    <div *ngIf=\"userRole=='Employee'\">\n      <div class=\"form-group\">\n        <label>EmployeeId</label>\n        <input name=\"empId\"\n               id=\"empId\"\n               ngModel=\"\"\n               required=\"\"\n               placeholder=\"Your Employee ID\"\n               type=\"text\"\n               class=\"form-control\"\n               #lastName=\"ngModel\"/>\n      </div>\n    </div>\n    <div *ngIf=\"userRole=='Buyer'\">\n      <div class=\"form-group\">\n        <label>Buyer Name</label>\n        <input name=\"buyerName\"\n               id=\"buyerName\"\n               ngModel=\"\"\n               required=\"\"\n               placeholder=\"Enter the name of the refinery or organization\"\n               type=\"text\"\n               class=\"form-control\"\n               #lastName=\"ngModel\"/>\n      </div>\n    </div>\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-primary btn-block\"\n              [disabled]=\"!f.valid\">\n        Register\n      </button>\n    </div>\n    <div class=\"form-group\">\n      <a class=\"btn btn-danger btn-block\"\n         routerLink=\"/login\">\n        Cancel\n      </a>\n    </div>\n  </form>\n</div>\n</div>\n\n\n"

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
        this.roles = ['User', 'Organization', 'Employee', 'Buyer'];
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
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
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
        this.desciption = description;
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
    return CatalogService;
}());
CatalogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CollectionPointService);

var _a;
//# sourceMappingURL=cpoint.service.client.js.map

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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
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
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
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
            email: user.email
        };
        return this._http.post(this.baseUrl + '/api/user', userDetails)
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
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_service_client__["a" /* SharedService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object])
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