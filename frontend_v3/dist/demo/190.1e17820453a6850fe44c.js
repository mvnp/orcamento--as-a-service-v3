(self["webpackChunkmaterial_dashboard_pro_angular"] = self["webpackChunkmaterial_dashboard_pro_angular"] || []).push([[190],{

/***/ 80012:
/*!********************************************************************!*\
  !*** ./node_modules/ng2-nouislider/__ivy_ngcc__/ng2-nouislider.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultFormatter": function() { return /* binding */ DefaultFormatter; },
/* harmony export */   "NouisliderComponent": function() { return /* binding */ NouisliderComponent; },
/* harmony export */   "NouisliderModule": function() { return /* binding */ NouisliderModule; }
/* harmony export */ });
/* harmony import */ var C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ 72454);
/* harmony import */ var C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nouislider */ 32637);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31041);








var DefaultFormatter = /*#__PURE__*/function () {
  function DefaultFormatter() {
    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, DefaultFormatter);
  }

  (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(DefaultFormatter, [{
    key: "to",
    value:
    /**
     * @param {?} value
     * @return {?}
     */
    function to(value) {
      // formatting with http://stackoverflow.com/a/26463364/478584
      return String(parseFloat(parseFloat(String(value)).toFixed(2)));
    }
  }, {
    key: "from",
    value:
    /**
     * @param {?} value
     * @return {?}
     */
    function from(value) {
      return parseFloat(value);
    }
  }]);

  return DefaultFormatter;
}();

var NouisliderComponent = /*@__PURE__*/function () {
  var NouisliderComponent = /*#__PURE__*/function () {
    /**
     * @param {?} ngZone
     * @param {?} el
     * @param {?} renderer
     */
    function NouisliderComponent(ngZone, el, renderer) {
      var _this = this;

      (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, NouisliderComponent);

      this.ngZone = ngZone;
      this.el = el;
      this.renderer = renderer;
      this.config = {};
      this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(true);
      this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(true);
      this.slide = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(true);
      this.set = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(true);
      this.start = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(true);
      this.end = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(true);
      this.onChange = Function.prototype;
      this.cleanups = [];

      this.eventHandler = function (emitter, values, handle, unencoded) {
        var
        /** @type {?} */
        v = _this.toValues(values);

        var
        /** @type {?} */
        emitEvents = false;

        if (_this.value === undefined) {
          _this.value = v;
          return;
        }

        if (Array.isArray(v) && _this.value[handle] != v[handle]) {
          emitEvents = true;
        }

        if (!Array.isArray(v) && _this.value != v) {
          emitEvents = true;
        }

        if (emitEvents) {
          _this.ngZone.run(function () {
            if (emitter.observers.length > 0) {
              emitter.emit(v);
            }

            _this.onChange(v);
          });
        }

        if (Array.isArray(v)) {
          _this.value[handle] = v[handle];
        } else {
          _this.value = v;
        }
      };

      this.defaultKeyHandler = function (e) {
        var
        /** @type {?} */
        stepSize = _this.slider.steps();

        var
        /** @type {?} */
        index = parseInt(e.target.getAttribute('data-handle'));
        var
        /** @type {?} */
        sign = 1;
        var
        /** @type {?} */
        multiplier = 1;
        var
        /** @type {?} */
        step = 0;
        var
        /** @type {?} */
        delta = 0;

        switch (e.which) {
          case 34:
            // PageDown
            multiplier = _this.config.pageSteps;

          case 40: // ArrowDown

          case 37:
            // ArrowLeft
            sign = -1;
            step = stepSize[index][0];
            e.preventDefault();
            break;

          case 33:
            // PageUp
            multiplier = _this.config.pageSteps;

          case 38: // ArrowUp

          case 39:
            // ArrowRight
            step = stepSize[index][1];
            e.preventDefault();
            break;

          default:
            break;
        }

        delta = sign * multiplier * step;
        var
        /** @type {?} */
        newValue;

        if (Array.isArray(_this.value)) {
          newValue = [].concat(_this.value);
          newValue[index] = newValue[index] + delta;
        } else {
          newValue = _this.value + delta;
        }

        _this.slider.set(newValue);
      };
    }
    /**
     * @return {?}
     */


    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(NouisliderComponent, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        var _this2 = this;

        var
        /** @type {?} */
        inputsConfig = JSON.parse(JSON.stringify({
          behaviour: this.behaviour,
          connect: this.connect,
          limit: this.limit,
          start: this.formControl !== undefined ? this.formControl.value : this.ngModel,
          step: this.step,
          pageSteps: this.pageSteps,
          keyboard: this.keyboard,
          onKeydown: this.onKeydown,
          range: this.range || this.config.range || {
            min: this.min,
            max: this.max
          },
          tooltips: this.tooltips,
          snap: this.snap,
          animate: this.animate
        }));
        inputsConfig.tooltips = this.tooltips || this.config.tooltips;
        inputsConfig.format = this.format || this.config.format || new DefaultFormatter();
        this.ngZone.runOutsideAngular(function () {
          _this2.slider = (0,nouislider__WEBPACK_IMPORTED_MODULE_3__.create)(_this2.el.nativeElement.querySelector('div'), Object.assign(_this2.config, inputsConfig));
        });
        this.handles = [].slice.call(this.el.nativeElement.querySelectorAll('.noUi-handle'));

        if (this.config.keyboard) {
          if (this.config.pageSteps === undefined) {
            this.config.pageSteps = 10;
          }

          var _iterator = (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__.default)(this.handles),
              _step;

          try {
            var _loop = function _loop() {
              var handle = _step.value;
              handle.setAttribute('tabindex', 0);
              var
              /** @type {?} */
              onKeydown = _this2.config.onKeydown || _this2.defaultKeyHandler;

              _this2.ngZone.runOutsideAngular(function () {
                _this2.cleanups.push(_this2.renderer.listen(handle, 'keydown', onKeydown), _this2.renderer.listen(handle, 'click', function () {
                  handle.focus();
                }));
              });
            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        this.slider.on('set', function (values, handle, unencoded) {
          _this2.eventHandler(_this2.set, values, handle, unencoded);
        });
        this.slider.on('update', function (values, handle, unencoded) {
          if (_this2.update.observers.length > 0) {
            _this2.ngZone.run(function () {
              _this2.update.emit(_this2.toValues(values));
            });
          }
        });
        this.slider.on('change', function (values, handle, unencoded) {
          if (_this2.change.observers.length > 0) {
            _this2.ngZone.run(function () {
              _this2.change.emit(_this2.toValues(values));
            });
          }
        });
        this.slider.on('slide', function (values, handle, unencoded) {
          _this2.eventHandler(_this2.slide, values, handle, unencoded);
        });
        this.slider.on('start', function (values, handle, unencoded) {
          if (_this2.start.observers.length > 0) {
            _this2.ngZone.run(function () {
              _this2.start.emit(_this2.toValues(values));
            });
          }
        });
        this.slider.on('end', function (values, handle, unencoded) {
          if (_this2.end.observers.length > 0) {
            _this2.ngZone.run(function () {
              _this2.end.emit(_this2.toValues(values));
            });
          }
        });
      }
      /**
       * @param {?} changes
       * @return {?}
       */

    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        var _this3 = this;

        if (this.slider && (changes.min || changes.max || changes.step || changes.range)) {
          this.ngZone.runOutsideAngular(function () {
            setTimeout(function () {
              _this3.slider.updateOptions({
                range: Object.assign({}, {
                  min: _this3.min,
                  max: _this3.max
                }, _this3.range || {}),
                step: _this3.step
              });
            });
          });
        }
      }
      /**
       * @return {?}
       */

    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this.slider.destroy();

        while (this.cleanups.length) {
          this.cleanups.pop()();
        }
      }
      /**
       * @param {?} values
       * @return {?}
       */

    }, {
      key: "toValues",
      value: function toValues(values) {
        var
        /** @type {?} */
        v = values.map(this.config.format.from);
        return v.length == 1 ? v[0] : v;
      }
      /**
       * @param {?} value
       * @return {?}
       */

    }, {
      key: "writeValue",
      value: function writeValue(value) {
        var _this4 = this;

        if (this.slider) {
          this.ngZone.runOutsideAngular(function () {
            setTimeout(function () {
              _this4.slider.set(value);
            });
          });
        }
      }
      /**
       * @param {?} fn
       * @return {?}
       */

    }, {
      key: "registerOnChange",
      value: function registerOnChange(fn) {
        this.onChange = fn;
      }
      /**
       * @param {?} fn
       * @return {?}
       */

    }, {
      key: "registerOnTouched",
      value: function registerOnTouched(fn) {}
      /**
       * @param {?} isDisabled
       * @return {?}
       */

    }, {
      key: "setDisabledState",
      value: function setDisabledState(isDisabled) {
        isDisabled ? this.renderer.setAttribute(this.el.nativeElement.childNodes[0], 'disabled', 'true') : this.renderer.removeAttribute(this.el.nativeElement.childNodes[0], 'disabled');
      }
    }]);

    return NouisliderComponent;
  }();

  NouisliderComponent.ɵfac = function NouisliderComponent_Factory(t) {
    return new (t || NouisliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2));
  };

  NouisliderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NouisliderComponent,
    selectors: [["nouislider"]],
    hostVars: 2,
    hostBindings: function NouisliderComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ng2-nouislider", true);
      }
    },
    inputs: {
      config: "config",
      disabled: "disabled",
      behaviour: "behaviour",
      connect: "connect",
      limit: "limit",
      min: "min",
      max: "max",
      snap: "snap",
      animate: "animate",
      range: "range",
      step: "step",
      format: "format",
      pageSteps: "pageSteps",
      ngModel: "ngModel",
      keyboard: "keyboard",
      onKeydown: "onKeydown",
      formControl: "formControl",
      tooltips: "tooltips"
    },
    outputs: {
      change: "change",
      update: "update",
      slide: "slide",
      set: "set",
      start: "start",
      end: "end"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(function () {
        return NouisliderComponent;
      }),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 1,
    template: function NouisliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("disabled", ctx.disabled ? true : undefined);
      }
    },
    styles: ["[_nghost-%COMP%] {\n      display: block;\n      margin-top: 1rem;\n      margin-bottom: 1rem;\n    }"]
  });
  return NouisliderComponent;
}();

var NouisliderModule = /*@__PURE__*/function () {
  var NouisliderModule = /*#__PURE__*/(0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(function NouisliderModule() {
    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, NouisliderModule);
  });

  NouisliderModule.ɵfac = function NouisliderModule_Factory(t) {
    return new (t || NouisliderModule)();
  };

  NouisliderModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: NouisliderModule
  });
  NouisliderModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({});
  return NouisliderModule;
}();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NouisliderModule, {
    declarations: [NouisliderComponent],
    exports: [NouisliderComponent]
  });
})();
/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=ng2-nouislider.js.map

/***/ }),

/***/ 68474:
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-chips/__ivy_ngcc__/fesm2015/ngx-chips.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteIconComponent": function() { return /* binding */ DeleteIconComponent; },
/* harmony export */   "TagComponent": function() { return /* binding */ TagComponent; },
/* harmony export */   "TagInputComponent": function() { return /* binding */ TagInputComponent; },
/* harmony export */   "TagInputDropdown": function() { return /* binding */ TagInputDropdown; },
/* harmony export */   "TagInputForm": function() { return /* binding */ TagInputForm; },
/* harmony export */   "TagInputModule": function() { return /* binding */ TagInputModule; },
/* harmony export */   "TagRipple": function() { return /* binding */ TagRipple; },
/* harmony export */   "ɵa": function() { return /* binding */ TagInputAccessor; },
/* harmony export */   "ɵb": function() { return /* binding */ animations; },
/* harmony export */   "ɵc": function() { return /* binding */ DragProvider; },
/* harmony export */   "ɵd": function() { return /* binding */ HighlightPipe; }
/* harmony export */ });
/* harmony import */ var C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ 66581);
/* harmony import */ var C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ 71357);
/* harmony import */ var C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 28784);
/* harmony import */ var C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 84999);
/* harmony import */ var C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ 5587);
/* harmony import */ var C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var C_anewsuaobra_frontend_v3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 88774);
/* harmony import */ var C_anewsuaobra_frontend_v3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(C_anewsuaobra_frontend_v3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-material-dropdown */ 86506);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 3530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 98720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 47701);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 43835);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 79996);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ 99713);



















var _c0 = ["input"];

function TagComponent_div_1_ng_template_1_Template(rf, ctx) {}

var _c1 = function _c1(a0, a1) {
  return {
    item: a0,
    index: a1
  };
};

function TagComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TagComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("contenteditable", ctx_r0.editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](3, _c1, ctx_r0.model, ctx_r0.index))("ngTemplateOutlet", ctx_r0.template);
  }
}

function TagComponent_div_2_delete_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "delete-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TagComponent_div_2_delete_icon_3_Template_delete_icon_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r5.remove($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function TagComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown.enter", function TagComponent_div_2_Template_div_keydown_enter_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r7.disableEditMode($event);
    })("keydown.escape", function TagComponent_div_2_Template_div_keydown_escape_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r9.disableEditMode($event);
    })("click", function TagComponent_div_2_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r10.editing ? $event.stopPropagation() : undefined;
    })("blur", function TagComponent_div_2_Template_div_blur_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r11.onBlurred($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, TagComponent_div_2_delete_icon_3_Template, 1, 0, "delete-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("contenteditable", ctx_r1.editing)("title", ctx_r1.getDisplayValue(ctx_r1.model));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.getDisplayValue(ctx_r1.model), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.isDeleteIconVisible());
  }
}

function TagComponent_tag_ripple_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tag-ripple", 9);
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("state", ctx_r2.rippleState);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("tabindex", -1);
  }
}

function TagInputDropdown_ng2_menu_item_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "highlight");
  }

  if (rf & 2) {
    var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](1, 1, item_r1[ctx_r4.displayBy], ctx_r4.tagInput.inputForm.value.value), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
  }
}

function TagInputDropdown_ng2_menu_item_2_2_ng_template_0_Template(rf, ctx) {}

var _c2 = function _c2(a0, a1, a2) {
  return {
    item: a0,
    index: a1,
    last: a2
  };
};

function TagInputDropdown_ng2_menu_item_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, TagInputDropdown_ng2_menu_item_2_2_ng_template_0_Template, 0, 0, "ng-template", 7);
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    var item_r1 = ctx_r8.$implicit;
    var index_r2 = ctx_r8.index;
    var last_r3 = ctx_r8.last;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.templates.first)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](2, _c2, item_r1, index_r2, last_r3));
  }
}

function TagInputDropdown_ng2_menu_item_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ng2-menu-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TagInputDropdown_ng2_menu_item_2_span_1_Template, 2, 4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, TagInputDropdown_ng2_menu_item_2_2_Template, 1, 6, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", item_r1)("ngSwitch", !!ctx_r0.templates.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", false);
  }
}

function TagInputComponent_tag_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tag", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onSelect", function TagInputComponent_tag_2_Template_tag_onSelect_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      var item_r3 = restoredCtx.$implicit;
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r5.selectItem(item_r3);
    })("onRemove", function TagInputComponent_tag_2_Template_tag_onRemove_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      var item_r3 = restoredCtx.$implicit;
      var i_r4 = restoredCtx.index;
      var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r7.onRemoveRequested(item_r3, i_r4);
    })("onKeyDown", function TagInputComponent_tag_2_Template_tag_onKeyDown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r8.handleKeydown($event);
    })("onTagEdited", function TagInputComponent_tag_2_Template_tag_onTagEdited_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r9.updateEditedTag($event);
    })("onBlur", function TagInputComponent_tag_2_Template_tag_onBlur_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      var i_r4 = restoredCtx.index;
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r10.onTagBlurred($event, i_r4);
    })("dragstart", function TagInputComponent_tag_2_Template_tag_dragstart_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      var item_r3 = restoredCtx.$implicit;
      var i_r4 = restoredCtx.index;
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r11.dragZone ? ctx_r11.onDragStarted($event, item_r3, i_r4) : undefined;
    })("drop", function TagInputComponent_tag_2_Template_tag_drop_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      var i_r4 = restoredCtx.index;
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r12.dragZone ? ctx_r12.onTagDropped($event, i_r4) : undefined;
    })("dragenter", function TagInputComponent_tag_2_Template_tag_dragenter_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r13.dragZone ? ctx_r13.onDragOver($event) : undefined;
    })("dragover", function TagInputComponent_tag_2_Template_tag_dragover_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      var i_r4 = restoredCtx.index;
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r14.dragZone ? ctx_r14.onDragOver($event, i_r4) : undefined;
    })("dragleave", function TagInputComponent_tag_2_Template_tag_dragleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r15.dragZone ? ctx_r15.dragProvider.onDragEnd() : undefined;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r3 = ctx.$implicit;
    var i_r4 = ctx.index;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("draggable", ctx_r0.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("canAddTag", ctx_r0.isTagValid)("disabled", ctx_r0.disable)("@animation", ctx_r0.animationMetadata)("hasRipple", ctx_r0.ripple)("index", i_r4)("removable", ctx_r0.removable)("editable", ctx_r0.editable)("displayBy", ctx_r0.displayBy)("identifyBy", ctx_r0.identifyBy)("template", !!ctx_r0.hasCustomTemplate() ? ctx_r0.templates.first : undefined)("draggable", ctx_r0.dragZone)("model", item_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("tabindex", 0);
  }
}

function TagInputComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 7);
  }
}

function TagInputComponent_div_6_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var error_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](error_r17);
  }
}

function TagInputComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TagInputComponent_div_6_p_1_Template, 3, 1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r2.theme);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.errors);
  }
}

var _c3 = ["*"];

var escape = function escape(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

var ɵ0 = escape;

var HighlightPipe = /*@__PURE__*/function () {
  var HighlightPipe = /*#__PURE__*/function () {
    function HighlightPipe() {
      (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, HighlightPipe);
    }

    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(HighlightPipe, [{
      key: "transform",
      value:
      /**
       * @name transform
       * @param value {string}
       * @param arg {string}
       */
      function transform(value, arg) {
        if (!arg.trim()) {
          return value;
        }

        try {
          var regex = new RegExp("(".concat(escape(arg), ")"), 'i');
          return value.replace(regex, '<b>$1</b>');
        } catch (e) {
          return value;
        }
      }
    }]);

    return HighlightPipe;
  }();

  HighlightPipe.ɵfac = function HighlightPipe_Factory(t) {
    return new (t || HighlightPipe)();
  };

  HighlightPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefinePipe"]({
    name: "highlight",
    type: HighlightPipe,
    pure: true
  });
  return HighlightPipe;
}();
/*
** constants and default values for <tag-input>
 */


var PLACEHOLDER = '+ Tag';
var SECONDARY_PLACEHOLDER = 'Enter a new tag';
var KEYDOWN = 'keydown';
var KEYUP = 'keyup';
var FOCUS = 'focus';
var MAX_ITEMS_WARNING = 'The number of items specified was greater than the property max-items.';
var ACTIONS_KEYS = {
  DELETE: 'DELETE',
  SWITCH_PREV: 'SWITCH_PREV',
  SWITCH_NEXT: 'SWITCH_NEXT',
  TAB: 'TAB'
};
var KEY_PRESS_ACTIONS = {
  8: ACTIONS_KEYS.DELETE,
  46: ACTIONS_KEYS.DELETE,
  37: ACTIONS_KEYS.SWITCH_PREV,
  39: ACTIONS_KEYS.SWITCH_NEXT,
  9: ACTIONS_KEYS.TAB
};
var DRAG_AND_DROP_KEY = 'Text';
var NEXT = 'NEXT';
var PREV = 'PREV';

var DragProvider = /*@__PURE__*/function () {
  var DragProvider = /*#__PURE__*/function () {
    function DragProvider() {
      (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, DragProvider);

      this.state = {
        dragging: false,
        dropping: false,
        index: undefined
      };
    }
    /**
     * @name setDraggedItem
     * @param event
     * @param tag
     */


    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(DragProvider, [{
      key: "setDraggedItem",
      value: function setDraggedItem(event, tag) {
        if (event && event.dataTransfer) {
          event.dataTransfer.setData(DRAG_AND_DROP_KEY, JSON.stringify(tag));
        }
      }
      /**
       * @name getDraggedItem
       * @param event
       */

    }, {
      key: "getDraggedItem",
      value: function getDraggedItem(event) {
        if (event && event.dataTransfer) {
          var data = event.dataTransfer.getData(DRAG_AND_DROP_KEY);

          try {
            return JSON.parse(data);
          } catch (_a) {
            return;
          }
        }
      }
      /**
       * @name setSender
       * @param sender
       */

    }, {
      key: "setSender",
      value: function setSender(sender) {
        this.sender = sender;
      }
      /**
       * @name setReceiver
       * @param receiver
       */

    }, {
      key: "setReceiver",
      value: function setReceiver(receiver) {
        this.receiver = receiver;
      }
      /**
       * @name onTagDropped
       * @param tag
       * @param indexDragged
       * @param indexDropped
       */

    }, {
      key: "onTagDropped",
      value: function onTagDropped(tag, indexDragged, indexDropped) {
        this.onDragEnd();
        this.sender.onRemoveRequested(tag, indexDragged);
        this.receiver.onAddingRequested(false, tag, indexDropped);
      }
      /**
       * @name setState
       * @param state
       */

    }, {
      key: "setState",
      value: function setState(state) {
        this.state = Object.assign(Object.assign({}, this.state), state);
      }
      /**
       * @name getState
       * @param key
       */

    }, {
      key: "getState",
      value: function getState(key) {
        return key ? this.state[key] : this.state;
      }
      /**
       * @name onDragEnd
       */

    }, {
      key: "onDragEnd",
      value: function onDragEnd() {
        this.setState({
          dragging: false,
          dropping: false,
          index: undefined
        });
      }
    }]);

    return DragProvider;
  }();

  DragProvider.ɵfac = function DragProvider_Factory(t) {
    return new (t || DragProvider)();
  };

  DragProvider.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: DragProvider,
    factory: function factory(t) {
      return DragProvider.ɵfac(t);
    }
  });
  return DragProvider;
}();

var defaults = {
  tagInput: {
    separatorKeys: [],
    separatorKeyCodes: [],
    maxItems: Infinity,
    placeholder: PLACEHOLDER,
    secondaryPlaceholder: SECONDARY_PLACEHOLDER,
    validators: [],
    asyncValidators: [],
    onlyFromAutocomplete: false,
    errorMessages: {},
    theme: '',
    onTextChangeDebounce: 250,
    inputId: null,
    inputClass: '',
    clearOnBlur: false,
    hideForm: false,
    addOnBlur: false,
    addOnPaste: false,
    pasteSplitPattern: ',',
    blinkIfDupe: true,
    removable: true,
    editable: false,
    allowDupes: false,
    modelAsStrings: false,
    trimTags: true,
    ripple: true,
    tabIndex: '',
    disable: false,
    dragZone: '',
    onRemoving: undefined,
    onAdding: undefined,
    displayBy: 'display',
    identifyBy: 'value',
    animationDuration: {
      enter: '250ms',
      leave: '150ms'
    }
  },
  dropdown: {
    displayBy: 'display',
    identifyBy: 'value',
    appendToBody: true,
    offset: '50 0',
    focusFirstElement: false,
    showDropdownIfEmpty: false,
    minimumTextLength: 1,
    limitItemsTo: Infinity,
    keepOpen: true,
    dynamicUpdate: true,
    zIndex: 1000,
    matchingFn: matchingFn
  }
};
/**
 * @name matchingFn
 * @param this
 * @param value
 * @param target
 */

function matchingFn(value, target) {
  var targetValue = target[this.displayBy].toString();
  return targetValue && targetValue.toLowerCase().indexOf(value.toLowerCase()) >= 0;
}

var OptionsProvider = /*@__PURE__*/function () {
  var OptionsProvider = /*#__PURE__*/function () {
    function OptionsProvider() {
      (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, OptionsProvider);
    }

    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(OptionsProvider, [{
      key: "setOptions",
      value: function setOptions(options) {
        OptionsProvider.defaults.tagInput = Object.assign(Object.assign({}, defaults.tagInput), options.tagInput);
        OptionsProvider.defaults.dropdown = Object.assign(Object.assign({}, defaults.dropdown), options.dropdown);
      }
    }]);

    return OptionsProvider;
  }();

  OptionsProvider.defaults = defaults;
  return OptionsProvider;
}();

var TagModelClass = /*#__PURE__*/(0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(function TagModelClass() {
  (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, TagModelClass);
});

function isObject(obj) {
  return obj === Object(obj);
}

var TagInputAccessor = /*@__PURE__*/function () {
  var TagInputAccessor = /*#__PURE__*/function () {
    function TagInputAccessor() {
      (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, TagInputAccessor);

      this._items = [];
      /**
       * @name displayBy
       */

      this.displayBy = OptionsProvider.defaults.tagInput.displayBy;
      /**
       * @name identifyBy
       */

      this.identifyBy = OptionsProvider.defaults.tagInput.identifyBy;
    }

    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(TagInputAccessor, [{
      key: "items",
      get: function get() {
        return this._items;
      },
      set: function set(items) {
        this._items = items;

        this._onChangeCallback(this._items);
      }
    }, {
      key: "onTouched",
      value: function onTouched() {
        this._onTouchedCallback();
      }
    }, {
      key: "writeValue",
      value: function writeValue(items) {
        this._items = items || [];
      }
    }, {
      key: "registerOnChange",
      value: function registerOnChange(fn) {
        this._onChangeCallback = fn;
      }
    }, {
      key: "registerOnTouched",
      value: function registerOnTouched(fn) {
        this._onTouchedCallback = fn;
      }
      /**
       * @name getItemValue
       * @param item
       * @param fromDropdown
       */

    }, {
      key: "getItemValue",
      value: function getItemValue(item) {
        var fromDropdown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var property = fromDropdown && this.dropdown ? this.dropdown.identifyBy : this.identifyBy;
        return isObject(item) ? item[property] : item;
      }
      /**
       * @name getItemDisplay
       * @param item
       * @param fromDropdown
       */

    }, {
      key: "getItemDisplay",
      value: function getItemDisplay(item) {
        var fromDropdown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var property = fromDropdown && this.dropdown ? this.dropdown.displayBy : this.displayBy;
        return isObject(item) ? item[property] : item;
      }
      /**
       * @name getItemsWithout
       * @param index
       */

    }, {
      key: "getItemsWithout",
      value: function getItemsWithout(index) {
        return this.items.filter(function (item, position) {
          return position !== index;
        });
      }
    }]);

    return TagInputAccessor;
  }();

  TagInputAccessor.ɵfac = function TagInputAccessor_Factory(t) {
    return new (t || TagInputAccessor)();
  };

  TagInputAccessor.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: TagInputAccessor,
    inputs: {
      displayBy: "displayBy",
      identifyBy: "identifyBy"
    }
  });
  return TagInputAccessor;
}();
/**
 * @name listen
 * @param listenerType
 * @param action
 * @param condition
 */


function listen(listenerType, action) {
  var condition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  // if the event provided does not exist, throw an error
  if (!this.listeners.hasOwnProperty(listenerType)) {
    throw new Error('The event entered may be wrong');
  } // if a condition is present and is false, exit early


  if (!condition) {
    return;
  } // fire listener


  this.listeners[listenerType].push(action);
}

