(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-event-module"],{

/***/ "./src/app/event/event.module.ts":
/*!***************************************!*\
  !*** ./src/app/event/event.module.ts ***!
  \***************************************/
/*! exports provided: EventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageModule", function() { return EventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event.page */ "./src/app/event/event.page.ts");
/* harmony import */ var _event_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event.pipe */ "./src/app/event/event.pipe.ts");








var EventPageModule = /** @class */ (function () {
    function EventPageModule() {
    }
    EventPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _event_page__WEBPACK_IMPORTED_MODULE_6__["EventPage"]
                    }
                ])
            ],
            exports: [
                _event_pipe__WEBPACK_IMPORTED_MODULE_7__["HaveNotBeenRed"]
            ],
            declarations: [
                _event_page__WEBPACK_IMPORTED_MODULE_6__["EventPage"],
                _event_pipe__WEBPACK_IMPORTED_MODULE_7__["HaveBeenRed"],
                _event_pipe__WEBPACK_IMPORTED_MODULE_7__["HaveNotBeenRed"],
                _event_pipe__WEBPACK_IMPORTED_MODULE_7__["HasBeenRed"]
            ]
        })
    ], EventPageModule);
    return EventPageModule;
}());



/***/ }),

/***/ "./src/app/event/event.page.html":
/*!***************************************!*\
  !*** ./src/app/event/event.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Events\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card class=\"welcome-card\">\n        <ion-card-header>\n            <ion-card-title>You are in a demo mode.</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            Please contact our <a href=\"mailto:sales@radartorain.com\">sales team @radartorain</a> to go further.\n        </ion-card-content>\n    </ion-card>\n\n    <div *ngIf=\"data && data.events\">\n\n        <ion-card *ngFor=\"let item of (data.events | haveNotBeenRed)\" (click)=\"clickOnEvent(item)\">\n            <ion-item>\n                <ion-icon name=\"radio-button-off\" slot=\"end\"></ion-icon>\n            </ion-item>\n            <ion-card-header>\n                <ion-card-title>{{item.title}}</ion-card-title>\n                <ion-card-subtitle>{{item.created | date}}</ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content class=\"truncate\">{{item.description}}</ion-card-content>\n        </ion-card>\n\n        <ion-card *ngFor=\"let item of (data.events | haveBeenRed)\" color=\"gray\">\n            <ion-item>\n                <ion-icon name=\"checkmark-circle-outline\" color=\"success\" slot=\"end\"></ion-icon>\n            </ion-item>\n            <ion-card-header>\n                <ion-card-title>{{item.title}}</ion-card-title>\n                <ion-card-subtitle>{{item.created | date}}</ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content>{{item.description}}</ion-card-content>\n            <ion-item disabled=\"true\">\n                <ion-button disabled=\"true\" slot=\"end\">Submit your feedback.</ion-button>\n            </ion-item>\n        </ion-card>\n    </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/event/event.page.scss":
/*!***************************************!*\
  !*** ./src/app/event/event.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".truncate {\n  width: 200px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9yYWFpbmlvL3JhZGFydG9yYWluL3NyYy9hcHAvZXZlbnQvZXZlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ldmVudC9ldmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50cnVuY2F0ZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/event/event.page.ts":
/*!*************************************!*\
  !*** ./src/app/event/event.page.ts ***!
  \*************************************/
/*! exports provided: EventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPage", function() { return EventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/profile.service */ "./src/app/shared/profile.service.ts");



var EventPage = /** @class */ (function () {
    function EventPage(profile) {
        this.profile = profile;
    }
    EventPage.prototype.ngOnInit = function () {
        var _this = this;
        this.profile.refreshProfile().then(function (data) {
            _this.data = data;
        });
    };
    EventPage.prototype.clickOnEvent = function (item) {
        item.red = true;
        this.profile.storeAll();
    };
    EventPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.page.html */ "./src/app/event/event.page.html"),
            styles: [__webpack_require__(/*! ./event.page.scss */ "./src/app/event/event.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_profile_service__WEBPACK_IMPORTED_MODULE_2__["Profile"]])
    ], EventPage);
    return EventPage;
}());



/***/ }),

/***/ "./src/app/event/event.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/event/event.pipe.ts ***!
  \*************************************/
/*! exports provided: HaveBeenRed, HaveNotBeenRed, HasBeenRed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaveBeenRed", function() { return HaveBeenRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaveNotBeenRed", function() { return HaveNotBeenRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasBeenRed", function() { return HasBeenRed; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HaveBeenRed = /** @class */ (function () {
    function HaveBeenRed() {
    }
    HaveBeenRed.prototype.transform = function (events) {
        var haveBeenRed = events.filter(function (event) { return (event.red); });
        console.log('pipe haveBeenRed:', haveBeenRed);
        return haveBeenRed;
    };
    HaveBeenRed = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'haveBeenRed',
            pure: false
        })
    ], HaveBeenRed);
    return HaveBeenRed;
}());

var HaveNotBeenRed = /** @class */ (function () {
    function HaveNotBeenRed() {
    }
    HaveNotBeenRed.prototype.transform = function (events) {
        var haveNotBeenRed = events.filter(function (event) { return (!event.red); });
        console.log('pipe haveNotBeenRed:', haveNotBeenRed);
        return haveNotBeenRed;
    };
    HaveNotBeenRed = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'haveNotBeenRed',
            pure: false
        })
    ], HaveNotBeenRed);
    return HaveNotBeenRed;
}());

var HasBeenRed = /** @class */ (function () {
    function HasBeenRed() {
    }
    HasBeenRed.prototype.transform = function (event) {
        return event.red;
    };
    HasBeenRed = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'hasBeenRed',
            pure: false
        })
    ], HasBeenRed);
    return HasBeenRed;
}());



/***/ })

}]);
//# sourceMappingURL=event-event-module.js.map