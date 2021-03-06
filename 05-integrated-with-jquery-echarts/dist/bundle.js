/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../jinge-framework/lib/components/class.js":
/*!************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/class.js ***!
  \************************************************************************************/
/*! exports provided: ToggleClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleClassComponent", function() { return ToggleClassComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _core_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/transition */ "../../jinge-framework/lib/core/transition.js");




function loopOperateClass(el, isAddOperate, domClass) {
    if (Object(_core_component__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(el)) {
        el[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes.forEach(ce => loopOperateClass(ce, isAddOperate, domClass));
    }
    else if (isAddOperate) {
        el.classList.add(domClass);
    }
    else {
        el.classList.remove(domClass);
    }
}
class ToggleClassComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs) {
      if (!attrs || !Object(_util__WEBPACK_IMPORTED_MODULE_2__["isObject"])(attrs.class)) {
        throw new Error('<toggle-class> component require "class" attribute to be Object.');
      }
      super(attrs);
      const __vm_c7f66f7e8db8 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      const fn_2_c7f66f7e8db8 = () => {
        __vm_c7f66f7e8db8.domClass = attrs.class;
      };
      fn_2_c7f66f7e8db8();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('class', fn_2_c7f66f7e8db8);
      const fn_3_c7f66f7e8db8 = () => {
        __vm_c7f66f7e8db8.transition = !!attrs.transition;
      };
      fn_3_c7f66f7e8db8();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('transition', fn_3_c7f66f7e8db8);
      __vm_c7f66f7e8db8._t = null;
      __vm_c7f66f7e8db8._i = -1;
      __vm_c7f66f7e8db8[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('class.**', () => {
        __vm_c7f66f7e8db8.__updateIfNeed();
      });
    }
    __render() {
        const rr = super.__render();
        this.__update(true);
        return rr;
    }
    __beforeDestroy() {
        this._t = null; // maybe unnecessary
    }
    __update(first) {
        const el = this.transition ? this.__transitionDOM : null;
        if (el && el.nodeType !== Node.ELEMENT_NODE) {
            // ignore comment or text-node
            return;
        }
        if (this.transition && !this._t) {
            this._t = new Map();
        }
        const cs = this.domClass;
        Object.keys(cs).forEach(k => {
            const v = cs[k];
            if (!this.transition) {
                loopOperateClass(this, !!v, k);
                return;
            }
            if (first) {
                this._t.set(k, [
                    v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED,
                    null // saved onEnd callback
                ]);
                if (v) {
                    el.classList.add(k);
                }
                else {
                    el.classList.remove(k);
                }
                return;
            }
            const t = this._t.get(k);
            if (!t) {
                // eslint-disable-next-line no-console
                console.error('Unsupport <toogle-class> attribute. see https://todo');
                return;
            }
            const s = t[0];
            if ((v && s <= _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED) || (!v && s >= _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVING)) {
                return;
            }
            if (s === (v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVING : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERING)) {
                el.classList.remove(k + (v ? '-leave-active' : '-enter-active'));
                el.classList.remove(k + (v ? '-leave' : '-enter'));
                Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, 'transitionend', t[1]);
                Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, 'animationend', t[1]);
                t[1] = null;
                this.__notify('transition', v ? 'leave-cancelled' : 'enter-cancelled', k, el);
            }
            const classOfStart = k + (v ? '-enter' : '-leave');
            const classOfActive = k + (v ? '-enter-active' : '-leave-active');
            el.classList.add(classOfStart);
            // force render by calling getComputedStyle
            Object(_core_transition__WEBPACK_IMPORTED_MODULE_3__["getDurationType"])(el);
            el.classList.add(classOfActive);
            const tsEndName = Object(_core_transition__WEBPACK_IMPORTED_MODULE_3__["getDurationType"])(el);
            if (!tsEndName) {
                el.classList.remove(classOfStart);
                el.classList.remove(classOfActive);
                t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED;
                if (v) {
                    el.classList.add(k);
                }
                else {
                    el.classList.remove(k);
                }
                return;
            }
            const onEnd = () => {
                Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, 'transitionend', onEnd);
                Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, 'animationend', onEnd);
                el.classList.remove(classOfStart);
                el.classList.remove(classOfActive);
                t[1] = null;
                t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED;
                if (v) {
                    el.classList.add(k);
                }
                else {
                    el.classList.remove(k);
                }
                this.__notify('transition', v ? 'after-enter' : 'after-leave', k, el);
            };
            t[0] = v ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERING : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVING;
            t[1] = onEnd;
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["addEvent"])(el, tsEndName, onEnd);
            this.__notify('transition', v ? 'before-enter' : 'before-leave', k, el);
            setImmediate(() => {
                this.__notify('transition', v ? 'enter' : 'leave', k, el);
            });
        });
    }
}
//# sourceMappingURL=class.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/dynamic.js":
/*!**************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/dynamic.js ***!
  \**************************************************************************************/
/*! exports provided: DynamicRenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicRenderComponent", function() { return DynamicRenderComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");
/* harmony import */ var _vm_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vm/index */ "../../jinge-framework/lib/vm/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");




function createEl(component) {
    const Clazz = component._r._component;
    const pAttrs = component[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].passedAttrs;
    const attrs = Object(_vm_index__WEBPACK_IMPORTED_MODULE_2__["attrs"])({
        [_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]]: {
            context: component[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].context
        }
    });
    for (const attrName in pAttrs) {
        attrs[attrName] = pAttrs[attrName];
    }
    component._currentAttrs = attrs;
    const el = new Clazz(attrs);
    const parentStyleIds = component[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].compStylePid;
    if (parentStyleIds) {
        el.__addStylePid(parentStyleIds);
    }
    return el[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
}
class DynamicRenderComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs) {
      if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isObject"])(attrs.render) || !Object(_core_component__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(attrs.render._component)) {
        throw new Error('<dynamic> component require "render" attribute to be object with "_component" property.');
      }
      super(attrs);
      const __vm_c7f66f7e8db8 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      __vm_c7f66f7e8db8._currentAttrs = null;
      const fn_3_c7f66f7e8db8 = () => {
        __vm_c7f66f7e8db8.render = attrs.render;
      };
      fn_3_c7f66f7e8db8();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('render', fn_3_c7f66f7e8db8);
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('*', prop => {
        __vm_c7f66f7e8db8._currentAttrs[prop[0]] = __vm_c7f66f7e8db8[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].passedAttrs[prop[0]];
      });
    }
    get render() {
        return this._r;
    }
    set render(v) {
        if (this._r === v || this._r._component === v._component)
            return;
        this.__updateIfNeed();
    }
    __render() {
        const el = createEl(this);
        return el.__render();
    }
    __update() {
        const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes;
        const el = roots[0];
        const fd = el.__firstDOM;
        const pa = fd.parentNode;
        const newEl = createEl(this);
        roots[0] = newEl;
        const nels = newEl.__render();
        pa.insertBefore(nels.length > 1 ? Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])(nels) : nels[0], fd);
        el.__destroy();
        newEl.__handleAfterRender();
    }
}
//# sourceMappingURL=dynamic.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/for.js":
/*!**********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/for.js ***!
  \**********************************************************************************/
/*! exports provided: ForEachComponent, ForComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForEachComponent", function() { return ForEachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForComponent", function() { return ForComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");
/* harmony import */ var _vm_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vm/index */ "../../jinge-framework/lib/vm/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");




class ForEachComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs, item, index, isLast) {
      super(attrs);
      const __vm_c7f66f7e8db8 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      if (Object(_vm_common__WEBPACK_IMPORTED_MODULE_0__["isViewModel"])(item)) {
        __vm_c7f66f7e8db8.each = item;
      } else {
        __vm_c7f66f7e8db8._e = item;
      }
      __vm_c7f66f7e8db8.index = index;
      __vm_c7f66f7e8db8.isFirst = index === 0;
      __vm_c7f66f7e8db8.isLast = isLast;
    }
    get each() {
        return this._e;
    }
    set each(v) {
        this._e = v;
    }
    __render() {
        return this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].slots.default(this);
    }
}
function createEl(item, i, isLast, itemRenderFn, context, cstyPid) {
    const el = new ForEachComponent(Object(_vm_index__WEBPACK_IMPORTED_MODULE_2__["attrs"])({
        [_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]]: {
            context,
            slots: {
                default: itemRenderFn
            }
        }
    }), item, i, isLast);
    if (cstyPid) {
        el.__addStylePid(cstyPid);
    }
    return el[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
}
function appendRenderEach(item, i, isLast, itemRenderFn, roots, context, cstyPid) {
    const el = createEl(item, i, isLast, itemRenderFn, context, cstyPid);
    roots.push(el);
    return el.__render();
}
// function _assertVm(item, i) {
//   if (isObject(item) && !isInnerObj(item) && !(VM_ATTRS in item)) {
//     throw new Error(`loop item [${i}] of <for> component must be ViewModel.`);
//   }
// }
function _prepareKey(item, i, keyMap, keyName) {
    const key = keyName === 'each' ? item : keyName(item);
    if (keyMap.has(key)) {
        // eslint-disable-next-line no-console
        console.error(`loop items [${i}] and [${keyMap.get(key)}] of <for> component both have key '${key}', dulplicated key may cause update error.`);
    }
    keyMap.set(key, i);
    return key;
}
function renderItems(items, itemRenderFn, roots, keys, keyName, context, cstyPid) {
    const result = [];
    const tmpKeyMap = new Map();
    items.forEach((item, i) => {
        // _assertVm(item, i);
        if (keyName !== 'index') {
            keys.push(_prepareKey(item, i, tmpKeyMap, keyName));
        }
        result.push(...appendRenderEach(item, i, i === items.length - 1, itemRenderFn, roots, context, cstyPid));
    });
    return result;
}
function loopAppend($parent, el) {
    el[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes.forEach(node => {
        if (Object(_core_component__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(node)) {
            loopAppend($parent, node);
        }
        else {
            $parent.appendChild(node);
        }
    });
}
function updateEl(el, i, items) {
    if (el.isFirst !== (i === 0)) {
        el.isFirst = i === 0;
    }
    if (el.isLast !== (i === items.length - 1)) {
        el.isLast = (i === items.length - 1);
    }
    if (el.index !== i) {
        el.index = i;
    }
    if (el.each !== items[i]) {
        el.each = items[i];
    }
}
function _parseIndexPath(p) {
    return (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isString"])(p) && p !== 'length' && /^\d+$/.test(p)) ? Number(p) : p;
}
class ForComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs) {
      if (attrs.key && !/^(index|each(.[\w\d$_]+)*)$/.test(attrs.key)) {
        throw new Error('Value of "key" attribute of <for> component is invalidate. See https://[todo]');
      }
      super(attrs);
      const __vm_c7f66f7e8db8 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      if (Object(_vm_common__WEBPACK_IMPORTED_MODULE_0__["isViewModel"])(attrs.loop)) {
        __vm_c7f66f7e8db8.loop = attrs.loop;
      } else {
        __vm_c7f66f7e8db8._l = attrs.loop;
      }
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('loop', () => {
        __vm_c7f66f7e8db8.loop = attrs.loop;
      });
      const kn = attrs.key || 'index';
      __vm_c7f66f7e8db8._keyName = kn;
      __vm_c7f66f7e8db8._length = 0;
      __vm_c7f66f7e8db8._keys = null;
      __vm_c7f66f7e8db8._waitingUpdate = false;
      if (kn !== 'index' && kn !== 'each') {
        __vm_c7f66f7e8db8._keyName = new Function('each', `return ${ kn }`);
        const propCount = kn.split('.').length + 1;
        __vm_c7f66f7e8db8[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('loop.*.' + kn.slice(5), propPath => {
          if (propPath.length !== propCount || __vm_c7f66f7e8db8._waitingUpdate) {
            return;
          }
          const items = __vm_c7f66f7e8db8.loop;
          if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(items) || items.length === 0)
            return;
          const p = _parseIndexPath(propPath[1]);
          if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(p) || p >= items.length) {
            return;
          }
          __vm_c7f66f7e8db8._keys[p] = __vm_c7f66f7e8db8._keyName(items[p]);
        });
      }
      __vm_c7f66f7e8db8[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('loop.*', propPath => {
        if (__vm_c7f66f7e8db8[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].state !== _core_component__WEBPACK_IMPORTED_MODULE_1__["ComponentStates"].RENDERED || propPath.length !== 2 || __vm_c7f66f7e8db8._waitingUpdate) {
          return;
        }
        const p = _parseIndexPath(propPath[1]);
        if (p === 'length') {
          __vm_c7f66f7e8db8._waitingUpdate = true;
          __vm_c7f66f7e8db8.__updateIfNeed();
        } else if (Object(_util__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(p)) {
          __vm_c7f66f7e8db8._updateItem(p);
        }
      });
    }
    get loop() {
        return this._l;
    }
    set loop(v) {
        // console.log('set loop');
        this._l = v;
        this._waitingUpdate = true;
        this.__updateIfNeed();
    }
    __render() {
        var _a;
        const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes;
        const itemRenderFn = (_a = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].slots) === null || _a === void 0 ? void 0 : _a.default;
        if (!itemRenderFn) {
            roots.push(document.createComment('empty'));
            return roots;
        }
        const items = this.loop;
        const keyName = this._keyName;
        if (keyName !== 'index')
            this._keys = [];
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(items) || items.length === 0) {
            roots.push(document.createComment('empty'));
            return roots;
        }
        this._length = items.length;
        return renderItems(items, itemRenderFn, roots, this._keys, keyName, this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].context, this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].compStylePid);
    }
    _updateItem(index) {
        var _a;
        const items = this.loop;
        const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes;
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(items) || index >= roots.length)
            return;
        const keys = this._keys;
        const item = items[index];
        const oldEl = roots[index];
        if (oldEl.each === item) {
            return;
        }
        const itemRenderFn = (_a = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].slots) === null || _a === void 0 ? void 0 : _a.default;
        if (!itemRenderFn)
            return;
        // console.log('update item:', index);
        const keyName = this._keyName;
        if (keyName !== 'index') {
            const newKey = keyName === 'each' ? item : keyName(item);
            const oldKey = keys[index];
            if (newKey !== oldKey) {
                const $fd = oldEl.__firstDOM;
                const newEl = createEl(item, index, oldEl.isLast, itemRenderFn, this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].context, this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].compStylePid);
                const rr = Object(_core_component__WEBPACK_IMPORTED_MODULE_1__["assertRenderResults"])(newEl.__render());
                $fd.parentNode.insertBefore(rr.length > 1 ? Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])(rr) : rr[0], $fd);
                oldEl.__destroy();
                roots[index] = newEl;
                keys[index] = newKey;
                newEl.__handleAfterRender();
                // console.log('update item render:', index);
            }
            else {
                oldEl.each = item;
            }
        }
        else {
            oldEl.each = item;
        }
    }
    __update() {
        var _a;
        this._waitingUpdate = false;
        // console.log('for update');
        const itemRenderFn = (_a = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].slots) === null || _a === void 0 ? void 0 : _a.default;
        if (!itemRenderFn)
            return;
        const newItems = Object(_util__WEBPACK_IMPORTED_MODULE_3__["isArray"])(this.loop) ? this.loop : [];
        const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes;
        const nl = newItems.length;
        const ol = this._length;
        // nothing changed, return directly.
        if (nl === 0 && ol === 0)
            return;
        const keyName = this._keyName;
        // if new length equal 0, clear & render comment.
        if (nl === 0 && ol > 0) {
            const fd = roots[0].__firstDOM;
            const $cmt = document.createComment('empty');
            fd.parentNode.insertBefore($cmt, fd);
            for (let i = 0; i < ol; i++) {
                roots[i].__destroy();
            }
            roots.length = 1;
            roots[0] = $cmt;
            if (keyName !== 'index') {
                this._keys.length = 0;
            }
            this._length = 0;
            return;
        }
        this._length = nl;
        const ctx = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].context;
        const cstyPid = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].compStylePid;
        const firstEl = roots[0]; // if ol === 0, firstEl is comment, else is component
        const $parent = (ol === 0 ? firstEl : firstEl.__firstDOM).parentNode;
        if (keyName === 'index') {
            let $f = null;
            if (ol === 0)
                roots.length = 0;
            for (let i = 0; i < nl; i++) {
                if (i < ol) {
                    updateEl(roots[i], i, newItems);
                }
                else {
                    if (!$f)
                        $f = Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])();
                    appendRenderEach(newItems[i], i, i === nl - 1, itemRenderFn, roots, ctx, cstyPid).forEach(el => {
                        $f.appendChild(el);
                    });
                }
            }
            if ($f) {
                const $le = ol === 0 ? firstEl : roots[ol - 1].__lastDOM;
                Object(_util__WEBPACK_IMPORTED_MODULE_3__["insertAfter"])($parent, $f, $le);
                for (let i = ol; i < nl; i++) {
                    roots[i].__handleAfterRender();
                }
            }
            if (ol === 0) {
                $parent.removeChild(firstEl);
            }
            if (nl >= ol)
                return;
            for (let i = nl; i < ol; i++) {
                roots[i].__destroy();
            }
            roots.splice(nl);
            return;
        }
        const oldKeys = this._keys;
        if (ol === 0) {
            roots.length = 0;
            const rs = renderItems(newItems, itemRenderFn, roots, oldKeys, keyName, this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].context, this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].compStylePid);
            Object(_util__WEBPACK_IMPORTED_MODULE_3__["insertAfter"])($parent, Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])(rs), firstEl);
            $parent.removeChild(firstEl);
            roots.forEach(el => el.__handleAfterRender());
            return;
        }
        const oldKeyMap = new Map();
        oldKeys.forEach((k, i) => {
            oldKeyMap.set(k, i);
        });
        const newKeys = [];
        const newKeyMap = new Map();
        newItems.forEach((item, i) => {
            // _assertVm(item, i);
            newKeys.push(_prepareKey(item, i, newKeyMap, keyName));
        });
        let oi = 0;
        let ni = 0;
        let $lastS = null;
        const newRoots = [];
        const oldTags = new Uint8Array(ol);
        while (oi < ol || ni < nl) {
            while (oi < ol) {
                if (oldTags[oi] !== 0) {
                    oi++;
                }
                else if (newKeyMap.has(oldKeys[oi]) && newKeyMap.get(oldKeys[oi]) >= ni) {
                    if (oi === ol - 1) {
                        $lastS = roots[oi].__lastDOM.nextSibling;
                    }
                    break;
                }
                else {
                    if (oi === ol - 1) {
                        $lastS = roots[oi].__lastDOM.nextSibling;
                    }
                    roots[oi].__destroy();
                    oi++;
                }
            }
            if (oi >= ol) {
                let $f = null;
                const cei = newRoots.length;
                for (; ni < nl; ni++) {
                    const el = createEl(newItems[ni], ni, ni === nl - 1, itemRenderFn, ctx, cstyPid);
                    if (!$f)
                        $f = Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])();
                    el.__render().forEach($n => $f.appendChild($n));
                    newRoots.push(el);
                }
                if ($f) {
                    if ($lastS) {
                        $parent.insertBefore($f, $lastS);
                    }
                    else {
                        $parent.appendChild($f);
                    }
                    for (let i = cei; i < newRoots.length; i++) {
                        newRoots[i].__handleAfterRender();
                    }
                }
                break;
            }
            const oldKey = oldKeys[oi];
            let $f = null;
            let $nes = null;
            while (ni < nl) {
                const newKey = newKeys[ni];
                if (newKey === oldKey)
                    break;
                let reuseEl = null;
                if (oldKeyMap.has(newKey)) {
                    const oldIdx = oldKeyMap.get(newKey);
                    if (oldIdx > oi && oldTags[oldIdx] === 0) {
                        reuseEl = roots[oldIdx];
                        oldTags[oldIdx] = 1;
                    }
                }
                if (!$f)
                    $f = Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])();
                if (!reuseEl) {
                    reuseEl = createEl(newItems[ni], ni, ni === nl - 1, itemRenderFn, ctx, cstyPid);
                    reuseEl.__render().forEach($n => $f.appendChild($n));
                    if (!$nes)
                        $nes = [];
                    $nes.push(reuseEl);
                }
                else {
                    loopAppend($f, reuseEl);
                    updateEl(reuseEl, ni, newItems);
                }
                newRoots.push(reuseEl);
                ni++;
            }
            if (ni >= nl) {
                throw new Error('unimpossible?!');
            }
            const el = roots[oi];
            $f && $parent.insertBefore($f, el.__firstDOM);
            $nes && $nes.forEach(el => el.__handleAfterRender());
            updateEl(el, ni, newItems);
            newRoots.push(el);
            oi++;
            ni++;
        }
        this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes = newRoots;
        this._keys = newKeys;
    }
}
//# sourceMappingURL=for.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/hide.js":
/*!***********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/hide.js ***!
  \***********************************************************************************/