var TagInputForm = /*@__PURE__*/function () {
  var TagInputForm = /*#__PURE__*/function () {
    function TagInputForm() {
      (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, TagInputForm);

      /**
       * @name onSubmit
       */
      this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * @name onBlur
       */

      this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * @name onFocus
       */

      this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * @name onKeyup
       */

      this.onKeyup = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * @name onKeydown
       */

      this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * @name inputTextChange
       */

      this.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * @name validators
       */

      this.validators = [];
      /**
       * @name asyncValidators
       * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
       */

      this.asyncValidators = [];
      /**
       * @name tabindex
       * @desc pass through the specified tabindex to the input
       */

      this.tabindex = '';
      /**
       * @name disabled
       */

      this.disabled = false;
      this.item = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl({
        value: '',
        disabled: this.disabled
      });
    }
    /**
     * @name inputText
     */


    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(TagInputForm, [{
      key: "inputText",
      get: function get() {
        return this.item.value;
      }
      /**
       * @name inputText
       * @param text {string}
       */
      ,
      set: function set(text) {
        this.item.setValue(text);
        this.inputTextChange.emit(text);
      }
    }, {
      key: "ngOnInit",
      value: function ngOnInit() {
        this.item.setValidators(this.validators);
        this.item.setAsyncValidators(this.asyncValidators); // creating form

        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
          item: this.item
        });
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        if (changes.disabled && !changes.disabled.firstChange) {
          if (changes.disabled.currentValue) {
            this.form.controls['item'].disable();
          } else {
            this.form.controls['item'].enable();
          }
        }
      }
      /**
       * @name value
       */

    }, {
      key: "value",
      get: function get() {
        return this.form.get('item');
      }
      /**
       * @name isInputFocused
       */

    }, {
      key: "isInputFocused",
      value: function isInputFocused() {
        var doc = typeof document !== 'undefined' ? document : undefined;
        return doc ? doc.activeElement === this.input.nativeElement : false;
      }
      /**
       * @name getErrorMessages
       * @param messages
       */

    }, {
      key: "getErrorMessages",
      value: function getErrorMessages(messages) {
        var _this = this;

        return Object.keys(messages).filter(function (err) {
          return _this.value.hasError(err);
        }).map(function (err) {
          return messages[err];
        });
      }
      /**
       * @name hasErrors
       */

    }, {
      key: "hasErrors",
      value: function hasErrors() {
        var _this$form = this.form,
            dirty = _this$form.dirty,
            value = _this$form.value,
            valid = _this$form.valid;
        return dirty && value.item && !valid;
      }
      /**
       * @name focus
       */

    }, {
      key: "focus",
      value: function focus() {
        this.input.nativeElement.focus();
      }
      /**
       * @name blur
       */

    }, {
      key: "blur",
      value: function blur() {
        this.input.nativeElement.blur();
      }
      /**
       * @name getElementPosition
       */

    }, {
      key: "getElementPosition",
      value: function getElementPosition() {
        return this.input.nativeElement.getBoundingClientRect();
      }
      /**
       * - removes input from the component
       * @name destroy
       */

    }, {
      key: "destroy",
      value: function destroy() {
        var input = this.input.nativeElement;
        input.parentElement.removeChild(input);
      }
      /**
       * @name onKeyDown
       * @param $event
       */

    }, {
      key: "onKeyDown",
      value: function onKeyDown($event) {
        this.inputText = this.value.value;

        if ($event.key === 'Enter') {
          this.submit($event);
        } else {
          return this.onKeydown.emit($event);
        }
      }
      /**
       * @name onKeyUp
       * @param $event
       */

    }, {
      key: "onKeyUp",
      value: function onKeyUp($event) {
        this.inputText = this.value.value;
        return this.onKeyup.emit($event);
      }
      /**
       * @name submit
       */

    }, {
      key: "submit",
      value: function submit($event) {
        $event.preventDefault();
        this.onSubmit.emit($event);
      }
    }]);

    return TagInputForm;
  }();

  TagInputForm.ɵfac = function TagInputForm_Factory(t) {
    return new (t || TagInputForm)();
  };

  TagInputForm.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: TagInputForm,
    selectors: [["tag-input-form"]],
    viewQuery: function TagInputForm_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
      }
    },
    inputs: {
      validators: "validators",
      asyncValidators: "asyncValidators",
      tabindex: "tabindex",
      disabled: "disabled",
      inputText: "inputText",
      placeholder: "placeholder",
      inputId: "inputId",
      inputClass: "inputClass"
    },
    outputs: {
      onSubmit: "onSubmit",
      onBlur: "onBlur",
      onFocus: "onFocus",
      onKeyup: "onKeyup",
      onKeydown: "onKeydown",
      inputTextChange: "inputTextChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
    decls: 3,
    vars: 8,
    consts: [[3, "formGroup", "ngSubmit"], ["type", "text", "autocomplete", "off", "minlength", "1", "formControlName", "item", 1, "ng2-tag-input__text-input", 3, "tabindex", "ngClass", "focus", "blur", "keydown", "keyup"], ["input", ""]],
    template: function TagInputForm_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function TagInputForm_Template_form_ngSubmit_0_listener($event) {
          return ctx.submit($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focus", function TagInputForm_Template_input_focus_1_listener($event) {
          return ctx.onFocus.emit($event);
        })("blur", function TagInputForm_Template_input_blur_1_listener($event) {
          return ctx.onBlur.emit($event);
        })("keydown", function TagInputForm_Template_input_keydown_1_listener($event) {
          return ctx.onKeyDown($event);
        })("keyup", function TagInputForm_Template_input_keyup_1_listener($event) {
          return ctx.onKeyUp($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("tabindex", ctx.disabled ? -1 : ctx.tabindex ? ctx.tabindex : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx.inputClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("id", ctx.inputId)("placeholder", ctx.placeholder)("aria-label", ctx.placeholder)("tabindex", ctx.tabindex)("disabled", ctx.disabled ? ctx.disabled : null);
      }
    },
    directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass],
    styles: [".dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.dark.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.error-message[_ngcontent-%COMP%]{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{color:#d9534f}.ng2-tag-input__text-input[_ngcontent-%COMP%]{display:inline;vertical-align:middle;border:none;padding:0 .5rem;height:38px;font-size:1em;font-family:Roboto,\"Helvetica Neue\",sans-serif}.ng2-tag-input__text-input[_ngcontent-%COMP%]:focus{outline:0}.ng2-tag-input__text-input[disabled=true][_ngcontent-%COMP%]{opacity:.5;background:#fff}"]
  });
  return TagInputForm;
}();

var TagRipple = /*@__PURE__*/function () {
  var TagRipple = /*#__PURE__*/(0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(function TagRipple() {
    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, TagRipple);

    this.state = 'none';
  });

  TagRipple.ɵfac = function TagRipple_Factory(t) {
    return new (t || TagRipple)();
  };

  TagRipple.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: TagRipple,
    selectors: [["tag-ripple"]],
    inputs: {
      state: "state"
    },
    decls: 1,
    vars: 1,
    consts: [[1, "tag-ripple"]],
    template: function TagRipple_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 0);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("@ink", ctx.state);
      }
    },
    styles: ["[_nghost-%COMP%] {\n            width: 100%;\n            height: 100%;\n            left: 0;\n            overflow: hidden;\n            position: absolute;\n        }\n\n        .tag-ripple[_ngcontent-%COMP%] {\n            background: rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            height: 100%;\n            transform: translate(-50%, -50%);\n            position: absolute;\n        }"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.trigger)('ink', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)('none', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
        width: 0,
        opacity: 0
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)('none => clicked', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)(300, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
        opacity: 1,
        offset: 0,
        width: '30%',
        borderRadius: '100%'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
        opacity: 1,
        offset: 0.5,
        width: '50%'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
        opacity: 0.5,
        offset: 1,
        width: '100%',
        borderRadius: '16px'
      })]))])])]
    }
  });
  return TagRipple;
}(); // mocking navigator


var navigator = typeof window !== 'undefined' ? window.navigator : {
  userAgent: 'Chrome',
  vendor: 'Google Inc'
};
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

var TagComponent = /*@__PURE__*/function () {
  var TagComponent = /*#__PURE__*/function () {
    function TagComponent(element, renderer, cdRef) {
      (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, TagComponent);

      this.element = element;
      this.renderer = renderer;
      this.cdRef = cdRef;
      /**
       * @name disabled
       */

      this.disabled = false;
      /**
       * @name onSelect
       */

      this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * @name onRemove
       */

      this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * @name onBlur
       */

      this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * @name onKeyDown
       */

      this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * @name onTagEdited
       */

      this.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * @name editing
       */

      this.editing = false;
      /**
       * @name rippleState
       */

      this.rippleState = 'none';
    }
    /**
     * @name readonly {boolean}
     */


    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(TagComponent, [{
      key: "readonly",
      get: function get() {
        return typeof this.model !== 'string' && this.model.readonly === true;
      }
      /**
       * @name select
       */

    }, {
      key: "select",
      value: function select($event) {
        if (this.readonly || this.disabled) {
          return;
        }

        if ($event) {
          $event.stopPropagation();
        }

        this.focus();
        this.onSelect.emit(this.model);
      }
      /**
       * @name remove
       */

    }, {
      key: "remove",
      value: function remove($event) {
        $event.stopPropagation();
        this.onRemove.emit(this);
      }
      /**
       * @name focus
       */

    }, {
      key: "focus",
      value: function focus() {
        this.element.nativeElement.focus();
      }
    }, {
      key: "move",
      value: function move() {
        this.moving = true;
      }
      /**
       * @name keydown
       * @param event
       */

    }, {
      key: "keydown",
      value: function keydown(event) {
        if (this.editing) {
          if (event.keyCode === 13) {
            return this.disableEditMode(event);
          }
        } else {
          this.onKeyDown.emit({
            event: event,
            model: this.model
          });
        }
      }
      /**
       * @name blink
       */

    }, {
      key: "blink",
      value: function blink() {
        var classList = this.element.nativeElement.classList;
        classList.add('blink');
        setTimeout(function () {
          return classList.remove('blink');
        }, 50);
      }
      /**
       * @name toggleEditMode
       */

    }, {
      key: "toggleEditMode",
      value: function toggleEditMode() {
        if (this.editable) {
          return this.editing ? undefined : this.activateEditMode();
        }
      }
      /**
       * @name onBlurred
       * @param event
       */

    }, {
      key: "onBlurred",
      value: function onBlurred(event) {
        // Checks if it is editable first before handeling the onBlurred event in order to prevent
        // a bug in IE where tags are still editable with onlyFromAutocomplete set to true
        if (!this.editable) {
          return;
        }

        this.disableEditMode();
        var value = event.target.innerText;
        var result = typeof this.model === 'string' ? value : Object.assign(Object.assign({}, this.model), (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)({}, this.displayBy, value));
        this.onBlur.emit(result);
      }
      /**
       * @name getDisplayValue
       * @param item
       */

    }, {
      key: "getDisplayValue",
      value: function getDisplayValue(item) {
        return typeof item === 'string' ? item : item[this.displayBy];
      }
      /**
       * @desc returns whether the ripple is visible or not
       * only works in Chrome
       * @name isRippleVisible
       */

    }, {
      key: "isRippleVisible",
      get: function get() {
        return !this.readonly && !this.editing && isChrome && this.hasRipple;
      }
      /**
       * @name disableEditMode
       * @param $event
       */

    }, {
      key: "disableEditMode",
      value: function disableEditMode($event) {
        var classList = this.element.nativeElement.classList;
        var input = this.getContentEditableText();
        this.editing = false;
        classList.remove('tag--editing');

        if (!input) {
          this.setContentEditableText(this.model);
          return;
        }

        this.storeNewValue(input);
        this.cdRef.detectChanges();

        if ($event) {
          $event.preventDefault();
        }
      }
      /**
       * @name isDeleteIconVisible
       */

    }, {
      key: "isDeleteIconVisible",
      value: function isDeleteIconVisible() {
        return !this.readonly && !this.disabled && this.removable && !this.editing;
      }
      /**
       * @name getContentEditableText
       */

    }, {
      key: "getContentEditableText",
      value: function getContentEditableText() {
        var input = this.getContentEditable();
        return input ? input.innerText.trim() : '';
      }
      /**
       * @name setContentEditableText
       * @param model
       */

    }, {
      key: "setContentEditableText",
      value: function setContentEditableText(model) {
        var input = this.getContentEditable();
        var value = this.getDisplayValue(model);
        input.innerText = value;
      }
      /**
       * @name
       */

    }, {
      key: "activateEditMode",
      value: function activateEditMode() {
        var classList = this.element.nativeElement.classList;
        classList.add('tag--editing');
        this.editing = true;
      }
      /**
       * @name storeNewValue
       * @param input
       */

    }, {
      key: "storeNewValue",
      value: function storeNewValue(input) {
        var _this2 = this,
            _ref;

        var exists = function exists(tag) {
          return typeof tag === 'string' ? tag === input : tag[_this2.displayBy] === input;
        };

        var hasId = function hasId() {
          return _this2.model[_this2.identifyBy] !== _this2.model[_this2.displayBy];
        }; // if the value changed, replace the value in the model


        if (exists(this.model)) {
          return;
        }

        var model = typeof this.model === 'string' ? input : (_ref = {
          index: this.index
        }, (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(_ref, this.identifyBy, hasId() ? this.model[this.identifyBy] : input), (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(_ref, this.displayBy, input), _ref);

        if (this.canAddTag(model)) {
          this.onTagEdited.emit({
            tag: model,
            index: this.index
          });
        } else {
          this.setContentEditableText(this.model);
        }
      }
      /**
       * @name getContentEditable
       */

    }, {
      key: "getContentEditable",
      value: function getContentEditable() {
        return this.element.nativeElement.querySelector('[contenteditable]');
      }
    }]);

    return TagComponent;
  }();

  TagComponent.ɵfac = function TagComponent_Factory(t) {
    return new (t || TagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef));
  };

  TagComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: TagComponent,
    selectors: [["tag"]],
    viewQuery: function TagComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](TagRipple, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function TagComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown", function TagComponent_keydown_HostBindingHandler($event) {
          return ctx.keydown($event);
        });
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("moving", ctx.moving);
      }
    },
    inputs: {
      disabled: "disabled",
      model: "model",
      removable: "removable",
      editable: "editable",
      template: "template",
      displayBy: "displayBy",
      identifyBy: "identifyBy",
      index: "index",
      hasRipple: "hasRipple",
      canAddTag: "canAddTag"
    },
    outputs: {
      onSelect: "onSelect",
      onRemove: "onRemove",
      onBlur: "onBlur",
      onKeyDown: "onKeyDown",
      onTagEdited: "onTagEdited"
    },
    decls: 4,
    vars: 8,
    consts: [[3, "ngSwitch", "click", "dblclick", "mousedown", "mouseup"], [4, "ngSwitchCase"], ["class", "tag-wrapper", 4, "ngSwitchCase"], [3, "state", 4, "ngIf"], [3, "ngTemplateOutletContext", "ngTemplateOutlet"], [1, "tag-wrapper"], ["spellcheck", "false", 1, "tag__text", "inline", 3, "keydown.enter", "keydown.escape", "click", "blur"], ["aria-label", "Remove tag", "role", "button", 3, "click", 4, "ngIf"], ["aria-label", "Remove tag", "role", "button", 3, "click"], [3, "state"]],
    template: function TagComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TagComponent_Template_div_click_0_listener($event) {
          return ctx.select($event);
        })("dblclick", function TagComponent_Template_div_dblclick_0_listener() {
          return ctx.toggleEditMode();
        })("mousedown", function TagComponent_Template_div_mousedown_0_listener() {
          return ctx.rippleState = "clicked";
        })("mouseup", function TagComponent_Template_div_mouseup_0_listener() {
          return ctx.rippleState = "none";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TagComponent_div_1_Template, 2, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, TagComponent_div_2_Template, 4, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, TagComponent_tag_ripple_3_Template, 1, 2, "tag-ripple", 3);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", !!ctx.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("tabindex", -1)("aria-label", ctx.getDisplayValue(ctx.model));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isRippleVisible);
      }
    },
    directives: function directives() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, DeleteIconComponent, TagRipple];
    },
    styles: ["[_nghost-%COMP%], [_nghost-%COMP%] > div[_ngcontent-%COMP%], [_nghost-%COMP%] > div[_ngcontent-%COMP%]:focus{outline:0;overflow:hidden;transition:opacity 1s;z-index:1}[_nghost-%COMP%]{max-width:400px}.blink[_nghost-%COMP%]{-webkit-animation:.3s ease-in-out forwards blink;animation:.3s ease-in-out forwards blink}@-webkit-keyframes blink{0%{opacity:.3}}@keyframes blink{0%{opacity:.3}}[_nghost-%COMP%]   .disabled[_ngcontent-%COMP%]{cursor:not-allowed}[_nghost-%COMP%]   [contenteditable=true][_ngcontent-%COMP%]{outline:0}.tag-wrapper[_ngcontent-%COMP%]{flex-direction:row;display:flex}.tag__text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
  });
  return TagComponent;
}();
/**
 * @name animations
 */


var animations = [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.trigger)('animation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
  opacity: 1
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.state)('out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
  opacity: 0
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)('{{ enter }}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
  opacity: 0,
  offset: 0,
  transform: 'translate(0px, 20px)'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
  opacity: 0.3,
  offset: 0.3,
  transform: 'translate(0px, -10px)'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
  opacity: 0.5,
  offset: 0.5,
  transform: 'translate(0px, 0px)'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
  opacity: 0.75,
  offset: 0.75,
  transform: 'translate(0px, 5px)'
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
  opacity: 1,
  offset: 1,
  transform: 'translate(0px, 0px)'
})]))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)('{{ leave }}', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
  opacity: 1,
  transform: 'translateX(0)',
  offset: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
  opacity: 1,
  transform: 'translateX(-15px)',
  offset: 0.7
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({
  opacity: 0,
  transform: 'translateX(100%)',
  offset: 1.0
})]))])])];

var TagInputDropdown = /*@__PURE__*/function () {
  var TagInputDropdown = /*#__PURE__*/function () {
    function TagInputDropdown(injector) {
      var _this3 = this;

      (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, TagInputDropdown);

      this.injector = injector;
      /**
       * @name offset
       */

      this.offset = defaults.dropdown.offset;
      /**
       * @name focusFirstElement
       */

      this.focusFirstElement = defaults.dropdown.focusFirstElement;
      /**
       * - show autocomplete dropdown if the value of input is empty
       * @name showDropdownIfEmpty
       */

      this.showDropdownIfEmpty = defaults.dropdown.showDropdownIfEmpty;
      /**
       * - desc minimum text length in order to display the autocomplete dropdown
       * @name minimumTextLength
       */

      this.minimumTextLength = defaults.dropdown.minimumTextLength;
      /**
       * - number of items to display in the autocomplete dropdown
       * @name limitItemsTo
       */

      this.limitItemsTo = defaults.dropdown.limitItemsTo;
      /**
       * @name displayBy
       */

      this.displayBy = defaults.dropdown.displayBy;
      /**
       * @name identifyBy
       */

      this.identifyBy = defaults.dropdown.identifyBy;
      /**
       * @description a function a developer can use to implement custom matching for the autocomplete
       * @name matchingFn
       */

      this.matchingFn = defaults.dropdown.matchingFn;
      /**
       * @name appendToBody
       */

      this.appendToBody = defaults.dropdown.appendToBody;
      /**
       * @name keepOpen
       * @description option to leave dropdown open when adding a new item
       */

      this.keepOpen = defaults.dropdown.keepOpen;
      /**
       * @name dynamicUpdate
       */

      this.dynamicUpdate = defaults.dropdown.dynamicUpdate;
      /**
       * @name zIndex
       */

      this.zIndex = defaults.dropdown.zIndex;
      /**
       * list of items that match the current value of the input (for autocomplete)
       * @name items
       */

      this.items = [];
      /**
       * @name tagInput
       */

      this.tagInput = this.injector.get(TagInputComponent);
      /**
       * @name _autocompleteItems
       */

      this._autocompleteItems = [];
      /**
       *
       * @name show
       */

      this.show = function () {
        var maxItemsReached = _this3.tagInput.items.length === _this3.tagInput.maxItems;

        var value = _this3.getFormValue();

        var hasMinimumText = value.trim().length >= _this3.minimumTextLength;

        var position = _this3.calculatePosition();

        var items = _this3.getMatchingItems(value);

        var hasItems = items.length > 0;
        var isHidden = _this3.isVisible === false;
        var showDropdownIfEmpty = _this3.showDropdownIfEmpty && hasItems && !value;
        var isDisabled = _this3.tagInput.disable;
        var shouldShow = isHidden && (hasItems && hasMinimumText || showDropdownIfEmpty);
        var shouldHide = _this3.isVisible && !hasItems;

        if (_this3.autocompleteObservable && hasMinimumText) {
          return _this3.getItemsFromObservable(value);
        }

        if (!_this3.showDropdownIfEmpty && !value || maxItemsReached || isDisabled) {
          return _this3.dropdown.hide();
        }

        _this3.setItems(items);

        if (shouldShow) {
          _this3.dropdown.show(position);
        } else if (shouldHide) {
          _this3.hide();
        }
      };
      /**
       * @name requestAdding
       * @param item {Ng2MenuItem}
       */


      this.requestAdding = function (item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/C_anewsuaobra_frontend_v3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee() {
          var tag;
          return C_anewsuaobra_frontend_v3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  tag = this.createTagModel(item);
                  _context.next = 3;
                  return this.tagInput.onAddingRequested(true, tag).catch(function () {});

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
      };
      /**
       * @name resetItems
       */


      this.resetItems = function () {
        _this3.items = [];
      };
      /**
       * @name getItemsFromObservable
       * @param text
       */


      this.getItemsFromObservable = function (text) {
        _this3.setLoadingState(true);

        var subscribeFn = function subscribeFn(data) {
          // hide loading animation
          _this3.setLoadingState(false) // add items
          .populateItems(data);

          _this3.setItems(_this3.getMatchingItems(text));

          if (_this3.items.length) {
            _this3.dropdown.show(_this3.calculatePosition());
          } else {
            _this3.dropdown.hide();
          }
        };

        _this3.autocompleteObservable(text).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.first)()).subscribe(subscribeFn, function () {
          return _this3.setLoadingState(false);
        });
      };
    }
    /**
     * @name autocompleteItems
     * @param items
     */


    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(TagInputDropdown, [{
      key: "autocompleteItems",
      get:
      /**
       * @name autocompleteItems
       * @desc array of items that will populate the autocomplete
       */
      function get() {
        var _this4 = this;

        var items = this._autocompleteItems;

        if (!items) {
          return [];
        }

        return items.map(function (item) {
          var _ref2;

          return typeof item === 'string' ? (_ref2 = {}, (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(_ref2, _this4.displayBy, item), (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(_ref2, _this4.identifyBy, item), _ref2) : item;
        });
      }
      /**
       * @name ngAfterviewInit
       */
      ,
      set: function set(items) {
        this._autocompleteItems = items;
      }
    }, {
      key: "ngAfterViewInit",
      value: function ngAfterViewInit() {
        var _this5 = this;

        this.onItemClicked().subscribe(function (item) {
          _this5.requestAdding(item);
        }); // reset itemsMatching array when the dropdown is hidden

        this.onHide().subscribe(this.resetItems);
        var DEBOUNCE_TIME = 200;
        var KEEP_OPEN = this.keepOpen;
        this.tagInput.onTextChange.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.debounceTime)(DEBOUNCE_TIME), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(function (value) {
          if (KEEP_OPEN === false) {
            return value.length > 0;
          }

          return true;
        })).subscribe(this.show);
      }
      /**
       * @name updatePosition
       */

    }, {
      key: "updatePosition",
      value: function updatePosition() {
        var position = this.tagInput.inputForm.getElementPosition();
        this.dropdown.menu.updatePosition(position, this.dynamicUpdate);
      }
      /**
       * @name isVisible
       */

    }, {
      key: "isVisible",
      get: function get() {
        return this.dropdown.menu.dropdownState.menuState.isVisible;
      }
      /**
       * @name onHide
       */

    }, {
      key: "onHide",
      value: function onHide() {
        return this.dropdown.onHide;
      }
      /**
       * @name onItemClicked
       */

    }, {
      key: "onItemClicked",
      value: function onItemClicked() {
        return this.dropdown.onItemClicked;
      }
      /**
       * @name selectedItem
       */

    }, {
      key: "selectedItem",
      get: function get() {
        return this.dropdown.menu.dropdownState.dropdownState.selectedItem;
      }
      /**
       * @name state
       */

    }, {
      key: "state",
      get: function get() {
        return this.dropdown.menu.dropdownState;
      }
      /**
       * @name hide
       */

    }, {
      key: "hide",
      value: function hide() {
        this.resetItems();
        this.dropdown.hide();
      }
      /**
       * @name scrollListener
       */

    }, {
      key: "scrollListener",
      value: function scrollListener() {
        if (!this.isVisible || !this.dynamicUpdate) {
          return;
        }

        this.updatePosition();
      }
      /**
       * @name onWindowBlur
       */

    }, {
      key: "onWindowBlur",
      value: function onWindowBlur() {
        this.dropdown.hide();
      }
      /**
       * @name getFormValue
       */

    }, {
      key: "getFormValue",
      value: function getFormValue() {
        var formValue = this.tagInput.formValue;
        return formValue ? formValue.toString().trim() : '';
      }
      /**
       * @name calculatePosition
       */

    }, {
      key: "calculatePosition",
      value: function calculatePosition() {
        return this.tagInput.inputForm.getElementPosition();
      }
      /**
       * @name createTagModel
       * @param item
       */

    }, {
      key: "createTagModel",
      value: function createTagModel(item) {
        var _Object$assign2;

        var display = typeof item.value === 'string' ? item.value : item.value[this.displayBy];
        var value = typeof item.value === 'string' ? item.value : item.value[this.identifyBy];
        return Object.assign(Object.assign({}, item.value), (_Object$assign2 = {}, (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(_Object$assign2, this.tagInput.displayBy, display), (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(_Object$assign2, this.tagInput.identifyBy, value), _Object$assign2));
      }
      /**
       *
       * @param value {string}
       */

    }, {
      key: "getMatchingItems",
      value: function getMatchingItems(value) {
        var _this6 = this;

        if (!value && !this.showDropdownIfEmpty) {
          return [];
        }

        var dupesAllowed = this.tagInput.allowDupes;
        return this.autocompleteItems.filter(function (item) {
          var hasValue = dupesAllowed ? false : _this6.tagInput.tags.some(function (tag) {
            var identifyBy = _this6.tagInput.identifyBy;
            var model = typeof tag.model === 'string' ? tag.model : tag.model[identifyBy];
            return model === item[_this6.identifyBy];
          });
          return _this6.matchingFn(value, item) && hasValue === false;
        });
      }
      /**
       * @name setItems
       */

    }, {
      key: "setItems",
      value: function setItems(items) {
        this.items = items.slice(0, this.limitItemsTo || items.length);
      }
      /**
       * @name populateItems
       * @param data
       */

    }, {
      key: "populateItems",
      value: function populateItems(data) {
        var _this7 = this;

        this.autocompleteItems = data.map(function (item) {
          var _ref3;

          return typeof item === 'string' ? (_ref3 = {}, (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(_ref3, _this7.displayBy, item), (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(_ref3, _this7.identifyBy, item), _ref3) : item;
        });
        return this;
      }
      /**
       * @name setLoadingState
       * @param state
       */

    }, {
      key: "setLoadingState",
      value: function setLoadingState(state) {
        this.tagInput.isLoading = state;
        return this;
      }
    }]);

    return TagInputDropdown;
  }();

  TagInputDropdown.ɵfac = function TagInputDropdown_Factory(t) {
    return new (t || TagInputDropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injector));
  };

  TagInputDropdown.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: TagInputDropdown,
    selectors: [["tag-input-dropdown"]],
    contentQueries: function TagInputDropdown_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_8__.TemplateRef, 4);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    viewQuery: function TagInputDropdown_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_17__.Ng2Dropdown, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.dropdown = _t.first);
      }
    },
    hostBindings: function TagInputDropdown_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("scroll", function TagInputDropdown_scroll_HostBindingHandler() {
          return ctx.scrollListener();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"])("blur", function TagInputDropdown_blur_HostBindingHandler() {
          return ctx.onWindowBlur();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
      }
    },
    inputs: {
      offset: "offset",
      focusFirstElement: "focusFirstElement",
      showDropdownIfEmpty: "showDropdownIfEmpty",
      minimumTextLength: "minimumTextLength",
      limitItemsTo: "limitItemsTo",
      displayBy: "displayBy",
      identifyBy: "identifyBy",
      matchingFn: "matchingFn",
      appendToBody: "appendToBody",
      keepOpen: "keepOpen",
      dynamicUpdate: "dynamicUpdate",
      zIndex: "zIndex",
      autocompleteItems: "autocompleteItems",
      autocompleteObservable: "autocompleteObservable"
    },
    decls: 3,
    vars: 6,
    consts: [[3, "dynamicUpdate"], [3, "focusFirstElement", "zIndex", "appendToBody", "offset"], [3, "value", "ngSwitch", 4, "ngFor", "ngForOf"], [3, "value", "ngSwitch"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "innerHTML"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function TagInputDropdown_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ng2-dropdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ng2-dropdown-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, TagInputDropdown_ng2_menu_item_2_Template, 3, 3, "ng2-menu-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dynamicUpdate", ctx.dynamicUpdate);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("focusFirstElement", ctx.focusFirstElement)("zIndex", ctx.zIndex)("appendToBody", ctx.appendToBody)("offset", ctx.offset);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.items);
      }
    },
    directives: [ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_17__.Ng2Dropdown, ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_17__.Ng2DropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_17__.Ng2MenuItem, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet],
    pipes: [HighlightPipe],
    encapsulation: 2
  });
  return TagInputDropdown;
}(); // angular universal hacks

/* tslint:disable-next-line */


var DragEvent = typeof window !== 'undefined' && window.DragEvent;
var CUSTOM_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.forwardRef)(function () {
    return TagInputComponent;
  }),
  multi: true
};

