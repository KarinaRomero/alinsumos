webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<al-menu></al-menu>\n<!-- <al-main-content></al-main-content> -->\n<router-outlet></router-outlet>\n<al-footer></al-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(translate) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('es-MX');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('es-MX');
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'al-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routing_routing_module__ = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_truncate_text_pipe__ = __webpack_require__("../../../../../src/app/pipes/truncate-text.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_content_services_products_information_service__ = __webpack_require__("../../../../../src/app/main-content/services/products-information.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_content_components_services_services_component__ = __webpack_require__("../../../../../src/app/main-content/components/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_content_services_services_information_service__ = __webpack_require__("../../../../../src/app/main-content/services/services-information.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__main_content_main_content_component__ = __webpack_require__("../../../../../src/app/main-content/main-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__main_content_components_products_products_component__ = __webpack_require__("../../../../../src/app/main-content/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__main_content_components_contact_contact_component__ = __webpack_require__("../../../../../src/app/main-content/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__main_content_components_map_map_component__ = __webpack_require__("../../../../../src/app/main-content/components/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__main_content_components_directory_directory_component__ = __webpack_require__("../../../../../src/app/main-content/components/directory/directory.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_16__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__main_content_main_content_component__["a" /* MainContentComponent */],
            __WEBPACK_IMPORTED_MODULE_3__main_content_components_services_services_component__["a" /* ServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_17__main_content_components_products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_1__pipes_truncate_text_pipe__["a" /* TruncateTextPipe */],
            __WEBPACK_IMPORTED_MODULE_18__main_content_components_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_19__main_content_components_map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_20__main_content_components_directory_directory_component__["a" /* DirectoryComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__routing_routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_15__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Http */]]
                }
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__main_content_services_services_information_service__["a" /* ServicesInformationService */],
            __WEBPACK_IMPORTED_MODULE_2__main_content_services_products_information_service__["a" /* ProductsInformationService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid text-center\">\n  <a href=\"#\" title=\"To Top\">\n    <span class=\"glyphicon glyphicon-chevron-up\"></span>\n  </a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'al-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax\">\n  <div class=\"jumbotron text-center\">\n    <div class=\"title-elements\">\n      <div class=\"title-text\">\n        <img src=\"assets/images/logo_white.svg\" alt=\"Alinsumos\"/>\n      </div>\n      <div id=\"typed-strings\">\n        <p>¡Apoyando productores ^1000 <br/> cosechando éxitos!</p>\n      </div>\n      <div id=\"slogan-text\" class=\"title-text\"></div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ .jumbotron {\n  color: #fff;\n  padding: 100px 25px;\n  font-family: Montserrat, sans-serif;\n  height: 100vh;\n  background: none; }\n  :host /deep/ .jumbotron .title-text {\n    margin: 1% auto;\n    text-shadow: 2px 3px 4px #000;\n    font-size: 3.5em; }\n  :host /deep/ .jumbotron .title-elements {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n\n.parallax {\n  /* The image used */\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/corn-header.jpg") + ");\n  /* Full height */\n  height: 100vh;\n  /* Create the parallax scrolling effect */\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var typed = new Typed('#slogan-text', {
            stringsElement: '#typed-strings',
            loop: false,
            loopCount: Infinity,
            typeSpeed: 40,
            showCursor: false
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'al-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-content/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contact\" class=\"container-fluid bg-grey\">\n  <h2 class=\"text-center\">{{ 'CONTACT-SECTION.TITLE' | translate }}</h2>\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n      <p>{{ 'CONTACT-SECTION.SECTION-MESSAGE' | translate }}</p>\n      <!-- <p><span class=\"glyphicon glyphicon-map-marker\"></span> Carretera internacional México-Nogales. Km 1841 S/N. Parque industrial.\n        Cd. Obregón, Sonora, México.</p>\n      <p><span class=\"glyphicon glyphicon-phone\"></span> +52 (644) 413 99 29</p>\n      <p><span class=\"glyphicon glyphicon-envelope\"></span> recepcion@alinsumos.com</p>-->\n\n      <address>\n          <strong>Alinsumos, S.A. de C.V.</strong><br>\n          Carretera internacional México-Nogales. Km 1841 S/N. Parque industrial.\n          Cd. Obregón, Sonora, México.<br/>\n          <abbr title=\"Teléfono\">T:</abbr> +52 (644) 413 99 29\n        </address>\n      <p>{{ 'CONTACT-SECTION.DIRECTORY-INSTRUCTION' | translate }}</p>\n      <p>\n        <a routerLink=\"/directory\" routerLinkActive=\"active\"  class=\"btn btn-default\" role=\"button\">{{ 'CONTACT-SECTION.DIRECTORY-BUTTON' | translate }}</a>\n      </p>\n    </div>\n    <div class=\"col-sm-4\">\n      <div class=\"row\">\n        <div class=\"col-sm-6 form-group\">\n          <input class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"{{ 'CONTACT-SECTION.CONTACT-FORM.NAME-INPUT' | translate }}\" type=\"text\" required>\n        </div>\n        <div class=\"col-sm-6 form-group\">\n          <input class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"{{ 'CONTACT-SECTION.CONTACT-FORM.EMAIL-INPUT' | translate }}\" type=\"email\" required>\n        </div>\n      </div>\n      <textarea class=\"form-control\" id=\"comments\" name=\"comments\" placeholder=\"{{ 'CONTACT-SECTION.CONTACT-FORM.COMMENT-TEXTAREA' | translate }}\" rows=\"5\"></textarea><br>\n      <div class=\"row\">\n        <div class=\"col-sm-12 form-group\">\n          <button class=\"btn btn-default pull-right\" type=\"submit\">{{ 'CONTACT-SECTION.CONTACT-FORM.SEND_BUTTON' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main-content/components/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-content/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'al-contact',
        template: __webpack_require__("../../../../../src/app/main-content/components/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-content/components/contact/contact.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-content/components/directory/directory.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"directory\" class=\"container-fluid\">\n  <div class=\"page-header\">\n    <h1>Directorio</h1>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\" *ngFor=\"let contact of directory.contactsArray\">\n      <div class=\"thumbnail\">\n        <div class=\"caption\">\n          <address>\n            <h4>{{contact.mainName}}</h4>\n            <hr>\n            <strong><span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></span> Correo electrónico:</strong><br>\n            <a href=\"mailto:{{contact.email}}\">{{contact.email}}</a>\n            <p *ngIf=\"contact.phone\"><b><span class=\"glyphicon glyphicon-earphone\" aria-hidden=\"true\"></span> Extensión: </b>{{contact.phone}}</p>\n            <strong *ngIf=\"contact.secondEmail\"><span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></span> Correo electrónico:</strong><br>\n            <a *ngIf=\"contact.secondEmail\" href=\"mailto:{{contact.secondEmail}}\">{{contact.secondEmail}}</a>\n            <p *ngIf=\"contact.secondPhone\"><b><span class=\"glyphicon glyphicon-earphone\" aria-hidden=\"true\"></span> Extensión: </b>{{contact.secondPhone}}</p>\n          </address>\n          <hr>\n          <p>\n            <a *ngIf=\"contact.phone; else sendEmail\" href=\"tel:(644)4139929;{{contact.phone}}\" class=\"btn btn-success\" role=\"button\">Marcar Ext. {{contact.phone}}</a>\n            <a *ngIf=\"contact.secondPhone\" href=\"#\" class=\"btn btn-default\" role=\"button\">Marcar Ext. {{contact.secondPhone}}</a></p>\n            <ng-template #sendEmail>\n                <a href=\"mailto:{{contact.email}}\" class=\"btn btn-success\" role=\"button\">Enviar e-mail</a>\n            </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main-content/components/directory/directory.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "address {\n  height: 200px; }\n\n.btn-success {\n  background-color: #77A23D;\n  border-color: #77A23D; }\n  .btn-success:active {\n    background-color: #5a7b2e; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-content/components/directory/directory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_directory_service__ = __webpack_require__("../../../../../src/app/main-content/services/directory.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DirectoryComponent = (function () {
    function DirectoryComponent(directory) {
        this.directory = directory;
    }
    DirectoryComponent.prototype.ngOnInit = function () {
    };
    return DirectoryComponent;
}());
DirectoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'al-directory',
        template: __webpack_require__("../../../../../src/app/main-content/components/directory/directory.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-content/components/directory/directory.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_directory_service__["a" /* DirectoryService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_directory_service__["a" /* DirectoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_directory_service__["a" /* DirectoryService */]) === "function" && _a || Object])
], DirectoryComponent);

var _a;
//# sourceMappingURL=directory.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-content/components/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"googleMap\">\n  <div class=\"embed-responsive embed-responsive-16by9\">\n    <iframe class=\"embed-responsive-item\" src=\"https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d3188.3786880304115!2d-109.85081776688577!3d27.422659346284558!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xebc0988aaba3f993!2sAlinsumos+S.A.+de+C.V.!5e1!3m2!1ses-419!2smx!4v1503175777534\" width=\"100%\" height=\"400px\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main-content/components/map/map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-content/components/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    return MapComponent;
}());
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'al-map',
        template: __webpack_require__("../../../../../src/app/main-content/components/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-content/components/map/map.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MapComponent);

//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-content/components/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"products\" class=\"container-fluid text-center\">\n  <h2>Productos</h2><br>\n  <h4>Familia de productos</h4>\n  <div class=\"col-xs-6 col-md-3\" *ngFor=\"let product of products.productsInformation\">\n    <a href=\"#\" class=\"thumbnail\">\n      <img src=\"{{product.image}}\" alt=\"\">\n    </a>\n    <div class=\"caption\">\n      <h3>{{product.title}}</h3>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main-content/components/products/products.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.thumbnail:hover, a.thumbnail:active, a.thumbnail:focus {\n  border-color: #77A23D; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-content/components/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_products_information_service__ = __webpack_require__("../../../../../src/app/main-content/services/products-information.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = (function () {
    function ProductsComponent(products) {
        this.products = products;
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'al-products',
        template: __webpack_require__("../../../../../src/app/main-content/components/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-content/components/products/products.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_products_information_service__["a" /* ProductsInformationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_products_information_service__["a" /* ProductsInformationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_products_information_service__["a" /* ProductsInformationService */]) === "function" && _a || Object])
], ProductsComponent);

var _a;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-content/components/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"services\" class=\"container-fluid text-center\">\n  <h2>Servicios</h2>\n  <h4>Ofrecemos</h4>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4\" *ngFor=\"let service of services.servicesInformationArray\">\n      <div class=\"thumbnail\">\n        <img class=\"img-rounded\" src=\"{{service.image}}\" alt=\"\">\n        <div class=\"caption\">\n          <h3>{{service.title}}</h3>\n          <p>{{service.content | truncateText:277}}\n            <p>\n              <a href=\"#\" class=\"btn btn-default\" role=\"button\">Ver más</a>\n            </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main-content/components/services/services.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thumbnail {\n  padding: 0 0 15px 0;\n  border: none;\n  border-radius: 0; }\n\n.thumbnail img {\n  width: 100%;\n  height: 100%;\n  margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-content/components/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_services_information_service__ = __webpack_require__("../../../../../src/app/main-content/services/services-information.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesComponent = (function () {
    function ServicesComponent(services) {
        this.services = services;
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'al-services',
        template: __webpack_require__("../../../../../src/app/main-content/components/services/services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-content/components/services/services.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__services_services_information_service__["a" /* ServicesInformationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_services_information_service__["a" /* ServicesInformationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_services_information_service__["a" /* ServicesInformationService */]) === "function" && _a || Object])
], ServicesComponent);

var _a;
//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-content/main-content.component.html":
/***/ (function(module, exports) {

module.exports = "<al-header></al-header>\n\n<div id=\"about\" class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-8\">\n      <h2>Acerca de Alinsumos</h2><br>\n      <h4>\n        ALINSUMOS, es una empresa joven, que nace hace muy pocos años en el Noroeste del país, con un entrañable cariño por nuestro\n        México, comprometidos con su desarrollo en la economía primaria, directamente en la agroindustria, tenemos muy claro\n        en nuestra VISION, que debemos crear crecimiento para beneficio de productores y consumidores, coadyuvando en su\n        desarrollo y así sumarnos a la solución de la cadena alimenticia, especialmente Granos.\n      </h4>\n      <br/>\n      <p>Somos un equipo joven, emprendedor, preparado, profesional, actualizado y con visión de largo plazo. En cada contacto\n        de negocios con productores, encontrarán en nosotros a un equipo confiable para fincar relaciones de largo plazo,\n        en el concepto de GANAR-GANAR. Estamos seguros que el compromiso, y la búsqueda de soluciones que apoyen al productor,\n        la encontrarán siempre en nuestro equipo de trabajo. Las utilidades que se obtienen de este ejercicio emprendedor,\n        se re-invierten en infraestructura y nuevos servicios para que todos crezcamos y pongamos nuestro granito de arena\n        al desarrollo de este nuestro México, país rico por su gente y sus recursos. Tenga por seguro que en ALINSUMOS, somos\n        confiables, comprometidos y muy trabajadores.\n\n        <br/> Muy Cordialmente\n      </p>\n      <br>\n    </div>\n    <div class=\"col-xs-6 col-md-4 hidden-xs\">\n      <div class=\"embed-responsive embed-responsive-4by3\">\n        <video class=\"embed-responsive-item\" controls>\n          <source src=\"assets/video/director-message.mp4\" type=\"video/mp4\"> Your browser does not support the video tag.\n        </video>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid bg-grey\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <img src=\"assets/images/tolva_llenado.jpg\" class=\"img-responsive img-rounded\" width=\"400px\" />\n    </div>\n    <div class=\"col-sm-8\">\n      <h2>Nuestros Valores</h2><br>\n      <h4><strong>MISIÓN:</strong> Ser la mejor opción de los productores agropecuarios en financiamiento, comercialización y\n        darles valor agregado a sus productos. Obtener un crecimiento profesional y humano de todos los integrantes de Alinsumos.</h4><br>\n      <p><strong>VISIÓN:</strong> Ser una empresa lider en el noroeste y occidente de México en la actividad Agroindustial.\n      </p>\n      <p><strong>OBJETIVOS:</strong></p>\n      <div>\n        <ul>\n          <li>Apoyar al sector agropecuario con alternativas financieras más apropiadas.</li>\n          <li> Asegurar el abastecimiento de la materia prima.</li>\n          <li> Contar con una mejora continua en los procesos de la empresa.</li>\n        </ul>\n      </div>\n      <h4><strong>VALORES:</strong></h4>\n      <div>\n        <ul>\n          <li><strong>Compromiso:</strong> Obligación contraída por medio de acuerdo, promesa o contrato.\"</li>\n          <li><strong>Honestidad:</strong> Compostura, decencia y moderación en la persona, acciones y palabras.\"</li>\n          <li><strong>Lealtad:</strong> Cumplimiento de las leyes y el honor.\"</li>\n          <li><strong>Participación:</strong> La toma o recepción de parte de alguna situación, compartir ideas, opiniones, entre\n            otras.\"\n          </li>\n          <li><strong>Espiritu de servicio:</strong> Estar orientados a resolver las actividades propias y de los compañeros\n            para cumplir con las metas establecidas.\"\n          </li>\n          <li><strong>Trabajo en equipo:</strong> La serie de estrategias, procedimientos y metodologías que utiliza un grupo\n            humano para lograr las metas propuestas.\"\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Products component -->\n<al-products></al-products>\n\n<!-- Services component -->\n<al-services></al-services>\n\n<!-- Contact component-->\n<al-contact></al-contact>\n\n<!-- Map component -->\n<al-map></al-map>\n"

/***/ }),

/***/ "../../../../../src/app/main-content/main-content.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".parallax {\n  /* The image used */\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/corn-header.jpg") + ");\n  /* Full height */\n  height: 100vh;\n  /* Create the parallax scrolling effect */\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.charmain-video {\n  width: 320px;\n  height: 250px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-content/main-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainContentComponent = (function () {
    function MainContentComponent() {
    }
    MainContentComponent.prototype.ngOnInit = function () {
    };
    return MainContentComponent;
}());
MainContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'al-main-content',
        template: __webpack_require__("../../../../../src/app/main-content/main-content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-content/main-content.component.scss")],
    }),
    __metadata("design:paramtypes", [])
], MainContentComponent);

