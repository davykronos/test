"use strict";
(self["webpackChunklanding_new"] = self["webpackChunklanding_new"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ 1534);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 4789);
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/services/services.component */ 7569);
/* harmony import */ var _pages_our_partners_our_partners_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/our-partners/our-partners.component */ 1620);
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ 8340);
/* harmony import */ var _resolvers_services_route_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolvers/services-route.resolver */ 625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);










const routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
    },
    {
        path: 'about-us',
        component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_1__.AboutUsComponent,
    },
    {
        path: 'services',
        resolve: { servicesPlusCtgs: _resolvers_services_route_resolver__WEBPACK_IMPORTED_MODULE_6__.ServicesRouteResolver },
        component: _pages_services_services_component__WEBPACK_IMPORTED_MODULE_3__.ServicesComponent,
    },
    { path: 'dashboard', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent },
    { path: 'partners', component: _pages_our_partners_our_partners_component__WEBPACK_IMPORTED_MODULE_4__.OurPartnersComponent },
    { path: '**', component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__.PageNotFoundComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, {
            initialNavigation: 'enabledBlocking',
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_8__.PreloadAllModules,
        }), _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layout/navbar/navbar.component */ 9761);



class AppComponent {
    constructor() {
        this.title = 'landing_new';
    }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar")(1, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8319);
/* harmony import */ var ngx_json_ld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-json-ld */ 8628);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/angular-material.module */ 1917);
/* harmony import */ var _interceptors_http_assets_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors/http-assets.interceptor */ 1372);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ 1534);
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/services/services.component */ 7569);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 4789);
/* harmony import */ var _pages_our_partners_our_partners_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/our-partners/our-partners.component */ 1620);
/* harmony import */ var _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/layout/navbar/navbar.component */ 9761);
/* harmony import */ var _components_utility_language_selection_language_selection_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/utility/language-selection/language-selection.component */ 8769);
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ 8340);
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ 4124);
/* harmony import */ var _components_sections_statistics_section_statistics_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sections/statistics-section/statistics-section.component */ 6521);
/* harmony import */ var _components_utility_statistics_card_statistics_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/utility/statistics-card/statistics-card.component */ 309);
/* harmony import */ var _components_sections_banner_section_banner_section_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/sections/banner-section/banner-section.component */ 4119);
/* harmony import */ var _components_utility_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/utility/error-dialog/error-dialog.component */ 9856);
/* harmony import */ var _components_sections_whats_new_section_whats_new_section_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/sections/whats-new-section/whats-new-section.component */ 339);
/* harmony import */ var _components_sections_popular_services_section_popular_services_section_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/sections/popular-services-section/popular-services-section.component */ 7980);
/* harmony import */ var _components_sections_trending_services_section_trending_services_section_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/sections/trending-services-section/trending-services-section.component */ 5450);
/* harmony import */ var _components_sections_categories_section_categories_section_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/sections/categories-section/categories-section.component */ 9085);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 2560);

































function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_23__.TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}
class AppModule {
    constructor(translateService) {
        this.translateService = translateService;
        this.setCurrentTranslation();
    }
    setCurrentTranslation() {
        // TODO: Logic for reading translation from langDate.
        this.translateService.use('en');
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateService)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_26__.APP_BASE_HREF, useValue: src_environments_environment__WEBPACK_IMPORTED_MODULE_22__.environment.baseUrl },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HTTP_INTERCEPTORS,
            useClass: _interceptors_http_assets_interceptor__WEBPACK_IMPORTED_MODULE_3__.HttpAssetsInterceptor,
            multi: true,
        },
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule,
        ngx_json_ld__WEBPACK_IMPORTED_MODULE_0__.NgxJsonLdModule,
        _modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__.AngularMaterialModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateModule.forRoot({
            loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClient],
            },
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent,
        _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__.AboutUsComponent,
        _pages_services_services_component__WEBPACK_IMPORTED_MODULE_7__.ServicesComponent,
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__.DashboardComponent,
        _pages_our_partners_our_partners_component__WEBPACK_IMPORTED_MODULE_9__.OurPartnersComponent,
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent,
        _components_layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__.NavbarComponent,
        _components_utility_language_selection_language_selection_component__WEBPACK_IMPORTED_MODULE_11__.LanguageSelectionComponent,
        _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__.PageNotFoundComponent,
        _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__.FooterComponent,
        _components_sections_statistics_section_statistics_section_component__WEBPACK_IMPORTED_MODULE_14__.StatisticsSectionComponent,
        _components_utility_statistics_card_statistics_card_component__WEBPACK_IMPORTED_MODULE_15__.StatisticsCardComponent,
        _components_sections_banner_section_banner_section_component__WEBPACK_IMPORTED_MODULE_16__.BannerSectionComponent,
        _components_utility_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_17__.ErrorDialogComponent,
        _components_sections_whats_new_section_whats_new_section_component__WEBPACK_IMPORTED_MODULE_18__.WhatsNewSectionComponent,
        _components_sections_popular_services_section_popular_services_section_component__WEBPACK_IMPORTED_MODULE_19__.PopularServicesSectionComponent,
        _components_sections_trending_services_section_trending_services_section_component__WEBPACK_IMPORTED_MODULE_20__.TrendingServicesSectionComponent,
        _components_sections_categories_section_categories_section_component__WEBPACK_IMPORTED_MODULE_21__.CategoriesSectionComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule,
        ngx_json_ld__WEBPACK_IMPORTED_MODULE_0__.NgxJsonLdModule,
        _modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__.AngularMaterialModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateModule] }); })();


/***/ }),

/***/ 4124:
/*!**************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 76, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md-3", "footer-two-col"], [1, "foot-sub-heading"], [1, "menu-list-item"], [1, "menu-list-items"], ["href", "https://web.umang.gov.in/uaw/um/v49/web/en/index.htm", "title", "User Manual", "target", "_blank"], ["href", "https://web.umang.gov.in/uaw/pp/v4/en/index.htm", "title", "Privacy Policy", "target", "_blank"], ["href", "https://web.umang.gov.in/uaw/cr/v1/en/index.htm#t=CancellationRefund_Policy_en.htm", "title", "Cancellation/Refund Policy", "target", "_blank"], ["href", "https://web.umang.gov.in/uaw/faq/v23/web/en/index.htm?v=1.0.0#t=What_is_UMANG_.htm", "title", "FAQ", "target", "_blank"], ["href", "https://web.umang.gov.in/uaw/ts/v1/en/index.htm", "title", "Terms of Service", "target", "_blank"], ["href", "https://web.umang.gov.in/landing/flipbook/index.html", "title", "eBook"], ["href", "", "title", "Careers"], ["href", "", "title", "Video Presentation", 1, "cursor-pointer"], ["href", "", "title", "About Us"], ["href", "", "title", "Dashboard"], ["href", "", "title", "Contact Us"], ["href", "", "title", "Our Partners"], ["href", "", "title", "Credit"], [1, "col-md-6", "footer-newsletter-col"], [1, "newsletter-wrapper"], [1, "w-100", "newsletter-wrapper__inner"], ["type", "email", "placeholder", "Enter your email", "required", "true"], [1, "btn", "btn-primary"], ["src", "assets/images/loader.gif", "alt", "", "width", "25px"], [1, "useful-links-section"], ["href", "https://www.digitalindia.gov.in/", "target", "_blank", "title", "Digital India"], ["src", "assets/images/digital-logo.svg", "alt", "digital india", 1, "footer-ico"], ["target", "_blank", "href", "https://negd.gov.in/", "data-rb-event-key", "NeGD", "title", "NeGD"], ["src", "assets/images/negd.svg", "alt", "negd", 1, "footer-ico"], ["target", "_blank", "href", "https://www.digilocker.gov.in/", "data-rb-event-key", "digilocker", "title", "Digilocker"], ["src", "assets/images/digilocker.svg", "alt", "Digilocker", 1, "footer-ico"], ["target", "_blank", "href", "https://www.mygov.in/", "data-rb-event-key", "myGov", "title", "myGov"], ["src", "assets/images/mygov.svg", "alt", "mygov", 1, "footer-ico"], ["target", "_blank", "href", "https://www.india.gov.in/", "data-rb-event-key", "india gov", "title", "India Gov"], ["src", "assets/images/Indiagovin.svg", "alt", "india gov", 1, "footer-ico"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4)(7, "li", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "User Manual ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5)(11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Privacy Policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5)(14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cancellation/Refund Policy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 5)(17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "FAQ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 5)(20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Terms of Service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2)(23, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Quick Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 4)(26, "li", 5)(27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "eBook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 5)(30, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 5)(33, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Video Presentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 5)(36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 5)(39, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 5)(42, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 5)(45, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Our Partners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 5)(48, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19)(51, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Subscribe to Our Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "The latest news, articles, and resources, sent to your inbox weekly.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "form")(56, "div", 20)(57, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Useful Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 25)(66, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm], styles: ["@font-face {\n  font-family: \"poppinsbold\";\n  src: local(\"poppins-bold-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-bold-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinslight\";\n  src: local(\"poppins-light-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-light-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-display: swap;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"poppinsmedium\";\n  src: local(\"poppins-medium-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-medium-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-medium-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinsregular\";\n  src: local(\"poppins-regular-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-regular-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinssemibold\";\n  src: local(\"poppins-semibold-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-semibold-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-semibold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\nbody[_ngcontent-%COMP%] {\n  --f-xxs: 12px;\n  --f-xs: 13px;\n  --f-s: 14px;\n  --f-a: 15px;\n  --f-m: 16px;\n  --f-l: 18px;\n  --f-xl: 22px;\n  --f-xxl: 25px;\n  --f-xxxl: 30px;\n  --t-left: left;\n  --t-center: center;\n  --p-right: right;\n  --f-key: 24px;\n}\nbody.small[_ngcontent-%COMP%] {\n  --f-xxs: 10px;\n  --f-xs: 11px;\n  --f-s: 12px;\n  --f-a: 13px;\n  --f-m: 14px;\n  --f-l: 15px;\n  --f-xl: 16px;\n  --f-xxl: 17px;\n  --f-xxxl: 25px;\n  --f-key: 20px;\n  --f-xxxl: 25px;\n  --f-download: 30px;\n}\nbody.normal[_ngcontent-%COMP%] {\n  --f-xxs: 12px;\n  --f-xs: 13px;\n  --f-s: 14px;\n  --f-a: 15px;\n  --f-m: 16px;\n  --f-l: 17px;\n  --f-xl: 18px;\n  --f-xxl: 19px;\n  --f-xxxl: 30px;\n  --f-key: 24px;\n  --f-download: 40px;\n}\nbody.large[_ngcontent-%COMP%] {\n  --f-xxs: 14px;\n  --f-xs: 15px;\n  --f-s: 16px;\n  --f-a: 17px;\n  --f-m: 18px;\n  --f-l: 19px;\n  --f-xl: 20px;\n  --f-xxl: 21px;\n  --f-xxxl: 35px;\n  --f-key: 28px;\n  --f-download: 35px;\n}\n@font-face {\n  font-family: \"poppinsbold\";\n  src: local(\"poppins-bold-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-bold-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinslight\";\n  src: local(\"poppins-light-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-light-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-display: swap;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"poppinsmedium\";\n  src: local(\"poppins-medium-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-medium-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-medium-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinsregular\";\n  src: local(\"poppins-regular-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-regular-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinssemibold\";\n  src: local(\"poppins-semibold-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-semibold-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-semibold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\nbody[_ngcontent-%COMP%] {\n  --f-xxs: 12px;\n  --f-xs: 13px;\n  --f-s: 14px;\n  --f-a: 15px;\n  --f-m: 16px;\n  --f-l: 18px;\n  --f-xl: 22px;\n  --f-xxl: 25px;\n  --f-xxxl: 30px;\n  --t-left: left;\n  --t-center: center;\n  --p-right: right;\n  --f-key: 24px;\n}\nbody.small[_ngcontent-%COMP%] {\n  --f-xxs: 10px;\n  --f-xs: 11px;\n  --f-s: 12px;\n  --f-a: 13px;\n  --f-m: 14px;\n  --f-l: 15px;\n  --f-xl: 16px;\n  --f-xxl: 17px;\n  --f-xxxl: 25px;\n  --f-key: 20px;\n  --f-xxxl: 25px;\n  --f-download: 30px;\n}\nbody.normal[_ngcontent-%COMP%] {\n  --f-xxs: 12px;\n  --f-xs: 13px;\n  --f-s: 14px;\n  --f-a: 15px;\n  --f-m: 16px;\n  --f-l: 17px;\n  --f-xl: 18px;\n  --f-xxl: 19px;\n  --f-xxxl: 30px;\n  --f-key: 24px;\n  --f-download: 40px;\n}\nbody.large[_ngcontent-%COMP%] {\n  --f-xxs: 14px;\n  --f-xs: 15px;\n  --f-s: 16px;\n  --f-a: 17px;\n  --f-m: 18px;\n  --f-l: 19px;\n  --f-xl: 20px;\n  --f-xxl: 21px;\n  --f-xxxl: 35px;\n  --f-key: 28px;\n  --f-download: 35px;\n}\nfooter[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #E5E5E5;\n}\n.foot-address[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.6;\n  color: #4c4c4c;\n  font-family: \"poppinsmedium\";\n  margin-bottom: 8px;\n}\n.foot-email[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.6;\n  color: #00599f;\n  font-family: \"poppinsmedium\";\n  margin-bottom: 0;\n}\n.footer-logo[_ngcontent-%COMP%] {\n  width: 100px;\n  margin-bottom: 30px;\n}\n.foot-sub-heading[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.4;\n  color: #1a1a1a;\n  font-family: \"poppinssemibold\";\n  margin-bottom: 18px;\n}\n.foot-sub-heading.mb5[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.menu-list-item[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.menu-list-item[_ngcontent-%COMP%]   .menu-list-items[_ngcontent-%COMP%] {\n  list-style: none;\n  font-size: 0.875rem;\n  color: #4c4c4c;\n  font-family: \"poppinsmedium\";\n  transition: all 0.2s ease-in-out;\n}\n.menu-list-item[_ngcontent-%COMP%]   .menu-list-items[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 8px;\n}\n.menu-list-item[_ngcontent-%COMP%]   .menu-list-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4c4c4c;\n  transition: all 0.2s ease-in-out;\n  word-break: break-all;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n}\n.menu-list-item[_ngcontent-%COMP%]   .menu-list-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.menu-list-item[_ngcontent-%COMP%]   .menu-list-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .sociaicon[_ngcontent-%COMP%] {\n  width: 23px;\n  height: 23px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n}\n.menu-list-item[_ngcontent-%COMP%]   .menu-list-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .sociaicon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n}\n.menu-list-item[_ngcontent-%COMP%]   .menu-list-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .social-text[_ngcontent-%COMP%] {\n  width: calc(100% - 23px);\n  padding-left: 10px;\n  display: inline-flex;\n  align-items: center;\n}\n.menu-list-item[_ngcontent-%COMP%]   .menu-list-items[_ngcontent-%COMP%]:hover {\n  color: #00599f;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n}\n.menu-list-item[_ngcontent-%COMP%]   .menu-list-items[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #00599f;\n  transition: all 0.2s ease-in-out;\n}\n.menu-list-item[_ngcontent-%COMP%]   .menu-list-items.menu-list-items--facebook[_ngcontent-%COMP%]   .sociaicon[_ngcontent-%COMP%] {\n  background: #4767AA;\n}\n.menu-list-item[_ngcontent-%COMP%]   .menu-list-items.menu-list-items--linkedin[_ngcontent-%COMP%]   .sociaicon[_ngcontent-%COMP%] {\n  background: #0077B5;\n}\n.menu-list-item[_ngcontent-%COMP%]   .menu-list-items.menu-list-items--youtube[_ngcontent-%COMP%]   .sociaicon[_ngcontent-%COMP%] {\n  background: #FA423B;\n}\n.menu-list-item[_ngcontent-%COMP%]   .menu-list-items.menu-list-items--instagram[_ngcontent-%COMP%]   .sociaicon[_ngcontent-%COMP%] {\n  background: #6E55B2;\n}\n.menu-list-item[_ngcontent-%COMP%]   .menu-list-items.menu-list-items--twitter[_ngcontent-%COMP%]   .sociaicon[_ngcontent-%COMP%] {\n  background: #50ABF1;\n}\n@media (max-width: 767px) {\n  .footer-second-col[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n@media (max-width: 767px) {\n  .footer-two-col[_ngcontent-%COMP%] {\n    max-width: 50%;\n  }\n}\n@media (max-width: 576px) {\n  .footer-two-col[_ngcontent-%COMP%]:first-child {\n    max-width: 40%;\n  }\n  .footer-two-col[_ngcontent-%COMP%]:last-child {\n    max-width: 60%;\n  }\n}\n@media (max-width: 767px) {\n  .footer-newsletter-col[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.onboarding-request[_ngcontent-%COMP%] {\n  background: rgba(0, 90, 159, 0.1);\n  padding: 10px 15px;\n  border-radius: 8px;\n  display: inline-block;\n}\n.newsletter-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-bottom: 30px;\n  position: relative;\n}\n.newsletter-wrapper__inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 576px) {\n  .newsletter-wrapper__inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.newsletter-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  height: 45px;\n  border: 1px solid #DDDEE3;\n  border-radius: 8px;\n  margin-right: 16px;\n  padding-left: 10px;\n}\n@media (max-width: 576px) {\n  .newsletter-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    flex: inherit;\n    margin-right: 0;\n    margin-bottom: 10px;\n    height: 45px;\n    width: 100%;\n  }\n}\n.newsletter-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 45px;\n  border-radius: 8px;\n  line-height: 45px;\n  padding: 0 10px;\n}\n@media (max-width: 576px) {\n  .newsletter-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.newsletter-wrapper[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  background: #6c8fff;\n  border-color: #6c8fff;\n}\n.newsletter-wrapper[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]:hover {\n  background: #6c8fff;\n  border-color: #6c8fff;\n}\n@media (max-width: 576px) {\n  .useful-links-section[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    flex-wrap: wrap;\n  }\n}\n.useful-links-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  transition: all 0.2s ease-in-out;\n  margin-top: 20px;\n}\n.useful-links-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transition: all 0.2s ease-in-out;\n  transform: scale(1.05);\n  transform-origin: center;\n}\n@media (max-width: 576px) {\n  .useful-links-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n.useful-links-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 30px;\n}\n.error-email[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -24px;\n  margin: 0;\n  text-align: left;\n  width: 100%;\n  font-size: 12px;\n  color: red;\n}\n.email-response[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -24px;\n  margin: 0;\n  text-align: left;\n  width: 100%;\n  font-size: 12px;\n}\n.email-response.success[_ngcontent-%COMP%] {\n  color: #3D903F;\n}\n.email-response.failure[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL192YXJpYWJsZXMuc2NzcyIsImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ0E7RUFDSSwwQkFBQTtFQUNBLGtPQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDOUNKO0FEaURBO0VBQ0ksMkJBQUE7RUFDQSxxT0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQy9DSjtBRGtEQTtFQUNJLDRCQUFBO0VBQ0Esd09BQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNoREo7QURtREE7RUFDSSw2QkFBQTtFQUNBLDJPQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDakRKO0FEb0RBO0VBQ0ksOEJBQUE7RUFDQSw4T0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2xESjtBRHFEQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ25ESjtBRHNEQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNuREo7QURzREE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNuREo7QURzREE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7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QW1OWjtBQTdNQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQWdOSjtBQTdNQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBZ05KO0FBL01JO0VBQ0ksY0RsTkU7QUNtYVY7QUEvTUk7RUFDSSxVQUFBO0FBaU5SIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250OidETSBTYW5zJyxcbnNhbnMtc2VyaWY7XG4kbGlnaHQ6ICNmZmZmZmY7XG4kZ3JheS0zMDA6ICNERERFRTM7XG4kZ3JheS0yMDA6ICNlZWVlZWU7XG4kYmxhY2s6IzAwMDAwMDtcbiRncmF5LTgwMDogIzFhMWExYTtcbiRncmF5LTYwMDojNGM0YzRjO1xuJHByaW1hcnk6ICMwMDU5OWY7XG4kcHJpbWFyeS1saWdodDogcmdiYSgwLCA5MCwgMTU5LCAwLjEwKTtcblxuJHJlZ3VsYXI6NDAwO1xuJHNlbWktYm9sZDo1MDA7XG4kYm9sZDo2MDA7XG4kcGhvbmUtc206MzYwcHg7XG4kcGhvbmU6IDQ4MHB4O1xuJHBob25lLWxhbmRzY2FwZTogNTc2cHg7XG4kdGFibGV0OiA3NjdweDtcbiRsYXB0b3B2aWV3OiA5OTFweDtcbiRsYXB0b3A6IDEwMjRweDtcbiRkZWtzdG9wOiAxMjgwcHg7XG4kbGFyZ2U6IDEzNjBweDtcblxuJHNjaGVtZS1wcmltYXJ5OiM2RkNGOTc7XG4kc2NoZW1lLWxpZ2h0OiNFOUZCRUU7XG4kc2NoZW1lLWdyYXk6IzVCNjM2NTtcblxuXG4kZGFuZ2VyOiByZ2IoMjU1LCA3NywgOTkpO1xuJHJlZDojZmYzYjNiO1xuJHN1Y2Nlc3M6ICMzRDkwM0Y7XG5cbiRncmF5LWJyZWFkY3J1bWI6I2Y5ZmFmYjtcbiRmb250LWxpZ2h0Oidwb3BwaW5zbGlnaHQnO1xuJGZvbnQtcmVndWxhcjoncG9wcGluc3JlZ3VsYXInO1xuJGZvbnQtbWVkaXVtOidwb3BwaW5zbWVkaXVtJztcbiRmb250LWJvbGQ6J3BvcHBpbnNib2xkJztcbiRmb250LXNlbWlib2xkOidwb3BwaW5zc2VtaWJvbGQnO1xuJHRleHQteHM6MC43NXJlbTsgLy8gMTJweFxuJHRleHQtc206MC44NzVyZW07IC8vIDE0cHhcbiR0ZXh0LWJhc2U6MXJlbTsgLy8gMTZweDtcbiR0ZXh0LWxnOjEuMTI1cmVtOyAvLyAxOHB4XG4kdGV4dC14bDoxLjI1cmVtOyAvLyAyMHB4XG4kdGV4dC0yMjoxLjM3NXJlbTsgLy8gMjJweFxuJHRleHQteHhsOjEuNXJlbTsgLy8gMjRweFxuJHRleHQtMzA6MS44NzVyZW07IC8vIDMwcHhcbiR0ZXh0LTQwOjIuNXJlbTsgLy8gNDBweFxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zYm9sZCc7XG4gICAgc3JjOiBsb2NhbCgncG9wcGlucy1ib2xkLXdlYmZvbnQnKSx1cmwoJ2h0dHBzOi8vc3RhdGljLnVtYW5nLmdvdi5pbi9jZG4vbGFuZGluZy9mb250cy9wb3BwaW5zLWJvbGQtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCdodHRwczovL3N0YXRpYy51bWFuZy5nb3YuaW4vY2RuL2xhbmRpbmcvZm9udHMvcG9wcGlucy1ib2xkLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zbGlnaHQnO1xuICAgIHNyYzogbG9jYWwoJ3BvcHBpbnMtbGlnaHQtd2ViZm9udCcpLHVybCgnaHR0cHM6Ly9zdGF0aWMudW1hbmcuZ292LmluL2Nkbi9sYW5kaW5nL2ZvbnRzL3BvcHBpbnMtbGlnaHQtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCdodHRwczovL3N0YXRpYy51bWFuZy5nb3YuaW4vY2RuL2xhbmRpbmcvZm9udHMvcG9wcGlucy1saWdodC13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAncG9wcGluc21lZGl1bSc7XG4gICAgc3JjOiBsb2NhbCgncG9wcGlucy1tZWRpdW0td2ViZm9udCcpLHVybCgnaHR0cHM6Ly9zdGF0aWMudW1hbmcuZ292LmluL2Nkbi9sYW5kaW5nL2ZvbnRzL3BvcHBpbnMtbWVkaXVtLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnaHR0cHM6Ly9zdGF0aWMudW1hbmcuZ292LmluL2Nkbi9sYW5kaW5nL2ZvbnRzL3BvcHBpbnMtbWVkaXVtLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zcmVndWxhcic7XG4gICAgc3JjOiBsb2NhbCgncG9wcGlucy1yZWd1bGFyLXdlYmZvbnQnKSx1cmwoJ2h0dHBzOi8vc3RhdGljLnVtYW5nLmdvdi5pbi9jZG4vbGFuZGluZy9mb250cy9wb3BwaW5zLXJlZ3VsYXItd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCdodHRwczovL3N0YXRpYy51bWFuZy5nb3YuaW4vY2RuL2xhbmRpbmcvZm9udHMvcG9wcGlucy1yZWd1bGFyLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zc2VtaWJvbGQnO1xuICAgIHNyYzogbG9jYWwoJ3BvcHBpbnMtc2VtaWJvbGQtd2ViZm9udCcpLHVybCgnaHR0cHM6Ly9zdGF0aWMudW1hbmcuZ292LmluL2Nkbi9sYW5kaW5nL2ZvbnRzL3BvcHBpbnMtc2VtaWJvbGQtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCdodHRwczovL3N0YXRpYy51bWFuZy5nb3YuaW4vY2RuL2xhbmRpbmcvZm9udHMvcG9wcGlucy1zZW1pYm9sZC13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbmJvZHkge1xuICAgIC0tZi14eHM6IDEycHg7XG4gICAgLS1mLXhzOiAxM3B4O1xuICAgIC0tZi1zOiAxNHB4O1xuICAgIC0tZi1hOiAxNXB4O1xuICAgIC0tZi1tOiAxNnB4O1xuICAgIC0tZi1sOiAxOHB4O1xuICAgIC0tZi14bDogMjJweDtcbiAgICAtLWYteHhsOiAyNXB4O1xuICAgIC0tZi14eHhsOiAzMHB4O1xuICAgIC0tdC1sZWZ0OiBsZWZ0O1xuICAgIC0tdC1jZW50ZXI6IGNlbnRlcjtcbiAgICAtLXAtcmlnaHQ6IHJpZ2h0O1xuICAgIC0tZi1rZXk6IDI0cHg7XG59XG5cbmJvZHkuc21hbGwge1xuICAgIC0tZi14eHM6IDEwcHg7XG4gICAgLS1mLXhzOiAxMXB4O1xuICAgIC0tZi1zOiAxMnB4O1xuICAgIC0tZi1hOiAxM3B4O1xuICAgIC0tZi1tOiAxNHB4O1xuICAgIC0tZi1sOiAxNXB4O1xuICAgIC0tZi14bDogMTZweDtcbiAgICAtLWYteHhsOiAxN3B4O1xuICAgIC0tZi14eHhsOiAyNXB4O1xuICAgIC0tZi1rZXk6IDIwcHg7XG4gICAgLS1mLXh4eGw6IDI1cHg7XG4gICAgLS1mLWRvd25sb2FkOiAzMHB4O1xufVxuXG5ib2R5Lm5vcm1hbCB7XG4gICAgLS1mLXh4czogMTJweDtcbiAgICAtLWYteHM6IDEzcHg7XG4gICAgLS1mLXM6IDE0cHg7XG4gICAgLS1mLWE6IDE1cHg7XG4gICAgLS1mLW06IDE2cHg7XG4gICAgLS1mLWw6IDE3cHg7XG4gICAgLS1mLXhsOiAxOHB4O1xuICAgIC0tZi14eGw6IDE5cHg7XG4gICAgLS1mLXh4eGw6IDMwcHg7XG4gICAgLS1mLWtleTogMjRweDtcbiAgICAtLWYtZG93bmxvYWQ6IDQwcHg7XG59XG5cbmJvZHkubGFyZ2Uge1xuICAgIC0tZi14eHM6IDE0cHg7XG4gICAgLS1mLXhzOiAxNXB4O1xuICAgIC0tZi1zOiAxNnB4O1xuICAgIC0tZi1hOiAxN3B4O1xuICAgIC0tZi1tOiAxOHB4O1xuICAgIC0tZi1sOiAxOXB4O1xuICAgIC0tZi14bDogMjBweDtcbiAgICAtLWYteHhsOiAyMXB4O1xuICAgIC0tZi14eHhsOiAzNXB4O1xuICAgIC0tZi1rZXk6IDI4cHg7XG4gICAgLS1mLWRvd25sb2FkOiAzNXB4O1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9taXhpbnNcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi92YXJpYWJsZXNcIjtcbmZvb3RlciB7XG4gICAgcGFkZGluZzogNjBweCAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTVFNUU1O1xuICAgIC8vIHBhZGRpbmc6IDA7XG59XG5cbi5mb290LWFkZHJlc3Mge1xuICAgIEBpbmNsdWRlIGZvbnRzKCR0ZXh0LXNtLCAxLjYpO1xuICAgIGNvbG9yOiAkZ3JheS02MDA7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LW1lZGl1bTtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5mb290LWVtYWlsIHtcbiAgICBAaW5jbHVkZSBmb250cygkdGV4dC1zbSwgMS42KTtcbiAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LW1lZGl1bTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uZm9vdGVyLWxvZ28ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZm9vdC1zdWItaGVhZGluZyB7XG4gICAgQGluY2x1ZGUgZm9udHMoJHRleHQtYmFzZSwgMS40KTtcbiAgICBjb2xvcjogJGdyYXktODAwO1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1zZW1pYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICAgICYubWI1IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbn1cblxuLm1lbnUtbGlzdC1pdGVtIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC5tZW51LWxpc3QtaXRlbXMge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBmb250LXNpemU6ICR0ZXh0LXNtO1xuICAgICAgICBjb2xvcjogJGdyYXktNjAwO1xuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtbWVkaXVtO1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKCk7XG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHhcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JheS02MDA7XG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKCk7XG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zb2NpYWljb24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyM3B4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjNweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGJvcmRlclJhZGl1cygpO1xuICAgICAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zb2NpYWwtdGV4dCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIzcHgpO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLm1lbnUtbGlzdC1pdGVtcy0tZmFjZWJvb2sge1xuICAgICAgICAgICAgLnNvY2lhaWNvbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzQ3NjdBQTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLm1lbnUtbGlzdC1pdGVtcy0tbGlua2VkaW4ge1xuICAgICAgICAgICAgLnNvY2lhaWNvbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwNzdCNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLm1lbnUtbGlzdC1pdGVtcy0teW91dHViZSB7XG4gICAgICAgICAgICAuc29jaWFpY29uIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkE0MjNCO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYubWVudS1saXN0LWl0ZW1zLS1pbnN0YWdyYW0ge1xuICAgICAgICAgICAgLnNvY2lhaWNvbiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzZFNTVCMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLm1lbnUtbGlzdC1pdGVtcy0tdHdpdHRlciB7XG4gICAgICAgICAgICAuc29jaWFpY29uIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTBBQkYxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9vdGVyLXNlY29uZC1jb2wge1xuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0KSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxufVxuXG4uZm9vdGVyLXR3by1jb2wge1xuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0KSB7XG4gICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgICAmOmZpcnN0LWNoaWxkIHt9XG4gICAgfVxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQocGhvbmUtbGFuZHNjYXBlKSB7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MCU7XG4gICAgICAgIH1cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9vdGVyLW5ld3NsZXR0ZXItY29sIHtcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4ub25ib2FyZGluZy1yZXF1ZXN0IHtcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1saWdodDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm5ld3NsZXR0ZXItd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgJl9faW5uZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHBob25lLWxhbmRzY2FwZSkge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbnB1dCB7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmF5LTMwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChwaG9uZS1sYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIGZsZXg6IGluaGVyaXQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQocGhvbmUtbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNmM4ZmZmO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNmM4ZmZmO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzZjOGZmZjtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICM2YzhmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi51c2VmdWwtbGlua3Mtc2VjdGlvbiB7XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChwaG9uZS1sYW5kc2NhcGUpIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oKTtcbiAgICAgICAgLy8gd2lkdGg6IDMzLjMzMzMlO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxLjA1KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHBob25lLWxhbmRzY2FwZSkge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cblxuLmVycm9yLWVtYWlsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMjRweDtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLmVtYWlsLXJlc3BvbnNlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMjRweDtcbiAgICBtYXJnaW46IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgJi5zdWNjZXNzIHtcbiAgICAgICAgY29sb3I6ICRzdWNjZXNzO1xuICAgIH1cbiAgICAmLmZhaWx1cmUge1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgIH1cbn0iLCIvLyBUb2dnbGVzXG4vL1xuLy8gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGdsb2JhbCB2YXJpYWJsZXMgdG8gZW5hYmxlIGNlcnRhaW4gdGhlbWUgZmVhdHVyZXMuXG4vLyBWZW5kb3JcbkBpbXBvcnQgXCIuL3ZhcmlhYmxlc1wiO1xuQG1peGluIGFsaWduLWNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXG59XG5cblxuQG1peGluIHRyYW5zaXRpb24oJHdoYXQ6IGFsbCwgJHRpbWU6IDAuMnMsICRob3c6IGVhc2UtaW4tb3V0KSB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkd2hhdCAkdGltZSAkaG93O1xuICAgIC1tb3otdHJhbnNpdGlvbjogJHdoYXQgJHRpbWUgJGhvdztcbiAgICAtbXMtdHJhbnNpdGlvbjogJHdoYXQgJHRpbWUgJGhvdztcbiAgICAtby10cmFuc2l0aW9uOiAkd2hhdCAkdGltZSAkaG93O1xuICAgIHRyYW5zaXRpb246ICR3aGF0ICR0aW1lICRob3c7XG59XG5cbkBtaXhpbiBidXR0b25TdHlsZSgkYnV0dG9uKSB7XG4gICAgQGluY2x1ZGUgZm9udHMoJHRleHQtYmFzZSwgMjBweCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnk7XG4gICAgQGluY2x1ZGUgYm9yZGVyUmFkaXVzKCk7XG4gICAgQGluY2x1ZGUgYm94U2hhZG93KDAsIDRweCwgOHB4LCAwKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgQGlmICRidXR0b249PWZpbGxlZCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICAgICAgICBjb2xvcjogJGxpZ2h0O1xuICAgIH1cbiAgICBAZWxzZSBpZiAkYnV0dG9uPT1zdHJva2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5O1xuICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIEBlbHNlIGlmICRidXR0b249PXN1Y2Nlc3Mge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjOTFDNzE0O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTFDNzE0O1xuICAgICAgICBjb2xvcjogJGxpZ2h0O1xuICAgIH1cbiAgICBAZWxzZSBpZiAkYnV0dG9uPT1yZXNldCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNDQ0RFRUM7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0NDREVFQztcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGJ1dHRvbj09ZGlzYWJsZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRsaWdodC1ncmF5O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHQtZ3JheTtcbiAgICAgICAgY29sb3I6ICM5ZTllOWU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIEBlbHNlIGlmICRidXR0b249PWRhbmdlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNEMzI5Mjk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMzI5Mjk7XG4gICAgICAgIGNvbG9yOiAkbGlnaHQ7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxufVxuXG5AbWl4aW4gZm9udHMoJHNpemUsICRoZWlnaHQpIHtcbiAgICBmb250LXNpemU6ICRzaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xufVxuXG5AbWl4aW4gYm94U2hhZG93KCRsZWZ0OmxlZnQsICRyaWdodDpyaWdodCwgJHNwcmVhZDpzcHJlYWQsICRibHVyOmJsdXIsICRjb2xvcjpyZ2JhKDAsIDAsIDAsIDAuMDUpKSB7XG4gICAgYm94LXNoYWRvdzogJGxlZnQgJHJpZ2h0ICRzcHJlYWQgJGJsdXIgJGNvbG9yO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJGxlZnQgJHJpZ2h0ICRzcHJlYWQgJGJsdXIgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzogJGxlZnQgJHJpZ2h0ICRzcHJlYWQgJGJsdXIgJGNvbG9yO1xufVxuQG1peGluIGJyZWFrcG9pbnQoJGJyZWFrcG9pbnQpIHtcbiAgICBAaWYgJGJyZWFrcG9pbnQ9PXBob25lIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRwaG9uZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGVsc2UgaWYgJGJyZWFrcG9pbnQ9PXBob25lLXNtIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRwaG9uZS1zbSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGVsc2UgaWYgJGJyZWFrcG9pbnQ9PXBob25lLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkcGhvbmUtbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAZWxzZSBpZiAkYnJlYWtwb2ludD09dGFibGV0IHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBlbHNlIGlmICRicmVha3BvaW50PT1sYXB0b3B2aWV3IHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRsYXB0b3B2aWV3KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAZWxzZSBpZiAkYnJlYWtwb2ludD09bGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRsYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBlbHNlIGlmICRicmVha3BvaW50PT1kZWtzdG9wIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRkZWtzdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAZWxzZSBpZiAkYnJlYWtwb2ludD09bGFyZ2Uge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJGxhcmdlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5AbWl4aW4gbGluZS1jbGFtcCgkbGluZSkge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogJGxpbmU7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWl4aW4gYm9yZGVyUmFkaXVzKCkge1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn0iXX0= */"] });


