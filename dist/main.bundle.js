webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- <app-root></app-root>  -->\r\n\r\n <!-- <h1> hi from app-root!</h1> -->\r\n\r\n<!-- ################################### -->\r\n<!-- ############[ My Pages ]########### -->\r\n<!-- ################################### -->\r\n\r\n<!-- ________[User]_________ -->\r\n\r\n<!-- <app-login></app-login> -->\r\n<router-outlet></router-outlet>\r\n\r\n\t\t<!-- \r\n\t\t[HEADER]\r\n\t\t\r\n\r\n\t\t[TOP MODULE]\r\n\t\t\r\n\r\n\t\t[BUTTONS]\r\n\t\t\r\n\r\n\t\t[BOTTOM MODULE]\r\n\t\t\r\n\r\n\t\t[FOOTER]\r\n\t\t\r\n\r\n\t\t -->\r\n\t\t \r\n<!-- <app-profile></app-profile> -->\r\n<!-- <app-register></app-register> -->\r\n\r\n<!-- ________[Page]_________ -->\r\n<!-- <app-page-edit></app-page-edit> -->\r\n<!-- <app-page-list></app-page-list> -->\r\n<!-- <app-page-new></app-page-new> -->\r\n\r\n<!-- ________[Website]_________ -->\r\n<!-- <app-website-edit></app-website-edit> -->\r\n<!-- <app-website-list></app-website-list> -->\r\n<!-- <app-website-new></app-website-new> -->\r\n\r\n<!-- ________[Widget]_________ -->\r\n<!-- <app-widget-chooser></app-widget-chooser> -->\r\n<!-- <app-widget-list></app-widget-list> -->\r\n<!-- <app-widget-edit></app-widget-edit> -->\r\n\r\n<!-- ______[youtube/header/image]_______ -->\r\n<!-- <app-widget-header></app-widget-header> -->\r\n<!-- <app-widget-image></app-widget-image> -->\r\n<!-- <app-widget-youtube></app-widget-youtube> -->\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AS-4';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_register_register_component__ = __webpack_require__("./src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_page_page_new_page_new_component__ = __webpack_require__("./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_page_page_edit_page_edit_component__ = __webpack_require__("./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_list_page_list_component__ = __webpack_require__("./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_website_website_new_website_new_component__ = __webpack_require__("./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_website_website_edit_website_edit_component__ = __webpack_require__("./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_website_website_list_website_list_component__ = __webpack_require__("./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_list_widget_list_component__ = __webpack_require__("./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Other Modules__________________________________________________________



// ROUTING_______________________________________________________________

// SERVICES______________________________________________________________




// WEB PAGE COMPONENTS________________________________________________________















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_page_page_list_page_list_component__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* Routing */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_user_service_client__["a" /* UserServices */],
                __WEBPACK_IMPORTED_MODULE_7__services_website_service_client__["a" /* WebsiteServices */],
                __WEBPACK_IMPORTED_MODULE_8__services_page_service_client__["a" /* PageServices */],
                __WEBPACK_IMPORTED_MODULE_9__services_widget_service_client__["a" /* Widget_Services */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }) // [END OF CLASS]
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__ = __webpack_require__("./src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_page_page_new_page_new_component__ = __webpack_require__("./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_page_page_edit_page_edit_component__ = __webpack_require__("./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_page_page_list_page_list_component__ = __webpack_require__("./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_website_website_new_website_new_component__ = __webpack_require__("./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_edit_website_edit_component__ = __webpack_require__("./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_website_website_list_website_list_component__ = __webpack_require__("./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__ = __webpack_require__("./src/app/components/widget/widget-list/widget-list.component.ts");
/*##############################################################
  ############[            MAIN Imports             ]###########
  ############################################################## */

/*##############################################################
  ############[           My Web Components         ]###########
  ############################################################## */












/*##############################################################
  ############[                Routes               ]###########
  ############################################################## */
var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_2__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_9__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_6__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_4__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_5__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
];
/*################################################################*/
/*--------------------------------------------------
  ############[     Compile problems    ]###########
  ------------------------------------------------- */
// Export the routes as module providers
// export class RoutingModule { }
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--########################################################-->\n<!--#############[          NAV Bar            ]############-->\n<!--########################################################-->\n\n \n<nav class=\"navbar fixed-top navbar-light sw-bg-grey\">\n\n\t\t<a  class=\"sw-color-black\" \n\t\t\trouterLink=\"/user/{{uid}}/website/{{wid}}/page\">\n\t\t\t<i class=\"fas fa-chevron-left\"></i>\n\t\t\t</a>\n\n\t<div class=\"sw-90-width\">\n\n\t\t<a \tclass=\"navbar-brand float-left\" \n\t\t\trouterLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}\">\n\t\t\tEdit Page\n\t\t\t</a>\n\t\t</div>\n\n\n\t<button class=\"btn sw-button-to-a sw-color-black float-right\"\n\t\t\ttype=\"submit\" \n\t\t\t[disabled]=\"f.invalid\" \n\t\t\tform=\"pageForm\" >\n\t\t\t<i class=\"fas fa-check\"></i>\n\t\t\t</button>\n\n</nav>\n\n\n<!--########################################################-->\n<!--#############[          Form Inputs        ]############-->\n<!--########################################################-->\n\n<div class=\"container-fluid\">\n\t\n\t<form id=\"pageForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\n\n\t\t<div class=\"form-group\">\n\n\t\t\t\t\t<label \tclass=\"font-weight-bold\" \n\t\t\t\t\t\t\tfor=\"website-name\">\n\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t<input class=\"form-control\" \n\t\t\t\t\t\t\trequired ngModel=\"{{page.name}}\" \n\t\t\t\t\t\t\t#name=\"ngModel\" \n\t\t\t\t\t\t\ttype=\"text\" name=\"name\" \n\t\t\t\t\t\t\tplaceholder=\"what is the name of your page\" \n\t\t\t\t\t\t\tvalue=\"Blog Post\">\n\t\t</div>\n\n\t\t<div \t*ngIf=\"name.invalid && name.touched\" \n\t\t\t\tclass=\"alert alert-warning\">\n\t\t\t\tThis fiels canot be enpty\n\t\t\t\t</div>\n\n\t\t<div class=\"form-group\">\n\t\t\t\t<label \tclass=\"font-weight-bold\"  \n\t\t\t\t\t\tfor=\"website-name\">\n\t\t\t\t\t\tDescription\n\t\t\t\t\t\t</label>\n\t\t\t\t<input \tclass=\"form-control\" \n\t\t\t\t\t\tngModel={{page.description}} \n\t\t\t\t\t\t#description=\"ngModel\" \n\t\t\t\t\t\ttype=\"text\" \n\t\t\t\t\t\tname=\"description\" \n\t\t\t\t\t\tplaceholder=\"Enter your page description...\" \n\t\t\t\t\t\tvalue=\"Blog\">\t\t\n\t\t</div>\n\n\n\t\t<button \tclass=\"btn btn-primary btn-block\" \n\t\t\t\t\ttype=\"submit\" \n\t\t\t\t\t[disabled]=\"f.invalid\">\n\t\t\t\t\tUpdate\n\t\t\t\t\t</button>\n\t\t\t\t\t\n\t\t<button \ttype=\"button\" \n\t\t\t\t\tclass=\"btn btn-danger btn-block\" \n\t\t\t\t\t(click)=\"remove()\">\n\t\t\t\t\tDelete\n\t\t\t\t\t</button>\n\n\t</form>  <!-- [ END FORM ] -->\n</div> <!-- [ END OF CONTAINER ] -->\n\n<!--########################################################-->\n<!--#############[        footer Icon          ]############-->\n<!--########################################################-->\n\n<footer class=\"navbar fixed-bottom navbar-light sw-bg-grey\">\n\n\t\t<div class=\"sw-full-width\">\n\n\t\t\t<a \tclass=\"navbar-brand float-right\" \n\t\t\t\trouterLink=\"/user/{{uid}}\">\n\t\t\t\t<i class=\"fas fa-user\"></i>\n\t\t\t\t</a>\n\n\t\t</div>\n</footer>\n\n"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*##############################################################
  ############[          Imported Modules           ]###########
  ############################################################## */




var PageEditComponent = /** @class */ (function () {
    /*________________________________*/
    function PageEditComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.page = _this.pageService.findPageById(_this.pid);
            _this.name = _this.page.name;
            _this.description = _this.page.description;
        });
    };
    PageEditComponent.prototype.update = function () {
        this.name = this.pageForm.value.name;
        this.description = this.pageForm.value.description;
        var updatedPage = {
            _id: this.pid,
            name: this.name,
            description: this.description,
            websiteId: this.wid
        };
        this.pageService.updatePage(this.pid, updatedPage);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
    };
    PageEditComponent.prototype.remove = function () {
        this.pageService.deletePage(this.pid);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], PageEditComponent.prototype, "pageForm", void 0);
    PageEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-edit',
            template: __webpack_require__("./src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__("./src/app/components/page/page-edit/page-edit.component.css")]
        })
        /*##############################################################
          ############[              CLASS                  ]###########
          ############################################################## */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageServices */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PageEditComponent);
    return PageEditComponent;
}()); /* [ END OF CLASS ] */



/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--########################################################-->\n<!--#############[           NAV BAR           ]############-->\n<!--########################################################-->\n\n<!-- <nav class=\" navbar navbar-dark bg-primary fixed-top\"> -->\n\t\t\t\t\t\t\t\t\t\t<!-- sw-bg-grey -->\n<nav class=\"navbar fixed-top navbar-light  bg-primary\">\n\n\t\t<a \t\tclass=\"sw-color-black\" \n\t\t\t\trouterLink=\"/user/{{uid}}/website\">\n\t\t\t\t<i class=\"fas fa-chevron-left\"></i>\n\t\t\t\t</a>\n\n\t\t<div class=\"sw-80-width\">\n\n\t\t\t<a \tclass=\"navbar-brand float-left\" \n\t\t\t\trouterLink=\"/user/{{uid}}/website/{{wid}}/page\">\n\t\t\t\t<strong>Page List</strong>\n\t\t\t\t</a>\n\t\t</div>\n\n\t\t<a \t\tclass=\"sw-color-black\" \n\t\t\t\trouterLink=\"/user/{{uid}}/website/{{wid}}/page/new\">\n\t\t\t\t<i class=\"fas fa-plus\"></i>\n\t\t\t\t</a>\n</nav>\n\n<!--########################################################-->\n<!--#############[      List item Container    ]############-->\n<!--########################################################-->\n<div class=\"container-fluid\">\n\n\t<ul class=\"list-group list-group-flush\">\n\n\t\t\t<li \tclass=\"list-group-item\" \n\t\t\t\t\t*ngFor=\"let page of pages\">\n\n\t\t\t\t\t<a \tclass=\"sw-color-black\" \n\t\t\t\t\t\trouterLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}/widget\">\n\t\t\t\t\t\t{{page.name}}\n\t\t\t\t\t\t</a>\n\n\t\t\t\t\t<a \tclass=\"float-right sw-color-black\" \n\t\t\t\t\t\trouterLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}\">\n\t\t\t\t\t\t<i class=\"fas fa-cog\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t</li>\n\t</ul>\n\n</div>   <!-- [END CONTAINER] -->\n\n\t\t\t\t<!--########################################################-->\n\t\t\t\t<!--#############[        FOOTER OF PAGE       ]############-->\n\t\t\t\t<!--########################################################-->\n\n<footer class=\"navbar fixed-bottom bg-primary navbar-light sw-bg-grey\">\n\n\t\t<div class=\"sw-full-width\">\n\t\t\t<a \tclass=\"navbar-brand float-right\" \n\t\t\t\trouterLink=\"/user/{{uid}}\">\n\t\t\t\t<i class=\"fas fa-user\"></i>\n\t\t\t\t</a>\n\t\t</div>\n\n</footer>\n\n\t"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*##############################################################
  ############[          Imported Modules           ]###########
  ############################################################## */