//# sourceMappingURL=main-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-content/services/classes/contact-card.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactCard; });
var ContactCard = (function () {
    function ContactCard(mainName, phone, email, secondPhone, secondEmail) {
        this.mainName = mainName;
        this.phone = phone;
        this.email = email;
        this.secondEmail = secondEmail;
        this.secondPhone = secondPhone;
    }
    return ContactCard;
}());

//# sourceMappingURL=contact-card.js.map

/***/ }),

/***/ "../../../../../src/app/main-content/services/classes/content-post.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPost; });
var ContentPost = (function () {
    function ContentPost(title, content, image) {
        this.imagesRoute = 'assets/images/';
        this.title = title;
        this.content = content ? content : '';
        this.image = image ? this.imagesRoute + image : '';
    }
    return ContentPost;
}());

//# sourceMappingURL=content-post.js.map

/***/ }),

/***/ "../../../../../src/app/main-content/services/directory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_contact_card__ = __webpack_require__("../../../../../src/app/main-content/services/classes/contact-card.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DirectoryService = (function () {
    function DirectoryService() {
        this.contraloria = new __WEBPACK_IMPORTED_MODULE_0__classes_contact_card__["a" /* ContactCard */]('Contraloría', '106', 'contraloria106@alinsumos.com');
        this.ventas = new __WEBPACK_IMPORTED_MODULE_0__classes_contact_card__["a" /* ContactCard */]('Comercialización, ventas y logistica', '120', 'cristhiangastelum@alinsumos.com');
        this.ventasEtchojoa = new __WEBPACK_IMPORTED_MODULE_0__classes_contact_card__["a" /* ContactCard */]('Operaciones y ventas Etchojoa', null, 'supervisor.a4@alinsumos.com');
        this.ventasCuliacan = new __WEBPACK_IMPORTED_MODULE_0__classes_contact_card__["a" /* ContactCard */]('Operaciones y ventas Culiacán', null, 'ventasculiacan@alinsumos.com');
        this.paraFinanciera = new __WEBPACK_IMPORTED_MODULE_0__classes_contact_card__["a" /* ContactCard */]('Parafinanciera', '119', 'parafinanciera119@alinsumos.com', '120', 'parafinanciera120@alinsumos.com');
        this.fondoAseguramiento = new __WEBPACK_IMPORTED_MODULE_0__classes_contact_card__["a" /* ContactCard */]('Fondo de Aseguramiento', '117', 'prograson2017@hotmail.com');
        this.recursosHumanos = new __WEBPACK_IMPORTED_MODULE_0__classes_contact_card__["a" /* ContactCard */]('Recursos Humanos', '115', 'ivalenzuela@alinsumos.com');
        this.contabilidadGeneral = new __WEBPACK_IMPORTED_MODULE_0__classes_contact_card__["a" /* ContactCard */]('Contabilidad General', '103', 'contabilidad103@alinsumos.com');
        this.ventanillaAserca = new __WEBPACK_IMPORTED_MODULE_0__classes_contact_card__["a" /* ContactCard */]('Ventanilla Aserca', '124', 'myrnalopez@alinsumos.com');
        this.controlCalidadYBascula = new __WEBPACK_IMPORTED_MODULE_0__classes_contact_card__["a" /* ContactCard */]('Control de Calidad/Báscula', '121', 'calidad121@alinsumos.com', '111', 'bascula111@alinsumos.com');
        this.recepcion = new __WEBPACK_IMPORTED_MODULE_0__classes_contact_card__["a" /* ContactCard */]('Recepción', '101', 'recepcion@alinsumos.com');
        this.contactsArray = [
            this.contraloria,
            this.ventas,
            this.ventasEtchojoa,
            this.ventasCuliacan,
            this.paraFinanciera,
            this.fondoAseguramiento,
            this.recursosHumanos,
            this.contabilidadGeneral,
            this.ventanillaAserca,
            this.controlCalidadYBascula,
            this.recepcion
        ];
    }
    return DirectoryService;
}());
DirectoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DirectoryService);