/***/ }),

/***/ 9761:
/*!**************************************************************!*\
  !*** ./src/app/components/layout/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _utility_language_selection_language_selection_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility/language-selection/language-selection.component */ 8769);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8699);




class NavbarComponent {
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 50, vars: 36, consts: [[1, "top-strip"], [1, "top-strip__container", "container", "d-flex", "align-items-center", "justify-content-between"], [1, "top-strip__left", "top-strip__left--web"], ["href", "https://www.meity.gov.in/", "target", "_blank"], ["applazyload", "", "src", "https://static.umang.gov.in/cdn/landing/theme/icons/meit-header.svg", "alt", "meity", "width", "179px", "height", "40px"], ["href", "https://amritmahotsav.nic.in/", "target", "_blank"], ["applazyload", "", "src", "https://static.umang.gov.in/cdn/landing/theme/icons/akam-logo.svg", "alt", "akam", "width", "70px", "height", "38px"], ["href", "https://www.digitalindia.gov.in/", "target", "_blank", 1, "di-logo"], ["src", "assets/images/di.svg", "alt", "digital india", "width", "61px", "height", "32px"], [1, "top-strip__right"], [1, "main-navigation", "d-flex", "align-items-center"], [1, "container", "d-flex", "align-items-center", "justify-content-between"], [1, "main-navigation__left", "d-flex", "align-items-center"], ["routerLink", "/"], ["src", "assets/images/logo.svg", "alt", "UMANG", "width", "191px", "height", "55px"], ["href", "https://www.g20.org/en/", "target", "_blank"], ["src", "assets/images/g20.png", "alt", "g20", "height", "55px"], [1, "main-navigation__right"], [1, "d-flex", "gap-40", "p-0", "mb-0", "list-unstyled"], ["routerLink", "/", 3, "title"], ["routerLink", "/about-us", "routerLinkActive", "active", 3, "title"], ["routerLink", "/services", "routerLinkActive", "active", 3, "title"], ["routerLink", "/dashboard", "routerLinkActive", "active", 3, "title"], ["routerLink", "/our-partners", "routerLinkActive", "active", 3, "title"], ["routerLink", "/", "routerLinkActive", "active", 1, "btn", "btn-primary", 3, "title"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-language-selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10)(12, "div", 11)(13, "div", 12)(14, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 17)(19, "ul", 18)(20, "li")(21, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li")(26, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li")(31, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li")(36, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li")(41, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li")(46, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 12, "pages.home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 14, "pages.home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 16, "pages.about-us"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 18, "pages.about-us"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 20, "pages.services"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 22, "pages.services"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 24, "pages.dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 26, "pages.dashboard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 28, "pages.our-partners"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 30, "pages.our-partners"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 32, "pages.login"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](49, 34, "pages.login"));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _utility_language_selection_language_selection_component__WEBPACK_IMPORTED_MODULE_0__.LanguageSelectionComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["@font-face {\n  font-family: \"poppinsbold\";\n  src: local(\"poppins-bold-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-bold-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinslight\";\n  src: local(\"poppins-light-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-light-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-display: swap;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"poppinsmedium\";\n  src: local(\"poppins-medium-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-medium-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-medium-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinsregular\";\n  src: local(\"poppins-regular-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-regular-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinssemibold\";\n  src: local(\"poppins-semibold-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-semibold-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-semibold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\nbody[_ngcontent-%COMP%] {\n  --f-xxs: 12px;\n  --f-xs: 13px;\n  --f-s: 14px;\n  --f-a: 15px;\n  --f-m: 16px;\n  --f-l: 18px;\n  --f-xl: 22px;\n  --f-xxl: 25px;\n  --f-xxxl: 30px;\n  --t-left: left;\n  --t-center: center;\n  --p-right: right;\n  --f-key: 24px;\n}\nbody.small[_ngcontent-%COMP%] {\n  --f-xxs: 10px;\n  --f-xs: 11px;\n  --f-s: 12px;\n  --f-a: 13px;\n  --f-m: 14px;\n  --f-l: 15px;\n  --f-xl: 16px;\n  --f-xxl: 17px;\n  --f-xxxl: 25px;\n  --f-key: 20px;\n  --f-xxxl: 25px;\n  --f-download: 30px;\n}\nbody.normal[_ngcontent-%COMP%] {\n  --f-xxs: 12px;\n  --f-xs: 13px;\n  --f-s: 14px;\n  --f-a: 15px;\n  --f-m: 16px;\n  --f-l: 17px;\n  --f-xl: 18px;\n  --f-xxl: 19px;\n  --f-xxxl: 30px;\n  --f-key: 24px;\n  --f-download: 40px;\n}\nbody.large[_ngcontent-%COMP%] {\n  --f-xxs: 14px;\n  --f-xs: 15px;\n  --f-s: 16px;\n  --f-a: 17px;\n  --f-m: 18px;\n  --f-l: 19px;\n  --f-xl: 20px;\n  --f-xxl: 21px;\n  --f-xxxl: 35px;\n  --f-key: 28px;\n  --f-download: 35px;\n}\n@font-face {\n  font-family: \"poppinsbold\";\n  src: local(\"poppins-bold-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-bold-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinslight\";\n  src: local(\"poppins-light-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-light-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-display: swap;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"poppinsmedium\";\n  src: local(\"poppins-medium-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-medium-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-medium-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinsregular\";\n  src: local(\"poppins-regular-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-regular-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinssemibold\";\n  src: local(\"poppins-semibold-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-semibold-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-semibold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\nbody[_ngcontent-%COMP%] {\n  --f-xxs: 12px;\n  --f-xs: 13px;\n  --f-s: 14px;\n  --f-a: 15px;\n  --f-m: 16px;\n  --f-l: 18px;\n  --f-xl: 22px;\n  --f-xxl: 25px;\n  --f-xxxl: 30px;\n  --t-left: left;\n  --t-center: center;\n  --p-right: right;\n  --f-key: 24px;\n}\nbody.small[_ngcontent-%COMP%] {\n  --f-xxs: 10px;\n  --f-xs: 11px;\n  --f-s: 12px;\n  --f-a: 13px;\n  --f-m: 14px;\n  --f-l: 15px;\n  --f-xl: 16px;\n  --f-xxl: 17px;\n  --f-xxxl: 25px;\n  --f-key: 20px;\n  --f-xxxl: 25px;\n  --f-download: 30px;\n}\nbody.normal[_ngcontent-%COMP%] {\n  --f-xxs: 12px;\n  --f-xs: 13px;\n  --f-s: 14px;\n  --f-a: 15px;\n  --f-m: 16px;\n  --f-l: 17px;\n  --f-xl: 18px;\n  --f-xxl: 19px;\n  --f-xxxl: 30px;\n  --f-key: 24px;\n  --f-download: 40px;\n}\nbody.large[_ngcontent-%COMP%] {\n  --f-xxs: 14px;\n  --f-xs: 15px;\n  --f-s: 16px;\n  --f-a: 17px;\n  --f-m: 18px;\n  --f-l: 19px;\n  --f-xl: 20px;\n  --f-xxl: 21px;\n  --f-xxxl: 35px;\n  --f-key: 28px;\n  --f-download: 35px;\n}\n.top-strip[_ngcontent-%COMP%] {\n  background: #00599f;\n}\n.top-strip__container[_ngcontent-%COMP%] {\n  min-height: 50px;\n}\n.top-strip__left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 15px;\n}\n.top-strip__left--web[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media (max-width: 767px) {\n  .top-strip__left--web[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.top-strip__left--web[_ngcontent-%COMP%]   .di-logo[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 0px 10px;\n  border-radius: 5px;\n  height: 40px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.top-strip__left--web[_ngcontent-%COMP%]   .di-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80%;\n}\n.top-strip__left--mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 340px) {\n  .top-strip__left--mobile[_ngcontent-%COMP%]   a.di-logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .top-strip__left--mobile[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .top-strip__left--mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n  .top-strip__left--mobile[_ngcontent-%COMP%]   .di-logo[_ngcontent-%COMP%] {\n    background: #ffffff;\n    padding: 0px 10px;\n    border-radius: 5px;\n    height: 40px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n  }\n}\n.main-navigation[_ngcontent-%COMP%] {\n  height: 80px;\n  box-shadow: 0px 2px 4px -2px rgba(24, 39, 75, 0.12);\n  background: #ffffff;\n}\n.main-navigation__left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.main-navigation__left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:last-child) {\n  padding-right: 1rem;\n  border-right: 1px solid #e9e9e9;\n  margin-right: 1rem;\n}\n.main-navigation__right[_ngcontent-%COMP%]   .gap-40[_ngcontent-%COMP%] {\n  gap: 40px;\n}\n.main-navigation__right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.main-navigation__right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  text-decoration: none;\n  color: #1a1a1a;\n  font-family: \"poppinsmedium\";\n  position: relative;\n}\n.main-navigation__right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.btn)::after {\n  content: \"\";\n  display: block;\n  width: 0;\n  height: 1.5px;\n  position: absolute;\n  bottom: -5px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  background: #00599f;\n  transition: all 0.2s ease-in-out;\n}\n.main-navigation__right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.btn):hover, .main-navigation__right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.btn).active {\n  color: #00599f;\n}\n.main-navigation__right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.btn):hover::after, .main-navigation__right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.btn).active::after {\n  width: 100%;\n}\n.main-navigation__right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.btn[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL192YXJpYWJsZXMuc2NzcyIsIm5hdmJhci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ0E7RUFDSSwwQkFBQTtFQUNBLGtPQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDOUNKO0FEaURBO0VBQ0ksMkJBQUE7RUFDQSxxT0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQy9DSjtBRGtEQTtFQUNJLDRCQUFBO0VBQ0Esd09BQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNoREo7QURtREE7RUFDSSw2QkFBQTtFQUNBLDJPQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDakRKO0FEb0RBO0VBQ0ksOEJBQUE7RUFDQSw4T0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2xESjtBRHFEQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ25ESjtBRHNEQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNuREo7QURzREE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNuREo7QURzREE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7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LFdBQUE7QUEyTDVCO0FBdkxnQjtFQUNJLGNEakhaO0FDMFNSIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250OidETSBTYW5zJyxcbnNhbnMtc2VyaWY7XG4kbGlnaHQ6ICNmZmZmZmY7XG4kZ3JheS0zMDA6ICNERERFRTM7XG4kZ3JheS0yMDA6ICNlZWVlZWU7XG4kYmxhY2s6IzAwMDAwMDtcbiRncmF5LTgwMDogIzFhMWExYTtcbiRncmF5LTYwMDojNGM0YzRjO1xuJHByaW1hcnk6ICMwMDU5OWY7XG4kcHJpbWFyeS1saWdodDogcmdiYSgwLCA5MCwgMTU5LCAwLjEwKTtcblxuJHJlZ3VsYXI6NDAwO1xuJHNlbWktYm9sZDo1MDA7XG4kYm9sZDo2MDA7XG4kcGhvbmUtc206MzYwcHg7XG4kcGhvbmU6IDQ4MHB4O1xuJHBob25lLWxhbmRzY2FwZTogNTc2cHg7XG4kdGFibGV0OiA3NjdweDtcbiRsYXB0b3B2aWV3OiA5OTFweDtcbiRsYXB0b3A6IDEwMjRweDtcbiRkZWtzdG9wOiAxMjgwcHg7XG4kbGFyZ2U6IDEzNjBweDtcblxuJHNjaGVtZS1wcmltYXJ5OiM2RkNGOTc7XG4kc2NoZW1lLWxpZ2h0OiNFOUZCRUU7XG4kc2NoZW1lLWdyYXk6IzVCNjM2NTtcblxuXG4kZGFuZ2VyOiByZ2IoMjU1LCA3NywgOTkpO1xuJHJlZDojZmYzYjNiO1xuJHN1Y2Nlc3M6ICMzRDkwM0Y7XG5cbiRncmF5LWJyZWFkY3J1bWI6I2Y5ZmFmYjtcbiRmb250LWxpZ2h0Oidwb3BwaW5zbGlnaHQnO1xuJGZvbnQtcmVndWxhcjoncG9wcGluc3JlZ3VsYXInO1xuJGZvbnQtbWVkaXVtOidwb3BwaW5zbWVkaXVtJztcbiRmb250LWJvbGQ6J3BvcHBpbnNib2xkJztcbiRmb250LXNlbWlib2xkOidwb3BwaW5zc2VtaWJvbGQnO1xuJHRleHQteHM6MC43NXJlbTsgLy8gMTJweFxuJHRleHQtc206MC44NzVyZW07IC8vIDE0cHhcbiR0ZXh0LWJhc2U6MXJlbTsgLy8gMTZweDtcbiR0ZXh0LWxnOjEuMTI1cmVtOyAvLyAxOHB4XG4kdGV4dC14bDoxLjI1cmVtOyAvLyAyMHB4XG4kdGV4dC0yMjoxLjM3NXJlbTsgLy8gMjJweFxuJHRleHQteHhsOjEuNXJlbTsgLy8gMjRweFxuJHRleHQtMzA6MS44NzVyZW07IC8vIDMwcHhcbiR0ZXh0LTQwOjIuNXJlbTsgLy8gNDBweFxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zYm9sZCc7XG4gICAgc3JjOiBsb2NhbCgncG9wcGlucy1ib2xkLXdlYmZvbnQnKSx1cmwoJ2h0dHBzOi8vc3RhdGljLnVtYW5nLmdvdi5pbi9jZG4vbGFuZGluZy9mb250cy9wb3BwaW5zLWJvbGQtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCdodHRwczovL3N0YXRpYy51bWFuZy5nb3YuaW4vY2RuL2xhbmRpbmcvZm9udHMvcG9wcGlucy1ib2xkLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zbGlnaHQnO1xuICAgIHNyYzogbG9jYWwoJ3BvcHBpbnMtbGlnaHQtd2ViZm9udCcpLHVybCgnaHR0cHM6Ly9zdGF0aWMudW1hbmcuZ292LmluL2Nkbi9sYW5kaW5nL2ZvbnRzL3BvcHBpbnMtbGlnaHQtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCdodHRwczovL3N0YXRpYy51bWFuZy5nb3YuaW4vY2RuL2xhbmRpbmcvZm9udHMvcG9wcGlucy1saWdodC13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAncG9wcGluc21lZGl1bSc7XG4gICAgc3JjOiBsb2NhbCgncG9wcGlucy1tZWRpdW0td2ViZm9udCcpLHVybCgnaHR0cHM6Ly9zdGF0aWMudW1hbmcuZ292LmluL2Nkbi9sYW5kaW5nL2ZvbnRzL3BvcHBpbnMtbWVkaXVtLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnaHR0cHM6Ly9zdGF0aWMudW1hbmcuZ292LmluL2Nkbi9sYW5kaW5nL2ZvbnRzL3BvcHBpbnMtbWVkaXVtLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zcmVndWxhcic7XG4gICAgc3JjOiBsb2NhbCgncG9wcGlucy1yZWd1bGFyLXdlYmZvbnQnKSx1cmwoJ2h0dHBzOi8vc3RhdGljLnVtYW5nLmdvdi5pbi9jZG4vbGFuZGluZy9mb250cy9wb3BwaW5zLXJlZ3VsYXItd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCdodHRwczovL3N0YXRpYy51bWFuZy5nb3YuaW4vY2RuL2xhbmRpbmcvZm9udHMvcG9wcGlucy1yZWd1bGFyLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zc2VtaWJvbGQnO1xuICAgIHNyYzogbG9jYWwoJ3BvcHBpbnMtc2VtaWJvbGQtd2ViZm9udCcpLHVybCgnaHR0cHM6Ly9zdGF0aWMudW1hbmcuZ292LmluL2Nkbi9sYW5kaW5nL2ZvbnRzL3BvcHBpbnMtc2VtaWJvbGQtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCdodHRwczovL3N0YXRpYy51bWFuZy5nb3YuaW4vY2RuL2xhbmRpbmcvZm9udHMvcG9wcGlucy1zZW1pYm9sZC13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbmJvZHkge1xuICAgIC0tZi14eHM6IDEycHg7XG4gICAgLS1mLXhzOiAxM3B4O1xuICAgIC0tZi1zOiAxNHB4O1xuICAgIC0tZi1hOiAxNXB4O1xuICAgIC0tZi1tOiAxNnB4O1xuICAgIC0tZi1sOiAxOHB4O1xuICAgIC0tZi14bDogMjJweDtcbiAgICAtLWYteHhsOiAyNXB4O1xuICAgIC0tZi14eHhsOiAzMHB4O1xuICAgIC0tdC1sZWZ0OiBsZWZ0O1xuICAgIC0tdC1jZW50ZXI6IGNlbnRlcjtcbiAgICAtLXAtcmlnaHQ6IHJpZ2h0O1xuICAgIC0tZi1rZXk6IDI0cHg7XG59XG5cbmJvZHkuc21hbGwge1xuICAgIC0tZi14eHM6IDEwcHg7XG4gICAgLS1mLXhzOiAxMXB4O1xuICAgIC0tZi1zOiAxMnB4O1xuICAgIC0tZi1hOiAxM3B4O1xuICAgIC0tZi1tOiAxNHB4O1xuICAgIC0tZi1sOiAxNXB4O1xuICAgIC0tZi14bDogMTZweDtcbiAgICAtLWYteHhsOiAxN3B4O1xuICAgIC0tZi14eHhsOiAyNXB4O1xuICAgIC0tZi1rZXk6IDIwcHg7XG4gICAgLS1mLXh4eGw6IDI1cHg7XG4gICAgLS1mLWRvd25sb2FkOiAzMHB4O1xufVxuXG5ib2R5Lm5vcm1hbCB7XG4gICAgLS1mLXh4czogMTJweDtcbiAgICAtLWYteHM6IDEzcHg7XG4gICAgLS1mLXM6IDE0cHg7XG4gICAgLS1mLWE6IDE1cHg7XG4gICAgLS1mLW06IDE2cHg7XG4gICAgLS1mLWw6IDE3cHg7XG4gICAgLS1mLXhsOiAxOHB4O1xuICAgIC0tZi14eGw6IDE5cHg7XG4gICAgLS1mLXh4eGw6IDMwcHg7XG4gICAgLS1mLWtleTogMjRweDtcbiAgICAtLWYtZG93bmxvYWQ6IDQwcHg7XG59XG5cbmJvZHkubGFyZ2Uge1xuICAgIC0tZi14eHM6IDE0cHg7XG4gICAgLS1mLXhzOiAxNXB4O1xuICAgIC0tZi1zOiAxNnB4O1xuICAgIC0tZi1hOiAxN3B4O1xuICAgIC0tZi1tOiAxOHB4O1xuICAgIC0tZi1sOiAxOXB4O1xuICAgIC0tZi14bDogMjBweDtcbiAgICAtLWYteHhsOiAyMXB4O1xuICAgIC0tZi14eHhsOiAzNXB4O1xuICAgIC0tZi1rZXk6IDI4cHg7XG4gICAgLS1mLWRvd25sb2FkOiAzNXB4O1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9taXhpbnMnO1xuLnRvcC1zdHJpcCB7XG4gICAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gICAgJl9fY29udGFpbmVyIHtcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICB9XG59XG5cbi50b3Atc3RyaXAge1xuICAgICZfX2xlZnQge1xuICAgICAgICBhIHtcbiAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYtLXdlYiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRpLWxvZ28ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRsaWdodDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYtLW1vYmlsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgJi5kaS1sb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6MzQwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kaS1sb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ubWFpbi1uYXZpZ2F0aW9uIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTJweCByZ2JhKDI0LCAzOSwgNzUsIDAuMTIpO1xuICAgIGJhY2tncm91bmQ6ICRsaWdodDtcbiAgICAmX19sZWZ0IHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTllOWU5O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19yaWdodCB7XG4gICAgICAgIC5nYXAtNDAge1xuICAgICAgICAgICAgZ2FwOjQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICR0ZXh0LWJhc2U7ICAgIFxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXktODAwO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1tZWRpdW07XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICY6bm90KC5idG4pIHtcbiAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIsJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRsaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8gVG9nZ2xlc1xuLy9cbi8vIFVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBnbG9iYWwgdmFyaWFibGVzIHRvIGVuYWJsZSBjZXJ0YWluIHRoZW1lIGZlYXR1cmVzLlxuLy8gVmVuZG9yXG5AaW1wb3J0IFwiLi92YXJpYWJsZXNcIjtcbkBtaXhpbiBhbGlnbi1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxufVxuXG5cbkBtaXhpbiB0cmFuc2l0aW9uKCR3aGF0OiBhbGwsICR0aW1lOiAwLjJzLCAkaG93OiBlYXNlLWluLW91dCkge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogJHdoYXQgJHRpbWUgJGhvdztcbiAgICAtbW96LXRyYW5zaXRpb246ICR3aGF0ICR0aW1lICRob3c7XG4gICAgLW1zLXRyYW5zaXRpb246ICR3aGF0ICR0aW1lICRob3c7XG4gICAgLW8tdHJhbnNpdGlvbjogJHdoYXQgJHRpbWUgJGhvdztcbiAgICB0cmFuc2l0aW9uOiAkd2hhdCAkdGltZSAkaG93O1xufVxuXG5AbWl4aW4gYnV0dG9uU3R5bGUoJGJ1dHRvbikge1xuICAgIEBpbmNsdWRlIGZvbnRzKCR0ZXh0LWJhc2UsIDIwcHgpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5O1xuICAgIEBpbmNsdWRlIGJvcmRlclJhZGl1cygpO1xuICAgIEBpbmNsdWRlIGJveFNoYWRvdygwLCA0cHgsIDhweCwgMCk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIEBpZiAkYnV0dG9uPT1maWxsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgICAgICAgY29sb3I6ICRsaWdodDtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGJ1dHRvbj09c3Ryb2tlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeTtcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkYnV0dG9uPT1zdWNjZXNzIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzkxQzcxNDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzkxQzcxNDtcbiAgICAgICAgY29sb3I6ICRsaWdodDtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGJ1dHRvbj09cmVzZXQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQ0NERUVDO1xuICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0RFRUM7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIEBlbHNlIGlmICRidXR0b249PWRpc2FibGUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHQtZ3JheTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0LWdyYXk7XG4gICAgICAgIGNvbG9yOiAjOWU5ZTllO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkYnV0dG9uPT1kYW5nZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRDMyOTI5O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDMyOTI5O1xuICAgICAgICBjb2xvcjogJGxpZ2h0O1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbn1cblxuQG1peGluIGZvbnRzKCRzaXplLCAkaGVpZ2h0KSB7XG4gICAgZm9udC1zaXplOiAkc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJGhlaWdodDtcbn1cblxuQG1peGluIGJveFNoYWRvdygkbGVmdDpsZWZ0LCAkcmlnaHQ6cmlnaHQsICRzcHJlYWQ6c3ByZWFkLCAkYmx1cjpibHVyLCAkY29sb3I6cmdiYSgwLCAwLCAwLCAwLjA1KSkge1xuICAgIGJveC1zaGFkb3c6ICRsZWZ0ICRyaWdodCAkc3ByZWFkICRibHVyICRjb2xvcjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRsZWZ0ICRyaWdodCAkc3ByZWFkICRibHVyICRjb2xvcjtcbiAgICAtbW96LWJveC1zaGFkb3c6ICRsZWZ0ICRyaWdodCAkc3ByZWFkICRibHVyICRjb2xvcjtcbn1cbkBtaXhpbiBicmVha3BvaW50KCRicmVha3BvaW50KSB7XG4gICAgQGlmICRicmVha3BvaW50PT1waG9uZSB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkcGhvbmUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBlbHNlIGlmICRicmVha3BvaW50PT1waG9uZS1zbSB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkcGhvbmUtc20pIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBlbHNlIGlmICRicmVha3BvaW50PT1waG9uZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHBob25lLWxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGVsc2UgaWYgJGJyZWFrcG9pbnQ9PXRhYmxldCB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAZWxzZSBpZiAkYnJlYWtwb2ludD09bGFwdG9wdmlldyB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbGFwdG9wdmlldykge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGVsc2UgaWYgJGJyZWFrcG9pbnQ9PWxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAZWxzZSBpZiAkYnJlYWtwb2ludD09ZGVrc3RvcCB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkZGVrc3RvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGVsc2UgaWYgJGJyZWFrcG9pbnQ9PWxhcmdlIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRsYXJnZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuQG1peGluIGxpbmUtY2xhbXAoJGxpbmUpIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6ICRsaW5lO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1peGluIGJvcmRlclJhZGl1cygpIHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59Il19 */"] });


/***/ }),

/***/ 4119:
/*!********************************************************************************!*\
  !*** ./src/app/components/sections/banner-section/banner-section.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerSectionComponent": () => (/* binding */ BannerSectionComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_services_http_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http-helpers */ 2065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-helper.service */ 1063);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ 6858);







class BannerSectionComponent {
    constructor(apiHelperService, translateService, httpService) {
        this.apiHelperService = apiHelperService;
        this.translateService = translateService;
        this.httpService = httpService;
    }
    ngOnInit() {
        this.getBannerImages();
        this.httpService
            .sendGetRequest({
            url: 'https://reqres.in/api/users?page=2',
        })
            .subscribe({
            next: (users) => {
                console.log(users);
            },
        });
    }
    getBannerImages() {
        this.fetchBannerSubs = this.httpService
            .sendGetRequest({
            url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.CORE_API_URL}/fetchbanners`,
            params: (0,src_app_services_http_helpers__WEBPACK_IMPORTED_MODULE_1__.getBannerParams)(this.translateService.currentLang),
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(this.apiHelperService.getApiSuccessFilterFn()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(({ pd: { listHeroSpace } }) => listHeroSpace))
            .subscribe({
            next: (banners) => {
                this.banners = banners;
            },
        });
    }
    ngOnDestroy() {
        this.fetchBannerSubs.unsubscribe();
    }
}
BannerSectionComponent.ɵfac = function BannerSectionComponent_Factory(t) { return new (t || BannerSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_api_helper_service__WEBPACK_IMPORTED_MODULE_2__.ApiHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService)); };
BannerSectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: BannerSectionComponent, selectors: [["app-banner-section"]], decls: 2, vars: 0, template: function BannerSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "banner-section works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5uZXItc2VjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9085:
/*!****************************************************************************************!*\
  !*** ./src/app/components/sections/categories-section/categories-section.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesSectionComponent": () => (/* binding */ CategoriesSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/categories.service */ 501);


class CategoriesSectionComponent {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    ngOnInit() {
        this.getCategories();
    }
    getCategories() {
        this.getCategoriesSubs = this.categoriesService
            .getAllCategories()
            .subscribe({
            next: (categories) => {
                this.categories = categories;
            },
        });
    }
    ngOnDestroy() {
        this.getCategoriesSubs.unsubscribe();
    }
}
CategoriesSectionComponent.ɵfac = function CategoriesSectionComponent_Factory(t) { return new (t || CategoriesSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_0__.CategoriesService)); };
CategoriesSectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoriesSectionComponent, selectors: [["app-categories-section"]], decls: 2, vars: 0, template: function CategoriesSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "categories-section works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7980:
/*!****************************************************************************************************!*\
  !*** ./src/app/components/sections/popular-services-section/popular-services-section.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopularServicesSectionComponent": () => (/* binding */ PopularServicesSectionComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_services_http_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http-helpers */ 2065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ 6858);





class PopularServicesSectionComponent {
    constructor(translateService, httpService) {
        this.translateService = translateService;
        this.httpService = httpService;
    }
    ngOnInit() {
        this.getPopularServices();
    }
    getPopularServices() {
        this.popularServiceSubs = this.httpService
            .sendGetRequest({
            url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.CORE_API_URL}/popularservices`,
            params: (0,src_app_services_http_helpers__WEBPACK_IMPORTED_MODULE_1__.getBannerParams)(this.translateService.currentLang, 'app'),
        })
            .subscribe({
            next: (popularServices) => {
                this.popularServices = popularServices;
            },
        });
    }
    ngOnDestroy() {
        this.popularServiceSubs.unsubscribe();
    }
}
PopularServicesSectionComponent.ɵfac = function PopularServicesSectionComponent_Factory(t) { return new (t || PopularServicesSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService)); };
PopularServicesSectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PopularServicesSectionComponent, selectors: [["app-popular-services-section"]], decls: 2, vars: 0, template: function PopularServicesSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "popular-services-section works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3B1bGFyLXNlcnZpY2VzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6521:
/*!****************************************************************************************!*\
  !*** ./src/app/components/sections/statistics-section/statistics-section.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticsSectionComponent": () => (/* binding */ StatisticsSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_services_http_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http-helpers */ 2065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ 6858);






class StatisticsSectionComponent {
    constructor(httpService) {
        this.httpService = httpService;
    }
    ngOnInit() {
        this.getAllStatistics();
    }
    getAllStatistics() {
        this.allStatsSubs = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)([
            this.getResultJson(),
            this.getServiceStats(),
        ]).subscribe({
            next: ([resultStats, serviceStats]) => {
                this.allStatistics = { ...resultStats, ...serviceStats };
                this.allStatistics.serviceStats;
            },
        });
    }
    getResultJson() {
        const resultJsonParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().append('api_key', src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.resultsJSONApiKey);
        return this.httpService
            .sendGetRequest({
            params: resultJsonParams,
            headers: (0,src_app_services_http_helpers__WEBPACK_IMPORTED_MODULE_1__.getAuthHeaders)(),
            url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_BASE_URL}/api/queries/45/results.json`,
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(({ query_result }) => {
            const { data: { rows }, } = query_result;
            return {
                transactions: rows[0].Transactions,
                registeredUsers: rows[0].total_registered_users,
            };
        }));
    }
    getServiceStats() {
        return this.httpService
            .sendGetRequest({
            url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API_BASE_URL}/getServiceStats`,
            headers: (0,src_app_services_http_helpers__WEBPACK_IMPORTED_MODULE_1__.getAuthHeaders)(),
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(({ rs }) => rs.toLowerCase() === 's'), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(({ pd }) => {
            const { services_stats: { departments, services }, } = pd;
            const serviceStats = {
                billPayments: +services.utility_bill,
                otherServices: (+services.central || 0) +
                    (+services.state || 0) +
                    (+services.serviceplus || 0),
            };
            const deptStats = {
                state: +departments.state,
                central: +departments.central,
            };
            return { serviceStats, deptStats };
        }));
    }
    ngOnDestroy() {
        this.allStatsSubs.unsubscribe();
    }
}
StatisticsSectionComponent.ɵfac = function StatisticsSectionComponent_Factory(t) { return new (t || StatisticsSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService)); };
StatisticsSectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: StatisticsSectionComponent, selectors: [["app-statistics-section"]], decls: 2, vars: 0, template: function StatisticsSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "statistics-section works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0aXN0aWNzLXNlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5450:
/*!******************************************************************************************************!*\
  !*** ./src/app/components/sections/trending-services-section/trending-services-section.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendingServicesSectionComponent": () => (/* binding */ TrendingServicesSectionComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_services_http_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http-helpers */ 2065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-helper.service */ 1063);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ 6858);







class TrendingServicesSectionComponent {
    constructor(apiHelperService, translateService, httpService) {
        this.apiHelperService = apiHelperService;
        this.translateService = translateService;
        this.httpService = httpService;
    }
    ngOnInit() {
        this.getTrendingServices();
    }
    getTrendingServices() {
        this.trendingServiceSubs = this.httpService
            .sendGetRequest({
            url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.CORE_API_URL}/trendingservicecard`,
            params: (0,src_app_services_http_helpers__WEBPACK_IMPORTED_MODULE_1__.getHomeServicesParams)(this.translateService.currentLang, '3'),
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(this.apiHelperService.getApiSuccessFilterFn()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(({ pd: { serviceCardList } }) => serviceCardList))
            .subscribe({
            next: (trendingServices) => {
                this.trendingServices = trendingServices;
            },
        });
    }
    ngOnDestroy() {
        this.trendingServiceSubs.unsubscribe();
    }
}
TrendingServicesSectionComponent.ɵfac = function TrendingServicesSectionComponent_Factory(t) { return new (t || TrendingServicesSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_api_helper_service__WEBPACK_IMPORTED_MODULE_2__.ApiHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService)); };
TrendingServicesSectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: TrendingServicesSectionComponent, selectors: [["app-trending-services-section"]], decls: 2, vars: 0, template: function TrendingServicesSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "trending-services-section works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmVuZGluZy1zZXJ2aWNlcy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 339:
/*!**************************************************************************************!*\
  !*** ./src/app/components/sections/whats-new-section/whats-new-section.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhatsNewSectionComponent": () => (/* binding */ WhatsNewSectionComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_services_http_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/http-helpers */ 2065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-helper.service */ 1063);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ 6858);







class WhatsNewSectionComponent {
    constructor(apiHelperService, translateService, httpService) {
        this.apiHelperService = apiHelperService;
        this.translateService = translateService;
        this.httpService = httpService;
    }
    ngOnInit() {
        this.getWhatsNewServices();
    }
    getWhatsNewServices() {
        this.whatsNewServiceSubs = this.httpService
            .sendGetRequest({
            url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.CORE_API_URL}/newandupdatedservicecard`,
            params: (0,src_app_services_http_helpers__WEBPACK_IMPORTED_MODULE_1__.getHomeServicesParams)(this.translateService.currentLang, '2'),
        })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(this.apiHelperService.getApiSuccessFilterFn()), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(({ pd: { serviceCardList } }) => serviceCardList))
            .subscribe({
            next: (whatsNewServices) => {
                this.whatsNewServices = whatsNewServices;
            },
        });
    }
    ngOnDestroy() {
        this.whatsNewServiceSubs.unsubscribe();
    }
}
WhatsNewSectionComponent.ɵfac = function WhatsNewSectionComponent_Factory(t) { return new (t || WhatsNewSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_api_helper_service__WEBPACK_IMPORTED_MODULE_2__.ApiHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService)); };
WhatsNewSectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: WhatsNewSectionComponent, selectors: [["app-whats-new-section"]], decls: 2, vars: 0, template: function WhatsNewSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "whats-new-section works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aGF0cy1uZXctc2VjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9856:
/*!***************************************************************************!*\
  !*** ./src/app/components/utility/error-dialog/error-dialog.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorDialogComponent": () => (/* binding */ ErrorDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ErrorDialogComponent {
}
ErrorDialogComponent.ɵfac = function ErrorDialogComponent_Factory(t) { return new (t || ErrorDialogComponent)(); };
ErrorDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorDialogComponent, selectors: [["app-error-dialog"]], decls: 2, vars: 0, template: function ErrorDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error-dialog works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8769:
/*!***************************************************************************************!*\
  !*** ./src/app/components/utility/language-selection/language-selection.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageSelectionComponent": () => (/* binding */ LanguageSelectionComponent)
