(self["webpackChunkmaterial_dashboard_pro_angular"] = self["webpackChunkmaterial_dashboard_pro_angular"] || []).push([[555],{

/***/ 51555:
/*!*******************************************************!*\
  !*** ./src/app/example/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": function() { return /* binding */ DashboardModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 29996);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var _md_md_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../md/md.module */ 22551);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.module */ 78994);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mask */ 51601);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ 71314);
/* harmony import */ var _painel_cronograma_cronograma_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../painel/cronograma/cronograma.module */ 21305);
/* harmony import */ var _painel_budget_budget_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../painel/budget/budget.module */ 36852);
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.routing */ 3781);
/* harmony import */ var _saas_saas_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../saas/saas.module */ 36998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 35366);














var DashboardModule = /** @class */ /*@__PURE__*/ (function () {
    function DashboardModule() {
    }
    DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
    DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: DashboardModule });
    DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_5__.DashboardRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
                _md_md_module__WEBPACK_IMPORTED_MODULE_0__.MdModule,
                src_app_app_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
                ngx_mask__WEBPACK_IMPORTED_MODULE_11__.NgxMaskModule.forChild(),
                _painel_cronograma_cronograma_module__WEBPACK_IMPORTED_MODULE_3__.CronogramaModule,
                _painel_budget_budget_module__WEBPACK_IMPORTED_MODULE_4__.BudgetModule,
                _saas_saas_module__WEBPACK_IMPORTED_MODULE_6__.SaasModule,
            ]] });
    return DashboardModule;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _md_md_module__WEBPACK_IMPORTED_MODULE_0__.MdModule,
            src_app_app_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, ngx_mask__WEBPACK_IMPORTED_MODULE_11__.NgxMaskModule, _painel_cronograma_cronograma_module__WEBPACK_IMPORTED_MODULE_3__.CronogramaModule,
            _painel_budget_budget_module__WEBPACK_IMPORTED_MODULE_4__.BudgetModule,
            _saas_saas_module__WEBPACK_IMPORTED_MODULE_6__.SaasModule] });
})();


/***/ }),

/***/ 3781:
/*!********************************************************!*\
  !*** ./src/app/example/dashboard/dashboard.routing.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutes": function() { return /* binding */ DashboardRoutes; }
/* harmony export */ });
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 71314);

var DashboardRoutes = [
    {
        path: '',
        children: [{
                path: 'dashboard',
                component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
            }]
    }
];


/***/ }),

/***/ 72079:
/*!**************************************************************************!*\
  !*** ./src/app/painel/budget/budget-chatter/budget-chatter.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetChatterComponent": function() { return /* binding */ BudgetChatterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 35366);

var BudgetChatterComponent = /** @class */ /*@__PURE__*/ (function () {
    function BudgetChatterComponent() {
    }
    BudgetChatterComponent.prototype.ngOnInit = function () {
    };
    BudgetChatterComponent.prototype.closeNav = function () {
        console.log("disparado");
        document.getElementById("overlay-chatter").style.width = "0";
        document.getElementById("sidenav-chatter").style.width = "0";
    };
    BudgetChatterComponent.ɵfac = function BudgetChatterComponent_Factory(t) { return new (t || BudgetChatterComponent)(); };
    BudgetChatterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BudgetChatterComponent, selectors: [["app-budget-chatter"]], decls: 12, vars: 0, consts: [["id", "overlay-chatter", 1, "overlay-chatter"], ["id", "sidenav-chatter", 1, "sidenav-chatter"], ["href", "javascript:void(0);", 1, "closebtn", 3, "click"], ["href", "#"]], template: function BudgetChatterComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BudgetChatterComponent_Template_a_click_2_listener() { return ctx.closeNav(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "About");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Services");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Clients");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contact");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }, styles: [".overlay-chatter[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    transition: 0.5s;\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: 9999;\r\n    background-color: #0000005c;\r\n}\r\n\r\n.sidenav-chatter[_ngcontent-%COMP%] {\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: #111;\r\n    overflow-x: hidden;\r\n    padding-top: 60px;\r\n    transition: 0.5s;\r\n    height: 100%;\r\n    width: 700px;\r\n    max-width: 100%;\r\n    z-index: 9999;\r\n}\r\n\r\n\r\n\r\n.sidenav-chatter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n}\r\n\r\n\r\n\r\n.sidenav-chatter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #f1f1f1;\r\n}\r\n\r\n\r\n\r\n.sidenav-chatter[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 15px;\r\n    font-size: 36px;\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n    padding: 4px 8px 8px 8px!important;\r\n    border-radius: 100%;\r\n    background: #fff;\r\n    color: #000;\r\n}"] });
    return BudgetChatterComponent;
}());



/***/ }),

