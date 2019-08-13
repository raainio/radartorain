(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["radar-radar-module"],{

/***/ "./src/app/radar/radar.module.ts":
/*!***************************************!*\
  !*** ./src/app/radar/radar.module.ts ***!
  \***************************************/
/*! exports provided: RadarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadarPageModule", function() { return RadarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _radar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radar.page */ "./src/app/radar/radar.page.ts");







var RadarPageModule = /** @class */ (function () {
    function RadarPageModule() {
    }
    RadarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _radar_page__WEBPACK_IMPORTED_MODULE_6__["RadarPage"]
                    }
                ])
            ],
            declarations: [_radar_page__WEBPACK_IMPORTED_MODULE_6__["RadarPage"]]
        })
    ], RadarPageModule);
    return RadarPageModule;
}());



/***/ }),

/***/ "./src/app/radar/radar.page.html":
/*!***************************************!*\
  !*** ./src/app/radar/radar.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Radar\n        </ion-title>\n    </ion-toolbar>\n    <div [hidden]=\"!refreshInProgress\">\n        <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n    </div>\n</ion-header>\n\n<ion-content>\n\n    <ion-card class=\"welcome-card\">\n        <ion-card-header>\n            <ion-card-subtitle>You are in a demo mode. Please contact our <a href=\"mailto:sales@radartorain.com\">sales\n                team\n                @radartorain</a> to go further.\n            </ion-card-subtitle>\n        </ion-card-header>\n        <ion-img src=\"/assets/r2r_radar_anim.png\"></ion-img>\n        <ion-card-content>\n            <p>Manage  your radar information here.<br>And if you are administrator, add Radar instances.</p>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button>\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/radar/radar.page.scss":
/*!***************************************!*\
  !*** ./src/app/radar/radar.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhZGFyL3JhZGFyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/radar/radar.page.ts":
/*!*************************************!*\
  !*** ./src/app/radar/radar.page.ts ***!
  \*************************************/
/*! exports provided: RadarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadarPage", function() { return RadarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/profile.service */ "./src/app/shared/profile.service.ts");




var RadarPage = /** @class */ (function () {
    function RadarPage(router, profile) {
        this.router = router;
        this.profile = profile;
        this.refreshInProgress = false;
        this.icons = [
            'flask',
            'wifi',
            'beer',
            'football',
            'basketball',
            'paper-plane',
            'american-football',
            'boat',
            'bluetooth',
            'build'
        ];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    RadarPage.prototype.ngOnInit = function () {
    };
    // add back when alpha.4 is out
    // navigate(item) {
    //   this.router.navigate(['/radar', JSON.stringify(item)]);
    // }
    RadarPage.prototype.refresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // let needToLogin = false;
                        this.refreshInProgress = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.profile.refreshProfile()];
                    case 2:
                        _a.data = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        console.error('refresh1 pb:', e_1);
                        return [3 /*break*/, 4];
                    case 4:
                        if (event) {
                            event.target.complete();
                        }
                        this.refreshInProgress = false;
                        if (!this.profile.isLoggedIn()) {
                            this.router.navigate(['/login']);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    RadarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radar',
            template: __webpack_require__(/*! ./radar.page.html */ "./src/app/radar/radar.page.html"),
            styles: [__webpack_require__(/*! ./radar.page.scss */ "./src/app/radar/radar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_profile_service__WEBPACK_IMPORTED_MODULE_3__["Profile"]])
    ], RadarPage);
    return RadarPage;
}());



/***/ })

}]);
//# sourceMappingURL=radar-radar-module.js.map