/* harmony export */ });
/* harmony import */ var _constants_language_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants/language-config */ 7397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ 8589);





function LanguageSelectionComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LanguageSelectionComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onLangChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const config_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", config_r2.translation, " - ", config_r2.langName, "");
} }
class LanguageSelectionComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.languageConfig = _constants_language_config__WEBPACK_IMPORTED_MODULE_0__.languageConfig;
    }
    ngOnInit() {
        this.initCurrentLang();
    }
    initCurrentLang() {
        this.currentLang = this.translateService.currentLang;
    }
    onLangChange() {
        this.translateService.use(this.currentLang);
        debugger;
    }
}
LanguageSelectionComponent.ɵfac = function LanguageSelectionComponent_Factory(t) { return new (t || LanguageSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
LanguageSelectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LanguageSelectionComponent, selectors: [["app-language-selection"]], decls: 7, vars: 2, consts: [[1, "lang-btn", 3, "matMenuTriggerFor"], ["width", "12", "height", "8", "viewBox", "0 0 12 8", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M1 1.5L6 6.5L11 1.5", "stroke", "white", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["menu", "matMenu"], ["class", "lang-btn-item text-start", 3, "click", 4, "ngFor", "ngForOf"], [1, "lang-btn-item", "text-start", 3, "click"]], template: function LanguageSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Language ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-menu", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LanguageSelectionComponent_button_6_Template, 2, 2, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.languageConfig);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuTrigger], styles: ["@font-face {\n  font-family: \"poppinsbold\";\n  src: local(\"poppins-bold-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-bold-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinslight\";\n  src: local(\"poppins-light-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-light-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-display: swap;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"poppinsmedium\";\n  src: local(\"poppins-medium-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-medium-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-medium-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinsregular\";\n  src: local(\"poppins-regular-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-regular-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinssemibold\";\n  src: local(\"poppins-semibold-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-semibold-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-semibold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\nbody[_ngcontent-%COMP%] {\n  --f-xxs: 12px;\n  --f-xs: 13px;\n  --f-s: 14px;\n  --f-a: 15px;\n  --f-m: 16px;\n  --f-l: 18px;\n  --f-xl: 22px;\n  --f-xxl: 25px;\n  --f-xxxl: 30px;\n  --t-left: left;\n  --t-center: center;\n  --p-right: right;\n  --f-key: 24px;\n}\nbody.small[_ngcontent-%COMP%] {\n  --f-xxs: 10px;\n  --f-xs: 11px;\n  --f-s: 12px;\n  --f-a: 13px;\n  --f-m: 14px;\n  --f-l: 15px;\n  --f-xl: 16px;\n  --f-xxl: 17px;\n  --f-xxxl: 25px;\n  --f-key: 20px;\n  --f-xxxl: 25px;\n  --f-download: 30px;\n}\nbody.normal[_ngcontent-%COMP%] {\n  --f-xxs: 12px;\n  --f-xs: 13px;\n  --f-s: 14px;\n  --f-a: 15px;\n  --f-m: 16px;\n  --f-l: 17px;\n  --f-xl: 18px;\n  --f-xxl: 19px;\n  --f-xxxl: 30px;\n  --f-key: 24px;\n  --f-download: 40px;\n}\nbody.large[_ngcontent-%COMP%] {\n  --f-xxs: 14px;\n  --f-xs: 15px;\n  --f-s: 16px;\n  --f-a: 17px;\n  --f-m: 18px;\n  --f-l: 19px;\n  --f-xl: 20px;\n  --f-xxl: 21px;\n  --f-xxxl: 35px;\n  --f-key: 28px;\n  --f-download: 35px;\n}\n@font-face {\n  font-family: \"poppinsbold\";\n  src: local(\"poppins-bold-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-bold-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinslight\";\n  src: local(\"poppins-light-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-light-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-display: swap;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"poppinsmedium\";\n  src: local(\"poppins-medium-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-medium-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-medium-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinsregular\";\n  src: local(\"poppins-regular-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-regular-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinssemibold\";\n  src: local(\"poppins-semibold-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-semibold-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-semibold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\nbody[_ngcontent-%COMP%] {\n  --f-xxs: 12px;\n  --f-xs: 13px;\n  --f-s: 14px;\n  --f-a: 15px;\n  --f-m: 16px;\n  --f-l: 18px;\n  --f-xl: 22px;\n  --f-xxl: 25px;\n  --f-xxxl: 30px;\n  --t-left: left;\n  --t-center: center;\n  --p-right: right;\n  --f-key: 24px;\n}\nbody.small[_ngcontent-%COMP%] {\n  --f-xxs: 10px;\n  --f-xs: 11px;\n  --f-s: 12px;\n  --f-a: 13px;\n  --f-m: 14px;\n  --f-l: 15px;\n  --f-xl: 16px;\n  --f-xxl: 17px;\n  --f-xxxl: 25px;\n  --f-key: 20px;\n  --f-xxxl: 25px;\n  --f-download: 30px;\n}\nbody.normal[_ngcontent-%COMP%] {\n  --f-xxs: 12px;\n  --f-xs: 13px;\n  --f-s: 14px;\n  --f-a: 15px;\n  --f-m: 16px;\n  --f-l: 17px;\n  --f-xl: 18px;\n  --f-xxl: 19px;\n  --f-xxxl: 30px;\n  --f-key: 24px;\n  --f-download: 40px;\n}\nbody.large[_ngcontent-%COMP%] {\n  --f-xxs: 14px;\n  --f-xs: 15px;\n  --f-s: 16px;\n  --f-a: 17px;\n  --f-m: 18px;\n  --f-l: 19px;\n  --f-xl: 20px;\n  --f-xxl: 21px;\n  --f-xxxl: 35px;\n  --f-key: 28px;\n  --f-download: 35px;\n}\n.lang-btn[_ngcontent-%COMP%] {\n  height: 26px;\n  padding: 0 12px 0 15px;\n  background: none;\n  border: 1px solid #ffffff;\n  color: #ffffff;\n  font-size: 0.875rem;\n  border-radius: 4px;\n}\n.lang-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.lang-btn-item[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  background: none;\n  padding: 10px;\n  border-bottom: 1px solid #eeeeee;\n  font-size: 14px;\n}\n.lang-btn-item[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 90, 159, 0.1);\n  color: #00599f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL192YXJpYWJsZXMuc2NzcyIsImxhbmd1YWdlLXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ0E7RUFDSSwwQkFBQTtFQUNBLGtPQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDOUNKO0FEaURBO0VBQ0ksMkJBQUE7RUFDQSxxT0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQy9DSjtBRGtEQTtFQUNJLDRCQUFBO0VBQ0Esd09BQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNoREo7QURtREE7RUFDSSw2QkFBQTtFQUNBLDJPQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDakRKO0FEb0RBO0VBQ0ksOEJBQUE7RUFDQSw4T0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2xESjtBRHFEQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ25ESjtBRHNEQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNuREo7QURzREE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNuREo7QURzREE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNuREo7QUQ3Q0E7RUFDSSwwQkFBQTtFQUNBLGtPQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDZ0RKO0FEN0NBO0VBQ0ksMkJBQUE7RUFDQSxxT0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQytDSjtBRDVDQTtFQUNJLDRCQUFBO0VBQ0Esd09BQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUM4Q0o7QUQzQ0E7RUFDSSw2QkFBQTtFQUNBLDJPQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDNkNKO0FEMUNBO0VBQ0ksOEJBQUE7RUFDQSw4T0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQzRDSjtBRHpDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQzJDSjtBRHhDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUMyQ0o7QUR4Q0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUMyQ0o7QUR4Q0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUMyQ0o7QUF2TEE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0ROSTtFQ09KLG1CRDhCSztFQzdCTCxrQkFBQTtBQTBMSjtBQXpMSTtFQUNJLGdCQUFBO0FBMkxSO0FBdkxBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUEwTEo7QUF6TEk7RUFDSSxpQ0RmUTtFQ2dCUixjRGpCRTtBQzRNViIsImZpbGUiOiJsYW5ndWFnZS1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udDonRE0gU2FucycsXG5zYW5zLXNlcmlmO1xuJGxpZ2h0OiAjZmZmZmZmO1xuJGdyYXktMzAwOiAjRERERUUzO1xuJGdyYXktMjAwOiAjZWVlZWVlO1xuJGJsYWNrOiMwMDAwMDA7XG4kZ3JheS04MDA6ICMxYTFhMWE7XG4kZ3JheS02MDA6IzRjNGM0YztcbiRwcmltYXJ5OiAjMDA1OTlmO1xuJHByaW1hcnktbGlnaHQ6IHJnYmEoMCwgOTAsIDE1OSwgMC4xMCk7XG5cbiRyZWd1bGFyOjQwMDtcbiRzZW1pLWJvbGQ6NTAwO1xuJGJvbGQ6NjAwO1xuJHBob25lLXNtOjM2MHB4O1xuJHBob25lOiA0ODBweDtcbiRwaG9uZS1sYW5kc2NhcGU6IDU3NnB4O1xuJHRhYmxldDogNzY3cHg7XG4kbGFwdG9wdmlldzogOTkxcHg7XG4kbGFwdG9wOiAxMDI0cHg7XG4kZGVrc3RvcDogMTI4MHB4O1xuJGxhcmdlOiAxMzYwcHg7XG5cbiRzY2hlbWUtcHJpbWFyeTojNkZDRjk3O1xuJHNjaGVtZS1saWdodDojRTlGQkVFO1xuJHNjaGVtZS1ncmF5OiM1QjYzNjU7XG5cblxuJGRhbmdlcjogcmdiKDI1NSwgNzcsIDk5KTtcbiRyZWQ6I2ZmM2IzYjtcbiRzdWNjZXNzOiAjM0Q5MDNGO1xuXG4kZ3JheS1icmVhZGNydW1iOiNmOWZhZmI7XG4kZm9udC1saWdodDoncG9wcGluc2xpZ2h0JztcbiRmb250LXJlZ3VsYXI6J3BvcHBpbnNyZWd1bGFyJztcbiRmb250LW1lZGl1bToncG9wcGluc21lZGl1bSc7XG4kZm9udC1ib2xkOidwb3BwaW5zYm9sZCc7XG4kZm9udC1zZW1pYm9sZDoncG9wcGluc3NlbWlib2xkJztcbiR0ZXh0LXhzOjAuNzVyZW07IC8vIDEycHhcbiR0ZXh0LXNtOjAuODc1cmVtOyAvLyAxNHB4XG4kdGV4dC1iYXNlOjFyZW07IC8vIDE2cHg7XG4kdGV4dC1sZzoxLjEyNXJlbTsgLy8gMThweFxuJHRleHQteGw6MS4yNXJlbTsgLy8gMjBweFxuJHRleHQtMjI6MS4zNzVyZW07IC8vIDIycHhcbiR0ZXh0LXh4bDoxLjVyZW07IC8vIDI0cHhcbiR0ZXh0LTMwOjEuODc1cmVtOyAvLyAzMHB4XG4kdGV4dC00MDoyLjVyZW07IC8vIDQwcHhcbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAncG9wcGluc2JvbGQnO1xuICAgIHNyYzogbG9jYWwoJ3BvcHBpbnMtYm9sZC13ZWJmb250JyksdXJsKCdodHRwczovL3N0YXRpYy51bWFuZy5nb3YuaW4vY2RuL2xhbmRpbmcvZm9udHMvcG9wcGlucy1ib2xkLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnaHR0cHM6Ly9zdGF0aWMudW1hbmcuZ292LmluL2Nkbi9sYW5kaW5nL2ZvbnRzL3BvcHBpbnMtYm9sZC13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAncG9wcGluc2xpZ2h0JztcbiAgICBzcmM6IGxvY2FsKCdwb3BwaW5zLWxpZ2h0LXdlYmZvbnQnKSx1cmwoJ2h0dHBzOi8vc3RhdGljLnVtYW5nLmdvdi5pbi9jZG4vbGFuZGluZy9mb250cy9wb3BwaW5zLWxpZ2h0LXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnaHR0cHM6Ly9zdGF0aWMudW1hbmcuZ292LmluL2Nkbi9sYW5kaW5nL2ZvbnRzL3BvcHBpbnMtbGlnaHQtd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ3BvcHBpbnNtZWRpdW0nO1xuICAgIHNyYzogbG9jYWwoJ3BvcHBpbnMtbWVkaXVtLXdlYmZvbnQnKSx1cmwoJ2h0dHBzOi8vc3RhdGljLnVtYW5nLmdvdi5pbi9jZG4vbGFuZGluZy9mb250cy9wb3BwaW5zLW1lZGl1bS13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCB1cmwoJ2h0dHBzOi8vc3RhdGljLnVtYW5nLmdvdi5pbi9jZG4vbGFuZGluZy9mb250cy9wb3BwaW5zLW1lZGl1bS13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAncG9wcGluc3JlZ3VsYXInO1xuICAgIHNyYzogbG9jYWwoJ3BvcHBpbnMtcmVndWxhci13ZWJmb250JyksdXJsKCdodHRwczovL3N0YXRpYy51bWFuZy5nb3YuaW4vY2RuL2xhbmRpbmcvZm9udHMvcG9wcGlucy1yZWd1bGFyLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnaHR0cHM6Ly9zdGF0aWMudW1hbmcuZ292LmluL2Nkbi9sYW5kaW5nL2ZvbnRzL3BvcHBpbnMtcmVndWxhci13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAncG9wcGluc3NlbWlib2xkJztcbiAgICBzcmM6IGxvY2FsKCdwb3BwaW5zLXNlbWlib2xkLXdlYmZvbnQnKSx1cmwoJ2h0dHBzOi8vc3RhdGljLnVtYW5nLmdvdi5pbi9jZG4vbGFuZGluZy9mb250cy9wb3BwaW5zLXNlbWlib2xkLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnaHR0cHM6Ly9zdGF0aWMudW1hbmcuZ292LmluL2Nkbi9sYW5kaW5nL2ZvbnRzL3BvcHBpbnMtc2VtaWJvbGQtd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xufVxuXG5ib2R5IHtcbiAgICAtLWYteHhzOiAxMnB4O1xuICAgIC0tZi14czogMTNweDtcbiAgICAtLWYtczogMTRweDtcbiAgICAtLWYtYTogMTVweDtcbiAgICAtLWYtbTogMTZweDtcbiAgICAtLWYtbDogMThweDtcbiAgICAtLWYteGw6IDIycHg7XG4gICAgLS1mLXh4bDogMjVweDtcbiAgICAtLWYteHh4bDogMzBweDtcbiAgICAtLXQtbGVmdDogbGVmdDtcbiAgICAtLXQtY2VudGVyOiBjZW50ZXI7XG4gICAgLS1wLXJpZ2h0OiByaWdodDtcbiAgICAtLWYta2V5OiAyNHB4O1xufVxuXG5ib2R5LnNtYWxsIHtcbiAgICAtLWYteHhzOiAxMHB4O1xuICAgIC0tZi14czogMTFweDtcbiAgICAtLWYtczogMTJweDtcbiAgICAtLWYtYTogMTNweDtcbiAgICAtLWYtbTogMTRweDtcbiAgICAtLWYtbDogMTVweDtcbiAgICAtLWYteGw6IDE2cHg7XG4gICAgLS1mLXh4bDogMTdweDtcbiAgICAtLWYteHh4bDogMjVweDtcbiAgICAtLWYta2V5OiAyMHB4O1xuICAgIC0tZi14eHhsOiAyNXB4O1xuICAgIC0tZi1kb3dubG9hZDogMzBweDtcbn1cblxuYm9keS5ub3JtYWwge1xuICAgIC0tZi14eHM6IDEycHg7XG4gICAgLS1mLXhzOiAxM3B4O1xuICAgIC0tZi1zOiAxNHB4O1xuICAgIC0tZi1hOiAxNXB4O1xuICAgIC0tZi1tOiAxNnB4O1xuICAgIC0tZi1sOiAxN3B4O1xuICAgIC0tZi14bDogMThweDtcbiAgICAtLWYteHhsOiAxOXB4O1xuICAgIC0tZi14eHhsOiAzMHB4O1xuICAgIC0tZi1rZXk6IDI0cHg7XG4gICAgLS1mLWRvd25sb2FkOiA0MHB4O1xufVxuXG5ib2R5LmxhcmdlIHtcbiAgICAtLWYteHhzOiAxNHB4O1xuICAgIC0tZi14czogMTVweDtcbiAgICAtLWYtczogMTZweDtcbiAgICAtLWYtYTogMTdweDtcbiAgICAtLWYtbTogMThweDtcbiAgICAtLWYtbDogMTlweDtcbiAgICAtLWYteGw6IDIwcHg7XG4gICAgLS1mLXh4bDogMjFweDtcbiAgICAtLWYteHh4bDogMzVweDtcbiAgICAtLWYta2V5OiAyOHB4O1xuICAgIC0tZi1kb3dubG9hZDogMzVweDtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9taXhpbnMnO1xuQGltcG9ydCAnLi4vLi4vLi4vLi4vdmFyaWFibGVzJztcblxuLmxhbmctYnRuIHtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgcGFkZGluZzogMCAxMnB4IDAgMTVweDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodDtcbiAgICBjb2xvcjogJGxpZ2h0O1xuICAgIGZvbnQtc2l6ZTogJHRleHQtc207XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHN2ZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxufVxuXG4ubGFuZy1idG4taXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyYXktMjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnktbGlnaHQ7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICB9XG5cbn0iXX0= */"] });


/***/ }),

/***/ 309:
/*!*********************************************************************************!*\
  !*** ./src/app/components/utility/statistics-card/statistics-card.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticsCardComponent": () => (/* binding */ StatisticsCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class StatisticsCardComponent {
}
StatisticsCardComponent.ɵfac = function StatisticsCardComponent_Factory(t) { return new (t || StatisticsCardComponent)(); };
StatisticsCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatisticsCardComponent, selectors: [["app-statistics-card"]], decls: 0, vars: 0, template: function StatisticsCardComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0aXN0aWNzLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4173:
/*!*****************************************!*\
  !*** ./src/app/constants/cache-keys.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheKeys": () => (/* binding */ cacheKeys)
/* harmony export */ });
const cacheKeys = {
    categories: 'categories',
    allServices: 'allServices',
};


/***/ }),

/***/ 7397:
/*!**********************************************!*\
  !*** ./src/app/constants/language-config.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "languageConfig": () => (/* binding */ languageConfig)
/* harmony export */ });
const languageConfig = [
    {
        langName: 'English',
        langCode: 'en',
        translation: 'English',
        isActive: true,
    },
    {
        langName: 'Hindi',
        langCode: 'hi',
        translation: 'हिंदी',
        isActive: true,
    },
    {
        langName: 'Assamese',
        langCode: 'sa',
        translation: 'অসমীয়া',
        isActive: true,
    },
    {
        langName: 'Bengali',
        langCode: 'bn',
        translation: 'বাংলা',
        isActive: true,
    },
    {
        langName: 'Gujarati',
        langCode: 'gu',
        translation: 'ગુજરાતી',
        isActive: true,
    },
    {
        langName: 'Urdu',
        langCode: 'ur',
        translation: 'اردو',
        isActive: true,
    },
    {
        langName: 'Punjabi',
        langCode: 'pa',
        translation: 'ਪੰਜਾਬੀ',
        isActive: true,
    },
    {
        langName: 'Kannada',
        langCode: 'kn',
        translation: 'ಕನ್ನಡ',
        isActive: true,
    },
    {
        langName: 'Malayalam',
        langCode: 'ml',
        translation: 'മലയാളം',
        isActive: true,
    },
    {
        langName: 'Marathi',
        langCode: 'mr',
        translation: 'मराठी',
        isActive: true,
    },
    {
        langName: 'Oriya',
        langCode: 'ro',
        translation: 'ଓଡ଼ିଆ',
        isActive: true,
    },
    {
        langName: 'Tamil',
        langCode: 'ta',
        translation: 'தமிழ்',
        isActive: true,
    },
    {
        langName: 'Telugu',
        langCode: 'te',
        translation: 'తెలుగు',
        isActive: true,
    },
    {
        langName: 'Santhali',
        langCode: 'sn',
        translation: 'ᱥᱟᱱᱛᱟᱲᱤ',
        isActive: true,
    },
    {
        langName: 'KONKANI',
        langCode: 'ko',
        translation: 'कोंकणी',
        isActive: true,
    },
    {
        langName: 'Sindhi',
        langCode: 'si',
        translation: 'सिंधी',
        isActive: true,
    },
    {
        langName: 'Sanskrit',
        langCode: 'sk',
        translation: 'संस्कृत',
        isActive: true,
    },
    {
        langName: 'Bodo',
        langCode: 'bo',
        translation: 'बड़',
        isActive: true,
    },
    {
        langName: 'Nepali',
        langCode: 'ne',
        translation: 'नेपाली',
        isActive: true,
    },
    {
        langName: 'Manipuri',
        langCode: 'ma',
        translation: 'মণিপুরী',
        isActive: true,
    },
    {
        langName: 'Kashmiri',
        langCode: 'ka',
        translation: 'كٲشُر',
        isActive: true,
    },
    {
        langName: 'Dogri',
        langCode: 'dg',
        translation: 'डोगरी',
        isActive: true,
    },
    {
        langName: 'Maithali',
        langCode: 'mi',
        translation: 'मैथिली',
        isActive: true,
    },
];


/***/ }),

/***/ 6880:
/*!*************************************!*\
  !*** ./src/app/constants/states.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "states": () => (/* binding */ states)
/* harmony export */ });
const states = [
    { stateName: 'states.all', stateId: '0' },
    { stateName: 'states.andamanNicobarIslands', stateId: '32' },
    { stateName: 'states.andhraPradesh', stateId: '17' },
    { stateName: 'states.arunachalPradesh', stateId: '23' },
    { stateName: 'states.assam', stateId: '4' },
    { stateName: 'states.bihar', stateId: '29' },
    { stateName: 'states.chandigarh', stateId: '3' },
    { stateName: 'states.chhattisgarh', stateId: '9' },
    { stateName: 'states.dadraNagarHaveli', stateId: '5' },
    { stateName: 'states.damanDiu', stateId: '13' },
    { stateName: 'states.delhi', stateId: '30' },
    { stateName: 'states.goa', stateId: '18' },
    { stateName: 'states.gujarat', stateId: '10' },
    { stateName: 'states.haryana', stateId: '20' },
    { stateName: 'states.himachalPradesh', stateId: '8' },
    { stateName: 'states.jammuKashmir', stateId: '33' },
    { stateName: 'states.jharkhand', stateId: '34' },
    { stateName: 'states.karnataka', stateId: '28' },
    { stateName: 'states.kerala', stateId: '25' },
    { stateName: 'states.ladakh', stateId: '38' },
    { stateName: 'states.lakshadweep', stateId: '21' },
    { stateName: 'states.madhyaPradesh', stateId: '22' },
    { stateName: 'states.manipur', stateId: '24' },
    { stateName: 'states.maharashtra', stateId: '2' },
    { stateName: 'states.meghalaya', stateId: '16' },
    { stateName: 'states.mizoram', stateId: '7' },
    { stateName: 'states.nagaland', stateId: '11' },
    { stateName: 'states.odisha', stateId: '1' },
    { stateName: 'states.punjab', stateId: '31' },
    { stateName: 'states.puducherry', stateId: '12' },
    { stateName: 'states.rajasthan', stateId: '37' },
    { stateName: 'states.sikkim', stateId: '27' },
    { stateName: 'states.tamilNadu', stateId: '19' },
    { stateName: 'states.telangana', stateId: '36' },
    { stateName: 'states.tripura', stateId: '14' },
    { stateName: 'states.uttarakhand', stateId: '15' },
    { stateName: 'states.uttarPradesh', stateId: '35' },
    { stateName: 'states.westBengal', stateId: '26' },
];


/***/ }),

/***/ 1372:
/*!*********************************************************!*\
  !*** ./src/app/interceptors/http-assets.interceptor.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpAssetsInterceptor": () => (/* binding */ HttpAssetsInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);






class HttpAssetsInterceptor {
    constructor(platformId) {
        this.platformId = platformId;
    }
    intercept(req, next) {
        if (!(0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId)) {
            return next.handle(req);
        }
        const assetsBaseUrl = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.isLocal ? 'http' : 'https'}://${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.isLocal ? 'localhost:4200' : src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.deployUrl}${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}`;
        const reqWithOrigin = req.clone({
            url: req.url.replace('.', req.url.includes('assets') ? assetsBaseUrl : '.'),
            headers: req.headers.set('x-requested-with', src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.deployUrl),
        });
        return next.handle(reqWithOrigin).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)({
            next: (resp) => {
                if (resp.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpEventType.Response) {
                    console.log('Client Success::', reqWithOrigin.url);
                    console.log(resp.body);
                }
            },
            error: (error) => {
                console.log('Client::', reqWithOrigin.url);
                console.log(error);
            },
        }));
    }
}
HttpAssetsInterceptor.ɵfac = function HttpAssetsInterceptor_Factory(t) { return new (t || HttpAssetsInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID)); };
HttpAssetsInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HttpAssetsInterceptor, factory: HttpAssetsInterceptor.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1917:
/*!****************************************************!*\
  !*** ./src/app/modules/angular-material.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularMaterialModule": () => (/* binding */ AngularMaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



class AngularMaterialModule {
}
AngularMaterialModule.ɵfac = function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); };
AngularMaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, { imports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuModule], exports: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuModule] }); })();


/***/ }),