/*! exports provided: HideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideComponent", function() { return HideComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _vm_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/index */ "../../jinge-framework/lib/vm/index.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class */ "../../jinge-framework/lib/components/class.js");



class HideComponent extends _class__WEBPACK_IMPORTED_MODULE_2__["ToggleClassComponent"] {
    constructor(attrs) {
        attrs.class = Object(_vm_index__WEBPACK_IMPORTED_MODULE_1__["vm"])({
            'jg-hide': attrs.test
        });
        attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('test', () => {
            if (attrs.class['jg-hide'] !== attrs.test) {
                attrs.class['jg-hide'] = attrs.test;
            }
        });
        super(attrs);
    }
}
//# sourceMappingURL=hide.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/html.js":
/*!***********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/html.js ***!
  \***********************************************************************************/
/*! exports provided: BindHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindHtmlComponent", function() { return BindHtmlComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");


function renderHtml(content) {
    const $d = document.createElement('div');
    $d.innerHTML = content || '';
    let cn = $d.childNodes;
    if (cn.length === 0) {
        cn = [document.createComment('empty')];
    }
    else {
        cn = [].slice.call(cn); // convert NodeList to Array.
    }
    return cn;
}
class BindHtmlComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs) {
      if (!('content' in attrs))
        throw new Error('<bind-html/> require "content" attribute');
      super(attrs);
      const __vm_c7f66f7e8db8 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      const fn_2_c7f66f7e8db8 = () => {
        __vm_c7f66f7e8db8.content = attrs.content;
      };
      fn_2_c7f66f7e8db8();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('content', fn_2_c7f66f7e8db8);
    }
    get content() {
        return this._c;
    }
    set content(v) {
        if (this._c === v)
            return;
        this._c = v;
        this.__updateIfNeed();
    }
    __render() {
        return (this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes = renderHtml(this._c));
    }
    __update() {
        const roots = this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes;
        const oldFirstEl = roots[0];
        const $p = oldFirstEl.parentNode;
        const newEls = renderHtml(this._c);
        $p.insertBefore(newEls.length > 1 ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["createFragment"])(newEls) : newEls[0], oldFirstEl);
        roots.forEach(oldEl => $p.removeChild(oldEl));
        this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes = newEls;
    }
}
//# sourceMappingURL=html.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/i18n.js":
/*!***********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/i18n.js ***!
  \***********************************************************************************/
/*! exports provided: I18nComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nComponent", function() { return I18nComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");
/* harmony import */ var _core_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/i18n */ "../../jinge-framework/lib/core/i18n.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");




class I18nComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs, renderKey, renderVms) {
      super(attrs);
      const __vm_c7f66f7e8db8 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      __vm_c7f66f7e8db8._key = renderKey;
      __vm_c7f66f7e8db8._vms = renderVms;
      __vm_c7f66f7e8db8.__i18nWatch(__vm_c7f66f7e8db8._onchange);
    }
    __render() {
        const renderFn = _core_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].__r(this._key, 'components');
        return renderFn(this, ...this._vms);
    }
    _onchange() {
        this.__updateIfNeed();
    }
    __update() {
        if (this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__related) {
            this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__related.forEach((hooks, origin) => {
                hooks.forEach(hook => {
                    origin.__unwatch(hook.prop, hook.handler);
                });
            });
            this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__related.clear();
        }
        let $el = this.__lastDOM;
        const $parentEl = $el.parentNode;
        $el = $el.nextSibling;
        /*
         * 当前实现下，HANDLE_BEFORE_DESTROY 正好可以销毁子组件/子元素。
         */
        this.__handleBeforeDestroy(true);
        /*
         * 将新的元素替换到原来的旧的元素的位置。
         */
        const els = this.__render();
        if ($el) {
            $parentEl.insertBefore(els.length > 1 ? Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])(els) : els[0], $el);
        }
        else {
            $parentEl.appendChild(els.length > 1 ? Object(_util__WEBPACK_IMPORTED_MODULE_3__["createFragment"])(els) : els[0]);
        }
        /**
         * 对切换后渲染的组件触发 AFTER_RENDER 生命周期。
         */
        this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].rootNodes.forEach(n => {
            if (Object(_core_component__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(n))
                n.__handleAfterRender();
        });
        this[_core_component__WEBPACK_IMPORTED_MODULE_1__["__"]].nonRootCompNodes.forEach(n => {
            n.__handleAfterRender();
        });
    }
    __beforeDestroy() {
        this._vms = null; // unlink vms, maybe not necessary
    }
}
//# sourceMappingURL=i18n.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/if.js":
/*!*********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/if.js ***!
  \*********************************************************************************/
/*! exports provided: IfComponent, SwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfComponent", function() { return IfComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return SwitchComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/lib/vm/index.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");
/* harmony import */ var _core_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/transition */ "../../jinge-framework/lib/core/transition.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");