var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pages = _this.pageService.findPageByWebsiteId(_this.wid);
        });
    };
    PageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-list',
            template: __webpack_require__("./src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__("./src/app/components/page/page-list/page-list.component.css")]
        })
        /*##############################################################
          ############[                ClASS                ]###########
          ############################################################## */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageServices */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<!--########################################################-->\t<!--#############[          NAV BAR            ]############-->\t<!--########################################################-->\n\n<nav class=\"navbar fixed-top navbar-light bg-primary sw-bg-grey\">\n\n\t\t<a \tclass=\"sw-color-black\" \n\t\t\trouterLink=\"/user/{{uid}}/website/{{wid}}/page\">\n\t\t\t<i class=\"fas fa-chevron-left\"></i>\n\t\t\t</a>\n\n\t\t<div class=\"sw-80-width\">\n\n\t\t\t<a \tclass=\"navbar-brand float-left\" \n\t\t\t\trouterLink=\"/user/{{uid}}/website/{{wid}}/page/new\">\n\t\t\t\t<strong>New Page</strong>\n\t\t\t\t</a>\n\t\t</div>\n\n\t\t<button class=\"btn sw-button-to-a sw-color-black float-right\"\n\t\t\t\t[disabled]=\"f.invalid\" \n\t\t\t\ttype=\"submit\" \n\t\t\t\tform=\"pageForm\">\n\t\t\t\t<i class=\"fas fa-check\"></i>\n\t\t\t\t</button>\n\n</nav>\n\n<!--########################################################-->\n<!--#############[         MAIN FORM           ]############-->\n<!--########################################################-->\n<div class=\"container-fluid\">\n\n\t<form id=\"pageForm\" (ngSubmit)=\"create()\" #f=\"ngForm\">\n\n\t\t<div class=\"form-group\">\n\t\t\t\t<label  class=\"font-weight-bold\"  \n\t\t\t\t\t\tfor=\"website-name\">\n\t\t\t\t\t\t<strong>Name</strong>\n\t\t\t\t\t\t</label>\n\n\n\t\t\t\t<input  class=\"form-control\" \n\t\t\t\t\t\trequired ngModel \n\t\t\t\t\t\t#name=\"ngModel\" \n\t\t\t\t\t\ttype=\"text\" \n\t\t\t\t\t\tname=\"name\" \n\t\t\t\t\t\tplaceholder=\"Please type in a page name here\">\n\t\t</div>\n\n\n\t\t<div    *ngIf=\"name.invalid && name.touched\" \n\t\t\t\tclass=\"alert alert-warning\">\n\t\t\t\tThis Name Field must be filled in\n\t\t\t\t</div>\n\n\n\t\t<div class=\"form-group\">\n\n\t\t\t<label>\t\n\t\t\t\t\t<strong>Description</strong>\n\t\t\t\t\t</label>\n\n\t\t\t<input  class=\"form-control\" \n\t\t\t\t\tngModel \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"description\" \n\t\t\t\t\t#description=\"ngModel\" \n\t\t\t\t\tplaceholder=\"Please write about your page\">\n\t\t</div>\n\n\n\n\t\t<button class=\"btn btn-success btn-block\"\n\t\t\t\t[disabled]=\"f.invalid\" \n\t\t\t\ttype=\"submit\">\n\t\t\t\tSubmit\n\t\t\t\t</button>\n\n\t\t<a  \tclass=\"btn btn-block btn-danger \" \n\t\t\t\trouterLink=\"/user/{{uid}}/website/{{wid}}/page\">\n\t\t\t\tCancel\n\t\t\t\t</a>\n\n\t</form> <!-- [END OF FORM] -->\n\n</div>  <!-- [END OF CONTAINER] -->\n\n<!--########################################################-->\n<!--#############[          PAGE FOOTER        ]############-->\n<!--########################################################-->\n\n<footer class=\" navbar  \n\t\t\t\tsw-font-white  \n\t\t\t\tbg-primary \n\t\t\t\tfixed-bottom  \n\t\t\t\tnavbar-light  \n\t\t\t\tsw-bg-grey\">\n\t\t\t\t\n\t<div class=\"sw-full-width\">\n\n\t\t<a \tclass=\"navbar-brand float-right\" \n\t\t\trouterLink=\"/user/{{uid}}\">\n\t\t\t<i class=\"fas fa-user\"></i>\n\t\t\t</a>\n\n\t</div>\n</footer>"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*##############################################################
  ############[          Imported Modules           ]###########
  ############################################################## */