var TagInputComponent = /*@__PURE__*/function () {
  var TagInputComponent = /*#__PURE__*/function (_TagInputAccessor) {
    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(TagInputComponent, _TagInputAccessor);

    var _super = (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.default)(TagInputComponent);

    function TagInputComponent(renderer, dragProvider) {
      var _this8$listeners;

      var _this8;

      (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, TagInputComponent);

      _this8 = _super.call(this);
      _this8.renderer = renderer;
      _this8.dragProvider = dragProvider;
      /**
       * @name separatorKeys
       * @desc keyboard keys with which a user can separate items
       */

      _this8.separatorKeys = defaults.tagInput.separatorKeys;
      /**
       * @name separatorKeyCodes
       * @desc keyboard key codes with which a user can separate items
       */

      _this8.separatorKeyCodes = defaults.tagInput.separatorKeyCodes;
      /**
       * @name placeholder
       * @desc the placeholder of the input text
       */

      _this8.placeholder = defaults.tagInput.placeholder;
      /**
       * @name secondaryPlaceholder
       * @desc placeholder to appear when the input is empty
       */

      _this8.secondaryPlaceholder = defaults.tagInput.secondaryPlaceholder;
      /**
       * @name maxItems
       * @desc maximum number of items that can be added
       */

      _this8.maxItems = defaults.tagInput.maxItems;
      /**
       * @name validators
       * @desc array of Validators that are used to validate the tag before it gets appended to the list
       */

      _this8.validators = defaults.tagInput.validators;
      /**
       * @name asyncValidators
       * @desc array of AsyncValidator that are used to validate the tag before it gets appended to the list
       */

      _this8.asyncValidators = defaults.tagInput.asyncValidators;
      /**
      * - if set to true, it will only possible to add items from the autocomplete
      * @name onlyFromAutocomplete
      */

      _this8.onlyFromAutocomplete = defaults.tagInput.onlyFromAutocomplete;
      /**
       * @name errorMessages
       */

      _this8.errorMessages = defaults.tagInput.errorMessages;
      /**
       * @name theme
       */

      _this8.theme = defaults.tagInput.theme;
      /**
       * @name onTextChangeDebounce
       */

      _this8.onTextChangeDebounce = defaults.tagInput.onTextChangeDebounce;
      /**
       * - custom id assigned to the input
       * @name id
       */

      _this8.inputId = defaults.tagInput.inputId;
      /**
       * - custom class assigned to the input
       */

      _this8.inputClass = defaults.tagInput.inputClass;
      /**
       * - option to clear text input when the form is blurred
       * @name clearOnBlur
       */

      _this8.clearOnBlur = defaults.tagInput.clearOnBlur;
      /**
       * - hideForm
       * @name clearOnBlur
       */

      _this8.hideForm = defaults.tagInput.hideForm;
      /**
       * @name addOnBlur
       */

      _this8.addOnBlur = defaults.tagInput.addOnBlur;
      /**
       * @name addOnPaste
       */

      _this8.addOnPaste = defaults.tagInput.addOnPaste;
      /**
       * - pattern used with the native method split() to separate patterns in the string pasted
       * @name pasteSplitPattern
       */

      _this8.pasteSplitPattern = defaults.tagInput.pasteSplitPattern;
      /**
       * @name blinkIfDupe
       */

      _this8.blinkIfDupe = defaults.tagInput.blinkIfDupe;
      /**
       * @name removable
       */

      _this8.removable = defaults.tagInput.removable;
      /**
       * @name editable
       */

      _this8.editable = defaults.tagInput.editable;
      /**
       * @name allowDupes
       */

      _this8.allowDupes = defaults.tagInput.allowDupes;
      /**
       * @description if set to true, the newly added tags will be added as strings, and not objects
       * @name modelAsStrings
       */

      _this8.modelAsStrings = defaults.tagInput.modelAsStrings;
      /**
       * @name trimTags
       */

      _this8.trimTags = defaults.tagInput.trimTags;
      /**
       * @name ripple
       */

      _this8.ripple = defaults.tagInput.ripple;
      /**
       * @name tabindex
       * @desc pass through the specified tabindex to the input
       */

      _this8.tabindex = defaults.tagInput.tabIndex;
      /**
       * @name disable
       */

      _this8.disable = defaults.tagInput.disable;
      /**
       * @name dragZone
       */

      _this8.dragZone = defaults.tagInput.dragZone;
      /**
       * @name onRemoving
       */

      _this8.onRemoving = defaults.tagInput.onRemoving;
      /**
       * @name onAdding
       */

      _this8.onAdding = defaults.tagInput.onAdding;
      /**
       * @name animationDuration
       */

      _this8.animationDuration = defaults.tagInput.animationDuration;
      /**
       * @name onAdd
       * @desc event emitted when adding a new item
       */

      _this8.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * @name onRemove
       * @desc event emitted when removing an existing item
       */

      _this8.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * @name onSelect
       * @desc event emitted when selecting an item
       */

      _this8.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * @name onFocus
       * @desc event emitted when the input is focused
       */

      _this8.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * @name onFocus
       * @desc event emitted when the input is blurred
       */

      _this8.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * @name onTextChange
       * @desc event emitted when the input value changes
       */

      _this8.onTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * - output triggered when text is pasted in the form
       * @name onPaste
       */

      _this8.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * - output triggered when tag entered is not valid
       * @name onValidationError
       */

      _this8.onValidationError = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * - output triggered when tag is edited
       * @name onTagEdited
       */

      _this8.onTagEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * @name isLoading
       */

      _this8.isLoading = false;
      /**
       * @name listeners
       * @desc array of events that get fired using @fireEvents
       */

      _this8.listeners = (_this8$listeners = {}, (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(_this8$listeners, KEYDOWN, []), (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(_this8$listeners, KEYUP, []), _this8$listeners);
      /**
       * @description emitter for the 2-way data binding inputText value
       * @name inputTextChange
       */

      _this8.inputTextChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /**
       * @description private variable to bind get/set
       * @name inputTextValue
       */

      _this8.inputTextValue = '';
      _this8.errors = [];
      /**
       * @name appendTag
       * @param tag {TagModel}
       */

      _this8.appendTag = function (tag) {
        var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this8.items.length;
        var items = _this8.items;
        var model = _this8.modelAsStrings ? tag[_this8.identifyBy] : tag;
        _this8.items = [].concat((0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(items.slice(0, index)), [model], (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(items.slice(index, items.length)));
      };
      /**
       * @name createTag
       * @param model
       */


      _this8.createTag = function (model) {
        var _Object$assign3;

        var trim = function trim(val, key) {
          return typeof val === 'string' ? val.trim() : val[key];
        };

        return Object.assign(Object.assign({}, typeof model !== 'string' ? model : {}), (_Object$assign3 = {}, (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(_Object$assign3, _this8.displayBy, _this8.trimTags ? trim(model, _this8.displayBy) : model), (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__.default)(_Object$assign3, _this8.identifyBy, _this8.trimTags ? trim(model, _this8.identifyBy) : model), _Object$assign3));
      };
      /**
       *
       * @param tag
       * @param isFromAutocomplete
       */


      _this8.isTagValid = function (tag) {
        var fromAutocomplete = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var selectedItem = _this8.dropdown ? _this8.dropdown.selectedItem : undefined;

        var value = _this8.getItemDisplay(tag).trim();

        if (selectedItem && !fromAutocomplete || !value) {
          return false;
        }

        var dupe = _this8.findDupe(tag, fromAutocomplete); // if so, give a visual cue and return false


        if (!_this8.allowDupes && dupe && _this8.blinkIfDupe) {
          var model = _this8.tags.find(function (item) {
            return _this8.getItemValue(item.model) === _this8.getItemValue(dupe);
          });

          if (model) {
            model.blink();
          }
        }

        var isFromAutocomplete = fromAutocomplete && _this8.onlyFromAutocomplete;
        var assertions = [// 1. there must be no dupe OR dupes are allowed
        !dupe || _this8.allowDupes, // 2. check max items has not been reached
        !_this8.maxItemsReached, // 3. check item comes from autocomplete or onlyFromAutocomplete is false
        isFromAutocomplete || !_this8.onlyFromAutocomplete];
        return assertions.filter(Boolean).length === assertions.length;
      };
      /**
       * @name onPasteCallback
       * @param data
       */


      _this8.onPasteCallback = function (data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)((0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__.default)(_this8), void 0, void 0, /*#__PURE__*/C_anewsuaobra_frontend_v3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee2() {
          var _this9 = this;

          var getText, text, requests, resetInput;
          return C_anewsuaobra_frontend_v3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  getText = function getText() {
                    var isIE = Boolean(window.clipboardData);
                    var clipboardData = isIE ? window.clipboardData : data.clipboardData;
                    var type = isIE ? 'Text' : 'text/plain';
                    return clipboardData === null ? '' : clipboardData.getData(type) || '';
                  };

                  text = getText();
                  requests = text.split(this.pasteSplitPattern).map(function (item) {
                    var tag = _this9.createTag(item);

                    _this9.setInputValue(tag[_this9.displayBy]);

                    return _this9.onAddingRequested(false, tag);
                  });

                  resetInput = function resetInput() {
                    return setTimeout(function () {
                      return _this9.setInputValue('');
                    }, 50);
                  };

                  Promise.all(requests).then(function () {
                    _this9.onPaste.emit(text);

                    resetInput();
                  }).catch(resetInput);

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));
      };

      return _this8;
    }
    /**
     * @name inputText
     */


    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(TagInputComponent, [{
      key: "inputText",
      get: function get() {
        return this.inputTextValue;
      }
      /**
       * @name inputText
       * @param text
       */
      ,
      set: function set(text) {
        this.inputTextValue = text;
        this.inputTextChange.emit(text);
      }
      /**
       * @desc removes the tab index if it is set - it will be passed through to the input
       * @name tabindexAttr
       */

    }, {
      key: "tabindexAttr",
      get: function get() {
        return this.tabindex !== '' ? '-1' : '';
      }
      /**
       * @name ngAfterViewInit
       */

    }, {
      key: "ngAfterViewInit",
      value: function ngAfterViewInit() {
        var _this10 = this;

        // set up listeners
        this.setUpKeypressListeners();
        this.setupSeparatorKeysListener();
        this.setUpInputKeydownListeners();

        if (this.onTextChange.observers.length) {
          this.setUpTextChangeSubscriber();
        } // if clear on blur is set to true, subscribe to the event and clear the text's form


        if (this.clearOnBlur || this.addOnBlur) {
          this.setUpOnBlurSubscriber();
        } // if addOnPaste is set to true, register the handler and add items


        if (this.addOnPaste) {
          this.setUpOnPasteListener();
        }

        var statusChanges$ = this.inputForm.form.statusChanges;
        statusChanges$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(function (status) {
          return status !== 'PENDING';
        })).subscribe(function () {
          _this10.errors = _this10.inputForm.getErrorMessages(_this10.errorMessages);
        });
        this.isProgressBarVisible$ = statusChanges$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.map)(function (status) {
          return status === 'PENDING' || _this10.isLoading;
        })); // if hideForm is set to true, remove the input

        if (this.hideForm) {
          this.inputForm.destroy();
        }
      }
      /**
       * @name ngOnInit
       */

    }, {
      key: "ngOnInit",
      value: function ngOnInit() {
        // if the number of items specified in the model is > of the value of maxItems
        // degrade gracefully and let the max number of items to be the number of items in the model
        // though, warn the user.
        var hasReachedMaxItems = this.maxItems !== undefined && this.items && this.items.length > this.maxItems;

        if (hasReachedMaxItems) {
          this.maxItems = this.items.length;
          console.warn(MAX_ITEMS_WARNING);
        } // Setting editable to false to fix problem with tags in IE still being editable when
        // onlyFromAutocomplete is true


        this.editable = this.onlyFromAutocomplete ? false : this.editable;
        this.setAnimationMetadata();
      }
      /**
       * @name onRemoveRequested
       * @param tag
       * @param index
       */

    }, {
      key: "onRemoveRequested",
      value: function onRemoveRequested(tag, index) {
        var _this11 = this;

        return new Promise(function (resolve) {
          var subscribeFn = function subscribeFn(model) {
            _this11.removeItem(model, index);

            resolve(tag);
          };

          _this11.onRemoving ? _this11.onRemoving(tag).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.first)()).subscribe(subscribeFn) : subscribeFn(tag);
        });
      }
      /**
       * @name onAddingRequested
       * @param fromAutocomplete {boolean}
       * @param tag {TagModel}
       * @param index? {number}
       * @param giveupFocus? {boolean}
       */

    }, {
      key: "onAddingRequested",
      value: function onAddingRequested(fromAutocomplete, tag, index, giveupFocus) {
        var _this12 = this;

        return new Promise(function (resolve, reject) {
          var subscribeFn = function subscribeFn(model) {
            return _this12.addItem(fromAutocomplete, model, index, giveupFocus).then(resolve).catch(reject);
          };

          return _this12.onAdding ? _this12.onAdding(tag).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.first)()).subscribe(subscribeFn, reject) : subscribeFn(tag);
        });
      }
      /**
       * @name selectItem
       * @desc selects item passed as parameter as the selected tag
       * @param item
       * @param emit
       */

    }, {
      key: "selectItem",
      value: function selectItem(item) {
        var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var isReadonly = item && typeof item !== 'string' && item.readonly;

        if (isReadonly || this.selectedTag === item) {
          return;
        }

        this.selectedTag = item;

        if (emit) {
          this.onSelect.emit(item);
        }
      }
      /**
       * @name fireEvents
       * @desc goes through the list of the events for a given eventName, and fires each of them
       * @param eventName
       * @param $event
       */

    }, {
      key: "fireEvents",
      value: function fireEvents(eventName, $event) {
        var _this13 = this;

        this.listeners[eventName].forEach(function (listener) {
          return listener.call(_this13, $event);
        });
      }
      /**
       * @name handleKeydown
       * @desc handles action when the user hits a keyboard key
       * @param data
       */

    }, {
      key: "handleKeydown",
      value: function handleKeydown(data) {
        var event = data.event;
        var key = event.keyCode || event.which;
        var shiftKey = event.shiftKey || false;

        switch (KEY_PRESS_ACTIONS[key]) {
          case ACTIONS_KEYS.DELETE:
            if (this.selectedTag && this.removable) {
              var index = this.items.indexOf(this.selectedTag);
              this.onRemoveRequested(this.selectedTag, index);
            }

            break;

          case ACTIONS_KEYS.SWITCH_PREV:
            this.moveToTag(data.model, PREV);
            break;

          case ACTIONS_KEYS.SWITCH_NEXT:
            this.moveToTag(data.model, NEXT);
            break;

          case ACTIONS_KEYS.TAB:
            if (shiftKey) {
              if (this.isFirstTag(data.model)) {
                return;
              }

              this.moveToTag(data.model, PREV);
            } else {
              if (this.isLastTag(data.model) && (this.disable || this.maxItemsReached)) {
                return;
              }

              this.moveToTag(data.model, NEXT);
            }

            break;

          default:
            return;
        } // prevent default behaviour


        event.preventDefault();
      }
    }, {
      key: "onFormSubmit",
      value: function onFormSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_anewsuaobra_frontend_v3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee3() {
          return C_anewsuaobra_frontend_v3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return this.onAddingRequested(false, this.formValue);

                case 3:
                  _context3.next = 8;
                  break;

                case 5:
                  _context3.prev = 5;
                  _context3.t0 = _context3["catch"](0);
                  return _context3.abrupt("return");

                case 8:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this, [[0, 5]]);
        }));
      }
      /**
       * @name setInputValue
       * @param value
       */

    }, {
      key: "setInputValue",
      value: function setInputValue(value) {
        var emitEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var control = this.getControl(); // update form value with the transformed item

        control.setValue(value, {
          emitEvent: emitEvent
        });
      }
      /**
       * @name getControl
       */

    }, {
      key: "getControl",
      value: function getControl() {
        return this.inputForm.value;
      }
      /**
       * @name focus
       * @param applyFocus
       * @param displayAutocomplete
       */

    }, {
      key: "focus",
      value: function focus() {
        var applyFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var displayAutocomplete = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (this.dragProvider.getState('dragging')) {
          return;
        }

        this.selectItem(undefined, false);

        if (applyFocus) {
          this.inputForm.focus();
          this.onFocus.emit(this.formValue);
        }
      }
      /**
       * @name blur
       */

    }, {
      key: "blur",
      value: function blur() {
        this.onTouched();
        this.onBlur.emit(this.formValue);
      }
      /**
       * @name hasErrors
       */

    }, {
      key: "hasErrors",
      value: function hasErrors() {
        return !!this.inputForm && this.inputForm.hasErrors();
      }
      /**
       * @name isInputFocused
       */

    }, {
      key: "isInputFocused",
      value: function isInputFocused() {
        return !!this.inputForm && this.inputForm.isInputFocused();
      }
      /**
       * - this is the one way I found to tell if the template has been passed and it is not
       * the template for the menu item
       * @name hasCustomTemplate
       */

    }, {
      key: "hasCustomTemplate",
      value: function hasCustomTemplate() {
        var template = this.templates ? this.templates.first : undefined;
        var menuTemplate = this.dropdown && this.dropdown.templates ? this.dropdown.templates.first : undefined;
        return Boolean(template && template !== menuTemplate);
      }
      /**
       * @name maxItemsReached
       */

    }, {
      key: "maxItemsReached",
      get: function get() {
        return this.maxItems !== undefined && this.items.length >= this.maxItems;
      }
      /**
       * @name formValue
       */

    }, {
      key: "formValue",
      get: function get() {
        var form = this.inputForm.value;
        return form ? form.value : '';
      }
      /**3
       * @name onDragStarted
       * @param event
       * @param index
       */

    }, {
      key: "onDragStarted",
      value: function onDragStarted(event, tag, index) {
        event.stopPropagation();
        var item = {
          zone: this.dragZone,
          tag: tag,
          index: index
        };
        this.dragProvider.setSender(this);
        this.dragProvider.setDraggedItem(event, item);
        this.dragProvider.setState({
          dragging: true,
          index: index
        });
      }
      /**
       * @name onDragOver
       * @param event
       */

    }, {
      key: "onDragOver",
      value: function onDragOver(event, index) {
        this.dragProvider.setState({
          dropping: true
        });
        this.dragProvider.setReceiver(this);
        event.preventDefault();
      }
      /**
       * @name onTagDropped
       * @param event
       * @param index
       */

    }, {
      key: "onTagDropped",
      value: function onTagDropped(event, index) {
        var item = this.dragProvider.getDraggedItem(event);

        if (!item || item.zone !== this.dragZone) {
          return;
        }

        this.dragProvider.onTagDropped(item.tag, item.index, index);
        event.preventDefault();
        event.stopPropagation();
      }
      /**
       * @name isDropping
       */

    }, {
      key: "isDropping",
      value: function isDropping() {
        var isReceiver = this.dragProvider.receiver === this;
        var isDropping = this.dragProvider.getState('dropping');
        return Boolean(isReceiver && isDropping);
      }
      /**
       * @name onTagBlurred
       * @param changedElement {TagModel}
       * @param index {number}
       */

    }, {
      key: "onTagBlurred",
      value: function onTagBlurred(changedElement, index) {
        this.items[index] = changedElement;
        this.blur();
      }
      /**
       * @name trackBy
       * @param items
       */

    }, {
      key: "trackBy",
      value: function trackBy(index, item) {
        return item[this.identifyBy];
      }
      /**
       * @name updateEditedTag
       * @param tag
       */

    }, {
      key: "updateEditedTag",
      value: function updateEditedTag(_ref4) {
        var tag = _ref4.tag,
            index = _ref4.index;
        this.onTagEdited.emit(tag);
      }
      /**
       * @name moveToTag
       * @param item
       * @param direction
       */

    }, {
      key: "moveToTag",
      value: function moveToTag(item, direction) {
        var isLast = this.isLastTag(item);
        var isFirst = this.isFirstTag(item);
        var stopSwitch = direction === NEXT && isLast || direction === PREV && isFirst;

        if (stopSwitch) {
          this.focus(true);
          return;
        }

        var offset = direction === NEXT ? 1 : -1;
        var index = this.getTagIndex(item) + offset;
        var tag = this.getTagAtIndex(index);
        return tag.select.call(tag);
      }
      /**
       * @name isFirstTag
       * @param item {TagModel}
       */

    }, {
      key: "isFirstTag",
      value: function isFirstTag(item) {
        return this.tags.first.model === item;
      }
      /**
       * @name isLastTag
       * @param item {TagModel}
       */

    }, {
      key: "isLastTag",
      value: function isLastTag(item) {
        return this.tags.last.model === item;
      }
      /**
       * @name getTagIndex
       * @param item
       */

    }, {
      key: "getTagIndex",
      value: function getTagIndex(item) {
        var tags = this.tags.toArray();
        return tags.findIndex(function (tag) {
          return tag.model === item;
        });
      }
      /**
       * @name getTagAtIndex
       * @param index
       */

    }, {
      key: "getTagAtIndex",
      value: function getTagAtIndex(index) {
        var tags = this.tags.toArray();
        return tags[index];
      }
      /**
       * @name removeItem
       * @desc removes an item from the array of the model
       * @param tag {TagModel}
       * @param index {number}
       */

    }, {
      key: "removeItem",
      value: function removeItem(tag, index) {
        this.items = this.getItemsWithout(index); // if the removed tag was selected, set it as undefined

        if (this.selectedTag === tag) {
          this.selectItem(undefined, false);
        } // focus input


        this.focus(true, false); // emit remove event

        this.onRemove.emit(tag);
      }
      /**
       * @name addItem
       * @desc adds the current text model to the items array
       * @param fromAutocomplete {boolean}
       * @param item {TagModel}
       * @param index? {number}
       * @param giveupFocus? {boolean}
       */

    }, {
      key: "addItem",
      value: function addItem() {
        var _this14 = this;

        var fromAutocomplete = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var item = arguments.length > 1 ? arguments[1] : undefined;
        var index = arguments.length > 2 ? arguments[2] : undefined;
        var giveupFocus = arguments.length > 3 ? arguments[3] : undefined;
        var display = this.getItemDisplay(item);
        var tag = this.createTag(item);

        if (fromAutocomplete) {
          this.setInputValue(this.getItemValue(item, true));
        }

        return new Promise(function (resolve, reject) {
          /**
           * @name reset
           */
          var reset = function reset() {
            // reset control and focus input
            _this14.setInputValue('');

            if (giveupFocus) {
              _this14.focus(false, false);
            } else {
              // focus input
              _this14.focus(true, false);
            }

            resolve(display);
          };

          var appendItem = function appendItem() {
            _this14.appendTag(tag, index); // emit event


            _this14.onAdd.emit(tag);

            if (!_this14.dropdown) {
              return;
            }

            _this14.dropdown.hide();

            if (_this14.dropdown.showDropdownIfEmpty) {
              _this14.dropdown.show();
            }
          };

          var status = _this14.inputForm.form.status;

          var isTagValid = _this14.isTagValid(tag, fromAutocomplete);

          var onValidationError = function onValidationError() {
            _this14.onValidationError.emit(tag);

            return reject();
          };

          if (status === 'VALID' && isTagValid) {
            appendItem();
            return reset();
          }

          if (status === 'INVALID' || !isTagValid) {
            reset();
            return onValidationError();
          }

          if (status === 'PENDING') {
            var statusUpdate$ = _this14.inputForm.form.statusChanges;
            return statusUpdate$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(function (statusUpdate) {
              return statusUpdate !== 'PENDING';
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.first)()).subscribe(function (statusUpdate) {
              if (statusUpdate === 'VALID' && isTagValid) {
                appendItem();
                return reset();
              } else {
                reset();
                return onValidationError();
              }
            });
          }
        });
      }
      /**
       * @name setupSeparatorKeysListener
       */

    }, {
      key: "setupSeparatorKeysListener",
      value: function setupSeparatorKeysListener() {
        var _this15 = this;

        var useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;

        var listener = function listener($event) {
          var hasKeyCode = _this15.separatorKeyCodes.indexOf($event.keyCode) >= 0;
          var hasKey = _this15.separatorKeys.indexOf($event.key) >= 0; // the keyCode of keydown event is 229 when IME is processing the key event.

          var isIMEProcessing = $event.keyCode === 229;

          if (hasKeyCode || hasKey && !isIMEProcessing) {
            $event.preventDefault();

            _this15.onAddingRequested(false, _this15.formValue).catch(function () {});
          }
        };

        listen.call(this, KEYDOWN, listener, useSeparatorKeys);
      }
      /**
       * @name setUpKeypressListeners
       */

    }, {
      key: "setUpKeypressListeners",
      value: function setUpKeypressListeners() {
        var _this16 = this;

        var listener = function listener($event) {
          var isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;

          if (isCorrectKey && !_this16.formValue && _this16.items.length) {
            _this16.tags.last.select.call(_this16.tags.last);
          }
        }; // setting up the keypress listeners


        listen.call(this, KEYDOWN, listener);
      }
      /**
       * @name setUpKeydownListeners
       */

    }, {
      key: "setUpInputKeydownListeners",
      value: function setUpInputKeydownListeners() {
        var _this17 = this;

        this.inputForm.onKeydown.subscribe(function (event) {
          if (event.key === 'Backspace' && _this17.formValue.trim() === '') {
            event.preventDefault();
          }
        });
      }
      /**
       * @name setUpOnPasteListener
       */

    }, {
      key: "setUpOnPasteListener",
      value: function setUpOnPasteListener() {
        var _this18 = this;

        var input = this.inputForm.input.nativeElement; // attach listener to input

        this.renderer.listen(input, 'paste', function (event) {
          _this18.onPasteCallback(event);

          event.preventDefault();
          return true;
        });
      }
      /**
       * @name setUpTextChangeSubscriber
       */

    }, {
      key: "setUpTextChangeSubscriber",
      value: function setUpTextChangeSubscriber() {
        var _this19 = this;

        this.inputForm.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.debounceTime)(this.onTextChangeDebounce)).subscribe(function (value) {
          _this19.onTextChange.emit(value.item);
        });
      }
      /**
       * @name setUpOnBlurSubscriber
       */

    }, {
      key: "setUpOnBlurSubscriber",
      value: function setUpOnBlurSubscriber() {
        var _this20 = this;

        var filterFn = function filterFn() {
          var isVisible = _this20.dropdown && _this20.dropdown.isVisible;
          return !isVisible && !!_this20.formValue;
        };

        this.inputForm.onBlur.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.debounceTime)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(filterFn)).subscribe(function () {
          var reset = function reset() {
            return _this20.setInputValue('');
          };

          if (_this20.addOnBlur) {
            return _this20.onAddingRequested(false, _this20.formValue, undefined, true).then(reset).catch(reset);
          }

          reset();
        });
      }
      /**
       * @name findDupe
       * @param tag
       * @param isFromAutocomplete
       */

    }, {
      key: "findDupe",
      value: function findDupe(tag, isFromAutocomplete) {
        var _this21 = this;

        var identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
        var id = tag[identifyBy];
        return this.items.find(function (item) {
          return _this21.getItemValue(item) === id;
        });
      }
      /**
       * @name setAnimationMetadata
       */

    }, {
      key: "setAnimationMetadata",
      value: function setAnimationMetadata() {
        this.animationMetadata = {
          value: 'in',
          params: Object.assign({}, this.animationDuration)
        };
      }
    }]);

    return TagInputComponent;
  }(TagInputAccessor);

  TagInputComponent.ɵfac = function TagInputComponent_Factory(t) {
    return new (t || TagInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](DragProvider));
  };

  TagInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: TagInputComponent,
    selectors: [["tag-input"]],
    contentQueries: function TagInputComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, TagInputDropdown, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_8__.TemplateRef, 4);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.dropdown = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.templates = _t);
      }
    },
    viewQuery: function TagInputComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](TagInputForm, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](TagComponent, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.inputForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.tags = _t);
      }
    },
    hostVars: 1,
    hostBindings: function TagInputComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("tabindex", ctx.tabindexAttr);
      }
    },
    inputs: {
      separatorKeys: "separatorKeys",
      separatorKeyCodes: "separatorKeyCodes",
      placeholder: "placeholder",
      secondaryPlaceholder: "secondaryPlaceholder",
      maxItems: "maxItems",
      validators: "validators",
      asyncValidators: "asyncValidators",
      onlyFromAutocomplete: "onlyFromAutocomplete",
      errorMessages: "errorMessages",
      theme: "theme",
      onTextChangeDebounce: "onTextChangeDebounce",
      inputId: "inputId",
      inputClass: "inputClass",
      clearOnBlur: "clearOnBlur",
      hideForm: "hideForm",
      addOnBlur: "addOnBlur",
      addOnPaste: "addOnPaste",
      pasteSplitPattern: "pasteSplitPattern",
      blinkIfDupe: "blinkIfDupe",
      removable: "removable",
      editable: "editable",
      allowDupes: "allowDupes",
      modelAsStrings: "modelAsStrings",
      trimTags: "trimTags",
      ripple: "ripple",
      tabindex: "tabindex",
      disable: "disable",
      dragZone: "dragZone",
      onRemoving: "onRemoving",
      onAdding: "onAdding",
      animationDuration: "animationDuration",
      inputText: "inputText"
    },
    outputs: {
      onAdd: "onAdd",
      onRemove: "onRemove",
      onSelect: "onSelect",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onTextChange: "onTextChange",
      onPaste: "onPaste",
      onValidationError: "onValidationError",
      onTagEdited: "onTagEdited",
      inputTextChange: "inputTextChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([CUSTOM_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c3,
    decls: 8,
    vars: 27,
    consts: [[1, "ng2-tag-input", 3, "ngClass", "click", "drop", "dragenter", "dragover", "dragend"], [1, "ng2-tags-container"], [3, "draggable", "canAddTag", "disabled", "hasRipple", "index", "removable", "editable", "displayBy", "identifyBy", "template", "model", "onSelect", "onRemove", "onKeyDown", "onTagEdited", "onBlur", "dragstart", "drop", "dragenter", "dragover", "dragleave", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "inputText", "disabled", "validators", "asyncValidators", "hidden", "placeholder", "inputClass", "inputId", "tabindex", "onSubmit", "onBlur", "click", "onKeydown", "onKeyup"], ["class", "progress-bar", 4, "ngIf"], ["class", "error-messages", 3, "ngClass", 4, "ngIf"], [3, "draggable", "canAddTag", "disabled", "hasRipple", "index", "removable", "editable", "displayBy", "identifyBy", "template", "model", "onSelect", "onRemove", "onKeyDown", "onTagEdited", "onBlur", "dragstart", "drop", "dragenter", "dragover", "dragleave"], [1, "progress-bar"], [1, "error-messages", 3, "ngClass"], ["class", "error-message", 4, "ngFor", "ngForOf"], [1, "error-message"]],
    template: function TagInputComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TagInputComponent_Template_div_click_0_listener() {
          return ctx.focus(true, false);
        })("drop", function TagInputComponent_Template_div_drop_0_listener($event) {
          return ctx.dragZone ? ctx.onTagDropped($event, undefined) : undefined;
        })("dragenter", function TagInputComponent_Template_div_dragenter_0_listener($event) {
          return ctx.dragZone ? ctx.onDragOver($event) : undefined;
        })("dragover", function TagInputComponent_Template_div_dragover_0_listener($event) {
          return ctx.dragZone ? ctx.onDragOver($event) : undefined;
        })("dragend", function TagInputComponent_Template_div_dragend_0_listener() {
          return ctx.dragZone ? ctx.dragProvider.onDragEnd() : undefined;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, TagInputComponent_tag_2_Template, 1, 14, "tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "tag-input-form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onSubmit", function TagInputComponent_Template_tag_input_form_onSubmit_3_listener() {
          return ctx.onFormSubmit();
        })("onBlur", function TagInputComponent_Template_tag_input_form_onBlur_3_listener() {
          return ctx.blur();
        })("click", function TagInputComponent_Template_tag_input_form_click_3_listener() {
          return ctx.dropdown ? ctx.dropdown.show() : undefined;
        })("onKeydown", function TagInputComponent_Template_tag_input_form_onKeydown_3_listener($event) {
          return ctx.fireEvents("keydown", $event);
        })("onKeyup", function TagInputComponent_Template_tag_input_form_onKeyup_3_listener($event) {
          return ctx.fireEvents("keyup", $event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, TagInputComponent_div_4_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, TagInputComponent_div_6_Template, 2, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](7);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("ng2-tag-input--dropping", ctx.isDropping())("ng2-tag-input--disabled", ctx.disable)("ng2-tag-input--loading", ctx.isLoading)("ng2-tag-input--invalid", ctx.hasErrors())("ng2-tag-input--focused", ctx.isInputFocused());
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx.theme);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("tabindex", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.items)("ngForTrackBy", ctx.trackBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("inputText", ctx.inputText)("disabled", ctx.disable)("validators", ctx.validators)("asyncValidators", ctx.asyncValidators)("hidden", ctx.maxItemsReached)("placeholder", ctx.items.length ? ctx.placeholder : ctx.secondaryPlaceholder)("inputClass", ctx.inputClass)("inputId", ctx.inputId)("tabindex", ctx.tabindex);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 25, ctx.isProgressBarVisible$));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.hasErrors());
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, TagInputForm, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, TagComponent],
    pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
    styles: [".dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.dark.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.error-message[_ngcontent-%COMP%]{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{color:#d9534f}.progress-bar[_ngcontent-%COMP%], .progress-bar[_ngcontent-%COMP%]:before{height:2px;width:100%;margin:0}.progress-bar[_ngcontent-%COMP%]{background-color:#2196f3;display:flex;position:absolute;bottom:0}.progress-bar[_ngcontent-%COMP%]:before{background-color:#82c4f8;content:\"\";-webkit-animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress;animation:2s cubic-bezier(.4,0,.2,1) infinite running-progress}@-webkit-keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}@keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}100%{margin-left:100%;margin-right:0}}tag[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-weight:400;font-size:1em;letter-spacing:.05rem;color:#444;border-radius:16px;transition:.3s;margin:.1rem .3rem .1rem 0;padding:.08rem .45rem;height:32px;line-height:34px;background:#efefef;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus{background:#2196f3;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active{background:#0d8aee;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#e2e2e2;color:initial;box-shadow:0 2px 3px 1px #d4d1d1}tag.readonly[_ngcontent-%COMP%]{cursor:default}tag.readonly[_ngcontent-%COMP%]:focus, tag[_ngcontent-%COMP%]:focus{outline:0}tag.tag--editing[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;cursor:text}.minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;border-radius:0;background:#f9f9f9;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active, .minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus{background:#d0d0d0;color:initial}.minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#ececec}.minimal[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]{cursor:default}.minimal[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, .minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{outline:0}.minimal[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%]{cursor:text}.dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:3px;background:#444;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus{background:#efefef;color:#444}.dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#2b2b2b;color:#f9f9f9}.dark[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]{cursor:default}.dark[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, .dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{outline:0}.dark[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%]{cursor:text}.bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:.25rem;background:#0275d8;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active, .bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus{background:#025aa5}.bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#0267bf;color:#f9f9f9}.bootstrap[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]{cursor:default}.bootstrap[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, .bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{outline:0}.bootstrap[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%]{cursor:text}.bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;font-family:inherit;font-weight:400;font-size:95%;color:#fff;border-radius:.25em;background:#5bc0de;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative;padding:.25em .6em;text-align:center;white-space:nowrap}.bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active, .bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus{background:#28a1c5}.bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#46b8da;color:#fff}.bootstrap3-info[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]{cursor:default}.bootstrap3-info[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, .bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{outline:0}.bootstrap3-info[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%]{cursor:text}[_nghost-%COMP%]{display:block}"],
    data: {
      animation: animations
    }
  });
  return TagInputComponent;
}();

