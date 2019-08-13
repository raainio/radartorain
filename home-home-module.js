(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _modals_new_instance_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modals/new-instance.page */ "./src/app/home/modals/new-instance.page.ts");
/* harmony import */ var _home_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.pipe */ "./src/app/home/home.pipe.ts");









var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    },
                    {
                        path: '/new-instance',
                        component: _modals_new_instance_page__WEBPACK_IMPORTED_MODULE_7__["NewInstancePage"]
                    }
                ])
            ],
            declarations: [
                _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
                _modals_new_instance_page__WEBPACK_IMPORTED_MODULE_7__["NewInstancePage"],
                _home_pipe__WEBPACK_IMPORTED_MODULE_8__["IsStopped"],
                _home_pipe__WEBPACK_IMPORTED_MODULE_8__["IsInProgressPipe"],
                _home_pipe__WEBPACK_IMPORTED_MODULE_8__["IsReady"],
                _home_pipe__WEBPACK_IMPORTED_MODULE_8__["HasGoodQuality"],
                _home_pipe__WEBPACK_IMPORTED_MODULE_8__["ProgressValue"],
                _home_pipe__WEBPACK_IMPORTED_MODULE_8__["ProgressBuffer"],
                _home_pipe__WEBPACK_IMPORTED_MODULE_8__["EventHaveNotBeenRed"]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Dashboard\n        </ion-title>\n\n\n        <ion-buttons slot=\"primary\">\n            <ion-button (click)=\"clickOnNotifications()\">\n                <ion-icon slot=\"icon-only\" name=\"notifications-outline\"></ion-icon>\n            </ion-button>\n            <ion-badge *ngIf=\"data && (data.events | eventHaveNotBeenRed).length\"\n                       color=\"danger\">{{(data.events | eventHaveNotBeenRed).length}}</ion-badge>\n        </ion-buttons>\n\n        <!--<ion-buttons slot=\"primary\">\n            <ion-badge color=\"danger\">2</ion-badge>\n        <a routerLink=\"/events\">\n            <ion-icon name=\"notifications-outline\" slot=\"end\"></ion-icon>\n        </a>\n        <a routerLink=\"/events\">\n            <ion-badge color=\"danger\">2</ion-badge>\n        </a>-->\n    </ion-toolbar>\n\n    <div [hidden]=\"!refreshInProgress\">\n        <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n    </div>\n</ion-header>\n\n<ion-content>\n\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n\n    <ion-card class=\"welcome-card\" *ngIf=\"!infoWindowAlreadyView['welcome-card']\">\n        <!--<ion-item>\n            <ion-badge color=\"light\" class=\"ion-text-end\" slot=\"end\" (click)=\"closeInfo('welcome-card')\">close x\n            </ion-badge>\n        </ion-item>-->\n        <ion-card-header>\n            <ion-card-title>Welcome !</ion-card-title>\n            <ion-card-subtitle>You are in a demo mode. Please contact our <a href=\"mailto:sales@radartorain.com\">sales\n                team\n                @radartorain</a> to go further.\n            </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n            <p>Manage here your radar information status, AI dashboard, rain comparison status.</p>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>Ready</ion-card-title>\n        </ion-card-header>\n\n        <ion-list *ngIf=\"data && data.rains\">\n            <ion-item *ngFor=\"let item of (data.rains | isReady)\" (click)=\"clickOnRain(item)\">\n                <ion-icon name=\"radio-button-off\" color=\"success\" *ngIf=\"(item | hasGoodQuality)\"\n                          slot=\"start\"></ion-icon>\n                <ion-icon name=\"radio-button-off\" color=\"warning\" *ngIf=\"!(item | hasGoodQuality)\"\n                          slot=\"start\"></ion-icon>\n                {{item.name}}\n                <ion-progress-bar color=\"primary\" value=\"{{item | progressValue}}\"\n                                  buffer=\"{{item | progressBuffer}}\"></ion-progress-bar>\n                <ion-icon name=\"cloud-done\" color=\"primary\" slot=\"end\"></ion-icon>\n            </ion-item>\n        </ion-list>\n    </ion-card>\n\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>In progress</ion-card-title>\n        </ion-card-header>\n\n        <ion-list *ngIf=\"data && data.rains\">\n            <ion-item *ngFor=\"let item of (data.rains | isInProgress)\">\n                <ion-icon name=\"radio-button-off\" color=\"success\" *ngIf=\"(item | hasGoodQuality)\"\n                          slot=\"start\"></ion-icon>\n                <ion-icon name=\"radio-button-off\" color=\"warning\" *ngIf=\"!(item | hasGoodQuality)\"\n                          slot=\"start\"></ion-icon>\n                {{item.name}}\n                <ion-progress-bar color=\"primary\" value=\"{{item | progressValue}}\"\n                                  buffer=\"{{item | progressBuffer}}\"></ion-progress-bar>\n                <ion-icon name=\"cloud-upload\" slot=\"end\"></ion-icon>\n            </ion-item>\n\n            <ion-item *ngFor=\"let item of (data.rains | isStopped)\">\n                <ion-icon name=\"radio-button-off\" color=\"success\" *ngIf=\"(item | hasGoodQuality)\"\n                          slot=\"start\"></ion-icon>\n                <ion-icon name=\"radio-button-off\" color=\"warning\" *ngIf=\"!(item | hasGoodQuality)\"\n                          slot=\"start\"></ion-icon>\n                {{item.name}}\n                <ion-progress-bar color=\"primary\" value=\"{{item | progressValue}}\"\n                                  buffer=\"{{item | progressBuffer}}\"></ion-progress-bar>\n                <ion-icon name=\"cloud-outline\" slot=\"end\"></ion-icon>\n            </ion-item>\n\n        </ion-list>\n    </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\nion-header ion-toolbar img {\n  height: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9yYWFpbmlvL3JhZGFydG9yYWluL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhciBpbWcge1xuICBoZWlnaHQ6IDI1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modals_new_instance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/new-instance.page */ "./src/app/home/modals/new-instance.page.ts");
/* harmony import */ var _shared_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/profile.service */ "./src/app/shared/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var HomePage = /** @class */ (function () {
    function HomePage(router, modalController, profile) {
        this.router = router;
        this.modalController = modalController;
        this.profile = profile;
        this.refreshInProgress = false;
        this.infoWindowAlreadyView = {};
        this.refresh();
    }
    HomePage.prototype.ngAfterViewInit = function () {
        console.log('AfterViewInit');
        // this.refresh();
    };
    HomePage.prototype.closeInfo = function (windowName) {
        this.infoWindowAlreadyView[windowName] = true;
    };
    HomePage.prototype.clickOnNotifications = function () {
        this.router.navigate(['/event']);
    };
    HomePage.prototype.clickOnRain = function (rain) {
        // this.router.navigate(['/rain', rain.id]);
    };
    HomePage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modals_new_instance_page__WEBPACK_IMPORTED_MODULE_3__["NewInstancePage"],
                            componentProps: { value: 123 }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        console.log(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.refresh = function (event) {
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
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _shared_profile_service__WEBPACK_IMPORTED_MODULE_4__["Profile"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/home/home.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.pipe.ts ***!
  \***********************************/
/*! exports provided: IsStopped, IsInProgressPipe, IsReady, HasGoodQuality, ProgressValue, ProgressBuffer, EventHaveNotBeenRed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsStopped", function() { return IsStopped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsInProgressPipe", function() { return IsInProgressPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsReady", function() { return IsReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasGoodQuality", function() { return HasGoodQuality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressValue", function() { return ProgressValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBuffer", function() { return ProgressBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventHaveNotBeenRed", function() { return EventHaveNotBeenRed; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IsStopped = /** @class */ (function () {
    function IsStopped() {
    }
    IsStopped.prototype.transform = function (rains) {
        return rains.filter(function (rain) { return (rain.status === 0); });
    };
    IsStopped = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'isStopped' })
    ], IsStopped);
    return IsStopped;
}());