/***/ 45385:
/*!************************************************************************************!*\
  !*** ./src/app/painel/budget/budget-new-messages/budget-new-messages.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetNewMessagesComponent": function() { return /* binding */ BudgetNewMessagesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 13070);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 6174);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 84369);





var BudgetNewMessagesComponent = /** @class */ /*@__PURE__*/ (function () {
    function BudgetNewMessagesComponent() {
        this.instructions = true;
    }
    BudgetNewMessagesComponent.prototype.ngOnInit = function () {
    };
    BudgetNewMessagesComponent.prototype.showInstructions = function () {
        this.instructions = false;
    };
    BudgetNewMessagesComponent.prototype.openNav = function () {
        document.getElementById("overlay-chatter").style.width = "100%";
        document.getElementById("sidenav-chatter").style.width = "700px";
        document.getElementById("sidenav-chatter").style.maxWidth = "60%";
    };
    BudgetNewMessagesComponent.ɵfac = function BudgetNewMessagesComponent_Factory(t) { return new (t || BudgetNewMessagesComponent)(); };
    BudgetNewMessagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BudgetNewMessagesComponent, selectors: [["app-budget-new-messages"]], inputs: { objBudget: "objBudget" }, decls: 149, vars: 1, consts: [["id", "budget-messages", 1, "col-12"], [1, "align-items-center", "row"], [1, "col-12", "view-instructions", 3, "hidden"], [1, "row"], [1, "col-12", "col-lg-3", "d-flex"], [1, "mt-4", "font-weight-bolder", "align-self-center"], [1, "col-12", "col-lg-9"], ["data-notify", "container", 1, "alert", "alert-primary", "alert-with-icon"], ["data-notify", "icon", 1, "material-icons"], ["data-notify", "message", 1, "instructions"], [1, "col-12"], [1, "row", "mt-3"], ["action", ""], [3, "click"], [1, "col-4"], [1, "timeline", "timeline-simple"], [1, "timeline"], [1, "timeline-panel", 2, "background", "#f5f5f5"], [1, "timeline-heading"], [1, "badge", "badge-danger", 3, "click"], [1, "timeline-body"], [1, "chat-messages"], [1, "ti-time"], [1, "text-right", 2, "margin-bottom", "0"], ["href", "!#", 1, "visit-store"], [1, "timeline-panel"], [1, "badge", "badge-danger"], [1, "col-8"], [1, "timeline-inverted"], [1, "chat-area", "timeline-panel", 2, "background", "#f5f5f5"], [1, "mb-3", "d-flex"], [1, "timeline-body", "odd"], ["src", "https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg", "alt", "", 1, "man"], [1, "mb-3", "timeline-body", "even"], [1, "col-10"], ["appearance", "outline"], ["formControlName", "description", "matInput", "", "rows", "2", 1, "form-control"], [1, "col-2"], ["mat-raised-button", "", "type", "submit", 1, "mt-3", "btn", "btn-lg", "btn-fill", "btn-success"]], template: function BudgetNewMessagesComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Mensagens recebidas");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "notifications");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nesse ponto do sistema, voc\u00EA receber\u00E1 as mensagens dos parceiros, os seus fornecedores e poder\u00E1 manter contato com eles para esclarecer cada uma das suas d\u00FAvidas com objetivo de fechar neg\u00F3cio. \u00C9 proibido a troca de informa\u00E7\u00F5es de contato.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mensagens ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BudgetNewMessagesComponent_Template_span_click_19_listener() { return ctx.showInstructions(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "sup");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ver instru\u00E7\u00F5es");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BudgetNewMessagesComponent_Template_span_click_28_listener() { return ctx.openNav(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "#1 Parceiro");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Wifey made the best Father's Day meal ever. So thankful so happy so blessed.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h6");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " 24/03/2022 18:03 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "VISITAR LOJA");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "#2 Parceiro");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Wifey made the best Father's Day meal ever. So thankful so happy so blessed.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h6");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " 24/03/2022 18:03 ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "VISITAR LOJA");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "i", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Marcos Vinicius");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the \u201Cfuture\u201D theme. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " 22/03/2022 18:30");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "i", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Lucas");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the \u201Cfuture\u201D theme. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " 22/03/2022 18:30");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "i", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Marcos Vinicius");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the \u201Cfuture\u201D theme. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " 22/03/2022 18:30");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "i", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Lucas");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the \u201Cfuture\u201D theme. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " 22/03/2022 18:30");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "i", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Marcos Vinicius");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the \u201Cfuture\u201D theme. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " 22/03/2022 18:30");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "i", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Lucas");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the \u201Cfuture\u201D theme. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " 22/03/2022 18:30");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "i", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Marcos Vinicius");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the \u201Cfuture\u201D theme. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " 22/03/2022 18:30");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "i", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Lucas");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the \u201Cfuture\u201D theme. ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "strong");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " 22/03/2022 18:30");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mat-form-field", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Envie sua mensagem");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "textarea", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Enviar");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.instructions);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton], styles: [".alert[_ngcontent-%COMP%]   span.instructions[_ngcontent-%COMP%] { \r\n    max-width: 100%;\r\n    font-size: 1.1em;\r\n}\r\n\r\n .main-content {\r\n    padding: 10px 15px 30px 15px;\r\n}\r\n\r\n .mat-tab-label {\r\n    margin-top: 0!important;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    color: #7e7e7e;\r\n    font-weight: 400; \r\n}\r\n\r\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    font-weight: 400;\r\n    color: #7e7e7e;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\r\n    font-size: 1.1rem;\r\n    font-weight: 400;\r\n    color: #7e7e7e;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n    font-size: 1.1rem;\r\n    font-weight: 400;\r\n    color: #7e7e7e;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\r\n    font-size: 1.1rem;\r\n    font-weight: 400;\r\n    color: #7e7e7e;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n}\r\n\r\n.chat-area.timeline-panel[_ngcontent-%COMP%] {\r\n    background: #f5f5f5;\r\n    max-height: 600px;\r\n    overflow-y: auto!important;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before, .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\r\n    display: unset;\r\n}\r\n\r\n.timeline.timeline-simple[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\r\n    width: 98%;\r\n    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 50%);\r\n}\r\n\r\n.timeline.timeline-simple[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-badge[_ngcontent-%COMP%] {\r\n    left: -2%;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\r\n    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 50%);\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%]   .timeline-body.odd[_ngcontent-%COMP%] {\r\n    border: 1px solid #d5d5d5;\r\n    border-radius: 11px;\r\n    padding: 13px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.timeline[_ngcontent-%COMP%]   .timeline-body.even[_ngcontent-%COMP%] {\r\n    background: #42b11526;\r\n    border: 1px solid #d5d5d5;\r\n    border-radius: 11px;\r\n    padding: 13px;\r\n    width: 100%;\r\n    float: right;\r\n}\r\n\r\n.chat-messages[_ngcontent-%COMP%] {\r\n    color: #424242;\r\n    font-weight: 400;\r\n    font-size: 15px;\r\n    line-height: 19px;\r\n    text-align: justify;\r\n}\r\n\r\n.chat-messages[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n    font-weight: 600;\r\n}\r\n\r\n.man[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n    height: -webkit-fit-content;\r\n    height: -moz-fit-content;\r\n    height: fit-content;\r\n    border: 1px solid #d5d5d5;\r\n    border-radius: 100%;\r\n    margin: 0 20px;\r\n}\r\n\r\n.visit-store[_ngcontent-%COMP%] {\r\n    color: #838383;\r\n    font-weight: 700;\r\n}\r\n\r\nsup[_ngcontent-%COMP%] {\r\n    color: #ee4f4c;\r\n    cursor: pointer;\r\n}"] });
    return BudgetNewMessagesComponent;
}());