var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
    };
    PageNewComponent.prototype.create = function () {
        this.name = this.pageForm.value.name;
        this.description = this.pageForm.value.description;
        var newPage = {
            _id: "",
            name: this.name,
            websiteId: this.wid,
            description: this.description
        };
        this.pageService.createPage(this.wid, newPage);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], PageNewComponent.prototype, "pageForm", void 0);
    PageNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-new',
            template: __webpack_require__("./src/app/components/page/page-new/page-new.component.html"),
            styles: [__webpack_require__("./src/app/components/page/page-new/page-new.component.css")]
        })
        /*##############################################################
          ############[                Class                ]###########
          ############################################################## */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageServices */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PageNewComponent);
    return PageNewComponent;
}()); /* [ END OF CLASS ] */



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n\t\t<!--########################################################-->\n\t\t<!--#############[         LOGIN AND FLAG      ]############-->\n\t\t<!--########################################################-->\n\n<div class=\"container-fluid\">\n\n\t<h1>Login</h1>\n\n\t<div    *ngIf=\"errorFlag\" \n\t\t \tclass=\"alert alert-danger\">\n\t\t\tYou entered an Invalid username or password\n\t\t\t</div>\n\n\t\t<!--########################################################-->\n\t\t<!--#############[           FORM              ]############-->\n\t\t<!--########################################################-->\n\n\t<form (ngSubmit)=\"Login()\" #f=\"ngForm\">\n\n\t\t<div  class=\"form-group\">\n\t\t\t<input  class=\"form-control\" \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t  \tname=\"username\" \n\t\t\t\t  \tplaceholder=\"Username\" \n\t\t\t\t  \trequired\n\t\t\t\t  \tngModel\n\t\t\t\t  \t#username=\"ngModel\">\n\t\t</div>\n\n\t\t<span   class=\"alert\" \n\t\t\t\t*ngIf=\"username.invalid && username.touched\">\n\t\t\t\tPlease enter username!\n\t\t\t\t</span>\n\n\t\t<div class=\"form-group\">\n\t\t\t<input  class=\"form-control\" \n\t\t\t\t\trequired type=\"password\" \n\t\t\t\t\tname=\"password\" \n\t\t\t\t\tplaceholder=\"Password\" \n\t\t\t\t\trequired\n\t\t\t\t  \tngModel\n\t\t\t\t\t#password=\"ngModel\">\n\t\t</div>\n\n\t\t<span   class=\"alert\" \n\t\t\t\t*ngIf=\"password.invalid && password.touched\">\n\t\t\t\tPlease enter password!\n\t\t\t\t</span>\n\n\t\t<button class=\"btn btn-primary btn-block\" \n\t\t\t\t[disabled]=\"f.invalid\" \n\t\t\t\ttype=\"submit\">\n\t\t\t\tLogin\n\t\t\t\t</button>\n\n\t\t<button class=\"btn btn-success btn-block\" \n\t\t\t\trouterLink=\"/register\">\n\t\t\t\tRegister\n\t\t\t\t</button>\n\n\t</form> <!-- [END OF FORM] -->\n\n</div>  <!-- [END OF CONTAINER] -->"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/**
############################################
______________[   TODO :   ]________________

 
#############################################
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*##############################################################
  ############[          Imported Modules           ]###########
  ############################################################## */




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userServices, router) {
        this.userServices = userServices;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.Login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        var user = this.userServices.findUserByCredentials(this.username, this.password);
        if (user) {
            this.errorFlag = false;
            this.router.navigate(['user', user._id]);
        }
        else {
            this.errorFlag = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/user/login/login.component.css")]
        })
        /*##############################################################
          ############[                CLASS                ]###########
          ############################################################## */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserServices */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}()); /* [ END OF CLASS ]*/



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--########################################################-->\n<!--#############[    NAV BAR TO OF PAGE       ]############-->\n<!--########################################################-->\n<!-- <div class=\"container\"> -->\n\t<!--_______________NAV_BAR_________________-->\n<nav class=\"navbar navbar-dark bg-primary fixed-top\">\n\n\t\t<a  class=\"navbar-brand\" \n\t\t\trouterLink=\"user/{{uid}}\">\n\t\t\t<strong>Profile</strong>\n\t\t\t</a>\n\n\t\t<button class=\"btn sw-color-white sw-button-to-a\" \n\t\t\t\ttype=\"submit\" \n\t\t\t\tform=\"profileForm\" \n\t\t\t\t[disabled]=\"f.invalid\">\n\t\t\t\t<i class=\"fas fa-check\"></i>\n\t\t\t\t<!-- <i class=\"fas fa-cog fa-spin\"></i> -->\n\t\t\t</button>\n\n</nav>\n\n<!-- </div>   [END CONTAINER] -->\n<!--########################################################-->\n<!--#############[                             ]############-->\n<!--########################################################-->\n<div class=\"container-fluid\">\n\n\t\t<div    *ngIf=\"usernameTaken\" \n\t\t\t  \tclass=\"alert alert-danger\">\n\t\t\t\tTHis username is already useed try another one.\n\t\t\t\t</div>\n\n\t\t<div    *ngIf=\"submitSuccess\" \n\t\t\t\tclass=\"alert alert-success\">\n\t\t\t\tUpdate successfull !\n\t\t\t\t</div>\n\n<!--########################################################-->\n<!--#############[        FORM FOR PAGE        ]############-->\n<!--########################################################-->\n\n<form (ngSubmit)=\"update()\" id=\"profileForm\" #f=\"ngForm\">\n\n\t<div class=\"form-group\">\n\n\t\t\t\t<label for=\"username\"><strong>Username</strong></label>\n\n\t\t\t\t<input  class=\"form-control\" \n\t\t\t\t\t\ttype=\"text\" name=\"username\" \n\t\t\t\t\t\trequired ngModel=\"{{user.username}}\" \n\t\t\t\t\t\t#username=\"ngModel\" \n\t\t\t\t\t\tplaceholder=\"Your Username\">\n\t</div>\n\n\t<div class=\"form-group\">\n\n\t\t\t\t<label for=\"email\"><strong>Email</strong></label>\n\n\t\t\t\t<input  class=\"form-control\" \n\t\t\t\t\t\ttype=\"email\" \n\t\t\t\t\t\tname=\"email\" \n\t\t\t\t\t\tngModel=\"{{user.email}}\" \n\t\t\t\t\t\t#email=\"ngModel\" \n\t\t\t\t\t\tplaceholder=\"yourFriend@gmail.com\">\n\t</div>\n\n\t<div class=\"form-group\">\n\n\t\t\t\t<label for=\"firstName\"><strong>First Name</strong></label>\n\n\t\t\t\t<input  class=\"form-control\" \n\t\t\t\t\t\ttype=\"text\" \n\t\t\t\t\t\tname=\"firstName\" \n\t\t\t\t\t\tngModel=\"{{user.firstName}}\" \n\t\t\t\t\t\t#firstName=\"ngModel\" \n\t\t\t\t\t\tplaceholder=\"Your First name here\">\n\t</div>\n\n\n\t<div class=\"form-group\">\n\n\t\t\t\t<label for=\"lastName\"><strong>Last Name</strong></label>\n\n\t\t\t\t<input  class=\"form-control\" \n\t\t\t\t\t\ttype=\"text\" \n\t\t\t\t\t\tname=\"lastName\" \n\t\t\t\t\t\tngModel=\"{{user.lastName}}\" \n\t\t\t\t\t\t#lastname=\"ngModel\" \n\t\t\t\t\t\tplaceholder=\"Your Last name here\">\n\t</div>\n\n\n\t<a  \tclass=\"btn btn-primary btn-block\" \n\t\t\trouterLink=\"/user/{{uid}}/website\">\n\t\t\tWebsites\n\t\t\t</a>\n\n\t<a  \tclass=\"btn btn-danger btn-block\" \n\t\t\trouterLink=\"/login\">\n\t\t\tLogout\n\t\t\t</a>\n\n</form>  <!-- [END OF FORM] -->\n\t\n</div>   <!-- [END CONTAINER FLUID] -->\n\t\t\n<!--########################################################-->\n<!--#############[        FOOTER OF PAGE       ]############-->\n<!--########################################################-->\n\t\n<footer class=\"navbar navbar-dark bg-primary fixed-bottom\">\n\n\t\t<div class=\"sw-full-width\">\n\t\t\t\t<a  routerLink=\"user/{{uid}}\" \n\t\t\t\t\tclass=\"sw-color-white float-right\" >\n\t\t\t\t\t<i class=\"fas fa-user\"></i>\n\t\t\t\t\t</a>\n\t\t</div>\n\n</footer>\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.user = _this.userService.findUserById(_this.uid);
            _this.username = _this.user.username;
            _this.email = _this.user.email;
            _this.firstName = _this.user.firstName;
            _this.lastName = _this.user.lastName;
            _this.oldUsername = _this.user.username;
        });
    };
    ProfileComponent.prototype.update = function () {
        this.username = this.profileForm.value.username;
        this.email = this.profileForm.value.email;
        this.firstName = this.profileForm.value.firstName;
        this.lastName = this.profileForm.lastname;
        var aUser = this.userService.findUserByUserName(this.username);
        if (aUser && this.oldUsername !== this.username) {
            this.usernameTaken = true;
            this.submitSuccess = false;
        }
        else {
            var updatedUser = {
                _id: this.user._id,
                username: this.username,
                password: this.user.password,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email
            };
            this.userService.updateUser(this.uid, updatedUser);
            this.usernameTaken = false;
            this.submitSuccess = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", Object)
    ], ProfileComponent.prototype, "profileForm", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/user/profile/profile.component.css")]
        })
        /*##############################################################
          ############[                CLASS                ]###########
          ############################################################## */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__services_user_service_client__["a" /* UserServices */]])
    ], ProfileComponent);
    return ProfileComponent;
}()); /* [END OF CLASS] */



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n\n\t\t<h1>Register</h1>\n\n\t\t<div    class=\"alert alert-danger\" \n\t\t\t\t*ngIf=\"usernameError\">\n\t\t\t\tThis username already in use, Try another one.\t\t\n\t\t\t\t</div>\n\n\t\t<div    class=\"alert alert-danger\" \n\t\t\t\t*ngIf=\"passwordError\">\n\t\t\t\tPassword ERROR both passwords dont match !\t\t\n\t\t\t\t</div>\n\n<!--########################################################-->\n<!--#############[            FORM             ]############-->\n<!--########################################################-->\n\n<form (ngSubmit)=\"register()\" #f=\"ngForm\">\n\n\t<div class=\"form-group\">\n\n\t\t\t\t<input  class=\"form-control\" \n\t\t\t\t\t\ttype=\"text\" \n\t\t\t\t\t\tname=\"username\" \n\t\t\t\t\t\trequired \n\t\t\t\t\t\tngModel \n\t\t\t\t\t\t#username=\"ngModel\" \n\t\t\t\t\t\tplaceholder=\"Username\">\n\t</div>\n\n\t<span \tclass=\"alert\" \n\t\t\t*ngIf=\"username.invalid && username.touched\">\n\t\t\tPlease enter a username !\n\t\t\t</span>\n\n\t<div class=\"form-group\">\n\n\t\t\t<input  class=\"form-control\" \n\t\t\t\t\ttype=\"password\" \n\t\t\t\t\tname=\"password\" \n\t\t\t\t\trequired  \n\t\t\t\t\tngModel \n\t\t\t\t\t#password=\"ngModel\" \n\t\t\t\t\tplaceholder=\"Password\">\n\t</div>\n\n\t<span   class=\"alert\" \n\t\t\t*ngIf=\"password.invalid && password.touched\">\n\t\t\tPlease Enter a Password here!\n\t\t\t</span>\n\n\t<div class=\"form-group\">\n\n\t\t<input  class=\"form-control\" \n\t\t\t\ttype=\"password\" \n\t\t\t\tname=\"verifyPassword\" \n\t\t\t\trequired \n\t\t\t\tngModel \n\t\t\t\t#verifyPassword=\"ngModel\" \n\t\t\t\tplaceholder=\"Verify Password\">\n\t\t\t\t\n\t</div>\n\n\t<span   class=\"alert\" \n\t\t\t*ngIf=\"verifyPassword.invalid && verifyPassword.touched\">\n\t\t\tPlease Enter a password to Verify the password !\n\t\t\t</span>\n\n\n\n\t<button     class=\"btn btn-primary btn-block\" \n\t\t\t\ttype=\"submit\" \n\t\t\t\t[disabled]=\"f.invalid\">\n\t\t\t\tRegister\n\t\t\t\t</button>\n\n\t<button     class=\"btn btn-danger btn-block\" \n\t\t\t\trouterLink=\"/login\">\n\t\t\t\tCancel\n\t\t\t\t</button>\n</form>\n\n\n</div> <!-- contaianer end -->"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    /* [_NG_ON_INIT FUNCTION_] */
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verifyPassword = this.registerForm.value.verifyPassword;
        if (this.password !== this.verifyPassword) {
            this.passwordError = true;
            this.usernameError = false;
        }
        else {
            this.passwordError = false;
            var user = this.userService.findUserByUserName(this.username);
            if (user) {
                this.usernameError = true;
            }
            else {
                this.usernameError = false;
                this.passwordError = false;
                var newUser = {
                    _id: "",
                    username: this.username,
                    password: this.password,
                    firstName: "",
                    lastName: "",
                    email: ""
                };
                this.userService.createUser(newUser);
                var id = this.userService.findUserByUserName(this.username)._id;
                this.router.navigate(['user', id]);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserServices */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}()); /* [___________________END OF CLASS_______________________]*/