function createEl(renderFn, context, parentStyleIds) {
    const el = new _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"](Object(_vm__WEBPACK_IMPORTED_MODULE_1__["attrs"])({
        [_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]]: {
            context,
            slots: {
                default: renderFn
            }
        }
    }));
    if (parentStyleIds) {
        el.__addStylePid(parentStyleIds);
    }
    return el[_vm__WEBPACK_IMPORTED_MODULE_1__["$$"]].proxy;
}
function renderSwitch(component) {
    const value = component._currentValue;
    const acs = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].slots;
    if (component.transition && acs) {
        component._transitionMap = new Map();
        for (const k in acs) {
            component._transitionMap.set(k, [
                k === value ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED,
                null // element
            ]);
        }
        component._previousValue = value;
        component._onEndHandler = component.onTransitionEnd.bind(component);
    }
    const renderFn = acs ? acs[value] : null;
    const roots = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes;
    if (!renderFn) {
        roots.push(document.createComment('empty'));
        return roots;
    }
    const el = createEl(renderFn, component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].context, component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].compStylePid);
    roots.push(el);
    return el.__render();
}
function doUpdate(component) {
    var _a;
    const roots = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes;
    const el = roots[0];
    const isComp = Object(_core_component__WEBPACK_IMPORTED_MODULE_2__["isComponent"])(el);
    const firstDOM = (isComp ? el.__firstDOM : el);
    const parentDOM = (isComp ? firstDOM : el).parentNode;
    const renderFn = (_a = component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].slots) === null || _a === void 0 ? void 0 : _a[component._currentValue];
    if (renderFn) {
        const newEl = createEl(renderFn, component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].context, component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].compStylePid);
        const nodes = Object(_core_component__WEBPACK_IMPORTED_MODULE_2__["assertRenderResults"])(newEl.__render());
        parentDOM.insertBefore(nodes.length > 1 ? Object(_util__WEBPACK_IMPORTED_MODULE_4__["createFragment"])(nodes) : nodes[0], firstDOM);
        roots[0] = newEl;
    }
    else {
        roots[0] = document.createComment('empty');
        parentDOM.insertBefore(roots[0], firstDOM);
    }
    if (isComp) {
        el.__destroy();
    }
    else {
        parentDOM.removeChild(firstDOM);
    }
    renderFn && roots[0].__handleAfterRender();
    component.__notify('branch-switched', component._branch);
}
function cancelTs(t, tn, e, component) {
    const el = t[1];
    if (el.nodeType !== Node.ELEMENT_NODE) {
        return;
    }
    const onEnd = component._onEndHandler;
    el.classList.remove(tn + (e ? '-enter' : '-leave'));
    el.classList.remove(tn + (e ? '-enter-active' : '-leave-active'));
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, 'transitionend', onEnd);
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, 'animationend', onEnd);
    component.__notify('transition', e ? 'enter-cancelled' : 'leave-cancelled', el);
}
function startTs(t, tn, e, component) {
    const el = t[1];
    const onEnd = component._onEndHandler;
    if (el.nodeType !== Node.ELEMENT_NODE) {
        onEnd();
        return;
    }
    const classOfStart = tn + (e ? '-enter' : '-leave');
    const classOfActive = tn + (e ? '-enter-active' : '-leave-active');
    el.classList.add(classOfStart);
    // force render by calling getComputedStyle
    Object(_core_transition__WEBPACK_IMPORTED_MODULE_3__["getDurationType"])(el);
    el.classList.add(classOfActive);
    const tsEndName = Object(_core_transition__WEBPACK_IMPORTED_MODULE_3__["getDurationType"])(el);
    if (!tsEndName) {
        onEnd();
        return;
    }
    t[0] = e ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERING : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVING;
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["addEvent"])(el, tsEndName, onEnd);
    component.__notify('transition', e ? 'before-enter' : 'before-leave', el);
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["setImmediate"])(() => {
        component.__notify('transition', e ? 'enter' : 'leave', el);
    });
}
function updateSwitchWithTransition(component) {
    const value = component._currentValue;
    const pv = component._previousValue;
    const tn = component.transition;
    let pt = component._transitionMap.get(pv);
    if (!pt) {
        pt = [
            pv === 'else' ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED,
            null // element
        ];
        component._transitionMap.set(pv, pt);
    }
    // debugger;
    if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERING) {
        if (value === pv)
            return;
        cancelTs(pt, tn, true, component);
        startTs(pt, tn, false, component);
    }
    else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVING) {
        if (value !== pv)
            return;
        cancelTs(pt, tn, false, component);
        startTs(pt, tn, true, component);
    }
    else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED) {
        pt[1] = component.__transitionDOM;
        startTs(pt, tn, false, component);
    }
    else if (pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED) {
        pt[1] = component.__transitionDOM;
        startTs(pt, tn, true, component);
    }
}
function updateSwitch(component) {
    if (!Object(_core_component__WEBPACK_IMPORTED_MODULE_2__["isComponent"])(component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes[0]) && (!component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].slots || !component[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].slots[component._currentValue])) {
        return;
    }
    if (component._transitionMap) {
        updateSwitchWithTransition(component);
        return;
    }
    doUpdate(component);
}
function updateSwitchOnTransitionEnd(component) {
    // console.log('on end')
    const value = component._currentValue;
    const pv = component._previousValue;
    const tn = component.transition;
    const pt = component._transitionMap.get(pv);
    const e = pt[0] === _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERING;
    const el = pt[1];
    if (el.nodeType === Node.ELEMENT_NODE) {
        Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, 'transitionend', component._onEndHandler);
        Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, 'animationend', component._onEndHandler);
        el.classList.remove(tn + (e ? '-enter' : '-leave'));
        el.classList.remove(tn + (e ? '-enter-active' : '-leave-active'));
        component.__notify('transition', e ? 'after-enter' : 'after-leave');
    }
    pt[0] = e ? _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED : _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].LEAVED;
    if (e)
        return;
    doUpdate(component);
    component._previousValue = value;
    const ct = component._transitionMap.get(value);
    if (!ct) {
        return;
    }
    const fd = component.__transitionDOM;
    if (fd.nodeType !== Node.ELEMENT_NODE) {
        ct[0] = _core_transition__WEBPACK_IMPORTED_MODULE_3__["TransitionStates"].ENTERED;
        return;
    }
    ct[1] = fd;
    startTs(ct, tn, true, component);
}
function destroySwitch(component) {
    if (component._transitionMap) {
        component._transitionMap.forEach(ts => {
            const el = ts[1];
            if (el) {
                Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, 'transitionend', component._onEndHandler);
                Object(_util__WEBPACK_IMPORTED_MODULE_4__["removeEvent"])(el, 'animationend', component._onEndHandler);
            }
        });
        component._transitionMap = null;
    }
}
class IfComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
    constructor(attrs) {
      super(attrs);
      const __vm_c7f66f7e8db8 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      __vm_c7f66f7e8db8._currentValue = 'default';
      __vm_c7f66f7e8db8._onEndHandler = null;
      __vm_c7f66f7e8db8._transitionMap = null;
      __vm_c7f66f7e8db8._previousValue = null;
      const fn_5_c7f66f7e8db8 = () => {
        __vm_c7f66f7e8db8.expect = attrs.expect;
      };
      fn_5_c7f66f7e8db8();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('expect', fn_5_c7f66f7e8db8);
      const fn_6_c7f66f7e8db8 = () => {
        __vm_c7f66f7e8db8.transition = attrs.transition;
      };
      fn_6_c7f66f7e8db8();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('transition', fn_6_c7f66f7e8db8);
    }
    get expect() {
        return this._currentValue === 'default';
    }
    set expect(value) {
        const v = value ? 'default' : 'else';
        if (this._currentValue === v)
            return;
        this._currentValue = v;
        this.__updateIfNeed();
    }
    get _branch() {
        return this.expect;
    }
    onTransitionEnd() {
        updateSwitchOnTransitionEnd(this);
    }
    __render() {
        return renderSwitch(this);
    }
    __update() {
        updateSwitch(this);
    }
    __beforeDestroy() {
        destroySwitch(this);
    }
}
class SwitchComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["Component"] {
    constructor(attrs) {
      super(attrs);
      const __vm_c7f66f7e8db8 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      __vm_c7f66f7e8db8._onEndHandler = null;
      __vm_c7f66f7e8db8._transitionMap = null;
      __vm_c7f66f7e8db8._previousValue = null;
      __vm_c7f66f7e8db8._currentValue = null;
      const fn_5_c7f66f7e8db8 = () => {
        __vm_c7f66f7e8db8.test = attrs.test;
      };
      fn_5_c7f66f7e8db8();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('test', fn_5_c7f66f7e8db8);
      const fn_6_c7f66f7e8db8 = () => {
        __vm_c7f66f7e8db8.transition = attrs.transition;
      };
      fn_6_c7f66f7e8db8();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('transition', fn_6_c7f66f7e8db8);
    }
    get test() {
        return this._currentValue;
    }
    set test(v) {
        const acs = this[_core_component__WEBPACK_IMPORTED_MODULE_2__["__"]].slots;
        if (!acs || !(v in acs)) {
            v = 'default';
        }
        if (this._currentValue === v)
            return;
        this._currentValue = v;
        this.__updateIfNeed();
    }
    get _branch() {
        return this.test;
    }
    onTransitionEnd() {
        updateSwitchOnTransitionEnd(this);
    }
    __render() {
        return renderSwitch(this);
    }
    __update() {
        updateSwitch(this);
    }
    __beforeDestroy() {
        destroySwitch(this);
    }
}
//# sourceMappingURL=if.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/index.js":
/*!************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/index.js ***!
  \************************************************************************************/
/*! exports provided: ToggleClassComponent, ForEachComponent, ForComponent, HideComponent, BindHtmlComponent, IfComponent, SwitchComponent, ParameterComponent, LogComponent, I18nComponent, DynamicRenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "../../jinge-framework/lib/components/class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleClassComponent", function() { return _class__WEBPACK_IMPORTED_MODULE_0__["ToggleClassComponent"]; });

/* harmony import */ var _for__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./for */ "../../jinge-framework/lib/components/for.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForEachComponent", function() { return _for__WEBPACK_IMPORTED_MODULE_1__["ForEachComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForComponent", function() { return _for__WEBPACK_IMPORTED_MODULE_1__["ForComponent"]; });

/* harmony import */ var _hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hide */ "../../jinge-framework/lib/components/hide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HideComponent", function() { return _hide__WEBPACK_IMPORTED_MODULE_2__["HideComponent"]; });

/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html */ "../../jinge-framework/lib/components/html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindHtmlComponent", function() { return _html__WEBPACK_IMPORTED_MODULE_3__["BindHtmlComponent"]; });

/* harmony import */ var _if__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./if */ "../../jinge-framework/lib/components/if.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfComponent", function() { return _if__WEBPACK_IMPORTED_MODULE_4__["IfComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return _if__WEBPACK_IMPORTED_MODULE_4__["SwitchComponent"]; });

/* harmony import */ var _parameter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parameter */ "../../jinge-framework/lib/components/parameter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return _parameter__WEBPACK_IMPORTED_MODULE_5__["ParameterComponent"]; });

/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log */ "../../jinge-framework/lib/components/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return _log__WEBPACK_IMPORTED_MODULE_6__["LogComponent"]; });

/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/lib/components/i18n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nComponent", function() { return _i18n__WEBPACK_IMPORTED_MODULE_7__["I18nComponent"]; });

/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dynamic */ "../../jinge-framework/lib/components/dynamic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicRenderComponent", function() { return _dynamic__WEBPACK_IMPORTED_MODULE_8__["DynamicRenderComponent"]; });










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/log.js":
/*!**********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/log.js ***!
  \**********************************************************************************/
/*! exports provided: LogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return LogComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");

/**
 * This component is only for development purpose
 */
class LogComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs) {
      super(attrs);
      const __vm_c7f66f7e8db8 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      const fn_1_c7f66f7e8db8 = () => {
        __vm_c7f66f7e8db8.msg = attrs.msg;
      };
      fn_1_c7f66f7e8db8();
      attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch('msg', fn_1_c7f66f7e8db8);
    }
    set msg(v) {
        // eslint-disable-next-line no-console
        console.log(v);
        this._msg = v;
    }
    get msg() {
        return this._msg;
    }
    __render() {
        return [document.createComment('log placeholder')];
    }
}
//# sourceMappingURL=log.js.map

/***/ }),

/***/ "../../jinge-framework/lib/components/parameter.js":
/*!****************************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/components/parameter.js ***!
  \****************************************************************************************/
/*! exports provided: ParameterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return ParameterComponent; });
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/component */ "../../jinge-framework/lib/core/component.js");


class ParameterComponent extends _core_component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
    constructor(attrs, params) {
      super(attrs);
      const __vm_c7f66f7e8db8 = this[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
      params.forEach(p => {
        __vm_c7f66f7e8db8[p] = attrs[p];
        attrs[_vm_common__WEBPACK_IMPORTED_MODULE_0__["$$"]].__watch(p, () => {
          __vm_c7f66f7e8db8[p] = attrs[p];
        });
      });
    }
}
//# sourceMappingURL=parameter.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/bootstrap.js":
/*!**********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/bootstrap.js ***!
  \**********************************************************************************/
/*! exports provided: bootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
function bootstrap(ComponentClazz, dom, attrs) {
    ComponentClazz.create(attrs).__renderToDOM(dom, dom !== document.body);
}
//# sourceMappingURL=bootstrap.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/component.js":
/*!**********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/component.js ***!
  \**********************************************************************************/
/*! exports provided: ComponentStates, ContextStates, __, isComponent, assertRenderResults, Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentStates", function() { return ComponentStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextStates", function() { return ContextStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__", function() { return __; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return isComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertRenderResults", function() { return assertRenderResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _vm_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm/common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _vm_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vm/proxy */ "../../jinge-framework/lib/vm/proxy.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/lib/core/messenger.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "../../jinge-framework/lib/core/style.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/lib/core/i18n.js");