var DeleteIconComponent = /*@__PURE__*/function () {
  var DeleteIconComponent = /*#__PURE__*/(0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(function DeleteIconComponent() {
    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, DeleteIconComponent);
  });

  DeleteIconComponent.ɵfac = function DeleteIconComponent_Factory(t) {
    return new (t || DeleteIconComponent)();
  };

  DeleteIconComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: DeleteIconComponent,
    selectors: [["delete-icon"]],
    decls: 3,
    vars: 0,
    consts: [["height", "16px", "viewBox", "0 0 32 32", "width", "16px"], ["d", "M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z", "fill", "#121313"]],
    template: function DeleteIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
    },
    styles: [".dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;box-shadow:none;outline:0;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px rgba(0,0,0,.4);border:1px solid #ccc}.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:.25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #2196f3}.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.dark.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);border-radius:4px}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px #d9534f;border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.error-message[_ngcontent-%COMP%]{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{color:#d9534f}delete-icon[_nghost-%COMP%]{width:20px;height:16px;transition:.15s;display:inline-block;text-align:right}delete-icon[_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#444}delete-icon[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{vertical-align:bottom;height:34px}delete-icon[_nghost-%COMP%]:hover{transform:scale(1.5) translateY(-3px)}.dark[_nghost-%COMP%], .dark   [_nghost-%COMP%]{text-align:right}.dark[_nghost-%COMP%]   path[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.dark[_nghost-%COMP%]   svg[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   svg[_ngcontent-%COMP%]{vertical-align:bottom;height:34px}.minimal[_nghost-%COMP%], .minimal   [_nghost-%COMP%]{text-align:right}.minimal[_nghost-%COMP%]   path[_ngcontent-%COMP%], .minimal   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#444}.minimal[_nghost-%COMP%]   svg[_ngcontent-%COMP%], .minimal   [_nghost-%COMP%]   svg[_ngcontent-%COMP%]{vertical-align:bottom;height:34px}.bootstrap[_nghost-%COMP%], .bootstrap   [_nghost-%COMP%]{text-align:right}.bootstrap[_nghost-%COMP%]   path[_ngcontent-%COMP%], .bootstrap   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.bootstrap[_nghost-%COMP%]   svg[_ngcontent-%COMP%], .bootstrap   [_nghost-%COMP%]   svg[_ngcontent-%COMP%]{vertical-align:bottom;height:34px}tag:active[_nghost-%COMP%]   path[_ngcontent-%COMP%], tag:active   [_nghost-%COMP%]   path[_ngcontent-%COMP%], tag:focus[_nghost-%COMP%]   path[_ngcontent-%COMP%], tag:focus   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.darktag:active[_nghost-%COMP%]   path[_ngcontent-%COMP%], .darktag:active   [_nghost-%COMP%]   path[_ngcontent-%COMP%], .darktag:focus[_nghost-%COMP%]   path[_ngcontent-%COMP%], .darktag:focus   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#000}.minimaltag:active[_nghost-%COMP%]   path[_ngcontent-%COMP%], .minimaltag:active   [_nghost-%COMP%]   path[_ngcontent-%COMP%], .minimaltag:focus[_nghost-%COMP%]   path[_ngcontent-%COMP%], .minimaltag:focus   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#000}.bootstraptag:active[_nghost-%COMP%]   path[_ngcontent-%COMP%], .bootstraptag:active   [_nghost-%COMP%]   path[_ngcontent-%COMP%], .bootstraptag:focus[_nghost-%COMP%]   path[_ngcontent-%COMP%], .bootstraptag:focus   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.bootstrap3-info[_nghost-%COMP%], .bootstrap3-info   [_nghost-%COMP%]{height:inherit}.bootstrap3-info[_nghost-%COMP%]   path[_ngcontent-%COMP%], .bootstrap3-info   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}"]
  });
  return DeleteIconComponent;
}();

var optionsProvider = new OptionsProvider();

var TagInputModule = /*@__PURE__*/function () {
  var TagInputModule = /*#__PURE__*/function () {
    function TagInputModule() {
      (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__.default)(this, TagInputModule);
    }

    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__.default)(TagInputModule, null, [{
      key: "withDefaults",
      value:
      /**
       * @name withDefaults
       * @param options {Options}
       */
      function withDefaults(options) {
        optionsProvider.setOptions(options);
      }
    }]);

    return TagInputModule;
  }();

  TagInputModule.ɵfac = function TagInputModule_Factory(t) {
    return new (t || TagInputModule)();
  };

  TagInputModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: TagInputModule
  });
  TagInputModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    providers: [DragProvider, {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.COMPOSITION_BUFFER_MODE,
      useValue: false
    }],
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_17__.Ng2DropdownModule]]
  });
  return TagInputModule;
}();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](TagInputModule, {
    declarations: function declarations() {
      return [TagInputComponent, DeleteIconComponent, TagInputForm, TagComponent, HighlightPipe, TagInputDropdown, TagRipple];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, ng2_material_dropdown__WEBPACK_IMPORTED_MODULE_17__.Ng2DropdownModule];
    },
    exports: function exports() {
      return [TagInputComponent, DeleteIconComponent, TagInputForm, TagComponent, HighlightPipe, TagInputDropdown, TagRipple];
    }
  });
})();
/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=ngx-chips.js.map

/***/ }),