/***/ 1534:
/*!******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsComponent": () => (/* binding */ AboutUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AboutUsComponent {
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 2, vars: 0, template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about-us works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC11cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4789:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DashboardComponent {
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function HomeComponent_li_86__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 95)(2, "path", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_li_86__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 97)(2, "path", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_li_86__svg_svg_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 100)(2, "path", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_li_86__svg_svg_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 102)(2, "path", 103)(3, "path", 104)(4, "path", 105)(5, "path", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_li_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_li_86__svg_svg_2_Template, 3, 0, "svg", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_li_86__svg_svg_3_Template, 3, 0, "svg", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_li_86__svg_svg_4_Template, 3, 0, "svg", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_li_86__svg_svg_5_Template, 6, 0, "svg", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.ostate == "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.ostate == "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.ostate == "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r7.ostate == "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7 == null ? null : item_r7.stname);
} }
function HomeComponent_div_204_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 107)(1, "div", 108)(2, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 111)(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Education");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "From scholarship portals to list of accredited universities, any services pertaining to education and much more can be found in the Students category under the respectives departments.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 113)(10, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Education");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "From scholarship portals to list of accredited universities, any services pertaining to education and much more can be found in the Students category under the respectives departments.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
} }
function HomeComponent_span_254_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "footer.facebook"));
} }
function HomeComponent_span_259_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "footer.linkedIn"));
} }
function HomeComponent_span_264_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "footer.youTube"));
} }
function HomeComponent_span_269_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "footer.instagram"));
} }
function HomeComponent_span_274_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "footer.twitter"));
} }
const _c0 = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9]; };
class HomeComponent {
    constructor(translate) {
        this.translate = translate;
        this.states = [
            {
                stname: 'Delhi',
                ostate: '30'
            },
            {
                stname: 'Haryana',
                ostate: '20'
            },
            {
                stname: 'Maharashtra',
                ostate: '2'
            },
            {
                stname: 'Gujarat',
                ostate: '10'
            }
        ];
        this.benefitItems = [
            {
                'img': "https://static.umang.gov.in/cdn/landing/theme/benefits/all-services.svg",
                'label': ['keyFeatures.all', 'keyFeatures.services', 'keyFeatures.inoneplace'],
                "list": [
                    { 'key': "keyFeatures.centralGov" },
                    { 'key': "keyFeatures.utilityBills" },
                    { 'key': "keyFeatures.stateGov" }
                ]
            },
            {
                // "All DOCUMENTS at one place"
                'img': "https://static.umang.gov.in/cdn/landing/theme/benefits/all-doc.svg",
                'label': ['keyFeatures.all', 'keyFeatures.documents', 'keyFeatures.inoneplace'],
                "list": [
                    { 'key': "keyFeatures.aadhaar" },
                    { 'key': "keyFeatures.drivingLicence" },
                    { 'key': "keyFeatures.pan" },
                    { 'key': "keyFeatures.VehicleRC" },
                    { 'key': "keyFeatures.digilockerManyMore" }
                ]
            },
            {
                'img': "https://static.umang.gov.in/cdn/landing/theme/benefits/all-engagement.svg",
                'label': ['keyFeatures.all', 'keyFeatures.engagement', 'keyFeatures.inoneplace'],
                "list": [
                    { 'key': "keyFeatures.label1" },
                    { 'key': "keyFeatures.label3" },
                    { 'key': "keyFeatures.label2" },
                    { 'key': "keyFeatures.label4" },
                    { 'key': "keyFeatures.label5" }
                ]
            },
            {
                'img': "https://static.umang.gov.in/cdn/landing/theme/benefits/all-transactions.svg",
                'label': ['keyFeatures.all', 'keyFeatures.transaction', 'keyFeatures.inoneplace'],
                "list": [
                    { 'key': "keyFeatures.Status" },
                    { 'key': "keyFeatures.bills" },
                    { 'key': "keyFeatures.applications" },
                    { 'key': "keyFeatures.manyMore" }
                ]
            }
        ];
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 277, vars: 8, consts: [[1, "hero-section"], [1, "container-fluid", "statistics"], [1, "row", "statistics__row"], [1, "col-md-3", "col-sm-6", "statistics__col"], [1, "statistics__card"], [1, "statistics__card__header", "d-flex", "align-items-center"], ["applazyload", "", "src", "./assets/images/service.gif", "alt", "", "width", "42px", "height", "42px", 1, "resp-image"], [1, "statistics__card__body"], [1, "row"], [1, "col-6"], [1, "stats__label"], [1, "stats__value", "mb-0"], [1, "container"], [1, "multi-item-carousel-wrapper"], [1, "carousel-heading"], [1, "main-heading"], [1, "mb-0"], [1, "container", "service-state-container"], [1, "col-md-7", "states-left"], [1, "states-card"], [4, "ngFor", "ngForOf"], [1, "col-md-5", "states-right"], [1, "btn", "btn-primary"], [1, "benefits-section"], [1, "container-fluid", "position-relative", "keyfeature-wrapper"], [1, "container", "benefit-container"], [1, "heading-wrapper"], [1, "main-heading", "mb-1", "text-white"], [1, "text-white"], [1, "row", "benefit-row"], [1, "col-md-7", "benefit-col-left"], [1, "benefit-card-list", "row"], [1, "benefit-card-col", "col-md-6", "col-sm-6"], [1, "benefit-card"], [1, "benefit-card__header", "d-flex", "flex-column"], [1, "benefit-thumbnail"], ["appLazyLoad", "", "loading", "lazy", "src", "https://static.umang.gov.in/cdn/landing/theme/benefits/all-services.svg", "alt", "all-services", "width", "52px", "height", "52px", 1, "resp-image", "mb-4"], [1, "benefits-list-item"], [1, "benefits-list-items"], [1, "benefits-list-items-label"], ["appLazyLoad", "", "loading", "lazy", "src", "https://static.umang.gov.in/cdn/landing/theme/benefits/all-doc.svg", "alt", "all-doc", "width", "52px", "height", "52px", 1, "resp-image", "mb-4"], ["appLazyLoad", "", "loading", "lazy", "src", "https://static.umang.gov.in/cdn/landing/theme/benefits/all-engagement.svg", "alt", "all-engagement", "width", "52px", "height", "52px", 1, "resp-image", "mb-4"], ["appLazyLoad", "", "loading", "lazy", "src", "https://static.umang.gov.in/cdn/landing/theme/benefits/all-transactions.svg", "alt", "all-transactions", "width", "52px", "height", "52px", 1, "resp-image", "mb-4"], ["src", "https://static.umang.gov.in/cdn/landing/theme/benefits/avatar.png", "width", "570px", "height", "764px", "alt", "", 1, "avatar"], [1, "category-section"], [1, "heading-wrapper", "heading-wrapper--category"], [1, "btn", "btn-outline-primary", "d-none", "d-sm-inline-block"], ["class", "col-md-4 category-col", 4, "ngFor", "ngForOf"], [1, "my-scheme-section"], [1, "row", "row--myschemes"], [1, "col-md-12"], [1, "card", "card--myschemes"], [1, "card-body"], [1, "card-thumbnail"], ["src", "assets/images/myscheme.svg", "alt", "myscheme"], [1, "support-wrapper"], [1, "support-left"], [1, "contact-us-title", "column"], [1, "call-to-action"], ["href", "tel:1800115246", 1, "btn", "btn-primary", "d-inline-block"], ["src", "./assets/images/help.gif", "alt", "help", "width", "452px", "height", "279px", 1, "help-img"], ["id", "download", 1, "downnload-container", "container"], [1, "download-app-section"], [1, "download-left"], [1, "app-download"], ["href", "https://play.google.com/store/apps/details?id=in.gov.umang.negd.g2c", "target", "_blank", "title", "Play Store"], ["src", "https://static.umang.gov.in/cdn/landing/theme/icons/google-play-store.svg", "alt", "Play Store", "loading", "lazy", "width", "143px", "height", "47px", 1, "resp-image"], ["href", "https://itunes.apple.com/in/app/umang/id1236448857?mt=8", "target", "_blank", "title", "App Store"], ["src", "https://static.umang.gov.in/cdn/landing/theme/icons/apple-store.svg", "alt", "App Store", "loading", "lazy", "width", "143px", "height", "47px", 1, "resp-image"], [1, "social-media-col"], [1, "foot-sub-heading", "flex-shrink-0"], [1, "menu-list-item"], [1, "menu-list-items", "menu-list-items--facebook"], ["href", "https://www.facebook.com/OfficialUmangApp", "target", "_blank", "title", "Facebook"], [1, "sociaicon"], ["src", "https://static.umang.gov.in/cdn/landing/theme/icons/facebook.svg", "alt", "facebook"], ["class", "social-text", 4, "ngIf"], [1, "menu-list-items", "menu-list-items--linkedin"], ["href", "https://www.linkedin.com/company/umangapp/", "target", "_blank", "title", "Linkedin"], ["src", "https://static.umang.gov.in/cdn/landing/theme/icons/linkedin.svg", "alt", "linkedIn"], [1, "menu-list-items", "menu-list-items--youtube"], ["href", "https://www.youtube.com/channel/UCejhcTgTo0PHDp3rrrM7jKg", "target", "_blank", "title", "youTube"], ["src", "https://static.umang.gov.in/cdn/landing/theme/icons/youtube.svg", "alt", "youtube"], [1, "menu-list-items", "menu-list-items--instagram"], ["href", "https://www.instagram.com/official.umang/", "target", "_blank", "title", "Instagram"], ["src", "https://static.umang.gov.in/cdn/landing/theme/icons/instagram.svg", "alt", "instagram"], [1, "menu-list-items", "menu-list-items--twitter"], ["href", "https://twitter.com/UmangOfficial_", "target", "_blank", "title", "Twitter"], ["src", "https://static.umang.gov.in/cdn/landing/theme/icons/twitter.svg", "alt", "twitter"], [1, "scanner", "downloa-right"], ["src", "https://static.umang.gov.in/cdn/landing/theme/icons/qrcode.png", "alt", "UMANG QR code", "width", "479px", "height", "530px", 1, "resp-image"], [1, "states-card__body"], ["width", "113", "height", "113", "viewBox", "0 0 113 113", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["width", "113", "height", "114", "viewBox", "0 0 113 114", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 4, "ngIf"], ["width", "113", "height", "113", "viewBox", "0 0 113 113", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["opacity", "0.05", "cx", "56.1598", "cy", "56.6931", "r", "55.9948", "fill", "#00599D"], ["d", "M49.6084 15.7559C49.1888 15.7559 48.8483 16.0951 48.8483 16.5131V18.8619C46.5271 19.1977 44.7009 21.0159 44.3648 23.3287H40.487C40.0675 23.3287 39.7269 23.668 39.7269 24.086V26.3578H31.3657C30.9461 26.3578 30.6056 26.6971 30.6056 27.1151V39.9889H26.805C26.3855 39.9889 26.0449 40.3282 26.0449 40.7462V44.5326H23.7646C23.345 44.5326 23.0045 44.8719 23.0045 45.2899V50.5909H19.2039C18.9409 50.5909 18.6965 50.7276 18.5566 50.9518C18.4198 51.1744 18.4069 51.4536 18.524 51.6884L23.0045 60.616V76.3385H22.2444C21.8248 76.3385 21.4843 76.6778 21.4843 77.0958C21.4843 77.5138 21.8248 77.8531 22.2444 77.8531H23.0045V86.9405H20.8221C20.5409 86.9405 20.2818 87.096 20.1511 87.3398C20.0173 87.5867 20.0331 87.8861 20.1897 88.1178L23.0045 92.3243V106.63H22.2444C21.8248 106.63 21.4843 106.969 21.4843 107.387C21.4843 107.805 21.8248 108.144 22.2444 108.144H23.0045V111.174H16.9236C16.504 111.174 16.1635 111.513 16.1635 111.931C16.1635 112.349 16.504 112.688 16.9236 112.688H26.805H42.0073H72.4117H87.6139H94.4549C94.8745 112.688 95.215 112.349 95.215 111.931C95.215 111.513 94.8745 111.174 94.4549 111.174H88.374V108.144H89.1341C89.5537 108.144 89.8942 107.805 89.8942 107.387C89.8942 106.969 89.5537 106.63 89.1341 106.63H88.374V92.4722L91.2868 88.1178C91.4419 87.8846 91.4592 87.5867 91.3254 87.3398C91.1947 87.0945 90.9356 86.9405 90.6544 86.9405H88.374V77.8531H89.1341C89.5537 77.8531 89.8942 77.5138 89.8942 77.0958C89.8942 76.6778 89.5537 76.3385 89.1341 76.3385H88.374V60.6131L92.8545 51.6854C92.9731 51.4506 92.9602 51.1715 92.8219 50.9488C92.682 50.7262 92.4376 50.5909 92.1746 50.5909H88.374V45.2899C88.374 44.8719 88.0335 44.5326 87.6139 44.5326H85.3336V40.7462C85.3336 40.3282 84.9931 39.9889 84.5735 39.9889H80.7729V27.1151C80.7729 26.6971 80.4324 26.3578 80.0128 26.3578H71.6516V24.086C71.6516 23.668 71.3111 23.3287 70.8915 23.3287H67.0137C66.9989 23.2265 67.0047 23.1183 66.984 23.0181C66.5374 20.8492 64.7497 19.1821 62.5303 18.8619V16.5131C62.5303 16.0951 62.1897 15.7559 61.7701 15.7559H49.6084ZM50.3685 17.2704H61.01V18.785H50.3685V17.2704ZM49.6084 20.2996H61.7701C63.605 20.2996 65.1438 21.6021 65.4965 23.3287H45.885C46.2377 21.6021 47.7735 20.2996 49.6084 20.2996ZM41.2471 24.8433H44.2876H67.0909H70.1314V26.3578H41.2471V24.8433ZM32.1258 27.8724H79.2527V39.9889H32.1258V27.8724ZM46.5679 30.9015C46.1483 30.9015 45.8078 31.2408 45.8078 31.6588V36.2025C45.8078 36.6205 46.1483 36.9598 46.5679 36.9598H48.8483V37.7171C48.8483 38.1351 49.1888 38.4744 49.6084 38.4744H61.7701C62.1897 38.4744 62.5303 38.1351 62.5303 37.7171V36.9598H64.8106C65.2302 36.9598 65.5707 36.6205 65.5707 36.2025V31.6588C65.5707 31.2408 65.2302 30.9015 64.8106 30.9015H46.5679ZM40.487 30.9341C38.3906 30.9341 36.6865 32.6319 36.6865 34.7205C36.6865 36.8091 38.3906 38.5069 40.487 38.5069C42.5834 38.5069 44.2876 36.8091 44.2876 34.7205C44.2876 32.6319 42.5834 30.9341 40.487 30.9341ZM70.8915 30.9341C68.7951 30.9341 67.0909 32.6319 67.0909 34.7205C67.0909 36.8091 68.7951 38.5069 70.8915 38.5069C72.9879 38.5069 74.692 36.8091 74.692 34.7205C74.692 32.6319 72.9879 30.9341 70.8915 30.9341ZM47.328 32.4161H64.0505V35.4452H61.7701C61.3506 35.4452 61.01 35.7845 61.01 36.2025V36.9598H50.3685V36.2025C50.3685 35.7845 50.0279 35.4452 49.6084 35.4452H47.328V32.4161ZM40.487 32.4486C41.7443 32.4486 42.7674 33.4679 42.7674 34.7205C42.7674 35.973 41.7443 36.9923 40.487 36.9923C39.2298 36.9923 38.2067 35.973 38.2067 34.7205C38.2067 33.4679 39.2298 32.4486 40.487 32.4486ZM70.8915 32.4486C72.1487 32.4486 73.1718 33.4679 73.1718 34.7205C73.1718 35.973 72.1487 36.9923 70.8915 36.9923C69.6342 36.9923 68.6111 35.973 68.6111 34.7205C68.6111 33.4679 69.6342 32.4486 70.8915 32.4486ZM27.5651 41.5035H83.8134V44.5326H27.5651V41.5035ZM24.5247 46.0472H86.8538V50.5909H24.5247V46.0472ZM20.4332 52.1055H90.9453L90.1852 53.62H21.1933L20.4332 52.1055ZM21.9534 55.1346H23.0045V57.2289L21.9534 55.1346ZM24.5247 55.1346H27.5651V59.6783H24.5247V55.1346ZM29.0854 55.1346H32.1258V59.6783H29.0854V55.1346ZM33.646 55.1346H36.6865V59.6783H33.646V55.1346ZM38.2067 55.1346H41.2471V59.6783H38.2067V55.1346ZM42.7674 55.1346H45.8078V59.6783H42.7674V55.1346ZM47.328 55.1346H50.3685V59.6783H47.328V55.1346ZM51.8887 55.1346H54.9291V59.6783H51.8887V55.1346ZM56.4494 55.1346H59.4898V59.6783H56.4494V55.1346ZM61.01 55.1346H64.0505V59.6783H61.01V55.1346ZM65.5707 55.1346H68.6111V59.6783H65.5707V55.1346ZM70.1314 55.1346H73.1718V59.6783H70.1314V55.1346ZM74.692 55.1346H77.7325V59.6783H74.692V55.1346ZM79.2527 55.1346H82.2931V59.6783H79.2527V55.1346ZM83.8134 55.1346H86.8538V59.6783H83.8134V55.1346ZM88.374 55.1346H89.4251L88.374 57.2289V55.1346ZM24.5247 61.1929H41.2471V64.9793V76.3385H39.7269V71.0375C39.7269 70.6195 39.3864 70.2803 38.9668 70.2803H26.805C26.3855 70.2803 26.0449 70.6195 26.0449 71.0375V76.3385H24.5247V61.1929ZM42.7674 61.1929H68.6111V64.222H57.2095C56.7899 64.222 56.4494 64.5612 56.4494 64.9793V70.2803H54.9291V64.9793C54.9291 64.5612 54.5886 64.222 54.169 64.222H42.7674V61.1929ZM70.1314 61.1929H86.8538V76.3385H85.3336V71.0375C85.3336 70.6195 84.9931 70.2803 84.5735 70.2803H72.4117C71.9921 70.2803 71.6516 70.6195 71.6516 71.0375V76.3385H70.1314V64.9793V61.1929ZM32.8859 62.7074C31.2091 62.7074 29.8455 64.066 29.8455 65.7366C29.8455 67.4071 31.2091 68.7657 32.8859 68.7657C34.5627 68.7657 35.9264 67.4071 35.9264 65.7366C35.9264 64.066 34.5627 62.7074 32.8859 62.7074ZM78.4926 62.7074C76.8158 62.7074 75.4521 64.066 75.4521 65.7366C75.4521 67.4071 76.8158 68.7657 78.4926 68.7657C80.1694 68.7657 81.533 67.4071 81.533 65.7366C81.533 64.066 80.1694 62.7074 78.4926 62.7074ZM32.8859 64.222C33.7251 64.222 34.4061 64.9005 34.4061 65.7366C34.4061 66.5726 33.7251 67.2511 32.8859 67.2511C32.0468 67.2511 31.3657 66.5726 31.3657 65.7366C31.3657 64.9005 32.0468 64.222 32.8859 64.222ZM78.4926 64.222C79.3317 64.222 80.0128 64.9005 80.0128 65.7366C80.0128 66.5726 79.3317 67.2511 78.4926 67.2511C77.6534 67.2511 76.9724 66.5726 76.9724 65.7366C76.9724 64.9005 77.6534 64.222 78.4926 64.222ZM42.7674 65.7366H53.4089V65.988C48.4563 66.9961 44.6662 71.1965 44.3232 76.3385H42.7674V65.7366ZM57.9696 65.7366H68.6111V76.3385H67.0553C66.7123 71.1965 62.9222 66.9961 57.9696 65.988V65.7366ZM53.4089 67.5321V69.1207C50.1494 70.0489 47.7155 72.8798 47.3963 76.3385H45.8434C46.1747 72.0331 49.2972 68.5044 53.4089 67.5321ZM57.9696 67.5321C62.0813 68.5044 65.2038 72.0331 65.5351 76.3385H63.9822C63.6631 72.879 61.23 70.0481 57.9696 69.1207V67.5321ZM53.4089 70.7062V71.0375C53.4089 71.4556 53.7495 71.7948 54.169 71.7948H57.2095C57.6291 71.7948 57.9696 71.4556 57.9696 71.0375V70.7062C60.3865 71.5638 62.1695 73.7186 62.4649 76.3385H61.7701C61.3506 76.3385 61.01 76.6778 61.01 77.0958C61.01 77.5138 61.3506 77.8531 61.7701 77.8531H62.5303V86.9405H61.7701C61.3506 86.9405 61.01 87.2797 61.01 87.6978C61.01 88.1158 61.3506 88.455 61.7701 88.455H62.5303V111.174H48.8483V88.455H49.6084C50.0279 88.455 50.3685 88.1158 50.3685 87.6978C50.3685 87.2797 50.0279 86.9405 49.6084 86.9405H48.8483V77.8531H49.6084C50.0279 77.8531 50.3685 77.5138 50.3685 77.0958C50.3685 76.6778 50.0279 76.3385 49.6084 76.3385H48.9136C49.2091 73.7193 50.9928 71.5644 53.4089 70.7062ZM27.5651 71.7948H29.8455V73.3094H27.5651V71.7948ZM31.3657 71.7948H34.4061V73.3094H31.3657V71.7948ZM35.9264 71.7948H38.2067V73.3094H35.9264V71.7948ZM73.1718 71.7948H75.4521V73.3094H73.1718V71.7948ZM76.9724 71.7948H80.0128V73.3094H76.9724V71.7948ZM81.533 71.7948H83.8134V73.3094H81.533V71.7948ZM27.5651 74.8239H38.2067V76.3385H27.5651V74.8239ZM73.1718 74.8239H83.8134V76.3385H73.1718V74.8239ZM24.5247 77.8531H26.0449V79.3676H24.5247V77.8531ZM27.5651 77.8531H38.2067V79.3676H27.5651V77.8531ZM39.7269 77.8531H41.2471V79.3676H39.7269V77.8531ZM42.7674 77.8531H47.328V86.9405H45.0477H42.7674V77.8531ZM64.0505 77.8531H68.6111V86.9405H67.471H64.0505V77.8531ZM70.1314 77.8531H71.6516V79.3676H70.1314V77.8531ZM73.1718 77.8531H83.8134V79.3676H73.1718V77.8531ZM85.3336 77.8531H86.8538V79.3676H85.3336V77.8531ZM24.5247 80.8822H26.0449V86.9405H24.5247V80.8822ZM27.5651 80.8822H29.0854V84.6686C29.0854 85.0867 29.4259 85.4259 29.8455 85.4259H35.9264C36.3459 85.4259 36.6865 85.0867 36.6865 84.6686V80.8822H38.2067V86.9405H27.5651V80.8822ZM30.6056 80.8822H35.1663V83.9113H30.6056V80.8822ZM39.7269 80.8822H41.2471V86.9405H39.7269V80.8822ZM70.1314 80.8822H71.6516V86.9405H70.1314V80.8822ZM73.1718 80.8822H74.692V84.6686C74.692 85.0867 75.0326 85.4259 75.4521 85.4259H81.533C81.9526 85.4259 82.2931 85.0867 82.2931 84.6686V80.8822H83.8134V86.9405H73.1718V80.8822ZM76.2122 80.8822H80.7729V83.9113H76.2122V80.8822ZM85.3336 80.8822H86.8538V86.9405H85.3336V80.8822ZM22.2414 88.455H43.6284L41.6005 91.4842H24.2664L22.2414 88.455ZM45.4545 88.455H47.328V111.174H42.7674V92.4722L45.4545 88.455ZM64.0505 88.455H66.022L68.6111 92.3243V111.174H64.0505V88.455ZM67.8481 88.455H89.2351L87.2071 91.4842H69.873L67.8481 88.455ZM24.5247 92.9987H26.0449V106.63H24.5247V92.9987ZM27.5651 92.9987H38.2067V106.63H27.5651V92.9987ZM39.7269 92.9987H41.2471V106.63H39.7269V92.9987ZM70.1314 92.9987H71.6516V106.63H70.1314V92.9987ZM73.1718 92.9987H83.8134V106.63H73.1718V92.9987ZM85.3336 92.9987H86.8538V106.63H85.3336V92.9987ZM24.5247 108.144H26.0449V111.174H24.5247V108.144ZM27.5651 108.144H29.0854V111.174H27.5651V108.144ZM30.6056 108.144H35.1663V111.174H30.6056V108.144ZM36.6865 108.144H38.2067V111.174H36.6865V108.144ZM39.7269 108.144H41.2471V111.174H39.7269V108.144ZM70.1314 108.144H71.6516V111.174H70.1314V108.144ZM73.1718 108.144H74.692V111.174H73.1718V108.144ZM76.2122 108.144H80.7729V111.174H76.2122V108.144ZM82.2931 108.144H83.8134V111.174H82.2931V108.144ZM85.3336 108.144H86.8538V111.174H85.3336V108.144Z", "fill", "#00599D"], ["opacity", "0.05", "cx", "56.484", "cy", "56.3939", "r", "55.9948", "fill", "#00599D"], ["d", "M103.193 110.89H99.4233V79.4312H101.685C101.986 79.4312 102.288 79.2814 102.439 78.9818L103.947 74.4876C104.097 74.188 103.947 74.0382 103.796 73.7385C103.645 73.5887 103.494 73.4389 103.193 73.4389H99.4233V67.4467H100.177C100.63 67.4467 100.931 67.1471 100.931 66.6977V62.2035C100.931 61.7541 100.63 61.4544 100.177 61.4544H78.315V56.2112C78.315 55.7618 78.0134 55.4622 77.5611 55.4622H76.8072V47.9719V47.2229V44.9758C76.8072 43.6275 75.9026 42.4291 74.5456 42.1294V39.7326C74.5456 39.2831 74.2441 38.9835 73.7917 38.9835C73.3394 38.9835 73.0379 39.2831 73.0379 39.7326V42.1294C71.6809 42.4291 70.7763 43.6275 70.7763 44.9758V47.2229V47.9719V50.968H42.1292V47.9719V47.2229V44.9758C42.1292 43.6275 41.2246 42.4291 39.8676 42.1294V39.7326C39.8676 39.2831 39.566 38.9835 39.1137 38.9835C38.6614 38.9835 38.3599 39.2831 38.3599 39.7326V42.1294C37.0029 42.4291 36.0982 43.6275 36.0982 44.9758V47.2229V47.9719V55.4622H35.3444C34.8921 55.4622 34.5905 55.7618 34.5905 56.2112V61.4544H12.7283C12.276 61.4544 11.9744 61.7541 11.9744 62.2035V66.6977C11.9744 67.1471 12.276 67.4467 12.7283 67.4467H13.4821V73.4389H9.71279C9.41125 73.4389 9.26047 73.5887 9.1097 73.7385C8.95892 73.8884 8.95892 74.188 8.95892 74.4876L10.4667 78.9818C10.6174 79.2814 10.919 79.4312 11.2205 79.4312H13.4821V110.89H9.71279C9.26047 110.89 8.95892 111.19 8.95892 111.639C8.95892 112.089 9.26047 112.389 9.71279 112.389H14.236H22.5286H28.5595H35.3444H42.8831H70.0224H77.5611H84.3459H90.3769H98.6695H103.193C103.645 112.389 103.947 112.089 103.947 111.639C103.947 111.19 103.645 110.89 103.193 110.89ZM101.082 77.9331H78.315V74.937H102.137L101.082 77.9331ZM43.6369 56.9603H69.2685V65.9486H43.6369V56.9603ZM76.8072 56.9603V65.9486H70.7763V56.9603H71.5301H76.0534H76.8072ZM51.1756 67.4467V73.4389H48.1602V67.4467H51.1756ZM52.6834 67.4467H55.6989V73.4389H52.6834V67.4467ZM57.2066 67.4467H60.2221V73.4389H57.2066V67.4467ZM61.7298 67.4467H64.7453V73.4389H61.7298V67.4467ZM66.253 67.4467H69.2685V73.4389H66.253V67.4467ZM70.7763 73.4389V67.4467H76.8072V73.4389H70.7763ZM46.6524 67.4467V73.4389H43.6369V67.4467H46.6524ZM42.1292 73.4389H36.0982V67.4467H42.1292V73.4389ZM42.1292 74.937V77.9331H36.0982V74.937H42.1292ZM70.7763 74.937H76.8072V77.9331H70.7763V74.937ZM97.9156 73.4389H78.315V67.4467H97.9156V73.4389ZM99.4233 62.9525V65.9486H98.6695H78.315V62.9525H99.4233ZM72.284 55.4622V47.9719H75.2995V55.4622H72.284ZM73.7917 43.4777C74.6964 43.4777 75.2995 44.0769 75.2995 44.9758V46.4738H72.284V44.9758C72.284 44.0769 72.8871 43.4777 73.7917 43.4777ZM70.7763 52.4661V55.4622H70.4747H70.0224H42.8831H42.1292V52.4661H70.7763ZM39.1137 43.4777C40.0184 43.4777 40.6215 44.0769 40.6215 44.9758V46.4738H37.606V44.9758C37.606 44.0769 38.2091 43.4777 39.1137 43.4777ZM37.606 47.9719H40.6215V55.4622H37.606V47.9719ZM36.8521 56.9603H41.3753H42.1292V65.9486H36.0982V62.2035V56.9603H36.8521ZM13.4821 62.9525H34.5905V65.9486H14.236H13.4821V62.9525ZM14.9899 67.4467H34.5905V73.4389H14.9899V67.4467ZM10.7682 74.937H34.5905V77.9331H11.8236L10.7682 74.937ZM14.9899 79.4312H34.5905V110.89H32.3289V93.8126C32.3289 89.7678 30.0673 86.1725 26.2979 84.3748C25.8456 84.0752 25.2425 84.0752 24.6394 84.3748C21.0208 86.1725 18.7592 89.7678 18.6085 93.8126V110.89H14.8391V79.4312H14.9899ZM21.7747 110.89H20.267V94.4118H30.8212V110.89H29.3134V101.153C29.3134 97.2581 25.9964 96.0597 25.8456 95.9099C25.6948 95.9099 25.5441 95.9099 25.3933 95.9099C25.2425 95.9099 21.7747 97.2581 21.7747 101.153V110.89ZM20.267 92.9137C20.5685 89.7678 22.3778 86.9215 25.3933 85.4234C25.5441 85.4234 25.5441 85.4234 25.6948 85.4234C28.5595 86.9215 30.5196 89.618 30.8212 92.9137H20.267ZM23.2825 110.89V101.153C23.2825 98.906 24.941 97.8573 25.5441 97.4079C26.2979 97.8573 27.8057 98.906 27.8057 101.153V110.89H23.2825ZM36.0982 110.89V79.4312H42.1292V110.89H36.0982ZM46.6524 110.89V94.5616C46.6524 90.0674 48.914 85.8728 52.8342 83.4759L56.4527 81.079L60.0713 83.3261C63.9914 85.723 66.253 89.9176 66.253 94.5616V111.04H46.6524V110.89ZM60.8252 82.1277L56.7543 79.581C56.4527 79.4312 56.1512 79.4312 56.0004 79.581L51.9295 82.1277C47.7078 84.8242 45.1447 89.4682 45.1447 94.5616V110.89H43.6369V74.937H69.2685V110.89H67.7608V94.4118C67.7608 89.4682 65.1976 84.8242 60.8252 82.1277ZM70.7763 110.89V79.4312H76.8072V110.89H70.7763ZM82.0843 94.4118H92.6385V110.89H91.1308V101.153C91.1308 97.2581 87.8137 96.0597 87.6629 95.9099C87.5122 95.9099 87.3614 95.9099 87.2106 95.9099C87.0599 95.9099 83.5921 97.2581 83.5921 101.153V110.89H82.0843V94.4118ZM82.0843 92.9137C82.3859 89.7678 84.1952 86.9215 87.2106 85.4234C87.3614 85.4234 87.3614 85.4234 87.5122 85.4234C90.3769 86.9215 92.3369 89.618 92.6385 92.9137H82.0843ZM85.0998 110.89V101.153C85.0998 98.906 86.7583 97.8573 87.3614 97.4079C88.1153 97.8573 89.623 98.906 89.623 101.153V110.89H85.0998ZM94.1462 110.89V93.8126C94.1462 89.7678 91.8846 86.1725 88.1153 84.225C87.6629 83.9254 87.0599 83.9254 86.4568 84.225C82.8382 86.0226 80.4258 89.7678 80.4258 93.8126V110.89H78.1642V79.4312H97.7648V110.89H94.1462Z", "fill", "#00599D"], ["width", "113", "height", "114", "viewBox", "0 0 113 114", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["opacity", "0.05", "cx", "56.1598", "cy", "56.8415", "r", "55.9948", "fill", "#00599D"], ["d", "M103.025 112.452H102.365V91.2486H103.025C103.421 91.2486 103.685 90.9836 103.685 90.586V86.6103C103.685 86.2127 103.421 85.9476 103.025 85.9476H102.365V83.9598C102.365 83.5622 102.101 83.2972 101.705 83.2972H98.0081C97.7441 81.0443 96.1599 78.9239 93.6517 77.7311L87.447 74.6831V73.7554C87.447 73.3578 87.183 73.0928 86.787 73.0928C86.3909 73.0928 86.1269 73.4904 86.1269 73.7554V74.6831L80.0542 77.5986C77.546 78.7913 75.9618 80.9117 75.6978 83.1646H73.4535V79.1889H74.1136C74.5097 79.1889 74.7737 78.9239 74.7737 78.5263V74.5506C74.7737 74.153 74.5097 73.8879 74.1136 73.8879H73.4535V65.9365H74.1136C74.5097 65.9365 74.7737 65.6714 74.7737 65.2739V61.2981C74.7737 60.9006 74.5097 60.6355 74.1136 60.6355H72.1334V55.3346H72.7935C73.1895 55.3346 73.4535 55.0695 73.4535 54.6719V52.0214C73.4535 51.6239 73.1895 51.3588 72.7935 51.3588H72.1334V48.7083H72.7935C73.1895 48.7083 73.4535 48.4433 73.4535 48.0457V45.3952C73.4535 44.9977 73.1895 44.7326 72.7935 44.7326H72.1334V43.4074C72.1334 42.2146 71.3413 41.1545 70.1532 40.8894V40.0943C70.1532 39.6967 69.8892 39.4316 69.4931 39.4316C69.0971 39.4316 68.8331 39.6967 68.8331 40.0943V40.8894C67.6449 41.1545 66.8528 42.2146 66.8528 43.4074V44.7326H66.1928C65.7967 44.7326 65.5327 44.9977 65.5327 45.3952V48.0457C65.5327 48.4433 65.7967 48.7083 66.1928 48.7083H66.8528V51.3588H66.1928C65.7967 51.3588 65.5327 51.6239 65.5327 52.0214V54.6719C65.5327 55.0695 65.7967 55.3346 66.1928 55.3346H66.8528V60.6355H64.8726C64.4766 60.6355 64.2126 60.9006 64.2126 61.2981V65.2739C64.2126 65.6714 64.4766 65.9365 64.8726 65.9365H65.5327V73.8879H64.8726H64.7406C64.0806 72.6952 63.1565 71.5025 61.8363 70.7074L56.8198 67.6593V66.4666C56.8198 66.069 56.5558 65.804 56.1597 65.804C55.7637 65.804 55.4996 66.069 55.4996 66.4666V67.6593L50.4831 70.9724C49.295 71.7676 48.2389 72.8278 47.7108 74.0205H47.5788H46.9187V66.069H47.5788C47.9748 66.069 48.2389 65.804 48.2389 65.4064V61.4307C48.2389 61.0331 47.9748 60.768 47.5788 60.768H45.5986V55.4671H46.2587C46.6547 55.4671 46.9187 55.202 46.9187 54.8045V52.154C46.9187 51.7564 46.6547 51.4913 46.2587 51.4913H45.5986V48.8409H46.2587C46.6547 48.8409 46.9187 48.5758 46.9187 48.1782V45.5278C46.9187 45.1302 46.6547 44.8651 46.2587 44.8651H45.5986V43.5399C45.5986 42.3472 44.8065 41.287 43.6184 41.0219V40.2268C43.6184 39.8292 43.3544 39.5642 42.9583 39.5642C42.5623 39.5642 42.2982 39.8292 42.2982 40.2268V41.0219C41.1101 41.287 40.318 42.3472 40.318 43.5399V44.8651H39.658C39.2619 44.8651 38.9979 45.1302 38.9979 45.5278V48.1782C38.9979 48.5758 39.2619 48.8409 39.658 48.8409H40.318V51.4913H39.658C39.2619 51.4913 38.9979 51.7564 38.9979 52.154V54.8045C38.9979 55.202 39.2619 55.4671 39.658 55.4671H40.318V60.768H38.3378C37.9418 60.768 37.6778 61.0331 37.6778 61.4307V65.4064C37.6778 65.804 37.9418 66.069 38.3378 66.069H38.9979V74.0205H38.3378C37.9418 74.0205 37.6778 74.2855 37.6778 74.6831V78.6588C37.6778 79.0564 37.9418 79.3214 38.3378 79.3214H38.9979V83.2972H35.9616C35.6975 81.0443 34.1134 78.9239 31.6051 77.7311L25.4004 74.6831V73.7554C25.4004 73.3578 25.1364 73.0928 24.7404 73.0928C24.3443 73.0928 24.0803 73.4904 24.0803 73.7554V74.6831L17.8757 77.7311C15.3674 78.9239 13.7832 81.0443 13.5192 83.2972H10.6149C10.2188 83.2972 9.95481 83.5622 9.95481 83.9598V85.9476H9.29474C8.8987 85.9476 8.63467 86.2127 8.63467 86.6103V90.586C8.63467 90.9836 8.8987 91.2486 9.29474 91.2486H9.95481V112.452H9.29474C8.8987 112.452 8.63467 112.718 8.63467 113.115C8.63467 113.513 8.8987 113.778 9.29474 113.778H10.6149H39.658H45.9946H46.2587H65.7967H66.0608H72.6615H101.705H103.025C103.421 113.778 103.685 113.513 103.685 113.115C103.685 112.718 103.421 112.452 103.025 112.452ZM102.365 89.9234H101.705H73.3215V87.2729H101.705H102.365V89.9234ZM75.9618 84.6224H78.6021V85.9476H75.9618V84.6224ZM94.4438 85.9476H91.8035V84.6224H94.4438V85.9476ZM90.4834 85.9476H87.8431V84.6224H90.4834V85.9476ZM86.5229 85.9476H83.8827V84.6224H86.5229V85.9476ZM82.5625 85.9476H79.9222V84.6224H82.5625V85.9476ZM101.044 84.6224V85.9476H99.7243V84.6224H101.044ZM98.4042 85.9476H95.7639V84.6224H98.4042V85.9476ZM80.5823 78.9239L86.787 75.8758L92.9916 78.9239C95.1038 79.9841 96.292 81.5743 96.556 83.2972H76.8859C77.1499 81.4418 78.4701 79.8515 80.5823 78.9239ZM74.6417 84.6224V85.9476H73.3215V84.6224H74.6417ZM68.041 43.5399C68.041 42.8773 68.569 42.2147 69.3611 42.2147C70.0212 42.2147 70.6812 42.8773 70.6812 43.5399V44.8651H68.041V43.5399ZM66.7208 46.1904H67.3809H71.3413H72.0014V47.5156H71.3413H67.3809H66.7208V46.1904ZM68.041 48.8409H70.6812V51.4913H68.041V48.8409ZM66.7208 52.8166H67.3809H71.3413H72.0014V54.1418H71.3413H67.3809H66.7208V52.8166ZM68.041 55.4671H70.6812V60.768H68.041V55.4671ZM65.4007 62.0933H67.3809H71.3413H73.3215V64.7438H72.6615H66.0608H65.4007V62.0933ZM66.7208 66.069H72.0014V74.0205H66.7208V66.069ZM65.4007 75.3457H66.0608H72.6615H73.3215V77.9962H72.6615H66.0608H65.4007V77.3336V75.3457ZM47.1828 79.3214H47.5788H49.559V80.6467H46.9187V79.3214H47.1828ZM65.4007 84.6224H46.9187V81.9719H65.4007V84.6224ZM58.8 80.6467V79.3214H61.4403V80.6467H58.8ZM57.4799 80.6467H54.8396V79.3214H57.4799V80.6467ZM53.5194 80.6467H50.8792V79.3214H53.5194V80.6467ZM46.9187 102.911C46.9187 98.67 49.031 94.6943 52.7273 92.3088L56.1597 90.0559L59.5921 92.3088C63.2885 94.5617 65.4007 98.5375 65.4007 102.911V112.452H46.9187V102.911ZM60.2521 91.1161L56.4237 88.7307C56.1597 88.5981 55.8957 88.5981 55.7637 88.7307L51.9353 91.2486C49.691 92.7064 47.9748 94.6942 46.9187 97.0797V85.9476H65.4007V96.9472C64.3446 94.5617 62.6284 92.5739 60.2521 91.1161ZM65.4007 80.6467H62.7604V79.3214H64.7406H65.4007V80.6467ZM51.2752 72.0326L56.1597 68.9845L61.0442 72.0326C62.8924 73.2253 64.0806 75.0807 64.0806 77.3336V77.9962H48.2389V77.3336C48.2389 75.2132 49.295 73.2253 51.2752 72.0326ZM41.6382 43.5399C41.6382 42.8773 42.1662 42.2147 42.9583 42.2147C43.6184 42.2147 44.2785 42.8773 44.2785 43.5399V44.8651H41.6382V43.5399ZM40.318 46.1904H40.9781H44.9385H45.5986V47.5156H44.9385H40.9781H40.318V46.1904ZM41.6382 48.8409H44.2785V51.4913H41.6382V48.8409ZM40.318 52.8166H40.9781H44.9385H45.5986V54.1418H44.9385H40.9781H40.318V52.8166ZM41.6382 55.4671H44.2785V60.768H41.6382V55.4671ZM38.9979 62.0933H40.9781H44.9385H46.9187V64.7438H46.2587H39.658H38.9979V62.0933ZM40.318 66.069H45.5986V74.0205H40.318V66.069ZM38.9979 75.3457H39.658H46.2587H46.9187V77.3336V77.9962H46.2587H39.658H38.9979V75.3457ZM38.9979 84.6224V85.9476H37.6778V84.6224H38.9979ZM36.3576 85.9476H33.7173V84.6224H36.3576V85.9476ZM13.9152 84.6224H16.5555V85.9476H13.9152V84.6224ZM17.8757 84.6224H20.5159V85.9476H17.8757V84.6224ZM21.8361 84.6224H24.4764V85.9476H21.8361V84.6224ZM25.7965 84.6224H28.4368V85.9476H25.7965V84.6224ZM29.7569 84.6224H32.3972V85.9476H29.7569V84.6224ZM18.5357 78.9239L24.7404 75.8758L30.945 78.9239C33.0573 79.9841 34.3774 81.5743 34.6414 83.2972H14.8393C15.1034 81.5743 16.4235 79.8515 18.5357 78.9239ZM11.275 84.6224H12.5951V85.9476H11.275V84.6224ZM9.95481 87.2729H10.6149H38.9979V89.9234H10.6149H9.95481V87.2729ZM11.275 91.2486H38.9979V112.452H32.3972V103.706C32.3972 100.393 30.813 97.4773 28.0407 95.7544L25.5325 94.1641C25.2684 94.0316 25.0044 94.0316 24.8724 94.1641L22.3641 95.7544C19.5918 97.4773 18.0077 100.525 18.0077 103.706V112.452H11.407V91.2486H11.275ZM31.0771 112.452H19.1958V103.838C19.1958 101.055 20.6479 98.5375 22.8922 96.9472L25.1364 95.4894L27.2486 96.8146C29.6249 98.2724 31.0771 100.923 31.0771 103.706V112.452ZM40.318 90.586V86.6103V83.9598V79.3214H45.5986V81.3093V85.285V102.911V112.452H40.318V90.586ZM66.7208 102.911V85.285V81.3093V79.3214H72.0014V83.9598V86.6103V90.586V112.452H66.7208V102.911ZM93.1236 112.452H81.2424V103.838C81.2424 101.055 82.6945 98.5375 84.9388 96.9472L87.183 95.4894L89.2952 96.8146C91.6715 98.2724 93.1236 100.923 93.1236 103.706V112.452ZM94.4438 112.452V103.706C94.4438 100.393 92.8596 97.4773 90.0873 95.7544L87.579 94.1641C87.315 94.0316 87.051 94.0316 86.919 94.1641L84.4107 95.7544C81.6384 97.4773 80.0542 100.525 80.0542 103.706V112.452H73.4535V91.2486H101.176V112.452H94.4438Z", "fill", "#00599D"], ["opacity", "0.05", "cx", "56.484", "cy", "56.5427", "r", "55.9948", "fill", "#00599D"], ["d", "M50.3377 40.0239C50.078 40.0239 49.8672 40.2347 49.8672 40.4945V42.8472H48.4555C46.6392 42.8472 45.1617 44.3247 45.1617 46.141V46.1704V47.0821V51.3317H44.2316C43.9719 51.3317 43.7611 51.5425 43.7611 51.8023C43.7611 52.062 43.9719 52.2728 44.2316 52.2728H45.1617V54.1678H44.8088C44.5491 54.1678 44.3383 54.3786 44.3383 54.6384C44.3383 54.8981 44.5491 55.1089 44.8088 55.1089H45.193V75.3148V75.8074H44.2519V75.3148C44.2519 74.5356 43.5978 73.9002 42.8402 73.9105V72.7176L42.9762 72.5798C43.2426 72.3134 43.3898 71.9572 43.3898 71.5798C43.3898 71.2025 43.2426 70.8499 42.9762 70.5836L41.7594 69.3668C41.5759 69.1833 41.2776 69.1833 41.0941 69.3668L39.8773 70.5836C39.6109 70.849 39.4637 71.2015 39.4637 71.5798C39.4637 71.9563 39.6109 72.3125 39.8773 72.5798L40.0151 72.7176V73.9032C39.2566 73.8928 38.6035 74.5282 38.6035 75.3074V75.8074H37.6624V75.3074C37.6624 74.5292 37.029 73.8958 36.2508 73.8958C35.4725 73.8958 34.8391 74.5292 34.8391 75.3074V75.8074H33.898V75.3074C33.898 74.5292 33.2647 73.8958 32.4864 73.8958C31.7081 73.8958 31.0748 74.5292 31.0748 75.3074V75.8074H30.1337V75.3074C30.1337 74.5292 29.5003 73.8958 28.722 73.8958C27.9438 73.8958 27.3104 74.5292 27.3104 75.3074V75.8074H26.3693V75.3074C26.3693 74.5282 25.7153 73.8928 24.9577 73.9032V72.7176L25.0955 72.5816C25.3619 72.3153 25.5091 71.9591 25.5091 71.5817C25.5091 71.2043 25.3619 70.8499 25.0955 70.5836L23.8787 69.3668C23.6952 69.1833 23.3969 69.1833 23.2134 69.3668L21.9966 70.5836C21.7302 70.849 21.583 71.2034 21.583 71.5817C21.583 71.9581 21.7302 72.3143 21.9966 72.5816L22.1326 72.7176V76.2871V80.0515V88.3669L22.1363 88.6757V110.655H18.8406C18.5583 110.655 18.3701 110.844 18.3701 111.126C18.3701 111.408 18.5583 111.596 18.8406 111.596H48.0162H64.0148H93.1867C93.469 111.596 93.6572 111.408 93.6572 111.126C93.6572 110.844 93.469 110.655 93.1867 110.655H89.8947V80.0497V76.2853V72.7158L90.0307 72.5779C90.2971 72.3116 90.4443 71.9572 90.4443 71.5798C90.4452 71.2025 90.2989 70.8481 90.0326 70.5818L88.8158 69.365C88.6323 69.1815 88.3339 69.1815 88.1504 69.365L86.9336 70.5818C86.6673 70.8472 86.52 71.2015 86.52 71.5798C86.52 71.9563 86.6673 72.3106 86.9336 72.5779L87.0714 72.7158V73.9032C86.3129 73.8928 85.6598 74.5282 85.6598 75.3074V75.8074H84.7187V75.3074C84.7187 74.5292 84.0854 73.8958 83.3071 73.8958C82.5288 73.8958 81.8955 74.5292 81.8955 75.3074V75.8074H80.9544V75.3074C80.9544 74.5292 80.321 73.8958 79.5427 73.8958C78.7645 73.8958 78.1311 74.5292 78.1311 75.3074V75.8074H77.19V75.3074C77.19 74.5292 76.5567 73.8958 75.7784 73.8958C75.0001 73.8958 74.3667 74.5292 74.3667 75.3074V75.8074H73.4256V75.3074C73.4256 74.5282 72.7716 73.8928 72.014 73.9032V72.7176L72.15 72.5798C72.4164 72.3134 72.5636 71.9572 72.5636 71.5798C72.5636 71.2025 72.4164 70.8499 72.15 70.5836L70.9332 69.3668C70.7497 69.1833 70.4514 69.1833 70.2678 69.3668L69.0511 70.5836C68.7847 70.849 68.6375 71.2015 68.6375 71.5798C68.6375 71.9563 68.7847 72.3125 69.0511 72.5798L69.1889 72.7176V73.9105C68.4304 73.9002 67.7773 74.5356 67.7773 75.3148V75.8074H66.8362V75.3148V54.8957C66.8861 54.8214 66.9226 54.7353 66.9226 54.6384C66.9226 54.5217 66.8755 54.4179 66.8049 54.3351V52.2728H67.7185C67.9782 52.2728 68.189 52.062 68.189 51.8023C68.189 51.5425 67.9782 51.3317 67.7185 51.3317H66.8068V47.0821V46.1704V46.141C66.8068 44.3247 65.3293 42.8472 63.513 42.8472H63.0424V40.4945C63.0424 40.2347 62.8316 40.0239 62.5719 40.0239C62.3121 40.0239 62.1013 40.2347 62.1013 40.4945V42.8472H50.8082V40.4945C50.8082 40.2347 50.5974 40.0239 50.3377 40.0239ZM48.4555 43.7883H50.3377H62.5719H63.513C64.6498 43.7883 65.5996 44.5976 65.8179 45.6705H46.1506C46.3689 44.5976 47.3187 43.7883 48.4555 43.7883ZM46.1028 46.641H65.8657V47.0821V51.3335H46.1028V47.0821V46.641ZM46.1028 52.2728H47.0108V54.1495H46.1028V52.2728ZM47.9519 52.2728H49.8304V54.1495H47.9519V52.2728ZM50.7715 52.2728H52.6482V54.1495H50.7715V52.2728ZM53.5892 52.2728H55.4677V54.1495H53.5892V52.2728ZM56.4088 52.2728H58.2837V54.1495H56.4088V52.2728ZM59.2248 52.2728H61.1033V54.1495H59.2248V52.2728ZM62.0443 52.2728H63.9228V54.1495H62.0443V52.2728ZM64.8639 52.2728H65.8657V54.1495H64.8639V52.2728ZM46.134 55.1108H50.8395V70.6388V73.9896C50.6917 73.9369 50.5346 73.9032 50.3689 73.9032C49.5907 73.9032 48.9573 74.5365 48.9573 75.3148V75.8074H48.0162V75.3148C48.0162 74.5365 47.3829 73.9032 46.6046 73.9032C46.439 73.9032 46.2818 73.9369 46.134 73.9896V55.1108ZM51.7806 55.1108H60.2504V70.6388V75.3148V75.8074H59.3093V75.3148C59.3093 74.5365 58.6759 73.9032 57.8977 73.9032C57.1194 73.9032 56.486 74.5365 56.486 75.3148V75.8074H55.5449V75.3148C55.5449 74.5365 54.9116 73.9032 54.1333 73.9032C53.355 73.9032 52.7217 74.5365 52.7217 75.3148V75.8074H51.7806V75.3148V70.6388V55.1108ZM61.1915 55.1108H65.8969V73.9896C65.7492 73.9369 65.592 73.9032 65.4264 73.9032C64.6481 73.9032 64.0148 74.5365 64.0148 75.3148V75.8074H63.0737V75.3148C63.0737 74.5365 62.4403 73.9032 61.662 73.9032C61.4964 73.9032 61.3392 73.9369 61.1915 73.9896V70.6388V55.1108ZM23.5479 70.363L24.4302 71.2472C24.5196 71.3366 24.568 71.4547 24.568 71.5798C24.569 71.706 24.5205 71.8241 24.432 71.9125L24.2941 72.0504H22.7998L22.6638 71.9125C22.5744 71.8231 22.5259 71.705 22.5259 71.5798C22.5259 71.4547 22.5753 71.3366 22.6638 71.2472L23.5479 70.363ZM41.4286 70.363L42.3109 71.2472C42.4003 71.3366 42.4487 71.4547 42.4487 71.5798C42.4497 71.706 42.4012 71.8241 42.3127 71.9125L42.1748 72.0504H40.6805L40.5445 71.9125C40.4551 71.8231 40.4066 71.705 40.4066 71.5798C40.4066 71.4547 40.456 71.3366 40.5445 71.2472L41.4286 70.363ZM70.6024 70.363L71.4846 71.2472C71.5741 71.3366 71.6225 71.4547 71.6225 71.5798C71.6234 71.706 71.575 71.8241 71.4865 71.9125L71.3486 72.0504H69.8543L69.7183 71.9125C69.6289 71.8231 69.5804 71.705 69.5804 71.5798C69.5804 71.4547 69.6298 71.3366 69.7183 71.2472L70.6024 70.363ZM88.4831 70.363L89.3654 71.2472C89.4548 71.3366 89.5032 71.4547 89.5032 71.5798C89.5042 71.706 89.4557 71.8241 89.3672 71.9125L89.2293 72.0504H87.735L87.599 71.9125C87.5096 71.8231 87.4611 71.705 87.4611 71.5798C87.4611 71.4547 87.5105 71.3366 87.599 71.2472L88.4831 70.363ZM23.0773 72.9915H24.0184V74.5097V75.8148H23.0773V72.9915ZM40.958 72.9915H41.8991V74.5189V75.8148H40.958V74.5097V72.9915ZM70.1318 72.9915H71.0729V74.5097V75.8148H70.1318V74.5189V72.9915ZM88.0125 72.9915H88.9536V75.8148H88.0125V74.5097V72.9915ZM24.9595 74.8369C25.2183 74.8369 25.4301 75.0486 25.4301 75.3074V75.778H24.9595V74.8369ZM28.7239 74.8369C28.9827 74.8369 29.1944 75.0486 29.1944 75.3074V75.778H28.2533V75.3074C28.2533 75.0486 28.4651 74.8369 28.7239 74.8369ZM32.4882 74.8369C32.747 74.8369 32.9588 75.0486 32.9588 75.3074V75.778H32.0177V75.3074C32.0177 75.0486 32.2294 74.8369 32.4882 74.8369ZM36.2526 74.8369C36.5114 74.8369 36.7231 75.0486 36.7231 75.3074V75.778H35.7821V75.3074C35.7821 75.0486 35.9938 74.8369 36.2526 74.8369ZM40.017 74.8369V75.778H39.5464V75.3074C39.5464 75.0486 39.7582 74.8369 40.017 74.8369ZM72.014 74.8369C72.2728 74.8369 72.4846 75.0486 72.4846 75.3074V75.778H72.014V74.8369ZM75.7784 74.8369C76.0372 74.8369 76.2489 75.0486 76.2489 75.3074V75.778H75.3078V75.3074C75.3078 75.0486 75.5196 74.8369 75.7784 74.8369ZM79.5427 74.8369C79.8015 74.8369 80.0133 75.0486 80.0133 75.3074V75.778H79.0722V75.3074C79.0722 75.0486 79.2839 74.8369 79.5427 74.8369ZM83.3071 74.8369C83.5659 74.8369 83.7776 75.0486 83.7776 75.3074V75.778H82.8365V75.3074C82.8365 75.0486 83.0483 74.8369 83.3071 74.8369ZM87.0714 74.8369V75.778H86.6009V75.3074C86.6009 75.0486 86.8127 74.8369 87.0714 74.8369ZM42.8402 74.8442C43.099 74.8442 43.3108 75.056 43.3108 75.3148V75.7853H42.8402V74.8442ZM46.6046 74.8442C46.8634 74.8442 47.0751 75.0551 47.0751 75.3148V75.7853H46.134V75.3148C46.134 75.056 46.3458 74.8442 46.6046 74.8442ZM50.3689 74.8442C50.6277 74.8442 50.8395 75.0551 50.8395 75.3148V75.7853H49.8984V75.3148C49.8984 75.056 50.1101 74.8442 50.3689 74.8442ZM54.1333 74.8442C54.3921 74.8442 54.6039 75.0551 54.6039 75.3148V75.7853H53.6628V75.3148C53.6628 75.056 53.8745 74.8442 54.1333 74.8442ZM57.8977 74.8442C58.1565 74.8442 58.3682 75.0551 58.3682 75.3148V75.7853H57.4271V75.3148C57.4271 75.056 57.6389 74.8442 57.8977 74.8442ZM61.662 74.8442C61.9208 74.8442 62.1326 75.0551 62.1326 75.3148V75.7853H61.1915V75.3148C61.1915 75.056 61.4032 74.8442 61.662 74.8442ZM65.4264 74.8442C65.6852 74.8442 65.8969 75.0551 65.8969 75.3148V75.7853H64.9558V75.3148C64.9558 75.056 65.1676 74.8442 65.4264 74.8442ZM69.1907 74.8442V75.7853H68.7202V75.3148C68.7202 75.056 68.9319 74.8442 69.1907 74.8442ZM23.0773 76.7558H24.0184V79.5791H23.0773V76.7558ZM24.9595 76.7558H40.017V79.5791H24.9595V76.7558ZM40.958 76.7558H41.8991V79.5791H40.958V76.7558ZM42.8402 76.7558H51.31H60.7209H69.1907V79.5791H56.0173H56.0118H42.8402V76.7558ZM70.1318 76.7558H71.0729V79.5791H70.1318V76.7558ZM72.014 76.7558H87.0714V79.5791H72.014V76.7558ZM88.0125 76.7558H88.9536V79.5791H88.0125V76.7558ZM26.3068 77.6896C26.1878 77.698 26.0765 77.7512 25.9953 77.8386C25.9141 77.9259 25.8691 78.0409 25.8694 78.1601C25.8694 78.2849 25.9189 78.4046 26.0072 78.4928C26.0954 78.5811 26.2151 78.6307 26.3399 78.6307C26.4647 78.6307 26.5844 78.5811 26.6726 78.4928C26.7609 78.4046 26.8105 78.2849 26.8105 78.1601C26.8105 78.0353 26.7609 77.9156 26.6726 77.8274C26.5844 77.7392 26.4647 77.6896 26.3399 77.6896C26.3289 77.6892 26.3179 77.6892 26.3068 77.6896ZM32.4239 77.6896C32.3049 77.698 32.1936 77.7512 32.1124 77.8386C32.0312 77.9259 31.9862 78.0409 31.9864 78.1601C31.9864 78.2849 32.036 78.4046 32.1243 78.4928C32.2125 78.5811 32.3322 78.6307 32.457 78.6307C32.5818 78.6307 32.7015 78.5811 32.7897 78.4928C32.878 78.4046 32.9275 78.2849 32.9275 78.1601C32.9275 78.0353 32.878 77.9156 32.7897 77.8274C32.7015 77.7392 32.5818 77.6896 32.457 77.6896C32.446 77.6892 32.4349 77.6892 32.4239 77.6896ZM38.541 77.6896C38.422 77.698 38.3107 77.7512 38.2295 77.8386C38.1482 77.9259 38.1032 78.0409 38.1035 78.1601C38.1035 78.2849 38.1531 78.4046 38.2414 78.4928C38.3296 78.5811 38.4493 78.6307 38.5741 78.6307C38.6989 78.6307 38.8186 78.5811 38.9068 78.4928C38.995 78.4046 39.0446 78.2849 39.0446 78.1601C39.0446 78.0353 38.995 77.9156 38.9068 77.8274C38.8186 77.7392 38.6989 77.6896 38.5741 77.6896C38.5631 77.6892 38.552 77.6892 38.541 77.6896ZM44.2169 77.6896C44.0983 77.6984 43.9874 77.7519 43.9066 77.8392C43.8257 77.9265 43.781 78.0411 43.7813 78.1601C43.7813 78.2849 43.8309 78.4046 43.9191 78.4928C44.0074 78.5811 44.1271 78.6307 44.2519 78.6307C44.3767 78.6307 44.4963 78.5811 44.5846 78.4928C44.6728 78.4046 44.7224 78.2849 44.7224 78.1601C44.7224 78.0353 44.6728 77.9156 44.5846 77.8274C44.4963 77.7392 44.3767 77.6896 44.2519 77.6896C44.2402 77.6891 44.2286 77.6891 44.2169 77.6896ZM51.7457 77.6896C51.627 77.6984 51.5161 77.7519 51.4353 77.8392C51.3545 77.9265 51.3097 78.0411 51.31 78.1601C51.31 78.2849 51.3596 78.4046 51.4479 78.4928C51.5361 78.5811 51.6558 78.6307 51.7806 78.6307C51.9054 78.6307 52.0251 78.5811 52.1133 78.4928C52.2016 78.4046 52.2511 78.2849 52.2511 78.1601C52.2511 78.0353 52.2016 77.9156 52.1133 77.8274C52.0251 77.7392 51.9054 77.6896 51.7806 77.6896C51.7689 77.6891 51.7573 77.6891 51.7457 77.6896ZM60.2155 77.6896C60.0968 77.6984 59.9859 77.7519 59.9051 77.8392C59.8243 77.9265 59.7795 78.0411 59.7798 78.1601C59.7798 78.2849 59.8294 78.4046 59.9177 78.4928C60.0059 78.5811 60.1256 78.6307 60.2504 78.6307C60.3752 78.6307 60.4949 78.5811 60.5831 78.4928C60.6714 78.4046 60.7209 78.2849 60.7209 78.1601C60.7209 78.0353 60.6714 77.9156 60.5831 77.8274C60.4949 77.7392 60.3752 77.6896 60.2504 77.6896C60.2388 77.6891 60.2271 77.6891 60.2155 77.6896ZM67.7442 77.6896C67.6255 77.6984 67.5146 77.7519 67.4338 77.8392C67.353 77.9265 67.3082 78.0411 67.3086 78.1601C67.3086 78.2849 67.3581 78.4046 67.4464 78.4928C67.5346 78.5811 67.6543 78.6307 67.7791 78.6307C67.9039 78.6307 68.0236 78.5811 68.1118 78.4928C68.2001 78.4046 68.2497 78.2849 68.2497 78.1601C68.2497 78.0353 68.2001 77.9156 68.1118 77.8274C68.0236 77.7392 67.9039 77.6896 67.7791 77.6896C67.7675 77.6891 67.7558 77.6891 67.7442 77.6896ZM73.3907 77.6896C73.2721 77.6984 73.1612 77.7519 73.0804 77.8392C72.9995 77.9265 72.9548 78.0411 72.9551 78.1601C72.9551 78.2849 73.0047 78.4046 73.0929 78.4928C73.1812 78.5811 73.3008 78.6307 73.4256 78.6307C73.5504 78.6307 73.6701 78.5811 73.7584 78.4928C73.8466 78.4046 73.8962 78.2849 73.8962 78.1601C73.8962 78.0353 73.8466 77.9156 73.7584 77.8274C73.6701 77.7392 73.5504 77.6896 73.4256 77.6896C73.414 77.6891 73.4024 77.6891 73.3907 77.6896ZM79.4784 77.6896C79.3594 77.698 79.2481 77.7512 79.1669 77.8386C79.0857 77.9259 79.0406 78.0409 79.0409 78.1601C79.0409 78.2849 79.0905 78.4046 79.1788 78.4928C79.267 78.5811 79.3867 78.6307 79.5115 78.6307C79.6363 78.6307 79.756 78.5811 79.8442 78.4928C79.9325 78.4046 79.982 78.2849 79.982 78.1601C79.982 78.0353 79.9325 77.9156 79.8442 77.8274C79.756 77.7392 79.6363 77.6896 79.5115 77.6896C79.5005 77.6892 79.4894 77.6892 79.4784 77.6896ZM85.6249 77.6896C85.5062 77.6984 85.3953 77.7519 85.3145 77.8392C85.2337 77.9265 85.1889 78.0411 85.1893 78.1601C85.1893 78.2849 85.2388 78.4046 85.3271 78.4928C85.4153 78.5811 85.535 78.6307 85.6598 78.6307C85.7846 78.6307 85.9043 78.5811 85.9925 78.4928C86.0808 78.4046 86.1304 78.2849 86.1304 78.1601C86.1304 78.0353 86.0808 77.9156 85.9925 77.8274C85.9043 77.7392 85.7846 77.6896 85.6598 77.6896C85.6482 77.6891 85.6365 77.6891 85.6249 77.6896ZM28.2221 77.6969C27.9623 77.6969 27.7515 77.9077 27.7515 78.1675C27.7515 78.4272 27.9623 78.638 28.2221 78.638H30.5748C30.8346 78.638 31.0454 78.4272 31.0454 78.1675C31.0454 77.9077 30.8346 77.6969 30.5748 77.6969H28.2221ZM34.3392 77.6969C34.0794 77.6969 33.8686 77.9077 33.8686 78.1675C33.8686 78.4272 34.0794 78.638 34.3392 78.638H36.6919C36.9516 78.638 37.1624 78.4272 37.1624 78.1675C37.1624 77.9077 36.9516 77.6969 36.6919 77.6969H34.3392ZM46.134 77.6969C45.8743 77.6969 45.6635 77.9077 45.6635 78.1675C45.6635 78.4272 45.8743 78.638 46.134 78.638H49.8984C50.1581 78.638 50.3689 78.4272 50.3689 78.1675C50.3689 77.9077 50.1591 77.6969 49.8984 77.6969H46.134ZM53.6628 77.6969C53.403 77.6969 53.1922 77.9077 53.1922 78.1675C53.1922 78.4272 53.403 78.638 53.6628 78.638H58.3682C58.628 78.638 58.8388 78.4272 58.8388 78.1675C58.8388 77.9077 58.6289 77.6969 58.3682 77.6969H53.6628ZM62.1326 77.6969C61.8728 77.6969 61.662 77.9077 61.662 78.1675C61.662 78.4272 61.8728 78.638 62.1326 78.638H65.8969C66.1567 78.638 66.3675 78.4272 66.3675 78.1675C66.3675 77.9077 66.1567 77.6969 65.8969 77.6969H62.1326ZM75.3078 77.6969C75.0481 77.6969 74.8373 77.9077 74.8373 78.1675C74.8373 78.4272 75.0481 78.638 75.3078 78.638H77.6606C77.9203 78.638 78.1311 78.4272 78.1311 78.1675C78.1311 77.9077 77.9203 77.6969 77.6606 77.6969H75.3078ZM81.4249 77.6969C81.1652 77.6969 80.9544 77.9077 80.9544 78.1675C80.9544 78.4272 81.1652 78.638 81.4249 78.638H83.7776C84.0374 78.638 84.2482 78.4272 84.2482 78.1675C84.2482 77.9077 84.0374 77.6969 83.7776 77.6969H81.4249ZM23.0773 80.5202H24.0184V86.7825V88.0489H23.0773V80.5202ZM24.9595 80.5202H40.017V86.1741C39.2584 86.1637 38.6053 86.7982 38.6053 87.5784V88.0416H37.6642V87.5784C37.6642 86.8001 37.0309 86.1667 36.2526 86.1667C35.4743 86.1667 34.841 86.8001 34.841 87.5784V88.0416H33.8999V87.5784C33.8999 86.8001 33.2665 86.1667 32.4882 86.1667C31.71 86.1667 31.0766 86.8001 31.0766 87.5784V88.0416H30.1355V87.5784C30.1355 86.8001 29.5022 86.1667 28.7239 86.1667C27.9456 86.1667 27.3122 86.8001 27.3122 87.5784V88.0416H26.3712V87.5784C26.3712 86.7992 25.7171 86.1637 24.9595 86.1741V80.5202ZM40.958 80.5202H41.8991V88.0489H40.958V86.7825V80.5202ZM42.8402 80.5202H53.5709L48.2037 82.6671C46.9455 83.1705 46.134 84.3714 46.134 85.7256V86.2531C45.5873 86.4479 45.193 86.9657 45.193 87.5784V88.0489H44.2519V87.5784C44.2519 86.7992 43.5978 86.1637 42.8402 86.1741V80.5202ZM58.4583 80.5202H69.1907V86.1741C68.4322 86.1637 67.7791 86.7992 67.7791 87.5784V88.0489H66.838V87.5784C66.838 86.9657 66.4437 86.4479 65.8969 86.2531V85.7256C65.8969 84.3714 65.0837 83.1705 63.8254 82.6671L58.4583 80.5202ZM70.1318 80.5202H71.0729V88.0489H70.1318V86.7825V80.5202ZM72.014 80.5202H77.9951L76.2967 81.6598C75.3829 82.2724 74.8373 83.2965 74.8373 84.3967V86.4958C74.5503 86.7546 74.3667 87.1256 74.3667 87.5416V88.0416H73.4256V87.571C73.4256 86.7918 72.7716 86.1564 72.014 86.1667V80.5202ZM81.0885 80.5202H87.0714V86.1373C86.3129 86.127 85.6598 86.7614 85.6598 87.5416V88.0416H84.7187V87.5416C84.7187 87.1256 84.5352 86.7546 84.2482 86.4958V84.3967C84.2482 83.2965 83.7007 82.2724 82.7869 81.6598L81.0885 80.5202ZM88.0125 80.5202H88.9536V88.0489H88.0125V86.7439V80.5202ZM56.0155 80.557L63.4762 83.5401C64.374 83.9006 64.9558 84.7582 64.9558 85.7256V86.2531C64.4091 86.4479 64.0148 86.9657 64.0148 87.5784V88.0489H63.0737V87.5784C63.0737 86.8001 62.4403 86.1667 61.662 86.1667C60.8837 86.1667 60.2504 86.8001 60.2504 87.5784V88.0489H59.3093V87.5784C59.3093 86.8001 58.6759 86.1667 57.8977 86.1667C57.1194 86.1667 56.486 86.8001 56.486 87.5784V88.0489H55.5449V87.5784C55.5449 86.8001 54.9116 86.1667 54.1333 86.1667C53.355 86.1667 52.7217 86.8001 52.7217 87.5784V88.0489H51.7806V87.5784C51.7806 86.8001 51.1472 86.1667 50.3689 86.1667C49.5907 86.1667 48.9573 86.8001 48.9573 87.5784V88.0489H48.0162V87.5784C48.0162 86.9657 47.6219 86.4479 47.0751 86.2531V85.7256C47.0751 84.7582 47.6551 83.9006 48.5529 83.5401L56.0155 80.557ZM79.5427 80.6158L82.2649 82.441C82.9171 82.8795 83.3071 83.6109 83.3071 84.3967V86.13C82.5288 86.13 81.8955 86.7633 81.8955 87.5416V88.0416H80.9544V87.5416C80.9544 86.7633 80.321 86.13 79.5427 86.13C78.7645 86.13 78.1311 86.7633 78.1311 87.5416V88.0416H77.19V87.5416C77.19 86.7633 76.5567 86.13 75.7784 86.13V84.3967C75.7784 83.6109 76.1665 82.8795 76.8187 82.441L79.5427 80.6158ZM75.7784 87.0711C76.0372 87.0711 76.2489 87.2828 76.2489 87.5416V88.0122H75.3078V87.5416C75.3078 87.2828 75.5196 87.0711 75.7784 87.0711ZM79.5427 87.0711C79.8015 87.0711 80.0133 87.2828 80.0133 87.5416V88.0122H79.0722V87.5416C79.0722 87.2828 79.2839 87.0711 79.5427 87.0711ZM83.3071 87.0711C83.5659 87.0711 83.7776 87.2828 83.7776 87.5416V88.0122H82.8365V87.5416C82.8365 87.2828 83.0483 87.0711 83.3071 87.0711ZM87.0714 87.0711V88.0122H86.6009V87.5416C86.6009 87.2828 86.8127 87.0711 87.0714 87.0711ZM72.014 87.1005C72.2728 87.1005 72.4846 87.3122 72.4846 87.571V88.0416H72.014V87.1005ZM24.9595 87.1078C25.2183 87.1078 25.4301 87.3196 25.4301 87.5784V88.0416H24.9595V87.1078ZM28.7239 87.1078C28.9827 87.1078 29.1944 87.3196 29.1944 87.5784V88.0416H28.2533V87.5784C28.2533 87.3196 28.4651 87.1078 28.7239 87.1078ZM32.4882 87.1078C32.747 87.1078 32.9588 87.3196 32.9588 87.5784V88.0416H32.0177V87.5784C32.0177 87.3196 32.2294 87.1078 32.4882 87.1078ZM36.2526 87.1078C36.5114 87.1078 36.7231 87.3196 36.7231 87.5784V88.0416H35.7821V87.5784C35.7821 87.3196 35.9938 87.1078 36.2526 87.1078ZM40.017 87.1078V88.0416H39.5464V87.5784C39.5464 87.3196 39.7582 87.1078 40.017 87.1078ZM42.8402 87.1078C43.1 87.1078 43.3108 87.3196 43.3108 87.5784V88.0489H42.8402V87.1078ZM46.6046 87.1078C46.8634 87.1078 47.0751 87.3196 47.0751 87.5784V88.0489H46.134V87.5784C46.134 87.3196 46.3458 87.1078 46.6046 87.1078ZM50.3689 87.1078C50.6277 87.1078 50.8395 87.3196 50.8395 87.5784V88.0489H49.8984V87.5784C49.8984 87.3196 50.1101 87.1078 50.3689 87.1078ZM54.1333 87.1078C54.3921 87.1078 54.6039 87.3196 54.6039 87.5784V88.0489H53.6628V87.5784C53.6628 87.3196 53.8745 87.1078 54.1333 87.1078ZM57.8977 87.1078C58.1565 87.1078 58.3682 87.3196 58.3682 87.5784V88.0489H57.4271V87.5784C57.4271 87.3196 57.6389 87.1078 57.8977 87.1078ZM61.662 87.1078C61.9208 87.1078 62.1326 87.3196 62.1326 87.5784V88.0489H61.1915V87.5784C61.1915 87.3196 61.4032 87.1078 61.662 87.1078ZM65.4264 87.1078C65.6852 87.1078 65.8969 87.3196 65.8969 87.5784V88.0489H64.9558V87.5784C64.9558 87.3196 65.1676 87.1078 65.4264 87.1078ZM69.1907 87.1078V88.0489H68.7202V87.5784C68.7202 87.3196 68.9319 87.1078 69.1907 87.1078ZM23.0773 88.99H24.0184V110.635H23.0773V88.99ZM24.9595 88.99H25.9006H27.7828V94.4141V97.9377V107.569V110.635H24.9595V88.99ZM28.7239 88.99H29.665H31.5472H33.4293H35.3115H36.2526V92.1147C36.0333 91.8907 35.7822 91.692 35.5008 91.5357L32.7162 89.9844C32.575 89.9053 32.3996 89.9053 32.2585 89.9844L29.4738 91.5357C29.1924 91.6929 28.9432 91.8907 28.7239 92.1147V88.99ZM37.1937 88.99H39.0759H40.017V110.635H37.1937V107.569V97.9377V94.4141V88.99ZM40.958 88.99H41.8991V110.615H40.958V88.99ZM42.8402 88.99H43.7813H45.6635H47.5457H49.4279H51.31H53.1922H55.0744H56.9566H58.8388H60.7209H62.6031H64.4853H66.3675H68.2497H69.1907V110.615H66.3675V92.2838C66.3675 92.0241 66.1567 91.8133 65.8969 91.8133H46.134C45.8743 91.8133 45.6635 92.0241 45.6635 92.2838V110.615H42.8402V88.99ZM70.1318 88.99H71.0729V110.615H70.1318V88.99ZM72.014 88.99H74.8373V94.4141V97.9377V107.545V110.628H72.1813C72.1606 110.625 72.1413 110.615 72.1206 110.615H72.014V88.99ZM75.7784 88.99H83.3071V92.1147C83.0878 91.8907 82.8367 91.692 82.5553 91.5357L79.7707 89.9844C79.6295 89.9053 79.4541 89.9053 79.313 89.9844L76.5283 91.5357C76.2469 91.6929 75.9976 91.8907 75.7784 92.1147V88.99ZM84.2482 88.99H87.0714V110.628H84.2482V107.545V97.9377V94.4141V88.99ZM88.0125 88.99H88.9536V110.619H88.0125V88.99ZM77.1551 89.9237C77.0364 89.9326 76.9255 89.986 76.8447 90.0733C76.7639 90.1606 76.7191 90.2753 76.7195 90.3943C76.7195 90.5191 76.769 90.6388 76.8573 90.727C76.9455 90.8153 77.0652 90.8648 77.19 90.8648C77.3148 90.8648 77.4345 90.8153 77.5227 90.727C77.611 90.6388 77.6606 90.5191 77.6606 90.3943C77.6606 90.2695 77.611 90.1498 77.5227 90.0616C77.4345 89.9733 77.3148 89.9237 77.19 89.9237C77.1784 89.9233 77.1667 89.9233 77.1551 89.9237ZM81.8605 89.9237C81.7419 89.9326 81.631 89.986 81.5502 90.0733C81.4693 90.1606 81.4246 90.2753 81.4249 90.3943C81.4249 90.5191 81.4745 90.6388 81.5627 90.727C81.651 90.8153 81.7707 90.8648 81.8955 90.8648C82.0203 90.8648 82.1399 90.8153 82.2282 90.727C82.3164 90.6388 82.366 90.5191 82.366 90.3943C82.366 90.2695 82.3164 90.1498 82.2282 90.0616C82.1399 89.9733 82.0203 89.9237 81.8955 89.9237C81.8838 89.9233 81.8722 89.9233 81.8605 89.9237ZM26.3712 89.9311C26.2464 89.9311 26.1267 89.9807 26.0384 90.0689C25.9502 90.1572 25.9006 90.2768 25.9006 90.4016C25.9006 90.5264 25.9502 90.6461 26.0384 90.7344C26.1267 90.8226 26.2464 90.8722 26.3712 90.8722C26.496 90.8722 26.6156 90.8226 26.7039 90.7344C26.7921 90.6461 26.8417 90.5264 26.8417 90.4016C26.8417 90.2768 26.7921 90.1572 26.7039 90.0689C26.6156 89.9807 26.496 89.9311 26.3712 89.9311ZM73.4256 89.9311C73.3008 89.9311 73.1812 89.9807 73.0929 90.0689C73.0047 90.1572 72.9551 90.2768 72.9551 90.4016C72.9551 90.5264 73.0047 90.6461 73.0929 90.7344C73.1812 90.8226 73.3008 90.8722 73.4256 90.8722C73.5504 90.8722 73.6701 90.8226 73.7584 90.7344C73.8466 90.6461 73.8962 90.5264 73.8962 90.4016C73.8962 90.2768 73.8466 90.1572 73.7584 90.0689C73.6701 89.9807 73.5504 89.9311 73.4256 89.9311ZM85.6598 89.9311C85.535 89.9311 85.4153 89.9807 85.3271 90.0689C85.2388 90.1572 85.1893 90.2768 85.1893 90.4016C85.1893 90.5264 85.2388 90.6461 85.3271 90.7344C85.4153 90.8226 85.535 90.8722 85.6598 90.8722C85.7846 90.8722 85.9043 90.8226 85.9925 90.7344C86.0808 90.6461 86.1304 90.5264 86.1304 90.4016C86.1304 90.2768 86.0808 90.1572 85.9925 90.0689C85.9043 89.9807 85.7846 89.9311 85.6598 89.9311ZM30.1006 89.955C29.9819 89.9638 29.871 90.0173 29.7902 90.1046C29.7094 90.1919 29.6646 90.3066 29.665 90.4255C29.665 90.5503 29.7145 90.67 29.8028 90.7583C29.891 90.8465 30.0107 90.8961 30.1355 90.8961C30.2603 90.8961 30.38 90.8465 30.4682 90.7583C30.5565 90.67 30.6061 90.5503 30.6061 90.4255C30.6061 90.3007 30.5565 90.1811 30.4682 90.0928C30.38 90.0046 30.2603 89.955 30.1355 89.955C30.1239 89.9546 30.1122 89.9546 30.1006 89.955ZM34.806 89.955C34.6874 89.9638 34.5765 90.0173 34.4957 90.1046C34.4148 90.1919 34.3701 90.3066 34.3704 90.4255C34.3704 90.5503 34.42 90.67 34.5082 90.7583C34.5965 90.8465 34.7162 90.8961 34.841 90.8961C34.9658 90.8961 35.0854 90.8465 35.1737 90.7583C35.2619 90.67 35.3115 90.5503 35.3115 90.4255C35.3115 90.3007 35.2619 90.1811 35.1737 90.0928C35.0854 90.0046 34.9658 89.955 34.841 89.955C34.8293 89.9546 34.8177 89.9546 34.806 89.955ZM44.2169 89.955C44.0983 89.9638 43.9874 90.0173 43.9066 90.1046C43.8257 90.1919 43.781 90.3066 43.7813 90.4255C43.7813 90.5503 43.8309 90.67 43.9191 90.7583C44.0074 90.8465 44.1271 90.8961 44.2519 90.8961C44.3767 90.8961 44.4963 90.8465 44.5846 90.7583C44.6728 90.67 44.7224 90.5503 44.7224 90.4255C44.7224 90.3007 44.6728 90.1811 44.5846 90.0928C44.4963 90.0046 44.3767 89.955 44.2519 89.955C44.2402 89.9546 44.2286 89.9546 44.2169 89.955ZM51.7457 89.955C51.627 89.9638 51.5161 90.0173 51.4353 90.1046C51.3545 90.1919 51.3097 90.3066 51.31 90.4255C51.31 90.5503 51.3596 90.67 51.4479 90.7583C51.5361 90.8465 51.6558 90.8961 51.7806 90.8961C51.9054 90.8961 52.0251 90.8465 52.1133 90.7583C52.2016 90.67 52.2511 90.5503 52.2511 90.4255C52.2511 90.3007 52.2016 90.1811 52.1133 90.0928C52.0251 90.0046 51.9054 89.955 51.7806 89.955C51.7689 89.9546 51.7573 89.9546 51.7457 89.955ZM60.2155 89.955C60.0968 89.9638 59.9859 90.0173 59.9051 90.1046C59.8243 90.1919 59.7795 90.3066 59.7798 90.4255C59.7798 90.5503 59.8294 90.67 59.9177 90.7583C60.0059 90.8465 60.1256 90.8961 60.2504 90.8961C60.3752 90.8961 60.4949 90.8465 60.5831 90.7583C60.6714 90.67 60.7209 90.5503 60.7209 90.4255C60.7209 90.3007 60.6714 90.1811 60.5831 90.0928C60.4949 90.0046 60.3752 89.955 60.2504 89.955C60.2388 89.9546 60.2271 89.9546 60.2155 89.955ZM67.7442 89.955C67.6255 89.9638 67.5146 90.0173 67.4338 90.1046C67.353 90.1919 67.3082 90.3066 67.3086 90.4255C67.3086 90.5503 67.3581 90.67 67.4464 90.7583C67.5346 90.8465 67.6543 90.8961 67.7791 90.8961C67.9039 90.8961 68.0236 90.8465 68.1118 90.7583C68.2001 90.67 68.2497 90.5503 68.2497 90.4255C68.2497 90.3007 68.2001 90.1811 68.1118 90.0928C68.0236 90.0046 67.9039 89.955 67.7791 89.955C67.7675 89.9546 67.7558 89.9546 67.7442 89.955ZM46.134 89.9623C45.8743 89.9623 45.6635 90.1731 45.6635 90.4329C45.6635 90.6926 45.8743 90.9034 46.134 90.9034H49.8984C50.1581 90.9034 50.3689 90.6926 50.3689 90.4329C50.3689 90.1731 50.1591 89.9623 49.8984 89.9623H46.134ZM53.6628 89.9623C53.403 89.9623 53.1922 90.1731 53.1922 90.4329C53.1922 90.6926 53.403 90.9034 53.6628 90.9034H58.3682C58.628 90.9034 58.8388 90.6926 58.8388 90.4329C58.8388 90.1731 58.6289 89.9623 58.3682 89.9623H53.6628ZM62.1326 89.9623C61.8728 89.9623 61.662 90.1731 61.662 90.4329C61.662 90.6926 61.8728 90.9034 62.1326 90.9034H65.8969C66.1567 90.9034 66.3675 90.6926 66.3675 90.4329C66.3675 90.1731 66.1576 89.9623 65.8969 89.9623H62.1326ZM38.5961 89.9752C38.4713 89.9752 38.3517 90.0248 38.2634 90.113C38.1752 90.2013 38.1256 90.321 38.1256 90.4458C38.1256 90.5706 38.1752 90.6902 38.2634 90.7785C38.3517 90.8667 38.4713 90.9163 38.5961 90.9163C38.7209 90.9163 38.8406 90.8667 38.9289 90.7785C39.0171 90.6902 39.0667 90.5706 39.0667 90.4458C39.0667 90.321 39.0171 90.2013 38.9289 90.113C38.8406 90.0248 38.7209 89.9752 38.5961 89.9752ZM32.4882 90.9328L35.045 92.3573C35.7894 92.7724 36.2526 93.5606 36.2526 94.4141V95.5868H28.7239V94.4141C28.7239 93.5615 29.1853 92.7733 29.9297 92.3573L32.4882 90.9328ZM79.5427 90.9328L82.0995 92.3573C82.8439 92.7724 83.3071 93.5606 83.3071 94.4141V95.5868H75.7784V94.4141C75.7784 93.5615 76.2397 92.7733 76.9841 92.3573L79.5427 90.9328ZM26.362 91.8133C26.1022 91.8133 25.8914 92.0241 25.8914 92.2838V94.166C25.8914 94.4257 26.1022 94.6365 26.362 94.6365C26.6217 94.6365 26.8325 94.4257 26.8325 94.166V92.2838C26.8325 92.0241 26.6217 91.8133 26.362 91.8133ZM73.4165 91.8133C73.1567 91.8133 72.9459 92.0241 72.9459 92.2838V94.166C72.9459 94.4257 73.1567 94.6365 73.4165 94.6365C73.6762 94.6365 73.887 94.4257 73.887 94.166V92.2838C73.887 92.0241 73.6762 91.8133 73.4165 91.8133ZM44.2427 91.8445C43.9829 91.8445 43.7721 92.0553 43.7721 92.3151V94.1973C43.7721 94.457 43.9829 94.6678 44.2427 94.6678C44.5024 94.6678 44.7132 94.457 44.7132 94.1973V92.3151C44.7132 92.0553 44.5024 91.8445 44.2427 91.8445ZM67.7699 91.8445C67.5102 91.8445 67.2994 92.0553 67.2994 92.3151V94.1973C67.2994 94.457 67.5102 94.6678 67.7699 94.6678C68.0297 94.6678 68.2405 94.457 68.2405 94.1973V92.3151C68.2405 92.0553 68.0297 91.8445 67.7699 91.8445ZM85.6598 91.8537C85.4001 91.8537 85.1893 92.0645 85.1893 92.3243V94.2064C85.1893 94.4662 85.4001 94.677 85.6598 94.677C85.9196 94.677 86.1304 94.4662 86.1304 94.2064V92.3243C86.1304 92.0645 85.9196 91.8537 85.6598 91.8537ZM38.5961 91.8574C38.3364 91.8574 38.1256 92.0682 38.1256 92.3279V94.2101C38.1256 94.4699 38.3364 94.6807 38.5961 94.6807C38.8559 94.6807 39.0667 94.4699 39.0667 94.2101V92.3279C39.0667 92.0682 38.8559 91.8574 38.5961 91.8574ZM46.6046 92.7544H65.4264V110.615H64.4853V101.355C64.4853 99.9026 63.754 98.5681 62.5296 97.7852L56.2691 93.7874C56.1148 93.6895 55.9162 93.6895 55.7618 93.7874L49.4995 97.787C48.2752 98.569 47.5457 99.9026 47.5457 101.355V110.615H46.6046V92.7544ZM49.8984 93.6955C49.1201 93.6955 48.4868 94.3288 48.4868 95.1071C48.4868 95.8854 49.1201 96.5187 49.8984 96.5187C50.6767 96.5187 51.31 95.8854 51.31 95.1071C51.31 94.3288 50.6767 93.6955 49.8984 93.6955ZM62.1326 93.6955C61.3543 93.6955 60.7209 94.3288 60.7209 95.1071C60.7209 95.8854 61.3543 96.5187 62.1326 96.5187C62.9109 96.5187 63.5442 95.8854 63.5442 95.1071C63.5442 94.3288 62.9109 93.6955 62.1326 93.6955ZM49.8984 94.6365C50.1572 94.6365 50.3689 94.8483 50.3689 95.1071C50.3689 95.3659 50.1572 95.5776 49.8984 95.5776C49.6396 95.5776 49.4279 95.3659 49.4279 95.1071C49.4279 94.8483 49.6396 94.6365 49.8984 94.6365ZM62.1326 94.6365C62.3914 94.6365 62.6031 94.8483 62.6031 95.1071C62.6031 95.3659 62.3914 95.5776 62.1326 95.5776C61.8738 95.5776 61.662 95.3659 61.662 95.1071C61.662 94.8483 61.8738 94.6365 62.1326 94.6365ZM56.0118 94.7432L62.0204 98.5792C62.9728 99.1881 63.5405 100.225 63.5405 101.355V110.615H61.7686V104.724C61.7686 104.72 61.7668 104.717 61.7668 104.713C61.7668 104.709 61.7686 104.706 61.7686 104.702C61.7686 104.268 61.5939 103.845 61.2871 103.538C61.2824 103.534 61.2771 103.53 61.2724 103.525C61.2771 103.521 61.2824 103.517 61.2871 103.513C61.5882 103.212 61.7537 102.817 61.765 102.393C61.765 102.386 61.7686 102.379 61.7686 102.371V101.879C61.7686 100.911 61.2823 100.021 60.4673 99.5001L56.3757 96.8845C56.2214 96.7857 56.0228 96.7857 55.8684 96.8845L51.7769 99.5001C50.9619 100.022 50.4756 100.911 50.4756 101.879V102.371C50.4756 102.391 50.4847 102.409 50.4866 102.428C50.5063 102.837 50.6691 103.222 50.9608 103.513C50.9655 103.517 50.9708 103.521 50.9755 103.525C50.9708 103.53 50.9655 103.532 50.9608 103.536C50.654 103.843 50.4774 104.268 50.4774 104.702V104.704C50.4774 104.711 50.4737 104.716 50.4737 104.724V110.613H48.4831V101.355C48.4831 100.225 49.0526 99.1871 50.005 98.5792L56.0118 94.7432ZM73.3907 95.5942C73.2721 95.603 73.1612 95.6565 73.0804 95.7438C72.9995 95.8311 72.9548 95.9458 72.9551 96.0647C72.9551 96.1895 73.0047 96.3092 73.0929 96.3974C73.1812 96.4857 73.3008 96.5353 73.4256 96.5353C73.5504 96.5353 73.6701 96.4857 73.7584 96.3974C73.8466 96.3092 73.8962 96.1895 73.8962 96.0647C73.8962 95.9399 73.8466 95.8202 73.7584 95.732C73.6701 95.6438 73.5504 95.5942 73.4256 95.5942C73.414 95.5937 73.4024 95.5937 73.3907 95.5942ZM44.2519 95.5979C44.1271 95.5979 44.0074 95.6474 43.9191 95.7357C43.8309 95.8239 43.7813 95.9436 43.7813 96.0684C43.7813 96.1932 43.8309 96.3129 43.9191 96.4011C44.0074 96.4894 44.1271 96.5389 44.2519 96.5389C44.3767 96.5389 44.4963 96.4894 44.5846 96.4011C44.6728 96.3129 44.7224 96.1932 44.7224 96.0684C44.7224 95.9436 44.6728 95.8239 44.5846 95.7357C44.4963 95.6474 44.3767 95.5979 44.2519 95.5979ZM26.3307 95.6052C26.2117 95.6136 26.1004 95.6668 26.0192 95.7542C25.938 95.8416 25.893 95.9565 25.8933 96.0758C25.8933 96.2006 25.9428 96.3202 26.0311 96.4085C26.1193 96.4967 26.239 96.5463 26.3638 96.5463C26.4886 96.5463 26.6083 96.4967 26.6965 96.4085C26.7848 96.3202 26.8344 96.2006 26.8344 96.0758C26.8344 95.951 26.7848 95.8313 26.6965 95.743C26.6083 95.6548 26.4886 95.6052 26.3638 95.6052C26.3528 95.6048 26.3417 95.6048 26.3307 95.6052ZM67.7791 95.6089C67.6543 95.6089 67.5346 95.6585 67.4464 95.7467C67.3581 95.8349 67.3086 95.9546 67.3086 96.0794C67.3086 96.2042 67.3581 96.3239 67.4464 96.4122C67.5346 96.5004 67.6543 96.55 67.7791 96.55C67.9039 96.55 68.0236 96.5004 68.1118 96.4122C68.2001 96.3239 68.2497 96.2042 68.2497 96.0794C68.2497 95.9546 68.2001 95.8349 68.1118 95.7467C68.0236 95.6585 67.9039 95.6089 67.7791 95.6089ZM85.6598 95.6181C85.535 95.6181 85.4153 95.6676 85.3271 95.7559C85.2388 95.8441 85.1893 95.9638 85.1893 96.0886C85.1893 96.2134 85.2388 96.3331 85.3271 96.4213C85.4153 96.5096 85.535 96.5592 85.6598 96.5592C85.7846 96.5592 85.9043 96.5096 85.9925 96.4213C86.0808 96.3331 86.1304 96.2134 86.1304 96.0886C86.1304 95.9638 86.0808 95.8441 85.9925 95.7559C85.9043 95.6676 85.7846 95.6181 85.6598 95.6181ZM38.5961 95.6217C38.4713 95.6217 38.3517 95.6713 38.2634 95.7596C38.1752 95.8478 38.1256 95.9675 38.1256 96.0923C38.1256 96.2171 38.1752 96.3368 38.2634 96.425C38.3517 96.5133 38.4713 96.5628 38.5961 96.5628C38.7209 96.5628 38.8406 96.5133 38.9289 96.425C39.0171 96.3368 39.0667 96.2171 39.0667 96.0923C39.0667 95.9675 39.0171 95.8478 38.9289 95.7596C38.8406 95.6713 38.7209 95.6217 38.5961 95.6217ZM28.7239 96.5279H29.665V97.4635V97.4672H28.7239V96.5279ZM30.6061 96.5279H32.0177V97.4635C32.0168 97.4644 32.0177 97.4662 32.0177 97.4672H30.6061V97.4635V96.5279ZM32.9588 96.5279H34.3704V97.4635C34.3695 97.4644 34.3704 97.4662 34.3704 97.4672H32.9588V97.4635V96.5279ZM35.3115 96.5279H36.2526V97.4672H35.3097C35.3097 97.4662 35.3115 97.4644 35.3115 97.4635V96.5279ZM75.7784 96.5279H76.7195V97.4635V97.4672H75.7784V96.5279ZM77.6606 96.5279H79.0722V97.4635C79.0712 97.4644 79.0722 97.4662 79.0722 97.4672H77.6606V97.4635V96.5279ZM80.0133 96.5279H81.4249V97.4635C81.424 97.4644 81.4249 97.4662 81.4249 97.4672H80.0133V97.4635V96.5279ZM82.366 96.5279H83.3071V97.4672H82.3642C82.3642 97.4662 82.366 97.4644 82.366 97.4635V96.5279ZM44.2519 97.4598C43.9921 97.4598 43.7813 97.6706 43.7813 97.9304V101.695C43.7813 101.954 43.9921 102.165 44.2519 102.165C44.5116 102.165 44.7224 101.954 44.7224 101.695V97.9304C44.7224 97.6706 44.5116 97.4598 44.2519 97.4598ZM26.3638 97.4653C26.1041 97.4653 25.8933 97.6761 25.8933 97.9359V101.7C25.8933 101.96 26.1041 102.171 26.3638 102.171C26.6235 102.171 26.8344 101.96 26.8344 101.7V97.9359C26.8344 97.6761 26.6235 97.4653 26.3638 97.4653ZM67.7754 97.4708C67.5157 97.4708 67.3049 97.6816 67.3049 97.9414V101.706C67.3049 101.965 67.5157 102.176 67.7754 102.176C68.0352 102.176 68.246 101.965 68.246 101.706V97.9414C68.246 97.6816 68.0352 97.4708 67.7754 97.4708ZM73.4256 97.4764C73.1659 97.4764 72.9551 97.6872 72.9551 97.9469V101.711C72.9551 101.971 73.1659 102.182 73.4256 102.182C73.6854 102.182 73.8962 101.971 73.8962 101.711V97.9469C73.8962 97.6872 73.6854 97.4764 73.4256 97.4764ZM85.6598 97.48C85.4001 97.48 85.1893 97.6908 85.1893 97.9506V101.715C85.1893 101.975 85.4001 102.185 85.6598 102.185C85.9196 102.185 86.1304 101.975 86.1304 101.715V97.9506C86.1304 97.6908 85.9196 97.48 85.6598 97.48ZM38.5961 97.4837C38.3364 97.4837 38.1256 97.6945 38.1256 97.9543V101.719C38.1256 101.978 38.3364 102.189 38.5961 102.189C38.8559 102.189 39.0667 101.978 39.0667 101.719V97.9543C39.0667 97.6945 38.8559 97.4837 38.5961 97.4837ZM56.1221 97.8403L59.96 100.292C60.5039 100.64 60.8275 101.235 60.8275 101.88V102.351C60.8275 102.539 60.7553 102.716 60.6217 102.849C60.4899 102.981 60.3071 103.057 60.1217 103.057C59.862 103.057 59.6512 103.268 59.6512 103.527C59.6512 103.787 59.862 103.998 60.1217 103.998C60.3071 103.998 60.4909 104.072 60.6217 104.204C60.7525 104.335 60.8275 104.518 60.8275 104.704C60.8275 104.707 60.8294 104.711 60.8294 104.715C60.8303 104.718 60.8275 104.721 60.8275 104.726V110.608H51.4166V104.726V104.724C51.4166 104.716 51.4203 104.711 51.4203 104.704C51.4203 104.518 51.4963 104.334 51.628 104.204C51.7598 104.073 51.9407 103.998 52.1261 103.998C52.3859 103.998 52.5967 103.787 52.5967 103.527C52.5967 103.268 52.3859 103.057 52.1261 103.057C51.9407 103.057 51.7588 102.981 51.628 102.849C51.4944 102.715 51.4203 102.539 51.4203 102.351C51.4203 102.344 51.4166 102.338 51.4166 102.333V101.88C51.4166 101.235 51.7421 100.641 52.286 100.292L56.1221 97.8403ZM28.7239 98.4064H36.2526V99.3218H34.477C34.2173 99.3218 34.0065 99.5326 34.0065 99.7923C34.0065 100.052 34.2173 100.263 34.477 100.263H36.2526V101.213H28.7239V100.263H30.7127C30.9724 100.263 31.1832 100.052 31.1832 99.7923C31.1832 99.5326 30.9724 99.3218 30.7127 99.3218H28.7239V98.4064ZM75.7784 98.4064H83.3071V99.3218H81.5315C81.2718 99.3218 81.061 99.5326 81.061 99.7923C81.061 100.052 81.2718 100.263 81.5315 100.263H83.3071V101.213H75.7784V100.261H77.7672C78.0269 100.261 78.2377 100.05 78.2377 99.7905C78.2377 99.5307 78.0269 99.3199 77.7672 99.3199H75.7784V98.4064ZM32.5948 99.3144C32.4701 99.3144 32.3504 99.364 32.2621 99.4522C32.1739 99.5405 32.1243 99.6602 32.1243 99.785C32.1243 99.9098 32.1739 100.029 32.2621 100.118C32.3504 100.206 32.4701 100.256 32.5948 100.256C32.7196 100.256 32.8393 100.206 32.9276 100.118C33.0158 100.029 33.0654 99.9098 33.0654 99.785C33.0654 99.6602 33.0158 99.5405 32.9276 99.4522C32.8393 99.364 32.7196 99.3144 32.5948 99.3144ZM79.6493 99.3144C79.5245 99.3144 79.4049 99.364 79.3166 99.4522C79.2284 99.5405 79.1788 99.6602 79.1788 99.785C79.1788 99.9098 79.2284 100.029 79.3166 100.118C79.4049 100.206 79.5245 100.256 79.6493 100.256C79.7741 100.256 79.8938 100.206 79.9821 100.118C80.0703 100.029 80.1199 99.9098 80.1199 99.785C80.1199 99.6602 80.0703 99.5405 79.9821 99.4522C79.8938 99.364 79.7741 99.3144 79.6493 99.3144ZM28.7239 102.154H36.2526V105.27C36.0333 105.046 35.7822 104.848 35.5008 104.691L32.7162 103.139C32.575 103.06 32.3996 103.06 32.2585 103.139L29.4738 104.691C29.1924 104.847 28.9432 105.045 28.7239 105.27V102.154ZM75.7784 102.154H83.3071V105.246C83.0878 105.022 82.8367 104.824 82.5553 104.667L79.7707 103.114C79.6295 103.035 79.4541 103.035 79.313 103.114L76.5283 104.667C76.2469 104.824 75.9976 105.02 75.7784 105.244V102.154ZM44.2519 103.106C44.1271 103.106 44.0074 103.156 43.9191 103.244C43.8309 103.332 43.7813 103.452 43.7813 103.577C43.7813 103.702 43.8309 103.821 43.9191 103.91C44.0074 103.998 44.1271 104.047 44.2519 104.047C44.3767 104.047 44.4963 103.998 44.5846 103.91C44.6728 103.821 44.7224 103.702 44.7224 103.577C44.7224 103.452 44.6728 103.332 44.5846 103.244C44.4963 103.156 44.3767 103.106 44.2519 103.106ZM26.3638 103.114C26.239 103.114 26.1193 103.163 26.0311 103.252C25.9428 103.34 25.8933 103.459 25.8933 103.584C25.8933 103.709 25.9428 103.829 26.0311 103.917C26.1193 104.005 26.239 104.055 26.3638 104.055C26.4886 104.055 26.6083 104.005 26.6965 103.917C26.7848 103.829 26.8344 103.709 26.8344 103.584C26.8344 103.459 26.7848 103.34 26.6965 103.252C26.6083 103.163 26.4886 103.114 26.3638 103.114ZM67.7754 103.117C67.6506 103.117 67.531 103.167 67.4427 103.255C67.3545 103.343 67.3049 103.463 67.3049 103.588C67.3049 103.713 67.3545 103.832 67.4427 103.921C67.531 104.009 67.6506 104.058 67.7754 104.058C67.9002 104.058 68.0199 104.009 68.1082 103.921C68.1964 103.832 68.246 103.713 68.246 103.588C68.246 103.463 68.1964 103.343 68.1082 103.255C68.0199 103.167 67.9002 103.117 67.7754 103.117ZM73.4256 103.123C73.3008 103.123 73.1812 103.172 73.0929 103.261C73.0047 103.349 72.9551 103.469 72.9551 103.593C72.9551 103.718 73.0047 103.838 73.0929 103.926C73.1812 104.014 73.3008 104.064 73.4256 104.064C73.5504 104.064 73.6701 104.014 73.7584 103.926C73.8466 103.838 73.8962 103.718 73.8962 103.593C73.8962 103.469 73.8466 103.349 73.7584 103.261C73.6701 103.172 73.5504 103.123 73.4256 103.123ZM85.6598 103.127C85.535 103.127 85.4153 103.176 85.3271 103.264C85.2388 103.353 85.1893 103.472 85.1893 103.597C85.1893 103.722 85.2388 103.842 85.3271 103.93C85.4153 104.018 85.535 104.068 85.6598 104.068C85.7846 104.068 85.9043 104.018 85.9925 103.93C86.0808 103.842 86.1304 103.722 86.1304 103.597C86.1304 103.472 86.0808 103.353 85.9925 103.264C85.9043 103.176 85.7846 103.127 85.6598 103.127ZM38.5961 103.13C38.4713 103.13 38.3517 103.18 38.2634 103.268C38.1752 103.356 38.1256 103.476 38.1256 103.601C38.1256 103.726 38.1752 103.845 38.2634 103.934C38.3517 104.022 38.4713 104.071 38.5961 104.071C38.7209 104.071 38.8406 104.022 38.9289 103.934C39.0171 103.845 39.0667 103.726 39.0667 103.601C39.0667 103.476 39.0171 103.356 38.9289 103.268C38.8406 103.18 38.7209 103.13 38.5961 103.13ZM79.5427 104.064L82.0976 105.488C82.843 105.904 83.3071 106.693 83.3071 107.545V108.742H75.7784V107.545C75.7784 106.693 76.2397 105.904 76.9841 105.488L79.5427 104.064ZM32.4882 104.088L35.045 105.512C35.7903 105.926 36.2526 106.716 36.2526 107.569V108.742H28.7239V107.569C28.7239 106.717 29.1843 105.927 29.9297 105.512L32.4882 104.088ZM44.2519 104.989C43.9921 104.989 43.7813 105.199 43.7813 105.459V107.341C43.7813 107.602 43.9912 107.812 44.2519 107.812C44.5116 107.812 44.7224 107.601 44.7224 107.341V105.459C44.7224 105.199 44.5116 104.989 44.2519 104.989ZM26.3638 104.994C26.1041 104.994 25.8933 105.205 25.8933 105.465V107.347C25.8933 107.607 26.1031 107.817 26.3638 107.817C26.6235 107.817 26.8344 107.607 26.8344 107.347V105.465C26.8344 105.205 26.6235 104.994 26.3638 104.994ZM67.7754 105C67.5157 105 67.3049 105.21 67.3049 105.47V107.352C67.3049 107.612 67.5157 107.823 67.7754 107.823C68.0361 107.823 68.246 107.613 68.246 107.352V105.47C68.246 105.21 68.0352 105 67.7754 105ZM85.6598 105.009C85.4001 105.009 85.1893 105.22 85.1893 105.479V107.361C85.1893 107.621 85.4001 107.832 85.6598 107.832C85.9196 107.832 86.1304 107.621 86.1304 107.361V105.479C86.1304 105.22 85.9196 105.009 85.6598 105.009ZM38.5961 105.012C38.3364 105.012 38.1256 105.223 38.1256 105.483V107.365C38.1256 107.626 38.3355 107.836 38.5961 107.836C38.8559 107.836 39.0667 107.625 39.0667 107.365V105.483C39.0667 105.223 38.8559 105.012 38.5961 105.012ZM73.4256 105.014C73.1659 105.014 72.9551 105.225 72.9551 105.485V107.367C72.9551 107.628 73.165 107.838 73.4256 107.838C73.6854 107.838 73.8962 107.627 73.8962 107.367V105.485C73.8962 105.225 73.6854 105.014 73.4256 105.014ZM44.2519 108.753C44.1271 108.753 44.0074 108.802 43.9191 108.891C43.8309 108.979 43.7813 109.099 43.7813 109.223C43.7813 109.348 43.8309 109.468 43.9191 109.556C44.0074 109.644 44.1271 109.694 44.2519 109.694C44.3767 109.694 44.4963 109.644 44.5846 109.556C44.6728 109.468 44.7224 109.348 44.7224 109.223C44.7224 109.099 44.6728 108.979 44.5846 108.891C44.4963 108.802 44.3767 108.753 44.2519 108.753ZM26.3638 108.76C26.239 108.76 26.1193 108.81 26.0311 108.898C25.9428 108.986 25.8933 109.106 25.8933 109.231C25.8933 109.356 25.9428 109.475 26.0311 109.564C26.1193 109.652 26.239 109.701 26.3638 109.701C26.4886 109.701 26.6083 109.652 26.6965 109.564C26.7848 109.475 26.8344 109.356 26.8344 109.231C26.8344 109.106 26.7848 108.986 26.6965 108.898C26.6083 108.81 26.4886 108.76 26.3638 108.76ZM67.7754 108.764C67.6506 108.764 67.531 108.813 67.4427 108.902C67.3545 108.99 67.3049 109.11 67.3049 109.234C67.3049 109.359 67.3545 109.479 67.4427 109.567C67.531 109.655 67.6506 109.705 67.7754 109.705C67.9002 109.705 68.0199 109.655 68.1082 109.567C68.1964 109.479 68.246 109.359 68.246 109.234C68.246 109.11 68.1964 108.99 68.1082 108.902C68.0199 108.813 67.9002 108.764 67.7754 108.764ZM85.6598 108.773C85.535 108.773 85.4153 108.823 85.3271 108.911C85.2388 108.999 85.1893 109.119 85.1893 109.244C85.1893 109.368 85.2388 109.488 85.3271 109.576C85.4153 109.665 85.535 109.714 85.6598 109.714C85.7846 109.714 85.9043 109.665 85.9925 109.576C86.0808 109.488 86.1304 109.368 86.1304 109.244C86.1304 109.119 86.0808 108.999 85.9925 108.911C85.9043 108.823 85.7846 108.773 85.6598 108.773ZM38.5961 108.777C38.4713 108.777 38.3517 108.826 38.2634 108.915C38.1752 109.003 38.1256 109.123 38.1256 109.247C38.1256 109.372 38.1752 109.492 38.2634 109.58C38.3517 109.668 38.4713 109.718 38.5961 109.718C38.7209 109.718 38.8406 109.668 38.9289 109.58C39.0171 109.492 39.0667 109.372 39.0667 109.247C39.0667 109.123 39.0171 109.003 38.9289 108.915C38.8406 108.826 38.7209 108.777 38.5961 108.777ZM73.4256 108.78C73.3008 108.78 73.1812 108.83 73.0929 108.918C73.0047 109.007 72.9551 109.126 72.9551 109.251C72.9551 109.376 73.0047 109.495 73.0929 109.584C73.1812 109.672 73.3008 109.722 73.4256 109.722C73.5504 109.722 73.6701 109.672 73.7584 109.584C73.8466 109.495 73.8962 109.376 73.8962 109.251C73.8962 109.126 73.8466 109.007 73.7584 108.918C73.6701 108.83 73.5504 108.78 73.4256 108.78ZM28.7239 109.683H29.7716V110.622H28.7239V109.683ZM30.7127 109.683H32.1243V110.622H30.7127V109.683ZM33.0654 109.683H34.477V110.622H33.0654V109.683ZM35.4181 109.683H36.2526V110.622H35.4181V109.683ZM75.7784 109.683H76.8261V110.598H75.7784V109.683ZM77.7672 109.683H79.1788V110.598H77.7672V109.683ZM80.1199 109.683H81.5315V110.598H80.1199V109.683ZM82.4726 109.683H83.3071V110.598H82.4726V109.683Z", "fill", "#00599D"], ["d", "M36.6913 87.1081C36.4315 87.1081 36.2207 86.8973 36.2207 86.6375V84.3959C36.2207 83.61 35.8311 82.8798 35.1789 82.4412L32.4564 80.6164L29.7338 82.4412C29.0816 82.8798 28.692 83.61 28.692 84.3959V86.6375C28.692 86.8973 28.4812 87.1081 28.2215 87.1081C27.9617 87.1081 27.7509 86.8973 27.7509 86.6375V84.3959C27.7509 83.2957 28.2967 82.2728 29.2105 81.6601L32.1947 79.6593C32.3528 79.553 32.5608 79.553 32.7189 79.6593L35.7031 81.6601C36.616 82.2728 37.1618 83.2957 37.1618 84.3959V86.6375C37.1618 86.8973 36.951 87.1081 36.6913 87.1081Z", "fill", "#00599D"], ["d", "M33.868 85.2646H31.0447C30.785 85.2646 30.5742 85.0538 30.5742 84.794V82.8733C30.5742 82.6135 30.785 82.4027 31.0447 82.4027H33.868C34.1277 82.4027 34.3385 82.6135 34.3385 82.8733V84.794C34.3385 85.0538 34.1277 85.2646 33.868 85.2646ZM31.5152 84.3235H33.3974V83.3438H31.5152V84.3235ZM80.9225 85.2646H78.0992C77.8394 85.2646 77.6286 85.0538 77.6286 84.794V82.8733C77.6286 82.6135 77.8394 82.4027 78.0992 82.4027H80.9225C81.1822 82.4027 81.393 82.6135 81.393 82.8733V84.794C81.393 85.0538 81.1822 85.2646 80.9225 85.2646ZM78.5697 84.3235H80.4519V83.3438H78.5697V84.3235ZM48.4549 56.9641C47.6766 56.9641 47.0432 57.5975 47.0432 58.3758V62.1401C47.0432 62.3999 47.254 62.6107 47.5138 62.6107H49.396C49.6557 62.6107 49.8665 62.3999 49.8665 62.1401V58.3758C49.8665 57.5975 49.2331 56.9641 48.4549 56.9641ZM48.9254 61.6696H47.9843V58.3758C47.9843 58.117 48.1961 57.9052 48.4549 57.9052C48.7137 57.9052 48.9254 58.117 48.9254 58.3758V61.6696ZM63.5123 56.9641C62.734 56.9641 62.1007 57.5975 62.1007 58.3758V62.1401C62.1007 62.3999 62.3115 62.6107 62.5712 62.6107H64.4534C64.7131 62.6107 64.9239 62.3999 64.9239 62.1401V58.3758C64.9239 57.5975 64.2906 56.9641 63.5123 56.9641ZM63.9828 61.6696H63.0418V58.3758C63.0418 58.117 63.2535 57.9052 63.5123 57.9052C63.7711 57.9052 63.9828 58.117 63.9828 58.3758V61.6696ZM49.396 50.3765C49.6557 50.3765 49.8665 50.1657 49.8665 49.9059V48.9649C49.8665 48.1866 49.2331 47.5532 48.4549 47.5532C47.6766 47.5532 47.0432 48.1866 47.0432 48.9649V49.9059C47.0432 50.1657 47.254 50.3765 47.5138 50.3765H49.396ZM47.9843 48.9649C47.9843 48.7061 48.1961 48.4943 48.4549 48.4943C48.7137 48.4943 48.9254 48.7061 48.9254 48.9649V49.4354H47.9843V48.9649ZM55.0425 50.3765H56.9247C57.1844 50.3765 57.3952 50.1657 57.3952 49.9059V48.9649C57.3952 48.1866 56.7619 47.5532 55.9836 47.5532C55.2053 47.5532 54.5719 48.1866 54.5719 48.9649V49.9059C54.5719 50.1657 54.7828 50.3765 55.0425 50.3765ZM55.513 48.9649C55.513 48.7061 55.7248 48.4943 55.9836 48.4943C56.2424 48.4943 56.4541 48.7061 56.4541 48.9649V49.4354H55.513V48.9649ZM62.5712 50.3765H64.4534C64.7131 50.3765 64.9239 50.1657 64.9239 49.9059V48.9649C64.9239 48.1866 64.2906 47.5532 63.5123 47.5532C62.734 47.5532 62.1007 48.1866 62.1007 48.9649V49.9059C62.1007 50.1657 62.3115 50.3765 62.5712 50.3765ZM63.0418 48.9649C63.0418 48.7061 63.2535 48.4943 63.5123 48.4943C63.7711 48.4943 63.9828 48.7061 63.9828 48.9649V49.4354H63.0418V48.9649ZM55.9836 56.9641C54.1673 56.9641 52.6898 58.4416 52.6898 60.2579C52.6898 62.0742 54.1673 63.5518 55.9836 63.5518C57.7999 63.5518 59.2774 62.0742 59.2774 60.2579C59.2774 58.4416 57.7999 56.9641 55.9836 56.9641ZM55.9836 62.6107C54.6858 62.6107 53.6309 61.5557 53.6309 60.2579C53.6309 58.9602 54.6858 57.9052 55.9836 57.9052C57.2813 57.9052 58.3363 58.9602 58.3363 60.2579C58.3363 61.5557 57.2813 62.6107 55.9836 62.6107Z", "fill", "#00599D"], ["d", "M56.4538 59.7876V58.8465C56.4538 58.5868 56.243 58.376 55.9832 58.376C55.7235 58.376 55.5127 58.5868 55.5127 58.8465V60.2582C55.5127 60.5179 55.7235 60.7287 55.9832 60.7287H57.3949C57.6546 60.7287 57.8654 60.5179 57.8654 60.2582C57.8654 59.9984 57.6546 59.7876 57.3949 59.7876H56.4538ZM59.3081 82.4321H52.7205C52.4607 82.4321 52.2499 82.6429 52.2499 82.9027V84.7848C52.2499 85.0446 52.4607 85.2554 52.7205 85.2554H59.3081C59.5679 85.2554 59.7787 85.0446 59.7787 84.7848V82.9027C59.7787 82.6429 59.5688 82.4321 59.3081 82.4321ZM58.8376 84.3143H53.191V83.3732H58.8376V84.3143Z", "fill", "#00599D"], [1, "col-md-4", "category-col"], [1, "card", "card--category"], [1, "card-front"], ["width", "78px", "height", "78px", "appLazyLoad", "", "src", "https://static.umang.gov.in/cdn/landing/theme/category/student.svg", "alt", "", "onError", "this.src='assets/images/no-image-sm.png'", 1, "card__img", "resp-image", "lazyload"], [1, "card__body"], [1, "card-text", "cat-name", "line-clamp-3"], ["matRipple", "", "role", "button", 1, "card-back"], [1, "card__body", "position-relative"], ["appLazyLoad", "", "src", "assets/images/arrow-right.svg", "alt", "arrow-right", "width", "24px", "height", "24px", 1, "arrow-icon"], [1, "card-text", "cat-name"], [1, "social-text"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "21,865 Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Bill Payment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "20,197");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Other Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "1,668");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3)(22, "div", 4)(23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "21,865 Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7)(28, "div", 8)(29, "div", 9)(30, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Bill Payment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "20,197");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9)(35, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Other Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "1,668");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3)(40, "div", 4)(41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "21,865 Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7)(46, "div", 8)(47, "div", 9)(48, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Bill Payment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "20,197");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 9)(53, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Other Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "1,668");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 3)(58, "div", 4)(59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "21,865 Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 7)(64, "div", 8)(65, "div", 9)(66, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Bill Payment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "20,197");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 9)(71, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Other Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "1,668");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 12)(76, "div", 13)(77, "div", 14)(78, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "What's New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Explore the services recently added to the UMANG platform! Services related to NTA, Elder Line helping, etc can now be availed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 17)(83, "div", 8)(84, "div", 18)(85, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, HomeComponent_li_86_Template, 8, 5, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 21)(88, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Services by States");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Explore what services are offered by different States and Union Territories of India.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Explore 20+ States");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "section", 23)(95, "div", 24)(96, "div", 8)(97, "div", 25)(98, "div", 26)(99, "h2", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Benefits of UMANG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "An initiative by the Ministry of Electronics and Information Technology (MeitY) and National e-Governance Division (NeGD), UMANG strives to be the one stop solution for all e-GOV services pan India.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 29)(104, "div", 30)(105, "div", 31)(106, "div", 32)(107, "div", 33)(108, "div", 34)(109, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "All Services at one place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "ul", 37)(114, "li", 38)(115, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Central Government");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li", 38)(118, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Utility Bills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li", 38)(121, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "State Government");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 32)(124, "div", 33)(125, "div", 34)(126, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "All Documents at one place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "ul", 37)(131, "li", 38)(132, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Aadhaar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li", 38)(135, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Driving License");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li", 38)(138, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "PAN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li", 38)(141, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Vehicle RC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li", 38)(144, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "and many more from Digilocker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 32)(147, "div", 33)(148, "div", 34)(149, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "All Engagements at one place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "ul", 37)(154, "li", 38)(155, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Feedback & Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li", 38)(158, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li", 38)(161, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Customer Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li", 38)(164, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Live Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li", 38)(167, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "AI Bot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 32)(170, "div", 33)(171, "div", 34)(172, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "All Transactions at one place");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "ul", 37)(177, "li", 38)(178, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "li", 38)(181, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Bills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li", 38)(184, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li", 38)(187, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "and many more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "section", 44)(191, "div", 12)(192, "div", 45)(193, "div")(194, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "UMANG has innumerable services offered by many Government bodies and organisations. To ease the job of finding services relevant for you, we have categorised these State and central Government Bodies into different groups such as Students, Health, etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Explore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "17");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](204, HomeComponent_div_204_Template, 16, 0, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "section", 48)(206, "div", 12)(207, "div", 49)(208, "div", 50)(209, "div", 51)(210, "div", 52)(211, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Schemes For You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Find Government Schemes you are eligible for on myScheme platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Check Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 12)(220, "div", 55)(221, "div", 56)(222, "div", 57)(223, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Need help with a service?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "We are available all days of the week from 10 am to 6 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 58)(228, "a", 59)(229, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Toll Free: 1800-11-5246");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 61)(233, "div", 62)(234, "div", 63)(235, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Download & Expore the Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, blandit eu ipsum nulla in ac viverra varius. Diam sit mauris, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "ul", 64)(240, "li")(241, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "li")(244, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 69)(247, "h6", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Follow Us:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "ul", 71)(250, "li", 72)(251, "a", 73)(252, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](254, HomeComponent_span_254_Template, 3, 3, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "li", 77)(256, "a", 78)(257, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](259, HomeComponent_span_259_Template, 3, 3, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "li", 80)(261, "a", 81)(262, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](264, HomeComponent_span_264_Template, 3, 3, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "li", 83)(266, "a", 84)(267, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](269, HomeComponent_span_269_Template, 3, 3, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "li", 86)(271, "a", 87)(272, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](274, HomeComponent_span_274_Template, 3, 3, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], styles: ["@font-face {\n  font-family: \"poppinsbold\";\n  src: local(\"poppins-bold-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-bold-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinslight\";\n  src: local(\"poppins-light-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-light-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-display: swap;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"poppinsmedium\";\n  src: local(\"poppins-medium-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-medium-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-medium-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinsregular\";\n  src: local(\"poppins-regular-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-regular-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinssemibold\";\n  src: local(\"poppins-semibold-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-semibold-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-semibold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\nbody[_ngcontent-%COMP%] {\n  --f-xxs: 12px;\n  --f-xs: 13px;\n  --f-s: 14px;\n  --f-a: 15px;\n  --f-m: 16px;\n  --f-l: 18px;\n  --f-xl: 22px;\n  --f-xxl: 25px;\n  --f-xxxl: 30px;\n  --t-left: left;\n  --t-center: center;\n  --p-right: right;\n  --f-key: 24px;\n}\nbody.small[_ngcontent-%COMP%] {\n  --f-xxs: 10px;\n  --f-xs: 11px;\n  --f-s: 12px;\n  --f-a: 13px;\n  --f-m: 14px;\n  --f-l: 15px;\n  --f-xl: 16px;\n  --f-xxl: 17px;\n  --f-xxxl: 25px;\n  --f-key: 20px;\n  --f-xxxl: 25px;\n  --f-download: 30px;\n}\nbody.normal[_ngcontent-%COMP%] {\n  --f-xxs: 12px;\n  --f-xs: 13px;\n  --f-s: 14px;\n  --f-a: 15px;\n  --f-m: 16px;\n  --f-l: 17px;\n  --f-xl: 18px;\n  --f-xxl: 19px;\n  --f-xxxl: 30px;\n  --f-key: 24px;\n  --f-download: 40px;\n}\nbody.large[_ngcontent-%COMP%] {\n  --f-xxs: 14px;\n  --f-xs: 15px;\n  --f-s: 16px;\n  --f-a: 17px;\n  --f-m: 18px;\n  --f-l: 19px;\n  --f-xl: 20px;\n  --f-xxl: 21px;\n  --f-xxxl: 35px;\n  --f-key: 28px;\n  --f-download: 35px;\n}\n@font-face {\n  font-family: \"poppinsbold\";\n  src: local(\"poppins-bold-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-bold-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-bold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinslight\";\n  src: local(\"poppins-light-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-light-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-light-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-display: swap;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"poppinsmedium\";\n  src: local(\"poppins-medium-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-medium-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-medium-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinsregular\";\n  src: local(\"poppins-regular-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-regular-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-regular-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n@font-face {\n  font-family: \"poppinssemibold\";\n  src: local(\"poppins-semibold-webfont\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-semibold-webfont.woff2\") format(\"woff2\"), url(\"https://static.umang.gov.in/cdn/landing/fonts/poppins-semibold-webfont.woff\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\nbody[_ngcontent-%COMP%] {\n  --f-xxs: 12px;\n  --f-xs: 13px;\n  --f-s: 14px;\n  --f-a: 15px;\n  --f-m: 16px;\n  --f-l: 18px;\n  --f-xl: 22px;\n  --f-xxl: 25px;\n  --f-xxxl: 30px;\n  --t-left: left;\n  --t-center: center;\n  --p-right: right;\n  --f-key: 24px;\n}\nbody.small[_ngcontent-%COMP%] {\n  --f-xxs: 10px;\n  --f-xs: 11px;\n  --f-s: 12px;\n  --f-a: 13px;\n  --f-m: 14px;\n  --f-l: 15px;\n  --f-xl: 16px;\n  --f-xxl: 17px;\n  --f-xxxl: 25px;\n  --f-key: 20px;\n  --f-xxxl: 25px;\n  --f-download: 30px;\n}\nbody.normal[_ngcontent-%COMP%] {\n  --f-xxs: 12px;\n  --f-xs: 13px;\n  --f-s: 14px;\n  --f-a: 15px;\n  --f-m: 16px;\n  --f-l: 17px;\n  --f-xl: 18px;\n  --f-xxl: 19px;\n  --f-xxxl: 30px;\n  --f-key: 24px;\n  --f-download: 40px;\n}\nbody.large[_ngcontent-%COMP%] {\n  --f-xxs: 14px;\n  --f-xs: 15px;\n  --f-s: 16px;\n  --f-a: 17px;\n  --f-m: 18px;\n  --f-l: 19px;\n  --f-xl: 20px;\n  --f-xxl: 21px;\n  --f-xxxl: 35px;\n  --f-key: 28px;\n  --f-download: 35px;\n}\n  .hero-section .owl-theme .owl-nav.disabled + .owl-dots {\n  margin: 0;\n  position: absolute;\n  bottom: 10px;\n  width: 100%;\n}\n.statistics[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  border-bottom: 1px solid #DDDEE3;\n  border-top: 1px solid #DDDEE3;\n}\n.statistics__col[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 1px solid #DDDEE3;\n}\n.statistics__card[_ngcontent-%COMP%] {\n  padding: 24px 20px 20px;\n  background: #ffffff;\n}\n.statistics__card__header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.statistics__card__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 1.125rem;\n  padding-left: 16px;\n  color: #00599f;\n  font-family: \"poppinssemibold\";\n}\n.statistics__card__body[_ngcontent-%COMP%]   .stats__label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #4c4c4c;\n  font-family: \"poppinsmedium\";\n  margin-bottom: 5px;\n}\n.statistics__card__body[_ngcontent-%COMP%]   .stats__value[_ngcontent-%COMP%] {\n  color: #1a1a1a;\n  font-size: 1.125em;\n  font-family: \"poppinsbold\";\n}\n  .multi-item-carousel-wrapper {\n  margin-bottom: 100px;\n}\n  .multi-item-carousel-wrapper .owl-carousel {\n  margin: 0 -20px;\n}\n  .multi-item-carousel-wrapper .owl-stage-outer {\n  padding: 20px;\n}\n  .multi-item-carousel-wrapper .owl-nav {\n  position: absolute;\n  right: 0;\n  top: -97px;\n  margin: 0;\n}\n  .multi-item-carousel-wrapper .owl-nav [class*=owl-] {\n  background: #ffffff;\n  border: 1px solid #4C4C4C;\n  width: 56px;\n  height: 56px;\n  overflow: hidden;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n}\n  .multi-item-carousel-wrapper .owl-nav [class*=owl-]:not(:last-child) {\n  margin-right: 24px;\n}\n  .multi-item-carousel-wrapper .owl-nav [class*=owl-] i {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  color: #4C4C4C;\n}\n  .multi-item-carousel-wrapper .owl-nav [class*=owl-]:hover {\n  background: #00599f;\n  border-color: #00599f;\n}\n  .multi-item-carousel-wrapper .owl-nav [class*=owl-]:hover i {\n  color: #ffffff;\n}\n  .multi-item-carousel-wrapper .owl-nav [class*=owl-].disabled:hover {\n  background: #ffffff;\n  border: 1px solid #4C4C4C;\n}\n  .multi-item-carousel-wrapper .owl-nav [class*=owl-].disabled:hover i {\n  color: #4C4C4C;\n}\n.service-card__body[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  background: #ffffff;\n  transition: all 0.2s ease-in-out;\n  box-shadow: 0 14px 20px rgba(76, 119, 171, 0.1);\n  width: 100%;\n  padding: 20px;\n}\n.service-card__body__img[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  margin-bottom: 16px;\n}\n.service-card__body__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.service-card__body__content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  color: #1a1a1a;\n  font-size: 1rem;\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  overflow: hidden;\n  font-family: \"poppinsmedium\";\n}\n.service-card__body[_ngcontent-%COMP%]:hover   .service-card__body__content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #00599f;\n}\n.states-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -13.5px;\n  padding: 0;\n  position: relative;\n  padding-top: 50px;\n  padding-left: 40px;\n}\n@media (max-width: 991px) {\n  .states-card[_ngcontent-%COMP%] {\n    padding-left: 0;\n    padding-top: 30px;\n  }\n}\n.states-card[_ngcontent-%COMP%]::before {\n  width: 454.55px;\n  height: 424.43px;\n  position: absolute;\n  background: #E6EEF5;\n  content: \"\";\n  display: block;\n  border-radius: 30.1149px;\n  z-index: -1;\n  top: 0;\n  left: 0;\n}\n@media (max-width: 576px) {\n  .states-card[_ngcontent-%COMP%]::before {\n    width: 80%;\n    height: 310px;\n  }\n}\n.states-card__body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 260px;\n  border-radius: 22px;\n  box-shadow: 0px 13.1753px 18.8218px rgba(76, 119, 171, 0.1);\n  display: inline-flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-around;\n  font-size: 1.5rem;\n  background: #ffffff;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .states-card__body[_ngcontent-%COMP%] {\n    padding: 20px 0;\n    height: auto;\n  }\n}\n@media (max-width: 767px) {\n  .states-card__body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .states-card__body[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 100px;\n    margin-bottom: 30px;\n  }\n}\n@media (max-width: 480px) {\n  .states-card__body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .states-card__body[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 60%;\n    margin-bottom: 10px;\n  }\n}\n.states-card__body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n@media (max-width: 480px) {\n  .states-card__body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.states-card__body[_ngcontent-%COMP%]:hover {\n  background: #00599f !important;\n  transition: all 0.2s ease-in-out;\n}\n.states-card__body[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  fill: #ffffff !important;\n}\n.states-card__body[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n  fill: #ffffff !important;\n}\n.states-card__body[_ngcontent-%COMP%]:hover   h5[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.states-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  width: 50%;\n  padding: 0 13.5px;\n}\n.states-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2n+1) {\n  margin-bottom: 27px;\n}\n.states-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n  margin-top: 50px;\n}\n@media (max-width: 576px) {\n  .states-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\n    margin-top: 30px;\n  }\n}\n.states-left[_ngcontent-%COMP%] {\n  max-width: 630px;\n  padding: 0 30px;\n}\n.states-right[_ngcontent-%COMP%] {\n  max-width: calc(100% - 630px);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding-left: 120px;\n}\n@media (max-width: 991px) {\n  .states-right[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    max-width: inherit;\n  }\n}\n@media (max-width: 767px) {\n  .states-right[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    padding: 0 15px;\n    margin-top: 60px;\n  }\n}\n.states-right[_ngcontent-%COMP%]   .main-heading[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.states-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n.service-state-container[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n@media (max-width: 767px) {\n  .service-state-container[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n}\n.benefits-section[_ngcontent-%COMP%] {\n  background-position: 0, 100%;\n  background-repeat: no-repeat;\n  background: #00599f;\n  padding-top: 60px;\n  padding-bottom: 0;\n  margin-bottom: 90px;\n}\n.benefit-card-col[_ngcontent-%COMP%]:nth-child(1), .benefit-card-col[_ngcontent-%COMP%]:nth-child(2) {\n  margin-bottom: 30px;\n}\n@media (max-width: 576px) {\n  .benefit-card-col[_ngcontent-%COMP%]:not(:last-child) {\n    margin-bottom: 15px;\n  }\n}\n.benefit-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  background: #ffffff;\n  padding: 24px;\n  height: 100%;\n}\n.benefit-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #00599f;\n  font-family: \"poppinsmedium\";\n}\n.benefits-list-item[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n  margin: 0 -8px;\n}\n.benefits-list-item[_ngcontent-%COMP%]   .benefits-list-items[_ngcontent-%COMP%] {\n  padding: 8px;\n  display: inline-block;\n}\n.benefits-list-item[_ngcontent-%COMP%]   .benefits-list-items[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  padding: 4px 12px;\n  display: inline-block;\n  border: 1px solid #DDDEE3;\n  border-radius: 40px;\n  font-family: \"poppinsmedium\";\n}\n.heading-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  width: 85%;\n}\n@media (max-width: 991px) {\n  .heading-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.keyfeature-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 60px;\n}\n@media (max-width: 767px) {\n  .keyfeature-wrapper[_ngcontent-%COMP%] {\n    padding-bottom: 40px;\n  }\n}\n.avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  width: 452px;\n  bottom: 0;\n  height: auto;\n  margin: auto;\n}\n@media (max-width: 991px) {\n  .avatar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 991px) {\n  .benefit-col-left[_ngcontent-%COMP%] {\n    max-width: 100%;\n    flex: 0 0 100%;\n  }\n}\n.category-col[_ngcontent-%COMP%] {\n  background-color: transparent;\n  perspective: 1000px;\n  margin-bottom: 30px;\n}\n@media (max-width: 767px) {\n  .category-col[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n    max-width: 50%;\n    flex: 0 0 50%;\n  }\n}\n@media (max-width: 576px) {\n  .category-col[_ngcontent-%COMP%] {\n    max-width: 100%;\n    flex: 0 0 100%;\n  }\n}\n.card--category[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  border: 1px solid #DDDEE3;\n  padding: 20px;\n  border-radius: 8px;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .card--category[_ngcontent-%COMP%] {\n    transform: none;\n    transform-style: inherit;\n  }\n}\n.category-col[_ngcontent-%COMP%]:hover   .card--category[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n@media (max-width: 767px) {\n  .category-col[_ngcontent-%COMP%]:hover   .card--category[_ngcontent-%COMP%] {\n    transform: none;\n  }\n}\n.card-front[_ngcontent-%COMP%], .card-back[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  border-radius: 8px;\n}\n.card-front[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: black;\n  display: flex;\n  align-items: center;\n}\n.card-front[_ngcontent-%COMP%]   .card__body[_ngcontent-%COMP%] {\n  width: calc(100% - 78px);\n  padding-left: 20px;\n}\n.card-back[_ngcontent-%COMP%] {\n  background-color: #00599f;\n  color: white;\n  transform: rotateY(180deg);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  padding: 20px;\n}\n.card-back[_ngcontent-%COMP%]   .card__body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .card-back[_ngcontent-%COMP%]   .card__body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.card__body[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.card__body[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -5px;\n  top: -5px;\n}\n.card__body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-family: \"poppinsmedium\";\n  margin-bottom: 6px;\n  color: #1a1a1a;\n}\n.card__body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-family: \"poppinsregular\";\n}\n.row--myschemes[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 60px;\n}\n.card--myschemes[_ngcontent-%COMP%] {\n  background: #6FCF97 url('myscheme-pattern.svg');\n  border-radius: 40px;\n  padding: 15px 60px;\n  min-height: 360px;\n  border: none;\n  flex-direction: row;\n}\n@media (max-width: 767px) {\n  .card--myschemes[_ngcontent-%COMP%] {\n    border-radius: 10px;\n    padding: 20px 10px;\n    min-height: auto;\n  }\n}\n.card--myschemes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5B6365;\n  font-size: var(--f-xl);\n}\n.card--myschemes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6FCF97;\n}\n.card--myschemes[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #1a1a1a;\n  margin: 0;\n  font-size: 2.5rem;\n  font-weight: 500;\n  margin-bottom: 24px;\n}\n@media (max-width: 767px) {\n  .card--myschemes[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    font-size: 1.5rem;\n  }\n}\n@media (max-width: 576px) {\n  .card--myschemes[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.card--myschemes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 500;\n  margin: 0;\n  line-height: 40px;\n  color: #1a1a1a;\n  width: 80%;\n  margin-bottom: 30px;\n}\n@media (max-width: 1024px) {\n  .card--myschemes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 96%;\n    font-size: 1rem;\n  }\n}\n@media (max-width: 767px) {\n  .card--myschemes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    font-size: 0.875rem;\n    line-height: 20px;\n  }\n}\n@media (max-width: 576px) {\n  .card--myschemes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\n.card--myschemes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.3);\n  font-size: 1rem;\n  color: #ffffff;\n  transition: background 0.5s ease;\n  padding: 12px 24px;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  flex-shrink: 0;\n}\n@media (max-width: 576px) {\n  .card--myschemes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    border-radius: 4px;\n    font-size: 0.75rem;\n  }\n}\n.card--myschemes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgb(0, 0, 0);\n  transition: background 0.5s ease;\n}\n.card-thumbnail[_ngcontent-%COMP%] {\n  width: 350px;\n  flex-shrink: 0;\n  transform: translateY(4px);\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 767px) {\n  .card-thumbnail[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n}\n@media (max-width: 576px) {\n  .card-thumbnail[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n}\n.card-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: flex-start;\n}\n@media (max-width: 576px) {\n  .card-body[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.support-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 40px;\n  border: 1px solid #DDDEE3;\n  padding: 40px;\n}\n@media (max-width: 767px) {\n  .support-wrapper[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n}\n@media (max-width: 576px) {\n  .support-wrapper[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n  }\n}\n.contact-us-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #00599f;\n  font-size: 2.5rem;\n  line-height: 1.4;\n  font-family: \"poppinsmedium\";\n  margin-bottom: 10px;\n}\n@media (max-width: 480px) {\n  .contact-us-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n}\n.contact-us-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #1a1a1a;\n  font-size: 1.5rem;\n  line-height: 1.4;\n  font-family: \"poppinslight\";\n  line-height: 45px;\n  margin-bottom: 40px;\n  width: 80%;\n}\n@media (max-width: 767px) {\n  .contact-us-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 576px) {\n  .contact-us-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n@media (max-width: 480px) {\n  .contact-us-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    line-height: 1.4;\n    margin: 0;\n  }\n}\n.call-to-action[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n@media (max-width: 576px) {\n  .call-to-action[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n@media (max-width: 480px) {\n  .call-to-action[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 767px) {\n  .call-to-action[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.customer-heading[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.4;\n  color: rgb(60, 64, 67);\n  display: inline-block;\n}\n.btn-outline-primary[_ngcontent-%COMP%] {\n  color: #00599f;\n  border-color: #00599f;\n}\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #0069d9;\n  border-color: #0062cc;\n}\n@media (max-width: 767px) {\n  .help-img[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .support-left[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n.download-app-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n  align-items: center;\n  background: #ffffff;\n  padding: 40px 30px;\n  border-radius: 10px;\n}\n@media (max-width: 576px) {\n  .download-app-section[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n}\n@media (max-width: 480px) {\n  .download-app-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 0;\n  }\n}\n.download-app-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.125rem;\n  line-height: 1.4;\n  font-family: \"poppinsmedium\";\n  color: #1a1a1a;\n  margin-bottom: 0;\n  text-align: left;\n}\n@media (max-width: 576px) {\n  .download-app-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.875rem;\n    text-align: left;\n  }\n}\n@media (max-width: 480px) {\n  .download-app-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-bottom: 10px;\n    width: 100%;\n  }\n}\n.download-app-section[_ngcontent-%COMP%]   p.download-misscall[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 1.4;\n  margin-bottom: 16px;\n  font-family: \"poppinsmedium\";\n}\n@media (max-width: 576px) {\n  .download-app-section[_ngcontent-%COMP%]   p.download-misscall[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n    text-align: center;\n  }\n}\n.download-app-section[_ngcontent-%COMP%]   p.download-misscall[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00599f;\n}\n.download-app-section[_ngcontent-%COMP%]   p.download-misscall[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: #003c6c;\n}\n.download-app-section[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-bottom: 40px;\n  padding-left: 0;\n}\n@media (max-width: 480px) {\n  .download-app-section[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.download-app-section[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  transition: all 0.2s ease-in-out;\n}\n.download-app-section[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 21px;\n}\n@media (max-width: 576px) {\n  .download-app-section[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 14px;\n  }\n}\n.download-app-section[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: auto;\n  border-radius: 50%;\n  background: #ffffff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s ease-in-out;\n}\n.download-app-section[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transition: all 0.2s ease-in-out;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);\n}\n.download-app-section[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 47px;\n}\n@media (max-width: 576px) {\n  .download-app-section[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n}\n.download-app-section[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transition: all 0.2s ease-in-out;\n}\n.download-app-section[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.not-clickable[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.download-app-section[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.not-clickable[_ngcontent-%COMP%]:hover {\n  transform: scale(1);\n  box-shadow: none;\n}\n.download-app-section[_ngcontent-%COMP%]   .download-left[_ngcontent-%COMP%] {\n  width: calc(100% - 330px);\n  padding-left: 100px;\n}\n@media (max-width: 991px) {\n  .download-app-section[_ngcontent-%COMP%]   .download-left[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-left: 0;\n  }\n}\n.download-app-section[_ngcontent-%COMP%]   .downloa-right[_ngcontent-%COMP%] {\n  width: 330px;\n  text-align: center;\n}\n@media (max-width: 991px) {\n  .download-app-section[_ngcontent-%COMP%]   .downloa-right[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.download-app-section[_ngcontent-%COMP%]   .downloa-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.download-app-section[_ngcontent-%COMP%]   .downloa-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.4;\n}\n.social-media-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.menu-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 16px;\n}\n.menu-list-item[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.menu-list-item[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 16px;\n}\n@media (max-width: 576px) {\n  .menu-list-item[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n}\n@media (max-width: 576px) {\n  .menu-list-item[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n  }\n}\n.menu-list-item[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  animation: rotate-btn 0.3s linear alternate;\n  -webkit-animation: rotate-btn 0.3s linear alternate;\n}\n@keyframes rotate-btn {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(45deg);\n  }\n  50% {\n    transform: rotate(0);\n  }\n  75% {\n    transform: rotate(-45deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL192YXJpYWJsZXMuc2NzcyIsImhvbWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NBO0VBQ0ksMEJBQUE7RUFDQSxrT0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQzlDSjtBRGlEQTtFQUNJLDJCQUFBO0VBQ0EscU9BQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUMvQ0o7QURrREE7RUFDSSw0QkFBQTtFQUNBLHdPQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDaERKO0FEbURBO0VBQ0ksNkJBQUE7RUFDQSwyT0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2pESjtBRG9EQTtFQUNJLDhCQUFBO0VBQ0EsOE9BQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNsREo7QURxREE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNuREo7QURzREE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDbkRKO0FEc0RBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDbkRKO0FEc0RBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FB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UTtFQUNJLGtCQUFBO0FBeVBaO0FDOTlCUTtFRG91QkE7SUFHUSxpQkFBQTtFQTJQZDtBQUNGO0FDbitCUTtFRDB1QkE7SUFFUSxXQUFBO0VBMlBkO0FBQ0Y7QUF6UFE7RUFDSSwyQ0FBQTtFQUNBLG1EQUFBO0FBMlBaO0FBdFBBO0VBQ0k7SUFDRSxvQkFBQTtFQXlQSjtFQXZQRTtJQUNJLHdCQUFBO0VBeVBOO0VBdlBFO0lBQ0ksb0JBQUE7RUF5UE47RUF2UEU7SUFDSSx5QkFBQTtFQXlQTjtFQXZQRTtJQUNFLG9CQUFBO0VBeVBKO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRmb250OidETSBTYW5zJyxcbnNhbnMtc2VyaWY7XG4kbGlnaHQ6ICNmZmZmZmY7XG4kZ3JheS0zMDA6ICNERERFRTM7XG4kZ3JheS0yMDA6ICNlZWVlZWU7XG4kYmxhY2s6IzAwMDAwMDtcbiRncmF5LTgwMDogIzFhMWExYTtcbiRncmF5LTYwMDojNGM0YzRjO1xuJHByaW1hcnk6ICMwMDU5OWY7XG4kcHJpbWFyeS1saWdodDogcmdiYSgwLCA5MCwgMTU5LCAwLjEwKTtcblxuJHJlZ3VsYXI6NDAwO1xuJHNlbWktYm9sZDo1MDA7XG4kYm9sZDo2MDA7XG4kcGhvbmUtc206MzYwcHg7XG4kcGhvbmU6IDQ4MHB4O1xuJHBob25lLWxhbmRzY2FwZTogNTc2cHg7XG4kdGFibGV0OiA3NjdweDtcbiRsYXB0b3B2aWV3OiA5OTFweDtcbiRsYXB0b3A6IDEwMjRweDtcbiRkZWtzdG9wOiAxMjgwcHg7XG4kbGFyZ2U6IDEzNjBweDtcblxuJHNjaGVtZS1wcmltYXJ5OiM2RkNGOTc7XG4kc2NoZW1lLWxpZ2h0OiNFOUZCRUU7XG4kc2NoZW1lLWdyYXk6IzVCNjM2NTtcblxuXG4kZGFuZ2VyOiByZ2IoMjU1LCA3NywgOTkpO1xuJHJlZDojZmYzYjNiO1xuJHN1Y2Nlc3M6ICMzRDkwM0Y7XG5cbiRncmF5LWJyZWFkY3J1bWI6I2Y5ZmFmYjtcbiRmb250LWxpZ2h0Oidwb3BwaW5zbGlnaHQnO1xuJGZvbnQtcmVndWxhcjoncG9wcGluc3JlZ3VsYXInO1xuJGZvbnQtbWVkaXVtOidwb3BwaW5zbWVkaXVtJztcbiRmb250LWJvbGQ6J3BvcHBpbnNib2xkJztcbiRmb250LXNlbWlib2xkOidwb3BwaW5zc2VtaWJvbGQnO1xuJHRleHQteHM6MC43NXJlbTsgLy8gMTJweFxuJHRleHQtc206MC44NzVyZW07IC8vIDE0cHhcbiR0ZXh0LWJhc2U6MXJlbTsgLy8gMTZweDtcbiR0ZXh0LWxnOjEuMTI1cmVtOyAvLyAxOHB4XG4kdGV4dC14bDoxLjI1cmVtOyAvLyAyMHB4XG4kdGV4dC0yMjoxLjM3NXJlbTsgLy8gMjJweFxuJHRleHQteHhsOjEuNXJlbTsgLy8gMjRweFxuJHRleHQtMzA6MS44NzVyZW07IC8vIDMwcHhcbiR0ZXh0LTQwOjIuNXJlbTsgLy8gNDBweFxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zYm9sZCc7XG4gICAgc3JjOiBsb2NhbCgncG9wcGlucy1ib2xkLXdlYmZvbnQnKSx1cmwoJ2h0dHBzOi8vc3RhdGljLnVtYW5nLmdvdi5pbi9jZG4vbGFuZGluZy9mb250cy9wb3BwaW5zLWJvbGQtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCdodHRwczovL3N0YXRpYy51bWFuZy5nb3YuaW4vY2RuL2xhbmRpbmcvZm9udHMvcG9wcGlucy1ib2xkLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zbGlnaHQnO1xuICAgIHNyYzogbG9jYWwoJ3BvcHBpbnMtbGlnaHQtd2ViZm9udCcpLHVybCgnaHR0cHM6Ly9zdGF0aWMudW1hbmcuZ292LmluL2Nkbi9sYW5kaW5nL2ZvbnRzL3BvcHBpbnMtbGlnaHQtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCdodHRwczovL3N0YXRpYy51bWFuZy5nb3YuaW4vY2RuL2xhbmRpbmcvZm9udHMvcG9wcGlucy1saWdodC13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAncG9wcGluc21lZGl1bSc7XG4gICAgc3JjOiBsb2NhbCgncG9wcGlucy1tZWRpdW0td2ViZm9udCcpLHVybCgnaHR0cHM6Ly9zdGF0aWMudW1hbmcuZ292LmluL2Nkbi9sYW5kaW5nL2ZvbnRzL3BvcHBpbnMtbWVkaXVtLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnaHR0cHM6Ly9zdGF0aWMudW1hbmcuZ292LmluL2Nkbi9sYW5kaW5nL2ZvbnRzL3BvcHBpbnMtbWVkaXVtLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zcmVndWxhcic7XG4gICAgc3JjOiBsb2NhbCgncG9wcGlucy1yZWd1bGFyLXdlYmZvbnQnKSx1cmwoJ2h0dHBzOi8vc3RhdGljLnVtYW5nLmdvdi5pbi9jZG4vbGFuZGluZy9mb250cy9wb3BwaW5zLXJlZ3VsYXItd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCdodHRwczovL3N0YXRpYy51bWFuZy5nb3YuaW4vY2RuL2xhbmRpbmcvZm9udHMvcG9wcGlucy1yZWd1bGFyLXdlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdwb3BwaW5zc2VtaWJvbGQnO1xuICAgIHNyYzogbG9jYWwoJ3BvcHBpbnMtc2VtaWJvbGQtd2ViZm9udCcpLHVybCgnaHR0cHM6Ly9zdGF0aWMudW1hbmcuZ292LmluL2Nkbi9sYW5kaW5nL2ZvbnRzL3BvcHBpbnMtc2VtaWJvbGQtd2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCdodHRwczovL3N0YXRpYy51bWFuZy5nb3YuaW4vY2RuL2xhbmRpbmcvZm9udHMvcG9wcGlucy1zZW1pYm9sZC13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG59XG5cbmJvZHkge1xuICAgIC0tZi14eHM6IDEycHg7XG4gICAgLS1mLXhzOiAxM3B4O1xuICAgIC0tZi1zOiAxNHB4O1xuICAgIC0tZi1hOiAxNXB4O1xuICAgIC0tZi1tOiAxNnB4O1xuICAgIC0tZi1sOiAxOHB4O1xuICAgIC0tZi14bDogMjJweDtcbiAgICAtLWYteHhsOiAyNXB4O1xuICAgIC0tZi14eHhsOiAzMHB4O1xuICAgIC0tdC1sZWZ0OiBsZWZ0O1xuICAgIC0tdC1jZW50ZXI6IGNlbnRlcjtcbiAgICAtLXAtcmlnaHQ6IHJpZ2h0O1xuICAgIC0tZi1rZXk6IDI0cHg7XG59XG5cbmJvZHkuc21hbGwge1xuICAgIC0tZi14eHM6IDEwcHg7XG4gICAgLS1mLXhzOiAxMXB4O1xuICAgIC0tZi1zOiAxMnB4O1xuICAgIC0tZi1hOiAxM3B4O1xuICAgIC0tZi1tOiAxNHB4O1xuICAgIC0tZi1sOiAxNXB4O1xuICAgIC0tZi14bDogMTZweDtcbiAgICAtLWYteHhsOiAxN3B4O1xuICAgIC0tZi14eHhsOiAyNXB4O1xuICAgIC0tZi1rZXk6IDIwcHg7XG4gICAgLS1mLXh4eGw6IDI1cHg7XG4gICAgLS1mLWRvd25sb2FkOiAzMHB4O1xufVxuXG5ib2R5Lm5vcm1hbCB7XG4gICAgLS1mLXh4czogMTJweDtcbiAgICAtLWYteHM6IDEzcHg7XG4gICAgLS1mLXM6IDE0cHg7XG4gICAgLS1mLWE6IDE1cHg7XG4gICAgLS1mLW06IDE2cHg7XG4gICAgLS1mLWw6IDE3cHg7XG4gICAgLS1mLXhsOiAxOHB4O1xuICAgIC0tZi14eGw6IDE5cHg7XG4gICAgLS1mLXh4eGw6IDMwcHg7XG4gICAgLS1mLWtleTogMjRweDtcbiAgICAtLWYtZG93bmxvYWQ6IDQwcHg7XG59XG5cbmJvZHkubGFyZ2Uge1xuICAgIC0tZi14eHM6IDE0cHg7XG4gICAgLS1mLXhzOiAxNXB4O1xuICAgIC0tZi1zOiAxNnB4O1xuICAgIC0tZi1hOiAxN3B4O1xuICAgIC0tZi1tOiAxOHB4O1xuICAgIC0tZi1sOiAxOXB4O1xuICAgIC0tZi14bDogMjBweDtcbiAgICAtLWYteHhsOiAyMXB4O1xuICAgIC0tZi14eHhsOiAzNXB4O1xuICAgIC0tZi1rZXk6IDI4cHg7XG4gICAgLS1mLWRvd25sb2FkOiAzNXB4O1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uL21peGlucyc7XG5AaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMnO1xuXG46Om5nLWRlZXAge1xuICAgIC5oZXJvLXNlY3Rpb24ge1xuICAgICAgICAub3dsLXRoZW1lIC5vd2wtbmF2LmRpc2FibGVkKy5vd2wtZG90cyB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gc3RhdGlzdGljcyBjb2RlIHN0YXJ0cyBcblxuLnN0YXRpc3RpY3Mge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmF5LTMwMDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGdyYXktMzAwOyAgIFxuICAgICZfX2NvbCB7XG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkZ3JheS0zMDA7XG4gICAgICAgIH1cbiAgICB9IFxuICAgICZfX2NhcmQge1xuICAgICAgICBwYWRkaW5nOiAyNHB4IDIwcHggMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0O1xuICAgICAgICAmX19oZWFkZXIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkdGV4dC1sZztcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1zZW1pYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmX19ib2R5IHtcbiAgICAgICAgICAgIC5zdGF0c19fbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHRleHQteHM7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmF5LTYwMDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJGZvbnQtbWVkaXVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdGF0c19fdmFsdWUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheS04MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjEyNWVtO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1ib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBzdGF0aXN0aWNzIGNvZGUgZW5kIFxuXG4vLyB3aGF0cyBuZXcgY29kZSBzdGFydHNcblxuOjpuZy1kZWVwIHtcbiAgICAubXVsdGktaXRlbS1jYXJvdXNlbC13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICAgIC5vd2wtY2Fyb3VzZWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwIC0yMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5vd2wtc3RhZ2Utb3V0ZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAub3dsLW5hdiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogLTk3cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBbY2xhc3MqPSdvd2wtJ10ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRsaWdodDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEM0QzRDO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1NnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTZweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNEM0QzRDO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnk7XG4gICAgICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRsaWdodDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNEM0QzRDO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0QzRDNEM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5zZXJ2aWNlLWNhcmRfX2JvZHkge1xuICAgIEBpbmNsdWRlIGJvcmRlclJhZGl1cygpO1xuICAgIGJhY2tncm91bmQ6ICRsaWdodDtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKCk7XG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDIwcHggcmdiKDc2IDExOSAxNzEgLyAxMCUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgJl9faW1nIHtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuICAgICZfX2NvbnRlbnQge1xuICAgICAgICBoNCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgY29sb3I6ICRncmF5LTgwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHRleHQtYmFzZTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgICBAaW5jbHVkZSBsaW5lLWNsYW1wKDIpO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgICAgICAgICAgICBcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1tZWRpdW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5zZXJ2aWNlLWNhcmRfX2JvZHlfX2NvbnRlbnQge1xuICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBzdGF0ZXMgY29kZSBzdGFydHMgaGVyZVxuXG5cbi5zdGF0ZXMtY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luOiAwIC0xMy41cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFwdG9wdmlldykge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIH1cbiAgICAmOjpiZWZvcmUge1xuICAgICAgICB3aWR0aDogNDU0LjU1cHg7XG4gICAgICAgIGhlaWdodDogNDI0LjQzcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogI0U2RUVGNTtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMC4xMTQ5cHg7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQocGhvbmUtbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19ib2R5IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjYwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMy4xNzUzcHggMTguODIxOHB4IHJnYmEoNzYsIDExOSwgMTcxLCAwLjEpO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGZvbnQtc2l6ZTogJHRleHQteHhsO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBpbWcsc3ZnIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0KSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHBob25lKSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGg1IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHRleHQteHhsO1xuICAgICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChwaG9uZSkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKCk7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIGNpcmNsZSB7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogJGxpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGgge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGZpbGw6JGxpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRsaWdodDtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICB9XG4gICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBwYWRkaW5nOiAwIDEzLjVweDtcbiAgICAgICAgJjpudGgtY2hpbGQoMm4rMSkge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjdweDtcbiAgICAgICAgfVxuICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChwaG9uZS1sYW5kc2NhcGUpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uc3RhdGVzLWxlZnQge1xuICAgIG1heC13aWR0aDogNjMwcHg7XG4gICAgcGFkZGluZzogMCAzMHB4O1xufVxuXG4uc3RhdGVzLXJpZ2h0IHtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDYzMHB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMjBweDtcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcHRvcHZpZXcpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICB9XG4gICAgLm1haW4taGVhZGluZyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIH1cbn1cblxuLnNlcnZpY2Utc3RhdGUtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIH1cbn1cblxuXG4vLyBzdGF0ZXMgY29kZSBlbmRzIGhlcmVcblxuLy8gQmVuZWZpdHMgY29kZSBzdGFydHMgaGVyZVxuXG4uYmVuZWZpdHMtc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCwxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogOTBweDtcbn1cblxuLmJlbmVmaXQtY2FyZC1jb2wge1xuICAgICY6bnRoLWNoaWxkKDEpLCAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQocGhvbmUtbGFuZHNjYXBlKSB7XG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLmJlbmVmaXQtY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHQ7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgaDQge1xuICAgICAgICBmb250LXNpemU6ICR0ZXh0LXhsO1xuICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1tZWRpdW07XG4gICAgfVxufVxuXG4uYmVuZWZpdHMtbGlzdC1pdGVtIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwIC04cHg7XG4gICAgLmJlbmVmaXRzLWxpc3QtaXRlbXMge1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6ICR0ZXh0LXhzO1xuICAgICAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JheS0zMDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LW1lZGl1bTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmhlYWRpbmctd3JhcHBlciB7XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFwdG9wdmlldykge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuLmtleWZlYXR1cmUtd3JhcHBlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgfVxufVxuLmF2YXRhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiA0NTJweDtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcHRvcHZpZXcpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5iZW5lZml0LWNvbC1sZWZ0IHtcbiAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcHRvcHZpZXcpIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICB9XG59XG5cbi8vIEJlbmVmaXRzIGNvZGUgZW5kXG5cbi8vIENhdGVnb3J5IGNvZGUgc3RhcnRzIGhlcmVcblxuLmNhdGVnb3J5LWNvbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLy8gaGVpZ2h0OiAxNTBweDtcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICAgIGZsZXg6IDAgMCA1MCU7XG4gICAgfVxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQocGhvbmUtbGFuZHNjYXBlKSB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICB9XG4gIH1cbiAgXG4gIC5jYXJkLS1jYXRlZ29yeSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnM7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JheS0zMDA7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0KSB7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IGluaGVyaXQ7XG4gICAgfVxuICB9XG4gIFxuICAuY2F0ZWdvcnktY29sOmhvdmVyIC5jYXJkLS1jYXRlZ29yeSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIC5jYXJkLWZyb250LCAuY2FyZC1iYWNrIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuICBcbiAgLmNhcmQtZnJvbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5jYXJkX19ib2R5IHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA3OHB4KTtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5jYXJkLWJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIC5jYXJkX19ib2R5IHtcbiAgICAgIGg0LCBwIHtcbiAgICAgICAgY29sb3I6ICRsaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2FyZF9fYm9keSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAuYXJyb3ctaWNvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogLTVweDtcbiAgICAgIHRvcDogLTVweDtcbiAgICB9XG4gICAgaDQge1xuICAgICAgZm9udC1zaXplOiAkdGV4dC1iYXNlO1xuICAgICAgZm9udC1mYW1pbHk6ICRmb250LW1lZGl1bTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgIGNvbG9yOiAkZ3JheS04MDA7XG4gICAgfVxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAkdGV4dC1zbTtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yZWd1bGFyO1xuICAgIH1cbiAgfVxuXG4vLyBDYXRlZ29yeSBjb2RlIGVuZFxuXG4vLyBteXNjaGVtZSBjb2RlIHN0YXJ0cyBoZXJlXG5cbi5yb3cge1xuICAgICYtLW15c2NoZW1lcyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgfVxufVxuLmNhcmQge1xuICAgICYtLW15c2NoZW1lcyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM2RkNGOTcgdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbXlzY2hlbWUtcGF0dGVybi5zdmcpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDYwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2MHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0KSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGNvbG9yOiRzY2hlbWUtZ3JheTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZi14bCk7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHNjaGVtZS1wcmltYXJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JheS04MDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6ICR0ZXh0LTQwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkdGV4dC14eGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHBob25lLWxhbmRzY2FwZSkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHRleHQtYmFzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHRleHQteHhsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgY29sb3I6ICRncmF5LTgwMDtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChsYXB0b3ApIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHRleHQtYmFzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0KSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICR0ZXh0LXNtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChwaG9uZS1sYW5kc2NhcGUpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICR0ZXh0LXhzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzApO1xuICAgICAgICAgICAgZm9udC1zaXplOiAkdGV4dC1iYXNlO1xuICAgICAgICAgICAgY29sb3I6ICRsaWdodDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cyBlYXNlO1xuICAgICAgICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQocGhvbmUtbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHRleHQteHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDEpO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cyBlYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICYtdGh1bWJuYWlsIHtcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICAvLyBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHBob25lLWxhbmRzY2FwZSkge1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQocGhvbmUtbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIG15c2NoZW1lIGNvZGUgZW5kXG5cbi8vIEN1c3RvbSBzdXBwb3J0IGNvZGUgc3RhcnRzIGhlcmVcblxuLnN1cHBvcnQtd3JhcHBlciB7XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgJGdyYXktMzAwO1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcbiAgICAgICAgcGFkZGluZzogMjRweDtcbiAgICB9XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChwaG9uZS1sYW5kc2NhcGUpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB9XG59XG5cbi5jb250YWN0LXVzLXRpdGxlIHtcbiAgICBoMyB7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgICAgQGluY2x1ZGUgZm9udHMoJHRleHQteGwrJHRleHQteGwsIDEuNCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1tZWRpdW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQocGhvbmUpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHRleHQtbGc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAkZ3JheS04MDA7XG4gICAgICAgIEBpbmNsdWRlIGZvbnRzKCR0ZXh0LXh4bCwgMS40KTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWxpZ2h0O1xuICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQocGhvbmUtbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQocGhvbmUpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJHRleHQtYmFzZTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYWxsLXRvLWFjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChwaG9uZS1sYW5kc2NhcGUpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChwaG9uZSkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxufVxuXG4uY3VzdG9tZXItaGVhZGluZyB7XG4gICAgQGluY2x1ZGUgZm9udHMoJHRleHQtbGcsIDEuNCk7XG4gICAgY29sb3I6IHJnYig2MCwgNjQsIDY3KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5idG4tb3V0bGluZS1wcmltYXJ5IHtcbiAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY5ZDk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwNjJjYztcbiAgICB9XG59XG5cbi5oZWxwLWltZyB7XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5zdXBwb3J0LWxlZnQge1xuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0KSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cbn1cblxuXG4vLyBDdXN0b20gc3VwcG9ydCBjb2RlIGVuZCBoZXJlXG5cblxuLy8gRG93bmxvYWQgYXBwIGNvZGUgc3RhcnRzIGhlcmVcblxuLmRvd25sb2FkLWFwcC1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHQ7XG4gICAgcGFkZGluZzogNDBweCAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludChwaG9uZS1sYW5kc2NhcGUpIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQocGhvbmUpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIGgxIHtcbiAgICAgICAgQGluY2x1ZGUgZm9udHMoJHRleHQteGwrJHRleHQtc20sIDEuNCk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1tZWRpdW07XG4gICAgICAgIGNvbG9yOiAkZ3JheS04MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQocGhvbmUtbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBmb250LXNpemU6ICR0ZXh0LTMwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KHBob25lKSB7XG4gICAgICAgICAgICBmb250LXNpemU6ICR0ZXh0LXh4bDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwIHtcbiAgICAgICAgJi5kb3dubG9hZC1taXNzY2FsbCB7XG4gICAgICAgICAgICBAaW5jbHVkZSBmb250cygkdGV4dC14eGwsIDEuNCk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LW1lZGl1bTtcbiAgICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQocGhvbmUtbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAkdGV4dC1sZztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGRhcmtlbigkY29sb3I6ICRwcmltYXJ5LCAkYW1vdW50OiAxMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5hcHAtZG93bmxvYWQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChwaG9uZSkge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIxcHg7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChwaG9uZS1sYW5kc2NhcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHQ7XG4gICAgICAgICAgICAgICAgLy8gQGluY2x1ZGUgYm94U2hhZG93KDAsIDRweCwgOHB4LCAwKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2IoMCAwIDAgLyAxNSUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQocGhvbmUtbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAvLyBib3gtc2hhZG93OiAwIDhweCAxN3B4IDAgcmdiYSgwLCAwLCAwLCAuMTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmLm5vdC1jbGlja2FibGUge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRvd25sb2FkLWxlZnQge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzMwcHgpO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50KGxhcHRvcHZpZXcpIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5kb3dubG9hLXJpZ2h0IHtcbiAgICAgICAgd2lkdGg6IDMzMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQobGFwdG9wdmlldykge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBAaW5jbHVkZSBmb250cygkdGV4dC1iYXNlLCAxLjQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5zb2NpYWwtbWVkaWEtY29sIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWVudS1saXN0LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChwaG9uZS1sYW5kc2NhcGUpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludChwaG9uZS1sYW5kc2NhcGUpIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRlLWJ0biAuM3MgbGluZWFyIGFsdGVybmF0ZTtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUtYnRuIC4zcyBsaW5lYXIgYWx0ZXJuYXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1idG4ge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIH1cbiAgICAyNSUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIH1cbiAgfVxuXG5cbi8vIERvd25sb2FkIGFwcCBjb2RlIGVuZCIsIi8vIFRvZ2dsZXNcbi8vXG4vLyBVc2VkIGluIGNvbmp1bmN0aW9uIHdpdGggZ2xvYmFsIHZhcmlhYmxlcyB0byBlbmFibGUgY2VydGFpbiB0aGVtZSBmZWF0dXJlcy5cbi8vIFZlbmRvclxuQGltcG9ydCBcIi4vdmFyaWFibGVzXCI7XG5AbWl4aW4gYWxpZ24tY2VudGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcbn1cblxuXG5AbWl4aW4gdHJhbnNpdGlvbigkd2hhdDogYWxsLCAkdGltZTogMC4ycywgJGhvdzogZWFzZS1pbi1vdXQpIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR3aGF0ICR0aW1lICRob3c7XG4gICAgLW1vei10cmFuc2l0aW9uOiAkd2hhdCAkdGltZSAkaG93O1xuICAgIC1tcy10cmFuc2l0aW9uOiAkd2hhdCAkdGltZSAkaG93O1xuICAgIC1vLXRyYW5zaXRpb246ICR3aGF0ICR0aW1lICRob3c7XG4gICAgdHJhbnNpdGlvbjogJHdoYXQgJHRpbWUgJGhvdztcbn1cblxuQG1peGluIGJ1dHRvblN0eWxlKCRidXR0b24pIHtcbiAgICBAaW5jbHVkZSBmb250cygkdGV4dC1iYXNlLCAyMHB4KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeTtcbiAgICBAaW5jbHVkZSBib3JkZXJSYWRpdXMoKTtcbiAgICBAaW5jbHVkZSBib3hTaGFkb3coMCwgNHB4LCA4cHgsIDApO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBAaWYgJGJ1dHRvbj09ZmlsbGVkIHtcbiAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gICAgICAgIGNvbG9yOiAkbGlnaHQ7XG4gICAgfVxuICAgIEBlbHNlIGlmICRidXR0b249PXN0cm9rZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRsaWdodDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnk7XG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGJ1dHRvbj09c3VjY2VzcyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5MUM3MTQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5MUM3MTQ7XG4gICAgICAgIGNvbG9yOiAkbGlnaHQ7XG4gICAgfVxuICAgIEBlbHNlIGlmICRidXR0b249PXJlc2V0IHtcbiAgICAgICAgYmFja2dyb3VuZDogI0NDREVFQztcbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NERUVDO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICBAZWxzZSBpZiAkYnV0dG9uPT1kaXNhYmxlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGxpZ2h0LWdyYXk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodC1ncmF5O1xuICAgICAgICBjb2xvcjogIzllOWU5ZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgQGVsc2UgaWYgJGJ1dHRvbj09ZGFuZ2VyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0QzMjkyOTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0QzMjkyOTtcbiAgICAgICAgY29sb3I6ICRsaWdodDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG59XG5cbkBtaXhpbiBmb250cygkc2l6ZSwgJGhlaWdodCkge1xuICAgIGZvbnQtc2l6ZTogJHNpemU7XG4gICAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XG59XG5cbkBtaXhpbiBib3hTaGFkb3coJGxlZnQ6bGVmdCwgJHJpZ2h0OnJpZ2h0LCAkc3ByZWFkOnNwcmVhZCwgJGJsdXI6Ymx1ciwgJGNvbG9yOnJnYmEoMCwgMCwgMCwgMC4wNSkpIHtcbiAgICBib3gtc2hhZG93OiAkbGVmdCAkcmlnaHQgJHNwcmVhZCAkYmx1ciAkY29sb3I7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkbGVmdCAkcmlnaHQgJHNwcmVhZCAkYmx1ciAkY29sb3I7XG4gICAgLW1vei1ib3gtc2hhZG93OiAkbGVmdCAkcmlnaHQgJHNwcmVhZCAkYmx1ciAkY29sb3I7XG59XG5AbWl4aW4gYnJlYWtwb2ludCgkYnJlYWtwb2ludCkge1xuICAgIEBpZiAkYnJlYWtwb2ludD09cGhvbmUge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHBob25lKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAZWxzZSBpZiAkYnJlYWtwb2ludD09cGhvbmUtc20ge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHBob25lLXNtKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAZWxzZSBpZiAkYnJlYWtwb2ludD09cGhvbmUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRwaG9uZS1sYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBlbHNlIGlmICRicmVha3BvaW50PT10YWJsZXQge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGVsc2UgaWYgJGJyZWFrcG9pbnQ9PWxhcHRvcHZpZXcge1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJGxhcHRvcHZpZXcpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBlbHNlIGlmICRicmVha3BvaW50PT1sYXB0b3Age1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJGxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGVsc2UgaWYgJGJyZWFrcG9pbnQ9PWRla3N0b3Age1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJGRla3N0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBlbHNlIGlmICRicmVha3BvaW50PT1sYXJnZSB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbGFyZ2UpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbkBtaXhpbiBsaW5lLWNsYW1wKCRsaW5lKSB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZTtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtaXhpbiBib3JkZXJSYWRpdXMoKSB7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 1620:
/*!**************************************************************!*\
  !*** ./src/app/pages/our-partners/our-partners.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OurPartnersComponent": () => (/* binding */ OurPartnersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class OurPartnersComponent {
}
OurPartnersComponent.ɵfac = function OurPartnersComponent_Factory(t) { return new (t || OurPartnersComponent)(); };
OurPartnersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurPartnersComponent, selectors: [["app-our-partners"]], decls: 2, vars: 0, template: function OurPartnersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "our-partners works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdXItcGFydG5lcnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8340:
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PageNotFoundComponent {
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7569:
/*!******************************************************!*\
  !*** ./src/app/pages/services/services.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesComponent": () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var src_app_constants_states__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants/states */ 6880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8699);






function ServicesComponent_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r5.stateId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, state_r5.stateName), " ");
} }
const _c0 = function (a0) { return { "bg-primary": a0 }; };
function ServicesComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ServicesComponent_span_5_Template_span_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const category_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.onEditCategory(category_r6.categoryId)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, category_r6.categoryId === ctx_r1.filterConfig.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r6.description);
} }
function ServicesComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const service_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", service_r10.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", service_r10.serviceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](service_r10.serviceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](service_r10.categoryName);
} }
function ServicesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ServicesComponent_div_6_div_3_Template, 6, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Record Count : ", ctx_r2.filteredServices.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.filteredServices);
} }
function ServicesComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Services Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ServicesComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.states = src_app_constants_states__WEBPACK_IMPORTED_MODULE_0__.states;
    }
    ngOnInit() {
        this.getServicesPlusCtgs();
        this.initServiceFilter();
    }
    getServicesPlusCtgs() {
        const { servicesPlusCtgs: { categories, allServices }, } = this.activatedRoute.snapshot.data;
        this.categories = categories;
        this.allServices = allServices;
    }
    initServiceFilter() {
        this.filterConfig = {
            serviceName: '',
            state: this.activatedRoute.snapshot.queryParams['stateId'] || '0',
            category: this.activatedRoute.snapshot.queryParams['category'],
        };
        this.onFilterServices();
    }
    onEditCategory(categoryId) {
        const isCtgSelected = this.filterConfig.category === categoryId;
        this.filterConfig.category = isCtgSelected ? '' : categoryId;
        this.onFilterServices();
    }
    onFilterServices() {
        if (!this.allServices?.length) {
            return;
        }
        const checkForOtherState = (stateId, otherState) => {
            if (!otherState) {
                return false;
            }
            return otherState.split('|').includes(stateId);
        };
        const { serviceName: filterName, state: filterState, category: filterCategory, } = this.filterConfig;
        this.filteredServices = this.allServices.filter(({ serviceName, state, otherState, categoryId }) => {
            const isNameMatch = serviceName
                ?.toLowerCase()
                .includes(filterName?.toLowerCase());
            // filterState is converted to a number bcz we don't want filtering on "0" (All) states
            const isStateMatch = +filterState
                ? state === filterState || checkForOtherState(filterState, otherState)
                : true;
            const isCategoryMatch = !!filterCategory
                ? categoryId === filterCategory
                : true;
            return isNameMatch && isStateMatch && isCategoryMatch;
        });
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
ServicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 9, vars: 6, consts: [[3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "my-4"], ["class", "mr-2 border", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "d-flex flex-wrap", 4, "ngIf", "ngIfElse"], ["noServicesFound", ""], [3, "value"], [1, "mr-2", "border", 3, "ngClass", "click"], [1, "d-flex", "flex-wrap"], [1, "text", "text-primary", "w-100", "mb-3"], ["class", "border mr-2", 4, "ngFor", "ngForOf"], [1, "border", "mr-2"], ["width", "70", "height", "70", 3, "src", "alt"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ServicesComponent_Template_input_ngModelChange_1_listener($event) { return ctx.filterConfig.serviceName = $event; })("ngModelChange", function ServicesComponent_Template_input_ngModelChange_1_listener() { return ctx.onFilterServices(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ServicesComponent_Template_select_ngModelChange_2_listener($event) { return ctx.filterConfig.state = $event; })("ngModelChange", function ServicesComponent_Template_select_ngModelChange_2_listener() { return ctx.onFilterServices(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ServicesComponent_option_3_Template, 3, 4, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ServicesComponent_span_5_Template, 2, 4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ServicesComponent_div_6_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ServicesComponent_ng_template_7_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filterConfig.serviceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filterConfig.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.states);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredServices == null ? null : ctx.filteredServices.length)("ngIfElse", _r3);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 625:
/*!******************************************************!*\
  !*** ./src/app/resolvers/services-route.resolver.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesRouteResolver": () => (/* binding */ ServicesRouteResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _services_http_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http-helpers */ 2065);
/* harmony import */ var _constants_cache_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/cache-keys */ 4173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api-helper.service */ 1063);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/categories.service */ 501);
/* harmony import */ var _services_caching_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/caching.service */ 5941);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/http.service */ 6858);