//# sourceMappingURL=directory.service.js.map

/***/ }),

/***/ "../../../../../src/app/main-content/services/products-information.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsInformationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_content_post__ = __webpack_require__("../../../../../src/app/main-content/services/classes/content-post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsInformationService = (function () {
    function ProductsInformationService() {
        this.grains = new __WEBPACK_IMPORTED_MODULE_0__classes_content_post__["a" /* ContentPost */]('Granos', '', 'products/trigo-manos.jpg');
        this.pastas = new __WEBPACK_IMPORTED_MODULE_0__classes_content_post__["a" /* ContentPost */]('Pastas', '', 'products/pasta.jpg');
        this.flour = new __WEBPACK_IMPORTED_MODULE_0__classes_content_post__["a" /* ContentPost */]('Harinas', '', 'products/harina.jpg');
        this.oils = new __WEBPACK_IMPORTED_MODULE_0__classes_content_post__["a" /* ContentPost */]('Grasas y aceites', '', 'products/grasas-aceites.jpg');
        this.productsInformation = [this.grains, this.pastas, this.flour, this.oils];
    }
    return ProductsInformationService;
}());
ProductsInformationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ProductsInformationService);

//# sourceMappingURL=products-information.service.js.map

/***/ }),

/***/ "../../../../../src/app/main-content/services/services-information.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesInformationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_content_post__ = __webpack_require__("../../../../../src/app/main-content/services/classes/content-post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesInformationService = (function () {
    function ServicesInformationService() {
        this.paraFinanciera = new __WEBPACK_IMPORTED_MODULE_0__classes_content_post__["a" /* ContentPost */]('ParaFinanciera', "La Parafinanciera ALIFIN tiene como Principal Objetivo el gestionar, obtener y otorgar financiamiento\n          agr\u00EDcola, estamos operando desde hace varios a\u00F1os con este esquema apoyando a nuestros productores del valle\n          del Yaqui y Mayo, habilitando m\u00E1s de 7000 hect\u00E1reas de Trigo, Ma\u00EDz, C\u00E1rtamo, Sorgo, Algod\u00F3n, etc.", 'services/pasillo.jpg');
        this.despepitadoraDeAlgodon = new __WEBPACK_IMPORTED_MODULE_0__classes_content_post__["a" /* ContentPost */]('Despepitadora de Algodón', "En Alinsumos estamos siempre al pendiente de las necesidades de nuestros productores, raz\u00F3n por la cual\n          ponemos en marcha la planta despepitadora de algod\u00F3n, ubicada en calle 600 y 3 del valle del yaqui cuenta\n          con dos plantas una Murray 1080 y una Murray 690 con capacidad de 350 pacas diarias, con la cual se dar\u00E1\n          servicio a m\u00E1s de 4000 has.", 'services/cotton.jpg');
        this.pignoracionDeGranos = new __WEBPACK_IMPORTED_MODULE_0__classes_content_post__["a" /* ContentPost */]('Pignoración de Granos', "Se refiere al t\u00E9rmino pignorar que significa \"dar o dejar en prenda\". Es cuando se deposita temporalmente\n          la totalidad o una parte de la cosecha y se obtiene un documento expedido por un almac\u00E9n general de dep\u00F3sito\n          que certifica la existencia del grano, mediante el cual, el productor esta en posibilidad de obtener un\n          cr\u00E9dito prendario con un agente financiero.", 'services/trigo_granos.jpg');
        this.secadoDeGranos = new __WEBPACK_IMPORTED_MODULE_0__classes_content_post__["a" /* ContentPost */]('Secado de Granos', "Los granos, como es bien conocido, no pueden conservarse almacenados si no est\u00E1n secos. La cuesti\u00F3n es\n    determinar cu\u00E1ndo un grano se considera \"seco\". Como t\u00E9rmino general, para los granos como Ma\u00EDz y Sorgo, una\n    humedad del 14% se considera el l\u00EDmite para estimarlo como \"seco\". En el caso del Trigo Cristalino y\n    Harinero 12 % se considera su l\u00EDmite.", 'services/secado_grano.jpg');
        this.transporteDeMercancia = new __WEBPACK_IMPORTED_MODULE_0__classes_content_post__["a" /* ContentPost */]('Transporte de mercancía', "En Alinsumos sabemos la importancia de trasladar las mercanc\u00EDas en tiempo y forma a los destinos que\n    nuestros clientes dispongan, por ello contamos con una flota de camiones moderna y funcional, contando con\n    Cajas secas y refrigeradas, jaulas y camiones torton, garantizando un servicio de calidad y sin demoras.", 'services/transporte.jpg');
        this.importacionDeGranos = new __WEBPACK_IMPORTED_MODULE_0__classes_content_post__["a" /* ContentPost */]('Importación de granos', "El Comercio Exterior es el intercambio de bienes, servicios y capitales entre diferentes pa\u00EDses. Cuando un\n    pa\u00EDs necesita ingresar productos se produce la importaci\u00F3n, la que es definida como \"la introducci\u00F3n legal\n    de mercanc\u00EDa extranjera para su uso o consumo del pa\u00EDs\"", 'services/maiz_cribado.jpg');
        this.almacenajeYConservacion = new __WEBPACK_IMPORTED_MODULE_0__classes_content_post__["a" /* ContentPost */]('Almacenaje y conservación', "El valor econ\u00F3mico, alimenticio agr\u00EDcola e industrial asociado a los granos y semillas requieren de\n    cuidados especiales para garantizar su calidad y esta debe mantenerse durante el tiempo necesario hasta el\n    momento de su uso. El almacenamiento se refiere a la concentraci\u00F3n de alg\u00FAn producto o insumo en lugares\n    especialmente dise\u00F1ados para tal efecto.", 'services/silos_costales.jpg');
        this.servicesInformationArray = [
            this.paraFinanciera,
            this.despepitadoraDeAlgodon,
            this.pignoracionDeGranos,
            this.secadoDeGranos,
            this.transporteDeMercancia,
            this.importacionDeGranos,
            this.almacenajeYConservacion
        ];
    }
    return ServicesInformationService;
}());
ServicesInformationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ServicesInformationService);

