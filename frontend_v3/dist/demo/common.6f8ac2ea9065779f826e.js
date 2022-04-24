(self["webpackChunkmaterial_dashboard_pro_angular"] = self["webpackChunkmaterial_dashboard_pro_angular"] || []).push([[592],{

/***/ 56578:
/*!*************************************************!*\
  !*** ./src/app/painel/budget/budget.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BudgetService": function() { return /* binding */ BudgetService; }
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 42693);




var BudgetService = /** @class */ /*@__PURE__*/ (function () {
    function BudgetService(httpClient) {
        this.httpClient = httpClient;
        this.urlPanel = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.productionUrl;
    }
    BudgetService.prototype.getCategoryOfPartners = function () {
        return this.httpClient.get(this.urlPanel + "/budget/category");
    };
    BudgetService.prototype.getPartnersOfSpecificCategory = function (category) {
        return this.httpClient.get(this.urlPanel + "/partner/" + category);
    };
    BudgetService.prototype.getOrcamentoCategory = function (budget_category) {
        return this.httpClient.get(this.urlPanel + "/budget/category/" + budget_category);
    };
    BudgetService.prototype.sendRequestCoteAndMessagesToPartners = function (cote) {
        return this.httpClient.post(this.urlPanel + "/budget/coterequest", cote);
    };
    BudgetService.prototype.getMessagesFromPartnersToCustomers = function () {
        return this.httpClient.get(this.urlPanel + "/budget/messages/count");
    };
    BudgetService.ɵfac = function BudgetService_Factory(t) { return new (t || BudgetService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
    BudgetService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BudgetService, factory: BudgetService.ɵfac, providedIn: 'root' });
    return BudgetService;
}());



/***/ })

}]);