class ServicesRouteResolver {
    constructor(apiHelperService, translateService, categoriesService, cachingService, httpService) {
        this.apiHelperService = apiHelperService;
        this.translateService = translateService;
        this.categoriesService = categoriesService;
        this.cachingService = cachingService;
        this.httpService = httpService;
    }
    resolve() {
        const getCachedCategories = () => this.cachingService.fetchCachedData(_constants_cache_keys__WEBPACK_IMPORTED_MODULE_2__.cacheKeys.categories);
        const getCachedServices = () => this.cachingService.fetchCachedData(_constants_cache_keys__WEBPACK_IMPORTED_MODULE_2__.cacheKeys.allServices);
        const fetchAllServicesFromAPI = () => {
            return this.httpService
                .sendGetRequest({
                url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.CORE_API_URL}/allservices`,
                headers: (0,_services_http_helpers__WEBPACK_IMPORTED_MODULE_1__.getAuthHeaders)(),
                params: (0,_services_http_helpers__WEBPACK_IMPORTED_MODULE_1__.getAllServicesParams)(this.translateService.currentLang),
            })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((resp) => {
                const { pd: { addServiceList }, } = resp;
                const errorCheckFn = this.apiHelperService.getApiSuccessFilterFn();
                if (!errorCheckFn(resp)) {
                    throw new Error('Error in fetching all services');
                }
                this.cachingService.storeCachedData(_constants_cache_keys__WEBPACK_IMPORTED_MODULE_2__.cacheKeys.allServices, addServiceList);
                return addServiceList;
            }));
        };
        const cachedAllServices = getCachedServices();
        const categoriesObs$ = this.categoriesService.getAllCategories();
        const allServicesObs$ = cachedAllServices?.length
            ? (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(cachedAllServices)
            : fetchAllServicesFromAPI();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)({
            categories: categoriesObs$,
            allServices: allServicesObs$,
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)((error) => {
            // If any API throws an error then the cached data (if any) would be returned
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)({
                categories: getCachedCategories(),
                allServices: getCachedServices(),
            });
        }));
    }
}
ServicesRouteResolver.ɵfac = function ServicesRouteResolver_Factory(t) { return new (t || ServicesRouteResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_services_api_helper_service__WEBPACK_IMPORTED_MODULE_3__.ApiHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_services_categories_service__WEBPACK_IMPORTED_MODULE_4__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_services_caching_service__WEBPACK_IMPORTED_MODULE_5__.CachingService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_services_http_service__WEBPACK_IMPORTED_MODULE_6__.HttpService)); };
ServicesRouteResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({ token: ServicesRouteResolver, factory: ServicesRouteResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1063:
/*!************************************************!*\
  !*** ./src/app/services/api-helper.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiHelperService": () => (/* binding */ ApiHelperService)
/* harmony export */ });
/* harmony import */ var _components_utility_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/utility/error-dialog/error-dialog.component */ 9856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);



class ApiHelperService {
    constructor(matDialog) {
        this.matDialog = matDialog;
    }
    /**
     * Method used to check for response status (rs) on API response body.
     * @returns boolean value indicating the response is correct or not.
     */
    getApiSuccessFilterFn() {
        return (resp) => {
            const isAPIRespSuccess = resp.rs.toLowerCase() === 'su';
            if (!isAPIRespSuccess) {
                this.matDialog.open(_components_utility_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ErrorDialogComponent);
            }
            return isAPIRespSuccess;
        };
    }
}
ApiHelperService.ɵfac = function ApiHelperService_Factory(t) { return new (t || ApiHelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog)); };
ApiHelperService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiHelperService, factory: ApiHelperService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5941:
/*!*********************************************!*\
  !*** ./src/app/services/caching.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CachingService": () => (/* binding */ CachingService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CachingService {
    constructor() {
        this.cacheData = {};
    }
    /**
     * Method to store data in cache.
     * @param key - Indentifier of the cached data.
     * @param data - Data to be stored in cache.
     * @returns Cached data stored under the indentifier.
     */
    storeCachedData(key, data) {
        this.cacheData[key] = data;
    }
    /**
     * Method to fetch data from cache.
     * @param key - Indentifier of the cached data.
     */
    fetchCachedData(key) {
        return this.cacheData[key];
    }
    /**
     * Method to remove data from cache.
     * @param key - Indentifier of the cached data.
     */
    removeCachedData(key) {
        delete this.cacheData[key];
    }
}
CachingService.ɵfac = function CachingService_Factory(t) { return new (t || CachingService)(); };
CachingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CachingService, factory: CachingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 501:
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesService": () => (/* binding */ CategoriesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _constants_cache_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/cache-keys */ 4173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _caching_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caching.service */ 5941);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ 6858);
/* harmony import */ var _api_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-helper.service */ 1063);










class CategoriesService {
    constructor(translateService, cachingService, httpService, apiHelperService) {
        this.translateService = translateService;
        this.cachingService = cachingService;
        this.httpService = httpService;
        this.apiHelperService = apiHelperService;
    }
    /**
     * Method to get the service categories.
     * @returns Observable that resolves into categories.
     */
    getAllCategories() {
        const fetchCategoriesFromAPI = () => {
            const fetchCategoryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams().append('lang', this.translateService.currentLang);
            return this.httpService
                .sendGetRequest({
                url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.CORE_API_URL}/fetchcategory`,
                params: fetchCategoryParams,
            })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((resp) => {
                const { pd: { primaryCategoryList }, } = resp;
                const errorCheckFn = this.apiHelperService.getApiSuccessFilterFn();
                if (!errorCheckFn(resp)) {
                    throw new Error('Error in fetching categories');
                }
                this.cachingService.storeCachedData(_constants_cache_keys__WEBPACK_IMPORTED_MODULE_1__.cacheKeys.categories, primaryCategoryList);
                return primaryCategoryList;
            }));
        };
        const cachedCategories = this.cachingService.fetchCachedData(_constants_cache_keys__WEBPACK_IMPORTED_MODULE_1__.cacheKeys.categories);
        return cachedCategories?.length
            ? (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(cachedCategories)
            : fetchCategoriesFromAPI();
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_caching_service__WEBPACK_IMPORTED_MODULE_2__.CachingService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_api_helper_service__WEBPACK_IMPORTED_MODULE_4__.ApiHelperService)); };
CategoriesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2065:
/*!******************************************!*\
  !*** ./src/app/services/http-helpers.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllServicesParams": () => (/* binding */ getAllServicesParams),
