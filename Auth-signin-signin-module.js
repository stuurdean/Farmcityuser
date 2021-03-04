(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Auth-signin-signin-module"],{

/***/ "I7dG":
/*!**********************************************!*\
  !*** ./src/app/Auth/signin/signin.module.ts ***!
  \**********************************************/
/*! exports provided: SigninPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _signin_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signin-routing.module */ "df0H");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signin.page */ "fyY8");











let SigninPageModule = class SigninPageModule {
};
SigninPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _signin_routing_module__WEBPACK_IMPORTED_MODULE_9__["SigninPageRoutingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"]
        ],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_10__["SigninPage"]]
    })
], SigninPageModule);



/***/ }),

/***/ "ZNgx":
/*!**********************************************!*\
  !*** ./src/app/Auth/signin/signin.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin: auto;\n  max-width: 600px;\n  text-align: center;\n  align-content: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n\n.logo {\n  width: 50%;\n  margin: auto;\n  height: 100px;\n  top: 0%;\n}\n\n.picture {\n  width: 80%;\n  margin: auto;\n  height: 100px;\n  bottom: 0 !important;\n  border-top-left-radius: 50%;\n}\n\nh2 {\n  width: 90%;\n  margin-left: 5%;\n  text-align: left;\n  color: #929694;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n}\n\nstrong {\n  color: #5cff9d;\n}\n\nform {\n  width: 90%;\n  margin: auto;\n}\n\nform p {\n  float: right;\n}\n\nform ion-button {\n  width: 98%;\n  background-color: #5cff9d;\n}\n\nmat-form-field {\n  width: 98%;\n}\n\nmat-label::after {\n  color: #000;\n}\n\na {\n  text-decoration: none;\n  margin-bottom: 10px;\n}\n\np {\n  color: #929694;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWduaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFDSjs7QUFNQTtFQUVJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7QUFKSjs7QUFPQTtFQUVJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUFMSjs7QUFPQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0VBQUE7QUFKSjs7QUFPQTtFQUNJLGNBQUE7QUFKSjs7QUFPQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBSko7O0FBT0E7RUFFSSxZQUFBO0FBTEo7O0FBUUE7RUFDSSxVQUFBO0VBQ0QseUJBQUE7QUFMSDs7QUFTQTtFQUNJLFVBQUE7QUFOSjs7QUFRQTtFQUNJLFdBQUE7QUFMSjs7QUFPQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFNQTtFQUNJLGNBQUE7QUFISiIsImZpbGUiOiJzaWduaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG4ubG9nb3tcclxuXHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHRvcDogMCU7XHJcblxyXG59XHJcbi5waWN0dXJlIHtcclxuXHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XHJcbn1cclxuaDJ7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjOTI5Njk0O1xyXG4gICAgZm9udC1mYW1pbHk6SW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5zdHJvbmd7XHJcbiAgICBjb2xvcjogIzVjZmY5ZDtcclxufVxyXG5cclxuZm9ybXtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG59XHJcbmZvcm0gcHtcclxuXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbmZvcm0gaW9uLWJ1dHRvbntcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICM1Y2ZmOWQ7XHJcblxyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiA5OCU7XHJcbn1cclxubWF0LWxhYmVsOjphZnRlcntcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbnB7XHJcbiAgICBjb2xvcjogIzkyOTY5NDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "df0H":
/*!******************************************************!*\
  !*** ./src/app/Auth/signin/signin-routing.module.ts ***!
  \******************************************************/
/*! exports provided: SigninPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageRoutingModule", function() { return SigninPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin.page */ "fyY8");




const routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_3__["SigninPage"]
    }
];
let SigninPageRoutingModule = class SigninPageRoutingModule {
};
SigninPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SigninPageRoutingModule);



/***/ }),

/***/ "fbt1":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Auth/signin/signin.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content>\r\n<div slot=\"fixed\" class=\"container\">\r\n  <div>\r\n    <ion-img class=\"logo\" src=\"../assets/logo.png\"></ion-img>\r\n<h2>Welcome to Farm city <br>\r\nSign In</h2>\r\n  </div>\r\n  <form #form=\"ngForm\" (ngSubmit)=\"login(UserData)\" #UserData=\"ngForm\">\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-label>Email</mat-label>\r\n      <input type=\"email\" matInput placeholder=\"Enter email\" name=\"email\"ngModel required #email=\"ngModel\">\r\n\r\n    </mat-form-field>\r\n\r\n\r\n    <mat-form-field appearance=\"outline\">\r\n      <mat-label>Password</mat-label>\r\n      <input matInput [type]=\"hide ? 'password' : 'text'\" placeholder=\"Enter password\" name=\"password\" ngModel required #password=\"ngModel\">\r\n      <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" type=\"submit\"[attr.aria-pressed]=\"hide\">\r\n        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n        </button>\r\n    </mat-form-field>\r\n <a routerLink=\"/forgotpassword\" routerLinkActive=\"active\"><p>Forgot Password</p> </a>\r\n    <ion-button routerLinkActive=\"active\" type=\"submit\" color=\"#42d77d\" >Sign In</ion-button>\r\n\r\n  </form>\r\n\r\n  <div>\r\n\r\n<p>Dont have an Account</p>\r\n\r\n\r\n<a routerLink=\"/signup\" routerLinkActive=\"active\"><strong>Sign Up</strong></a>\r\n\r\n\r\n  </div>\r\n  <div class=\"bottom\">\r\n\r\n    <ion-img class=\"picture\" src=\"../assets/mixed-fresh-fruits-vegetables-produce.jpg\"></ion-img>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "fyY8":
/*!********************************************!*\
  !*** ./src/app/Auth/signin/signin.page.ts ***!
  \********************************************/
/*! exports provided: SigninPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPage", function() { return SigninPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signin.page.html */ "fbt1");
/* harmony import */ var _signin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin.page.scss */ "ZNgx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user.service */ "xdv0");





let SigninPage = class SigninPage {
    constructor(_data) {
        this._data = _data;
    }
    ngOnInit() {
    }
    login(UserData) {
        this._data.login(UserData.value.email, UserData.value.password);
    }
};
SigninPage.ctorParameters = () => [
    { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
SigninPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signin',
        template: _raw_loader_signin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SigninPage);



/***/ })

}]);
//# sourceMappingURL=Auth-signin-signin-module.js.map