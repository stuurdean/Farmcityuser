(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-split-pane when=\"md\" contentId=\"main\">\r\n\r\n  <ion-menu menuId=\"main-menu\" content-id=\"main\"   >\r\n <ion-header>\r\n   <div class=\"header\">\r\n   <ion-img src=\"../assets/logo.png \"></ion-img>\r\n   <div class=\"details\">\r\n\r\n    <h1>Full Names</h1>\r\n   <ion-note>hi@ionicframework.com</ion-note>\r\n\r\n   </div>\r\n\r\n  </div>\r\n </ion-header>\r\n  <ion-content>\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-icon  name=\"Home-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label>Home</ion-label>\r\n      </ion-item>\r\n      <ion-menu-toggle>\r\n\r\n        <ion-item  [routerLink]=\"[ '/category' ]\" routerLinkActive=\"active\">\r\n          <ion-icon name=\"grid-outline\" slot=\"start\"></ion-icon>\r\n          <ion-label>Category</ion-label>\r\n        </ion-item>\r\n\r\n\r\n      </ion-menu-toggle>\r\n\r\n      <ion-item>\r\n        <ion-icon name=\"pricetags-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label>Order</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\r\n\r\n        <ion-label>My accunt</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-icon name=\"settings-outline\" slot=\"start\"></ion-icon>\r\n\r\n        <ion-label>Settings</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-icon name=\"information-circle-outline\" slot=\"start\"></ion-icon>\r\n\r\n        <ion-label>Help</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n\r\n        <ion-icon name=\"log-out-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label>Log Out</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n\r\n\r\n\r\n<ion-router-outlet id=\"main\">\r\n\r\n  <ion-header [translucent]=\"true\">\r\n    <ion-toolbar>\r\n      <ion-title>Home</ion-title>\r\n\r\n        <ion-buttons slot=\"start\">\r\n          <ion-menu-button  color=\"success\"  slot=\"start\" menu=\"main-menu\"></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n\r\n        <ion-buttons slot=\"primary\">\r\n          <ion-button  >\r\n            <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"cart\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n\r\n\r\n    </ion-toolbar>\r\n    <ion-toolbar>\r\n      <ion-searchbar  ></ion-searchbar>\r\n    </ion-toolbar>\r\n\r\n  </ion-header>\r\n\r\n  <ion-content >\r\n\r\n    <div class=\"container\">\r\n    <h4>Daily Deals</h4>\r\n\r\n    <ng-container  *ngIf=\"promotionNo ==0; else promo \"  >\r\n\r\n      <h3>They are Currently No Promotions </h3>\r\n    </ng-container>\r\n\r\n    <ng-template #promo>\r\n\r\n\r\n\r\n\r\n    </ng-template>\r\n\r\n\r\n    <h4>Fruits</h4>\r\n    <ion-slides   [options]=\"slideOpts\">\r\n\r\n\r\n      <ion-slide *ngFor=\"let item of fruits\">\r\n\r\n        <ion-card [routerLink]=\"[ '/','productdetails',item.payload.doc.id]\" routerLinkActive=\"active\">\r\n\r\n          <div class=\"productImg\">\r\n\r\n            <img src=\"{{item.payload.doc.data().productImage}}\" />\r\n\r\n          </div>\r\n\r\n          <ion-card-header>\r\n            <ion-card-subtitle>{{item.payload.doc.data().productName}}</ion-card-subtitle>\r\n            <ion-card-title>R{{item.payload.doc.data().productPrice}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n            <ion-icon  name=\"star\"></ion-icon> 5\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-slide>\r\n\r\n      <ion-slide >\r\n        <div class=\"last-slide\">\r\n\r\n          <ion-button color=\"success\">\r\n            View All\r\n          </ion-button>\r\n\r\n        </div>\r\n\r\n\r\n\r\n      </ion-slide>\r\n\r\n\r\n    </ion-slides>\r\n\r\n    <h4>Vegetables</h4>\r\n\r\n    <ion-slides   [options]=\"slideOpts\">\r\n\r\n\r\n\r\n      <ion-slide *ngFor=\"let item of vegetables\">\r\n\r\n        <ion-card [routerLink]=\"[ '/','productdetails',item.payload.doc.id]\" routerLinkActive=\"active\">\r\n\r\n\r\n          <div class=\"productImg\">\r\n\r\n            <img src=\"{{item.payload.doc.data().productImage}}\" />\r\n\r\n          </div>\r\n          <ion-card-header>\r\n            <ion-card-subtitle>{{item.payload.doc.data().productName}}</ion-card-subtitle>\r\n            <ion-card-title>R{{item.payload.doc.data().productPrice}}</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content>\r\n            <ion-icon  name=\"star\"></ion-icon> 5\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-slide>\r\n\r\n      <ion-slide >\r\n\r\n\r\n          <ion-button color=\"success\">\r\n            View All\r\n          </ion-button>\r\n\r\n      </ion-slide>\r\n\r\n\r\n    </ion-slides>\r\n  </div>\r\n\r\n  \r\n  <h4>Click  category on Navigation to View Other categories</h4>\r\n\r\n  </ion-content>\r\n\r\n\r\n</ion-router-outlet>\r\n</ion-split-pane>\r\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_9__["HomePageRoutingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.header {\n  width: 350px;\n  margin: 1%;\n  height: 180px;\n}\n\n.details {\n  color: #8c8c8c;\n  padding: 10px;\n  margin: 1% auto;\n}\n\nion-icon {\n  color: #0f9244;\n}\n\nion-img {\n  width: 85%;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\nh4, h3 {\n  margin-left: 20px;\n  margin-top: 10px;\n  color: #8c8c8c;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-slide {\n  width: 50% !important;\n}\n\n/* Without setting height the slides will take up the height of the slide's content */\n\nion-slides {\n  height: 270px;\n}\n\n.productImg {\n  width: 80%;\n  height: 150px;\n  margin: auto;\n  max-width: 600px;\n  text-align: center;\n  align-content: center;\n}\n\nion-card {\n  width: 100%;\n}\n\nion-card-content {\n  float: left;\n}\n\nion-card-content ion-icon {\n  color: #FFD700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FBQUY7O0FBRUE7RUFFRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFBRjs7QUFFQTtFQUVFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBRUUsVUFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQUFGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxxQkFBQTtBQUFGOztBQUdBLHFGQUFBOztBQUNBO0VBRUEsYUFBQTtBQURBOztBQUlBO0VBRUUsVUFBQTtFQUNBLGFBQUE7RUFFQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBSEY7O0FBTUE7RUFFQSxXQUFBO0FBSkE7O0FBU0E7RUFDRSxXQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0FBTkYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuXHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG4uaGVhZGVye1xyXG5cclxuICB3aWR0aDogMzUwcHg7XHJcbiAgbWFyZ2luOiAxJTtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG59XHJcbi5kZXRhaWxze1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMSUgYXV0bztcclxufVxyXG5pb24taWNvbntcclxuICBjb2xvcjogIzBmOTI0NDtcclxufVxyXG5pb24taW1ne1xyXG5cclxuICB3aWR0aDogODUlO1xyXG59XHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbmg0LGgze1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgY29sb3I6ICM4YzhjOGM7XHJcbn1cclxuXHJcbiNjb250YWluZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5cclxuaW9uLXNsaWRlIHtcclxuICB3aWR0aDogNTAlIWltcG9ydGFudDtcclxuXHJcbn1cclxuLyogV2l0aG91dCBzZXR0aW5nIGhlaWdodCB0aGUgc2xpZGVzIHdpbGwgdGFrZSB1cCB0aGUgaGVpZ2h0IG9mIHRoZSBzbGlkZSdzIGNvbnRlbnQgKi9cclxuaW9uLXNsaWRlcyB7XHJcblxyXG5oZWlnaHQ6IDI3MHB4O1xyXG5cclxufVxyXG4ucHJvZHVjdEltZ1xyXG57XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG5cclxuICBtYXJnaW46ICAgYXV0byA7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuXHJcbndpZHRoOiAxMDAlO1xyXG5cclxuXHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcblxyXG59XHJcbmlvbi1jYXJkLWNvbnRlbnQgaW9uLWljb257XHJcbiAgY29sb3I6ICNGRkQ3MDA7XHJcblxyXG59XHJcbi5sYXN0LXNsaWRlXHJcbntcclxuXHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/products.service */ "S3Px");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





let HomePage = class HomePage {
    constructor(firestoreservice) {
        this.firestoreservice = firestoreservice;
        this.slideOpts = {
            initialSlide: 0,
            spaceBetween: 0,
            slidesPerView: 2,
            speed: 400
        };
    }
    ngOnInit() {
        this.firestoreservice.getProducts().snapshotChanges().subscribe(result => {
            console.log(result);
            this.products = result;
        });
        //getting fruits from firebase
        this.firestoreservice.getFruits().snapshotChanges().subscribe(result => {
            console.log(result);
            this.fruits = result;
        });
        //geting vegetables
        this.firestoreservice.getVetables().snapshotChanges().subscribe(result => {
            this.vegetables = result;
        });
        //getpromotionsProducts
        this.firestoreservice.getPromotion().snapshotChanges().subscribe(result => {
            this.promotion = result;
            this.promotionNo = result.length;
        });
    }
    view() {
        console.log("Clicked");
    }
};
HomePage.ctorParameters = () => [
    { type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map