var ComponentStates;
(function (ComponentStates) {
    ComponentStates[ComponentStates["INITIALIZE"] = 0] = "INITIALIZE";
    ComponentStates[ComponentStates["RENDERED"] = 1] = "RENDERED";
    ComponentStates[ComponentStates["WILLDESTROY"] = 2] = "WILLDESTROY";
    ComponentStates[ComponentStates["DESTROIED"] = 3] = "DESTROIED";
})(ComponentStates || (ComponentStates = {}));
var ContextStates;
(function (ContextStates) {
    ContextStates[ContextStates["UNTOUCH"] = 0] = "UNTOUCH";
    ContextStates[ContextStates["TOUCHED"] = 1] = "TOUCHED";
    ContextStates[ContextStates["UNTOUCH_FREEZED"] = 2] = "UNTOUCH_FREEZED";
    ContextStates[ContextStates["TOUCHED_FREEZED"] = 3] = "TOUCHED_FREEZED";
})(ContextStates || (ContextStates = {}));
const __ = Symbol('__');
/** Bellow is utility functions **/
function isComponent(v) {
    return __ in v;
}
function assertRenderResults(renderResults) {
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(renderResults) || renderResults.length === 0) {
        throw new Error('Render results of component is empty');
    }
    return renderResults;
}
class Component extends _messenger__WEBPACK_IMPORTED_MODULE_3__["Messenger"] {
    /**
     * ATTENTION!!!
     *
     * Don't use constructor directly, use static factory method `create(attrs)` instead.
     */
    constructor(attrs) {
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrs) || !(_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in attrs)) {
            throw new Error('Attributes passed to Component constructor must be ViewModel. See https://[todo]');
        }
        const compilerAttrs = attrs[__] || {};
        super(compilerAttrs.listeners);
        Object(_vm_proxy__WEBPACK_IMPORTED_MODULE_2__["createComponent"])(this);
        this[__] = {
            passedAttrs: attrs,
            context: compilerAttrs.context,
            contextState: ContextStates.UNTOUCH,
            slots: compilerAttrs.slots,
            state: ComponentStates.INITIALIZE,
            rootNodes: [],
            nonRootCompNodes: [],
            refs: null,
            relatedRefs: null,
            updateNextMap: null,
            compStylePid: null,
            deregDOM: null,
            deregI18N: null
        };
    }
    static create(attrs) {
        attrs = attrs || Object(_vm_proxy__WEBPACK_IMPORTED_MODULE_2__["attrs"])({});
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrs) || !(_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in attrs)) {
            attrs = Object(_vm_proxy__WEBPACK_IMPORTED_MODULE_2__["attrs"])(attrs || {});
        }
        return (new this(attrs))[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].proxy;
    }
    /**
     * Helper function to add i18n LOCALE_CHANGE listener.
     * Return deregister function which will remove event listener.
     * If you do dot call deregister function, it will be auto called when component is destroied.
     * @param {Function} listener listener bind to LOCALE_CHANGE event.
     * @param {Boolean} immediate call listener immediately, useful for component property initialize
     * @returns {Function} deregister function to remove listener
     */
    __i18nWatch(listener, immediate) {
        let deregs = this[__].deregI18N;
        if (!deregs) {
            this[__].deregI18N = deregs = [];
        }
        const unwatcher = _i18n__WEBPACK_IMPORTED_MODULE_5__["i18n"].watch(() => {
            // bind component to listener's function context.
            listener.call(this);
        }, immediate);
        const deregister = () => {
            unwatcher();
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(deregs, deregister);
        };
        deregs.push(deregister);
        return deregister;
    }
    /**
     * Helper function to add dom event listener.
     * Return deregister function which will remove event listener.
     * If you do dot call deregister function, it will be auto called when component is destroied.
     * @param {Boolean|Object} capture
     * @returns {Function} deregister function to remove listener
     */
    __domAddListener($el, eventName, listener, capture) {
        let deregs = this[__].deregDOM;
        if (!deregs) {
            this[__].deregDOM = deregs = [];
        }
        const lisDeregister = Object(_util__WEBPACK_IMPORTED_MODULE_0__["registerEvent"])($el, eventName, $event => {
            // bind component to listener's function context.
            listener.call(this, $event);
        }, capture);
        const deregister = () => {
            lisDeregister();
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(deregs, deregister);
        };
        deregs.push(deregister);
        return deregister;
    }
    __domPassListeners(ignoredEventNames, targetEl) {
        if (this[__].state !== ComponentStates.RENDERED) {
            throw new Error('domPassListeners must be applied to component which is rendered.');
        }
        const lis = this[_messenger__WEBPACK_IMPORTED_MODULE_3__["MESSENGER_LISTENERS"]];
        if (!lis || lis.size === 0) {
            return;
        }
        if (ignoredEventNames && !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(ignoredEventNames)) {
            targetEl = ignoredEventNames;
            ignoredEventNames = null;
        }
        else if (!targetEl) {
            targetEl = this.__firstDOM;
        }
        if (targetEl.nodeType !== Node.ELEMENT_NODE) {
            return;
        }
        lis.forEach((handlers, eventName) => {
            if (ignoredEventNames && ignoredEventNames.indexOf(eventName) >= 0) {
                return;
            }
            handlers.forEach(handler => {
                const { opts, fn } = handler;
                this.__domAddListener(targetEl, eventName, (handler.opts && (handler.opts.stop || handler.opts.prevent)
                    ? function ($evt) {
                        opts.stop && $evt.stopPropagation();
                        opts.prevent && $evt.preventDefault();
                        // this.domAddListener 会将 this 变成当前组件。所以需要显式地使用 fn.call(this) 来传递组件。
                        fn.call(this, $evt);
                    } : fn), handler.opts);
            });
        });
    }
    /**
     * Get rendered DOM Node which should be apply transition.
     *
     * 返回在 transition 动画时应该被应用到的 DOM 节点。
     */
    get __transitionDOM() {
        const el = this[__].rootNodes[0];
        return isComponent(el) ? el.__transitionDOM : el;
    }
    /**
     * Get first rendered DOM Node after Component is rendered.
     *
     * 按从左往右从上到下的深度遍历，找到的第一个 DOM 节点。
     */
    get __firstDOM() {
        const el = this[__].rootNodes[0];
        return isComponent(el) ? el.__firstDOM : el;
    }
    /**
     * Get last rendered DOM Node after Component is rendered.
     *
     * 按从右往左，从上到下的深度遍历，找到的第一个 DOM 节点（相对于从左到右的顺序是最后一个 DOM 节点）。
     */
    get __lastDOM() {
        const rns = this[__].rootNodes;
        const el = rns[rns.length - 1];
        return isComponent(el) ? el.__lastDOM : el;
    }
    /**
     * 对模板进行渲染的函数，也可能是渲染编译器传递进来的默认渲染函数。
     * 如果子组件需要进行自定义的渲染行为，需要重载该函数。
     */
    __render() {
        const Clazz = this.constructor;
        let renderFn = Clazz.template; // jinge-loader 已经将 string 转成了 RenderFn，此处强制转换类型以绕开 typescript.
        if (!renderFn && this[__].slots) {
            renderFn = this[__].slots.default;
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(renderFn)) {
            throw new Error(`Template of ${Clazz.name} not found. Forget static getter "template"?`);
        }
        _style__WEBPACK_IMPORTED_MODULE_4__["manager"].add(Clazz.style); // jinge-loader 已经将 string 转成了 ComponentStyle，此处强制转换类型以绕开 typescript.
        return renderFn(this);
    }
    /**
     * Render Component to HTMLElement.
     * This method is usually used to render the entire application.
     * See the `bootstrap()` function in `./bootstrap.js`.
     *
     * By default, the target element will be replaced(that means deleted).
     * But you can disable it by pass `replaceMode`=`false`,
     * which means component append to target as it's children.
     */
    __renderToDOM(targetEl, replaceMode = true) {
        if (this[__].state !== ComponentStates.INITIALIZE) {
            throw new Error('component has already been rendered.');
        }
        const rr = assertRenderResults(this.__render());
        _style__WEBPACK_IMPORTED_MODULE_4__["manager"].attch();
        if (replaceMode) {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["replaceChildren"])(targetEl.parentNode, rr, targetEl);
        }
        else {
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["appendChildren"])(targetEl, rr);
        }
        this.__handleAfterRender();
    }
    __destroy(removeDOM = true) {
        const comp = this[__];
        if (comp.state > ComponentStates.WILLDESTROY)
            return;
        comp.state = ComponentStates.WILLDESTROY;
        /*
         * once component is being destroied,
         *   we mark component and it's passed-attrs un-notifiable to ignore
         *   possible messeges occurs in BEFORE_DESTROY lifecycle callback.
         */
        this[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__notifiable = false;
        comp.passedAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__notifiable = false;
        // notify before destroy lifecycle
        // 需要注意，必须先 NOTIFY 向外通知销毁消息，再执行 BEFORE_DESTROY 生命周期函数。
        //   因为在 BEFORE_DESTROY 里会销毁外部消息回调函数里可能会用到的属性等资源。
        this.__notify('before-destroy');
        this.__beforeDestroy();
        // destroy children(include child component and html nodes)
        this.__handleBeforeDestroy(removeDOM);
        // clear messenger listeners.
        super.__off();
        // remove component style
        _style__WEBPACK_IMPORTED_MODULE_4__["manager"].remove(this.constructor.style);
        // destroy attrs passed to constructor
        comp.passedAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__destroy();
        comp.passedAttrs = null;
        // destroy view model
        this[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__destroy();
        // clear next tick update setImmediate
        if (comp.updateNextMap) {
            comp.updateNextMap.forEach(imm => {
                Object(_util__WEBPACK_IMPORTED_MODULE_0__["clearImmediate"])(imm);
            });
            comp.updateNextMap = null;
        }
        // destroy related refs:
        if (comp.relatedRefs) {
            comp.relatedRefs.forEach(info => {
                const refs = info.origin[__].refs;
                if (!refs)
                    return;
                const rns = refs.get(info.ref);
                if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(rns)) {
                    Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(rns, info.node || this);
                }
                else {
                    refs.delete(info.ref);
                }
            });
            comp.relatedRefs = null;
        }
        // clear all dom event listener and i18n watcher
        if (comp.deregDOM) {
            comp.deregDOM.forEach(deregFn => deregFn());
            comp.deregDOM = null;
        }
        if (comp.deregI18N) {
            comp.deregI18N.forEach(deregFn => deregFn());
            comp.deregI18N = null;
        }
        // clear properties
        comp.state = ComponentStates.DESTROIED;
        // unlink all symbol properties. maybe unnecessary.
        comp.rootNodes = comp.nonRootCompNodes =
            comp.refs = comp.slots = comp.context = null;
    }
    __handleBeforeDestroy(removeDOM = false) {
        this[__].nonRootCompNodes.forEach(component => {
            // it's not necessary to remove dom when destroy non-root component,
            // because those dom nodes will be auto removed when their parent dom is removed.
            component.__destroy(false);
        });
        let $parent;
        this[__].rootNodes.forEach(node => {
            if (isComponent(node)) {
                node.__destroy(removeDOM);
            }
            else if (removeDOM) {
                if (!$parent) {
                    $parent = node.parentNode;
                }
                $parent.removeChild(node);
            }
        });
    }
    __handleAfterRender() {
        /*
         * Set NOTIFIABLE=true to enable ViewModel notify.
         * Don't forgot to add these code if you override HANDLE_AFTER_RENDER
         */
        this[__].passedAttrs[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__notifiable = true;
        this[_vm_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__notifiable = true;
        this[__].rootNodes.forEach(n => {
            if (isComponent(n))
                n.__handleAfterRender();
        });
        this[__].nonRootCompNodes.forEach(n => {
            if (isComponent(n))
                n.__handleAfterRender();
        });
        this[__].state = ComponentStates.RENDERED;
        this[__].contextState = this[__].contextState === ContextStates.TOUCHED ? ContextStates.TOUCHED_FREEZED : ContextStates.UNTOUCH_FREEZED; // has been rendered, can't modify context
        this.__afterRender();
        this.__notify('after-render');
    }
    __updateIfNeed(handler, nextTick = true) {
        if (this[__].state !== ComponentStates.RENDERED) {
            return;
        }
        if (handler === false) {
            return this.__update();
        }
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(handler)) {
            handler = this.__update;
        }
        if (!nextTick) {
            handler.call(this);
            return;
        }
        let ntMap = this[__].updateNextMap;
        if (!ntMap)
            ntMap = this[__].updateNextMap = new Map();
        if (ntMap.has(handler)) {
            // already in queue.
            return;
        }
        ntMap.set(handler, Object(_util__WEBPACK_IMPORTED_MODULE_0__["setImmediate"])(() => {
            ntMap.delete(handler);
            handler.call(this);
        }));
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    __update(first) {
        // by default, do nothing.
    }
    __setContext(key, value, forceOverride = false) {
        if (this[__].contextState === ContextStates.UNTOUCH_FREEZED || this[__].contextState === ContextStates.TOUCHED_FREEZED) {
            throw new Error('Can\'t setContext after component has been rendered. Try put setContext code into constructor.');
        }
        if (this[__].contextState === ContextStates.UNTOUCH) {
            // we copy context to make sure child component do not modify context passed from parent.
            // we do not copy it by default until setContext function is called, because it unnecessary to waste memory if
            // child component do not modify the context.
            this[__].context = Object.assign({}, this[__].context);
            this[__].contextState = ContextStates.TOUCHED; // has been copied.
        }
        if (key in this[__].context) {
            // override exist may case hidden bug hard to debug.
            // so we force programmer to pass third argument to
            //   tell us he/she know what he/she is doing.
            if (!forceOverride) {
                throw new Error(`Contenxt with key: ${key.toString()} is exist. Pass third argument forceOverride=true to override it.`);
            }
        }
        this[__].context[key] = value;
    }
    __getContext(key) {
        return this[__].context ? this[__].context[key] : null;
    }
    /**
     * This method is used for compiler generated code.
     * Do not use it manually.
     */
    __setRef(ref, el, relatedComponent) {
        let rns = this[__].refs;
        if (!rns) {
            this[__].refs = rns = new Map();
        }
        let elOrArr = rns.get(ref);
        if (!elOrArr) {
            rns.set(ref, el);
        }
        else if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(elOrArr)) {
            elOrArr.push(el);
        }
        else {
            elOrArr = [elOrArr, el];
            rns.set(ref, elOrArr);
        }
        const isComp = isComponent(el);
        if (!isComp && this === relatedComponent) {
            return;
        }
        /**
         * 如果被 ref: 标记的元素（el）本身就是组件（Component）节点，
         *   那么 el 自身就是关联组件，el 自身在被销毁时可以执行删除关联 refs 的操作；
         * 如果 el 是 DOM 节点，则必须将它添加到关联组件（比如 <if>） relatedComponent 里，
         *   在 relatedComponent 被销毁时执行关联 refs 的删除。
         */
        let rbs = (isComp ? el : relatedComponent)[__].relatedRefs;
        if (!rbs) {
            (isComp ? el : relatedComponent)[__].relatedRefs = rbs = [];
        }
        rbs.push({
            origin: this,
            ref,
            node: isComp ? null : el
        });
    }
    /**
     * Get child node(or nodes) marked by 'ref:' attribute in template
     */
    __getRef(ref) {
        if (this[__].state !== ComponentStates.RENDERED) {
            // eslint-disable-next-line no-console
            console.warn(`Warning: call __getRef before component '${this.constructor.name}' rendered will get nothing. see https://[TODO]`);
        }
        return this[__].refs ? this[__].refs.get(ref) : null;
    }
    __addStylePid(inheritIds, styleId) {
        if (!inheritIds && !styleId)
            return;
        let ids = this[__].compStylePid;
        if (!ids) {
            ids = this[__].compStylePid = Object.create(null);
        }
        if (inheritIds) {
            Object.assign(ids, inheritIds);
        }
        if (styleId) {
            ids[styleId] = '';
        }
    }
    /**
     * lifecycle hook, called after rendered.
     */
    __afterRender() {
        // lifecycle hook, default do nothing.
    }
    /**
     * lifecycle hook, called before destroy.
     */
    __beforeDestroy() {
        // lifecycle hook, default do nothing.
    }
}
//# sourceMappingURL=component.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/i18n.js":
/*!*****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/i18n.js ***!
  \*****************************************************************************/
/*! exports provided: compile, i18n, _t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return compile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return i18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_t", function() { return _t; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/lib/core/messenger.js");


const DEFAULT_FILENAME = 'dist/locale.[locale].js';
/**
 * convert i18n text template to function
 * @param {String} text i18n formatted text template
 */
function compile(text) {
    // eslint-disable-next-line no-new-func
    return new Function('__ctx', `return \`${text.replace(/`/g, '\\`').replace(/\$\{\s*([\w\d._$]+)\s*\}/g, (m, n) => {
        return '${ __ctx.' + n + ' }';
    })}\`;`);
}
function defaultFetchFn(locale, filename) {
    return window.fetch(filename.replace('[locale]', locale)).then(res => res.text());
}
class I18nService extends _messenger__WEBPACK_IMPORTED_MODULE_1__["Messenger"] {
    constructor() {
        super();
        this.__deps = null;
        this.__data = null;
        this.__cache = new Map();
        this.__key = null;
        this.__regLoc(window.JINGE_I18N_DATA);
    }
    get locale() {
        return this.__data.locale;
    }
    /**
     * Register i18n render depedent.
     * This method will be called by compiler generated code, don't call it manully.
     */
    __regDep(idx, depent) {
        if (!this.__deps)
            this.__deps = [];
        if (!this.__deps[idx])
            throw new Error(`conflict at ${idx}`);
        this.__deps[idx] = depent;
    }
    /**
     * Register locale data, will be called in locale resource script.
     * Usually you don't need call this method manully.
     */
    __regLoc(data) {
        if (!data || this.__cache.has(data.locale)) {
            return;
        }
        this.__cache.set(data.locale, data);
        if (!this.__data) {
            this.__data = data;
        }
    }
    /**
     * switch to another locale/language
     * @param {string} locale locale to swtiched
     * @param {string | Function} filename filename of locale script with full path, or function fetch locale script.
     */
    switch(locale, filename = DEFAULT_FILENAME) {
        if (this.__data.locale === locale) {
            return;
        }
        const data = this.__cache.get(locale);
        if (!data) {
            const key = Object(_util__WEBPACK_IMPORTED_MODULE_0__["uid"])();
            this.__key = key;
            (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(filename) ? filename(locale) : defaultFetchFn(locale, filename)).then((code) => {
                // eslint-disable-next-line no-new-func
                (new Function('jinge', code))({
                    i18n: this
                });
                if (this.__key !== key || this.__data.locale === locale) {
                    /*
                      * ignore if callback has been expired.
                      * 使用闭包的技巧来检测当前回调是否已经过期，
                      * 即，是否已经有新的 fetchFn 函数的调用。
                      */
                    return;
                }
                const data = this.__cache.get(locale);
                this.__data = data;
                this.__notify('i18n-change', this.locale);
            });
        }
        else {
            this.__data = data;
            this.__notify('i18n-change', this.locale);
        }
    }
    __t(key, params) {
        const dict = this.__data.dictionary;
        if (!(key in dict)) {
            return 'i18n_missing';
        }
        let text = dict[key];
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(text)) {
            // text.startsWith("«") means reference to another key
            if (text.charCodeAt(0) === 171) {
                text = dict[text.substring(1)];
                if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(text)) {
                    text = compile(text);
                }
            }
            else {
                text = compile(text);
            }
            dict[key] = text;
        }
        return text(params);
    }
    __r(key, type) {
        const render = this.__data.render;
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(render)) {
            if (!this.__deps) {
                throw new Error('missing render depedents');
            }
            this.__data.render = render(...this.__deps);
        }
        const renderDict = render[type];
        if (!(key in renderDict)) {
            throw new Error(`missing i18n ${type} for key: ${key}`);
        }
        let fn = renderDict[key];
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(fn)) {
            // if fn is string, it's a reference to another key.
            renderDict[key] = fn = renderDict[fn];
        }
        return fn;
    }
    /**
     * Bind listener to LOCALE_CHANGE event,
     * return a function auto remove this listener
     * @param {Function} handler a listener bind to change event
     * @param {Boolean} immediate call listener immediately, default is false.
     * @returns {Function} a function auto remove listener
     */
    watch(listener, immediate) {
        this.__on('change', listener);
        if (immediate) {
            listener(this.locale);
        }
        return () => {
            this.__off('change', listener);
        };
    }
}
/* Singleton */
const i18n = new I18nService();
/**
 * Compiler helper function, the first parameter will be convert to i18n dictionary key,
 * and the whole function will be transform to `i18nService._t(key, params)`
 *
 * But after i18n locale resource script had been written, compiler won't transform it,
 * the function will work as text parse util.
 *
 * @param {String|Object} text
 * @param {Object} params
 */