/***/ }),

/***/ 60240:
/*!**************************************************************************************!*\
  !*** ./src/app/painel/budget/budget-resquest-cote/budget-resquest-cote.component.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetResquestCoteComponent": function() { return /* binding */ BudgetResquestCoteComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var _budget_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../budget.service */ 56578);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 29609);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 71178);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 13070);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 6174);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84369);













function BudgetResquestCoteComponent_mat_error_22_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "*Campo obrigat\u00F3rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function BudgetResquestCoteComponent_mat_error_27_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "*Campo obrigat\u00F3rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function BudgetResquestCoteComponent_mat_error_28_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "*Descri\u00E7\u00E3o muito curta");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
var BudgetResquestCoteComponent = /** @class */ /*@__PURE__*/ (function () {
    function BudgetResquestCoteComponent(fb, _loader, _budget) {
        this.fb = fb;
        this._loader = _loader;
        this._budget = _budget;
        this.numberOfMessages = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.instructions = true;
        this.submitted = false;
        this.form = this.fb.group({
            id: [0],
            subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            description: ['Estou entrando em contato contigo para abrir uma solicitação de orçamento aos materiais citados no assunto desta conversa e aguardo seu contato para demonstração de produtos e serviços para que possamos conversar melhor e fechar negócio.', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(180)])],
            contractor_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            project_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            budget_cat_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            accepted: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            created_at: [moment__WEBPACK_IMPORTED_MODULE_1__().format("YYYY-MM-DD hh:mm:ss")],
            updated_at: [moment__WEBPACK_IMPORTED_MODULE_1__().format("YYYY-MM-DD hh:mm:ss")],
        });
    }
    BudgetResquestCoteComponent.prototype.ngOnInit = function () {
    };
    BudgetResquestCoteComponent.prototype.sendRequestCote = function () {
        var _this = this;
        this.submitted = true;
        this.form.get('accepted').setValue(false);
        this.form.get('contractor_id').setValue(3);
        this.form.get('project_id').setValue(12);
        this.form.get('budget_cat_id').setValue(this.objBudget[0].budget_cat_id);
        if (this.form.valid) {
            this._loader.show();
            this._budget.sendRequestCoteAndMessagesToPartners(this.form.value).subscribe(function (response) {
                _this.numberOfMessages.emit(true);
                _this._loader.hide();
            }, function (error) {
                console.log(error);
                _this._loader.hide();
            });
        }
    };
    BudgetResquestCoteComponent.prototype.showInstructions = function () {
        this.instructions = false;
    };
    BudgetResquestCoteComponent.ɵfac = function BudgetResquestCoteComponent_Factory(t) { return new (t || BudgetResquestCoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_budget_service__WEBPACK_IMPORTED_MODULE_0__.BudgetService)); };
    BudgetResquestCoteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BudgetResquestCoteComponent, selectors: [["app-budget-resquest-cote"]], inputs: { objBudget: "objBudget" }, outputs: { numberOfMessages: "numberOfMessages" }, decls: 31, vars: 8, consts: [[1, "col-12"], [1, "align-items-center", "row"], [1, "col-12", 3, "hidden"], [1, "row"], [1, "col-12", "col-lg-3", "d-flex"], [1, "mt-4", "font-weight-bolder", "align-self-center"], [1, "col-12", "col-lg-9"], ["data-notify", "container", 1, "alert", "alert-primary", "alert-with-icon"], ["data-notify", "icon", 1, "material-icons"], ["data-notify", "message", 1, "instructions"], [1, "col-12", "mt-3"], [3, "formGroup"], [3, "click"], ["appearance", "fill", 1, "example-full-width"], ["type", "text", "matInput", "", "formControlName", "subject", 3, "value"], [4, "ngIf"], ["appearance", "fill"], ["formControlName", "description", "matInput", "", "rows", "5", 1, "form-control"], ["mat-raised-button", "", "type", "submit", 1, "mt-3", "btn", "btn-lg", "btn-fill", "btn-success", 3, "disabled", "click"]], template: function BudgetResquestCoteComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "i", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "notifications");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Nesse ponto do sistema, voc\u00EA dever\u00E1 inserir o detalhamento das atividades a serem executadas junto com os materiais e suas respectivas quantidades para que o vendedor possa responder da forma mais precisa sobre o custo dessa atividade em suprimento de materiais e m\u00E3o de obra.");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Assunto ");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BudgetResquestCoteComponent_Template_span_click_17_listener() { return ctx.showInstructions(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "sup");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Ver instru\u00E7\u00F5es");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-form-field", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, BudgetResquestCoteComponent_mat_error_22_Template, 2, 0, "mat-error", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Descri\u00E7\u00E3o");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-form-field", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "textarea", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, BudgetResquestCoteComponent_mat_error_27_Template, 2, 0, "mat-error", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, BudgetResquestCoteComponent_mat_error_28_Template, 2, 0, "mat-error", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BudgetResquestCoteComponent_Template_button_click_29_listener() { return ctx.sendRequestCote(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Solicitar or\u00E7amento");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.instructions);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.objBudget[0].subject);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("value", "Or\u00E7amento - ", ctx.objBudget[0].subject, "");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.form.get("description").hasError("required"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.form.get("description").hasError("minlength"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.objBudget[0].budget_cat_id == 0);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError], styles: [".alert[_ngcontent-%COMP%]   span.instructions[_ngcontent-%COMP%] { \r\n    max-width: 100%;\r\n    font-size: 1.1em;\r\n}\r\n\r\n .main-content {\r\n    padding: 10px 15px 30px 15px;\r\n}\r\n\r\n .mat-tab-label {\r\n    margin-top: 0!important;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    color: #7e7e7e;\r\n    font-weight: 400; \r\n}\r\n\r\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n    font-size: 1.1rem;\r\n    font-weight: 400;\r\n    color: #7e7e7e;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\r\n    font-size: 1.1rem;\r\n    font-weight: 400;\r\n    color: #7e7e7e;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-ms-input-placeholder {\r\n    font-size: 1.1rem;\r\n    font-weight: 400;\r\n    color: #7e7e7e;\r\n}\r\n\r\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\r\n    font-size: 1.1rem;\r\n    font-weight: 400;\r\n    color: #7e7e7e;\r\n}\r\n\r\n.timeline.timeline-simple[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\r\n    width: 98%;\r\n}\r\n\r\nsup[_ngcontent-%COMP%] {\r\n    color: #ee4f4c;\r\n    cursor: pointer;\r\n}"] });
    return BudgetResquestCoteComponent;
}());



/***/ }),