/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!--###############################################################-->\n<!--###########[          TOP NAVE BARs        ]###################-->\n<!--##############################################################-->\n\n<!--########################################################-->\n<!--#############[   [ LEFT ]  Side Nav Bar    ]############-->\n<!--########################################################-->\n\n<nav class=\"row navbar navbar-dark fixed-top bg-primary\">\n\n\t<div class=\"col-sm-4 d-none d-md-block\">\n\n\t\t\t<a  class=\"sw-color-white\" \n\t\t\t\trouterLink=\"/user/{{uid}}/website\">\n\t\t\t\t<i class=\"fas fa-chevron-left\"></i>\n\t\t\t\t</a>\n\n\t\t\t<a  class=\"sw-color-white sw-left-padding\" \n\t\t\t\trouterLink=\"/user/{{uid}}/website\">\n\t\t\t\t<strong>Websites</strong>\n\t\t\t\t</a>\n\n\t\t\t<a  class=\"sw-color-white float-right\" \n\t\t\t\trouterLink=\"/user/{{uid}}/website/new\">\n\t\t\t\t<i class=\"fas fa-plus\"></i>\n\t\t\t\t</a>\n\n\t</div>\n<!--########################################################-->\n<!--#############[   [ Right] Side Nav Bar     ]############-->\n<!--########################################################-->\n\t<div class=\"col-md-8\">\n\n\t\t<a  class=\"sw-color-white\" \n\t\t\trouterLink=\"/user/{{uid}}/website/{{wid}}\">\n\t\t\t<strong>Edit Website</strong>\n\t\t\t</a>\n\n\t\t<button class=\"btn sw-color-white float-right sw-button-to-a\" \t\t \n\t\t\t\ttype=\"submit\" \n\t\t\t\tform=\"websiteForm\">\n\t\t\t\t<i class=\"fas fa-check\"></i>  \n\t\t\t\t</button>\n\t\n\t</div>\n\n\n</nav>   <!-- [END OF NAV SECTION] -->\n\n<!--########################################################-->\n<!--###########[            NEW ROW             ]###########-->\n<!--########################################################-->\n<div class=\"row\">  \n<!--########################################################-->\n<!--#############[   [ LEFT ] Side of Website  ]############-->\n<!--########################################################-->\n<div class=\"col-md-4 d-none d-md-block\">  \n\t<!-- [GRID USEING 4 COLUMES PF PAGE] -->\n<div class=\"container-fluid\">\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\" \n\n\t\t\t*ngFor =\"let website of websites\">\n\n\t\t\t\t<a \trouterLink=\"/user/{{uid}}/website/{{website._id}}/page\">\n\t\t\t\t\t{{website.name}}\n\t\t\t\t\t</a>\n\n\t\t\t\t<a  class=\"float-right\" \n\t\t\t\t\trouterLink=\"/user/{{uid}}/website/{{website._id}}\">\n\t\t\t\t\t<i class=\"fas fa-cog\"></i>\n\t\t\t\t\t</a>\n\t\t</li>\n\t</ul>\n</div> <!-- [END OF CONTAINER] -->\n</div>\t   <!-- [END OF LEFT SIDE ] -->\n<!--########################################################-->\n<!--#############[  [ Right ] Side of Website  ]############-->\n<!--########################################################-->\n<div class=\"col-md-8 d-none d-md-block\">  \n\t<!-- [GRID USEING 8 COLUMES PF PAGE] -->\n<div class=\"container-fluid\">\n\n\t<form id=\"websiteForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\n\t\t<div class=\"form-group\">\n\n\t\t\t<label><strong>Name</strong></label>\n\n\t\t\t<input  class=\"form-control\" \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"name\" \n\t\t\t\t\tplaceholder=\"Put in your Website name here\" \n\t\t\t\t\trequired \n\t\t\t\t\tngModel=\"{{website.name}}\" \n\t\t\t\t\t#name=\"ngModel\">\n\t\t</div>\n\n\t\t<div    class=\"alert alert-warning\" \n\t\t\t\t\t*ngIf=\"name.invalid && name.touched\">\n\t\t\t\t\t You must enter a Name here\n\t\t</div>\n\n\t\t<div class=\"form-group\">\n\n\t\t\t\t<label  for=\"description\">\n\t\t\t\t\t\t<b>Description</b>\n\t\t\t\t\t\t</label>\n\n\t\t\t\t<textarea   rows=\"10\" \n\t\t\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\t\t\tname=\"description\" \n\t\t\t\t\t\t\tplaceholder=\"Tell us about your website\" \n\t\t\t\t\t\t\tngModel=\"{{website.description}}\" \n\t\t\t\t\t\t\t#description=\"ngModel\">\n\t\t\t\t\t\t</textarea>\n\t\t</div>\n\n\t\t\t\t<button \tclass=\"btn btn-danger\"\n\t\t\t\t\t\t\t(click)=\"delete()\" \n\t\t\t\t\t\t\ttype=\"button\">\n\t\t\t\t\t\t\tDelete\n\t\t\t\t\t\t</button>\n\n\n\t\t\t\t<button \ttype=\"submit\" \n\t\t\t\t\t\t\tclass=\"btn btn-primary float-right\">\n\t\t\t\t\t\t\tUpdate\n\t\t\t\t\t\t</button>\n\n\t\t</form>  <!-- [END OF FORM] -->\n\t</div>  <!-- [END OF CONTAINER] -->\n</div>\t\t<!-- [END OF RIGHT SIDE ] -->\n\t\t\n</div>   <!-- [END ROW]__________________________________________________________ -->\n\n<!--##############################################################-->\n<!--###########[     [ FOOTER ]  BOTTOM OF PAGE      ]############-->\n<!--##############################################################-->\n\n<footer class=\"navbar fixed-bottom navbar-dark bg-primary\">\n\t<div class=\"sw-full-width\">\n\n\t\t\t<a  class=\"navbar-brand float-right\" \n\t\t\t\trouterLink=\"/user/{{uid}}\">\n\t\t\t\t<i class=\"fas fa-user\"></i>\n\t\t\t\t</a>\n\t</div>\n</footer>\n\n\n"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.websites = _this.websiteService.findWebsiteByUser(_this.uid);
            _this.website = _this.websiteService.findWebsiteById(_this.wid);
            _this.name = _this.website.name;
            _this.description = _this.website.description;
        });
    };
    WebsiteEditComponent.prototype.update = function () {
        this.name = this.websiteForm.value.name;
        this.description = this.websiteForm.value.description;
        var updatedWeb = {
            _id: this.wid,
            name: this.name,
            developerId: this.uid,
            description: this.description
        };
        this.websiteService.updateWebsite(this.wid, updatedWeb);
        this.router.navigate(['user', this.uid, 'website']);
    };
    WebsiteEditComponent.prototype.delete = function () {
        this.websiteService.deleteWebsite(this.wid);
        this.router.navigate(['user', this.uid, 'website']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], WebsiteEditComponent.prototype, "websiteForm", void 0);
    WebsiteEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-edit',
            template: __webpack_require__("./src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__("./src/app/components/website/website-edit/website-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteServices */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}()); /* [ END OF CLASS ] */



/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"top_of_the_page\"></div>\n\n<!--########################################################-->\n<!--#############[         NAV SECTION         ]############-->\n<!--########################################################-->\n<nav class=\"navbar fixed-top navbar-dark bg-primary\">\n\n\t\t<a  class=\"sw-color-white\" \n\t\t\trouterLink=\"/user/{{uid}}\">\n\t\t\t<i class=\"fas fa-chevron-left\"></i>\n\t\t\t</a>\n\n\t\t<div class=\"sw-90-width\">\n\t\t\t\n\t\t\t<a  class=\"navbar-brand float-left\" \n\t\t\t\trouterLink=\"/user/{{uid}}/website\">\n\t\t\t\t<strong>Websites</strong>\n\t\t\t\t</a>\n\t\t</div>\n\n\t\t<a  class=\"sw-color-white\" \n\t\t\trouterLink=\"/user/{{uid}}/website/new\">\n\t\t\t<i class=\"fas fa-plus\"></i>\n\t\t\t</a>\n</nav>\n<!--########################################################-->\n<!--#############[      LIST OF WEBSITES       ]############-->\n<!--########################################################-->\n<div class=\"container-fluid\">\n\t<ul class=\"list-group\">\n\n\t\t<li class=\"list-group-item\" \n\t\t\t\t*ngFor =\"let website of websites\">\n\n\t\t\t\t<a  routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">\n\t\t\t\t\t{{website.name}}\n\t\t\t\t\t</a>\n\n\t\t\t\t<a  class=\"float-right\" \n\t\t\t\t\trouterLink=\"/user/{{uid}}/website/{{website._id}}\">\n\t\t\t\t\t<i class=\"fas fa-cog\"></i>\n\t\t\t\t\t</a>\n\t\t</li>\n\n\t</ul>\n</div> <!--  (END CONTAINER FLUID) -->\n\n<!--########################################################-->\n<!--#############[      FOOTER OF PAGE         ]############-->\n<!--########################################################-->\n<footer class=\"navbar fixed-bottom navbar-dark bg-primary\">\n\t<div class=\"sw-full-width\">\n\n\t\t\t<a  class=\"navbar-brand float-right\" \n\t\t\t\trouterLink=\"/user/{{uid}}\">\n\t\t\t\t<i class=\"fas fa-user\"></i>\n\t\t\t\t</a>\n\n\t</div>\n</footer>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t<!--########################################################-->\n\n\n\n\n\n\t<!--########################################################-->\n<!-- \n\t\n\t\t\t\t<div>\n\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-light btn-block\" >\n\t\t\t\t\t\t\t\t<div id=\"m-float-left\">\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/{{uid}}/website/{{wid}}/page\">Address Book App</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id=\"m-float-right\">\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/{{uid}}/website/{{wid}}\"><i class=\"fa fa-cog fa-spin fa-1x fa-fw\"></i></a>\n\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Loading...</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-light btn-block\" >\n\t\t\t\t\t\t\t\t<div id=\"m-float-left\">\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/{{uid}}/website/{{wid}}/page\">Blogger</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id=\"m-float-right\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/{{uid}}/website/{{wid}}\"><i class=\"fa fa-cog fa-spin fa-1x fa-fw\"></i></a>\n\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Loading...</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-light btn-block\" >\n\t\t\t\t\t\t\t\t<div id=\"m-float-left\">\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/{{uid}}/website/{{wid}}/page\">Blogger App</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id=\"m-float-right\">\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/{{uid}}/website/{{wid}}\"><i class=\"fa fa-cog fa-spin fa-1x fa-fw\"></i></a>\n\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Loading...</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</button>\n\n\t\t\t\t\t\t</li>\n\n\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-light btn-block\" >\n\t\t\t\t\t\t\t\t<div id=\"m-float-left\">\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/{{uid}}/website/{{wid}}/page\">Script Test App</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div id=\"m-float-right\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/{{uid}}/website/{{wid}}\"><i class=\"fa fa-cog fa-spin fa-1x fa-fw\"></i></a>\n\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Loading...</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</li>\n\n\t\t\t\t\t</ul>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t\t<!--########################################################-->\n\t\t\t\t<!--#############[      Bottom Button          ]############-->\n\t\t\t\t<!--########################################################-->\n\n\t\t\t\n\t\t\n\n\t\t\t<!-- working_____________________________________ -->\n\n\t\t\t<!-- <div class=\"sw-80-width\"> -->\n\t\t\t\t\t<!--_______________NAV_BAR_________________-->\n\t\t\t\t<!-- <nav class=\"navbar navbar-dark bg-danger fixed-bottom\"> -->\n\n\t\t\t\t\t<!-- <i class=\"fas fa-sync fa-spin\"></i> -->\n\t\t\t\t\n\n\n\n\n\t\t\n\t\t\t\t<!-- <button class=\"navbar navbar-dark bg-primary btn-block\"> -->\n\n\t\t\t\t\t\t<!-- <i class=\"fas fa-sync fa-spin\"></i> -->\n\t\t\t\t\t<!-- <div id=\"m-float-right\"> -->\n\n\t\t\t\t\t\t<!-- <i class=\"fas fa-plus \"></i> -->\n\t\t\t\t\t\t<!-- <a class=\"navbar-brand\"  href=\"profile.html\">Websites</a>\n\t\t\t\t\t\t<i class=\"fas fa-sync fa-spin\"></i> -->\n\t\t\t\t\t\t\n\t\n\n\t<!-- </div>   [angular] closed for compile error -->"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteServices, activatedRoute) {
        this.websiteServices = websiteServices;
        this.activatedRoute = activatedRoute;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.websites = _this.websiteServices.findWebsiteByUser(_this.uid);
        });
    };
    WebsiteListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-list',
            template: __webpack_require__("./src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__("./src/app/components/website/website-list/website-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteServices */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}()); /* [ END OF CLASS ] */



