(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rain-rain-module"],{

/***/ "./src/app/rain/rain.module.ts":
/*!*************************************!*\
  !*** ./src/app/rain/rain.module.ts ***!
  \*************************************/
/*! exports provided: RainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RainPageModule", function() { return RainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rain_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rain.page */ "./src/app/rain/rain.page.ts");







var RainPageModule = /** @class */ (function () {
    function RainPageModule() {
    }
    RainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _rain_page__WEBPACK_IMPORTED_MODULE_6__["RainPage"]
                    }
                ])
            ],
            declarations: [_rain_page__WEBPACK_IMPORTED_MODULE_6__["RainPage"]]
        })
    ], RainPageModule);
    return RainPageModule;
}());



/***/ }),

/***/ "./src/app/rain/rain.page.html":
/*!*************************************!*\
  !*** ./src/app/rain/rain.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Rain\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"welcome-card\">\n        <ion-card-header>\n            <ion-card-subtitle>You are in a demo mode. Please contact our <a href=\"mailto:sales@radartorain.com\">sales\n                team\n                @radartorain</a> to go further.\n            </ion-card-subtitle>\n        </ion-card-header>\n        <ion-img src=\"/assets/r2r_compare.png\"></ion-img>\n        <ion-card-content>\n            <p>Manage your rain and water information.<br>And if you are administrator, add Rain gauges, Zones...</p>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button>\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/rain/rain.page.scss":
/*!*************************************!*\
  !*** ./src/app/rain/rain.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhaW4vcmFpbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/rain/rain.page.ts":
/*!***********************************!*\
  !*** ./src/app/rain/rain.page.ts ***!
  \***********************************/
/*! exports provided: RainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RainPage", function() { return RainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RainPage = /** @class */ (function () {
    function RainPage() {
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
    RainPage.prototype.ngOnInit = function () {
    };
    RainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rain',
            template: __webpack_require__(/*! ./rain.page.html */ "./src/app/rain/rain.page.html"),
            styles: [__webpack_require__(/*! ./rain.page.scss */ "./src/app/rain/rain.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RainPage);
    return RainPage;
}());



/***/ })

}]);
//# sourceMappingURL=rain-rain-module.js.map