/***/ 12220:
/*!***************************************************!*\
  !*** ./src/app/painel/budget/budget.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetComponent": function() { return /* binding */ BudgetComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 38289);
/* harmony import */ var _budget_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budget.service */ 56578);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 57173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 71178);
/* harmony import */ var _budget_chatter_budget_chatter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./budget-chatter/budget-chatter.component */ 72079);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _budget_resquest_cote_budget_resquest_cote_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./budget-resquest-cote/budget-resquest-cote.component */ 60240);
/* harmony import */ var _budget_new_messages_budget_new_messages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./budget-new-messages/budget-new-messages.component */ 45385);












var _c0 = ["selectionTabIndex"];
function BudgetComponent_li_11_Template(rf, ctx) {
    if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BudgetComponent_li_11_Template_li_click_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); var item_r3 = restoredCtx.$implicit; var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.selectFirstTabIndex(item_r3.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BudgetComponent_li_11_Template_a_click_1_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); var item_r3 = restoredCtx.$implicit; return item_r3.id; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var item_r3 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r3.description);
    }
}
function BudgetComponent_ng_template_18_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " Ver mensagens ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.showMessages);
    }
}
var BudgetComponent = /** @class */ /*@__PURE__*/ (function () {
    function BudgetComponent(_budget, _loader) {
        this._budget = _budget;
        this._loader = _loader;
        this.showMessages = "Ver mensagens";
        this.budgetCategories = [];
        this.idPartnersCategory = 0;
        this.showPartnersOfCategory = false;
        this.objBudget = [];
        this.getCategoryOfPartners();
        this.getMessagesFromPartnersToCustomers();
        this.objBudget = [{ budget_cat_id: '', subject: '' }];
    }
    BudgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.interval)(60000).subscribe(function () {
            _this.getMessageList();
        });
    };
    BudgetComponent.prototype.getCategoryOfPartners = function () {
        var _this = this;
        this._loader.show();
        this._budget.getCategoryOfPartners().subscribe({
            next: function (BudgetCategories) {
                _this._loader.hide();
                _this.budgetCategories = BudgetCategories.data;
            },
            error: function (error) {
                console.log(error);
                _this._loader.hide();
            },
            complete: function () {
                _this._loader.hide();
            },
        });
    };
    BudgetComponent.prototype.requestPartnersOfCategory = function (budgetCategory) {
        this.showPartnersOfCategory = true;
        this.idPartnersCategory = budgetCategory;
    };
    BudgetComponent.prototype.restart = function () {
        this.showPartnersOfCategory = false;
        this.idPartnersCategory = 0;
        this.getCategoryOfPartners();
    };
    BudgetComponent.prototype.selectFirstTabIndex = function (segment) {
        var _this = this;
        var tabGroup = this.selectionTabIndex;
        if (!tabGroup || !(tabGroup instanceof _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabGroup))
            return;
        var tabCount = tabGroup._tabs.length;
        this._loader.show();
        this._budget.getOrcamentoCategory(segment).subscribe(function (res) {
            _this.objBudget[0].budget_cat_id = res.data.id;
            _this.objBudget[0].subject = res.data.description;
            tabGroup.selectedIndex = 1;
            /* this.showUp();  */
            _this._loader.hide();
        }, function (error) {
            console.log(error);
            _this._loader.hide();
        });
    };
    BudgetComponent.prototype.getMessagesFromPartnersToCustomers = function () {
        var _this = this;
        this._loader.show();
        this._budget.getMessagesFromPartnersToCustomers().subscribe(function (messages) {
            _this.showMessages = messages.data;
            _this._loader.hide();
        }, function (error) {
            console.log(error);
            _this._loader.hide();
        });
    };
    BudgetComponent.prototype.resultNumberOfMessages = function (event) {
        if (event == true) {
            this.getMessagesFromPartnersToCustomers();
        }
    };
    BudgetComponent.prototype.getMessageList = function () {
        console.log("funcionando ...");
    };
    BudgetComponent.prototype.showUp = function () {
        var element = document.querySelector('.goUp');
        element.scrollIntoView();
    };
    BudgetComponent.ɵfac = function BudgetComponent_Factory(t) { return new (t || BudgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_budget_service__WEBPACK_IMPORTED_MODULE_0__.BudgetService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerService)); };
    BudgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BudgetComponent, selectors: [["app-budget"]], viewQuery: function BudgetComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.selectionTabIndex = _t.first);
            }
        }, decls: 20, vars: 3, consts: [["id", "budget", 1, "goUp", "main-content", 2, "position", "relative"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card", "mt-0"], [1, "card-body", "row"], ["id", "sidebar-segments", 1, "col-3", "mt-0", "mb-1"], [1, "mt-0", "s2parator"], ["role", "tablist", 1, "nav", "nav-pills", "nav-pills-danger", "flex-column"], ["class", "nav-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-9", "mt-0", "mb-1"], ["id", "mat-group-tabs"], ["selectionTabIndex", ""], ["label", "Solicitar or\u00E7amentos"], [3, "objBudget", "numberOfMessages"], ["mat-tab-label", ""], [3, "objBudget"], [1, "nav-item", 3, "click"], ["data-toggle", "tab", "href", "#link4", "role", "tablist", 1, "nav-link", 3, "click"], [1, "circleCounterOfDataReceived"]], template: function BudgetComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-budget-chatter");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h3", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Or\u00E7amentos");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ul", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, BudgetComponent_li_11_Template, 3, 1, "li", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-tab-group", 11, 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-tab", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "app-budget-resquest-cote", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("numberOfMessages", function BudgetComponent_Template_app_budget_resquest_cote_numberOfMessages_16_listener($event) { return ctx.resultNumberOfMessages($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-tab");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, BudgetComponent_ng_template_18_Template, 3, 1, "ng-template", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "app-budget-new-messages", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.budgetCategories);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("objBudget", ctx.objBudget);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("objBudget", ctx.objBudget);
            }
        }, directives: [_budget_chatter_budget_chatter_component__WEBPACK_IMPORTED_MODULE_1__.BudgetChatterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTab, _budget_resquest_cote_budget_resquest_cote_component__WEBPACK_IMPORTED_MODULE_2__.BudgetResquestCoteComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabLabel, _budget_new_messages_budget_new_messages_component__WEBPACK_IMPORTED_MODULE_3__.BudgetNewMessagesComponent], styles: [".hidden[_ngcontent-%COMP%] { \r\n    display: none!important\r\n}\r\n.circleCounterOfDataReceived[_ngcontent-%COMP%] {\r\n    color: white;\r\n    background: red;\r\n    font-size: 0.7rem;\r\n    border-radius: 100%;\r\n    padding: 2px;\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-left: 10px;\r\n    text-align: center;\r\n    font-weight: 700;\r\n}\r\n\r\n #budget .s2parator {\r\n    border-bottom: 1px solid #ebebeb;\r\n    line-height: 3rem;\r\n}\r\n\r\n #sidebar-segments .nav-pills {\r\n    padding: 0 0;\r\n}\r\n #sidebar-segments .nav-link {\r\n    font-size: 14px;\r\n    line-height: 12px;\r\n    text-align: left;\r\n    border-radius: 0;\r\n    background-color: rgba(200, 200, 200, 0.4);\r\n}\r\n #sidebar-segments .nav-link.active {\r\n    background-color: #f44336;\r\n}\r\n\r\n #mat-group-tabs .mat-tab-label {\r\n    font-size: 1.25rem;\r\n    line-height: 1.3em;\r\n    margin: 20px 0 3px;\r\n    font-weight: 300;\r\n}\r\n #mat-group-tabs.mat-primary .mat-ink-bar {\r\n    background-color: #f44336;\r\n}\r\n .main-panel .main-content { margin-top: 0 !important }\r\n  app-navbar-cmp { display: none; visibility: hidden }\r\n #budget .card {\r\n    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 40%);\r\n}\r\n #budget .card-body {\r\n    min-height: 130px;\r\n    display: flex;\r\n    align-items: unset;\r\n    justify-content: center;\r\n}"] });
    return BudgetComponent;
}());



