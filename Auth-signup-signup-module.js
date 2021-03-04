(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Auth-signup-signup-module"],{

/***/ "0DAd":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Auth/signup/signup.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content>\r\n  <div slot=\"fixed\" class=\"container\">\r\n    <div>\r\n      <ion-img class=\"logo\" src=\"../assets/logo.png\"></ion-img>\r\n  <h2>Create and Account\r\n    \r\n  </h2>\r\n  <h2>Sign up</h2>\r\n    </div>\r\n    <form [formGroup]=\"registerForm\">\r\n      <mat-form-field appearance=\"outline\">\r\n        <mat-label>Email</mat-label>\r\n        <input type=\"email\" matInput formControlName=\"email\" placeholder=\"Enter email\">\r\n  \r\n      </mat-form-field>\r\n\r\n      <div class=\"err\" *ngIf=\"registerForm.get('email').touched && registerForm.get('email').invalid\">\r\n        <span *ngIf=\"registerForm.controls.email.errors.emailValidity; else elseBlock\">\r\n          *invalid email\r\n        </span>\r\n        <ng-template #elseBlock>\r\n         *email is required* \r\n        </ng-template>\r\n        \r\n      </div>\r\n      <br>\r\n  \r\n      <mat-form-field appearance=\"outline\">\r\n        <mat-label>Password</mat-label>\r\n        <input matInput [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" placeholder=\"Enter password\">\r\n        <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n          </button>\r\n      </mat-form-field>\r\n      <div class=\"err\" *ngIf=\"registerForm.get('password').touched && registerForm.get('password').invalid\">\r\n        <span *ngIf=\"registerForm.controls.password.errors.passwordValidity; else elseBlock\">\r\n          *password doesnt match\r\n        </span>\r\n        <ng-template #elseBlock>\r\n         *password is required* \r\n        </ng-template>\r\n        \r\n      </div>\r\n       <br>\r\n      \r\n      <mat-form-field appearance=\"outline\">\r\n        <mat-label>Password</mat-label>\r\n        <input matInput [type]=\"hide ? 'password' : 'text'\" formControlName=\"passwordd\" placeholder=\"Enter password\">\r\n        <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n          </button>\r\n      </mat-form-field> \r\n\r\n      <div class=\"err\" *ngIf=\"registerForm.get('passwordd').touched && registerForm.get('passwordd').invalid\">\r\n        <span *ngIf=\"registerForm.controls.passwordd.errors.passwordValidity; else elseBlock\">\r\n          *password doesnt match\r\n        </span>\r\n        <ng-template #elseBlock>\r\n         *confirm password is required* \r\n        </ng-template>\r\n        \r\n      </div> \r\n      <br>\r\n\r\n      <ion-button type=\"submit\" color=\"#42d77d\"(click)=\"Register()\" >Create</ion-button>\r\n  \r\n    </form>\r\n  \r\n    <div>\r\n  \r\n  <p>Already have an Account</p>\r\n  \r\n  \r\n  <a routerLink=\"/signin\" routerLinkActive=\"active\"><strong>Sign in</strong></a>\r\n  \r\n  \r\n    </div>\r\n    <div class=\"bottom\">\r\n  \r\n      <ion-img class=\"picture\" src=\"../assets/mixed-fresh-fruits-vegetables-produce.jpg\"></ion-img>\r\n    </div>\r\n  \r\n  \r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "IqCf":
/*!******************************************************!*\
  !*** ./src/app/Auth/signup/signup-routing.module.ts ***!
  \******************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "VPnr");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "VPnr":
/*!********************************************!*\
  !*** ./src/app/Auth/signup/signup.page.ts ***!
  \********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup.page.html */ "0DAd");
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.page.scss */ "hUu3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/user.service */ "xdv0");