var IsInProgressPipe = /** @class */ (function () {
    function IsInProgressPipe() {
    }
    IsInProgressPipe.prototype.transform = function (rains) {
        return rains.filter(function (rain) { return (rain.status === 1 || rain.status === 2); });
    };
    IsInProgressPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'isInProgress' })
    ], IsInProgressPipe);
    return IsInProgressPipe;
}());

var IsReady = /** @class */ (function () {
    function IsReady() {
    }
    IsReady.prototype.transform = function (rains) {
        return rains.filter(function (rain) { return (rain.status > 2); });
    };
    IsReady = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'isReady' })
    ], IsReady);
    return IsReady;
}());

var HasGoodQuality = /** @class */ (function () {
    function HasGoodQuality() {
    }
    HasGoodQuality.prototype.transform = function (rain) {
        if (rain.quality > 50)
            return rain;
        return null;
    };
    HasGoodQuality = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'hasGoodQuality' })
    ], HasGoodQuality);
    return HasGoodQuality;
}());

var ProgressValue = /** @class */ (function () {
    function ProgressValue() {
    }
    ProgressValue.prototype.transform = function (rain) {
        var value = (rain.progressIngest + rain.progressComputing) / 2;
        console.log('progressValue:', rain.id, value);
        return value;
    };
    ProgressValue = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'progressValue' })
    ], ProgressValue);
    return ProgressValue;
}());