/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "\t\n<!--#######################################################-->\n<!--##########[         NAV SECTION         ]##############-->\n<!--#######################################################-->\n<nav class=\"row navbar navbar-dark fixed-top bg-primary \">\n\n<!--########################################################-->\n<!--#############[  NAV  [ Top-LEFT ] SIDE     ]############-->\n<!--########################################################-->\n\t<div class=\"container-fluid\">\n\n\t<div class=\"col-sm-4 d-none d-md-block\">\n\n\t\t\t\t<!-- <i class=\"fa-chevron-left \"></i> -->\n\n\t\t\t<a  class=\"sw-color-white\" \n\t\t\t\trouterLink=\"/user/{{uid}}/website\">\n\t\t\t\t<i class=\"fas fa-chevron-left\"></i>\n\t\t\t\t</a>\n\n\t\t\t<a  class=\"sw-color-white sw-left-padding\" \n\t\t\t\trouterLink=\"/user/{{uid}}/website\">\n\t\t\t\t<strong>Websites</strong>\n\t\t\t\t</a>\n\n\t\t\t<a  class=\"sw-color-white float-right\" \n\t\t\t\trouterLink=\"/user/{{uid}}/website/new\">\n\t\t\t\t<i class=\"fas fa-plus\"></i>\n\t\t\t\t</a>\n\n\t\t\t\t<!-- <i class=\"fas fa-check\"></i> -->\n\t\t\t\t<!-- fa-chevron-left -->\n\t\t\t\t<!-- fas fa-plus -->\n\n\t</div>\n<!--########################################################-->\n<!--#############[   NAV [ Top-RIGHT ] SIDE    ]############-->\n<!--########################################################-->\n\t<div class=\"col-md-8\">\n\n\t\t\t<a  \tclass=\"sw-color-white\" \n\t\t\t\t\trouterLink=\"/user/{{uid}}/website/new\">\n\t\t\t\t\t<strong>Website-NEW</strong>\n\t\t\t\t\t</a>\n\t\t\t\n\t\t\t<button class=\"btn sw-color-white float-right sw-button-to-a\" \n\t\t\t\t\ttype=\"submit\" \n\t\t\t\t\tform=\"websiteForm\" \n\t\t\t\t\t[disabled]=\"f.invalid\">\n\t\t\t\t\t<i class=\"fas fa-check\"></i>\n\t\t\t\t</button>\n\t</div>\n\n</div>  <!-- [END CONTAINER] -->\n</nav> <!-- [END NAV SECTION] -->\n\n<!--#################################################################-->\n<!--###############[           NEW ROW                 ]#############-->\n<!--#################################################################-->\n<div class=\"row\">  \n<!--########################################################-->\n<!--#############[     Middle   [ LEFT SIDE ]  ]############-->\n<!--########################################################-->\n\n\t<!-- _______________TOP OF UL GROUP________________ -->\n<div class=\"col-md-4 d-none d-md-block\">\n\t<div class=\"container-fluid\">\n\t\t<ul class=\"list-group\">\n\n\t\t\t<li class=\"list-group-item\" \n\t\t\t\t\t\t*ngFor =\"let website of websites\">\n\n\t\t\t\t<a  routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">\n\t\t\t\t\t{{website.name}}\n\t\t\t\t\t</a>\n\n\t\t\t\t<a  class=\"float-right\" \n\t\t\t\t\trouterLink=\"/user/{{uid}}/website/{{website._id}}\">\n\t\t\t\t\t<i class=\"fas fa-cog\"></i>\n\t\t\t\t\t</a>\n\n\t\t\t</li>\n\t\t</ul>\n</div>   <!-- [END CONTAINER] -->\n\n<!--########################################################-->\n<!--#############[    Middle   [ RIGHT SIDE ]  ]############-->\n<!--########################################################-->\n<div class=\"col-md-8\">\n\t<div class=\"container-fluid\">\n\t\t<form   id=\"websiteForm\" \n\t\t\t\t(ngSubmit)=\"create()\" \n\t\t\t\t#f=\"ngForm\">\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label><strong>Name</strong></label>\n\n\t\t\t\t\t<input  class=\"form-control\" \n\t\t\t\t\t\t\ttype=\"text\" \n\t\t\t\t\t\t\tname=\"name\" \n\t\t\t\t\t\t\tplaceholder=\"Write your website name here\" \n\t\t\t\t\t\t\trequired ngModel \n\t\t\t\t\t\t\t#name=\"ngModel\">\n\t\t\t</div>\n\n\t\t\t<div    class=\"alert alert-warning\" \n\t\t\t\t\t\t\t*ngIf=\"name.invalid && name.touched\">\n\t\t\t\t\t\t\tThis Field must be filled in!\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label><strong>Description</strong></label>\n\n\t\t\t\t\t<textarea   rows=\"8\" \n\t\t\t\t\t\t\t\tclass=\"form-control\" \n\t\t\t\t\t\t\t\tname=\"description\" \n\t\t\t\t\t\t\t\tplaceholder=\"Write about your website here.\" \n\t\t\t\t\t\t\t\tngModel #description=\"ngModel\">\n\t\t\t\t\t\t\t</textarea>\n\t\t\t</div>\n\n\t\t\t<a  \trouterLink=\"/user/{{uid}}/website\" \n\t\t\t\t\tclass=\"btn btn-danger\">\n\t\t\t\t\tCancel\n\t\t\t\t\t</a>\n\n\t\t\t<button [disabled]=\"f.invalid\" \n\t\t\t\t\ttype=\"submit\" \n\t\t\t\t\tclass=\"btn btn-success float-right\">\n\t\t\t\t\tSubmit\n\t\t\t\t\t</button>\n\n\t\t</form>   <!-- [END OF FORM] -->\n\t</div><!-- [END CONTAINER] -->\n</div><!-- [END ROW]_________________________________________ -->\n\n</div>  <!-- [END OF ROW] -->\n<!--###################################################################-->\n<!--###############[           FOOTER  SECTION           ]#############-->\n<!--###################################################################-->\n<footer class=\"navbar fixed-bottom navbar-dark bg-primary\">\n\t<div class=\"sw-full-width\">\n\n\t\t<a  \tclass=\"navbar-brand float-right\" \n\t\t\t\trouterLink=\"/user/{{uid}}\">\n\t\t\t\t<i class=\"fas fa-user\"></i>\n\t\t\t\t</a>\n\n\t</div>\n</footer>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.websites = _this.websiteService.findWebsiteByUser(_this.uid);
        });
    };
    WebsiteNewComponent.prototype.create = function () {
        this.name = this.websiteForm.value.name;
        this.description = this.websiteForm.value.description;
        var newWebsite = {
            _id: "",
            name: this.name,
            developerId: "",
            description: this.description
        };
        this.websiteService.createWebsite(this.uid, newWebsite);
        this.router.navigate(['user', this.uid, 'website']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], WebsiteNewComponent.prototype, "websiteForm", void 0);
    WebsiteNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-new',
            template: __webpack_require__("./src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__("./src/app/components/website/website-new/website-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteServices */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--\n##############################################################\n############[               NAV BAR               ]########### \n############################################################## -->\n<nav class=\"navbar navbar-dark fixed-top sw-bg-gray\">\n\t\t<a   \tclass=\"sw-color-black\" \n\t\t\t\trouterLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\">\n\t\t\t\t<i class=\"fas fa-chevron-left\"></i>\n\t\t\t\t</a>\n\n\t<div class=\"sw-90-width\">\n\n\t\t\t<a \tclass=\"navbar-brand float-left\" \n\t\t\t\trouterLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\">\n\t\t\t\t<i class=\"fas fa-check\"></i>\n\t\t\t\t<strong>Choose a widget</strong>\n\t\t\t\t</a>\n\t</div>\n</nav>\n<!--########################################################-->\n<!--#############[          UL List            ]############-->\n<!--########################################################-->\n<div class=\"container-fluid\">\n\n\t<ul class=\"list-group list-group-flush\">\n\n\t\t<li class=\"list-group-item\">\n\t\t\t\t<button class=\"btn sw-button-to-a\" \n\t\t\t\t\t\t(click)=\"create('HEADING')\">\n\t\t\t\t\t\tHeader\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\t\t<!--#############[________ Page Devider_________]############-->\n\t\t\t\t<div class=\"progress progress-striped active\">\n  \t\t\t\t\t<div \tclass=\"bar\" \n  \t\t\t\t\t\t\tstyle=\"width: 40%;\">\n  \t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\n\t\t<li class=\"list-group-item\">\n\t\t\t\t<button class=\"btn sw-button-to-a\" \n\t\t\t\t\t\t(click)=\"create('IMAGE')\">\n\t\t\t\t\t\tImage\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\t\t<!--#############[________ Page Devider_________]############-->\n\t\t<div class=\"progress progress-striped active\">\n  \t\t\t\t\t<div \tclass=\"bar\" \n  \t\t\t\t\t\t\tstyle=\"width: 40%;\">\n  \t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\n\t\t<li class=\"list-group-item\">\n\t\t\t\t<button class=\"btn sw-button-to-a\" \n\t\t\t\t\t\t(click)=\"create('YOUTUBE')\">\n\t\t\t\t\t\tYouTube\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</li>\n\n\t\t<!--#############[________ Page Devider_________]############-->\n\t\t<div class=\"progress progress-striped active\">\n  \t\t\t\t\t<div \tclass=\"bar\" \n  \t\t\t\t\t\t\tstyle=\"width: 40%;\">\n  \t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t<!--#############[_CURRENTLY NOT BEING USED_]############-->\n\t\t<li class=\"list-group-item\">\n\t\t\t\t<a \trouterLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/:wgid\">\n\t\t\t\t\tLabel</a>\n\t\t</li>\n\n\t\t<li class=\"list-group-item\">\n\t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/:wgid\">\n\t\t\t\t\tHTML</a>\n\t\t</li>\n\n\t\t<li class=\"list-group-item\">\n\t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/:wgid\">\n\t\t\t\t\tText Input</a>\n\t\t\t</li>\n\n\t\t<li class=\"list-group-item\">\n\t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/:wgid\">\n\t\t\t\t\tLink</a>\n\t\t\t</li>\n\n\t\t<li class=\"list-group-item\">\n\t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/:wgid\">\n\t\t\t\t\tButton</a>\n\t\t\t</li>\n\n\t\t<li class=\"list-group-item\">\n\t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/:wgid\">\n\t\t\t\t\tData Table</a>\n\t\t\t</li>\n\n\t\t<li class=\"list-group-item\">\n\t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/:wgid\">Repeater</a>\n\t\t</li>\n\n\t</ul>\n<!--\n##############################################################\n############[                 FOOTER              ]########### \n############################################################## -->\n\t<footer class=\"navbar navbar-light fixed-bottom  sw-bg-grey\">\n\t\t<div class=\"sw-full-width\">\n\t\t\t<a class=\"navbar-brand float-right sw-font-white\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n\t\t</div>\n\t</footer>\n\n\n</div>  <!-- (END OF CONTAINER) -->\n\n\n\t\t\t\n"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/*##############################################################
  ############[          Imported Modules           ]###########
  ############################################################## */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(activatedRoute, widgetService, router) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
    };
    WidgetChooserComponent.prototype.create = function (type) {
        var newWidget = {
            _id: '',
            widgetType: type,
            pageId: this.pid
        };
        this.widgetService.createWidget(this.pid, newWidget);
        var wgid = this.widgetService.widgets[this.widgetService.widgets.length - 1]._id;
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', wgid]);
    };
    WidgetChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-chooser',
            template: __webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        })
        /*##############################################################
          ############[                CLASS                ]###########
          ############################################################## */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* Widget_Services */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!--########################################################-->\n<!--#############[         Nav bar            ]############-->\n<!--########################################################-->\n<nav class=\"navbar navbar-dark fixed-top sw-gray\">\n\n\t\t<a  class=\"sw-font-white\" \n\t\t\trouterLink=\"/{{uid}}/website/{{wid}}/page/{{pid}}/widget\" >\n\t\t\t<i class=\"fas fa-chevron-left\"></i>\n\t\t\t</a>\n\t\t\t\t\t\n\t<div class=\"sw-80-width\">\n\n\t\t<a  class=\"sw-font-white sw-no-underline float-left\" \n\t\t\trouterLink=\"/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{wgid}}\">\n\t\t\tWidget Edit\n\t\t\t</a>\n\n\t</div>\n\n\t\t<a  class=\"sw-font-white float-right\" \n\t\t\trouterLink=\"/{{uid}}/website/{{wid}}/page/{{pid}}/widget\" >\n\t\t\t<i class=\"fas fa-check\"></i>\n\t\t</a>\n</nav>\n\n<!--########################################################-->\n<!--#############[     Switch    Rendering     ]############-->\n<!--########################################################-->\n<div [ngSwitch]=\"widget.widgetType\">\n\n\t<!--#############[   HEADING  ]############-->\n\t<div *ngSwitchCase=\"'HEADING'\">\n\t\t\t\t<app-widget-header></app-widget-header>\n\t\n\t</div>\n\n\t<!--#############[   IMAGE  ]############-->\n\t<div *ngSwitchCase=\"'IMAGE'\">\n\n\t\t<app-widget-image></app-widget-image>\n\n\t</div>\n\n\t<!--#############[   YOUTUBE  ]############-->\n\t<div *ngSwitchCase=\"'YOUTUBE'\">\n\n\t\t<app-widget-youtube></app-widget-youtube>\n\n\t</div>\n</div>\n\n<!--########################################################-->\n<!--#############[       Old HTML BELOW        ]############-->\n<!--########################################################-->\n\n<footer class=\"navbar navbar-dark sw-gray fixed-bottom\">\n\t<div class=\"sw-me\">\n\n\t\t\t<a  routerLink=\"/user/{{uid}}\" \n\t\t\t\tclass=\"sw-font-white float-right\">\n\t\t\t\t<i class=\"fas fa-user \"></i>\n\t\t\t\t</a>\n\t</div>\n\n</footer>\n\t\t\t\n\n<!-- </div>  container-fluid -->\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*	########################################################
    ##########[        Imported   Modules         ]#########
    ########################################################  */