/***/ 32637:
/*!**********************************************************!*\
  !*** ./node_modules/nouislider/distribute/nouislider.js ***!
  \**********************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! nouislider - 14.6.2 - 9/16/2020 */
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function () {
  "use strict";

  var VERSION = "14.6.2"; //region Helper Methods

  function isValidFormatter(entry) {
    return typeof entry === "object" && typeof entry.to === "function" && typeof entry.from === "function";
  }

  function removeElement(el) {
    el.parentElement.removeChild(el);
  }

  function isSet(value) {
    return value !== null && value !== undefined;
  } // Bindable version


  function preventDefault(e) {
    e.preventDefault();
  } // Removes duplicates from an array.


  function unique(array) {
    return array.filter(function (a) {
      return !this[a] ? this[a] = true : false;
    }, {});
  } // Round a value to the closest 'to'.


  function closest(value, to) {
    return Math.round(value / to) * to;
  } // Current position of an element relative to the document.


  function offset(elem, orientation) {
    var rect = elem.getBoundingClientRect();
    var doc = elem.ownerDocument;
    var docElem = doc.documentElement;
    var pageOffset = getPageOffset(doc); // getBoundingClientRect contains left scroll in Chrome on Android.
    // I haven't found a feature detection that proves this. Worst case
    // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.

    if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
      pageOffset.x = 0;
    }

    return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
  } // Checks whether a value is numerical.


  function isNumeric(a) {
    return typeof a === "number" && !isNaN(a) && isFinite(a);
  } // Sets a class and removes it after [duration] ms.


  function addClassFor(element, className, duration) {
    if (duration > 0) {
      addClass(element, className);
      setTimeout(function () {
        removeClass(element, className);
      }, duration);
    }
  } // Limits a value to 0 - 100


  function limit(a) {
    return Math.max(Math.min(a, 100), 0);
  } // Wraps a variable as an array, if it isn't one yet.
  // Note that an input array is returned by reference!


  function asArray(a) {
    return Array.isArray(a) ? a : [a];
  } // Counts decimals


  function countDecimals(numStr) {
    numStr = String(numStr);
    var pieces = numStr.split(".");
    return pieces.length > 1 ? pieces[1].length : 0;
  } // http://youmightnotneedjquery.com/#add_class


  function addClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
      el.classList.add(className);
    } else {
      el.className += " " + className;
    }
  } // http://youmightnotneedjquery.com/#remove_class


  function removeClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  } // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/


  function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
  } // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes


  function getPageOffset(doc) {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
    var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
    var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
    return {
      x: x,
      y: y
    };
  } // we provide a function to compute constants instead
  // of accessing window.* as soon as the module needs it
  // so that we do not compute anything if not needed


  function getActions() {
    // Determine the events to bind. IE11 implements pointerEvents without
    // a prefix, which breaks compatibility with the IE10 implementation.
    return window.navigator.pointerEnabled ? {
      start: "pointerdown",
      move: "pointermove",
      end: "pointerup"
    } : window.navigator.msPointerEnabled ? {
      start: "MSPointerDown",
      move: "MSPointerMove",
      end: "MSPointerUp"
    } : {
      start: "mousedown touchstart",
      move: "mousemove touchmove",
      end: "mouseup touchend"
    };
  } // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
  // Issue #785


  function getSupportsPassive() {
    var supportsPassive = false;
    /* eslint-disable */

    try {
      var opts = Object.defineProperty({}, "passive", {
        get: function get() {
          supportsPassive = true;
        }
      });
      window.addEventListener("test", null, opts);
    } catch (e) {}
    /* eslint-enable */


    return supportsPassive;
  }

  function getSupportsTouchActionNone() {
    return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
  } //endregion
  //region Range Calculation
  // Determine the size of a sub-range in relation to a full range.


  function subRangeRatio(pa, pb) {
    return 100 / (pb - pa);
  } // (percentage) How many percent is this value of this range?


  function fromPercentage(range, value, startRange) {
    return value * 100 / (range[startRange + 1] - range[startRange]);
  } // (percentage) Where is this value on this range?


  function toPercentage(range, value) {
    return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
  } // (value) How much is this percentage on this range?


  function isPercentage(range, value) {
    return value * (range[1] - range[0]) / 100 + range[0];
  }

  function getJ(value, arr) {
    var j = 1;

    while (value >= arr[j]) {
      j += 1;
    }

    return j;
  } // (percentage) Input a value, find where, on a scale of 0-100, it applies.


  function toStepping(xVal, xPct, value) {
    if (value >= xVal.slice(-1)[0]) {
      return 100;
    }

    var j = getJ(value, xVal);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
  } // (value) Input a percentage, find where it is on the specified range.


  function fromStepping(xVal, xPct, value) {
    // There is no range group that fits 100
    if (value >= 100) {
      return xVal.slice(-1)[0];
    }

    var j = getJ(value, xPct);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
  } // (percentage) Get the step that applies at a certain value.


  function getStep(xPct, xSteps, snap, value) {
    if (value === 100) {
      return value;
    }

    var j = getJ(value, xPct);
    var a = xPct[j - 1];
    var b = xPct[j]; // If 'snap' is set, steps are used as fixed points on the slider.

    if (snap) {
      // Find the closest position, a or b.
      if (value - a > (b - a) / 2) {
        return b;
      }

      return a;
    }

    if (!xSteps[j - 1]) {
      return value;
    }

    return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
  }

  function handleEntryPoint(index, value, that) {
    var percentage; // Wrap numerical input in an array.

    if (typeof value === "number") {
      value = [value];
    } // Reject any invalid input, by testing whether value is an array.


    if (!Array.isArray(value)) {
      throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
    } // Covert min/max syntax to 0 and 100.


    if (index === "min") {
      percentage = 0;
    } else if (index === "max") {
      percentage = 100;
    } else {
      percentage = parseFloat(index);
    } // Check for correct input.


    if (!isNumeric(percentage) || !isNumeric(value[0])) {
      throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
    } // Store values.


    that.xPct.push(percentage);
    that.xVal.push(value[0]); // NaN will evaluate to false too, but to keep
    // logging clear, set step explicitly. Make sure
    // not to override the 'step' setting with false.

    if (!percentage) {
      if (!isNaN(value[1])) {
        that.xSteps[0] = value[1];
      }
    } else {
      that.xSteps.push(isNaN(value[1]) ? false : value[1]);
    }

    that.xHighestCompleteStep.push(0);
  }

  function handleStepPoint(i, n, that) {
    // Ignore 'false' stepping.
    if (!n) {
      return;
    } // Step over zero-length ranges (#948);


    if (that.xVal[i] === that.xVal[i + 1]) {
      that.xSteps[i] = that.xHighestCompleteStep[i] = that.xVal[i];
      return;
    } // Factor to range ratio


    that.xSteps[i] = fromPercentage([that.xVal[i], that.xVal[i + 1]], n, 0) / subRangeRatio(that.xPct[i], that.xPct[i + 1]);
    var totalSteps = (that.xVal[i + 1] - that.xVal[i]) / that.xNumSteps[i];
    var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
    var step = that.xVal[i] + that.xNumSteps[i] * highestStep;
    that.xHighestCompleteStep[i] = step;
  } //endregion
  //region Spectrum


  function Spectrum(entry, snap, singleStep) {
    this.xPct = [];
    this.xVal = [];
    this.xSteps = [singleStep || false];
    this.xNumSteps = [false];
    this.xHighestCompleteStep = [];
    this.snap = snap;
    var index;
    var ordered = []; // [0, 'min'], [1, '50%'], [2, 'max']
    // Map the object keys to an array.

    for (index in entry) {
      if (entry.hasOwnProperty(index)) {
        ordered.push([entry[index], index]);
      }
    } // Sort all entries by value (numeric sort).


    if (ordered.length && typeof ordered[0][0] === "object") {
      ordered.sort(function (a, b) {
        return a[0][0] - b[0][0];
      });
    } else {
      ordered.sort(function (a, b) {
        return a[0] - b[0];
      });
    } // Convert all entries to subranges.


    for (index = 0; index < ordered.length; index++) {
      handleEntryPoint(ordered[index][1], ordered[index][0], this);
    } // Store the actual step values.
    // xSteps is sorted in the same order as xPct and xVal.


    this.xNumSteps = this.xSteps.slice(0); // Convert all numeric steps to the percentage of the subrange they represent.

    for (index = 0; index < this.xNumSteps.length; index++) {
      handleStepPoint(index, this.xNumSteps[index], this);
    }
  }

  Spectrum.prototype.getDistance = function (value) {
    var index;
    var distances = [];

    for (index = 0; index < this.xNumSteps.length - 1; index++) {
      // last "range" can't contain step size as it is purely an endpoint.
      var step = this.xNumSteps[index];

      if (step && value / step % 1 !== 0) {
        throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' of " + this.xPct[index] + "% range must be divisible by step.");
      } // Calculate percentual distance in current range of limit, margin or padding


      distances[index] = fromPercentage(this.xVal, value, index);
    }

    return distances;
  }; // Calculate the percentual distance over the whole scale of ranges.
  // direction: 0 = backwards / 1 = forwards


  Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
    var xPct_index = 0; // Calculate range where to start calculation

    if (value < this.xPct[this.xPct.length - 1]) {
      while (value > this.xPct[xPct_index + 1]) {
        xPct_index++;
      }
    } else if (value === this.xPct[this.xPct.length - 1]) {
      xPct_index = this.xPct.length - 2;
    } // If looking backwards and the value is exactly at a range separator then look one range further


    if (!direction && value === this.xPct[xPct_index + 1]) {
      xPct_index++;
    }

    var start_factor;
    var rest_factor = 1;
    var rest_rel_distance = distances[xPct_index];
    var range_pct = 0;
    var rel_range_distance = 0;
    var abs_distance_counter = 0;
    var range_counter = 0; // Calculate what part of the start range the value is

    if (direction) {
      start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
    } else {
      start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
    } // Do until the complete distance across ranges is calculated


    while (rest_rel_distance > 0) {
      // Calculate the percentage of total range
      range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter]; // Detect if the margin, padding or limit is larger then the current range and calculate

      if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
        // If larger then take the percentual distance of the whole range
        rel_range_distance = range_pct * start_factor; // Rest factor of relative percentual distance still to be calculated

        rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter]; // Set start factor to 1 as for next range it does not apply.

        start_factor = 1;
      } else {
        // If smaller or equal then take the percentual distance of the calculate percentual part of that range
        rel_range_distance = distances[xPct_index + range_counter] * range_pct / 100 * rest_factor; // No rest left as the rest fits in current range

        rest_factor = 0;
      }

      if (direction) {
        abs_distance_counter = abs_distance_counter - rel_range_distance; // Limit range to first range when distance becomes outside of minimum range

        if (this.xPct.length + range_counter >= 1) {
          range_counter--;
        }
      } else {
        abs_distance_counter = abs_distance_counter + rel_range_distance; // Limit range to last range when distance becomes outside of maximum range

        if (this.xPct.length - range_counter >= 1) {
          range_counter++;
        }
      } // Rest of relative percentual distance still to be calculated


      rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
    }

    return value + abs_distance_counter;
  };

  Spectrum.prototype.toStepping = function (value) {
    value = toStepping(this.xVal, this.xPct, value);
    return value;
  };

  Spectrum.prototype.fromStepping = function (value) {
    return fromStepping(this.xVal, this.xPct, value);
  };

  Spectrum.prototype.getStep = function (value) {
    value = getStep(this.xPct, this.xSteps, this.snap, value);
    return value;
  };

  Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
    var j = getJ(value, this.xPct); // When at the top or stepping down, look at the previous sub-range

    if (value === 100 || isDown && value === this.xPct[j - 1]) {
      j = Math.max(j - 1, 1);
    }

    return (this.xVal[j] - this.xVal[j - 1]) / size;
  };

  Spectrum.prototype.getNearbySteps = function (value) {
    var j = getJ(value, this.xPct);
    return {
      stepBefore: {
        startValue: this.xVal[j - 2],
        step: this.xNumSteps[j - 2],
        highestStep: this.xHighestCompleteStep[j - 2]
      },
      thisStep: {
        startValue: this.xVal[j - 1],
        step: this.xNumSteps[j - 1],
        highestStep: this.xHighestCompleteStep[j - 1]
      },
      stepAfter: {
        startValue: this.xVal[j],
        step: this.xNumSteps[j],
        highestStep: this.xHighestCompleteStep[j]
      }
    };
  };

  Spectrum.prototype.countStepDecimals = function () {
    var stepDecimals = this.xNumSteps.map(countDecimals);
    return Math.max.apply(null, stepDecimals);
  }; // Outside testing


  Spectrum.prototype.convert = function (value) {
    return this.getStep(this.toStepping(value));
  }; //endregion
  //region Options

  /*	Every input option is tested and parsed. This'll prevent
      endless validation in internal methods. These tests are
      structured with an item for every option available. An
      option can be marked as required by setting the 'r' flag.
      The testing function is provided with three arguments:
          - The provided value for the option;
          - A reference to the options object;
          - The name for the option;
       The testing function returns false when an error is detected,
      or true when everything is OK. It can also modify the option
      object, to make sure all values can be correctly looped elsewhere. */
  //region Defaults


  var defaultFormatter = {
    to: function to(value) {
      return value !== undefined && value.toFixed(2);
    },
    from: Number
  };
  var cssClasses = {
    target: "target",
    base: "base",
    origin: "origin",
    handle: "handle",
    handleLower: "handle-lower",
    handleUpper: "handle-upper",
    touchArea: "touch-area",
    horizontal: "horizontal",
    vertical: "vertical",
    background: "background",
    connect: "connect",
    connects: "connects",
    ltr: "ltr",
    rtl: "rtl",
    textDirectionLtr: "txt-dir-ltr",
    textDirectionRtl: "txt-dir-rtl",
    draggable: "draggable",
    drag: "state-drag",
    tap: "state-tap",
    active: "active",
    tooltip: "tooltip",
    pips: "pips",
    pipsHorizontal: "pips-horizontal",
    pipsVertical: "pips-vertical",
    marker: "marker",
    markerHorizontal: "marker-horizontal",
    markerVertical: "marker-vertical",
    markerNormal: "marker-normal",
    markerLarge: "marker-large",
    markerSub: "marker-sub",
    value: "value",
    valueHorizontal: "value-horizontal",
    valueVertical: "value-vertical",
    valueNormal: "value-normal",
    valueLarge: "value-large",
    valueSub: "value-sub"
  }; //endregion

  function validateFormat(entry) {
    // Any object with a to and from method is supported.
    if (isValidFormatter(entry)) {
      return true;
    }

    throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
  }

  function testStep(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
    } // The step option can still be used to set stepping
    // for linear sliders. Overwritten if set in 'range'.


    parsed.singleStep = entry;
  }

  function testKeyboardPageMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'keyboardPageMultiplier' is not numeric.");
    }

    parsed.keyboardPageMultiplier = entry;
  }

  function testKeyboardDefaultStep(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'keyboardDefaultStep' is not numeric.");
    }

    parsed.keyboardDefaultStep = entry;
  }

  function testRange(parsed, entry) {
    // Filter incorrect input.
    if (typeof entry !== "object" || Array.isArray(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
    } // Catch missing start or end.


    if (entry.min === undefined || entry.max === undefined) {
      throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
    } // Catch equal start or end.


    if (entry.min === entry.max) {
      throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
    }

    parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
  }

  function testStart(parsed, entry) {
    entry = asArray(entry); // Validate input. Values aren't tested, as the public .val method
    // will always provide a valid location.

    if (!Array.isArray(entry) || !entry.length) {
      throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
    } // Store the number of handles.


    parsed.handles = entry.length; // When the slider is initialized, the .val method will
    // be called with the start options.

    parsed.start = entry;
  }

  function testSnap(parsed, entry) {
    // Enforce 100% stepping within subranges.
    parsed.snap = entry;

    if (typeof entry !== "boolean") {
      throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
    }
  }

  function testAnimate(parsed, entry) {
    // Enforce 100% stepping within subranges.
    parsed.animate = entry;

    if (typeof entry !== "boolean") {
      throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
    }
  }

  function testAnimationDuration(parsed, entry) {
    parsed.animationDuration = entry;

    if (typeof entry !== "number") {
      throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
    }
  }

  function testConnect(parsed, entry) {
    var connect = [false];
    var i; // Map legacy options

    if (entry === "lower") {
      entry = [true, false];
    } else if (entry === "upper") {
      entry = [false, true];
    } // Handle boolean options


    if (entry === true || entry === false) {
      for (i = 1; i < parsed.handles; i++) {
        connect.push(entry);
      }

      connect.push(false);
    } // Reject invalid input
    else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
      throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
    } else {
      connect = entry;
    }

    parsed.connect = connect;
  }

  function testOrientation(parsed, entry) {
    // Set orientation to an a numerical value for easy
    // array selection.
    switch (entry) {
      case "horizontal":
        parsed.ort = 0;
        break;

      case "vertical":
        parsed.ort = 1;
        break;

      default:
        throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
    }
  }

  function testMargin(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
    } // Issue #582


    if (entry === 0) {
      return;
    }

    parsed.margin = parsed.spectrum.getDistance(entry);
  }

  function testLimit(parsed, entry) {
    if (!isNumeric(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
    }

    parsed.limit = parsed.spectrum.getDistance(entry);

    if (!parsed.limit || parsed.handles < 2) {
      throw new Error("noUiSlider (" + VERSION + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
  }

  function testPadding(parsed, entry) {
    var index;

    if (!isNumeric(entry) && !Array.isArray(entry)) {
      throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
    }

    if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
      throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
    }

    if (entry === 0) {
      return;
    }

    if (!Array.isArray(entry)) {
      entry = [entry, entry];
    } // 'getDistance' returns false for invalid values.


    parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];

    for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
      // last "range" can't contain step size as it is purely an endpoint.
      if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
        throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number(s).");
      }
    }

    var totalPadding = entry[0] + entry[1];
    var firstValue = parsed.spectrum.xVal[0];
    var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];

    if (totalPadding / (lastValue - firstValue) > 1) {
      throw new Error("noUiSlider (" + VERSION + "): 'padding' option must not exceed 100% of the range.");
    }
  }

  function testDirection(parsed, entry) {
    // Set direction as a numerical value for easy parsing.
    // Invert connection for RTL sliders, so that the proper
    // handles get the connect/background classes.
    switch (entry) {
      case "ltr":
        parsed.dir = 0;
        break;

      case "rtl":
        parsed.dir = 1;
        break;

      default:
        throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
    }
  }

  function testBehaviour(parsed, entry) {
    // Make sure the input is a string.
    if (typeof entry !== "string") {
      throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
    } // Check if the string contains any keywords.
    // None are required.


    var tap = entry.indexOf("tap") >= 0;
    var drag = entry.indexOf("drag") >= 0;
    var fixed = entry.indexOf("fixed") >= 0;
    var snap = entry.indexOf("snap") >= 0;
    var hover = entry.indexOf("hover") >= 0;
    var unconstrained = entry.indexOf("unconstrained") >= 0;

    if (fixed) {
      if (parsed.handles !== 2) {
        throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
      } // Use margin to enforce fixed state


      testMargin(parsed, parsed.start[1] - parsed.start[0]);
    }

    if (unconstrained && (parsed.margin || parsed.limit)) {
      throw new Error("noUiSlider (" + VERSION + "): 'unconstrained' behaviour cannot be used with margin or limit");
    }

    parsed.events = {
      tap: tap || snap,
      drag: drag,
      fixed: fixed,
      snap: snap,
      hover: hover,
      unconstrained: unconstrained
    };
  }

  function testTooltips(parsed, entry) {
    if (entry === false) {
      return;
    }

    if (entry === true) {
      parsed.tooltips = [];

      for (var i = 0; i < parsed.handles; i++) {
        parsed.tooltips.push(true);
      }
    } else {
      parsed.tooltips = asArray(entry);

      if (parsed.tooltips.length !== parsed.handles) {
        throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
      }

      parsed.tooltips.forEach(function (formatter) {
        if (typeof formatter !== "boolean" && (typeof formatter !== "object" || typeof formatter.to !== "function")) {
          throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
        }
      });
    }
  }

  function testAriaFormat(parsed, entry) {
    parsed.ariaFormat = entry;
    validateFormat(entry);
  }

  function testFormat(parsed, entry) {
    parsed.format = entry;
    validateFormat(entry);
  }

  function testKeyboardSupport(parsed, entry) {
    parsed.keyboardSupport = entry;

    if (typeof entry !== "boolean") {
      throw new Error("noUiSlider (" + VERSION + "): 'keyboardSupport' option must be a boolean.");
    }
  }

  function testDocumentElement(parsed, entry) {
    // This is an advanced option. Passed values are used without validation.
    parsed.documentElement = entry;
  }

  function testCssPrefix(parsed, entry) {
    if (typeof entry !== "string" && entry !== false) {
      throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
    }

    parsed.cssPrefix = entry;
  }

  function testCssClasses(parsed, entry) {
    if (typeof entry !== "object") {
      throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
    }

    if (typeof parsed.cssPrefix === "string") {
      parsed.cssClasses = {};

      for (var key in entry) {
        if (!entry.hasOwnProperty(key)) {
          continue;
        }

        parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
      }
    } else {
      parsed.cssClasses = entry;
    }
  } // Test all developer settings and parse to assumption-safe values.


  function testOptions(options) {
    // To prove a fix for #537, freeze options here.
    // If the object is modified, an error will be thrown.
    // Object.freeze(options);
    var parsed = {
      margin: 0,
      limit: 0,
      padding: 0,
      animate: true,
      animationDuration: 300,
      ariaFormat: defaultFormatter,
      format: defaultFormatter
    }; // Tests are executed in the order they are presented here.

    var tests = {
      step: {
        r: false,
        t: testStep
      },
      keyboardPageMultiplier: {
        r: false,
        t: testKeyboardPageMultiplier
      },
      keyboardDefaultStep: {
        r: false,
        t: testKeyboardDefaultStep
      },
      start: {
        r: true,
        t: testStart
      },
      connect: {
        r: true,
        t: testConnect
      },
      direction: {
        r: true,
        t: testDirection
      },
      snap: {
        r: false,
        t: testSnap
      },
      animate: {
        r: false,
        t: testAnimate
      },
      animationDuration: {
        r: false,
        t: testAnimationDuration
      },
      range: {
        r: true,
        t: testRange
      },
      orientation: {
        r: false,
        t: testOrientation
      },
      margin: {
        r: false,
        t: testMargin
      },
      limit: {
        r: false,
        t: testLimit
      },
      padding: {
        r: false,
        t: testPadding
      },
      behaviour: {
        r: true,
        t: testBehaviour
      },
      ariaFormat: {
        r: false,
        t: testAriaFormat
      },
      format: {
        r: false,
        t: testFormat
      },
      tooltips: {
        r: false,
        t: testTooltips
      },
      keyboardSupport: {
        r: true,
        t: testKeyboardSupport
      },
      documentElement: {
        r: false,
        t: testDocumentElement
      },
      cssPrefix: {
        r: true,
        t: testCssPrefix
      },
      cssClasses: {
        r: true,
        t: testCssClasses
      }
    };
    var defaults = {
      connect: false,
      direction: "ltr",
      behaviour: "tap",
      orientation: "horizontal",
      keyboardSupport: true,
      cssPrefix: "noUi-",
      cssClasses: cssClasses,
      keyboardPageMultiplier: 5,
      keyboardDefaultStep: 10
    }; // AriaFormat defaults to regular format, if any.

    if (options.format && !options.ariaFormat) {
      options.ariaFormat = options.format;
    } // Run all options through a testing mechanism to ensure correct
    // input. It should be noted that options might get modified to
    // be handled properly. E.g. wrapping integers in arrays.


    Object.keys(tests).forEach(function (name) {
      // If the option isn't set, but it is required, throw an error.
      if (!isSet(options[name]) && defaults[name] === undefined) {
        if (tests[name].r) {
          throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
        }

        return true;
      }

      tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
    }); // Forward pips options

    parsed.pips = options.pips; // All recent browsers accept unprefixed transform.
    // We need -ms- for IE9 and -webkit- for older Android;
    // Assume use of -webkit- if unprefixed and -ms- are not supported.
    // https://caniuse.com/#feat=transforms2d

    var d = document.createElement("div");
    var msPrefix = d.style.msTransform !== undefined;
    var noPrefix = d.style.transform !== undefined;
    parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform"; // Pips don't move, so we can place them using left/top.

    var styles = [["left", "top"], ["right", "bottom"]];
    parsed.style = styles[parsed.dir][parsed.ort];
    return parsed;
  } //endregion


  function scope(target, options, originalOptions) {
    var actions = getActions();
    var supportsTouchActionNone = getSupportsTouchActionNone();
    var supportsPassive = supportsTouchActionNone && getSupportsPassive(); // All variables local to 'scope' are prefixed with 'scope_'
    // Slider DOM Nodes

    var scope_Target = target;
    var scope_Base;
    var scope_Handles;
    var scope_Connects;
    var scope_Pips;
    var scope_Tooltips; // Slider state values

    var scope_Spectrum = options.spectrum;
    var scope_Values = [];
    var scope_Locations = [];
    var scope_HandleNumbers = [];
    var scope_ActiveHandlesCount = 0;
    var scope_Events = {}; // Exposed API

    var scope_Self; // Document Nodes

    var scope_Document = target.ownerDocument;
    var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
    var scope_Body = scope_Document.body; // Pips constants

    var PIPS_NONE = -1;
    var PIPS_NO_VALUE = 0;
    var PIPS_LARGE_VALUE = 1;
    var PIPS_SMALL_VALUE = 2; // For horizontal sliders in standard ltr documents,
    // make .noUi-origin overflow to the left so the document doesn't scroll.

    var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100; // Creates a node, adds it to target, returns the new node.

    function addNodeTo(addTarget, className) {
      var div = scope_Document.createElement("div");

      if (className) {
        addClass(div, className);
      }

      addTarget.appendChild(div);
      return div;
    } // Append a origin to the base


    function addOrigin(base, handleNumber) {
      var origin = addNodeTo(base, options.cssClasses.origin);
      var handle = addNodeTo(origin, options.cssClasses.handle);
      addNodeTo(handle, options.cssClasses.touchArea);
      handle.setAttribute("data-handle", handleNumber);

      if (options.keyboardSupport) {
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
        // 0 = focusable and reachable
        handle.setAttribute("tabindex", "0");
        handle.addEventListener("keydown", function (event) {
          return eventKeydown(event, handleNumber);
        });
      }

      handle.setAttribute("role", "slider");
      handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");

      if (handleNumber === 0) {
        addClass(handle, options.cssClasses.handleLower);
      } else if (handleNumber === options.handles - 1) {
        addClass(handle, options.cssClasses.handleUpper);
      }

      return origin;
    } // Insert nodes for connect elements


    function addConnect(base, add) {
      if (!add) {
        return false;
      }

      return addNodeTo(base, options.cssClasses.connect);
    } // Add handles to the slider base.


    function addElements(connectOptions, base) {
      var connectBase = addNodeTo(base, options.cssClasses.connects);
      scope_Handles = [];
      scope_Connects = [];
      scope_Connects.push(addConnect(connectBase, connectOptions[0])); // [::::O====O====O====]
      // connectOptions = [0, 1, 1, 1]

      for (var i = 0; i < options.handles; i++) {
        // Keep a list of all added handles.
        scope_Handles.push(addOrigin(base, i));
        scope_HandleNumbers[i] = i;
        scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
      }
    } // Initialize a single slider.


    function addSlider(addTarget) {
      // Apply classes and data to the target.
      addClass(addTarget, options.cssClasses.target);

      if (options.dir === 0) {
        addClass(addTarget, options.cssClasses.ltr);
      } else {
        addClass(addTarget, options.cssClasses.rtl);
      }

      if (options.ort === 0) {
        addClass(addTarget, options.cssClasses.horizontal);
      } else {
        addClass(addTarget, options.cssClasses.vertical);
      }

      var textDirection = getComputedStyle(addTarget).direction;

      if (textDirection === "rtl") {
        addClass(addTarget, options.cssClasses.textDirectionRtl);
      } else {
        addClass(addTarget, options.cssClasses.textDirectionLtr);
      }

      return addNodeTo(addTarget, options.cssClasses.base);
    }

    function addTooltip(handle, handleNumber) {
      if (!options.tooltips[handleNumber]) {
        return false;
      }

      return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
    }

    function isSliderDisabled() {
      return scope_Target.hasAttribute("disabled");
    } // Disable the slider dragging if any handle is disabled


    function isHandleDisabled(handleNumber) {
      var handleOrigin = scope_Handles[handleNumber];
      return handleOrigin.hasAttribute("disabled");
    }

    function removeTooltips() {
      if (scope_Tooltips) {
        removeEvent("update.tooltips");
        scope_Tooltips.forEach(function (tooltip) {
          if (tooltip) {
            removeElement(tooltip);
          }
        });
        scope_Tooltips = null;
      }
    } // The tooltips option is a shorthand for using the 'update' event.


    function tooltips() {
      removeTooltips(); // Tooltips are added with options.tooltips in original order.

      scope_Tooltips = scope_Handles.map(addTooltip);
      bindEvent("update.tooltips", function (values, handleNumber, unencoded) {
        if (!scope_Tooltips[handleNumber]) {
          return;
        }

        var formattedValue = values[handleNumber];

        if (options.tooltips[handleNumber] !== true) {
          formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
        }

        scope_Tooltips[handleNumber].innerHTML = formattedValue;
      });
    }

    function aria() {
      bindEvent("update", function (values, handleNumber, unencoded, tap, positions) {
        // Update Aria Values for all handles, as a change in one changes min and max values for the next.
        scope_HandleNumbers.forEach(function (index) {
          var handle = scope_Handles[index];
          var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
          var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
          var now = positions[index]; // Formatted value for display

          var text = options.ariaFormat.to(unencoded[index]); // Map to slider range values

          min = scope_Spectrum.fromStepping(min).toFixed(1);
          max = scope_Spectrum.fromStepping(max).toFixed(1);
          now = scope_Spectrum.fromStepping(now).toFixed(1);
          handle.children[0].setAttribute("aria-valuemin", min);
          handle.children[0].setAttribute("aria-valuemax", max);
          handle.children[0].setAttribute("aria-valuenow", now);
          handle.children[0].setAttribute("aria-valuetext", text);
        });
      });
    }

    function getGroup(mode, values, stepped) {
      // Use the range.
      if (mode === "range" || mode === "steps") {
        return scope_Spectrum.xVal;
      }

      if (mode === "count") {
        if (values < 2) {
          throw new Error("noUiSlider (" + VERSION + "): 'values' (>= 2) required for mode 'count'.");
        } // Divide 0 - 100 in 'count' parts.


        var interval = values - 1;
        var spread = 100 / interval;
        values = []; // List these parts and have them handled as 'positions'.

        while (interval--) {
          values[interval] = interval * spread;
        }

        values.push(100);
        mode = "positions";
      }

      if (mode === "positions") {
        // Map all percentages to on-range values.
        return values.map(function (value) {
          return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
        });
      }

      if (mode === "values") {
        // If the value must be stepped, it needs to be converted to a percentage first.
        if (stepped) {
          return values.map(function (value) {
            // Convert to percentage, apply step, return to value.
            return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
          });
        } // Otherwise, we can simply use the values.


        return values;
      }
    }

    function generateSpread(density, mode, group) {
      function safeIncrement(value, increment) {
        // Avoid floating point variance by dropping the smallest decimal places.
        return (value + increment).toFixed(7) / 1;
      }

      var indexes = {};
      var firstInRange = scope_Spectrum.xVal[0];
      var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
      var ignoreFirst = false;
      var ignoreLast = false;
      var prevPct = 0; // Create a copy of the group, sort it and filter away all duplicates.

      group = unique(group.slice().sort(function (a, b) {
        return a - b;
      })); // Make sure the range starts with the first element.

      if (group[0] !== firstInRange) {
        group.unshift(firstInRange);
        ignoreFirst = true;
      } // Likewise for the last one.


      if (group[group.length - 1] !== lastInRange) {
        group.push(lastInRange);
        ignoreLast = true;
      }

      group.forEach(function (current, index) {
        // Get the current step and the lower + upper positions.
        var step;
        var i;
        var q;
        var low = current;
        var high = group[index + 1];
        var newPct;
        var pctDifference;
        var pctPos;
        var type;
        var steps;
        var realSteps;
        var stepSize;
        var isSteps = mode === "steps"; // When using 'steps' mode, use the provided steps.
        // Otherwise, we'll step on to the next subrange.

        if (isSteps) {
          step = scope_Spectrum.xNumSteps[index];
        } // Default to a 'full' step.


        if (!step) {
          step = high - low;
        } // Low can be 0, so test for false. Index 0 is already handled.


        if (low === false) {
          return;
        } // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)


        if (high === undefined) {
          high = low;
        } // Make sure step isn't 0, which would cause an infinite loop (#654)


        step = Math.max(step, 0.0000001); // Find all steps in the subrange.

        for (i = low; i <= high; i = safeIncrement(i, step)) {
          // Get the percentage value for the current step,
          // calculate the size for the subrange.
          newPct = scope_Spectrum.toStepping(i);
          pctDifference = newPct - prevPct;
          steps = pctDifference / density;
          realSteps = Math.round(steps); // This ratio represents the amount of percentage-space a point indicates.
          // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
          // Round the percentage offset to an even number, then divide by two
          // to spread the offset on both sides of the range.

          stepSize = pctDifference / realSteps; // Divide all points evenly, adding the correct number to this subrange.
          // Run up to <= so that 100% gets a point, event if ignoreLast is set.

          for (q = 1; q <= realSteps; q += 1) {
            // The ratio between the rounded value and the actual size might be ~1% off.
            // Correct the percentage offset by the number of points
            // per subrange. density = 1 will result in 100 points on the
            // full range, 2 for 50, 4 for 25, etc.
            pctPos = prevPct + q * stepSize;
            indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
          } // Determine the point type.


          type = group.indexOf(i) > -1 ? PIPS_LARGE_VALUE : isSteps ? PIPS_SMALL_VALUE : PIPS_NO_VALUE; // Enforce the 'ignoreFirst' option by overwriting the type for 0.

          if (!index && ignoreFirst && i !== high) {
            type = 0;
          }

          if (!(i === high && ignoreLast)) {
            // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
            indexes[newPct.toFixed(5)] = [i, type];
          } // Update the percentage count.


          prevPct = newPct;
        }
      });
      return indexes;
    }

    function addMarking(spread, filterFunc, formatter) {
      var element = scope_Document.createElement("div");
      var valueSizeClasses = [];
      valueSizeClasses[PIPS_NO_VALUE] = options.cssClasses.valueNormal;
      valueSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.valueLarge;
      valueSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.valueSub;
      var markerSizeClasses = [];
      markerSizeClasses[PIPS_NO_VALUE] = options.cssClasses.markerNormal;
      markerSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.markerLarge;
      markerSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.markerSub;
      var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
      var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
      addClass(element, options.cssClasses.pips);
      addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

      function getClasses(type, source) {
        var a = source === options.cssClasses.value;
        var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
        var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
        return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
      }

      function addSpread(offset, value, type) {
        // Apply the filter function, if it is set.
        type = filterFunc ? filterFunc(value, type) : type;

        if (type === PIPS_NONE) {
          return;
        } // Add a marker for every point


        var node = addNodeTo(element, false);
        node.className = getClasses(type, options.cssClasses.marker);
        node.style[options.style] = offset + "%"; // Values are only appended for points marked '1' or '2'.

        if (type > PIPS_NO_VALUE) {
          node = addNodeTo(element, false);
          node.className = getClasses(type, options.cssClasses.value);
          node.setAttribute("data-value", value);
          node.style[options.style] = offset + "%";
          node.innerHTML = formatter.to(value);
        }
      } // Append all points.


      Object.keys(spread).forEach(function (offset) {
        addSpread(offset, spread[offset][0], spread[offset][1]);
      });
      return element;
    }

    function removePips() {
      if (scope_Pips) {
        removeElement(scope_Pips);
        scope_Pips = null;
      }
    }

    function pips(grid) {
      // Fix #669
      removePips();
      var mode = grid.mode;
      var density = grid.density || 1;
      var filter = grid.filter || false;
      var values = grid.values || false;
      var stepped = grid.stepped || false;
      var group = getGroup(mode, values, stepped);
      var spread = generateSpread(density, mode, group);
      var format = grid.format || {
        to: Math.round
      };
      scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
      return scope_Pips;
    } // Shorthand for base dimensions.


    function baseSize() {
      var rect = scope_Base.getBoundingClientRect();
      var alt = "offset" + ["Width", "Height"][options.ort];
      return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
    } // Handler for attaching events trough a proxy.


    function attachEvent(events, element, callback, data) {
      // This function can be used to 'filter' events to the slider.
      // element is a node, not a nodeList
      var method = function method(e) {
        e = fixEvent(e, data.pageOffset, data.target || element); // fixEvent returns false if this event has a different target
        // when handling (multi-) touch events;

        if (!e) {
          return false;
        } // doNotReject is passed by all end events to make sure released touches
        // are not rejected, leaving the slider "stuck" to the cursor;


        if (isSliderDisabled() && !data.doNotReject) {
          return false;
        } // Stop if an active 'tap' transition is taking place.


        if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
          return false;
        } // Ignore right or middle clicks on start #454


        if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
          return false;
        } // Ignore right or middle clicks on start #454


        if (data.hover && e.buttons) {
          return false;
        } // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
        // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
        // touch-action: manipulation, but that allows panning, which breaks
        // sliders after zooming/on non-responsive pages.
        // See: https://bugs.webkit.org/show_bug.cgi?id=133112


        if (!supportsPassive) {
          e.preventDefault();
        }

        e.calcPoint = e.points[options.ort]; // Call the event handler with the event [ and additional data ].

        callback(e, data);
      };

      var methods = []; // Bind a closure on the target for every event type.

      events.split(" ").forEach(function (eventName) {
        element.addEventListener(eventName, method, supportsPassive ? {
          passive: true
        } : false);
        methods.push([eventName, method]);
      });
      return methods;
    } // Provide a clean event with standardized offset values.


    function fixEvent(e, pageOffset, eventTarget) {
      // Filter the event to register the type, which can be
      // touch, mouse or pointer. Offset changes need to be
      // made on an event specific basis.
      var touch = e.type.indexOf("touch") === 0;
      var mouse = e.type.indexOf("mouse") === 0;
      var pointer = e.type.indexOf("pointer") === 0;
      var x;
      var y; // IE10 implemented pointer events with a prefix;

      if (e.type.indexOf("MSPointer") === 0) {
        pointer = true;
      } // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
      // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
      // events that have no touches or buttons associated with them. (#1057, #1079, #1095)


      if (e.type === "mousedown" && !e.buttons && !e.touches) {
        return false;
      } // The only thing one handle should be concerned about is the touches that originated on top of it.


      if (touch) {
        // Returns true if a touch originated on the target.
        var isTouchOnTarget = function isTouchOnTarget(checkTouch) {
          return checkTouch.target === eventTarget || eventTarget.contains(checkTouch.target) || checkTouch.target.shadowRoot && checkTouch.target.shadowRoot.contains(eventTarget);
        }; // In the case of touchstart events, we need to make sure there is still no more than one
        // touch on the target so we look amongst all touches.


        if (e.type === "touchstart") {
          var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget); // Do not support more than one touch per handle.

          if (targetTouches.length > 1) {
            return false;
          }

          x = targetTouches[0].pageX;
          y = targetTouches[0].pageY;
        } else {
          // In the other cases, find on changedTouches is enough.
          var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget); // Cancel if the target touch has not moved.

          if (!targetTouch) {
            return false;
          }

          x = targetTouch.pageX;
          y = targetTouch.pageY;
        }
      }

      pageOffset = pageOffset || getPageOffset(scope_Document);

      if (mouse || pointer) {
        x = e.clientX + pageOffset.x;
        y = e.clientY + pageOffset.y;
      }

      e.pageOffset = pageOffset;
      e.points = [x, y];
      e.cursor = mouse || pointer; // Fix #435

      return e;
    } // Translate a coordinate in the document to a percentage on the slider


    function calcPointToPercentage(calcPoint) {
      var location = calcPoint - offset(scope_Base, options.ort);
      var proposal = location * 100 / baseSize(); // Clamp proposal between 0% and 100%
      // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
      // are used (e.g. contained handles feature)

      proposal = limit(proposal);
      return options.dir ? 100 - proposal : proposal;
    } // Find handle closest to a certain percentage on the slider


    function getClosestHandle(clickedPosition) {
      var smallestDifference = 100;
      var handleNumber = false;
      scope_Handles.forEach(function (handle, index) {
        // Disabled handles are ignored
        if (isHandleDisabled(index)) {
          return;
        }

        var handlePosition = scope_Locations[index];
        var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition); // Initial state

        var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100; // Difference with this handle is smaller than the previously checked handle

        var isCloser = differenceWithThisHandle < smallestDifference;
        var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;

        if (isCloser || isCloserAfter || clickAtEdge) {
          handleNumber = index;
          smallestDifference = differenceWithThisHandle;
        }
      });
      return handleNumber;
    } // Fire 'end' when a mouse or pen leaves the document.


    function documentLeave(event, data) {
      if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) {
        eventEnd(event, data);
      }
    } // Handle movement on document for handle and range drag.


    function eventMove(event, data) {
      // Fix #498
      // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
      // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
      // IE9 has .buttons and .which zero on mousemove.
      // Firefox breaks the spec MDN defines.
      if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
        return eventEnd(event, data);
      } // Check if we are moving up or down


      var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint); // Convert the movement into a percentage of the slider width/height

      var proposal = movement * 100 / data.baseSize;
      moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
    } // Unbind move events on document, call callbacks.


    function eventEnd(event, data) {
      // The handle is no longer active, so remove the class.
      if (data.handle) {
        removeClass(data.handle, options.cssClasses.active);
        scope_ActiveHandlesCount -= 1;
      } // Unbind the move and end events, which are added on 'start'.


      data.listeners.forEach(function (c) {
        scope_DocumentElement.removeEventListener(c[0], c[1]);
      });

      if (scope_ActiveHandlesCount === 0) {
        // Remove dragging class.
        removeClass(scope_Target, options.cssClasses.drag);
        setZindex(); // Remove cursor styles and text-selection events bound to the body.

        if (event.cursor) {
          scope_Body.style.cursor = "";
          scope_Body.removeEventListener("selectstart", preventDefault);
        }
      }

      data.handleNumbers.forEach(function (handleNumber) {
        fireEvent("change", handleNumber);
        fireEvent("set", handleNumber);
        fireEvent("end", handleNumber);
      });
    } // Bind move events on document.


    function eventStart(event, data) {
      // Ignore event if any handle is disabled
      if (data.handleNumbers.some(isHandleDisabled)) {
        return false;
      }

      var handle;

      if (data.handleNumbers.length === 1) {
        var handleOrigin = scope_Handles[data.handleNumbers[0]];
        handle = handleOrigin.children[0];
        scope_ActiveHandlesCount += 1; // Mark the handle as 'active' so it can be styled.

        addClass(handle, options.cssClasses.active);
      } // A drag should never propagate up to the 'tap' event.


      event.stopPropagation(); // Record the event listeners.

      var listeners = []; // Attach the move and end events.

      var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
        // The event target has changed so we need to propagate the original one so that we keep
        // relying on it to extract target touches.
        target: event.target,
        handle: handle,
        listeners: listeners,
        startCalcPoint: event.calcPoint,
        baseSize: baseSize(),
        pageOffset: event.pageOffset,
        handleNumbers: data.handleNumbers,
        buttonsProperty: event.buttons,
        locations: scope_Locations.slice()
      });
      var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
        target: event.target,
        handle: handle,
        listeners: listeners,
        doNotReject: true,
        handleNumbers: data.handleNumbers
      });
      var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
        target: event.target,
        handle: handle,
        listeners: listeners,
        doNotReject: true,
        handleNumbers: data.handleNumbers
      }); // We want to make sure we pushed the listeners in the listener list rather than creating
      // a new one as it has already been passed to the event handlers.

      listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent)); // Text selection isn't an issue on touch devices,
      // so adding cursor styles can be skipped.

      if (event.cursor) {
        // Prevent the 'I' cursor and extend the range-drag cursor.
        scope_Body.style.cursor = getComputedStyle(event.target).cursor; // Mark the target with a dragging state.

        if (scope_Handles.length > 1) {
          addClass(scope_Target, options.cssClasses.drag);
        } // Prevent text selection when dragging the handles.
        // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
        // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
        // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
        // The 'cursor' flag is false.
        // See: http://caniuse.com/#search=selectstart


        scope_Body.addEventListener("selectstart", preventDefault, false);
      }

      data.handleNumbers.forEach(function (handleNumber) {
        fireEvent("start", handleNumber);
      });
    } // Move closest handle to tapped location.


    function eventTap(event) {
      // The tap event shouldn't propagate up
      event.stopPropagation();
      var proposal = calcPointToPercentage(event.calcPoint);
      var handleNumber = getClosestHandle(proposal); // Tackle the case that all handles are 'disabled'.

      if (handleNumber === false) {
        return false;
      } // Flag the slider as it is now in a transitional state.
      // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.


      if (!options.events.snap) {
        addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
      }

      setHandle(handleNumber, proposal, true, true);
      setZindex();
      fireEvent("slide", handleNumber, true);
      fireEvent("update", handleNumber, true);
      fireEvent("change", handleNumber, true);
      fireEvent("set", handleNumber, true);

      if (options.events.snap) {
        eventStart(event, {
          handleNumbers: [handleNumber]
        });
      }
    } // Fires a 'hover' event for a hovered mouse/pen position.


    function eventHover(event) {
      var proposal = calcPointToPercentage(event.calcPoint);
      var to = scope_Spectrum.getStep(proposal);
      var value = scope_Spectrum.fromStepping(to);
      Object.keys(scope_Events).forEach(function (targetEvent) {
        if ("hover" === targetEvent.split(".")[0]) {
          scope_Events[targetEvent].forEach(function (callback) {
            callback.call(scope_Self, value);
          });
        }
      });
    } // Handles keydown on focused handles
    // Don't move the document when pressing arrow keys on focused handles


    function eventKeydown(event, handleNumber) {
      if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
        return false;
      }

      var horizontalKeys = ["Left", "Right"];
      var verticalKeys = ["Down", "Up"];
      var largeStepKeys = ["PageDown", "PageUp"];
      var edgeKeys = ["Home", "End"];

      if (options.dir && !options.ort) {
        // On an right-to-left slider, the left and right keys act inverted
        horizontalKeys.reverse();
      } else if (options.ort && !options.dir) {
        // On a top-to-bottom slider, the up and down keys act inverted
        verticalKeys.reverse();
        largeStepKeys.reverse();
      } // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key


      var key = event.key.replace("Arrow", "");
      var isLargeDown = key === largeStepKeys[0];
      var isLargeUp = key === largeStepKeys[1];
      var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
      var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
      var isMin = key === edgeKeys[0];
      var isMax = key === edgeKeys[1];

      if (!isDown && !isUp && !isMin && !isMax) {
        return true;
      }

      event.preventDefault();
      var to;

      if (isUp || isDown) {
        var multiplier = options.keyboardPageMultiplier;
        var direction = isDown ? 0 : 1;
        var steps = getNextStepsForHandle(handleNumber);
        var step = steps[direction]; // At the edge of a slider, do nothing

        if (step === null) {
          return false;
        } // No step set, use the default of 10% of the sub-range


        if (step === false) {
          step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
        }

        if (isLargeUp || isLargeDown) {
          step *= multiplier;
        } // Step over zero-length ranges (#948);


        step = Math.max(step, 0.0000001); // Decrement for down steps

        step = (isDown ? -1 : 1) * step;
        to = scope_Values[handleNumber] + step;
      } else if (isMax) {
        // End key
        to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
      } else {
        // Home key
        to = options.spectrum.xVal[0];
      }

      setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
      fireEvent("slide", handleNumber);
      fireEvent("update", handleNumber);
      fireEvent("change", handleNumber);
      fireEvent("set", handleNumber);
      return false;
    } // Attach events to several slider parts.


    function bindSliderEvents(behaviour) {
      // Attach the standard drag event to the handles.
      if (!behaviour.fixed) {
        scope_Handles.forEach(function (handle, index) {
          // These events are only bound to the visual handle
          // element, not the 'real' origin element.
          attachEvent(actions.start, handle.children[0], eventStart, {
            handleNumbers: [index]
          });
        });
      } // Attach the tap event to the slider base.


      if (behaviour.tap) {
        attachEvent(actions.start, scope_Base, eventTap, {});
      } // Fire hover events


      if (behaviour.hover) {
        attachEvent(actions.move, scope_Base, eventHover, {
          hover: true
        });
      } // Make the range draggable.


      if (behaviour.drag) {
        scope_Connects.forEach(function (connect, index) {
          if (connect === false || index === 0 || index === scope_Connects.length - 1) {
            return;
          }

          var handleBefore = scope_Handles[index - 1];
          var handleAfter = scope_Handles[index];
          var eventHolders = [connect];
          addClass(connect, options.cssClasses.draggable); // When the range is fixed, the entire range can
          // be dragged by the handles. The handle in the first
          // origin will propagate the start event upward,
          // but it needs to be bound manually on the other.

          if (behaviour.fixed) {
            eventHolders.push(handleBefore.children[0]);
            eventHolders.push(handleAfter.children[0]);
          }

          eventHolders.forEach(function (eventHolder) {
            attachEvent(actions.start, eventHolder, eventStart, {
              handles: [handleBefore, handleAfter],
              handleNumbers: [index - 1, index]
            });
          });
        });
      }
    } // Attach an event to this slider, possibly including a namespace


    function bindEvent(namespacedEvent, callback) {
      scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
      scope_Events[namespacedEvent].push(callback); // If the event bound is 'update,' fire it immediately for all handles.

      if (namespacedEvent.split(".")[0] === "update") {
        scope_Handles.forEach(function (a, index) {
          fireEvent("update", index);
        });
      }
    } // Undo attachment of event


    function removeEvent(namespacedEvent) {
      var event = namespacedEvent && namespacedEvent.split(".")[0];
      var namespace = event && namespacedEvent.substring(event.length);
      Object.keys(scope_Events).forEach(function (bind) {
        var tEvent = bind.split(".")[0];
        var tNamespace = bind.substring(tEvent.length);

        if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
          delete scope_Events[bind];
        }
      });
    } // External event handling


    function fireEvent(eventName, handleNumber, tap) {
      Object.keys(scope_Events).forEach(function (targetEvent) {
        var eventType = targetEvent.split(".")[0];

        if (eventName === eventType) {
          scope_Events[targetEvent].forEach(function (callback) {
            callback.call( // Use the slider public API as the scope ('this')
            scope_Self, // Return values as array, so arg_1[arg_2] is always valid.
            scope_Values.map(options.format.to), // Handle index, 0 or 1
            handleNumber, // Un-formatted slider values
            scope_Values.slice(), // Event is fired by tap, true or false
            tap || false, // Left offset of the handle, in relation to the slider
            scope_Locations.slice(), // add the slider public API to an accessible parameter when this is unavailable
            scope_Self);
          });
        }
      });
    } // Split out the handle positioning logic so the Move event can use it, too


    function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
      var distance; // For sliders with multiple handles, limit movement to the other handle.
      // Apply the margin option by adding it to the handle positions.

      if (scope_Handles.length > 1 && !options.events.unconstrained) {
        if (lookBackward && handleNumber > 0) {
          distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, 0);
          to = Math.max(to, distance);
        }

        if (lookForward && handleNumber < scope_Handles.length - 1) {
          distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, 1);
          to = Math.min(to, distance);
        }
      } // The limit option has the opposite effect, limiting handles to a
      // maximum distance from another. Limit must be > 0, as otherwise
      // handles would be unmovable.


      if (scope_Handles.length > 1 && options.limit) {
        if (lookBackward && handleNumber > 0) {
          distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, 0);
          to = Math.min(to, distance);
        }

        if (lookForward && handleNumber < scope_Handles.length - 1) {
          distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, 1);
          to = Math.max(to, distance);
        }
      } // The padding option keeps the handles a certain distance from the
      // edges of the slider. Padding must be > 0.


      if (options.padding) {
        if (handleNumber === 0) {
          distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], 0);
          to = Math.max(to, distance);
        }

        if (handleNumber === scope_Handles.length - 1) {
          distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], 1);
          to = Math.min(to, distance);
        }
      }

      to = scope_Spectrum.getStep(to); // Limit percentage to the 0 - 100 range

      to = limit(to); // Return false if handle can't move

      if (to === reference[handleNumber] && !getValue) {
        return false;
      }

      return to;
    } // Uses slider orientation to create CSS rules. a = base value;


    function inRuleOrder(v, a) {
      var o = options.ort;
      return (o ? a : v) + ", " + (o ? v : a);
    } // Moves handle(s) by a percentage
    // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])


    function moveHandles(upward, proposal, locations, handleNumbers) {
      var proposals = locations.slice();
      var b = [!upward, upward];
      var f = [upward, !upward]; // Copy handleNumbers so we don't change the dataset

      handleNumbers = handleNumbers.slice(); // Check to see which handle is 'leading'.
      // If that one can't move the second can't either.

      if (upward) {
        handleNumbers.reverse();
      } // Step 1: get the maximum percentage that any of the handles can move


      if (handleNumbers.length > 1) {
        handleNumbers.forEach(function (handleNumber, o) {
          var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false); // Stop if one of the handles can't move.

          if (to === false) {
            proposal = 0;
          } else {
            proposal = to - proposals[handleNumber];
            proposals[handleNumber] = to;
          }
        });
      } // If using one handle, check backward AND forward
      else {
        b = f = [true];
      }

      var state = false; // Step 2: Try to set the handles with the found percentage

      handleNumbers.forEach(function (handleNumber, o) {
        state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
      }); // Step 3: If a handle moved, fire events

      if (state) {
        handleNumbers.forEach(function (handleNumber) {
          fireEvent("update", handleNumber);
          fireEvent("slide", handleNumber);
        });
      }
    } // Takes a base value and an offset. This offset is used for the connect bar size.
    // In the initial design for this feature, the origin element was 1% wide.
    // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
    // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223


    function transformDirection(a, b) {
      return options.dir ? 100 - a - b : a;
    } // Updates scope_Locations and scope_Values, updates visual state


    function updateHandlePosition(handleNumber, to) {
      // Update locations.
      scope_Locations[handleNumber] = to; // Convert the value to the slider stepping/range.

      scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
      var translation = 10 * (transformDirection(to, 0) - scope_DirOffset);
      var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
      scope_Handles[handleNumber].style[options.transformRule] = translateRule;
      updateConnect(handleNumber);
      updateConnect(handleNumber + 1);
    } // Handles before the slider middle are stacked later = higher,
    // Handles after the middle later is lower
    // [[7] [8] .......... | .......... [5] [4]


    function setZindex() {
      scope_HandleNumbers.forEach(function (handleNumber) {
        var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
        var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
        scope_Handles[handleNumber].style.zIndex = zIndex;
      });
    } // Test suggested values and apply margin, step.
    // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)


    function setHandle(handleNumber, to, lookBackward, lookForward, exactInput) {
      if (!exactInput) {
        to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);
      }

      if (to === false) {
        return false;
      }

      updateHandlePosition(handleNumber, to);
      return true;
    } // Updates style attribute for connect nodes


    function updateConnect(index) {
      // Skip connects set to false
      if (!scope_Connects[index]) {
        return;
      }

      var l = 0;
      var h = 100;

      if (index !== 0) {
        l = scope_Locations[index - 1];
      }

      if (index !== scope_Connects.length - 1) {
        h = scope_Locations[index];
      } // We use two rules:
      // 'translate' to change the left/top offset;
      // 'scale' to change the width of the element;
      // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)


      var connectWidth = h - l;
      var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
      var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
      scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
    } // Parses value passed to .set method. Returns current value if not parse-able.


    function resolveToValue(to, handleNumber) {
      // Setting with null indicates an 'ignore'.
      // Inputting 'false' is invalid.
      if (to === null || to === false || to === undefined) {
        return scope_Locations[handleNumber];
      } // If a formatted number was passed, attempt to decode it.


      if (typeof to === "number") {
        to = String(to);
      }

      to = options.format.from(to);
      to = scope_Spectrum.toStepping(to); // If parsing the number failed, use the current value.

      if (to === false || isNaN(to)) {
        return scope_Locations[handleNumber];
      }

      return to;
    } // Set the slider value.


    function valueSet(input, fireSetEvent, exactInput) {
      var values = asArray(input);
      var isInit = scope_Locations[0] === undefined; // Event fires by default

      fireSetEvent = fireSetEvent === undefined ? true : !!fireSetEvent; // Animation is optional.
      // Make sure the initial values were set before using animated placement.

      if (options.animate && !isInit) {
        addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
      } // First pass, without lookAhead but with lookBackward. Values are set from left to right.


      scope_HandleNumbers.forEach(function (handleNumber) {
        setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
      });
      var i = scope_HandleNumbers.length === 1 ? 0 : 1; // Secondary passes. Now that all base values are set, apply constraints.
      // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)

      for (; i < scope_HandleNumbers.length; ++i) {
        scope_HandleNumbers.forEach(function (handleNumber) {
          setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
        });
      }

      setZindex();
      scope_HandleNumbers.forEach(function (handleNumber) {
        fireEvent("update", handleNumber); // Fire the event only for handles that received a new value, as per #579

        if (values[handleNumber] !== null && fireSetEvent) {
          fireEvent("set", handleNumber);
        }
      });
    } // Reset slider to initial values


    function valueReset(fireSetEvent) {
      valueSet(options.start, fireSetEvent);
    } // Set value for a single handle


    function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
      // Ensure numeric input
      handleNumber = Number(handleNumber);

      if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
        throw new Error("noUiSlider (" + VERSION + "): invalid handle number, got: " + handleNumber);
      } // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
      // The exactInput argument can be used to ignore slider stepping (#436)


      setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
      fireEvent("update", handleNumber);

      if (fireSetEvent) {
        fireEvent("set", handleNumber);
      }
    } // Get the slider value.


    function valueGet() {
      var values = scope_Values.map(options.format.to); // If only one handle is used, return a single value.

      if (values.length === 1) {
        return values[0];
      }

      return values;
    } // Removes classes from the root and empties it.


    function destroy() {
      for (var key in options.cssClasses) {
        if (!options.cssClasses.hasOwnProperty(key)) {
          continue;
        }

        removeClass(scope_Target, options.cssClasses[key]);
      }

      while (scope_Target.firstChild) {
        scope_Target.removeChild(scope_Target.firstChild);
      }

      delete scope_Target.noUiSlider;
    }

    function getNextStepsForHandle(handleNumber) {
      var location = scope_Locations[handleNumber];
      var nearbySteps = scope_Spectrum.getNearbySteps(location);
      var value = scope_Values[handleNumber];
      var increment = nearbySteps.thisStep.step;
      var decrement = null; // If snapped, directly use defined step value

      if (options.snap) {
        return [value - nearbySteps.stepBefore.startValue || null, nearbySteps.stepAfter.startValue - value || null];
      } // If the next value in this step moves into the next step,
      // the increment is the start of the next step - the current value


      if (increment !== false) {
        if (value + increment > nearbySteps.stepAfter.startValue) {
          increment = nearbySteps.stepAfter.startValue - value;
        }
      } // If the value is beyond the starting point


      if (value > nearbySteps.thisStep.startValue) {
        decrement = nearbySteps.thisStep.step;
      } else if (nearbySteps.stepBefore.step === false) {
        decrement = false;
      } // If a handle is at the start of a step, it always steps back into the previous step first
      else {
        decrement = value - nearbySteps.stepBefore.highestStep;
      } // Now, if at the slider edges, there is no in/decrement


      if (location === 100) {
        increment = null;
      } else if (location === 0) {
        decrement = null;
      } // As per #391, the comparison for the decrement step can have some rounding issues.


      var stepDecimals = scope_Spectrum.countStepDecimals(); // Round per #391

      if (increment !== null && increment !== false) {
        increment = Number(increment.toFixed(stepDecimals));
      }

      if (decrement !== null && decrement !== false) {
        decrement = Number(decrement.toFixed(stepDecimals));
      }

      return [decrement, increment];
    } // Get the current step size for the slider.


    function getNextSteps() {
      return scope_HandleNumbers.map(getNextStepsForHandle);
    } // Updateable: margin, limit, padding, step, range, animate, snap


    function updateOptions(optionsToUpdate, fireSetEvent) {
      // Spectrum is created using the range, snap, direction and step options.
      // 'snap' and 'step' can be updated.
      // If 'snap' and 'step' are not passed, they should remain unchanged.
      var v = valueGet();
      var updateAble = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"]; // Only change options that we're actually passed to update.

      updateAble.forEach(function (name) {
        // Check for undefined. null removes the value.
        if (optionsToUpdate[name] !== undefined) {
          originalOptions[name] = optionsToUpdate[name];
        }
      });
      var newOptions = testOptions(originalOptions); // Load new options into the slider state

      updateAble.forEach(function (name) {
        if (optionsToUpdate[name] !== undefined) {
          options[name] = newOptions[name];
        }
      });
      scope_Spectrum = newOptions.spectrum; // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)

      options.margin = newOptions.margin;
      options.limit = newOptions.limit;
      options.padding = newOptions.padding; // Update pips, removes existing.

      if (options.pips) {
        pips(options.pips);
      } else {
        removePips();
      } // Update tooltips, removes existing.


      if (options.tooltips) {
        tooltips();
      } else {
        removeTooltips();
      } // Invalidate the current positioning so valueSet forces an update.


      scope_Locations = [];
      valueSet(optionsToUpdate.start || v, fireSetEvent);
    } // Initialization steps


    function setupSlider() {
      // Create the base element, initialize HTML and set classes.
      // Add handles and connect elements.
      scope_Base = addSlider(scope_Target);
      addElements(options.connect, scope_Base); // Attach user events.

      bindSliderEvents(options.events); // Use the public value method to set the start values.

      valueSet(options.start);

      if (options.pips) {
        pips(options.pips);
      }

      if (options.tooltips) {
        tooltips();
      }

      aria();
    }

    setupSlider(); // noinspection JSUnusedGlobalSymbols

    scope_Self = {
      destroy: destroy,
      steps: getNextSteps,
      on: bindEvent,
      off: removeEvent,
      get: valueGet,
      set: valueSet,
      setHandle: valueSetHandle,
      reset: valueReset,
      // Exposed for unit testing, don't use this in your application.
      __moveHandles: function __moveHandles(a, b, c) {
        moveHandles(a, b, scope_Locations, c);
      },
      options: originalOptions,
      // Issue #600, #678
      updateOptions: updateOptions,
      target: scope_Target,
      // Issue #597
      removePips: removePips,
      removeTooltips: removeTooltips,
      getTooltips: function getTooltips() {
        return scope_Tooltips;
      },
      getOrigins: function getOrigins() {
        return scope_Handles;
      },
      pips: pips // Issue #594

    };
    return scope_Self;
  } // Run the standard initializer


  function initialize(target, originalOptions) {
    if (!target || !target.nodeName) {
      throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
    } // Throw an error if the slider was already initialized.


    if (target.noUiSlider) {
      throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
    } // Test the options and create the slider environment;


    var options = testOptions(originalOptions, target);
    var api = scope(target, options, originalOptions);
    target.noUiSlider = api;
    return api;
  } // Use an object instead of a function for future expandability;


  return {
    // Exposed for unit testing, don't use this in your application.
    __spectrum: Spectrum,
    version: VERSION,
    // A reference to the default classes, allows global changes.
    // Use the cssClasses option for changes to one slider.
    cssClasses: cssClasses,
    create: initialize
  };
});