function _t(text, params) {
    return params ? compile(text)(params) : text;
}
//# sourceMappingURL=i18n.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/index.js":
/*!******************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/index.js ***!
  \******************************************************************************/
/*! exports provided: bootstrap, ComponentStates, ContextStates, __, isComponent, assertRenderResults, Component, compile, i18n, _t, MESSENGER_LISTENERS, Messenger, emptyRenderFn, errorRenderFn, textRenderFn, i18nRenderFn, manager, TransitionStates, getDurationType, getDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "../../jinge-framework/lib/core/bootstrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _bootstrap__WEBPACK_IMPORTED_MODULE_0__["bootstrap"]; });

/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../../jinge-framework/lib/core/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentStates", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["ComponentStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextStates", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["ContextStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["__"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["isComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertRenderResults", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["assertRenderResults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/lib/core/i18n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["compile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_t", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["_t"]; });

/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/lib/core/messenger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MESSENGER_LISTENERS", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["MESSENGER_LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["Messenger"]; });

/* harmony import */ var _render_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render_fns */ "../../jinge-framework/lib/core/render_fns.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyRenderFn", function() { return _render_fns__WEBPACK_IMPORTED_MODULE_4__["emptyRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorRenderFn", function() { return _render_fns__WEBPACK_IMPORTED_MODULE_4__["errorRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textRenderFn", function() { return _render_fns__WEBPACK_IMPORTED_MODULE_4__["textRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18nRenderFn", function() { return _render_fns__WEBPACK_IMPORTED_MODULE_4__["i18nRenderFn"]; });

/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "../../jinge-framework/lib/core/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manager", function() { return _style__WEBPACK_IMPORTED_MODULE_5__["manager"]; });

/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transition */ "../../jinge-framework/lib/core/transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionStates", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TransitionStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDurationType", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["getDurationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["getDuration"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/messenger.js":
/*!**********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/messenger.js ***!
  \**********************************************************************************/
/*! exports provided: MESSENGER_LISTENERS, Messenger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSENGER_LISTENERS", function() { return MESSENGER_LISTENERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return Messenger; });
const MESSENGER_LISTENERS = Symbol('listeners');
class Messenger {
    constructor(templateListeners) {
        this[MESSENGER_LISTENERS] = null;
        if (templateListeners) {
            for (const eventName in templateListeners) {
                const handler = templateListeners[eventName];
                this.__on(eventName, handler.fn, handler.opts);
            }
        }
    }
    __notify(eventName, ...args) {
        if (!this[MESSENGER_LISTENERS])
            return;
        const listeners = this[MESSENGER_LISTENERS].get(eventName);
        if (!listeners)
            return;
        listeners.forEach(handler => {
            handler.fn(...args);
        });
    }
    __on(eventName, eventListener, options) {
        if (!this[MESSENGER_LISTENERS]) {
            this[MESSENGER_LISTENERS] = new Map();
        }
        let listeners = this[MESSENGER_LISTENERS].get(eventName);
        if (!listeners) {
            this[MESSENGER_LISTENERS].set(eventName, listeners = []);
        }
        if (listeners.findIndex(it => {
            return it.fn === eventListener;
        }) >= 0) {
            // eslint-disable-next-line no-console
            console.warn('dulplicated messenger listener', eventName, eventListener);
            return;
        }
        if (options && options.once) {
            const onceListener = (...args) => {
                eventListener(...args);
                this.__off(eventName, eventListener);
            };
            listeners.push({
                fn: onceListener,
                opts: options
            });
        }
        else {
            listeners.push({
                fn: eventListener,
                opts: options
            });
        }
    }
    __off(eventName, eventListener) {
        if (!this[MESSENGER_LISTENERS])
            return;
        if (!eventName) {
            this[MESSENGER_LISTENERS].clear();
            return;
        }
        const listeners = this[MESSENGER_LISTENERS].get(eventName);
        if (!listeners)
            return;
        if (!eventListener) {
            listeners.length = 0;
            return;
        }
        const idx = listeners.findIndex(it => {
            return it.fn === eventListener;
        });
        listeners.splice(idx, 1);
    }
}
//# sourceMappingURL=messenger.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/render_fns.js":
/*!***********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/render_fns.js ***!
  \***********************************************************************************/
/*! exports provided: emptyRenderFn, errorRenderFn, textRenderFn, i18nRenderFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyRenderFn", function() { return emptyRenderFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorRenderFn", function() { return errorRenderFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textRenderFn", function() { return textRenderFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18nRenderFn", function() { return i18nRenderFn; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/lib/core/i18n.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ "../../jinge-framework/lib/core/component.js");



function emptyRenderFn(component) {
    const el = document.createComment('empty');
    component[_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes.push(el);
    return el;
}
function errorRenderFn(component) {
    const el = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])('span', {
        style: 'color: red !important;'
    });
    el.textContent = 'template parsing failed! please check webpack log.';
    component[_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes.push(el);
    return el;
}
function textRenderFn(component, txtContent) {
    const el = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])(txtContent);
    component[_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes.push(el);
    return el;
}
function i18nRenderFn(component, key, isRoot = false) {
    const el = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
    const fn = () => {
        el.textContent = _i18n__WEBPACK_IMPORTED_MODULE_1__["i18n"].__t(key);
    };
    fn();
    component.__i18nWatch(fn);
    isRoot && component[_component__WEBPACK_IMPORTED_MODULE_2__["__"]].rootNodes.push(el);
    return el;
}
//# sourceMappingURL=render_fns.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/style.js":
/*!******************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/style.js ***!
  \******************************************************************************/
/*! exports provided: manager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manager", function() { return manager; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");

function isHideCssExists() {
    const $e = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])('span', {
        style: 'position:absolute;left:-10000px;',
        class: 'jg-hide'
    });
    document.body.appendChild($e);
    const exist = getComputedStyle($e).getPropertyValue('display') === 'none';
    document.body.removeChild($e);
    return exist;
}
class ComponentStyleManager {
    constructor() {
        this.m = new Map();
        this.s = 0;
    }
    create(sty) {
        if (this.s === 0)
            return;
        const $style = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])('style', {
            type: 'text/css',
            id: sty.dom
        });
        document.head.appendChild($style);
        if ($style.styleSheet) {
            $style.styleSheet.cssText = sty.css;
        }
        else {
            $style.textContent = sty.css;
        }
    }
    add(sty) {
        if (!sty)
            return;
        const styleMap = this.m;
        let info = styleMap.get(sty.id);
        if (info) {
            info.refs++;
            return;
        }
        info = {
            id: sty.id,
            css: sty.css,
            dom: `__${sty.id}__`,
            refs: 1
        };
        styleMap.set(sty.id, info);
        this.create(info);
    }
    attch() {
        if (this.s !== 0) {
            // eslint-disable-next-line no-console
            console.warn('component styles already attached.');
            return;
        }
        this.s = 1;
        if (!isHideCssExists()) {
            this.create({
                dom: `__jgsty_${Object(_util__WEBPACK_IMPORTED_MODULE_0__["uid"])()}__`,
                css: '.jg-hide{display:none!important}.jg-hide.jg-hide-enter,.jg-hide.jg-hide-leave{display:block!important}'
            });
        }
        this.m.forEach(info => {
            this.create(info);
        });
    }
    remove(sty) {
        if (!sty)
            return;
        const info = this.m.get(sty.id);
        if (!info)
            return;
        info.refs--;
        if (info.refs > 0) {
            return;
        }
        this.m.delete(info.id);
        if (this.s === 0) {
            return;
        }
        document.head.removeChild(document.getElementById(info.dom));
    }
}
// singleton
const manager = new ComponentStyleManager();
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "../../jinge-framework/lib/core/transition.js":
/*!***********************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/core/transition.js ***!
  \***********************************************************************************/
/*! exports provided: TransitionStates, getDurationType, getDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionStates", function() { return TransitionStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDurationType", function() { return getDurationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return getDuration; });
var TransitionStates;
(function (TransitionStates) {
    TransitionStates[TransitionStates["ENTERING"] = 1] = "ENTERING";
    TransitionStates[TransitionStates["ENTERED"] = 2] = "ENTERED";
    TransitionStates[TransitionStates["LEAVING"] = 3] = "LEAVING";
    TransitionStates[TransitionStates["LEAVED"] = 4] = "LEAVED";
})(TransitionStates || (TransitionStates = {}));
function getDurationType(el) {
    const cst = getComputedStyle(el);
    if (cst.getPropertyValue('transition-duration') !== '0s') {
        return 'transitionend';
    }
    else if (cst.getPropertyValue('animation-duration') !== '0s') {
        return 'animationend';
    }
    return null;
}
function parseDuration(v) {
    if (/ms$/.test(v)) {
        return parseInt(v);
    }
    else if (/s$/.test(v)) {
        return parseFloat(v) * 1000;
    }
    else {
        return 0;
    }
}
function getDuration(el) {
    const cst = getComputedStyle(el);
    let dur = cst.getPropertyValue('transition-duration');
    if (dur !== '0s') {
        return {
            type: 'transitionend',
            time: parseDuration(dur)
        };
    }
    dur = cst.getPropertyValue('animation-duration');
    if (dur !== '0s') {
        return {
            type: 'animationend',
            time: parseDuration(dur)
        };
    }
    return {
        type: null,
        time: 0
    };
}
//# sourceMappingURL=transition.js.map

/***/ }),

/***/ "../../jinge-framework/lib/index.js":
/*!*************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/index.js ***!
  \*************************************************************************/
/*! exports provided: ToggleClassComponent, ForEachComponent, ForComponent, HideComponent, BindHtmlComponent, IfComponent, SwitchComponent, ParameterComponent, LogComponent, I18nComponent, DynamicRenderComponent, bootstrap, ComponentStates, ContextStates, __, isComponent, assertRenderResults, Component, compile, i18n, _t, MESSENGER_LISTENERS, Messenger, emptyRenderFn, errorRenderFn, textRenderFn, i18nRenderFn, manager, TransitionStates, getDurationType, getDuration, typeOf, isObject, isString, isNumber, isUndefined, isArray, instanceOf, isBoolean, isFunction, isDOMNode, isPromise, arrayRemove, arrayPushIfNotExist, arrayEqual, uid, setImmediate, clearImmediate, setText, createTextNode, createFragment, appendChildren, replaceChildren, removeAttribute, setAttribute, createElement, createElementWithoutAttrs, createSVGElement, createSVGElementWithoutAttrs, createElementWithChild, insertAfter, addEvent, removeEvent, registerEvent, $$, isInnerObj, isViewModel, isPublicProperty, getPropertyName, parsePropertyPath, addParent, removeParent, shiftParent, ViewModelCoreImpl, loopCreateNode, loopGetNode, deleteNode, loopClearNode, handleCancel, handleOnce, loopHandle, loopNotify, ArrayProxyHandler, createViewModel, createAttributes, createComponent, vm, attrs, watch, unwatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "../../jinge-framework/lib/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleClassComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ToggleClassComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForEachComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ForEachComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ForComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HideComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["HideComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindHtmlComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["BindHtmlComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["IfComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["SwitchComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ParameterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["LogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["I18nComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicRenderComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["DynamicRenderComponent"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../../jinge-framework/lib/core/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["bootstrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentStates", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["ComponentStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContextStates", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["ContextStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["__"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["isComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertRenderResults", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["assertRenderResults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compile", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["compile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["i18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_t", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["_t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MESSENGER_LISTENERS", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["MESSENGER_LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["Messenger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyRenderFn", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["emptyRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorRenderFn", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["errorRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textRenderFn", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["textRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18nRenderFn", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["i18nRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manager", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["manager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionStates", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TransitionStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDurationType", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["getDurationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["getDuration"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "../../jinge-framework/lib/util/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeOf", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["typeOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instanceOf", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["instanceOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDOMNode", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isDOMNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayRemove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayPushIfNotExist", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayPushIfNotExist"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayEqual", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["uid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["setImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearImmediate", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["clearImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setText", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["setText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTextNode", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createTextNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendChildren", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["appendChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceChildren", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["replaceChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["removeAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["setAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementWithoutAttrs", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createElementWithoutAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSVGElement", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createSVGElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSVGElementWithoutAttrs", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createSVGElementWithoutAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementWithChild", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createElementWithChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["insertAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["addEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeEvent", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerEvent", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["registerEvent"]; });

/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vm */ "../../jinge-framework/lib/vm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$$", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["$$"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInnerObj", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["isInnerObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isViewModel", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["isViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPublicProperty", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["isPublicProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPropertyName", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["getPropertyName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePropertyPath", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["parsePropertyPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addParent", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["addParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeParent", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["removeParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shiftParent", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["shiftParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewModelCoreImpl", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["ViewModelCoreImpl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopCreateNode", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["loopCreateNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopGetNode", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["loopGetNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteNode", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["deleteNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopClearNode", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["loopClearNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleCancel", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["handleCancel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleOnce", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["handleOnce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopHandle", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["loopHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopNotify", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["loopNotify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayProxyHandler", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["ArrayProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createViewModel", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["createViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAttributes", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["createAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["createComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vm", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["vm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attrs", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["attrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["watch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unwatch", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["unwatch"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-framework/lib/util/array.js":
/*!******************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/util/array.js ***!
  \******************************************************************************/
/*! exports provided: arrayRemove, arrayPushIfNotExist, arrayEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return arrayRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayPushIfNotExist", function() { return arrayPushIfNotExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayEqual", function() { return arrayEqual; });
function arrayRemove(array, item) {
    const idx = array.indexOf(item);
    if (idx < 0)
        return false;
    array.splice(idx, 1);
    return true;
}
function arrayPushIfNotExist(array, item) {
    const idx = array.indexOf(item);
    if (idx >= 0)
        return;
    array.push(item);
}
function arrayEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;
}
//# sourceMappingURL=array.js.map

/***/ }),

/***/ "../../jinge-framework/lib/util/common.js":
/*!*******************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/util/common.js ***!
  \*******************************************************************************/
/*! exports provided: uid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return uid; });
let UID_INC = 0;
function uid() {
    return Date.now().toString(32) + '-' + Math.floor(Math.random() * 0xffffff).toString(32) + '-' + (UID_INC++).toString(32);
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "../../jinge-framework/lib/util/dom.js":
/*!****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/util/dom.js ***!
  \****************************************************************************/
/*! exports provided: setText, createTextNode, createFragment, appendChildren, replaceChildren, removeAttribute, setAttribute, createElement, createElementWithoutAttrs, createSVGElement, createSVGElementWithoutAttrs, createElementWithChild, insertAfter, addEvent, removeEvent, registerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setText", function() { return setText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextNode", function() { return createTextNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return createFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendChildren", function() { return appendChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceChildren", function() { return replaceChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return removeAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementWithoutAttrs", function() { return createElementWithoutAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSVGElement", function() { return createSVGElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSVGElementWithoutAttrs", function() { return createSVGElementWithoutAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementWithChild", function() { return createElementWithChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return addEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEvent", function() { return removeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerEvent", function() { return registerEvent; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../jinge-framework/lib/util/type.js");

function setText($element, text) {
    if (!Object(_type__WEBPACK_IMPORTED_MODULE_0__["isString"])(text)) {
        text = JSON.stringify(text);
    }
    $element.textContent = text;
}
function createTextNode(text = '') {
    return document.createTextNode(Object(_type__WEBPACK_IMPORTED_MODULE_0__["isString"])(text) ? text : JSON.stringify(text));
}
function createFragment(children) {
    const f = document.createDocumentFragment();
    children && children.forEach(n => {
        f.appendChild(Object(_type__WEBPACK_IMPORTED_MODULE_0__["isString"])(n) ? document.createTextNode(n) : n);
    });
    return f;
}
function appendChildren($parent, children) {
    $parent.appendChild(createFragment(children));
}
function replaceChildren($parent, children, oldNode) {
    $parent.replaceChild(createFragment(children), oldNode);
}
function removeAttribute($ele, attrName) {
    if (!attrName)
        return;
    if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrName)) {
        for (const attrN in attrName) {
            removeAttribute($ele, attrN);
        }
        return;
    }
    return $ele.removeAttribute(attrName);
}
function setAttribute($ele, attrName, attrValue) {
    if (!attrName)
        return;
    if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrName)) {
        for (const attrN in attrName) {
            setAttribute($ele, attrN, attrName[attrN]);
        }
        return;
    }
    if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(attrValue) || attrValue === null) {
        removeAttribute($ele, attrName);
    }
    else {
        $ele.setAttribute(attrName, attrValue);
    }
}
function _createEl($el, attrs, children) {
    if (attrs) {
        for (const an in attrs) {
            if (an && !Object(_type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(attrs[an])) {
                setAttribute($el, an, attrs[an]);
            }
        }
    }
    appendChildren($el, children);
    return $el;
}
function createElement(tag, attrs, ...children) {
    return _createEl(document.createElement(tag), attrs, children);
}
function createElementWithoutAttrs(tag, ...children) {
    return createElement(tag, null, ...children);
}
function createSVGElement(tag, attrs, ...children) {
    return _createEl(document.createElementNS('http://www.w3.org/2000/svg', tag), attrs, children);
}
function createSVGElementWithoutAttrs(tag, ...children) {
    return createSVGElement(tag, null, ...children);
}
function createElementWithChild(tag, attrs, child) {
    const $e = createElement(tag, attrs);
    $e.appendChild(child);
    return $e;
}
function insertAfter($parent, newNode, referenceNode) {
    const rn = referenceNode.nextSibling;
    if (!rn) {
        $parent.appendChild(newNode);
    }
    else {
        $parent.insertBefore(newNode, rn);
    }
}
// export function hasClass($ele: Element, className: string): boolean {
//   return $ele.classList.contains(className);
// }
// export function toggleClass($ele: Element, className: string, force?: boolean): boolean {
//   return $ele.classList.toggle(className, force);
// }
// export function addClass($ele: Element, className: string): boolean {
//   return toggleClass($ele, className, true);
// }
// export function removeClass($ele: Element, className: string): boolean {
//   return toggleClass($ele, className, false);
// }
// export function replaceClass($ele: Element, oldClass: string, newClass: string): void {
//   return $ele.classList.replace(oldClass, newClass);
// }
function addEvent($element, eventName, handler, capture) {
    Object(_type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(capture) && (capture = eventName.startsWith('touch') ? {
        capture: false,
        passive: true
    } : false);
    $element.addEventListener(eventName, handler, capture);
}
function removeEvent($element, eventName, handler) {
    $element.removeEventListener(eventName, handler);
}
/**
 * Add event to DOM element, similar as addEventListener,
 * but return deregister function which will call removeEventListener.
 *
 * @returns {Function} deregister function which will removeEventListener
 */
function registerEvent($element, eventName, handler, capture) {
    addEvent($element, eventName, handler, capture);
    return function deregister() {
        removeEvent($element, eventName, handler);
    };
}
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "../../jinge-framework/lib/util/index.js":
/*!******************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/util/index.js ***!
  \******************************************************************************/
/*! exports provided: typeOf, isObject, isString, isNumber, isUndefined, isArray, instanceOf, isBoolean, isFunction, isDOMNode, isPromise, arrayRemove, arrayPushIfNotExist, arrayEqual, uid, setImmediate, clearImmediate, setText, createTextNode, createFragment, appendChildren, replaceChildren, removeAttribute, setAttribute, createElement, createElementWithoutAttrs, createSVGElement, createSVGElementWithoutAttrs, createElementWithChild, insertAfter, addEvent, removeEvent, registerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../jinge-framework/lib/util/type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeOf", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["typeOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instanceOf", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["instanceOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDOMNode", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isDOMNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isPromise"]; });

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "../../jinge-framework/lib/util/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayRemove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayPushIfNotExist", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayPushIfNotExist"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayEqual", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayEqual"]; });

/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "../../jinge-framework/lib/util/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return _common__WEBPACK_IMPORTED_MODULE_2__["uid"]; });

/* harmony import */ var _setimm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setimm */ "../../jinge-framework/lib/util/setimm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return _setimm__WEBPACK_IMPORTED_MODULE_3__["setImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearImmediate", function() { return _setimm__WEBPACK_IMPORTED_MODULE_3__["clearImmediate"]; });

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "../../jinge-framework/lib/util/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setText", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["setText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTextNode", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createTextNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendChildren", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["appendChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceChildren", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["replaceChildren"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["removeAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["setAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementWithoutAttrs", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createElementWithoutAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSVGElement", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createSVGElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSVGElementWithoutAttrs", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createSVGElementWithoutAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementWithChild", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["createElementWithChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["insertAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["addEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeEvent", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["removeEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerEvent", function() { return _dom__WEBPACK_IMPORTED_MODULE_4__["registerEvent"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-framework/lib/util/setimm.js":
/*!*******************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/util/setimm.js ***!
  \*******************************************************************************/
/*! exports provided: setImmediate, clearImmediate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return setImmediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearImmediate", function() { return clearImmediate; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../jinge-framework/lib/util/type.js");
/**
 * setImmediate polyfill only for modern browsers
 * Copied from https://github.com/YuzuJS/setImmediate/blob/master/setImmediate.js
 * Simplified by Yuhang-Ge<abeyuhang@gmail.com>
 */

let autoIncrement = 0;
let nextHandle = 1; // Spec says greater than zero
let tasksByHandle;
let currentlyRunningATask = false;
let registerImmediate;
function setImmediateFallback(callback) {
    if (!Object(_type__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(callback) || arguments.length > 1) {
        throw new Error('setImmediate require callback function.');
    }
    tasksByHandle.set(nextHandle, callback);
    registerImmediate(nextHandle);
    // console.log('siiii', callback);
    return nextHandle++;
}
function clearImmediateFallback(handle) {
    tasksByHandle.delete(handle);
}
function runIfPresent(handle) {
    // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
        // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
        // 'too much recursion' error.
        setTimeout(runIfPresent, 0, handle);
        return;
    }
    const callback = tasksByHandle.get(handle);
    // console.log('stttt', handle, callback);
    if (!callback)
        return;
    currentlyRunningATask = true;
    try {
        callback();
    }
    finally {
        clearImmediateFallback(handle);
        currentlyRunningATask = false;
    }
}
if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.setImmediate)) {
    tasksByHandle = new Map();
    const messagePrefix = 'setImmediate$' + (autoIncrement++).toString(32) + '$';
    window.addEventListener('message', event => {
        if (event.source === window &&
            Object(_type__WEBPACK_IMPORTED_MODULE_0__["isString"])(event.data) &&
            event.data.startsWith(messagePrefix)) {
            runIfPresent(Number(event.data.slice(messagePrefix.length)));
        }
    }, false);
    registerImmediate = function (handle) {
        window.postMessage(messagePrefix + handle, '*');
    };
}
const setImmediate = setImmediateFallback;
const clearImmediate = clearImmediateFallback;
//# sourceMappingURL=setimm.js.map

/***/ }),

/***/ "../../jinge-framework/lib/util/type.js":
/*!*****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/util/type.js ***!
  \*****************************************************************************/
/*! exports provided: typeOf, isObject, isString, isNumber, isUndefined, isArray, instanceOf, isBoolean, isFunction, isDOMNode, isPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeOf", function() { return typeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instanceOf", function() { return instanceOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDOMNode", function() { return isDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
function typeOf(v) {
    return typeof v;
}
function isObject(v) {
    return v !== null && typeOf(v) === 'object';
}
function isString(v) {
    return typeOf(v) === 'string';
}
function isNumber(v) {
    return typeOf(v) === 'number' && !Number.isNaN(v) && Number.isFinite(v);
}
function isUndefined(v) {
    return typeOf(v) === 'undefined';
}
function isArray(v) {
    return Array.isArray(v);
}
function instanceOf(v, Clazz) {
    return v instanceof Clazz;
}
function isBoolean(v) {
    return typeof v === 'boolean' || instanceOf(v, Boolean);
}
function isFunction(v) {
    return typeOf(v) === 'function';
}
function isDOMNode(ele) {
    return instanceOf(ele, Node);
}
function isPromise(obj) {
    return isObject(obj) && isFunction(obj.then);
}
//# sourceMappingURL=type.js.map

/***/ }),

/***/ "../../jinge-framework/lib/vm/common.js":
/*!*****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/vm/common.js ***!
  \*****************************************************************************/
/*! exports provided: $$, isInnerObj, isViewModel, isPublicProperty, getPropertyName, parsePropertyPath, addParent, removeParent, shiftParent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$", function() { return $$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInnerObj", function() { return isInnerObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isViewModel", function() { return isViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPublicProperty", function() { return isPublicProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyName", function() { return getPropertyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePropertyPath", function() { return parsePropertyPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addParent", function() { return addParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeParent", function() { return removeParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shiftParent", function() { return shiftParent; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");

const $$ = Symbol('$$');
function isInnerObj(v) {
    const clazz = v.constructor;
    return clazz === RegExp || clazz === Date || clazz === Boolean;
}
function isViewModel(v) {
    return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(v) && ($$ in v);
}
function isPublicProperty(v) {
    return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(v) && v.charCodeAt(0) !== 95;
}
function getPropertyName(v) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(v)) {
        return v;
    }
    if (v === null) {
        return 'null';
    }
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(v)) {
        return 'undefined';
    }
    return v.toString();
}
function parsePropertyPath(propertyPath) {
    return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(propertyPath) ? (propertyPath.indexOf('.') > 0 ? propertyPath.split('.') : [propertyPath]) : (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(propertyPath) ? propertyPath : [propertyPath]);
}
function addParent(child, parent, property) {
    if (!child.__parents) {
        child.__parents = [];
    }
    child.__parents.push({
        core: parent,
        prop: property
    });
}
function removeParent(child, parent, property) {
    if (!child.__parents) {
        return;
    }
    const idx = child.__parents.findIndex(item => {
        return item.core === parent && item.prop === property;
    });
    if (idx >= 0) {
        child.__parents.splice(idx, 1);
    }
}
function shiftParent(child, parent, property, delta) {
    if (!child.__parents)
        return;
    const item = child.__parents.find(it => {
        return it.core === parent && it.prop === property;
    });
    if (item) {
        item.prop += delta;
    }
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "../../jinge-framework/lib/vm/core.js":
/*!***************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/vm/core.js ***!
  \***************************************************************************/
/*! exports provided: ViewModelCoreImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModelCoreImpl", function() { return ViewModelCoreImpl; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node */ "../../jinge-framework/lib/vm/node.js");
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify */ "../../jinge-framework/lib/vm/notify.js");




