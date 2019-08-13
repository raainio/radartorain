(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
                    }
                ])
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Login\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-card class=\"welcome-card\">\n        <!-- TODO Login (resources, ico, login...) -->\n        <ion-img src=\"/assets/login.png\"></ion-img>\n        <ion-card-header>\n            <ion-card-title>Radar To Rain</ion-card-title>\n            <ion-card-subtitle>\n                <pre>in demo mode (release is in progress)</pre>\n                <ul>\n                    <li>Manage your Radar data.</li>\n                    <li>Manage AI computing and Machine learning.</li>\n                    <li>Manage your final Rain information.</li>\n                    <li>As team administrator, manage your team access.</li>\n                </ul>\n            </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n            <form #heroForm=\"ngForm\">\n                <ion-item>\n                    <ion-input\n                            type=\"email\" placeholder=\"valid.email@required.com\" required\n                                [(ngModel)]=\"userLoginEmail\" name=\"userLoginEmail\"\n                            pattern=\".{1,}@[_a-z0-9A-Z]+(\\.[a-z0-9A-Z]+)+\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-input type=\"password\" placeholder=\"password\"\n                               [(ngModel)]=\"userLoginPassword\" name=\"userLoginPassword\"\n                               required></ion-input>\n                </ion-item>\n                <!-- TODO https://github.com/raainio/web/LEGACY.md -->\n                <pre><small>Radar To Rain is using an <a href=\"https://fidj.ovh\">OVH Fidji service</a> that take care of RGPD concerns.<br>Your <a href=\"https://github.com/raainio/web/LEGACY.md\">personal or corporate information management</a> is important for us!</small></pre>\n\n                <div style=\"padding-top:20px\">\n\n                    <ion-button expand=\"block\" size=\"large\"\n                                (click)=\"login(userLoginEmail, userLoginPassword)\"\n                                [disabled]=\"!userLoginEmail || !heroForm.form.valid || !userLoginPassword\">Login</ion-button>\n\n                    <ion-grid>\n                        <ion-row>\n                            <ion-col class=\"ion-text-center\">\n                                <a href=\"https://fidj.ovh/forgot\"\n                                   target=\"_blank\">\n                                    Forgot your login/password ?</a>\n                            </ion-col>\n                            <ion-col class=\"ion-text-center\">\n                                <a  (click)=\"loginAsDemo()\">\n                                    Test as a demo user\n                                </a>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n\n\n                </div>\n            </form>\n        </ion-card-content>\n    </ion-card>\n\n\n    <span style=\"float:right;font-size:10px;\">version: {{appVersion}}</span>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  height: 100px; }\n\n/*\n  form > .item {\n    color: white !important;\n    // background : transparent;\n    background-color: rgba(255, 255, 255, 0.2);\n\n    ::-webkit-input-placeholder {\n      color: #414141;\n    }\n    ::-moz-placeholder {\n      color: #414141;\n    }\n    :-ms-input-placeholder {\n      color: #414141;\n    }\n    :-moz-placeholder {\n      color: #414141;\n    }\n\n  }\n\n  .ion-input {\n    // background-color : transparent;\n    // background-color: rgba(255, 255, 255, 0.2);\n  }\n\n  .item-inner {\n    //background-color: rgba(255, 255, 255, 0.2);\n  }\n\n  ion-card-header {\n    white-space: normal;\n  }\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9yYWFpbmlvL3JhZGFydG9yYWluL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxhQUFhLEVBQUE7O0FBZWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ2tCRCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIC8vIG1heC1oZWlnaHQ6IDUwdmg7XG4gIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTAwcHg7XG59XG5cblxuLy8gKiB7XG4vLyAgYmFja2dyb3VuZC1jb2xvciA6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcbi8vfVxuXG4vL2FwcC1sb2dpbiB7XG5cbiAgaW9uLWNvbnRlbnQge1xuXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvbG9naW4uc3ZnJykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgfVxuXG4gIC8qXG4gIGZvcm0gPiAuaXRlbSB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgLy8gYmFja2dyb3VuZCA6IHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcblxuICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogIzQxNDE0MTtcbiAgICB9XG4gICAgOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAjNDE0MTQxO1xuICAgIH1cbiAgICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAjNDE0MTQxO1xuICAgIH1cbiAgICA6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogIzQxNDE0MTtcbiAgICB9XG5cbiAgfVxuXG4gIC5pb24taW5wdXQge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3IgOiB0cmFuc3BhcmVudDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIH1cblxuICAuaXRlbS1pbm5lciB7XG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIH1cblxuICBpb24tY2FyZC1oZWFkZXIge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIH1cbiovXG5cbi8vfVxuIiwiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgaGVpZ2h0OiAxMDBweDsgfVxuXG4vKlxuICBmb3JtID4gLml0ZW0ge1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQgOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG5cbiAgICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICM0MTQxNDE7XG4gICAgfVxuICAgIDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogIzQxNDE0MTtcbiAgICB9XG4gICAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogIzQxNDE0MTtcbiAgICB9XG4gICAgOi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICM0MTQxNDE7XG4gICAgfVxuXG4gIH1cblxuICAuaW9uLWlucHV0IHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yIDogdHJhbnNwYXJlbnQ7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICB9XG5cbiAgLml0ZW0taW5uZXIge1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICB9XG5cbiAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB9XG4qL1xuIl19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var fidj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fidj */ "./node_modules/fidj/fesm5/fidj.js");
/* harmony import */ var _shared_version_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/version.const */ "./src/app/shared/version.const.ts");
/* harmony import */ var _app_shared_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/shared/profile.service */ "./src/app/shared/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var LoginPage = /** @class */ (function () {
    function LoginPage(router, network, profile, fidjService) {
        this.router = router;
        this.network = network;
        this.profile = profile;
        this.fidjService = fidjService;
        this.appVersion = _shared_version_const__WEBPACK_IMPORTED_MODULE_4__["version"];
    }
    LoginPage.prototype.ngOnInit = function () {
        this.fidjService.logout(); // todo force logout
        /*
        if (this.fidjService.isLoggedIn()) {
            this.router.navigate(['/home']);
        }
        this.connected = this.network.onConnect().subscribe(data => {
            console.log(data);
            if (this.fidjService.isLoggedIn()) {
                this.router.navigate(['/home']);
            }
        }, error => console.error(error));
        */
    };
    LoginPage.prototype.login = function (email, pwd) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.profile.setEmail(email);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.fidjService.login(email, pwd)];
                    case 2:
                        _a.sent();
                        this.router.navigate(['/home']);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        alert(JSON.stringify(err_1));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.loginAsDemo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.profile.setEmail('demo user');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.fidjService.loginAsDemo()];
                    case 2:
                        _a.sent();
                        this.router.navigate(['/home']);
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        alert(JSON.stringify(err_2));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__["Network"],
            _app_shared_profile_service__WEBPACK_IMPORTED_MODULE_5__["Profile"],
            fidj__WEBPACK_IMPORTED_MODULE_3__["FidjService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map