/***/ }),

/***/ 46516:
/*!************************************************************************!*\
  !*** ./src/app/example/forms/extendedforms/extendedforms.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtendedFormsComponent": function() { return /* binding */ ExtendedFormsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 13070);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 6174);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ 69024);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 13841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-chips */ 68474);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84369);
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-nouislider */ 80012);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 56602);











function ExtendedFormsComponent_mat_option_45_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var city_r4 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", city_r4.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", city_r4.viewValue, " ");
    }
}
function ExtendedFormsComponent_mat_option_49_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var city_r5 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", city_r5.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", city_r5.viewValue, " ");
    }
}
var ExtendedFormsComponent = /** @class */ /*@__PURE__*/ (function () {
    function ExtendedFormsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.regularItems = ['Pizza', 'Pasta', 'Parmesan'];
        this.selectTheme = 'primary';
        this.cities = [
            { value: 'paris-0', viewValue: 'Paris' },
            { value: 'miami-1', viewValue: 'Miami' },
            { value: 'bucharest-2', viewValue: 'Bucharest' },
            { value: 'new-york-3', viewValue: 'New York' },
            { value: 'london-4', viewValue: 'London' },
            { value: 'barcelona-5', viewValue: 'Barcelona' },
            { value: 'moscow-6', viewValue: 'Moscow' },
        ];
    }
    ExtendedFormsComponent.prototype.ngOnInit = function () { };
    ExtendedFormsComponent.prototype.myFunc = function (val) {
        // code here
    };
    ExtendedFormsComponent.ɵfac = function ExtendedFormsComponent_Factory(t) { return new (t || ExtendedFormsComponent)(); };
    ExtendedFormsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExtendedFormsComponent, selectors: [["app-extendedforms-cmp"]], decls: 178, vars: 20, consts: [[1, "main-content"], [1, "container-fluid"], [1, "card"], [1, "card-body"], [1, "row"], [1, "col-md-4", "mr-auto"], ["matInput", "", "placeholder", "Choose a date", 3, "matDatepicker", "click"], ["matSuffix", "", 3, "for"], ["picker", ""], ["startView", "year"], ["picker2", ""], [1, "col-md-6"], [1, "togglebutton"], ["type", "checkbox", "checked", ""], [1, "toggle"], ["type", "checkbox"], [1, "col-lg-5", "col-md-8", "col-sm-4"], ["multiple", "", "placeholder", "Multiple Cities", "name", "Paris", "ariaLabel", "cities[0]", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Single City", "name", "city"], ["theme", "filled-theme", 3, "ngModel", "ngModelChange"], [1, "col-lg-4", "col-md-6", "col-sm-3"], [1, "dropdown"], ["mat-raised-button", "", "href", "#pablo", "data-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-primary", "btn-round", "btn-block"], [1, "caret"], [1, "dropdown-menu", "dropdown-menu-left"], [1, "dropdown-header"], ["href", "#pablo"], [1, "divider"], [1, "dropup"], [1, "progress", "progress-line-primary"], ["role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-primary", 2, "width", "30%"], [1, "sr-only"], [1, "progress", "progress-line-info"], ["role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-info", 2, "width", "60%"], [1, "progress", "progress-line-danger"], [1, "progress-bar", "progress-bar-success", 2, "width", "35%"], [1, "progress-bar", "progress-bar-warning", 2, "width", "20%"], [1, "progress-bar", "progress-bar-danger", 2, "width", "10%"], [1, "slider", 3, "connect", "min", "max", "step", "ngModel", "tooltips", "ngModelChange"], [1, "slider", "slider-info", 3, "connect", "min", "max", "step", "ngModel", "tooltips", "ngModelChange"], [1, "col-md-4", "col-sm-4"], ["data-provides", "fileinput", 1, "fileinput", "fileinput-new", "text-center"], [1, "fileinput-new", "thumbnail"], ["src", "./assets/img/image_placeholder.jpg", "alt", "..."], [1, "fileinput-preview", "fileinput-exists", "thumbnail"], [1, "btn", "btn-rose", "btn-round", "btn-file"], [1, "fileinput-new"], [1, "fileinput-exists"], ["type", "file", "name", "..."], ["href", "#pablo", "data-dismiss", "fileinput", 1, "btn", "btn-danger", "btn-round", "fileinput-exists"], [1, "fa", "fa-times"], [1, "col-md-3", "col-sm-4"], [1, "fileinput-new", "thumbnail", "img-circle"], ["src", "./assets/img/placeholder.jpg", "alt", "..."], [1, "fileinput-preview", "fileinput-exists", "thumbnail", "img-circle"], [1, "btn", "btn-round", "btn-rose", "btn-file"], [3, "value"]], template: function ExtendedFormsComponent_Template(rf, ctx) {
            if (rf & 1) {
                var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "legend");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Datepicker");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExtendedFormsComponent_Template_input_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13); return _r0.open(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "mat-datepicker-toggle", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "mat-datepicker", null, 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "legend");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Datepicker Year");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExtendedFormsComponent_Template_input_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21); return _r1.open(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "mat-datepicker-toggle", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "mat-datepicker", 9, 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "legend");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Switches");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "span", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Toggle is on ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "span", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Toggle is off ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "legend");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Customisable Select");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-select", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExtendedFormsComponent_Template_mat_select_ngModelChange_44_listener($event) { return ctx.currentCity = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ExtendedFormsComponent_mat_option_45_Template, 2, 2, "mat-option", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-select", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, ExtendedFormsComponent_mat_option_49_Template, 2, 2, "mat-option", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "legend");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Tags");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " Regular: ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "tag-input", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExtendedFormsComponent_Template_tag_input_ngModelChange_57_listener($event) { return ctx.regularItems = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "legend");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Dropdown & Dropup");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Dropdown ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "b", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "ul", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Dropdown header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Action");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "a", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Another action");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "a", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Something else here");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "li", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "a", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Separated link");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "li", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "a", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "One more separated link");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Dropup ");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "b", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "ul", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "li", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Dropdown header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "a", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Action");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "a", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Another action");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "a", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Something else here");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "li", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "a", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Separated link");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "li", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "li");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "a", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "One more separated link");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "legend");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Progress Bars");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "span", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "60% Complete");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "span", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "60% Complete");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "span", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "35% Complete (success)");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "span", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "20% Complete (warning)");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "span", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "10% Complete (danger)");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "legend");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Sliders");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "nouislider", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExtendedFormsComponent_Template_nouislider_ngModelChange_139_listener($event) { return ctx.simpleSlider = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "nouislider", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExtendedFormsComponent_Template_nouislider_ngModelChange_141_listener($event) { return ctx.doubleSlider = $event; });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "legend");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Regular Image");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "img", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "div", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "span", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "span", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Select image");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "span", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Change");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "input", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "a", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "i", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, " Remove");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "legend");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Avatar");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "img", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "div", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "span", 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "span", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Add Photo");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "span", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Change");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "input", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "a", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "i", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, " Remove");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
                var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.currentCity);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cities);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cities);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.regularItems);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](82);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connect", true)("min", 0)("max", 100)("step", 1)("ngModel", ctx.simpleSlider)("tooltips", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("connect", true)("min", 0)("max", 100)("step", 1)("ngModel", ctx.doubleSlider)("tooltips", true);
            }
        }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepicker, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, ngx_chips__WEBPACK_IMPORTED_MODULE_8__.TagInputComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, ng2_nouislider__WEBPACK_IMPORTED_MODULE_0__.NouisliderComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption], styles: ["md-calendar[_ngcontent-%COMP%] {\n      width: 300px;\n  }"] });
    return ExtendedFormsComponent;
}());



/***/ }),

/***/ 25190:
/*!***********************************************!*\
  !*** ./src/app/example/forms/forms.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Forms": function() { return /* binding */ Forms; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 29996);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-nouislider */ 80012);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-chips */ 68474);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.module */ 78994);
/* harmony import */ var _forms_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms.routing */ 89886);
/* harmony import */ var _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extendedforms/extendedforms.component */ 46516);
/* harmony import */ var _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./regularforms/regularforms.component */ 69137);
/* harmony import */ var _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validationforms/validationforms.component */ 53913);
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wizard/wizard.component */ 58173);
/* harmony import */ var _validationforms_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validationforms/field-error-display/field-error-display.component */ 82185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 35366);














var Forms = /** @class */ /*@__PURE__*/ (function () {
    function Forms() {
    }
    Forms.ɵfac = function Forms_Factory(t) { return new (t || Forms)(); };
    Forms.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: Forms });
    Forms.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(_forms_routing__WEBPACK_IMPORTED_MODULE_2__.FormsRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_0__.NouisliderModule,
                ngx_chips__WEBPACK_IMPORTED_MODULE_12__.TagInputModule,
                src_app_app_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule
            ]] });
    return Forms;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](Forms, { declarations: [_extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_3__.ExtendedFormsComponent,
            _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_4__.RegularFormsComponent,
            _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_5__.ValidationFormsComponent,
            _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_6__.WizardComponent,
            _validationforms_field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_7__.FieldErrorDisplayComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            ng2_nouislider__WEBPACK_IMPORTED_MODULE_0__.NouisliderModule,
            ngx_chips__WEBPACK_IMPORTED_MODULE_12__.TagInputModule,
            src_app_app_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule] });
})();


/***/ }),

/***/ 89886:
/*!************************************************!*\
  !*** ./src/app/example/forms/forms.routing.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormsRoutes": function() { return /* binding */ FormsRoutes; }
/* harmony export */ });
/* harmony import */ var _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendedforms/extendedforms.component */ 46516);
/* harmony import */ var _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regularforms/regularforms.component */ 69137);
/* harmony import */ var _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validationforms/validationforms.component */ 53913);
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizard/wizard.component */ 58173);




var FormsRoutes = [
    {
        path: '',
        children: [{
                path: 'regular',
                component: _regularforms_regularforms_component__WEBPACK_IMPORTED_MODULE_1__.RegularFormsComponent
            }]
    }, {
        path: '',
        children: [{
                path: 'extended',
                component: _extendedforms_extendedforms_component__WEBPACK_IMPORTED_MODULE_0__.ExtendedFormsComponent
            }]
    }, {
        path: '',
        children: [{
                path: 'validation',
                component: _validationforms_validationforms_component__WEBPACK_IMPORTED_MODULE_2__.ValidationFormsComponent
            }]
    }, {
        path: '',
        children: [{
                path: 'wizard',
                component: _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_3__.WizardComponent
            }]
    }
];


/***/ }),

/***/ 69137:
/*!**********************************************************************!*\
  !*** ./src/app/example/forms/regularforms/regularforms.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegularFormsComponent": function() { return /* binding */ RegularFormsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 13070);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 6174);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ 40994);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84369);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ 7436);







var RegularFormsComponent = /** @class */ /*@__PURE__*/ (function () {
    function RegularFormsComponent() {
    }
    RegularFormsComponent.ɵfac = function RegularFormsComponent_Factory(t) { return new (t || RegularFormsComponent)(); };
    RegularFormsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegularFormsComponent, selectors: [["app-regularforms-cmp"]], decls: 197, vars: 0, consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-header", "card-header-rose", "card-header-icon"], [1, "card-icon"], [1, "material-icons"], [1, "card-title"], [1, "card-body"], ["method", "#", "action", "#"], [1, "example-full-width"], ["matInput", "", "placeholder", "Email Address", "type", "email"], ["matInput", "", "placeholder", "Password", "type", "password"], [1, "card-footer"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-fill", "btn-rose"], [1, "form-horizontal"], [1, "col-md-3", "col-2", "col-form-label"], [1, "col-md-9", "col-9"], ["matInput", "", "type", "email"], ["matInput", "", "type", "password"], [1, "col-md-3"], [1, "col-md-9"], [1, "col-md-12"], [1, "card-header", "card-header-rose", "card-header-text"], [1, "card-text"], ["method", "get", "action", "/", 1, "form-horizontal"], [1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["matInput", "", "type", "text"], ["matInput", "", "type", "text", "placeholder", "placeholder"], ["matInput", "", "type", "text", "placeholder", "placeholder", "value", "Disabled input here..", "disabled", ""], [1, "form-group"], [1, "form-control-static"], [1, "col-sm-10", "checkbox-radios"], ["value", "1"], ["value", "2"], [1, "example-margin", "mb-0"], [1, "col-sm-4", "col-sm-offset-1", "checkbox-radios"], ["checked", "true", 1, "example-margin", "mb-0"], ["checked", "true", "disabled", "", 1, "example-margin", "mb-0"], ["disabled", "", 1, "example-margin", "mb-0"], [1, "col-sm-5", "checkbox-radios"], ["value", "1", "name", "exampleRadios", "checked", "true"], ["value", "2", "name", "exampleRadios"], ["value", "2", "name", "exampleRadios1", "checked", "true", "disabled", ""], ["value", "2", "name", "exampleRadios1", "disabled", ""], [1, "form-check", "disabled"], [1, "form-check-label"], ["type", "radio", "name", "exampleRadios2", "value", "option1", "checked", "", "disabled", "", 1, "form-check-input"], [1, "circle"], [1, "check"], ["type", "radio", "name", "exampleRadios2", "value", "option2", "disabled", "", 1, "form-check-input"], [1, "example-full-width", "has-success"], ["matInput", "", "type", "text", "placeholder", "Success input"], [1, "form-control-feedback"], [1, "example-full-width", "has-danger"], ["matInput", "", "type", "text", "placeholder", "Error input"], ["matInput", "", "type", "text", "placeholder", ".col-md-3"], [1, "col-md-4"], ["matInput", "", "type", "text", "placeholder", ".col-md-4"], [1, "col-md-5"], ["matInput", "", "type", "text", "placeholder", ".col-md-5"]], template: function RegularFormsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "mail_outline");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Stacked Form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-checkbox");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Subscribe to newsletter");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Submit");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "contacts");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Horizontal Form");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "form", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Email");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Password");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "label", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-checkbox");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Remember me");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Sign in");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h4", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Form Elements");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "form", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "With help");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-form-field", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Password");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-form-field", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Placeholder");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-form-field", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Disabled");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-form-field", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Static control");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "hello@creative-tim.com");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "label", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Checkboxes and radios");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-checkbox");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " First Checkbox");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-checkbox");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Second Checkbox");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-radio-button", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "First Radio");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-radio-button", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Second Radio");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Inline checkboxes");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-checkbox", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " a");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-checkbox", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " b");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-checkbox", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " c");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h4", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Input Variants");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "form", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "label", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Custom Checkboxes & radios");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "mat-checkbox", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Checked");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "mat-checkbox", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Unchecked");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "mat-checkbox", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Disabled Checked");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "mat-checkbox", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Disabled Unchecked");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "mat-radio-button", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Radio is on");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "mat-radio-button", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Radio is off");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "mat-radio-button", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Disabled Radio is on");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "mat-radio-button", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Disabled Radio is off");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "label", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "input", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Disabled Radio is on ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "span", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "label", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "input", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Disabled Radio is off ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "span", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "label", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Input with success");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "mat-form-field", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "input", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "i", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "done");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "label", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Input with error");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "mat-form-field", 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "input", 57);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "i", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "clear");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "label", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Column sizing");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "mat-form-field", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "input", 58);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "mat-form-field", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "input", 60);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 61);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "mat-form-field", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "input", 62);
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
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckbox, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioButton], encapsulation: 2 });
    return RegularFormsComponent;
}());



