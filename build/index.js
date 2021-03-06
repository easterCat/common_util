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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_kiana_js_kiana_arrays_flatten__ = __webpack_require__(1);


console.log(__WEBPACK_IMPORTED_MODULE_0_kiana_js_kiana_arrays_flatten__["a" /* flatten */]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = flatten;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects__ = __webpack_require__(2);


/**
 * 数组扁平化
 * @param  {Array} input   要处理的数组
 * @param  {boolean} shallow true只扁平一层,false为全部展开
 * @param  {boolean} strict  是否严格处理元素，下面有解释
 * @param  {Number} startIndex  开始查找的起始位置
 * 源码地址：https://github.com/jashkenas/underscore/blob/master/underscore.js#L528
 */
function flatten(input, shallow, strict, startIndex) {
    // 递归使用的时候会用到output
    var output = [],
        idx = 0;

    for (var i = startIndex || 0, length = input.length; i < length; i++) {
        var value = input[i];
        // 数组 或者 arguments，就进行处理
        // if (isArrayLike(value) && (isArray(value) || _.isArguments(value))) {
        if (Object(__WEBPACK_IMPORTED_MODULE_0__objects__["b" /* isArrayLike */])(value) && Object(__WEBPACK_IMPORTED_MODULE_0__objects__["a" /* isArray */])(value)) {
            // 如果是全部扁平就递归，传入已经处理的 output，递归中接着处理 output
            if (!shallow) {
                value = flatten(value, shallow, strict);
            }
            var j = 0,
                len = value.length;
            output.length += len;
            while (j < len) output[idx++] = value[j++];
        }
        // 不是数组，根据 strict 的值判断是跳过不处理还是放入 output
        else if (!strict) {
            output[idx++] = value;
        }
    }
    return output;
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export keys */
/* unused harmony export values */
/* unused harmony export extend */
/* unused harmony export isElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isArray; });
/* unused harmony export isObject */
/* unused harmony export isPlainObject */
/* unused harmony export isWindow */
/* unused harmony export isFunction */
/* unused harmony export isDate */
/* unused harmony export isError */
/* unused harmony export isString */
/* unused harmony export isArguments */
/* unused harmony export isNumber */
/* unused harmony export isRegExp */
/* unused harmony export isEmpty */
/* unused harmony export pick */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isArrayLike; });
/**
 * Created by easterCat on 2018/1/22.
 */

var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;



function isArrayLike(collection) {
    var length = collection.length;
    return (
        typeof length === "number" && length >= 0 && length <= MAX_ARRAY_INDEX
    );
}

/**
 * 判断是否是数组对象
 * @param obj
 * @returns {boolean}
 */
function isArray(obj) {
    if (Array.isArray) return Array.isArray(obj);
    else return type(obj) === "array";
}

/**
 * 返回一个对象可枚举属性组成的数组
 * @param obj
 * @returns {Array}
 */
function keys(obj) {
    if (!isObject(obj)) {
        return [];
    }
    if (Object.keys) {
        return Object.keys(obj);
    }
    var keys = [];

    for (var type in obj) {
        if (obj.hasOwnProperty(type)) {
            keys.push(type);
        }
    }

    return keys;
}

function values(obj) {
    if (isObject(obj)) {
        if (Object.values) {
            return Object.values(obj);
        }

        var _keys = keys(obj);
        var length = _keys.length;
        var result = [];

        for (var i = 0; i < length; i++) {
            result[i] = obj[_keys[i]];
        }

        return result;
    } else {
        return {};
    }
}

/**
 * 对象合并，将源对象复制到目标对象
 * @returns {*|{}}
 */