/***/ }),

/***/ 36852:
/*!************************************************!*\
  !*** ./src/app/painel/budget/budget.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetModule": function() { return /* binding */ BudgetModule; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 29996);
/* harmony import */ var src_app_example_md_md_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/example/md/md.module */ 22551);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../app.module */ 78994);
/* harmony import */ var _budget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./budget.component */ 12220);
/* harmony import */ var _budget_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./budget.routing */ 48980);
/* harmony import */ var _budget_resquest_cote_budget_resquest_cote_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./budget-resquest-cote/budget-resquest-cote.component */ 60240);
/* harmony import */ var _budget_new_messages_budget_new_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./budget-new-messages/budget-new-messages.component */ 45385);
/* harmony import */ var _budget_chatter_budget_chatter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./budget-chatter/budget-chatter.component */ 72079);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 35366);












var BudgetModule = /** @class */ /*@__PURE__*/ (function () {
    function BudgetModule() {
    }
    BudgetModule.ɵfac = function BudgetModule_Factory(t) { return new (t || BudgetModule)(); };
    BudgetModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: BudgetModule });
    BudgetModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
                _app_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
                src_app_example_md_md_module__WEBPACK_IMPORTED_MODULE_0__.MdModule,
                _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(_budget_routing__WEBPACK_IMPORTED_MODULE_3__.BudgetRoutes),
            ], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] });
    return BudgetModule;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](BudgetModule, { declarations: [_budget_component__WEBPACK_IMPORTED_MODULE_2__.BudgetComponent,
            _budget_resquest_cote_budget_resquest_cote_component__WEBPACK_IMPORTED_MODULE_4__.BudgetResquestCoteComponent,
            _budget_new_messages_budget_new_messages_component__WEBPACK_IMPORTED_MODULE_5__.BudgetNewMessagesComponent,
            _budget_chatter_budget_chatter_component__WEBPACK_IMPORTED_MODULE_6__.BudgetChatterComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _app_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
            src_app_example_md_md_module__WEBPACK_IMPORTED_MODULE_0__.MdModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] });
})();


/***/ }),

/***/ 48980:
/*!*************************************************!*\
  !*** ./src/app/painel/budget/budget.routing.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetRoutes": function() { return /* binding */ BudgetRoutes; }
/* harmony export */ });
/* harmony import */ var _budget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./budget.component */ 12220);
/* harmony import */ var src_app_example_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/example/dashboard/dashboard.component */ 71314);


var BudgetRoutes = [
    { path: 'dashboard', component: src_app_example_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent },
    { path: 'budget', component: _budget_component__WEBPACK_IMPORTED_MODULE_0__.BudgetComponent },
    { path: 'budget/:id', component: _budget_component__WEBPACK_IMPORTED_MODULE_0__.BudgetComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];


/***/ })

}]);