//# sourceMappingURL=services-information.service.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" [@navBarState]=\"navStatus\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#myPage\">\n        <img src=\"assets/images/imagotipo_web.svg\" alt=\"Alinsumos\"/>\n      </a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#about\">{{ 'MENU.ABOUT-US' | translate }}</a></li>\n        <li><a href=\"#services\">{{ 'MENU.SERVICES' | translate }}</a></li>\n        <li><a href=\"#products\">{{ 'MENU.PRODUCTS' | translate }}</a></li>\n        <li><a href=\"#contact\">{{ 'MENU.CONTACT-US' | translate }}</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo-small {\n  color: #884F20;\n  font-size: 50px; }\n\n.logo {\n  color: #884F20;\n  font-size: 200px; }\n\n.navbar {\n  margin-bottom: 0;\n  background-color: transparent;\n  z-index: 9999;\n  border: 0;\n  font-size: 12px !important;\n  line-height: 1.42857143 !important;\n  letter-spacing: 4px;\n  border-radius: 0;\n  font-weight: 700; }\n  .navbar .navbar-brand {\n    color: #fff !important;\n    padding: 10px 0; }\n  .navbar li a {\n    color: #fff !important;\n    text-transform: uppercase;\n    text-shadow: 2px 3px 4px #000;\n    font-size: 14px; }\n  .navbar li :hover, .navbar li :active {\n    background-color: rgba(255, 255, 255, 0.4) !important; }\n\n.navbar-default .navbar-toggle {\n  border-color: transparent;\n  color: #fff !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MenuComponent = (function () {
    function MenuComponent(document, router) {
        var _this = this;
        this.document = document;
        this.router = router;
        this.navStatus = 'default';
        this.navIsFixed = false;
        this.navIsOutOfIndex = false;
        this.router.events.subscribe(function (routerEvents) {
            console.log(routerEvents.url);
            if (routerEvents.url.indexOf('#') <= 0) {
                _this.navIsOutOfIndex = true;
                _this.navStatus = 'scrolled';
            }
            else {
                _this.navIsOutOfIndex = false;
            }
        });
    }
    MenuComponent.prototype.onWindowScroll = function () {
        var number = this.document.body.scrollTop;
        if (number > 400) {
            this.navStatus = 'scrolled';
            this.navIsFixed = true;
        }
        else if (this.navIsFixed && number < 10 && !this.navIsOutOfIndex) {
            this.navStatus = 'default';
            this.navIsFixed = false;
        }
    };
    return MenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ViewChild */])('nav'),
    __metadata("design:type", Object)
], MenuComponent.prototype, "navigationBar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* HostListener */])('window:scroll', []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuComponent.prototype, "onWindowScroll", null);
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'al-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.scss")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* trigger */])('navBarState', [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('default', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                    backgroundColor: 'transparent',
                })),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* state */])('scrolled', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* style */])({
                    backgroundColor: '#884F20',
                })),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('default => scrolled', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('100ms ease-in')),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* transition */])('scrolled => default', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('100ms ease-out'))
            ])
        ]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/truncate-text.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncateTextPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncateTextPipe = (function () {
    function TruncateTextPipe() {
    }
    TruncateTextPipe.prototype.transform = function (value, limit, trail) {
        limit = limit !== undefined ? limit : 45;
        trail = trail !== undefined ? trail : '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    return TruncateTextPipe;
}());
TruncateTextPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'truncateText'
    })
], TruncateTextPipe);

//# sourceMappingURL=truncate-text.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_content_components_directory_directory_component__ = __webpack_require__("../../../../../src/app/main-content/components/directory/directory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_content_main_content_component__ = __webpack_require__("../../../../../src/app/main-content/main-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__main_content_main_content_component__["a" /* MainContentComponent */] },
    { path: 'directory', component: __WEBPACK_IMPORTED_MODULE_0__main_content_components_directory_directory_component__["a" /* DirectoryComponent */] },
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]
        ]
    })
], RoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "../../../../../src/assets/images/corn-header.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "corn-header.a6b7faaf8267a0ec1bd6.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map