let SignupPage = class SignupPage {
    constructor(_data) {
        this._data = _data;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.emailcheck]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.passwordcheck]),
            passwordd: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.passwordcheck]),
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
        });
        this.registerForm.controls.password.valueChanges.subscribe(x => this.registerForm.controls.passwordd.updateValueAndValidity());
    }
    ngOnInit() {
    }
    verification() {
    }
    emailcheck(controls) {
        if (controls.value != null) {
            var regexp = new RegExp('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}');
            if (regexp.test(controls.value) !== true) {
                return {
                    emailValidity: true
                };
            }
        }
    }
    passwordcheck(controls) {
        if (controls.value != null) {
            var conPass = controls.value;
            var pass = controls.root.get('password');
            if (pass) {
                var password = pass.value;
                if (conPass !== "" && password !== "") {
                    if (conPass !== password) {
                        return {
                            passwordValidity: true
                        };
                    }
                    else {
                        return null;
                    }
                }
            }
        }
    }
    Register() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.registerForm.status == "VALID") {
                //this.navCtrl.navigateRoot('profile');
                // this._data.Register(UserData.value.email,UserData.value.password);
                yield this._data.Register(this.registerForm.value["email"], this.registerForm.value["password"]).then((value) => {
                });
            }
            else {
                this.registerForm.get('email').markAsTouched();
                this.registerForm.get('password').markAsTouched();
            }
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: src_app_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignupPage);



/***/ }),

/***/ "hUu3":
/*!**********************************************!*\
  !*** ./src/app/Auth/signup/signup.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  margin: auto;\n  max-width: 600px;\n  text-align: center;\n  align-content: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 100%;\n}\n\n.logo {\n  width: 50%;\n  margin: auto;\n  height: 70px;\n}\n\n.picture {\n  width: 80%;\n  margin: auto;\n  height: 100px;\n  bottom: 0 !important;\n  border-top-left-radius: 50%;\n}\n\nh1, h2 {\n  width: 90%;\n  margin-left: 5%;\n  text-align: left;\n  color: #929694;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n}\n\nstrong {\n  color: #5cff9d;\n}\n\nform {\n  width: 90%;\n  margin: auto;\n}\n\nform p {\n  float: right;\n}\n\nform ion-button {\n  width: 98%;\n  background-color: #5cff9d;\n}\n\nmat-form-field {\n  width: 98%;\n}\n\nmat-label::after {\n  color: #000;\n}\n\na {\n  text-decoration: none;\n  margin-bottom: 10px;\n}\n\np {\n  color: #929694;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFFQSxZQUFBO0FBQUo7O0FBS0E7RUFFSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFISjs7QUFNQTtFQUVJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUFKSjs7QUFNQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0VBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7QUFISjs7QUFNQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBSEo7O0FBTUE7RUFFSSxZQUFBO0FBSko7O0FBT0E7RUFDSSxVQUFBO0VBQ0QseUJBQUE7QUFKSDs7QUFRQTtFQUNJLFVBQUE7QUFMSjs7QUFPQTtFQUNJLFdBQUE7QUFKSjs7QUFNQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFLQTtFQUNJLGNBQUE7QUFGSiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcblxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuXHJcblxyXG59XHJcbi5sb2dve1xyXG5cclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcblxyXG59XHJcbi5waWN0dXJlIHtcclxuXHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XHJcbn1cclxuaDEsaDJ7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjOTI5Njk0O1xyXG4gICAgZm9udC1mYW1pbHk6SW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5zdHJvbmd7XHJcbiAgICBjb2xvcjogIzVjZmY5ZDtcclxufVxyXG5cclxuZm9ybXtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG59XHJcbmZvcm0gcHtcclxuXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbmZvcm0gaW9uLWJ1dHRvbntcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICM1Y2ZmOWQ7XHJcblxyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiA5OCU7XHJcbn1cclxubWF0LWxhYmVsOjphZnRlcntcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbnB7XHJcbiAgICBjb2xvcjogIzkyOTY5NDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "j3Hv":
/*!**********************************************!*\
  !*** ./src/app/Auth/signup/signup.module.ts ***!
  \**********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup-routing.module */ "IqCf");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup.page */ "VPnr");










let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_8__["SignupPageRoutingModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_9__["SignupPage"]]
    })
], SignupPageModule);



/***/ })

}]);
//# sourceMappingURL=Auth-signup-signup-module.js.map