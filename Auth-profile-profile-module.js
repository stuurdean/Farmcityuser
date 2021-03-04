(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Auth-profile-profile-module"],{

/***/ "F/GX":
/*!**********************************************!*\
  !*** ./src/app/Auth/profile/profile.page.ts ***!
  \**********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "uTrl");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "cuJA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user.service */ "xdv0");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let ProfilePage = class ProfilePage {
    constructor(_data, afs, fireAuth, _route) {
        this._data = _data;
        this.afs = afs;
        this.fireAuth = fireAuth;
        this._route = _route;
        this.profile = {};
    }
    ngOnInit() {
    }
    update(UserData) {
        this.Ref = this._route.snapshot.paramMap.get('ref');
        this._data.createprofile(this.Ref, UserData.value);
    }
};
ProfilePage.ctorParameters = () => [
    { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ }),

/***/ "L1ts":
/*!********************************************************!*\
  !*** ./src/app/Auth/profile/profile-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "F/GX");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "cuJA":
/*!************************************************!*\
  !*** ./src/app/Auth/profile/profile.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  max-width: 600px;\n  padding-top: 10px;\n  margin: auto;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\nion-toolbar {\n  width: 600px;\n}\n\nion-title, h2 {\n  color: #929694;\n}\n\nform ion-button {\n  width: 98%;\n  background-color: #5cff9d;\n}\n\nform {\n  width: 90%;\n  margin: auto;\n}\n\nmat-form-field {\n  width: 98%;\n}\n\n.profile {\n  width: 50%;\n  margin: auto;\n  height: 200px;\n  padding-top: 1%;\n  padding-bottom: 1%;\n  color: #929694;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDRixrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBREY7O0FBR0E7RUFFSSxZQUFBO0FBREo7O0FBR0E7RUFFSSxjQUFBO0FBREo7O0FBR0E7RUFDSSxVQUFBO0VBQ0QseUJBQUE7QUFBSDs7QUFHQTtFQUVJLFVBQUE7RUFDQSxZQUFBO0FBREo7O0FBSUE7RUFFSSxVQUFBO0FBRko7O0FBSUE7RUFFSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRkoiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lcntcclxuXHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcblxyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG59XHJcbmlvbi10aXRsZSxoMlxyXG57XHJcbiAgICBjb2xvcjogIzkyOTY5NDtcclxufVxyXG5mb3JtIGlvbi1idXR0b257XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNmZjlkO1xyXG5cclxufVxyXG5mb3JtXHJcbntcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG59XHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuXHJcbiAgICB3aWR0aDogOTglO1xyXG59XHJcbi5wcm9maWxle1xyXG5cclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDElO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gICAgY29sb3I6ICM5Mjk2OTQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "n2ic":
/*!************************************************!*\
  !*** ./src/app/Auth/profile/profile.module.ts ***!
  \************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-routing.module */ "L1ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile.page */ "F/GX");









let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProfilePageRoutingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_8__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "uTrl":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Auth/profile/profile.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div slot=\"fixed\" class=\"container\">\r\n\r\n\r\n        <div>\r\n            <ion-img class=\"profile\" src=\"../assets/person.svg\"></ion-img>\r\n\r\n      <h2>Create Profile</h2>\r\n        </div>\r\n        <form (ngSubmit)=\"update(UserData)\" #UserData=\"ngForm\">\r\n          <mat-form-field appearance=\"outline\">\r\n            <mat-label>First-name</mat-label>\r\n            <input type=\"name\"ngModel matInput #name=\"ngModel\" name=\"name\"[(ngModel)]=\"profile.name\" placeholder=\"Firstname\"required>\r\n\r\n          </mat-form-field>\r\n          <br>\r\n\r\n          <mat-form-field appearance=\"outline\">\r\n            <mat-label>Surname</mat-label>\r\n            <input matInput  placeholder=\"surname\" ngModel #surname=\"ngModel\"[(ngModel)]=\"profile.surname\" name=\"surname\" required>\r\n\r\n\r\n          </mat-form-field> <br>\r\n\r\n          <mat-form-field appearance=\"outline\">\r\n            <mat-label>Cellphone</mat-label>\r\n            <input matInput  type=\"tel\"  placeholder=\"phone\" ngModel #phone=\"ngModel\"[(ngModel)]=\"profile.phone\" name=\"phone\" required>\r\n\r\n          </mat-form-field> <br>\r\n          <mat-form-field appearance=\"outline\">\r\n            <mat-label>Address</mat-label>\r\n            <input matInput  placeholder=\"address\" ngModel #address=\"ngModel\" [(ngModel)]=\"profile.address\"name=\"address\" required>\r\n\r\n          </mat-form-field> <br>\r\n\r\n          <ion-button type=\"submit\" color=\"#42d77d\" >Save</ion-button>\r\n\r\n        </form>\r\n      </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=Auth-profile-profile-module.js.map