class ViewModelCoreImpl {
    /**
     * Don't use the constructor. Use createViewModel instead.
     */
    constructor(target) {
        this.__notifiable = true;
        this.__parents = null;
        this.__listeners = null;
        this.__related = null;
        this.__setters = null;
        this.target = target;
        this.proxy = null;
        Object.defineProperty(target, _common__WEBPACK_IMPORTED_MODULE_1__["$$"], {
            value: this,
            writable: false,
            configurable: true,
            enumerable: false
        });
    }
    __watch(propertyPath, handler, related) {
        propertyPath = Object(_common__WEBPACK_IMPORTED_MODULE_1__["parsePropertyPath"])(propertyPath);
        const dbStarIdx = propertyPath.indexOf('**');
        if (dbStarIdx >= 0 && dbStarIdx !== propertyPath.length - 1) {
            /**
             * 'a.b.**' is good.
             * 'a.b.**.c' is bad.
             */
            throw new Error('wizard "**" must be last element in path.');
        }
        const node = Object(_node__WEBPACK_IMPORTED_MODULE_2__["loopCreateNode"])(this, propertyPath);
        if (!node.__handlers) {
            node.__handlers = [];
        }
        if (node.__handlers.indexOf(handler) < 0) {
            node.__handlers.push(handler);
        }
        if (related && related !== this) {
            /**
             * If some child of this component is passed as argument(ie.
             * use arg:pass attribute) like ng-tranclude in angular 1.x,
             * the child may contain some messenger listeners not belong to
             * this component but belong to outer parent.
             *
             * When destroy this component, we should also remove messenger listeners
             *   belong to outer parent to prevent memory leak.
             * To implement this goal, we maitain VM_RELATED_LISTENERS.
             * When render view-tree, any messenger listeners belong to outer
             * parent, will be also linked under VM_RELATED_LISTENERS, then
             * when we destroy this component, the listeners can also be clear.
             *
             * For examle:
             *
             * <!-- outer parent: RootApp -->
             * <div>
             * <if expect="show">
             * <Tooltip>
             * <argument arg:pass="default">
             * <p>hello, world. my name is ${name}</p>
             * </argument>
             * </Tooltip>
             * </if>
             * </div>
             *
             * when the `show` variable changed from true to false, the
             * Tooltip component will be destroy. The messenger listener belong
             * to the outer parent RootApp which watch `name` variable should
             * also be removed.
             */
            related.__addRelated(this, propertyPath, handler);
        }
    }
    __unwatch(propertyPath, handler, related) {
        if (!propertyPath) {
            Object(_node__WEBPACK_IMPORTED_MODULE_2__["loopClearNode"])(this);
            return;
        }
        const node = Object(_node__WEBPACK_IMPORTED_MODULE_2__["loopGetNode"])(this, Object(_common__WEBPACK_IMPORTED_MODULE_1__["parsePropertyPath"])(propertyPath));
        if (!node) {
            return;
        }
        const handlers = node.__handlers;
        if (!handlers) {
            return;
        }
        if (!handler) { // remove all if second parameter is not provided
            handlers.forEach(_notify__WEBPACK_IMPORTED_MODULE_3__["handleCancel"]);
            handlers.length = 0;
        }
        else {
            Object(_notify__WEBPACK_IMPORTED_MODULE_3__["handleCancel"])(handler);
            Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(handlers, handler);
        }
        Object(_node__WEBPACK_IMPORTED_MODULE_2__["deleteNode"])(node);
        if (related && related !== this) {
            related.__rmRelated(this, propertyPath, handler);
        }
    }
    __notify(propertyPath, immediate = false) {
        if (!this.__notifiable) {
            return;
        }
        propertyPath = Object(_common__WEBPACK_IMPORTED_MODULE_1__["parsePropertyPath"])(propertyPath);
        if (this.__listeners) {
            Object(_notify__WEBPACK_IMPORTED_MODULE_3__["loopNotify"])(this, propertyPath, immediate);
        }
        const parents = this.__parents;
        parents && parents.forEach(ps => {
            const vm = ps.core;
            if (!vm) {
                // eslint-disable-next-line no-console
                console.error('dev-warn-unexpected: parent of ViewModelCore has been destroied but not unlink.');
                return;
            }
            vm.__notify([ps.prop].concat(propertyPath), immediate);
        });
    }
    __destroy() {
        this.__notifiable = false;
        this.__parents = null;
        // clear listeners
        Object(_node__WEBPACK_IMPORTED_MODULE_2__["loopClearNode"])(this);
        // unlink wrapper proxy
        this.proxy = null;
        if (this.__related) {
            this.__related.forEach((hooks, origin) => {
                hooks.forEach(hook => {
                    origin.__unwatch(hook.prop, hook.handler);
                });
            });
            this.__related = null;
        }
        const target = this.target;
        /*
         * 解除 ViewModel 之间的 VM_PARENTS 关联。
         * 使用 getOwnPropertyNames 可以获取所有属性，但无法获取 setter 函数定义的属性。
         */
        const sfm = this.__setters;
        if (sfm) {
            sfm.forEach((fn, prop) => {
                if (fn === null) {
                    return;
                }
                const v = target[prop];
                if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(v) || !(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in v)) {
                    return;
                }
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(v[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], this, prop);
            });
            this.__setters = null;
        }
        Object.getOwnPropertyNames(target).forEach(prop => {
            const v = target[prop];
            if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(v) || !(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in v)) {
                return;
            }
            Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(v[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], this, prop);
        });
        // unlink vm target
        delete target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]];
        this.target = null;
    }
    __addRelated(origin, propertyPath, handler) {
        if (!this.__related)
            this.__related = new Map();
        let hook = this.__related.get(origin);
        if (!hook) {
            this.__related.set(origin, hook = []);
        }
        hook.push({
            prop: propertyPath,
            handler
        });
    }
    __rmRelated(origin, propertyPath, handler) {
        if (!this.__related)
            return;
        const hook = this.__related.get(origin);
        if (!hook)
            return;
        const isPropArray = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(propertyPath);
        const i = hook.findIndex(it => {
            return handler === it.handler &&
                (isPropArray
                    ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayEqual"])(propertyPath, it.prop)
                    : propertyPath === it.prop);
        });
        if (i >= 0) {
            hook.splice(i, 1);
        }
    }
}
//# sourceMappingURL=core.js.map