/***/ }),

/***/ 82185:
/*!****************************************************************************************************!*\
  !*** ./src/app/example/forms/validationforms/field-error-display/field-error-display.component.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldErrorDisplayComponent": function() { return /* binding */ FieldErrorDisplayComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 61116);


function FieldErrorDisplayComponent_div_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "(error)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMsg, " ");
    }
}
var FieldErrorDisplayComponent = /** @class */ /*@__PURE__*/ (function () {
    function FieldErrorDisplayComponent() {
    }
    FieldErrorDisplayComponent.ɵfac = function FieldErrorDisplayComponent_Factory(t) { return new (t || FieldErrorDisplayComponent)(); };
    FieldErrorDisplayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FieldErrorDisplayComponent, selectors: [["app-field-error-display"]], inputs: { errorMsg: "errorMsg", displayError: "displayError" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "sr-only"], [1, "error-msg"]], template: function FieldErrorDisplayComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FieldErrorDisplayComponent_div_0_Template, 5, 1, "div", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayError);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".error-msg[_ngcontent-%COMP%] {\n  color: red;\n  display: inline-block;\n  position: absolute;\n  top: 34px;\n  \n  font-size: 75%;\n  margin-top: 2.604167em;\n  top: calc(100% - 1.72916667em);\n}\n.fix-error-icon[_ngcontent-%COMP%] {\n  top: 27px;\n}"] });
    return FieldErrorDisplayComponent;
}());



/***/ }),

/***/ 99939:
/*!*******************************************************************************!*\
  !*** ./src/app/example/forms/validationforms/password-validator.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordValidation": function() { return /* binding */ PasswordValidation; }
/* harmony export */ });
var PasswordValidation = /** @class */ /*@__PURE__*/ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password !== confirmPassword) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordValidation;
}());



/***/ }),

/***/ 53913:
/*!****************************************************************************!*\
  !*** ./src/app/example/forms/validationforms/validationforms.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyErrorStateMatcher": function() { return /* binding */ MyErrorStateMatcher; },
/* harmony export */   "ValidationFormsComponent": function() { return /* binding */ ValidationFormsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var _password_validator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-validator.component */ 99939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 13070);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 6174);
/* harmony import */ var _field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field-error-display/field-error-display.component */ 82185);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 40994);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84369);











function ValidationFormsComponent_mat_error_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter a valid email address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function ValidationFormsComponent_mat_error_16_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "required");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function ValidationFormsComponent_mat_error_43_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter a valid email address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function ValidationFormsComponent_mat_error_44_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "required");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function ValidationFormsComponent_mat_error_78_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter a valid email address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
function ValidationFormsComponent_mat_error_79_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "required");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
}
var _c0 = function (a0) { return { "has-success": a0 }; };
var MyErrorStateMatcher = /** @class */ /*@__PURE__*/ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var ValidationFormsComponent = /** @class */ /*@__PURE__*/ (function () {
    function ValidationFormsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email,
        ]);
        this.validEmailRegister = false;
        this.validConfirmPasswordRegister = false;
        this.validPasswordRegister = false;
        this.validEmailLogin = false;
        this.validPasswordLogin = false;
        this.validTextType = false;
        this.validEmailType = false;
        this.validNumberType = false;
        this.validUrlType = false;
        this.pattern = "https?://.+";
        this.validSourceType = false;
        this.validDestinationType = false;
        this.matcher = new MyErrorStateMatcher();
    }
    ValidationFormsComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    ValidationFormsComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    ValidationFormsComponent.prototype.onRegister = function () {
        if (this.register.valid) {
        }
        else {
            this.validateAllFormFields(this.register);
        }
    };
    ValidationFormsComponent.prototype.onLogin = function () {
        if (this.login.valid) {
        }
        else {
            this.validateAllFormFields(this.login);
        }
    };
    ValidationFormsComponent.prototype.onType = function () {
        if (this.type.valid) {
        }
        else {
            this.validateAllFormFields(this.type);
        }
    };
    ValidationFormsComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup) {
                _this.validateAllFormFields(control);
            }
        });
    };
    ValidationFormsComponent.prototype.ngOnInit = function () {
        this.register = this.formBuilder.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
            optionsCheckboxes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)])],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        }, {
            validator: _password_validator_component__WEBPACK_IMPORTED_MODULE_0__.PasswordValidation.MatchPassword // your validation method
        });
        this.login = this.formBuilder.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
        this.type = this.formBuilder.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            text: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
            number: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            url: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        }, {
            validator: _password_validator_component__WEBPACK_IMPORTED_MODULE_0__.PasswordValidation.MatchPassword // your validation method
        });
    };
    ValidationFormsComponent.prototype.emailValidationRegister = function (e) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(e).toLowerCase())) {
            this.validEmailRegister = true;
        }
        else {
            this.validEmailRegister = false;
        }
    };
    ValidationFormsComponent.prototype.passwordValidationRegister = function (e) {
        if (e.length > 5) {
            this.validPasswordRegister = true;
        }
        else {
            this.validPasswordRegister = false;
        }
    };
    ValidationFormsComponent.prototype.confirmPasswordValidationRegister = function (e) {
        if (this.register.controls['password'].value === e) {
            this.validConfirmPasswordRegister = true;
        }
        else {
            this.validConfirmPasswordRegister = false;
        }
    };
    ValidationFormsComponent.prototype.emailValidationLogin = function (e) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(e).toLowerCase())) {
            this.validEmailLogin = true;
        }
        else {
            this.validEmailLogin = false;
        }
    };
    ValidationFormsComponent.prototype.passwordValidationLogin = function (e) {
        if (e.length > 5) {
            this.validPasswordLogin = true;
        }
        else {
            this.validPasswordLogin = false;
        }
    };
    ValidationFormsComponent.prototype.textValidationType = function (e) {
        if (e) {
            this.validTextType = true;
        }
        else {
            this.validTextType = false;
        }
    };
    ValidationFormsComponent.prototype.emailValidationType = function (e) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(e).toLowerCase())) {
            this.validEmailType = true;
        }
        else {
            this.validEmailType = false;
        }
    };
    ValidationFormsComponent.prototype.numberValidationType = function (e) {
        if (e) {
            this.validNumberType = true;
        }
        else {
            this.validNumberType = false;
        }
    };
    ValidationFormsComponent.prototype.urlValidationType = function (e) {
        try {
            new URL(e);
            this.validUrlType = true;
        }
        catch (_) {
            this.validUrlType = false;
        }
    };
    ValidationFormsComponent.prototype.sourceValidationType = function (e) {
        if (e) {
            this.validSourceType = true;
        }
        else {
            this.validSourceType = false;
        }
    };
    ValidationFormsComponent.prototype.confirmDestinationValidationType = function (e) {
        if (this.type.controls['password'].value === e) {
            this.validDestinationType = true;
        }
        else {
            this.validDestinationType = false;
        }
    };
    ValidationFormsComponent.ɵfac = function ValidationFormsComponent_Factory(t) { return new (t || ValidationFormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
    ValidationFormsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ValidationFormsComponent, selectors: [["app-validationforms-cmp"]], decls: 120, vars: 60, consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-6"], [1, "card"], [3, "formGroup"], [1, "card-header", "card-header-rose", "card-header-icon"], [1, "card-icon"], [1, "material-icons"], [1, "card-title"], [1, "card-body"], [1, "example-full-width", 3, "ngClass"], ["type", "email", "matInput", "", "placeholder", "Email Address *", "formControlName", "email", 3, "errorStateMatcher", "ngModelChange"], [4, "ngIf"], [1, "example-full-width", "has-label", 3, "ngClass"], ["type", "password", "matInput", "", "id", "password", "placeholder", "Password *", "formControlName", "password", 3, "ngModelChange"], ["errorMsg", "Enter a valid password.", 3, "displayError"], ["type", "password", "matInput", "", "id", "confirmPassword", "placeholder", "Confirm Password *", "formControlName", "confirmPassword", 3, "ngModelChange"], ["errorMsg", "These passwords don't match. Try again!", 3, "displayError"], [1, "category", "form-category"], [1, "card-footer", "text-right"], [1, "example-margin", "mb-0"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-rose", 3, "click"], ["type", "password", "matInput", "", "placeholder", "Password *", "formControlName", "password", 3, "ngModelChange"], [1, "form-group"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-rose", "btn-fill", "btn-wd", 3, "click"], [1, "col-md-12"], [1, "form-horizontal", 3, "formGroup"], [1, "card-header", "card-header-rose", "card-header-text"], [1, "card-text"], [1, "col-sm-2", "col-form-label"], [1, "col-sm-7"], ["type", "text", "matInput", "", "id", "text", "formControlName", "text", 3, "ngModelChange"], ["errorMsg", "Required text", 3, "displayError"], [1, "col-sm-3", "label-on-right"], ["type", "email", "matInput", "", "formControlName", "email", 3, "errorStateMatcher", "ngModelChange"], ["type", "number", "name", "number", "number", "true", "matInput", "", "formControlName", "number", 3, "ngModelChange"], ["errorMsg", "Add a number!", 3, "displayError"], ["type", "text", "id", "url", "pattern", "https?://.+", "name", "url", "formControlName", "url", "matInput", "", 3, "ngModelChange"], ["errorMsg", "Must be a valid URL!", 3, "displayError"], [1, "col-sm-3"], ["type", "text", "matInput", "", "placeholder", "#idSource", "name", "idSource", "formControlName", "password", 3, "ngModelChange"], ["errorMsg", "IdSource is required", 3, "displayError"], ["type", "text", "matInput", "", "name", "idDestination", "placeholder", "#idDestination", "formControlName", "confirmPassword", 3, "ngModelChange"], ["errorMsg", " IdSource mismatch!", 3, "displayError"], [1, "col-sm-4", "label-on-right"], [1, "card-footer", "text-center"], ["mat-raised-button", "", "type", "submit", 1, "btn", "btn-rose", "btn-fill", 3, "click"]], template: function ValidationFormsComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "i", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "mail_outline");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h4", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Register Form");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ValidationFormsComponent_Template_input_ngModelChange_14_listener($event) { return ctx.emailValidationRegister($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ValidationFormsComponent_mat_error_15_Template, 2, 0, "mat-error", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ValidationFormsComponent_mat_error_16_Template, 4, 0, "mat-error", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-form-field", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ValidationFormsComponent_Template_input_ngModelChange_18_listener($event) { return ctx.passwordValidationRegister($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "app-field-error-display", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-form-field", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ValidationFormsComponent_Template_input_ngModelChange_21_listener($event) { return ctx.confirmPasswordValidationRegister($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "app-field-error-display", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "* Required fields");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-checkbox", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Subscribe to newsletter");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ValidationFormsComponent_Template_button_click_29_listener() { return ctx.onRegister(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Register");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "form", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "i", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "contacts");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h4", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Login Form");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mat-form-field", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "input", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ValidationFormsComponent_Template_input_ngModelChange_42_listener($event) { return ctx.emailValidationLogin($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, ValidationFormsComponent_mat_error_43_Template, 2, 0, "mat-error", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, ValidationFormsComponent_mat_error_44_Template, 4, 0, "mat-error", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-form-field", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "input", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ValidationFormsComponent_Template_input_ngModelChange_46_listener($event) { return ctx.passwordValidationLogin($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "app-field-error-display", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "* Required fields");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ValidationFormsComponent_Template_button_click_52_listener() { return ctx.onLogin(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Login");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "form", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "h4", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Type Validation");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "label", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Required Text");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "mat-form-field", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "input", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ValidationFormsComponent_Template_input_ngModelChange_67_listener($event) { return ctx.textValidationType($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "app-field-error-display", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "label", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "code");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "required");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "label", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Email");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "mat-form-field", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "input", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ValidationFormsComponent_Template_input_ngModelChange_77_listener($event) { return ctx.emailValidationType($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](78, ValidationFormsComponent_mat_error_78_Template, 2, 0, "mat-error", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](79, ValidationFormsComponent_mat_error_79_Template, 4, 0, "mat-error", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "label", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "code");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "email=\"true\"");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "label", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Number");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "mat-form-field", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "input", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ValidationFormsComponent_Template_input_ngModelChange_88_listener($event) { return ctx.numberValidationType($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "app-field-error-display", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "label", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "code");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "number=\"true\"");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "label", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Url");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "mat-form-field", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "input", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ValidationFormsComponent_Template_input_ngModelChange_98_listener($event) { return ctx.urlValidationType($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "app-field-error-display", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "label", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "code");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "url=\"true\"");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "label", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Equal to");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "mat-form-field", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "input", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ValidationFormsComponent_Template_input_ngModelChange_108_listener($event) { return ctx.sourceValidationType($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "app-field-error-display", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "mat-form-field", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "input", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ValidationFormsComponent_Template_input_ngModelChange_112_listener($event) { return ctx.confirmDestinationValidationType($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "app-field-error-display", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "label", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "code");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "equalTo=\"#idSource\"");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "button", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ValidationFormsComponent_Template_button_click_118_listener() { return ctx.onType(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Validate Inputs");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.register);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](38, _c0, ctx.validEmailRegister === true));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("required"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](40, _c0, ctx.validPasswordRegister === true));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayError", ctx.isFieldValid(ctx.register, "password"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](42, _c0, ctx.validConfirmPasswordRegister === true))("ngClass", ctx.displayFieldCss(ctx.register, "password"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayError", ctx.isFieldValid(ctx.register, "confirmPassword"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.login);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](44, _c0, ctx.validEmailLogin === true));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("required"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](46, _c0, ctx.validPasswordLogin === true))("ngClass", ctx.displayFieldCss(ctx.login, "password"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayError", ctx.isFieldValid(ctx.login, "password"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.type);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](48, _c0, ctx.validTextType === true))("ngClass", ctx.displayFieldCss(ctx.type, "text"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayError", ctx.isFieldValid(ctx.type, "text"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](50, _c0, ctx.validEmailType === true));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.emailFormControl.hasError("required"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](52, _c0, ctx.validNumberType === true))("ngClass", ctx.displayFieldCss(ctx.type, "number"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayError", ctx.isFieldValid(ctx.type, "number"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](54, _c0, ctx.validUrlType === true))("ngClass", ctx.displayFieldCss(ctx.type, "url"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayError", ctx.isFieldValid(ctx.type, "url"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](56, _c0, ctx.validSourceType === true))("ngClass", ctx.displayFieldCss(ctx.type, "password"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayError", ctx.isFieldValid(ctx.type, "password"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](58, _c0, ctx.validDestinationType === true))("ngClass", ctx.displayFieldCss(ctx.type, "confirmPassword"));
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("displayError", ctx.isFieldValid(ctx.type, "confirmPassword"));
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _field_error_display_field_error_display_component__WEBPACK_IMPORTED_MODULE_1__.FieldErrorDisplayComponent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError], encapsulation: 2 });
    return ValidationFormsComponent;
}());



/***/ }),

/***/ 58173:
/*!**********************************************************!*\
  !*** ./src/app/example/forms/wizard/wizard.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyErrorStateMatcher": function() { return /* binding */ MyErrorStateMatcher; },
/* harmony export */   "WizardComponent": function() { return /* binding */ WizardComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 13070);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 6174);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 13841);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 56602);
// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation










function WizardComponent_mat_option_103_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var city_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r1.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r1.viewValue, " ");
    }
}
var MyErrorStateMatcher = /** @class */ /*@__PURE__*/ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var WizardComponent = /** @class */ /*@__PURE__*/ (function () {
    function WizardComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.cities = [
            { value: 'paris-0', viewValue: 'Paris' },
            { value: 'miami-1', viewValue: 'Miami' },
            { value: 'bucharest-2', viewValue: 'Bucharest' },
            { value: 'new-york-3', viewValue: 'New York' },
            { value: 'london-4', viewValue: 'London' },
            { value: 'barcelona-5', viewValue: 'Barcelona' },
            { value: 'moscow-6', viewValue: 'Moscow' },
        ];
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    WizardComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    WizardComponent.prototype.displayFieldCss = function (form, field) {
        return {
            'has-error': this.isFieldValid(form, field),
            'has-feedback': this.isFieldValid(form, field)
        };
    };
    WizardComponent.prototype.ngOnInit = function () {
        var elemMainPanel = document.querySelector('.main-panel');
        this.type = this.formBuilder.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        });
        // Code for the Validator
        var $validator = $('.card-wizard form').validate({
            rules: {
                firstname: {
                    required: true,
                    minlength: 3
                },
                lastname: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    minlength: 3,
                }
            },
            highlight: function (element) {
                $(element).closest('.form-group').removeClass('has-success').addClass('has-danger');
            },
            success: function (element) {
                $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
            },
            errorPlacement: function (error, element) {
                $(element).append(error);
            }
        });
        // Wizard Initialization
        $('.card-wizard').bootstrapWizard({
            'tabClass': 'nav nav-pills',
            'nextSelector': '.btn-next',
            'previousSelector': '.btn-previous',
            onNext: function (tab, navigation, index) {
                var $valid = $('.card-wizard form').valid();
                if (!$valid) {
                    $validator.focusInvalid();
                    return false;
                }
            },
            onInit: function (tab, navigation, index) {
                // check number of tabs and fill the entire row
                var $total = navigation.find('li').length;
                var $wizard = navigation.closest('.card-wizard');
                var $first_li = navigation.find('li:first-child a').html();
                var $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
                $('.card-wizard .wizard-navigation').append($moving_div);
                $total = $wizard.find('.nav li').length;
                var $li_width = 100 / $total;
                var total_steps = $wizard.find('.nav li').length;
                var move_distance = $wizard.width() / total_steps;
                var index_temp = index;
                var vertical_level = 0;
                var mobile_device = $(document).width() < 600 && $total > 3;
                if (mobile_device) {
                    move_distance = $wizard.width() / 2;
                    index_temp = index % 2;
                    $li_width = 50;
                }
                $wizard.find('.nav li').css('width', $li_width + '%');
                var step_width = move_distance;
                move_distance = move_distance * index_temp;
                var $current = index + 1;
                if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
                    move_distance -= 8;
                }
                else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
                    move_distance += 8;
                }
                if (mobile_device) {
                    var x = index / 2;
                    vertical_level = parseInt(x);
                    vertical_level = vertical_level * 38;
                }
                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
                $('.moving-tab').css('transition', 'transform 0s');
            },
            onTabClick: function (tab, navigation, index) {
                var $valid = $('.card-wizard form').valid();
                if (!$valid) {
                    return false;
                }
                else {
                    return true;
                }
            },
            onTabShow: function (tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index + 1;
                elemMainPanel.scrollTop = 0;
                var $wizard = navigation.closest('.card-wizard');
                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total) {
                    $($wizard).find('.btn-next').hide();
                    $($wizard).find('.btn-finish').show();
                }
                else {
                    $($wizard).find('.btn-next').show();
                    $($wizard).find('.btn-finish').hide();
                }
                var button_text = navigation.find('li:nth-child(' + $current + ') a').html();
                setTimeout(function () {
                    $('.moving-tab').text(button_text);
                }, 150);
                var checkbox = $('.footer-checkbox');
                if (index !== 0) {
                    $(checkbox).css({
                        'opacity': '0',
                        'visibility': 'hidden',
                        'position': 'absolute'
                    });
                }
                else {
                    $(checkbox).css({
                        'opacity': '1',
                        'visibility': 'visible'
                    });
                }
                $total = $wizard.find('.nav li').length;
                var $li_width = 100 / $total;
                var total_steps = $wizard.find('.nav li').length;
                var move_distance = $wizard.width() / total_steps;
                var index_temp = index;
                var vertical_level = 0;
                var mobile_device = $(document).width() < 600 && $total > 3;
                if (mobile_device) {
                    move_distance = $wizard.width() / 2;
                    index_temp = index % 2;
                    $li_width = 50;
                }
                $wizard.find('.nav li').css('width', $li_width + '%');
                var step_width = move_distance;
                move_distance = move_distance * index_temp;
                $current = index + 1;
                if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
                    move_distance -= 8;
                }
                else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
                    move_distance += 8;
                }
                if (mobile_device) {
                    var x = index / 2;
                    vertical_level = parseInt(x);
                    vertical_level = vertical_level * 38;
                }
                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                });
            }
        });
        // Prepare the preview for profile picture
        $('#wizard-picture').change(function () {
            var input = $(this);
            if (input[0].files && input[0].files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
                };
                reader.readAsDataURL(input[0].files[0]);
            }
        });
        $('[data-toggle="wizard-radio"]').click(function () {
            var wizard = $(this).closest('.card-wizard');
            wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
            $(this).addClass('active');
            $(wizard).find('[type="radio"]').removeAttr('checked');
            $(this).find('[type="radio"]').attr('checked', 'true');
        });
        $('[data-toggle="wizard-checkbox"]').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).find('[type="checkbox"]').removeAttr('checked');
            }
            else {
                $(this).addClass('active');
                $(this).find('[type="checkbox"]').attr('checked', 'true');
            }
        });
        $('.set-full-height').css('height', 'auto');
    };
    WizardComponent.prototype.ngOnChanges = function (changes) {
        var input = $(this);
        if (input[0].files && input[0].files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            };
            reader.readAsDataURL(input[0].files[0]);
        }
    };
    WizardComponent.prototype.ngAfterViewInit = function () {
        $(window).resize(function () {
            $('.card-wizard').each(function () {
                var _this = this;
                setTimeout(function () {
                    var $wizard = $(_this);
                    var index = $wizard.bootstrapWizard('currentIndex');
                    var $total = $wizard.find('.nav li').length;
                    var $li_width = 100 / $total;
                    var total_steps = $wizard.find('.nav li').length;
                    var move_distance = $wizard.width() / total_steps;
                    var index_temp = index;
                    var vertical_level = 0;
                    var mobile_device = $(document).width() < 600 && $total > 3;
                    if (mobile_device) {
                        move_distance = $wizard.width() / 2;
                        index_temp = index % 2;
                        $li_width = 50;
                    }
                    $wizard.find('.nav li').css('width', $li_width + '%');
                    var step_width = move_distance;
                    move_distance = move_distance * index_temp;
                    var $current = index + 1;
                    if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
                        move_distance -= 8;
                    }
                    else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
                        move_distance += 8;
                    }
                    if (mobile_device) {
                        var x = index / 2;
                        vertical_level = parseInt(x);
                        vertical_level = vertical_level * 38;
                    }
                    $wizard.find('.moving-tab').css('width', step_width);
                    $('.moving-tab').css({
                        'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
                        'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
                    });
                    $('.moving-tab').css({
                        'transition': 'transform 0s'
                    });
                }, 500);
            });
        });
    };
    WizardComponent.ɵfac = function WizardComponent_Factory(t) { return new (t || WizardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
    WizardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WizardComponent, selectors: [["app-wizard-cmp"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 111, vars: 5, consts: [[1, "main-content"], [1, "container-fluid"], [1, "row"], [1, "col-md-8", "mr-auto", "ml-auto"], [1, "wizard-container"], ["data-color", "rose", "id", "wizardProfile", 1, "card", "card-wizard"], ["action", "", "method", "", 3, "formGroup"], [1, "card-header", "text-center"], [1, "card-title"], [1, "card-description"], [1, "wizard-navigation"], [1, "nav", "nav-pills"], [1, "nav-item"], ["href", "#about", "data-toggle", "tab", "role", "tab", 1, "nav-link", "active"], ["href", "#account", "data-toggle", "tab", "role", "tab", 1, "nav-link"], ["href", "#address", "data-toggle", "tab", "role", "tab", 1, "nav-link"], [1, "card-body"], [1, "tab-content"], ["id", "about", 1, "tab-pane", "active"], [1, "info-text"], [1, "row", "justify-content-center"], [1, "col-sm-4"], [1, "picture-container"], [1, "picture"], ["src", "./assets/img/default-avatar.png", "id", "wizardPicturePreview", "title", "", 1, "picture-src"], ["type", "file", "id", "wizard-picture"], [1, "description"], [1, "col-sm-6"], [1, "input-group", "form-control-lg"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "material-icons"], [1, "example-full-width", "has-label", 3, "ngClass"], ["type", "text", "name", "firstname", "matInput", "", "id", "text", "placeholder", "First Name", "formControlName", "firstName"], ["type", "text", "name", "lastname", "matInput", "", "id", "text", "placeholder", "last Name", "formControlName", "lastName"], [1, "col-lg-10", "mt-3"], [1, "example-full-width"], ["matInput", "", "placeholder", "Email (required)", "type", "email", "id", "exampleemalil", "name", "email", 3, "formControl"], ["id", "account", 1, "tab-pane"], [1, "col-lg-10"], ["data-toggle", "wizard-checkbox", 1, "choice"], ["type", "checkbox", "name", "jobb", "value", "Design"], [1, "icon"], [1, "fa", "fa-pencil"], ["type", "checkbox", "name", "jobb", "value", "Code"], [1, "fa", "fa-terminal"], ["type", "checkbox", "name", "jobb", "value", "Develop"], [1, "fa", "fa-laptop"], ["id", "address", 1, "tab-pane"], [1, "col-sm-12"], [1, "col-sm-7"], ["matInput", "", "type", "text", "placeholder", "Street Name"], [1, "col-sm-3"], ["matInput", "", "type", "text", "placeholder", "Street No."], [1, "col-sm-5"], ["matInput", "", "type", "text", "placeholder", "City"], ["placeholder", "Single City", "name", "city"], [3, "value", 4, "ngFor", "ngForOf"], [1, "card-footer"], [1, "mr-auto"], ["type", "button", "name", "previous", "value", "Previous", 1, "btn", "btn-previous", "btn-fill", "btn-default", "btn-wd", "disabled"], [1, "ml-auto"], ["type", "button", "name", "next", "value", "Next", 1, "btn", "btn-next", "btn-fill", "btn-rose", "btn-wd"], ["type", "button", "name", "finish", "value", "Finish", 1, "btn", "btn-finish", "btn-fill", "btn-rose", "btn-wd", 2, "display", "none"], [1, "clearfix"], [3, "value"]], template: function WizardComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Build Your Profile ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "This information will let us know more about you.");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " About ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Account ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Address ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Let's start with the basic information (with validation)");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h6", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Choose Picture");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "i", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "face");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 33);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "i", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "record_voice_over");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 32);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 34);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 35);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "i", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "email");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 37);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 38);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h5", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " What are you doing? (checkboxes) ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 39);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 41);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 43);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h6");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Design");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 44);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h6");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Code");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 40);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 46);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 42);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 47);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h6");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Develop");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 48);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 49);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h5", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Are you living in a nice area? ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 50);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-form-field", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "input", 51);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 52);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-form-field", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "input", 53);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-form-field", 36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 55);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 54);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-select", 56);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, WizardComponent_mat_option_103_Template, 2, 2, "mat-option", 57);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 58);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 59);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 60);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 61);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 62);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "input", 63);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "div", 64);
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
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.type);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.displayFieldCss(ctx.type, "firstName"));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.displayFieldCss(ctx.type, "lastName"));
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.emailFormControl);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cities);
            }
        }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption], styles: [""] });
    return WizardComponent;
}());



/***/ }),

/***/ 86506:
/*!*******************************************************************************!*\
  !*** ./node_modules/ng2-material-dropdown/fesm2020/ng2-material-dropdown.mjs ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownStateService": function() { return /* binding */ DropdownStateService; },