var ProgressBuffer = /** @class */ (function () {
    function ProgressBuffer() {
    }
    ProgressBuffer.prototype.transform = function (rain) {
        var value = 0.5;
        console.log('progressBuffer: ', rain.id, value);
        return value;
    };
    ProgressBuffer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'progressBuffer' })
    ], ProgressBuffer);
    return ProgressBuffer;
}());

// todo refactor module common code : PIPE
var EventHaveNotBeenRed = /** @class */ (function () {
    function EventHaveNotBeenRed() {
    }
    EventHaveNotBeenRed.prototype.transform = function (events) {
        var haveNotBeenRed = events.filter(function (event) { return (!event.red); });
        console.log('pipe haveNotBeenRed:', haveNotBeenRed);
        return haveNotBeenRed;
    };
    EventHaveNotBeenRed = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'eventHaveNotBeenRed',
            pure: false
        })
    ], EventHaveNotBeenRed);
    return EventHaveNotBeenRed;
}());



/***/ }),

/***/ "./src/app/home/modals/new-instance.page.html":
/*!****************************************************!*\
  !*** ./src/app/home/modals/new-instance.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n\n    <ion-card>\n        <ion-card-header>\n            <ion-card-title>Connect your RadarToRain instance</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n\n            <form #heroForm=\"ngForm\">\n                <ion-item>\n                    <ion-input type=\"url\" placeholder=\"https://RadarToRain.you/RadarToRain\" required\n                               [(ngModel)]=\"RadarToRainUrl\" name=\"RadarToRainUrl\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-input type=\"string\" placeholder=\"User\" required\n                               [(ngModel)]=\"RadarToRainUser\" name=\"RadarToRainUser\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-input type=\"password\" placeholder=\"Password\" required\n                               [(ngModel)]=\"RadarToRainPwd\" name=\"RadarToRainPwd\"></ion-input>\n                </ion-item>\n                <div>\n                    <ion-button expand=\"block\"\n                                (click)=\"add(RadarToRainUrl, RadarToRainUser, RadarToRainPwd)\"\n                                [disabled]=\"!RadarToRainUrl || !heroForm.form.valid\">Login\n                    </ion-button>\n                    <ion-button expand=\"block\"\n                                (click)=\"dismiss()\">dismiss\n                    </ion-button>\n\n\n                </div>\n            </form>\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/home/modals/new-instance.page.ts":
/*!**************************************************!*\
  !*** ./src/app/home/modals/new-instance.page.ts ***!
  \**************************************************/
/*! exports provided: NewInstancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewInstancePage", function() { return NewInstancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var NewInstancePage = /** @class */ (function () {
    function NewInstancePage(modalController, navParams) {
        this.modalController = modalController;
        this.navParams = navParams;
        // componentProps can also be accessed at construction time using NavParams}
    }
    NewInstancePage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    NewInstancePage.prototype.add = function (RadarToRainUrl, RadarToRainUser, RadarToRainPwd) {
        this.modalController.dismiss();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NewInstancePage.prototype, "value", void 0);
    NewInstancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modal-page',
            template: __webpack_require__(/*! ./new-instance.page.html */ "./src/app/home/modals/new-instance.page.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
    ], NewInstancePage);
    return NewInstancePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map