var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wgid = params['wgid'];
            _this.wgid = params['uid'];
            _this.wgid = params['pid'];
            _this.wgid = params['wid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
        });
    };
    WidgetEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-edit',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-edit.component.css")]
        })
        /*
        ########################################################
        ##########[               Class               ]#########
        ######################################################## */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* Widget_Services */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}()); /*  ##########################[END OF CLASS]#######################  */



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<!--########################################################-->\n<!--#############[         Nave bar            ]############-->\n<!--########################################################-->\n<nav class=\"navbar navbar-dark fixed-top navbar-light sw-bg-grey\">\n\n\t\t<a  class=\"sw-font-white\" \n\t\t\trouterLink=\"/{{uid}}/website/{{wid}}/page/{{pid}}/widget\">\n\t\t\t<i class=\"fas fa-chevron-left\"></i>\n\t\t\t</a>\n\t\t\t\t\t\n\t\t<div class=\"sw-90-width\"> <!--  was 80 now 90 -->\n\t\t\t\t<a  class=\"navbar-brand sw-font-white sw-no-underline float-left\" \n\t\t\t\t\trouterLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\">\n\t\t\t\t\t<strong>Edit Widget</strong>\n\t\t\t\t\t</a>\n\t\t</div>\n\n\t\t<button     class=\"btn sw-button-to-a  sw-color-black sw-font-white float-right\"\n\t\t\t\t\ttype=\"submit\"\n\t\t\t\t\tform=\"widgetForm\">\n\t\t\t\t\t<i class=\"fas fa-check\"></i>\n\t\t\t\t\t</button>\n</nav>\n\n\n<div class=\"container-fluid\">\n<!--########################################################-->\n<!--#############[       Widget Form          ]############-->\n<!--########################################################-->\n<form \tid=\"widgetForm\" \n\t\t(ngSubmit)=\"update()\"\n\t\t#f=\"ngForm\">\n\t\t\t\t\n\t<div class=\"form-group\">\n\n\t\t<label  for=\"name\">NAME</label>\n\t\t<input  class=\"form-control\"\n\t\t\t\tname=\"name\"\n\t\t\t\ttype=\"text\" \n\t\t\t\tngModel=\"{{widget.name}}\"\n\t\t\t\t#name=\"ngModel\"\n\t\t\t\tplaceholder=\"Please enter a widget name here\">\n\t</div>\n\n\t<div class=\"form-group\">\n\n\t\t<label for=\"text\">TEXT</label>\n\t\t<input  class=\"form-control\" \n\t\t\t\ttype=\"text\" \n\t\t\t\tname=\"text\"  \n\t\t\t\tplaceholder=\"Top US News Headlines\">\n\t</div>\n\n\t<div class=\"form-group\">\n\n\t\t<label for=\"size\">SIZE</label>\n\t\t<input  class=\"form-control\"\n\t\t\t\ttype=\"number\" \n\t\t\t\tname=\"size\"   \n\t\t\t\tplaceholder=\"example something like 3\">\n\t</div>\n\n\n\t<!--#############[ DELETE Button  ]############-->\n\t<div>\n\t\t<a  class=\"btn btn-danger btn-block\" \n\t\t\trouterLink=\"/{{uid}}/website/{{wid}}/page/{{pid}}/widget\">\n\t\t\tDELETE\n\t\t\t</a>\n\t</div>\n\n</form>\n</div>  <!-- container-fluid -->\t\t\n<!--########################################################-->\n<!--#############[        footer Icon          ]############-->\n<!--########################################################-->\n<footer class=\"navbar navbar-dark sw-gray fixed-bottom\">\n\t<div class=\"sw-me\">\n\t\t\t<a  class=\"sw-font-white float-right\"\n\t\t\t\trouterLink=\"/user/uid\" >\n\t\t\t\t<i class=\"fas fa-user \"></i>\n\t\t\t\t</a>\n\t</div>\n</footer>\n\t\t\t\n\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*	########################################################
    ##########[        Imported   Modules         ]#########
    ########################################################  */




