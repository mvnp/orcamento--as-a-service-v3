(self["webpackChunkmaterial_dashboard_pro_angular"] = self["webpackChunkmaterial_dashboard_pro_angular"] || []).push([[435],{

/***/ 88369:
/*!***********************************************************************!*\
  !*** ./src/app/example/maps/fullscreenmap/fullscreenmap.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullScreenMapsComponent": function() { return /* binding */ FullScreenMapsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 35366);

var FullScreenMapsComponent = /** @class */ /*@__PURE__*/ (function () {
    function FullScreenMapsComponent() {
    }
    FullScreenMapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [
                { 'featureType': 'water', 'stylers': [{ 'saturation': 43 }, { 'lightness': -11 }, { 'hue': '#0088ff' }] },
                { 'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{ 'hue': '#ff0000' },
                        { 'saturation': -100 }, { 'lightness': 99 }] },
                { 'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#808080' },
                        { 'lightness': 54 }] },
                { 'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ece2d9' }] },
                { 'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ccdca1' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#767676' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#ffffff' }] },
                { 'featureType': 'poi', 'stylers': [{ 'visibility': 'off' }] },
                { 'featureType': 'landscape.natural', 'elementType': 'geometry.fill', 'stylers': [{ 'visibility': 'on' },
                        { 'color': '#b8cb93' }] },
                { 'featureType': 'poi.park', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.sports_complex', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.medical', 'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.business', 'stylers': [{ 'visibility': 'simplified' }] }
            ]
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var Marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Hello World!'
        });
        // To add the marker to the map, call setMap();
        Marker.setMap(map);
    };
    FullScreenMapsComponent.ɵfac = function FullScreenMapsComponent_Factory(t) { return new (t || FullScreenMapsComponent)(); };
    FullScreenMapsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullScreenMapsComponent, selectors: [["app-fullscreen-map-cmp"]], decls: 1, vars: 0, consts: [["id", "map"]], template: function FullScreenMapsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
            }
        }, encapsulation: 2 });
    return FullScreenMapsComponent;
}());



/***/ }),

/***/ 99038:
/*!*****************************************************************!*\
  !*** ./src/app/example/maps/googlemaps/googlemaps.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMapsComponent": function() { return /* binding */ GoogleMapsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 35366);

var GoogleMapsComponent = /** @class */ /*@__PURE__*/ (function () {
    function GoogleMapsComponent() {
    }
    GoogleMapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 8,
            center: myLatlng,
            scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
        };
        var map = new google.maps.Map(document.getElementById('regularMap'), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Regular Map!'
        });
        marker.setMap(map);
        // Custom Skin & Settings Map
        myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions1 = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            disableDefaultUI: true,
            zoomControl: true,
            styles: [{ 'featureType': 'water', 'stylers': [{ 'saturation': 43 }, { 'lightness': -11 }, { 'hue': '#0088ff' }] },
                { 'featureType': 'road', 'elementType': 'geometry.fill', 'stylers': [{ 'hue': '#ff0000' },
                        { 'saturation': -100 }, { 'lightness': 99 }] },
                { 'featureType': 'road', 'elementType': 'geometry.stroke', 'stylers': [{ 'color': '#808080' },
                        { 'lightness': 54 }] },
                { 'featureType': 'landscape.man_made', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ece2d9' }] },
                { 'featureType': 'poi.park', 'elementType': 'geometry.fill', 'stylers': [{ 'color': '#ccdca1' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.fill', 'stylers': [{ 'color': '#767676' }] },
                { 'featureType': 'road', 'elementType': 'labels.text.stroke', 'stylers': [{ 'color': '#ffffff' }] },
                { 'featureType': 'poi', 'stylers': [{ 'visibility': 'off' }] },
                { 'featureType': 'landscape.natural', 'elementType': 'geometry.fill', 'stylers': [{ 'visibility': 'on' },
                        { 'color': '#b8cb93' }] },
                { 'featureType': 'poi.park', 'stylers': [{ 'visibility': 'on' }] }, { 'featureType': 'poi.sports_complex',
                    'stylers': [{ 'visibility': 'on' }] },
                { 'featureType': 'poi.medical', 'stylers': [{ 'visibility': 'on' }] }, { 'featureType': 'poi.business',
                    'stylers': [{ 'visibility': 'simplified' }] }]
        };
        map = new google.maps.Map(document.getElementById('customSkinMap'), mapOptions1);
        marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Custom Skin & Settings Map!'
        });
        marker.setMap(map);
        // Satellite Map
        myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions2 = {
            zoom: 3,
            scrollwheel: false,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        };
        map = new google.maps.Map(document.getElementById('satelliteMap'), mapOptions2);
        marker = new google.maps.Marker({
            position: myLatlng,
            title: 'Satellite Map!'
        });
        marker.setMap(map);
    };
    GoogleMapsComponent.ɵfac = function GoogleMapsComponent_Factory(t) { return new (t || GoogleMapsComponent)(); };
    GoogleMapsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoogleMapsComponent, selectors: [["app-vector-maps-cmp"]], decls: 27, vars: 0, consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header", "card-header-text", "card-header-rose"], [1, "card-text"], [1, "card-title"], [1, "card-content"], ["id", "satelliteMap", 1, "map", "map-big"], [1, "col-md-6"], ["id", "regularMap", 1, "map"], ["id", "customSkinMap", 1, "map"]], template: function GoogleMapsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Satellite Map");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Regular Map");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Custom Skin & Settings Map");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2 });
    return GoogleMapsComponent;
}());