/* harmony export */   "Ng2Dropdown": function() { return /* binding */ Ng2Dropdown; },
/* harmony export */   "Ng2DropdownButton": function() { return /* binding */ Ng2DropdownButton; },
/* harmony export */   "Ng2DropdownMenu": function() { return /* binding */ Ng2DropdownMenu; },
/* harmony export */   "Ng2DropdownModule": function() { return /* binding */ Ng2DropdownModule; },
/* harmony export */   "Ng2MenuItem": function() { return /* binding */ Ng2MenuItem; }
/* harmony export */ });
/* harmony import */ var C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ 5587);
/* harmony import */ var C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 31112);
/* harmony import */ var C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 41998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 99713);




var _ACTIONS;







function Ng2DropdownButton_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

var _c0 = ["*"];

function Ng2DropdownMenu_div_3_Template(rf, ctx) {
  if (rf & 1) {
    var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Ng2DropdownMenu_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return ctx_r1.hide();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

var _c1 = [[["ng2-dropdown-button"]], [["ng2-dropdown-menu"]]];
var _c2 = ["ng2-dropdown-button", "ng2-dropdown-menu"];

var Ng2DropdownButton = /*@__PURE__*/function () {
  var Ng2DropdownButton = /*#__PURE__*/function () {
    function Ng2DropdownButton(element) {
      (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Ng2DropdownButton);

      this.element = element;
      this.onMenuToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
      this.showCaret = true;
    }
    /**
     * @name toggleMenu
     * @desc emits event to toggle menu
     */


    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Ng2DropdownButton, [{
      key: "toggleMenu",
      value: function toggleMenu() {
        this.onMenuToggled.emit(true);
      }
      /**
       * @name getPosition
       * @desc returns position of the button
       */

    }, {
      key: "getPosition",
      value: function getPosition() {
        return this.element.nativeElement.getBoundingClientRect();
      }
    }]);

    return Ng2DropdownButton;
  }();

  Ng2DropdownButton.ɵfac = function Ng2DropdownButton_Factory(t) {
    return new (t || Ng2DropdownButton)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef));
  };

  Ng2DropdownButton.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: Ng2DropdownButton,
    selectors: [["ng2-dropdown-button"]],
    inputs: {
      showCaret: "showCaret"
    },
    outputs: {
      onMenuToggled: "onMenuToggled"
    },
    ngContentSelectors: _c0,
    decls: 4,
    vars: 1,
    consts: [["type", "button", "tabindex", "0s", 1, "ng2-dropdown-button", 3, "click"], [1, "ng2-dropdown-button__label"], ["class", "ng2-dropdown-button__caret", 4, "ngIf"], [1, "ng2-dropdown-button__caret"], ["enable-background", "new 0 0 32 32", "height", "16px", "id", "\u0421\u043B\u043E\u0439_1", "version", "1.1", "viewBox", "0 0 32 32", "width", "16px", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["d", "M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z", "fill", "#121313", "id", "Expand_More"]],
    template: function Ng2DropdownButton_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Ng2DropdownButton_Template_button_click_0_listener() {
          return ctx.toggleMenu();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, Ng2DropdownButton_span_3_Template, 9, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showCaret);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
    styles: [".ng2-dropdown-button[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:flex;flex-direction:row;max-width:150px}.ng2-dropdown-button[_ngcontent-%COMP%]:hover{color:#222}.ng2-dropdown-button[_ngcontent-%COMP%]:active, .ng2-dropdown-button[_ngcontent-%COMP%]:focus{color:#222;border-bottom:2px solid #2196F3}.ng2-dropdown-button__label[_ngcontent-%COMP%]{flex:1 1 95%}.ng2-dropdown-button__caret[_ngcontent-%COMP%]{width:12px;height:12px;display:flex;flex:1 1 6%}.ng2-dropdown-button--icon[_nghost-%COMP%]   .ng2-dropdown-button[_ngcontent-%COMP%], .ng2-dropdown-button--icon   [_nghost-%COMP%]   .ng2-dropdown-button[_ngcontent-%COMP%]{border:none;min-width:40px;width:40px;border-radius:100%;transition:all .2s;text-align:center;height:40px;padding:.5em}.ng2-dropdown-button--icon[_nghost-%COMP%]   .ng2-dropdown-button[_ngcontent-%COMP%]:active, .ng2-dropdown-button--icon   [_nghost-%COMP%]   .ng2-dropdown-button[_ngcontent-%COMP%]:active{background:rgba(0,0,0,.2)}"]
  });
  return Ng2DropdownButton;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](Ng2DropdownButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'ng2-dropdown-button',
      template: "<button class='ng2-dropdown-button' type=\"button\" (click)=\"toggleMenu()\" tabindex=\"0s\">\n    <span class=\"ng2-dropdown-button__label\">\n        <ng-content></ng-content>\n    </span>\n\n    <span class=\"ng2-dropdown-button__caret\" *ngIf=\"showCaret\">\n        <svg enable-background=\"new 0 0 32 32\" height=\"16px\" id=\"\u0421\u043B\u043E\u0439_1\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"16px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z\" fill=\"#121313\" id=\"Expand_More\"/><g/><g/><g/><g/><g/><g/></svg>\n    </span>\n</button>\n",
      styles: [".ng2-dropdown-button{font-family:Roboto,Helvetica Neue,Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:flex;flex-direction:row;max-width:150px}.ng2-dropdown-button:hover{color:#222}.ng2-dropdown-button:active,.ng2-dropdown-button:focus{color:#222;border-bottom:2px solid #2196F3}.ng2-dropdown-button__label{flex:1 1 95%}.ng2-dropdown-button__caret{width:12px;height:12px;display:flex;flex:1 1 6%}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button{border:none;min-width:40px;width:40px;border-radius:100%;transition:all .2s;text-align:center;height:40px;padding:.5em}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active{background:rgba(0,0,0,.2)}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }];
  }, {
    onMenuToggled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    showCaret: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();

var KEYS = {
  BACKSPACE: 9,
  PREV: 38,
  NEXT: 40,
  ENTER: 13,
  ESCAPE: 27
};
/**
 * @name onSwitchNext
 * @param index
 * @param items
 * @param state
 */

var onSwitchNext = function onSwitchNext(index, items, state) {
  if (index < items.length - 1) {
    state.select(items[index + 1], true);
  }
};
/**
 * @name onSwitchPrev
 * @param index
 * @param items
 * @param state
 */


var onSwitchPrev = function onSwitchPrev(index, items, state) {
  if (index > 0) {
    state.select(items[index - 1], true);
  }
};
/**
 * @name onBackspace
 * @param index
 * @param items
 * @param state
 */


var onBackspace = function onBackspace(index, items, state) {
  if (index < items.length - 1) {
    state.select(items[index + 1], true);
  } else {
    state.select(items[0], true);
  }
};

function onEscape() {
  this.hide();
}

;
/**
 * @name onItemClicked
 * @param index
 * @param items
 * @param state
 */

var onItemClicked = function onItemClicked(index, items, state) {
  return state.selectedItem ? state.selectedItem.click() : undefined;
};

var ACTIONS = (_ACTIONS = {}, (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ACTIONS, KEYS.BACKSPACE, onBackspace), (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ACTIONS, KEYS.PREV, onSwitchPrev), (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ACTIONS, KEYS.NEXT, onSwitchNext), (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ACTIONS, KEYS.ENTER, onItemClicked), (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_ACTIONS, KEYS.ESCAPE, onEscape), _ACTIONS);

function arrowKeysHandler(event) {
  if ([38, 40].indexOf(event.keyCode) > -1) {
    event.preventDefault();
  }
}

var Ng2DropdownState = /*#__PURE__*/function () {
  function Ng2DropdownState() {
    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Ng2DropdownState);

    this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.onItemDestroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
  }
  /**
   * @name selectedItem
   * @desc getter for _selectedItem
   */


  (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Ng2DropdownState, [{
    key: "selectedItem",
    get: function get() {
      return this._selectedItem;
    }
    /**
     * @name selects a menu item and emits event
     * @param item
     */

  }, {
    key: "select",
    value: function select(item) {
      var dispatchEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this._selectedItem = item;

      if (!dispatchEvent || !item) {
        return;
      }

      item.focus();
      this.onItemSelected.emit(item);
    }
    /**
     * @name unselect
     * @desc sets _selectedItem as undefined
     */

  }, {
    key: "unselect",
    value: function unselect() {
      this._selectedItem = undefined;
    }
  }]);

  return Ng2DropdownState;
}();

var DropdownStateService = /*@__PURE__*/function () {
  var DropdownStateService = /*#__PURE__*/(0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(function DropdownStateService() {
    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, DropdownStateService);

    this.menuState = {
      isVisible: false,
      toString: function toString() {
        return this.isVisible === true ? 'visible' : 'hidden';
      }
    };
    this.dropdownState = new Ng2DropdownState();
  });

  DropdownStateService.ɵfac = function DropdownStateService_Factory(t) {
    return new (t || DropdownStateService)();
  };

  DropdownStateService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: DropdownStateService,
    factory: DropdownStateService.ɵfac
  });
  return DropdownStateService;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DropdownStateService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable
  }], null, null);
})();

var Ng2MenuItem = /*@__PURE__*/function () {
  var Ng2MenuItem = /*#__PURE__*/function () {
    function Ng2MenuItem(state, element) {
      (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Ng2MenuItem);

      this.state = state;
      this.element = element;
      /**
       * @preventClose
       * @desc if true, clicking on the item won't close the dropdown
       */

      this.preventClose = false;
    }

    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Ng2MenuItem, [{
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this.state.dropdownState.onItemDestroyed.emit(this);
      }
      /**
       * @name isSelected
       * @desc returns current selected item
       */

    }, {
      key: "isSelected",
      get: function get() {
        return this === this.state.dropdownState.selectedItem;
      }
      /**
       * @name click
       * @desc emits select event
       */

    }, {
      key: "select",
      value: function select($event) {
        this.state.dropdownState.select(this, true);

        if ($event) {
          $event.stopPropagation();
          $event.preventDefault();
        }
      }
      /**
       * @name click
       * @desc emits click event
       */

    }, {
      key: "click",
      value: function click() {
        this.state.dropdownState.onItemClicked.emit(this);
      }
      /**
       * @name focus
       */

    }, {
      key: "focus",
      value: function focus() {
        this.element.nativeElement.children[0].focus();
      }
    }]);

    return Ng2MenuItem;
  }();

  Ng2MenuItem.ɵfac = function Ng2MenuItem_Factory(t) {
    return new (t || Ng2MenuItem)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DropdownStateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef));
  };

  Ng2MenuItem.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: Ng2MenuItem,
    selectors: [["ng2-menu-item"]],
    inputs: {
      preventClose: "preventClose",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 2,
    vars: 2,
    consts: [["role", "button", "tabindex", "0", 1, "ng2-menu-item", 3, "keydown.enter", "click", "mouseover"]],
    template: function Ng2MenuItem_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.enter", function Ng2MenuItem_Template_div_keydown_enter_0_listener() {
          return ctx.click();
        })("click", function Ng2MenuItem_Template_div_click_0_listener() {
          return ctx.click();
        })("mouseover", function Ng2MenuItem_Template_div_mouseover_0_listener() {
          return ctx.select();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ng2-menu-item--selected", ctx.isSelected);
      }
    },
    styles: [".ng2-menu-item[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,Helvetica,Arial;background:#fff;color:#000000de;cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng2-menu-item--selected[_ngcontent-%COMP%]{background:rgba(158,158,158,.2);outline:0}.ng2-menu-item[_ngcontent-%COMP%]:focus{outline:0}.ng2-menu-item[_ngcontent-%COMP%]:active{background:rgba(158,158,158,.4)}ng2-menu-item[_nghost-%COMP%]     [ng2-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:#00000070}"]
  });
  return Ng2MenuItem;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](Ng2MenuItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'ng2-menu-item',
      template: "\n        <div\n            class=\"ng2-menu-item\"\n            role=\"button\"\n            tabindex=\"0\"\n            [class.ng2-menu-item--selected]=\"isSelected\"\n            (keydown.enter)=\"click()\"\n            (click)=\"click()\"\n            (mouseover)=\"select()\"\n        >\n            <ng-content></ng-content>\n        </div>\n    ",
      styles: [".ng2-menu-item{font-family:Roboto,Helvetica Neue,Helvetica,Arial;background:#fff;color:#000000de;cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng2-menu-item--selected{background:rgba(158,158,158,.2);outline:0}.ng2-menu-item:focus{outline:0}.ng2-menu-item:active{background:rgba(158,158,158,.4)}:host(ng2-menu-item) ::ng-deep [ng2-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:#00000070}\n"]
    }]
  }], function () {
    return [{
      type: DropdownStateService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }];
  }, {
    preventClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();

var Ng2DropdownMenu = /*@__PURE__*/function () {
  var Ng2DropdownMenu = /*#__PURE__*/function () {
    function Ng2DropdownMenu(dropdownState, element, renderer) {
      (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Ng2DropdownMenu);

      this.dropdownState = dropdownState;
      this.element = element;
      this.renderer = renderer;
      /**
       * @name width
       */

      this.width = 4;
      /**
       * @description if set to true, the first element of the dropdown will be automatically focused
       * @name focusFirstElement
       */

      this.focusFirstElement = true;
      /**
       * @name appendToBody
       */

      this.appendToBody = true;
      /**
       * @name zIndex
       */

      this.zIndex = 1000;
      this.listeners = {
        arrowHandler: undefined,
        handleKeypress: undefined
      };
    }
    /**
     * @name show
     * @shows menu and selects first item
     */


    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Ng2DropdownMenu, [{
      key: "show",
      value: function show(position) {
        var dynamic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var dc = typeof document !== 'undefined' ? document : undefined;
        var wd = typeof window !== 'undefined' ? window : undefined;

        if (!this.dropdownState.menuState.isVisible) {
          // setting handlers
          this.listeners.handleKeypress = this.renderer.listen(dc.body, 'keydown', this.handleKeypress.bind(this));
          this.listeners.arrowHandler = this.renderer.listen(wd, 'keydown', arrowKeysHandler);
        } // update state


        this.dropdownState.menuState.isVisible = true;

        if (position) {
          this.updatePosition(position, dynamic);
        }
      }
      /**
       * @name hide
       * @desc hides menu
       */

    }, {
      key: "hide",
      value: function hide() {
        this.dropdownState.menuState.isVisible = false; // reset selected item state

        this.dropdownState.dropdownState.unselect(); // call function to unlisten

        this.listeners.arrowHandler && this.listeners.arrowHandler();
        this.listeners.handleKeypress && this.listeners.handleKeypress();
      }
      /**
       * @name updatePosition
       * @desc updates the menu position every time it is toggled
       * @param position {ClientRect}
       * @param dynamic {boolean}
       */

    }, {
      key: "updatePosition",
      value: function updatePosition(position, dynamic) {
        this.position = position;
        this.updateOnChange(dynamic);
      }
      /**
       * @name handleKeypress
       * @desc executes functions on keyPress based on the key pressed
       * @param $event
       */

    }, {
      key: "handleKeypress",
      value: function handleKeypress($event) {
        var key = $event.keyCode;
        var items = this.items.toArray();
        var index = items.indexOf(this.dropdownState.dropdownState.selectedItem);

        if (!ACTIONS.hasOwnProperty(key)) {
          return;
        }

        ACTIONS[key].call(this, index, items, this.dropdownState.dropdownState);
      }
      /**
       * @name getMenuElement
       */

    }, {
      key: "getMenuElement",
      value: function getMenuElement() {
        return this.element.nativeElement.children[0];
      }
      /**
       * @name calcPositionOffset
       * @param position
       */

    }, {
      key: "calcPositionOffset",
      value: function calcPositionOffset(position) {
        var wd = typeof window !== 'undefined' ? window : undefined;
        var dc = typeof document !== 'undefined' ? document : undefined;

        if (!wd || !dc || !position) {
          return;
        }

        var element = this.getMenuElement();
        var supportPageOffset = wd.pageXOffset !== undefined;
        var isCSS1Compat = (dc.compatMode || '') === 'CSS1Compat';
        var x = supportPageOffset ? wd.pageXOffset : isCSS1Compat ? dc.documentElement.scrollLeft : dc.body.scrollLeft;
        var y = supportPageOffset ? wd.pageYOffset : isCSS1Compat ? dc.documentElement.scrollTop : dc.body.scrollTop;

        var _this$applyOffset = this.applyOffset("".concat(position.top + (this.appendToBody ? y - 15 : 0), "px"), "".concat(position.left + x - 5, "px")),
            top = _this$applyOffset.top,
            left = _this$applyOffset.left;

        var clientWidth = element.clientWidth;
        var clientHeight = element.clientHeight;
        var marginFromBottom = parseInt(top) + clientHeight + (this.appendToBody ? 0 : y - 15);
        var marginFromRight = parseInt(left) + clientWidth;
        var windowScrollHeight = wd.innerHeight + wd.scrollY;
        var windowScrollWidth = wd.innerWidth + wd.scrollX;

        if (marginFromBottom >= windowScrollHeight) {
          top = "".concat(parseInt(top.replace('px', '')) - clientHeight, "px");
        }

        if (marginFromRight >= windowScrollWidth) {
          var marginRight = marginFromRight - windowScrollWidth + 30;
          left = "".concat(parseInt(left.replace('px', '')) - marginRight, "px");
        }

        return {
          top: top,
          left: left
        };
      }
    }, {
      key: "applyOffset",
      value: function applyOffset(top, left) {
        if (!this.offset) {
          return {
            top: top,
            left: left
          };
        }

        var offset = this.offset.split(' ');

        if (!offset[1]) {
          offset[1] = '0';
        }

        top = "".concat(parseInt(top.replace('px', '')) + parseInt(offset[0]), "px");
        left = "".concat(parseInt(left.replace('px', '')) + parseInt(offset[1]), "px");
        return {
          top: top,
          left: left
        };
      }
    }, {
      key: "ngOnInit",
      value: function ngOnInit() {
        var dc = typeof document !== 'undefined' ? document : undefined;

        if (this.appendToBody) {
          // append menu element to the body
          dc.body.appendChild(this.element.nativeElement);
        }
      }
    }, {
      key: "updateOnChange",
      value: function updateOnChange() {
        var dynamic = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var element = this.getMenuElement();
        var position = this.calcPositionOffset(this.position);

        if (position) {
          this.renderer.setStyle(element, 'top', position.top.toString());
          this.renderer.setStyle(element, 'left', position.left.toString());
        } // select first item unless user disabled this option


        if (this.focusFirstElement && this.items.first && !this.dropdownState.dropdownState.selectedItem) {
          this.dropdownState.dropdownState.select(this.items.first, false);
        }
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        var elem = this.element.nativeElement;
        elem.parentNode.removeChild(elem);

        if (this.listeners.handleKeypress) {
          this.listeners.handleKeypress();
        }
      }
    }]);

    return Ng2DropdownMenu;
  }();

  Ng2DropdownMenu.ɵfac = function Ng2DropdownMenu_Factory(t) {
    return new (t || Ng2DropdownMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DropdownStateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2));
  };

  Ng2DropdownMenu.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: Ng2DropdownMenu,
    selectors: [["ng2-dropdown-menu"]],
    contentQueries: function Ng2DropdownMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, Ng2MenuItem, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.items = _t);
      }
    },
    inputs: {
      width: "width",
      focusFirstElement: "focusFirstElement",
      offset: "offset",
      appendToBody: "appendToBody",
      zIndex: "zIndex"
    },
    ngContentSelectors: _c0,
    decls: 4,
    vars: 12,
    consts: [[1, "ng2-dropdown-menu__options-container"], ["class", "ng2-dropdown-backdrop", 3, "click", 4, "ngIf"], [1, "ng2-dropdown-backdrop", 3, "click"]],
    template: function Ng2DropdownMenu_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, Ng2DropdownMenu_div_3_Template, 1, 0, "div", 1);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("ng2-dropdown-menu ng2-dropdown-menu---width--", ctx.width, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("z-index", ctx.zIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ng2-dropdown-menu--inside-element", !ctx.appendToBody)("ng2-dropdown-menu--open", ctx.dropdownState.menuState.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fade", ctx.dropdownState.menuState.toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@opacity", ctx.dropdownState.menuState.toString());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dropdownState.menuState.isVisible);
      }
    },
    directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
    styles: ["[_nghost-%COMP%]{display:block}.ng2-dropdown-menu[_ngcontent-%COMP%]{overflow-y:auto;box-shadow:0 1px 2px #0000004d;position:absolute;padding:.5em 0;background:#fff;border-radius:1px;max-height:400px;width:260px;min-height:0;display:block}.ng2-dropdown-menu.ng2-dropdown-menu--inside-element[_ngcontent-%COMP%]{position:fixed}.ng2-dropdown-menu.ng2-dropdown-menu--width--2[_ngcontent-%COMP%]{width:200px}.ng2-dropdown-menu.ng2-dropdown-menu--width--4[_ngcontent-%COMP%]{width:260px}.ng2-dropdown-menu.ng2-dropdown-menu--width--6[_ngcontent-%COMP%]{width:320px}.ng2-dropdown-backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:hidden}[_nghost-%COMP%]     .ng2-menu-divider{height:1px;min-height:1px;max-height:1px;width:100%;display:block;background:#f9f9f9}"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('fade', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 1,
        height: '*',
        width: '*'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0,
        overflow: 'hidden',
        height: 0,
        width: 0
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('hidden => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('250ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 1,
        height: '*',
        width: '*'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('visible => hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('350ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0,
        width: 0,
        height: 0
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('opacity', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('hidden => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('450ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0,
        offset: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 1,
        offset: 1
      })]))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('visible => hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('250ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 1,
        offset: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0.5,
        offset: 0.3
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0,
        offset: 1
      })]))])])]
    }
  });
  return Ng2DropdownMenu;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](Ng2DropdownMenu, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'ng2-dropdown-menu',
      template: "\n        <!-- MENU -->\n        <div\n            class=\"ng2-dropdown-menu ng2-dropdown-menu---width--{{ width }}\"\n            [class.ng2-dropdown-menu--inside-element]=\"!appendToBody\"\n            [class.ng2-dropdown-menu--open]=\"dropdownState.menuState.isVisible\"\n            [style.z-index]=\"zIndex\"\n            [@fade]=\"dropdownState.menuState.toString()\"\n        >\n            <div\n                class=\"ng2-dropdown-menu__options-container\"\n                [@opacity]=\"dropdownState.menuState.toString()\"\n            >\n                <ng-content></ng-content>\n            </div>\n        </div>\n\n        <!-- BACKDROP -->\n        <div\n            class=\"ng2-dropdown-backdrop\"\n            *ngIf=\"dropdownState.menuState.isVisible\"\n            (click)=\"hide()\"\n        ></div>\n    ",
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('fade', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 1,
        height: '*',
        width: '*'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0,
        overflow: 'hidden',
        height: 0,
        width: 0
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('hidden => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('250ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 1,
        height: '*',
        width: '*'
      }))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('visible => hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('350ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0,
        width: 0,
        height: 0
      }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('opacity', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('hidden => visible', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('450ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0,
        offset: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 1,
        offset: 1
      })]))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('visible => hidden', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('250ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 1,
        offset: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0.5,
        offset: 0.3
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
        opacity: 0,
        offset: 1
      })]))])])],
      styles: [":host{display:block}.ng2-dropdown-menu{overflow-y:auto;box-shadow:0 1px 2px #0000004d;position:absolute;padding:.5em 0;background:#fff;border-radius:1px;max-height:400px;width:260px;min-height:0;display:block}.ng2-dropdown-menu.ng2-dropdown-menu--inside-element{position:fixed}.ng2-dropdown-menu.ng2-dropdown-menu--width--2{width:200px}.ng2-dropdown-menu.ng2-dropdown-menu--width--4{width:260px}.ng2-dropdown-menu.ng2-dropdown-menu--width--6{width:320px}.ng2-dropdown-backdrop{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:hidden}:host ::ng-deep .ng2-menu-divider{height:1px;min-height:1px;max-height:1px;width:100%;display:block;background:#f9f9f9}\n"]
    }]
  }], function () {
    return [{
      type: DropdownStateService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
    }];
  }, {
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    focusFirstElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    appendToBody: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ContentChildren,
      args: [Ng2MenuItem, {
        descendants: true
      }]
    }]
  });
})();

var Ng2Dropdown = /*@__PURE__*/function () {
  var Ng2Dropdown = /*#__PURE__*/function () {
    function Ng2Dropdown(state) {
      (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Ng2Dropdown);

      this.state = state;
      this.dynamicUpdate = true; // outputs

      this.onItemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
      this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
      this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
      this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }

    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Ng2Dropdown, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        var _this = this;

        this.state.dropdownState.onItemClicked.subscribe(function (item) {
          _this.onItemClicked.emit(item);

          if (item.preventClose) {
            return;
          }

          _this.hide.call(_this);
        });

        if (this.button) {
          this.button.onMenuToggled.subscribe(function () {
            _this.toggleMenu();
          });
        }

        this.state.dropdownState.onItemSelected.subscribe(function (item) {
          _this.onItemSelected.emit(item);
        });
        this.state.dropdownState.onItemDestroyed.subscribe(function (item) {
          var newSelectedItem;

          var items = _this.menu.items.toArray();

          if (item !== _this.state.dropdownState.selectedItem) {
            return;
          }

          if (_this.menu.focusFirstElement) {
            newSelectedItem = item === items[0] && items.length > 1 ? items[1] : items[0];
          }

          _this.state.dropdownState.select(newSelectedItem);
        });
      }
      /**
       * @name toggleMenu
       * @desc toggles menu visibility
       */

    }, {
      key: "toggleMenu",
      value: function toggleMenu() {
        var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.button.getPosition();
        this.state.menuState.isVisible ? this.hide() : this.show(position);
      }
      /**
       * - hides dropdown
       * @name hide
       */

    }, {
      key: "hide",
      value: function hide() {
        this.menu.hide();
        this.onHide.emit(this);
      }
      /**
       * - shows dropdown
       * @name show
       * @param position
       */

    }, {
      key: "show",
      value: function show() {
        var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.button.getPosition();
        this.menu.show(position, this.dynamicUpdate);
        this.onShow.emit(this);
      }
      /**
       * @name scrollListener
       */

    }, {
      key: "scrollListener",
      value: function scrollListener() {
        if (this.button && this.dynamicUpdate) {
          this.menu.updatePosition(this.button.getPosition(), true);
        }
      }
    }]);

    return Ng2Dropdown;
  }();

  Ng2Dropdown.ɵfac = function Ng2Dropdown_Factory(t) {
    return new (t || Ng2Dropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DropdownStateService));
  };

  Ng2Dropdown.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: Ng2Dropdown,
    selectors: [["ng2-dropdown"]],
    contentQueries: function Ng2Dropdown_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, Ng2DropdownButton, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, Ng2DropdownMenu, 7);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.button = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
      }
    },
    hostBindings: function Ng2Dropdown_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scroll", function Ng2Dropdown_scroll_HostBindingHandler() {
          return ctx.scrollListener();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
      }
    },
    inputs: {
      dynamicUpdate: "dynamicUpdate"
    },
    outputs: {
      onItemClicked: "onItemClicked",
      onItemSelected: "onItemSelected",
      onShow: "onShow",
      onHide: "onHide"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([DropdownStateService])],
    ngContentSelectors: _c2,
    decls: 3,
    vars: 0,
    consts: [[1, "ng2-dropdown-container"]],
    template: function Ng2Dropdown_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2
  });
  return Ng2Dropdown;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](Ng2Dropdown, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'ng2-dropdown',
      template: "\n        <div class=\"ng2-dropdown-container\">\n            <ng-content select=\"ng2-dropdown-button\"></ng-content>\n            <ng-content select=\"ng2-dropdown-menu\"></ng-content>\n        </div>\n    ",
      providers: [DropdownStateService]
    }]
  }], function () {
    return [{
      type: DropdownStateService
    }];
  }, {
    button: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ContentChild,
      args: [Ng2DropdownButton, {
        static: true
      }]
    }],
    menu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ContentChild,
      args: [Ng2DropdownMenu, {
        static: true
      }]
    }],
    dynamicUpdate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    onItemClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    onItemSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    onShow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    onHide: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
    }],
    scrollListener: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener,
      args: ['window:scroll']
    }]
  });
})();

var Ng2DropdownModule = /*@__PURE__*/function () {
  var Ng2DropdownModule = /*#__PURE__*/(0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(function Ng2DropdownModule() {
    (0,C_anewsuaobra_frontend_v3_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Ng2DropdownModule);
  });

  Ng2DropdownModule.ɵfac = function Ng2DropdownModule_Factory(t) {
    return new (t || Ng2DropdownModule)();
  };

  Ng2DropdownModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: Ng2DropdownModule
  });
  Ng2DropdownModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]]
  });
  return Ng2DropdownModule;
}();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](Ng2DropdownModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      exports: [Ng2MenuItem, Ng2DropdownButton, Ng2DropdownMenu, Ng2Dropdown],
      declarations: [Ng2Dropdown, Ng2MenuItem, Ng2DropdownButton, Ng2DropdownMenu],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=ng2-material-dropdown.mjs.map

/***/ }),

/***/ 64762:
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

}]);