(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic\" rel=\"stylesheet\" type=\"text/css\">\n<app-top-bar></app-top-bar>\n<app-banner></app-banner>\n<app-card></app-card>\n<app-middle></app-middle>\n<section class=\"testimonials text-center bg-light\">\n    <div class=\"container\">\n        <h2 class=\"mb-5\">What people are saying...</h2>\n        <div class=\"row\" style=\"text-align: -webkit-center;\">\n            <app-people [peopleDetails]=\"peopleDetails1\"></app-people>\n            <app-people [peopleDetails]=\"peopleDetails2\"></app-people>\n            <app-people [peopleDetails]=\"peopleDetails3\"></app-people>\n        </div>\n    </div>\n</section>\n<app-sign></app-sign>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/banner/banner.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/banner/banner.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"masthead text-white text-center\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-9 mx-auto\">\n        <h1 class=\"mb-5\">Build a landing page for your business or project and generate more leads!</h1>\n      </div>\n      <div class=\"col-md-10 col-lg-8 col-xl-7 mx-auto\">\n        <form>\n          <div class=\"form-row\">\n            <div class=\"col-12 col-md-9 mb-2 mb-md-0\">\n              <input type=\"email\" class=\"form-control form-control-lg\" placeholder=\"Enter your email...\">\n            </div>\n            <div class=\"col-12 col-md-3\">\n              <button type=\"submit\" class=\"btn btn-block btn-lg btn-primary\">Sign up!</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blog/blog.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blog/blog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  blog works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/card/card.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/card/card.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"features-icons bg-light text-center\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\" *ngFor=\"let element of iconArray\">\n        <div class=\"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3\">\n          <div class=\"features-icons-icon d-flex\">\n            <i [class]=\"element.class+ ' m-auto text-primary'\"></i>\n          </div>\n          <h3>{{element.heading}}</h3>\n          <p class=\"lead mb-0\">This theme will look great on any device, no matter the size!</p>\n        </div>\n      </div>\n      <!-- <div class=\"col-lg-4\">\n        <div class=\"features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3\">\n          <div class=\"features-icons-icon d-flex\">\n            <i class=\"icon-layers m-auto text-primary\"></i>\n          </div>\n          <h3>Bootstrap 4 Ready</h3>\n          <p class=\"lead mb-0\">Featuring the latest build of the new Bootstrap 4 framework!</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"features-icons-item mx-auto mb-0 mb-lg-3\">\n          <div class=\"features-icons-icon d-flex\">\n            <i class=\"icon-check m-auto text-primary\"></i>\n          </div>\n          <h3>Easy to Use</h3>\n          <p class=\"lead mb-0\">Ready to use with your own content, or customize the source files!</p>\n        </div>\n      </div> -->\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer bg-light\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 h-100 text-center text-lg-left my-auto\">\n        <ul class=\"list-inline mb-2\">\n          <li class=\"list-inline-item\">\n            <a href=\"#\">About</a>\n          </li>\n          <li class=\"list-inline-item\">&sdot;</li>\n          <li class=\"list-inline-item\">\n            <a href=\"#\">Contact</a>\n          </li>\n          <li class=\"list-inline-item\">&sdot;</li>\n          <li class=\"list-inline-item\">\n            <a href=\"#\">Terms of Use</a>\n          </li>\n          <li class=\"list-inline-item\">&sdot;</li>\n          <li class=\"list-inline-item\">\n            <a href=\"#\">Privacy Policy</a>\n          </li>\n        </ul>\n        <p class=\"text-muted small mb-4 mb-lg-0\">&copy; Your Website 2019. All Rights Reserved.</p>\n      </div>\n      <div class=\"col-lg-6 h-100 text-center text-lg-right my-auto\">\n        <ul class=\"list-inline mb-0\">\n          <li class=\"list-inline-item mr-3\">\n            <a href=\"#\">\n              <i class=\"fab fa-facebook fa-2x fa-fw\"></i>\n            </a>\n          </li>\n          <li class=\"list-inline-item mr-3\">\n            <a href=\"#\">\n              <i class=\"fab fa-twitter-square fa-2x fa-fw\"></i>\n            </a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a href=\"#\">\n              <i class=\"fab fa-instagram fa-2x fa-fw\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/middle/middle.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/middle/middle.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"showcase\">\n  <div class=\"container-fluid p-0\">\n    <div class=\"row no-gutters\" *ngFor=\"let element of picsArray;let ind = index\">\n\n      <div class=\"col-lg-6 order-lg-2 text-white showcase-img\"[ngClass]=\"{'order-lg-2': ind%2==0}\" [ngStyle]=\"{'backgroundImage': 'url('+ element.Image +')'}\"></div>\n      <div class=\"col-lg-6 order-lg-1 my-auto showcase-text\"[ngClass]=\"{'order-lg-1': ind%2==0}\">\n        <h2>{{element.heading}}</h2>\n        <p class=\"lead mb-0\">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>\n      </div>\n    </div>\n    <!-- <div class=\"row no-gutters\">\n      <div class=\"col-lg-6 text-white showcase-img\" style=\"background-image: url('assets/img/bg-showcase-2.jpg')\"></div>\n      <div class=\"col-lg-6 my-auto showcase-text\">\n        <h2>Updated For Bootstrap 4</h2>\n        <p class=\"lead mb-0\">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>\n      </div>\n    </div>\n    <div class=\"row no-gutters\">\n      <div class=\"col-lg-6 order-lg-2 text-white showcase-img\" style=\"background-image: url('assets/img/bg-showcase-3.jpg')\"></div>\n      <div class=\"col-lg-6 order-lg-1 my-auto showcase-text\">\n        <h2>Easy to Use &amp; Customize</h2>\n        <p class=\"lead mb-0\">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>\n      </div>\n    </div> -->\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/people/people.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/people/people.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-4\">\n  <div class=\"testimonial-item mx-auto mb-5 mb-lg-0\" style=\"width: 300px;\">\n    <img class=\"img-fluid rounded-circle mb-3\" [src]=\"peopleDetails.img\" alt=\"1\">\n    <h5>{{peopleDetails.name}}</h5>\n    <p class=\"font-weight-light mb-0\">{{peopleDetails.description}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sign/sign.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sign/sign.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"call-to-action text-white text-center\">\n  <div class=\"overlay\"></div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-9 mx-auto\">\n        <h2 class=\"mb-4\">Ready to get started? Sign up now!</h2>\n      </div>\n      <div class=\"col-md-10 col-lg-8 col-xl-7 mx-auto\">\n        <form>\n          <div class=\"form-row\">\n            <div class=\"col-12 col-md-9 mb-2 mb-md-0\">\n              <input type=\"email\" class=\"form-control form-control-lg\" placeholder=\"Enter your email...\">\n            </div>\n            <div class=\"col-12 col-md-3\">\n              <button type=\"submit\" class=\"btn btn-block btn-lg btn-primary\">Sign up!</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/top-bar/top-bar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/top-bar/top-bar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light static-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">Start Bootstrap</a>\n    <a class=\"btn btn-primary\" href=\"#\">Sign In</a>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'zenAngular2';
        this.peopleDetails1 = {
            img: "assets/img/testimonials-1.jpg",
            name: "Margeret E.",
            description: "This is fantastic! Thanks so much guys!"
        };
        this.peopleDetails2 = {
            img: "assets/img/testimonials-2.jpg",
            name: "Fred S.",
            description: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
        };
        this.peopleDetails3 = {
            img: "assets/img/testimonials-3.jpg",
            name: "Sarah W.",
            description: "Thanks so much for making these free resources available to us!"
        };
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "./src/app/top-bar/top-bar.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _middle_middle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./middle/middle.component */ "./src/app/middle/middle.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sign/sign.component */ "./src/app/sign/sign.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_5__["TopBarComponent"],
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
                _middle_middle_component__WEBPACK_IMPORTED_MODULE_8__["MiddleComponent"],
                _people_people_component__WEBPACK_IMPORTED_MODULE_9__["PeopleComponent"],
                _sign_sign_component__WEBPACK_IMPORTED_MODULE_10__["SignComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _blog_blog_component__WEBPACK_IMPORTED_MODULE_12__["BlogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/banner/banner.component.css":
/*!*********************************************!*\
  !*** ./src/app/banner/banner.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! raw-loader!./banner.component.html */ "./node_modules/raw-loader/index.js!./src/app/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/banner/banner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BlogComponent = /** @class */ (function () {
    //route = new ActivatedRoute()
    function BlogComponent(route) {
        this.route = route;
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/*!*****************************************!*\
  !*** ./src/app/card/card.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
        this.iconArray = [{
                class: "icon-screen-desktop",
                heading: "fully responsive",
                paragraph: "This theme will look great on any device, no matter the size"
            },
            {
                class: "icon-layers",
                heading: "Bootstrap 4 Ready",
                paragraph: "This theme will look great on any device, no matter the size"
            },
            {
                class: "icon-check",
                heading: "Easy to Use",
                paragraph: "This theme will look great on any device, no matter the size"
            }
        ];
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/index.js!./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/card/card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/middle/middle.component.css":
/*!*********************************************!*\
  !*** ./src/app/middle/middle.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pZGRsZS9taWRkbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/middle/middle.component.ts":
/*!********************************************!*\
  !*** ./src/app/middle/middle.component.ts ***!
  \********************************************/
/*! exports provided: MiddleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddleComponent", function() { return MiddleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MiddleComponent = /** @class */ (function () {
    function MiddleComponent() {
        this.picsArray = [{
                heading: "fully responsive",
                Image: 'assets/img/bg-showcase-1.jpg',
                paragraph: "Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!"
            },
            {
                heading: "updated for bootstrap",
                Image: 'assets/img/bg-showcase-2.jpg',
                paragraph: "Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!"
            },
            {
                heading: "easy to use",
                Image: 'assets/img/bg-showcase-3.jpg',
                paragraph: "Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!"
            }
        ];
    }
    MiddleComponent.prototype.ngOnInit = function () {
    };
    MiddleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-middle',
            template: __webpack_require__(/*! raw-loader!./middle.component.html */ "./node_modules/raw-loader/index.js!./src/app/middle/middle.component.html"),
            styles: [__webpack_require__(/*! ./middle.component.css */ "./src/app/middle/middle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MiddleComponent);
    return MiddleComponent;
}());



/***/ }),

/***/ "./src/app/people/people.component.css":
/*!*********************************************!*\
  !*** ./src/app/people/people.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/people/people.component.ts":
/*!********************************************!*\
  !*** ./src/app/people/people.component.ts ***!
  \********************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PeopleComponent = /** @class */ (function () {
    function PeopleComponent() {
        this.peopleDetails = {};
    }
    PeopleComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('peopleDetails'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PeopleComponent.prototype, "peopleDetails", void 0);
    PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! raw-loader!./people.component.html */ "./node_modules/raw-loader/index.js!./src/app/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.css */ "./src/app/people/people.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/sign/sign.component.css":
/*!*****************************************!*\
  !*** ./src/app/sign/sign.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24vc2lnbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sign/sign.component.ts":
/*!****************************************!*\
  !*** ./src/app/sign/sign.component.ts ***!
  \****************************************/
/*! exports provided: SignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignComponent", function() { return SignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignComponent = /** @class */ (function () {
    function SignComponent() {
    }
    SignComponent.prototype.ngOnInit = function () {
    };
    SignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign',
            template: __webpack_require__(/*! raw-loader!./sign.component.html */ "./node_modules/raw-loader/index.js!./src/app/sign/sign.component.html"),
            styles: [__webpack_require__(/*! ./sign.component.css */ "./src/app/sign/sign.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignComponent);
    return SignComponent;
}());



/***/ }),

/***/ "./src/app/top-bar/top-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/top-bar/top-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopBarComponent = /** @class */ (function () {
    function TopBarComponent() {
    }
    TopBarComponent.prototype.ngOnInit = function () {
    };
    TopBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-bar',
            template: __webpack_require__(/*! raw-loader!./top-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/top-bar/top-bar.component.html"),
            styles: [__webpack_require__(/*! ./top-bar.component.css */ "./src/app/top-bar/top-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopBarComponent);
    return TopBarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular files\zenAngular2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map