/***/ }),

/***/ "../../jinge-framework/lib/vm/index.js":
/*!****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/vm/index.js ***!
  \****************************************************************************/
/*! exports provided: $$, isInnerObj, isViewModel, isPublicProperty, getPropertyName, parsePropertyPath, addParent, removeParent, shiftParent, ViewModelCoreImpl, loopCreateNode, loopGetNode, deleteNode, loopClearNode, handleCancel, handleOnce, loopHandle, loopNotify, ArrayProxyHandler, createViewModel, createAttributes, createComponent, vm, attrs, watch, unwatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../../jinge-framework/lib/vm/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$$", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["$$"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInnerObj", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["isInnerObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isViewModel", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["isViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPublicProperty", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["isPublicProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPropertyName", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["getPropertyName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePropertyPath", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["parsePropertyPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addParent", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["addParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeParent", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["removeParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shiftParent", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["shiftParent"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../../jinge-framework/lib/vm/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewModelCoreImpl", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["ViewModelCoreImpl"]; });

/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node */ "../../jinge-framework/lib/vm/node.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopCreateNode", function() { return _node__WEBPACK_IMPORTED_MODULE_2__["loopCreateNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopGetNode", function() { return _node__WEBPACK_IMPORTED_MODULE_2__["loopGetNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteNode", function() { return _node__WEBPACK_IMPORTED_MODULE_2__["deleteNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopClearNode", function() { return _node__WEBPACK_IMPORTED_MODULE_2__["loopClearNode"]; });

/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify */ "../../jinge-framework/lib/vm/notify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleCancel", function() { return _notify__WEBPACK_IMPORTED_MODULE_3__["handleCancel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleOnce", function() { return _notify__WEBPACK_IMPORTED_MODULE_3__["handleOnce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopHandle", function() { return _notify__WEBPACK_IMPORTED_MODULE_3__["loopHandle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loopNotify", function() { return _notify__WEBPACK_IMPORTED_MODULE_3__["loopNotify"]; });

/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proxy */ "../../jinge-framework/lib/vm/proxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayProxyHandler", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["ArrayProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createViewModel", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["createViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAttributes", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["createAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["createComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vm", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["vm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attrs", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["attrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["watch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unwatch", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["unwatch"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-framework/lib/vm/node.js":
/*!***************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/vm/node.js ***!
  \***************************************************************************/
/*! exports provided: loopCreateNode, loopGetNode, deleteNode, loopClearNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loopCreateNode", function() { return loopCreateNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loopGetNode", function() { return loopGetNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteNode", function() { return deleteNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loopClearNode", function() { return loopClearNode; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _notify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notify */ "../../jinge-framework/lib/vm/notify.js");


function loopCreateNode(parentNode, propertyPath, level = 0) {
    const propertyName = Object(_common__WEBPACK_IMPORTED_MODULE_0__["getPropertyName"])(propertyPath[level]);
    if (!parentNode.__listeners) {
        parentNode.__listeners = new Map();
    }
    let node = parentNode.__listeners.get(propertyName);
    if (!node) {
        node = {
            __parent: parentNode,
            __property: propertyName,
            __handlers: null,
            __listeners: null
        };
        parentNode.__listeners.set(propertyName, node);
    }
    if (propertyPath.length - 1 === level) {
        return node;
    }
    else {
        return loopCreateNode(node, propertyPath, level + 1);
    }
}
function loopGetNode(parentNode, propertyPath, level = 0) {
    var _a;
    const propertyName = Object(_common__WEBPACK_IMPORTED_MODULE_0__["getPropertyName"])(propertyPath[level]);
    if (!propertyName) {
        return null;
    }
    const node = (_a = parentNode.__listeners) === null || _a === void 0 ? void 0 : _a.get(propertyName);
    if (!node) {
        return null;
    }
    if (propertyPath.length - 1 === level) {
        return node;
    }
    else {
        return loopGetNode(node, propertyPath, level + 1);
    }
}
function deleteNode(node) {
    if ((node && node.__handlers && node.__handlers.length > 0) ||
        (node.__listeners && node.__listeners.size > 0)) {
        return null;
    }
    /**
     * if one node don't have any listener or child, delete it.
     */
    const parent = node.__parent;
    const property = node.__property;
    node.__parent = null; // unlink parent.
    parent.__listeners.delete(property);
    return parent;
}
function loopClearNode(node) {
    const listeners = node.__listeners;
    if (listeners) {
        // loop clear all child nodes
        listeners.forEach(sn => loopClearNode(sn));
        node.__listeners = null;
    }
    // destroy all handlers
    const handlers = node.__handlers;
    if (handlers) {
        // clear handler waiting to execute
        handlers.forEach(_notify__WEBPACK_IMPORTED_MODULE_1__["handleCancel"]);
        node.__handlers = null;
    }
    // unlink parent
    node.__parent = null;
}
//# sourceMappingURL=node.js.map

/***/ }),

/***/ "../../jinge-framework/lib/vm/notify.js":
/*!*****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/vm/notify.js ***!
  \*****************************************************************************/
/*! exports provided: handleCancel, handleOnce, loopHandle, loopNotify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleCancel", function() { return handleCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleOnce", function() { return handleOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loopHandle", function() { return loopHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loopNotify", function() { return loopNotify; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../../jinge-framework/lib/vm/common.js");


const handleTasks = new Map();
function handleCancel(handler) {
    const t = handleTasks.get(handler);
    if (t) {
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["clearImmediate"])(t.immediate);
        handleTasks.delete(handler);
    }
}
function handleOnce(handler, propertyPath) {
    if (handleTasks.has(handler)) {
        return;
    }
    const imm = Object(_util__WEBPACK_IMPORTED_MODULE_0__["setImmediate"])(() => {
        const arg = handleTasks.get(handler);
        try {
            handler(arg.propertyPath);
        }
        finally {
            handleTasks.delete(handler);
        }
    });
    handleTasks.set(handler, {
        immediate: imm,
        propertyPath: propertyPath
    });
}
function loopHandle(propertyPath, node, immediate) {
    const handlers = node.__handlers;
    handlers && handlers.forEach(handler => {
        if (immediate) {
            handler(propertyPath);
        }
        else {
            handleOnce(handler, propertyPath);
        }
    });
    const listeners = node.__listeners;
    listeners && listeners.forEach(c => {
        loopHandle(propertyPath, c, immediate);
    });
}
function loopNotify(vm, propertyPath, immediate, level = 0) {
    const listeners = vm.__listeners;
    if (!listeners) {
        return;
    }
    const propertyName = Object(_common__WEBPACK_IMPORTED_MODULE_1__["getPropertyName"])(propertyPath[level]);
    if (!propertyName) {
        return;
    }
    let node = listeners.get(propertyName);
    if (node) {
        if (propertyPath.length - 1 === level) {
            // loopHandle(props, node, config[CFG_VM_DEBUG] ? null : imms);
            loopHandle(propertyPath, node, immediate);
        }
        else {
            loopNotify(node, propertyPath, immediate, level + 1);
        }
    }
    node = listeners.get('*');
    if (node) {
        if (propertyPath.length - 1 === level) {
            loopHandle(propertyPath, node, true);
        }
        else {
            loopNotify(node, propertyPath, immediate, level + 1);
        }
    }
    node = listeners.get('**');
    if (node) {
        loopHandle(propertyPath, node, true);
    }
}
//# sourceMappingURL=notify.js.map

/***/ }),

/***/ "../../jinge-framework/lib/vm/proxy.js":
/*!****************************************************************************!*\
  !*** /Users/geyuhang/workspace/jinge-mvvm/jinge-framework/lib/vm/proxy.js ***!
  \****************************************************************************/
/*! exports provided: ArrayProxyHandler, createViewModel, createAttributes, createComponent, vm, attrs, watch, unwatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayProxyHandler", function() { return ArrayProxyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createViewModel", function() { return createViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAttributes", function() { return createAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return createComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vm", function() { return vm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attrs", function() { return attrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwatch", function() { return unwatch; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/lib/util/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../../jinge-framework/lib/vm/common.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "../../jinge-framework/lib/vm/core.js");



/**
 * check if property named "prop" is setter of instance "obj",
 * if it's setter, return setter function, otherwise return null.
 * @param {Object} obj
 * @param {String} prop
 *
 * 检测名称为 "prop" 的属性是否是 setter，如果是，返回该 setter 函数，
 * 否则，返回 null。
 * 由于 obj 可能是有继承关系的类的实例，因此需要向上检测继承的类的 prototype。
 */
function getSetterFnIfPropIsSetter(obj, prop) {
    let map = obj[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__setters;
    if (!map) {
        obj[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__setters = map = new Map();
    }
    if (!map.has(prop)) {
        let clazz = obj.constructor;
        let desc = Object.getOwnPropertyDescriptor(clazz.prototype, prop);
        let fn;
        if (desc) {
            fn = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(desc.set) ? desc.set : null;
            map.set(prop, fn);
            return fn;
        }
        // lookup to check parent classes
        clazz = Object.getPrototypeOf(clazz);
        while (clazz && clazz.prototype) {
            desc = Object.getOwnPropertyDescriptor(clazz.prototype, prop);
            if (desc) {
                fn = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(desc.set) ? desc.set : null;
                map.set(prop, fn);
                return fn;
            }
            clazz = Object.getPrototypeOf(clazz);
        }
        map.set(prop, null);
        return null;
    }
    else {
        return map.get(prop);
    }
}
function notifyPropChanged(vm, prop) {
    vm[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__notify(prop);
}
function __propSetHandler(target, prop, value, setFn, assertVM = true) {
    if (!Object(_common__WEBPACK_IMPORTED_MODULE_1__["isPublicProperty"])(prop)) {
        /**
         * 如果不强制转成 string，typescript 会报：Type 'symbol' cannot be used as an index type
         */
        target[prop] = value;
        return true;
    }
    const oldVal = target[prop];
    if (oldVal === value && !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(value)) {
        return true;
    }
    let newValIsVM = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) && !Object(_common__WEBPACK_IMPORTED_MODULE_1__["isInnerObj"])(value);
    if (newValIsVM) {
        newValIsVM = _common__WEBPACK_IMPORTED_MODULE_1__["$$"] in value;
        if (assertVM && !newValIsVM) {
            throw new Error(`public property "${prop.toString()}" of ViewModel must also be ViewModel`);
        }
    }
    // console.log(`'${prop}' changed from ${store[prop]} to ${value}`);
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(oldVal) && (_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in oldVal)) {
        Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(oldVal[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], prop);
    }
    setFn(target, prop, value);
    if (newValIsVM) {
        Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(value[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], prop);
    }
    notifyPropChanged(target, prop);
    return true;
}
function __objectPropSetFn(target, prop, value) {
    target[prop] = value;
}
function __componentPropSetFn(target, prop, value) {
    /**
     * we must ensure `this` in setter function to be `Proxy`
     *
     * 首先判断当前赋值的变量名，是否对应了一个 setter 函数，
     * 如果是 setter 函数，则应该显式地调用，
     *   并将 `this` 设置为该 target 的包装 Proxy，
     *   这样才能保正 setter 函数中其它赋值语句能触发 notify。
     * 如果不是 setter 函数，则简单地使用 target\[prop\] 赋值即可。
     */
    const setterFn = getSetterFnIfPropIsSetter(target, prop);
    if (setterFn) {
        setterFn.call(target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].proxy, value);
    }
    else {
        target[prop] = value;
    }
}
function objectPropSetHandler(target, prop, value) {
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in target)) {
        // ViewModel has been destroied.
        return true;
    }
    return __propSetHandler(target, prop, value, __objectPropSetFn);
}
function attrsPropSetHandler(target, prop, value) {
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in target)) {
        // ViewModel has been destroied.
        return true;
    }
    return __propSetHandler(target, prop, value, __objectPropSetFn, false);
}
function componentPropSetHandler(target, prop, value) {
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in target)) {
        // eslint-disable-next-line no-console
        console.warn(`call setter "${prop.toString()}" after destroied, resources such as setInterval maybe not released before destroy. component:`, target);
        return true;
    }
    return __propSetHandler(target, prop, value, __componentPropSetFn);
}
function arrayNotifyItems(target, idxStart, idxEnd) {
    let i = idxStart;
    if (idxStart > idxEnd) {
        i = idxEnd;
        idxEnd = idxStart;
    }
    for (; i < idxEnd; i++) {
        // console.log('npc', i);
        notifyPropChanged(target, i);
    }
}
function arrayLengthSetHandler(target, value) {
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value)) {
        throw new Error('bad argument. array length must be validate number.');
    }
    const oldLen = target.length;
    if (oldLen > value) {
        for (let i = value; i < oldLen; i++) {
            const v = target[i];
            if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(v)) {
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(v[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
            }
        }
    }
    target.length = value;
    // console.log('set .length from', oldLen, 'to', value);
    if (oldLen !== value) {
        notifyPropChanged(target, 'length');
        arrayNotifyItems(target, oldLen, value);
    }
    return true;
}
function arrayPropSetHandler(target, prop, value) {
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in target)) {
        return true;
    }
    if (prop === 'length') {
        return arrayLengthSetHandler(target, value);
    }
    /**
     * 即便是 arr[0] 这样的取值，在 Proxy 的 set 里面，传递的 property 也是 string 类型，即 "0"。
     * 因此，对数组也使用和对象一致的 objectPropSetHandler 来处理。
     */
    return __propSetHandler(target, prop, value, __objectPropSetFn);
}
const ObjectProxyHandler = {
    set: objectPropSetHandler
};
const PromiseProxyHandler = {
    get(target, prop) {
        if (prop === 'then' || prop === 'catch') {
            const v = target[prop];
            return function (...args) {
                return v.call(target, ...args);
            };
        }
        else {
            return target[prop];
        }
    },
    set: objectPropSetHandler
};
function _arrayReverseSort(target, fn, arg) {
    target.forEach((it, i) => {
        if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
            Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(it[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
        }
    });
    target[fn](arg);
    target.forEach((it, i) => {
        if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
            Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(it[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
        }
    });
    arrayNotifyItems(target, 0, target.length);
    // return wrapper proxy to ensure `arr.reverse() === arr`
    return target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].proxy;
}
function wrapSubArray(arr, wrapEachItem = false) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const rtn = wrapProxy(arr, true);
    // handleVMDebug(arr);
    arr.forEach((it, i) => {
        if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
            Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(it[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], arr[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
        }
        else if (wrapEachItem) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            arr[i] = createViewModel(it);
        }
    });
    return rtn;
}
function _arrayShiftOrUnshiftProp(arr, delta) {
    arr.forEach((el, i) => {
        if (!Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el))
            return;
        Object(_common__WEBPACK_IMPORTED_MODULE_1__["shiftParent"])(el[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], arr[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i, delta);
    });
}
function _argAssert(arg, fn) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(arg)) {
        if (!(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in arg)) {
            throw new Error(`argument passed to Array.${fn} must be ViewModel if the array is ViewModel`);
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}
const ArrayFns = {
    splice(target, idx, delCount, ...args) {
        if (idx < 0)
            idx = 0;
        args.forEach((arg, i) => {
            if (_argAssert(arg, 'splice')) {
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(arg[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], idx + i);
            }
        });
        for (let i = 0; i < delCount; i++) {
            if (idx + i >= target.length)
                break;
            const el = target[idx + i];
            if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) {
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(el[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], idx + i);
            }
        }
        const delta = args.length - delCount;
        if (delta !== 0) {
            for (let i = idx + delCount; i < target.length; i++) {
                const el = target[i];
                if (!Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) {
                    continue;
                }
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["shiftParent"])(el[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i, delta);
            }
        }
        const rtn = wrapSubArray(target.splice(idx, delCount, ...args));
        if (delta !== 0) {
            notifyPropChanged(target, 'length');
            for (let i = idx; i < target.length; i++) {
                notifyPropChanged(target, i);
            }
        }
        return rtn;
    },
    shift(target) {
        if (target.length === 0)
            return target.shift();
        _arrayShiftOrUnshiftProp(target, -1);
        const el = target.shift();
        if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) {
            Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(el[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], -1);
        }
        notifyPropChanged(target, 'length');
        for (let i = 0; i < target.length + 1; i++) {
            notifyPropChanged(target, i);
        }
        return el;
    },
    unshift(target, ...args) {
        if (args.length === 0)
            return target.unshift();
        args.forEach((arg, i) => {
            if (_argAssert(arg, 'unshift')) {
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(arg[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
            }
        });
        _arrayShiftOrUnshiftProp(target, args.length);
        const rtn = target.unshift(...args);
        notifyPropChanged(target, 'length');
        for (let i = 0; i < target.length; i++) {
            notifyPropChanged(target, i);
        }
        return rtn;
    },
    pop(target) {
        if (target.length === 0) {
            return target.pop();
        }
        const el = target.pop();
        if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) {
            Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(el[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target.length);
        }
        notifyPropChanged(target, 'length');
        notifyPropChanged(target, target.length);
        return el;
    },
    push(target, ...args) {
        if (args.length === 0)
            return target.push();
        args.forEach((arg, i) => {
            if (_argAssert(arg, 'push')) {
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(arg[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target.length + i);
            }
        });
        const rtn = target.push(...args);
        notifyPropChanged(target, 'length');
        for (let i = target.length - 1 - args.length; i < target.length; i++) {
            notifyPropChanged(target, i);
        }
        return rtn;
    },
    fill(target, v) {
        _argAssert(v, 'fill');
        target.forEach((it, i) => {
            if (it === v && !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(it)) {
                return;
            }
            if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["removeParent"])(it[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
            }
            target[i] = v;
            if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(v)) {
                Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(v[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], i);
            }
            notifyPropChanged(target, i);
        });
        return target[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].proxy;
    },
    reverse(target) {
        return _arrayReverseSort(target, 'reverse');
    },
    sort(target, fn) {
        return _arrayReverseSort(target, 'sort', fn);
    },
    concat(target, arr) {
        _argAssert(arr, 'concat');
        return wrapSubArray(target.concat(arr));
    },
    filter(target, fn) {
        return wrapSubArray(target.filter(fn));
    },
    slice(target, si, ei) {
        return wrapSubArray(target.slice(si, ei));
    },
    map(target, fn) {
        return wrapSubArray(target.map(fn), true);
    }
};
const ArrayProxyHandler = {
    get(target, prop) {
        if (prop in ArrayFns) {
            const fn = ArrayFns[prop];
            return function (...args) {
                return fn(target, ...args);
            };
        }
        else {
            return target[prop];
        }
    },
    set: arrayPropSetHandler
};
function wrapProxy(target, isArr) {
    const vmCore = new _core__WEBPACK_IMPORTED_MODULE_2__["ViewModelCoreImpl"](target);
    return vmCore.proxy = new Proxy(target, isArr ? ArrayProxyHandler : (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isPromise"])(target) ? PromiseProxyHandler : ObjectProxyHandler));
}
function wrapProp(parent, child, property) {
    // const v = vm[property];
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(child) || Object(_common__WEBPACK_IMPORTED_MODULE_1__["isInnerObj"])(child)) {
        return;
    }
    if (!(_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in child)) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        parent[property] = child = createViewModel(child);
    }
    Object(_common__WEBPACK_IMPORTED_MODULE_1__["addParent"])(child[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], parent[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]], property);
}
function createViewModel(target) {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(target)) {
        // directly return if alreay is ViewModel or inner object(Date/RegExp/Boolean).
        if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isInnerObj"])(target) || (_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in target)) {
            return target;
        }
        const isArr = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target);
        const rtn = wrapProxy(target, isArr);
        if (isArr) {
            for (let i = 0; i < target.length; i++) {
                wrapProp(target, target[i], i);
            }
        }
        else {
            for (const k in target) {
                if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isPublicProperty"])(k)) {
                    wrapProp(target, target[k], k);
                }
            }
        }
        return rtn;
    }
    else {
        return target;
    }
}
function createAttributes(attributes) {
    const vmCore = new _core__WEBPACK_IMPORTED_MODULE_2__["ViewModelCoreImpl"](attributes);
    // 初始化时默认的 notifiable 为 false，
    // 待 RENDER 结束后才修改为 true，用于避免无谓的消息通知。
    vmCore.__notifiable = false;
    return (vmCore.proxy = new Proxy(attributes, {
        set: attrsPropSetHandler
    }));
}
// function handleVMDebug(vm) {
//   if (!config[CFG_VM_DEBUG]) {
//     return;
//   }
//   let _di = window._VM_DEBUG;
//   if (!_di) {
//     _di = window._VM_DEBUG = {
//       id: 0, vms: []
//     };
//   }
//   vm[VM_DEBUG_ID] = _di.id++;
//   // if (isComponent(vm) && !(VM_DEBUG_NAME in vm)) {
//   //   vm[VM_DEBUG_NAME] = `<${vm.constructor.name}>`;
//   // }
//   _di.vms.push(vm);
// }
function createComponent(component) {
    if (_common__WEBPACK_IMPORTED_MODULE_1__["$$"] in component) {
        throw new Error('component has alreay been wrapped.');
    }
    // handleVMDebug(component);
    const vmCore = new _core__WEBPACK_IMPORTED_MODULE_2__["ViewModelCoreImpl"](component);
    // 初始化时 Component 默认的 VM_NOTIFIABLE 为 false，
    // 待 RENDER 结束后才修改为 true，用于避免无谓的消息通知。
    vmCore.__notifiable = false;
    return vmCore.proxy = new Proxy(component, {
        set: componentPropSetHandler
    });
}
function vm(target) {
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(target)) {
        throw new Error('vm() target must be object or array.');
    }
    return createViewModel(target);
}
function attrs(target) {
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(target) || Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(target)) {
        throw new Error('attrs() traget must be plain object.');
    }
    return createAttributes(target);
}
function watch(vm, propertyPath, handler) {
    vm[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__watch(propertyPath, handler);
}
function unwatch(vm, propertyPath, handler) {
    vm[_common__WEBPACK_IMPORTED_MODULE_1__["$$"]].__unwatch(propertyPath, handler);
}
//# sourceMappingURL=proxy.js.map

/***/ }),