var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, activitedRoute, router) {
        this.widgetService = widgetService;
        this.activitedRoute = activitedRoute;
        this.router = router;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activitedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
        });
    };
    WidgetHeaderComponent.prototype.update = function () {
        this.name = this.widgetForm.value.name;
        this.text = this.widgetForm.value.text;
        this.size = this.widgetForm.value.size;
        var updatedWidget = {
            _id: this.wgid,
            name: this.name,
            widgetType: this.widget.widgetType,
            pageId: this.pid,
            size: this.size,
            text: this.text
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    WidgetHeaderComponent.prototype.remove = function () {
        this.widgetService.deleteWidget(this.wgid);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], WidgetHeaderComponent.prototype, "widgetForm", void 0);
    WidgetHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-header',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        })
        /*	########################################################
            ##########[               Class               ]#########
            ########################################################  */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* Widget_Services */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}()); /*  ###################[    END OF CLASS  ]#################  */



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<!--########################################################-->\n<!--#############[          NAV Bar            ]############-->\n<!--########################################################-->\n<nav class=\"navbar navbar-dark fixed-top sw-gray\">\n\n\t<a  class=\"sw-font-white\" \n\t\trouterLink=\"/{{uid}}/website/{{wid}}/page/{{pid}}/widget\">\n\t\t<i class=\"fas fa-chevron-left\"></i>\n\t\t</a>\n\t\t\t\t\t\n\t<div class=\"sw-80-width\">\n\n\t\t<a \tclass=\"navbar-brand sw-font-white sw-no-underline float-left\"\n\t\t\trouterLink=\"user/{{uid}}/website/:wid/page/{{pid}}/widget/new\">\n\t\t\tWidget Edit\n\t\t\t</a>\n\t</div>\n\n\t    <button class=\"btn sw-button-to-a sw-color-black float-right\"\n\t    \t\t[disabled]=\"f.invalid\" \n    \t\t\ttype=\"submit\" \n    \t\t\tform=\"widgetForm\">\n    \t\t\t<i class=\"fas fa-check\"></i>\n    \t\t\t</button>\n\t\t\t\t\n</nav>\n<div class=\"container-fluid\">\n<!--########################################################-->\n<!--#############[         Form Area           ]############-->\n<!--########################################################-->\n<form \t\tid=\"widgetForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\n\t\t\t\n\t<div class=\"form-group\">\n\t        <label><b>Name</b></label>\n\t        <input    class=\"form-control\" \n\t                  type=\"text\" \n\t                  name=\"name\" \n\t                  ngModel=\"{{widget.name}}\" \n\t                  #name=\"ngModel\" \n\t                  placeholder=\"Enter your widget name...\">\n\t      </div>\n\n\t<div class=\"form-group\">\n        <label><b>URL</b></label>\n        <input class=\"form-control\" \n                required ngModel=\"{{widget.url}}\" \n                #url=\"ngModel\" \n                type=\"text\" \n                name=\"url\" \n                placeholder=\"https://www.google.com\">\n      </div>\n\n\t\t<!-- ( ALERT MESSAGE TO THE USER ) -->\n              <div \t\tclass=\"alert alert-danger\" \n              \t\t\t*ngIf=\"url.invalid && url.touched\">\n              \t\t\tYou Must Enter a Valid URL\n              \t\t</div>\n\n     <div class=\"form-group\">\n        <label><b>Width</b></label>\n        <input  class=\"form-control\" \n                required ngModel=\"{{widget.width}}\" \n                #width=\"ngModel\"  \n                type=\"text\" \n                name=\"width\" \n                placeholder=\"Try %50 for a start\">\n     </div>\n\t<!-- ( ALERT MESSAGE TO THE USER ) -->\n      \t\t     <div \tclass=\"alert alert-danger\" \n      \t\t     \t\t*ngIf=\"width.invalid && width.touched\">\n      \t\t     \t\tEnter a width for your Image Try %50\n      \t\t     </div>\n\n     <div class=\"form-group\">\n        <label><strong>Upload</strong></label>\n        <input  class=\"form-control\" \n                type=\"file\" \n                name=\"upload\" \n                placeholder=\"Try %50 for a start\">\n      </div>\n\n      <a   class=\"btn btn-secondary btn-block\" \n            href=\"#\">\n            Upload Image (NOT WORKING)\n            </a>\n\n      <button   type=\"submit\" \n                [disabled]=\"f.invalid\" \n                class=\"btn btn-primary btn-block\">\n                Submit\n                </button>\n\n      <button   class=\"btn btn-danger btn-block\" \n                type=\"button\" \n                (click)=\"remove()\">\n                Delete\n                </button>\n \t\t\t\t\n</form>\n</div>  <!-- container-fluid -->\n<!--########################################################-->\n<!--#############[        footer Icon          ]############-->\n<!--########################################################-->\t\n<footer class=\"navbar navbar-dark sw-gray fixed-bottom\">\n\t<div class=\"sw-me\">\n\n\t\t<a \tclass=\"sw-font-white float-right\" \n\t\t\trouterLink=\"/user/{{uid}}\" >\n\t\t\t<i class=\"fas fa-user \"></i>\n\t\t\t</a>\n\t</div>\n</footer>\n\t\t\t\n\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
        });
    };
    WidgetImageComponent.prototype.remove = function () {
        this.widgetService.deleteWidget(this.wgid);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    WidgetImageComponent.prototype.update = function () {
        this.name = this.widgetForm.value.name;
        this.text = this.widgetForm.value.text;
        this.url = this.widgetForm.value.url;
        this.width = this.widgetForm.value.width;
        var updatedWidget = {
            _id: this.wgid,
            name: this.name,
            text: this.text,
            url: this.url,
            width: this.width,
            pageId: this.pid,
            widgetType: this.widget.widgetType
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], WidgetImageComponent.prototype, "widgetForm", void 0);
    WidgetImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-image',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* Widget_Services */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--########################################################-->\n<!--#############[         Nav bar            ]############-->\n<!--########################################################-->\n<nav class=\"navbar navbar-dark fixed-top sw-gray\">\n\n\t<a \tclass=\"sw-color-black\"\n\t\trouterLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\">\n\t\t<i class=\"fas fa-chevron-left\"></i>\n\t\t</a>\n\t\t\t\t\t\n\t<div class=\"sw-80-width\">\n\n\t\t<a \tclass=\"navbar-brand float-left\" \n\t\t\trouterLink=\"user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\">\n\t\t\tWidget Edit\n\t\t\t</a>\n\t</div>\n\n\t<button \t[disabled]=\"f.invalid\" \n\t\t\t\ttype=\"submit\" \n\t\t\t\tform=\"widgetForm\" \n\t\t\t\tclass=\"btn sw-button-to-a sw-color-white float-right\" >\n\t\t\t\t<i class=\"fas fa-check\"></i>\n\t\t\t</button>\n\n</nav>\n\n<div class=\"container-fluid\">\n<!--########################################################-->\n<!--#############[         Main Form           ]############-->\n<!--########################################################-->\t\n<form \tid=\"widgetForm\" \n\t\t(ngSubmit)=\"update()\" \n\t\t#f=\"ngForm\">\n\n\t<div class=\"form-group\">\n\t\t<label>Name</label>\n\t\t<input \tclass=\"form-control\" \n\t\t\t\tngModel=\"{{widget.name}}\" \n\t\t\t\t#name=\"ngModel\"\n\t\t\t\ttype=\"text\" \n\t\t\t\tname=\"name\" \n\t\t\t\tplaceholder=\"Give a Name to your Widget\">\n\t</div>\n\n\t<div class=\"form-group\">\n\t\t<label>Text</label>\n\t\t<input \tclass=\"form-control\" \n\t\t\t\tngModel=\"{{widget.text}}\"\n\t\t\t\ttype=\"text\" \n\t\t\t\tname=\"text\"  \n\t\t\t\t#text=\"ngModel\" \n\t\t\t\tplaceholder=\"Describe you Widget here.\">\n\t</div>\n\n\t<div class=\"form-group\">\n\t\t<label>URL</label>\n\t\t<input \tclass=\"form-control\" \n\t\t\t\trequired ngModel=\"{{widget.url}}\" \n\t\t\t\t#url=\"ngModel\" \n\t\t\t\ttype=\"text\" \n\t\t\t\tname=\"url\" \n\t\t\t\tplaceholder=\"http://www.drudgereport.com\">\n\t</div>\n\t\n\t<!-- ( ALERT MESSAGE TO USER ) -->\n\t\t\t<div \tclass=\"alert alert-danger\" \n\t\t\t\t\t*ngIf=\"url.invalid && url.touched\">\n\t\t\t\t\tyou MUST enter a URL here.\n\t\t\t\t\t</div>\n\n\t<div \tclass=\"form-group\">\n\t\t\t<label>Width</label>\n\t\t\t<input \tclass=\"form-control\" \n\t\t\t\t\trequired \n\t\t\t\t\tngModel=\"{{widget.width}}\" \n\t\t\t\t\t#width=\"ngModel\"  \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"width\" \n\t\t\t\t\tplaceholder=\"Try to Use %50 to start\">\n\t\t\t\t</div>\n\n\t<!-- ( ALERT MESSAGE TO USER ) -->\n\t\t\t<div \tclass=\"alert alert-danger\" \n\t\t\t\t\t*ngIf=\"width.invalid && width.touched\">\n\t\t\t\t\tYou Must enter a width for your video\n\t\t\t\t</div>\n\n\t<button \tclass=\"btn btn-primary btn-block\"\t\n\t\t\t\ttype=\"submit\" \n\t\t\t\t[disabled]=\"f.invalid\" >\n\t\t\t\tSubmit\n\t\t\t</button>\n\n\t<button \tclass=\"btn btn-danger btn-block\" \n\t\t\t\ttype=\"button\" \n\t\t\t\t(click)=\"remove()\">\n\t\t\t\tDelete\n\t\t\t</button>\n\n</form>\t\n</div>  <!-- container-fluid -->\n<!--########################################################-->\n<!--#############[        footer               ]############-->\n<!--########################################################-->\n<footer class=\"navbar navbar-dark sw-gray fixed-bottom\">\n\t\t<div class=\"sw-me\">\n\t\t\t\t<a \t\trouterLink=\"/user/{{uid}}:\" \n\t\t\t\t\t\tclass=\"sw-font-white float-right\">\n\t\t\t\t\t\t<i class=\"fas fa-user \"></i>\n\t\t\t\t\t</a>\n\t\t</div>\n</footer>\n\t\t\t\n\n\t\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*##############################################################
  ############[          Imported Modules           ]###########
  ############################################################## */




var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
        });
    };
    WidgetYoutubeComponent.prototype.update = function () {
        this.name = this.widgetForm.value.name;
        this.text = this.widgetForm.value.text;
        this.url = this.widgetForm.value.url;
        this.width = this.widgetForm.value.width;
        var updatedWidget = {
            _id: this.wgid,
            name: this.name,
            text: this.text,
            url: this.url,
            width: this.width,
            pageId: this.pid,
            widgetType: this.widget.widgetType
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    WidgetYoutubeComponent.prototype.remove = function () {
        this.widgetService.deleteWidget(this.wgid);
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], WidgetYoutubeComponent.prototype, "widgetForm", void 0);
    WidgetYoutubeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-youtube',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        })
        /*##############################################################
          ############[                CLASS                ]###########
          ############################################################## */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* Widget_Services */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--########################################################-->\n<!--#############[     NAV Bar  / Top of Page  ]############-->\n<!--########################################################-->\n<nav class=\"navbar navbar-dark fixed-top  sw_w_c sw-bg-grey\">  <!-- sw-gray -->\n\n\t\t\t\t<a  class=\"sw-font-white\" \n\t\t\t\t\trouterLink=\"/user/{{uid}}/website/{{wid}}/page\">\n\t\t\t\t\t<i class=\"fas fa-chevron-left\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t\t\n\t\t\t\t<div class=\"sw-80-width\">\n\n\t\t\t\t\t<a  class=\"navbar-brand sw-font-white sw-no-underline float-left\" \n\t\t\t\t\t\trouterLink=\"/{{uid}}/website/{{wid}}/page/{{pid}}/widget\">\n\t\t\t\t\t\tWidget List\n\t\t\t\t\t\t</a>\n\t\t\t\t</div>\n\n\t\t\t\t<a  class=\"sw-font-white float-right\"\n\t\t\t\t\trouterLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\" >\n\t\t\t\t\t<i class=\"fas fa-plus\"></i>\n\t\t\t\t\t</a>\n</nav>\n<!--########################################################-->\n<!--#############[       Widget  Section       ]############-->\n<!--########################################################-->\n<div class=\"container-fluid\">\n\n \t<!-- [ Loop to cycle through Widgets ] -->\n\t<div *ngFor=\"let widget of widgets\">\n\n\t\t<div class=\"sw-absolute-right sw-front\">\n\n\t\t\t\t<a  routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\">\n\t\t\t\t\t<i class=\"fas fa-cog\"></i>\n\t\t\t\t\t</a>\n\n\t\t\t\t<a  href=\"#\">\n\t\t\t\t\t<i class=\"fas fa-bars\"></i>\n\t\t\t\t\t</a>\n\t\t</div>\n\n<!--########################################################-->\n<!--#############[      Switch Statement       ]############-->\n<!--########################################################-->\n\n<!-- [ SWITCH statement checking each CASE ] -->\n<div [ngSwitch]=\"widget.widgetType\">\n\t\t\t\t\n\t<!-- [________________HEADING Case_________________ ] -->\n\t<div *ngSwitchCase=\"'HEADING'\"> \n\n\t\t<!-- [[ CHECKING THE SIZE ]] -->\n\t\t<div [ngSwitch]=\"widget.size\">\n\t\t\t\t<div *ngSwitchCase=\"1\"><h1>{{widget.text}}</h1></div>\n\t\t\t\t<div *ngSwitchCase=\"2\"><h2>{{widget.text}}</h2></div>\n\t\t\t\t<div *ngSwitchCase=\"3\"><h3>{{widget.text}}</h3></div>\n\t\t\t\t<div *ngSwitchCase=\"4\"><h4>{{widget.text}}</h4></div>\n\t\t\t\t<div *ngSwitchCase=\"5\"><h5>{{widget.text}}</h5></div>\n\t\t\t\t<div *ngSwitchCase=\"6\"><h6>{{widget.text}}</h6></div>\n\t\t\t</div>\n\t</div>  <!-- [END OF HEADING] -->\n\t\t\t\t\t\t\n\t<!-- [________________IMAGE Case_________________ ] -->\n\t<div *ngSwitchCase=\"'IMAGE'\">\n\t\t\t\t<img \t[src]=\"widget.url\"\n\t\t\t\t\t\t[style.width]=\"widget.width\">\n\t</div>\n\t\t\t\t\t\t\n\t\t<!-- [________________YOUTUBE Case_________________ ] -->\n\t<div *ngSwitchCase=\"'YOUTUBE'\">\n\n\t\t\t<div class=\"embed-responsive embed-responsive-16by9\">\n\n\t\t\t\t<iframe [src]=\"this.getYoutubeUrl(widget.url)\"\n\t\t\t\t\t\t[style.width]=\"widget.width\"\n\t\t\t\t\t\tframeborder=\"0\"\n\t\t\t\t\t\tallowfullscreen>\n\t\t\t\t\t\t</iframe>\n\t\t\t</div>\n\t</div>\n\n</div>\n</div>\n\n</div>  \n\n<!--########################################################-->\n<!--#############[        footer Icon          ]############-->\n<!--########################################################-->\n\n<footer class=\"navbar fixed-bottom navbar-light  sw-bg-green sw-font-white\">\n\t<div class=\"sw-full-width\">\n\n\t\t\t<a \tclass=\"btn btn-primary\"\n\t\t\t\thref=\"#\" >\n\t\t\t\tpublish\n\t\t\t\t</a>\n\n\t\t\t<a  class=\"btn btn-warning\"\n\t\t\t\thref=\"#\" >\n\t\t\t\tPreview\n\t\t\t\t</a>\n\n\t\t\t<a  class=\"navbar-brand float-right \"  \n\t\t\t\trouterLink=\"/user/{{uid}}\">\n\t\t\t\t<i class=\"fas fa-user\"></i>\n\t\t\t\t</a>\n\t</div>\n\n<!-- float-right -->\n<!-- sw-bg-grey -->\n</footer>\n\n\n\n\n\t\n"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/*	########################################################
    ##########[        Imported Modules           ]#########
    ########################################################         */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, activatedRoute, sanitizer) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widgets = _this.widgetService.findWidgetByPageId(_this.pid);
        });
    };
    WidgetListComponent.prototype.getYoutubeUrl = function (url) {
        var embedUrl = "https://www.youtube.com/embed/";
        var parsedUrl = url.split('/');
        embedUrl += parsedUrl[parsedUrl.length - 1];
        return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    };
    WidgetListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-list',
            template: __webpack_require__("./src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-list/widget-list.component.css")]
        })
        /*	########################################################
            ##########[               Class               ]#########
            ########################################################         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* Widget_Services */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], WidgetListComponent);
    return WidgetListComponent;
}()); /*  ###################[  END OF CLASS  ]###############  */



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// injecting Services into modules
var PageServices = /** @class */ (function () {
    function PageServices() {
        this.pages = [
            { _id: "321", name: "Post 1", websiteId: "456", description: "lorem" },
            { _id: "432", name: "Post 2", websiteId: "456", description: "lorem" },
            { _id: "543", name: "Post 3", websiteId: "456", description: "lorem" }
        ];
        // 							/* =======================================
        // 							     CHANGE THESE NAMES AND PASSWORDS 
        // 							   =======================================*/
    }
    PageServices.prototype.createPage = function (websiteId, page) {
        page._id = Math.floor(Math.random() + 10000).toString();
        page.websiteId = websiteId;
        this.pages.push(page);
        return page;
    };
    PageServices.prototype.findPageByWebsiteId = function (websiteId) {
        var result = [];
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i].websiteId === websiteId) {
                result.push(this.pages[i]);
            }
        }
        return result;
    };
    PageServices.prototype.findPageById = function (pageId) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i]._id === pageId) {
                return this.pages[i];
            }
        }
    };
    PageServices.prototype.updatePage = function (pageId, page) {
        var oldPage = this.findPageById(pageId);
        var index = this.pages.indexOf(oldPage);
        this.pages[index].name = page.name;
        this.pages[index].description = page.description;
    };
    PageServices.prototype.deletePage = function (pageId) {
        var oldPage = this.findPageById(pageId);
        var index = this.pages.indexOf(oldPage);
        this.pages.splice(index, 1);
    };
    PageServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PageServices);
    return PageServices;
}()); // END PageService Function

