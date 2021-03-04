(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Products-productby-category-productby-category-module"],{

/***/ "03ti":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Products/productby-category/productby-category.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons  slot=\"start\">\n      <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ref}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <ng-container *ngIf=\"productLength==0; else list\">\n      <div class=\"first\">\n\n        <h1>Sorry</h1>\n        <h4> They are No Products in this Category</h4>\n      </div>\n\n\n    </ng-container>\n<ng-template #list>\n\n  <div class=\"products\" *ngFor=\"let item of product\">\n\n    <ion-card [routerLink]=\"[ '/','productdetails',item.payload.doc.id]\" routerLinkActive=\"active\">\n      <img src=\"{{item.payload.doc.data().productImage}}\" />\n      <ion-card-header>\n        <ion-card-subtitle>{{item.payload.doc.data().productName}}</ion-card-subtitle>\n        <ion-card-title>R{{item.payload.doc.data().productPrice}}</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-icon  name=\"star\"></ion-icon> 5\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ng-template>\n\n\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "8weO":
/*!**************************************************************************!*\
  !*** ./src/app/Products/productby-category/productby-category.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  max-width: 600px;\n  margin: 1% auto;\n}\n\n.first {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  color: #8c8c8c;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\nh4 {\n  padding: 10px;\n}\n\n.products {\n  width: 50% !important;\n  float: left;\n}\n\nimg {\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9kdWN0YnktY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0E7RUFFRSxxQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFHRTtFQUNFLGFBQUE7QUFBSiIsImZpbGUiOiJwcm9kdWN0YnktY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuXHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IDElIGF1dG87XHJcbn1cclxuLmZpcnN0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBjb2xvcjogIzhjOGM4YztcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblxyXG59XHJcbmg0e1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnByb2R1Y3RzXHJcbntcclxuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcblxyXG4gIGltZ3tcclxuICAgIGhlaWdodDogMTUwcHg7XHJcblxyXG5cclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "DqPY":
/*!**********************************************************************************!*\
  !*** ./src/app/Products/productby-category/productby-category-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductbyCategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductbyCategoryPageRoutingModule", function() { return ProductbyCategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _productby_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productby-category.page */ "aN9p");




const routes = [
    {
        path: '',
        component: _productby_category_page__WEBPACK_IMPORTED_MODULE_3__["ProductbyCategoryPage"]
    }
];
let ProductbyCategoryPageRoutingModule = class ProductbyCategoryPageRoutingModule {
};
ProductbyCategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductbyCategoryPageRoutingModule);



/***/ }),

/***/ "aN9p":
/*!************************************************************************!*\
  !*** ./src/app/Products/productby-category/productby-category.page.ts ***!
  \************************************************************************/
/*! exports provided: ProductbyCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductbyCategoryPage", function() { return ProductbyCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_productby_category_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./productby-category.page.html */ "03ti");
/* harmony import */ var _productby_category_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productby-category.page.scss */ "8weO");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/products.service */ "S3Px");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let ProductbyCategoryPage = class ProductbyCategoryPage {
    constructor(_rout, fire) {
        this._rout = _rout;
        this.fire = fire;
    }
    ngOnInit() {
        this.ref = this._rout.snapshot.paramMap.get('ref');
        this.fire.getbyCategory(this.ref).snapshotChanges().subscribe(result => {
            this.product = result;
            this.productLength = result.length;
        });
    }
};
ProductbyCategoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }
];
ProductbyCategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-productby-category',
        template: _raw_loader_productby_category_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_productby_category_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductbyCategoryPage);



/***/ }),

/***/ "qNix":
/*!**************************************************************************!*\
  !*** ./src/app/Products/productby-category/productby-category.module.ts ***!
  \**************************************************************************/
/*! exports provided: ProductbyCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductbyCategoryPageModule", function() { return ProductbyCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _productby_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productby-category-routing.module */ "DqPY");
/* harmony import */ var _productby_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productby-category.page */ "aN9p");







let ProductbyCategoryPageModule = class ProductbyCategoryPageModule {
};
ProductbyCategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _productby_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductbyCategoryPageRoutingModule"]
        ],
        declarations: [_productby_category_page__WEBPACK_IMPORTED_MODULE_6__["ProductbyCategoryPage"]]
    })
], ProductbyCategoryPageModule);



/***/ })

}]);
//# sourceMappingURL=Products-productby-category-productby-category-module.js.map