/* harmony export */   "getAuthHeaders": () => (/* binding */ getAuthHeaders),
/* harmony export */   "getBannerParams": () => (/* binding */ getBannerParams),
/* harmony export */   "getHomeServicesParams": () => (/* binding */ getHomeServicesParams)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);


function getAuthHeaders() {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'x-api-key': src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.xApiKey });
}
function getBannerParams(lang, mode = 'web') {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
        .append('lang', lang)
        .append('os', 'web')
        .append('mod', mode)
        .append('ver', '');
}
function getAllServicesParams(lang) {
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
        .append('lang', lang)
        .append('os', 'web')
        .append('mod', 'app')
        .append('ldate', '')
        .append('depttype', 'all')
        .append('st', '');
}
function getHomeServicesParams(lang, serviceCardNo = '') {
    return getAllServicesParams(lang)
        .set('depttype', 'undefined')
        .append('ver', '')
        .append('servicecardno', serviceCardNo);
}


/***/ }),

/***/ 6858:
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class HttpService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    /**
     * Method to send a GET request.
     * @param getRequestConfig - Request config for sending a GET request.
     * @param getRequestConfig.url - URL of the GET request.
     * @param [getRequestConfig.params] - [Optional] Params of the GET request.
     * @param [getRequestConfig.headers] - [Optional] Headers of the GET request.
     * @returns Observable, which handles the GET Request.
     */
    sendGetRequest({ url, params, headers }) {
        return this.httpClient.get(url, { params, headers, observe: 'body' });
    }
    /**
     * Method to send a POST request.
     * @param postRequestConfig - Request config for sending a POST request.
     * @param postRequestConfig.url - URL of the POST request.
     * @param [getRequestConfig.params] - [Optional] Params of the POST request.
     * @param [postRequestConfig.headers] - [Optional] Headers of the POST request.
     * @param postRequestConfig.body - Body of the POST request.
     * @returns Observable, which handles the POST Request.
     */
    sendPostRequest({ url, params, headers, body }) {
        return this.httpClient.post(url, {
            params,
            headers,
            body,
            observe: 'body',
        });
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
HttpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const API_BASE_URL = 'https://apigw.umangapp.in';
const CORS_URL = 'https://cors-anywhere.herokuapp.com';
const environment = {
    production: false,
    isLocal: true,
    baseUrl: '/landing_new',
    deployUrl: 'https://stgweb.umang.gov.in',
    API_BASE_URL: `${CORS_URL}/${API_BASE_URL}`,
    CORE_API_URL: `${CORS_URL}/${API_BASE_URL}/coreapi/2.0`,
    resultsJSONApiKey: 'mkWxtFO28l0Ua3rrXNrBwLN2YXPfmEHMz0xIRXVC',
    xApiKey: 'VKE9PnbY5k1ZYapR5PyYQ33I26sXTX569Ed7eqyg',
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
function bootstrap() {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch((err) => console.error(err));
}
if (document.readyState === 'complete') {
    bootstrap();
}
else {
    document.addEventListener('DOMContentLoaded', bootstrap);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map