function extend() {
    var deep = false;
    var name, options, src, copy, clone, copyIsArray;
    var length = arguments.length;
    // 记录要复制的对象的下标,默认从1开始
    var i = 1;
    // 第一个参数不传布尔值的情况下，target默认是第一个参数
    var target = arguments[0] || {};
    // 如果target不是对象，我们是无法进行复制的，所以设为{}
    if (typeof target === "boolean") {
        deep = target;
        target = arguments[i] || {};
        //因为第一个下标是boolean，所有复制的对象下标从2开始
        i++;
    }
    // 如果target不是对象，我们是无法进行复制的，所以设为{}
    if (typeof target !== "object" && !isFunction(target)) {
        target = {};
    }

    for (; i < length; i++) {
        options = arguments[i];
        if (options !== null) {
            for (name in options) {
                if (options.hasOwnProperty(name)) {
                    src = target[name]; // 要复制的对象的属性值
                    copy = options[name]; // 要复制的对象的属性值

                    // 解决循环引用
                    if (target === copy) {
                        continue;
                    }

                    // 要递归的对象必须是 plainObject 或者数组
                    if (
                        deep &&
                        copy &&
                        (isPlainObject(copy) ||
                            (copyIsArray = Array.isArray(copy)))
                    ) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && Array.isArray(src) ? src : [];
                        } else {
                            clone = src && isPlainObject(src) ? src : {};
                        }
                        target[name] = extend(deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
    }
    return target;
}

function pick() {}

/**
 * 判断是否为 DOM 元素
 * @param obj
 * @returns {boolean}
 */
function isElement(obj) {
    // 确保 obj 不是 null, undefined 等假值
    // 并且 obj.nodeType === 1
    return !!(obj && obj.nodeType === 1);
}

function isPlainObject(obj) {
    var proto,
        Ctor,
        newobj = {};
    // 排除掉明显不是obj的以及一些宿主对象如Window
    if (!obj || Object.prototype.toString.call(obj) !== "[object Object]") {
        return false;
    }
    /**
     * getPrototypeOf es5 方法，获取 obj 的原型
     * 以 new Object 创建的对象为例的话
     * obj.__proto__ === Object.prototype
     */
    proto = Object.getPrototypeOf(obj);
    // 没有原型的对象是纯粹的，Object.create(null) 就在这里返回 true
    if (!proto) return true;
    /**
     * 以下判断通过 new Object 方式创建的对象
     * 判断 proto 是否有 constructor 属性，如果有就让 Ctor 的值为 proto.constructor
     * 如果是 Object 函数创建的对象，Ctor 在这里就等于 Object 构造函数
     */
    Ctor =
        newobj.hasOwnProperty.call(proto, "constructor") && proto.constructor;
    // 在这里判断 Ctor 构造函数是不是 Object 构造函数，用于区分自定义构造函数和 Object 构造函数
    return (
        typeof Ctor === "function" &&
        newobj.hasOwnProperty.toString.call(Ctor) ===
            newobj.hasOwnProperty.toString.call(Object)
    );
}

/**
 * 判断是否为对象,这里的对象包括 function 和 object
 * @param obj
 * @returns {boolean}
 */
function isObject(obj) {
    return _type(obj) === "object";
}

function isEmpty(obj) {
    return !!(obj && obj.nodeType === 1);
}

function isFunction(obj) {
    return _type(obj) === "function";
}
function isDate(obj) {
    return _type(obj) === "date";
}
function isError(obj) {
    return _type(obj) === "error";
}
function isString(obj) {
    return _type(obj) === "string";
}
function isArguments(obj) {
    return _type(obj) === "arguments";
}
function isNumber(obj) {
    return _type(obj) === "number";
}
function isRegExp(obj) {
    return _type(obj) === "regexp";
}

/**
 * Window 对象作为客户端 JavaScript 的全局对象，它有一个 window 属性指向自身
 * @param obj
 */
function isWindow(obj) {
    //如果ibj有一个window属性指向自身，说明是window对象
    return obj !== null && obj === obj.window;
}

var class2type = {};

"Boolean Number String Function Array Date RegExp Object Error Null Undefined"
    .split(" ")
    .forEach(function(item, index) {
        class2type["[object " + item + "]"] = item.toLowerCase();
    });

function _type(obj) {
    if (obj === null) {
        return obj + "";
    }
    return typeof obj === "object" || typeof obj === "function"
        ? class2type[Object.prototype.toString.call(obj)] || "object"
        : typeof obj;
}


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map