/***/ }),

/***/ 67435:
/*!*********************************************!*\
  !*** ./src/app/example/maps/maps.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsModule": function() { return /* binding */ MapsModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 29996);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var _maps_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maps.routing */ 58649);
/* harmony import */ var _fullscreenmap_fullscreenmap_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullscreenmap/fullscreenmap.component */ 88369);
/* harmony import */ var _googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./googlemaps/googlemaps.component */ 99038);
/* harmony import */ var _vectormaps_vectormaps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vectormaps/vectormaps.component */ 70850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 35366);









var MapsModule = /** @class */ /*@__PURE__*/ (function () {
    function MapsModule() {
    }
    MapsModule.ɵfac = function MapsModule_Factory(t) { return new (t || MapsModule)(); };
    MapsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MapsModule });
    MapsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(_maps_routing__WEBPACK_IMPORTED_MODULE_0__.MapsRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule
            ]] });
    return MapsModule;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MapsModule, { declarations: [_fullscreenmap_fullscreenmap_component__WEBPACK_IMPORTED_MODULE_1__.FullScreenMapsComponent,
            _googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_2__.GoogleMapsComponent,
            _vectormaps_vectormaps_component__WEBPACK_IMPORTED_MODULE_3__.VectorMapsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule] });
})();


/***/ }),

/***/ 58649:
/*!**********************************************!*\
  !*** ./src/app/example/maps/maps.routing.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsRoutes": function() { return /* binding */ MapsRoutes; }
/* harmony export */ });
/* harmony import */ var _fullscreenmap_fullscreenmap_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullscreenmap/fullscreenmap.component */ 88369);
/* harmony import */ var _googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googlemaps/googlemaps.component */ 99038);
/* harmony import */ var _vectormaps_vectormaps_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vectormaps/vectormaps.component */ 70850);



var MapsRoutes = [
    {
        path: '',
        children: [{
                path: 'fullscreen',
                component: _fullscreenmap_fullscreenmap_component__WEBPACK_IMPORTED_MODULE_0__.FullScreenMapsComponent
            }]
    }, {
        path: '',
        children: [{
                path: 'google',
                component: _googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_1__.GoogleMapsComponent
            }]
    }, {
        path: '',
        children: [{
                path: 'vector',
                component: _vectormaps_vectormaps_component__WEBPACK_IMPORTED_MODULE_2__.VectorMapsComponent
            }]
    }
];


/***/ }),

/***/ 70850:
/*!*****************************************************************!*\
  !*** ./src/app/example/maps/vectormaps/vectormaps.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMapsComponent": function() { return /* binding */ VectorMapsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 35366);

var VectorMapsComponent = /** @class */ /*@__PURE__*/ (function () {
    function VectorMapsComponent() {
    }
    VectorMapsComponent.prototype.ngOnInit = function () {
        $('#worldMap').vectorMap({
            map: 'world_en',
            backgroundColor: 'transparent',
            borderColor: '#818181',
            borderOpacity: 0.25,
            borderWidth: 1,
            color: '#ffffff',
            enableZoom: true,
            hoverColor: '#b3b3b3',
            hoverOpacity: null,
            normalizeFunction: 'linear',
            scaleColors: ['#b6d6ff', '#005ace'],
            selectedColor: '#c9dfaf',
            selectedRegions: null,
            showTooltip: true,
            onRegionClick: function (element, code, region) {
                var message = 'You clicked "'
                    + region
                    + '" which has the code: '
                    + code.toUpperCase();
                alert(message);
            }
        });
    };
    VectorMapsComponent.ɵfac = function VectorMapsComponent_Factory(t) { return new (t || VectorMapsComponent)(); };
    VectorMapsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VectorMapsComponent, selectors: [["app-vector-maps-cmp"]], decls: 15, vars: 0, consts: [[1, "main-content"], [1, "container-fluid"], [1, "header", "text-center"], [1, "title"], [1, "category"], ["target", "_blank", "href", "http://jvectormap.com/"], [1, "row"], [1, "col-md-12"], [1, "card", "card-plain"], [1, "card-content"], ["id", "worldMap", 1, "map", "map-big"]], template: function VectorMapsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "World Map");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Looks great on any resolution. Made by our friends from ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "jVector Map");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ".");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, encapsulation: 2 });
    return VectorMapsComponent;
}());



/***/ })

}]);