// Export the routes as module providers
/*COMPILE                     [ERROR]
                        /================/*/
// export const Services: ModuleWithProviders = PageServicesModule.forRoot(PageServices);


/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserServices = /** @class */ (function () {
    function UserServices() {
        this.users = [
            { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com" },
            { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com" },
            { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@ulem.com" },
            { _id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.com" }
        ];
    }
    UserServices.prototype.createUser = function (user) {
        user._id = Math.floor(Math.random() + 10000).toString();
        this.users.push(user);
        return user;
    };
    UserServices.prototype.findUserById = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users[x];
            }
        }
    };
    UserServices.prototype.findUserByUserName = function (username) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username) {
                return this.users[x];
            }
        }
    };
    UserServices.prototype.findUserByCredentials = function (username, password) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x].username === username && this.users[x].password === password) {
                return this.users[x];
            }
        }
    };
    UserServices.prototype.updateUser = function (userId, user) {
        var oldUser = this.findUserById(userId);
        var index = this.users.indexOf(oldUser);
        this.users[index].username = user.username;
        this.users[index].password = user.password;
        this.users[index].firstName = user.firstName;
        this.users[index].lastName = user.lastName;
        this.users[index].email = user.email;
    };
    UserServices.prototype.deleteUser = function (userId) {
        var oldUser = this.findUserById(userId);
        var index = this.users.indexOf(oldUser);
        this.users.splice(index, 1);
    };
    UserServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserServices);
    return UserServices;
}()); // END USER SERVICES FUNCTION

// Export the routes as module providers
// export const Services: ModuleWithProviders = ServicesModule.forRoot(UserServices);


/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WebsiteServices = /** @class */ (function () {
    function WebsiteServices() {
        this.websites = [
            { _id: "123", name: "Facebook", developerId: "456", description: "lorem" },
            { _id: "234", name: "Tweeter", developerId: "456", description: "lorem" },
            { _id: "456", name: "Gizmodo", developerId: "456", description: "lorem" },
            { _id: "890", name: "Go", developerId: "123", description: "lorem" },
            { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "lorem" },
            { _id: "678", name: "Checkers", developerId: "123", description: "lorem" },
            { _id: "789", name: "Chess", developerId: "234", description: "lorem" },
        ];
    }
    WebsiteServices.prototype.createWebsite = function (userId, website) {
        website._id = Math.floor(Math.random() + 10000).toString();
        website.developerId = userId;
        this.websites.push(website);
        return website;
    };
    WebsiteServices.prototype.findWebsiteByUser = function (userId) {
        var result = [];
        for (var i = 0; i < this.websites.length; i++) {
            if (this.websites[i].developerId === userId) {
                result.push(this.websites[i]);
            }
        }
        return result;
    };
    WebsiteServices.prototype.findWebsiteById = function (websiteId) {
        for (var i = 0; i < this.websites.length; i++) {
            if (this.websites[i]._id === websiteId) {
                return this.websites[i];
            }
        }
    };
    WebsiteServices.prototype.updateWebsite = function (websiteId, website) {
        var oldWeb = this.findWebsiteById(websiteId);
        var index = this.websites.indexOf(oldWeb);
        this.websites[index].name = website.name;
        this.websites[index].description = website.description;
    };
    WebsiteServices.prototype.deleteWebsite = function (websiteId) {
        var web = this.findWebsiteById(websiteId);
        var index = this.websites.indexOf(web);
        this.websites.splice(index, 1);
    };
    WebsiteServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WebsiteServices);
    return WebsiteServices;
}());

; // END WEBSITE-SERVICES FUNCTION


/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget_Services; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// injecting Services into modules
var Widget_Services = /** @class */ (function () {
    function Widget_Services() {
        this.widgets = [
            { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO" },
            { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum" },
            { _id: "345", widgetType: "IMAGE", pageId: "321", width: "80%", url: "http://lorempixel.com/400/200/" },
            { _id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>" },
            { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum" },
            { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "80%", url: "https://youtu.be/AM2Ivdi9c4E" },
            { _id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>" }
        ];
    }
    Widget_Services.prototype.createWidget = function (pageId, widget) {
        widget._id = Math.floor(Math.random() + 10000).toString();
        widget.pageId = pageId;
        this.widgets.push(widget);
        return widget;
    };
    Widget_Services.prototype.findWidgetByPageId = function (pageId) {
        var result = [];
        for (var i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i].pageId === pageId) {
                result.push(this.widgets[i]);
            }
        }
        return result;
    };
    Widget_Services.prototype.findWidgetById = function (widgetId) {
        for (var i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i]._id === widgetId) {
                return this.widgets[i];
            }
        }
    };
    Widget_Services.prototype.updateWidget = function (widgetId, widget) {
        var oldWidget = this.findWidgetById(widgetId);
        var index = this.widgets.indexOf(oldWidget);
        /* [_______Compile issue here___________] */
        this.widgets[index].size = widget.size;
        this.widgets[index].text = widget.text;
        this.widgets[index].width = widget.width;
        this.widgets[index].url = widget.url;
    };
    Widget_Services.prototype.deleteWidget = function (widgetId) {
        var oldWidget = this.findWidgetById(widgetId);
        var index = this.widgets.indexOf(oldWidget);
        this.widgets.splice(index, 1);
    };
    Widget_Services = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
        /*		########################################################
                #############[    Widget_Services   Class  ]############
                ########################################################*/
        ,
        __metadata("design:paramtypes", [])
    ], Widget_Services);
    return Widget_Services;
}()); // END Widget_Services Function



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map