/***/ "./app.html":
/*!******************!*\
  !*** ./app.html ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "h2",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
      "jQuery & echarts integration"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "p",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
          "div",
          {
            class: "chart-container"
          },
        );
        vm_0.__setRef('chart', el, component)
        return el;
      })()
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "p",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].compStylePid,
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
          "button",
          "Render Chart"
        );
        vm_0.__setRef('btn', el, component)
        return el;
      })()
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["__"]].rootNodes.push(el);
    return el;
  })()
  ];
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/lib/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts */ "echarts");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.html */ "./app.html");





class App extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static get template() {
    return _app_html__WEBPACK_IMPORTED_MODULE_3__["default"];
  }
  constructor(args) {
    super(args);
    const __vm_c7f66f7e8db8 = this[jinge__WEBPACK_IMPORTED_MODULE_0__["$$"]].proxy;
    __vm_c7f66f7e8db8._btnHandler = __vm_c7f66f7e8db8.onButtonClick.bind(this);
    __vm_c7f66f7e8db8._chart = null;
  }
  __afterRender() {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.__getRef('btn')).on('click', this._btnHandler);
  }
  __beforeDestroy() {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this.__getRef('btn')).off('click', this._btnHandler);
    this._chart && this._chart.dispose();
  }
  onButtonClick($evt) {
    console.log($evt);
    if (!this._chart) {
      this._chart = echarts__WEBPACK_IMPORTED_MODULE_2___default.a.init(this.__getRef('chart'));
    }
    // use configuration item and data specified to show chart
    this._chart.setOption({
      title: {
        text: 'ECharts entry example'
      },
      tooltip: {},
      legend: {
        data: ['Sales']
      },
      xAxis: {
        data: ["shirt", "cardign", "chiffon shirt", "pants", "heels", "socks"]
      },
      yAxis: {},
      series: [{
        name: 'Sales',
        type: 'bar',
        data: (new Array(6)).fill(0).map(() => Math.random() * 10 | 0 + 4)
      }]
    });
  }
}

Object(jinge__WEBPACK_IMPORTED_MODULE_0__["bootstrap"])(App, document.getElementById('root-app'));


/***/ }),

/***/ "echarts":
/*!**************************!*\
  !*** external "echarts" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = echarts;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map