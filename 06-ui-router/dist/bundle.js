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

/***/ "../../jinge-framework/components/class.js":
/*!*****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/class.js ***!
  \*****************************************************************/
/*! exports provided: ToggleClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleClassComponent", function() { return ToggleClassComponent; });
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/vm/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../jinge-framework/core/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");




class ToggleClassComponent extends _core__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(attrs) {
    if (!attrs || !Object(_util__WEBPACK_IMPORTED_MODULE_2__["isObject"])(attrs.class)) {
      throw new Error('<toggle-class> component require "class" attribute to be Object.');
    }
    const vm_109480b9ce = super(attrs);
    const fn_109480b9ce_2 = () => {
      vm_109480b9ce.class = attrs.class;
    };
    fn_109480b9ce_2();
    attrs[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('class', fn_109480b9ce_2);
    const fn_109480b9ce_3 = () => {
      vm_109480b9ce.trans = !!attrs.transition;
    };
    fn_109480b9ce_3();
    attrs[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('transition', fn_109480b9ce_3);
    vm_109480b9ce._t = null;
    vm_109480b9ce._i = null;
    Object(_vm__WEBPACK_IMPORTED_MODULE_0__["vmWatch"])(this, 'class.**', () => {
      vm_109480b9ce[_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE_IF_NEED"]]();
    });
    return vm_109480b9ce;
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]() {
    const rr = super[_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]();
    this[_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]](true);
    return rr;
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["BEFORE_DESTROY"]]() {
    this._t && this._t.clear();
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]](init) {
    const el = this.trans ? this[_core__WEBPACK_IMPORTED_MODULE_1__["GET_TRANSITION_DOM"]]() : this;
    if (el.nodeType !== Node.ELEMENT_NODE) {
      // ignore comment or text-node
      return;
    }
    if (this.trans && !this._t) {
      this._t = new Map();
    }
    const cs = this.class;
    Object.keys(cs).forEach(k => {
      const v = cs[k];
      if (!this.trans) {
        Object(_core__WEBPACK_IMPORTED_MODULE_1__["operateRootHtmlDOM"])(
          v ? _util__WEBPACK_IMPORTED_MODULE_2__["addClass"] : _util__WEBPACK_IMPORTED_MODULE_2__["removeClass"],
          el, k
        );
        return;
      }

      if (init) {
        this._t.set(k, [
          v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERED"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVED"], // state
          null // saved onEnd callback
        ]);
        v ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["addClass"])(el, k) : Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, k);
        return;
      }

      const t = this._t.get(k);
      if (!t) {
        console.error('Unsupport <toogle-class> attribute. see https://todo');
        return;
      }
      const s = t[0];
      if ((v && s <= _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERED"]) || (!v && s >= _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVING"])) {
        return;
      }

      if (s === (v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVING"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERING"])) {
        // debugger;
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, k + (v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER"]));
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, k + (v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE_ACTIVE"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER_ACTIVE"]));
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, _core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION_END"], t[1]);
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, _core__WEBPACK_IMPORTED_MODULE_1__["TS_ANIMATION_END"], t[1]);
        t[1] = null;
        this[_core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](_core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION"], v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_LEAVE_CANCELLED"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_ENTER_CANCELLED"], k, el);
      }
      const classOfStart = k + (v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE"]);
      const classOfActive = k + (v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER_ACTIVE"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE_ACTIVE"]);
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["addClass"])(el, classOfStart);
      // force render by calling getComputedStyle
      Object(_core__WEBPACK_IMPORTED_MODULE_1__["getDurationType"])(el);
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["addClass"])(el, classOfActive);
      const tsEndName = Object(_core__WEBPACK_IMPORTED_MODULE_1__["getDurationType"])(el);
      if (!tsEndName) {
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, classOfStart);
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, classOfActive);
        t[0] = v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERED"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVED"];
        v ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["addClass"])(el, k) : Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, k);
        return;
      }
      const onEnd = () => {
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, _core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION_END"], onEnd);
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, _core__WEBPACK_IMPORTED_MODULE_1__["TS_ANIMATION_END"], onEnd);
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, classOfStart);
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, classOfActive);
        t[1] = null;
        t[0] = v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERED"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVED"];
        v ? Object(_util__WEBPACK_IMPORTED_MODULE_2__["addClass"])(el, k) : Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, k);
        this[_core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](_core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION"], v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_AFTER_ENTER"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_AFTER_LEAVE"], k, el);
      };
      t[0] = v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERING"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVING"];
      t[1] = onEnd;
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["addEvent"])(el, tsEndName, onEnd);
      this[_core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](_core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION"], v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_BEFORE_ENTER"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_BEFORE_LEAVE"], k, el);
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["setImmediate"])(() => {
        this[_core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](_core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION"], v ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_ENTER"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_LEAVE"], k, el);
      });
    });
  }
}


/***/ }),

/***/ "../../jinge-framework/components/for.js":
/*!***************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/for.js ***!
  \***************************************************************/
/*! exports provided: FOR_LENGTH, FOR_KEYS, FOR_KEY_NAME, FOR_WAIT_UPDATE, FOR_UPDATE_ITEM, ForEachComponent, ForComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOR_LENGTH", function() { return FOR_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOR_KEYS", function() { return FOR_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOR_KEY_NAME", function() { return FOR_KEY_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOR_WAIT_UPDATE", function() { return FOR_WAIT_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOR_UPDATE_ITEM", function() { return FOR_UPDATE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForEachComponent", function() { return ForEachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForComponent", function() { return ForComponent; });
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/vm/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../jinge-framework/core/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");




const FOR_LENGTH = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('length');
const FOR_KEYS = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('keys');
const FOR_KEY_NAME = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('key');
const FOR_WAIT_UPDATE = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('waiting_update');
const FOR_UPDATE_ITEM = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('update_item');

const KEY_INDEX = 'index';
const KEY_EACH = 'each';
const EMP_ARR = [];

class ForEachComponent extends _core__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(attrs, item, index, isLast) {
    const vm_109480b9ce = super(attrs);
    vm_109480b9ce.each = item;
    vm_109480b9ce.index = index;
    vm_109480b9ce.isFirst = index === 0;
    vm_109480b9ce.isLast = isLast;
    return vm_109480b9ce;
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]() {
    const renderFn = this[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]][_util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"]];
    if (!renderFn) Object(_util__WEBPACK_IMPORTED_MODULE_2__["assertFail"])();
    return renderFn(this);
  }
}

function createEl(item, i, isLast, itemRenderFn, context, cstyPid) {
  const el = new ForEachComponent(Object(_vm__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
    [_vm__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: 'attrs_of_<for-each>',
    [_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
    [_core__WEBPACK_IMPORTED_MODULE_1__["CONTEXT"]]: context,
    [_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]]: {
      [_util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"]]: itemRenderFn
    }
  }), item, i, isLast);
  cstyPid && Object(_core__WEBPACK_IMPORTED_MODULE_1__["addParentStyleId"])(el, cstyPid);
  return el;
}

function appendRenderEach(item, i, isLast, itemRenderFn, roots, context, cstyPid) {
  const el = createEl(item, i, isLast, itemRenderFn, context, cstyPid);
  roots.push(el);
  return el[_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]();
}

function _assertVm(item, i) {
  if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isObject"])(item) && !Object(_vm__WEBPACK_IMPORTED_MODULE_0__["isInnerObj"])(item) && !(_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"] in item)) {
    throw new Error(`loop item [${i}] of <for> component must be ViewModel.`);
  }
}

function _prepareKey(item, i, keyMap, keyName) {
  const key = keyName === KEY_EACH ? item : keyName(item);
  if (keyMap.has(key)) {
    console.error(`loop items [${i}] and [${keyMap.get(key)}] of <for> component both have key '${key}', dulplicated key may cause update error.`);
  }
  keyMap.set(key, i);
  return key;
}

function renderItems(items, itemRenderFn, roots, keys, keyName, context, cstyPid) {
  const result = [];
  const tmpKeyMap = new Map();
  items.forEach((item, i) => {
    _assertVm(item, i);
    if (keyName !== KEY_INDEX) {
      keys.push(_prepareKey(item, i, tmpKeyMap, keyName));
    }
    result.push(...appendRenderEach(item, i, i === items.length - 1, itemRenderFn, roots, context, cstyPid));
  });
  return result;
}

function loopAppend($parent, el) {
  el[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]].forEach(node => {
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(node)) {
      loopAppend($parent, node);
    } else {
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["appendChild"])($parent, node);
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
  return (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isString"])(p) && p !== _util__WEBPACK_IMPORTED_MODULE_2__["STR_LENGTH"] && /^\d+$/.test(p)) ? Number(p) : p;
}

let INC = 0;
const ID = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('id');

class ForComponent extends _core__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(attrs) {
    if (attrs.key && !/^(index|each(.[\w\d$_]+)*)$/.test(attrs.key)) {
      throw new Error('Value of "_key" attribute of <for> component is invalidate. See https://[todo]');
    }
    const vm_109480b9ce = super(attrs);
    const fn_109480b9ce_2 = () => {
      vm_109480b9ce.loop = attrs.loop;
    };
    fn_109480b9ce_2();
    attrs[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('loop', fn_109480b9ce_2);
    vm_109480b9ce[ID] = INC++;
    const kn = attrs.key || KEY_INDEX;
    vm_109480b9ce[FOR_KEY_NAME] = kn;
    vm_109480b9ce[FOR_LENGTH] = 0;
    vm_109480b9ce[FOR_KEYS] = null;
    vm_109480b9ce[FOR_WAIT_UPDATE] = false;
    if (kn !== KEY_INDEX && kn !== KEY_EACH) {
      vm_109480b9ce[FOR_KEY_NAME] = new Function(KEY_EACH, `return ${ kn }`);
      const propCount = kn.split('.').length + 1;
      Object(_vm__WEBPACK_IMPORTED_MODULE_0__["vmWatch"])(this, 'loop.*.' + kn.slice(5), propPath => {
        if (propPath.length !== propCount || vm_109480b9ce[FOR_WAIT_UPDATE]) {
          return;
        }
        const items = vm_109480b9ce.loop;
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isArray"])(items) || items.length === 0)
          return;
        const p = _parseIndexPath(propPath[1]);
        if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(p) || p >= items.length) {
          return;
        }
        vm_109480b9ce[FOR_KEYS][p] = vm_109480b9ce[FOR_KEY_NAME](items[p]);
      });
    }
    Object(_vm__WEBPACK_IMPORTED_MODULE_0__["vmWatch"])(this, 'loop.*', propPath => {
      if (vm_109480b9ce[_core__WEBPACK_IMPORTED_MODULE_1__["STATE"]] !== _core__WEBPACK_IMPORTED_MODULE_1__["STATE_RENDERED"] || propPath.length !== 2 || vm_109480b9ce[FOR_WAIT_UPDATE]) {
        return;
      }
      const p = _parseIndexPath(propPath[1]);
      if (p === _util__WEBPACK_IMPORTED_MODULE_2__["STR_LENGTH"]) {
        vm_109480b9ce[FOR_WAIT_UPDATE] = true;
        vm_109480b9ce[_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE_IF_NEED"]]();
      } else if (Object(_util__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(p)) {
        vm_109480b9ce[FOR_UPDATE_ITEM](p);
      }
    });
    return vm_109480b9ce;
  }

  get loop() {
    return this._l;
  }

  set loop(v) {
    // console.log('set loop');
    this._l = v;
    this[FOR_WAIT_UPDATE] = true;
    this[_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE_IF_NEED"]]();
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]() {
    const roots = this[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]];
    const itemRenderFn = this[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]] ? this[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]][_util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"]] : null;
    if (!itemRenderFn) {
      roots.push(Object(_util__WEBPACK_IMPORTED_MODULE_2__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_2__["STR_EMPTY"]));
      return roots;
    }
    const items = this.loop;
    const keyName = this[FOR_KEY_NAME];
    if (keyName !== KEY_INDEX) this[FOR_KEYS] = [];
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isArray"])(items) || items.length === 0) {
      roots.push(Object(_util__WEBPACK_IMPORTED_MODULE_2__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_2__["STR_EMPTY"]));
      return roots;
    }
    this[FOR_LENGTH] = items.length;
    return renderItems(
      items,
      itemRenderFn,
      roots,
      this[FOR_KEYS],
      keyName,
      this[_core__WEBPACK_IMPORTED_MODULE_1__["CONTEXT"]],
      this[_core__WEBPACK_IMPORTED_MODULE_1__["CSTYLE_PID"]]
    );
  }

  [FOR_UPDATE_ITEM](index) {
    const items = this.loop;
    const roots = this[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]];
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_2__["isArray"])(items) || index >= roots.length) return;
    const keys = this[FOR_KEYS];
    const item = items[index];
    const oldEl = roots[index];
    if (oldEl.each === item) {
      return;
    }
    const itemRenderFn = this[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]] ? this[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]][_util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"]] : null;
    if (!itemRenderFn) return;
    // console.log('update item:', index);
    const keyName = this[FOR_KEY_NAME];
    if (keyName !== KEY_INDEX) {
      const newKey = keyName === KEY_EACH ? item : keyName(item);
      const oldKey = keys[index];
      if (newKey !== oldKey) {
        const $fd = oldEl[_core__WEBPACK_IMPORTED_MODULE_1__["GET_FIRST_DOM"]]();
        const newEl = createEl(
          item, index, oldEl.isLast,
          itemRenderFn, this[_core__WEBPACK_IMPORTED_MODULE_1__["CONTEXT"]], this[_core__WEBPACK_IMPORTED_MODULE_1__["CSTYLE_PID"]]
        );
        const rr = newEl[_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]();
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["insertBefore"])(Object(_util__WEBPACK_IMPORTED_MODULE_2__["getParent"])($fd), rr, $fd);
        oldEl[_core__WEBPACK_IMPORTED_MODULE_1__["DESTROY"]]();
        roots[index] = newEl;
        keys[index] = newKey;
        newEl[_core__WEBPACK_IMPORTED_MODULE_1__["HANDLE_AFTER_RENDER"]]();
        // console.log('update item render:', index);
      } else {
        oldEl.each = item;
      }
    } else {
      oldEl.each = item;
    }
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]]() {
    this[FOR_WAIT_UPDATE] = false;
    // console.log('for update');
    const itemRenderFn = this[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]] ? this[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]][_util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"]] : null;
    if (!itemRenderFn) return;

    const newItems = Object(_util__WEBPACK_IMPORTED_MODULE_2__["isArray"])(this.loop) ? this.loop : EMP_ARR;
    const roots = this[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]];
    const nl = newItems.length;
    const ol = this[FOR_LENGTH];
    // nothing changed, return directly.
    if (nl === 0 && ol === 0) return;

    const keyName = this[FOR_KEY_NAME];
    // if new length equal 0, clear & render comment.
    if (nl === 0 && ol > 0) {
      const fd = roots[0][_core__WEBPACK_IMPORTED_MODULE_1__["GET_FIRST_DOM"]]();
      const $cmt = Object(_util__WEBPACK_IMPORTED_MODULE_2__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_2__["STR_EMPTY"]);
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["insertBefore"])(Object(_util__WEBPACK_IMPORTED_MODULE_2__["getParent"])(fd), $cmt, fd);
      for (let i = 0; i < ol; i++) {
        roots[i][_core__WEBPACK_IMPORTED_MODULE_1__["DESTROY"]]();
      }
      roots.length = 1;
      roots[0] = $cmt;
      if (keyName !== KEY_INDEX) {
        this[FOR_KEYS].length = 0;
      }
      this[FOR_LENGTH] = 0;
      return;
    }

    this[FOR_LENGTH] = nl;
    const ctx = this[_core__WEBPACK_IMPORTED_MODULE_1__["CONTEXT"]];
    const cstyPid = this[_core__WEBPACK_IMPORTED_MODULE_1__["CSTYLE_PID"]];
    const firstEl = roots[0]; // if ol === 0, firstEl is comment, else is component
    const $parent = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getParent"])(ol === 0 ? firstEl : firstEl[_core__WEBPACK_IMPORTED_MODULE_1__["GET_FIRST_DOM"]]());

    if (keyName === KEY_INDEX) {
      let $f = null;
      if (ol === 0) roots.length = 0;

      for (let i = 0; i < nl; i++) {
        if (i < ol) {
          updateEl(roots[i], i, newItems);
        } else {
          if (!$f) $f = Object(_util__WEBPACK_IMPORTED_MODULE_2__["createFragment"])();
          Object(_util__WEBPACK_IMPORTED_MODULE_2__["appendChild"])($f, ...appendRenderEach(newItems[i], i, i === nl - 1, itemRenderFn, roots, ctx, cstyPid));
        }
      }
      if ($f) {
        const $le = ol === 0 ? firstEl : roots[ol - 1][_core__WEBPACK_IMPORTED_MODULE_1__["GET_LAST_DOM"]]();
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["insertAfter"])($parent, $f, $le);
        for (let i = ol; i < nl; i++) {
          roots[i][_core__WEBPACK_IMPORTED_MODULE_1__["HANDLE_AFTER_RENDER"]]();
        }
      }
      if (ol === 0) {
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeChild"])($parent, firstEl);
      }
      if (nl >= ol) return;
      for (let i = nl; i < ol; i++) {
        roots[i][_core__WEBPACK_IMPORTED_MODULE_1__["DESTROY"]]();
      }
      roots.splice(nl);

      return;
    }

    const oldKeys = this[FOR_KEYS];
    if (ol === 0) {
      roots.length = 0;
      const rs = renderItems(
        newItems, itemRenderFn, roots,
        oldKeys, keyName, this[_core__WEBPACK_IMPORTED_MODULE_1__["CONTEXT"]], this[_core__WEBPACK_IMPORTED_MODULE_1__["CSTYLE_PID"]]
      );
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["insertAfter"])($parent, Object(_util__WEBPACK_IMPORTED_MODULE_2__["createFragment"])(rs), firstEl);
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeChild"])($parent, firstEl);
      roots.forEach(el => el[_core__WEBPACK_IMPORTED_MODULE_1__["HANDLE_AFTER_RENDER"]]());
      return;
    }

    const oldKeyMap = new Map();
    oldKeys.forEach((k, i) => {
      oldKeyMap.set(k, i);
    });
    const newKeys = [];
    const newKeyMap = new Map();
    newItems.forEach((item, i) => {
      _assertVm(item, i);
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
        } else if (newKeyMap.has(oldKeys[oi]) && newKeyMap.get(oldKeys[oi]) >= ni) {
          if (oi === ol - 1) {
            $lastS = roots[oi][_core__WEBPACK_IMPORTED_MODULE_1__["GET_LAST_DOM"]]().nextSibling;
          }
          break;
        } else {
          if (oi === ol - 1) {
            $lastS = roots[oi][_core__WEBPACK_IMPORTED_MODULE_1__["GET_LAST_DOM"]]().nextSibling;
          }
          roots[oi][_core__WEBPACK_IMPORTED_MODULE_1__["DESTROY"]]();
          oi++;
        }
      }
      if (oi >= ol) {
        let $f = null;
        const cei = newRoots.length;
        for (; ni < nl; ni++) {
          const el = createEl(newItems[ni], ni, ni === nl - 1, itemRenderFn, ctx, cstyPid);
          if (!$f) $f = Object(_util__WEBPACK_IMPORTED_MODULE_2__["createFragment"])();
          Object(_util__WEBPACK_IMPORTED_MODULE_2__["appendChild"])($f, ...el[_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]());
          newRoots.push(el);
        }
        if ($f) {
          if ($lastS) {
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["insertBefore"])($parent, $f, $lastS);
          } else {
            Object(_util__WEBPACK_IMPORTED_MODULE_2__["appendChild"])($parent, $f);
          }
          for (let i = cei; i < newRoots.length; i++) {
            newRoots[i][_core__WEBPACK_IMPORTED_MODULE_1__["HANDLE_AFTER_RENDER"]]();
          }
        }
        break;
      }
      const oldKey = oldKeys[oi];
      let $f = null;
      let $nes = null;
      while (ni < nl) {
        const newKey = newKeys[ni];
        if (newKey === oldKey) break;

        let reuseEl = null;
        if (oldKeyMap.has(newKey)) {
          const oldIdx = oldKeyMap.get(newKey);
          if (oldIdx > oi && oldTags[oldIdx] === 0) {
            reuseEl = roots[oldIdx];
            oldTags[oldIdx] = 1;
          }
        }
        if (!$f) $f = Object(_util__WEBPACK_IMPORTED_MODULE_2__["createFragment"])();
        if (!reuseEl) {
          reuseEl = createEl(newItems[ni], ni, ni === nl - 1, itemRenderFn, ctx, cstyPid);
          Object(_util__WEBPACK_IMPORTED_MODULE_2__["appendChild"])($f, ...reuseEl[_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]());
          if (!$nes) $nes = [];
          $nes.push(reuseEl);
        } else {
          loopAppend($f, reuseEl);
          updateEl(reuseEl, ni, newItems);
        }
        newRoots.push(reuseEl);
        ni++;
      }
      if (ni >= nl) {
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["assertFail"])('unimpossible?!');
      }
      const el = roots[oi];
      $f && Object(_util__WEBPACK_IMPORTED_MODULE_2__["insertBefore"])($parent, $f, el[_core__WEBPACK_IMPORTED_MODULE_1__["GET_FIRST_DOM"]]());
      $nes && $nes.forEach(el => el[_core__WEBPACK_IMPORTED_MODULE_1__["HANDLE_AFTER_RENDER"]]());
      updateEl(el, ni, newItems);
      newRoots.push(el);
      oi++;
      ni++;
    }

    this[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]] = newRoots;
    this[FOR_KEYS] = newKeys;
  }
}


/***/ }),

/***/ "../../jinge-framework/components/hide.js":
/*!****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/hide.js ***!
  \****************************************************************/
/*! exports provided: STR_JG_HIDE, HideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_JG_HIDE", function() { return STR_JG_HIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideComponent", function() { return HideComponent; });
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/vm/index.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class */ "../../jinge-framework/components/class.js");



const STR_JG_HIDE = 'jg-hide';

class HideComponent extends _class__WEBPACK_IMPORTED_MODULE_1__["ToggleClassComponent"] {
  constructor(attrs) {
    attrs.class = Object(_vm__WEBPACK_IMPORTED_MODULE_0__["wrapViewModel"])({
      [STR_JG_HIDE]: !!attrs.test
    });
    Object(_vm__WEBPACK_IMPORTED_MODULE_0__["vmWatch"])(attrs, 'test', () => {
      if (attrs.class[STR_JG_HIDE] !== attrs.test) {
        attrs.class[STR_JG_HIDE] = attrs.test;
      }
    });
    // eslint-disable-next-line constructor-super
    return super(attrs);
  }
}


/***/ }),

/***/ "../../jinge-framework/components/html.js":
/*!****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/html.js ***!
  \****************************************************************/
/*! exports provided: BindHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindHtmlComponent", function() { return BindHtmlComponent; });
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/vm/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../jinge-framework/core/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");



function renderHtml(content) {
  const $d = Object(_util__WEBPACK_IMPORTED_MODULE_2__["createElementWithoutAttrs"])('div');
  $d.innerHTML = content || '';
  let cn = $d.childNodes;
  if (cn.length === 0) {
    cn = [Object(_util__WEBPACK_IMPORTED_MODULE_2__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_2__["STR_EMPTY"])];
  } else {
    cn = [].slice.call(cn); // convert NodeList to Array.
  }
  return cn;
}

class BindHtmlComponent extends _core__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(attrs) {
    if (attrs[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]])
      throw new Error('<bind-html/> don\'t accept any child.');
    if (!('content' in attrs))
      throw new Error('<bind-html/> require "content" attribute');
    const vm_109480b9ce = super(attrs);
    const fn_109480b9ce_3 = () => {
      vm_109480b9ce.c = attrs.content;
    };
    fn_109480b9ce_3();
    attrs[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('content', fn_109480b9ce_3);
    return vm_109480b9ce;
  }

  get c() {
    return this._c;
  }

  set c(v) {
    if (this._c === v) return;
    this._c = v;
    this[_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE_IF_NEED"]]();
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]() {
    return (this[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]] = renderHtml(this._c));
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]]() {
    const roots = this[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]];
    const oldFirstEl = roots[0];
    const $p = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getParent"])(oldFirstEl);
    const newEls = renderHtml(this._c);
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["insertBefore"])($p, newEls, oldFirstEl);
    roots.forEach(oldEl => Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeChild"])($p, oldEl));
    this[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]] = newEls;
  }
}


/***/ }),

/***/ "../../jinge-framework/components/i18n.js":
/*!****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/i18n.js ***!
  \****************************************************************/
/*! exports provided: I18nComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nComponent", function() { return I18nComponent; });
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/vm/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../jinge-framework/core/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");





const RENDER_KEY = Symbol('render_key');
const RENDER_VMS = Symbol('render_vms');
const ON_LOCALE_CHANGE = Symbol('fn_on_locale_change');

class I18nComponent extends _core__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(attrs, renderKey, renderVms) {
    const vm_109480b9ce = super(attrs);
    vm_109480b9ce[RENDER_KEY] = renderKey;
    vm_109480b9ce[RENDER_VMS] = renderVms;
    vm_109480b9ce[_core__WEBPACK_IMPORTED_MODULE_1__["I18N_WATCH"]](vm_109480b9ce[ON_LOCALE_CHANGE]);
    return vm_109480b9ce;
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]() {
    const renderFn = _core__WEBPACK_IMPORTED_MODULE_1__["i18n"][_core__WEBPACK_IMPORTED_MODULE_1__["I18N_GET_RENDER"]](this[RENDER_KEY]);
    return renderFn(this, ...this[RENDER_VMS]);
  }

  [ON_LOCALE_CHANGE]() {
    this[_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE_IF_NEED"]]();
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]]() {
    Object(_vm__WEBPACK_IMPORTED_MODULE_0__["vmRelatedClear"])(this[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_RELATED_LISTENERS"]]);

    let $el = this[_core__WEBPACK_IMPORTED_MODULE_1__["GET_LAST_DOM"]]();
    const $parentEl = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getParent"])($el);
    $el = $el.nextSibling;

    /*
     * 当前实现下，HANDLE_BEFORE_DESTROY 正好可以销毁子组件/子元素。
     */
    this[_core__WEBPACK_IMPORTED_MODULE_1__["HANDLE_BEFORE_DESTROY"]](true);
    /*
     * 将新的元素替换到原来的旧的元素的位置。
     */
    const els = this[_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]();
    if ($el) {
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["insertBefore"])($parentEl, els, $el);
    } else {
      Object(_util__WEBPACK_IMPORTED_MODULE_2__["appendChild"])($parentEl, els);
    }
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["BEFORE_DESTROY"]]() {
    this[RENDER_VMS] = null; // unlink vms, maybe not necessary
  }
}


/***/ }),

/***/ "../../jinge-framework/components/if.js":
/*!**************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/if.js ***!
  \**************************************************************/
/*! exports provided: IfComponent, SwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfComponent", function() { return IfComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return SwitchComponent; });
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/vm/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../jinge-framework/core/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");




const IF_STR_ELSE = 'else';
const T_MAP = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('transition_map');
const P_VAL = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('previous_value');
const OE_H = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('on_end_handler');

const C_BV = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('current_branch_value');
const C_VAL = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('current_value');
const ON_TS_END = Object(_util__WEBPACK_IMPORTED_MODULE_2__["Symbol"])('on_ts_end');

function createEl(renderFn, context, parentStyleIds) {
  const el = new _core__WEBPACK_IMPORTED_MODULE_1__["Component"](Object(_vm__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
    [_vm__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: 'attrs_of_<if>',
    [_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
    [_core__WEBPACK_IMPORTED_MODULE_1__["CONTEXT"]]: context,
    [_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]]: {
      [_util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"]]: renderFn
    }
  }));
  parentStyleIds && Object(_core__WEBPACK_IMPORTED_MODULE_1__["addParentStyleId"])(el, parentStyleIds);
  return el;
}

function renderSwitch(component) {
  const value = component[C_VAL];
  const acs = component[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]];
  if (component.ts && acs) {
    const t = new Map();
    for (const k in acs) {
      t.set(k, [
        k === value ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERED"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVED"],
        null // element
      ]);
    }
    component[T_MAP] = t;
    component[P_VAL] = value;
    component[OE_H] = component[ON_TS_END].bind(component);
  }
  const renderFn = acs ? acs[value] : null;
  const roots = component[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]];
  if (!renderFn) {
    roots.push(Object(_util__WEBPACK_IMPORTED_MODULE_2__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_2__["STR_EMPTY"]));
    return roots;
  }
  const el = createEl(renderFn, component[_core__WEBPACK_IMPORTED_MODULE_1__["CONTEXT"]], component[_core__WEBPACK_IMPORTED_MODULE_1__["CSTYLE_PID"]]);
  roots.push(el);
  return el[_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]();
}

function updateSwitch(component) {
  if (!Object(_core__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(component[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]][0]) && (
    !component[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]] || !component[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]][component[C_VAL]]
  )) {
    return;
  }

  if (component[T_MAP]) {
    return updateSwitchWithTransition(component);
  }

  doUpdate(component);
}

function doUpdate(component) {
  const roots = component[_core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]];
  const el = roots[0];
  const isC = Object(_core__WEBPACK_IMPORTED_MODULE_1__["isComponent"])(el);
  const fd = isC ? el[_core__WEBPACK_IMPORTED_MODULE_1__["GET_FIRST_DOM"]]() : el;
  const pa = Object(_util__WEBPACK_IMPORTED_MODULE_2__["getParent"])(isC ? fd : el);
  const renderFn = component[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]] ? component[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]][component[C_VAL]] : null;
  const ne = renderFn ? createEl(renderFn, component[_core__WEBPACK_IMPORTED_MODULE_1__["CONTEXT"]], component[_core__WEBPACK_IMPORTED_MODULE_1__["CSTYLE_PID"]]) : null;
  roots[0] = ne || Object(_util__WEBPACK_IMPORTED_MODULE_2__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_2__["STR_EMPTY"]);
  Object(_util__WEBPACK_IMPORTED_MODULE_2__["insertBefore"])(
    pa,
    ne ? ne[_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]() : roots[0],
    fd
  );
  if (isC) {
    el[_core__WEBPACK_IMPORTED_MODULE_1__["DESTROY"]]();
  } else {
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeChild"])(pa, fd);
  }
  ne && renderFn && ne[_core__WEBPACK_IMPORTED_MODULE_1__["HANDLE_AFTER_RENDER"]]();
  component[_core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]]('branch-switched', component[C_BV]);
}

function cancelTs(t, tn, e, component) {
  const el = t[1];
  if (el.nodeType !== Node.ELEMENT_NODE) {
    return;
  }
  const onEnd = component[OE_H];
  Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, tn + (e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE"]));
  Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, tn + (e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER_ACTIVE"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE_ACTIVE"]));
  Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, _core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION_END"], onEnd);
  Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, _core__WEBPACK_IMPORTED_MODULE_1__["TS_ANIMATION_END"], onEnd);
  component[_core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](_core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION"], e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_ENTER_CANCELLED"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_LEAVE_CANCELLED"], el);
}

function startTs(t, tn, e, component) {
  const el = t[1];
  const onEnd = component[OE_H];
  if (el.nodeType !== Node.ELEMENT_NODE) {
    onEnd();
    return;
  }
  const classOfStart = tn + (e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE"]);
  const classOfActive = tn + (e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER_ACTIVE"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE_ACTIVE"]);

  Object(_util__WEBPACK_IMPORTED_MODULE_2__["addClass"])(el, classOfStart);
  // force render by calling getComputedStyle
  Object(_core__WEBPACK_IMPORTED_MODULE_1__["getDurationType"])(el);
  Object(_util__WEBPACK_IMPORTED_MODULE_2__["addClass"])(el, classOfActive);
  const tsEndName = Object(_core__WEBPACK_IMPORTED_MODULE_1__["getDurationType"])(el);
  if (!tsEndName) {
    onEnd();
    return;
  }
  t[0] = e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERING"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVING"];
  Object(_util__WEBPACK_IMPORTED_MODULE_2__["addEvent"])(el, tsEndName, onEnd);
  component[_core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](_core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION"], e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_BEFORE_ENTER"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_BEFORE_LEAVE"], el);
  Object(_util__WEBPACK_IMPORTED_MODULE_2__["setImmediate"])(() => {
    component[_core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](_core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION"], e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_ENTER"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_LEAVE"], el);
  });
}
function updateSwitchWithTransition(component) {
  const value = component[C_VAL];
  const pv = component[P_VAL];
  const tn = component.ts;
  let pt = component[T_MAP].get(pv);
  if (!pt) {
    pt = [
      pv === IF_STR_ELSE ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVED"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERED"],
      null // element
    ];
    component[T_MAP].set(pv, pt);
  }
  // debugger;
  if (pt[0] === _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERING"]) {
    if (value === pv) return;
    cancelTs(pt, tn, true, component);
    startTs(pt, tn, false, component);
  } else if (pt[0] === _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVING"]) {
    if (value !== pv) return;
    cancelTs(pt, tn, false, component);
    startTs(pt, tn, true, component);
  } else if (pt[0] === _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERED"]) {
    pt[1] = component[_core__WEBPACK_IMPORTED_MODULE_1__["GET_TRANSITION_DOM"]]();
    startTs(pt, tn, false, component);
  } else if (pt[0] === _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVED"]) {
    pt[1] = component[_core__WEBPACK_IMPORTED_MODULE_1__["GET_TRANSITION_DOM"]]();
    startTs(pt, tn, true, component);
  }
}

function updateSwitchOnTransitionEnd(component) {
  // console.log('on end')
  const value = component[C_VAL];
  const pv = component[P_VAL];
  const tn = component.ts;
  const pt = component[T_MAP].get(pv);
  const e = pt[0] === _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERING"];
  const el = pt[1];

  if (el.nodeType === Node.ELEMENT_NODE) {
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, _core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION_END"], component[OE_H]);
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(el, _core__WEBPACK_IMPORTED_MODULE_1__["TS_ANIMATION_END"], component[OE_H]);
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, tn + (e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE"]));
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(el, tn + (e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER_ACTIVE"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE_ACTIVE"]));
    component[_core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](_core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION"], e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_AFTER_ENTER"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_AFTER_LEAVE"]);
  }

  pt[0] = e ? _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERED"] : _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVED"];

  if (e) return;

  doUpdate(component);
  component[P_VAL] = value;
  const ct = component[T_MAP].get(value);
  if (!ct) {
    return;
  }
  const fd = component[_core__WEBPACK_IMPORTED_MODULE_1__["GET_TRANSITION_DOM"]]();
  if (fd.nodeType !== Node.ELEMENT_NODE) {
    ct[0] = _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERED"];
    return;
  }

  ct[1] = fd;
  startTs(ct, tn, true, component);
}

function destroySwitch(component) {
  const tMap = component[T_MAP];
  if (tMap) {
    tMap.forEach((ts, v) => {
      if (ts[1]) {
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(ts[1], _core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION_END"], component[OE_H]);
        Object(_util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"])(ts[1], _core__WEBPACK_IMPORTED_MODULE_1__["TS_ANIMATION_END"], component[OE_H]);
      }
      ts.length = 0;
    });
    tMap.clear();
  }
}

class IfComponent extends _core__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(attrs) {
    const vm_109480b9ce = super(attrs);
    vm_109480b9ce[C_VAL] = _util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"];
    vm_109480b9ce[OE_H] = null;
    vm_109480b9ce[T_MAP] = null;
    vm_109480b9ce[P_VAL] = null;
    const fn_109480b9ce_5 = () => {
      vm_109480b9ce.expect = attrs.expect;
    };
    fn_109480b9ce_5();
    attrs[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('expect', fn_109480b9ce_5);
    const fn_109480b9ce_6 = () => {
      vm_109480b9ce.ts = attrs.transition;
    };
    fn_109480b9ce_6();
    attrs[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('transition', fn_109480b9ce_6);
    return vm_109480b9ce;
  }

  get expect() {
    return this[C_VAL] === _util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"];
  }

  set expect(v) {
    v = v ? _util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"] : IF_STR_ELSE;
    if (this[C_VAL] === v) return;
    this[C_VAL] = v;
    this[_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE_IF_NEED"]]();
  }

  get [C_BV]() {
    return this.expect;
  }

  [ON_TS_END]() {
    updateSwitchOnTransitionEnd(this);
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]() {
    return renderSwitch(this);
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]]() {
    updateSwitch(this);
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["BEFORE_DESTROY"]]() {
    destroySwitch(this);
  }
}

class SwitchComponent extends _core__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(attrs) {
    const vm_109480b9ce = super(attrs);
    vm_109480b9ce[OE_H] = null;
    vm_109480b9ce[T_MAP] = null;
    vm_109480b9ce[P_VAL] = null;
    const fn_109480b9ce_4 = () => {
      vm_109480b9ce.test = attrs.test;
    };
    fn_109480b9ce_4();
    attrs[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('test', fn_109480b9ce_4);
    const fn_109480b9ce_5 = () => {
      vm_109480b9ce.ts = attrs.transition;
    };
    fn_109480b9ce_5();
    attrs[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('transition', fn_109480b9ce_5);
    return vm_109480b9ce;
  }

  get test() {
    return this[C_VAL];
  }

  set test(v) {
    const acs = this[_core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]];
    if (!acs || !(v in acs)) {
      v = _util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"];
    }
    if (this[C_VAL] === v) return;
    this[C_VAL] = v;
    this[_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE_IF_NEED"]]();
  }

  get [C_BV]() {
    return this.test;
  }

  [ON_TS_END]() {
    updateSwitchOnTransitionEnd(this);
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]() {
    return renderSwitch(this);
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]]() {
    updateSwitch(this);
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["BEFORE_DESTROY"]]() {
    destroySwitch(this);
  }
}


/***/ }),

/***/ "../../jinge-framework/components/index.js":
/*!*****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/index.js ***!
  \*****************************************************************/
/*! exports provided: ToggleClassComponent, FOR_LENGTH, FOR_KEYS, FOR_KEY_NAME, FOR_WAIT_UPDATE, FOR_UPDATE_ITEM, ForEachComponent, ForComponent, STR_JG_HIDE, HideComponent, BindHtmlComponent, IfComponent, SwitchComponent, ParameterComponent, LogComponent, I18nComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "../../jinge-framework/components/class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleClassComponent", function() { return _class__WEBPACK_IMPORTED_MODULE_0__["ToggleClassComponent"]; });

/* harmony import */ var _for__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./for */ "../../jinge-framework/components/for.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_LENGTH", function() { return _for__WEBPACK_IMPORTED_MODULE_1__["FOR_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_KEYS", function() { return _for__WEBPACK_IMPORTED_MODULE_1__["FOR_KEYS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_KEY_NAME", function() { return _for__WEBPACK_IMPORTED_MODULE_1__["FOR_KEY_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_WAIT_UPDATE", function() { return _for__WEBPACK_IMPORTED_MODULE_1__["FOR_WAIT_UPDATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_UPDATE_ITEM", function() { return _for__WEBPACK_IMPORTED_MODULE_1__["FOR_UPDATE_ITEM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForEachComponent", function() { return _for__WEBPACK_IMPORTED_MODULE_1__["ForEachComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForComponent", function() { return _for__WEBPACK_IMPORTED_MODULE_1__["ForComponent"]; });

/* harmony import */ var _hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hide */ "../../jinge-framework/components/hide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_JG_HIDE", function() { return _hide__WEBPACK_IMPORTED_MODULE_2__["STR_JG_HIDE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HideComponent", function() { return _hide__WEBPACK_IMPORTED_MODULE_2__["HideComponent"]; });

/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html */ "../../jinge-framework/components/html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindHtmlComponent", function() { return _html__WEBPACK_IMPORTED_MODULE_3__["BindHtmlComponent"]; });

/* harmony import */ var _if__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./if */ "../../jinge-framework/components/if.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfComponent", function() { return _if__WEBPACK_IMPORTED_MODULE_4__["IfComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return _if__WEBPACK_IMPORTED_MODULE_4__["SwitchComponent"]; });

/* harmony import */ var _parameter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parameter */ "../../jinge-framework/components/parameter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return _parameter__WEBPACK_IMPORTED_MODULE_5__["ParameterComponent"]; });

/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log */ "../../jinge-framework/components/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return _log__WEBPACK_IMPORTED_MODULE_6__["LogComponent"]; });

/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/components/i18n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nComponent", function() { return _i18n__WEBPACK_IMPORTED_MODULE_7__["I18nComponent"]; });











/***/ }),

/***/ "../../jinge-framework/components/log.js":
/*!***************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/log.js ***!
  \***************************************************************/
/*! exports provided: LogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return LogComponent; });
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/vm/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../jinge-framework/core/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");



/**
 * This component is only for development purpose
 */
class LogComponent extends _core__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(attrs) {
    const vm_109480b9ce = super(attrs);
    const fn_109480b9ce_1 = () => {
      vm_109480b9ce.msg = attrs.msg;
    };
    fn_109480b9ce_1();
    attrs[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('msg', fn_109480b9ce_1);
    return vm_109480b9ce;
  }

  set msg(v) {
    console.log(v);
    this._msg = v;
  }

  get msg() {
    return this._msg;
  }

  [_core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]]() {
    return [Object(_util__WEBPACK_IMPORTED_MODULE_2__["createComment"])('log placeholder')];
  }
}


/***/ }),

/***/ "../../jinge-framework/components/parameter.js":
/*!*********************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/components/parameter.js ***!
  \*********************************************************************/
/*! exports provided: ParameterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return ParameterComponent; });
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/vm/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../jinge-framework/core/index.js");



class ParameterComponent extends _core__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(attrs, params) {
    const vm_109480b9ce = super(attrs);
    params.forEach(p => {
      vm_109480b9ce[p] = attrs[p];
      attrs[_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](p, () => {
        vm_109480b9ce[p] = attrs[p];
      });
    });
    return vm_109480b9ce;
  }
}


/***/ }),

/***/ "../../jinge-framework/core/bootstrap.js":
/*!***************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/core/bootstrap.js ***!
  \***************************************************************/
/*! exports provided: bootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/vm/index.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component */ "../../jinge-framework/core/component.js");




function bootstrap(Component, dom, attrs) {
  if (dom === document.body) {
    throw new Error('bootstrap dom cannot be document.body');
  }
  /**
   * as we must pass ViewModel-Object as first argument to Component constructor,
   * we simple pass an empty attrs.
   */
  const bootAttrs = attrs || {};
  const bootComponent = new Component(Object(_vm__WEBPACK_IMPORTED_MODULE_1__["wrapAttrs"])(bootAttrs));
  if (!Object(_component__WEBPACK_IMPORTED_MODULE_2__["isComponent"])(bootComponent)) Object(_util__WEBPACK_IMPORTED_MODULE_0__["assertFail"])();
  bootComponent[_component__WEBPACK_IMPORTED_MODULE_2__["RENDER_TO_DOM"]](dom);
}


/***/ }),

/***/ "../../jinge-framework/core/component.js":
/*!***************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/core/component.js ***!
  \***************************************************************/
/*! exports provided: NOTIFY_TRANSITION, TEMPLATE_RENDER, RENDER, RENDER_TO_DOM, ARG_COMPONENTS, PASSED_ATTRS, CLONE, DESTROY, CONTEXT, CONTEXT_STATE, ROOT_NODES, NON_ROOT_COMPONENT_NODES, REF_NODES, SET_REF_NODE, REF_BELONGS, RELATED_DOM_REFS, GET_STATE_NAME, AFTER_RENDER, HANDLE_AFTER_RENDER, HANDLE_BEFORE_DESTROY, GET_FIRST_DOM, GET_LAST_DOM, GET_TRANSITION_DOM, BEFORE_DESTROY, GET_CONTEXT, SET_CONTEXT, GET_REF, UPDATE, UPDATE_IF_NEED, UPDATE_NEXT_MAP, STATE, STATE_INITIALIZE, STATE_RENDERED, STATE_WILLDESTROY, STATE_DESTROIED, STATE_NAMES, DOM_ON, DOM_PASS_LISTENERS, I18N_WATCH, Component, destroyRelatedRefs, isComponent, assertRenderResults, operateRootHtmlDOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFY_TRANSITION", function() { return NOTIFY_TRANSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEMPLATE_RENDER", function() { return TEMPLATE_RENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDER", function() { return RENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDER_TO_DOM", function() { return RENDER_TO_DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARG_COMPONENTS", function() { return ARG_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PASSED_ATTRS", function() { return PASSED_ATTRS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLONE", function() { return CLONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESTROY", function() { return DESTROY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT", function() { return CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_STATE", function() { return CONTEXT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOT_NODES", function() { return ROOT_NODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NON_ROOT_COMPONENT_NODES", function() { return NON_ROOT_COMPONENT_NODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REF_NODES", function() { return REF_NODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REF_NODE", function() { return SET_REF_NODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REF_BELONGS", function() { return REF_BELONGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELATED_DOM_REFS", function() { return RELATED_DOM_REFS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STATE_NAME", function() { return GET_STATE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AFTER_RENDER", function() { return AFTER_RENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HANDLE_AFTER_RENDER", function() { return HANDLE_AFTER_RENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HANDLE_BEFORE_DESTROY", function() { return HANDLE_BEFORE_DESTROY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_FIRST_DOM", function() { return GET_FIRST_DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LAST_DOM", function() { return GET_LAST_DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TRANSITION_DOM", function() { return GET_TRANSITION_DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEFORE_DESTROY", function() { return BEFORE_DESTROY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CONTEXT", function() { return GET_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CONTEXT", function() { return SET_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_REF", function() { return GET_REF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_IF_NEED", function() { return UPDATE_IF_NEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_NEXT_MAP", function() { return UPDATE_NEXT_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE", function() { return STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_INITIALIZE", function() { return STATE_INITIALIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_RENDERED", function() { return STATE_RENDERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_WILLDESTROY", function() { return STATE_WILLDESTROY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_DESTROIED", function() { return STATE_DESTROIED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_NAMES", function() { return STATE_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM_ON", function() { return DOM_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM_PASS_LISTENERS", function() { return DOM_PASS_LISTENERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_WATCH", function() { return I18N_WATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyRelatedRefs", function() { return destroyRelatedRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return isComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertRenderResults", function() { return assertRenderResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operateRootHtmlDOM", function() { return operateRootHtmlDOM; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vm */ "../../jinge-framework/vm/index.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/core/messenger.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "../../jinge-framework/core/style.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/core/i18n.js");






const NOTIFY_TRANSITION = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('notify_transition');
const TEMPLATE_RENDER = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('template_render');
const RENDER = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('render');
const RENDER_TO_DOM = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('render_to_dom');
const ARG_COMPONENTS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('arg_components');
const PASSED_ATTRS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('passed_attrs');
const CLONE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('clone');
const DESTROY = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('destroy');
const CONTEXT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('context');
const CONTEXT_STATE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('context_state');
const ROOT_NODES = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('root_nodes');
const NON_ROOT_COMPONENT_NODES = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('non_root_components');
const REF_NODES = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('ref_nodes');
const SET_REF_NODE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('setChild');
const REF_BELONGS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('ref_belongs');
const RELATED_DOM_REFS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('related_dom_refs');
const GET_STATE_NAME = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('get_state_name');
const AFTER_RENDER = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('afterRender');
const HANDLE_AFTER_RENDER = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('handleAfterRender');
const HANDLE_BEFORE_DESTROY = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('handleBeforeDestroy');
const GET_FIRST_DOM = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('getFirstHtmlDOM');
const GET_LAST_DOM = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('getLastHtmlDOM');
const GET_TRANSITION_DOM = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('getTransitionDOM');
const BEFORE_DESTROY = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('beforeDestroy');
const GET_CONTEXT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('getContext');
const SET_CONTEXT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('setContext');
const GET_REF = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('getRef');
const UPDATE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('update');
const UPDATE_IF_NEED = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('update_if_need');
const UPDATE_NEXT_MAP = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('update_next_tick_map');
const STATE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('state');
const STATE_INITIALIZE = 0;
const STATE_RENDERED = 1;
const STATE_WILLDESTROY = 2;
const STATE_DESTROIED = 4;
const STATE_NAMES = [
  'initialize', 'rendered', 'willdestroy', 'destroied'
];

const DOM_ON = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('add_dom_listener');
const DOM_PASS_LISTENERS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('pass_all_listeners_to_dom');

const I18N_WATCH = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('i18n_watch');
const DOM_LISTENER_DEREGISTERS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('dom_listener_deregisters');
const I18N_LISTENER_DEREGISTERS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('i18n_listener_deregisters');

function copyContext(context) {
  if (!context) return null;
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["assignObject"])(Object(_util__WEBPACK_IMPORTED_MODULE_0__["createEmptyObject"])(), context);
}

class Component extends _messenger__WEBPACK_IMPORTED_MODULE_2__["Messenger"] {
  /**
   * compiler will auto transform the `template` getter's return value from String to Render Function.
   */
  static get template() {
    return null;
  }

  static get style() {
    return null;
  }

  /**
   * @param {Attributes} attrs Attributes passed from parent Component
   */
  constructor(attrs) {
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrs) || !(_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"] in attrs)) {
      throw new Error('First argument passed to Component constructor must be ViewModel with Messenger interface. See https://[todo]');
    }
    super(attrs[_messenger__WEBPACK_IMPORTED_MODULE_2__["LISTENERS"]]);

    this[PASSED_ATTRS] = attrs;

    this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]] = null;
    this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_SETTER_FN_MAP"]] = null;

    this[UPDATE_NEXT_MAP] = null;
    this[_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_PID"]] = null;
    this[CONTEXT] = attrs[CONTEXT];
    this[CONTEXT_STATE] = 0;
    this[ARG_COMPONENTS] = attrs[ARG_COMPONENTS];
    this[STATE] = STATE_INITIALIZE;
    /**
     * ROOT_NODES means root children of this component,
     *   include html-nodes and component-nodes.
     * We use this infomation to remove DOM after this component is destroied.
     * We do not maintain the whole parent-child view-tree but only root children,
     * because when we remove the root children, whole view-tree will be
     * removed, so we do not need waste memory to maintain whole view-tree.
     */
    this[ROOT_NODES] = [];
    /**
     * NON_ROOT_COMPONENT_NODES means nearest non-root component-nodes in the view-tree.
     * Node in view-tree have two types, html-node and component-node.
     *   html-node include html dom node and html text node,
     *   component-node is an instance of a Component.
     * For example, we have rendered a view-tree:
     *             RootApp(Component)
     *             /     |          \
     *         h1(Html)  h2(Html)  A(Component)
     *            |                 |
     *        C(Component)     D(Component)
     *
     * The nearest non-root component-nodes of RootApp include C,
     *   but not include A(as it's root) or D(as it's not nearest).
     *
     * By the way, the ROOT_NODES of view-tree above is [h1, h2, A]
     */
    this[NON_ROOT_COMPONENT_NODES] = [];
    /**
     * REF_NODES contains all children with ref: attribute.
     * REF_BELONGS contains all parent components which has this component as ref.
     *
     * 使用 ref: 标记的元素（Component 或 html node），会保存在 REF_NODES 中，
     *   之后通过 GET_REF 函数可以获取到元素实例。
     * 当标记的元素属于 <if> 或 <for> 等组件的 slot 时，这些元素可能被动态产生或销毁。
     *   需要在元素产生或销毁时，相应地把它从它所属于的 REF_NODES 中添加或删除。
     * 为了实现这个目的，对于 Component 元素，在将它添加到目标父组件的 REF_NODES 中的同时，
     *   会将目标父组件反向记录到该元素的 REF_BELONGS 中，从而实现当该元素被销毁时，
     *   可以将自己从它所属于的 REF_NODES 中删除；
     * 对于 html node 元素，我们会将其目标父组件记录到该元素的渲染关联组件的 RELATED_DOM_REFS。
     *   比如说，如果该 html 元素是 <if> 组件的 slot ，那它的渲染关联组件就是 <if> 内部的 Slot 组件，
     *   当 <if> 的条件发生变化时，实际上会销毁这个 Slot 组件。由于前面提到的 html 元素
     *   的 ref: 信息记录到了该 Slot 组件的 RELATED_DOM_REFS 里，因此就能反向地将
     *   这个 html 元素从它所属于的 REF_NODES 中删除。
     */
    this[REF_NODES] = null;
    this[REF_BELONGS] = null;
    this[RELATED_DOM_REFS] = null;

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
    this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_RELATED_LISTENERS"]] = null;

    // saved listener deregisters, will be auto called when component is destroied
    this[DOM_LISTENER_DEREGISTERS] = null;
    this[I18N_LISTENER_DEREGISTERS] = null;

    return Object(_vm__WEBPACK_IMPORTED_MODULE_1__["wrapComponent"])(this);
  }

  /**
   * Helper function to add i18n LOCALE_CHANGE listener.
   * Return deregister function which will remove event listener.
   * If you do dot call deregister function, it will be auto called when component is destroied.
   * @param {Function} listener listener bind to LOCALE_CHANGE event.
   * @param {Boolean} immediate call listener immediately, useful for component property initialize
   * @returns {Function} deregister function to remove listener
   */
  [I18N_WATCH](listener, immediate) {
    const deregs = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateArrayProperty"])(
      this,
      I18N_LISTENER_DEREGISTERS
    );
    const unwatcher = _i18n__WEBPACK_IMPORTED_MODULE_4__["i18n"].watch(() => {
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
   * @param {HtmlElement} $el
   * @param {String} eventName
   * @param {Function} listener
   * @param {Boolean|Object} capture
   * @returns {Function} deregister function to remove listener
   */
  [DOM_ON]($el, eventName, listener, capture) {
    const lisDeregister = Object(_util__WEBPACK_IMPORTED_MODULE_0__["registerEvent"])($el, eventName, $event => {
      // bind component to listener's function context.
      listener.call(this, $event);
    }, capture);

    const deregs = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateArrayProperty"])(this, DOM_LISTENER_DEREGISTERS);
    const deregister = () => {
      lisDeregister();
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(deregs, deregister);
    };
    deregs.push(deregister);
    return deregister;
  }

  /**
   * Helper function to pass all listener to first dom element.
   * @param {Array} ignoredEventNames event names not passed
   */
  [DOM_PASS_LISTENERS](ignoredEventNames) {
    if (this[STATE] !== STATE_RENDERED) {
      throw new Error('bindDOMListeners must be applied to component which is rendered.');
    }
    const lis = this[_messenger__WEBPACK_IMPORTED_MODULE_2__["LISTENERS"]];
    if (!lis || lis.length === 0) {
      return;
    }
    const $el = this[GET_FIRST_DOM]();
    if ($el.nodeType !== Node.ELEMENT_NODE) {
      return;
    }
    lis.forEach((handlers, eventName) => {
      if (ignoredEventNames && ignoredEventNames.indexOf(eventName) >= 0) {
        return;
      }
      handlers.forEach(fn => {
        this[DOM_ON]($el, eventName, fn.tag ? $evt => {
          fn.tag.stop && $evt.stopPropagation();
          fn.tag.prevent && $evt.preventDefault();
          fn($evt);
        } : fn);
      });
    });
  }

  [GET_TRANSITION_DOM]() {
    const rns = this[ROOT_NODES];
    if (rns.length === 0) Object(_util__WEBPACK_IMPORTED_MODULE_0__["assertFail"])();
    const el = rns[0];
    return isComponent(el) ? el[GET_TRANSITION_DOM]() : el;
  }

  [GET_FIRST_DOM]() {
    const rns = this[ROOT_NODES];
    if (rns.length === 0) Object(_util__WEBPACK_IMPORTED_MODULE_0__["assertFail"])();
    const el = rns[0];
    return isComponent(el) ? el[GET_FIRST_DOM]() : el;
  }

  [GET_LAST_DOM]() {
    const rns = this[ROOT_NODES];
    if (rns.length === 0) Object(_util__WEBPACK_IMPORTED_MODULE_0__["assertFail"])();
    const el = rns[rns.length - 1];
    return isComponent(el) ? el[GET_LAST_DOM]() : el;
  }

  [CLONE]() {
    throw new Error('abstract method');
  }

  [RENDER]() {
    const Clazz = this.constructor;
    let renderFn = Clazz.template;
    if (!renderFn && this[ARG_COMPONENTS]) {
      renderFn = this[ARG_COMPONENTS][_util__WEBPACK_IMPORTED_MODULE_0__["STR_DEFAULT"]];
    }
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(renderFn)) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["assertFail"])(`render function of ${Clazz.name} not found. Forget static getter "template"?`);
    }
    _style__WEBPACK_IMPORTED_MODULE_3__["manager"][_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_ADD"]](Clazz.style);
    return renderFn(this);
  }

  /**
   *
   * @param {HTMLElement} $targetDOM
   * @param {Boolean} replaceMode if false, use append mode
   */
  [RENDER_TO_DOM]($targetDOM, replaceMode = true) {
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isDOMNode"])($targetDOM)) Object(_util__WEBPACK_IMPORTED_MODULE_0__["assertFail"])();
    if (this[STATE] !== STATE_INITIALIZE) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["assertFail"])();
    }
    const rr = assertRenderResults(this[RENDER]());
    _style__WEBPACK_IMPORTED_MODULE_3__["manager"][_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_ATTACH"]]();
    if (replaceMode) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["replaceChild"])(Object(_util__WEBPACK_IMPORTED_MODULE_0__["getParent"])($targetDOM), rr, $targetDOM);
    } else {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["appendChild"])($targetDOM, rr);
    }
    this[HANDLE_AFTER_RENDER]();
  }

  [DESTROY](removeDOM = true) {
    if (this[STATE] > STATE_WILLDESTROY) return;
    this[STATE] = STATE_WILLDESTROY;
    /*
     * once component is being destroied,
     *   we mark component and it's passed-attrs un-notifiable to ignore
     *   possible messeges occurs in BEFORE_DESTROY lifecycle callback.
     */
    this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_1__["VM_NOTIFIABLE"]] = false;
    this[PASSED_ATTRS][_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_1__["VM_NOTIFIABLE"]] = false;

    // notify before destroy lifecycle
    // 需要注意，必须先 NOTIFY 向外通知销毁消息，再执行 BEFORE_DESTROY 生命周期函数。
    //   因为在 BEFORE_DESTROY 里会销毁外部消息回调函数里可能会用到的属性等资源。
    this[_messenger__WEBPACK_IMPORTED_MODULE_2__["NOTIFY"]](_util__WEBPACK_IMPORTED_MODULE_0__["BEFORE_DESTROY_EVENT_NAME"], this);
    this[BEFORE_DESTROY]();
    // destroy children(include child component and html nodes)
    this[HANDLE_BEFORE_DESTROY](removeDOM);
    // clear messenger listeners.
    super[_messenger__WEBPACK_IMPORTED_MODULE_2__["CLEAR"]]();
    // remove component style
    _style__WEBPACK_IMPORTED_MODULE_3__["manager"][_style__WEBPACK_IMPORTED_MODULE_3__["CSTYLE_DEL"]](this.constructor.style);
    // destroy attrs passed to constructor
    const attrs = this[PASSED_ATTRS];
    attrs[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_1__["VM_DESTROY"]]();
    // unlink all symbol property. may be unnecessary.
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOwnPropertySymbols"])(attrs, p => {
      attrs[p] = null;
    });

    /*
     * reset HOST object's all public properties to null
     *   to remove HOST object from old property value's VM_PARENTS
     *
     * 将所有公共属性的属性值重置为 null，从而解除 ViewModel 之间的 VM_PARENTS 关联，回收资源和防止潜在 bug。
     *   使用 getOwnPropertyNames 可以获取所有属性，但无法获取 setter 函数定义的属性。
     *   因此，先从 VM_SETTER_FN_MAP 中取到所有使用过的属性，主动调用属性值的 REMOVE_PARENT；然后使用 getOwnPropertyNames 简单地重置 null。
     */
    const sfm = this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_SETTER_FN_MAP"]];
    if (sfm) {
      sfm.forEach((fn, prop) => {
        if (fn === null) return;
        const v = this[prop];
        if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(v) && (_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"] in v)) {
          v[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_1__["VM_REMOVE_PARENT"]](
            this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_1__["VM_HOST"]],
            prop
          );
        }
      });
      sfm.clear();
      this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_SETTER_FN_MAP"]] = null;
    }
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOwnPropertyNames"])(this, prop => {
      if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(this[prop])) {
        this[prop] = null;
      }
    });
    // destroy view model, it's import to pass false as argument
    this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_1__["VM_DESTROY"]](false);

    // clear next tick update setImmediate
    const unm = this[UPDATE_NEXT_MAP];
    if (unm) {
      unm.forEach(imm => {
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["clearImmediate"])(imm);
      });
      unm.clear();
      this[UPDATE_NEXT_MAP] = null;
    }

    // destroy related refs:
    destroyRelatedRefs(this);
    // clear context.
    destroyContext(this);
    // clear all dom event listener and i18n watcher
    releaseDeregisters(this, DOM_LISTENER_DEREGISTERS);
    releaseDeregisters(this, I18N_LISTENER_DEREGISTERS);

    // clear properties
    this[STATE] = STATE_DESTROIED;
    // unlink all symbol properties. maybe unnecessary.
    this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_SETTER_FN_MAP"]] =
      this[PASSED_ATTRS] =
      this[NON_ROOT_COMPONENT_NODES] =
      this[ROOT_NODES] =
      this[REF_NODES] =
      this[REF_BELONGS] =
      this[ARG_COMPONENTS] = null;
    // unlink VM_ATTRS, mark component destroied
    // 这行代码必须放在最后，因为在 ../viewmodel/proxy.js 里面，
    //   需要使用 VM_ATTRS 是否存在来判断组件是否已经销毁。
    this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]] = null;
  }

  [HANDLE_BEFORE_DESTROY](removeDOM) {
    this[NON_ROOT_COMPONENT_NODES].forEach(component => {
      // it's not necessary to remove dom when destroy non-root component,
      // because those dom nodes will be auto removed when their parent dom is removed.
      component[DESTROY](false);
    });
    this[NON_ROOT_COMPONENT_NODES].length = 0;

    let $parent;
    this[ROOT_NODES].forEach(node => {
      if (isComponent(node)) {
        node[DESTROY](removeDOM);
      } else if (removeDOM) {
        if (!$parent) {
          $parent = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getParent"])(node);
        }
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["removeChild"])($parent, node);
      }
    });
    this[ROOT_NODES].length = 0;
  }

  [HANDLE_AFTER_RENDER]() {
    /*
     * Set NOTIFIABLE=true to enable ViewModel notify.
     * Don't forgot to add these code if you override HANDLE_AFTER_RENDER
     */
    this[PASSED_ATTRS][_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_1__["VM_NOTIFIABLE"]] = true;
    this[_vm__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_vm__WEBPACK_IMPORTED_MODULE_1__["VM_NOTIFIABLE"]] = true;

    this[ROOT_NODES].forEach(n => {
      if (isComponent(n)) n[HANDLE_AFTER_RENDER]();
    });
    this[NON_ROOT_COMPONENT_NODES].forEach(n => {
      if (isComponent(n)) n[HANDLE_AFTER_RENDER]();
    });
    this[STATE] = STATE_RENDERED;
    this[CONTEXT_STATE] = this[CONTEXT_STATE] > 0 ? -2 : -1; // has been rendered, can't modify context
    this[AFTER_RENDER]();
    this[_messenger__WEBPACK_IMPORTED_MODULE_2__["NOTIFY"]](_util__WEBPACK_IMPORTED_MODULE_0__["AFTER_RENDER_EVENT_NAME"], this);
  }

  /**
   *
   * @param {Function|boolean} handler
   * @param {boolean} nextTick
   */
  [UPDATE_IF_NEED](handler = null, nextTick = true) {
    if (this[STATE] !== STATE_RENDERED) {
      return;
    }
    if (handler === false) {
      return this[UPDATE]();
    }

    if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(handler)) {
      handler = this[UPDATE];
    }

    if (!nextTick) {
      handler.call(this);
      return;
    }

    const ntMap = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateMapProperty"])(this, UPDATE_NEXT_MAP);
    if (ntMap.has(handler)) {
      // already in queue.
      return;
    }
    ntMap.set(handler, Object(_util__WEBPACK_IMPORTED_MODULE_0__["setImmediate"])(() => {
      ntMap.delete(handler);
      handler.call(this);
    }));
  }

  [UPDATE]() {
    throw new Error('abstract method');
  }

  [GET_STATE_NAME]() {
    return STATE_NAMES[this[STATE]];
  }

  [SET_CONTEXT](id, ctx, forceOverride = false) {
    if (this[CONTEXT_STATE] < 0) {
      throw new Error('Can\'t setContext after component has been rendered. Try put setContext code into constructor.');
    }
    if (this[CONTEXT_STATE] === 0) {
      // we copy context to make sure child component do not modify context passed from parent.
      // we do not copy it by default until setContext function is called, because it unnecessary to waste memory if
      // child component do not modify the context.
      if (!this[CONTEXT]) {
        this[CONTEXT] = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createEmptyObject"])();
      } else {
        this[CONTEXT] = copyContext(this[CONTEXT]);
      }
      this[CONTEXT_STATE] = 1; // has been copied.
    }
    if (id in this[CONTEXT]) {
      // override exist may case hidden bug hard to debug.
      // so we force programmer to pass third argument to
      //   tell us he/she know what he/she is doing.
      if (!forceOverride) {
        throw new Error(`Contenxt with id: ${id.toString()} is exist. Pass third argument forceOverride=true to override it.`);
      }
    }
    this[CONTEXT][id] = ctx;
  }

  [GET_CONTEXT](id) {
    return this[CONTEXT] ? this[CONTEXT][id] : null;
  }

  [SET_REF_NODE](ref, el, relatedComponent) {
    const rns = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateMapProperty"])(this, REF_NODES);
    let elOrArr = rns.get(ref);
    if (!elOrArr) {
      rns.set(ref, el);
    } else if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(elOrArr)) {
      elOrArr.push(el);
    } else {
      elOrArr = [elOrArr, el];
      rns.set(ref, elOrArr);
    }
    if (isComponent(el)) {
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateArrayProperty"])(el, REF_BELONGS).push([
        this, ref
      ]);
      return;
    }
    if (this === relatedComponent) {
      return;
    }
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateArrayProperty"])(
      relatedComponent, RELATED_DOM_REFS
    ).push([this, ref, el]);
  }

  /**
   * Get child node(or nodes) marked by 'ref:' attribute in template
   * @param {String} ref
   * @returns {Node|Array<Node>}
   */
  [GET_REF](ref) {
    if (this[STATE] !== STATE_RENDERED) {
      console.error(`Warning: call getChild before component '${this.constructor.name}' is rendered will get nothing, try put getChild into afterRender lifecycle hook.`);
    }
    return this[REF_NODES] ? this[REF_NODES].get(ref) : null;
  }

  /**
   * lifecycle hook, called after rendered.
   */
  [AFTER_RENDER]() {
    // lifecycle hook, default do nothing.
  }

  /**
   * lifecycle hook, called before destroy.
   */
  [BEFORE_DESTROY]() {
    // lifecycle hook, default do nothing.
  }
}

function destroyContext(comp) {
  const ctx = comp[CONTEXT];
  if (!ctx) return;
  if (comp[CONTEXT_STATE] === -2) {
    // maybe unnecessary to reset properties
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOwnPropertyNames"])(ctx, propN => {
      ctx[propN] = null;
    });
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOwnPropertySymbols"])(ctx, propN => {
      ctx[propN] = null;
    });
  }
  comp[CONTEXT] = null;
}

function releaseDeregisters(component, nameOfDeregisters) {
  if (component[nameOfDeregisters]) {
    component[nameOfDeregisters].forEach(deregister => deregister());
    component[nameOfDeregisters] = null;
  }
}

function destroyRelatedRefs(comp) {
  function _unref(refBelongs, el) {
    if (!refBelongs) return;
    refBelongs.forEach(info => {
      const map = info[0][REF_NODES];
      if (!map) return;
      const rns = map.get(info[1]);
      if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(rns)) {
        Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(rns, el || info[2]);
      } else {
        map.delete(info[1]);
      }
    });
  }
  _unref(comp[REF_BELONGS], comp);
  _unref(comp[RELATED_DOM_REFS]);
}

function isComponent(c) {
  return ROOT_NODES in c;
}

function assertRenderResults(renderResults) {
  if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(renderResults) || renderResults.length === 0) {
    throw new Error('Render results of component is empty');
  }
  return renderResults;
}

function operateRootHtmlDOM(fn, el, ...args) {
  if (!isComponent(el)) return fn(el, ...args);
  el[ROOT_NODES].forEach(ce => {
    operateRootHtmlDOM(fn, ce, ...args);
  });
}


/***/ }),

/***/ "../../jinge-framework/core/i18n.js":
/*!**********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/core/i18n.js ***!
  \**********************************************************/
/*! exports provided: I18N_GET_RENDER, I18N_GET_TEXT, I18N_GET_ATTR, I18N_LOCALE_CHANGE, I18N_SWITCH_LOCALE, I18N_RENDER_DEPS, I18N_CURRENT_LOCALE, i18n, _t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_GET_RENDER", function() { return I18N_GET_RENDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_GET_TEXT", function() { return I18N_GET_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_GET_ATTR", function() { return I18N_GET_ATTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_LOCALE_CHANGE", function() { return I18N_LOCALE_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_SWITCH_LOCALE", function() { return I18N_SWITCH_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_RENDER_DEPS", function() { return I18N_RENDER_DEPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_CURRENT_LOCALE", function() { return I18N_CURRENT_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return i18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_t", function() { return _t; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/core/messenger.js");



const I18N_GET_RENDER = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_get_render');
const I18N_GET_TEXT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_get_text');
const I18N_GET_ATTR = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_get_attr');
const I18N_LOCALE_CHANGE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('locale_change');
const I18N_SWITCH_LOCALE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('switch_locale');
const I18N_RENDER_DEPS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('register_render_dependent_functions');
const I18N_CURRENT_LOCALE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('current_locale');

const LAST_FETCHING_KEY = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('last_fetching_key');
const CURRENT_DATA = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('current_data');
const CACHE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('cache');

function compile(text) {
  // eslint-disable-next-line no-new-func
  return new Function('__ctx', `return \`${text.replace(/\$\{\s*([\w\d._$]+)\s*\}/g, (m, n) => {
    return '${ __ctx.' + n + ' }';
  })}\`;`);
}

function defaultFetchFn(locale) {
  return window.fetch('dist/locale.' + locale + '.js').then(res => res.text());
}

class I18nService extends _messenger__WEBPACK_IMPORTED_MODULE_1__["Messenger"] {
  constructor(attrs) {
    super(attrs);
    this[I18N_RENDER_DEPS] = null;
    this[CURRENT_DATA] = null;
    this[CACHE] = new Map();
    this[LAST_FETCHING_KEY] = null;

    this.r(window.JINGE_I18N_DATA);
  }

  get locale() {
    return this[CURRENT_DATA].locale;
  }

  /**
   * Register locale data, will be called in locale resource script.
   * Usually you don't need call this method manully.
   */
  r(data) {
    if (!data || this[CACHE].has(data.locale)) {
      return;
    }
    this[CACHE].set(data.locale, data);
    if (!this[CURRENT_DATA]) {
      this[CURRENT_DATA] = data;
    }
  }

  /**
   * switch to another locale/language
   * @param {String} locale locale to swtiched
   * @param {Function} fetchFn a function to fetch locale resource script.
   */
  switch(locale, fetchFn = defaultFetchFn) {
    if (this[CURRENT_DATA].locale === locale) {
      return;
    }
    const data = this[CACHE].get(locale);
    if (!data) {
      if (fetchFn) {
        const key = Object(_util__WEBPACK_IMPORTED_MODULE_0__["uid"])();
        this[LAST_FETCHING_KEY] = key;
        fetchFn(locale).then(code => {
          // eslint-disable-next-line no-new-func
          (new Function('JINGE_I18N_SERVICE', code))(this);
          if (this[LAST_FETCHING_KEY] !== key || this[CURRENT_DATA].locale === locale) {
            /*
             * ignore if callback has been expired.
             * 使用闭包的技巧来检测当前回调是否已经过期，
             * 即，是否已经有新的 fetchFn 函数的调用。
             */
            return;
          }
          const data = this[CACHE].get(locale);
          this[CURRENT_DATA] = data;
          this[_messenger__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](I18N_LOCALE_CHANGE, this.locale);
        });
      } else {
        throw new Error(`i18n data of "${locale}" is not found. `);
      }
    } else {
      this[CURRENT_DATA] = data;
      this[_messenger__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]](I18N_LOCALE_CHANGE, this.locale);
    }
  }

  [I18N_GET_TEXT](key, params) {
    const dict = this[CURRENT_DATA].dictionary;
    if (!(key in dict)) {
      return 'i18n_missing';
    }
    let text = dict[key];
    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(text)) {
      // text.startsWith("«") means reference to another key
      if (text.charCodeAt(0) === 171) {
        text = dict[text.substring(1)];
      } else {
        text = compile(text);
      }
      dict[key] = text;
    }
    return text(params);
  }

  [I18N_GET_RENDER](key) {
    return getRenderOrAttr(this[CURRENT_DATA], this[I18N_RENDER_DEPS], 'render', key);
  }

  [I18N_GET_ATTR](key) {
    return getRenderOrAttr(this[CURRENT_DATA], this[I18N_RENDER_DEPS], 'attribute', key);
  }

  /**
   * Bind listener to LOCALE_CHANGE event,
   * return a function auto remove this listener
   * @param {Function} handler a listener bind to LOCALE_CHANGE event
   * @param {Boolean} immediate call listener immediately, default is false.
   * @returns {Function} a function auto remove listener
   */
  watch(listener, immediate) {
    this[_messenger__WEBPACK_IMPORTED_MODULE_1__["ON"]](I18N_LOCALE_CHANGE, listener);
    if (immediate) listener(this.locale);
    return function unwatcher() {
      this[_messenger__WEBPACK_IMPORTED_MODULE_1__["OFF"]](I18N_LOCALE_CHANGE, listener);
    };
  }
}

function getRenderOrAttr(data, depFns, type, key) {
  let renderOrAttr = data[type];
  if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(renderOrAttr)) {
    data[type] = renderOrAttr = (depFns ? renderOrAttr(...depFns[type]) : {});
  }
  if (!(key in renderOrAttr)) {
    throw new Error(`missing i18n ${type} for key: ${key}`);
  }
  let fn = renderOrAttr[key];
  if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(fn)) {
    // if fn is string, it's a reference to another key.
    renderOrAttr[key] = fn = renderOrAttr[fn];
  }
  return fn;
}

/* Singleton */
const i18n = new I18nService();

/**
 * Compiler helper function, the first parameter will be convert to i18n dictionary key,
 * and the whole function will be transform to `i18nService[GET_TEXT](key, params)`
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


/***/ }),

/***/ "../../jinge-framework/core/index.js":
/*!***********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/core/index.js ***!
  \***********************************************************/
/*! exports provided: bootstrap, NOTIFY_TRANSITION, TEMPLATE_RENDER, RENDER, RENDER_TO_DOM, ARG_COMPONENTS, PASSED_ATTRS, CLONE, DESTROY, CONTEXT, CONTEXT_STATE, ROOT_NODES, NON_ROOT_COMPONENT_NODES, REF_NODES, SET_REF_NODE, REF_BELONGS, RELATED_DOM_REFS, GET_STATE_NAME, AFTER_RENDER, HANDLE_AFTER_RENDER, HANDLE_BEFORE_DESTROY, GET_FIRST_DOM, GET_LAST_DOM, GET_TRANSITION_DOM, BEFORE_DESTROY, GET_CONTEXT, SET_CONTEXT, GET_REF, UPDATE, UPDATE_IF_NEED, UPDATE_NEXT_MAP, STATE, STATE_INITIALIZE, STATE_RENDERED, STATE_WILLDESTROY, STATE_DESTROIED, STATE_NAMES, DOM_ON, DOM_PASS_LISTENERS, I18N_WATCH, Component, destroyRelatedRefs, isComponent, assertRenderResults, operateRootHtmlDOM, I18N_GET_RENDER, I18N_GET_TEXT, I18N_GET_ATTR, I18N_LOCALE_CHANGE, I18N_SWITCH_LOCALE, I18N_RENDER_DEPS, I18N_CURRENT_LOCALE, i18n, _t, LISTENERS, notifyHelper, onHelper, offHelper, clearHelper, onceHelper, NOTIFY, ON, OFF, CLEAR, Messenger, passListeners, emptyRenderFn, errorRenderFn, textRenderFn, i18nRenderFn, CSTYLE_PID, CSTYLE_ADD, CSTYLE_DEL, CSTYLE_ATTACH, addParentStyleId, manager, TS_TRANSITION_END, TS_ANIMATION_END, TS_TRANSITION_DURATION, TS_ANIMATION_DURATION, TS_TRANSITION, TS_ZERO_S, TS_ENTER, TS_LEAVE, TS_C_ENTER, TS_C_LEAVE, TS_C_ENTER_ACTIVE, TS_C_LEAVE_ACTIVE, TS_BEFORE_ENTER, TS_AFTER_ENTER, TS_BEFORE_LEAVE, TS_AFTER_LEAVE, TS_ENTER_CANCELLED, TS_LEAVE_CANCELLED, TS_STATE_ENTERING, TS_STATE_ENTERED, TS_STATE_LEAVING, TS_STATE_LEAVED, getDurationType, getDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "../../jinge-framework/core/bootstrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _bootstrap__WEBPACK_IMPORTED_MODULE_0__["bootstrap"]; });

/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../../jinge-framework/core/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOTIFY_TRANSITION", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["NOTIFY_TRANSITION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEMPLATE_RENDER", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["TEMPLATE_RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RENDER", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RENDER_TO_DOM", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["RENDER_TO_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ARG_COMPONENTS", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PASSED_ATTRS", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["PASSED_ATTRS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLONE", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["CLONE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DESTROY", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["DESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTEXT", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["CONTEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_STATE", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["CONTEXT_STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROOT_NODES", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NON_ROOT_COMPONENT_NODES", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["NON_ROOT_COMPONENT_NODES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REF_NODES", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["REF_NODES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_REF_NODE", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["SET_REF_NODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REF_BELONGS", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["REF_BELONGS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RELATED_DOM_REFS", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["RELATED_DOM_REFS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_STATE_NAME", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["GET_STATE_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AFTER_RENDER", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["AFTER_RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HANDLE_AFTER_RENDER", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["HANDLE_AFTER_RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HANDLE_BEFORE_DESTROY", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["HANDLE_BEFORE_DESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_FIRST_DOM", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["GET_FIRST_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_LAST_DOM", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["GET_LAST_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_TRANSITION_DOM", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["GET_TRANSITION_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BEFORE_DESTROY", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["BEFORE_DESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_CONTEXT", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["GET_CONTEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CONTEXT", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["SET_CONTEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_REF", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["GET_REF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_IF_NEED", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["UPDATE_IF_NEED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_NEXT_MAP", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["UPDATE_NEXT_MAP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_INITIALIZE", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["STATE_INITIALIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_RENDERED", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["STATE_RENDERED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_WILLDESTROY", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["STATE_WILLDESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_DESTROIED", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["STATE_DESTROIED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_NAMES", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["STATE_NAMES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOM_ON", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["DOM_ON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOM_PASS_LISTENERS", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["DOM_PASS_LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_WATCH", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["I18N_WATCH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "destroyRelatedRefs", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["destroyRelatedRefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["isComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertRenderResults", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["assertRenderResults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "operateRootHtmlDOM", function() { return _component__WEBPACK_IMPORTED_MODULE_1__["operateRootHtmlDOM"]; });

/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/core/i18n.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_GET_RENDER", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["I18N_GET_RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_GET_TEXT", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["I18N_GET_TEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_GET_ATTR", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["I18N_GET_ATTR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_LOCALE_CHANGE", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["I18N_LOCALE_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_SWITCH_LOCALE", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["I18N_SWITCH_LOCALE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_RENDER_DEPS", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["I18N_RENDER_DEPS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_CURRENT_LOCALE", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["I18N_CURRENT_LOCALE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_t", function() { return _i18n__WEBPACK_IMPORTED_MODULE_2__["_t"]; });

/* harmony import */ var _messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messenger */ "../../jinge-framework/core/messenger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LISTENERS", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyHelper", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["notifyHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onHelper", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["onHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offHelper", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["offHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearHelper", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["clearHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onceHelper", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["onceHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOTIFY", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["NOTIFY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ON", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["ON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OFF", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["OFF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLEAR", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["CLEAR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["Messenger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "passListeners", function() { return _messenger__WEBPACK_IMPORTED_MODULE_3__["passListeners"]; });

/* harmony import */ var _render_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render_fns */ "../../jinge-framework/core/render_fns.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyRenderFn", function() { return _render_fns__WEBPACK_IMPORTED_MODULE_4__["emptyRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorRenderFn", function() { return _render_fns__WEBPACK_IMPORTED_MODULE_4__["errorRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textRenderFn", function() { return _render_fns__WEBPACK_IMPORTED_MODULE_4__["textRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18nRenderFn", function() { return _render_fns__WEBPACK_IMPORTED_MODULE_4__["i18nRenderFn"]; });

/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "../../jinge-framework/core/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_PID", function() { return _style__WEBPACK_IMPORTED_MODULE_5__["CSTYLE_PID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_ADD", function() { return _style__WEBPACK_IMPORTED_MODULE_5__["CSTYLE_ADD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_DEL", function() { return _style__WEBPACK_IMPORTED_MODULE_5__["CSTYLE_DEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_ATTACH", function() { return _style__WEBPACK_IMPORTED_MODULE_5__["CSTYLE_ATTACH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addParentStyleId", function() { return _style__WEBPACK_IMPORTED_MODULE_5__["addParentStyleId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manager", function() { return _style__WEBPACK_IMPORTED_MODULE_5__["manager"]; });

/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transition */ "../../jinge-framework/core/transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_TRANSITION_END", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION_END"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_ANIMATION_END", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_ANIMATION_END"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_TRANSITION_DURATION", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION_DURATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_ANIMATION_DURATION", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_ANIMATION_DURATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_TRANSITION", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_TRANSITION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_ZERO_S", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_ZERO_S"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_ENTER", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_LEAVE", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_LEAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_C_ENTER", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_C_LEAVE", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_C_ENTER_ACTIVE", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_ENTER_ACTIVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_C_LEAVE_ACTIVE", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_C_LEAVE_ACTIVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_BEFORE_ENTER", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_BEFORE_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_AFTER_ENTER", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_AFTER_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_BEFORE_LEAVE", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_BEFORE_LEAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_AFTER_LEAVE", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_AFTER_LEAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_ENTER_CANCELLED", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_ENTER_CANCELLED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_LEAVE_CANCELLED", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_LEAVE_CANCELLED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_ENTERING", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_ENTERED", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_ENTERED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_LEAVING", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_LEAVED", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["TS_STATE_LEAVED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDurationType", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["getDurationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return _transition__WEBPACK_IMPORTED_MODULE_6__["getDuration"]; });










/***/ }),

/***/ "../../jinge-framework/core/messenger.js":
/*!***************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/core/messenger.js ***!
  \***************************************************************/
/*! exports provided: LISTENERS, notifyHelper, onHelper, offHelper, clearHelper, onceHelper, NOTIFY, ON, OFF, CLEAR, Messenger, passListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LISTENERS", function() { return LISTENERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifyHelper", function() { return notifyHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onHelper", function() { return onHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offHelper", function() { return offHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearHelper", function() { return clearHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onceHelper", function() { return onceHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFY", function() { return NOTIFY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ON", function() { return ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFF", function() { return OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR", function() { return CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return Messenger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passListeners", function() { return passListeners; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");


const LISTENERS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('listeners');

function notifyHelper(listenersMap, notifyKey, ...notifyArgs) {
  if (!listenersMap) return;
  const listeners = listenersMap.get(notifyKey);
  if (!listeners) return;
  listeners.forEach(handler => handler(...notifyArgs));
}

function onHelper(listenersMap, notifyKey, listener) {
  const listeners = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateArrayValueOfMap"])(listenersMap, notifyKey);
  if (listeners.indexOf(listener) < 0) {
    listeners.push(listener);
  }
}

function offHelper(listenersMap, notifyKey, listener) {
  if (!listenersMap) return;
  if (!notifyKey) {
    listenersMap.forEach(ls => {
      ls.length = 0;
    });
    listenersMap.clear();
    return;
  }
  const listeners = listenersMap.get(notifyKey);
  if (!listeners) return;
  if (!listener) {
    listeners.length = 0; // clear all if listener is not provided
    return;
  }
  const idx = listeners.indexOf(listener);
  if (idx < 0) return;
  listeners.splice(idx, 1);
}

function clearHelper(listenersMap, notifyKey) {
  if (!listenersMap) return;
  if (!notifyKey) {
    listenersMap.clear();
  } else {
    listenersMap.delete(notifyKey);
  }
}

function onceHelper(listenersMap, notifyKey, listener) {
  function onceListener(...args) {
    listener(...args);
    offHelper(listenersMap, notifyKey, onceListener);
  }
  onHelper(listenersMap, notifyKey, onceListener);
}

const NOTIFY = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('notify');
const ON = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('on');
const OFF = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('off');
const CLEAR = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('clear');

class Messenger {
  /**
   * Listeners compiled from template.
   * @param {Object} templateListeners
   */
  constructor(templateListeners) {
    this[LISTENERS] = null;
    if (templateListeners) {
      for (const eventName in templateListeners) {
        this[ON](eventName, ...templateListeners[eventName]);
      }
    }
  }

  [NOTIFY](eventName, ...args) {
    notifyHelper(this[LISTENERS], eventName, ...args);
  }

  [ON](eventName, eventListener, opts) {
    const listeners = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateMapProperty"])(this, LISTENERS);
    if (opts) {
      eventListener.tag = opts;
    }
    if (opts && opts.once) {
      onceHelper(listeners, eventName, eventListener);
    } else {
      onHelper(listeners, eventName, eventListener);
    }
  }

  [OFF](eventName, eventListener) {
    offHelper(this[LISTENERS], eventName, eventListener);
  }

  [CLEAR](eventName) {
    clearHelper(this[LISTENERS], eventName);
  }
}

/**
 * pass all listeners on srcMessenger to dstMessenger
 * @param {Messenger} srcMessenger
 * @param {Messenger} dstMessenger
 */
function passListeners(srcMessenger, dstMessenger) {
  if (!(LISTENERS in srcMessenger) || !(LISTENERS in dstMessenger)) {
    // src or dst is not instance of Messenger
    return;
  }
  const srcLis = srcMessenger[LISTENERS];
  if (!srcLis) return;
  srcLis.forEach((lis, key) => {
    const dstLis = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateMapProperty"])(dstMessenger, LISTENERS);
    lis.forEach(listener => {
      const tag = listener.tag;
      if (tag && tag.once) {
        onceHelper(dstLis, key, listener);
      } else {
        onHelper(dstLis, key, listener);
      }
    });
  });
}


/***/ }),

/***/ "../../jinge-framework/core/render_fns.js":
/*!****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/core/render_fns.js ***!
  \****************************************************************/
/*! exports provided: emptyRenderFn, errorRenderFn, textRenderFn, i18nRenderFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyRenderFn", function() { return emptyRenderFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorRenderFn", function() { return errorRenderFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textRenderFn", function() { return textRenderFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i18nRenderFn", function() { return i18nRenderFn; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "../../jinge-framework/core/component.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n */ "../../jinge-framework/core/i18n.js");




function emptyRenderFn(component) {
  const el = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createComment"])(_util__WEBPACK_IMPORTED_MODULE_0__["STR_EMPTY"]);
  component[_component__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]].push(el);
  return [el];
}

function errorRenderFn(component) {
  const el = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])('span', {
    style: 'color: red !important;'
  });
  el.textContent = 'template parsing failed! please check webpack log.';
  component[_component__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]].push(el);
  return [el];
}

function textRenderFn(component, txtContent) {
  const el = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])(txtContent);
  component[_component__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]].push(el);
  return el;
}

function i18nRenderFn(component, key) {
  const el = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
  const fn = () => {
    el.textContent = _i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"][_i18n__WEBPACK_IMPORTED_MODULE_2__["I18N_GET_TEXT"]](key);
  };
  fn();
  component[_component__WEBPACK_IMPORTED_MODULE_1__["I18N_WATCH"]](fn);
  component[_component__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]].push(el);
  return el;
}


/***/ }),

/***/ "../../jinge-framework/core/style.js":
/*!***********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/core/style.js ***!
  \***********************************************************/
/*! exports provided: CSTYLE_PID, CSTYLE_ADD, CSTYLE_DEL, CSTYLE_ATTACH, addParentStyleId, manager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_PID", function() { return CSTYLE_PID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_ADD", function() { return CSTYLE_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_DEL", function() { return CSTYLE_DEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_ATTACH", function() { return CSTYLE_ATTACH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addParentStyleId", function() { return addParentStyleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manager", function() { return manager; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");


const CSTYLE_PID = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('cstyle_pids');
const CSTYLE_ADD = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('add');
const CSTYLE_DEL = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('del');
const CSTYLE_ATTACH = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('attach');

function addParentStyleId(component, inheritIds, styleId) {
  if (!inheritIds && !styleId) return;
  let ids = component[CSTYLE_PID];
  if (!ids) {
    ids = component[CSTYLE_PID] = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createEmptyObject"])();
  }
  if (inheritIds) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["assignObject"])(ids, inheritIds);
  }
  if (styleId) {
    ids[styleId] = '';
  }
}

function isHideCssExists() {
  const $e = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])('span', {
    style: 'position:absolute;left:-10000px;',
    class: 'jg-hide'
  });
  Object(_util__WEBPACK_IMPORTED_MODULE_0__["appendChild"])(document.body, $e);
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["getCSPropertyValue"])(getComputedStyle($e), 'display') === 'none';
}

class ComponentStyleManager {
  constructor() {
    this.m = new Map();
    /**
     * State
     * 0: not attached
     * 1: attached
     */
    this.s = 0;
  }

  _c(sty) {
    if (this.s === 0) return;
    const $style = Object(_util__WEBPACK_IMPORTED_MODULE_0__["createElement"])('style', {
      type: 'text/css',
      id: sty.dom
    });
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["appendChild"])(document.head, $style);
    if ($style.styleSheet) {
      $style.styleSheet.cssText = sty.css;
    } else {
      $style.textContent = sty.css;
    }
  }

  [CSTYLE_ADD](sty) {
    if (!sty) return;
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
    this._c(info);
  }

  [CSTYLE_ATTACH]() {
    if (this.s !== 0) return;
    this.s = 1;
    if (!isHideCssExists()) {
      this._c({
        dom: `__jgsty_${Object(_util__WEBPACK_IMPORTED_MODULE_0__["uid"])()}__`,
        css: '.jg-hide{display:none!important}.jg-hide.jg-hide-enter,.jg-hide.jg-hide-leave{display:block!important}'
      });
    }
    this.m.forEach(info => this._c(info));
  }

  [CSTYLE_DEL](sty) {
    if (!sty) return;
    const info = this.m.get(sty.id);
    if (!info) return;
    info.refs--;
    if (info.refs > 0) {
      return;
    }
    this.m.delete(info.id);
    if (this.s === 0) return;
    document.head.removeChild(
      document.getElementById(info.dom)
    );
  }
}

// singleton
const manager = new ComponentStyleManager();


/***/ }),

/***/ "../../jinge-framework/core/transition.js":
/*!****************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/core/transition.js ***!
  \****************************************************************/
/*! exports provided: TS_TRANSITION_END, TS_ANIMATION_END, TS_TRANSITION_DURATION, TS_ANIMATION_DURATION, TS_TRANSITION, TS_ZERO_S, TS_ENTER, TS_LEAVE, TS_C_ENTER, TS_C_LEAVE, TS_C_ENTER_ACTIVE, TS_C_LEAVE_ACTIVE, TS_BEFORE_ENTER, TS_AFTER_ENTER, TS_BEFORE_LEAVE, TS_AFTER_LEAVE, TS_ENTER_CANCELLED, TS_LEAVE_CANCELLED, TS_STATE_ENTERING, TS_STATE_ENTERED, TS_STATE_LEAVING, TS_STATE_LEAVED, getDurationType, getDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_TRANSITION_END", function() { return TS_TRANSITION_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_ANIMATION_END", function() { return TS_ANIMATION_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_TRANSITION_DURATION", function() { return TS_TRANSITION_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_ANIMATION_DURATION", function() { return TS_ANIMATION_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_TRANSITION", function() { return TS_TRANSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_ZERO_S", function() { return TS_ZERO_S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_ENTER", function() { return TS_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_LEAVE", function() { return TS_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_C_ENTER", function() { return TS_C_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_C_LEAVE", function() { return TS_C_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_C_ENTER_ACTIVE", function() { return TS_C_ENTER_ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_C_LEAVE_ACTIVE", function() { return TS_C_LEAVE_ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_BEFORE_ENTER", function() { return TS_BEFORE_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_AFTER_ENTER", function() { return TS_AFTER_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_BEFORE_LEAVE", function() { return TS_BEFORE_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_AFTER_LEAVE", function() { return TS_AFTER_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_ENTER_CANCELLED", function() { return TS_ENTER_CANCELLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_LEAVE_CANCELLED", function() { return TS_LEAVE_CANCELLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_ENTERING", function() { return TS_STATE_ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_ENTERED", function() { return TS_STATE_ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_LEAVING", function() { return TS_STATE_LEAVING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_LEAVED", function() { return TS_STATE_LEAVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDurationType", function() { return getDurationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return getDuration; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");


const TS_TRANSITION_END = 'transitionend';
const TS_ANIMATION_END = 'animationend';
const TS_TRANSITION_DURATION = 'transition-duration';
const TS_ANIMATION_DURATION = 'animation-duration';
const TS_TRANSITION = 'transition';
const TS_ZERO_S = '0s';
const TS_ENTER = 'enter';
const TS_LEAVE = 'leave';
const TS_C_ENTER = '-enter';
const TS_C_LEAVE = '-leave';
const TS_C_ENTER_ACTIVE = '-enter-active';
const TS_C_LEAVE_ACTIVE = '-leave-active';
const TS_BEFORE_ENTER = 'before-enter';
const TS_AFTER_ENTER = 'after-enter';
const TS_BEFORE_LEAVE = 'before-leave';
const TS_AFTER_LEAVE = 'after-leave';
const TS_ENTER_CANCELLED = 'enter-cancelled';
const TS_LEAVE_CANCELLED = 'leave-cancelled';

const TS_STATE_ENTERING = 1;
const TS_STATE_ENTERED = 2;
const TS_STATE_LEAVING = 3;
const TS_STATE_LEAVED = 4;

function getDurationType(el) {
  const cst = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getComputedStyle"])(el);
  if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["getCSPropertyValue"])(cst, TS_TRANSITION_DURATION) !== TS_ZERO_S) {
    return TS_TRANSITION_END;
  } else if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["getCSPropertyValue"])(cst, TS_ANIMATION_DURATION) !== TS_ZERO_S) {
    return TS_ANIMATION_END;
  }
  return null;
}

function parseDuration(v) {
  if (/ms$/.test(v)) {
    return parseInt(v);
  } else if (/s$/.test(v)) {
    return parseFloat(v) * 1000;
  } else {
    return 0;
  }
}

function getDuration(el) {
  const cst = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getComputedStyle"])(el);
  let dur = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getCSPropertyValue"])(cst, TS_TRANSITION_DURATION);
  if (dur !== TS_ZERO_S) {
    return [TS_TRANSITION_END, parseDuration(dur)];
  }
  dur = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getCSPropertyValue"])(cst, TS_ANIMATION_DURATION);
  if (dur !== TS_ZERO_S) {
    return [TS_ANIMATION_END, parseDuration(dur)];
  }
  return [null, 0];
}


/***/ }),

/***/ "../../jinge-framework/index.js":
/*!******************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/index.js ***!
  \******************************************************/
/*! exports provided: ToggleClassComponent, FOR_LENGTH, FOR_KEYS, FOR_KEY_NAME, FOR_WAIT_UPDATE, FOR_UPDATE_ITEM, ForEachComponent, ForComponent, STR_JG_HIDE, HideComponent, BindHtmlComponent, IfComponent, SwitchComponent, ParameterComponent, LogComponent, I18nComponent, bootstrap, NOTIFY_TRANSITION, TEMPLATE_RENDER, RENDER, RENDER_TO_DOM, ARG_COMPONENTS, PASSED_ATTRS, CLONE, DESTROY, CONTEXT, CONTEXT_STATE, ROOT_NODES, NON_ROOT_COMPONENT_NODES, REF_NODES, SET_REF_NODE, REF_BELONGS, RELATED_DOM_REFS, GET_STATE_NAME, AFTER_RENDER, HANDLE_AFTER_RENDER, HANDLE_BEFORE_DESTROY, GET_FIRST_DOM, GET_LAST_DOM, GET_TRANSITION_DOM, BEFORE_DESTROY, GET_CONTEXT, SET_CONTEXT, GET_REF, UPDATE, UPDATE_IF_NEED, UPDATE_NEXT_MAP, STATE, STATE_INITIALIZE, STATE_RENDERED, STATE_WILLDESTROY, STATE_DESTROIED, STATE_NAMES, DOM_ON, DOM_PASS_LISTENERS, I18N_WATCH, Component, destroyRelatedRefs, isComponent, assertRenderResults, operateRootHtmlDOM, I18N_GET_RENDER, I18N_GET_TEXT, I18N_GET_ATTR, I18N_LOCALE_CHANGE, I18N_SWITCH_LOCALE, I18N_RENDER_DEPS, I18N_CURRENT_LOCALE, i18n, _t, LISTENERS, notifyHelper, onHelper, offHelper, clearHelper, onceHelper, NOTIFY, ON, OFF, CLEAR, Messenger, passListeners, emptyRenderFn, errorRenderFn, textRenderFn, i18nRenderFn, CSTYLE_PID, CSTYLE_ADD, CSTYLE_DEL, CSTYLE_ATTACH, addParentStyleId, manager, TS_TRANSITION_END, TS_ANIMATION_END, TS_TRANSITION_DURATION, TS_ANIMATION_DURATION, TS_TRANSITION, TS_ZERO_S, TS_ENTER, TS_LEAVE, TS_C_ENTER, TS_C_LEAVE, TS_C_ENTER_ACTIVE, TS_C_LEAVE_ACTIVE, TS_BEFORE_ENTER, TS_AFTER_ENTER, TS_BEFORE_LEAVE, TS_AFTER_LEAVE, TS_ENTER_CANCELLED, TS_LEAVE_CANCELLED, TS_STATE_ENTERING, TS_STATE_ENTERED, TS_STATE_LEAVING, TS_STATE_LEAVED, getDurationType, getDuration, typeOf, isObject, isString, isNumber, isUndefined, isArray, isBoolean, isFunction, instanceOf, isDOMNode, isPromise, arrayIndexOf, arrayRemove, arrayPushIfNotExist, arrayFind, arrayFindIndex, arrayEqual, STR_DEFAULT, STR_JINGE, STR_EMPTY, STR_LENGTH, BEFORE_DESTROY_EVENT_NAME, AFTER_RENDER_EVENT_NAME, HTML_ATTR_checked, HTML_ATTR_disabled, HTML_ATTR_selected, HTML_ATTR_readOnly, HTML_ATTR_autofocus, HTML_ATTR_autocomplete, HTML_ATTR_required, HTML_ATTR_controls, HTML_ATTR_autoplay, HTML_ATTR_draggable, HTML_ATTR_multiple, HTML_ATTR_muted, HTML_ATTR_value, Symbol, assertFail, startsWith, endsWith, defineProperty, assignObject, obj2class, obj2style, defineProperties, getOwnPropertyNames, getOwnPropertySymbols, isPropertyEnumerable, createEmptyObject, uid, mapObject, getOrCreateProperty, getOrCreateValueOfMap, getOrCreateMapProperty, getOrCreateArrayValueOfMap, getOrCreateArrayProperty, setImmediate, clearImmediate, getParent, setText, setAttribute, removeAttribute, setInputValue, createElement, createElementWithoutAttrs, createSVGElement, createSVGElementWithoutAttrs, createFragment, createTextNode, createElementWithChild, createComment, replaceChild, insertBefore, insertAfter, removeChild, appendChild, hasClass, toggleClass, addClass, removeClass, replaceClass, addEvent, removeEvent, registerEvent, getComputedStyle, getCSPropertyValue, VM_ATTRS, VM_DEBUG_NAME, VM_PROXY, VM_ON, VM_OFF, VM_NOTIFY, VM_NOTIFIABLE, VM_HOST, VM_RELATED_LISTENERS, VM_ADD_PARENT, VM_REMOVE_PARENT, VM_SHIFT_PARENT, VM_DESTROY, isInnerObj, isViewModel, isPublicProp, ViewModelAttrs, vmRelatedClear, RelatedListenersStore, vmWatch, vmUnwatch, VM_SETTER_FN_MAP, ObjectProxyHandler, ComponentProxyHandler, PromiseProxyHandler, ArrayProxyHandler, wrapViewModel, VM, wrapComponent, wrapAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "../../jinge-framework/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleClassComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ToggleClassComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_LENGTH", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["FOR_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_KEYS", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["FOR_KEYS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_KEY_NAME", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["FOR_KEY_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_WAIT_UPDATE", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["FOR_WAIT_UPDATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FOR_UPDATE_ITEM", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["FOR_UPDATE_ITEM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForEachComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ForEachComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ForComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_JG_HIDE", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["STR_JG_HIDE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HideComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["HideComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BindHtmlComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["BindHtmlComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["IfComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["SwitchComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParameterComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["ParameterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["LogComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nComponent", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["I18nComponent"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../../jinge-framework/core/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["bootstrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOTIFY_TRANSITION", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY_TRANSITION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEMPLATE_RENDER", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TEMPLATE_RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RENDER", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RENDER_TO_DOM", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["RENDER_TO_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ARG_COMPONENTS", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["ARG_COMPONENTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PASSED_ATTRS", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["PASSED_ATTRS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLONE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["CLONE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DESTROY", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["DESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTEXT", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["CONTEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_STATE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["CONTEXT_STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROOT_NODES", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["ROOT_NODES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NON_ROOT_COMPONENT_NODES", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["NON_ROOT_COMPONENT_NODES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REF_NODES", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["REF_NODES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_REF_NODE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["SET_REF_NODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REF_BELONGS", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["REF_BELONGS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RELATED_DOM_REFS", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["RELATED_DOM_REFS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_STATE_NAME", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["GET_STATE_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AFTER_RENDER", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["AFTER_RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HANDLE_AFTER_RENDER", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["HANDLE_AFTER_RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HANDLE_BEFORE_DESTROY", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["HANDLE_BEFORE_DESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_FIRST_DOM", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["GET_FIRST_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_LAST_DOM", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["GET_LAST_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_TRANSITION_DOM", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["GET_TRANSITION_DOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BEFORE_DESTROY", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["BEFORE_DESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_CONTEXT", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["GET_CONTEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SET_CONTEXT", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["SET_CONTEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_REF", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["GET_REF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["UPDATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_IF_NEED", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["UPDATE_IF_NEED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_NEXT_MAP", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["UPDATE_NEXT_MAP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["STATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_INITIALIZE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["STATE_INITIALIZE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_RENDERED", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["STATE_RENDERED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_WILLDESTROY", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["STATE_WILLDESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_DESTROIED", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["STATE_DESTROIED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_NAMES", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["STATE_NAMES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOM_ON", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["DOM_ON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOM_PASS_LISTENERS", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["DOM_PASS_LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_WATCH", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["I18N_WATCH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "destroyRelatedRefs", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["destroyRelatedRefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["isComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertRenderResults", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["assertRenderResults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "operateRootHtmlDOM", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["operateRootHtmlDOM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_GET_RENDER", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["I18N_GET_RENDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_GET_TEXT", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["I18N_GET_TEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_GET_ATTR", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["I18N_GET_ATTR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_LOCALE_CHANGE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["I18N_LOCALE_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_SWITCH_LOCALE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["I18N_SWITCH_LOCALE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_RENDER_DEPS", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["I18N_RENDER_DEPS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18N_CURRENT_LOCALE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["I18N_CURRENT_LOCALE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18n", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["i18n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_t", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["_t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LISTENERS", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notifyHelper", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["notifyHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onHelper", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["onHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offHelper", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["offHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearHelper", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["clearHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onceHelper", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["onceHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NOTIFY", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["NOTIFY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ON", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["ON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OFF", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["OFF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLEAR", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["CLEAR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Messenger", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["Messenger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "passListeners", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["passListeners"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emptyRenderFn", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["emptyRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorRenderFn", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["errorRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textRenderFn", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["textRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i18nRenderFn", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["i18nRenderFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_PID", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["CSTYLE_PID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_ADD", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["CSTYLE_ADD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_DEL", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["CSTYLE_DEL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSTYLE_ATTACH", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["CSTYLE_ATTACH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addParentStyleId", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["addParentStyleId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manager", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["manager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_TRANSITION_END", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION_END"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_ANIMATION_END", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_ANIMATION_END"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_TRANSITION_DURATION", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION_DURATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_ANIMATION_DURATION", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_ANIMATION_DURATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_TRANSITION", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_TRANSITION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_ZERO_S", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_ZERO_S"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_ENTER", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_LEAVE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_LEAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_C_ENTER", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_C_LEAVE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_C_ENTER_ACTIVE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_ENTER_ACTIVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_C_LEAVE_ACTIVE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_C_LEAVE_ACTIVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_BEFORE_ENTER", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_BEFORE_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_AFTER_ENTER", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_AFTER_ENTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_BEFORE_LEAVE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_BEFORE_LEAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_AFTER_LEAVE", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_AFTER_LEAVE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_ENTER_CANCELLED", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_ENTER_CANCELLED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_LEAVE_CANCELLED", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_LEAVE_CANCELLED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_ENTERING", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_ENTERED", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_ENTERED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_LEAVING", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TS_STATE_LEAVED", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["TS_STATE_LEAVED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDurationType", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["getDurationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["getDuration"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "../../jinge-framework/util/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeOf", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["typeOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instanceOf", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["instanceOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDOMNode", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isDOMNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayIndexOf", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayIndexOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayRemove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayPushIfNotExist", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayPushIfNotExist"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayFind", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayFind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayFindIndex", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayFindIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayEqual", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["arrayEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_DEFAULT", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_JINGE", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["STR_JINGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_EMPTY", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["STR_EMPTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_LENGTH", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["STR_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BEFORE_DESTROY_EVENT_NAME", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["BEFORE_DESTROY_EVENT_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AFTER_RENDER_EVENT_NAME", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["AFTER_RENDER_EVENT_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_checked", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_checked"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_disabled", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_disabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_selected", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_selected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_readOnly", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_readOnly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autofocus", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_autofocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autocomplete", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_autocomplete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_required", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_required"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_controls", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_controls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autoplay", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_autoplay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_draggable", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_draggable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_multiple", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_multiple"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_muted", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_muted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_value", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_value"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Symbol", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["Symbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertFail", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["assertFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["startsWith"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["endsWith"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineProperty", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["defineProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assignObject", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["assignObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "obj2class", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["obj2class"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "obj2style", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["obj2style"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineProperties", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["defineProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOwnPropertyNames", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getOwnPropertyNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOwnPropertySymbols", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getOwnPropertySymbols"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPropertyEnumerable", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["isPropertyEnumerable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEmptyObject", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createEmptyObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["uid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["mapObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateProperty", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getOrCreateProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateValueOfMap", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getOrCreateValueOfMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateMapProperty", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getOrCreateMapProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateArrayValueOfMap", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getOrCreateArrayValueOfMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateArrayProperty", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getOrCreateArrayProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["setImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearImmediate", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["clearImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setText", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["setText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["setAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["removeAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setInputValue", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["setInputValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementWithoutAttrs", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createElementWithoutAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSVGElement", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createSVGElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSVGElementWithoutAttrs", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createSVGElementWithoutAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTextNode", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createTextNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementWithChild", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createElementWithChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComment", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["createComment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceChild", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["replaceChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["insertBefore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["insertAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeChild", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["removeChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendChild", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["appendChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["hasClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["toggleClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["addClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["removeClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceClass", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["replaceClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["addEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeEvent", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["removeEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerEvent", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["registerEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getComputedStyle", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getComputedStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCSPropertyValue", function() { return _util__WEBPACK_IMPORTED_MODULE_2__["getCSPropertyValue"]; });

/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vm */ "../../jinge-framework/vm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_ATTRS", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_ATTRS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_DEBUG_NAME", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_DEBUG_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_PROXY", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_PROXY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_ON", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_ON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_OFF", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_OFF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_NOTIFY", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_NOTIFY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_NOTIFIABLE", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_NOTIFIABLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_HOST", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_HOST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_RELATED_LISTENERS", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_RELATED_LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_ADD_PARENT", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_ADD_PARENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_REMOVE_PARENT", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_REMOVE_PARENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_SHIFT_PARENT", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_SHIFT_PARENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_DESTROY", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_DESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInnerObj", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["isInnerObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isViewModel", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["isViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPublicProp", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["isPublicProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewModelAttrs", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["ViewModelAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmRelatedClear", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["vmRelatedClear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RelatedListenersStore", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["RelatedListenersStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmWatch", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["vmWatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmUnwatch", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["vmUnwatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_SETTER_FN_MAP", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM_SETTER_FN_MAP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectProxyHandler", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["ObjectProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentProxyHandler", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["ComponentProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PromiseProxyHandler", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["PromiseProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayProxyHandler", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["ArrayProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapViewModel", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["wrapViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["VM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapComponent", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["wrapComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapAttrs", function() { return _vm__WEBPACK_IMPORTED_MODULE_3__["wrapAttrs"]; });







/***/ }),

/***/ "../../jinge-framework/util/array.js":
/*!***********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/util/array.js ***!
  \***********************************************************/
/*! exports provided: arrayIndexOf, arrayRemove, arrayPushIfNotExist, arrayFind, arrayFindIndex, arrayEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayIndexOf", function() { return arrayIndexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return arrayRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayPushIfNotExist", function() { return arrayPushIfNotExist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFind", function() { return arrayFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFindIndex", function() { return arrayFindIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayEqual", function() { return arrayEqual; });

function arrayIndexOf(array, item) {
  return array.indexOf(item);
}

function arrayRemove(array, item) {
  const idx = arrayIndexOf(array, item);
  if (idx < 0) return false;
  array.splice(idx, 1);
  return true;
}

function arrayPushIfNotExist(array, item) {
  const idx = arrayIndexOf(array, item);
  if (idx >= 0) return;
  array.push(item);
}

function arrayFind(array, predicate) {
  if (array.find) {
    return array.find(predicate);
  } else {
    const i = arrayFindIndex(array, predicate);
    return i >= 0 ? array[i] : null;
  }
}

function arrayFindIndex(array, predicate) {
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i)) return i;
  }
  return -1;
}

function arrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}


/***/ }),

/***/ "../../jinge-framework/util/common.js":
/*!************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/util/common.js ***!
  \************************************************************/
/*! exports provided: Symbol, assertFail, startsWith, endsWith, defineProperty, assignObject, obj2class, obj2style, defineProperties, getOwnPropertyNames, getOwnPropertySymbols, isPropertyEnumerable, createEmptyObject, uid, mapObject, getOrCreateProperty, getOrCreateValueOfMap, getOrCreateMapProperty, getOrCreateArrayValueOfMap, getOrCreateArrayProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Symbol", function() { return Symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertFail", function() { return assertFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return endsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineProperty", function() { return defineProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignObject", function() { return assignObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obj2class", function() { return obj2class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obj2style", function() { return obj2style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineProperties", function() { return defineProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnPropertyNames", function() { return getOwnPropertyNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOwnPropertySymbols", function() { return getOwnPropertySymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPropertyEnumerable", function() { return isPropertyEnumerable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmptyObject", function() { return createEmptyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return uid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return mapObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateProperty", function() { return getOrCreateProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateValueOfMap", function() { return getOrCreateValueOfMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateMapProperty", function() { return getOrCreateMapProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateArrayValueOfMap", function() { return getOrCreateArrayValueOfMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateArrayProperty", function() { return getOrCreateArrayProperty; });

function Symbol(description) {
  return window.Symbol(description);
}

function assertFail(msg) {
  msg && console.error(msg);
  throw new Error('assert failed!');
}

function startsWith(str, search, position = 0) {
  return str.startsWith(search, position);
}

function endsWith(str, search, endPosition) {
  return str.endsWith(search, endPosition);
}

function defineProperty(...args) {
  return Object.defineProperty(...args);
}

function assignObject(target, ...srcs) {
  return Object.assign(target, ...srcs);
}

function obj2class(obj, prepend) {
  const classes = Object.keys(obj).filter(k => obj[k]).join(' ').trim();
  return prepend ? `${prepend}${classes ? ' ' + classes : ''}` : classes;
}

function obj2style(obj) {
  return Object.keys(obj).map(k => {
    return `${k}: ${obj[k]}`;
  }).join(';').trim();
}

function defineProperties(...args) {
  return Object.defineProperties(...args);
}

/**
 * @param {Object} obj
 * @param {Function} enumFn
 */
function getOwnPropertyNames(obj, enumFn) {
  const ns = Object.getOwnPropertyNames(obj);
  if (enumFn) ns.forEach(enumFn);
  return ns;
}

/**
 * @param {Object} obj
 * @param {Function} enumFn
 */
function getOwnPropertySymbols(obj, enumFn) {
  const ss = Object.getOwnPropertySymbols(obj);
  if (enumFn) ss.forEach(enumFn);
  return ss;
}

function isPropertyEnumerable(obj, key) {
  return Object.prototype.propertyIsEnumerable.call(obj, key);
}

function createEmptyObject(o) {
  return Object.create(o || null);
}

function uid() {
  return Date.now().toString(32) + Math.floor(Math.random() * 0xffff).toString(32);
}

function mapObject(obj, fn) {
  const newObj = {};
  for (const k in obj) {
    newObj[k] = fn(obj[k], k);
  }
  return newObj;
}

function getOrCreateProperty(obj, property, fn) {
  let v = obj[property];
  if (!v) {
    v = obj[property] = fn();
  }
  return v;
}

function getOrCreateValueOfMap(map, key, fn) {
  let v = map.get(key);
  if (!v) {
    v = fn();
    map.set(key, v);
  }
  return v;
}

function getOrCreateMapProperty(obj, property) {
  return getOrCreateProperty(obj, property, () => new Map());
}

function getOrCreateArrayValueOfMap(map, key) {
  return getOrCreateValueOfMap(map, key, () => []);
}

function getOrCreateArrayProperty(obj, property) {
  return getOrCreateProperty(obj, property, () => []);
}


/***/ }),

/***/ "../../jinge-framework/util/const.js":
/*!***********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/util/const.js ***!
  \***********************************************************/
/*! exports provided: STR_DEFAULT, STR_JINGE, STR_EMPTY, STR_LENGTH, BEFORE_DESTROY_EVENT_NAME, AFTER_RENDER_EVENT_NAME, HTML_ATTR_checked, HTML_ATTR_disabled, HTML_ATTR_selected, HTML_ATTR_readOnly, HTML_ATTR_autofocus, HTML_ATTR_autocomplete, HTML_ATTR_required, HTML_ATTR_controls, HTML_ATTR_autoplay, HTML_ATTR_draggable, HTML_ATTR_multiple, HTML_ATTR_muted, HTML_ATTR_value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_DEFAULT", function() { return STR_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_JINGE", function() { return STR_JINGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_EMPTY", function() { return STR_EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STR_LENGTH", function() { return STR_LENGTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEFORE_DESTROY_EVENT_NAME", function() { return BEFORE_DESTROY_EVENT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AFTER_RENDER_EVENT_NAME", function() { return AFTER_RENDER_EVENT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_checked", function() { return HTML_ATTR_checked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_disabled", function() { return HTML_ATTR_disabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_selected", function() { return HTML_ATTR_selected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_readOnly", function() { return HTML_ATTR_readOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autofocus", function() { return HTML_ATTR_autofocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autocomplete", function() { return HTML_ATTR_autocomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_required", function() { return HTML_ATTR_required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_controls", function() { return HTML_ATTR_controls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autoplay", function() { return HTML_ATTR_autoplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_draggable", function() { return HTML_ATTR_draggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_multiple", function() { return HTML_ATTR_multiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_muted", function() { return HTML_ATTR_muted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_value", function() { return HTML_ATTR_value; });
const STR_DEFAULT = 'default';
const STR_JINGE = 'jinge';
const STR_EMPTY = 'empty';
const STR_LENGTH = 'length';

const BEFORE_DESTROY_EVENT_NAME = 'jinge.before-destroy';
const AFTER_RENDER_EVENT_NAME = 'jinge.after-render';

/* eslint camelcase: "off" */
/**
 * Constants below are prepared for code auto generated by compiler.
 */
const HTML_ATTR_checked = 'checked';
const HTML_ATTR_disabled = 'disabled';
const HTML_ATTR_selected = 'selected';
const HTML_ATTR_readOnly = 'readOnly';
const HTML_ATTR_autofocus = 'autofocus';
const HTML_ATTR_autocomplete = 'autocomplete';
const HTML_ATTR_required = 'required';
const HTML_ATTR_controls = 'controls';
const HTML_ATTR_autoplay = 'autoplay';
const HTML_ATTR_draggable = 'draggable';
const HTML_ATTR_multiple = 'multiple';
const HTML_ATTR_muted = 'muted';
const HTML_ATTR_value = 'value';


/***/ }),

/***/ "../../jinge-framework/util/dom.js":
/*!*********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/util/dom.js ***!
  \*********************************************************/
/*! exports provided: getParent, setText, setAttribute, removeAttribute, setInputValue, createElement, createElementWithoutAttrs, createSVGElement, createSVGElementWithoutAttrs, createFragment, createTextNode, createElementWithChild, createComment, replaceChild, insertBefore, insertAfter, removeChild, appendChild, hasClass, toggleClass, addClass, removeClass, replaceClass, addEvent, removeEvent, registerEvent, getComputedStyle, getCSPropertyValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return getParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setText", function() { return setText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return removeAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputValue", function() { return setInputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementWithoutAttrs", function() { return createElementWithoutAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSVGElement", function() { return createSVGElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSVGElementWithoutAttrs", function() { return createSVGElementWithoutAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return createFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextNode", function() { return createTextNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementWithChild", function() { return createElementWithChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComment", function() { return createComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceChild", function() { return replaceChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return insertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeChild", function() { return removeChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendChild", function() { return appendChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceClass", function() { return replaceClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return addEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEvent", function() { return removeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerEvent", function() { return registerEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedStyle", function() { return getComputedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCSPropertyValue", function() { return getCSPropertyValue; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../jinge-framework/util/type.js");


function getParent($ele) {
  return $ele.parentNode;
}

function setText($element, text) {
  if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isArray"])(text)) {
    text = JSON.stringify(text);
  }
  $element.textContent = text;
}

function setAttribute($ele, attrName, attrValue) {
  if (!attrName) return;
  if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrName)) {
    for (const attrN in attrName) {
      setAttribute($ele, attrN, attrName[attrN]);
    }
    return;
  }
  if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(attrValue) || attrValue === null) {
    removeAttribute($ele, attrName);
  } else {
    $ele.setAttribute(attrName, attrValue);
  }
}

function removeAttribute($ele, attrName) {
  if (!attrName) return;
  if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrName)) {
    for (const attrN in attrName) {
      removeAttribute($ele, attrN);
    }
    return;
  }
  return $ele.removeAttribute(attrName);
}

function setInputValue($inputOrTextarea, value) {
  $inputOrTextarea.value = value;
}

function _createEl($el, attrs, children) {
  if (attrs) {
    for (const an in attrs) {
      if (an && !Object(_type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(attrs[an])) {
        setAttribute($el, an, attrs[an]);
      }
    }
  }
  children.forEach(child => appendChild($el, child));
  return $el;
}

function createElement(tag, attrs, ...children) {
  return _createEl(
    document.createElement(tag),
    attrs, children
  );
}

function createElementWithoutAttrs(tag, ...children) {
  return createElement(tag, null, ...children);
}

function createSVGElement(tag, attrs, ...children) {
  return _createEl(
    document.createElementNS('http://www.w3.org/2000/svg', tag),
    attrs, children
  );
}

function createSVGElementWithoutAttrs(tag, ...children) {
  return createSVGElement(tag, null, ...children);
}

function createFragment(children) {
  const $f = document.createDocumentFragment();
  if (children) children.forEach(c => appendChild($f, c));
  return $f;
}

function createTextNode(text = '') {
  return document.createTextNode(text);
}

function createElementWithChild(tag, attrs, child) {
  const $e = createElement(tag, attrs);
  appendChild($e, child);
  return $e;
}

function createComment(data) {
  return document.createComment(data);
}

function prepareNewNode(newNode) {
  if (!Object(_type__WEBPACK_IMPORTED_MODULE_0__["isArray"])(newNode)) return newNode;
  if (newNode.length === 0) return null;
  else if (newNode.length === 1) return newNode[0];
  else {
    return createFragment(newNode);
  }
}

function replaceChild($parent, newNode, oldNode) {
  if (!(newNode = prepareNewNode(newNode))) {
    return;
  }
  $parent.replaceChild(newNode, oldNode);
}

function insertBefore($parent, newNode, referenceNode) {
  if (!(newNode = prepareNewNode(newNode))) {
    return;
  }
  $parent.insertBefore(newNode, referenceNode);
}

function insertAfter($parent, newNode, referenceNode) {
  if (!(newNode = prepareNewNode(newNode))) {
    return;
  }
  const rn = referenceNode.nextSibling;
  if (!rn) {
    appendChild($parent, newNode);
  } else {
    insertBefore($parent, newNode, rn);
  }
}

function removeChild($parent, $child) {
  $parent.removeChild($child);
}

function appendChild($parent, ...children) {
  children.forEach(ch => {
    if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isArray"])(ch)) {
      return ch.forEach(cc => appendChild($parent, cc));
    }
    if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isString"])(ch)) {
      ch = createTextNode(ch);
    }
    $parent.appendChild(ch);
  });
}

function hasClass($ele, className) {
  return $ele.classList.contains(className);
}

function toggleClass($ele, ...args) {
  return $ele.classList.toggle(...args);
}
function addClass($ele, className) {
  return toggleClass($ele, className, true);
}

function removeClass($ele, className) {
  return toggleClass($ele, className, false);
}

function replaceClass($ele, oldClass, newClass) {
  return $ele.classList.replace(oldClass, newClass);
}

function addEvent($element, eventName, handler, capture = false) {
  $element.addEventListener(eventName, handler, capture);
}

function removeEvent($element, eventName, handler) {
  $element.removeEventListener(eventName, handler);
}

/**
 * Add event to DOM element, similar as addEventListener,
 * but return deregister function which will call removeEventListener.
 *
 * @param {HtmlElement} $element
 * @param {String} eventName
 * @param {Function} handler
 * @param {Boolean|Object} capture
 * @returns {Function} deregister function which will removeEventListener
 */
function registerEvent($element, eventName, handler, capture) {
  addEvent($element, eventName, handler, capture);
  return function deregister() {
    removeEvent($element, eventName, handler);
  };
}

function getComputedStyle(el, pseudoElt) {
  return window.getComputedStyle(el, pseudoElt);
}

function getCSPropertyValue(cst, prop) {
  return cst.getPropertyValue(prop);
}


/***/ }),

/***/ "../../jinge-framework/util/index.js":
/*!***********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/util/index.js ***!
  \***********************************************************/
/*! exports provided: typeOf, isObject, isString, isNumber, isUndefined, isArray, isBoolean, isFunction, instanceOf, isDOMNode, isPromise, arrayIndexOf, arrayRemove, arrayPushIfNotExist, arrayFind, arrayFindIndex, arrayEqual, STR_DEFAULT, STR_JINGE, STR_EMPTY, STR_LENGTH, BEFORE_DESTROY_EVENT_NAME, AFTER_RENDER_EVENT_NAME, HTML_ATTR_checked, HTML_ATTR_disabled, HTML_ATTR_selected, HTML_ATTR_readOnly, HTML_ATTR_autofocus, HTML_ATTR_autocomplete, HTML_ATTR_required, HTML_ATTR_controls, HTML_ATTR_autoplay, HTML_ATTR_draggable, HTML_ATTR_multiple, HTML_ATTR_muted, HTML_ATTR_value, Symbol, assertFail, startsWith, endsWith, defineProperty, assignObject, obj2class, obj2style, defineProperties, getOwnPropertyNames, getOwnPropertySymbols, isPropertyEnumerable, createEmptyObject, uid, mapObject, getOrCreateProperty, getOrCreateValueOfMap, getOrCreateMapProperty, getOrCreateArrayValueOfMap, getOrCreateArrayProperty, setImmediate, clearImmediate, getParent, setText, setAttribute, removeAttribute, setInputValue, createElement, createElementWithoutAttrs, createSVGElement, createSVGElementWithoutAttrs, createFragment, createTextNode, createElementWithChild, createComment, replaceChild, insertBefore, insertAfter, removeChild, appendChild, hasClass, toggleClass, addClass, removeClass, replaceClass, addEvent, removeEvent, registerEvent, getComputedStyle, getCSPropertyValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../jinge-framework/util/type.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeOf", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["typeOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instanceOf", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["instanceOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDOMNode", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isDOMNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return _type__WEBPACK_IMPORTED_MODULE_0__["isPromise"]; });

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "../../jinge-framework/util/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayIndexOf", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayIndexOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayRemove", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayRemove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayPushIfNotExist", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayPushIfNotExist"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayFind", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayFind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayFindIndex", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayFindIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayEqual", function() { return _array__WEBPACK_IMPORTED_MODULE_1__["arrayEqual"]; });

/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./const */ "../../jinge-framework/util/const.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_DEFAULT", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["STR_DEFAULT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_JINGE", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["STR_JINGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_EMPTY", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["STR_EMPTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STR_LENGTH", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["STR_LENGTH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BEFORE_DESTROY_EVENT_NAME", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["BEFORE_DESTROY_EVENT_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AFTER_RENDER_EVENT_NAME", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["AFTER_RENDER_EVENT_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_checked", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_checked"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_disabled", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_disabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_selected", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_selected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_readOnly", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_readOnly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autofocus", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_autofocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autocomplete", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_autocomplete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_required", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_required"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_controls", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_controls"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_autoplay", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_autoplay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_draggable", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_draggable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_multiple", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_multiple"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_muted", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_muted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTML_ATTR_value", function() { return _const__WEBPACK_IMPORTED_MODULE_2__["HTML_ATTR_value"]; });

/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "../../jinge-framework/util/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Symbol", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["Symbol"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertFail", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["assertFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["startsWith"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["endsWith"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineProperty", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["defineProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assignObject", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["assignObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "obj2class", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["obj2class"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "obj2style", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["obj2style"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineProperties", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["defineProperties"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOwnPropertyNames", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["getOwnPropertyNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOwnPropertySymbols", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["getOwnPropertySymbols"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPropertyEnumerable", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["isPropertyEnumerable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEmptyObject", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["createEmptyObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["uid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["mapObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateProperty", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["getOrCreateProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateValueOfMap", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["getOrCreateValueOfMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateMapProperty", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["getOrCreateMapProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateArrayValueOfMap", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["getOrCreateArrayValueOfMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOrCreateArrayProperty", function() { return _common__WEBPACK_IMPORTED_MODULE_3__["getOrCreateArrayProperty"]; });

/* harmony import */ var _setimm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setimm */ "../../jinge-framework/util/setimm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return _setimm__WEBPACK_IMPORTED_MODULE_4__["setImmediate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearImmediate", function() { return _setimm__WEBPACK_IMPORTED_MODULE_4__["clearImmediate"]; });

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom */ "../../jinge-framework/util/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["getParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setText", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["setText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["setAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeAttribute", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["removeAttribute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setInputValue", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["setInputValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["createElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementWithoutAttrs", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["createElementWithoutAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSVGElement", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["createSVGElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSVGElementWithoutAttrs", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["createSVGElementWithoutAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFragment", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["createFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTextNode", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["createTextNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElementWithChild", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["createElementWithChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComment", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["createComment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceChild", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["replaceChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["insertBefore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["insertAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeChild", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["removeChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendChild", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["appendChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["hasClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["toggleClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["addClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["removeClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replaceClass", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["replaceClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["addEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeEvent", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["removeEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerEvent", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["registerEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getComputedStyle", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["getComputedStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCSPropertyValue", function() { return _dom__WEBPACK_IMPORTED_MODULE_5__["getCSPropertyValue"]; });









/***/ }),

/***/ "../../jinge-framework/util/setimm.js":
/*!************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/util/setimm.js ***!
  \************************************************************/
/*! exports provided: setImmediate, clearImmediate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setImmediate", function() { return setImmediate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearImmediate", function() { return clearImmediate; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../../jinge-framework/util/type.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "../../jinge-framework/util/common.js");
/**
 * setImmediate polyfill only for modern browsers
 * Copied from https://github.com/YuzuJS/setImmediate/blob/master/setImmediate.js
 * Simplified by Yuhang-Ge<abeyuhang@gmail.com>
 */



let nextHandle = 1; // Spec says greater than zero
let tasksByHandle;
let currentlyRunningATask = false;
let registerImmediate;

function setImmediateFallback(callback) {
  if (!Object(_type__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(callback) || arguments.length > 1) Object(_common__WEBPACK_IMPORTED_MODULE_1__["assertFail"])();
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
    return setTimeout(runIfPresent, 0, handle);
  }
  const callback = tasksByHandle.get(handle);
  // console.log('stttt', handle, callback);

  if (!callback) return;
  currentlyRunningATask = true;
  try {
    callback();
  } finally {
    clearImmediateFallback(handle);
    currentlyRunningATask = false;
  }
}

if (Object(_type__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(window.setImmediate)) {
  tasksByHandle = new Map();
  const messagePrefix = 'setImmediate$' + Object(_common__WEBPACK_IMPORTED_MODULE_1__["uid"])() + '$';
  window.addEventListener('message', event => {
    if (event.source === window &&
      Object(_type__WEBPACK_IMPORTED_MODULE_0__["isString"])(event.data) &&
      Object(_common__WEBPACK_IMPORTED_MODULE_1__["startsWith"])(event.data, messagePrefix)) {
      runIfPresent(Number(event.data.slice(messagePrefix.length)));
    }
  }, false);

  registerImmediate = function(handle) {
    window.postMessage(messagePrefix + handle, '*');
  };
}

const setImmediate = window.setImmediate || setImmediateFallback;
const clearImmediate = window.clearImmediate || clearImmediateFallback;


/***/ }),

/***/ "../../jinge-framework/util/type.js":
/*!**********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/util/type.js ***!
  \**********************************************************/
/*! exports provided: typeOf, isObject, isString, isNumber, isUndefined, isArray, isBoolean, isFunction, instanceOf, isDOMNode, isPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeOf", function() { return typeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instanceOf", function() { return instanceOf; });
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

function isBoolean(v) {
  return typeof v === 'boolean' || instanceOf(v, Boolean);
}

function isFunction(v) {
  return typeOf(v) === 'function';
}

function instanceOf(v, Clazz) {
  return v instanceof Clazz;
}

function isDOMNode(ele) {
  return instanceOf(ele, Node);
}

function isPromise(obj) {
  return isObject(obj) && isFunction(obj.then);
}


/***/ }),

/***/ "../../jinge-framework/vm/core.js":
/*!********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/vm/core.js ***!
  \********************************************************/
/*! exports provided: VM_ATTRS, VM_DEBUG_NAME, VM_PROXY, VM_ON, VM_OFF, VM_NOTIFY, VM_NOTIFIABLE, VM_HOST, VM_RELATED_LISTENERS, VM_ADD_PARENT, VM_REMOVE_PARENT, VM_SHIFT_PARENT, VM_DESTROY, isInnerObj, isViewModel, isPublicProp, ViewModelAttrs, vmRelatedClear, RelatedListenersStore, vmWatch, vmUnwatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_ATTRS", function() { return VM_ATTRS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_DEBUG_NAME", function() { return VM_DEBUG_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_PROXY", function() { return VM_PROXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_ON", function() { return VM_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_OFF", function() { return VM_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_NOTIFY", function() { return VM_NOTIFY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_NOTIFIABLE", function() { return VM_NOTIFIABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_HOST", function() { return VM_HOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_RELATED_LISTENERS", function() { return VM_RELATED_LISTENERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_ADD_PARENT", function() { return VM_ADD_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_REMOVE_PARENT", function() { return VM_REMOVE_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_SHIFT_PARENT", function() { return VM_SHIFT_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_DESTROY", function() { return VM_DESTROY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInnerObj", function() { return isInnerObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isViewModel", function() { return isViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPublicProp", function() { return isPublicProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModelAttrs", function() { return ViewModelAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmRelatedClear", function() { return vmRelatedClear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatedListenersStore", function() { return RelatedListenersStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmWatch", function() { return vmWatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmUnwatch", function() { return vmUnwatch; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");


const VM_ATTRS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('vm_injected_attrs');
const VM_DEBUG_NAME = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('name');
const VM_PROXY = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('wrapper_proxy_of_host');
const VM_ON = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_add_listener');
const VM_OFF = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_remove_listener');
const VM_NOTIFY = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_notify_listener');
const VM_NOTIFIABLE = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('notifiable');
const VM_HOST = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('host');
const VM_RELATED_LISTENERS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('vm_related_listeners');

const PARENTS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('parents');
const LISTENERS_STAR = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('*');
const LISTENERS_DBSTAR = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('**');
const LISTENERS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('listeners');
const LISTENERS_ID = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('listenrs_id');
const LISTENERS_PARENT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('vm_listeners_parent');
const LISTENERS_HANDLERS = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('vm_listeners_handlers');

const VM_ADD_PARENT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_add_parent');
const VM_REMOVE_PARENT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_remove_parent');
const VM_SHIFT_PARENT = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_shift_parent');
const VM_DESTROY = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('fn_destroy');

function isInnerObj(v) {
  const clazz = v.constructor;
  return clazz === RegExp || clazz === Date || clazz === Boolean;
}
function isViewModel(obj) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(obj) && !isInnerObj(obj) && (VM_ATTRS in obj);
}

function isPublicProp(v) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(v) && v.charCodeAt(0) !== 95;
}

class Node {
  constructor(parentNode, propertyName) {
    this[LISTENERS_PARENT] = parentNode;
    this[LISTENERS_ID] = propertyName;
    this[LISTENERS] = null;
    this[LISTENERS_HANDLERS] = null;
  }
}

function getPropN(v) {
  if (v === LISTENERS_DBSTAR || v === LISTENERS_STAR || Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(v)) {
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

function loopCreateNode(vm, props, level = 0) {
  const propertyName = getPropN(props[level]);
  if (!propertyName) {
    return null;
  }
  const listeners = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateMapProperty"])(vm, LISTENERS);
  let node = listeners.get(propertyName);
  if (!node) {
    node = new Node(vm, propertyName);
    listeners.set(propertyName, node);
  }
  if (props.length - 1 === level) {
    return node;
  } else {
    return loopCreateNode(node, props, level + 1);
  }
}

function loopGetNode(vm, props, level = 0) {
  const propertyName = getPropN(props[level]);
  if (!propertyName) {
    return null;
  }
  const listeners = vm[LISTENERS];
  const node = listeners.get(propertyName);
  if (!node) {
    return null;
  }
  if (props.length - 1 === level) {
    return node;
  } else {
    return loopGetNode(node, props, level + 1);
  }
}

function delNode(node) {
  if ((node[LISTENERS_HANDLERS] && node[LISTENERS_HANDLERS].length > 0) ||
    (node[LISTENERS] && node[LISTENERS].size > 0)
  ) {
    return;
  }
  /**
   * if one node don't have any listener or child, delete it.
   */
  const parent = node[LISTENERS_PARENT];
  const id = node[LISTENERS_ID];
  node[LISTENERS_PARENT] = null; // unlink parent.
  parent[LISTENERS].delete(id);
  return parent;
}

function loopClearNode(node, isRoot = true) {
  const listeners = node[LISTENERS];
  if (listeners) {
    // loop clear all child nodes
    listeners.forEach(sn => loopClearNode(sn, false));
    listeners.clear();
    node[LISTENERS] = null;
  }
  if (isRoot) {
    return;
  }
  // destroy all handlers
  const handlers = node[LISTENERS_HANDLERS];
  if (handlers) {
    // clear handler waiting to execute
    handlers.forEach(_handleCancel);
    handlers.length = 0;
    node[LISTENERS_HANDLERS] = null;
  }
  // unlink parent
  node[LISTENERS_PARENT] = null;
}

const _handleTasks = new Map();
function _handleCancel(handler) {
  const t = _handleTasks.get(handler);
  if (t) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["clearImmediate"])(t.i);
    _handleTasks.delete(handler);
  }
}
function _handleOnce(node, handler, propPath) {
  if (_handleTasks.has(handler)) {
    return;
  }
  const imm = Object(_util__WEBPACK_IMPORTED_MODULE_0__["setImmediate"])(() => {
    const arg = _handleTasks.get(handler);
    try {
      handler(arg.p);
    } finally {
      _handleTasks.delete(handler);
    }
  });
  _handleTasks.set(handler, {
    i: imm,
    p: propPath
  });
}

function loopHandle(propPath, node) {
  const handlers = node[LISTENERS_HANDLERS];
  handlers && handlers.forEach(handler => {
    _handleOnce(node, handler, propPath);
    // imms ? _handleOnce(node, handler, propPath) : handler(propPath);
  });
  const listeners = node[LISTENERS];
  listeners && listeners.forEach(c => {
    loopHandle(propPath, c);
  });
}

function loopNotify(vm, props, level = 0) {
  const listeners = vm[LISTENERS];
  if (!listeners) {
    return;
  }
  const propertyName = getPropN(props[level]);
  if (!propertyName) {
    return;
  }
  let node = listeners.get(propertyName);
  if (node) {
    if (props.length - 1 === level) {
      // loopHandle(props, node, config[CFG_VM_DEBUG] ? null : imms);
      loopHandle(props, node);
    } else {
      loopNotify(node, props, level + 1);
    }
  }
  node = listeners.get(LISTENERS_STAR);
  if (node) {
    if (props.length - 1 === level) {
      loopHandle(props, node, null);
    } else {
      loopNotify(node, props, level + 1);
    }
  }
  node = listeners.get(LISTENERS_DBSTAR);
  if (node) {
    loopHandle(props, node, null);
  }
}

function getProps(prop) {
  return Object(_util__WEBPACK_IMPORTED_MODULE_0__["isString"])(prop) ? (
    prop.indexOf('.') > 0 ? prop.split('.') : [prop]
  ) : prop;
}

class ViewModelAttrs {
  constructor(host) {
    this[VM_HOST] = host;
    this[VM_NOTIFIABLE] = true;
    this[VM_PROXY] = null;
    this[PARENTS] = null;
    this[LISTENERS] = null;
  }

  [VM_ADD_PARENT](parent, prop) {
    const pArr = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateArrayProperty"])(this, PARENTS);
    pArr.push([parent, prop]);
  }

  [VM_REMOVE_PARENT](parent, prop) {
    const pArr = this[PARENTS];
    if (!pArr) return;
    const idx = pArr.findIndex(ps => ps[0] === parent && ps[1] === prop);
    if (idx >= 0) pArr.splice(idx, 1);
  }

  [VM_SHIFT_PARENT](parent, prop, delta) {
    const pArr = this[PARENTS];
    if (!pArr) return;
    const ps = pArr.find(ps => ps[0] === parent && ps[1] === prop);
    if (ps) {
      ps[1] += delta;
    }
  }

  [VM_ON](prop, handler, relatedComponent) {
    const node = loopCreateNode(this, getProps(prop));
    if (!node) {
      return;
    }
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayPushIfNotExist"])(
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateArrayProperty"])(node, LISTENERS_HANDLERS),
      handler
    );
    const host = this[VM_HOST];
    if (!relatedComponent || !(VM_RELATED_LISTENERS in relatedComponent)) {
      return;
    }
    // unwrap component out of wrapper proxy
    relatedComponent = relatedComponent[VM_ATTRS][VM_HOST];
    if (host === relatedComponent) {
      return;
    }
    vmRelatedOn(relatedComponent, host, prop, handler);
  }

  [VM_OFF](prop, handler, relatedComponent) {
    const node = loopGetNode(this, getProps(prop));
    if (!node) {
      return;
    }

    const hs = node[LISTENERS_HANDLERS];
    if (!handler) { // remove all if second parameter is not provided
      hs.forEach(_handleCancel);
      hs.length = 0;
    } else {
      _handleCancel(handler);
      Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayRemove"])(hs, handler);
    }

    delNode(node);

    const host = this[VM_HOST];
    if (!relatedComponent || !(VM_RELATED_LISTENERS in relatedComponent)) {
      return;
    }
    // unwrap component out of wrapper proxy
    relatedComponent = relatedComponent[VM_ATTRS][VM_HOST];
    if (host === relatedComponent) {
      return;
    }
    vmRelatedOff(relatedComponent, host, prop, handler);
  }

  [VM_NOTIFY](prop) {
    if (!this[VM_NOTIFIABLE]) {
      return;
    }
    const props = getProps(prop);
    if (this[LISTENERS]) {
      loopNotify(this, props);
    }
    const pArr = this[PARENTS];
    pArr && pArr.forEach(ps => {
      const vmAttrs = ps[0][VM_ATTRS];
      if (!vmAttrs) {
        console.error('dev-warn-unexpected: parent of ViewModelAttrs has been destroied but not unlink.');
        return;
      }
      vmAttrs[VM_NOTIFY](
        [ps[1]].concat(props)
      );
    });
  }

  [VM_DESTROY](unlinkHostProperties = true) {
    // mark as non-notifiable
    this[VM_NOTIFIABLE] = false;
    // clear assignment parents
    const pArr = this[PARENTS];
    pArr && (pArr.length = 0);
    this[PARENTS] = null;
    // clear listeners
    loopClearNode(this);
    // unlink host object wrapper proxy
    this[VM_PROXY] = null;

    const host = this[VM_HOST];

    // destroy related listeners
    if (VM_RELATED_LISTENERS in host) {
      vmRelatedClear(host[VM_RELATED_LISTENERS]);
      host[VM_RELATED_LISTENERS] = null;
    }
    // unlink vm host
    this[VM_HOST] = null;
    /*
     * by default, we will reset VM_HOST object's all public properties to null
     *   to remove VM_HOST object from old property value's VM_PARENTS
     *
     * 默认情况下（即 === true），会将 VM_HOST 对象的所有（不以 '_' 打头的）公共属性重置为 null，这个赋值会触发 ./proxy.js 中的逻辑，
     *   将该对象从属性原来的值的 VM_PARENTS 中移除，从而达到解除 ViewModel 之间的关联，回收资源和防止潜在 bug 的目的。
     *
     * 当 VM 对象是某个类的实例时，由于类可以通过 setter 函数定义公共属性，而这一类的公共属性不能
     *   通过 getOwnPropertyNames 来遍历。因此这种情况，需要主动传递 unlinkHostProperties = false
     *   来禁用默认的重置属性逻辑，然后自己处理相关的重置逻辑。比如 Component 组件。
     */
    unlinkHostProperties && Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOwnPropertyNames"])(host, prop => {
      if (prop.charCodeAt(0) === 95) {
        return;
      }
      const v = host[prop];
      if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(v)) {
        return;
      }
      const a = v[VM_ATTRS];
      a && a[VM_REMOVE_PARENT](host, prop);
      host[prop] = null;
    });
  }
}

function vmRelatedOn(relatedComponent, hostViewModel, prop, handler) {
  const rvl = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateMapProperty"])(relatedComponent, VM_RELATED_LISTENERS);
  let hook = rvl.get(hostViewModel);
  if (!hook) {
    hook = [];
    rvl.set(hostViewModel, hook);
  }
  hook.push([prop, handler]);
}

function vmRelatedOff(relatedComponent, hostViewModel, prop, handler) {
  const rvl = relatedComponent[VM_RELATED_LISTENERS];
  if (!rvl) return;
  const hook = rvl.get(hostViewModel);
  if (!hook) return;
  const isPropArray = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(prop);
  const i = hook.findIndex(it => {
    return handler === it[1] &&
      (isPropArray
        ? Object(_util__WEBPACK_IMPORTED_MODULE_0__["arrayEqual"])(prop, it[0])
        : prop === it[0]
      );
  });
  if (i >= 0) {
    hook.splice(i, 1);
  }
}

function vmRelatedClear(relatedListeners) {
  if (!relatedListeners) return;
  relatedListeners.forEach((arr, component) => {
    arr.forEach(hook => {
      component[VM_ATTRS][VM_OFF](hook[0], hook[1]);
    });
    arr.length = 0;
  });
  relatedListeners.clear();
}

class RelatedListenersStore {
  constructor() {
    /**
     * VM_ON/VM_OFF 绑定属性监听接受三个参数，其中第三个参数为关联组件。
     *   当关联组件被销毁时，可以同时销毁保存在其 VM_RELATED_LISTENERS 中的父亲 ViewModel 的
     *   属性监听函数（参看 ../core/component.js 里 VM_RELATED_LISTENERS 的注释）。
     *
     * 在多语言国际化方案中，当 attrs 渲染函数代码被提取到独立的多语言资源文件后，除了关联组件被销毁时需要销毁父 ViewModel 的属性监听，
     *   当 locale 发生变化时，这些监听函数也要销毁。为了实现这个目标，采用了一个取巧的思路，传递一个模拟的关联组件，
     *   即 RelatedListenersStore 来存储 VM_RELATED_LISTENERS。
     *
     * 以下的 VM_RELATED_LISTENERS 和 VM_ATTRS 的定义就是为了实现该模拟，使得
     *   VM_ON/VM_OFF 函数可以正常执行关联组件的逻辑。
     */
    this[VM_RELATED_LISTENERS] = null;
    this[VM_ATTRS] = {
      [VM_HOST]: this
    };
  }

  // destroy
  d() {
    vmRelatedClear(this[VM_RELATED_LISTENERS]);
    this[VM_RELATED_LISTENERS] = null;
  }
}

function vmWatch(vm, prop, handler) {
  const vmAttrs = vm[VM_ATTRS];
  if (!vmAttrs) {
    throw new Error('vmWatch require ViewModel object');
  }
  let dbStarIdx = -1;
  const props = getProps(prop).map((p, i) => {
    if (p === '**') {
      dbStarIdx = i;
      return LISTENERS_DBSTAR;
    }
    return p === '*' ? LISTENERS_STAR : p;
  });
  if (dbStarIdx >= 0 && dbStarIdx !== props.length - 1) {
    /**
     * 'a.b.**' is good.
     * 'a.b.**.c' is bad.
     */
    throw new Error('wizard "**" must be last element in path.');
  }
  vmAttrs[VM_ON](props, handler);
}

function vmUnwatch(vm, prop, handler) {
  const vmAttrs = vm[VM_ATTRS];
  if (!vmAttrs[VM_NOTIFIABLE]) {
    return;
  }
  if (!prop) {
    loopClearNode(vmAttrs);
  } else {
    vmAttrs[VM_OFF](prop, handler);
  }
}


/***/ }),

/***/ "../../jinge-framework/vm/index.js":
/*!*********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/vm/index.js ***!
  \*********************************************************/
/*! exports provided: VM_ATTRS, VM_DEBUG_NAME, VM_PROXY, VM_ON, VM_OFF, VM_NOTIFY, VM_NOTIFIABLE, VM_HOST, VM_RELATED_LISTENERS, VM_ADD_PARENT, VM_REMOVE_PARENT, VM_SHIFT_PARENT, VM_DESTROY, isInnerObj, isViewModel, isPublicProp, ViewModelAttrs, vmRelatedClear, RelatedListenersStore, vmWatch, vmUnwatch, VM_SETTER_FN_MAP, ObjectProxyHandler, ComponentProxyHandler, PromiseProxyHandler, ArrayProxyHandler, wrapViewModel, VM, wrapComponent, wrapAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "../../jinge-framework/vm/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_ATTRS", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_DEBUG_NAME", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_PROXY", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_PROXY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_ON", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_OFF", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_OFF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_NOTIFY", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_NOTIFY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_NOTIFIABLE", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_NOTIFIABLE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_HOST", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_HOST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_RELATED_LISTENERS", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_RELATED_LISTENERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_ADD_PARENT", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_ADD_PARENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_REMOVE_PARENT", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_REMOVE_PARENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_SHIFT_PARENT", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_SHIFT_PARENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_DESTROY", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["VM_DESTROY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInnerObj", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["isInnerObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isViewModel", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["isViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPublicProp", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["isPublicProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewModelAttrs", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["ViewModelAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmRelatedClear", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["vmRelatedClear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RelatedListenersStore", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["RelatedListenersStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmWatch", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["vmWatch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmUnwatch", function() { return _core__WEBPACK_IMPORTED_MODULE_0__["vmUnwatch"]; });

/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proxy */ "../../jinge-framework/vm/proxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM_SETTER_FN_MAP", function() { return _proxy__WEBPACK_IMPORTED_MODULE_1__["VM_SETTER_FN_MAP"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectProxyHandler", function() { return _proxy__WEBPACK_IMPORTED_MODULE_1__["ObjectProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentProxyHandler", function() { return _proxy__WEBPACK_IMPORTED_MODULE_1__["ComponentProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PromiseProxyHandler", function() { return _proxy__WEBPACK_IMPORTED_MODULE_1__["PromiseProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayProxyHandler", function() { return _proxy__WEBPACK_IMPORTED_MODULE_1__["ArrayProxyHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapViewModel", function() { return _proxy__WEBPACK_IMPORTED_MODULE_1__["wrapViewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VM", function() { return _proxy__WEBPACK_IMPORTED_MODULE_1__["VM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapComponent", function() { return _proxy__WEBPACK_IMPORTED_MODULE_1__["wrapComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapAttrs", function() { return _proxy__WEBPACK_IMPORTED_MODULE_1__["wrapAttrs"]; });





/***/ }),

/***/ "../../jinge-framework/vm/proxy.js":
/*!*********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-framework/vm/proxy.js ***!
  \*********************************************************/
/*! exports provided: VM_SETTER_FN_MAP, ObjectProxyHandler, ComponentProxyHandler, PromiseProxyHandler, ArrayProxyHandler, wrapViewModel, VM, wrapComponent, wrapAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM_SETTER_FN_MAP", function() { return VM_SETTER_FN_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectProxyHandler", function() { return ObjectProxyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentProxyHandler", function() { return ComponentProxyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromiseProxyHandler", function() { return PromiseProxyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayProxyHandler", function() { return ArrayProxyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapViewModel", function() { return wrapViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VM", function() { return VM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapComponent", function() { return wrapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapAttrs", function() { return wrapAttrs; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../../jinge-framework/util/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../../jinge-framework/vm/core.js");



const VM_SETTER_FN_MAP = Object(_util__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('vm_setter_fn_map');

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
  const map = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getOrCreateMapProperty"])(obj, VM_SETTER_FN_MAP);
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
  } else {
    return map.get(prop);
  }
}

function notifyPropChanged(vm, prop) {
  vm[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_NOTIFY"]](prop);
}

function __propSetHandler(target, prop, value, setFn) {
  if (!Object(_core__WEBPACK_IMPORTED_MODULE_1__["isPublicProp"])(prop)) {
    target[prop] = value;
    return true;
  }
  const oldVal = target[prop];
  if (oldVal === value && !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(value)) {
    return true;
  }
  const newValIsVM = Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) && !Object(_core__WEBPACK_IMPORTED_MODULE_1__["isInnerObj"])(value);
  if (newValIsVM && !(_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"] in value)) {
    throw new Error(`public property "${prop}" of ViewModel must also be ViewModel`);
  }
  // console.log(`'${prop}' changed from ${store[prop]} to ${value}`);
  if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(oldVal)) {
    const a = oldVal[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]];
    a && a[_core__WEBPACK_IMPORTED_MODULE_1__["VM_REMOVE_PARENT"]](target, prop);
  }
  setFn(target, prop, value);
  if (newValIsVM) {
    value[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_ADD_PARENT"]](target, prop);
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
    setterFn.call(target[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_PROXY"]], value);
  } else {
    target[prop] = value;
  }
}

function objectPropSetHandler(target, prop, value) {
  if (!target[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]]) {
    // ViewModel has been destroied.
    return true;
  }
  return __propSetHandler(target, prop, value, __objectPropSetFn);
}

function componentPropSetHandler(target, prop, value) {
  if (!target[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]]) {
    console.warn(`call setter "${prop.toString()}" after destroied, resources such as setInterval maybe not released before destroy. component:`, target);
    return true;
  }
  return __propSetHandler(target, prop, value, __componentPropSetFn);
}

function arrayPropSetHandler(target, prop, value) {
  if (prop === _util__WEBPACK_IMPORTED_MODULE_0__["STR_LENGTH"]) {
    return arrayLengthSetHandler(target, value);
  }
  return objectPropSetHandler(target, prop, value);
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
  if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(value)) throw new Error('bad argument. array length must be validate number.');
  const oldLen = target.length;
  if (oldLen > value) {
    for (let i = value; i < oldLen; i++) {
      const v = target[i];
      Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(v) && v[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_REMOVE_PARENT"]](target, i);
    }
  }
  target.length = value;
  // console.log('set .length from', oldLen, 'to', value);
  if (oldLen !== value) {
    notifyPropChanged(target, _util__WEBPACK_IMPORTED_MODULE_0__["STR_LENGTH"]);
    arrayNotifyItems(target, oldLen, value);
  }
  return true;
}

const ObjectProxyHandler = {
  set: objectPropSetHandler
};

const ComponentProxyHandler = {
  set: componentPropSetHandler
};

const PromiseProxyHandler = {
  get(target, prop) {
    if (prop === 'then' || prop === 'catch') {
      const v = target[prop];
      return function(...args) {
        return v.call(target, ...args);
      };
    } else {
      return target[prop];
    }
  },
  set: objectPropSetHandler
};

function _arrayFill(target, v) {
  target.forEach((it, i) => {
    if (it === v && !Object(_util__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(it)) {
      return;
    }
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
      it[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_REMOVE_PARENT"]](target, i);
    }
    target[i] = v;
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
      it[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_ADD_PARENT"]](target, i);
    }
    notifyPropChanged(target, i);
  });
  return target[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_PROXY"]];
}

function _arrayReverseSort(target, fn, arg) {
  target.forEach((it, i) => {
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
      it[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_ADD_PARENT"]](target, i);
    }
  });
  target[fn](arg);
  target.forEach((it, i) => {
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
      it[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_REMOVE_PARENT"]](parent, i);
    }
  });
  arrayNotifyItems(target, 0, target.length);
  // return wrapper proxy to ensure `arr.reverse() === arr`
  return target[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_PROXY"]];
}

function _arrayWrapSub(arr, wrapEachItem = false) {
  const rtn = wrapProxy(arr, true);
  // handleVMDebug(arr);
  arr.forEach((it, i) => {
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(it)) {
      it[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_ADD_PARENT"]](arr, i);
    } else if (wrapEachItem) {
      arr[i] = loopWrapVM(it);
    }
  });
  return rtn;
}

function _arrayShiftOrUnshiftProp(arr, delta) {
  arr.forEach((el, i) => {
    if (!Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) return;
    el[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_SHIFT_PARENT"]](arr, i, delta);
  });
}

function _argAssert(arg, fn) {
  if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(arg)) {
    if (!(_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"] in arg)) {
      throw new Error(`argument passed to Array.${fn} must be ViewModel if the array is ViewModel`);
    } else {
      return true;
    }
  } else {
    return false;
  }
}

const ArrayFns = {
  splice(target, idx, delCount, ...args) {
    if (idx < 0) idx = 0;
    args.forEach((arg, i) => {
      if (_argAssert(arg, 'splice')) {
        arg[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_ADD_PARENT"]](target, idx + i);
      }
    });
    for (let i = 0; i < delCount; i++) {
      if (idx + i >= target.length) break;
      const el = target[idx + i];
      if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) {
        el[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_REMOVE_PARENT"]](target, idx + i);
      }
    }
    const delta = args.length - delCount;
    if (delta !== 0) {
      for (let i = idx + delCount; i < target.length; i++) {
        const el = target[i];
        if (!Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) continue;
        el[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_SHIFT_PARENT"]](target, i, delta);
      }
    }
    const rtn = _arrayWrapSub(target.splice(idx, delCount, ...args));
    if (delta !== 0) {
      notifyPropChanged(target, _util__WEBPACK_IMPORTED_MODULE_0__["STR_LENGTH"]);
      for (let i = idx; i < target.length; i++) {
        notifyPropChanged(target, i);
      }
    }
    return rtn;
  },
  shift(target) {
    if (target.length === 0) return target.shift();
    _arrayShiftOrUnshiftProp(target, -1);
    const el = target.shift();
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) {
      el[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_REMOVE_PARENT"]](target, -1);
    }
    notifyPropChanged(target, _util__WEBPACK_IMPORTED_MODULE_0__["STR_LENGTH"]);
    for (let i = 0; i < target.length + 1; i++) {
      notifyPropChanged(target, i);
    }
    return el;
  },
  unshift(target, ...args) {
    if (args.length === 0) return target.unshift();
    args.forEach((arg, i) => {
      if (_argAssert(arg, 'unshift')) {
        arg[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_ADD_PARENT"]](target, i);
      }
    });
    _arrayShiftOrUnshiftProp(target, args.length);
    const rtn = target.unshift(...args);
    notifyPropChanged(target, _util__WEBPACK_IMPORTED_MODULE_0__["STR_LENGTH"]);
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
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isViewModel"])(el)) {
      el[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_REMOVE_PARENT"]](target, target.length);
    }
    notifyPropChanged(target, _util__WEBPACK_IMPORTED_MODULE_0__["STR_LENGTH"]);
    notifyPropChanged(target, target.length);
    return el;
  },
  push(target, ...args) {
    if (args.length === 0) return target.push();
    args.forEach((arg, i) => {
      if (_argAssert(arg, 'push')) {
        arg[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_ADD_PARENT"]](target, target.length + i);
      }
    });
    const rtn = target.push(...args);
    notifyPropChanged(target, _util__WEBPACK_IMPORTED_MODULE_0__["STR_LENGTH"]);
    for (let i = target.length - 1 - args.length; i < target.length; i++) {
      notifyPropChanged(target, i);
    }
    return rtn;
  },
  fill(target, v) {
    _argAssert(v, 'fill');
    return _arrayFill(target, v);
  },
  reverse(target) {
    return _arrayReverseSort(target, 'reverse');
  },
  sort(target, fn) {
    return _arrayReverseSort(target, 'sort', fn);
  },
  concat(target, arr) {
    _argAssert(arr, 'concat');
    return _arrayWrapSub(target.concat(arr));
  },
  filter(target, fn) {
    return _arrayWrapSub(target.filter(fn));
  },
  slice(target, si, ei) {
    return _arrayWrapSub(target.slice(si, ei));
  },
  map(target, fn) {
    return _arrayWrapSub(target.map(fn), true);
  }
};

const ArrayProxyHandler = {
  get(target, prop) {
    if (prop in ArrayFns) {
      const fn = ArrayFns[prop];
      return function(...args) {
        return fn(target, ...args);
      };
    } else {
      return target[prop];
    }
  },
  set: arrayPropSetHandler
};

function wrapProp(vm, prop) {
  const v = vm[prop];
  if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(v) || Object(_core__WEBPACK_IMPORTED_MODULE_1__["isInnerObj"])(v)) {
    return;
  }
  if (_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"] in v) {
    v[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_ADD_PARENT"]](vm, prop);
    return;
  }
  vm[prop] = loopWrapVM(v);
  v[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_ADD_PARENT"]](vm, prop);
}

function wrapProxy(vm, isArr) {
  const vmAttrs = new _core__WEBPACK_IMPORTED_MODULE_1__["ViewModelAttrs"](vm);
  vm[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]] = vmAttrs;
  const p = new Proxy(vm, isArr ? ArrayProxyHandler : (
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["isPromise"])(vm) ? PromiseProxyHandler : ObjectProxyHandler
  ));
  vmAttrs[_core__WEBPACK_IMPORTED_MODULE_1__["VM_PROXY"]] = p;
  return p;
}

function loopWrapVM(plainObjectOrArray) {
  if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(plainObjectOrArray)) {
    // directly return if alreay is ViewModel or inner object(Date/RegExp/Boolean).
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isInnerObj"])(plainObjectOrArray) || (_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"] in plainObjectOrArray)) {
      return plainObjectOrArray;
    }

    if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isArray"])(plainObjectOrArray)) {
      for (let i = 0; i < plainObjectOrArray.length; i++) {
        wrapProp(plainObjectOrArray, i);
      }
      return wrapProxy(plainObjectOrArray, true);
    } else {
      for (const k in plainObjectOrArray) {
        if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isPublicProp"])(k)) {
          wrapProp(plainObjectOrArray, k);
        }
      }
      return wrapProxy(plainObjectOrArray, false);
    }
  } else {
    return plainObjectOrArray;
  }
}

function wrapViewModel(plainObjectOrArray) {
  const vm = loopWrapVM(plainObjectOrArray);
  // if (vm !== plainObjectOrArray) {
  //   handleVMDebug(plainObjectOrArray);
  // }
  return vm;
}

// alias for convenient
const VM = wrapViewModel;

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

function wrapComponent(component) {
  if (component[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]]) {
    throw new Error('alreay wraped.');
  }
  // handleVMDebug(component);
  const vmAttrs = new _core__WEBPACK_IMPORTED_MODULE_1__["ViewModelAttrs"](component);
  // 初始化时 Component 默认的 VM_NOTIFIABLE 为 false，
  // 待 RENDER 结束后才修改为 true，用于避免无谓的消息通知。
  vmAttrs[_core__WEBPACK_IMPORTED_MODULE_1__["VM_NOTIFIABLE"]] = false;
  component[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]] = vmAttrs;
  const p = new Proxy(component, ComponentProxyHandler);
  vmAttrs[_core__WEBPACK_IMPORTED_MODULE_1__["VM_PROXY"]] = p;
  return p;
}

function wrapAttrs(attrsObj) {
  if (!Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrsObj)) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["assertFail"])();
  }
  for (const k in attrsObj) {
    if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isPublicProp"])(k)) {
      const v = attrsObj[k];
      if (Object(_util__WEBPACK_IMPORTED_MODULE_0__["isObject"])(v) && !Object(_core__WEBPACK_IMPORTED_MODULE_1__["isInnerObj"])(v) && !(_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"] in v)) {
        throw new Error(`value passed to attribute "${k}" must be ViewModel.`);
      }
    }
  }
  const attrs = wrapProxy(attrsObj, false);
  // 初始化时 Component 默认的 VM_NOTIFIABLE 为 false，
  // 待 RENDER 结束后才修改为 true，用于避免无谓的消息通知。
  attrs[_core__WEBPACK_IMPORTED_MODULE_1__["VM_ATTRS"]][_core__WEBPACK_IMPORTED_MODULE_1__["VM_NOTIFIABLE"]] = false;
  return attrs;
}


/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js":
/*!**************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js ***!
  \**************************************************************************************************/
/*! exports provided: root, fromJson, toJson, forEach, extend, equals, identity, noop, createProxyFunctions, inherit, inArray, _inArray, removeFrom, _removeFrom, pushTo, _pushTo, deregAll, defaults, mergeR, ancestors, pick, omit, pluck, filter, find, mapObj, map, values, allTrueR, anyTrueR, unnestR, flattenR, pushR, uniqR, unnest, flatten, assertPredicate, assertMap, assertFn, pairs, arrayTuples, applyPairs, tail, copy, _extend, silenceUncaughtInPromise, silentRejection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJson", function() { return fromJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJson", function() { return toJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProxyFunctions", function() { return createProxyFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return inherit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inArray", function() { return inArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_inArray", function() { return _inArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFrom", function() { return removeFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_removeFrom", function() { return _removeFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushTo", function() { return pushTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_pushTo", function() { return _pushTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deregAll", function() { return deregAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeR", function() { return mergeR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ancestors", function() { return ancestors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return omit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return pluck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapObj", function() { return mapObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allTrueR", function() { return allTrueR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anyTrueR", function() { return anyTrueR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unnestR", function() { return unnestR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenR", function() { return flattenR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushR", function() { return pushR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqR", function() { return uniqR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unnest", function() { return unnest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertPredicate", function() { return assertPredicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertMap", function() { return assertMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertFn", function() { return assertFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return pairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayTuples", function() { return arrayTuples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPairs", function() { return applyPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return tail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_extend", function() { return _extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "silenceUncaughtInPromise", function() { return silenceUncaughtInPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "silentRejection", function() { return silentRejection; });
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _coreservices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/**
 * Random utility functions used in the UI-Router code
 *
 * These functions are exported, but are subject to change without notice.
 *
 * @preferred @publicapi @module common
 */ /** */



var root = (typeof self === 'object' && self.self === self && self) ||
    (typeof global === 'object' && global.global === global && global) ||
    undefined;
var angular = root.angular || {};
var fromJson = angular.fromJson || JSON.parse.bind(JSON);
var toJson = angular.toJson || JSON.stringify.bind(JSON);
var forEach = angular.forEach || _forEach;
var extend = Object.assign || _extend;
var equals = angular.equals || _equals;
function identity(x) {
    return x;
}
function noop() { }
/**
 * Builds proxy functions on the `to` object which pass through to the `from` object.
 *
 * For each key in `fnNames`, creates a proxy function on the `to` object.
 * The proxy function calls the real function on the `from` object.
 *
 *
 * #### Example:
 * This example creates an new class instance whose functions are prebound to the new'd object.
 * ```js
 * class Foo {
 *   constructor(data) {
 *     // Binds all functions from Foo.prototype to 'this',
 *     // then copies them to 'this'
 *     bindFunctions(Foo.prototype, this, this);
 *     this.data = data;
 *   }
 *
 *   log() {
 *     console.log(this.data);
 *   }
 * }
 *
 * let myFoo = new Foo([1,2,3]);
 * var logit = myFoo.log;
 * logit(); // logs [1, 2, 3] from the myFoo 'this' instance
 * ```
 *
 * #### Example:
 * This example creates a bound version of a service function, and copies it to another object
 * ```
 *
 * var SomeService = {
 *   this.data = [3, 4, 5];
 *   this.log = function() {
 *     console.log(this.data);
 *   }
 * }
 *
 * // Constructor fn
 * function OtherThing() {
 *   // Binds all functions from SomeService to SomeService,
 *   // then copies them to 'this'
 *   bindFunctions(SomeService, this, SomeService);
 * }
 *
 * let myOtherThing = new OtherThing();
 * myOtherThing.log(); // logs [3, 4, 5] from SomeService's 'this'
 * ```
 *
 * @param source A function that returns the source object which contains the original functions to be bound
 * @param target A function that returns the target object which will receive the bound functions
 * @param bind A function that returns the object which the functions will be bound to
 * @param fnNames The function names which will be bound (Defaults to all the functions found on the 'from' object)
 * @param latebind If true, the binding of the function is delayed until the first time it's invoked
 */
function createProxyFunctions(source, target, bind, fnNames, latebind) {
    if (latebind === void 0) { latebind = false; }
    var bindFunction = function (fnName) { return source()[fnName].bind(bind()); };
    var makeLateRebindFn = function (fnName) {
        return function lateRebindFunction() {
            target[fnName] = bindFunction(fnName);
            return target[fnName].apply(null, arguments);
        };
    };
    fnNames = fnNames || Object.keys(source());
    return fnNames.reduce(function (acc, name) {
        acc[name] = latebind ? makeLateRebindFn(name) : bindFunction(name);
        return acc;
    }, target);
}
/**
 * prototypal inheritance helper.
 * Creates a new object which has `parent` object as its prototype, and then copies the properties from `extra` onto it
 */
var inherit = function (parent, extra) { return extend(Object.create(parent), extra); };
/** Given an array, returns true if the object is found in the array, (using indexOf) */
var inArray = Object(_hof__WEBPACK_IMPORTED_MODULE_1__["curry"])(_inArray);
function _inArray(array, obj) {
    return array.indexOf(obj) !== -1;
}
/**
 * Given an array, and an item, if the item is found in the array, it removes it (in-place).
 * The same array is returned
 */
var removeFrom = Object(_hof__WEBPACK_IMPORTED_MODULE_1__["curry"])(_removeFrom);
function _removeFrom(array, obj) {
    var idx = array.indexOf(obj);
    if (idx >= 0)
        array.splice(idx, 1);
    return array;
}
/** pushes a values to an array and returns the value */
var pushTo = Object(_hof__WEBPACK_IMPORTED_MODULE_1__["curry"])(_pushTo);
function _pushTo(arr, val) {
    return arr.push(val), val;
}
/** Given an array of (deregistration) functions, calls all functions and removes each one from the source array */
var deregAll = function (functions) {
    return functions.slice().forEach(function (fn) {
        typeof fn === 'function' && fn();
        removeFrom(functions, fn);
    });
};
/**
 * Applies a set of defaults to an options object.  The options object is filtered
 * to only those properties of the objects in the defaultsList.
 * Earlier objects in the defaultsList take precedence when applying defaults.
 */
function defaults(opts) {
    var defaultsList = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        defaultsList[_i - 1] = arguments[_i];
    }
    var defaultVals = extend.apply(void 0, [{}].concat(defaultsList.reverse()));
    return extend(defaultVals, pick(opts || {}, Object.keys(defaultVals)));
}
/** Reduce function that merges each element of the list into a single object, using extend */
var mergeR = function (memo, item) { return extend(memo, item); };
/**
 * Finds the common ancestor path between two states.
 *
 * @param {Object} first The first state.
 * @param {Object} second The second state.
 * @return {Array} Returns an array of state names in descending order, not including the root.
 */
function ancestors(first, second) {
    var path = [];
    // tslint:disable-next-line:forin
    for (var n in first.path) {
        if (first.path[n] !== second.path[n])
            break;
        path.push(first.path[n]);
    }
    return path;
}
/**
 * Return a copy of the object only containing the whitelisted properties.
 *
 * #### Example:
 * ```
 * var foo = { a: 1, b: 2, c: 3 };
 * var ab = pick(foo, ['a', 'b']); // { a: 1, b: 2 }
 * ```
 * @param obj the source object
 * @param propNames an Array of strings, which are the whitelisted property names
 */
function pick(obj, propNames) {
    var objCopy = {};
    for (var _prop in obj) {
        if (propNames.indexOf(_prop) !== -1) {
            objCopy[_prop] = obj[_prop];
        }
    }
    return objCopy;
}
/**
 * Return a copy of the object omitting the blacklisted properties.
 *
 * @example
 * ```
 *
 * var foo = { a: 1, b: 2, c: 3 };
 * var ab = omit(foo, ['a', 'b']); // { c: 3 }
 * ```
 * @param obj the source object
 * @param propNames an Array of strings, which are the blacklisted property names
 */
function omit(obj, propNames) {
    return Object.keys(obj)
        .filter(Object(_hof__WEBPACK_IMPORTED_MODULE_1__["not"])(inArray(propNames)))
        .reduce(function (acc, key) { return ((acc[key] = obj[key]), acc); }, {});
}
/**
 * Maps an array, or object to a property (by name)
 */
function pluck(collection, propName) {
    return map(collection, Object(_hof__WEBPACK_IMPORTED_MODULE_1__["prop"])(propName));
}
/** Filters an Array or an Object's properties based on a predicate */
function filter(collection, callback) {
    var arr = Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isArray"])(collection), result = arr ? [] : {};
    var accept = arr ? function (x) { return result.push(x); } : function (x, key) { return (result[key] = x); };
    forEach(collection, function (item, i) {
        if (callback(item, i))
            accept(item, i);
    });
    return result;
}
/** Finds an object from an array, or a property of an object, that matches a predicate */
function find(collection, callback) {
    var result;
    forEach(collection, function (item, i) {
        if (result)
            return;
        if (callback(item, i))
            result = item;
    });
    return result;
}
/** Given an object, returns a new object, where each property is transformed by the callback function */
var mapObj = map;
/** Maps an array or object properties using a callback function */
function map(collection, callback, target) {
    target = target || (Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isArray"])(collection) ? [] : {});
    forEach(collection, function (item, i) { return (target[i] = callback(item, i)); });
    return target;
}
/**
 * Given an object, return its enumerable property values
 *
 * @example
 * ```
 *
 * let foo = { a: 1, b: 2, c: 3 }
 * let vals = values(foo); // [ 1, 2, 3 ]
 * ```
 */
var values = function (obj) { return Object.keys(obj).map(function (key) { return obj[key]; }); };
/**
 * Reduce function that returns true if all of the values are truthy.
 *
 * @example
 * ```
 *
 * let vals = [ 1, true, {}, "hello world"];
 * vals.reduce(allTrueR, true); // true
 *
 * vals.push(0);
 * vals.reduce(allTrueR, true); // false
 * ```
 */
var allTrueR = function (memo, elem) { return memo && elem; };
/**
 * Reduce function that returns true if any of the values are truthy.
 *
 *  * @example
 * ```
 *
 * let vals = [ 0, null, undefined ];
 * vals.reduce(anyTrueR, true); // false
 *
 * vals.push("hello world");
 * vals.reduce(anyTrueR, true); // true
 * ```
 */
var anyTrueR = function (memo, elem) { return memo || elem; };
/**
 * Reduce function which un-nests a single level of arrays
 * @example
 * ```
 *
 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
 * input.reduce(unnestR, []) // [ "a", "b", "c", "d", [ "double, "nested" ] ]
 * ```
 */
var unnestR = function (memo, elem) { return memo.concat(elem); };
/**
 * Reduce function which recursively un-nests all arrays
 *
 * @example
 * ```
 *
 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
 * input.reduce(unnestR, []) // [ "a", "b", "c", "d", "double, "nested" ]
 * ```
 */
var flattenR = function (memo, elem) {
    return Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isArray"])(elem) ? memo.concat(elem.reduce(flattenR, [])) : pushR(memo, elem);
};
/**
 * Reduce function that pushes an object to an array, then returns the array.
 * Mostly just for [[flattenR]] and [[uniqR]]
 */
function pushR(arr, obj) {
    arr.push(obj);
    return arr;
}
/** Reduce function that filters out duplicates */
var uniqR = function (acc, token) { return (inArray(acc, token) ? acc : pushR(acc, token)); };
/**
 * Return a new array with a single level of arrays unnested.
 *
 * @example
 * ```
 *
 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
 * unnest(input) // [ "a", "b", "c", "d", [ "double, "nested" ] ]
 * ```
 */
var unnest = function (arr) { return arr.reduce(unnestR, []); };
/**
 * Return a completely flattened version of an array.
 *
 * @example
 * ```
 *
 * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
 * flatten(input) // [ "a", "b", "c", "d", "double, "nested" ]
 * ```
 */
var flatten = function (arr) { return arr.reduce(flattenR, []); };
/**
 * Given a .filter Predicate, builds a .filter Predicate which throws an error if any elements do not pass.
 * @example
 * ```
 *
 * let isNumber = (obj) => typeof(obj) === 'number';
 * let allNumbers = [ 1, 2, 3, 4, 5 ];
 * allNumbers.filter(assertPredicate(isNumber)); //OK
 *
 * let oneString = [ 1, 2, 3, 4, "5" ];
 * oneString.filter(assertPredicate(isNumber, "Not all numbers")); // throws Error(""Not all numbers"");
 * ```
 */
var assertPredicate = assertFn;
/**
 * Given a .map function, builds a .map function which throws an error if any mapped elements do not pass a truthyness test.
 * @example
 * ```
 *
 * var data = { foo: 1, bar: 2 };
 *
 * let keys = [ 'foo', 'bar' ]
 * let values = keys.map(assertMap(key => data[key], "Key not found"));
 * // values is [1, 2]
 *
 * let keys = [ 'foo', 'bar', 'baz' ]
 * let values = keys.map(assertMap(key => data[key], "Key not found"));
 * // throws Error("Key not found")
 * ```
 */
var assertMap = assertFn;
function assertFn(predicateOrMap, errMsg) {
    if (errMsg === void 0) { errMsg = 'assert failure'; }
    return function (obj) {
        var result = predicateOrMap(obj);
        if (!result) {
            throw new Error(Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(errMsg) ? errMsg(obj) : errMsg);
        }
        return result;
    };
}
/**
 * Like _.pairs: Given an object, returns an array of key/value pairs
 *
 * @example
 * ```
 *
 * pairs({ foo: "FOO", bar: "BAR }) // [ [ "foo", "FOO" ], [ "bar": "BAR" ] ]
 * ```
 */
var pairs = function (obj) { return Object.keys(obj).map(function (key) { return [key, obj[key]]; }); };
/**
 * Given two or more parallel arrays, returns an array of tuples where
 * each tuple is composed of [ a[i], b[i], ... z[i] ]
 *
 * @example
 * ```
 *
 * let foo = [ 0, 2, 4, 6 ];
 * let bar = [ 1, 3, 5, 7 ];
 * let baz = [ 10, 30, 50, 70 ];
 * arrayTuples(foo, bar);       // [ [0, 1], [2, 3], [4, 5], [6, 7] ]
 * arrayTuples(foo, bar, baz);  // [ [0, 1, 10], [2, 3, 30], [4, 5, 50], [6, 7, 70] ]
 * ```
 */
function arrayTuples() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 0)
        return [];
    var maxArrayLen = args.reduce(function (min, arr) { return Math.min(arr.length, min); }, 9007199254740991); // aka 2^53 − 1 aka Number.MAX_SAFE_INTEGER
    var result = [];
    var _loop_1 = function (i) {
        // This is a hot function
        // Unroll when there are 1-4 arguments
        switch (args.length) {
            case 1:
                result.push([args[0][i]]);
                break;
            case 2:
                result.push([args[0][i], args[1][i]]);
                break;
            case 3:
                result.push([args[0][i], args[1][i], args[2][i]]);
                break;
            case 4:
                result.push([args[0][i], args[1][i], args[2][i], args[3][i]]);
                break;
            default:
                result.push(args.map(function (array) { return array[i]; }));
                break;
        }
    };
    for (var i = 0; i < maxArrayLen; i++) {
        _loop_1(i);
    }
    return result;
}
/**
 * Reduce function which builds an object from an array of [key, value] pairs.
 *
 * Each iteration sets the key/val pair on the memo object, then returns the memo for the next iteration.
 *
 * Each keyValueTuple should be an array with values [ key: string, value: any ]
 *
 * @example
 * ```
 *
 * var pairs = [ ["fookey", "fooval"], ["barkey", "barval"] ]
 *
 * var pairsToObj = pairs.reduce((memo, pair) => applyPairs(memo, pair), {})
 * // pairsToObj == { fookey: "fooval", barkey: "barval" }
 *
 * // Or, more simply:
 * var pairsToObj = pairs.reduce(applyPairs, {})
 * // pairsToObj == { fookey: "fooval", barkey: "barval" }
 * ```
 */
function applyPairs(memo, keyValTuple) {
    var key, value;
    if (Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isArray"])(keyValTuple))
        key = keyValTuple[0], value = keyValTuple[1];
    if (!Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isString"])(key))
        throw new Error('invalid parameters to applyPairs');
    memo[key] = value;
    return memo;
}
/** Get the last element of an array */
function tail(arr) {
    return (arr.length && arr[arr.length - 1]) || undefined;
}
/**
 * shallow copy from src to dest
 */
function copy(src, dest) {
    if (dest)
        Object.keys(dest).forEach(function (key) { return delete dest[key]; });
    if (!dest)
        dest = {};
    return extend(dest, src);
}
/** Naive forEach implementation works with Objects or Arrays */
function _forEach(obj, cb, _this) {
    if (Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isArray"])(obj))
        return obj.forEach(cb, _this);
    Object.keys(obj).forEach(function (key) { return cb(obj[key], key); });
}
function _extend(toObj) {
    for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];
        if (!obj)
            continue;
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; j++) {
            toObj[keys[j]] = obj[keys[j]];
        }
    }
    return toObj;
}
function _equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    var t1 = typeof o1, t2 = typeof o2;
    if (t1 !== t2 || t1 !== 'object')
        return false;
    var tup = [o1, o2];
    if (Object(_hof__WEBPACK_IMPORTED_MODULE_1__["all"])(_predicates__WEBPACK_IMPORTED_MODULE_0__["isArray"])(tup))
        return _arraysEq(o1, o2);
    if (Object(_hof__WEBPACK_IMPORTED_MODULE_1__["all"])(_predicates__WEBPACK_IMPORTED_MODULE_0__["isDate"])(tup))
        return o1.getTime() === o2.getTime();
    if (Object(_hof__WEBPACK_IMPORTED_MODULE_1__["all"])(_predicates__WEBPACK_IMPORTED_MODULE_0__["isRegExp"])(tup))
        return o1.toString() === o2.toString();
    if (Object(_hof__WEBPACK_IMPORTED_MODULE_1__["all"])(_predicates__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(tup))
        return true; // meh
    var predicates = [_predicates__WEBPACK_IMPORTED_MODULE_0__["isFunction"], _predicates__WEBPACK_IMPORTED_MODULE_0__["isArray"], _predicates__WEBPACK_IMPORTED_MODULE_0__["isDate"], _predicates__WEBPACK_IMPORTED_MODULE_0__["isRegExp"]];
    if (predicates.map(_hof__WEBPACK_IMPORTED_MODULE_1__["any"]).reduce(function (b, fn) { return b || !!fn(tup); }, false))
        return false;
    var keys = {};
    // tslint:disable-next-line:forin
    for (var key in o1) {
        if (!_equals(o1[key], o2[key]))
            return false;
        keys[key] = true;
    }
    for (var key in o2) {
        if (!keys[key])
            return false;
    }
    return true;
}
function _arraysEq(a1, a2) {
    if (a1.length !== a2.length)
        return false;
    return arrayTuples(a1, a2).reduce(function (b, t) { return b && _equals(t[0], t[1]); }, true);
}
// issue #2676
var silenceUncaughtInPromise = function (promise) { return promise.catch(function (e) { return 0; }) && promise; };
var silentRejection = function (error) { return silenceUncaughtInPromise(_coreservices__WEBPACK_IMPORTED_MODULE_2__["services"].$q.reject(error)); };
//# sourceMappingURL=common.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../jinge-demos/06-ui-router/node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js":
/*!********************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js ***!
  \********************************************************************************************************/
/*! exports provided: makeStub, services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStub", function() { return makeStub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
var noImpl = function (fnname) { return function () {
    throw new Error("No implementation for " + fnname + ". The framework specific code did not implement this method.");
}; };
var makeStub = function (service, methods) {
    return methods.reduce(function (acc, key) { return ((acc[key] = noImpl(service + "." + key + "()")), acc); }, {});
};
var services = {
    $q: undefined,
    $injector: undefined,
};

//# sourceMappingURL=coreservices.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/glob.js":
/*!************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/glob.js ***!
  \************************************************************************************************/
/*! exports provided: Glob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Glob", function() { return Glob; });
/** @publicapi @module core */
/**
 * Matches state names using glob-like pattern strings.
 *
 * Globs can be used in specific APIs including:
 *
 * - [[StateService.is]]
 * - [[StateService.includes]]
 * - The first argument to Hook Registration functions like [[TransitionService.onStart]]
 *    - [[HookMatchCriteria]] and [[HookMatchCriterion]]
 *
 * A `Glob` string is a pattern which matches state names.
 * Nested state names are split into segments (separated by a dot) when processing.
 * The state named `foo.bar.baz` is split into three segments ['foo', 'bar', 'baz']
 *
 * Globs work according to the following rules:
 *
 * ### Exact match:
 *
 * The glob `'A.B'` matches the state named exactly `'A.B'`.
 *
 * | Glob        |Matches states named|Does not match state named|
 * |:------------|:--------------------|:---------------------|
 * | `'A'`       | `'A'`               | `'B'` , `'A.C'`      |
 * | `'A.B'`     | `'A.B'`             | `'A'` , `'A.B.C'`    |
 * | `'foo'`     | `'foo'`             | `'FOO'` , `'foo.bar'`|
 *
 * ### Single star (`*`)
 *
 * A single star (`*`) is a wildcard that matches exactly one segment.
 *
 * | Glob        |Matches states named  |Does not match state named |
 * |:------------|:---------------------|:--------------------------|
 * | `'*'`       | `'A'` , `'Z'`        | `'A.B'` , `'Z.Y.X'`       |
 * | `'A.*'`     | `'A.B'` , `'A.C'`    | `'A'` , `'A.B.C'`         |
 * | `'A.*.*'`   | `'A.B.C'` , `'A.X.Y'`| `'A'`, `'A.B'` , `'Z.Y.X'`|
 *
 * ### Double star (`**`)
 *
 * A double star (`'**'`) is a wildcard that matches *zero or more segments*
 *
 * | Glob        |Matches states named                           |Does not match state named         |
 * |:------------|:----------------------------------------------|:----------------------------------|
 * | `'**'`      | `'A'` , `'A.B'`, `'Z.Y.X'`                    | (matches all states)              |
 * | `'A.**'`    | `'A'` , `'A.B'` , `'A.C.X'`                   | `'Z.Y.X'`                         |
 * | `'**.X'`    | `'X'` , `'A.X'` , `'Z.Y.X'`                   | `'A'` , `'A.login.Z'`             |
 * | `'A.**.X'`  | `'A.X'` , `'A.B.X'` , `'A.B.C.X'`             | `'A'` , `'A.B.C'`                 |
 *
 */
var Glob = /** @class */ (function () {
    function Glob(text) {
        this.text = text;
        this.glob = text.split('.');
        var regexpString = this.text
            .split('.')
            .map(function (seg) {
            if (seg === '**')
                return '(?:|(?:\\.[^.]*)*)';
            if (seg === '*')
                return '\\.[^.]*';
            return '\\.' + seg;
        })
            .join('');
        this.regexp = new RegExp('^' + regexpString + '$');
    }
    /** Returns true if the string has glob-like characters in it */
    Glob.is = function (text) {
        return !!/[!,*]+/.exec(text);
    };
    /** Returns a glob from the string, or null if the string isn't Glob-like */
    Glob.fromString = function (text) {
        return Glob.is(text) ? new Glob(text) : null;
    };
    Glob.prototype.matches = function (name) {
        return this.regexp.test('.' + name);
    };
    return Glob;
}());

//# sourceMappingURL=glob.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js":
/*!***********************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js ***!
  \***********************************************************************************************/
/*! exports provided: curry, compose, pipe, prop, propEq, parse, not, and, or, all, any, is, eq, val, invoke, pattern */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return curry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propEq", function() { return propEq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "and", function() { return and; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "or", function() { return or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return any; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "val", function() { return val; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return invoke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pattern", function() { return pattern; });
/**
 * Higher order functions
 *
 * These utility functions are exported, but are subject to change without notice.
 *
 * @module common_hof
 */ /** */
/**
 * Returns a new function for [Partial Application](https://en.wikipedia.org/wiki/Partial_application) of the original function.
 *
 * Given a function with N parameters, returns a new function that supports partial application.
 * The new function accepts anywhere from 1 to N parameters.  When that function is called with M parameters,
 * where M is less than N, it returns a new function that accepts the remaining parameters.  It continues to
 * accept more parameters until all N parameters have been supplied.
 *
 *
 * This contrived example uses a partially applied function as an predicate, which returns true
 * if an object is found in both arrays.
 * @example
 * ```
 * // returns true if an object is in both of the two arrays
 * function inBoth(array1, array2, object) {
 *   return array1.indexOf(object) !== -1 &&
 *          array2.indexOf(object) !== 1;
 * }
 * let obj1, obj2, obj3, obj4, obj5, obj6, obj7
 * let foos = [obj1, obj3]
 * let bars = [obj3, obj4, obj5]
 *
 * // A curried "copy" of inBoth
 * let curriedInBoth = curry(inBoth);
 * // Partially apply both the array1 and array2
 * let inFoosAndBars = curriedInBoth(foos, bars);
 *
 * // Supply the final argument; since all arguments are
 * // supplied, the original inBoth function is then called.
 * let obj1InBoth = inFoosAndBars(obj1); // false
 *
 * // Use the inFoosAndBars as a predicate.
 * // Filter, on each iteration, supplies the final argument
 * let allObjs = [ obj1, obj2, obj3, obj4, obj5, obj6, obj7 ];
 * let foundInBoth = allObjs.filter(inFoosAndBars); // [ obj3 ]
 *
 * ```
 *
 * Stolen from: http://stackoverflow.com/questions/4394747/javascript-curry-function
 *
 * @param fn
 * @returns {*|function(): (*|any)}
 */
function curry(fn) {
    var initial_args = [].slice.apply(arguments, [1]);
    var func_args_length = fn.length;
    function curried(args) {
        if (args.length >= func_args_length)
            return fn.apply(null, args);
        return function () {
            return curried(args.concat([].slice.apply(arguments)));
        };
    }
    return curried(initial_args);
}
/**
 * Given a varargs list of functions, returns a function that composes the argument functions, right-to-left
 * given: f(x), g(x), h(x)
 * let composed = compose(f,g,h)
 * then, composed is: f(g(h(x)))
 */
function compose() {
    var args = arguments;
    var start = args.length - 1;
    return function () {
        var i = start, result = args[start].apply(this, arguments);
        while (i--)
            result = args[i].call(this, result);
        return result;
    };
}
/**
 * Given a varargs list of functions, returns a function that is composes the argument functions, left-to-right
 * given: f(x), g(x), h(x)
 * let piped = pipe(f,g,h);
 * then, piped is: h(g(f(x)))
 */
function pipe() {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return compose.apply(null, [].slice.call(arguments).reverse());
}
/**
 * Given a property name, returns a function that returns that property from an object
 * let obj = { foo: 1, name: "blarg" };
 * let getName = prop("name");
 * getName(obj) === "blarg"
 */
var prop = function (name) { return function (obj) { return obj && obj[name]; }; };
/**
 * Given a property name and a value, returns a function that returns a boolean based on whether
 * the passed object has a property that matches the value
 * let obj = { foo: 1, name: "blarg" };
 * let getName = propEq("name", "blarg");
 * getName(obj) === true
 */
var propEq = curry(function (name, _val, obj) { return obj && obj[name] === _val; });
/**
 * Given a dotted property name, returns a function that returns a nested property from an object, or undefined
 * let obj = { id: 1, nestedObj: { foo: 1, name: "blarg" }, };
 * let getName = prop("nestedObj.name");
 * getName(obj) === "blarg"
 * let propNotFound = prop("this.property.doesnt.exist");
 * propNotFound(obj) === undefined
 */
var parse = function (name) { return pipe.apply(null, name.split('.').map(prop)); };
/**
 * Given a function that returns a truthy or falsey value, returns a
 * function that returns the opposite (falsey or truthy) value given the same inputs
 */
var not = function (fn) { return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return !fn.apply(null, args);
}; };
/**
 * Given two functions that return truthy or falsey values, returns a function that returns truthy
 * if both functions return truthy for the given arguments
 */
function and(fn1, fn2) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return fn1.apply(null, args) && fn2.apply(null, args);
    };
}
/**
 * Given two functions that return truthy or falsey values, returns a function that returns truthy
 * if at least one of the functions returns truthy for the given arguments
 */
function or(fn1, fn2) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return fn1.apply(null, args) || fn2.apply(null, args);
    };
}
/**
 * Check if all the elements of an array match a predicate function
 *
 * @param fn1 a predicate function `fn1`
 * @returns a function which takes an array and returns true if `fn1` is true for all elements of the array
 */
var all = function (fn1) { return function (arr) { return arr.reduce(function (b, x) { return b && !!fn1(x); }, true); }; };
// tslint:disable-next-line:variable-name
var any = function (fn1) { return function (arr) { return arr.reduce(function (b, x) { return b || !!fn1(x); }, false); }; };
/** Given a class, returns a Predicate function that returns true if the object is of that class */
var is = function (ctor) { return function (obj) {
    return (obj != null && obj.constructor === ctor) || obj instanceof ctor;
}; };
/** Given a value, returns a Predicate function that returns true if another value is === equal to the original value */
var eq = function (value) { return function (other) { return value === other; }; };
/** Given a value, returns a function which returns the value */
var val = function (v) { return function () { return v; }; };
function invoke(fnName, args) {
    return function (obj) { return obj[fnName].apply(obj, args); };
}
/**
 * Sorta like Pattern Matching (a functional programming conditional construct)
 *
 * See http://c2.com/cgi/wiki?PatternMatching
 *
 * This is a conditional construct which allows a series of predicates and output functions
 * to be checked and then applied.  Each predicate receives the input.  If the predicate
 * returns truthy, then its matching output function (mapping function) is provided with
 * the input and, then the result is returned.
 *
 * Each combination (2-tuple) of predicate + output function should be placed in an array
 * of size 2: [ predicate, mapFn ]
 *
 * These 2-tuples should be put in an outer array.
 *
 * @example
 * ```
 *
 * // Here's a 2-tuple where the first element is the isString predicate
 * // and the second element is a function that returns a description of the input
 * let firstTuple = [ angular.isString, (input) => `Heres your string ${input}` ];
 *
 * // Second tuple: predicate "isNumber", mapfn returns a description
 * let secondTuple = [ angular.isNumber, (input) => `(${input}) That's a number!` ];
 *
 * let third = [ (input) => input === null,  (input) => `Oh, null...` ];
 *
 * let fourth = [ (input) => input === undefined,  (input) => `notdefined` ];
 *
 * let descriptionOf = pattern([ firstTuple, secondTuple, third, fourth ]);
 *
 * console.log(descriptionOf(undefined)); // 'notdefined'
 * console.log(descriptionOf(55)); // '(55) That's a number!'
 * console.log(descriptionOf("foo")); // 'Here's your string foo'
 * ```
 *
 * @param struct A 2D array.  Each element of the array should be an array, a 2-tuple,
 * with a Predicate and a mapping/output function
 * @returns {function(any): *}
 */
function pattern(struct) {
    return function (x) {
        for (var i = 0; i < struct.length; i++) {
            if (struct[i][0](x))
                return struct[i][1](x);
        }
    };
}
//# sourceMappingURL=hof.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js":
/*!*************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js ***!
  \*************************************************************************************************/
/*! exports provided: root, fromJson, toJson, forEach, extend, equals, identity, noop, createProxyFunctions, inherit, inArray, _inArray, removeFrom, _removeFrom, pushTo, _pushTo, deregAll, defaults, mergeR, ancestors, pick, omit, pluck, filter, find, mapObj, map, values, allTrueR, anyTrueR, unnestR, flattenR, pushR, uniqR, unnest, flatten, assertPredicate, assertMap, assertFn, pairs, arrayTuples, applyPairs, tail, copy, _extend, silenceUncaughtInPromise, silentRejection, makeStub, services, Glob, curry, compose, pipe, prop, propEq, parse, not, and, or, all, any, is, eq, val, invoke, pattern, isUndefined, isDefined, isNull, isNullOrUndefined, isFunction, isNumber, isString, isObject, isArray, isDate, isRegExp, isInjectable, isPromise, Queue, maxLength, padString, kebobString, functionToString, fnToString, stringify, beforeAfterSubstr, hostRegex, stripLastPathElement, splitHash, splitQuery, splitEqual, trimHashVal, splitOnDelim, joinNeighborsR, Category, Trace, trace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "root", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["root"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromJson", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["fromJson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toJson", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["toJson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["equals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["identity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createProxyFunctions", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["createProxyFunctions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["inherit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inArray", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["inArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_inArray", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["_inArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeFrom", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["removeFrom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_removeFrom", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["_removeFrom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushTo", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["pushTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_pushTo", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["_pushTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deregAll", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["deregAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["defaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeR", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["mergeR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ancestors", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["ancestors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["pick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["omit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["pluck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["find"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapObj", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["mapObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["values"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allTrueR", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["allTrueR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anyTrueR", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["anyTrueR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unnestR", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["unnestR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flattenR", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["flattenR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushR", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["pushR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqR", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["uniqR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unnest", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["unnest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["flatten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertPredicate", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["assertPredicate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertMap", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["assertMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertFn", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["assertFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["pairs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayTuples", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["arrayTuples"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyPairs", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["applyPairs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["tail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["copy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_extend", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["_extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "silenceUncaughtInPromise", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["silenceUncaughtInPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "silentRejection", function() { return _common__WEBPACK_IMPORTED_MODULE_0__["silentRejection"]; });

/* harmony import */ var _coreservices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeStub", function() { return _coreservices__WEBPACK_IMPORTED_MODULE_1__["makeStub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "services", function() { return _coreservices__WEBPACK_IMPORTED_MODULE_1__["services"]; });

/* harmony import */ var _glob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glob */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/glob.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Glob", function() { return _glob__WEBPACK_IMPORTED_MODULE_2__["Glob"]; });

/* harmony import */ var _hof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["curry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["pipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["prop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propEq", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["propEq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "not", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["not"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "and", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["and"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "or", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["or"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["all"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["any"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "is", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["is"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["eq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "val", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["val"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["invoke"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pattern", function() { return _hof__WEBPACK_IMPORTED_MODULE_3__["pattern"]; });

/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInjectable", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isInjectable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return _predicates__WEBPACK_IMPORTED_MODULE_4__["isPromise"]; });

/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queue */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/queue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Queue", function() { return _queue__WEBPACK_IMPORTED_MODULE_5__["Queue"]; });

/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./strings */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxLength", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["maxLength"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "padString", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["padString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kebobString", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["kebobString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "functionToString", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["functionToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fnToString", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["fnToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["stringify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeAfterSubstr", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["beforeAfterSubstr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hostRegex", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["hostRegex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripLastPathElement", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["stripLastPathElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitHash", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["splitHash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitQuery", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["splitQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitEqual", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["splitEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trimHashVal", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["trimHashVal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitOnDelim", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["splitOnDelim"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "joinNeighborsR", function() { return _strings__WEBPACK_IMPORTED_MODULE_6__["joinNeighborsR"]; });

/* harmony import */ var _trace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trace */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/trace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _trace__WEBPACK_IMPORTED_MODULE_7__["Category"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trace", function() { return _trace__WEBPACK_IMPORTED_MODULE_7__["Trace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return _trace__WEBPACK_IMPORTED_MODULE_7__["trace"]; });

/** @publicapi @module common */ /** */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js":
/*!******************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js ***!
  \******************************************************************************************************/
/*! exports provided: isUndefined, isDefined, isNull, isNullOrUndefined, isFunction, isNumber, isString, isObject, isArray, isDate, isRegExp, isInjectable, isPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInjectable", function() { return isInjectable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony import */ var _hof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/** Predicates
 *
 * These predicates return true/false based on the input.
 * Although these functions are exported, they are subject to change without notice.
 *
 * @module common_predicates
 */ /** */

var toStr = Object.prototype.toString;
var tis = function (t) { return function (x) { return typeof x === t; }; };
var isUndefined = tis('undefined');
var isDefined = Object(_hof__WEBPACK_IMPORTED_MODULE_0__["not"])(isUndefined);
var isNull = function (o) { return o === null; };
var isNullOrUndefined = Object(_hof__WEBPACK_IMPORTED_MODULE_0__["or"])(isNull, isUndefined);
var isFunction = tis('function');
var isNumber = tis('number');
var isString = tis('string');
var isObject = function (x) { return x !== null && typeof x === 'object'; };
var isArray = Array.isArray;
var isDate = (function (x) { return toStr.call(x) === '[object Date]'; });
var isRegExp = (function (x) { return toStr.call(x) === '[object RegExp]'; });
/**
 * Predicate which checks if a value is injectable
 *
 * A value is "injectable" if it is a function, or if it is an ng1 array-notation-style array
 * where all the elements in the array are Strings, except the last one, which is a Function
 */
function isInjectable(val) {
    if (isArray(val) && val.length) {
        var head = val.slice(0, -1), tail = val.slice(-1);
        return !(head.filter(Object(_hof__WEBPACK_IMPORTED_MODULE_0__["not"])(isString)).length || tail.filter(Object(_hof__WEBPACK_IMPORTED_MODULE_0__["not"])(isFunction)).length);
    }
    return isFunction(val);
}
/**
 * Predicate which checks if a value looks like a Promise
 *
 * It is probably a Promise if it's an object, and it has a `then` property which is a Function
 */
var isPromise = Object(_hof__WEBPACK_IMPORTED_MODULE_0__["and"])(isObject, Object(_hof__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(_hof__WEBPACK_IMPORTED_MODULE_0__["prop"])('then'), isFunction));
//# sourceMappingURL=predicates.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/queue.js":
/*!*************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/queue.js ***!
  \*************************************************************************************************/
/*! exports provided: Queue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Queue", function() { return Queue; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/** @publicapi @module common */ /** */

var Queue = /** @class */ (function () {
    function Queue(_items, _limit) {
        if (_items === void 0) { _items = []; }
        if (_limit === void 0) { _limit = null; }
        this._items = _items;
        this._limit = _limit;
        this._evictListeners = [];
        this.onEvict = Object(_common__WEBPACK_IMPORTED_MODULE_0__["pushTo"])(this._evictListeners);
    }
    Queue.prototype.enqueue = function (item) {
        var items = this._items;
        items.push(item);
        if (this._limit && items.length > this._limit)
            this.evict();
        return item;
    };
    Queue.prototype.evict = function () {
        var item = this._items.shift();
        this._evictListeners.forEach(function (fn) { return fn(item); });
        return item;
    };
    Queue.prototype.dequeue = function () {
        if (this.size())
            return this._items.splice(0, 1)[0];
    };
    Queue.prototype.clear = function () {
        var current = this._items;
        this._items = [];
        return current;
    };
    Queue.prototype.size = function () {
        return this._items.length;
    };
    Queue.prototype.remove = function (item) {
        var idx = this._items.indexOf(item);
        return idx > -1 && this._items.splice(idx, 1)[0];
    };
    Queue.prototype.peekTail = function () {
        return this._items[this._items.length - 1];
    };
    Queue.prototype.peekHead = function () {
        if (this.size())
            return this._items[0];
    };
    return Queue;
}());

//# sourceMappingURL=queue.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js":
/*!***************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js ***!
  \***************************************************************************************************/
/*! exports provided: maxLength, padString, kebobString, functionToString, fnToString, stringify, beforeAfterSubstr, hostRegex, stripLastPathElement, splitHash, splitQuery, splitEqual, trimHashVal, splitOnDelim, joinNeighborsR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLength", function() { return maxLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padString", function() { return padString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kebobString", function() { return kebobString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "functionToString", function() { return functionToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fnToString", function() { return fnToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beforeAfterSubstr", function() { return beforeAfterSubstr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hostRegex", function() { return hostRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripLastPathElement", function() { return stripLastPathElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitHash", function() { return splitHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitQuery", function() { return splitQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitEqual", function() { return splitEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimHashVal", function() { return trimHashVal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitOnDelim", function() { return splitOnDelim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinNeighborsR", function() { return joinNeighborsR; });
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transition/rejectFactory */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _hof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/**
 * Functions that manipulate strings
 *
 * Although these functions are exported, they are subject to change without notice.
 *
 * @module common_strings
 */ /** */




/**
 * Returns a string shortened to a maximum length
 *
 * If the string is already less than the `max` length, return the string.
 * Else return the string, shortened to `max - 3` and append three dots ("...").
 *
 * @param max the maximum length of the string to return
 * @param str the input string
 */
function maxLength(max, str) {
    if (str.length <= max)
        return str;
    return str.substr(0, max - 3) + '...';
}
/**
 * Returns a string, with spaces added to the end, up to a desired str length
 *
 * If the string is already longer than the desired length, return the string.
 * Else returns the string, with extra spaces on the end, such that it reaches `length` characters.
 *
 * @param length the desired length of the string to return
 * @param str the input string
 */
function padString(length, str) {
    while (str.length < length)
        str += ' ';
    return str;
}
function kebobString(camelCase) {
    return camelCase
        .replace(/^([A-Z])/, function ($1) { return $1.toLowerCase(); }) // replace first char
        .replace(/([A-Z])/g, function ($1) { return '-' + $1.toLowerCase(); }); // replace rest
}
function functionToString(fn) {
    var fnStr = fnToString(fn);
    var namedFunctionMatch = fnStr.match(/^(function [^ ]+\([^)]*\))/);
    var toStr = namedFunctionMatch ? namedFunctionMatch[1] : fnStr;
    var fnName = fn['name'] || '';
    if (fnName && toStr.match(/function \(/)) {
        return 'function ' + fnName + toStr.substr(9);
    }
    return toStr;
}
function fnToString(fn) {
    var _fn = Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isArray"])(fn) ? fn.slice(-1)[0] : fn;
    return (_fn && _fn.toString()) || 'undefined';
}
var isRejection = _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_1__["Rejection"].isRejectionPromise;
var hasToString = function (obj) {
    return Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isObject"])(obj) && !Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isArray"])(obj) && obj.constructor !== Object && Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(obj.toString);
};
var stringifyPattern = Object(_hof__WEBPACK_IMPORTED_MODULE_3__["pattern"])([
    [_predicates__WEBPACK_IMPORTED_MODULE_0__["isUndefined"], Object(_hof__WEBPACK_IMPORTED_MODULE_3__["val"])('undefined')],
    [_predicates__WEBPACK_IMPORTED_MODULE_0__["isNull"], Object(_hof__WEBPACK_IMPORTED_MODULE_3__["val"])('null')],
    [_predicates__WEBPACK_IMPORTED_MODULE_0__["isPromise"], Object(_hof__WEBPACK_IMPORTED_MODULE_3__["val"])('[Promise]')],
    [isRejection, function (x) { return x._transitionRejection.toString(); }],
    [hasToString, function (x) { return x.toString(); }],
    [_predicates__WEBPACK_IMPORTED_MODULE_0__["isInjectable"], functionToString],
    [Object(_hof__WEBPACK_IMPORTED_MODULE_3__["val"])(true), _common__WEBPACK_IMPORTED_MODULE_2__["identity"]],
]);
function stringify(o) {
    var seen = [];
    function format(value) {
        if (Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value)) {
            if (seen.indexOf(value) !== -1)
                return '[circular ref]';
            seen.push(value);
        }
        return stringifyPattern(value);
    }
    if (Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(o)) {
        // Workaround for IE & Edge Spec incompatibility where replacer function would not be called when JSON.stringify
        // is given `undefined` as value. To work around that, we simply detect `undefined` and bail out early by
        // manually stringifying it.
        return format(o);
    }
    return JSON.stringify(o, function (key, value) { return format(value); }).replace(/\\"/g, '"');
}
/** Returns a function that splits a string on a character or substring */
var beforeAfterSubstr = function (char) { return function (str) {
    if (!str)
        return ['', ''];
    var idx = str.indexOf(char);
    if (idx === -1)
        return [str, ''];
    return [str.substr(0, idx), str.substr(idx + 1)];
}; };
var hostRegex = new RegExp('^(?:[a-z]+:)?//[^/]+/');
var stripLastPathElement = function (str) { return str.replace(/\/[^/]*$/, ''); };
var splitHash = beforeAfterSubstr('#');
var splitQuery = beforeAfterSubstr('?');
var splitEqual = beforeAfterSubstr('=');
var trimHashVal = function (str) { return (str ? str.replace(/^#/, '') : ''); };
/**
 * Splits on a delimiter, but returns the delimiters in the array
 *
 * #### Example:
 * ```js
 * var splitOnSlashes = splitOnDelim('/');
 * splitOnSlashes("/foo"); // ["/", "foo"]
 * splitOnSlashes("/foo/"); // ["/", "foo", "/"]
 * ```
 */
function splitOnDelim(delim) {
    var re = new RegExp('(' + delim + ')', 'g');
    return function (str) { return str.split(re).filter(_common__WEBPACK_IMPORTED_MODULE_2__["identity"]); };
}
/**
 * Reduce fn that joins neighboring strings
 *
 * Given an array of strings, returns a new array
 * where all neighboring strings have been joined.
 *
 * #### Example:
 * ```js
 * let arr = ["foo", "bar", 1, "baz", "", "qux" ];
 * arr.reduce(joinNeighborsR, []) // ["foobar", 1, "bazqux" ]
 * ```
 */
function joinNeighborsR(acc, x) {
    if (Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isString"])(Object(_common__WEBPACK_IMPORTED_MODULE_2__["tail"])(acc)) && Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isString"])(x))
        return acc.slice(0, -1).concat(Object(_common__WEBPACK_IMPORTED_MODULE_2__["tail"])(acc) + x);
    return Object(_common__WEBPACK_IMPORTED_MODULE_2__["pushR"])(acc, x);
}
//# sourceMappingURL=strings.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/trace.js":
/*!*************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/trace.js ***!
  \*************************************************************************************************/
/*! exports provided: Category, Trace, trace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trace", function() { return Trace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return trace; });
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./strings */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js");
/**
 * # Transition tracing (debug)
 *
 * Enable transition tracing to print transition information to the console,
 * in order to help debug your application.
 * Tracing logs detailed information about each Transition to your console.
 *
 * To enable tracing, import the [[Trace]] singleton and enable one or more categories.
 *
 * ### ES6
 * ```js
 * import {trace} from "@uirouter/core";
 * trace.enable(1, 5); // TRANSITION and VIEWCONFIG
 * ```
 *
 * ### CJS
 * ```js
 * let trace = require("@uirouter/core").trace;
 * trace.enable("TRANSITION", "VIEWCONFIG");
 * ```
 *
 * ### Globals
 * ```js
 * let trace = window["@uirouter/core"].trace;
 * trace.enable(); // Trace everything (very verbose)
 * ```
 *
 * ### Angular 1:
 * ```js
 * app.run($trace => $trace.enable());
 * ```
 *
 * @publicapi @module trace
 */
/* tslint:disable:no-console */



/** @hidden */
function uiViewString(uiview) {
    if (!uiview)
        return 'ui-view (defunct)';
    var state = uiview.creationContext ? uiview.creationContext.name || '(root)' : '(none)';
    return "[ui-view#" + uiview.id + " " + uiview.$type + ":" + uiview.fqn + " (" + uiview.name + "@" + state + ")]";
}
/** @hidden */
var viewConfigString = function (viewConfig) {
    var view = viewConfig.viewDecl;
    var state = view.$context.name || '(root)';
    return "[View#" + viewConfig.$id + " from '" + state + "' state]: target ui-view: '" + view.$uiViewName + "@" + view.$uiViewContextAnchor + "'";
};
/** @hidden */
function normalizedCat(input) {
    return Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(input) ? Category[input] : Category[Category[input]];
}
/** @hidden */
var consoleLog = Function.prototype.bind.call(console.log, console);
/** @hidden */
var consoletable = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(console.table) ? console.table.bind(console) : consoleLog.bind(console);
/**
 * Trace categories Enum
 *
 * Enable or disable a category using [[Trace.enable]] or [[Trace.disable]]
 *
 * `trace.enable(Category.TRANSITION)`
 *
 * These can also be provided using a matching string, or position ordinal
 *
 * `trace.enable("TRANSITION")`
 *
 * `trace.enable(1)`
 */
var Category;
(function (Category) {
    Category[Category["RESOLVE"] = 0] = "RESOLVE";
    Category[Category["TRANSITION"] = 1] = "TRANSITION";
    Category[Category["HOOK"] = 2] = "HOOK";
    Category[Category["UIVIEW"] = 3] = "UIVIEW";
    Category[Category["VIEWCONFIG"] = 4] = "VIEWCONFIG";
})(Category || (Category = {}));

/** @hidden */
var _tid = Object(_common_hof__WEBPACK_IMPORTED_MODULE_0__["parse"])('$id');
/** @hidden */
var _rid = Object(_common_hof__WEBPACK_IMPORTED_MODULE_0__["parse"])('router.$id');
/** @hidden */
var transLbl = function (trans) { return "Transition #" + _tid(trans) + "-" + _rid(trans); };
/**
 * Prints UI-Router Transition trace information to the console.
 */
var Trace = /** @class */ (function () {
    /** @hidden */
    function Trace() {
        /** @hidden */
        this._enabled = {};
        this.approximateDigests = 0;
    }
    /** @hidden */
    Trace.prototype._set = function (enabled, categories) {
        var _this = this;
        if (!categories.length) {
            categories = Object.keys(Category)
                .map(function (k) { return parseInt(k, 10); })
                .filter(function (k) { return !isNaN(k); })
                .map(function (key) { return Category[key]; });
        }
        categories.map(normalizedCat).forEach(function (category) { return (_this._enabled[category] = enabled); });
    };
    Trace.prototype.enable = function () {
        var categories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            categories[_i] = arguments[_i];
        }
        this._set(true, categories);
    };
    Trace.prototype.disable = function () {
        var categories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            categories[_i] = arguments[_i];
        }
        this._set(false, categories);
    };
    /**
     * Retrieves the enabled stateus of a [[Category]]
     *
     * ```js
     * trace.enabled("VIEWCONFIG"); // true or false
     * ```
     *
     * @returns boolean true if the category is enabled
     */
    Trace.prototype.enabled = function (category) {
        return !!this._enabled[normalizedCat(category)];
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceTransitionStart = function (trans) {
        if (!this.enabled(Category.TRANSITION))
            return;
        console.log(transLbl(trans) + ": Started  -> " + Object(_strings__WEBPACK_IMPORTED_MODULE_2__["stringify"])(trans));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceTransitionIgnored = function (trans) {
        if (!this.enabled(Category.TRANSITION))
            return;
        console.log(transLbl(trans) + ": Ignored  <> " + Object(_strings__WEBPACK_IMPORTED_MODULE_2__["stringify"])(trans));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceHookInvocation = function (step, trans, options) {
        if (!this.enabled(Category.HOOK))
            return;
        var event = Object(_common_hof__WEBPACK_IMPORTED_MODULE_0__["parse"])('traceData.hookType')(options) || 'internal', context = Object(_common_hof__WEBPACK_IMPORTED_MODULE_0__["parse"])('traceData.context.state.name')(options) || Object(_common_hof__WEBPACK_IMPORTED_MODULE_0__["parse"])('traceData.context')(options) || 'unknown', name = Object(_strings__WEBPACK_IMPORTED_MODULE_2__["functionToString"])(step.registeredHook.callback);
        console.log(transLbl(trans) + ":   Hook -> " + event + " context: " + context + ", " + Object(_strings__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(200, name));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceHookResult = function (hookResult, trans, transitionOptions) {
        if (!this.enabled(Category.HOOK))
            return;
        console.log(transLbl(trans) + ":   <- Hook returned: " + Object(_strings__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(200, Object(_strings__WEBPACK_IMPORTED_MODULE_2__["stringify"])(hookResult)));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceResolvePath = function (path, when, trans) {
        if (!this.enabled(Category.RESOLVE))
            return;
        console.log(transLbl(trans) + ":         Resolving " + path + " (" + when + ")");
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceResolvableResolved = function (resolvable, trans) {
        if (!this.enabled(Category.RESOLVE))
            return;
        console.log(transLbl(trans) + ":               <- Resolved  " + resolvable + " to: " + Object(_strings__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(200, Object(_strings__WEBPACK_IMPORTED_MODULE_2__["stringify"])(resolvable.data)));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceError = function (reason, trans) {
        if (!this.enabled(Category.TRANSITION))
            return;
        console.log(transLbl(trans) + ": <- Rejected " + Object(_strings__WEBPACK_IMPORTED_MODULE_2__["stringify"])(trans) + ", reason: " + reason);
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceSuccess = function (finalState, trans) {
        if (!this.enabled(Category.TRANSITION))
            return;
        console.log(transLbl(trans) + ": <- Success  " + Object(_strings__WEBPACK_IMPORTED_MODULE_2__["stringify"])(trans) + ", final state: " + finalState.name);
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceUIViewEvent = function (event, viewData, extra) {
        if (extra === void 0) { extra = ''; }
        if (!this.enabled(Category.UIVIEW))
            return;
        console.log("ui-view: " + Object(_strings__WEBPACK_IMPORTED_MODULE_2__["padString"])(30, event) + " " + uiViewString(viewData) + extra);
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceUIViewConfigUpdated = function (viewData, context) {
        if (!this.enabled(Category.UIVIEW))
            return;
        this.traceUIViewEvent('Updating', viewData, " with ViewConfig from context='" + context + "'");
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceUIViewFill = function (viewData, html) {
        if (!this.enabled(Category.UIVIEW))
            return;
        this.traceUIViewEvent('Fill', viewData, " with: " + Object(_strings__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(200, html));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceViewSync = function (pairs) {
        if (!this.enabled(Category.VIEWCONFIG))
            return;
        var uivheader = 'uiview component fqn';
        var cfgheader = 'view config state (view name)';
        var mapping = pairs
            .map(function (_a) {
            var _b;
            var uiView = _a.uiView, viewConfig = _a.viewConfig;
            var uiv = uiView && uiView.fqn;
            var cfg = viewConfig && viewConfig.viewDecl.$context.name + ": (" + viewConfig.viewDecl.$name + ")";
            return _b = {}, _b[uivheader] = uiv, _b[cfgheader] = cfg, _b;
        })
            .sort(function (a, b) { return (a[uivheader] || '').localeCompare(b[uivheader] || ''); });
        consoletable(mapping);
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceViewServiceEvent = function (event, viewConfig) {
        if (!this.enabled(Category.VIEWCONFIG))
            return;
        console.log("VIEWCONFIG: " + event + " " + viewConfigString(viewConfig));
    };
    /** @internalapi called by ui-router code */
    Trace.prototype.traceViewServiceUIViewEvent = function (event, viewData) {
        if (!this.enabled(Category.VIEWCONFIG))
            return;
        console.log("VIEWCONFIG: " + event + " " + uiViewString(viewData));
    };
    return Trace;
}());

/**
 * The [[Trace]] singleton
 *
 * #### Example:
 * ```js
 * import {trace} from "@uirouter/core";
 * trace.enable(1, 5);
 * ```
 */
var trace = new Trace();

//# sourceMappingURL=trace.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/globals.js":
/*!********************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/globals.js ***!
  \********************************************************************************************/
/*! exports provided: UIRouterGlobals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIRouterGlobals", function() { return UIRouterGlobals; });
/* harmony import */ var _params_stateParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./params/stateParams */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/stateParams.js");
/* harmony import */ var _common_queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/queue */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/queue.js");
/** @publicapi @module core */ /** */


/**
 * Global router state
 *
 * This is where we hold the global mutable state such as current state, current
 * params, current transition, etc.
 */
var UIRouterGlobals = /** @class */ (function () {
    function UIRouterGlobals() {
        /**
         * Current parameter values
         *
         * The parameter values from the latest successful transition
         */
        this.params = new _params_stateParams__WEBPACK_IMPORTED_MODULE_0__["StateParams"]();
        /** @internalapi */
        this.lastStartedTransitionId = -1;
        /** @internalapi */
        this.transitionHistory = new _common_queue__WEBPACK_IMPORTED_MODULE_1__["Queue"]([], 1);
        /** @internalapi */
        this.successfulTransitions = new _common_queue__WEBPACK_IMPORTED_MODULE_1__["Queue"]([], 1);
    }
    UIRouterGlobals.prototype.dispose = function () {
        this.transitionHistory.clear();
        this.successfulTransitions.clear();
        this.transition = null;
    };
    return UIRouterGlobals;
}());

//# sourceMappingURL=globals.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/coreResolvables.js":
/*!**********************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/coreResolvables.js ***!
  \**********************************************************************************************************/
/*! exports provided: registerAddCoreResolvables, treeChangesCleanup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAddCoreResolvables", function() { return registerAddCoreResolvables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeChangesCleanup", function() { return treeChangesCleanup; });
/* harmony import */ var _transition_transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transition/transition */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transition.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/router.js");
/* harmony import */ var _resolve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resolve */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/** @internalapi @module hooks */ /** */




function addCoreResolvables(trans) {
    trans.addResolvable(_resolve__WEBPACK_IMPORTED_MODULE_2__["Resolvable"].fromData(_router__WEBPACK_IMPORTED_MODULE_1__["UIRouter"], trans.router), '');
    trans.addResolvable(_resolve__WEBPACK_IMPORTED_MODULE_2__["Resolvable"].fromData(_transition_transition__WEBPACK_IMPORTED_MODULE_0__["Transition"], trans), '');
    trans.addResolvable(_resolve__WEBPACK_IMPORTED_MODULE_2__["Resolvable"].fromData('$transition$', trans), '');
    trans.addResolvable(_resolve__WEBPACK_IMPORTED_MODULE_2__["Resolvable"].fromData('$stateParams', trans.params()), '');
    trans.entering().forEach(function (state) {
        trans.addResolvable(_resolve__WEBPACK_IMPORTED_MODULE_2__["Resolvable"].fromData('$state$', state), state);
    });
}
var registerAddCoreResolvables = function (transitionService) {
    return transitionService.onCreate({}, addCoreResolvables);
};
var TRANSITION_TOKENS = ['$transition$', _transition_transition__WEBPACK_IMPORTED_MODULE_0__["Transition"]];
var isTransition = Object(_common__WEBPACK_IMPORTED_MODULE_3__["inArray"])(TRANSITION_TOKENS);
// References to Transition in the treeChanges pathnodes makes all
// previous Transitions reachable in memory, causing a memory leak
// This function removes resolves for '$transition$' and `Transition` from the treeChanges.
// Do not use this on current transitions, only on old ones.
var treeChangesCleanup = function (trans) {
    var nodes = Object(_common__WEBPACK_IMPORTED_MODULE_3__["values"])(trans.treeChanges())
        .reduce(_common__WEBPACK_IMPORTED_MODULE_3__["unnestR"], [])
        .reduce(_common__WEBPACK_IMPORTED_MODULE_3__["uniqR"], []);
    // If the resolvable is a Transition, return a new resolvable with null data
    var replaceTransitionWithNull = function (r) {
        return isTransition(r.token) ? _resolve__WEBPACK_IMPORTED_MODULE_2__["Resolvable"].fromData(r.token, null) : r;
    };
    nodes.forEach(function (node) {
        node.resolvables = node.resolvables.map(replaceTransitionWithNull);
    });
};
//# sourceMappingURL=coreResolvables.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/ignoredTransition.js":
/*!************************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/ignoredTransition.js ***!
  \************************************************************************************************************/
/*! exports provided: registerIgnoredTransitionHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerIgnoredTransitionHook", function() { return registerIgnoredTransitionHook; });
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/trace */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/trace.js");
/* harmony import */ var _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transition/rejectFactory */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js");
/** @internalapi @module hooks */ /** */


/**
 * A [[TransitionHookFn]] that skips a transition if it should be ignored
 *
 * This hook is invoked at the end of the onBefore phase.
 *
 * If the transition should be ignored (because no parameter or states changed)
 * then the transition is ignored and not processed.
 */
function ignoredHook(trans) {
    var ignoredReason = trans._ignoredReason();
    if (!ignoredReason)
        return;
    _common_trace__WEBPACK_IMPORTED_MODULE_0__["trace"].traceTransitionIgnored(trans);
    var pending = trans.router.globals.transition;
    // The user clicked a link going back to the *current state* ('A')
    // However, there is also a pending transition in flight (to 'B')
    // Abort the transition to 'B' because the user now wants to be back at 'A'.
    if (ignoredReason === 'SameAsCurrent' && pending) {
        pending.abort();
    }
    return _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_1__["Rejection"].ignored().toPromise();
}
var registerIgnoredTransitionHook = function (transitionService) {
    return transitionService.onBefore({}, ignoredHook, { priority: -9999 });
};
//# sourceMappingURL=ignoredTransition.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/invalidTransition.js":
/*!************************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/invalidTransition.js ***!
  \************************************************************************************************************/
/*! exports provided: registerInvalidTransitionHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerInvalidTransitionHook", function() { return registerInvalidTransitionHook; });
/** @internalapi @module hooks */ /** */
/**
 * A [[TransitionHookFn]] that rejects the Transition if it is invalid
 *
 * This hook is invoked at the end of the onBefore phase.
 * If the transition is invalid (for example, param values do not validate)
 * then the transition is rejected.
 */
function invalidTransitionHook(trans) {
    if (!trans.valid()) {
        throw new Error(trans.error().toString());
    }
}
var registerInvalidTransitionHook = function (transitionService) {
    return transitionService.onBefore({}, invalidTransitionHook, { priority: -10000 });
};
//# sourceMappingURL=invalidTransition.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/lazyLoad.js":
/*!***************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/lazyLoad.js ***!
  \***************************************************************************************************/
/*! exports provided: registerLazyLoadHook, lazyLoadState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerLazyLoadHook", function() { return registerLazyLoadHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyLoadState", function() { return lazyLoadState; });
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");

/**
 * A [[TransitionHookFn]] that performs lazy loading
 *
 * When entering a state "abc" which has a `lazyLoad` function defined:
 * - Invoke the `lazyLoad` function (unless it is already in process)
 *   - Flag the hook function as "in process"
 *   - The function should return a promise (that resolves when lazy loading is complete)
 * - Wait for the promise to settle
 *   - If the promise resolves to a [[LazyLoadResult]], then register those states
 *   - Flag the hook function as "not in process"
 * - If the hook was successful
 *   - Remove the `lazyLoad` function from the state declaration
 * - If all the hooks were successful
 *   - Retry the transition (by returning a TargetState)
 *
 * ```
 * .state('abc', {
 *   component: 'fooComponent',
 *   lazyLoad: () => System.import('./fooComponent')
 *   });
 * ```
 *
 * See [[StateDeclaration.lazyLoad]]
 */
var lazyLoadHook = function (transition) {
    var router = transition.router;
    function retryTransition() {
        if (transition.originalTransition().options().source !== 'url') {
            // The original transition was not triggered via url sync
            // The lazy state should be loaded now, so re-try the original transition
            var orig = transition.targetState();
            return router.stateService.target(orig.identifier(), orig.params(), orig.options());
        }
        // The original transition was triggered via url sync
        // Run the URL rules and find the best match
        var $url = router.urlService;
        var result = $url.match($url.parts());
        var rule = result && result.rule;
        // If the best match is a state, redirect the transition (instead
        // of calling sync() which supersedes the current transition)
        if (rule && rule.type === 'STATE') {
            var state = rule.state;
            var params = result.match;
            return router.stateService.target(state, params, transition.options());
        }
        // No matching state found, so let .sync() choose the best non-state match/otherwise
        router.urlService.sync();
    }
    var promises = transition
        .entering()
        .filter(function (state) { return !!state.$$state().lazyLoad; })
        .map(function (state) { return lazyLoadState(transition, state); });
    return _common_coreservices__WEBPACK_IMPORTED_MODULE_0__["services"].$q.all(promises).then(retryTransition);
};
var registerLazyLoadHook = function (transitionService) {
    return transitionService.onBefore({ entering: function (state) { return !!state.lazyLoad; } }, lazyLoadHook);
};
/**
 * Invokes a state's lazy load function
 *
 * @param transition a Transition context
 * @param state the state to lazy load
 * @returns A promise for the lazy load result
 */
function lazyLoadState(transition, state) {
    var lazyLoadFn = state.$$state().lazyLoad;
    // Store/get the lazy load promise on/from the hookfn so it doesn't get re-invoked
    var promise = lazyLoadFn['_promise'];
    if (!promise) {
        var success = function (result) {
            delete state.lazyLoad;
            delete state.$$state().lazyLoad;
            delete lazyLoadFn['_promise'];
            return result;
        };
        var error = function (err) {
            delete lazyLoadFn['_promise'];
            return _common_coreservices__WEBPACK_IMPORTED_MODULE_0__["services"].$q.reject(err);
        };
        promise = lazyLoadFn['_promise'] = _common_coreservices__WEBPACK_IMPORTED_MODULE_0__["services"].$q
            .when(lazyLoadFn(transition, state))
            .then(updateStateRegistry)
            .then(success, error);
    }
    /** Register any lazy loaded state definitions */
    function updateStateRegistry(result) {
        if (result && Array.isArray(result.states)) {
            result.states.forEach(function (_state) { return transition.router.stateRegistry.register(_state); });
        }
        return result;
    }
    return promise;
}
//# sourceMappingURL=lazyLoad.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/onEnterExitRetain.js":
/*!************************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/onEnterExitRetain.js ***!
  \************************************************************************************************************/
/*! exports provided: registerOnExitHook, registerOnRetainHook, registerOnEnterHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerOnExitHook", function() { return registerOnExitHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerOnRetainHook", function() { return registerOnRetainHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerOnEnterHook", function() { return registerOnEnterHook; });
/**
 * A factory which creates an onEnter, onExit or onRetain transition hook function
 *
 * The returned function invokes the (for instance) state.onEnter hook when the
 * state is being entered.
 *
 * @hidden
 */
function makeEnterExitRetainHook(hookName) {
    return function (transition, state) {
        var _state = state.$$state();
        var hookFn = _state[hookName];
        return hookFn(transition, state);
    };
}
/**
 * The [[TransitionStateHookFn]] for onExit
 *
 * When the state is being exited, the state's .onExit function is invoked.
 *
 * Registered using `transitionService.onExit({ exiting: (state) => !!state.onExit }, onExitHook);`
 *
 * See: [[IHookRegistry.onExit]]
 */
var onExitHook = makeEnterExitRetainHook('onExit');
var registerOnExitHook = function (transitionService) {
    return transitionService.onExit({ exiting: function (state) { return !!state.onExit; } }, onExitHook);
};
/**
 * The [[TransitionStateHookFn]] for onRetain
 *
 * When the state was already entered, and is not being exited or re-entered, the state's .onRetain function is invoked.
 *
 * Registered using `transitionService.onRetain({ retained: (state) => !!state.onRetain }, onRetainHook);`
 *
 * See: [[IHookRegistry.onRetain]]
 */
var onRetainHook = makeEnterExitRetainHook('onRetain');
var registerOnRetainHook = function (transitionService) {
    return transitionService.onRetain({ retained: function (state) { return !!state.onRetain; } }, onRetainHook);
};
/**
 * The [[TransitionStateHookFn]] for onEnter
 *
 * When the state is being entered, the state's .onEnter function is invoked.
 *
 * Registered using `transitionService.onEnter({ entering: (state) => !!state.onEnter }, onEnterHook);`
 *
 * See: [[IHookRegistry.onEnter]]
 */
var onEnterHook = makeEnterExitRetainHook('onEnter');
var registerOnEnterHook = function (transitionService) {
    return transitionService.onEnter({ entering: function (state) { return !!state.onEnter; } }, onEnterHook);
};
//# sourceMappingURL=onEnterExitRetain.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/redirectTo.js":
/*!*****************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/redirectTo.js ***!
  \*****************************************************************************************************/
/*! exports provided: registerRedirectToHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerRedirectToHook", function() { return registerRedirectToHook; });
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _state_targetState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/targetState */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/targetState.js");
/** @internalapi @module hooks */ /** */



/**
 * A [[TransitionHookFn]] that redirects to a different state or params
 *
 * Registered using `transitionService.onStart({ to: (state) => !!state.redirectTo }, redirectHook);`
 *
 * See [[StateDeclaration.redirectTo]]
 */
var redirectToHook = function (trans) {
    var redirect = trans.to().redirectTo;
    if (!redirect)
        return;
    var $state = trans.router.stateService;
    function handleResult(result) {
        if (!result)
            return;
        if (result instanceof _state_targetState__WEBPACK_IMPORTED_MODULE_2__["TargetState"])
            return result;
        if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_0__["isString"])(result))
            return $state.target(result, trans.params(), trans.options());
        if (result['state'] || result['params'])
            return $state.target(result['state'] || trans.to(), result['params'] || trans.params(), trans.options());
    }
    if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(redirect)) {
        return _common_coreservices__WEBPACK_IMPORTED_MODULE_1__["services"].$q.when(redirect(trans)).then(handleResult);
    }
    return handleResult(redirect);
};
var registerRedirectToHook = function (transitionService) {
    return transitionService.onStart({ to: function (state) { return !!state.redirectTo; } }, redirectToHook);
};
//# sourceMappingURL=redirectTo.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/resolve.js":
/*!**************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/resolve.js ***!
  \**************************************************************************************************/
/*! exports provided: RESOLVE_HOOK_PRIORITY, registerEagerResolvePath, registerLazyResolveState, registerResolveRemaining */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOLVE_HOOK_PRIORITY", function() { return RESOLVE_HOOK_PRIORITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerEagerResolvePath", function() { return registerEagerResolvePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerLazyResolveState", function() { return registerLazyResolveState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerResolveRemaining", function() { return registerResolveRemaining; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resolve/resolveContext */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolveContext.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/** @internalapi @module hooks */ /** */



var RESOLVE_HOOK_PRIORITY = 1000;
/**
 * A [[TransitionHookFn]] which resolves all EAGER Resolvables in the To Path
 *
 * Registered using `transitionService.onStart({}, eagerResolvePath, { priority: 1000 });`
 *
 * When a Transition starts, this hook resolves all the EAGER Resolvables, which the transition then waits for.
 *
 * See [[StateDeclaration.resolve]]
 */
var eagerResolvePath = function (trans) {
    return new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_1__["ResolveContext"](trans.treeChanges().to).resolvePath('EAGER', trans).then(_common_common__WEBPACK_IMPORTED_MODULE_0__["noop"]);
};
var registerEagerResolvePath = function (transitionService) {
    return transitionService.onStart({}, eagerResolvePath, { priority: RESOLVE_HOOK_PRIORITY });
};
/**
 * A [[TransitionHookFn]] which resolves all LAZY Resolvables for the state (and all its ancestors) in the To Path
 *
 * Registered using `transitionService.onEnter({ entering: () => true }, lazyResolveState, { priority: 1000 });`
 *
 * When a State is being entered, this hook resolves all the Resolvables for this state, which the transition then waits for.
 *
 * See [[StateDeclaration.resolve]]
 */
var lazyResolveState = function (trans, state) {
    return new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_1__["ResolveContext"](trans.treeChanges().to)
        .subContext(state.$$state())
        .resolvePath('LAZY', trans)
        .then(_common_common__WEBPACK_IMPORTED_MODULE_0__["noop"]);
};
var registerLazyResolveState = function (transitionService) {
    return transitionService.onEnter({ entering: Object(_common_hof__WEBPACK_IMPORTED_MODULE_2__["val"])(true) }, lazyResolveState, { priority: RESOLVE_HOOK_PRIORITY });
};
/**
 * A [[TransitionHookFn]] which resolves any dynamically added (LAZY or EAGER) Resolvables.
 *
 * Registered using `transitionService.onFinish({}, eagerResolvePath, { priority: 1000 });`
 *
 * After all entering states have been entered, this hook resolves any remaining Resolvables.
 * These are typically dynamic resolves which were added by some Transition Hook using [[Transition.addResolvable]].
 *
 * See [[StateDeclaration.resolve]]
 */
var resolveRemaining = function (trans) {
    return new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_1__["ResolveContext"](trans.treeChanges().to).resolvePath('LAZY', trans).then(_common_common__WEBPACK_IMPORTED_MODULE_0__["noop"]);
};
var registerResolveRemaining = function (transitionService) {
    return transitionService.onFinish({}, resolveRemaining, { priority: RESOLVE_HOOK_PRIORITY });
};
//# sourceMappingURL=resolve.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/updateGlobals.js":
/*!********************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/updateGlobals.js ***!
  \********************************************************************************************************/
/*! exports provided: registerUpdateGlobalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUpdateGlobalState", function() { return registerUpdateGlobalState; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");

/**
 * A [[TransitionHookFn]] which updates global UI-Router state
 *
 * Registered using `transitionService.onBefore({}, updateGlobalState);`
 *
 * Before a [[Transition]] starts, updates the global value of "the current transition" ([[Globals.transition]]).
 * After a successful [[Transition]], updates the global values of "the current state"
 * ([[Globals.current]] and [[Globals.$current]]) and "the current param values" ([[Globals.params]]).
 *
 * See also the deprecated properties:
 * [[StateService.transition]], [[StateService.current]], [[StateService.params]]
 */
var updateGlobalState = function (trans) {
    var globals = trans.router.globals;
    var transitionSuccessful = function () {
        globals.successfulTransitions.enqueue(trans);
        globals.$current = trans.$to();
        globals.current = globals.$current.self;
        Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["copy"])(trans.params(), globals.params);
    };
    var clearCurrentTransition = function () {
        // Do not clear globals.transition if a different transition has started in the meantime
        if (globals.transition === trans)
            globals.transition = null;
    };
    trans.onSuccess({}, transitionSuccessful, { priority: 10000 });
    trans.promise.then(clearCurrentTransition, clearCurrentTransition);
};
var registerUpdateGlobalState = function (transitionService) {
    return transitionService.onCreate({}, updateGlobalState);
};
//# sourceMappingURL=updateGlobals.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/url.js":
/*!**********************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/url.js ***!
  \**********************************************************************************************/
/*! exports provided: registerUpdateUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUpdateUrl", function() { return registerUpdateUrl; });
/**
 * A [[TransitionHookFn]] which updates the URL after a successful transition
 *
 * Registered using `transitionService.onSuccess({}, updateUrl);`
 */
var updateUrl = function (transition) {
    var options = transition.options();
    var $state = transition.router.stateService;
    var $urlRouter = transition.router.urlRouter;
    // Dont update the url in these situations:
    // The transition was triggered by a URL sync (options.source === 'url')
    // The user doesn't want the url to update (options.location === false)
    // The destination state, and all parents have no navigable url
    if (options.source !== 'url' && options.location && $state.$current.navigable) {
        var urlOptions = { replace: options.location === 'replace' };
        $urlRouter.push($state.$current.navigable.url, $state.params, urlOptions);
    }
    $urlRouter.update(true);
};
var registerUpdateUrl = function (transitionService) {
    return transitionService.onSuccess({}, updateUrl, { priority: 9999 });
};
//# sourceMappingURL=url.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/views.js":
/*!************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/views.js ***!
  \************************************************************************************************/
/*! exports provided: registerLoadEnteringViews, registerActivateViews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerLoadEnteringViews", function() { return registerLoadEnteringViews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerActivateViews", function() { return registerActivateViews; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/** @internalapi @module hooks */ /** */


/**
 * A [[TransitionHookFn]] which waits for the views to load
 *
 * Registered using `transitionService.onStart({}, loadEnteringViews);`
 *
 * Allows the views to do async work in [[ViewConfig.load]] before the transition continues.
 * In angular 1, this includes loading the templates.
 */
var loadEnteringViews = function (transition) {
    var $q = _common_coreservices__WEBPACK_IMPORTED_MODULE_1__["services"].$q;
    var enteringViews = transition.views('entering');
    if (!enteringViews.length)
        return;
    return $q.all(enteringViews.map(function (view) { return $q.when(view.load()); })).then(_common_common__WEBPACK_IMPORTED_MODULE_0__["noop"]);
};
var registerLoadEnteringViews = function (transitionService) {
    return transitionService.onFinish({}, loadEnteringViews);
};
/**
 * A [[TransitionHookFn]] which activates the new views when a transition is successful.
 *
 * Registered using `transitionService.onSuccess({}, activateViews);`
 *
 * After a transition is complete, this hook deactivates the old views from the previous state,
 * and activates the new views from the destination state.
 *
 * See [[ViewService]]
 */
var activateViews = function (transition) {
    var enteringViews = transition.views('entering');
    var exitingViews = transition.views('exiting');
    if (!enteringViews.length && !exitingViews.length)
        return;
    var $view = transition.router.viewService;
    exitingViews.forEach(function (vc) { return $view.deactivateViewConfig(vc); });
    enteringViews.forEach(function (vc) { return $view.activateViewConfig(vc); });
    $view.sync();
};
var registerActivateViews = function (transitionService) {
    return transitionService.onSuccess({}, activateViews);
};
//# sourceMappingURL=views.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/index.js":
/*!******************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/index.js ***!
  \******************************************************************************************/
/*! exports provided: UrlRules, UrlConfig, UIRouterGlobals, UIRouter, UIRouterPluginBase, root, fromJson, toJson, forEach, extend, equals, identity, noop, createProxyFunctions, inherit, inArray, _inArray, removeFrom, _removeFrom, pushTo, _pushTo, deregAll, defaults, mergeR, ancestors, pick, omit, pluck, filter, find, mapObj, map, values, allTrueR, anyTrueR, unnestR, flattenR, pushR, uniqR, unnest, flatten, assertPredicate, assertMap, assertFn, pairs, arrayTuples, applyPairs, tail, copy, _extend, silenceUncaughtInPromise, silentRejection, makeStub, services, Glob, curry, compose, pipe, prop, propEq, parse, not, and, or, all, any, is, eq, val, invoke, pattern, isUndefined, isDefined, isNull, isNullOrUndefined, isFunction, isNumber, isString, isObject, isArray, isDate, isRegExp, isInjectable, isPromise, Queue, maxLength, padString, kebobString, functionToString, fnToString, stringify, beforeAfterSubstr, hostRegex, stripLastPathElement, splitHash, splitQuery, splitEqual, trimHashVal, splitOnDelim, joinNeighborsR, Category, Trace, trace, DefType, Param, ParamTypes, StateParams, ParamType, PathNode, PathUtils, resolvePolicies, defaultResolvePolicy, Resolvable, NATIVE_INJECTOR_TOKEN, ResolveContext, resolvablesBuilder, StateBuilder, StateObject, StateMatcher, StateQueueManager, StateRegistry, StateService, TargetState, TransitionHookPhase, TransitionHookScope, HookBuilder, matchState, RegisteredHook, makeEvent, RejectType, Rejection, Transition, TransitionHook, TransitionEventType, defaultTransOpts, TransitionService, UrlMatcher, ParamFactory, UrlMatcherFactory, UrlRouter, UrlRuleFactory, BaseUrlRule, UrlService, ViewService, $q, $injector, BaseLocationServices, HashLocationService, MemoryLocationService, PushStateLocationService, MemoryLocationConfig, BrowserLocationConfig, keyValsToObjectR, getParams, parseUrl, buildUrl, locationPluginFactory, servicesPlugin, hashLocationPlugin, pushStateLocationPlugin, memoryLocationPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "root", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["root"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromJson", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["fromJson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toJson", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["toJson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["equals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["identity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["noop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createProxyFunctions", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["createProxyFunctions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["inherit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inArray", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["inArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_inArray", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["_inArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeFrom", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["removeFrom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_removeFrom", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["_removeFrom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushTo", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["pushTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_pushTo", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["_pushTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deregAll", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["deregAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["defaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeR", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["mergeR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ancestors", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["ancestors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["pick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["omit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["pluck"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["find"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapObj", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["mapObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["values"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allTrueR", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["allTrueR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anyTrueR", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["anyTrueR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unnestR", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["unnestR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flattenR", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["flattenR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushR", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["pushR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqR", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["uniqR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unnest", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["unnest"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["flatten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertPredicate", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["assertPredicate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertMap", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["assertMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertFn", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["assertFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["pairs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayTuples", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["arrayTuples"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyPairs", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["applyPairs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["tail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["copy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_extend", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["_extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "silenceUncaughtInPromise", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["silenceUncaughtInPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "silentRejection", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["silentRejection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeStub", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["makeStub"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "services", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["services"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Glob", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["Glob"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["curry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["pipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["prop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propEq", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["propEq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "not", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["not"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "and", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["and"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "or", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["or"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["all"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["any"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "is", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["is"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["eq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "val", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["val"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["invoke"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pattern", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["pattern"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isNullOrUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInjectable", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isInjectable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["isPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Queue", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["Queue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxLength", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["maxLength"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "padString", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["padString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "kebobString", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["kebobString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "functionToString", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["functionToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fnToString", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["fnToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["stringify"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "beforeAfterSubstr", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["beforeAfterSubstr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hostRegex", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["hostRegex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripLastPathElement", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["stripLastPathElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitHash", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["splitHash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitQuery", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["splitQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitEqual", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["splitEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trimHashVal", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["trimHashVal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "splitOnDelim", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["splitOnDelim"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "joinNeighborsR", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["joinNeighborsR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["Category"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Trace", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["Trace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trace", function() { return _common_index__WEBPACK_IMPORTED_MODULE_0__["trace"]; });

/* harmony import */ var _params_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./params/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefType", function() { return _params_index__WEBPACK_IMPORTED_MODULE_1__["DefType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Param", function() { return _params_index__WEBPACK_IMPORTED_MODULE_1__["Param"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParamTypes", function() { return _params_index__WEBPACK_IMPORTED_MODULE_1__["ParamTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateParams", function() { return _params_index__WEBPACK_IMPORTED_MODULE_1__["StateParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParamType", function() { return _params_index__WEBPACK_IMPORTED_MODULE_1__["ParamType"]; });

/* harmony import */ var _path_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./path/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PathNode", function() { return _path_index__WEBPACK_IMPORTED_MODULE_2__["PathNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PathUtils", function() { return _path_index__WEBPACK_IMPORTED_MODULE_2__["PathUtils"]; });

/* harmony import */ var _resolve_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolve/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolvePolicies", function() { return _resolve_index__WEBPACK_IMPORTED_MODULE_3__["resolvePolicies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultResolvePolicy", function() { return _resolve_index__WEBPACK_IMPORTED_MODULE_3__["defaultResolvePolicy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Resolvable", function() { return _resolve_index__WEBPACK_IMPORTED_MODULE_3__["Resolvable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NATIVE_INJECTOR_TOKEN", function() { return _resolve_index__WEBPACK_IMPORTED_MODULE_3__["NATIVE_INJECTOR_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResolveContext", function() { return _resolve_index__WEBPACK_IMPORTED_MODULE_3__["ResolveContext"]; });

/* harmony import */ var _state_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolvablesBuilder", function() { return _state_index__WEBPACK_IMPORTED_MODULE_4__["resolvablesBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateBuilder", function() { return _state_index__WEBPACK_IMPORTED_MODULE_4__["StateBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateObject", function() { return _state_index__WEBPACK_IMPORTED_MODULE_4__["StateObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateMatcher", function() { return _state_index__WEBPACK_IMPORTED_MODULE_4__["StateMatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateQueueManager", function() { return _state_index__WEBPACK_IMPORTED_MODULE_4__["StateQueueManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateRegistry", function() { return _state_index__WEBPACK_IMPORTED_MODULE_4__["StateRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return _state_index__WEBPACK_IMPORTED_MODULE_4__["StateService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TargetState", function() { return _state_index__WEBPACK_IMPORTED_MODULE_4__["TargetState"]; });

/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transition/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionHookPhase", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["TransitionHookPhase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionHookScope", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["TransitionHookScope"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HookBuilder", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["HookBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchState", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["matchState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisteredHook", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["RegisteredHook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeEvent", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["makeEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RejectType", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["RejectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rejection", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["Rejection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["Transition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionHook", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["TransitionHook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionEventType", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["TransitionEventType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTransOpts", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["defaultTransOpts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionService", function() { return _transition_index__WEBPACK_IMPORTED_MODULE_5__["TransitionService"]; });

/* harmony import */ var _url_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./url/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlRules", function() { return _url_index__WEBPACK_IMPORTED_MODULE_6__["UrlRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlConfig", function() { return _url_index__WEBPACK_IMPORTED_MODULE_6__["UrlConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlMatcher", function() { return _url_index__WEBPACK_IMPORTED_MODULE_6__["UrlMatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParamFactory", function() { return _url_index__WEBPACK_IMPORTED_MODULE_6__["ParamFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlMatcherFactory", function() { return _url_index__WEBPACK_IMPORTED_MODULE_6__["UrlMatcherFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlRouter", function() { return _url_index__WEBPACK_IMPORTED_MODULE_6__["UrlRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlRuleFactory", function() { return _url_index__WEBPACK_IMPORTED_MODULE_6__["UrlRuleFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseUrlRule", function() { return _url_index__WEBPACK_IMPORTED_MODULE_6__["BaseUrlRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlService", function() { return _url_index__WEBPACK_IMPORTED_MODULE_6__["UrlService"]; });

/* harmony import */ var _view_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewService", function() { return _view_index__WEBPACK_IMPORTED_MODULE_7__["ViewService"]; });

/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./globals */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/globals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIRouterGlobals", function() { return _globals__WEBPACK_IMPORTED_MODULE_8__["UIRouterGlobals"]; });

/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./router */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIRouter", function() { return _router__WEBPACK_IMPORTED_MODULE_9__["UIRouter"]; });

/* harmony import */ var _vanilla__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vanilla */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$q", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["$q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$injector", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["$injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLocationServices", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["BaseLocationServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HashLocationService", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["HashLocationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryLocationService", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["MemoryLocationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PushStateLocationService", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["PushStateLocationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryLocationConfig", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["MemoryLocationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserLocationConfig", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["BrowserLocationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyValsToObjectR", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["keyValsToObjectR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParams", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["getParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["parseUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildUrl", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["buildUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locationPluginFactory", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["locationPluginFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "servicesPlugin", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["servicesPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hashLocationPlugin", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["hashLocationPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushStateLocationPlugin", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["pushStateLocationPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoryLocationPlugin", function() { return _vanilla__WEBPACK_IMPORTED_MODULE_10__["memoryLocationPlugin"]; });

/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/interface.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIRouterPluginBase", function() { return _interface__WEBPACK_IMPORTED_MODULE_11__["UIRouterPluginBase"]; });

/** @publicapi @module common */ /** */












//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/interface.js":
/*!**********************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/interface.js ***!
  \**********************************************************************************************/
/*! exports provided: UIRouterPluginBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIRouterPluginBase", function() { return UIRouterPluginBase; });
/**
 * # Core classes and interfaces
 *
 * The classes and interfaces that are core to ui-router and do not belong
 * to a more specific subsystem (such as resolve).
 *
 * @preferred @publicapi @module core
 */ /** */
/** @internalapi */
var UIRouterPluginBase = /** @class */ (function () {
    function UIRouterPluginBase() {
    }
    UIRouterPluginBase.prototype.dispose = function (router) { };
    return UIRouterPluginBase;
}());

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/index.js":
/*!*************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/index.js ***!
  \*************************************************************************************************/
/*! exports provided: DefType, Param, ParamTypes, StateParams, ParamType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _param__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./param */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/param.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefType", function() { return _param__WEBPACK_IMPORTED_MODULE_0__["DefType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Param", function() { return _param__WEBPACK_IMPORTED_MODULE_0__["Param"]; });

/* harmony import */ var _paramTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paramTypes */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/paramTypes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParamTypes", function() { return _paramTypes__WEBPACK_IMPORTED_MODULE_1__["ParamTypes"]; });

/* harmony import */ var _stateParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stateParams */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/stateParams.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateParams", function() { return _stateParams__WEBPACK_IMPORTED_MODULE_2__["StateParams"]; });

/* harmony import */ var _paramType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paramType */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/paramType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParamType", function() { return _paramType__WEBPACK_IMPORTED_MODULE_3__["ParamType"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/param.js":
/*!*************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/param.js ***!
  \*************************************************************************************************/
/*! exports provided: DefType, Param */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefType", function() { return DefType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Param", function() { return Param; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _paramType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paramType */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/paramType.js");
/** @publicapi @module params */ /** */





/** @hidden */
var hasOwn = Object.prototype.hasOwnProperty;
/** @hidden */
var isShorthand = function (cfg) {
    return ['value', 'type', 'squash', 'array', 'dynamic'].filter(hasOwn.bind(cfg || {})).length === 0;
};
/** @internalapi */
var DefType;
(function (DefType) {
    DefType[DefType["PATH"] = 0] = "PATH";
    DefType[DefType["SEARCH"] = 1] = "SEARCH";
    DefType[DefType["CONFIG"] = 2] = "CONFIG";
})(DefType || (DefType = {}));

/** @internalapi */
function getParamDeclaration(paramName, location, state) {
    var noReloadOnSearch = (state.reloadOnSearch === false && location === DefType.SEARCH) || undefined;
    var dynamic = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["find"])([state.dynamic, noReloadOnSearch], _common_predicates__WEBPACK_IMPORTED_MODULE_2__["isDefined"]);
    var defaultConfig = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(dynamic) ? { dynamic: dynamic } : {};
    var paramConfig = unwrapShorthand(state && state.params && state.params[paramName]);
    return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(defaultConfig, paramConfig);
}
/** @hidden */
function unwrapShorthand(cfg) {
    cfg = isShorthand(cfg) ? { value: cfg } : cfg;
    getStaticDefaultValue['__cacheable'] = true;
    function getStaticDefaultValue() {
        return cfg.value;
    }
    var $$fn = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isInjectable"])(cfg.value) ? cfg.value : getStaticDefaultValue;
    return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(cfg, { $$fn: $$fn });
}
/** @hidden */
function getType(cfg, urlType, location, id, paramTypes) {
    if (cfg.type && urlType && urlType.name !== 'string')
        throw new Error("Param '" + id + "' has two type configurations.");
    if (cfg.type && urlType && urlType.name === 'string' && paramTypes.type(cfg.type))
        return paramTypes.type(cfg.type);
    if (urlType)
        return urlType;
    if (!cfg.type) {
        var type = location === DefType.CONFIG
            ? 'any'
            : location === DefType.PATH
                ? 'path'
                : location === DefType.SEARCH
                    ? 'query'
                    : 'string';
        return paramTypes.type(type);
    }
    return cfg.type instanceof _paramType__WEBPACK_IMPORTED_MODULE_4__["ParamType"] ? cfg.type : paramTypes.type(cfg.type);
}
/**
 * @internalapi
 * returns false, true, or the squash value to indicate the "default parameter url squash policy".
 */
function getSquashPolicy(config, isOptional, defaultPolicy) {
    var squash = config.squash;
    if (!isOptional || squash === false)
        return false;
    if (!Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(squash) || squash == null)
        return defaultPolicy;
    if (squash === true || Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isString"])(squash))
        return squash;
    throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
}
/** @internalapi */
function getReplace(config, arrayMode, isOptional, squash) {
    var defaultPolicy = [
        { from: '', to: isOptional || arrayMode ? undefined : '' },
        { from: null, to: isOptional || arrayMode ? undefined : '' },
    ];
    var replace = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isArray"])(config.replace) ? config.replace : [];
    if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isString"])(squash))
        replace.push({ from: squash, to: undefined });
    var configuredKeys = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["map"])(replace, Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["prop"])('from'));
    return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["filter"])(defaultPolicy, function (item) { return configuredKeys.indexOf(item.from) === -1; }).concat(replace);
}
/** @internalapi */
var Param = /** @class */ (function () {
    function Param(id, type, location, urlConfig, state) {
        var config = getParamDeclaration(id, location, state);
        type = getType(config, type, location, id, urlConfig.paramTypes);
        var arrayMode = getArrayMode();
        type = arrayMode ? type.$asArray(arrayMode, location === DefType.SEARCH) : type;
        var isOptional = config.value !== undefined || location === DefType.SEARCH;
        var dynamic = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(config.dynamic) ? !!config.dynamic : !!type.dynamic;
        var raw = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(config.raw) ? !!config.raw : !!type.raw;
        var squash = getSquashPolicy(config, isOptional, urlConfig.defaultSquashPolicy());
        var replace = getReplace(config, arrayMode, isOptional, squash);
        var inherit = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(config.inherit) ? !!config.inherit : !!type.inherit;
        // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
        function getArrayMode() {
            var arrayDefaults = { array: location === DefType.SEARCH ? 'auto' : false };
            var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
            return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(arrayDefaults, arrayParamNomenclature, config).array;
        }
        Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(this, { id: id, type: type, location: location, isOptional: isOptional, dynamic: dynamic, raw: raw, squash: squash, replace: replace, inherit: inherit, array: arrayMode, config: config });
    }
    Param.values = function (params, values) {
        if (values === void 0) { values = {}; }
        var paramValues = {};
        for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
            var param = params_1[_i];
            paramValues[param.id] = param.value(values[param.id]);
        }
        return paramValues;
    };
    /**
     * Finds [[Param]] objects which have different param values
     *
     * Filters a list of [[Param]] objects to only those whose parameter values differ in two param value objects
     *
     * @param params: The list of Param objects to filter
     * @param values1: The first set of parameter values
     * @param values2: the second set of parameter values
     *
     * @returns any Param objects whose values were different between values1 and values2
     */
    Param.changed = function (params, values1, values2) {
        if (values1 === void 0) { values1 = {}; }
        if (values2 === void 0) { values2 = {}; }
        return params.filter(function (param) { return !param.type.equals(values1[param.id], values2[param.id]); });
    };
    /**
     * Checks if two param value objects are equal (for a set of [[Param]] objects)
     *
     * @param params The list of [[Param]] objects to check
     * @param values1 The first set of param values
     * @param values2 The second set of param values
     *
     * @returns true if the param values in values1 and values2 are equal
     */
    Param.equals = function (params, values1, values2) {
        if (values1 === void 0) { values1 = {}; }
        if (values2 === void 0) { values2 = {}; }
        return Param.changed(params, values1, values2).length === 0;
    };
    /** Returns true if a the parameter values are valid, according to the Param definitions */
    Param.validates = function (params, values) {
        if (values === void 0) { values = {}; }
        return params.map(function (param) { return param.validates(values[param.id]); }).reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["allTrueR"], true);
    };
    Param.prototype.isDefaultValue = function (value) {
        return this.isOptional && this.type.equals(this.value(), value);
    };
    /**
     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
     * default value, which may be the result of an injectable function.
     */
    Param.prototype.value = function (value) {
        var _this = this;
        /**
         * [Internal] Get the default value of a parameter, which may be an injectable function.
         */
        var getDefaultValue = function () {
            if (_this._defaultValueCache)
                return _this._defaultValueCache.defaultValue;
            if (!_common_coreservices__WEBPACK_IMPORTED_MODULE_3__["services"].$injector)
                throw new Error('Injectable functions cannot be called at configuration time');
            var defaultValue = _common_coreservices__WEBPACK_IMPORTED_MODULE_3__["services"].$injector.invoke(_this.config.$$fn);
            if (defaultValue !== null && defaultValue !== undefined && !_this.type.is(defaultValue))
                throw new Error("Default value (" + defaultValue + ") for parameter '" + _this.id + "' is not an instance of ParamType (" + _this.type.name + ")");
            if (_this.config.$$fn['__cacheable']) {
                _this._defaultValueCache = { defaultValue: defaultValue };
            }
            return defaultValue;
        };
        var replaceSpecialValues = function (val) {
            for (var _i = 0, _a = _this.replace; _i < _a.length; _i++) {
                var tuple = _a[_i];
                if (tuple.from === val)
                    return tuple.to;
            }
            return val;
        };
        value = replaceSpecialValues(value);
        return Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(value) ? getDefaultValue() : this.type.$normalize(value);
    };
    Param.prototype.isSearch = function () {
        return this.location === DefType.SEARCH;
    };
    Param.prototype.validates = function (value) {
        // There was no parameter value, but the param is optional
        if ((Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(value) || value === null) && this.isOptional)
            return true;
        // The value was not of the correct ParamType, and could not be decoded to the correct ParamType
        var normalized = this.type.$normalize(value);
        if (!this.type.is(normalized))
            return false;
        // The value was of the correct type, but when encoded, did not match the ParamType's regexp
        var encoded = this.type.encode(normalized);
        return !(Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isString"])(encoded) && !this.type.pattern.exec(encoded));
    };
    Param.prototype.toString = function () {
        return "{Param:" + this.id + " " + this.type + " squash: '" + this.squash + "' optional: " + this.isOptional + "}";
    };
    return Param;
}());

//# sourceMappingURL=param.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/paramType.js":
/*!*****************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/paramType.js ***!
  \*****************************************************************************************************/
/*! exports provided: ParamType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamType", function() { return ParamType; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/** @publicapi @module params */ /** */


/**
 * An internal class which implements [[ParamTypeDefinition]].
 *
 * A [[ParamTypeDefinition]] is a plain javascript object used to register custom parameter types.
 * When a param type definition is registered, an instance of this class is created internally.
 *
 * This class has naive implementations for all the [[ParamTypeDefinition]] methods.
 *
 * Used by [[UrlMatcher]] when matching or formatting URLs, or comparing and validating parameter values.
 *
 * #### Example:
 * ```js
 * var paramTypeDef = {
 *   decode: function(val) { return parseInt(val, 10); },
 *   encode: function(val) { return val && val.toString(); },
 *   equals: function(a, b) { return this.is(a) && a === b; },
 *   is: function(val) { return angular.isNumber(val) && isFinite(val) && val % 1 === 0; },
 *   pattern: /\d+/
 * }
 *
 * var paramType = new ParamType(paramTypeDef);
 * ```
 * @internalapi
 */
var ParamType = /** @class */ (function () {
    /**
     * @param def  A configuration object which contains the custom type definition.  The object's
     *        properties will override the default methods and/or pattern in `ParamType`'s public interface.
     * @returns a new ParamType object
     */
    function ParamType(def) {
        /** @inheritdoc */
        this.pattern = /.*/;
        /** @inheritdoc */
        this.inherit = true;
        Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(this, def);
    }
    // consider these four methods to be "abstract methods" that should be overridden
    /** @inheritdoc */
    ParamType.prototype.is = function (val, key) {
        return true;
    };
    /** @inheritdoc */
    ParamType.prototype.encode = function (val, key) {
        return val;
    };
    /** @inheritdoc */
    ParamType.prototype.decode = function (val, key) {
        return val;
    };
    /** @inheritdoc */
    ParamType.prototype.equals = function (a, b) {
        // tslint:disable-next-line:triple-equals
        return a == b;
    };
    ParamType.prototype.$subPattern = function () {
        var sub = this.pattern.toString();
        return sub.substr(1, sub.length - 2);
    };
    ParamType.prototype.toString = function () {
        return "{ParamType:" + this.name + "}";
    };
    /** Given an encoded string, or a decoded object, returns a decoded object */
    ParamType.prototype.$normalize = function (val) {
        return this.is(val) ? val : this.decode(val);
    };
    /**
     * Wraps an existing custom ParamType as an array of ParamType, depending on 'mode'.
     * e.g.:
     * - urlmatcher pattern "/path?{queryParam[]:int}"
     * - url: "/path?queryParam=1&queryParam=2
     * - $stateParams.queryParam will be [1, 2]
     * if `mode` is "auto", then
     * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
     * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
     */
    ParamType.prototype.$asArray = function (mode, isSearch) {
        if (!mode)
            return this;
        if (mode === 'auto' && !isSearch)
            throw new Error("'auto' array mode is for query parameters only");
        return new ArrayType(this, mode);
    };
    return ParamType;
}());

/**
 * Wraps up a `ParamType` object to handle array values.
 * @internalapi
 */
function ArrayType(type, mode) {
    var _this = this;
    // Wrap non-array value as array
    function arrayWrap(val) {
        return Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isArray"])(val) ? val : Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(val) ? [val] : [];
    }
    // Unwrap array value for "auto" mode. Return undefined for empty array.
    function arrayUnwrap(val) {
        switch (val.length) {
            case 0:
                return undefined;
            case 1:
                return mode === 'auto' ? val[0] : val;
            default:
                return val;
        }
    }
    // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
    function arrayHandler(callback, allTruthyMode) {
        return function handleArray(val) {
            if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isArray"])(val) && val.length === 0)
                return val;
            var arr = arrayWrap(val);
            var result = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["map"])(arr, callback);
            return allTruthyMode === true ? Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["filter"])(result, function (x) { return !x; }).length === 0 : arrayUnwrap(result);
        };
    }
    // Wraps type (.equals) functions to operate on each value of an array
    function arrayEqualsHandler(callback) {
        return function handleArray(val1, val2) {
            var left = arrayWrap(val1), right = arrayWrap(val2);
            if (left.length !== right.length)
                return false;
            for (var i = 0; i < left.length; i++) {
                if (!callback(left[i], right[i]))
                    return false;
            }
            return true;
        };
    }
    ['encode', 'decode', 'equals', '$normalize'].forEach(function (name) {
        var paramTypeFn = type[name].bind(type);
        var wrapperFn = name === 'equals' ? arrayEqualsHandler : arrayHandler;
        _this[name] = wrapperFn(paramTypeFn);
    });
    Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(this, {
        dynamic: type.dynamic,
        name: type.name,
        pattern: type.pattern,
        inherit: type.inherit,
        raw: type.raw,
        is: arrayHandler(type.is.bind(type), true),
        $arrayMode: mode,
    });
}
//# sourceMappingURL=paramType.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/paramTypes.js":
/*!******************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/paramTypes.js ***!
  \******************************************************************************************************/
/*! exports provided: ParamTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamTypes", function() { return ParamTypes; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _paramType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paramType */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/paramType.js");
/** @publicapi @module params */ /** */





/**
 * A registry for parameter types.
 *
 * This registry manages the built-in (and custom) parameter types.
 *
 * The built-in parameter types are:
 *
 * - [[string]]
 * - [[path]]
 * - [[query]]
 * - [[hash]]
 * - [[int]]
 * - [[bool]]
 * - [[date]]
 * - [[json]]
 * - [[any]]
 *
 * To register custom parameter types, use [[UrlConfig.type]], i.e.,
 *
 * ```js
 * router.urlService.config.type(customType)
 * ```
 */
var ParamTypes = /** @class */ (function () {
    /** @internalapi */
    function ParamTypes() {
        /** @hidden */
        this.enqueue = true;
        /** @hidden */
        this.typeQueue = [];
        /** @internalapi */
        this.defaultTypes = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["pick"])(ParamTypes.prototype, [
            'hash',
            'string',
            'query',
            'path',
            'int',
            'bool',
            'date',
            'json',
            'any',
        ]);
        // Register default types. Store them in the prototype of this.types.
        var makeType = function (definition, name) { return new _paramType__WEBPACK_IMPORTED_MODULE_4__["ParamType"](Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])({ name: name }, definition)); };
        this.types = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inherit"])(Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["map"])(this.defaultTypes, makeType), {});
    }
    /** @internalapi */
    ParamTypes.prototype.dispose = function () {
        this.types = {};
    };
    /**
     * Registers a parameter type
     *
     * End users should call [[UrlMatcherFactory.type]], which delegates to this method.
     */
    ParamTypes.prototype.type = function (name, definition, definitionFn) {
        if (!Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(definition))
            return this.types[name];
        if (this.types.hasOwnProperty(name))
            throw new Error("A type named '" + name + "' has already been defined.");
        this.types[name] = new _paramType__WEBPACK_IMPORTED_MODULE_4__["ParamType"](Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])({ name: name }, definition));
        if (definitionFn) {
            this.typeQueue.push({ name: name, def: definitionFn });
            if (!this.enqueue)
                this._flushTypeQueue();
        }
        return this;
    };
    /** @internalapi */
    ParamTypes.prototype._flushTypeQueue = function () {
        while (this.typeQueue.length) {
            var type = this.typeQueue.shift();
            if (type.pattern)
                throw new Error("You cannot override a type's .pattern at runtime.");
            Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(this.types[type.name], _common_coreservices__WEBPACK_IMPORTED_MODULE_3__["services"].$injector.invoke(type.def));
        }
    };
    return ParamTypes;
}());

/** @hidden */
function initDefaultTypes() {
    var makeDefaultType = function (def) {
        var valToString = function (val) { return (val != null ? val.toString() : val); };
        var defaultTypeBase = {
            encode: valToString,
            decode: valToString,
            is: Object(_common_hof__WEBPACK_IMPORTED_MODULE_2__["is"])(String),
            pattern: /.*/,
            // tslint:disable-next-line:triple-equals
            equals: function (a, b) { return a == b; },
        };
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, defaultTypeBase, def);
    };
    // Default Parameter Type Definitions
    Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(ParamTypes.prototype, {
        string: makeDefaultType({}),
        path: makeDefaultType({
            pattern: /[^/]*/,
        }),
        query: makeDefaultType({}),
        hash: makeDefaultType({
            inherit: false,
        }),
        int: makeDefaultType({
            decode: function (val) { return parseInt(val, 10); },
            is: function (val) {
                return !Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isNullOrUndefined"])(val) && this.decode(val.toString()) === val;
            },
            pattern: /-?\d+/,
        }),
        bool: makeDefaultType({
            encode: function (val) { return (val && 1) || 0; },
            decode: function (val) { return parseInt(val, 10) !== 0; },
            is: Object(_common_hof__WEBPACK_IMPORTED_MODULE_2__["is"])(Boolean),
            pattern: /0|1/,
        }),
        date: makeDefaultType({
            encode: function (val) {
                return !this.is(val)
                    ? undefined
                    : [val.getFullYear(), ('0' + (val.getMonth() + 1)).slice(-2), ('0' + val.getDate()).slice(-2)].join('-');
            },
            decode: function (val) {
                if (this.is(val))
                    return val;
                var match = this.capture.exec(val);
                return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
            },
            is: function (val) { return val instanceof Date && !isNaN(val.valueOf()); },
            equals: function (l, r) {
                return ['getFullYear', 'getMonth', 'getDate'].reduce(function (acc, fn) { return acc && l[fn]() === r[fn](); }, true);
            },
            pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
            capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/,
        }),
        json: makeDefaultType({
            encode: _common_common__WEBPACK_IMPORTED_MODULE_0__["toJson"],
            decode: _common_common__WEBPACK_IMPORTED_MODULE_0__["fromJson"],
            is: Object(_common_hof__WEBPACK_IMPORTED_MODULE_2__["is"])(Object),
            equals: _common_common__WEBPACK_IMPORTED_MODULE_0__["equals"],
            pattern: /[^/]*/,
        }),
        // does not encode/decode
        any: makeDefaultType({
            encode: _common_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
            decode: _common_common__WEBPACK_IMPORTED_MODULE_0__["identity"],
            is: function () { return true; },
            equals: _common_common__WEBPACK_IMPORTED_MODULE_0__["equals"],
        }),
    });
}
initDefaultTypes();
//# sourceMappingURL=paramTypes.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/stateParams.js":
/*!*******************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/stateParams.js ***!
  \*******************************************************************************************************/
/*! exports provided: StateParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateParams", function() { return StateParams; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/** @publicapi @module params */ /** */

/** @internalapi */
var StateParams = /** @class */ (function () {
    function StateParams(params) {
        if (params === void 0) { params = {}; }
        Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(this, params);
    }
    /**
     * Merges a set of parameters with all parameters inherited between the common parents of the
     * current state and a given destination state.
     *
     * @param {Object} newParams The set of parameters which will be composited with inherited params.
     * @param {Object} $current Internal definition of object representing the current state.
     * @param {Object} $to Internal definition of object representing state to transition to.
     */
    StateParams.prototype.$inherit = function (newParams, $current, $to) {
        var parentParams;
        var parents = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["ancestors"])($current, $to), inherited = {}, inheritList = [];
        for (var i in parents) {
            if (!parents[i] || !parents[i].params)
                continue;
            parentParams = Object.keys(parents[i].params);
            if (!parentParams.length)
                continue;
            for (var j in parentParams) {
                if (inheritList.indexOf(parentParams[j]) >= 0)
                    continue;
                inheritList.push(parentParams[j]);
                inherited[parentParams[j]] = this[parentParams[j]];
            }
        }
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, inherited, newParams);
    };
    return StateParams;
}());

//# sourceMappingURL=stateParams.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/index.js":
/*!***********************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/index.js ***!
  \***********************************************************************************************/
/*! exports provided: PathNode, PathUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pathNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pathNode */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathNode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PathNode", function() { return _pathNode__WEBPACK_IMPORTED_MODULE_0__["PathNode"]; });

/* harmony import */ var _pathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pathUtils */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PathUtils", function() { return _pathUtils__WEBPACK_IMPORTED_MODULE_1__["PathUtils"]; });

/** @internalapi @module path */ /** */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathNode.js":
/*!**************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathNode.js ***!
  \**************************************************************************************************/
/*! exports provided: PathNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathNode", function() { return PathNode; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _params_param__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../params/param */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/param.js");
/** @internalapi @module path */ /** */



/**
 * A node in a [[TreeChanges]] path
 *
 * For a [[TreeChanges]] path, this class holds the stateful information for a single node in the path.
 * Each PathNode corresponds to a state being entered, exited, or retained.
 * The stateful information includes parameter values and resolve data.
 */
var PathNode = /** @class */ (function () {
    function PathNode(stateOrNode) {
        if (stateOrNode instanceof PathNode) {
            var node = stateOrNode;
            this.state = node.state;
            this.paramSchema = node.paramSchema.slice();
            this.paramValues = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, node.paramValues);
            this.resolvables = node.resolvables.slice();
            this.views = node.views && node.views.slice();
        }
        else {
            var state = stateOrNode;
            this.state = state;
            this.paramSchema = state.parameters({ inherit: false });
            this.paramValues = {};
            this.resolvables = state.resolvables.map(function (res) { return res.clone(); });
        }
    }
    PathNode.prototype.clone = function () {
        return new PathNode(this);
    };
    /** Sets [[paramValues]] for the node, from the values of an object hash */
    PathNode.prototype.applyRawParams = function (params) {
        var getParamVal = function (paramDef) { return [paramDef.id, paramDef.value(params[paramDef.id])]; };
        this.paramValues = this.paramSchema.reduce(function (memo, pDef) { return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["applyPairs"])(memo, getParamVal(pDef)); }, {});
        return this;
    };
    /** Gets a specific [[Param]] metadata that belongs to the node */
    PathNode.prototype.parameter = function (name) {
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["find"])(this.paramSchema, Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["propEq"])('id', name));
    };
    /**
     * @returns true if the state and parameter values for another PathNode are
     * equal to the state and param values for this PathNode
     */
    PathNode.prototype.equals = function (node, paramsFn) {
        var diff = this.diff(node, paramsFn);
        return diff && diff.length === 0;
    };
    /**
     * Finds Params with different parameter values on another PathNode.
     *
     * Given another node (of the same state), finds the parameter values which differ.
     * Returns the [[Param]] (schema objects) whose parameter values differ.
     *
     * Given another node for a different state, returns `false`
     *
     * @param node The node to compare to
     * @param paramsFn A function that returns which parameters should be compared.
     * @returns The [[Param]]s which differ, or null if the two nodes are for different states
     */
    PathNode.prototype.diff = function (node, paramsFn) {
        if (this.state !== node.state)
            return false;
        var params = paramsFn ? paramsFn(this) : this.paramSchema;
        return _params_param__WEBPACK_IMPORTED_MODULE_2__["Param"].changed(params, this.paramValues, node.paramValues);
    };
    /**
     * Returns a clone of the PathNode
     * @deprecated use instance method `node.clone()`
     */
    PathNode.clone = function (node) { return node.clone(); };
    return PathNode;
}());

//# sourceMappingURL=pathNode.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathUtils.js":
/*!***************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathUtils.js ***!
  \***************************************************************************************************/
/*! exports provided: PathUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathUtils", function() { return PathUtils; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _state_targetState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/targetState */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/targetState.js");
/* harmony import */ var _pathNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pathNode */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathNode.js");
/** @internalapi @module path */ /** */




/**
 * This class contains functions which convert TargetStates, Nodes and paths from one type to another.
 */
var PathUtils = /** @class */ (function () {
    function PathUtils() {
    }
    /** Given a PathNode[], create an TargetState */
    PathUtils.makeTargetState = function (registry, path) {
        var state = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["tail"])(path).state;
        return new _state_targetState__WEBPACK_IMPORTED_MODULE_2__["TargetState"](registry, state, path.map(Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["prop"])('paramValues')).reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["mergeR"], {}), {});
    };
    PathUtils.buildPath = function (targetState) {
        var toParams = targetState.params();
        return targetState.$state().path.map(function (state) { return new _pathNode__WEBPACK_IMPORTED_MODULE_3__["PathNode"](state).applyRawParams(toParams); });
    };
    /** Given a fromPath: PathNode[] and a TargetState, builds a toPath: PathNode[] */
    PathUtils.buildToPath = function (fromPath, targetState) {
        var toPath = PathUtils.buildPath(targetState);
        if (targetState.options().inherit) {
            return PathUtils.inheritParams(fromPath, toPath, Object.keys(targetState.params()));
        }
        return toPath;
    };
    /**
     * Creates ViewConfig objects and adds to nodes.
     *
     * On each [[PathNode]], creates ViewConfig objects from the views: property of the node's state
     */
    PathUtils.applyViewConfigs = function ($view, path, states) {
        // Only apply the viewConfigs to the nodes for the given states
        path
            .filter(function (node) { return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inArray"])(states, node.state); })
            .forEach(function (node) {
            var viewDecls = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["values"])(node.state.views || {});
            var subPath = PathUtils.subPath(path, function (n) { return n === node; });
            var viewConfigs = viewDecls.map(function (view) { return $view.createViewConfig(subPath, view); });
            node.views = viewConfigs.reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], []);
        });
    };
    /**
     * Given a fromPath and a toPath, returns a new to path which inherits parameters from the fromPath
     *
     * For a parameter in a node to be inherited from the from path:
     * - The toPath's node must have a matching node in the fromPath (by state).
     * - The parameter name must not be found in the toKeys parameter array.
     *
     * Note: the keys provided in toKeys are intended to be those param keys explicitly specified by some
     * caller, for instance, $state.transitionTo(..., toParams).  If a key was found in toParams,
     * it is not inherited from the fromPath.
     */
    PathUtils.inheritParams = function (fromPath, toPath, toKeys) {
        if (toKeys === void 0) { toKeys = []; }
        function nodeParamVals(path, state) {
            var node = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["find"])(path, Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["propEq"])('state', state));
            return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, node && node.paramValues);
        }
        var noInherit = fromPath
            .map(function (node) { return node.paramSchema; })
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], [])
            .filter(function (param) { return !param.inherit; })
            .map(Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["prop"])('id'));
        /**
         * Given an [[PathNode]] "toNode", return a new [[PathNode]] with param values inherited from the
         * matching node in fromPath.  Only inherit keys that aren't found in "toKeys" from the node in "fromPath""
         */
        function makeInheritedParamsNode(toNode) {
            // All param values for the node (may include default key/vals, when key was not found in toParams)
            var toParamVals = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, toNode && toNode.paramValues);
            // limited to only those keys found in toParams
            var incomingParamVals = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["pick"])(toParamVals, toKeys);
            toParamVals = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["omit"])(toParamVals, toKeys);
            var fromParamVals = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["omit"])(nodeParamVals(fromPath, toNode.state) || {}, noInherit);
            // extend toParamVals with any fromParamVals, then override any of those those with incomingParamVals
            var ownParamVals = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(toParamVals, fromParamVals, incomingParamVals);
            return new _pathNode__WEBPACK_IMPORTED_MODULE_3__["PathNode"](toNode.state).applyRawParams(ownParamVals);
        }
        // The param keys specified by the incoming toParams
        return toPath.map(makeInheritedParamsNode);
    };
    /**
     * Computes the tree changes (entering, exiting) between a fromPath and toPath.
     */
    PathUtils.treeChanges = function (fromPath, toPath, reloadState) {
        var max = Math.min(fromPath.length, toPath.length);
        var keep = 0;
        var nodesMatch = function (node1, node2) { return node1.equals(node2, PathUtils.nonDynamicParams); };
        while (keep < max && fromPath[keep].state !== reloadState && nodesMatch(fromPath[keep], toPath[keep])) {
            keep++;
        }
        /** Given a retained node, return a new node which uses the to node's param values */
        function applyToParams(retainedNode, idx) {
            var cloned = retainedNode.clone();
            cloned.paramValues = toPath[idx].paramValues;
            return cloned;
        }
        var from, retained, exiting, entering, to;
        from = fromPath;
        retained = from.slice(0, keep);
        exiting = from.slice(keep);
        // Create a new retained path (with shallow copies of nodes) which have the params of the toPath mapped
        var retainedWithToParams = retained.map(applyToParams);
        entering = toPath.slice(keep);
        to = retainedWithToParams.concat(entering);
        return { from: from, to: to, retained: retained, retainedWithToParams: retainedWithToParams, exiting: exiting, entering: entering };
    };
    /**
     * Returns a new path which is: the subpath of the first path which matches the second path.
     *
     * The new path starts from root and contains any nodes that match the nodes in the second path.
     * It stops before the first non-matching node.
     *
     * Nodes are compared using their state property and their parameter values.
     * If a `paramsFn` is provided, only the [[Param]] returned by the function will be considered when comparing nodes.
     *
     * @param pathA the first path
     * @param pathB the second path
     * @param paramsFn a function which returns the parameters to consider when comparing
     *
     * @returns an array of PathNodes from the first path which match the nodes in the second path
     */
    PathUtils.matching = function (pathA, pathB, paramsFn) {
        var done = false;
        var tuples = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["arrayTuples"])(pathA, pathB);
        return tuples.reduce(function (matching, _a) {
            var nodeA = _a[0], nodeB = _a[1];
            done = done || !nodeA.equals(nodeB, paramsFn);
            return done ? matching : matching.concat(nodeA);
        }, []);
    };
    /**
     * Returns true if two paths are identical.
     *
     * @param pathA
     * @param pathB
     * @param paramsFn a function which returns the parameters to consider when comparing
     * @returns true if the the states and parameter values for both paths are identical
     */
    PathUtils.equals = function (pathA, pathB, paramsFn) {
        return pathA.length === pathB.length && PathUtils.matching(pathA, pathB, paramsFn).length === pathA.length;
    };
    /**
     * Return a subpath of a path, which stops at the first matching node
     *
     * Given an array of nodes, returns a subset of the array starting from the first node,
     * stopping when the first node matches the predicate.
     *
     * @param path a path of [[PathNode]]s
     * @param predicate a [[Predicate]] fn that matches [[PathNode]]s
     * @returns a subpath up to the matching node, or undefined if no match is found
     */
    PathUtils.subPath = function (path, predicate) {
        var node = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["find"])(path, predicate);
        var elementIdx = path.indexOf(node);
        return elementIdx === -1 ? undefined : path.slice(0, elementIdx + 1);
    };
    PathUtils.nonDynamicParams = function (node) {
        return node.state.parameters({ inherit: false }).filter(function (param) { return !param.dynamic; });
    };
    /** Gets the raw parameter values from a path */
    PathUtils.paramValues = function (path) { return path.reduce(function (acc, node) { return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(acc, node.paramValues); }, {}); };
    return PathUtils;
}());

//# sourceMappingURL=pathUtils.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/index.js ***!
  \**************************************************************************************************/
/*! exports provided: resolvePolicies, defaultResolvePolicy, Resolvable, NATIVE_INJECTOR_TOKEN, ResolveContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/interface.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolvePolicies", function() { return _interface__WEBPACK_IMPORTED_MODULE_0__["resolvePolicies"]; });

/* harmony import */ var _resolvable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolvable */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolvable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultResolvePolicy", function() { return _resolvable__WEBPACK_IMPORTED_MODULE_1__["defaultResolvePolicy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Resolvable", function() { return _resolvable__WEBPACK_IMPORTED_MODULE_1__["Resolvable"]; });

/* harmony import */ var _resolveContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolveContext */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolveContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NATIVE_INJECTOR_TOKEN", function() { return _resolveContext__WEBPACK_IMPORTED_MODULE_2__["NATIVE_INJECTOR_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResolveContext", function() { return _resolveContext__WEBPACK_IMPORTED_MODULE_2__["ResolveContext"]; });

/** @publicapi @module resolve */ /** */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/interface.js":
/*!******************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/interface.js ***!
  \******************************************************************************************************/
/*! exports provided: resolvePolicies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvePolicies", function() { return resolvePolicies; });
/** @internalapi */
var resolvePolicies = {
    when: {
        LAZY: 'LAZY',
        EAGER: 'EAGER',
    },
    async: {
        WAIT: 'WAIT',
        NOWAIT: 'NOWAIT',
        RXWAIT: 'RXWAIT',
    },
};
//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolvable.js":
/*!*******************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolvable.js ***!
  \*******************************************************************************************************/
/*! exports provided: defaultResolvePolicy, Resolvable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultResolvePolicy", function() { return defaultResolvePolicy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resolvable", function() { return Resolvable; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/trace */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/trace.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/** @publicapi @module resolve */ /** */






// TODO: explicitly make this user configurable
var defaultResolvePolicy = {
    when: 'LAZY',
    async: 'WAIT',
};
/**
 * The basic building block for the resolve system.
 *
 * Resolvables encapsulate a state's resolve's resolveFn, the resolveFn's declared dependencies, the wrapped (.promise),
 * and the unwrapped-when-complete (.data) result of the resolveFn.
 *
 * Resolvable.get() either retrieves the Resolvable's existing promise, or else invokes resolve() (which invokes the
 * resolveFn) and returns the resulting promise.
 *
 * Resolvable.get() and Resolvable.resolve() both execute within a context path, which is passed as the first
 * parameter to those fns.
 */
var Resolvable = /** @class */ (function () {
    function Resolvable(arg1, resolveFn, deps, policy, data) {
        this.resolved = false;
        this.promise = undefined;
        if (arg1 instanceof Resolvable) {
            Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(this, arg1);
        }
        else if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(resolveFn)) {
            if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(arg1))
                throw new Error('new Resolvable(): token argument is required');
            if (!Object(_common_predicates__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(resolveFn))
                throw new Error('new Resolvable(): resolveFn argument must be a function');
            this.token = arg1;
            this.policy = policy;
            this.resolveFn = resolveFn;
            this.deps = deps || [];
            this.data = data;
            this.resolved = data !== undefined;
            this.promise = this.resolved ? _common_coreservices__WEBPACK_IMPORTED_MODULE_1__["services"].$q.when(this.data) : undefined;
        }
        else if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_4__["isObject"])(arg1) && arg1.token && (arg1.hasOwnProperty('resolveFn') || arg1.hasOwnProperty('data'))) {
            var literal = arg1;
            return new Resolvable(literal.token, literal.resolveFn, literal.deps, literal.policy, literal.data);
        }
    }
    Resolvable.prototype.getPolicy = function (state) {
        var thisPolicy = this.policy || {};
        var statePolicy = (state && state.resolvePolicy) || {};
        return {
            when: thisPolicy.when || statePolicy.when || defaultResolvePolicy.when,
            async: thisPolicy.async || statePolicy.async || defaultResolvePolicy.async,
        };
    };
    /**
     * Asynchronously resolve this Resolvable's data
     *
     * Given a ResolveContext that this Resolvable is found in:
     * Wait for this Resolvable's dependencies, then invoke this Resolvable's function
     * and update the Resolvable's state
     */
    Resolvable.prototype.resolve = function (resolveContext, trans) {
        var _this = this;
        var $q = _common_coreservices__WEBPACK_IMPORTED_MODULE_1__["services"].$q;
        // Gets all dependencies from ResolveContext and wait for them to be resolved
        var getResolvableDependencies = function () {
            return $q.all(resolveContext.getDependencies(_this).map(function (resolvable) { return resolvable.get(resolveContext, trans); }));
        };
        // Invokes the resolve function passing the resolved dependencies as arguments
        var invokeResolveFn = function (resolvedDeps) { return _this.resolveFn.apply(null, resolvedDeps); };
        // If the resolve policy is RXWAIT, wait for the observable to emit something. otherwise pass through.
        var node = resolveContext.findNode(this);
        var state = node && node.state;
        var asyncPolicy = this.getPolicy(state).async;
        var customAsyncPolicy = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_4__["isFunction"])(asyncPolicy) ? asyncPolicy : _common_common__WEBPACK_IMPORTED_MODULE_0__["identity"];
        // After the final value has been resolved, update the state of the Resolvable
        var applyResolvedValue = function (resolvedValue) {
            _this.data = resolvedValue;
            _this.resolved = true;
            _this.resolveFn = null;
            _common_trace__WEBPACK_IMPORTED_MODULE_2__["trace"].traceResolvableResolved(_this, trans);
            return _this.data;
        };
        // Sets the promise property first, then getsResolvableDependencies in the context of the promise chain. Always waits one tick.
        return (this.promise = $q
            .when()
            .then(getResolvableDependencies)
            .then(invokeResolveFn)
            .then(customAsyncPolicy)
            .then(applyResolvedValue));
    };
    /**
     * Gets a promise for this Resolvable's data.
     *
     * Fetches the data and returns a promise.
     * Returns the existing promise if it has already been fetched once.
     */
    Resolvable.prototype.get = function (resolveContext, trans) {
        return this.promise || this.resolve(resolveContext, trans);
    };
    Resolvable.prototype.toString = function () {
        return "Resolvable(token: " + Object(_common_strings__WEBPACK_IMPORTED_MODULE_3__["stringify"])(this.token) + ", requires: [" + this.deps.map(_common_strings__WEBPACK_IMPORTED_MODULE_3__["stringify"]) + "])";
    };
    Resolvable.prototype.clone = function () {
        return new Resolvable(this);
    };
    Resolvable.fromData = function (token, data) { return new Resolvable(token, function () { return data; }, null, null, data); };
    return Resolvable;
}());

//# sourceMappingURL=resolvable.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolveContext.js":
/*!***********************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolveContext.js ***!
  \***********************************************************************************************************/
/*! exports provided: NATIVE_INJECTOR_TOKEN, ResolveContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NATIVE_INJECTOR_TOKEN", function() { return NATIVE_INJECTOR_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveContext", function() { return ResolveContext; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/trace */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/trace.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/interface.js");
/* harmony import */ var _resolvable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resolvable */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolvable.js");
/* harmony import */ var _path_pathUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../path/pathUtils */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathUtils.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/** @publicapi @module resolve */ /** */









var whens = _interface__WEBPACK_IMPORTED_MODULE_4__["resolvePolicies"].when;
var ALL_WHENS = [whens.EAGER, whens.LAZY];
var EAGER_WHENS = [whens.EAGER];
// tslint:disable-next-line:no-inferrable-types
var NATIVE_INJECTOR_TOKEN = 'Native Injector';
/**
 * Encapsulates Dependency Injection for a path of nodes
 *
 * UI-Router states are organized as a tree.
 * A nested state has a path of ancestors to the root of the tree.
 * When a state is being activated, each element in the path is wrapped as a [[PathNode]].
 * A `PathNode` is a stateful object that holds things like parameters and resolvables for the state being activated.
 *
 * The ResolveContext closes over the [[PathNode]]s, and provides DI for the last node in the path.
 */
var ResolveContext = /** @class */ (function () {
    function ResolveContext(_path) {
        this._path = _path;
    }
    /** Gets all the tokens found in the resolve context, de-duplicated */
    ResolveContext.prototype.getTokens = function () {
        return this._path.reduce(function (acc, node) { return acc.concat(node.resolvables.map(function (r) { return r.token; })); }, []).reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["uniqR"], []);
    };
    /**
     * Gets the Resolvable that matches the token
     *
     * Gets the last Resolvable that matches the token in this context, or undefined.
     * Throws an error if it doesn't exist in the ResolveContext
     */
    ResolveContext.prototype.getResolvable = function (token) {
        var matching = this._path
            .map(function (node) { return node.resolvables; })
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], [])
            .filter(function (r) { return r.token === token; });
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["tail"])(matching);
    };
    /** Returns the [[ResolvePolicy]] for the given [[Resolvable]] */
    ResolveContext.prototype.getPolicy = function (resolvable) {
        var node = this.findNode(resolvable);
        return resolvable.getPolicy(node.state);
    };
    /**
     * Returns a ResolveContext that includes a portion of this one
     *
     * Given a state, this method creates a new ResolveContext from this one.
     * The new context starts at the first node (root) and stops at the node for the `state` parameter.
     *
     * #### Why
     *
     * When a transition is created, the nodes in the "To Path" are injected from a ResolveContext.
     * A ResolveContext closes over a path of [[PathNode]]s and processes the resolvables.
     * The "To State" can inject values from its own resolvables, as well as those from all its ancestor state's (node's).
     * This method is used to create a narrower context when injecting ancestor nodes.
     *
     * @example
     * `let ABCD = new ResolveContext([A, B, C, D]);`
     *
     * Given a path `[A, B, C, D]`, where `A`, `B`, `C` and `D` are nodes for states `a`, `b`, `c`, `d`:
     * When injecting `D`, `D` should have access to all resolvables from `A`, `B`, `C`, `D`.
     * However, `B` should only be able to access resolvables from `A`, `B`.
     *
     * When resolving for the `B` node, first take the full "To Path" Context `[A,B,C,D]` and limit to the subpath `[A,B]`.
     * `let AB = ABCD.subcontext(a)`
     */
    ResolveContext.prototype.subContext = function (state) {
        return new ResolveContext(_path_pathUtils__WEBPACK_IMPORTED_MODULE_6__["PathUtils"].subPath(this._path, function (node) { return node.state === state; }));
    };
    /**
     * Adds Resolvables to the node that matches the state
     *
     * This adds a [[Resolvable]] (generally one created on the fly; not declared on a [[StateDeclaration.resolve]] block).
     * The resolvable is added to the node matching the `state` parameter.
     *
     * These new resolvables are not automatically fetched.
     * The calling code should either fetch them, fetch something that depends on them,
     * or rely on [[resolvePath]] being called when some state is being entered.
     *
     * Note: each resolvable's [[ResolvePolicy]] is merged with the state's policy, and the global default.
     *
     * @param newResolvables the new Resolvables
     * @param state Used to find the node to put the resolvable on
     */
    ResolveContext.prototype.addResolvables = function (newResolvables, state) {
        var node = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["find"])(this._path, Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["propEq"])('state', state));
        var keys = newResolvables.map(function (r) { return r.token; });
        node.resolvables = node.resolvables.filter(function (r) { return keys.indexOf(r.token) === -1; }).concat(newResolvables);
    };
    /**
     * Returns a promise for an array of resolved path Element promises
     *
     * @param when
     * @param trans
     * @returns {Promise<any>|any}
     */
    ResolveContext.prototype.resolvePath = function (when, trans) {
        var _this = this;
        if (when === void 0) { when = 'LAZY'; }
        // This option determines which 'when' policy Resolvables we are about to fetch.
        var whenOption = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inArray"])(ALL_WHENS, when) ? when : 'LAZY';
        // If the caller specified EAGER, only the EAGER Resolvables are fetched.
        // if the caller specified LAZY, both EAGER and LAZY Resolvables are fetched.`
        var matchedWhens = whenOption === _interface__WEBPACK_IMPORTED_MODULE_4__["resolvePolicies"].when.EAGER ? EAGER_WHENS : ALL_WHENS;
        // get the subpath to the state argument, if provided
        _common_trace__WEBPACK_IMPORTED_MODULE_2__["trace"].traceResolvePath(this._path, when, trans);
        var matchesPolicy = function (acceptedVals, whenOrAsync) { return function (resolvable) {
            return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inArray"])(acceptedVals, _this.getPolicy(resolvable)[whenOrAsync]);
        }; };
        // Trigger all the (matching) Resolvables in the path
        // Reduce all the "WAIT" Resolvables into an array
        var promises = this._path.reduce(function (acc, node) {
            var nodeResolvables = node.resolvables.filter(matchesPolicy(matchedWhens, 'when'));
            var nowait = nodeResolvables.filter(matchesPolicy(['NOWAIT'], 'async'));
            var wait = nodeResolvables.filter(Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["not"])(matchesPolicy(['NOWAIT'], 'async')));
            // For the matching Resolvables, start their async fetch process.
            var subContext = _this.subContext(node.state);
            var getResult = function (r) {
                return r
                    .get(subContext, trans)
                    // Return a tuple that includes the Resolvable's token
                    .then(function (value) { return ({ token: r.token, value: value }); });
            };
            nowait.forEach(getResult);
            return acc.concat(wait.map(getResult));
        }, []);
        // Wait for all the "WAIT" resolvables
        return _common_coreservices__WEBPACK_IMPORTED_MODULE_3__["services"].$q.all(promises);
    };
    ResolveContext.prototype.injector = function () {
        return this._injector || (this._injector = new UIInjectorImpl(this));
    };
    ResolveContext.prototype.findNode = function (resolvable) {
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["find"])(this._path, function (node) { return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inArray"])(node.resolvables, resolvable); });
    };
    /**
     * Gets the async dependencies of a Resolvable
     *
     * Given a Resolvable, returns its dependencies as a Resolvable[]
     */
    ResolveContext.prototype.getDependencies = function (resolvable) {
        var _this = this;
        var node = this.findNode(resolvable);
        // Find which other resolvables are "visible" to the `resolvable` argument
        // subpath stopping at resolvable's node, or the whole path (if the resolvable isn't in the path)
        var subPath = _path_pathUtils__WEBPACK_IMPORTED_MODULE_6__["PathUtils"].subPath(this._path, function (x) { return x === node; }) || this._path;
        var availableResolvables = subPath
            .reduce(function (acc, _node) { return acc.concat(_node.resolvables); }, []) // all of subpath's resolvables
            .filter(function (res) { return res !== resolvable; }); // filter out the `resolvable` argument
        var getDependency = function (token) {
            var matching = availableResolvables.filter(function (r) { return r.token === token; });
            if (matching.length)
                return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["tail"])(matching);
            var fromInjector = _this.injector().getNative(token);
            if (Object(_common__WEBPACK_IMPORTED_MODULE_8__["isUndefined"])(fromInjector)) {
                throw new Error('Could not find Dependency Injection token: ' + Object(_common_strings__WEBPACK_IMPORTED_MODULE_7__["stringify"])(token));
            }
            return new _resolvable__WEBPACK_IMPORTED_MODULE_5__["Resolvable"](token, function () { return fromInjector; }, [], fromInjector);
        };
        return resolvable.deps.map(getDependency);
    };
    return ResolveContext;
}());

/** @internalapi */
var UIInjectorImpl = /** @class */ (function () {
    function UIInjectorImpl(context) {
        this.context = context;
        this.native = this.get(NATIVE_INJECTOR_TOKEN) || _common_coreservices__WEBPACK_IMPORTED_MODULE_3__["services"].$injector;
    }
    UIInjectorImpl.prototype.get = function (token) {
        var resolvable = this.context.getResolvable(token);
        if (resolvable) {
            if (this.context.getPolicy(resolvable).async === 'NOWAIT') {
                return resolvable.get(this.context);
            }
            if (!resolvable.resolved) {
                throw new Error('Resolvable async .get() not complete:' + Object(_common_strings__WEBPACK_IMPORTED_MODULE_7__["stringify"])(resolvable.token));
            }
            return resolvable.data;
        }
        return this.getNative(token);
    };
    UIInjectorImpl.prototype.getAsync = function (token) {
        var resolvable = this.context.getResolvable(token);
        if (resolvable)
            return resolvable.get(this.context);
        return _common_coreservices__WEBPACK_IMPORTED_MODULE_3__["services"].$q.when(this.native.get(token));
    };
    UIInjectorImpl.prototype.getNative = function (token) {
        return this.native && this.native.get(token);
    };
    return UIInjectorImpl;
}());
//# sourceMappingURL=resolveContext.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/router.js":
/*!*******************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/router.js ***!
  \*******************************************************************************************/
/*! exports provided: UIRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIRouter", function() { return UIRouter; });
/* harmony import */ var _url_urlMatcherFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url/urlMatcherFactory */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlMatcherFactory.js");
/* harmony import */ var _url_urlRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url/urlRouter */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRouter.js");
/* harmony import */ var _transition_transitionService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transition/transitionService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionService.js");
/* harmony import */ var _view_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/view */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/view/view.js");
/* harmony import */ var _state_stateRegistry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/stateRegistry */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateRegistry.js");
/* harmony import */ var _state_stateService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state/stateService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateService.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./globals */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/globals.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _url_urlService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./url/urlService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlService.js");
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/trace */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/trace.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/** @publicapi @module core */ /** */












/** @hidden */
var _routerInstance = 0;
/** @hidden */
var locSvcFns = ['url', 'path', 'search', 'hash', 'onChange'];
/** @hidden */
var locCfgFns = ['port', 'protocol', 'host', 'baseHref', 'html5Mode', 'hashPrefix'];
/** @hidden */
var locationServiceStub = Object(_common__WEBPACK_IMPORTED_MODULE_11__["makeStub"])('LocationServices', locSvcFns);
/** @hidden */
var locationConfigStub = Object(_common__WEBPACK_IMPORTED_MODULE_11__["makeStub"])('LocationConfig', locCfgFns);
/**
 * The master class used to instantiate an instance of UI-Router.
 *
 * UI-Router (for each specific framework) will create an instance of this class during bootstrap.
 * This class instantiates and wires the UI-Router services together.
 *
 * After a new instance of the UIRouter class is created, it should be configured for your app.
 * For instance, app states should be registered with the [[UIRouter.stateRegistry]].
 *
 * ---
 *
 * Normally the framework code will bootstrap UI-Router.
 * If you are bootstrapping UIRouter manually, tell it to monitor the URL by calling
 * [[UrlService.listen]] then [[UrlService.sync]].
 */
var UIRouter = /** @class */ (function () {
    /**
     * Creates a new `UIRouter` object
     *
     * @param locationService a [[LocationServices]] implementation
     * @param locationConfig a [[LocationConfig]] implementation
     * @internalapi
     */
    function UIRouter(locationService, locationConfig) {
        if (locationService === void 0) { locationService = locationServiceStub; }
        if (locationConfig === void 0) { locationConfig = locationConfigStub; }
        this.locationService = locationService;
        this.locationConfig = locationConfig;
        /** @hidden */ this.$id = _routerInstance++;
        /** @hidden */ this._disposed = false;
        /** @hidden */ this._disposables = [];
        /** Provides trace information to the console */
        this.trace = _common_trace__WEBPACK_IMPORTED_MODULE_10__["trace"];
        /** Provides services related to ui-view synchronization */
        this.viewService = new _view_view__WEBPACK_IMPORTED_MODULE_3__["ViewService"](this);
        /** Global router state */
        this.globals = new _globals__WEBPACK_IMPORTED_MODULE_6__["UIRouterGlobals"]();
        /** Provides services related to Transitions */
        this.transitionService = new _transition_transitionService__WEBPACK_IMPORTED_MODULE_2__["TransitionService"](this);
        /**
         * Deprecated for public use. Use [[urlService]] instead.
         * @deprecated Use [[urlService]] instead
         */
        this.urlMatcherFactory = new _url_urlMatcherFactory__WEBPACK_IMPORTED_MODULE_0__["UrlMatcherFactory"](this);
        /**
         * Deprecated for public use. Use [[urlService]] instead.
         * @deprecated Use [[urlService]] instead
         */
        this.urlRouter = new _url_urlRouter__WEBPACK_IMPORTED_MODULE_1__["UrlRouter"](this);
        /** Provides services related to the URL */
        this.urlService = new _url_urlService__WEBPACK_IMPORTED_MODULE_9__["UrlService"](this);
        /** Provides a registry for states, and related registration services */
        this.stateRegistry = new _state_stateRegistry__WEBPACK_IMPORTED_MODULE_4__["StateRegistry"](this);
        /** Provides services related to states */
        this.stateService = new _state_stateService__WEBPACK_IMPORTED_MODULE_5__["StateService"](this);
        /** @hidden plugin instances are registered here */
        this._plugins = {};
        this.viewService._pluginapi._rootViewContext(this.stateRegistry.root());
        this.globals.$current = this.stateRegistry.root();
        this.globals.current = this.globals.$current.self;
        this.disposable(this.globals);
        this.disposable(this.stateService);
        this.disposable(this.stateRegistry);
        this.disposable(this.transitionService);
        this.disposable(this.urlService);
        this.disposable(locationService);
        this.disposable(locationConfig);
    }
    /** Registers an object to be notified when the router is disposed */
    UIRouter.prototype.disposable = function (disposable) {
        this._disposables.push(disposable);
    };
    /**
     * Disposes this router instance
     *
     * When called, clears resources retained by the router by calling `dispose(this)` on all
     * registered [[disposable]] objects.
     *
     * Or, if a `disposable` object is provided, calls `dispose(this)` on that object only.
     *
     * @param disposable (optional) the disposable to dispose
     */
    UIRouter.prototype.dispose = function (disposable) {
        var _this = this;
        if (disposable && Object(_common_predicates__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(disposable.dispose)) {
            disposable.dispose(this);
            return undefined;
        }
        this._disposed = true;
        this._disposables.slice().forEach(function (d) {
            try {
                typeof d.dispose === 'function' && d.dispose(_this);
                Object(_common_common__WEBPACK_IMPORTED_MODULE_7__["removeFrom"])(_this._disposables, d);
            }
            catch (ignored) { }
        });
    };
    /**
     * Adds a plugin to UI-Router
     *
     * This method adds a UI-Router Plugin.
     * A plugin can enhance or change UI-Router behavior using any public API.
     *
     * #### Example:
     * ```js
     * import { MyCoolPlugin } from "ui-router-cool-plugin";
     *
     * var plugin = router.addPlugin(MyCoolPlugin);
     * ```
     *
     * ### Plugin authoring
     *
     * A plugin is simply a class (or constructor function) which accepts a [[UIRouter]] instance and (optionally) an options object.
     *
     * The plugin can implement its functionality using any of the public APIs of [[UIRouter]].
     * For example, it may configure router options or add a Transition Hook.
     *
     * The plugin can then be published as a separate module.
     *
     * #### Example:
     * ```js
     * export class MyAuthPlugin implements UIRouterPlugin {
     *   constructor(router: UIRouter, options: any) {
     *     this.name = "MyAuthPlugin";
     *     let $transitions = router.transitionService;
     *     let $state = router.stateService;
     *
     *     let authCriteria = {
     *       to: (state) => state.data && state.data.requiresAuth
     *     };
     *
     *     function authHook(transition: Transition) {
     *       let authService = transition.injector().get('AuthService');
     *       if (!authService.isAuthenticated()) {
     *         return $state.target('login');
     *       }
     *     }
     *
     *     $transitions.onStart(authCriteria, authHook);
     *   }
     * }
     * ```
     *
     * @param plugin one of:
     *        - a plugin class which implements [[UIRouterPlugin]]
     *        - a constructor function for a [[UIRouterPlugin]] which accepts a [[UIRouter]] instance
     *        - a factory function which accepts a [[UIRouter]] instance and returns a [[UIRouterPlugin]] instance
     * @param options options to pass to the plugin class/factory
     * @returns the registered plugin instance
     */
    UIRouter.prototype.plugin = function (plugin, options) {
        if (options === void 0) { options = {}; }
        var pluginInstance = new plugin(this, options);
        if (!pluginInstance.name)
            throw new Error('Required property `name` missing on plugin: ' + pluginInstance);
        this._disposables.push(pluginInstance);
        return (this._plugins[pluginInstance.name] = pluginInstance);
    };
    UIRouter.prototype.getPlugin = function (pluginName) {
        return pluginName ? this._plugins[pluginName] : Object(_common_common__WEBPACK_IMPORTED_MODULE_7__["values"])(this._plugins);
    };
    return UIRouter;
}());

//# sourceMappingURL=router.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/index.js":
/*!************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/index.js ***!
  \************************************************************************************************/
/*! exports provided: resolvablesBuilder, StateBuilder, StateObject, StateMatcher, StateQueueManager, StateRegistry, StateService, TargetState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stateBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stateBuilder */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateBuilder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolvablesBuilder", function() { return _stateBuilder__WEBPACK_IMPORTED_MODULE_0__["resolvablesBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateBuilder", function() { return _stateBuilder__WEBPACK_IMPORTED_MODULE_0__["StateBuilder"]; });

/* harmony import */ var _stateObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateObject */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateObject", function() { return _stateObject__WEBPACK_IMPORTED_MODULE_1__["StateObject"]; });

/* harmony import */ var _stateMatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stateMatcher */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateMatcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateMatcher", function() { return _stateMatcher__WEBPACK_IMPORTED_MODULE_2__["StateMatcher"]; });

/* harmony import */ var _stateQueueManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stateQueueManager */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateQueueManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateQueueManager", function() { return _stateQueueManager__WEBPACK_IMPORTED_MODULE_3__["StateQueueManager"]; });

/* harmony import */ var _stateRegistry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stateRegistry */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateRegistry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateRegistry", function() { return _stateRegistry__WEBPACK_IMPORTED_MODULE_4__["StateRegistry"]; });

/* harmony import */ var _stateService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stateService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return _stateService__WEBPACK_IMPORTED_MODULE_5__["StateService"]; });

/* harmony import */ var _targetState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./targetState */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/targetState.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TargetState", function() { return _targetState__WEBPACK_IMPORTED_MODULE_6__["TargetState"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateBuilder.js":
/*!*******************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateBuilder.js ***!
  \*******************************************************************************************************/
/*! exports provided: resolvablesBuilder, StateBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvablesBuilder", function() { return resolvablesBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateBuilder", function() { return StateBuilder; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resolve/resolvable */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolvable.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/** @publicapi @module state */ /** */






var parseUrl = function (url) {
    if (!Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"])(url))
        return false;
    var root = url.charAt(0) === '^';
    return { val: root ? url.substring(1) : url, root: root };
};
function nameBuilder(state) {
    return state.name;
}
function selfBuilder(state) {
    state.self.$$state = function () { return state; };
    return state.self;
}
function dataBuilder(state) {
    if (state.parent && state.parent.data) {
        state.data = state.self.data = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inherit"])(state.parent.data, state.data);
    }
    return state.data;
}
var getUrlBuilder = function ($urlMatcherFactoryProvider, root) {
    return function urlBuilder(stateObject) {
        var stateDec = stateObject.self;
        // For future states, i.e., states whose name ends with `.**`,
        // match anything that starts with the url prefix
        if (stateDec && stateDec.url && stateDec.name && stateDec.name.match(/\.\*\*$/)) {
            var newStateDec = {};
            Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["copy"])(stateDec, newStateDec);
            newStateDec.url += '{remainder:any}'; // match any path (.*)
            stateDec = newStateDec;
        }
        var parent = stateObject.parent;
        var parsed = parseUrl(stateDec.url);
        var url = !parsed ? stateDec.url : $urlMatcherFactoryProvider.compile(parsed.val, { state: stateDec });
        if (!url)
            return null;
        if (!$urlMatcherFactoryProvider.isMatcher(url))
            throw new Error("Invalid url '" + url + "' in state '" + stateObject + "'");
        return parsed && parsed.root ? url : ((parent && parent.navigable) || root()).url.append(url);
    };
};
var getNavigableBuilder = function (isRoot) {
    return function navigableBuilder(state) {
        return !isRoot(state) && state.url ? state : state.parent ? state.parent.navigable : null;
    };
};
var getParamsBuilder = function (paramFactory) {
    return function paramsBuilder(state) {
        var makeConfigParam = function (config, id) { return paramFactory.fromConfig(id, null, state.self); };
        var urlParams = (state.url && state.url.parameters({ inherit: false })) || [];
        var nonUrlParams = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["values"])(Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["mapObj"])(Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["omit"])(state.params || {}, urlParams.map(Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["prop"])('id'))), makeConfigParam));
        return urlParams
            .concat(nonUrlParams)
            .map(function (p) { return [p.id, p]; })
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["applyPairs"], {});
    };
};
function pathBuilder(state) {
    return state.parent ? state.parent.path.concat(state) : /*root*/ [state];
}
function includesBuilder(state) {
    var includes = state.parent ? Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, state.parent.includes) : {};
    includes[state.name] = true;
    return includes;
}
/**
 * This is a [[StateBuilder.builder]] function for the `resolve:` block on a [[StateDeclaration]].
 *
 * When the [[StateBuilder]] builds a [[StateObject]] object from a raw [[StateDeclaration]], this builder
 * validates the `resolve` property and converts it to a [[Resolvable]] array.
 *
 * resolve: input value can be:
 *
 * {
 *   // analyzed but not injected
 *   myFooResolve: function() { return "myFooData"; },
 *
 *   // function.toString() parsed, "DependencyName" dep as string (not min-safe)
 *   myBarResolve: function(DependencyName) { return DependencyName.fetchSomethingAsPromise() },
 *
 *   // Array split; "DependencyName" dep as string
 *   myBazResolve: [ "DependencyName", function(dep) { return dep.fetchSomethingAsPromise() },
 *
 *   // Array split; DependencyType dep as token (compared using ===)
 *   myQuxResolve: [ DependencyType, function(dep) { return dep.fetchSometingAsPromise() },
 *
 *   // val.$inject used as deps
 *   // where:
 *   //     corgeResolve.$inject = ["DependencyName"];
 *   //     function corgeResolve(dep) { dep.fetchSometingAsPromise() }
 *   // then "DependencyName" dep as string
 *   myCorgeResolve: corgeResolve,
 *
 *  // inject service by name
 *  // When a string is found, desugar creating a resolve that injects the named service
 *   myGraultResolve: "SomeService"
 * }
 *
 * or:
 *
 * [
 *   new Resolvable("myFooResolve", function() { return "myFooData" }),
 *   new Resolvable("myBarResolve", function(dep) { return dep.fetchSomethingAsPromise() }, [ "DependencyName" ]),
 *   { provide: "myBazResolve", useFactory: function(dep) { dep.fetchSomethingAsPromise() }, deps: [ "DependencyName" ] }
 * ]
 */
function resolvablesBuilder(state) {
    /** convert resolve: {} and resolvePolicy: {} objects to an array of tuples */
    var objects2Tuples = function (resolveObj, resolvePolicies) {
        return Object.keys(resolveObj || {}).map(function (token) { return ({
            token: token,
            val: resolveObj[token],
            deps: undefined,
            policy: resolvePolicies[token],
        }); });
    };
    /** fetch DI annotations from a function or ng1-style array */
    var annotate = function (fn) {
        var $injector = _common_coreservices__WEBPACK_IMPORTED_MODULE_5__["services"].$injector;
        // ng1 doesn't have an $injector until runtime.
        // If the $injector doesn't exist, use "deferred" literal as a
        // marker indicating they should be annotated when runtime starts
        return fn['$inject'] || ($injector && $injector.annotate(fn, $injector.strictDi)) || 'deferred';
    };
    /** true if the object has both `token` and `resolveFn`, and is probably a [[ResolveLiteral]] */
    var isResolveLiteral = function (obj) { return !!(obj.token && obj.resolveFn); };
    /** true if the object looks like a provide literal, or a ng2 Provider */
    var isLikeNg2Provider = function (obj) {
        return !!((obj.provide || obj.token) && (obj.useValue || obj.useFactory || obj.useExisting || obj.useClass));
    };
    /** true if the object looks like a tuple from obj2Tuples */
    var isTupleFromObj = function (obj) {
        return !!(obj && obj.val && (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"])(obj.val) || Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isArray"])(obj.val) || Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(obj.val)));
    };
    /** extracts the token from a Provider or provide literal */
    var getToken = function (p) { return p.provide || p.token; };
    // prettier-ignore: Given a literal resolve or provider object, returns a Resolvable
    var literal2Resolvable = Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["pattern"])([
        [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["prop"])('resolveFn'), function (p) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__["Resolvable"](getToken(p), p.resolveFn, p.deps, p.policy); }],
        [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["prop"])('useFactory'), function (p) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__["Resolvable"](getToken(p), p.useFactory, p.deps || p.dependencies, p.policy); }],
        [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["prop"])('useClass'), function (p) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__["Resolvable"](getToken(p), function () { return new p.useClass(); }, [], p.policy); }],
        [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["prop"])('useValue'), function (p) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__["Resolvable"](getToken(p), function () { return p.useValue; }, [], p.policy, p.useValue); }],
        [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["prop"])('useExisting'), function (p) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__["Resolvable"](getToken(p), _common_common__WEBPACK_IMPORTED_MODULE_0__["identity"], [p.useExisting], p.policy); }],
    ]);
    // prettier-ignore
    var tuple2Resolvable = Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["pattern"])([
        [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["pipe"])(Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["prop"])('val'), _common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"]), function (tuple) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__["Resolvable"](tuple.token, _common_common__WEBPACK_IMPORTED_MODULE_0__["identity"], [tuple.val], tuple.policy); }],
        [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["pipe"])(Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["prop"])('val'), _common_predicates__WEBPACK_IMPORTED_MODULE_1__["isArray"]), function (tuple) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__["Resolvable"](tuple.token, Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["tail"])(tuple.val), tuple.val.slice(0, -1), tuple.policy); }],
        [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["pipe"])(Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["prop"])('val'), _common_predicates__WEBPACK_IMPORTED_MODULE_1__["isFunction"]), function (tuple) { return new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__["Resolvable"](tuple.token, tuple.val, annotate(tuple.val), tuple.policy); }],
    ]);
    // prettier-ignore
    var item2Resolvable = Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["pattern"])([
        [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["is"])(_resolve_resolvable__WEBPACK_IMPORTED_MODULE_4__["Resolvable"]), function (r) { return r; }],
        [isResolveLiteral, literal2Resolvable],
        [isLikeNg2Provider, literal2Resolvable],
        [isTupleFromObj, tuple2Resolvable],
        [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["val"])(true), function (obj) { throw new Error('Invalid resolve value: ' + Object(_common_strings__WEBPACK_IMPORTED_MODULE_2__["stringify"])(obj)); },],
    ]);
    // If resolveBlock is already an array, use it as-is.
    // Otherwise, assume it's an object and convert to an Array of tuples
    var decl = state.resolve;
    var items = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isArray"])(decl) ? decl : objects2Tuples(decl, state.resolvePolicy || {});
    return items.map(item2Resolvable);
}
/**
 * @internalapi A internal global service
 *
 * StateBuilder is a factory for the internal [[StateObject]] objects.
 *
 * When you register a state with the [[StateRegistry]], you register a plain old javascript object which
 * conforms to the [[StateDeclaration]] interface.  This factory takes that object and builds the corresponding
 * [[StateObject]] object, which has an API and is used internally.
 *
 * Custom properties or API may be added to the internal [[StateObject]] object by registering a decorator function
 * using the [[builder]] method.
 */
var StateBuilder = /** @class */ (function () {
    function StateBuilder(matcher, urlMatcherFactory) {
        this.matcher = matcher;
        var self = this;
        var root = function () { return matcher.find(''); };
        var isRoot = function (state) { return state.name === ''; };
        function parentBuilder(state) {
            if (isRoot(state))
                return null;
            return matcher.find(self.parentName(state)) || root();
        }
        this.builders = {
            name: [nameBuilder],
            self: [selfBuilder],
            parent: [parentBuilder],
            data: [dataBuilder],
            // Build a URLMatcher if necessary, either via a relative or absolute URL
            url: [getUrlBuilder(urlMatcherFactory, root)],
            // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
            navigable: [getNavigableBuilder(isRoot)],
            params: [getParamsBuilder(urlMatcherFactory.paramFactory)],
            // Each framework-specific ui-router implementation should define its own `views` builder
            // e.g., src/ng1/statebuilders/views.ts
            views: [],
            // Keep a full path from the root down to this state as this is needed for state activation.
            path: [pathBuilder],
            // Speed up $state.includes() as it's used a lot
            includes: [includesBuilder],
            resolvables: [resolvablesBuilder],
        };
    }
    /**
     * Registers a [[BuilderFunction]] for a specific [[StateObject]] property (e.g., `parent`, `url`, or `path`).
     * More than one BuilderFunction can be registered for a given property.
     *
     * The BuilderFunction(s) will be used to define the property on any subsequently built [[StateObject]] objects.
     *
     * @param name The name of the State property being registered for.
     * @param fn The BuilderFunction which will be used to build the State property
     * @returns a function which deregisters the BuilderFunction
     */
    StateBuilder.prototype.builder = function (name, fn) {
        var builders = this.builders;
        var array = builders[name] || [];
        // Backwards compat: if only one builder exists, return it, else return whole arary.
        if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"])(name) && !Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(fn))
            return array.length > 1 ? array : array[0];
        if (!Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"])(name) || !Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(fn))
            return;
        builders[name] = array;
        builders[name].push(fn);
        return function () { return builders[name].splice(builders[name].indexOf(fn, 1)) && null; };
    };
    /**
     * Builds all of the properties on an essentially blank State object, returning a State object which has all its
     * properties and API built.
     *
     * @param state an uninitialized State object
     * @returns the built State object
     */
    StateBuilder.prototype.build = function (state) {
        var _a = this, matcher = _a.matcher, builders = _a.builders;
        var parent = this.parentName(state);
        if (parent && !matcher.find(parent, undefined, false)) {
            return null;
        }
        for (var key in builders) {
            if (!builders.hasOwnProperty(key))
                continue;
            var chain = builders[key].reduce(function (parentFn, step) { return function (_state) { return step(_state, parentFn); }; }, _common_common__WEBPACK_IMPORTED_MODULE_0__["noop"]);
            state[key] = chain(state);
        }
        return state;
    };
    StateBuilder.prototype.parentName = function (state) {
        // name = 'foo.bar.baz.**'
        var name = state.name || '';
        // segments = ['foo', 'bar', 'baz', '.**']
        var segments = name.split('.');
        // segments = ['foo', 'bar', 'baz']
        var lastSegment = segments.pop();
        // segments = ['foo', 'bar'] (ignore .** segment for future states)
        if (lastSegment === '**')
            segments.pop();
        if (segments.length) {
            if (state.parent) {
                throw new Error("States that specify the 'parent:' property should not have a '.' in their name (" + name + ")");
            }
            // 'foo.bar'
            return segments.join('.');
        }
        if (!state.parent)
            return '';
        return Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"])(state.parent) ? state.parent : state.parent.name;
    };
    StateBuilder.prototype.name = function (state) {
        var name = state.name;
        if (name.indexOf('.') !== -1 || !state.parent)
            return name;
        var parentName = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"])(state.parent) ? state.parent : state.parent.name;
        return parentName ? parentName + '.' + name : name;
    };
    return StateBuilder;
}());

//# sourceMappingURL=stateBuilder.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateMatcher.js":
/*!*******************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateMatcher.js ***!
  \*******************************************************************************************************/
/*! exports provided: StateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateMatcher", function() { return StateMatcher; });
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/** @publicapi @module state */ /** */


var StateMatcher = /** @class */ (function () {
    function StateMatcher(_states) {
        this._states = _states;
    }
    StateMatcher.prototype.isRelative = function (stateName) {
        stateName = stateName || '';
        return stateName.indexOf('.') === 0 || stateName.indexOf('^') === 0;
    };
    StateMatcher.prototype.find = function (stateOrName, base, matchGlob) {
        if (matchGlob === void 0) { matchGlob = true; }
        if (!stateOrName && stateOrName !== '')
            return undefined;
        var isStr = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_0__["isString"])(stateOrName);
        var name = isStr ? stateOrName : stateOrName.name;
        if (this.isRelative(name))
            name = this.resolvePath(name, base);
        var state = this._states[name];
        if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
            return state;
        }
        else if (isStr && matchGlob) {
            var _states = Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["values"])(this._states);
            var matches = _states.filter(function (_state) { return _state.__stateObjectCache.nameGlob && _state.__stateObjectCache.nameGlob.matches(name); });
            if (matches.length > 1) {
                // tslint:disable-next-line:no-console
                console.log("stateMatcher.find: Found multiple matches for " + name + " using glob: ", matches.map(function (match) { return match.name; }));
            }
            return matches[0];
        }
        return undefined;
    };
    StateMatcher.prototype.resolvePath = function (name, base) {
        if (!base)
            throw new Error("No reference point given for path '" + name + "'");
        var baseState = this.find(base);
        var splitName = name.split('.');
        var pathLength = splitName.length;
        var i = 0, current = baseState;
        for (; i < pathLength; i++) {
            if (splitName[i] === '' && i === 0) {
                current = baseState;
                continue;
            }
            if (splitName[i] === '^') {
                if (!current.parent)
                    throw new Error("Path '" + name + "' not valid for state '" + baseState.name + "'");
                current = current.parent;
                continue;
            }
            break;
        }
        var relName = splitName.slice(i).join('.');
        return current.name + (current.name && relName ? '.' : '') + relName;
    };
    return StateMatcher;
}());

//# sourceMappingURL=stateMatcher.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateObject.js":
/*!******************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateObject.js ***!
  \******************************************************************************************************/
/*! exports provided: StateObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateObject", function() { return StateObject; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_glob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/glob */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/glob.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");




/**
 * Internal representation of a UI-Router state.
 *
 * Instances of this class are created when a [[StateDeclaration]] is registered with the [[StateRegistry]].
 *
 * A registered [[StateDeclaration]] is augmented with a getter ([[StateDeclaration.$$state]]) which returns the corresponding [[StateObject]] object.
 *
 * This class prototypally inherits from the corresponding [[StateDeclaration]].
 * Each of its own properties (i.e., `hasOwnProperty`) are built using builders from the [[StateBuilder]].
 */
var StateObject = /** @class */ (function () {
    /** @deprecated use State.create() */
    function StateObject(config) {
        return StateObject.create(config || {});
    }
    /**
     * Create a state object to put the private/internal implementation details onto.
     * The object's prototype chain looks like:
     * (Internal State Object) -> (Copy of State.prototype) -> (State Declaration object) -> (State Declaration's prototype...)
     *
     * @param stateDecl the user-supplied State Declaration
     * @returns {StateObject} an internal State object
     */
    StateObject.create = function (stateDecl) {
        stateDecl = StateObject.isStateClass(stateDecl) ? new stateDecl() : stateDecl;
        var state = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inherit"])(Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inherit"])(stateDecl, StateObject.prototype));
        stateDecl.$$state = function () { return state; };
        state.self = stateDecl;
        state.__stateObjectCache = {
            nameGlob: _common_glob__WEBPACK_IMPORTED_MODULE_2__["Glob"].fromString(state.name),
        };
        return state;
    };
    /**
     * Returns true if the provided parameter is the same state.
     *
     * Compares the identity of the state against the passed value, which is either an object
     * reference to the actual `State` instance, the original definition object passed to
     * `$stateProvider.state()`, or the fully-qualified name.
     *
     * @param ref Can be one of (a) a `State` instance, (b) an object that was passed
     *        into `$stateProvider.state()`, (c) the fully-qualified name of a state as a string.
     * @returns Returns `true` if `ref` matches the current `State` instance.
     */
    StateObject.prototype.is = function (ref) {
        return this === ref || this.self === ref || this.fqn() === ref;
    };
    /**
     * @deprecated this does not properly handle dot notation
     * @returns Returns a dot-separated name of the state.
     */
    StateObject.prototype.fqn = function () {
        if (!this.parent || !(this.parent instanceof this.constructor))
            return this.name;
        var name = this.parent.fqn();
        return name ? name + '.' + this.name : this.name;
    };
    /**
     * Returns the root node of this state's tree.
     *
     * @returns The root of this state's tree.
     */
    StateObject.prototype.root = function () {
        return (this.parent && this.parent.root()) || this;
    };
    /**
     * Gets the state's `Param` objects
     *
     * Gets the list of [[Param]] objects owned by the state.
     * If `opts.inherit` is true, it also includes the ancestor states' [[Param]] objects.
     * If `opts.matchingKeys` exists, returns only `Param`s whose `id` is a key on the `matchingKeys` object
     *
     * @param opts options
     */
    StateObject.prototype.parameters = function (opts) {
        opts = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["defaults"])(opts, { inherit: true, matchingKeys: null });
        var inherited = (opts.inherit && this.parent && this.parent.parameters()) || [];
        return inherited
            .concat(Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["values"])(this.params))
            .filter(function (param) { return !opts.matchingKeys || opts.matchingKeys.hasOwnProperty(param.id); });
    };
    /**
     * Returns a single [[Param]] that is owned by the state
     *
     * If `opts.inherit` is true, it also searches the ancestor states` [[Param]]s.
     * @param id the name of the [[Param]] to return
     * @param opts options
     */
    StateObject.prototype.parameter = function (id, opts) {
        if (opts === void 0) { opts = {}; }
        return ((this.url && this.url.parameter(id, opts)) ||
            Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["find"])(Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["values"])(this.params), Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["propEq"])('id', id)) ||
            (opts.inherit && this.parent && this.parent.parameter(id)));
    };
    StateObject.prototype.toString = function () {
        return this.fqn();
    };
    /** Predicate which returns true if the object is an class with @State() decorator */
    StateObject.isStateClass = function (stateDecl) {
        return Object(_common_predicates__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(stateDecl) && stateDecl['__uiRouterState'] === true;
    };
    /** Predicate which returns true if the object is an internal [[StateObject]] object */
    StateObject.isState = function (obj) { return Object(_common_predicates__WEBPACK_IMPORTED_MODULE_3__["isObject"])(obj['__stateObjectCache']); };
    return StateObject;
}());

//# sourceMappingURL=stateObject.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateQueueManager.js":
/*!************************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateQueueManager.js ***!
  \************************************************************************************************************/
/*! exports provided: StateQueueManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateQueueManager", function() { return StateQueueManager; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _stateObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateObject */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateObject.js");
/** @publicapi @module state */ /** */


/** @internalapi */
var StateQueueManager = /** @class */ (function () {
    function StateQueueManager(router, states, builder, listeners) {
        this.router = router;
        this.states = states;
        this.builder = builder;
        this.listeners = listeners;
        this.queue = [];
    }
    /** @internalapi */
    StateQueueManager.prototype.dispose = function () {
        this.queue = [];
    };
    StateQueueManager.prototype.register = function (stateDecl) {
        var queue = this.queue;
        var state = _stateObject__WEBPACK_IMPORTED_MODULE_1__["StateObject"].create(stateDecl);
        var name = state.name;
        if (!Object(_common__WEBPACK_IMPORTED_MODULE_0__["isString"])(name))
            throw new Error('State must have a valid name');
        if (this.states.hasOwnProperty(name) || Object(_common__WEBPACK_IMPORTED_MODULE_0__["inArray"])(queue.map(Object(_common__WEBPACK_IMPORTED_MODULE_0__["prop"])('name')), name))
            throw new Error("State '" + name + "' is already defined");
        queue.push(state);
        this.flush();
        return state;
    };
    StateQueueManager.prototype.flush = function () {
        var _this = this;
        var _a = this, queue = _a.queue, states = _a.states, builder = _a.builder;
        var registered = [], // states that got registered
        orphans = [], // states that don't yet have a parent registered
        previousQueueLength = {}; // keep track of how long the queue when an orphan was first encountered
        var getState = function (name) { return _this.states.hasOwnProperty(name) && _this.states[name]; };
        var notifyListeners = function () {
            if (registered.length) {
                _this.listeners.forEach(function (listener) { return listener('registered', registered.map(function (s) { return s.self; })); });
            }
        };
        while (queue.length > 0) {
            var state = queue.shift();
            var name_1 = state.name;
            var result = builder.build(state);
            var orphanIdx = orphans.indexOf(state);
            if (result) {
                var existingState = getState(name_1);
                if (existingState && existingState.name === name_1) {
                    throw new Error("State '" + name_1 + "' is already defined");
                }
                var existingFutureState = getState(name_1 + '.**');
                if (existingFutureState) {
                    // Remove future state of the same name
                    this.router.stateRegistry.deregister(existingFutureState);
                }
                states[name_1] = state;
                this.attachRoute(state);
                if (orphanIdx >= 0)
                    orphans.splice(orphanIdx, 1);
                registered.push(state);
                continue;
            }
            var prev = previousQueueLength[name_1];
            previousQueueLength[name_1] = queue.length;
            if (orphanIdx >= 0 && prev === queue.length) {
                // Wait until two consecutive iterations where no additional states were dequeued successfully.
                // throw new Error(`Cannot register orphaned state '${name}'`);
                queue.push(state);
                notifyListeners();
                return states;
            }
            else if (orphanIdx < 0) {
                orphans.push(state);
            }
            queue.push(state);
        }
        notifyListeners();
        return states;
    };
    StateQueueManager.prototype.attachRoute = function (state) {
        if (state.abstract || !state.url)
            return;
        var rulesApi = this.router.urlService.rules;
        rulesApi.rule(rulesApi.urlRuleFactory.create(state));
    };
    return StateQueueManager;
}());

//# sourceMappingURL=stateQueueManager.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateRegistry.js":
/*!********************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateRegistry.js ***!
  \********************************************************************************************************/
/*! exports provided: StateRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateRegistry", function() { return StateRegistry; });
/* harmony import */ var _stateMatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stateMatcher */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateMatcher.js");
/* harmony import */ var _stateBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateBuilder */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateBuilder.js");
/* harmony import */ var _stateQueueManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stateQueueManager */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateQueueManager.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/** @publicapi @module state */ /** */





var StateRegistry = /** @class */ (function () {
    /** @internalapi */
    function StateRegistry(router) {
        this.router = router;
        this.states = {};
        this.listeners = [];
        this.matcher = new _stateMatcher__WEBPACK_IMPORTED_MODULE_0__["StateMatcher"](this.states);
        this.builder = new _stateBuilder__WEBPACK_IMPORTED_MODULE_1__["StateBuilder"](this.matcher, router.urlMatcherFactory);
        this.stateQueue = new _stateQueueManager__WEBPACK_IMPORTED_MODULE_2__["StateQueueManager"](router, this.states, this.builder, this.listeners);
        this._registerRoot();
    }
    /** @internalapi */
    StateRegistry.prototype._registerRoot = function () {
        var rootStateDef = {
            name: '',
            url: '^',
            views: null,
            params: {
                '#': { value: null, type: 'hash', dynamic: true },
            },
            abstract: true,
        };
        var _root = (this._root = this.stateQueue.register(rootStateDef));
        _root.navigable = null;
    };
    /** @internalapi */
    StateRegistry.prototype.dispose = function () {
        var _this = this;
        this.stateQueue.dispose();
        this.listeners = [];
        this.get().forEach(function (state) { return _this.get(state) && _this.deregister(state); });
    };
    /**
     * Listen for a State Registry events
     *
     * Adds a callback that is invoked when states are registered or deregistered with the StateRegistry.
     *
     * #### Example:
     * ```js
     * let allStates = registry.get();
     *
     * // Later, invoke deregisterFn() to remove the listener
     * let deregisterFn = registry.onStatesChanged((event, states) => {
     *   switch(event) {
     *     case: 'registered':
     *       states.forEach(state => allStates.push(state));
     *       break;
     *     case: 'deregistered':
     *       states.forEach(state => {
     *         let idx = allStates.indexOf(state);
     *         if (idx !== -1) allStates.splice(idx, 1);
     *       });
     *       break;
     *   }
     * });
     * ```
     *
     * @param listener a callback function invoked when the registered states changes.
     *        The function receives two parameters, `event` and `state`.
     *        See [[StateRegistryListener]]
     * @return a function that deregisters the listener
     */
    StateRegistry.prototype.onStatesChanged = function (listener) {
        this.listeners.push(listener);
        return function deregisterListener() {
            Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["removeFrom"])(this.listeners)(listener);
        }.bind(this);
    };
    /**
     * Gets the implicit root state
     *
     * Gets the root of the state tree.
     * The root state is implicitly created by UI-Router.
     * Note: this returns the internal [[StateObject]] representation, not a [[StateDeclaration]]
     *
     * @return the root [[StateObject]]
     */
    StateRegistry.prototype.root = function () {
        return this._root;
    };
    /**
     * Adds a state to the registry
     *
     * Registers a [[StateDeclaration]] or queues it for registration.
     *
     * Note: a state will be queued if the state's parent isn't yet registered.
     *
     * @param stateDefinition the definition of the state to register.
     * @returns the internal [[StateObject]] object.
     *          If the state was successfully registered, then the object is fully built (See: [[StateBuilder]]).
     *          If the state was only queued, then the object is not fully built.
     */
    StateRegistry.prototype.register = function (stateDefinition) {
        return this.stateQueue.register(stateDefinition);
    };
    /** @hidden */
    StateRegistry.prototype._deregisterTree = function (state) {
        var _this = this;
        var all = this.get().map(function (s) { return s.$$state(); });
        var getChildren = function (states) {
            var _children = all.filter(function (s) { return states.indexOf(s.parent) !== -1; });
            return _children.length === 0 ? _children : _children.concat(getChildren(_children));
        };
        var children = getChildren([state]);
        var deregistered = [state].concat(children).reverse();
        deregistered.forEach(function (_state) {
            var rulesApi = _this.router.urlService.rules;
            // Remove URL rule
            rulesApi
                .rules()
                .filter(Object(_common_hof__WEBPACK_IMPORTED_MODULE_4__["propEq"])('state', _state))
                .forEach(function (rule) { return rulesApi.removeRule(rule); });
            // Remove state from registry
            delete _this.states[_state.name];
        });
        return deregistered;
    };
    /**
     * Removes a state from the registry
     *
     * This removes a state from the registry.
     * If the state has children, they are are also removed from the registry.
     *
     * @param stateOrName the state's name or object representation
     * @returns {StateObject[]} a list of removed states
     */
    StateRegistry.prototype.deregister = function (stateOrName) {
        var _state = this.get(stateOrName);
        if (!_state)
            throw new Error("Can't deregister state; not found: " + stateOrName);
        var deregisteredStates = this._deregisterTree(_state.$$state());
        this.listeners.forEach(function (listener) { return listener('deregistered', deregisteredStates.map(function (s) { return s.self; })); });
        return deregisteredStates;
    };
    StateRegistry.prototype.get = function (stateOrName, base) {
        var _this = this;
        if (arguments.length === 0)
            return Object.keys(this.states).map(function (name) { return _this.states[name].self; });
        var found = this.matcher.find(stateOrName, base);
        return (found && found.self) || null;
    };
    StateRegistry.prototype.decorator = function (name, func) {
        return this.builder.builder(name, func);
    };
    return StateRegistry;
}());

//# sourceMappingURL=stateRegistry.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateService.js":
/*!*******************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateService.js ***!
  \*******************************************************************************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/queue */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/queue.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _path_pathUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../path/pathUtils */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathUtils.js");
/* harmony import */ var _path_pathNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../path/pathNode */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathNode.js");
/* harmony import */ var _transition_transitionService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../transition/transitionService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionService.js");
/* harmony import */ var _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transition/rejectFactory */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js");
/* harmony import */ var _targetState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./targetState */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/targetState.js");
/* harmony import */ var _params_param__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../params/param */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/param.js");
/* harmony import */ var _common_glob__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/glob */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/glob.js");
/* harmony import */ var _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../resolve/resolveContext */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolveContext.js");
/* harmony import */ var _hooks_lazyLoad__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../hooks/lazyLoad */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/lazyLoad.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/** @publicapi @module state */ /** */














/**
 * Provides state related service functions
 *
 * This class provides services related to ui-router states.
 * An instance of this class is located on the global [[UIRouter]] object.
 */
var StateService = /** @class */ (function () {
    /** @internalapi */
    function StateService(/** @hidden */ router) {
        this.router = router;
        /** @internalapi */
        this.invalidCallbacks = [];
        /** @hidden */
        this._defaultErrorHandler = function $defaultErrorHandler($error$) {
            if ($error$ instanceof Error && $error$.stack) {
                console.error($error$);
                console.error($error$.stack);
            }
            else if ($error$ instanceof _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"]) {
                console.error($error$.toString());
                if ($error$.detail && $error$.detail.stack)
                    console.error($error$.detail.stack);
            }
            else {
                console.error($error$);
            }
        };
        var getters = ['current', '$current', 'params', 'transition'];
        var boundFns = Object.keys(StateService.prototype).filter(Object(_common_hof__WEBPACK_IMPORTED_MODULE_13__["not"])(Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inArray"])(getters)));
        Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["createProxyFunctions"])(Object(_common_hof__WEBPACK_IMPORTED_MODULE_13__["val"])(StateService.prototype), this, Object(_common_hof__WEBPACK_IMPORTED_MODULE_13__["val"])(this), boundFns);
    }
    Object.defineProperty(StateService.prototype, "transition", {
        /**
         * The [[Transition]] currently in progress (or null)
         *
         * This is a passthrough through to [[UIRouterGlobals.transition]]
         */
        get: function () {
            return this.router.globals.transition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "params", {
        /**
         * The latest successful state parameters
         *
         * This is a passthrough through to [[UIRouterGlobals.params]]
         */
        get: function () {
            return this.router.globals.params;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "current", {
        /**
         * The current [[StateDeclaration]]
         *
         * This is a passthrough through to [[UIRouterGlobals.current]]
         */
        get: function () {
            return this.router.globals.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StateService.prototype, "$current", {
        /**
         * The current [[StateObject]]
         *
         * This is a passthrough through to [[UIRouterGlobals.$current]]
         */
        get: function () {
            return this.router.globals.$current;
        },
        enumerable: true,
        configurable: true
    });
    /** @internalapi */
    StateService.prototype.dispose = function () {
        this.defaultErrorHandler(_common_common__WEBPACK_IMPORTED_MODULE_0__["noop"]);
        this.invalidCallbacks = [];
    };
    /**
     * Handler for when [[transitionTo]] is called with an invalid state.
     *
     * Invokes the [[onInvalid]] callbacks, in natural order.
     * Each callback's return value is checked in sequence until one of them returns an instance of TargetState.
     * The results of the callbacks are wrapped in $q.when(), so the callbacks may return promises.
     *
     * If a callback returns an TargetState, then it is used as arguments to $state.transitionTo() and the result returned.
     *
     * @internalapi
     */
    StateService.prototype._handleInvalidTargetState = function (fromPath, toState) {
        var _this = this;
        var fromState = _path_pathUtils__WEBPACK_IMPORTED_MODULE_4__["PathUtils"].makeTargetState(this.router.stateRegistry, fromPath);
        var globals = this.router.globals;
        var latestThing = function () { return globals.transitionHistory.peekTail(); };
        var latest = latestThing();
        var callbackQueue = new _common_queue__WEBPACK_IMPORTED_MODULE_2__["Queue"](this.invalidCallbacks.slice());
        var injector = new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_11__["ResolveContext"](fromPath).injector();
        var checkForRedirect = function (result) {
            if (!(result instanceof _targetState__WEBPACK_IMPORTED_MODULE_8__["TargetState"])) {
                return;
            }
            var target = result;
            // Recreate the TargetState, in case the state is now defined.
            target = _this.target(target.identifier(), target.params(), target.options());
            if (!target.valid()) {
                return _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].invalid(target.error()).toPromise();
            }
            if (latestThing() !== latest) {
                return _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].superseded().toPromise();
            }
            return _this.transitionTo(target.identifier(), target.params(), target.options());
        };
        function invokeNextCallback() {
            var nextCallback = callbackQueue.dequeue();
            if (nextCallback === undefined)
                return _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].invalid(toState.error()).toPromise();
            var callbackResult = _common_coreservices__WEBPACK_IMPORTED_MODULE_3__["services"].$q.when(nextCallback(toState, fromState, injector));
            return callbackResult.then(checkForRedirect).then(function (result) { return result || invokeNextCallback(); });
        }
        return invokeNextCallback();
    };
    /**
     * Registers an Invalid State handler
     *
     * Registers a [[OnInvalidCallback]] function to be invoked when [[StateService.transitionTo]]
     * has been called with an invalid state reference parameter
     *
     * Example:
     * ```js
     * stateService.onInvalid(function(to, from, injector) {
     *   if (to.name() === 'foo') {
     *     let lazyLoader = injector.get('LazyLoadService');
     *     return lazyLoader.load('foo')
     *         .then(() => stateService.target('foo'));
     *   }
     * });
     * ```
     *
     * @param {function} callback invoked when the toState is invalid
     *   This function receives the (invalid) toState, the fromState, and an injector.
     *   The function may optionally return a [[TargetState]] or a Promise for a TargetState.
     *   If one is returned, it is treated as a redirect.
     *
     * @returns a function which deregisters the callback
     */
    StateService.prototype.onInvalid = function (callback) {
        this.invalidCallbacks.push(callback);
        return function deregisterListener() {
            Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["removeFrom"])(this.invalidCallbacks)(callback);
        }.bind(this);
    };
    /**
     * Reloads the current state
     *
     * A method that force reloads the current state, or a partial state hierarchy.
     * All resolves are re-resolved, and components reinstantiated.
     *
     * #### Example:
     * ```js
     * let app angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.reload = function(){
     *     $state.reload();
     *   }
     * });
     * ```
     *
     * Note: `reload()` is just an alias for:
     *
     * ```js
     * $state.transitionTo($state.current, $state.params, {
     *   reload: true, inherit: false
     * });
     * ```
     *
     * @param reloadState A state name or a state object.
     *    If present, this state and all its children will be reloaded, but ancestors will not reload.
     *
     * #### Example:
     * ```js
     * //assuming app application consists of 3 states: 'contacts', 'contacts.detail', 'contacts.detail.item'
     * //and current state is 'contacts.detail.item'
     * let app angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.reload = function(){
     *     //will reload 'contact.detail' and nested 'contact.detail.item' states
     *     $state.reload('contact.detail');
     *   }
     * });
     * ```
     *
     * @returns A promise representing the state of the new transition. See [[StateService.go]]
     */
    StateService.prototype.reload = function (reloadState) {
        return this.transitionTo(this.current, this.params, {
            reload: Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(reloadState) ? reloadState : true,
            inherit: false,
            notify: false,
        });
    };
    /**
     * Transition to a different state and/or parameters
     *
     * Convenience method for transitioning to a new state.
     *
     * `$state.go` calls `$state.transitionTo` internally but automatically sets options to
     * `{ location: true, inherit: true, relative: router.globals.$current, notify: true }`.
     * This allows you to use either an absolute or relative `to` argument (because of `relative: router.globals.$current`).
     * It also allows you to specify * only the parameters you'd like to update, while letting unspecified parameters
     * inherit from the current parameter values (because of `inherit: true`).
     *
     * #### Example:
     * ```js
     * let app = angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.go('contact.detail');
     *   };
     * });
     * ```
     *
     * @param to Absolute state name, state object, or relative state path (relative to current state).
     *
     * Some examples:
     *
     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
     * - `$state.go('^')` - will go to the parent state
     * - `$state.go('^.sibling')` - if current state is `home.child`, will go to the `home.sibling` state
     * - `$state.go('.child.grandchild')` - if current state is home, will go to the `home.child.grandchild` state
     *
     * @param params A map of the parameters that will be sent to the state, will populate $stateParams.
     *
     *    Any parameters that are not specified will be inherited from current parameter values (because of `inherit: true`).
     *    This allows, for example, going to a sibling state that shares parameters defined by a parent state.
     *
     * @param options Transition options
     *
     * @returns {promise} A promise representing the state of the new transition.
     */
    StateService.prototype.go = function (to, params, options) {
        var defautGoOpts = { relative: this.$current, inherit: true };
        var transOpts = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["defaults"])(options, defautGoOpts, _transition_transitionService__WEBPACK_IMPORTED_MODULE_6__["defaultTransOpts"]);
        return this.transitionTo(to, params, transOpts);
    };
    /**
     * Creates a [[TargetState]]
     *
     * This is a factory method for creating a TargetState
     *
     * This may be returned from a Transition Hook to redirect a transition, for example.
     */
    StateService.prototype.target = function (identifier, params, options) {
        if (options === void 0) { options = {}; }
        // If we're reloading, find the state object to reload from
        if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isObject"])(options.reload) && !options.reload.name)
            throw new Error('Invalid reload state object');
        var reg = this.router.stateRegistry;
        options.reloadState =
            options.reload === true ? reg.root() : reg.matcher.find(options.reload, options.relative);
        if (options.reload && !options.reloadState)
            throw new Error("No such reload state '" + (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"])(options.reload) ? options.reload : options.reload.name) + "'");
        return new _targetState__WEBPACK_IMPORTED_MODULE_8__["TargetState"](this.router.stateRegistry, identifier, params, options);
    };
    StateService.prototype.getCurrentPath = function () {
        var _this = this;
        var globals = this.router.globals;
        var latestSuccess = globals.successfulTransitions.peekTail();
        var rootPath = function () { return [new _path_pathNode__WEBPACK_IMPORTED_MODULE_5__["PathNode"](_this.router.stateRegistry.root())]; };
        return latestSuccess ? latestSuccess.treeChanges().to : rootPath();
    };
    /**
     * Low-level method for transitioning to a new state.
     *
     * The [[go]] method (which uses `transitionTo` internally) is recommended in most situations.
     *
     * #### Example:
     * ```js
     * let app = angular.module('app', ['ui.router']);
     *
     * app.controller('ctrl', function ($scope, $state) {
     *   $scope.changeState = function () {
     *     $state.transitionTo('contact.detail');
     *   };
     * });
     * ```
     *
     * @param to State name or state object.
     * @param toParams A map of the parameters that will be sent to the state,
     *      will populate $stateParams.
     * @param options Transition options
     *
     * @returns A promise representing the state of the new transition. See [[go]]
     */
    StateService.prototype.transitionTo = function (to, toParams, options) {
        var _this = this;
        if (toParams === void 0) { toParams = {}; }
        if (options === void 0) { options = {}; }
        var router = this.router;
        var globals = router.globals;
        options = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["defaults"])(options, _transition_transitionService__WEBPACK_IMPORTED_MODULE_6__["defaultTransOpts"]);
        var getCurrent = function () { return globals.transition; };
        options = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(options, { current: getCurrent });
        var ref = this.target(to, toParams, options);
        var currentPath = this.getCurrentPath();
        if (!ref.exists())
            return this._handleInvalidTargetState(currentPath, ref);
        if (!ref.valid())
            return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["silentRejection"])(ref.error());
        /**
         * Special handling for Ignored, Aborted, and Redirected transitions
         *
         * The semantics for the transition.run() promise and the StateService.transitionTo()
         * promise differ. For instance, the run() promise may be rejected because it was
         * IGNORED, but the transitionTo() promise is resolved because from the user perspective
         * no error occurred.  Likewise, the transition.run() promise may be rejected because of
         * a Redirect, but the transitionTo() promise is chained to the new Transition's promise.
         */
        var rejectedTransitionHandler = function (trans) { return function (error) {
            if (error instanceof _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"]) {
                var isLatest = router.globals.lastStartedTransitionId <= trans.$id;
                if (error.type === _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["RejectType"].IGNORED) {
                    isLatest && router.urlRouter.update();
                    // Consider ignored `Transition.run()` as a successful `transitionTo`
                    return _common_coreservices__WEBPACK_IMPORTED_MODULE_3__["services"].$q.when(globals.current);
                }
                var detail = error.detail;
                if (error.type === _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["RejectType"].SUPERSEDED && error.redirected && detail instanceof _targetState__WEBPACK_IMPORTED_MODULE_8__["TargetState"]) {
                    // If `Transition.run()` was redirected, allow the `transitionTo()` promise to resolve successfully
                    // by returning the promise for the new (redirect) `Transition.run()`.
                    var redirect = trans.redirect(detail);
                    return redirect.run().catch(rejectedTransitionHandler(redirect));
                }
                if (error.type === _transition_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["RejectType"].ABORTED) {
                    isLatest && router.urlRouter.update();
                    return _common_coreservices__WEBPACK_IMPORTED_MODULE_3__["services"].$q.reject(error);
                }
            }
            var errorHandler = _this.defaultErrorHandler();
            errorHandler(error);
            return _common_coreservices__WEBPACK_IMPORTED_MODULE_3__["services"].$q.reject(error);
        }; };
        var transition = this.router.transitionService.create(currentPath, ref);
        var transitionToPromise = transition.run().catch(rejectedTransitionHandler(transition));
        Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["silenceUncaughtInPromise"])(transitionToPromise); // issue #2676
        // Return a promise for the transition, which also has the transition object on it.
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(transitionToPromise, { transition: transition });
    };
    /**
     * Checks if the current state *is* the provided state
     *
     * Similar to [[includes]] but only checks for the full state name.
     * If params is supplied then it will be tested for strict equality against the current
     * active params object, so all params must match with none missing and no extras.
     *
     * #### Example:
     * ```js
     * $state.$current.name = 'contacts.details.item';
     *
     * // absolute name
     * $state.is('contact.details.item'); // returns true
     * $state.is(contactDetailItemStateObject); // returns true
     * ```
     *
     * // relative name (. and ^), typically from a template
     * // E.g. from the 'contacts.details' template
     * ```html
     * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
     * ```
     *
     * @param stateOrName The state name (absolute or relative) or state object you'd like to check.
     * @param params A param object, e.g. `{sectionId: section.id}`, that you'd like
     * to test against the current active state.
     * @param options An options object. The options are:
     *   - `relative`: If `stateOrName` is a relative state name and `options.relative` is set, .is will
     *     test relative to `options.relative` state (or name).
     *
     * @returns Returns true if it is the state.
     */
    StateService.prototype.is = function (stateOrName, params, options) {
        options = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["defaults"])(options, { relative: this.$current });
        var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative);
        if (!Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(state))
            return undefined;
        if (this.$current !== state)
            return false;
        if (!params)
            return true;
        var schema = state.parameters({ inherit: true, matchingKeys: params });
        return _params_param__WEBPACK_IMPORTED_MODULE_9__["Param"].equals(schema, _params_param__WEBPACK_IMPORTED_MODULE_9__["Param"].values(schema, params), this.params);
    };
    /**
     * Checks if the current state *includes* the provided state
     *
     * A method to determine if the current active state is equal to or is the child of the
     * state stateName. If any params are passed then they will be tested for a match as well.
     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
     *
     * #### Example when `$state.$current.name === 'contacts.details.item'`
     * ```js
     * // Using partial names
     * $state.includes("contacts"); // returns true
     * $state.includes("contacts.details"); // returns true
     * $state.includes("contacts.details.item"); // returns true
     * $state.includes("contacts.list"); // returns false
     * $state.includes("about"); // returns false
     * ```
     *
     * #### Glob Examples when `* $state.$current.name === 'contacts.details.item.url'`:
     * ```js
     * $state.includes("*.details.*.*"); // returns true
     * $state.includes("*.details.**"); // returns true
     * $state.includes("**.item.**"); // returns true
     * $state.includes("*.details.item.url"); // returns true
     * $state.includes("*.details.*.url"); // returns true
     * $state.includes("*.details.*"); // returns false
     * $state.includes("item.**"); // returns false
     * ```
     *
     * @param stateOrName A partial name, relative name, glob pattern,
     *   or state object to be searched for within the current state name.
     * @param params A param object, e.g. `{sectionId: section.id}`,
     *   that you'd like to test against the current active state.
     * @param options An options object. The options are:
     *   - `relative`: If `stateOrName` is a relative state name and `options.relative` is set, .is will
     *     test relative to `options.relative` state (or name).
     *
     * @returns {boolean} Returns true if it does include the state
     */
    StateService.prototype.includes = function (stateOrName, params, options) {
        options = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["defaults"])(options, { relative: this.$current });
        var glob = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"])(stateOrName) && _common_glob__WEBPACK_IMPORTED_MODULE_10__["Glob"].fromString(stateOrName);
        if (glob) {
            if (!glob.matches(this.$current.name))
                return false;
            stateOrName = this.$current.name;
        }
        var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative), include = this.$current.includes;
        if (!Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(state))
            return undefined;
        if (!Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(include[state.name]))
            return false;
        if (!params)
            return true;
        var schema = state.parameters({ inherit: true, matchingKeys: params });
        return _params_param__WEBPACK_IMPORTED_MODULE_9__["Param"].equals(schema, _params_param__WEBPACK_IMPORTED_MODULE_9__["Param"].values(schema, params), this.params);
    };
    /**
     * Generates a URL for a state and parameters
     *
     * Returns the url for the given state populated with the given params.
     *
     * #### Example:
     * ```js
     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
     * ```
     *
     * @param stateOrName The state name or state object you'd like to generate a url from.
     * @param params An object of parameter values to fill the state's required parameters.
     * @param options Options object. The options are:
     *
     * @returns {string} compiled state url
     */
    StateService.prototype.href = function (stateOrName, params, options) {
        var defaultHrefOpts = {
            lossy: true,
            inherit: true,
            absolute: false,
            relative: this.$current,
        };
        options = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["defaults"])(options, defaultHrefOpts);
        params = params || {};
        var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative);
        if (!Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(state))
            return null;
        if (options.inherit)
            params = this.params.$inherit(params, this.$current, state);
        var nav = state && options.lossy ? state.navigable : state;
        if (!nav || nav.url === undefined || nav.url === null) {
            return null;
        }
        return this.router.urlRouter.href(nav.url, params, { absolute: options.absolute });
    };
    /**
     * Sets or gets the default [[transitionTo]] error handler.
     *
     * The error handler is called when a [[Transition]] is rejected or when any error occurred during the Transition.
     * This includes errors caused by resolves and transition hooks.
     *
     * Note:
     * This handler does not receive certain Transition rejections.
     * Redirected and Ignored Transitions are not considered to be errors by [[StateService.transitionTo]].
     *
     * The built-in default error handler logs the error to the console.
     *
     * You can provide your own custom handler.
     *
     * #### Example:
     * ```js
     * stateService.defaultErrorHandler(function() {
     *   // Do not log transitionTo errors
     * });
     * ```
     *
     * @param handler a global error handler function
     * @returns the current global error handler
     */
    StateService.prototype.defaultErrorHandler = function (handler) {
        return (this._defaultErrorHandler = handler || this._defaultErrorHandler);
    };
    StateService.prototype.get = function (stateOrName, base) {
        var reg = this.router.stateRegistry;
        if (arguments.length === 0)
            return reg.get();
        return reg.get(stateOrName, base || this.$current);
    };
    /**
     * Lazy loads a state
     *
     * Explicitly runs a state's [[StateDeclaration.lazyLoad]] function.
     *
     * @param stateOrName the state that should be lazy loaded
     * @param transition the optional Transition context to use (if the lazyLoad function requires an injector, etc)
     * Note: If no transition is provided, a noop transition is created using the from the current state to the current state.
     * This noop transition is not actually run.
     *
     * @returns a promise to lazy load
     */
    StateService.prototype.lazyLoad = function (stateOrName, transition) {
        var state = this.get(stateOrName);
        if (!state || !state.lazyLoad)
            throw new Error('Can not lazy load ' + stateOrName);
        var currentPath = this.getCurrentPath();
        var target = _path_pathUtils__WEBPACK_IMPORTED_MODULE_4__["PathUtils"].makeTargetState(this.router.stateRegistry, currentPath);
        transition = transition || this.router.transitionService.create(currentPath, target);
        return Object(_hooks_lazyLoad__WEBPACK_IMPORTED_MODULE_12__["lazyLoadState"])(transition, state);
    };
    return StateService;
}());

//# sourceMappingURL=stateService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/targetState.js":
/*!******************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/targetState.js ***!
  \******************************************************************************************************/
/*! exports provided: TargetState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetState", function() { return TargetState; });
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/** @publicapi @module state */ /** */



/**
 * Encapsulate the target (destination) state/params/options of a [[Transition]].
 *
 * This class is frequently used to redirect a transition to a new destination.
 *
 * See:
 *
 * - [[HookResult]]
 * - [[TransitionHookFn]]
 * - [[TransitionService.onStart]]
 *
 * To create a `TargetState`, use [[StateService.target]].
 *
 * ---
 *
 * This class wraps:
 *
 * 1) an identifier for a state
 * 2) a set of parameters
 * 3) and transition options
 * 4) the registered state object (the [[StateDeclaration]])
 *
 * Many UI-Router APIs such as [[StateService.go]] take a [[StateOrName]] argument which can
 * either be a *state object* (a [[StateDeclaration]] or [[StateObject]]) or a *state name* (a string).
 * The `TargetState` class normalizes those options.
 *
 * A `TargetState` may be valid (the state being targeted exists in the registry)
 * or invalid (the state being targeted is not registered).
 */
var TargetState = /** @class */ (function () {
    /**
     * The TargetState constructor
     *
     * Note: Do not construct a `TargetState` manually.
     * To create a `TargetState`, use the [[StateService.target]] factory method.
     *
     * @param _stateRegistry The StateRegistry to use to look up the _definition
     * @param _identifier An identifier for a state.
     *    Either a fully-qualified state name, or the object used to define the state.
     * @param _params Parameters for the target state
     * @param _options Transition options.
     *
     * @internalapi
     */
    function TargetState(_stateRegistry, _identifier, _params, _options) {
        this._stateRegistry = _stateRegistry;
        this._identifier = _identifier;
        this._identifier = _identifier;
        this._params = Object(_common__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, _params || {});
        this._options = Object(_common__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, _options || {});
        this._definition = _stateRegistry.matcher.find(_identifier, this._options.relative);
    }
    /** The name of the state this object targets */
    TargetState.prototype.name = function () {
        return (this._definition && this._definition.name) || this._identifier;
    };
    /** The identifier used when creating this TargetState */
    TargetState.prototype.identifier = function () {
        return this._identifier;
    };
    /** The target parameter values */
    TargetState.prototype.params = function () {
        return this._params;
    };
    /** The internal state object (if it was found) */
    TargetState.prototype.$state = function () {
        return this._definition;
    };
    /** The internal state declaration (if it was found) */
    TargetState.prototype.state = function () {
        return this._definition && this._definition.self;
    };
    /** The target options */
    TargetState.prototype.options = function () {
        return this._options;
    };
    /** True if the target state was found */
    TargetState.prototype.exists = function () {
        return !!(this._definition && this._definition.self);
    };
    /** True if the object is valid */
    TargetState.prototype.valid = function () {
        return !this.error();
    };
    /** If the object is invalid, returns the reason why */
    TargetState.prototype.error = function () {
        var base = this.options().relative;
        if (!this._definition && !!base) {
            var stateName = base.name ? base.name : base;
            return "Could not resolve '" + this.name() + "' from state '" + stateName + "'";
        }
        if (!this._definition)
            return "No such state '" + this.name() + "'";
        if (!this._definition.self)
            return "State '" + this.name() + "' has an invalid definition";
    };
    TargetState.prototype.toString = function () {
        return "'" + this.name() + "'" + Object(_common_strings__WEBPACK_IMPORTED_MODULE_1__["stringify"])(this.params());
    };
    /**
     * Returns a copy of this TargetState which targets a different state.
     * The new TargetState has the same parameter values and transition options.
     *
     * @param state The new state that should be targeted
     */
    TargetState.prototype.withState = function (state) {
        return new TargetState(this._stateRegistry, state, this._params, this._options);
    };
    /**
     * Returns a copy of this TargetState, using the specified parameter values.
     *
     * @param params the new parameter values to use
     * @param replace When false (default) the new parameter values will be merged with the current values.
     *                When true the parameter values will be used instead of the current values.
     */
    TargetState.prototype.withParams = function (params, replace) {
        if (replace === void 0) { replace = false; }
        var newParams = replace ? params : Object(_common__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, this._params, params);
        return new TargetState(this._stateRegistry, this._identifier, newParams, this._options);
    };
    /**
     * Returns a copy of this TargetState, using the specified Transition Options.
     *
     * @param options the new options to use
     * @param replace When false (default) the new options will be merged with the current options.
     *                When true the options will be used instead of the current options.
     */
    TargetState.prototype.withOptions = function (options, replace) {
        if (replace === void 0) { replace = false; }
        var newOpts = replace ? options : Object(_common__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, this._options, options);
        return new TargetState(this._stateRegistry, this._identifier, this._params, newOpts);
    };
    /** Returns true if the object has a state property that might be a state or state name */
    TargetState.isDef = function (obj) { return obj && obj.state && (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_0__["isString"])(obj.state) || Object(_common_predicates__WEBPACK_IMPORTED_MODULE_0__["isString"])(obj.state.name)); };
    return TargetState;
}());

//# sourceMappingURL=targetState.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/hookBuilder.js":
/*!***********************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/hookBuilder.js ***!
  \***********************************************************************************************************/
/*! exports provided: HookBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HookBuilder", function() { return HookBuilder; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/interface.js");
/* harmony import */ var _transitionHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transitionHook */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js");
/** @publicapi @module transition */ /** */




/**
 * This class returns applicable TransitionHooks for a specific Transition instance.
 *
 * Hooks ([[RegisteredHook]]) may be registered globally, e.g., $transitions.onEnter(...), or locally, e.g.
 * myTransition.onEnter(...).  The HookBuilder finds matching RegisteredHooks (where the match criteria is
 * determined by the type of hook)
 *
 * The HookBuilder also converts RegisteredHooks objects to TransitionHook objects, which are used to run a Transition.
 *
 * The HookBuilder constructor is given the $transitions service and a Transition instance.  Thus, a HookBuilder
 * instance may only be used for one specific Transition object. (side note: the _treeChanges accessor is private
 * in the Transition class, so we must also provide the Transition's _treeChanges)
 *
 */
var HookBuilder = /** @class */ (function () {
    function HookBuilder(transition) {
        this.transition = transition;
    }
    HookBuilder.prototype.buildHooksForPhase = function (phase) {
        var _this = this;
        var $transitions = this.transition.router.transitionService;
        return $transitions._pluginapi
            ._getEvents(phase)
            .map(function (type) { return _this.buildHooks(type); })
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], [])
            .filter(_common_common__WEBPACK_IMPORTED_MODULE_0__["identity"]);
    };
    /**
     * Returns an array of newly built TransitionHook objects.
     *
     * - Finds all RegisteredHooks registered for the given `hookType` which matched the transition's [[TreeChanges]].
     * - Finds [[PathNode]] (or `PathNode[]`) to use as the TransitionHook context(s)
     * - For each of the [[PathNode]]s, creates a TransitionHook
     *
     * @param hookType the type of the hook registration function, e.g., 'onEnter', 'onFinish'.
     */
    HookBuilder.prototype.buildHooks = function (hookType) {
        var transition = this.transition;
        var treeChanges = transition.treeChanges();
        // Find all the matching registered hooks for a given hook type
        var matchingHooks = this.getMatchingHooks(hookType, treeChanges, transition);
        if (!matchingHooks)
            return [];
        var baseHookOptions = {
            transition: transition,
            current: transition.options().current,
        };
        var makeTransitionHooks = function (hook) {
            // Fetch the Nodes that caused this hook to match.
            var matches = hook.matches(treeChanges, transition);
            // Select the PathNode[] that will be used as TransitionHook context objects
            var matchingNodes = matches[hookType.criteriaMatchPath.name];
            // Return an array of HookTuples
            return matchingNodes.map(function (node) {
                var _options = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])({
                    bind: hook.bind,
                    traceData: { hookType: hookType.name, context: node },
                }, baseHookOptions);
                var state = hookType.criteriaMatchPath.scope === _interface__WEBPACK_IMPORTED_MODULE_2__["TransitionHookScope"].STATE ? node.state.self : null;
                var transitionHook = new _transitionHook__WEBPACK_IMPORTED_MODULE_3__["TransitionHook"](transition, state, hook, _options);
                return { hook: hook, node: node, transitionHook: transitionHook };
            });
        };
        return matchingHooks
            .map(makeTransitionHooks)
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], [])
            .sort(tupleSort(hookType.reverseSort))
            .map(function (tuple) { return tuple.transitionHook; });
    };
    /**
     * Finds all RegisteredHooks from:
     * - The Transition object instance hook registry
     * - The TransitionService ($transitions) global hook registry
     *
     * which matched:
     * - the eventType
     * - the matchCriteria (to, from, exiting, retained, entering)
     *
     * @returns an array of matched [[RegisteredHook]]s
     */
    HookBuilder.prototype.getMatchingHooks = function (hookType, treeChanges, transition) {
        var isCreate = hookType.hookPhase === _interface__WEBPACK_IMPORTED_MODULE_2__["TransitionHookPhase"].CREATE;
        // Instance and Global hook registries
        var $transitions = this.transition.router.transitionService;
        var registries = isCreate ? [$transitions] : [this.transition, $transitions];
        return registries
            .map(function (reg) { return reg.getHooks(hookType.name); }) // Get named hooks from registries
            .filter(Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["assertPredicate"])(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isArray"], "broken event named: " + hookType.name)) // Sanity check
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], []) // Un-nest RegisteredHook[][] to RegisteredHook[] array
            .filter(function (hook) { return hook.matches(treeChanges, transition); }); // Only those satisfying matchCriteria
    };
    return HookBuilder;
}());

/**
 * A factory for a sort function for HookTuples.
 *
 * The sort function first compares the PathNode depth (how deep in the state tree a node is), then compares
 * the EventHook priority.
 *
 * @param reverseDepthSort a boolean, when true, reverses the sort order for the node depth
 * @returns a tuple sort function
 */
function tupleSort(reverseDepthSort) {
    if (reverseDepthSort === void 0) { reverseDepthSort = false; }
    return function nodeDepthThenPriority(l, r) {
        var factor = reverseDepthSort ? -1 : 1;
        var depthDelta = (l.node.state.path.length - r.node.state.path.length) * factor;
        return depthDelta !== 0 ? depthDelta : r.hook.priority - l.hook.priority;
    };
}
//# sourceMappingURL=hookBuilder.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/hookRegistry.js":
/*!************************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/hookRegistry.js ***!
  \************************************************************************************************************/
/*! exports provided: matchState, RegisteredHook, makeEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchState", function() { return matchState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredHook", function() { return RegisteredHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeEvent", function() { return makeEvent; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/interface.js");
/** @publicapi @module transition */ /** */


/**
 * Determines if the given state matches the matchCriteria
 *
 * @hidden
 *
 * @param state a State Object to test against
 * @param criterion
 * - If a string, matchState uses the string as a glob-matcher against the state name
 * - If an array (of strings), matchState uses each string in the array as a glob-matchers against the state name
 *   and returns a positive match if any of the globs match.
 * - If a function, matchState calls the function with the state and returns true if the function's result is truthy.
 * @returns {boolean}
 */
function matchState(state, criterion, transition) {
    var toMatch = Object(_common__WEBPACK_IMPORTED_MODULE_0__["isString"])(criterion) ? [criterion] : criterion;
    function matchGlobs(_state) {
        var globStrings = toMatch;
        for (var i = 0; i < globStrings.length; i++) {
            var glob = new _common__WEBPACK_IMPORTED_MODULE_0__["Glob"](globStrings[i]);
            if ((glob && glob.matches(_state.name)) || (!glob && globStrings[i] === _state.name)) {
                return true;
            }
        }
        return false;
    }
    var matchFn = (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(toMatch) ? toMatch : matchGlobs);
    return !!matchFn(state, transition);
}
/**
 * @internalapi
 * The registration data for a registered transition hook
 */
var RegisteredHook = /** @class */ (function () {
    function RegisteredHook(tranSvc, eventType, callback, matchCriteria, removeHookFromRegistry, options) {
        if (options === void 0) { options = {}; }
        this.tranSvc = tranSvc;
        this.eventType = eventType;
        this.callback = callback;
        this.matchCriteria = matchCriteria;
        this.removeHookFromRegistry = removeHookFromRegistry;
        this.invokeCount = 0;
        this._deregistered = false;
        this.priority = options.priority || 0;
        this.bind = options.bind || null;
        this.invokeLimit = options.invokeLimit;
    }
    /**
     * Gets the matching [[PathNode]]s
     *
     * Given an array of [[PathNode]]s, and a [[HookMatchCriterion]], returns an array containing
     * the [[PathNode]]s that the criteria matches, or `null` if there were no matching nodes.
     *
     * Returning `null` is significant to distinguish between the default
     * "match-all criterion value" of `true` compared to a `() => true` function,
     * when the nodes is an empty array.
     *
     * This is useful to allow a transition match criteria of `entering: true`
     * to still match a transition, even when `entering === []`.  Contrast that
     * with `entering: (state) => true` which only matches when a state is actually
     * being entered.
     */
    RegisteredHook.prototype._matchingNodes = function (nodes, criterion, transition) {
        if (criterion === true)
            return nodes;
        var matching = nodes.filter(function (node) { return matchState(node.state, criterion, transition); });
        return matching.length ? matching : null;
    };
    /**
     * Gets the default match criteria (all `true`)
     *
     * Returns an object which has all the criteria match paths as keys and `true` as values, i.e.:
     *
     * ```js
     * {
     *   to: true,
     *   from: true,
     *   entering: true,
     *   exiting: true,
     *   retained: true,
     * }
     */
    RegisteredHook.prototype._getDefaultMatchCriteria = function () {
        return Object(_common__WEBPACK_IMPORTED_MODULE_0__["mapObj"])(this.tranSvc._pluginapi._getPathTypes(), function () { return true; });
    };
    /**
     * Gets matching nodes as [[IMatchingNodes]]
     *
     * Create a IMatchingNodes object from the TransitionHookTypes that is roughly equivalent to:
     *
     * ```js
     * let matches: IMatchingNodes = {
     *   to:       _matchingNodes([tail(treeChanges.to)],   mc.to),
     *   from:     _matchingNodes([tail(treeChanges.from)], mc.from),
     *   exiting:  _matchingNodes(treeChanges.exiting,      mc.exiting),
     *   retained: _matchingNodes(treeChanges.retained,     mc.retained),
     *   entering: _matchingNodes(treeChanges.entering,     mc.entering),
     * };
     * ```
     */
    RegisteredHook.prototype._getMatchingNodes = function (treeChanges, transition) {
        var _this = this;
        var criteria = Object(_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(this._getDefaultMatchCriteria(), this.matchCriteria);
        var paths = Object(_common__WEBPACK_IMPORTED_MODULE_0__["values"])(this.tranSvc._pluginapi._getPathTypes());
        return paths.reduce(function (mn, pathtype) {
            // STATE scope criteria matches against every node in the path.
            // TRANSITION scope criteria matches against only the last node in the path
            var isStateHook = pathtype.scope === _interface__WEBPACK_IMPORTED_MODULE_1__["TransitionHookScope"].STATE;
            var path = treeChanges[pathtype.name] || [];
            var nodes = isStateHook ? path : [Object(_common__WEBPACK_IMPORTED_MODULE_0__["tail"])(path)];
            mn[pathtype.name] = _this._matchingNodes(nodes, criteria[pathtype.name], transition);
            return mn;
        }, {});
    };
    /**
     * Determines if this hook's [[matchCriteria]] match the given [[TreeChanges]]
     *
     * @returns an IMatchingNodes object, or null. If an IMatchingNodes object is returned, its values
     * are the matching [[PathNode]]s for each [[HookMatchCriterion]] (to, from, exiting, retained, entering)
     */
    RegisteredHook.prototype.matches = function (treeChanges, transition) {
        var matches = this._getMatchingNodes(treeChanges, transition);
        // Check if all the criteria matched the TreeChanges object
        var allMatched = Object(_common__WEBPACK_IMPORTED_MODULE_0__["values"])(matches).every(_common__WEBPACK_IMPORTED_MODULE_0__["identity"]);
        return allMatched ? matches : null;
    };
    RegisteredHook.prototype.deregister = function () {
        this.removeHookFromRegistry(this);
        this._deregistered = true;
    };
    return RegisteredHook;
}());

/** @hidden Return a registration function of the requested type. */
function makeEvent(registry, transitionService, eventType) {
    // Create the object which holds the registered transition hooks.
    var _registeredHooks = (registry._registeredHooks = registry._registeredHooks || {});
    var hooks = (_registeredHooks[eventType.name] = []);
    var removeHookFn = Object(_common__WEBPACK_IMPORTED_MODULE_0__["removeFrom"])(hooks);
    // Create hook registration function on the IHookRegistry for the event
    registry[eventType.name] = hookRegistrationFn;
    function hookRegistrationFn(matchObject, callback, options) {
        if (options === void 0) { options = {}; }
        var registeredHook = new RegisteredHook(transitionService, eventType, callback, matchObject, removeHookFn, options);
        hooks.push(registeredHook);
        return registeredHook.deregister.bind(registeredHook);
    }
    return hookRegistrationFn;
}
//# sourceMappingURL=hookRegistry.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/index.js":
/*!*****************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: TransitionHookPhase, TransitionHookScope, HookBuilder, matchState, RegisteredHook, makeEvent, RejectType, Rejection, Transition, TransitionHook, TransitionEventType, defaultTransOpts, TransitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/interface.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionHookPhase", function() { return _interface__WEBPACK_IMPORTED_MODULE_0__["TransitionHookPhase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionHookScope", function() { return _interface__WEBPACK_IMPORTED_MODULE_0__["TransitionHookScope"]; });

/* harmony import */ var _hookBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hookBuilder */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/hookBuilder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HookBuilder", function() { return _hookBuilder__WEBPACK_IMPORTED_MODULE_1__["HookBuilder"]; });

/* harmony import */ var _hookRegistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hookRegistry */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/hookRegistry.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchState", function() { return _hookRegistry__WEBPACK_IMPORTED_MODULE_2__["matchState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisteredHook", function() { return _hookRegistry__WEBPACK_IMPORTED_MODULE_2__["RegisteredHook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeEvent", function() { return _hookRegistry__WEBPACK_IMPORTED_MODULE_2__["makeEvent"]; });

/* harmony import */ var _rejectFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rejectFactory */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RejectType", function() { return _rejectFactory__WEBPACK_IMPORTED_MODULE_3__["RejectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rejection", function() { return _rejectFactory__WEBPACK_IMPORTED_MODULE_3__["Rejection"]; });

/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transition */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _transition__WEBPACK_IMPORTED_MODULE_4__["Transition"]; });

/* harmony import */ var _transitionHook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transitionHook */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionHook", function() { return _transitionHook__WEBPACK_IMPORTED_MODULE_5__["TransitionHook"]; });

/* harmony import */ var _transitionEventType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transitionEventType */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionEventType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionEventType", function() { return _transitionEventType__WEBPACK_IMPORTED_MODULE_6__["TransitionEventType"]; });

/* harmony import */ var _transitionService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transitionService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTransOpts", function() { return _transitionService__WEBPACK_IMPORTED_MODULE_7__["defaultTransOpts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionService", function() { return _transitionService__WEBPACK_IMPORTED_MODULE_7__["TransitionService"]; });

/**
 * # Transition subsystem
 *
 * This module contains APIs related to a Transition.
 *
 * See:
 * - [[TransitionService]]
 * - [[Transition]]
 * - [[HookFn]], [[TransitionHookFn]], [[TransitionStateHookFn]], [[HookMatchCriteria]], [[HookResult]]
 *
 * @preferred @publicapi @module transition
 */ /** */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/interface.js":
/*!*********************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/interface.js ***!
  \*********************************************************************************************************/
/*! exports provided: TransitionHookPhase, TransitionHookScope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionHookPhase", function() { return TransitionHookPhase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionHookScope", function() { return TransitionHookScope; });
var TransitionHookPhase;
(function (TransitionHookPhase) {
    TransitionHookPhase[TransitionHookPhase["CREATE"] = 0] = "CREATE";
    TransitionHookPhase[TransitionHookPhase["BEFORE"] = 1] = "BEFORE";
    TransitionHookPhase[TransitionHookPhase["RUN"] = 2] = "RUN";
    TransitionHookPhase[TransitionHookPhase["SUCCESS"] = 3] = "SUCCESS";
    TransitionHookPhase[TransitionHookPhase["ERROR"] = 4] = "ERROR";
})(TransitionHookPhase || (TransitionHookPhase = {}));
var TransitionHookScope;
(function (TransitionHookScope) {
    TransitionHookScope[TransitionHookScope["TRANSITION"] = 0] = "TRANSITION";
    TransitionHookScope[TransitionHookScope["STATE"] = 1] = "STATE";
})(TransitionHookScope || (TransitionHookScope = {}));

//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js":
/*!*************************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js ***!
  \*************************************************************************************************************/
/*! exports provided: RejectType, Rejection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectType", function() { return RejectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rejection", function() { return Rejection; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/** @publicapi @module transition */ /** */




var RejectType;
(function (RejectType) {
    /**
     * A new transition superseded this one.
     *
     * While this transition was running, a new transition started.
     * This transition is cancelled because it was superseded by new transition.
     */
    RejectType[RejectType["SUPERSEDED"] = 2] = "SUPERSEDED";
    /**
     * The transition was aborted
     *
     * The transition was aborted by a hook which returned `false`
     */
    RejectType[RejectType["ABORTED"] = 3] = "ABORTED";
    /**
     * The transition was invalid
     *
     * The transition was never started because it was invalid
     */
    RejectType[RejectType["INVALID"] = 4] = "INVALID";
    /**
     * The transition was ignored
     *
     * The transition was ignored because it would have no effect.
     *
     * Either:
     *
     * - The transition is targeting the current state and parameter values
     * - The transition is targeting the same state and parameter values as the currently running transition.
     */
    RejectType[RejectType["IGNORED"] = 5] = "IGNORED";
    /**
     * The transition errored.
     *
     * This generally means a hook threw an error or returned a rejected promise
     */
    RejectType[RejectType["ERROR"] = 6] = "ERROR";
})(RejectType || (RejectType = {}));

/** @hidden */
var id = 0;
var Rejection = /** @class */ (function () {
    function Rejection(type, message, detail) {
        /** @hidden */
        this.$id = id++;
        this.type = type;
        this.message = message;
        this.detail = detail;
    }
    /** Returns true if the obj is a rejected promise created from the `asPromise` factory */
    Rejection.isRejectionPromise = function (obj) {
        return obj && typeof obj.then === 'function' && Object(_common_hof__WEBPACK_IMPORTED_MODULE_2__["is"])(Rejection)(obj._transitionRejection);
    };
    /** Returns a Rejection due to transition superseded */
    Rejection.superseded = function (detail, options) {
        var message = 'The transition has been superseded by a different transition';
        var rejection = new Rejection(RejectType.SUPERSEDED, message, detail);
        if (options && options.redirected) {
            rejection.redirected = true;
        }
        return rejection;
    };
    /** Returns a Rejection due to redirected transition */
    Rejection.redirected = function (detail) {
        return Rejection.superseded(detail, { redirected: true });
    };
    /** Returns a Rejection due to invalid transition */
    Rejection.invalid = function (detail) {
        var message = 'This transition is invalid';
        return new Rejection(RejectType.INVALID, message, detail);
    };
    /** Returns a Rejection due to ignored transition */
    Rejection.ignored = function (detail) {
        var message = 'The transition was ignored';
        return new Rejection(RejectType.IGNORED, message, detail);
    };
    /** Returns a Rejection due to aborted transition */
    Rejection.aborted = function (detail) {
        var message = 'The transition has been aborted';
        return new Rejection(RejectType.ABORTED, message, detail);
    };
    /** Returns a Rejection due to aborted transition */
    Rejection.errored = function (detail) {
        var message = 'The transition errored';
        return new Rejection(RejectType.ERROR, message, detail);
    };
    /**
     * Returns a Rejection
     *
     * Normalizes a value as a Rejection.
     * If the value is already a Rejection, returns it.
     * Otherwise, wraps and returns the value as a Rejection (Rejection type: ERROR).
     *
     * @returns `detail` if it is already a `Rejection`, else returns an ERROR Rejection.
     */
    Rejection.normalize = function (detail) {
        return Object(_common_hof__WEBPACK_IMPORTED_MODULE_2__["is"])(Rejection)(detail) ? detail : Rejection.errored(detail);
    };
    Rejection.prototype.toString = function () {
        var detailString = function (d) { return (d && d.toString !== Object.prototype.toString ? d.toString() : Object(_common_strings__WEBPACK_IMPORTED_MODULE_1__["stringify"])(d)); };
        var detail = detailString(this.detail);
        var _a = this, $id = _a.$id, type = _a.type, message = _a.message;
        return "Transition Rejection($id: " + $id + " type: " + type + ", message: " + message + ", detail: " + detail + ")";
    };
    Rejection.prototype.toPromise = function () {
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["silentRejection"])(this), { _transitionRejection: this });
    };
    return Rejection;
}());

//# sourceMappingURL=rejectFactory.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transition.js":
/*!**********************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transition.js ***!
  \**********************************************************************************************************/
/*! exports provided: Transition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return Transition; });
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/trace */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/trace.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/interface.js");
/* harmony import */ var _transitionHook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transitionHook */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js");
/* harmony import */ var _hookRegistry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hookRegistry */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/hookRegistry.js");
/* harmony import */ var _hookBuilder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hookBuilder */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/hookBuilder.js");
/* harmony import */ var _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../path/pathUtils */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/path/pathUtils.js");
/* harmony import */ var _params_param__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../params/param */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/param.js");
/* harmony import */ var _resolve_resolvable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../resolve/resolvable */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolvable.js");
/* harmony import */ var _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../resolve/resolveContext */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/resolve/resolveContext.js");
/* harmony import */ var _rejectFactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rejectFactory */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/** @publicapi @module transition */ /** */






 // has or is using









/** @hidden */
var stateSelf = Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["prop"])('self');
/**
 * Represents a transition between two states.
 *
 * When navigating to a state, we are transitioning **from** the current state **to** the new state.
 *
 * This object contains all contextual information about the to/from states, parameters, resolves.
 * It has information about all states being entered and exited as a result of the transition.
 */
var Transition = /** @class */ (function () {
    /**
     * Creates a new Transition object.
     *
     * If the target state is not valid, an error is thrown.
     *
     * @internalapi
     *
     * @param fromPath The path of [[PathNode]]s from which the transition is leaving.  The last node in the `fromPath`
     *        encapsulates the "from state".
     * @param targetState The target state and parameters being transitioned to (also, the transition options)
     * @param router The [[UIRouter]] instance
     */
    function Transition(fromPath, targetState, router) {
        var _this = this;
        /** @hidden */
        this._deferred = _common_coreservices__WEBPACK_IMPORTED_MODULE_1__["services"].$q.defer();
        /**
         * This promise is resolved or rejected based on the outcome of the Transition.
         *
         * When the transition is successful, the promise is resolved
         * When the transition is unsuccessful, the promise is rejected with the [[Rejection]] or javascript error
         */
        this.promise = this._deferred.promise;
        /** @hidden Holds the hook registration functions such as those passed to Transition.onStart() */
        this._registeredHooks = {};
        /** @hidden */
        this._hookBuilder = new _hookBuilder__WEBPACK_IMPORTED_MODULE_9__["HookBuilder"](this);
        /** Checks if this transition is currently active/running. */
        this.isActive = function () { return _this.router.globals.transition === _this; };
        this.router = router;
        this._targetState = targetState;
        if (!targetState.valid()) {
            throw new Error(targetState.error());
        }
        // current() is assumed to come from targetState.options, but provide a naive implementation otherwise.
        this._options = Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["extend"])({ current: Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["val"])(this) }, targetState.options());
        this.$id = router.transitionService._transitionCount++;
        var toPath = _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__["PathUtils"].buildToPath(fromPath, targetState);
        this._treeChanges = _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__["PathUtils"].treeChanges(fromPath, toPath, this._options.reloadState);
        this.createTransitionHookRegFns();
        var onCreateHooks = this._hookBuilder.buildHooksForPhase(_interface__WEBPACK_IMPORTED_MODULE_6__["TransitionHookPhase"].CREATE);
        _transitionHook__WEBPACK_IMPORTED_MODULE_7__["TransitionHook"].invokeHooks(onCreateHooks, function () { return null; });
        this.applyViewConfigs(router);
    }
    /** @hidden */
    Transition.prototype.onBefore = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onStart = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onExit = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onRetain = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onEnter = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onFinish = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onSuccess = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    Transition.prototype.onError = function (criteria, callback, options) {
        return;
    };
    /** @hidden
     * Creates the transition-level hook registration functions
     * (which can then be used to register hooks)
     */
    Transition.prototype.createTransitionHookRegFns = function () {
        var _this = this;
        this.router.transitionService._pluginapi
            ._getEvents()
            .filter(function (type) { return type.hookPhase !== _interface__WEBPACK_IMPORTED_MODULE_6__["TransitionHookPhase"].CREATE; })
            .forEach(function (type) { return Object(_hookRegistry__WEBPACK_IMPORTED_MODULE_8__["makeEvent"])(_this, _this.router.transitionService, type); });
    };
    /** @internalapi */
    Transition.prototype.getHooks = function (hookName) {
        return this._registeredHooks[hookName];
    };
    Transition.prototype.applyViewConfigs = function (router) {
        var enteringStates = this._treeChanges.entering.map(function (node) { return node.state; });
        _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__["PathUtils"].applyViewConfigs(router.transitionService.$view, this._treeChanges.to, enteringStates);
    };
    /**
     * @internalapi
     *
     * @returns the internal from [State] object
     */
    Transition.prototype.$from = function () {
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["tail"])(this._treeChanges.from).state;
    };
    /**
     * @internalapi
     *
     * @returns the internal to [State] object
     */
    Transition.prototype.$to = function () {
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["tail"])(this._treeChanges.to).state;
    };
    /**
     * Returns the "from state"
     *
     * Returns the state that the transition is coming *from*.
     *
     * @returns The state declaration object for the Transition's ("from state").
     */
    Transition.prototype.from = function () {
        return this.$from().self;
    };
    /**
     * Returns the "to state"
     *
     * Returns the state that the transition is going *to*.
     *
     * @returns The state declaration object for the Transition's target state ("to state").
     */
    Transition.prototype.to = function () {
        return this.$to().self;
    };
    /**
     * Gets the Target State
     *
     * A transition's [[TargetState]] encapsulates the [[to]] state, the [[params]], and the [[options]] as a single object.
     *
     * @returns the [[TargetState]] of this Transition
     */
    Transition.prototype.targetState = function () {
        return this._targetState;
    };
    /**
     * Determines whether two transitions are equivalent.
     * @deprecated
     */
    Transition.prototype.is = function (compare) {
        if (compare instanceof Transition) {
            // TODO: Also compare parameters
            return this.is({ to: compare.$to().name, from: compare.$from().name });
        }
        return !((compare.to && !Object(_hookRegistry__WEBPACK_IMPORTED_MODULE_8__["matchState"])(this.$to(), compare.to, this)) ||
            (compare.from && !Object(_hookRegistry__WEBPACK_IMPORTED_MODULE_8__["matchState"])(this.$from(), compare.from, this)));
    };
    Transition.prototype.params = function (pathname) {
        if (pathname === void 0) { pathname = 'to'; }
        return Object.freeze(this._treeChanges[pathname].map(Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["prop"])('paramValues')).reduce(_common_common__WEBPACK_IMPORTED_MODULE_3__["mergeR"], {}));
    };
    Transition.prototype.paramsChanged = function () {
        var fromParams = this.params('from');
        var toParams = this.params('to');
        // All the parameters declared on both the "to" and "from" paths
        var allParamDescriptors = []
            .concat(this._treeChanges.to)
            .concat(this._treeChanges.from)
            .map(function (pathNode) { return pathNode.paramSchema; })
            .reduce(_common__WEBPACK_IMPORTED_MODULE_15__["flattenR"], [])
            .reduce(_common__WEBPACK_IMPORTED_MODULE_15__["uniqR"], []);
        var changedParamDescriptors = _params_param__WEBPACK_IMPORTED_MODULE_11__["Param"].changed(allParamDescriptors, fromParams, toParams);
        return changedParamDescriptors.reduce(function (changedValues, descriptor) {
            changedValues[descriptor.id] = toParams[descriptor.id];
            return changedValues;
        }, {});
    };
    /**
     * Creates a [[UIInjector]] Dependency Injector
     *
     * Returns a Dependency Injector for the Transition's target state (to state).
     * The injector provides resolve values which the target state has access to.
     *
     * The `UIInjector` can also provide values from the native root/global injector (ng1/ng2).
     *
     * #### Example:
     * ```js
     * .onEnter({ entering: 'myState' }, trans => {
     *   var myResolveValue = trans.injector().get('myResolve');
     *   // Inject a global service from the global/native injector (if it exists)
     *   var MyService = trans.injector().get('MyService');
     * })
     * ```
     *
     * In some cases (such as `onBefore`), you may need access to some resolve data but it has not yet been fetched.
     * You can use [[UIInjector.getAsync]] to get a promise for the data.
     * #### Example:
     * ```js
     * .onBefore({}, trans => {
     *   return trans.injector().getAsync('myResolve').then(myResolveValue =>
     *     return myResolveValue !== 'ABORT';
     *   });
     * });
     * ```
     *
     * If a `state` is provided, the injector that is returned will be limited to resolve values that the provided state has access to.
     * This can be useful if both a parent state `foo` and a child state `foo.bar` have both defined a resolve such as `data`.
     * #### Example:
     * ```js
     * .onEnter({ to: 'foo.bar' }, trans => {
     *   // returns result of `foo` state's `myResolve` resolve
     *   // even though `foo.bar` also has a `myResolve` resolve
     *   var fooData = trans.injector('foo').get('myResolve');
     * });
     * ```
     *
     * If you need resolve data from the exiting states, pass `'from'` as `pathName`.
     * The resolve data from the `from` path will be returned.
     * #### Example:
     * ```js
     * .onExit({ exiting: 'foo.bar' }, trans => {
     *   // Gets the resolve value of `myResolve` from the state being exited
     *   var fooData = trans.injector(null, 'from').get('myResolve');
     * });
     * ```
     *
     *
     * @param state Limits the resolves provided to only the resolves the provided state has access to.
     * @param pathName Default: `'to'`: Chooses the path for which to create the injector. Use this to access resolves for `exiting` states.
     *
     * @returns a [[UIInjector]]
     */
    Transition.prototype.injector = function (state, pathName) {
        if (pathName === void 0) { pathName = 'to'; }
        var path = this._treeChanges[pathName];
        if (state)
            path = _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__["PathUtils"].subPath(path, function (node) { return node.state === state || node.state.name === state; });
        return new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_13__["ResolveContext"](path).injector();
    };
    /**
     * Gets all available resolve tokens (keys)
     *
     * This method can be used in conjunction with [[injector]] to inspect the resolve values
     * available to the Transition.
     *
     * This returns all the tokens defined on [[StateDeclaration.resolve]] blocks, for the states
     * in the Transition's [[TreeChanges.to]] path.
     *
     * #### Example:
     * This example logs all resolve values
     * ```js
     * let tokens = trans.getResolveTokens();
     * tokens.forEach(token => console.log(token + " = " + trans.injector().get(token)));
     * ```
     *
     * #### Example:
     * This example creates promises for each resolve value.
     * This triggers fetches of resolves (if any have not yet been fetched).
     * When all promises have all settled, it logs the resolve values.
     * ```js
     * let tokens = trans.getResolveTokens();
     * let promise = tokens.map(token => trans.injector().getAsync(token));
     * Promise.all(promises).then(values => console.log("Resolved values: " + values));
     * ```
     *
     * Note: Angular 1 users whould use `$q.all()`
     *
     * @param pathname resolve context's path name (e.g., `to` or `from`)
     *
     * @returns an array of resolve tokens (keys)
     */
    Transition.prototype.getResolveTokens = function (pathname) {
        if (pathname === void 0) { pathname = 'to'; }
        return new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_13__["ResolveContext"](this._treeChanges[pathname]).getTokens();
    };
    /**
     * Dynamically adds a new [[Resolvable]] (i.e., [[StateDeclaration.resolve]]) to this transition.
     *
     * Allows a transition hook to dynamically add a Resolvable to this Transition.
     *
     * Use the [[Transition.injector]] to retrieve the resolved data in subsequent hooks ([[UIInjector.get]]).
     *
     * If a `state` argument is provided, the Resolvable is processed when that state is being entered.
     * If no `state` is provided then the root state is used.
     * If the given `state` has already been entered, the Resolvable is processed when any child state is entered.
     * If no child states will be entered, the Resolvable is processed during the `onFinish` phase of the Transition.
     *
     * The `state` argument also scopes the resolved data.
     * The resolved data is available from the injector for that `state` and any children states.
     *
     * #### Example:
     * ```js
     * transitionService.onBefore({}, transition => {
     *   transition.addResolvable({
     *     token: 'myResolve',
     *     deps: ['MyService'],
     *     resolveFn: myService => myService.getData()
     *   });
     * });
     * ```
     *
     * @param resolvable a [[ResolvableLiteral]] object (or a [[Resolvable]])
     * @param state the state in the "to path" which should receive the new resolve (otherwise, the root state)
     */
    Transition.prototype.addResolvable = function (resolvable, state) {
        if (state === void 0) { state = ''; }
        resolvable = Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["is"])(_resolve_resolvable__WEBPACK_IMPORTED_MODULE_12__["Resolvable"])(resolvable) ? resolvable : new _resolve_resolvable__WEBPACK_IMPORTED_MODULE_12__["Resolvable"](resolvable);
        var stateName = typeof state === 'string' ? state : state.name;
        var topath = this._treeChanges.to;
        var targetNode = Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["find"])(topath, function (node) { return node.state.name === stateName; });
        var resolveContext = new _resolve_resolveContext__WEBPACK_IMPORTED_MODULE_13__["ResolveContext"](topath);
        resolveContext.addResolvables([resolvable], targetNode.state);
    };
    /**
     * Gets the transition from which this transition was redirected.
     *
     * If the current transition is a redirect, this method returns the transition that was redirected.
     *
     * #### Example:
     * ```js
     * let transitionA = $state.go('A').transition
     * transitionA.onStart({}, () => $state.target('B'));
     * $transitions.onSuccess({ to: 'B' }, (trans) => {
     *   trans.to().name === 'B'; // true
     *   trans.redirectedFrom() === transitionA; // true
     * });
     * ```
     *
     * @returns The previous Transition, or null if this Transition is not the result of a redirection
     */
    Transition.prototype.redirectedFrom = function () {
        return this._options.redirectedFrom || null;
    };
    /**
     * Gets the original transition in a redirect chain
     *
     * A transition might belong to a long chain of multiple redirects.
     * This method walks the [[redirectedFrom]] chain back to the original (first) transition in the chain.
     *
     * #### Example:
     * ```js
     * // states
     * registry.register({ name: 'A', redirectTo: 'B' });
     * registry.register({ name: 'B', redirectTo: 'C' });
     * registry.register({ name: 'C', redirectTo: 'D' });
     * registry.register({ name: 'D' });
     *
     * let transitionA = $state.go('A').transition
     *
     * $transitions.onSuccess({ to: 'D' }, (trans) => {
     *   trans.to().name === 'D'; // true
     *   trans.redirectedFrom().to().name === 'C'; // true
     *   trans.originalTransition() === transitionA; // true
     *   trans.originalTransition().to().name === 'A'; // true
     * });
     * ```
     *
     * @returns The original Transition that started a redirect chain
     */
    Transition.prototype.originalTransition = function () {
        var rf = this.redirectedFrom();
        return (rf && rf.originalTransition()) || this;
    };
    /**
     * Get the transition options
     *
     * @returns the options for this Transition.
     */
    Transition.prototype.options = function () {
        return this._options;
    };
    /**
     * Gets the states being entered.
     *
     * @returns an array of states that will be entered during this transition.
     */
    Transition.prototype.entering = function () {
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["map"])(this._treeChanges.entering, Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["prop"])('state')).map(stateSelf);
    };
    /**
     * Gets the states being exited.
     *
     * @returns an array of states that will be exited during this transition.
     */
    Transition.prototype.exiting = function () {
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["map"])(this._treeChanges.exiting, Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["prop"])('state'))
            .map(stateSelf)
            .reverse();
    };
    /**
     * Gets the states being retained.
     *
     * @returns an array of states that are already entered from a previous Transition, that will not be
     *    exited during this Transition
     */
    Transition.prototype.retained = function () {
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["map"])(this._treeChanges.retained, Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["prop"])('state')).map(stateSelf);
    };
    /**
     * Get the [[ViewConfig]]s associated with this Transition
     *
     * Each state can define one or more views (template/controller), which are encapsulated as `ViewConfig` objects.
     * This method fetches the `ViewConfigs` for a given path in the Transition (e.g., "to" or "entering").
     *
     * @param pathname the name of the path to fetch views for:
     *   (`'to'`, `'from'`, `'entering'`, `'exiting'`, `'retained'`)
     * @param state If provided, only returns the `ViewConfig`s for a single state in the path
     *
     * @returns a list of ViewConfig objects for the given path.
     */
    Transition.prototype.views = function (pathname, state) {
        if (pathname === void 0) { pathname = 'entering'; }
        var path = this._treeChanges[pathname];
        path = !state ? path : path.filter(Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["propEq"])('state', state));
        return path
            .map(Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["prop"])('views'))
            .filter(_common_common__WEBPACK_IMPORTED_MODULE_3__["identity"])
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_3__["unnestR"], []);
    };
    Transition.prototype.treeChanges = function (pathname) {
        return pathname ? this._treeChanges[pathname] : this._treeChanges;
    };
    /**
     * Creates a new transition that is a redirection of the current one.
     *
     * This transition can be returned from a [[TransitionService]] hook to
     * redirect a transition to a new state and/or set of parameters.
     *
     * @internalapi
     *
     * @returns Returns a new [[Transition]] instance.
     */
    Transition.prototype.redirect = function (targetState) {
        var redirects = 1, trans = this;
        // tslint:disable-next-line:no-conditional-assignment
        while ((trans = trans.redirectedFrom()) != null) {
            if (++redirects > 20)
                throw new Error("Too many consecutive Transition redirects (20+)");
        }
        var redirectOpts = { redirectedFrom: this, source: 'redirect' };
        // If the original transition was caused by URL sync, then use { location: 'replace' }
        // on the new transition (unless the target state explicitly specifies location: false).
        // This causes the original url to be replaced with the url for the redirect target
        // so the original url disappears from the browser history.
        if (this.options().source === 'url' && targetState.options().location !== false) {
            redirectOpts.location = 'replace';
        }
        var newOptions = Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["extend"])({}, this.options(), targetState.options(), redirectOpts);
        targetState = targetState.withOptions(newOptions, true);
        var newTransition = this.router.transitionService.create(this._treeChanges.from, targetState);
        var originalEnteringNodes = this._treeChanges.entering;
        var redirectEnteringNodes = newTransition._treeChanges.entering;
        // --- Re-use resolve data from original transition ---
        // When redirecting from a parent state to a child state where the parent parameter values haven't changed
        // (because of the redirect), the resolves fetched by the original transition are still valid in the
        // redirected transition.
        //
        // This allows you to define a redirect on a parent state which depends on an async resolve value.
        // You can wait for the resolve, then redirect to a child state based on the result.
        // The redirected transition does not have to re-fetch the resolve.
        // ---------------------------------------------------------
        var nodeIsReloading = function (reloadState) { return function (node) {
            return reloadState && node.state.includes[reloadState.name];
        }; };
        // Find any "entering" nodes in the redirect path that match the original path and aren't being reloaded
        var matchingEnteringNodes = _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__["PathUtils"].matching(redirectEnteringNodes, originalEnteringNodes, _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__["PathUtils"].nonDynamicParams).filter(Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["not"])(nodeIsReloading(targetState.options().reloadState)));
        // Use the existing (possibly pre-resolved) resolvables for the matching entering nodes.
        matchingEnteringNodes.forEach(function (node, idx) {
            node.resolvables = originalEnteringNodes[idx].resolvables;
        });
        return newTransition;
    };
    /** @hidden If a transition doesn't exit/enter any states, returns any [[Param]] whose value changed */
    Transition.prototype._changedParams = function () {
        var tc = this._treeChanges;
        /** Return undefined if it's not a "dynamic" transition, for the following reasons */
        // If user explicitly wants a reload
        if (this._options.reload)
            return undefined;
        // If any states are exiting or entering
        if (tc.exiting.length || tc.entering.length)
            return undefined;
        // If to/from path lengths differ
        if (tc.to.length !== tc.from.length)
            return undefined;
        // If the to/from paths are different
        var pathsDiffer = Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["arrayTuples"])(tc.to, tc.from)
            .map(function (tuple) { return tuple[0].state !== tuple[1].state; })
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_3__["anyTrueR"], false);
        if (pathsDiffer)
            return undefined;
        // Find any parameter values that differ
        var nodeSchemas = tc.to.map(function (node) { return node.paramSchema; });
        var _a = [tc.to, tc.from].map(function (path) { return path.map(function (x) { return x.paramValues; }); }), toValues = _a[0], fromValues = _a[1];
        var tuples = Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["arrayTuples"])(nodeSchemas, toValues, fromValues);
        return tuples.map(function (_a) {
            var schema = _a[0], toVals = _a[1], fromVals = _a[2];
            return _params_param__WEBPACK_IMPORTED_MODULE_11__["Param"].changed(schema, toVals, fromVals);
        }).reduce(_common_common__WEBPACK_IMPORTED_MODULE_3__["unnestR"], []);
    };
    /**
     * Returns true if the transition is dynamic.
     *
     * A transition is dynamic if no states are entered nor exited, but at least one dynamic parameter has changed.
     *
     * @returns true if the Transition is dynamic
     */
    Transition.prototype.dynamic = function () {
        var changes = this._changedParams();
        return !changes ? false : changes.map(function (x) { return x.dynamic; }).reduce(_common_common__WEBPACK_IMPORTED_MODULE_3__["anyTrueR"], false);
    };
    /**
     * Returns true if the transition is ignored.
     *
     * A transition is ignored if no states are entered nor exited, and no parameter values have changed.
     *
     * @returns true if the Transition is ignored.
     */
    Transition.prototype.ignored = function () {
        return !!this._ignoredReason();
    };
    /** @hidden */
    Transition.prototype._ignoredReason = function () {
        var pending = this.router.globals.transition;
        var reloadState = this._options.reloadState;
        var same = function (pathA, pathB) {
            if (pathA.length !== pathB.length)
                return false;
            var matching = _path_pathUtils__WEBPACK_IMPORTED_MODULE_10__["PathUtils"].matching(pathA, pathB);
            return pathA.length === matching.filter(function (node) { return !reloadState || !node.state.includes[reloadState.name]; }).length;
        };
        var newTC = this.treeChanges();
        var pendTC = pending && pending.treeChanges();
        if (pendTC && same(pendTC.to, newTC.to) && same(pendTC.exiting, newTC.exiting))
            return 'SameAsPending';
        if (newTC.exiting.length === 0 && newTC.entering.length === 0 && same(newTC.from, newTC.to))
            return 'SameAsCurrent';
    };
    /**
     * Runs the transition
     *
     * This method is generally called from the [[StateService.transitionTo]]
     *
     * @internalapi
     *
     * @returns a promise for a successful transition.
     */
    Transition.prototype.run = function () {
        var _this = this;
        var runAllHooks = _transitionHook__WEBPACK_IMPORTED_MODULE_7__["TransitionHook"].runAllHooks;
        // Gets transition hooks array for the given phase
        var getHooksFor = function (phase) { return _this._hookBuilder.buildHooksForPhase(phase); };
        // When the chain is complete, then resolve or reject the deferred
        var transitionSuccess = function () {
            _common_trace__WEBPACK_IMPORTED_MODULE_0__["trace"].traceSuccess(_this.$to(), _this);
            _this.success = true;
            _this._deferred.resolve(_this.to());
            runAllHooks(getHooksFor(_interface__WEBPACK_IMPORTED_MODULE_6__["TransitionHookPhase"].SUCCESS));
        };
        var transitionError = function (reason) {
            _common_trace__WEBPACK_IMPORTED_MODULE_0__["trace"].traceError(reason, _this);
            _this.success = false;
            _this._deferred.reject(reason);
            _this._error = reason;
            runAllHooks(getHooksFor(_interface__WEBPACK_IMPORTED_MODULE_6__["TransitionHookPhase"].ERROR));
        };
        var runTransition = function () {
            // Wait to build the RUN hook chain until the BEFORE hooks are done
            // This allows a BEFORE hook to dynamically add additional RUN hooks via the Transition object.
            var allRunHooks = getHooksFor(_interface__WEBPACK_IMPORTED_MODULE_6__["TransitionHookPhase"].RUN);
            var done = function () { return _common_coreservices__WEBPACK_IMPORTED_MODULE_1__["services"].$q.when(undefined); };
            return _transitionHook__WEBPACK_IMPORTED_MODULE_7__["TransitionHook"].invokeHooks(allRunHooks, done);
        };
        var startTransition = function () {
            var globals = _this.router.globals;
            globals.lastStartedTransitionId = _this.$id;
            globals.transition = _this;
            globals.transitionHistory.enqueue(_this);
            _common_trace__WEBPACK_IMPORTED_MODULE_0__["trace"].traceTransitionStart(_this);
            return _common_coreservices__WEBPACK_IMPORTED_MODULE_1__["services"].$q.when(undefined);
        };
        var allBeforeHooks = getHooksFor(_interface__WEBPACK_IMPORTED_MODULE_6__["TransitionHookPhase"].BEFORE);
        _transitionHook__WEBPACK_IMPORTED_MODULE_7__["TransitionHook"].invokeHooks(allBeforeHooks, startTransition)
            .then(runTransition)
            .then(transitionSuccess, transitionError);
        return this.promise;
    };
    /**
     * Checks if the Transition is valid
     *
     * @returns true if the Transition is valid
     */
    Transition.prototype.valid = function () {
        return !this.error() || this.success !== undefined;
    };
    /**
     * Aborts this transition
     *
     * Imperative API to abort a Transition.
     * This only applies to Transitions that are not yet complete.
     */
    Transition.prototype.abort = function () {
        // Do not set flag if the transition is already complete
        if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_4__["isUndefined"])(this.success)) {
            this._aborted = true;
        }
    };
    /**
     * The Transition error reason.
     *
     * If the transition is invalid (and could not be run), returns the reason the transition is invalid.
     * If the transition was valid and ran, but was not successful, returns the reason the transition failed.
     *
     * @returns a transition rejection explaining why the transition is invalid, or the reason the transition failed.
     */
    Transition.prototype.error = function () {
        var state = this.$to();
        if (state.self.abstract) {
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_14__["Rejection"].invalid("Cannot transition to abstract state '" + state.name + "'");
        }
        var paramDefs = state.parameters();
        var values = this.params();
        var invalidParams = paramDefs.filter(function (param) { return !param.validates(values[param.id]); });
        if (invalidParams.length) {
            var invalidValues = invalidParams.map(function (param) { return "[" + param.id + ":" + Object(_common_strings__WEBPACK_IMPORTED_MODULE_2__["stringify"])(values[param.id]) + "]"; }).join(', ');
            var detail = "The following parameter values are not valid for state '" + state.name + "': " + invalidValues;
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_14__["Rejection"].invalid(detail);
        }
        if (this.success === false)
            return this._error;
    };
    /**
     * A string representation of the Transition
     *
     * @returns A string representation of the Transition
     */
    Transition.prototype.toString = function () {
        var fromStateOrName = this.from();
        var toStateOrName = this.to();
        var avoidEmptyHash = function (params) {
            return params['#'] !== null && params['#'] !== undefined ? params : Object(_common_common__WEBPACK_IMPORTED_MODULE_3__["omit"])(params, ['#']);
        };
        // (X) means the to state is invalid.
        var id = this.$id, from = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_4__["isObject"])(fromStateOrName) ? fromStateOrName.name : fromStateOrName, fromParams = Object(_common_strings__WEBPACK_IMPORTED_MODULE_2__["stringify"])(avoidEmptyHash(this._treeChanges.from.map(Object(_common_hof__WEBPACK_IMPORTED_MODULE_5__["prop"])('paramValues')).reduce(_common_common__WEBPACK_IMPORTED_MODULE_3__["mergeR"], {}))), toValid = this.valid() ? '' : '(X) ', to = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_4__["isObject"])(toStateOrName) ? toStateOrName.name : toStateOrName, toParams = Object(_common_strings__WEBPACK_IMPORTED_MODULE_2__["stringify"])(avoidEmptyHash(this.params()));
        return "Transition#" + id + "( '" + from + "'" + fromParams + " -> " + toValid + "'" + to + "'" + toParams + " )";
    };
    /** @hidden */
    Transition.diToken = Transition;
    return Transition;
}());

//# sourceMappingURL=transition.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionEventType.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionEventType.js ***!
  \*******************************************************************************************************************/
/*! exports provided: TransitionEventType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionEventType", function() { return TransitionEventType; });
/* harmony import */ var _transitionHook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transitionHook */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js");

/**
 * This class defines a type of hook, such as `onBefore` or `onEnter`.
 * Plugins can define custom hook types, such as sticky states does for `onInactive`.
 *
 * @interalapi
 */
var TransitionEventType = /** @class */ (function () {
    /* tslint:disable:no-inferrable-types */
    function TransitionEventType(name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, synchronous) {
        if (reverseSort === void 0) { reverseSort = false; }
        if (getResultHandler === void 0) { getResultHandler = _transitionHook__WEBPACK_IMPORTED_MODULE_0__["TransitionHook"].HANDLE_RESULT; }
        if (getErrorHandler === void 0) { getErrorHandler = _transitionHook__WEBPACK_IMPORTED_MODULE_0__["TransitionHook"].REJECT_ERROR; }
        if (synchronous === void 0) { synchronous = false; }
        this.name = name;
        this.hookPhase = hookPhase;
        this.hookOrder = hookOrder;
        this.criteriaMatchPath = criteriaMatchPath;
        this.reverseSort = reverseSort;
        this.getResultHandler = getResultHandler;
        this.getErrorHandler = getErrorHandler;
        this.synchronous = synchronous;
    }
    return TransitionEventType;
}());

//# sourceMappingURL=transitionEventType.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js":
/*!**************************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js ***!
  \**************************************************************************************************************/
/*! exports provided: TransitionHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionHook", function() { return TransitionHook; });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/interface.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/trace */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/trace.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/* harmony import */ var _rejectFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rejectFactory */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/rejectFactory.js");
/* harmony import */ var _state_targetState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../state/targetState */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/targetState.js");
/** @publicapi @module transition */ /** */









var defaultOptions = {
    current: _common_common__WEBPACK_IMPORTED_MODULE_1__["noop"],
    transition: null,
    traceData: {},
    bind: null,
};
/** @hidden */
var TransitionHook = /** @class */ (function () {
    function TransitionHook(transition, stateContext, registeredHook, options) {
        var _this = this;
        this.transition = transition;
        this.stateContext = stateContext;
        this.registeredHook = registeredHook;
        this.options = options;
        this.isSuperseded = function () { return _this.type.hookPhase === _interface__WEBPACK_IMPORTED_MODULE_0__["TransitionHookPhase"].RUN && !_this.options.transition.isActive(); };
        this.options = Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["defaults"])(options, defaultOptions);
        this.type = registeredHook.eventType;
    }
    /**
     * Chains together an array of TransitionHooks.
     *
     * Given a list of [[TransitionHook]] objects, chains them together.
     * Each hook is invoked after the previous one completes.
     *
     * #### Example:
     * ```js
     * var hooks: TransitionHook[] = getHooks();
     * let promise: Promise<any> = TransitionHook.chain(hooks);
     *
     * promise.then(handleSuccess, handleError);
     * ```
     *
     * @param hooks the list of hooks to chain together
     * @param waitFor if provided, the chain is `.then()`'ed off this promise
     * @returns a `Promise` for sequentially invoking the hooks (in order)
     */
    TransitionHook.chain = function (hooks, waitFor) {
        // Chain the next hook off the previous
        var createHookChainR = function (prev, nextHook) { return prev.then(function () { return nextHook.invokeHook(); }); };
        return hooks.reduce(createHookChainR, waitFor || _common_coreservices__WEBPACK_IMPORTED_MODULE_6__["services"].$q.when());
    };
    /**
     * Invokes all the provided TransitionHooks, in order.
     * Each hook's return value is checked.
     * If any hook returns a promise, then the rest of the hooks are chained off that promise, and the promise is returned.
     * If no hook returns a promise, then all hooks are processed synchronously.
     *
     * @param hooks the list of TransitionHooks to invoke
     * @param doneCallback a callback that is invoked after all the hooks have successfully completed
     *
     * @returns a promise for the async result, or the result of the callback
     */
    TransitionHook.invokeHooks = function (hooks, doneCallback) {
        for (var idx = 0; idx < hooks.length; idx++) {
            var hookResult = hooks[idx].invokeHook();
            if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_3__["isPromise"])(hookResult)) {
                var remainingHooks = hooks.slice(idx + 1);
                return TransitionHook.chain(remainingHooks, hookResult).then(doneCallback);
            }
        }
        return doneCallback();
    };
    /**
     * Run all TransitionHooks, ignoring their return value.
     */
    TransitionHook.runAllHooks = function (hooks) {
        hooks.forEach(function (hook) { return hook.invokeHook(); });
    };
    TransitionHook.prototype.logError = function (err) {
        this.transition.router.stateService.defaultErrorHandler()(err);
    };
    TransitionHook.prototype.invokeHook = function () {
        var _this = this;
        var hook = this.registeredHook;
        if (hook._deregistered)
            return;
        var notCurrent = this.getNotCurrentRejection();
        if (notCurrent)
            return notCurrent;
        var options = this.options;
        _common_trace__WEBPACK_IMPORTED_MODULE_5__["trace"].traceHookInvocation(this, this.transition, options);
        var invokeCallback = function () { return hook.callback.call(options.bind, _this.transition, _this.stateContext); };
        var normalizeErr = function (err) { return _rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].normalize(err).toPromise(); };
        var handleError = function (err) { return hook.eventType.getErrorHandler(_this)(err); };
        var handleResult = function (result) { return hook.eventType.getResultHandler(_this)(result); };
        try {
            var result = invokeCallback();
            if (!this.type.synchronous && Object(_common_predicates__WEBPACK_IMPORTED_MODULE_3__["isPromise"])(result)) {
                return result.catch(normalizeErr).then(handleResult, handleError);
            }
            else {
                return handleResult(result);
            }
        }
        catch (err) {
            // If callback throws (synchronously)
            return handleError(_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].normalize(err));
        }
        finally {
            if (hook.invokeLimit && ++hook.invokeCount >= hook.invokeLimit) {
                hook.deregister();
            }
        }
    };
    /**
     * This method handles the return value of a Transition Hook.
     *
     * A hook can return false (cancel), a TargetState (redirect),
     * or a promise (which may later resolve to false or a redirect)
     *
     * This also handles "transition superseded" -- when a new transition
     * was started while the hook was still running
     */
    TransitionHook.prototype.handleHookResult = function (result) {
        var _this = this;
        var notCurrent = this.getNotCurrentRejection();
        if (notCurrent)
            return notCurrent;
        // Hook returned a promise
        if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_3__["isPromise"])(result)) {
            // Wait for the promise, then reprocess with the resulting value
            return result.then(function (val) { return _this.handleHookResult(val); });
        }
        _common_trace__WEBPACK_IMPORTED_MODULE_5__["trace"].traceHookResult(result, this.transition, this.options);
        // Hook returned false
        if (result === false) {
            // Abort this Transition
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].aborted('Hook aborted transition').toPromise();
        }
        var isTargetState = Object(_common_hof__WEBPACK_IMPORTED_MODULE_4__["is"])(_state_targetState__WEBPACK_IMPORTED_MODULE_8__["TargetState"]);
        // hook returned a TargetState
        if (isTargetState(result)) {
            // Halt the current Transition and redirect (a new Transition) to the TargetState.
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].redirected(result).toPromise();
        }
    };
    /**
     * Return a Rejection promise if the transition is no longer current due
     * to a stopped router (disposed), or a new transition has started and superseded this one.
     */
    TransitionHook.prototype.getNotCurrentRejection = function () {
        var router = this.transition.router;
        // The router is stopped
        if (router._disposed) {
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].aborted("UIRouter instance #" + router.$id + " has been stopped (disposed)").toPromise();
        }
        if (this.transition._aborted) {
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].aborted().toPromise();
        }
        // This transition is no longer current.
        // Another transition started while this hook was still running.
        if (this.isSuperseded()) {
            // Abort this transition
            return _rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].superseded(this.options.current()).toPromise();
        }
    };
    TransitionHook.prototype.toString = function () {
        var _a = this, options = _a.options, registeredHook = _a.registeredHook;
        var event = Object(_common_hof__WEBPACK_IMPORTED_MODULE_4__["parse"])('traceData.hookType')(options) || 'internal', context = Object(_common_hof__WEBPACK_IMPORTED_MODULE_4__["parse"])('traceData.context.state.name')(options) || Object(_common_hof__WEBPACK_IMPORTED_MODULE_4__["parse"])('traceData.context')(options) || 'unknown', name = Object(_common_strings__WEBPACK_IMPORTED_MODULE_2__["fnToString"])(registeredHook.callback);
        return event + " context: " + context + ", " + Object(_common_strings__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(200, name);
    };
    /**
     * These GetResultHandler(s) are used by [[invokeHook]] below
     * Each HookType chooses a GetResultHandler (See: [[TransitionService._defineCoreEvents]])
     */
    TransitionHook.HANDLE_RESULT = function (hook) { return function (result) {
        return hook.handleHookResult(result);
    }; };
    /**
     * If the result is a promise rejection, log it.
     * Otherwise, ignore the result.
     */
    TransitionHook.LOG_REJECTED_RESULT = function (hook) { return function (result) {
        Object(_common_predicates__WEBPACK_IMPORTED_MODULE_3__["isPromise"])(result) && result.catch(function (err) { return hook.logError(_rejectFactory__WEBPACK_IMPORTED_MODULE_7__["Rejection"].normalize(err)); });
        return undefined;
    }; };
    /**
     * These GetErrorHandler(s) are used by [[invokeHook]] below
     * Each HookType chooses a GetErrorHandler (See: [[TransitionService._defineCoreEvents]])
     */
    TransitionHook.LOG_ERROR = function (hook) { return function (error) { return hook.logError(error); }; };
    TransitionHook.REJECT_ERROR = function (hook) { return function (error) { return Object(_common_common__WEBPACK_IMPORTED_MODULE_1__["silentRejection"])(error); }; };
    TransitionHook.THROW_ERROR = function (hook) { return function (error) {
        throw error;
    }; };
    return TransitionHook;
}());

//# sourceMappingURL=transitionHook.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionService.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionService.js ***!
  \*****************************************************************************************************************/
/*! exports provided: defaultTransOpts, TransitionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTransOpts", function() { return defaultTransOpts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionService", function() { return TransitionService; });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/interface.js");
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transition */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transition.js");
/* harmony import */ var _hookRegistry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hookRegistry */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/hookRegistry.js");
/* harmony import */ var _hooks_coreResolvables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/coreResolvables */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/coreResolvables.js");
/* harmony import */ var _hooks_redirectTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/redirectTo */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/redirectTo.js");
/* harmony import */ var _hooks_onEnterExitRetain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/onEnterExitRetain */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/onEnterExitRetain.js");
/* harmony import */ var _hooks_resolve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/resolve */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/resolve.js");
/* harmony import */ var _hooks_views__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/views */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/views.js");
/* harmony import */ var _hooks_updateGlobals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/updateGlobals */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/updateGlobals.js");
/* harmony import */ var _hooks_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/url */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/url.js");
/* harmony import */ var _hooks_lazyLoad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/lazyLoad */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/lazyLoad.js");
/* harmony import */ var _transitionEventType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transitionEventType */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionEventType.js");
/* harmony import */ var _transitionHook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transitionHook */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/transition/transitionHook.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _hooks_ignoredTransition__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../hooks/ignoredTransition */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/ignoredTransition.js");
/* harmony import */ var _hooks_invalidTransition__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../hooks/invalidTransition */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/hooks/invalidTransition.js");
/** @publicapi @module transition */ /** */


















/**
 * The default [[Transition]] options.
 *
 * Include this object when applying custom defaults:
 * let reloadOpts = { reload: true, notify: true }
 * let options = defaults(theirOpts, customDefaults, defaultOptions);
 */
var defaultTransOpts = {
    location: true,
    relative: null,
    inherit: false,
    notify: true,
    reload: false,
    custom: {},
    current: function () { return null; },
    source: 'unknown',
};
/**
 * This class provides services related to Transitions.
 *
 * - Most importantly, it allows global Transition Hooks to be registered.
 * - It allows the default transition error handler to be set.
 * - It also has a factory function for creating new [[Transition]] objects, (used internally by the [[StateService]]).
 *
 * At bootstrap, [[UIRouter]] creates a single instance (singleton) of this class.
 */
var TransitionService = /** @class */ (function () {
    /** @hidden */
    function TransitionService(_router) {
        /** @hidden */
        this._transitionCount = 0;
        /** @hidden The transition hook types, such as `onEnter`, `onStart`, etc */
        this._eventTypes = [];
        /** @hidden The registered transition hooks */
        this._registeredHooks = {};
        /** @hidden The  paths on a criteria object */
        this._criteriaPaths = {};
        this._router = _router;
        this.$view = _router.viewService;
        this._deregisterHookFns = {};
        this._pluginapi = (Object(_common_common__WEBPACK_IMPORTED_MODULE_14__["createProxyFunctions"])(Object(_common_hof__WEBPACK_IMPORTED_MODULE_15__["val"])(this), {}, Object(_common_hof__WEBPACK_IMPORTED_MODULE_15__["val"])(this), [
            '_definePathType',
            '_defineEvent',
            '_getPathTypes',
            '_getEvents',
            'getHooks',
        ]));
        this._defineCorePaths();
        this._defineCoreEvents();
        this._registerCoreTransitionHooks();
        _router.globals.successfulTransitions.onEvict(_hooks_coreResolvables__WEBPACK_IMPORTED_MODULE_3__["treeChangesCleanup"]);
    }
    /**
     * Registers a [[TransitionHookFn]], called *while a transition is being constructed*.
     *
     * Registers a transition lifecycle hook, which is invoked during transition construction.
     *
     * This low level hook should only be used by plugins.
     * This can be a useful time for plugins to add resolves or mutate the transition as needed.
     * The Sticky States plugin uses this hook to modify the treechanges.
     *
     * ### Lifecycle
     *
     * `onCreate` hooks are invoked *while a transition is being constructed*.
     *
     * ### Return value
     *
     * The hook's return value is ignored
     *
     * @internalapi
     * @param criteria defines which Transitions the Hook should be invoked for.
     * @param callback the hook function which will be invoked.
     * @param options the registration options
     * @returns a function which deregisters the hook.
     */
    TransitionService.prototype.onCreate = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onBefore = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onStart = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onExit = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onRetain = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onEnter = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onFinish = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onSuccess = function (criteria, callback, options) {
        return;
    };
    /** @inheritdoc */
    TransitionService.prototype.onError = function (criteria, callback, options) {
        return;
    };
    /**
     * dispose
     * @internalapi
     */
    TransitionService.prototype.dispose = function (router) {
        Object(_common_common__WEBPACK_IMPORTED_MODULE_14__["values"])(this._registeredHooks).forEach(function (hooksArray) {
            return hooksArray.forEach(function (hook) {
                hook._deregistered = true;
                Object(_common_common__WEBPACK_IMPORTED_MODULE_14__["removeFrom"])(hooksArray, hook);
            });
        });
    };
    /**
     * Creates a new [[Transition]] object
     *
     * This is a factory function for creating new Transition objects.
     * It is used internally by the [[StateService]] and should generally not be called by application code.
     *
     * @param fromPath the path to the current state (the from state)
     * @param targetState the target state (destination)
     * @returns a Transition
     */
    TransitionService.prototype.create = function (fromPath, targetState) {
        return new _transition__WEBPACK_IMPORTED_MODULE_1__["Transition"](fromPath, targetState, this._router);
    };
    /** @hidden */
    TransitionService.prototype._defineCoreEvents = function () {
        var Phase = _interface__WEBPACK_IMPORTED_MODULE_0__["TransitionHookPhase"];
        var TH = _transitionHook__WEBPACK_IMPORTED_MODULE_12__["TransitionHook"];
        var paths = this._criteriaPaths;
        var NORMAL_SORT = false, REVERSE_SORT = true;
        var SYNCHRONOUS = true;
        this._defineEvent('onCreate', Phase.CREATE, 0, paths.to, NORMAL_SORT, TH.LOG_REJECTED_RESULT, TH.THROW_ERROR, SYNCHRONOUS);
        this._defineEvent('onBefore', Phase.BEFORE, 0, paths.to);
        this._defineEvent('onStart', Phase.RUN, 0, paths.to);
        this._defineEvent('onExit', Phase.RUN, 100, paths.exiting, REVERSE_SORT);
        this._defineEvent('onRetain', Phase.RUN, 200, paths.retained);
        this._defineEvent('onEnter', Phase.RUN, 300, paths.entering);
        this._defineEvent('onFinish', Phase.RUN, 400, paths.to);
        this._defineEvent('onSuccess', Phase.SUCCESS, 0, paths.to, NORMAL_SORT, TH.LOG_REJECTED_RESULT, TH.LOG_ERROR, SYNCHRONOUS);
        this._defineEvent('onError', Phase.ERROR, 0, paths.to, NORMAL_SORT, TH.LOG_REJECTED_RESULT, TH.LOG_ERROR, SYNCHRONOUS);
    };
    /** @hidden */
    TransitionService.prototype._defineCorePaths = function () {
        var STATE = _interface__WEBPACK_IMPORTED_MODULE_0__["TransitionHookScope"].STATE, TRANSITION = _interface__WEBPACK_IMPORTED_MODULE_0__["TransitionHookScope"].TRANSITION;
        this._definePathType('to', TRANSITION);
        this._definePathType('from', TRANSITION);
        this._definePathType('exiting', STATE);
        this._definePathType('retained', STATE);
        this._definePathType('entering', STATE);
    };
    /** @hidden */
    TransitionService.prototype._defineEvent = function (name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, synchronous) {
        if (reverseSort === void 0) { reverseSort = false; }
        if (getResultHandler === void 0) { getResultHandler = _transitionHook__WEBPACK_IMPORTED_MODULE_12__["TransitionHook"].HANDLE_RESULT; }
        if (getErrorHandler === void 0) { getErrorHandler = _transitionHook__WEBPACK_IMPORTED_MODULE_12__["TransitionHook"].REJECT_ERROR; }
        if (synchronous === void 0) { synchronous = false; }
        var eventType = new _transitionEventType__WEBPACK_IMPORTED_MODULE_11__["TransitionEventType"](name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, synchronous);
        this._eventTypes.push(eventType);
        Object(_hookRegistry__WEBPACK_IMPORTED_MODULE_2__["makeEvent"])(this, this, eventType);
    };
    /** @hidden */
    // tslint:disable-next-line
    TransitionService.prototype._getEvents = function (phase) {
        var transitionHookTypes = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_13__["isDefined"])(phase)
            ? this._eventTypes.filter(function (type) { return type.hookPhase === phase; })
            : this._eventTypes.slice();
        return transitionHookTypes.sort(function (l, r) {
            var cmpByPhase = l.hookPhase - r.hookPhase;
            return cmpByPhase === 0 ? l.hookOrder - r.hookOrder : cmpByPhase;
        });
    };
    /**
     * Adds a Path to be used as a criterion against a TreeChanges path
     *
     * For example: the `exiting` path in [[HookMatchCriteria]] is a STATE scoped path.
     * It was defined by calling `defineTreeChangesCriterion('exiting', TransitionHookScope.STATE)`
     * Each state in the exiting path is checked against the criteria and returned as part of the match.
     *
     * Another example: the `to` path in [[HookMatchCriteria]] is a TRANSITION scoped path.
     * It was defined by calling `defineTreeChangesCriterion('to', TransitionHookScope.TRANSITION)`
     * Only the tail of the `to` path is checked against the criteria and returned as part of the match.
     *
     * @hidden
     */
    TransitionService.prototype._definePathType = function (name, hookScope) {
        this._criteriaPaths[name] = { name: name, scope: hookScope };
    };
    /** * @hidden */
    // tslint:disable-next-line
    TransitionService.prototype._getPathTypes = function () {
        return this._criteriaPaths;
    };
    /** @hidden */
    TransitionService.prototype.getHooks = function (hookName) {
        return this._registeredHooks[hookName];
    };
    /** @hidden */
    TransitionService.prototype._registerCoreTransitionHooks = function () {
        var fns = this._deregisterHookFns;
        fns.addCoreResolves = Object(_hooks_coreResolvables__WEBPACK_IMPORTED_MODULE_3__["registerAddCoreResolvables"])(this);
        fns.ignored = Object(_hooks_ignoredTransition__WEBPACK_IMPORTED_MODULE_16__["registerIgnoredTransitionHook"])(this);
        fns.invalid = Object(_hooks_invalidTransition__WEBPACK_IMPORTED_MODULE_17__["registerInvalidTransitionHook"])(this);
        // Wire up redirectTo hook
        fns.redirectTo = Object(_hooks_redirectTo__WEBPACK_IMPORTED_MODULE_4__["registerRedirectToHook"])(this);
        // Wire up onExit/Retain/Enter state hooks
        fns.onExit = Object(_hooks_onEnterExitRetain__WEBPACK_IMPORTED_MODULE_5__["registerOnExitHook"])(this);
        fns.onRetain = Object(_hooks_onEnterExitRetain__WEBPACK_IMPORTED_MODULE_5__["registerOnRetainHook"])(this);
        fns.onEnter = Object(_hooks_onEnterExitRetain__WEBPACK_IMPORTED_MODULE_5__["registerOnEnterHook"])(this);
        // Wire up Resolve hooks
        fns.eagerResolve = Object(_hooks_resolve__WEBPACK_IMPORTED_MODULE_6__["registerEagerResolvePath"])(this);
        fns.lazyResolve = Object(_hooks_resolve__WEBPACK_IMPORTED_MODULE_6__["registerLazyResolveState"])(this);
        fns.resolveAll = Object(_hooks_resolve__WEBPACK_IMPORTED_MODULE_6__["registerResolveRemaining"])(this);
        // Wire up the View management hooks
        fns.loadViews = Object(_hooks_views__WEBPACK_IMPORTED_MODULE_7__["registerLoadEnteringViews"])(this);
        fns.activateViews = Object(_hooks_views__WEBPACK_IMPORTED_MODULE_7__["registerActivateViews"])(this);
        // Updates global state after a transition
        fns.updateGlobals = Object(_hooks_updateGlobals__WEBPACK_IMPORTED_MODULE_8__["registerUpdateGlobalState"])(this);
        // After globals.current is updated at priority: 10000
        fns.updateUrl = Object(_hooks_url__WEBPACK_IMPORTED_MODULE_9__["registerUpdateUrl"])(this);
        // Lazy load state trees
        fns.lazyLoad = Object(_hooks_lazyLoad__WEBPACK_IMPORTED_MODULE_10__["registerLazyLoadHook"])(this);
    };
    return TransitionService;
}());

//# sourceMappingURL=transitionService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/index.js":
/*!**********************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/index.js ***!
  \**********************************************************************************************/
/*! exports provided: UrlRules, UrlConfig, UrlMatcher, ParamFactory, UrlMatcherFactory, UrlRouter, UrlRuleFactory, BaseUrlRule, UrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _urlMatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./urlMatcher */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlMatcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlMatcher", function() { return _urlMatcher__WEBPACK_IMPORTED_MODULE_0__["UrlMatcher"]; });

/* harmony import */ var _urlMatcherFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlMatcherFactory */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlMatcherFactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParamFactory", function() { return _urlMatcherFactory__WEBPACK_IMPORTED_MODULE_1__["ParamFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlMatcherFactory", function() { return _urlMatcherFactory__WEBPACK_IMPORTED_MODULE_1__["UrlMatcherFactory"]; });

/* harmony import */ var _urlRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./urlRouter */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlRouter", function() { return _urlRouter__WEBPACK_IMPORTED_MODULE_2__["UrlRouter"]; });

/* harmony import */ var _urlRule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urlRule */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRule.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlRuleFactory", function() { return _urlRule__WEBPACK_IMPORTED_MODULE_3__["UrlRuleFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseUrlRule", function() { return _urlRule__WEBPACK_IMPORTED_MODULE_3__["BaseUrlRule"]; });

/* harmony import */ var _urlService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./urlService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlService", function() { return _urlService__WEBPACK_IMPORTED_MODULE_4__["UrlService"]; });

/* harmony import */ var _urlRules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./urlRules */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRules.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlRules", function() { return _urlRules__WEBPACK_IMPORTED_MODULE_5__["UrlRules"]; });

/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./urlConfig */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlConfig.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlConfig", function() { return _urlConfig__WEBPACK_IMPORTED_MODULE_6__["UrlConfig"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlConfig.js":
/*!**************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlConfig.js ***!
  \**************************************************************************************************/
/*! exports provided: UrlConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlConfig", function() { return UrlConfig; });
/* harmony import */ var _params__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../params */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");


/**
 * An API to customize the URL behavior and retrieve URL configuration
 *
 * This API is used to customize the behavior of the URL.
 * This includes optional trailing slashes ([[strictMode]]), case sensitivity ([[caseInsensitive]]),
 * and custom parameter encoding (custom [[type]]).
 *
 * It also has information about the location (url) configuration such as [[port]] and [[baseHref]].
 * This information can be used to build absolute URLs, such as
 * `https://example.com:443/basepath/state/substate?param1=a#hashvalue`;
 *
 * This API is a property of [[UrlService]] as [[UrlService.config]].
 */
var UrlConfig = /** @class */ (function () {
    /** @hidden */ function UrlConfig(/** @hidden */ router) {
        var _this = this;
        this.router = router;
        /** @hidden */ this.paramTypes = new _params__WEBPACK_IMPORTED_MODULE_0__["ParamTypes"]();
        /** @hidden */ this._isCaseInsensitive = false;
        /** @hidden */ this._isStrictMode = true;
        /** @hidden */ this._defaultSquashPolicy = false;
        /** @internalapi */ this.dispose = function () { return _this.paramTypes.dispose(); };
        // Delegate these calls to the current LocationConfig implementation
        /**
         * Gets the base Href, e.g., `http://localhost/approot/`
         *
         * @return the application's base href
         */
        this.baseHref = function () { return _this.router.locationConfig.baseHref(); };
        /**
         * Gets or sets the hashPrefix
         *
         * This only applies when not running in [[html5Mode]] (pushstate mode)
         *
         * If the current url is `http://localhost/app#!/uirouter/path/#anchor`, it returns `!` which is the prefix for the "hashbang" portion.
         *
         * @return the hash prefix
         */
        this.hashPrefix = function (newprefix) { return _this.router.locationConfig.hashPrefix(newprefix); };
        /**
         * Gets the host, e.g., `localhost`
         *
         * @return the protocol
         */
        this.host = function () { return _this.router.locationConfig.host(); };
        /**
         * Returns true when running in pushstate mode
         *
         * @return true when running in html5 mode (pushstate mode).
         */
        this.html5Mode = function () { return _this.router.locationConfig.html5Mode(); };
        /**
         * Gets the port, e.g., `80`
         *
         * @return the port number
         */
        this.port = function () { return _this.router.locationConfig.port(); };
        /**
         * Gets the protocol, e.g., `http`
         *
         * @return the protocol
         */
        this.protocol = function () { return _this.router.locationConfig.protocol(); };
    }
    /**
     * Defines whether URL matching should be case sensitive (the default behavior), or not.
     *
     * #### Example:
     * ```js
     * // Allow case insensitive url matches
     * urlService.config.caseInsensitive(true);
     * ```
     *
     * @param value `false` to match URL in a case sensitive manner; otherwise `true`;
     * @returns the current value of caseInsensitive
     */
    UrlConfig.prototype.caseInsensitive = function (value) {
        return (this._isCaseInsensitive = Object(_common__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(value) ? value : this._isCaseInsensitive);
    };
    /**
     * Sets the default behavior when generating or matching URLs with default parameter values.
     *
     * #### Example:
     * ```js
     * // Remove default parameter values from the url
     * urlService.config.defaultSquashPolicy(true);
     * ```
     *
     * @param value A string that defines the default parameter URL squashing behavior.
     *    - `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
     *    - `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
     *      parameter is surrounded by slashes, squash (remove) one slash from the URL
     *    - any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
     *      the parameter value from the URL and replace it with this string.
     * @returns the current value of defaultSquashPolicy
     */
    UrlConfig.prototype.defaultSquashPolicy = function (value) {
        if (Object(_common__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(value) && value !== true && value !== false && !Object(_common__WEBPACK_IMPORTED_MODULE_1__["isString"])(value))
            throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
        return (this._defaultSquashPolicy = Object(_common__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(value) ? value : this._defaultSquashPolicy);
    };
    /**
     * Defines whether URLs should match trailing slashes, or not (the default behavior).
     *
     * #### Example:
     * ```js
     * // Allow optional trailing slashes
     * urlService.config.strictMode(false);
     * ```
     *
     * @param value `false` to match trailing slashes in URLs, otherwise `true`.
     * @returns the current value of strictMode
     */
    UrlConfig.prototype.strictMode = function (value) {
        return (this._isStrictMode = Object(_common__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(value) ? value : this._isStrictMode);
    };
    /**
     * Creates and registers a custom [[ParamType]] object
     *
     * A custom parameter type can be used to generate URLs with typed parameters or custom encoding/decoding.
     *
     * #### Note: Register custom types *before using them* in a state definition.
     *
     * #### Example:
     * ```js
     * // Encode object parameter as JSON string
     * urlService.config.type('myjson', {
     *   encode: (obj) => JSON.stringify(obj),
     *   decode: (str) => JSON.parse(str),
     *   is: (val) => typeof(val) === 'object',
     *   pattern: /[^/]+/,
     *   equals: (a, b) => _.isEqual(a, b),
     * });
     * ```
     *
     * See [[ParamTypeDefinition]] for more examples
     *
     * @param name The type name.
     * @param definition The type definition. See [[ParamTypeDefinition]] for information on the values accepted.
     * @param definitionFn A function that is injected before the app runtime starts.
     *        The result of this function should be a [[ParamTypeDefinition]].
     *        The result is merged into the existing `definition`.
     *        See [[ParamType]] for information on the values accepted.
     *
     * @returns if only the `name` parameter was specified: the currently registered [[ParamType]] object, or undefined
     */
    UrlConfig.prototype.type = function (name, definition, definitionFn) {
        var type = this.paramTypes.type(name, definition, definitionFn);
        return !Object(_common__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(definition) ? type : this;
    };
    return UrlConfig;
}());

//# sourceMappingURL=urlConfig.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlMatcher.js":
/*!***************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlMatcher.js ***!
  \***************************************************************************************************/
/*! exports provided: UrlMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlMatcher", function() { return UrlMatcher; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _params_param__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../params/param */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/param.js");
/* harmony import */ var _common_strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/strings */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/strings.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/** @publicapi @module url */ /** */






/** @hidden */
function quoteRegExp(str, param) {
    var surroundPattern = ['', ''], result = str.replace(/[\\\[\]\^$*+?.()|{}]/g, '\\$&');
    if (!param)
        return result;
    switch (param.squash) {
        case false:
            surroundPattern = ['(', ')' + (param.isOptional ? '?' : '')];
            break;
        case true:
            result = result.replace(/\/$/, '');
            surroundPattern = ['(?:/(', ')|/)?'];
            break;
        default:
            surroundPattern = ["(" + param.squash + "|", ')?'];
            break;
    }
    return result + surroundPattern[0] + param.type.pattern.source + surroundPattern[1];
}
/** @hidden */
var memoizeTo = function (obj, _prop, fn) { return (obj[_prop] = obj[_prop] || fn()); };
/** @hidden */
var splitOnSlash = Object(_common_strings__WEBPACK_IMPORTED_MODULE_4__["splitOnDelim"])('/');
/** @hidden */
var defaultConfig = {
    state: { params: {} },
    strict: true,
    caseInsensitive: true,
};
/**
 * Matches URLs against patterns.
 *
 * Matches URLs against patterns and extracts named parameters from the path or the search
 * part of the URL.
 *
 * A URL pattern consists of a path pattern, optionally followed by '?' and a list of search (query)
 * parameters. Multiple search parameter names are separated by '&'. Search parameters
 * do not influence whether or not a URL is matched, but their values are passed through into
 * the matched parameters returned by [[UrlMatcher.exec]].
 *
 * - *Path parameters* are defined using curly brace placeholders (`/somepath/{param}`)
 * or colon placeholders (`/somePath/:param`).
 *
 * - *A parameter RegExp* may be defined for a param after a colon
 * (`/somePath/{param:[a-zA-Z0-9]+}`) in a curly brace placeholder.
 * The regexp must match for the url to be matched.
 * Should the regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
 *
 * Note: a RegExp parameter will encode its value using either [[ParamTypes.path]] or [[ParamTypes.query]].
 *
 * - *Custom parameter types* may also be specified after a colon (`/somePath/{param:int}`) in curly brace parameters.
 *   See [[UrlMatcherFactory.type]] for more information.
 *
 * - *Catch-all parameters* are defined using an asterisk placeholder (`/somepath/*catchallparam`).
 *   A catch-all * parameter value will contain the remainder of the URL.
 *
 * ---
 *
 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
 * must be unique within the pattern (across both path and search parameters).
 * A path parameter matches any number of characters other than '/'. For catch-all
 * placeholders the path parameter matches any number of characters.
 *
 * Examples:
 *
 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
 * * `'/user/{id:[^/]*}'` - Same as the previous example.
 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
 *   parameter consists of 1 to 8 hex digits.
 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
 *   path into the parameter 'path'.
 * * `'/files/*path'` - ditto.
 * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
 *   in the built-in  `date` ParamType matches `2014-11-12`) and provides a Date object in $stateParams.start
 *
 */
var UrlMatcher = /** @class */ (function () {
    /**
     * @param pattern The pattern to compile into a matcher.
     * @param paramTypes The [[ParamTypes]] registry
     * @param paramFactory A [[ParamFactory]] object
     * @param config  A [[UrlMatcherCompileConfig]] configuration object
     */
    function UrlMatcher(pattern, paramTypes, paramFactory, config) {
        var _this = this;
        /** @hidden */
        this._cache = { path: [this] };
        /** @hidden */
        this._children = [];
        /** @hidden */
        this._params = [];
        /** @hidden */
        this._segments = [];
        /** @hidden */
        this._compiled = [];
        this.config = config = Object(_common__WEBPACK_IMPORTED_MODULE_5__["defaults"])(config, defaultConfig);
        this.pattern = pattern;
        // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
        //   '*' name
        //   ':' name
        //   '{' name '}'
        //   '{' name ':' regexp '}'
        // The regular expression is somewhat complicated due to the need to allow curly braces
        // inside the regular expression. The placeholder regexp breaks down as follows:
        //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
        //    \{([\w\[\]]+)(?:\:\s*( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
        //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
        //    [^{}\\]+                       - anything other than curly braces or backslash
        //    \\.                            - a backslash escape
        //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
        var placeholder = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g;
        var searchPlaceholder = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g;
        var patterns = [];
        var last = 0;
        var matchArray;
        var checkParamErrors = function (id) {
            if (!UrlMatcher.nameValidator.test(id))
                throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
            if (Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["find"])(_this._params, Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["propEq"])('id', id)))
                throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
        };
        // Split into static segments separated by path parameter placeholders.
        // The number of segments is always 1 more than the number of parameters.
        var matchDetails = function (m, isSearch) {
            // IE[78] returns '' for unmatched groups instead of null
            var id = m[2] || m[3];
            var regexp = isSearch ? m[4] : m[4] || (m[1] === '*' ? '[\\s\\S]*' : null);
            var makeRegexpType = function (str) {
                return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inherit"])(paramTypes.type(isSearch ? 'query' : 'path'), {
                    pattern: new RegExp(str, _this.config.caseInsensitive ? 'i' : undefined),
                });
            };
            return {
                id: id,
                regexp: regexp,
                segment: pattern.substring(last, m.index),
                type: !regexp ? null : paramTypes.type(regexp) || makeRegexpType(regexp),
            };
        };
        var details;
        var segment;
        // tslint:disable-next-line:no-conditional-assignment
        while ((matchArray = placeholder.exec(pattern))) {
            details = matchDetails(matchArray, false);
            if (details.segment.indexOf('?') >= 0)
                break; // we're into the search part
            checkParamErrors(details.id);
            this._params.push(paramFactory.fromPath(details.id, details.type, config.state));
            this._segments.push(details.segment);
            patterns.push([details.segment, Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["tail"])(this._params)]);
            last = placeholder.lastIndex;
        }
        segment = pattern.substring(last);
        // Find any search parameter names and remove them from the last segment
        var i = segment.indexOf('?');
        if (i >= 0) {
            var search = segment.substring(i);
            segment = segment.substring(0, i);
            if (search.length > 0) {
                last = 0;
                // tslint:disable-next-line:no-conditional-assignment
                while ((matchArray = searchPlaceholder.exec(search))) {
                    details = matchDetails(matchArray, true);
                    checkParamErrors(details.id);
                    this._params.push(paramFactory.fromSearch(details.id, details.type, config.state));
                    last = placeholder.lastIndex;
                    // check if ?&
                }
            }
        }
        this._segments.push(segment);
        this._compiled = patterns.map(function (_pattern) { return quoteRegExp.apply(null, _pattern); }).concat(quoteRegExp(segment));
    }
    /** @hidden */
    UrlMatcher.encodeDashes = function (str) {
        // Replace dashes with encoded "\-"
        return encodeURIComponent(str).replace(/-/g, function (c) {
            return "%5C%" + c
                .charCodeAt(0)
                .toString(16)
                .toUpperCase();
        });
    };
    /** @hidden Given a matcher, return an array with the matcher's path segments and path params, in order */
    UrlMatcher.pathSegmentsAndParams = function (matcher) {
        var staticSegments = matcher._segments;
        var pathParams = matcher._params.filter(function (p) { return p.location === _params_param__WEBPACK_IMPORTED_MODULE_3__["DefType"].PATH; });
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["arrayTuples"])(staticSegments, pathParams.concat(undefined))
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], [])
            .filter(function (x) { return x !== '' && Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(x); });
    };
    /** @hidden Given a matcher, return an array with the matcher's query params */
    UrlMatcher.queryParams = function (matcher) {
        return matcher._params.filter(function (p) { return p.location === _params_param__WEBPACK_IMPORTED_MODULE_3__["DefType"].SEARCH; });
    };
    /**
     * Compare two UrlMatchers
     *
     * This comparison function converts a UrlMatcher into static and dynamic path segments.
     * Each static path segment is a static string between a path separator (slash character).
     * Each dynamic segment is a path parameter.
     *
     * The comparison function sorts static segments before dynamic ones.
     */
    UrlMatcher.compare = function (a, b) {
        /**
         * Turn a UrlMatcher and all its parent matchers into an array
         * of slash literals '/', string literals, and Param objects
         *
         * This example matcher matches strings like "/foo/:param/tail":
         * var matcher = $umf.compile("/foo").append($umf.compile("/:param")).append($umf.compile("/")).append($umf.compile("tail"));
         * var result = segments(matcher); // [ '/', 'foo', '/', Param, '/', 'tail' ]
         *
         * Caches the result as `matcher._cache.segments`
         */
        var segments = function (matcher) {
            return (matcher._cache.segments =
                matcher._cache.segments ||
                    matcher._cache.path
                        .map(UrlMatcher.pathSegmentsAndParams)
                        .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], [])
                        .reduce(_common_strings__WEBPACK_IMPORTED_MODULE_4__["joinNeighborsR"], [])
                        .map(function (x) { return (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isString"])(x) ? splitOnSlash(x) : x); })
                        .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], []));
        };
        /**
         * Gets the sort weight for each segment of a UrlMatcher
         *
         * Caches the result as `matcher._cache.weights`
         */
        var weights = function (matcher) {
            return (matcher._cache.weights =
                matcher._cache.weights ||
                    segments(matcher).map(function (segment) {
                        // Sort slashes first, then static strings, the Params
                        if (segment === '/')
                            return 1;
                        if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isString"])(segment))
                            return 2;
                        if (segment instanceof _params_param__WEBPACK_IMPORTED_MODULE_3__["Param"])
                            return 3;
                    }));
        };
        /**
         * Pads shorter array in-place (mutates)
         */
        var padArrays = function (l, r, padVal) {
            var len = Math.max(l.length, r.length);
            while (l.length < len)
                l.push(padVal);
            while (r.length < len)
                r.push(padVal);
        };
        var weightsA = weights(a), weightsB = weights(b);
        padArrays(weightsA, weightsB, 0);
        var _pairs = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["arrayTuples"])(weightsA, weightsB);
        var cmp, i;
        for (i = 0; i < _pairs.length; i++) {
            cmp = _pairs[i][0] - _pairs[i][1];
            if (cmp !== 0)
                return cmp;
        }
        return 0;
    };
    /**
     * Creates a new concatenated UrlMatcher
     *
     * Builds a new UrlMatcher by appending another UrlMatcher to this one.
     *
     * @param url A `UrlMatcher` instance to append as a child of the current `UrlMatcher`.
     */
    UrlMatcher.prototype.append = function (url) {
        this._children.push(url);
        url._cache = {
            path: this._cache.path.concat(url),
            parent: this,
            pattern: null,
        };
        return url;
    };
    /** @hidden */
    UrlMatcher.prototype.isRoot = function () {
        return this._cache.path[0] === this;
    };
    /** Returns the input pattern string */
    UrlMatcher.prototype.toString = function () {
        return this.pattern;
    };
    /**
     * Tests the specified url/path against this matcher.
     *
     * Tests if the given url matches this matcher's pattern, and returns an object containing the captured
     * parameter values.  Returns null if the path does not match.
     *
     * The returned object contains the values
     * of any search parameters that are mentioned in the pattern, but their value may be null if
     * they are not present in `search`. This means that search parameters are always treated
     * as optional.
     *
     * #### Example:
     * ```js
     * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
     *   x: '1', q: 'hello'
     * });
     * // returns { id: 'bob', q: 'hello', r: null }
     * ```
     *
     * @param path    The URL path to match, e.g. `$location.path()`.
     * @param search  URL search parameters, e.g. `$location.search()`.
     * @param hash    URL hash e.g. `$location.hash()`.
     * @param options
     *
     * @returns The captured parameter values.
     */
    UrlMatcher.prototype.exec = function (path, search, hash, options) {
        var _this = this;
        if (search === void 0) { search = {}; }
        if (options === void 0) { options = {}; }
        var match = memoizeTo(this._cache, 'pattern', function () {
            return new RegExp([
                '^',
                Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnest"])(_this._cache.path.map(Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["prop"])('_compiled'))).join(''),
                _this.config.strict === false ? '/?' : '',
                '$',
            ].join(''), _this.config.caseInsensitive ? 'i' : undefined);
        }).exec(path);
        if (!match)
            return null;
        // options = defaults(options, { isolate: false });
        var allParams = this.parameters(), pathParams = allParams.filter(function (param) { return !param.isSearch(); }), searchParams = allParams.filter(function (param) { return param.isSearch(); }), nPathSegments = this._cache.path.map(function (urlm) { return urlm._segments.length - 1; }).reduce(function (a, x) { return a + x; }), values = {};
        if (nPathSegments !== match.length - 1)
            throw new Error("Unbalanced capture group in route '" + this.pattern + "'");
        function decodePathArray(paramVal) {
            var reverseString = function (str) {
                return str
                    .split('')
                    .reverse()
                    .join('');
            };
            var unquoteDashes = function (str) { return str.replace(/\\-/g, '-'); };
            var split = reverseString(paramVal).split(/-(?!\\)/);
            var allReversed = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["map"])(split, reverseString);
            return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["map"])(allReversed, unquoteDashes).reverse();
        }
        for (var i = 0; i < nPathSegments; i++) {
            var param = pathParams[i];
            var value = match[i + 1];
            // if the param value matches a pre-replace pair, replace the value before decoding.
            for (var j = 0; j < param.replace.length; j++) {
                if (param.replace[j].from === value)
                    value = param.replace[j].to;
            }
            if (value && param.array === true)
                value = decodePathArray(value);
            if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(value))
                value = param.type.decode(value);
            values[param.id] = param.value(value);
        }
        searchParams.forEach(function (param) {
            var value = search[param.id];
            for (var j = 0; j < param.replace.length; j++) {
                if (param.replace[j].from === value)
                    value = param.replace[j].to;
            }
            if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(value))
                value = param.type.decode(value);
            values[param.id] = param.value(value);
        });
        if (hash)
            values['#'] = hash;
        return values;
    };
    /**
     * @hidden
     * Returns all the [[Param]] objects of all path and search parameters of this pattern in order of appearance.
     *
     * @returns {Array.<Param>}  An array of [[Param]] objects. Must be treated as read-only. If the
     *    pattern has no parameters, an empty array is returned.
     */
    UrlMatcher.prototype.parameters = function (opts) {
        if (opts === void 0) { opts = {}; }
        if (opts.inherit === false)
            return this._params;
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnest"])(this._cache.path.map(function (matcher) { return matcher._params; }));
    };
    /**
     * @hidden
     * Returns a single parameter from this UrlMatcher by id
     *
     * @param id
     * @param opts
     * @returns {T|Param|any|boolean|UrlMatcher|null}
     */
    UrlMatcher.prototype.parameter = function (id, opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        var findParam = function () {
            for (var _i = 0, _a = _this._params; _i < _a.length; _i++) {
                var param = _a[_i];
                if (param.id === id)
                    return param;
            }
        };
        var parent = this._cache.parent;
        return findParam() || (opts.inherit !== false && parent && parent.parameter(id, opts)) || null;
    };
    /**
     * Validates the input parameter values against this UrlMatcher
     *
     * Checks an object hash of parameters to validate their correctness according to the parameter
     * types of this `UrlMatcher`.
     *
     * @param params The object hash of parameters to validate.
     * @returns Returns `true` if `params` validates, otherwise `false`.
     */
    UrlMatcher.prototype.validates = function (params) {
        var validParamVal = function (param, val) { return !param || param.validates(val); };
        params = params || {};
        // I'm not sure why this checks only the param keys passed in, and not all the params known to the matcher
        var paramSchema = this.parameters().filter(function (paramDef) { return params.hasOwnProperty(paramDef.id); });
        return paramSchema.map(function (paramDef) { return validParamVal(paramDef, params[paramDef.id]); }).reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["allTrueR"], true);
    };
    /**
     * Given a set of parameter values, creates a URL from this UrlMatcher.
     *
     * Creates a URL that matches this pattern by substituting the specified values
     * for the path and search parameters.
     *
     * #### Example:
     * ```js
     * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
     * // returns '/user/bob?q=yes'
     * ```
     *
     * @param values  the values to substitute for the parameters in this pattern.
     * @returns the formatted URL (path and optionally search part).
     */
    UrlMatcher.prototype.format = function (values) {
        if (values === void 0) { values = {}; }
        // Build the full path of UrlMatchers (including all parent UrlMatchers)
        var urlMatchers = this._cache.path;
        // Extract all the static segments and Params (processed as ParamDetails)
        // into an ordered array
        var pathSegmentsAndParams = urlMatchers
            .map(UrlMatcher.pathSegmentsAndParams)
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], [])
            .map(function (x) { return (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isString"])(x) ? x : getDetails(x)); });
        // Extract the query params into a separate array
        var queryParams = urlMatchers
            .map(UrlMatcher.queryParams)
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], [])
            .map(getDetails);
        var isInvalid = function (param) { return param.isValid === false; };
        if (pathSegmentsAndParams.concat(queryParams).filter(isInvalid).length) {
            return null;
        }
        /**
         * Given a Param, applies the parameter value, then returns detailed information about it
         */
        function getDetails(param) {
            // Normalize to typed value
            var value = param.value(values[param.id]);
            var isValid = param.validates(value);
            var isDefaultValue = param.isDefaultValue(value);
            // Check if we're in squash mode for the parameter
            var squash = isDefaultValue ? param.squash : false;
            // Allow the Parameter's Type to encode the value
            var encoded = param.type.encode(value);
            return { param: param, value: value, isValid: isValid, isDefaultValue: isDefaultValue, squash: squash, encoded: encoded };
        }
        // Build up the path-portion from the list of static segments and parameters
        var pathString = pathSegmentsAndParams.reduce(function (acc, x) {
            // The element is a static segment (a raw string); just append it
            if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isString"])(x))
                return acc + x;
            // Otherwise, it's a ParamDetails.
            var squash = x.squash, encoded = x.encoded, param = x.param;
            // If squash is === true, try to remove a slash from the path
            if (squash === true)
                return acc.match(/\/$/) ? acc.slice(0, -1) : acc;
            // If squash is a string, use the string for the param value
            if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isString"])(squash))
                return acc + squash;
            if (squash !== false)
                return acc; // ?
            if (encoded == null)
                return acc;
            // If this parameter value is an array, encode the value using encodeDashes
            if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isArray"])(encoded))
                return acc + Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["map"])(encoded, UrlMatcher.encodeDashes).join('-');
            // If the parameter type is "raw", then do not encodeURIComponent
            if (param.raw)
                return acc + encoded;
            // Encode the value
            return acc + encodeURIComponent(encoded);
        }, '');
        // Build the query string by applying parameter values (array or regular)
        // then mapping to key=value, then flattening and joining using "&"
        var queryString = queryParams
            .map(function (paramDetails) {
            var param = paramDetails.param, squash = paramDetails.squash, encoded = paramDetails.encoded, isDefaultValue = paramDetails.isDefaultValue;
            if (encoded == null || (isDefaultValue && squash !== false))
                return;
            if (!Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isArray"])(encoded))
                encoded = [encoded];
            if (encoded.length === 0)
                return;
            if (!param.raw)
                encoded = Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["map"])(encoded, encodeURIComponent);
            return encoded.map(function (val) { return param.id + "=" + val; });
        })
            .filter(_common_common__WEBPACK_IMPORTED_MODULE_0__["identity"])
            .reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], [])
            .join('&');
        // Concat the pathstring with the queryString (if exists) and the hashString (if exists)
        return pathString + (queryString ? "?" + queryString : '') + (values['#'] ? '#' + values['#'] : '');
    };
    /** @hidden */
    UrlMatcher.nameValidator = /^\w+([-.]+\w+)*(?:\[\])?$/;
    return UrlMatcher;
}());

//# sourceMappingURL=urlMatcher.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlMatcherFactory.js":
/*!**********************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlMatcherFactory.js ***!
  \**********************************************************************************************************/
/*! exports provided: ParamFactory, UrlMatcherFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamFactory", function() { return ParamFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlMatcherFactory", function() { return UrlMatcherFactory; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _urlMatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlMatcher */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlMatcher.js");
/* harmony import */ var _params__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../params */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/params/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/** @publicapi @module url */ /** */



/** @internalapi */
var ParamFactory = /** @class */ (function () {
    function ParamFactory(router) {
        this.router = router;
    }
    ParamFactory.prototype.fromConfig = function (id, type, state) {
        return new _params__WEBPACK_IMPORTED_MODULE_2__["Param"](id, type, _params__WEBPACK_IMPORTED_MODULE_2__["DefType"].CONFIG, this.router.urlService.config, state);
    };
    ParamFactory.prototype.fromPath = function (id, type, state) {
        return new _params__WEBPACK_IMPORTED_MODULE_2__["Param"](id, type, _params__WEBPACK_IMPORTED_MODULE_2__["DefType"].PATH, this.router.urlService.config, state);
    };
    ParamFactory.prototype.fromSearch = function (id, type, state) {
        return new _params__WEBPACK_IMPORTED_MODULE_2__["Param"](id, type, _params__WEBPACK_IMPORTED_MODULE_2__["DefType"].SEARCH, this.router.urlService.config, state);
    };
    return ParamFactory;
}());

/**
 * Factory for [[UrlMatcher]] instances.
 *
 * The factory is available to ng1 services as
 * `$urlMatcherFactory` or ng1 providers as `$urlMatcherFactoryProvider`.
 *
 * @internalapi
 */
var UrlMatcherFactory = /** @class */ (function () {
    // TODO: move implementations to UrlConfig (urlService.config)
    function UrlMatcherFactory(/** @hidden */ router) {
        var _this = this;
        this.router = router;
        /** @internalapi Creates a new [[Param]] for a given location (DefType) */
        this.paramFactory = new ParamFactory(this.router);
        /** @deprecated use [[UrlConfig.caseInsensitive]] */
        this.caseInsensitive = function (value) { return _this.router.urlService.config.caseInsensitive(value); };
        /** @deprecated use [[UrlConfig.defaultSquashPolicy]] */
        this.defaultSquashPolicy = function (value) { return _this.router.urlService.config.defaultSquashPolicy(value); };
        /** @deprecated use [[UrlConfig.strictMode]] */
        this.strictMode = function (value) { return _this.router.urlService.config.strictMode(value); };
        /** @deprecated use [[UrlConfig.type]] */
        this.type = function (name, definition, definitionFn) {
            return _this.router.urlService.config.type(name, definition, definitionFn) || _this;
        };
        Object(_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(this, { UrlMatcher: _urlMatcher__WEBPACK_IMPORTED_MODULE_1__["UrlMatcher"], Param: _params__WEBPACK_IMPORTED_MODULE_2__["Param"] });
    }
    /**
     * Creates a [[UrlMatcher]] for the specified pattern.
     *
     * @param pattern  The URL pattern.
     * @param config  The config object hash.
     * @returns The UrlMatcher.
     */
    UrlMatcherFactory.prototype.compile = function (pattern, config) {
        var urlConfig = this.router.urlService.config;
        // backward-compatible support for config.params -> config.state.params
        var params = config && !config.state && config.params;
        config = params ? __assign({ state: { params: params } }, config) : config;
        var globalConfig = { strict: urlConfig._isStrictMode, caseInsensitive: urlConfig._isCaseInsensitive };
        return new _urlMatcher__WEBPACK_IMPORTED_MODULE_1__["UrlMatcher"](pattern, urlConfig.paramTypes, this.paramFactory, Object(_common__WEBPACK_IMPORTED_MODULE_0__["extend"])(globalConfig, config));
    };
    /**
     * Returns true if the specified object is a [[UrlMatcher]], or false otherwise.
     *
     * @param object  The object to perform the type check against.
     * @returns `true` if the object matches the `UrlMatcher` interface, by
     *          implementing all the same methods.
     */
    UrlMatcherFactory.prototype.isMatcher = function (object) {
        // TODO: typeof?
        if (!Object(_common__WEBPACK_IMPORTED_MODULE_0__["isObject"])(object))
            return false;
        var result = true;
        Object(_common__WEBPACK_IMPORTED_MODULE_0__["forEach"])(_urlMatcher__WEBPACK_IMPORTED_MODULE_1__["UrlMatcher"].prototype, function (val, name) {
            if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(val))
                result = result && (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(object[name]) && Object(_common__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(object[name]));
        });
        return result;
    };
    /** @hidden */
    UrlMatcherFactory.prototype.$get = function () {
        var urlConfig = this.router.urlService.config;
        urlConfig.paramTypes.enqueue = false;
        urlConfig.paramTypes._flushTypeQueue();
        return this;
    };
    return UrlMatcherFactory;
}());

//# sourceMappingURL=urlMatcherFactory.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRouter.js":
/*!**************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRouter.js ***!
  \**************************************************************************************************/
/*! exports provided: UrlRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlRouter", function() { return UrlRouter; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _urlRule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlRule */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRule.js");
/** @publicapi @module url */ /** */


/** @hidden */
function appendBasePath(url, isHtml5, absolute, baseHref) {
    if (baseHref === '/')
        return url;
    if (isHtml5)
        return Object(_common__WEBPACK_IMPORTED_MODULE_0__["stripLastPathElement"])(baseHref) + url;
    if (absolute)
        return baseHref.slice(1) + url;
    return url;
}
/**
 * Updates URL and responds to URL changes
 *
 * ### Deprecation warning:
 * This class is now considered to be an internal API
 * Use the [[UrlService]] instead.
 * For configuring URL rules, use the [[UrlRules]] which can be found as [[UrlService.rules]].
 *
 * @internalapi
 */
var UrlRouter = /** @class */ (function () {
    /** @hidden */
    function UrlRouter(/** @hidden */ router) {
        var _this = this;
        this.router = router;
        // Delegate these calls to [[UrlService]]
        /** @deprecated use [[UrlService.sync]]*/
        this.sync = function (evt) { return _this.router.urlService.sync(evt); };
        /** @deprecated use [[UrlService.listen]]*/
        this.listen = function (enabled) { return _this.router.urlService.listen(enabled); };
        /** @deprecated use [[UrlService.deferIntercept]]*/
        this.deferIntercept = function (defer) { return _this.router.urlService.deferIntercept(defer); };
        /** @deprecated use [[UrlService.match]]*/
        this.match = function (urlParts) { return _this.router.urlService.match(urlParts); };
        // Delegate these calls to [[UrlRules]]
        /** @deprecated use [[UrlRules.initial]]*/
        this.initial = function (handler) {
            return _this.router.urlService.rules.initial(handler);
        };
        /** @deprecated use [[UrlRules.otherwise]]*/
        this.otherwise = function (handler) {
            return _this.router.urlService.rules.otherwise(handler);
        };
        /** @deprecated use [[UrlRules.removeRule]]*/
        this.removeRule = function (rule) { return _this.router.urlService.rules.removeRule(rule); };
        /** @deprecated use [[UrlRules.rule]]*/
        this.rule = function (rule) { return _this.router.urlService.rules.rule(rule); };
        /** @deprecated use [[UrlRules.rules]]*/
        this.rules = function () { return _this.router.urlService.rules.rules(); };
        /** @deprecated use [[UrlRules.sort]]*/
        this.sort = function (compareFn) { return _this.router.urlService.rules.sort(compareFn); };
        /** @deprecated use [[UrlRules.when]]*/
        this.when = function (matcher, handler, options) { return _this.router.urlService.rules.when(matcher, handler, options); };
        this.urlRuleFactory = new _urlRule__WEBPACK_IMPORTED_MODULE_1__["UrlRuleFactory"](router);
    }
    /**
     * Internal API.
     * @internalapi
     */
    UrlRouter.prototype.update = function (read) {
        var $url = this.router.locationService;
        if (read) {
            this.location = $url.url();
            return;
        }
        if ($url.url() === this.location)
            return;
        $url.url(this.location, true);
    };
    /**
     * Internal API.
     *
     * Pushes a new location to the browser history.
     *
     * @internalapi
     * @param urlMatcher
     * @param params
     * @param options
     */
    UrlRouter.prototype.push = function (urlMatcher, params, options) {
        var replace = options && !!options.replace;
        this.router.urlService.url(urlMatcher.format(params || {}), replace);
    };
    /**
     * Builds and returns a URL with interpolated parameters
     *
     * #### Example:
     * ```js
     * matcher = $umf.compile("/about/:person");
     * params = { person: "bob" };
     * $bob = $urlRouter.href(matcher, params);
     * // $bob == "/about/bob";
     * ```
     *
     * @param urlMatcher The [[UrlMatcher]] object which is used as the template of the URL to generate.
     * @param params An object of parameter values to fill the matcher's required parameters.
     * @param options Options object. The options are:
     *
     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
     *
     * @returns Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
     */
    UrlRouter.prototype.href = function (urlMatcher, params, options) {
        var url = urlMatcher.format(params);
        if (url == null)
            return null;
        options = options || { absolute: false };
        var cfg = this.router.urlService.config;
        var isHtml5 = cfg.html5Mode();
        if (!isHtml5 && url !== null) {
            url = '#' + cfg.hashPrefix() + url;
        }
        url = appendBasePath(url, isHtml5, options.absolute, cfg.baseHref());
        if (!options.absolute || !url) {
            return url;
        }
        var slash = !isHtml5 && url ? '/' : '';
        var cfgPort = cfg.port();
        var port = (cfgPort === 80 || cfgPort === 443 ? '' : ':' + cfgPort);
        return [cfg.protocol(), '://', cfg.host(), port, slash, url].join('');
    };
    Object.defineProperty(UrlRouter.prototype, "interceptDeferred", {
        /** @deprecated use [[UrlService.interceptDeferred]]*/
        get: function () {
            return this.router.urlService.interceptDeferred;
        },
        enumerable: true,
        configurable: true
    });
    return UrlRouter;
}());

//# sourceMappingURL=urlRouter.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRule.js":
/*!************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRule.js ***!
  \************************************************************************************************/
/*! exports provided: UrlRuleFactory, BaseUrlRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlRuleFactory", function() { return UrlRuleFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseUrlRule", function() { return BaseUrlRule; });
/* harmony import */ var _urlMatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./urlMatcher */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlMatcher.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _state_stateObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/stateObject */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/stateObject.js");
/** @publicapi @module url */ /** */





/**
 * Creates a [[UrlRule]]
 *
 * Creates a [[UrlRule]] from a:
 *
 * - `string`
 * - [[UrlMatcher]]
 * - `RegExp`
 * - [[StateObject]]
 * @internalapi
 */
var UrlRuleFactory = /** @class */ (function () {
    function UrlRuleFactory(router) {
        this.router = router;
    }
    UrlRuleFactory.prototype.compile = function (str) {
        return this.router.urlMatcherFactory.compile(str);
    };
    UrlRuleFactory.prototype.create = function (what, handler) {
        var _this = this;
        var isState = _state_stateObject__WEBPACK_IMPORTED_MODULE_4__["StateObject"].isState;
        var makeRule = Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["pattern"])([
            [_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"], function (_what) { return makeRule(_this.compile(_what)); }],
            [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["is"])(_urlMatcher__WEBPACK_IMPORTED_MODULE_0__["UrlMatcher"]), function (_what) { return _this.fromUrlMatcher(_what, handler); }],
            [isState, function (_what) { return _this.fromState(_what, _this.router); }],
            [Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["is"])(RegExp), function (_what) { return _this.fromRegExp(_what, handler); }],
            [_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isFunction"], function (_what) { return new BaseUrlRule(_what, handler); }],
        ]);
        var rule = makeRule(what);
        if (!rule)
            throw new Error("invalid 'what' in when()");
        return rule;
    };
    /**
     * A UrlRule which matches based on a UrlMatcher
     *
     * The `handler` may be either a `string`, a [[UrlRuleHandlerFn]] or another [[UrlMatcher]]
     *
     * ## Handler as a function
     *
     * If `handler` is a function, the function is invoked with:
     *
     * - matched parameter values ([[RawParams]] from [[UrlMatcher.exec]])
     * - url: the current Url ([[UrlParts]])
     * - router: the router object ([[UIRouter]])
     *
     * #### Example:
     * ```js
     * var urlMatcher = $umf.compile("/foo/:fooId/:barId");
     * var rule = factory.fromUrlMatcher(urlMatcher, match => "/home/" + match.fooId + "/" + match.barId);
     * var match = rule.match('/foo/123/456'); // results in { fooId: '123', barId: '456' }
     * var result = rule.handler(match); // '/home/123/456'
     * ```
     *
     * ## Handler as UrlMatcher
     *
     * If `handler` is a UrlMatcher, the handler matcher is used to create the new url.
     * The `handler` UrlMatcher is formatted using the matched param from the first matcher.
     * The url is replaced with the result.
     *
     * #### Example:
     * ```js
     * var urlMatcher = $umf.compile("/foo/:fooId/:barId");
     * var handler = $umf.compile("/home/:fooId/:barId");
     * var rule = factory.fromUrlMatcher(urlMatcher, handler);
     * var match = rule.match('/foo/123/456'); // results in { fooId: '123', barId: '456' }
     * var result = rule.handler(match); // '/home/123/456'
     * ```
     */
    UrlRuleFactory.prototype.fromUrlMatcher = function (urlMatcher, handler) {
        var _handler = handler;
        if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"])(handler))
            handler = this.router.urlMatcherFactory.compile(handler);
        if (Object(_common_hof__WEBPACK_IMPORTED_MODULE_3__["is"])(_urlMatcher__WEBPACK_IMPORTED_MODULE_0__["UrlMatcher"])(handler))
            _handler = function (match) { return handler.format(match); };
        function matchUrlParamters(url) {
            var params = urlMatcher.exec(url.path, url.search, url.hash);
            return urlMatcher.validates(params) && params;
        }
        // Prioritize URLs, lowest to highest:
        // - Some optional URL parameters, but none matched
        // - No optional parameters in URL
        // - Some optional parameters, some matched
        // - Some optional parameters, all matched
        function matchPriority(params) {
            var optional = urlMatcher.parameters().filter(function (param) { return param.isOptional; });
            if (!optional.length)
                return 0.000001;
            var matched = optional.filter(function (param) { return params[param.id]; });
            return matched.length / optional.length;
        }
        var details = { urlMatcher: urlMatcher, matchPriority: matchPriority, type: 'URLMATCHER' };
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_2__["extend"])(new BaseUrlRule(matchUrlParamters, _handler), details);
    };
    /**
     * A UrlRule which matches a state by its url
     *
     * #### Example:
     * ```js
     * var rule = factory.fromState($state.get('foo'), router);
     * var match = rule.match('/foo/123/456'); // results in { fooId: '123', barId: '456' }
     * var result = rule.handler(match);
     * // Starts a transition to 'foo' with params: { fooId: '123', barId: '456' }
     * ```
     */
    UrlRuleFactory.prototype.fromState = function (state, router) {
        /**
         * Handles match by transitioning to matched state
         *
         * First checks if the router should start a new transition.
         * A new transition is not required if the current state's URL
         * and the new URL are already identical
         */
        var handler = function (match) {
            var $state = router.stateService;
            var globals = router.globals;
            if ($state.href(state, match) !== $state.href(globals.current, globals.params)) {
                $state.transitionTo(state, match, { inherit: true, source: 'url' });
            }
        };
        var details = { state: state, type: 'STATE' };
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_2__["extend"])(this.fromUrlMatcher(state.url, handler), details);
    };
    /**
     * A UrlRule which matches based on a regular expression
     *
     * The `handler` may be either a [[UrlRuleHandlerFn]] or a string.
     *
     * ## Handler as a function
     *
     * If `handler` is a function, the function is invoked with:
     *
     * - regexp match array (from `regexp`)
     * - url: the current Url ([[UrlParts]])
     * - router: the router object ([[UIRouter]])
     *
     * #### Example:
     * ```js
     * var rule = factory.fromRegExp(/^\/foo\/(bar|baz)$/, match => "/home/" + match[1])
     * var match = rule.match('/foo/bar'); // results in [ '/foo/bar', 'bar' ]
     * var result = rule.handler(match); // '/home/bar'
     * ```
     *
     * ## Handler as string
     *
     * If `handler` is a string, the url is *replaced by the string* when the Rule is invoked.
     * The string is first interpolated using `string.replace()` style pattern.
     *
     * #### Example:
     * ```js
     * var rule = factory.fromRegExp(/^\/foo\/(bar|baz)$/, "/home/$1")
     * var match = rule.match('/foo/bar'); // results in [ '/foo/bar', 'bar' ]
     * var result = rule.handler(match); // '/home/bar'
     * ```
     */
    UrlRuleFactory.prototype.fromRegExp = function (regexp, handler) {
        if (regexp.global || regexp.sticky)
            throw new Error('Rule RegExp must not be global or sticky');
        /**
         * If handler is a string, the url will be replaced by the string.
         * If the string has any String.replace() style variables in it (like `$2`),
         * they will be replaced by the captures from [[match]]
         */
        var redirectUrlTo = function (match) {
            // Interpolates matched values into $1 $2, etc using a String.replace()-style pattern
            return handler.replace(/\$(\$|\d{1,2})/, function (m, what) { return match[what === '$' ? 0 : Number(what)]; });
        };
        var _handler = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isString"])(handler) ? redirectUrlTo : handler;
        var matchParamsFromRegexp = function (url) { return regexp.exec(url.path); };
        var details = { regexp: regexp, type: 'REGEXP' };
        return Object(_common_common__WEBPACK_IMPORTED_MODULE_2__["extend"])(new BaseUrlRule(matchParamsFromRegexp, _handler), details);
    };
    UrlRuleFactory.isUrlRule = function (obj) { return obj && ['type', 'match', 'handler'].every(function (key) { return Object(_common_predicates__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(obj[key]); }); };
    return UrlRuleFactory;
}());

/**
 * A base rule which calls `match`
 *
 * The value from the `match` function is passed through to the `handler`.
 * @internalapi
 */
var BaseUrlRule = /** @class */ (function () {
    function BaseUrlRule(match, handler) {
        var _this = this;
        this.match = match;
        this.type = 'RAW';
        this.matchPriority = function (match) { return 0 - _this.$id; };
        this.handler = handler || _common_common__WEBPACK_IMPORTED_MODULE_2__["identity"];
    }
    return BaseUrlRule;
}());

//# sourceMappingURL=urlRule.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRules.js":
/*!*************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRules.js ***!
  \*************************************************************************************************/
/*! exports provided: UrlRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlRules", function() { return UrlRules; });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/index.js");
/* harmony import */ var _urlMatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlMatcher */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlMatcher.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _urlRule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urlRule */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRule.js");




/** @hidden */
var prioritySort = function (a, b) { return (b.priority || 0) - (a.priority || 0); };
/** @hidden */
var typeSort = function (a, b) {
    var weights = { STATE: 4, URLMATCHER: 4, REGEXP: 3, RAW: 2, OTHER: 1 };
    return (weights[a.type] || 0) - (weights[b.type] || 0);
};
/** @hidden */
var urlMatcherSort = function (a, b) {
    return !a.urlMatcher || !b.urlMatcher ? 0 : _urlMatcher__WEBPACK_IMPORTED_MODULE_1__["UrlMatcher"].compare(a.urlMatcher, b.urlMatcher);
};
/** @hidden */
var idSort = function (a, b) {
    // Identically sorted STATE and URLMATCHER best rule will be chosen by `matchPriority` after each rule matches the URL
    var useMatchPriority = { STATE: true, URLMATCHER: true };
    var equal = useMatchPriority[a.type] && useMatchPriority[b.type];
    return equal ? 0 : (a.$id || 0) - (b.$id || 0);
};
/**
 * Default rule priority sorting function.
 *
 * Sorts rules by:
 *
 * - Explicit priority (set rule priority using [[UrlRules.when]])
 * - Rule type (STATE: 4, URLMATCHER: 4, REGEXP: 3, RAW: 2, OTHER: 1)
 * - `UrlMatcher` specificity ([[UrlMatcher.compare]]): works for STATE and URLMATCHER types to pick the most specific rule.
 * - Rule registration order (for rule types other than STATE and URLMATCHER)
 *   - Equally sorted State and UrlMatcher rules will each match the URL.
 *     Then, the *best* match is chosen based on how many parameter values were matched.
 *
 * @publicapi
 */
var defaultRuleSortFn;
defaultRuleSortFn = function (a, b) {
    var cmp = prioritySort(a, b);
    if (cmp !== 0)
        return cmp;
    cmp = typeSort(a, b);
    if (cmp !== 0)
        return cmp;
    cmp = urlMatcherSort(a, b);
    if (cmp !== 0)
        return cmp;
    return idSort(a, b);
};
/** @hidden */
function getHandlerFn(handler) {
    if (!Object(_common__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(handler) && !Object(_common__WEBPACK_IMPORTED_MODULE_2__["isString"])(handler) && !Object(_common__WEBPACK_IMPORTED_MODULE_2__["is"])(_state__WEBPACK_IMPORTED_MODULE_0__["TargetState"])(handler) && !_state__WEBPACK_IMPORTED_MODULE_0__["TargetState"].isDef(handler)) {
        throw new Error("'handler' must be a string, function, TargetState, or have a state: 'newtarget' property");
    }
    return Object(_common__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(handler) ? handler : Object(_common__WEBPACK_IMPORTED_MODULE_2__["val"])(handler);
}
/**
 * API for managing URL rules
 *
 * This API is used to create and manage URL rules.
 * URL rules are a mechanism to respond to specific URL patterns.
 *
 * The most commonly used methods are [[otherwise]] and [[when]].
 *
 * This API is a property of [[UrlService]] as [[UrlService.rules]]
 *
 * @publicapi
 */
var UrlRules = /** @class */ (function () {
    /** @hidden */
    function UrlRules(/** @hidden */ router) {
        this.router = router;
        /** @hidden */ this._sortFn = defaultRuleSortFn;
        /** @hidden */ this._rules = [];
        /** @hidden */ this._id = 0;
        this.urlRuleFactory = new _urlRule__WEBPACK_IMPORTED_MODULE_3__["UrlRuleFactory"](router);
    }
    /** @hidden */
    UrlRules.prototype.dispose = function (router) {
        this._rules = [];
        delete this._otherwiseFn;
    };
    /**
     * Defines the initial state, path, or behavior to use when the app starts.
     *
     * This rule defines the initial/starting state for the application.
     *
     * This rule is triggered the first time the URL is checked (when the app initially loads).
     * The rule is triggered only when the url matches either `""` or `"/"`.
     *
     * Note: The rule is intended to be used when the root of the application is directly linked to.
     * When the URL is *not* `""` or `"/"` and doesn't match other rules, the [[otherwise]] rule is triggered.
     * This allows 404-like behavior when an unknown URL is deep-linked.
     *
     * #### Example:
     * Start app at `home` state.
     * ```js
     * .initial({ state: 'home' });
     * ```
     *
     * #### Example:
     * Start app at `/home` (by url)
     * ```js
     * .initial('/home');
     * ```
     *
     * #### Example:
     * When no other url rule matches, go to `home` state
     * ```js
     * .initial((matchValue, url, router) => {
     *   console.log('initial state');
     *   return { state: 'home' };
     * })
     * ```
     *
     * @param handler The initial state or url path, or a function which returns the state or url path (or performs custom logic).
     */
    UrlRules.prototype.initial = function (handler) {
        var handlerFn = getHandlerFn(handler);
        var matchFn = function (urlParts, router) {
            return router.globals.transitionHistory.size() === 0 && !!/^\/?$/.exec(urlParts.path);
        };
        this.rule(this.urlRuleFactory.create(matchFn, handlerFn));
    };
    /**
     * Defines the state, url, or behavior to use when no other rule matches the URL.
     *
     * This rule is matched when *no other rule* matches.
     * It is generally used to handle unknown URLs (similar to "404" behavior, but on the client side).
     *
     * - If `handler` a string, it is treated as a url redirect
     *
     * #### Example:
     * When no other url rule matches, redirect to `/index`
     * ```js
     * .otherwise('/index');
     * ```
     *
     * - If `handler` is an object with a `state` property, the state is activated.
     *
     * #### Example:
     * When no other url rule matches, redirect to `home` and provide a `dashboard` parameter value.
     * ```js
     * .otherwise({ state: 'home', params: { dashboard: 'default' } });
     * ```
     *
     * - If `handler` is a function, the function receives the current url ([[UrlParts]]) and the [[UIRouter]] object.
     *   The function can perform actions, and/or return a value.
     *
     * #### Example:
     * When no other url rule matches, manually trigger a transition to the `home` state
     * ```js
     * .otherwise((matchValue, urlParts, router) => {
     *   router.stateService.go('home');
     * });
     * ```
     *
     * #### Example:
     * When no other url rule matches, go to `home` state
     * ```js
     * .otherwise((matchValue, urlParts, router) => {
     *   return { state: 'home' };
     * });
     * ```
     *
     * @param handler The url path to redirect to, or a function which returns the url path (or performs custom logic).
     */
    UrlRules.prototype.otherwise = function (handler) {
        var handlerFn = getHandlerFn(handler);
        this._otherwiseFn = this.urlRuleFactory.create(Object(_common__WEBPACK_IMPORTED_MODULE_2__["val"])(true), handlerFn);
        this._sorted = false;
    };
    /**
     * Remove a rule previously registered
     *
     * @param rule the matcher rule that was previously registered using [[rule]]
     */
    UrlRules.prototype.removeRule = function (rule) {
        Object(_common__WEBPACK_IMPORTED_MODULE_2__["removeFrom"])(this._rules, rule);
    };
    /**
     * Manually adds a URL Rule.
     *
     * Usually, a url rule is added using [[StateDeclaration.url]] or [[when]].
     * This api can be used directly for more control (to register a [[BaseUrlRule]], for example).
     * Rules can be created using [[urlRuleFactory]], or created manually as simple objects.
     *
     * A rule should have a `match` function which returns truthy if the rule matched.
     * It should also have a `handler` function which is invoked if the rule is the best match.
     *
     * @return a function that deregisters the rule
     */
    UrlRules.prototype.rule = function (rule) {
        var _this = this;
        if (!_urlRule__WEBPACK_IMPORTED_MODULE_3__["UrlRuleFactory"].isUrlRule(rule))
            throw new Error('invalid rule');
        rule.$id = this._id++;
        rule.priority = rule.priority || 0;
        this._rules.push(rule);
        this._sorted = false;
        return function () { return _this.removeRule(rule); };
    };
    /**
     * Gets all registered rules
     *
     * @returns an array of all the registered rules
     */
    UrlRules.prototype.rules = function () {
        this.ensureSorted();
        return this._rules.concat(this._otherwiseFn ? [this._otherwiseFn] : []);
    };
    /**
     * Defines URL Rule priorities
     *
     * More than one rule ([[UrlRule]]) might match a given URL.
     * This `compareFn` is used to sort the rules by priority.
     * Higher priority rules should sort earlier.
     *
     * The [[defaultRuleSortFn]] is used by default.
     *
     * You only need to call this function once.
     * The `compareFn` will be used to sort the rules as each is registered.
     *
     * If called without any parameter, it will re-sort the rules.
     *
     * ---
     *
     * Url rules may come from multiple sources: states's urls ([[StateDeclaration.url]]), [[when]], and [[rule]].
     * Each rule has a (user-provided) [[UrlRule.priority]], a [[UrlRule.type]], and a [[UrlRule.$id]]
     * The `$id` is is the order in which the rule was registered.
     *
     * The sort function should use these data, or data found on a specific type
     * of [[UrlRule]] (such as [[StateRule.state]]), to order the rules as desired.
     *
     * #### Example:
     * This compare function prioritizes rules by the order in which the rules were registered.
     * A rule registered earlier has higher priority.
     *
     * ```js
     * function compareFn(a, b) {
     *   return a.$id - b.$id;
     * }
     * ```
     *
     * @param compareFn a function that compares to [[UrlRule]] objects.
     *    The `compareFn` should abide by the `Array.sort` compare function rules.
     *    Given two rules, `a` and `b`, return a negative number if `a` should be higher priority.
     *    Return a positive number if `b` should be higher priority.
     *    Return `0` if the rules are identical.
     *
     *    See the [mozilla reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description)
     *    for details.
     */
    UrlRules.prototype.sort = function (compareFn) {
        var sorted = this.stableSort(this._rules, (this._sortFn = compareFn || this._sortFn));
        // precompute _sortGroup values and apply to each rule
        var group = 0;
        for (var i = 0; i < sorted.length; i++) {
            sorted[i]._group = group;
            if (i < sorted.length - 1 && this._sortFn(sorted[i], sorted[i + 1]) !== 0) {
                group++;
            }
        }
        this._rules = sorted;
        this._sorted = true;
    };
    /** @hidden */
    UrlRules.prototype.ensureSorted = function () {
        this._sorted || this.sort();
    };
    /** @hidden */
    UrlRules.prototype.stableSort = function (arr, compareFn) {
        var arrOfWrapper = arr.map(function (elem, idx) { return ({ elem: elem, idx: idx }); });
        arrOfWrapper.sort(function (wrapperA, wrapperB) {
            var cmpDiff = compareFn(wrapperA.elem, wrapperB.elem);
            return cmpDiff === 0 ? wrapperA.idx - wrapperB.idx : cmpDiff;
        });
        return arrOfWrapper.map(function (wrapper) { return wrapper.elem; });
    };
    /**
     * Registers a `matcher` and `handler` for custom URLs handling.
     *
     * The `matcher` can be:
     *
     * - a [[UrlMatcher]]: See: [[UrlMatcherFactory.compile]]
     * - a `string`: The string is compiled to a [[UrlMatcher]]
     * - a `RegExp`: The regexp is used to match the url.
     *
     * The `handler` can be:
     *
     * - a string: The url is redirected to the value of the string.
     * - a function: The url is redirected to the return value of the function.
     *
     * ---
     *
     * When the `handler` is a `string` and the `matcher` is a `UrlMatcher` (or string), the redirect
     * string is interpolated with parameter values.
     *
     * #### Example:
     * When the URL is `/foo/123` the rule will redirect to `/bar/123`.
     * ```js
     * .when("/foo/:param1", "/bar/:param1")
     * ```
     *
     * ---
     *
     * When the `handler` is a string and the `matcher` is a `RegExp`, the redirect string is
     * interpolated with capture groups from the RegExp.
     *
     * #### Example:
     * When the URL is `/foo/123` the rule will redirect to `/bar/123`.
     * ```js
     * .when(new RegExp("^/foo/(.*)$"), "/bar/$1");
     * ```
     *
     * ---
     *
     * When the handler is a function, it receives the matched value, the current URL, and the `UIRouter` object (See [[UrlRuleHandlerFn]]).
     * The "matched value" differs based on the `matcher`.
     * For [[UrlMatcher]]s, it will be the matched state params.
     * For `RegExp`, it will be the match array from `regexp.exec()`.
     *
     * If the handler returns a string, the URL is redirected to the string.
     *
     * #### Example:
     * When the URL is `/foo/123` the rule will redirect to `/bar/123`.
     * ```js
     * .when(new RegExp("^/foo/(.*)$"), match => "/bar/" + match[1]);
     * ```
     *
     * Note: the `handler` may also invoke arbitrary code, such as `$state.go()`
     *
     * @param matcher A pattern `string` to match, compiled as a [[UrlMatcher]], or a `RegExp`.
     * @param handler The path to redirect to, or a function that returns the path.
     * @param options `{ priority: number }`
     *
     * @return the registered [[UrlRule]]
     */
    UrlRules.prototype.when = function (matcher, handler, options) {
        var rule = this.urlRuleFactory.create(matcher, handler);
        if (Object(_common__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(options && options.priority))
            rule.priority = options.priority;
        this.rule(rule);
        return rule;
    };
    return UrlRules;
}());

//# sourceMappingURL=urlRules.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlService.js":
/*!***************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlService.js ***!
  \***************************************************************************************************/
/*! exports provided: UrlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlService", function() { return UrlService; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _urlRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlRules */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlRules.js");
/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./urlConfig */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/url/urlConfig.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/state/index.js");




/** API for URL management */
var UrlService = /** @class */ (function () {
    /** @hidden */
    function UrlService(/** @hidden */ router) {
        var _this = this;
        this.router = router;
        /** @hidden */ this.interceptDeferred = false;
        /**
         * The nested [[UrlRules]] API for managing URL rules and rewrites
         *
         * See: [[UrlRules]] for details
         */
        this.rules = new _urlRules__WEBPACK_IMPORTED_MODULE_1__["UrlRules"](this.router);
        /**
         * The nested [[UrlConfig]] API to configure the URL and retrieve URL information
         *
         * See: [[UrlConfig]] for details
         */
        this.config = new _urlConfig__WEBPACK_IMPORTED_MODULE_2__["UrlConfig"](this.router);
        // Delegate these calls to the current LocationServices implementation
        /**
         * Gets the current url, or updates the url
         *
         * ### Getting the current URL
         *
         * When no arguments are passed, returns the current URL.
         * The URL is normalized using the internal [[path]]/[[search]]/[[hash]] values.
         *
         * For example, the URL may be stored in the hash ([[HashLocationServices]]) or
         * have a base HREF prepended ([[PushStateLocationServices]]).
         *
         * The raw URL in the browser might be:
         *
         * ```
         * http://mysite.com/somepath/index.html#/internal/path/123?param1=foo#anchor
         * ```
         *
         * or
         *
         * ```
         * http://mysite.com/basepath/internal/path/123?param1=foo#anchor
         * ```
         *
         * then this method returns:
         *
         * ```
         * /internal/path/123?param1=foo#anchor
         * ```
         *
         *
         * #### Example:
         * ```js
         * locationServices.url(); // "/some/path?query=value#anchor"
         * ```
         *
         * ### Updating the URL
         *
         * When `newurl` arguments is provided, changes the URL to reflect `newurl`
         *
         * #### Example:
         * ```js
         * locationServices.url("/some/path?query=value#anchor", true);
         * ```
         *
         * @param newurl The new value for the URL.
         *               This url should reflect only the new internal [[path]], [[search]], and [[hash]] values.
         *               It should not include the protocol, site, port, or base path of an absolute HREF.
         * @param replace When true, replaces the current history entry (instead of appending it) with this new url
         * @param state The history's state object, i.e., pushState (if the LocationServices implementation supports it)
         *
         * @return the url (after potentially being processed)
         */
        this.url = function (newurl, replace, state) {
            return _this.router.locationService.url(newurl, replace, state);
        };
        /**
         * Gets the path part of the current url
         *
         * If the current URL is `/some/path?query=value#anchor`, this returns `/some/path`
         *
         * @return the path portion of the url
         */
        this.path = function () { return _this.router.locationService.path(); };
        /**
         * Gets the search part of the current url as an object
         *
         * If the current URL is `/some/path?query=value#anchor`, this returns `{ query: 'value' }`
         *
         * @return the search (query) portion of the url, as an object
         */
        this.search = function () { return _this.router.locationService.search(); };
        /**
         * Gets the hash part of the current url
         *
         * If the current URL is `/some/path?query=value#anchor`, this returns `anchor`
         *
         * @return the hash (anchor) portion of the url
         */
        this.hash = function () { return _this.router.locationService.hash(); };
        /**
         * @internalapi
         *
         * Registers a low level url change handler
         *
         * Note: Because this is a low level handler, it's not recommended for general use.
         *
         * #### Example:
         * ```js
         * let deregisterFn = locationServices.onChange((evt) => console.log("url change", evt));
         * ```
         *
         * @param callback a function that will be called when the url is changing
         * @return a function that de-registers the callback
         */
        this.onChange = function (callback) { return _this.router.locationService.onChange(callback); };
    }
    /** @hidden */
    UrlService.prototype.dispose = function () {
        this.listen(false);
        this.rules.dispose();
    };
    /**
     * Gets the current URL parts
     *
     * This method returns the different parts of the current URL (the [[path]], [[search]], and [[hash]]) as a [[UrlParts]] object.
     */
    UrlService.prototype.parts = function () {
        return { path: this.path(), search: this.search(), hash: this.hash() };
    };
    /**
     * Activates the best rule for the current URL
     *
     * Checks the current URL for a matching [[UrlRule]], then invokes that rule's handler.
     * This method is called internally any time the URL has changed.
     *
     * This effectively activates the state (or redirect, etc) which matches the current URL.
     *
     * #### Example:
     * ```js
     * urlService.deferIntercept();
     *
     * fetch('/states.json').then(resp => resp.json()).then(data => {
     *   data.forEach(state => $stateRegistry.register(state));
     *   urlService.listen();
     *   // Find the matching URL and invoke the handler.
     *   urlService.sync();
     * });
     * ```
     */
    UrlService.prototype.sync = function (evt) {
        if (evt && evt.defaultPrevented)
            return;
        var _a = this.router, urlService = _a.urlService, stateService = _a.stateService;
        var url = { path: urlService.path(), search: urlService.search(), hash: urlService.hash() };
        var best = this.match(url);
        var applyResult = Object(_common__WEBPACK_IMPORTED_MODULE_0__["pattern"])([
            [_common__WEBPACK_IMPORTED_MODULE_0__["isString"], function (newurl) { return urlService.url(newurl, true); }],
            [_state__WEBPACK_IMPORTED_MODULE_3__["TargetState"].isDef, function (def) { return stateService.go(def.state, def.params, def.options); }],
            [Object(_common__WEBPACK_IMPORTED_MODULE_0__["is"])(_state__WEBPACK_IMPORTED_MODULE_3__["TargetState"]), function (target) { return stateService.go(target.state(), target.params(), target.options()); }],
        ]);
        applyResult(best && best.rule.handler(best.match, url, this.router));
    };
    /**
     * Starts or stops listening for URL changes
     *
     * Call this sometime after calling [[deferIntercept]] to start monitoring the url.
     * This causes UI-Router to start listening for changes to the URL, if it wasn't already listening.
     *
     * If called with `false`, UI-Router will stop listening (call listen(true) to start listening again).
     *
     * #### Example:
     * ```js
     * urlService.deferIntercept();
     *
     * fetch('/states.json').then(resp => resp.json()).then(data => {
     *   data.forEach(state => $stateRegistry.register(state));
     *   // Start responding to URL changes
     *   urlService.listen();
     *   urlService.sync();
     * });
     * ```
     *
     * @param enabled `true` or `false` to start or stop listening to URL changes
     */
    UrlService.prototype.listen = function (enabled) {
        var _this = this;
        if (enabled === false) {
            this._stopListeningFn && this._stopListeningFn();
            delete this._stopListeningFn;
        }
        else {
            return (this._stopListeningFn = this._stopListeningFn || this.router.urlService.onChange(function (evt) { return _this.sync(evt); }));
        }
    };
    /**
     * Disables monitoring of the URL.
     *
     * Call this method before UI-Router has bootstrapped.
     * It will stop UI-Router from performing the initial url sync.
     *
     * This can be useful to perform some asynchronous initialization before the router starts.
     * Once the initialization is complete, call [[listen]] to tell UI-Router to start watching and synchronizing the URL.
     *
     * #### Example:
     * ```js
     * // Prevent UI-Router from automatically intercepting URL changes when it starts;
     * urlService.deferIntercept();
     *
     * fetch('/states.json').then(resp => resp.json()).then(data => {
     *   data.forEach(state => $stateRegistry.register(state));
     *   urlService.listen();
     *   urlService.sync();
     * });
     * ```
     *
     * @param defer Indicates whether to defer location change interception.
     *        Passing no parameter is equivalent to `true`.
     */
    UrlService.prototype.deferIntercept = function (defer) {
        if (defer === undefined)
            defer = true;
        this.interceptDeferred = defer;
    };
    /**
     * Matches a URL
     *
     * Given a URL (as a [[UrlParts]] object), check all rules and determine the best matching rule.
     * Return the result as a [[MatchResult]].
     */
    UrlService.prototype.match = function (url) {
        var _this = this;
        url = Object(_common__WEBPACK_IMPORTED_MODULE_0__["extend"])({ path: '', search: {}, hash: '' }, url);
        var rules = this.rules.rules();
        // Checks a single rule. Returns { rule: rule, match: match, weight: weight } if it matched, or undefined
        var checkRule = function (rule) {
            var match = rule.match(url, _this.router);
            return match && { match: match, rule: rule, weight: rule.matchPriority(match) };
        };
        // The rules are pre-sorted.
        // - Find the first matching rule.
        // - Find any other matching rule that sorted *exactly the same*, according to `.sort()`.
        // - Choose the rule with the highest match weight.
        var best;
        for (var i = 0; i < rules.length; i++) {
            // Stop when there is a 'best' rule and the next rule sorts differently than it.
            if (best && best.rule._group !== rules[i]._group)
                break;
            var current = checkRule(rules[i]);
            // Pick the best MatchResult
            best = !best || (current && current.weight > best.weight) ? current : best;
        }
        return best;
    };
    return UrlService;
}());

//# sourceMappingURL=urlService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla.js":
/*!********************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla.js ***!
  \********************************************************************************************/
/*! exports provided: $q, $injector, BaseLocationServices, HashLocationService, MemoryLocationService, PushStateLocationService, MemoryLocationConfig, BrowserLocationConfig, keyValsToObjectR, getParams, parseUrl, buildUrl, locationPluginFactory, servicesPlugin, hashLocationPlugin, pushStateLocationPlugin, memoryLocationPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vanilla_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vanilla/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$q", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["$q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$injector", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["$injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLocationServices", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["BaseLocationServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HashLocationService", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["HashLocationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryLocationService", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["MemoryLocationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PushStateLocationService", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["PushStateLocationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryLocationConfig", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["MemoryLocationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserLocationConfig", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["BrowserLocationConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyValsToObjectR", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["keyValsToObjectR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParams", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["getParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["parseUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildUrl", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["buildUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locationPluginFactory", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["locationPluginFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "servicesPlugin", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["servicesPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hashLocationPlugin", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["hashLocationPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushStateLocationPlugin", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["pushStateLocationPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoryLocationPlugin", function() { return _vanilla_index__WEBPACK_IMPORTED_MODULE_0__["memoryLocationPlugin"]; });

/** @internalapi @module vanilla */ /** */

//# sourceMappingURL=vanilla.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/baseLocationService.js":
/*!****************************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/baseLocationService.js ***!
  \****************************************************************************************************************/
/*! exports provided: BaseLocationServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLocationServices", function() { return BaseLocationServices; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/utils.js");
/** @internalapi @module vanilla */ /** */


/** A base `LocationServices` */
var BaseLocationServices = /** @class */ (function () {
    function BaseLocationServices(router, fireAfterUpdate) {
        var _this = this;
        this.fireAfterUpdate = fireAfterUpdate;
        this._listeners = [];
        this._listener = function (evt) { return _this._listeners.forEach(function (cb) { return cb(evt); }); };
        this.hash = function () { return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseUrl"])(_this._get()).hash; };
        this.path = function () { return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseUrl"])(_this._get()).path; };
        this.search = function () { return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getParams"])(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseUrl"])(_this._get()).search); };
        this._location = _common__WEBPACK_IMPORTED_MODULE_0__["root"].location;
        this._history = _common__WEBPACK_IMPORTED_MODULE_0__["root"].history;
    }
    BaseLocationServices.prototype.url = function (url, replace) {
        if (replace === void 0) { replace = true; }
        if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(url) && url !== this._get()) {
            this._set(null, null, url, replace);
            if (this.fireAfterUpdate) {
                this._listeners.forEach(function (cb) { return cb({ url: url }); });
            }
        }
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["buildUrl"])(this);
    };
    BaseLocationServices.prototype.onChange = function (cb) {
        var _this = this;
        this._listeners.push(cb);
        return function () { return Object(_common__WEBPACK_IMPORTED_MODULE_0__["removeFrom"])(_this._listeners, cb); };
    };
    BaseLocationServices.prototype.dispose = function (router) {
        Object(_common__WEBPACK_IMPORTED_MODULE_0__["deregAll"])(this._listeners);
    };
    return BaseLocationServices;
}());

//# sourceMappingURL=baseLocationService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/browserLocationConfig.js":
/*!******************************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/browserLocationConfig.js ***!
  \******************************************************************************************************************/
/*! exports provided: BrowserLocationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserLocationConfig", function() { return BrowserLocationConfig; });
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/** @internalapi @module vanilla */
/** */

/** A `LocationConfig` that delegates to the browser's `location` object */
var BrowserLocationConfig = /** @class */ (function () {
    function BrowserLocationConfig(router, _isHtml5) {
        if (_isHtml5 === void 0) { _isHtml5 = false; }
        this._isHtml5 = _isHtml5;
        this._baseHref = undefined;
        this._hashPrefix = '';
    }
    BrowserLocationConfig.prototype.port = function () {
        if (location.port) {
            return Number(location.port);
        }
        return this.protocol() === 'https' ? 443 : 80;
    };
    BrowserLocationConfig.prototype.protocol = function () {
        return location.protocol.replace(/:/g, '');
    };
    BrowserLocationConfig.prototype.host = function () {
        return location.hostname;
    };
    BrowserLocationConfig.prototype.html5Mode = function () {
        return this._isHtml5;
    };
    BrowserLocationConfig.prototype.hashPrefix = function (newprefix) {
        return Object(_common_predicates__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(newprefix) ? (this._hashPrefix = newprefix) : this._hashPrefix;
    };
    BrowserLocationConfig.prototype.baseHref = function (href) {
        if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(href))
            this._baseHref = href;
        if (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(this._baseHref))
            this._baseHref = this.getBaseHref();
        return this._baseHref;
    };
    BrowserLocationConfig.prototype.getBaseHref = function () {
        var baseTag = document.getElementsByTagName('base')[0];
        if (baseTag && baseTag.href) {
            return baseTag.href.replace(/^([^/:]*:)?\/\/[^/]*/, '');
        }
        return this._isHtml5 ? '/' : location.pathname || '/';
    };
    BrowserLocationConfig.prototype.dispose = function () { };
    return BrowserLocationConfig;
}());

//# sourceMappingURL=browserLocationConfig.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/hashLocationService.js":
/*!****************************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/hashLocationService.js ***!
  \****************************************************************************************************************/
/*! exports provided: HashLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashLocationService", function() { return HashLocationService; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/* harmony import */ var _baseLocationService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseLocationService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/baseLocationService.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** @internalapi @module vanilla */ /** */


/** A `LocationServices` that uses the browser hash "#" to get/set the current location */
var HashLocationService = /** @class */ (function (_super) {
    __extends(HashLocationService, _super);
    function HashLocationService(router) {
        var _this = _super.call(this, router, false) || this;
        _common__WEBPACK_IMPORTED_MODULE_0__["root"].addEventListener('hashchange', _this._listener, false);
        return _this;
    }
    HashLocationService.prototype._get = function () {
        return Object(_common__WEBPACK_IMPORTED_MODULE_0__["trimHashVal"])(this._location.hash);
    };
    HashLocationService.prototype._set = function (state, title, url, replace) {
        this._location.hash = url;
    };
    HashLocationService.prototype.dispose = function (router) {
        _super.prototype.dispose.call(this, router);
        _common__WEBPACK_IMPORTED_MODULE_0__["root"].removeEventListener('hashchange', this._listener);
    };
    return HashLocationService;
}(_baseLocationService__WEBPACK_IMPORTED_MODULE_1__["BaseLocationServices"]));

//# sourceMappingURL=hashLocationService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/index.js ***!
  \**************************************************************************************************/
/*! exports provided: $q, $injector, BaseLocationServices, HashLocationService, MemoryLocationService, PushStateLocationService, MemoryLocationConfig, BrowserLocationConfig, keyValsToObjectR, getParams, parseUrl, buildUrl, locationPluginFactory, servicesPlugin, hashLocationPlugin, pushStateLocationPlugin, memoryLocationPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _q__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./q */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/q.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$q", function() { return _q__WEBPACK_IMPORTED_MODULE_0__["$q"]; });

/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/injector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$injector", function() { return _injector__WEBPACK_IMPORTED_MODULE_1__["$injector"]; });

/* harmony import */ var _baseLocationService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseLocationService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/baseLocationService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseLocationServices", function() { return _baseLocationService__WEBPACK_IMPORTED_MODULE_2__["BaseLocationServices"]; });

/* harmony import */ var _hashLocationService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hashLocationService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/hashLocationService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HashLocationService", function() { return _hashLocationService__WEBPACK_IMPORTED_MODULE_3__["HashLocationService"]; });

/* harmony import */ var _memoryLocationService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./memoryLocationService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryLocationService", function() { return _memoryLocationService__WEBPACK_IMPORTED_MODULE_4__["MemoryLocationService"]; });

/* harmony import */ var _pushStateLocationService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pushStateLocationService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/pushStateLocationService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PushStateLocationService", function() { return _pushStateLocationService__WEBPACK_IMPORTED_MODULE_5__["PushStateLocationService"]; });

/* harmony import */ var _memoryLocationConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./memoryLocationConfig */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationConfig.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryLocationConfig", function() { return _memoryLocationConfig__WEBPACK_IMPORTED_MODULE_6__["MemoryLocationConfig"]; });

/* harmony import */ var _browserLocationConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./browserLocationConfig */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/browserLocationConfig.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserLocationConfig", function() { return _browserLocationConfig__WEBPACK_IMPORTED_MODULE_7__["BrowserLocationConfig"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyValsToObjectR", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["keyValsToObjectR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParams", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["getParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["parseUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildUrl", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["buildUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locationPluginFactory", function() { return _utils__WEBPACK_IMPORTED_MODULE_8__["locationPluginFactory"]; });

/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plugins */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/plugins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "servicesPlugin", function() { return _plugins__WEBPACK_IMPORTED_MODULE_9__["servicesPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hashLocationPlugin", function() { return _plugins__WEBPACK_IMPORTED_MODULE_9__["hashLocationPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pushStateLocationPlugin", function() { return _plugins__WEBPACK_IMPORTED_MODULE_9__["pushStateLocationPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoryLocationPlugin", function() { return _plugins__WEBPACK_IMPORTED_MODULE_9__["memoryLocationPlugin"]; });











//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/injector.js":
/*!*****************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/injector.js ***!
  \*****************************************************************************************************/
/*! exports provided: $injector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$injector", function() { return $injector; });
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/** @internalapi @module vanilla */ /** */

// globally available injectables
var globals = {};
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var ARGUMENT_NAMES = /([^\s,]+)/g;
/**
 * A basic angular1-like injector api
 *
 * This object implements four methods similar to the
 * [angular 1 dependency injector](https://docs.angularjs.org/api/auto/service/$injector)
 *
 * UI-Router evolved from an angular 1 library to a framework agnostic library.
 * However, some of the `@uirouter/core` code uses these ng1 style APIs to support ng1 style dependency injection.
 *
 * This object provides a naive implementation of a globally scoped dependency injection system.
 * It supports the following DI approaches:
 *
 * ### Function parameter names
 *
 * A function's `.toString()` is called, and the parameter names are parsed.
 * This only works when the parameter names aren't "mangled" by a minifier such as UglifyJS.
 *
 * ```js
 * function injectedFunction(FooService, BarService) {
 *   // FooService and BarService are injected
 * }
 * ```
 *
 * ### Function annotation
 *
 * A function may be annotated with an array of dependency names as the `$inject` property.
 *
 * ```js
 * injectedFunction.$inject = [ 'FooService', 'BarService' ];
 * function injectedFunction(fs, bs) {
 *   // FooService and BarService are injected as fs and bs parameters
 * }
 * ```
 *
 * ### Array notation
 *
 * An array provides the names of the dependencies to inject (as strings).
 * The function is the last element of the array.
 *
 * ```js
 * [ 'FooService', 'BarService', function (fs, bs) {
 *   // FooService and BarService are injected as fs and bs parameters
 * }]
 * ```
 *
 * @type {$InjectorLike}
 */
var $injector = {
    /** Gets an object from DI based on a string token */
    get: function (name) { return globals[name]; },
    /** Returns true if an object named `name` exists in global DI */
    has: function (name) { return $injector.get(name) != null; },
    /**
     * Injects a function
     *
     * @param fn the function to inject
     * @param context the function's `this` binding
     * @param locals An object with additional DI tokens and values, such as `{ someToken: { foo: 1 } }`
     */
    invoke: function (fn, context, locals) {
        var all = Object(_common_index__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, globals, locals || {});
        var params = $injector.annotate(fn);
        var ensureExist = Object(_common_index__WEBPACK_IMPORTED_MODULE_0__["assertPredicate"])(function (key) { return all.hasOwnProperty(key); }, function (key) { return "DI can't find injectable: '" + key + "'"; });
        var args = params.filter(ensureExist).map(function (x) { return all[x]; });
        if (Object(_common_index__WEBPACK_IMPORTED_MODULE_0__["isFunction"])(fn))
            return fn.apply(context, args);
        else
            return fn.slice(-1)[0].apply(context, args);
    },
    /**
     * Returns a function's dependencies
     *
     * Analyzes a function (or array) and returns an array of DI tokens that the function requires.
     * @return an array of `string`s
     */
    annotate: function (fn) {
        if (!Object(_common_index__WEBPACK_IMPORTED_MODULE_0__["isInjectable"])(fn))
            throw new Error("Not an injectable function: " + fn);
        if (fn && fn.$inject)
            return fn.$inject;
        if (Object(_common_index__WEBPACK_IMPORTED_MODULE_0__["isArray"])(fn))
            return fn.slice(0, -1);
        var fnStr = fn.toString().replace(STRIP_COMMENTS, '');
        var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
        return result || [];
    },
};
//# sourceMappingURL=injector.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationConfig.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationConfig.js ***!
  \*****************************************************************************************************************/
/*! exports provided: MemoryLocationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryLocationConfig", function() { return MemoryLocationConfig; });
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");


/** A `LocationConfig` mock that gets/sets all config from an in-memory object */
var MemoryLocationConfig = /** @class */ (function () {
    function MemoryLocationConfig() {
        var _this = this;
        this.dispose = _common_common__WEBPACK_IMPORTED_MODULE_1__["noop"];
        this._baseHref = '';
        this._port = 80;
        this._protocol = 'http';
        this._host = 'localhost';
        this._hashPrefix = '';
        this.port = function () { return _this._port; };
        this.protocol = function () { return _this._protocol; };
        this.host = function () { return _this._host; };
        this.baseHref = function () { return _this._baseHref; };
        this.html5Mode = function () { return false; };
        this.hashPrefix = function (newval) { return (Object(_common_predicates__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(newval) ? (_this._hashPrefix = newval) : _this._hashPrefix); };
    }
    return MemoryLocationConfig;
}());

//# sourceMappingURL=memoryLocationConfig.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationService.js":
/*!******************************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationService.js ***!
  \******************************************************************************************************************/
/*! exports provided: MemoryLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryLocationService", function() { return MemoryLocationService; });
/* harmony import */ var _baseLocationService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseLocationService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/baseLocationService.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** @internalapi @module vanilla */ /** */

/** A `LocationServices` that gets/sets the current location from an in-memory object */
var MemoryLocationService = /** @class */ (function (_super) {
    __extends(MemoryLocationService, _super);
    function MemoryLocationService(router) {
        return _super.call(this, router, true) || this;
    }
    MemoryLocationService.prototype._get = function () {
        return this._url;
    };
    MemoryLocationService.prototype._set = function (state, title, url, replace) {
        this._url = url;
    };
    return MemoryLocationService;
}(_baseLocationService__WEBPACK_IMPORTED_MODULE_0__["BaseLocationServices"]));

//# sourceMappingURL=memoryLocationService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/plugins.js":
/*!****************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/plugins.js ***!
  \****************************************************************************************************/
/*! exports provided: servicesPlugin, hashLocationPlugin, pushStateLocationPlugin, memoryLocationPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "servicesPlugin", function() { return servicesPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashLocationPlugin", function() { return hashLocationPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushStateLocationPlugin", function() { return pushStateLocationPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoryLocationPlugin", function() { return memoryLocationPlugin; });
/* harmony import */ var _browserLocationConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browserLocationConfig */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/browserLocationConfig.js");
/* harmony import */ var _hashLocationService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hashLocationService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/hashLocationService.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/utils.js");
/* harmony import */ var _pushStateLocationService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pushStateLocationService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/pushStateLocationService.js");
/* harmony import */ var _memoryLocationService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./memoryLocationService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationService.js");
/* harmony import */ var _memoryLocationConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./memoryLocationConfig */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/memoryLocationConfig.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./injector */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/injector.js");
/* harmony import */ var _q__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./q */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/q.js");
/* harmony import */ var _common_coreservices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/coreservices */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/coreservices.js");
/** @internalapi @module vanilla */ /** */









function servicesPlugin(router) {
    _common_coreservices__WEBPACK_IMPORTED_MODULE_8__["services"].$injector = _injector__WEBPACK_IMPORTED_MODULE_6__["$injector"];
    _common_coreservices__WEBPACK_IMPORTED_MODULE_8__["services"].$q = _q__WEBPACK_IMPORTED_MODULE_7__["$q"];
    return { name: 'vanilla.services', $q: _q__WEBPACK_IMPORTED_MODULE_7__["$q"], $injector: _injector__WEBPACK_IMPORTED_MODULE_6__["$injector"], dispose: function () { return null; } };
}
/** A `UIRouterPlugin` uses the browser hash to get/set the current location */
var hashLocationPlugin = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["locationPluginFactory"])('vanilla.hashBangLocation', false, _hashLocationService__WEBPACK_IMPORTED_MODULE_1__["HashLocationService"], _browserLocationConfig__WEBPACK_IMPORTED_MODULE_0__["BrowserLocationConfig"]);
/** A `UIRouterPlugin` that gets/sets the current location using the browser's `location` and `history` apis */
var pushStateLocationPlugin = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["locationPluginFactory"])('vanilla.pushStateLocation', true, _pushStateLocationService__WEBPACK_IMPORTED_MODULE_3__["PushStateLocationService"], _browserLocationConfig__WEBPACK_IMPORTED_MODULE_0__["BrowserLocationConfig"]);
/** A `UIRouterPlugin` that gets/sets the current location from an in-memory object */
var memoryLocationPlugin = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["locationPluginFactory"])('vanilla.memoryLocation', false, _memoryLocationService__WEBPACK_IMPORTED_MODULE_4__["MemoryLocationService"], _memoryLocationConfig__WEBPACK_IMPORTED_MODULE_5__["MemoryLocationConfig"]);
//# sourceMappingURL=plugins.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/pushStateLocationService.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/pushStateLocationService.js ***!
  \*********************************************************************************************************************/
/*! exports provided: PushStateLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushStateLocationService", function() { return PushStateLocationService; });
/* harmony import */ var _baseLocationService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseLocationService */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/baseLocationService.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * A `LocationServices` that gets/sets the current location using the browser's `location` and `history` apis
 *
 * Uses `history.pushState` and `history.replaceState`
 */
var PushStateLocationService = /** @class */ (function (_super) {
    __extends(PushStateLocationService, _super);
    function PushStateLocationService(router) {
        var _this = _super.call(this, router, true) || this;
        _this._config = router.urlService.config;
        _common__WEBPACK_IMPORTED_MODULE_1__["root"].addEventListener('popstate', _this._listener, false);
        return _this;
    }
    /**
     * Gets the base prefix without:
     * - trailing slash
     * - trailing filename
     * - protocol and hostname
     *
     * If <base href='/base/'>, this returns '/base'.
     * If <base href='/foo/base/'>, this returns '/foo/base'.
     * If <base href='/base/index.html'>, this returns '/base'.
     * If <base href='http://localhost:8080/base/index.html'>, this returns '/base'.
     * If <base href='/base'>, this returns ''.
     * If <base href='http://localhost:8080'>, this returns ''.
     * If <base href='http://localhost:8080/'>, this returns ''.
     *
     * See: https://html.spec.whatwg.org/dev/semantics.html#the-base-element
     */
    PushStateLocationService.prototype._getBasePrefix = function () {
        return Object(_common__WEBPACK_IMPORTED_MODULE_1__["stripLastPathElement"])(this._config.baseHref());
    };
    PushStateLocationService.prototype._get = function () {
        var _a = this._location, pathname = _a.pathname, hash = _a.hash, search = _a.search;
        search = Object(_common__WEBPACK_IMPORTED_MODULE_1__["splitQuery"])(search)[1]; // strip ? if found
        hash = Object(_common__WEBPACK_IMPORTED_MODULE_1__["splitHash"])(hash)[1]; // strip # if found
        var basePrefix = this._getBasePrefix();
        var exactBaseHrefMatch = pathname === this._config.baseHref();
        var startsWithBase = pathname.substr(0, basePrefix.length) === basePrefix;
        pathname = exactBaseHrefMatch ? '/' : startsWithBase ? pathname.substring(basePrefix.length) : pathname;
        return pathname + (search ? '?' + search : '') + (hash ? '#' + hash : '');
    };
    PushStateLocationService.prototype._set = function (state, title, url, replace) {
        var basePrefix = this._getBasePrefix();
        var slash = url && url[0] !== '/' ? '/' : '';
        var fullUrl = url === '' || url === '/' ? this._config.baseHref() : basePrefix + slash + url;
        if (replace) {
            this._history.replaceState(state, title, fullUrl);
        }
        else {
            this._history.pushState(state, title, fullUrl);
        }
    };
    PushStateLocationService.prototype.dispose = function (router) {
        _super.prototype.dispose.call(this, router);
        _common__WEBPACK_IMPORTED_MODULE_1__["root"].removeEventListener('popstate', this._listener);
    };
    return PushStateLocationService;
}(_baseLocationService__WEBPACK_IMPORTED_MODULE_0__["BaseLocationServices"]));

//# sourceMappingURL=pushStateLocationService.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/q.js":
/*!**********************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/q.js ***!
  \**********************************************************************************************/
/*! exports provided: $q */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$q", function() { return $q; });
/* harmony import */ var _common_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/index */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/** @internalapi @module vanilla */ /** */

/**
 * An angular1-like promise api
 *
 * This object implements four methods similar to the
 * [angular 1 promise api](https://docs.angularjs.org/api/ng/service/$q)
 *
 * UI-Router evolved from an angular 1 library to a framework agnostic library.
 * However, some of the `@uirouter/core` code uses these ng1 style APIs to support ng1 style dependency injection.
 *
 * This API provides native ES6 promise support wrapped as a $q-like API.
 * Internally, UI-Router uses this $q object to perform promise operations.
 * The `angular-ui-router` (ui-router for angular 1) uses the $q API provided by angular.
 *
 * $q-like promise api
 */
var $q = {
    /** Normalizes a value as a promise */
    when: function (val) { return new Promise(function (resolve, reject) { return resolve(val); }); },
    /** Normalizes a value as a promise rejection */
    reject: function (val) {
        return new Promise(function (resolve, reject) {
            reject(val);
        });
    },
    /** @returns a deferred object, which has `resolve` and `reject` functions */
    defer: function () {
        var deferred = {};
        deferred.promise = new Promise(function (resolve, reject) {
            deferred.resolve = resolve;
            deferred.reject = reject;
        });
        return deferred;
    },
    /** Like Promise.all(), but also supports object key/promise notation like $q */
    all: function (promises) {
        if (Object(_common_index__WEBPACK_IMPORTED_MODULE_0__["isArray"])(promises)) {
            return Promise.all(promises);
        }
        if (Object(_common_index__WEBPACK_IMPORTED_MODULE_0__["isObject"])(promises)) {
            // Convert promises map to promises array.
            // When each promise resolves, map it to a tuple { key: key, val: val }
            var chain = Object.keys(promises).map(function (key) { return promises[key].then(function (val) { return ({ key: key, val: val }); }); });
            // Then wait for all promises to resolve, and convert them back to an object
            return $q.all(chain).then(function (values) {
                return values.reduce(function (acc, tuple) {
                    acc[tuple.key] = tuple.val;
                    return acc;
                }, {});
            });
        }
    },
};
//# sourceMappingURL=q.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/utils.js":
/*!**************************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/vanilla/utils.js ***!
  \**************************************************************************************************/
/*! exports provided: keyValsToObjectR, getParams, parseUrl, buildUrl, locationPluginFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyValsToObjectR", function() { return keyValsToObjectR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParams", function() { return getParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return parseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildUrl", function() { return buildUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationPluginFactory", function() { return locationPluginFactory; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/index.js");
/** @internalapi @module vanilla */ /** */

var keyValsToObjectR = function (accum, _a) {
    var key = _a[0], val = _a[1];
    if (!accum.hasOwnProperty(key)) {
        accum[key] = val;
    }
    else if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isArray"])(accum[key])) {
        accum[key].push(val);
    }
    else {
        accum[key] = [accum[key], val];
    }
    return accum;
};
var getParams = function (queryString) {
    return queryString
        .split('&')
        .filter(_common__WEBPACK_IMPORTED_MODULE_0__["identity"])
        .map(_common__WEBPACK_IMPORTED_MODULE_0__["splitEqual"])
        .reduce(keyValsToObjectR, {});
};
function parseUrl(url) {
    var orEmptyString = function (x) { return x || ''; };
    var _a = Object(_common__WEBPACK_IMPORTED_MODULE_0__["splitHash"])(url).map(orEmptyString), beforehash = _a[0], hash = _a[1];
    var _b = Object(_common__WEBPACK_IMPORTED_MODULE_0__["splitQuery"])(beforehash).map(orEmptyString), path = _b[0], search = _b[1];
    return { path: path, search: search, hash: hash, url: url };
}
var buildUrl = function (loc) {
    var path = loc.path();
    var searchObject = loc.search();
    var hash = loc.hash();
    var search = Object.keys(searchObject)
        .map(function (key) {
        var param = searchObject[key];
        var vals = Object(_common__WEBPACK_IMPORTED_MODULE_0__["isArray"])(param) ? param : [param];
        return vals.map(function (val) { return key + '=' + val; });
    })
        .reduce(_common__WEBPACK_IMPORTED_MODULE_0__["unnestR"], [])
        .join('&');
    return path + (search ? '?' + search : '') + (hash ? '#' + hash : '');
};
function locationPluginFactory(name, isHtml5, serviceClass, configurationClass) {
    return function (uiRouter) {
        var service = (uiRouter.locationService = new serviceClass(uiRouter));
        var configuration = (uiRouter.locationConfig = new configurationClass(uiRouter, isHtml5));
        function dispose(router) {
            router.dispose(service);
            router.dispose(configuration);
        }
        return { name: name, service: service, configuration: configuration, dispose: dispose };
    };
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/view/index.js":
/*!***********************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/view/index.js ***!
  \***********************************************************************************************/
/*! exports provided: ViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/view/view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewService", function() { return _view__WEBPACK_IMPORTED_MODULE_0__["ViewService"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/view/view.js":
/*!**********************************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/node_modules/@uirouter/core/lib-esm/view/view.js ***!
  \**********************************************************************************************/
/*! exports provided: ViewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewService", function() { return ViewService; });
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/common */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/common.js");
/* harmony import */ var _common_hof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/hof */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/hof.js");
/* harmony import */ var _common_predicates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/predicates */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/predicates.js");
/* harmony import */ var _common_trace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/trace */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/common/trace.js");
/** @publicapi @module view */ /** */




/**
 * The View service
 *
 * This service pairs existing `ui-view` components (which live in the DOM)
 * with view configs (from the state declaration objects: [[StateDeclaration.views]]).
 *
 * - After a successful Transition, the views from the newly entered states are activated via [[activateViewConfig]].
 *   The views from exited states are deactivated via [[deactivateViewConfig]].
 *   (See: the [[registerActivateViews]] Transition Hook)
 *
 * - As `ui-view` components pop in and out of existence, they register themselves using [[registerUIView]].
 *
 * - When the [[sync]] function is called, the registered `ui-view`(s) ([[ActiveUIView]])
 * are configured with the matching [[ViewConfig]](s)
 *
 */
var ViewService = /** @class */ (function () {
    /** @hidden */
    function ViewService(/** @hidden */ router) {
        var _this = this;
        this.router = router;
        /** @hidden */ this._uiViews = [];
        /** @hidden */ this._viewConfigs = [];
        /** @hidden */ this._viewConfigFactories = {};
        /** @hidden */ this._listeners = [];
        /** @internalapi */
        this._pluginapi = {
            _rootViewContext: this._rootViewContext.bind(this),
            _viewConfigFactory: this._viewConfigFactory.bind(this),
            _registeredUIView: function (id) { return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["find"])(_this._uiViews, function (view) { return _this.router.$id + "." + view.id === id; }); },
            _registeredUIViews: function () { return _this._uiViews; },
            _activeViewConfigs: function () { return _this._viewConfigs; },
            _onSync: function (listener) {
                _this._listeners.push(listener);
                return function () { return Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["removeFrom"])(_this._listeners, listener); };
            },
        };
    }
    /**
     * Normalizes a view's name from a state.views configuration block.
     *
     * This should be used by a framework implementation to calculate the values for
     * [[_ViewDeclaration.$uiViewName]] and [[_ViewDeclaration.$uiViewContextAnchor]].
     *
     * @param context the context object (state declaration) that the view belongs to
     * @param rawViewName the name of the view, as declared in the [[StateDeclaration.views]]
     *
     * @returns the normalized uiViewName and uiViewContextAnchor that the view targets
     */
    ViewService.normalizeUIViewTarget = function (context, rawViewName) {
        if (rawViewName === void 0) { rawViewName = ''; }
        // TODO: Validate incoming view name with a regexp to allow:
        // ex: "view.name@foo.bar" , "^.^.view.name" , "view.name@^.^" , "" ,
        // "@" , "$default@^" , "!$default.$default" , "!foo.bar"
        var viewAtContext = rawViewName.split('@');
        var uiViewName = viewAtContext[0] || '$default'; // default to unnamed view
        var uiViewContextAnchor = Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isString"])(viewAtContext[1]) ? viewAtContext[1] : '^'; // default to parent context
        // Handle relative view-name sugar syntax.
        // Matches rawViewName "^.^.^.foo.bar" into array: ["^.^.^.foo.bar", "^.^.^", "foo.bar"],
        var relativeViewNameSugar = /^(\^(?:\.\^)*)\.(.*$)/.exec(uiViewName);
        if (relativeViewNameSugar) {
            // Clobbers existing contextAnchor (rawViewName validation will fix this)
            uiViewContextAnchor = relativeViewNameSugar[1]; // set anchor to "^.^.^"
            uiViewName = relativeViewNameSugar[2]; // set view-name to "foo.bar"
        }
        if (uiViewName.charAt(0) === '!') {
            uiViewName = uiViewName.substr(1);
            uiViewContextAnchor = ''; // target absolutely from root
        }
        // handle parent relative targeting "^.^.^"
        var relativeMatch = /^(\^(?:\.\^)*)$/;
        if (relativeMatch.exec(uiViewContextAnchor)) {
            var anchorState = uiViewContextAnchor.split('.').reduce(function (anchor, x) { return anchor.parent; }, context);
            uiViewContextAnchor = anchorState.name;
        }
        else if (uiViewContextAnchor === '.') {
            uiViewContextAnchor = context.name;
        }
        return { uiViewName: uiViewName, uiViewContextAnchor: uiViewContextAnchor };
    };
    /** @hidden */
    ViewService.prototype._rootViewContext = function (context) {
        return (this._rootContext = context || this._rootContext);
    };
    /** @hidden */
    ViewService.prototype._viewConfigFactory = function (viewType, factory) {
        this._viewConfigFactories[viewType] = factory;
    };
    ViewService.prototype.createViewConfig = function (path, decl) {
        var cfgFactory = this._viewConfigFactories[decl.$type];
        if (!cfgFactory)
            throw new Error('ViewService: No view config factory registered for type ' + decl.$type);
        var cfgs = cfgFactory(path, decl);
        return Object(_common_predicates__WEBPACK_IMPORTED_MODULE_2__["isArray"])(cfgs) ? cfgs : [cfgs];
    };
    /**
     * Deactivates a ViewConfig.
     *
     * This function deactivates a `ViewConfig`.
     * After calling [[sync]], it will un-pair from any `ui-view` with which it is currently paired.
     *
     * @param viewConfig The ViewConfig view to deregister.
     */
    ViewService.prototype.deactivateViewConfig = function (viewConfig) {
        _common_trace__WEBPACK_IMPORTED_MODULE_3__["trace"].traceViewServiceEvent('<- Removing', viewConfig);
        Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["removeFrom"])(this._viewConfigs, viewConfig);
    };
    ViewService.prototype.activateViewConfig = function (viewConfig) {
        _common_trace__WEBPACK_IMPORTED_MODULE_3__["trace"].traceViewServiceEvent('-> Registering', viewConfig);
        this._viewConfigs.push(viewConfig);
    };
    ViewService.prototype.sync = function () {
        var _this = this;
        var uiViewsByFqn = this._uiViews.map(function (uiv) { return [uiv.fqn, uiv]; }).reduce(_common_common__WEBPACK_IMPORTED_MODULE_0__["applyPairs"], {});
        // Return a weighted depth value for a uiView.
        // The depth is the nesting depth of ui-views (based on FQN; times 10,000)
        // plus the depth of the state that is populating the uiView
        function uiViewDepth(uiView) {
            var stateDepth = function (context) { return (context && context.parent ? stateDepth(context.parent) + 1 : 1); };
            return uiView.fqn.split('.').length * 10000 + stateDepth(uiView.creationContext);
        }
        // Return the ViewConfig's context's depth in the context tree.
        function viewConfigDepth(config) {
            var context = config.viewDecl.$context, count = 0;
            while (++count && context.parent)
                context = context.parent;
            return count;
        }
        // Given a depth function, returns a compare function which can return either ascending or descending order
        var depthCompare = Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["curry"])(function (depthFn, posNeg, left, right) { return posNeg * (depthFn(left) - depthFn(right)); });
        var matchingConfigPair = function (uiView) {
            var matchingConfigs = _this._viewConfigs.filter(ViewService.matches(uiViewsByFqn, uiView));
            if (matchingConfigs.length > 1) {
                // This is OK.  Child states can target a ui-view that the parent state also targets (the child wins)
                // Sort by depth and return the match from the deepest child
                // console.log(`Multiple matching view configs for ${uiView.fqn}`, matchingConfigs);
                matchingConfigs.sort(depthCompare(viewConfigDepth, -1)); // descending
            }
            return { uiView: uiView, viewConfig: matchingConfigs[0] };
        };
        var configureUIView = function (tuple) {
            // If a parent ui-view is reconfigured, it could destroy child ui-views.
            // Before configuring a child ui-view, make sure it's still in the active uiViews array.
            if (_this._uiViews.indexOf(tuple.uiView) !== -1)
                tuple.uiView.configUpdated(tuple.viewConfig);
        };
        // Sort views by FQN and state depth. Process uiviews nearest the root first.
        var uiViewTuples = this._uiViews.sort(depthCompare(uiViewDepth, 1)).map(matchingConfigPair);
        var matchedViewConfigs = uiViewTuples.map(function (tuple) { return tuple.viewConfig; });
        var unmatchedConfigTuples = this._viewConfigs
            .filter(function (config) { return !Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["inArray"])(matchedViewConfigs, config); })
            .map(function (viewConfig) { return ({ uiView: undefined, viewConfig: viewConfig }); });
        uiViewTuples.forEach(configureUIView);
        var allTuples = uiViewTuples.concat(unmatchedConfigTuples);
        this._listeners.forEach(function (cb) { return cb(allTuples); });
        _common_trace__WEBPACK_IMPORTED_MODULE_3__["trace"].traceViewSync(allTuples);
    };
    /**
     * Registers a `ui-view` component
     *
     * When a `ui-view` component is created, it uses this method to register itself.
     * After registration the [[sync]] method is used to ensure all `ui-view` are configured with the proper [[ViewConfig]].
     *
     * Note: the `ui-view` component uses the `ViewConfig` to determine what view should be loaded inside the `ui-view`,
     * and what the view's state context is.
     *
     * Note: There is no corresponding `deregisterUIView`.
     *       A `ui-view` should hang on to the return value of `registerUIView` and invoke it to deregister itself.
     *
     * @param uiView The metadata for a UIView
     * @return a de-registration function used when the view is destroyed.
     */
    ViewService.prototype.registerUIView = function (uiView) {
        _common_trace__WEBPACK_IMPORTED_MODULE_3__["trace"].traceViewServiceUIViewEvent('-> Registering', uiView);
        var uiViews = this._uiViews;
        var fqnAndTypeMatches = function (uiv) { return uiv.fqn === uiView.fqn && uiv.$type === uiView.$type; };
        if (uiViews.filter(fqnAndTypeMatches).length)
            _common_trace__WEBPACK_IMPORTED_MODULE_3__["trace"].traceViewServiceUIViewEvent('!!!! duplicate uiView named:', uiView);
        uiViews.push(uiView);
        this.sync();
        return function () {
            var idx = uiViews.indexOf(uiView);
            if (idx === -1) {
                _common_trace__WEBPACK_IMPORTED_MODULE_3__["trace"].traceViewServiceUIViewEvent('Tried removing non-registered uiView', uiView);
                return;
            }
            _common_trace__WEBPACK_IMPORTED_MODULE_3__["trace"].traceViewServiceUIViewEvent('<- Deregistering', uiView);
            Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["removeFrom"])(uiViews)(uiView);
        };
    };
    /**
     * Returns the list of views currently available on the page, by fully-qualified name.
     *
     * @return {Array} Returns an array of fully-qualified view names.
     */
    ViewService.prototype.available = function () {
        return this._uiViews.map(Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["prop"])('fqn'));
    };
    /**
     * Returns the list of views on the page containing loaded content.
     *
     * @return {Array} Returns an array of fully-qualified view names.
     */
    ViewService.prototype.active = function () {
        return this._uiViews.filter(Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["prop"])('$config')).map(Object(_common_hof__WEBPACK_IMPORTED_MODULE_1__["prop"])('name'));
    };
    /**
     * Given a ui-view and a ViewConfig, determines if they "match".
     *
     * A ui-view has a fully qualified name (fqn) and a context object.  The fqn is built from its overall location in
     * the DOM, describing its nesting relationship to any parent ui-view tags it is nested inside of.
     *
     * A ViewConfig has a target ui-view name and a context anchor.  The ui-view name can be a simple name, or
     * can be a segmented ui-view path, describing a portion of a ui-view fqn.
     *
     * In order for a ui-view to match ViewConfig, ui-view's $type must match the ViewConfig's $type
     *
     * If the ViewConfig's target ui-view name is a simple name (no dots), then a ui-view matches if:
     * - the ui-view's name matches the ViewConfig's target name
     * - the ui-view's context matches the ViewConfig's anchor
     *
     * If the ViewConfig's target ui-view name is a segmented name (with dots), then a ui-view matches if:
     * - There exists a parent ui-view where:
     *    - the parent ui-view's name matches the first segment (index 0) of the ViewConfig's target name
     *    - the parent ui-view's context matches the ViewConfig's anchor
     * - And the remaining segments (index 1..n) of the ViewConfig's target name match the tail of the ui-view's fqn
     *
     * Example:
     *
     * DOM:
     * <ui-view>                        <!-- created in the root context (name: "") -->
     *   <ui-view name="foo">                <!-- created in the context named: "A"      -->
     *     <ui-view>                    <!-- created in the context named: "A.B"    -->
     *       <ui-view name="bar">            <!-- created in the context named: "A.B.C"  -->
     *       </ui-view>
     *     </ui-view>
     *   </ui-view>
     * </ui-view>
     *
     * uiViews: [
     *  { fqn: "$default",                  creationContext: { name: "" } },
     *  { fqn: "$default.foo",              creationContext: { name: "A" } },
     *  { fqn: "$default.foo.$default",     creationContext: { name: "A.B" } }
     *  { fqn: "$default.foo.$default.bar", creationContext: { name: "A.B.C" } }
     * ]
     *
     * These four view configs all match the ui-view with the fqn: "$default.foo.$default.bar":
     *
     * - ViewConfig1: { uiViewName: "bar",                       uiViewContextAnchor: "A.B.C" }
     * - ViewConfig2: { uiViewName: "$default.bar",              uiViewContextAnchor: "A.B" }
     * - ViewConfig3: { uiViewName: "foo.$default.bar",          uiViewContextAnchor: "A" }
     * - ViewConfig4: { uiViewName: "$default.foo.$default.bar", uiViewContextAnchor: "" }
     *
     * Using ViewConfig3 as an example, it matches the ui-view with fqn "$default.foo.$default.bar" because:
     * - The ViewConfig's segmented target name is: [ "foo", "$default", "bar" ]
     * - There exists a parent ui-view (which has fqn: "$default.foo") where:
     *    - the parent ui-view's name "foo" matches the first segment "foo" of the ViewConfig's target name
     *    - the parent ui-view's context "A" matches the ViewConfig's anchor context "A"
     * - And the remaining segments [ "$default", "bar" ].join("."_ of the ViewConfig's target name match
     *   the tail of the ui-view's fqn "default.bar"
     *
     * @internalapi
     */
    ViewService.matches = function (uiViewsByFqn, uiView) { return function (viewConfig) {
        // Don't supply an ng1 ui-view with an ng2 ViewConfig, etc
        if (uiView.$type !== viewConfig.viewDecl.$type)
            return false;
        // Split names apart from both viewConfig and uiView into segments
        var vc = viewConfig.viewDecl;
        var vcSegments = vc.$uiViewName.split('.');
        var uivSegments = uiView.fqn.split('.');
        // Check if the tails of the segment arrays match. ex, these arrays' tails match:
        // vc: ["foo", "bar"], uiv fqn: ["$default", "foo", "bar"]
        if (!Object(_common_common__WEBPACK_IMPORTED_MODULE_0__["equals"])(vcSegments, uivSegments.slice(0 - vcSegments.length)))
            return false;
        // Now check if the fqn ending at the first segment of the viewConfig matches the context:
        // ["$default", "foo"].join(".") == "$default.foo", does the ui-view $default.foo context match?
        var negOffset = 1 - vcSegments.length || undefined;
        var fqnToFirstSegment = uivSegments.slice(0, negOffset).join('.');
        var uiViewContext = uiViewsByFqn[fqnToFirstSegment].creationContext;
        return vc.$uiViewContextAnchor === (uiViewContext && uiViewContext.name);
    }; };
    return ViewService;
}());

//# sourceMappingURL=view.js.map

/***/ }),

/***/ "../../jinge-ui-router/src/components/index.js":
/*!*********************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/src/components/index.js ***!
  \*********************************************************************/
/*! exports provided: UIView, UISref, UI_ROUTER, UIBaseRouter, UIHashRouter, UIHtml5Router, UIRedirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "../../jinge-ui-router/src/components/view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIView", function() { return _view__WEBPACK_IMPORTED_MODULE_0__["UIView"]; });

/* harmony import */ var _sref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sref */ "../../jinge-ui-router/src/components/sref.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UISref", function() { return _sref__WEBPACK_IMPORTED_MODULE_1__["UISref"]; });

/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "../../jinge-ui-router/src/components/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UI_ROUTER", function() { return _router__WEBPACK_IMPORTED_MODULE_2__["UI_ROUTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIBaseRouter", function() { return _router__WEBPACK_IMPORTED_MODULE_2__["UIBaseRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIHashRouter", function() { return _router__WEBPACK_IMPORTED_MODULE_2__["UIHashRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIHtml5Router", function() { return _router__WEBPACK_IMPORTED_MODULE_2__["UIHtml5Router"]; });

/* harmony import */ var _redirect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect */ "../../jinge-ui-router/src/components/redirect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIRedirect", function() { return _redirect__WEBPACK_IMPORTED_MODULE_3__["UIRedirect"]; });







/***/ }),

/***/ "../../jinge-ui-router/src/components/redirect.js":
/*!************************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/src/components/redirect.js ***!
  \************************************************************************/
/*! exports provided: UIRedirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIRedirect", function() { return UIRedirect; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "../../jinge-ui-router/src/components/view.js");




class UIRedirect extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static get template() {
    return function(component) {
      const vm_0 = component;
      return [
      ...(() => {
        const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
          [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<UIView>",
          [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
          [jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]: component[jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]],
        });
        const el = new _view__WEBPACK_IMPORTED_MODULE_1__["UIView"](attrs);
        Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addParentStyleId"])(el, component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]]);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
        return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el[jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]](component));
      })()
      ];
    };
  }
}


/***/ }),

/***/ "../../jinge-ui-router/src/components/router.js":
/*!**********************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/src/components/router.js ***!
  \**********************************************************************/
/*! exports provided: UI_ROUTER, UIBaseRouter, UIHashRouter, UIHtml5Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI_ROUTER", function() { return UI_ROUTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIBaseRouter", function() { return UIBaseRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIHashRouter", function() { return UIHashRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIHtml5Router", function() { return UIHtml5Router; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../jinge-ui-router/src/core.js");



const UI_ROUTER = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('router');

class UIBaseRouter extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(attrs, CoreRouter) {
    const router = new CoreRouter();
    if (attrs && attrs._plugins) {
      attrs._plugins.forEach(plugin => router.plugin(plugin));
    }
    if (attrs && attrs._states) {
      attrs._states.forEach(state => router.register(state));
    }
    if (attrs && attrs._otherwise) {
      router.otherwise(attrs._otherwise);
    }
    const vm_109480b9ce = super(attrs);
    vm_109480b9ce[_core__WEBPACK_IMPORTED_MODULE_1__["UIROUTER"]] = router;
    vm_109480b9ce[jinge__WEBPACK_IMPORTED_MODULE_0__["SET_CONTEXT"]](_core__WEBPACK_IMPORTED_MODULE_1__["UIROUTER_CONTEXT"], router);
    return vm_109480b9ce;
  }

  [jinge__WEBPACK_IMPORTED_MODULE_0__["AFTER_RENDER"]]() {
    this[_core__WEBPACK_IMPORTED_MODULE_1__["UIROUTER"]].start();
  }

  [jinge__WEBPACK_IMPORTED_MODULE_0__["BEFORE_DESTROY"]]() {
    this[_core__WEBPACK_IMPORTED_MODULE_1__["UIROUTER"]].dispose();
  }
}

class UIHashRouter extends UIBaseRouter {
  constructor(attrs) {
    super(attrs, _core__WEBPACK_IMPORTED_MODULE_1__["HashRouter"]);
  }
}

class UIHtml5Router extends UIBaseRouter {
  constructor(attrs) {
    super(attrs, _core__WEBPACK_IMPORTED_MODULE_1__["Html5Router"]);
  }
}


/***/ }),

/***/ "../../jinge-ui-router/src/components/sref.js":
/*!********************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/src/components/sref.js ***!
  \********************************************************************/
/*! exports provided: UISref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UISref", function() { return UISref; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "../../jinge-ui-router/src/core.js");





const ROUTER = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('router');
const EL = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('el');
const TAG = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('tag');
const UPDATE_HREF = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('update_href');
const UPDATE_ACTIVE = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('update_active');
const UPDATE_TARGET = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('update_target');
const CLICK_HANDLER = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('click_handler');
const ON_CLICK = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('on_click');
const DEREGISTER = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('deregister');

const SUPPORTED_TARGETS = ['_blank', '_self'];

class UISref extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static get template() {
    return function(component) {
      const vm_0 = component;
      return [
      ...(() => {
        const __ac = vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["ARG_COMPONENTS"]];
        const renderFn = __ac && __ac['default'] ? __ac['default'] :   function(component) {
          return [
          (() => {
            const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
              "a",
              component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
              (() => {
                const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
                const fn_0 = () => {
                  Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, vm_0.text);
                };
                fn_0();
                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["text"], fn_0, component);
                return el;
              })()
            );
            const fn_0 = () => {
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(el, "class", !vm_0.className && !(vm_0.isActive && vm_0.active) ? vm_0._udef : (vm_0.className || '') + (vm_0.isActive && vm_0.active ? (vm_0.className ? ' ' : '') + vm_0.active : ''));
            };
            fn_0();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["className"], fn_0, component);
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["isActive"], fn_0, component);
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["active"], fn_0, component);
            const fn_1 = () => {
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(el, "style", vm_0.style);
            };
            fn_1();
            vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["style"], fn_1, component);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
            return el;
          })()
          ];
        };
        const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
          [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<parameter>",
          [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
          [jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]: component[jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]],
          [jinge__WEBPACK_IMPORTED_MODULE_0__["ARG_COMPONENTS"]]: {
            [jinge__WEBPACK_IMPORTED_MODULE_0__["STR_DEFAULT"]]: renderFn || jinge__WEBPACK_IMPORTED_MODULE_0__["emptyRenderFn"]
          }
        });
        const el = new jinge__WEBPACK_IMPORTED_MODULE_0__["ParameterComponent"](attrs, []);
        Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addParentStyleId"])(el, component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]]);
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
        return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el[jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]]());
      })()
      ];
    };
  }

  constructor(attrs) {
    if (attrs.params && !Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isObject"])(attrs.params)) {
      throw new Error('<ui-sref> attribute "params" require object.');
    }
    if (attrs.target && SUPPORTED_TARGETS.indexOf(attrs.target) < 0) {
      throw new Error(`<ui-sref> attribute "target" only accept one of ${ JSON.stringify(SUPPORTED_TARGETS) }`);
    }
    const vm_109480b9ce = super(attrs);
    const router = vm_109480b9ce[jinge__WEBPACK_IMPORTED_MODULE_0__["GET_CONTEXT"]](_core__WEBPACK_IMPORTED_MODULE_1__["UIROUTER_CONTEXT"]);
    if (!router || !Object(jinge__WEBPACK_IMPORTED_MODULE_0__["instanceOf"])(router, _core__WEBPACK_IMPORTED_MODULE_1__["BaseRouter"])) {
      throw new Error('<ui-sref> must under parent which has context named Router.CONTEXT_NAME');
    }
    vm_109480b9ce[ROUTER] = router;
    vm_109480b9ce[EL] = null;
    vm_109480b9ce[DEREGISTER] = null;
    vm_109480b9ce[TAG] = attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["ARG_COMPONENTS"]] && attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["ARG_COMPONENTS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["STR_DEFAULT"]] ? 0 : -1;
    vm_109480b9ce[CLICK_HANDLER] = vm_109480b9ce[ON_CLICK].bind(this);
    vm_109480b9ce.isActive = false;
    const fn_109480b9ce_11 = () => {
      vm_109480b9ce.to = attrs.to;
    };
    fn_109480b9ce_11();
    attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('to', fn_109480b9ce_11);
    const fn_109480b9ce_12 = () => {
      vm_109480b9ce.params = attrs.params;
    };
    fn_109480b9ce_12();
    attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('params', fn_109480b9ce_12);
    const fn_109480b9ce_13 = () => {
      vm_109480b9ce.active = attrs.active;
    };
    fn_109480b9ce_13();
    attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('active', fn_109480b9ce_13);
    const fn_109480b9ce_14 = () => {
      vm_109480b9ce.location = 'location' in attrs ? attrs.location : true;
    };
    fn_109480b9ce_14();
    attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('location', fn_109480b9ce_14);
    const fn_109480b9ce_15 = () => {
      vm_109480b9ce.reload = !!attrs.reload;
    };
    fn_109480b9ce_15();
    attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('reload', fn_109480b9ce_15);
    const fn_109480b9ce_16 = () => {
      vm_109480b9ce.text = attrs.text || '';
    };
    fn_109480b9ce_16();
    attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('text', fn_109480b9ce_16);
    const fn_109480b9ce_17 = () => {
      vm_109480b9ce.target = attrs.target || '_self';
    };
    fn_109480b9ce_17();
    attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('target', fn_109480b9ce_17);
    const fn_109480b9ce_18 = () => {
      vm_109480b9ce.className = attrs.class;
    };
    fn_109480b9ce_18();
    attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('class', fn_109480b9ce_18);
    const fn_109480b9ce_19 = () => {
      vm_109480b9ce.style = attrs.style;
    };
    fn_109480b9ce_19();
    attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('style', fn_109480b9ce_19);
    return vm_109480b9ce;
  }

  get target() {
    return this._target;
  }

  set target(v) {
    if (this._target === v) return;
    this._target = v;
    this[jinge__WEBPACK_IMPORTED_MODULE_0__["UPDATE_IF_NEED"]](this[UPDATE_TARGET]);
  }

  get to() {
    return this._to;
  }

  set to(v) {
    if (this._to === v) return;
    this._to = v;
    this[jinge__WEBPACK_IMPORTED_MODULE_0__["UPDATE_IF_NEED"]](this[UPDATE_HREF]);
  }

  get params() {
    return this._params;
  }

  set params(v) {
    this._params = v;
    this[jinge__WEBPACK_IMPORTED_MODULE_0__["UPDATE_IF_NEED"]](this[UPDATE_HREF]);
  }

  get active() {
    return this._active;
  }

  set active(v) {
    if (this._active === v) return;
    if (this[TAG] >= 0 && this._active && this[EL]) {
      Object(jinge__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(this[EL], this._active); // remove previous active class
    }
    this._active = v;
    this[jinge__WEBPACK_IMPORTED_MODULE_0__["UPDATE_IF_NEED"]](this[UPDATE_ACTIVE]);
  }

  [ON_CLICK](e) {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey) {
      return;
    }
    if (this[TAG] <= 0) {
      e.preventDefault(); // prevent default <a> jump
    }
    const router = this[ROUTER];
    const parent = this[jinge__WEBPACK_IMPORTED_MODULE_0__["GET_CONTEXT"]](_core__WEBPACK_IMPORTED_MODULE_1__["UIROUTER_CONTEXT_PARENT"]);
    const parentContext = (parent && parent.context) || router.stateRegistry.root();
    if (this._target === '_blank') {
      const href = router.href(this._to, this._params, {
        relative: parentContext,
        inherit: true
      });
      window.open(href);
    } else {
      router.go(this._to, this._params, {
        relative: parentContext,
        inherit: true,
        location: this.location,
        reload: this.reload
      });
    }
  }

  [jinge__WEBPACK_IMPORTED_MODULE_0__["AFTER_RENDER"]]() {
    const el = this[jinge__WEBPACK_IMPORTED_MODULE_0__["GET_FIRST_DOM"]]();
    if (this[TAG] >= 0) {
      this[TAG] = el.tagName === 'A' ? 0 : 1;
    }
    this[EL] = el;
    this[DEREGISTER] = this[ROUTER].transitionService.onSuccess({}, () => this[UPDATE_ACTIVE]());
    this[UPDATE_TARGET]();
    this[UPDATE_HREF]();
    this[UPDATE_ACTIVE]();
    Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'click', this[CLICK_HANDLER]);
  }

  [jinge__WEBPACK_IMPORTED_MODULE_0__["BEFORE_DESTROY"]]() {
    Object(jinge__WEBPACK_IMPORTED_MODULE_0__["removeEvent"])(this[EL], 'click', this[CLICK_HANDLER]);
    this[DEREGISTER]();
  }

  [UPDATE_TARGET]() {
    if (this[TAG] <= 0) {
      Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(this[EL], 'target', this._target);
    }
  }

  [UPDATE_HREF]() {
    const router = this[ROUTER];
    this.isActive = router.includes(this._to, this._params);
    if (this[TAG] <= 0) {
      const parent = this[jinge__WEBPACK_IMPORTED_MODULE_0__["GET_CONTEXT"]](_core__WEBPACK_IMPORTED_MODULE_1__["UIROUTER_CONTEXT_PARENT"]);
      const parentContext = (parent && parent.context) || router.stateRegistry.root();
      Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(this[EL], 'href', router.href(this._to, this._params, {
        relative: parentContext,
        inherit: true
      }));
    }
  }

  [UPDATE_ACTIVE]() {
    this.isActive = this[ROUTER].includes(this._to, this._params);
    if (!this._active || this[TAG] < 0) return;
    if (this.isActive) {
      Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addClass"])(this[EL], this._active);
    } else {
      Object(jinge__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(this[EL], this._active);
    }
  }
}


/***/ }),

/***/ "../../jinge-ui-router/src/components/view.js":
/*!********************************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/src/components/view.js ***!
  \********************************************************************/
/*! exports provided: UIView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIView", function() { return UIView; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/index.js");
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/core */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "../../jinge-ui-router/src/core.js");




const UIVIEW_RESOLVES = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('resolves');
const UIVIEW_COMPONENT = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('component');
const UIVIEW_DATA = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('data');
const UIVIEW_ADDRESS = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('address');
const UIVIEW_CONFIG_UPDATED = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["Symbol"])();
// eslint-disable-next-line camelcase
const UIVIEW_deregister = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["Symbol"])('deregister');
const TransitionPropCollisionError = new Error(
  '`transition` cannot be used as resolve token. Please rename your resolve to avoid conflicts with the router transition.'
);

const EXCLUDES = ['$transition$', '$stateParams', '$state$'];
let AUTO_INC_ID = 0;

function createEl(ComponentClass, resolves, context) {
  const attrs = {
    [jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]: context
  };
  if (resolves) Object.assign(attrs, resolves);
  return new ComponentClass(Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])(attrs));
}

class UIView extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(attrs) {
    const vm_109480b9ce = super(attrs);
    const router = vm_109480b9ce[jinge__WEBPACK_IMPORTED_MODULE_0__["GET_CONTEXT"]](_core__WEBPACK_IMPORTED_MODULE_2__["UIROUTER_CONTEXT"]);
    if (!router || !Object(jinge__WEBPACK_IMPORTED_MODULE_0__["instanceOf"])(router, _core__WEBPACK_IMPORTED_MODULE_2__["BaseRouter"])) {
      throw new Error('RouterView must under parent which has context named Router.CONTEXT_NAME');
    }
    vm_109480b9ce[_core__WEBPACK_IMPORTED_MODULE_2__["UIROUTER"]] = router;
    const parent = vm_109480b9ce[jinge__WEBPACK_IMPORTED_MODULE_0__["GET_CONTEXT"]](_core__WEBPACK_IMPORTED_MODULE_2__["UIROUTER_CONTEXT_PARENT"]) || {
      fqn: '',
      context: router.stateRegistry.root()
    };
    const name = attrs.name || jinge__WEBPACK_IMPORTED_MODULE_0__["STR_DEFAULT"];
    const uiViewData = {
      $type: jinge__WEBPACK_IMPORTED_MODULE_0__["STR_JINGE"],
      id: ++AUTO_INC_ID,
      name: name,
      fqn: parent.fqn ? parent.fqn + '.' + name : name,
      creationContext: parent.context,
      configUpdated: vm_109480b9ce[UIVIEW_CONFIG_UPDATED].bind(this),
      config: undefined
    };
    const uiViewAddress = {
      fqn: uiViewData.fqn,
      context: undefined
    };
    vm_109480b9ce[jinge__WEBPACK_IMPORTED_MODULE_0__["SET_CONTEXT"]](_core__WEBPACK_IMPORTED_MODULE_2__["UIROUTER_CONTEXT_PARENT"], uiViewAddress, true);
    vm_109480b9ce[UIVIEW_COMPONENT] = vm_109480b9ce[UIVIEW_RESOLVES] = null;
    vm_109480b9ce[UIVIEW_ADDRESS] = uiViewAddress;
    vm_109480b9ce[UIVIEW_DATA] = uiViewData;
    vm_109480b9ce[UIVIEW_deregister] = router.viewService.registerUIView(uiViewData);
    return vm_109480b9ce;
  }

  [jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]]() {
    const roots = this[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]];
    const componentClass = this[UIVIEW_COMPONENT];
    if (!componentClass) {
      roots.push(Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createComment"])(jinge__WEBPACK_IMPORTED_MODULE_0__["STR_EMPTY"]));
      return roots;
    }
    const el = createEl(componentClass, this[UIVIEW_RESOLVES], this[jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]);
    roots.push(el);
    return el[jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]]();
  }

  [UIVIEW_CONFIG_UPDATED](newConfig) {
    // console.log('cfg', newConfig, this[UIVIEW_DATA].id);
    const uiViewData = this[UIVIEW_DATA];
    if (uiViewData.config === newConfig) return;

    // console.log('update:', this[UIVIEW_DATA].id);
    let resolves = null;

    if (newConfig) {
      this[UIVIEW_ADDRESS].context = newConfig.viewDecl && newConfig.viewDecl.$context;
      const resolveContext = new _uirouter_core__WEBPACK_IMPORTED_MODULE_1__["ResolveContext"](newConfig.path);
      const injector = resolveContext.injector();

      const stringTokens = resolveContext.getTokens().filter(t => Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isString"])(t) && EXCLUDES.indexOf(t) < 0);
      if (stringTokens.indexOf('transition') !== -1) {
        throw TransitionPropCollisionError;
      }

      if (stringTokens.length > 0) {
        resolves = {};
        stringTokens.forEach(token => {
          resolves[token] = injector.get(token);
        });
      }
    }

    uiViewData.config = newConfig;
    this[UIVIEW_COMPONENT] = newConfig && newConfig.viewDecl && newConfig.viewDecl.component;
    this[UIVIEW_RESOLVES] = resolves;
    this[jinge__WEBPACK_IMPORTED_MODULE_0__["UPDATE_IF_NEED"]](false);
  }

  [jinge__WEBPACK_IMPORTED_MODULE_0__["UPDATE"]]() {
    const roots = this[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]];
    const preEl = roots[0];
    const isC = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["isComponent"])(preEl);
    const newComponent = this[UIVIEW_COMPONENT];
    if (!newComponent && !isC) {
      return;
    }
    const el = newComponent ? createEl(newComponent, this[UIVIEW_RESOLVES], this[jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]) : Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createComment"])(jinge__WEBPACK_IMPORTED_MODULE_0__["STR_EMPTY"]);
    const fd = isC ? preEl[jinge__WEBPACK_IMPORTED_MODULE_0__["GET_FIRST_DOM"]]() : preEl;
    const pa = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["getParent"])(fd);
    if (newComponent) {
      /**
       * 如果 newComponent 中有子 <ui-view/>，并且其兄弟状态也有 <ui-view/>，
       * `el[RENDER]()` 执行时，会触发 `preEl[DESTROY]()` 从而导致
       * `fd` 这个元素被从 DOM 中删除。临时的解决方案是，
       * 在执行 `el[RENDER]()` 之前，插入一个游标元素。
       */
      const cursorCmt = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createComment"])('ui-view-cursor');
      Object(jinge__WEBPACK_IMPORTED_MODULE_0__["insertBefore"])(
        pa,
        cursorCmt,
        fd
      );
      Object(jinge__WEBPACK_IMPORTED_MODULE_0__["replaceChild"])(
        pa,
        el[jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]](),
        cursorCmt
      );
    } else {
      Object(jinge__WEBPACK_IMPORTED_MODULE_0__["insertBefore"])(pa, el, fd);
    }
    if (isC) {
      preEl[jinge__WEBPACK_IMPORTED_MODULE_0__["DESTROY"]]();
    } else {
      Object(jinge__WEBPACK_IMPORTED_MODULE_0__["removeChild"])(pa, fd);
    }
    roots[0] = el;
    newComponent && el[jinge__WEBPACK_IMPORTED_MODULE_0__["HANDLE_AFTER_RENDER"]]();
  }

  [jinge__WEBPACK_IMPORTED_MODULE_0__["BEFORE_DESTROY"]]() {
    this[UIVIEW_deregister]();
  }
}


/***/ }),

/***/ "../../jinge-ui-router/src/core.js":
/*!*********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/src/core.js ***!
  \*********************************************************/
/*! exports provided: UIROUTER, UIROUTER_CONTEXT, UIROUTER_CONTEXT_PARENT, BaseRouter, HashRouter, Html5Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIROUTER", function() { return UIROUTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIROUTER_CONTEXT", function() { return UIROUTER_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIROUTER_CONTEXT_PARENT", function() { return UIROUTER_CONTEXT_PARENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRouter", function() { return BaseRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return HashRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Html5Router", function() { return Html5Router; });
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uirouter/core */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge */ "../../jinge-framework/index.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "../../jinge-ui-router/src/view.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "../../jinge-ui-router/src/components/index.js");





function viewConfigFactory(node, config) {
  return new _view__WEBPACK_IMPORTED_MODULE_2__["JingeViewConfig"](node, config);
}

const UIROUTER = Symbol('router');

/**
 * 此处的 context 名称不使用 Symbol，是为了在 jinge-material 组件库中获取
 * 上下文时可以不依赖 jinge-ui-router 库。
 */
const UIROUTER_CONTEXT = '#ui-router_context';
const UIROUTER_CONTEXT_PARENT = '#ui-router_parent';

class BaseRouter extends _uirouter_core__WEBPACK_IMPORTED_MODULE_0__["UIRouter"] {
  static get CONTEXT_NAME() {
    return UIROUTER_CONTEXT;
  }

  constructor(locationPlugin, options) {
    super();
    this.viewService._pluginapi._viewConfigFactory(jinge__WEBPACK_IMPORTED_MODULE_1__["STR_JINGE"], viewConfigFactory);
    this.stateRegistry.decorator('views', _view__WEBPACK_IMPORTED_MODULE_2__["jingeViewsBuilder"]);
    this._started = false;
    if (options && options.trace) this.trace.enable(1);
    this.plugin(_uirouter_core__WEBPACK_IMPORTED_MODULE_0__["servicesPlugin"]);
    locationPlugin && this.plugin(locationPlugin);
  }

  register(...stateDefines) {
    stateDefines.forEach(stateDef => {
      if (!stateDef.name) throw new Error('ui-router state define require "name" property.');
      if (stateDef.redirectTo && !stateDef.component) {
        stateDef.component = _components__WEBPACK_IMPORTED_MODULE_3__["UIRedirect"];
      }
      const resolve = stateDef.resolve;
      if (!Object(jinge__WEBPACK_IMPORTED_MODULE_1__["isUndefined"])(resolve)) {
        if (resolve === null || !Object(jinge__WEBPACK_IMPORTED_MODULE_1__["isObject"])(resolve)) {
          throw new Error(`resolve of state ${stateDef.name} must be object or array. see https://[todo]`);
        }
        if (!Object(jinge__WEBPACK_IMPORTED_MODULE_1__["isArray"])(resolve)) {
          stateDef.resolve = Object.keys(resolve).map(k => {
            const rtn = {
              token: k
            };
            const v = resolve[k];
            if (Object(jinge__WEBPACK_IMPORTED_MODULE_1__["isArray"])(v)) {
              if (v.length > 1) {
                rtn.deps = v.slice(0, v.length - 1);
              }
              rtn.resolveFn = v[v.length - 1];
            } else if (!Object(jinge__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(v)) {
              rtn.resolveFn = () => v;
            } else {
              rtn.resolveFn = v;
            }
            return rtn;
          });
          // console.log(stateDef.resolve[0]);
        }
      }
      this.stateRegistry.register(stateDef);
    });
    return this;
  }

  /**
   * @param {String} stateName name of target state
   */
  otherwise(stateName) {
    this.urlRouter.otherwise({
      state: stateName
    });
    return this;
  }

  start() {
    if (this._started) throw new Error('has been started');
    this.urlService.listen();
    this.urlService.sync();
    this._started = true;
  }

  includes(...args) {
    return this.stateService.includes(...args);
  }

  href(...args) {
    return this.stateService.href(...args);
  }

  go(...args) {
    return this.stateService.go(...args);
  }

  get params() {
    return this.stateService.params;
  }

  get transition() {
    return this.stateService.transition;
  }

  get current() {
    return this.stateService.$current;
  }
}

class HashRouter extends BaseRouter {
  constructor(options) {
    super(_uirouter_core__WEBPACK_IMPORTED_MODULE_0__["hashLocationPlugin"], options);
  }
}

class Html5Router extends BaseRouter {
  constructor(options) {
    super(_uirouter_core__WEBPACK_IMPORTED_MODULE_0__["pushStateLocationPlugin"], options);
  }
}


/***/ }),

/***/ "../../jinge-ui-router/src/index.js":
/*!**********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/src/index.js ***!
  \**********************************************************/
/*! exports provided: UIROUTER, UIROUTER_CONTEXT, UIROUTER_CONTEXT_PARENT, BaseRouter, HashRouter, Html5Router, jingeViewsBuilder, JingeViewConfig, UIView, UISref, UI_ROUTER, UIBaseRouter, UIHashRouter, UIHtml5Router, UIRedirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "../../jinge-ui-router/src/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIView", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["UIView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UISref", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["UISref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UI_ROUTER", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["UI_ROUTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIBaseRouter", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["UIBaseRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIHashRouter", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["UIHashRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIHtml5Router", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["UIHtml5Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIRedirect", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["UIRedirect"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "../../jinge-ui-router/src/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIROUTER", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["UIROUTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIROUTER_CONTEXT", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["UIROUTER_CONTEXT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UIROUTER_CONTEXT_PARENT", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["UIROUTER_CONTEXT_PARENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseRouter", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["BaseRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["HashRouter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Html5Router", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["Html5Router"]; });

/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ "../../jinge-ui-router/src/view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jingeViewsBuilder", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["jingeViewsBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JingeViewConfig", function() { return _view__WEBPACK_IMPORTED_MODULE_2__["JingeViewConfig"]; });






/***/ }),

/***/ "../../jinge-ui-router/src/view.js":
/*!*********************************************************!*\
  !*** /Users/geyuhang/jinge/jinge-ui-router/src/view.js ***!
  \*********************************************************/
/*! exports provided: jingeViewsBuilder, JingeViewConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jingeViewsBuilder", function() { return jingeViewsBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JingeViewConfig", function() { return JingeViewConfig; });
/* harmony import */ var _uirouter_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @uirouter/core */ "../../jinge-ui-router/node_modules/@uirouter/core/lib-esm/index.js");
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge */ "../../jinge-framework/index.js");
/**
 * Copied from https://github.com/ui-router/react/blob/master/src/reactViews.tsx
 * Modified by Yuhang Ge
 */




function jingeViewsBuilder(state) {
  const views = {};
  let viewsDefinitionObject;
  if (!state.views) {
    viewsDefinitionObject = {
      [jinge__WEBPACK_IMPORTED_MODULE_1__["STR_DEFAULT"]]: {
        component: state.component
      }
    };
  } else {
    viewsDefinitionObject = Object(jinge__WEBPACK_IMPORTED_MODULE_1__["mapObject"])(state.views, val => {
      if (val.component) return val;
      return {
        component: val
      };
    });
  }

  for (const name in viewsDefinitionObject) {
    const config = viewsDefinitionObject[name];
    if (Object.keys(config).length === 0) return;
    config.$type = jinge__WEBPACK_IMPORTED_MODULE_1__["STR_JINGE"];
    config.$context = state;
    config.$name = name || jinge__WEBPACK_IMPORTED_MODULE_1__["STR_DEFAULT"];

    const normalized = _uirouter_core__WEBPACK_IMPORTED_MODULE_0__["ViewService"].normalizeUIViewTarget(config.$context, config.$name);
    config.$uiViewName = normalized.uiViewName;
    config.$uiViewContextAnchor = normalized.uiViewContextAnchor;

    views[config.$name] = config;
  }
  return views;
}

let AUTO_INC_ID = 0;

class JingeViewConfig {
  constructor(path, viewDecl) {
    this.loaded = true;
    this.$id = AUTO_INC_ID++;
    this.path = path;
    this.viewDecl = viewDecl;
    // console.log('new config', this.$id, viewDecl);
  }

  load() {
    return _uirouter_core__WEBPACK_IMPORTED_MODULE_0__["services"].$q.when(this);
  }
}


/***/ }),

/***/ "./app.html":
/*!******************!*\
  !*** ./app.html ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/index.js");
/* harmony import */ var jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-ui-router */ "../../jinge-ui-router/src/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(component) {
  const vm_0 = component;
  return [
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "h2",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
      "UI-Router"
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
    return el;
  })(),
  (() => {
    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
      "p",
      component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
      "jinge framework does't implement router. we use ui-router."
    );
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
    return el;
  })(),
  ...(() => {
    const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
      [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<ui-hash-router>",
      [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
      [jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]: component[jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]],
      _states: null,
      _plugins: null,
      _otherwise: "hello",
      [jinge__WEBPACK_IMPORTED_MODULE_0__["ARG_COMPONENTS"]]: {
        [jinge__WEBPACK_IMPORTED_MODULE_0__["STR_DEFAULT"]]: function(component) {
          return [
          (() => {
            const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
              "div",
              component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                "div",
                {
                  style: "border-bottom: 1px solid blue; margin-bottom: 10px;"
                },
                Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
                  "h3",
                  "Top Menu Area"
                ),
                Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
                  "p",
                  Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
                    "label",
                    "Open new tab:"
                  ),
                  (() => {
                    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                      "input",
                      {
                        type: "checkbox"
                      },
                    );
                    const fn_0 = () => {
                      el[jinge__WEBPACK_IMPORTED_MODULE_0__["HTML_ATTR_checked"]] = !!(vm_0.newTab);
                    };
                    fn_0();
                    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["newTab"], fn_0, component);
                    Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addEvent"])(el, 'change', function(...args) {vm_0.newTab = args[0].target.checked})
                    return el;
                  })()
                ),
                Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
                  "p",
                  ...(() => {
                    const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<ui-sref>",
                      [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
                      [jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]: component[jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]],
                      target: null,
                      class: "xx",
                      style: "margin-right: 8px;",
                      text: "Hello",
                      to: "hello",
                      active: "active"
                    });
                    const fn_0 = () => {
                      attrs.target = vm_0.newTab ? '_black' : '_self';
                    };
                    fn_0();
                    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["newTab"], fn_0, component);
                    const el = new jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UISref"](attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__["NON_ROOT_COMPONENT_NODES"]].push(el);
                    return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el[jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]](component));
                  })(),
                  ...(() => {
                    const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<ui-sref>",
                      [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
                      [jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]: component[jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]],
                      target: null,
                      to: "about",
                      active: "active",
                      [jinge__WEBPACK_IMPORTED_MODULE_0__["ARG_COMPONENTS"]]: {
                        [jinge__WEBPACK_IMPORTED_MODULE_0__["STR_DEFAULT"]]: function(component) {
                          return [
                          (() => {
                            const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                              "a",
                              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assignObject"])({
                                style: "margin: 20px;"
                              }, component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]]),
                              "About"
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
                            return el;
                          })()
                          ];
                        }
                      }
                    });
                    const fn_0 = () => {
                      attrs.target = vm_0.newTab ? '_blank' : '_self';
                    };
                    fn_0();
                    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["newTab"], fn_0, component);
                    const el = new jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UISref"](attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__["NON_ROOT_COMPONENT_NODES"]].push(el);
                    return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el[jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]](component));
                  })(),
                  ...(() => {
                    const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<ui-sref>",
                      [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
                      [jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]: component[jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]],
                      to: "redirect",
                      active: "active",
                      text: "Redirect"
                    });
                    const el = new jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UISref"](attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__["NON_ROOT_COMPONENT_NODES"]].push(el);
                    return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el[jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]](component));
                  })(),
                  ...(() => {
                    const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<ui-sref>",
                      [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
                      [jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]: component[jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]],
                      target: null,
                      to: "people",
                      active: "active",
                      [jinge__WEBPACK_IMPORTED_MODULE_0__["ARG_COMPONENTS"]]: {
                        [jinge__WEBPACK_IMPORTED_MODULE_0__["STR_DEFAULT"]]: function(component) {
                          return [
                          (() => {
                            const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                              "button",
                              component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
                              "People"
                            );
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
                            return el;
                          })()
                          ];
                        }
                      }
                    });
                    const fn_0 = () => {
                      attrs.target = vm_0.newTab ? '_blank' : '_self';
                    };
                    fn_0();
                    vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["newTab"], fn_0, component);
                    const el = new jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UISref"](attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__["NON_ROOT_COMPONENT_NODES"]].push(el);
                    return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el[jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]](component));
                  })(),
                  ...(() => {
                    const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<ui-sref>",
                      [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
                      [jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]: component[jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]],
                      params: null,
                      style: "margin-left: 8px;",
                      text: "Person-2",
                      to: "people.person",
                      active: "active"
                    });
                    const fn_0 = () => {
                      attrs.params = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapViewModel"])({ personId: '002' });
                    };
                    fn_0();
                    const el = new jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UISref"](attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__["NON_ROOT_COMPONENT_NODES"]].push(el);
                    return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el[jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]](component));
                  })(),
                  Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                    "a",
                    {
                      style: "margin-left: 20px;",
                      href: "#/about"
                    },
                    "bug-test"
                  )
                )
              ),
              Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
                "div",
                Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
                  "h3",
                  "Content Area"
                ),
                Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                  "div",
                  {
                    class: "content"
                  },
                  ...(() => {
                    const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
                      [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<ui-view>",
                      [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
                      [jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]: component[jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]],
                    });
                    const el = new jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UIView"](attrs);
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__["NON_ROOT_COMPONENT_NODES"]].push(el);
                    return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el[jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]](component));
                  })()
                )
              )
            );
            component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
            return el;
          })()
          ];
        }
      }
    });
    const fn_0 = () => {
      attrs._states = vm_0._states;
    };
    fn_0();
    const fn_1 = () => {
      attrs._plugins = vm_0._plugins;
    };
    fn_1();
    const el = new jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UIHashRouter"](attrs);
    Object(jinge__WEBPACK_IMPORTED_MODULE_0__["addParentStyleId"])(el, component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]]);
    component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
    return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el[jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]](component));
  })()
  ];
});

/***/ }),

/***/ "./components/about.js":
/*!*****************************!*\
  !*** ./components/about.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/index.js");



class About extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static get template() {
    return function(component) {
      const vm_0 = component;
      return [
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
          "h4",
          component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
          "About"
        );
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
        return el;
      })(),
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
          "p",
          component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
          "jinge is a Messenger, Proxy and Compiler based MVVM framework"
        );
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
        return el;
      })()
      ];
    };
  }
}

/***/ }),

/***/ "./components/hello.js":
/*!*****************************!*\
  !*** ./components/hello.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hello; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/index.js");
/* harmony import */ var jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-ui-router */ "../../jinge-ui-router/src/index.js");




class Hello extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static get template() {
    return function(component) {
      const vm_0 = component;
      return [
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
          "h4",
          component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
          "Hello"
        );
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
        return el;
      })(),
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
          "p",
          component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
          "hello, jinge!"
        );
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
        return el;
      })()
      ];
    };
  }
  [jinge__WEBPACK_IMPORTED_MODULE_0__["AFTER_RENDER"]]() {
    const router = this[jinge__WEBPACK_IMPORTED_MODULE_0__["GET_CONTEXT"]](jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UIROUTER_CONTEXT"]);
    const transition = router.transitionService;

    this._des = transition.onExit({
      from: 'hello.**'
    }, trans => {
      /*
       * 如果直接使用浏览器前进后退，或者直接在浏览器地址栏手动改变 url，
       * 会导致虽然跳转能被阻止，但仍然在历史中产生了记录，从而无法再后退。
       * 
       * TODO: track bug of ui-router v1.0
       * https://stackoverflow.com/questions/44896070/ui-router-browser-back-button-changes-url-even-abort-transition-is-called
       * https://github.com/angular-ui/ui-router/issues/3416
       */
      return confirm('确认要退出？');
    });
  }
  [jinge__WEBPACK_IMPORTED_MODULE_0__["BEFORE_DESTROY"]]() {
    this._des();
    console.log('Hello component will be destroy');
  }
}

/***/ }),

/***/ "./components/people.js":
/*!******************************!*\
  !*** ./components/people.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return People; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/index.js");
/* harmony import */ var jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-ui-router */ "../../jinge-ui-router/src/index.js");






class People extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(attrs) {
    const vm_109480b9ce = super(attrs);
    const fn_109480b9ce_1 = () => {
      vm_109480b9ce.people = attrs.people;
    };
    fn_109480b9ce_1();
    attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('people', fn_109480b9ce_1);
    return vm_109480b9ce;
  }
  static get template() {
    return function(component) {
      const vm_0 = component;
      return [
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
          "div",
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assignObject"])({
            style: "display:flex;flex-direction:row;"
          }, component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]]),
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
            "div",
            {
              style: "margin-right: 20px;"
            },
            Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
              "h4",
              "Some People:"
            ),
            Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
              "ul",
              ...(() => {
                const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
                  [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<for>",
                  [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
                  [jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]: component[jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]],
                  loop: null,
                  key: "each.id",
                  [jinge__WEBPACK_IMPORTED_MODULE_0__["ARG_COMPONENTS"]]: {
                    [jinge__WEBPACK_IMPORTED_MODULE_0__["STR_DEFAULT"]]: function(component) {
                      const vm_1 = component;
                      return [
                      (() => {
                        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                          "li",
                          component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
                          ...(() => {
                            const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
                              [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<ui-sref>",
                              [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
                              [jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]: component[jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]],
                              text: null,
                              params: null,
                              to: "people.person",
                              active: "active"
                            });
                            const fn_0 = () => {
                              attrs.text = function () {
                                let _0;
                                return (_0 = vm_1.each) === null || _0 === void 0 ? void 0 : _0.name;
                            }();
                            };
                            fn_0();
                            vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["each","name"], fn_0, component);
                            const fn_1 = () => {
                              attrs.params = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapViewModel"])({
                                personId: function () {
                                    let _0;
                                    return (_0 = vm_1.each) === null || _0 === void 0 ? void 0 : _0.id;
                                }()
                            });
                            };
                            fn_1();
                            vm_1[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["each","id"], fn_1, component);
                            const el = new jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UISref"](attrs);
                            component[jinge__WEBPACK_IMPORTED_MODULE_0__["NON_ROOT_COMPONENT_NODES"]].push(el);
                            return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el[jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]](component));
                          })()
                        );
                        component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
                        return el;
                      })()
                      ];
                    }
                  }
                });
                const fn_0 = () => {
                  attrs.loop = vm_0.people;
                };
                fn_0();
                vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["people"], fn_0, component);
                const el = new jinge__WEBPACK_IMPORTED_MODULE_0__["ForComponent"](attrs);
                component[jinge__WEBPACK_IMPORTED_MODULE_0__["NON_ROOT_COMPONENT_NODES"]].push(el);
                return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el[jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]](component));
              })()
            )
          ),
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
            "div",
            ...(() => {
              const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
                [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<ui-view>",
                [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
                [jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]: component[jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]],
              });
              const el = new jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UIView"](attrs);
              component[jinge__WEBPACK_IMPORTED_MODULE_0__["NON_ROOT_COMPONENT_NODES"]].push(el);
              return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el[jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]](component));
            })()
          )
        );
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
        return el;
      })()
      ];
    }
  }
}

/***/ }),

/***/ "./components/person.js":
/*!******************************!*\
  !*** ./components/person.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Person; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/index.js");
/* harmony import */ var jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jinge-ui-router */ "../../jinge-ui-router/src/index.js");





class Person extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static get template() {
    return function(component) {
      const vm_0 = component;
      return [
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
          "div",
          component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
            "h4",
            "A person!"
          ),
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
            "div",
            "Name: ",
            (() => {
              const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
              const fn_0 = () => {
                Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, function () {
                  let _0;
                  return (_0 = vm_0.person) === null || _0 === void 0 ? void 0 : _0.name;
              }());
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["person","name"], fn_0, component);
              return el;
            })()
          ),
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
            "div",
            "Id: ",
            (() => {
              const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
              const fn_0 = () => {
                Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, function () {
                  let _0;
                  return (_0 = vm_0.person) === null || _0 === void 0 ? void 0 : _0.id;
              }());
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["person","id"], fn_0, component);
              return el;
            })()
          ),
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
            "div",
            "Company: ",
            (() => {
              const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
              const fn_0 = () => {
                Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, function () {
                  let _0;
                  return (_0 = vm_0.person) === null || _0 === void 0 ? void 0 : _0.company;
              }());
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["person","company"], fn_0, component);
              return el;
            })()
          ),
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
            "div",
            "Email: ",
            (() => {
              const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
              const fn_0 = () => {
                Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, function () {
                  let _0;
                  return (_0 = vm_0.person) === null || _0 === void 0 ? void 0 : _0.email;
              }());
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["person","email"], fn_0, component);
              return el;
            })()
          ),
          Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElementWithoutAttrs"])(
            "div",
            "Address: ",
            (() => {
              const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createTextNode"])();
              const fn_0 = () => {
                Object(jinge__WEBPACK_IMPORTED_MODULE_0__["setText"])(el, function () {
                  let _0;
                  return (_0 = vm_0.person) === null || _0 === void 0 ? void 0 : _0.address;
              }());
              };
              fn_0();
              vm_0[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]](["person","address"], fn_0, component);
              return el;
            })()
          ),
          ...(() => {
            const attrs = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["wrapAttrs"])({
              [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_DEBUG_NAME"]]: "attrs_of_<ui-sref>",
              [jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]]: null,
              [jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]]: component[jinge__WEBPACK_IMPORTED_MODULE_0__["CONTEXT"]],
              to: "people",
              [jinge__WEBPACK_IMPORTED_MODULE_0__["ARG_COMPONENTS"]]: {
                [jinge__WEBPACK_IMPORTED_MODULE_0__["STR_DEFAULT"]]: function(component) {
                  return [
                  (() => {
                    const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
                      "button",
                      component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
                      "Close"
                    );
                    component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
                    return el;
                  })()
                  ];
                }
              }
            });
            const el = new jinge_ui_router__WEBPACK_IMPORTED_MODULE_1__["UISref"](attrs);
            component[jinge__WEBPACK_IMPORTED_MODULE_0__["NON_ROOT_COMPONENT_NODES"]].push(el);
            return Object(jinge__WEBPACK_IMPORTED_MODULE_0__["assertRenderResults"])(el[jinge__WEBPACK_IMPORTED_MODULE_0__["RENDER"]](component));
          })()
        );
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
        return el;
      })()
      ];
    }
  }
  constructor(attrs) {
    console.log('attrs passed from ui-router resolve:', attrs.someConst, attrs.someFn, attrs.someFnPromise);
    const vm_109480b9ce = super(attrs);
    const fn_109480b9ce_2 = () => {
      vm_109480b9ce.person = attrs.person;
    };
    fn_109480b9ce_2();
    attrs[jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ATTRS"]][jinge__WEBPACK_IMPORTED_MODULE_0__["VM_ON"]]('person', fn_109480b9ce_2);
    return vm_109480b9ce;
  }
  [jinge__WEBPACK_IMPORTED_MODULE_0__["BEFORE_DESTROY"]]() {
    console.log(`person: ${this.person.id} will be destroy.`);
  }
}

/***/ }),

/***/ "./components/redirect.js":
/*!********************************!*\
  !*** ./components/redirect.js ***!
  \********************************/
/*! exports provided: RedirectDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectDetail", function() { return RedirectDetail; });
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/index.js");



class RedirectDetail extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static get template() {
    return function(component) {
      const vm_0 = component;
      return [
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
          "h4",
          component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
          "Redirect"
        );
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
        return el;
      })(),
      (() => {
        const el = Object(jinge__WEBPACK_IMPORTED_MODULE_0__["createElement"])(
          "p",
          component[jinge__WEBPACK_IMPORTED_MODULE_0__["CSTYLE_PID"]],
          "here is child detail redirect from parent."
        );
        component[jinge__WEBPACK_IMPORTED_MODULE_0__["ROOT_NODES"]].push(el);
        return el;
      })()
      ];
    };
  }
}

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jinge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jinge */ "../../jinge-framework/index.js");
/* harmony import */ var _uirouter_visualizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uirouter/visualizer */ "./node_modules/@uirouter/visualizer/_bundles/ui-router-visualizer.js");
/* harmony import */ var _uirouter_visualizer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_uirouter_visualizer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.html */ "./app.html");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about */ "./components/about.js");
/* harmony import */ var _components_hello__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/hello */ "./components/hello.js");
/* harmony import */ var _components_people__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/people */ "./components/people.js");
/* harmony import */ var _components_person__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/person */ "./components/person.js");
/* harmony import */ var _components_redirect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/redirect */ "./components/redirect.js");
/* harmony import */ var _service_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/api */ "./service/api.js");












const uiStates = [{
  name: 'hello',
  url: '/hello',
  component: _components_hello__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  name: 'about',
  url: '/about',
  component: _components_about__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  name: 'redirect',
  url: '/redirect',
  redirectTo: 'redirect.detail'
}, {
  name: 'redirect.detail',
  url: '/detail',
  component: _components_redirect__WEBPACK_IMPORTED_MODULE_7__["RedirectDetail"]
}, {
  name: 'people',
  url: '/people',
  component: _components_people__WEBPACK_IMPORTED_MODULE_5__["default"],
  resolve: {
    people: () => Object(_service_api__WEBPACK_IMPORTED_MODULE_8__["getAllPersons"])().then(result => Object(jinge__WEBPACK_IMPORTED_MODULE_0__["VM"])(result))
  }
}, {
  name: 'people.person',
  url: '/:personId',
  component: _components_person__WEBPACK_IMPORTED_MODULE_6__["default"],
  /*
   * resolve can be object or array.
   * if it's array, same as usage of @uirouter/react.
   *   see: https://ui-router.github.io/react/tutorial/hellosolarsystem
   * if it's object, it will be convert to array.
   */
  resolve: {
    /*
     * resolve value can be constant/function
     * constant will be convert to function: '() => constant'.
     */
    someConst: 'hello1',
    someFn: () => 'hello2',
    someFnPromise: () => new Promise(res => setTimeout(() => res('hello3'), 1000)),
    /* 
     * if resolve value is array, last item must be function, 
     * non-last items are deps. see https://ui-router.github.io/react/tutorial/hellosolarsystem
     */
    person: ['$transition$', 'people', (trans, people) => {
      console.log('inherited resove people:', people);
      const id = trans.params().personId;
      return Object(_service_api__WEBPACK_IMPORTED_MODULE_8__["getPersonById"])(id).then(result => Object(jinge__WEBPACK_IMPORTED_MODULE_0__["VM"])(result));
    }]
  }
}];

class App extends jinge__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static get template() {
    return _app_html__WEBPACK_IMPORTED_MODULE_2__["default"];
  }
  constructor(args) {
    const vm_109480b9ce = super(args);
    vm_109480b9ce._states = uiStates;
    vm_109480b9ce._plugins = [_uirouter_visualizer__WEBPACK_IMPORTED_MODULE_1__["Visualizer"]];
    vm_109480b9ce.newTab = false;
    return vm_109480b9ce;
  }
}

Object(jinge__WEBPACK_IMPORTED_MODULE_0__["bootstrap"])(App, document.getElementById('root-app'));


/***/ }),

/***/ "./node_modules/@uirouter/visualizer/_bundles/ui-router-visualizer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@uirouter/visualizer/_bundles/ui-router-visualizer.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//# sourceMappingURL=ui-router-visualizer.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./service/api.js":
/*!************************!*\
  !*** ./service/api.js ***!
  \************************/
/*! exports provided: getAllPersons, getPersonById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPersons", function() { return getAllPersons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersonById", function() { return getPersonById; });
function getAllPersons() {
  return new Promise(res => {
    setTimeout(() => {
      res([{id: '001', name: 'xiaoge_001'}, {id: '002', name: 'xiaoge_002'}]);
    }, 100);
  });
}
function getPersonById(id) {
  // simulate api fetch
  return new Promise(res => {
    setTimeout(() => {
      res({
        id,
        name: `xiaoge_${id}`,
        company: 'hansight',
        email: 'abeyuhang@gmail.com',
        address: 'Chengdu, Sichuan, China'
      });
    }, 100);
  });
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map