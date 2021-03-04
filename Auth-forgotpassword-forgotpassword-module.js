(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Auth-forgotpassword-forgotpassword-module"],{

/***/ "7KNt":
/*!**********************************************************************!*\
  !*** ./src/app/Auth/forgotpassword/forgotpassword-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ForgotpasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageRoutingModule", function() { return ForgotpasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotpassword.page */ "Rk7O");




const routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpasswordPage"]
    }
];
let ForgotpasswordPageRoutingModule = class ForgotpasswordPageRoutingModule {
};
ForgotpasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotpasswordPageRoutingModule);



/***/ }),

/***/ "7UoY":
/*!**************************************************************!*\
  !*** ./src/app/Auth/forgotpassword/forgotpassword.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  max-width: 600px;\n  padding-top: 10px;\n  margin: auto;\n}\n\nion-toolbar {\n  width: 600px;\n}\n\nion-title, p {\n  color: #929694;\n}\n\nform ion-button {\n  width: 98%;\n  background-color: #5cff9d;\n}\n\nform {\n  width: 90%;\n  margin: auto;\n}\n\nmat-form-field {\n  width: 98%;\n}\n\np {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQURKOztBQUdBO0VBRUksWUFBQTtBQURKOztBQUdBO0VBRUksY0FBQTtBQURKOztBQUdBO0VBQ0ksVUFBQTtFQUNELHlCQUFBO0FBQUg7O0FBR0E7RUFFSSxVQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBRUksVUFBQTtBQUZKOztBQUtBO0VBRUUsYUFBQTtBQUhGIiwiZmlsZSI6ImZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmVye1xyXG5cclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5pb24tdG9vbGJhcntcclxuXHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbn1cclxuaW9uLXRpdGxlLCBwXHJcbntcclxuICAgIGNvbG9yOiAjOTI5Njk0O1xyXG59XHJcbmZvcm0gaW9uLWJ1dHRvbntcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICM1Y2ZmOWQ7XHJcblxyXG59XHJcbmZvcm1cclxue1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbn1cclxubWF0LWZvcm0tZmllbGQge1xyXG5cclxuICAgIHdpZHRoOiA5OCU7XHJcbn1cclxuXHJcbnBcclxue1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "Rk7O":
/*!************************************************************!*\
  !*** ./src/app/Auth/forgotpassword/forgotpassword.page.ts ***!
  \************************************************************/
/*! exports provided: ForgotpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function() { return ForgotpasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forgotpassword_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forgotpassword.page.html */ "zej8");
/* harmony import */ var _forgotpassword_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgotpassword.page.scss */ "7UoY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let ForgotpasswordPage = class ForgotpasswordPage {
    constructor(afauth, toastr, router, loadingCtrl) {
        this.afauth = afauth;
        this.toastr = toastr;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.profile = {};
    }
    ngOnInit() {
    }
    resetPassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.email) {
                const loading = yield this.loadingCtrl.create({
                    message: 'please wait..',
                    spinner: 'crescent',
                    showBackdrop: true
                });
                loading.present();
                this.afauth.sendPasswordResetEmail(this.email).then(() => {
                    loading.dismiss();
                    this.toast('check your email address', 'success');
                    this.router.navigate(['/signin']);
                })
                    .catch((error) => {
                    loading.dismiss();
                    this.toast(error.message, 'danger');
                });
            }
            else {
                this.toast('plesase enter your email address', 'danger');
            }
        });
    }
    // end of restpasword
    toast(message, status) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastr.create({
                message: message,
                position: 'top',
                color: status,
                duration: 2000
            });
            toast.present();
        });
    }
};
ForgotpasswordPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
ForgotpasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgotpassword',
        template: _raw_loader_forgotpassword_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgotpassword_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ForgotpasswordPage);



/***/ }),

/***/ "X3c3":
/*!**************************************************************!*\
  !*** ./src/app/Auth/forgotpassword/forgotpassword.module.ts ***!
  \**************************************************************/
/*! exports provided: ForgotpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgotpassword-routing.module */ "7KNt");
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forgotpassword.page */ "Rk7O");










let ForgotpasswordPageModule = class ForgotpasswordPageModule {
};
ForgotpasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_8__["ForgotpasswordPageRoutingModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
        ],
        declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_9__["ForgotpasswordPage"]]
    })
], ForgotpasswordPageModule);



/***/ }),

/***/ "zej8":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Auth/forgotpassword/forgotpassword.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header>\r\n  \r\n  <ion-toolbar>\r\n    <ion-buttons  slot=\"start\">\r\n      <ion-back-button text=\"\" icon=\"arrow-back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Forgot Password</ion-title>\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <p>Enter Emain to reset Password</p>\r\n    <form #form=\"ngForm\" (ngSubmit)=\"resetPassword(form)\">\r\n      <mat-form-field appearance=\"outline\">\r\n        <mat-label>Email</mat-label>\r\n        <input type=\"email\" matInput name=\"email\" placeholder=\"Enter email\"[(ngModel)]=\"email\">\r\n\r\n      </mat-form-field>\r\n      <br>\r\n\r\n      <ion-button type=\"submit\" color=\"#42d77d\" (click)=\"resetPassword()\" >Sign In</ion-button>\r\n\r\n    </form>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=Auth-forgotpassword-forgotpassword-module.js.map