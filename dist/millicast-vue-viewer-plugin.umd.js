(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["millicast-vue-viewer-plugin"] = factory(require("vue"));
	else
		root["millicast-vue-viewer-plugin"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "01b4":
/***/ (function(module, exports) {

var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    if (this.head) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var aCallable = __webpack_require__("59ed");
var NATIVE_BIND = __webpack_require__("40d5");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "04d1":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ "04f8":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-object-getownpropertynames -- safe */
var classof = __webpack_require__("c6b6");
var toIndexedObject = __webpack_require__("fc6a");
var $getOwnPropertyNames = __webpack_require__("241c").f;
var arraySlice = __webpack_require__("4dae");

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var call = __webpack_require__("c65b");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var hasOwn = __webpack_require__("1a2d");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "07ac":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var $values = __webpack_require__("6f53").values;

// `Object.values` method
// https://tc39.es/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ "07fa":
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__("50c4");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "083a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tryToString = __webpack_require__("0d51");

var $TypeError = TypeError;

module.exports = function (O, P) {
  if (!delete O[P]) throw $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};


/***/ }),

/***/ "0b42":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("e8b5");
var isConstructor = __webpack_require__("68ee");
var isObject = __webpack_require__("861d");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),

/***/ "0b43":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("04f8");

/* eslint-disable es-x/no-symbol -- safe */
module.exports = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;


/***/ }),

/***/ "0c47":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setToStringTag = __webpack_require__("d44e");

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "0cb2":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var toObject = __webpack_require__("7b0b");

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "0ccb":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var uncurryThis = __webpack_require__("e330");
var toLength = __webpack_require__("50c4");
var toString = __webpack_require__("577e");
var $repeat = __webpack_require__("1148");
var requireObjectCoercible = __webpack_require__("1d80");

var repeat = uncurryThis($repeat);
var stringSlice = uncurryThis(''.slice);
var ceil = Math.ceil;

// `String.prototype.{ padStart, padEnd }` methods implementation
var createMethod = function (IS_END) {
  return function ($this, maxLength, fillString) {
    var S = toString(requireObjectCoercible($this));
    var intMaxLength = toLength(maxLength);
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : toString(fillString);
    var fillLen, stringFiller;
    if (intMaxLength <= stringLength || fillStr == '') return S;
    fillLen = intMaxLength - stringLength;
    stringFiller = repeat(fillStr, ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringSlice(stringFiller, 0, fillLen);
    return IS_END ? S + stringFiller : stringFiller + S;
  };
};

module.exports = {
  // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart
  start: createMethod(false),
  // `String.prototype.padEnd` method
  // https://tc39.es/ecma262/#sec-string.prototype.padend
  end: createMethod(true)
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d26":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String($Error(arg).stack); })('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),

/***/ "0d51":
/***/ (function(module, exports) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "107c":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "1148":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__("5926");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");

var $RangeError = RangeError;

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = '';
  var n = toIntegerOrInfinity(count);
  if (n < 0 || n == Infinity) throw $RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "12a8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var FORCED = __webpack_require__("eb1d");
var aCallable = __webpack_require__("59ed");
var toObject = __webpack_require__("7b0b");
var definePropertyModule = __webpack_require__("9bf2");

// `Object.prototype.__defineGetter__` method
// https://tc39.es/ecma262/#sec-object.prototype.__defineGetter__
if (DESCRIPTORS) {
  $({ target: 'Object', proto: true, forced: FORCED }, {
    __defineGetter__: function __defineGetter__(P, getter) {
      definePropertyModule.f(toObject(this), P, { get: aCallable(getter), enumerable: true, configurable: true });
    }
  });
}


/***/ }),

/***/ "131a":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var setPrototypeOf = __webpack_require__("d2bb");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ "13d2":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var hasOwn = __webpack_require__("1a2d");
var DESCRIPTORS = __webpack_require__("83ab");
var CONFIGURABLE_FUNCTION_NAME = __webpack_require__("5e77").CONFIGURABLE;
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("c65b");
var anObject = __webpack_require__("825a");
var isCallable = __webpack_require__("1626");
var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw $TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ "14d9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var setArrayLength = __webpack_require__("3a34");
var doesNotExceedSafeInteger = __webpack_require__("3511");
var fails = __webpack_require__("d039");

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 and Safari <= 15.4, FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var SILENT_ON_NON_WRITABLE_LENGTH = !function () {
  try {
    // eslint-disable-next-line es-x/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
}();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: INCORRECT_TO_LENGTH || SILENT_ON_NON_WRITABLE_LENGTH }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ }),

/***/ "14e5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var call = __webpack_require__("c65b");
var aCallable = __webpack_require__("59ed");
var newPromiseCapabilityModule = __webpack_require__("f069");
var perform = __webpack_require__("e667");
var iterate = __webpack_require__("2266");
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__("5eed");

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var DOMTokenListPrototype = __webpack_require__("785a");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "1626":
/***/ (function(module, exports, __webpack_require__) {

var $documentAll = __webpack_require__("8ea1");

var documentAll = $documentAll.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "170a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "17a0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_style_index_0_id_1f7c2003_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("170a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_style_index_0_id_1f7c2003_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_App_vue_vue_type_style_index_0_id_1f7c2003_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es-x/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "17ec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_BaseModal_vue_vue_type_style_index_0_id_6bcf2fcf_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5813");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_BaseModal_vue_vue_type_style_index_0_id_6bcf2fcf_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_BaseModal_vue_vue_type_style_index_0_id_6bcf2fcf_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "19aa":
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__("3a9b");

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw $TypeError('Incorrect invocation');
};


/***/ }),

/***/ "1a2d":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var toObject = __webpack_require__("7b0b");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es-x/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1cdc":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "1d80":
/***/ (function(module, exports, __webpack_require__) {

var isNullOrUndefined = __webpack_require__("7234");

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var call = __webpack_require__("c65b");
var anObject = __webpack_require__("825a");
var tryToString = __webpack_require__("0d51");
var isArrayIteratorMethod = __webpack_require__("e95a");
var lengthOfArrayLike = __webpack_require__("07fa");
var isPrototypeOf = __webpack_require__("3a9b");
var getIterator = __webpack_require__("9a1f");
var getIteratorMethod = __webpack_require__("35a1");
var iteratorClose = __webpack_require__("2a62");

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23dc":
/***/ (function(module, exports, __webpack_require__) {

var setToStringTag = __webpack_require__("d44e");

// Math[@@toStringTag] property
// https://tc39.es/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var defineBuiltIn = __webpack_require__("cb2d");
var defineGlobalProperty = __webpack_require__("6374");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var uncurryThis = __webpack_require__("e330");
var notARegExp = __webpack_require__("5a34");
var requireObjectCoercible = __webpack_require__("1d80");
var toString = __webpack_require__("577e");
var correctIsRegExpLogic = __webpack_require__("ab13");

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "26e9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var uncurryThis = __webpack_require__("e330");
var isArray = __webpack_require__("e8b5");

var nativeReverse = uncurryThis([].reverse);
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray(this)) this.length = this.length;
    return nativeReverse(this);
  }
});


/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("c65b");
var anObject = __webpack_require__("825a");
var getMethod = __webpack_require__("dc4a");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "2ba4":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("40d5");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es-x/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "2cf4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var apply = __webpack_require__("2ba4");
var bind = __webpack_require__("0366");
var isCallable = __webpack_require__("1626");
var hasOwn = __webpack_require__("1a2d");
var fails = __webpack_require__("d039");
var html = __webpack_require__("1be4");
var arraySlice = __webpack_require__("f36a");
var createElement = __webpack_require__("cc12");
var validateArgumentsLength = __webpack_require__("d6d6");
var IS_IOS = __webpack_require__("1cdc");
var IS_NODE = __webpack_require__("605d");

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "3410":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toObject = __webpack_require__("7b0b");
var nativeGetPrototypeOf = __webpack_require__("e163");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "3511":
/***/ (function(module, exports) {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "3529":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var call = __webpack_require__("c65b");
var aCallable = __webpack_require__("59ed");
var newPromiseCapabilityModule = __webpack_require__("f069");
var perform = __webpack_require__("e667");
var iterate = __webpack_require__("2266");
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__("5eed");

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var getMethod = __webpack_require__("dc4a");
var isNullOrUndefined = __webpack_require__("7234");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("aed9");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var toIndexedObject = __webpack_require__("fc6a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "3a34":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var isArray = __webpack_require__("e8b5");

var $TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es-x/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ "3a9b":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),

/***/ "3bca":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3c65":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var setArrayLength = __webpack_require__("3a34");
var deletePropertyOrThrow = __webpack_require__("083a");
var doesNotExceedSafeInteger = __webpack_require__("3511");

// IE8-
var INCORRECT_RESULT = [].unshift(0) !== 1;

// V8 ~ Chrome < 71 and Safari <= 15.4, FF < 23 throws InternalError
var SILENT_ON_NON_WRITABLE_LENGTH = !function () {
  try {
    // eslint-disable-next-line es-x/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).unshift();
  } catch (error) {
    return error instanceof TypeError;
  }
}();

// `Array.prototype.unshift` method
// https://tc39.es/ecma262/#sec-array.prototype.unshift
$({ target: 'Array', proto: true, arity: 1, forced: INCORRECT_RESULT || SILENT_ON_NON_WRITABLE_LENGTH }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  unshift: function unshift(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    if (argCount) {
      doesNotExceedSafeInteger(len + argCount);
      var k = len;
      while (k--) {
        var to = k + argCount;
        if (k in O) O[to] = O[k];
        else deletePropertyOrThrow(O, to);
      }
      for (var j = 0; j < argCount; j++) {
        O[j] = arguments[j];
      }
    } return setArrayLength(O, len + argCount);
  }
});


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var toString = __webpack_require__("577e");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("c6d2");
var createIterResultObject = __webpack_require__("4754");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});


/***/ }),

/***/ "3d21":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerMedia_vue_vue_type_style_index_0_id_6ddbf58a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8486");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerMedia_vue_vue_type_style_index_0_id_6ddbf58a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerMedia_vue_vue_type_style_index_0_id_6ddbf58a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "40d5":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "4146":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4160":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
// eslint-disable-next-line es-x/no-array-prototype-foreach -- safe
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var defineProperty = __webpack_require__("9bf2").f;

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "45fc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $some = __webpack_require__("b727").some;
var arrayMethodIsStrict = __webpack_require__("a640");

var STRICT_METHOD = arrayMethodIsStrict('some');

// `Array.prototype.some` method
// https://tc39.es/ecma262/#sec-array.prototype.some
$({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "466d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__("c65b");
var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var isNullOrUndefined = __webpack_require__("7234");
var toLength = __webpack_require__("50c4");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");
var getMethod = __webpack_require__("dc4a");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "46f6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerContainer_vue_vue_type_style_index_0_id_68be1765_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a95e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerContainer_vue_vue_type_style_index_0_id_68be1765_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerContainer_vue_vue_type_style_index_0_id_68be1765_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4738":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var NativePromiseConstructor = __webpack_require__("d256");
var isCallable = __webpack_require__("1626");
var isForced = __webpack_require__("94ca");
var inspectSource = __webpack_require__("8925");
var wellKnownSymbol = __webpack_require__("b622");
var IS_BROWSER = __webpack_require__("6069");
var IS_DENO = __webpack_require__("6c59");
var IS_PURE = __webpack_require__("c430");
var V8_VERSION = __webpack_require__("2d00");

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT;
});

module.exports = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  SUBCLASSING: SUBCLASSING
};


/***/ }),

/***/ "4754":
/***/ (function(module, exports) {

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
module.exports = function (value, done) {
  return { value: value, done: done };
};


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aConstructor = __webpack_require__("5087");
var isNullOrUndefined = __webpack_require__("7234");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined(S = anObject(C)[SPECIES]) ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ "485a":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("c65b");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4dae":
/***/ (function(module, exports, __webpack_require__) {

var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");
var createProperty = __webpack_require__("8418");

var $Array = Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var call = __webpack_require__("c65b");
var toObject = __webpack_require__("7b0b");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var isArrayIteratorMethod = __webpack_require__("e95a");
var isConstructor = __webpack_require__("68ee");
var lengthOfArrayLike = __webpack_require__("07fa");
var createProperty = __webpack_require__("8418");
var getIterator = __webpack_require__("9a1f");
var getIteratorMethod = __webpack_require__("35a1");

var $Array = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "4e82":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var uncurryThis = __webpack_require__("e330");
var aCallable = __webpack_require__("59ed");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var deletePropertyOrThrow = __webpack_require__("083a");
var toString = __webpack_require__("577e");
var fails = __webpack_require__("d039");
var internalSort = __webpack_require__("addb");
var arrayMethodIsStrict = __webpack_require__("a640");
var FF = __webpack_require__("04d1");
var IE_OR_EDGE = __webpack_require__("d998");
var V8 = __webpack_require__("2d00");
var WEBKIT = __webpack_require__("512c");

var test = [];
var nativeSort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? nativeSort(array) : nativeSort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = lengthOfArrayLike(items);
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});


/***/ }),

/***/ "5087":
/***/ (function(module, exports, __webpack_require__) {

var isConstructor = __webpack_require__("68ee");
var tryToString = __webpack_require__("0d51");

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__("5926");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "512c":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),

/***/ "5134":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export isPerformanceSupported */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return now; });
let supported;
let perf;
function isPerformanceSupported() {
    var _a;
    if (supported !== undefined) {
        return supported;
    }
    if (typeof window !== 'undefined' && window.performance) {
        supported = true;
        perf = window.performance;
    }
    else if (typeof global !== 'undefined' && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
        supported = true;
        perf = global.perf_hooks.performance;
    }
    else {
        supported = false;
    }
    return supported;
}
function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__("2ba4");
var call = __webpack_require__("c65b");
var uncurryThis = __webpack_require__("e330");
var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var fails = __webpack_require__("d039");
var anObject = __webpack_require__("825a");
var isCallable = __webpack_require__("1626");
var isNullOrUndefined = __webpack_require__("7234");
var toIntegerOrInfinity = __webpack_require__("5926");
var toLength = __webpack_require__("50c4");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var getMethod = __webpack_require__("dc4a");
var getSubstitution = __webpack_require__("0cb2");
var regExpExec = __webpack_require__("14c3");
var wellKnownSymbol = __webpack_require__("b622");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "5646":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.25.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.25.2/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var uncurryThis = __webpack_require__("e330");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "577e":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),

/***/ "57b9":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("c65b");
var getBuiltIn = __webpack_require__("d066");
var wellKnownSymbol = __webpack_require__("b622");
var defineBuiltIn = __webpack_require__("cb2d");

module.exports = function () {
  var Symbol = getBuiltIn('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call(valueOf, this);
    }, { arity: 1 });
  }
};


/***/ }),

/***/ "5813":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var requireObjectCoercible = __webpack_require__("1d80");
var toString = __webpack_require__("577e");
var whitespaces = __webpack_require__("5899");

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5926":
/***/ (function(module, exports, __webpack_require__) {

var trunc = __webpack_require__("b42e");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "59ed":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var tryToString = __webpack_require__("0d51");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "5a34":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("44e7");

var $TypeError = TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw $TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "5a47":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var NATIVE_SYMBOL = __webpack_require__("04f8");
var fails = __webpack_require__("d039");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var toObject = __webpack_require__("7b0b");

// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED = !NATIVE_SYMBOL || fails(function () { getOwnPropertySymbolsModule.f(1); });

// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$({ target: 'Object', stat: true, forced: FORCED }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
  }
});


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5e77":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var hasOwn = __webpack_require__("1a2d");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "5e7e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var IS_NODE = __webpack_require__("605d");
var global = __webpack_require__("da84");
var call = __webpack_require__("c65b");
var defineBuiltIn = __webpack_require__("cb2d");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var setSpecies = __webpack_require__("2626");
var aCallable = __webpack_require__("59ed");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var anInstance = __webpack_require__("19aa");
var speciesConstructor = __webpack_require__("4840");
var task = __webpack_require__("2cf4").set;
var microtask = __webpack_require__("b575");
var hostReportErrors = __webpack_require__("44de");
var perform = __webpack_require__("e667");
var Queue = __webpack_require__("01b4");
var InternalStateModule = __webpack_require__("69f3");
var NativePromiseConstructor = __webpack_require__("d256");
var PromiseConstructorDetection = __webpack_require__("4738");
var newPromiseCapabilityModule = __webpack_require__("f069");

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : undefined;
    if (state.state == PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);


/***/ }),

/***/ "5eed":
/***/ (function(module, exports, __webpack_require__) {

var NativePromiseConstructor = __webpack_require__("d256");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__("4738").CONSTRUCTOR;

module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });
});


/***/ }),

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var global = __webpack_require__("da84");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "6069":
/***/ (function(module, exports, __webpack_require__) {

var IS_DENO = __webpack_require__("6c59");
var IS_NODE = __webpack_require__("605d");

module.exports = !IS_DENO && !IS_NODE
  && typeof window == 'object'
  && typeof document == 'object';


/***/ }),

/***/ "60da":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var uncurryThis = __webpack_require__("e330");
var call = __webpack_require__("c65b");
var fails = __webpack_require__("d039");
var objectKeys = __webpack_require__("df75");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");

// eslint-disable-next-line es-x/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat = uncurryThis([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !$assign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es-x/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "6340":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6374":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "63a6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "64e5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var padStart = __webpack_require__("0ccb").start;

var $RangeError = RangeError;
var $isFinite = isFinite;
var abs = Math.abs;
var DatePrototype = Date.prototype;
var nativeDateToISOString = DatePrototype.toISOString;
var thisTimeValue = uncurryThis(DatePrototype.getTime);
var getUTCDate = uncurryThis(DatePrototype.getUTCDate);
var getUTCFullYear = uncurryThis(DatePrototype.getUTCFullYear);
var getUTCHours = uncurryThis(DatePrototype.getUTCHours);
var getUTCMilliseconds = uncurryThis(DatePrototype.getUTCMilliseconds);
var getUTCMinutes = uncurryThis(DatePrototype.getUTCMinutes);
var getUTCMonth = uncurryThis(DatePrototype.getUTCMonth);
var getUTCSeconds = uncurryThis(DatePrototype.getUTCSeconds);

// `Date.prototype.toISOString` method implementation
// https://tc39.es/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit fails here:
module.exports = (fails(function () {
  return nativeDateToISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  nativeDateToISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!$isFinite(thisTimeValue(this))) throw $RangeError('Invalid time value');
  var date = this;
  var year = getUTCFullYear(date);
  var milliseconds = getUTCMilliseconds(date);
  var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
  return sign + padStart(abs(year), sign ? 6 : 4, 0) +
    '-' + padStart(getUTCMonth(date) + 1, 2, 0) +
    '-' + padStart(getUTCDate(date), 2, 0) +
    'T' + padStart(getUTCHours(date), 2, 0) +
    ':' + padStart(getUTCMinutes(date), 2, 0) +
    ':' + padStart(getUTCSeconds(date), 2, 0) +
    '.' + padStart(milliseconds, 3, 0) +
    'Z';
} : nativeDateToISOString;


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var toIntegerOrInfinity = __webpack_require__("5926");
var toString = __webpack_require__("577e");
var requireObjectCoercible = __webpack_require__("1d80");

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__("0b42");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "68ee":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var classof = __webpack_require__("f5df");
var getBuiltIn = __webpack_require__("d066");
var inspectSource = __webpack_require__("8925");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("cdce");
var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var hasOwn = __webpack_require__("1a2d");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6a15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsPip_vue_vue_type_style_index_0_id_63e7514d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b638");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsPip_vue_vue_type_style_index_0_id_63e7514d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsPip_vue_vue_type_style_index_0_id_63e7514d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6b0d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "6c59":
/***/ (function(module, exports) {

/* global Deno -- Deno case */
module.exports = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';


/***/ }),

/***/ "6f53":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var uncurryThis = __webpack_require__("e330");
var objectKeys = __webpack_require__("df75");
var toIndexedObject = __webpack_require__("fc6a");
var $propertyIsEnumerable = __webpack_require__("d1e7").f;

var propertyIsEnumerable = uncurryThis($propertyIsEnumerable);
var push = uncurryThis([].push);

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable(O, key)) {
        push(result, TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "7030":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "710d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7149":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var NativePromiseConstructor = __webpack_require__("d256");
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__("4738").CONSTRUCTOR;
var promiseResolve = __webpack_require__("cdf9");

var PromiseConstructorWrapper = getBuiltIn('Promise');
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
  }
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7234":
/***/ (function(module, exports) {

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ "7402":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsSettings_vue_vue_type_style_index_0_id_1a8f28b5_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4146");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsSettings_vue_vue_type_style_index_0_id_1a8f28b5_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsSettings_vue_vue_type_style_index_0_id_1a8f28b5_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "778f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsSettingsStats_vue_vue_type_style_index_0_id_00e40a59_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dd24");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsSettingsStats_vue_vue_type_style_index_0_id_00e40a59_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsSettingsStats_vue_vue_type_style_index_0_id_00e40a59_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "77ce":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "785a":
/***/ (function(module, exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__("cc12");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__("825a");
var definePropertiesModule = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__("a04b");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "8486":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "861d":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var $documentAll = __webpack_require__("8ea1");

var documentAll = $documentAll.all;

module.exports = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var isCallable = __webpack_require__("1626");
var store = __webpack_require__("c6cd");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8947":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8ea1":
/***/ (function(module, exports) {

var documentAll = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

module.exports = {
  all: documentAll,
  IS_HTMLDDA: IS_HTMLDDA
};


/***/ }),

/***/ "90d2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsSettingsDropdown_vue_vue_type_style_index_0_id_cf737074_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8947");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsSettingsDropdown_vue_vue_type_style_index_0_id_cf737074_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsSettingsDropdown_vue_vue_type_style_index_0_id_cf737074_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "90e3":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__("c65b");
var uncurryThis = __webpack_require__("e330");
var toString = __webpack_require__("577e");
var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");
var shared = __webpack_require__("5692");
var create = __webpack_require__("7c73");
var getInternalState = __webpack_require__("69f3").get;
var UNSUPPORTED_DOT_ALL = __webpack_require__("fce3");
var UNSUPPORTED_NCG = __webpack_require__("107c");

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "944a":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var defineWellKnownSymbol = __webpack_require__("e065");
var setToStringTag = __webpack_require__("d44e");

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag(getBuiltIn('Symbol'), 'Symbol');


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var doesNotExceedSafeInteger = __webpack_require__("3511");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9a1f":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("c65b");
var aCallable = __webpack_require__("59ed");
var anObject = __webpack_require__("825a");
var tryToString = __webpack_require__("0d51");
var getIteratorMethod = __webpack_require__("35a1");

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var iteratorClose = __webpack_require__("2a62");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__("aed9");
var anObject = __webpack_require__("825a");
var toPropertyKey = __webpack_require__("a04b");

var $TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ "a04b":
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__("c04e");
var isSymbol = __webpack_require__("d9b5");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "a15b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var uncurryThis = __webpack_require__("e330");
var IndexedObject = __webpack_require__("44ad");
var toIndexedObject = __webpack_require__("fc6a");
var arrayMethodIsStrict = __webpack_require__("a640");

var nativeJoin = uncurryThis([].join);

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "a434":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var toAbsoluteIndex = __webpack_require__("23cb");
var toIntegerOrInfinity = __webpack_require__("5926");
var lengthOfArrayLike = __webpack_require__("07fa");
var setArrayLength = __webpack_require__("3a34");
var doesNotExceedSafeInteger = __webpack_require__("3511");
var arraySpeciesCreate = __webpack_require__("65f0");
var createProperty = __webpack_require__("8418");
var deletePropertyOrThrow = __webpack_require__("083a");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min = Math.min;

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow(O, k - 1);
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    setArrayLength(O, len - actualDeleteCount + insertCount);
    return A;
  }
});


/***/ }),

/***/ "a4b4":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__("d9f5");
__webpack_require__("b4f8");
__webpack_require__("c513");
__webpack_require__("e9c4");
__webpack_require__("5a47");


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var from = __webpack_require__("4df4");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es-x/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "a95e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "aa1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var anObject = __webpack_require__("825a");
var create = __webpack_require__("7c73");
var normalizeStringArgument = __webpack_require__("e391");

var nativeErrorToString = Error.prototype.toString;

var INCORRECT_TO_STRING = fails(function () {
  if (DESCRIPTORS) {
    // Chrome 32- incorrectly call accessor
    // eslint-disable-next-line es-x/no-object-defineproperty -- safe
    var object = create(Object.defineProperty({}, 'name', { get: function () {
      return this === object;
    } }));
    if (nativeErrorToString.call(object) !== 'true') return true;
  }
  // FF10- does not properly handle non-strings
  return nativeErrorToString.call({ message: 1, name: 2 }) !== '2: 1'
    // IE8 does not properly handle defaults
    || nativeErrorToString.call({}) !== 'Error';
});

module.exports = INCORRECT_TO_STRING ? function toString() {
  var O = anObject(this);
  var name = normalizeStringArgument(O.name, 'Error');
  var message = normalizeStringArgument(O.message);
  return !name ? message : !message ? name : name + ': ' + message;
} : nativeErrorToString;


/***/ }),

/***/ "ab13":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "ab36":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};


/***/ }),

/***/ "ab8b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "abc5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDevtoolsGlobalHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isProxyAvailable; });
function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
    // @ts-ignore
    return (typeof navigator !== 'undefined' && typeof window !== 'undefined')
        ? window
        : typeof global !== 'undefined'
            ? global
            : {};
}
const isProxyAvailable = typeof Proxy === 'function';

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "accc":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toISOString = __webpack_require__("64e5");

// `Date.prototype.toISOString` method
// https://tc39.es/ecma262/#sec-date.prototype.toisostring
// PhantomJS / old WebKit has a broken implementations
$({ target: 'Date', proto: true, forced: Date.prototype.toISOString !== toISOString }, {
  toISOString: toISOString
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "addb":
/***/ (function(module, exports, __webpack_require__) {

var arraySlice = __webpack_require__("4dae");

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice(array, 0, middle), comparefn),
    mergeSort(arraySlice(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

module.exports = mergeSort;


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var create = __webpack_require__("7c73");
var getPrototypeOf = __webpack_require__("e163");
var defineBuiltIn = __webpack_require__("cb2d");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es-x/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "aeb0":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (Target, Source, key) {
  key in Target || defineProperty(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};


/***/ }),

/***/ "aed9":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b3ad":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_BaseButton_vue_vue_type_style_index_0_id_7037ab8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("77ce");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_BaseButton_vue_vue_type_style_index_0_id_7037ab8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_BaseButton_vue_vue_type_style_index_0_id_7037ab8a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b42e":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "b4f8":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var getBuiltIn = __webpack_require__("d066");
var hasOwn = __webpack_require__("1a2d");
var toString = __webpack_require__("577e");
var shared = __webpack_require__("5692");
var NATIVE_SYMBOL_REGISTRY = __webpack_require__("0b43");

var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  'for': function (key) {
    var string = toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  }
});


/***/ }),

/***/ "b575":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var bind = __webpack_require__("0366");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var macrotask = __webpack_require__("2cf4").set;
var IS_IOS = __webpack_require__("1cdc");
var IS_IOS_PEBBLE = __webpack_require__("d4c3");
var IS_WEBOS_WEBKIT = __webpack_require__("a4b4");
var IS_NODE = __webpack_require__("605d");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = bind(macrotask, global);
    notify = function () {
      macrotask(flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var hasOwn = __webpack_require__("1a2d");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("04f8");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b636":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("e065");

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


/***/ }),

/***/ "b638":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var uncurryThis = __webpack_require__("e330");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var lengthOfArrayLike = __webpack_require__("07fa");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "b980":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = !fails(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es-x/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});


/***/ }),

/***/ "bff8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c03e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsUserCount_vue_vue_type_style_index_0_id_48f1b614_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e444");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsUserCount_vue_vue_type_style_index_0_id_48f1b614_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsUserCount_vue_vue_type_style_index_0_id_48f1b614_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__("c65b");
var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var getMethod = __webpack_require__("dc4a");
var ordinaryToPrimitive = __webpack_require__("485a");
var wellKnownSymbol = __webpack_require__("b622");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "c20d":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var uncurryThis = __webpack_require__("e330");
var toString = __webpack_require__("577e");
var trim = __webpack_require__("58a8").trim;
var whitespaces = __webpack_require__("5899");

var $parseInt = global.parseInt;
var Symbol = global.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var hex = /^[+-]?0x/i;
var exec = uncurryThis(hex.exec);
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseInt(Object(ITERATOR)); }));

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(toString(string));
  return $parseInt(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c513":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var hasOwn = __webpack_require__("1a2d");
var isSymbol = __webpack_require__("d9b5");
var tryToString = __webpack_require__("0d51");
var shared = __webpack_require__("5692");
var NATIVE_SYMBOL_REGISTRY = __webpack_require__("0b43");

var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(tryToString(sym) + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});


/***/ }),

/***/ "c65b":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("40d5");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var defineGlobalProperty = __webpack_require__("6374");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c6d2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var call = __webpack_require__("c65b");
var IS_PURE = __webpack_require__("c430");
var FunctionName = __webpack_require__("5e77");
var isCallable = __webpack_require__("1626");
var createIteratorConstructor = __webpack_require__("dcc3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var defineBuiltIn = __webpack_require__("cb2d");
var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ "c740":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $findIndex = __webpack_require__("b727").findIndex;
var addToUnscopables = __webpack_require__("44d2");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "c7df":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsVolume_vue_vue_type_style_index_0_id_0cf82b5a_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5646");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsVolume_vue_vue_type_style_index_0_id_0cf82b5a_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsVolume_vue_vue_type_style_index_0_id_0cf82b5a_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "c8ba":
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

/***/ "c975":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es-x/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__("23e7");
var uncurryThis = __webpack_require__("e330");
var $indexOf = __webpack_require__("4d64").indexOf;
var arrayMethodIsStrict = __webpack_require__("a640");

var nativeIndexOf = uncurryThis([].indexOf);

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf(this, searchElement, fromIndex) || 0
      : $indexOf(this, searchElement, fromIndex);
  }
});


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");
var hasOwn = __webpack_require__("1a2d");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $includes = __webpack_require__("4d64").includes;
var fails = __webpack_require__("d039");
var addToUnscopables = __webpack_require__("44d2");

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cb2d":
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__("1626");
var definePropertyModule = __webpack_require__("9bf2");
var makeBuiltIn = __webpack_require__("13d2");
var defineGlobalProperty = __webpack_require__("6374");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "cb4e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerSideVideoSources_vue_vue_type_style_index_0_id_1895dc47_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("710d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerSideVideoSources_vue_vue_type_style_index_0_id_1895dc47_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerSideVideoSources_vue_vue_type_style_index_0_id_1895dc47_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cc98":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__("4738").CONSTRUCTOR;
var NativePromiseConstructor = __webpack_require__("d256");
var getBuiltIn = __webpack_require__("d066");
var isCallable = __webpack_require__("1626");
var defineBuiltIn = __webpack_require__("cb2d");

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}


/***/ }),

/***/ "cca6":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var assign = __webpack_require__("60da");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es-x/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "cd6d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerStatsTable_vue_vue_type_style_index_0_id_6912e151_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("63a6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerStatsTable_vue_vue_type_style_index_0_id_6912e151_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerStatsTable_vue_vue_type_style_index_0_id_6912e151_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "cd74":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cdce":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ "cdf9":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var newPromiseCapability = __webpack_require__("f069");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isCallable = __webpack_require__("1626");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "d256":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global.Promise;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("e065");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__("e330");
var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var defineBuiltIn = __webpack_require__("cb2d");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d401":
/***/ (function(module, exports, __webpack_require__) {

var defineBuiltIn = __webpack_require__("cb2d");
var errorToString = __webpack_require__("aa1f");

var ErrorPrototype = Error.prototype;

// `Error.prototype.toString` method fix
// https://tc39.es/ecma262/#sec-error.prototype.tostring
if (ErrorPrototype.toString !== errorToString) {
  defineBuiltIn(ErrorPrototype, 'toString', errorToString);
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var hasOwn = __webpack_require__("1a2d");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d4c3":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");
var global = __webpack_require__("da84");

module.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined;


/***/ }),

/***/ "d6d6":
/***/ (function(module, exports) {

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var uncurryThis = __webpack_require__("e330");
var defineBuiltIn = __webpack_require__("cb2d");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "d8d3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsSettingsVideoTrack_vue_vue_type_style_index_0_id_7ef173a6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3bca");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsSettingsVideoTrack_vue_vue_type_style_index_0_id_7ef173a6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsSettingsVideoTrack_vue_vue_type_style_index_0_id_7ef173a6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d998":
/***/ (function(module, exports, __webpack_require__) {

var UA = __webpack_require__("342f");

module.exports = /MSIE|Trident/.test(UA);


/***/ }),

/***/ "d9b5":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var isCallable = __webpack_require__("1626");
var isPrototypeOf = __webpack_require__("3a9b");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "d9e2":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-unused-vars -- required for functions `.length` */
var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var apply = __webpack_require__("2ba4");
var wrapErrorConstructorWithCause = __webpack_require__("e5cb");

var WEB_ASSEMBLY = 'WebAssembly';
var WebAssembly = global[WEB_ASSEMBLY];

var FORCED = Error('e', { cause: 7 }).cause !== 7;

var exportGlobalErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  var O = {};
  O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED);
  $({ global: true, constructor: true, arity: 1, forced: FORCED }, O);
};

var exportWebAssemblyErrorCauseWrapper = function (ERROR_NAME, wrapper) {
  if (WebAssembly && WebAssembly[ERROR_NAME]) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED);
    $({ target: WEB_ASSEMBLY, stat: true, constructor: true, arity: 1, forced: FORCED }, O);
  }
};

// https://github.com/tc39/proposal-error-cause
exportGlobalErrorCauseWrapper('Error', function (init) {
  return function Error(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('EvalError', function (init) {
  return function EvalError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('RangeError', function (init) {
  return function RangeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
  return function ReferenceError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
  return function SyntaxError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('TypeError', function (init) {
  return function TypeError(message) { return apply(init, this, arguments); };
});
exportGlobalErrorCauseWrapper('URIError', function (init) {
  return function URIError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
  return function CompileError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
  return function LinkError(message) { return apply(init, this, arguments); };
});
exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
  return function RuntimeError(message) { return apply(init, this, arguments); };
});


/***/ }),

/***/ "d9f5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var call = __webpack_require__("c65b");
var uncurryThis = __webpack_require__("e330");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("04f8");
var fails = __webpack_require__("d039");
var hasOwn = __webpack_require__("1a2d");
var isPrototypeOf = __webpack_require__("3a9b");
var anObject = __webpack_require__("825a");
var toIndexedObject = __webpack_require__("fc6a");
var toPropertyKey = __webpack_require__("a04b");
var $toString = __webpack_require__("577e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var definePropertiesModule = __webpack_require__("37e8");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var defineBuiltIn = __webpack_require__("cb2d");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("e065");
var defineSymbolToPrimitive = __webpack_require__("57b9");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError = global.TypeError;
var QObject = global.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  defineBuiltIn(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  defineBuiltIn($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "da96":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dc4a":
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__("59ed");
var isNullOrUndefined = __webpack_require__("7234");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ "dcc3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "dd24":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var DOMTokenListPrototype = __webpack_require__("785a");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "e014":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {!function(e,t){ true?t(exports):undefined}(this,(function(e){"use strict";function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){var t={exports:{}};return e(t,t.exports),t.exports}var i,o,s=function(e){return e&&e.Math==Math&&e},a=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof r&&r)||function(){return this}()||Function("return this")(),c=function(e){try{return!!e()}catch(e){return!0}},u=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l=!c((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")})),d=Function.prototype.call,f=l?d.bind(d):function(){return d.apply(d,arguments)},p={}.propertyIsEnumerable,h=Object.getOwnPropertyDescriptor,g=h&&!p.call({1:2},1)?function(e){var t=h(this,e);return!!t&&t.enumerable}:p,m={f:g},v=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},y=Function.prototype,b=y.bind,w=y.call,S=l&&b.bind(w,w),C=l?function(e){return e&&S(e)}:function(e){return e&&function(){return w.apply(e,arguments)}},E=C({}.toString),x=C("".slice),I=function(e){return x(E(e),8,-1)},T=Object,P=C("".split),R=c((function(){return!T("z").propertyIsEnumerable(0)}))?function(e){return"String"==I(e)?P(e,""):T(e)}:T,k=function(e){return null==e},O=TypeError,A=function(e){if(k(e))throw O("Can't call method on "+e);return e},D=function(e){return R(A(e))},L="object"==typeof document&&document.all,j={all:L,IS_HTMLDDA:void 0===L&&void 0!==L},M=j.all,N=j.IS_HTMLDDA?function(e){return"function"==typeof e||e===M}:function(e){return"function"==typeof e},B=j.all,_=j.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:N(e)||e===B}:function(e){return"object"==typeof e?null!==e:N(e)},U=function(e){return N(e)?e:void 0},F=function(e,t){return arguments.length<2?U(a[e]):a[e]&&a[e][t]},V=C({}.isPrototypeOf),z=F("navigator","userAgent")||"",G=a.process,q=a.Deno,W=G&&G.versions||q&&q.version,X=W&&W.v8;X&&(o=(i=X.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&z&&(!(i=z.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=z.match(/Chrome\/(\d+)/))&&(o=+i[1]);var H=o,Y=!!Object.getOwnPropertySymbols&&!c((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&H&&H<41})),J=Y&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,K=Object,Z=J?function(e){return"symbol"==typeof e}:function(e){var t=F("Symbol");return N(t)&&V(t.prototype,K(e))},Q=String,ee=function(e){try{return Q(e)}catch(e){return"Object"}},te=TypeError,re=function(e){if(N(e))return e;throw te(ee(e)+" is not a function")},ne=function(e,t){var r=e[t];return k(r)?void 0:re(r)},ie=TypeError,oe=Object.defineProperty,se=function(e,t){try{oe(a,e,{value:t,configurable:!0,writable:!0})}catch(r){a[e]=t}return t},ae="__core-js_shared__",ce=a[ae]||se(ae,{}),ue=n((function(e){(e.exports=function(e,t){return ce[e]||(ce[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.25.2",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.2/LICENSE",source:"https://github.com/zloirock/core-js"})})),le=Object,de=function(e){return le(A(e))},fe=C({}.hasOwnProperty),pe=Object.hasOwn||function(e,t){return fe(de(e),t)},he=0,ge=Math.random(),me=C(1..toString),ve=function(e){return"Symbol("+(void 0===e?"":e)+")_"+me(++he+ge,36)},ye=ue("wks"),be=a.Symbol,we=be&&be.for,Se=J?be:be&&be.withoutSetter||ve,Ce=function(e){if(!pe(ye,e)||!Y&&"string"!=typeof ye[e]){var t="Symbol."+e;Y&&pe(be,e)?ye[e]=be[e]:ye[e]=J&&we?we(t):Se(t)}return ye[e]},Ee=TypeError,xe=Ce("toPrimitive"),Ie=function(e,t){if(!_(e)||Z(e))return e;var r,n=ne(e,xe);if(n){if(void 0===t&&(t="default"),r=f(n,e,t),!_(r)||Z(r))return r;throw Ee("Can't convert object to primitive value")}return void 0===t&&(t="number"),function(e,t){var r,n;if("string"===t&&N(r=e.toString)&&!_(n=f(r,e)))return n;if(N(r=e.valueOf)&&!_(n=f(r,e)))return n;if("string"!==t&&N(r=e.toString)&&!_(n=f(r,e)))return n;throw ie("Can't convert object to primitive value")}(e,t)},Te=function(e){var t=Ie(e,"string");return Z(t)?t:t+""},Pe=a.document,Re=_(Pe)&&_(Pe.createElement),ke=function(e){return Re?Pe.createElement(e):{}},Oe=!u&&!c((function(){return 7!=Object.defineProperty(ke("div"),"a",{get:function(){return 7}}).a})),Ae=Object.getOwnPropertyDescriptor,De={f:u?Ae:function(e,t){if(e=D(e),t=Te(t),Oe)try{return Ae(e,t)}catch(e){}if(pe(e,t))return v(!f(m.f,e,t),e[t])}},Le=u&&c((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),je=String,Me=TypeError,Ne=function(e){if(_(e))return e;throw Me(je(e)+" is not an object")},Be=TypeError,_e=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,Fe="enumerable",Ve="configurable",ze="writable",Ge={f:u?Le?function(e,t,r){if(Ne(e),t=Te(t),Ne(r),"function"==typeof e&&"prototype"===t&&"value"in r&&ze in r&&!r.writable){var n=Ue(e,t);n&&n.writable&&(e[t]=r.value,r={configurable:Ve in r?r.configurable:n.configurable,enumerable:Fe in r?r.enumerable:n.enumerable,writable:!1})}return _e(e,t,r)}:_e:function(e,t,r){if(Ne(e),t=Te(t),Ne(r),Oe)try{return _e(e,t,r)}catch(e){}if("get"in r||"set"in r)throw Be("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},$e=u?function(e,t,r){return Ge.f(e,t,v(1,r))}:function(e,t,r){return e[t]=r,e},qe=Function.prototype,We=u&&Object.getOwnPropertyDescriptor,Xe=pe(qe,"name"),He={EXISTS:Xe,PROPER:Xe&&"something"===function(){}.name,CONFIGURABLE:Xe&&(!u||u&&We(qe,"name").configurable)},Ye=C(Function.toString);N(ce.inspectSource)||(ce.inspectSource=function(e){return Ye(e)});var Je,Ke,Ze,Qe=ce.inspectSource,et=a.WeakMap,tt=N(et)&&/native code/.test(String(et)),rt=ue("keys"),nt=function(e){return rt[e]||(rt[e]=ve(e))},it={},ot="Object already initialized",st=a.TypeError,at=a.WeakMap;if(tt||ce.state){var ct=ce.state||(ce.state=new at),ut=C(ct.get),lt=C(ct.has),dt=C(ct.set);Je=function(e,t){if(lt(ct,e))throw st(ot);return t.facade=e,dt(ct,e,t),t},Ke=function(e){return ut(ct,e)||{}},Ze=function(e){return lt(ct,e)}}else{var ft=nt("state");it[ft]=!0,Je=function(e,t){if(pe(e,ft))throw st(ot);return t.facade=e,$e(e,ft,t),t},Ke=function(e){return pe(e,ft)?e[ft]:{}},Ze=function(e){return pe(e,ft)}}var pt={set:Je,get:Ke,has:Ze,enforce:function(e){return Ze(e)?Ke(e):Je(e,{})},getterFor:function(e){return function(t){var r;if(!_(t)||(r=Ke(t)).type!==e)throw st("Incompatible receiver, "+e+" required");return r}}},ht=n((function(e){var t=He.CONFIGURABLE,r=pt.enforce,n=pt.get,i=Object.defineProperty,o=u&&!c((function(){return 8!==i((function(){}),"length",{value:8}).length})),s=String(String).split("String"),a=e.exports=function(e,n,a){"Symbol("===String(n).slice(0,7)&&(n="["+String(n).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),a&&a.getter&&(n="get "+n),a&&a.setter&&(n="set "+n),(!pe(e,"name")||t&&e.name!==n)&&(u?i(e,"name",{value:n,configurable:!0}):e.name=n),o&&a&&pe(a,"arity")&&e.length!==a.arity&&i(e,"length",{value:a.arity});try{a&&pe(a,"constructor")&&a.constructor?u&&i(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var c=r(e);return pe(c,"source")||(c.source=s.join("string"==typeof n?n:"")),e};Function.prototype.toString=a((function(){return N(this)&&n(this).source||Qe(this)}),"toString")})),gt=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(N(r)&&ht(r,o,n),n.global)i?e[t]=r:se(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:Ge.f(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e},mt=Math.ceil,vt=Math.floor,yt=Math.trunc||function(e){var t=+e;return(t>0?vt:mt)(t)},bt=function(e){var t=+e;return t!=t||0===t?0:yt(t)},wt=Math.max,St=Math.min,Ct=Math.min,Et=function(e){return e>0?Ct(bt(e),9007199254740991):0},xt=function(e){return Et(e.length)},It=function(e){return function(t,r,n){var i,o=D(t),s=xt(o),a=function(e,t){var r=bt(e);return r<0?wt(r+t,0):St(r,t)}(n,s);if(e&&r!=r){for(;s>a;)if((i=o[a++])!=i)return!0}else for(;s>a;a++)if((e||a in o)&&o[a]===r)return e||a||0;return!e&&-1}},Tt={includes:It(!0),indexOf:It(!1)},Pt=Tt.indexOf,Rt=C([].push),kt=function(e,t){var r,n=D(e),i=0,o=[];for(r in n)!pe(it,r)&&pe(n,r)&&Rt(o,r);for(;t.length>i;)pe(n,r=t[i++])&&(~Pt(o,r)||Rt(o,r));return o},Ot=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],At=Ot.concat("length","prototype"),Dt={f:Object.getOwnPropertyNames||function(e){return kt(e,At)}},Lt={f:Object.getOwnPropertySymbols},jt=C([].concat),Mt=F("Reflect","ownKeys")||function(e){var t=Dt.f(Ne(e)),r=Lt.f;return r?jt(t,r(e)):t},Nt=function(e,t,r){for(var n=Mt(t),i=Ge.f,o=De.f,s=0;s<n.length;s++){var a=n[s];pe(e,a)||r&&pe(r,a)||i(e,a,o(t,a))}},Bt=/#|\.prototype\./,_t=function(e,t){var r=Ft[Ut(e)];return r==zt||r!=Vt&&(N(t)?c(t):!!t)},Ut=_t.normalize=function(e){return String(e).replace(Bt,".").toLowerCase()},Ft=_t.data={},Vt=_t.NATIVE="N",zt=_t.POLYFILL="P",Gt=_t,$t=De.f,qt=function(e,t){var r,n,i,o,s,c=e.target,u=e.global,l=e.stat;if(r=u?a:l?a[c]||se(c,{}):(a[c]||{}).prototype)for(n in t){if(o=t[n],i=e.dontCallGetSet?(s=$t(r,n))&&s.value:r[n],!Gt(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;Nt(o,i)}(e.sham||i&&i.sham)&&$e(o,"sham",!0),gt(r,n,o,e)}},Wt=Function.prototype,Xt=Wt.apply,Ht=Wt.call,Yt="object"==typeof Reflect&&Reflect.apply||(l?Ht.bind(Xt):function(){return Ht.apply(Xt,arguments)}),Jt=Array.isArray||function(e){return"Array"==I(e)},Kt=C([].slice),Zt=F("JSON","stringify"),Qt=C(/./.exec),er=C("".charAt),tr=C("".charCodeAt),rr=C("".replace),nr=C(1..toString),ir=/[\uD800-\uDFFF]/g,or=/^[\uD800-\uDBFF]$/,sr=/^[\uDC00-\uDFFF]$/,ar=!Y||c((function(){var e=F("Symbol")();return"[null]"!=Zt([e])||"{}"!=Zt({a:e})||"{}"!=Zt(Object(e))})),cr=c((function(){return'"\\udf06\\ud834"'!==Zt("\udf06\ud834")||'"\\udead"'!==Zt("\udead")})),ur=function(e,t){var r=Kt(arguments),n=t;if((_(t)||void 0!==e)&&!Z(e))return Jt(t)||(t=function(e,t){if(N(n)&&(t=f(n,this,e,t)),!Z(t))return t}),r[1]=t,Yt(Zt,null,r)},lr=function(e,t,r){var n=er(r,t-1),i=er(r,t+1);return Qt(or,e)&&!Qt(sr,i)||Qt(sr,e)&&!Qt(or,n)?"\\u"+nr(tr(e,0),16):e};Zt&&qt({target:"JSON",stat:!0,arity:3,forced:ar||cr},{stringify:function(e,t,r){var n=Kt(arguments),i=Yt(ar?ur:Zt,null,n);return cr&&"string"==typeof i?rr(i,ir,lr):i}});var dr,fr={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},pr=ke("span").classList,hr=pr&&pr.constructor&&pr.constructor.prototype,gr=hr===Object.prototype?void 0:hr,mr=Object.keys||function(e){return kt(e,Ot)},vr=u&&!Le?Object.defineProperties:function(e,t){Ne(e);for(var r,n=D(t),i=mr(t),o=i.length,s=0;o>s;)Ge.f(e,r=i[s++],n[r]);return e},yr={f:vr},br=F("document","documentElement"),wr=nt("IE_PROTO"),Sr=function(){},Cr=function(e){return"<script>"+e+"</"+"script>"},Er=function(e){e.write(Cr("")),e.close();var t=e.parentWindow.Object;return e=null,t},xr=function(){try{dr=new ActiveXObject("htmlfile")}catch(e){}var e,t;xr="undefined"!=typeof document?document.domain&&dr?Er(dr):((t=ke("iframe")).style.display="none",br.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Cr("document.F=Object")),e.close(),e.F):Er(dr);for(var r=Ot.length;r--;)delete xr.prototype[Ot[r]];return xr()};it[wr]=!0;var Ir=Object.create||function(e,t){var r;return null!==e?(Sr.prototype=Ne(e),r=new Sr,Sr.prototype=null,r[wr]=e):r=xr(),void 0===t?r:yr.f(r,t)},Tr=Ge.f,Pr=Ce("unscopables"),Rr=Array.prototype;null==Rr[Pr]&&Tr(Rr,Pr,{configurable:!0,value:Ir(null)});var kr,Or,Ar,Dr=function(e){Rr[Pr][e]=!0},Lr={},jr=!c((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})),Mr=nt("IE_PROTO"),Nr=Object,Br=Nr.prototype,_r=jr?Nr.getPrototypeOf:function(e){var t=de(e);if(pe(t,Mr))return t[Mr];var r=t.constructor;return N(r)&&t instanceof r?r.prototype:t instanceof Nr?Br:null},Ur=Ce("iterator"),Fr=!1;[].keys&&("next"in(Ar=[].keys())?(Or=_r(_r(Ar)))!==Object.prototype&&(kr=Or):Fr=!0);var Vr=!_(kr)||c((function(){var e={};return kr[Ur].call(e)!==e}));Vr&&(kr={}),N(kr[Ur])||gt(kr,Ur,(function(){return this}));var zr={IteratorPrototype:kr,BUGGY_SAFARI_ITERATORS:Fr},Gr=Ge.f,$r=Ce("toStringTag"),qr=function(e,t,r){e&&!r&&(e=e.prototype),e&&!pe(e,$r)&&Gr(e,$r,{configurable:!0,value:t})},Wr=zr.IteratorPrototype,Xr=function(){return this},Hr=function(e,t,r,n){var i=t+" Iterator";return e.prototype=Ir(Wr,{next:v(+!n,r)}),qr(e,i,!1),Lr[i]=Xr,e},Yr=String,Jr=TypeError,Kr=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=C(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),t=r instanceof Array}catch(e){}return function(r,n){return Ne(r),function(e){if("object"==typeof e||N(e))return e;throw Jr("Can't set "+Yr(e)+" as a prototype")}(n),t?e(r,n):r.__proto__=n,r}}():void 0),Zr=He.PROPER,Qr=He.CONFIGURABLE,en=zr.IteratorPrototype,tn=zr.BUGGY_SAFARI_ITERATORS,rn=Ce("iterator"),nn="keys",on="values",sn="entries",an=function(){return this},cn=function(e,t){return{value:e,done:t}},un=Ge.f,ln="Array Iterator",dn=pt.set,fn=pt.getterFor(ln),pn=function(e,t,r,n,i,o,s){Hr(r,t,n);var a,c,u,l=function(e){if(e===i&&m)return m;if(!tn&&e in h)return h[e];switch(e){case nn:case on:case sn:return function(){return new r(this,e)}}return function(){return new r(this)}},d=t+" Iterator",p=!1,h=e.prototype,g=h[rn]||h["@@iterator"]||i&&h[i],m=!tn&&g||l(i),v="Array"==t&&h.entries||g;if(v&&(a=_r(v.call(new e)))!==Object.prototype&&a.next&&(_r(a)!==en&&(Kr?Kr(a,en):N(a[rn])||gt(a,rn,an)),qr(a,d,!0)),Zr&&i==on&&g&&g.name!==on&&(Qr?$e(h,"name",on):(p=!0,m=function(){return f(g,this)})),i)if(c={values:l(on),keys:o?m:l(nn),entries:l(sn)},s)for(u in c)(tn||p||!(u in h))&&gt(h,u,c[u]);else qt({target:t,proto:!0,forced:tn||p},c);return h[rn]!==m&&gt(h,rn,m,{name:i}),Lr[t]=m,c}(Array,"Array",(function(e,t){dn(this,{type:ln,target:D(e),index:0,kind:t})}),(function(){var e=fn(this),t=e.target,r=e.kind,n=e.index++;return!t||n>=t.length?(e.target=void 0,cn(void 0,!0)):cn("keys"==r?n:"values"==r?t[n]:[n,t[n]],!1)}),"values"),hn=Lr.Arguments=Lr.Array;if(Dr("keys"),Dr("values"),Dr("entries"),u&&"values"!==hn.name)try{un(hn,"name",{value:"values"})}catch(e){}var gn=Ce("iterator"),mn=Ce("toStringTag"),vn=pn.values,yn=function(e,t){if(e){if(e[gn]!==vn)try{$e(e,gn,vn)}catch(t){e[gn]=vn}if(e[mn]||$e(e,mn,t),fr[t])for(var r in pn)if(e[r]!==pn[r])try{$e(e,r,pn[r])}catch(t){e[r]=pn[r]}}};for(var bn in fr)yn(a[bn]&&a[bn].prototype,bn);yn(gr,"DOMTokenList");var wn=n((function(e){!function(t){var r,n={};n.VERSION="1.6.1";var i={},o=function(e,t){return function(){return t.apply(e,arguments)}},s=function(){var e,t,r=arguments,n=r[0];for(t=1;t<r.length;t++)for(e in r[t])!(e in n)&&r[t].hasOwnProperty(e)&&(n[e]=r[t][e]);return n},a=function(e,t){return{value:e,name:t}};n.TRACE=a(1,"TRACE"),n.DEBUG=a(2,"DEBUG"),n.INFO=a(3,"INFO"),n.TIME=a(4,"TIME"),n.WARN=a(5,"WARN"),n.ERROR=a(8,"ERROR"),n.OFF=a(99,"OFF");var c=function(e){this.context=e,this.setLevel(e.filterLevel),this.log=this.info};c.prototype={setLevel:function(e){e&&"value"in e&&(this.context.filterLevel=e)},getLevel:function(){return this.context.filterLevel},enabledFor:function(e){var t=this.context.filterLevel;return e.value>=t.value},trace:function(){this.invoke(n.TRACE,arguments)},debug:function(){this.invoke(n.DEBUG,arguments)},info:function(){this.invoke(n.INFO,arguments)},warn:function(){this.invoke(n.WARN,arguments)},error:function(){this.invoke(n.ERROR,arguments)},time:function(e){"string"==typeof e&&e.length>0&&this.invoke(n.TIME,[e,"start"])},timeEnd:function(e){"string"==typeof e&&e.length>0&&this.invoke(n.TIME,[e,"end"])},invoke:function(e,t){r&&this.enabledFor(e)&&r(t,s({level:e},this.context))}};var u,l=new c({filterLevel:n.OFF});(u=n).enabledFor=o(l,l.enabledFor),u.trace=o(l,l.trace),u.debug=o(l,l.debug),u.time=o(l,l.time),u.timeEnd=o(l,l.timeEnd),u.info=o(l,l.info),u.warn=o(l,l.warn),u.error=o(l,l.error),u.log=u.info,n.setHandler=function(e){r=e},n.setLevel=function(e){for(var t in l.setLevel(e),i)i.hasOwnProperty(t)&&i[t].setLevel(e)},n.getLevel=function(){return l.getLevel()},n.get=function(e){return i[e]||(i[e]=new c(s({name:e},l.context)))},n.createDefaultHandler=function(e){(e=e||{}).formatter=e.formatter||function(e,t){t.name&&e.unshift("["+t.name+"]")};var t={},r=function(e,t){Function.prototype.apply.call(e,console,t)};return"undefined"==typeof console?function(){}:function(i,o){i=Array.prototype.slice.call(i);var s,a=console.log;o.level===n.TIME?(s=(o.name?"["+o.name+"] ":"")+i[0],"start"===i[1]?console.time?console.time(s):t[s]=(new Date).getTime():console.timeEnd?console.timeEnd(s):r(a,[s+": "+((new Date).getTime()-t[s])+"ms"])):(o.level===n.WARN&&console.warn?a=console.warn:o.level===n.ERROR&&console.error?a=console.error:o.level===n.INFO&&console.info?a=console.info:o.level===n.DEBUG&&console.debug?a=console.debug:o.level===n.TRACE&&console.trace&&(a=console.trace),e.formatter(i,o),r(a,i))}},n.useDefaults=function(e){n.setLevel(e&&e.defaultLevel||n.DEBUG),n.setHandler(n.createDefaultHandler(e))},n.setDefaults=n.useDefaults,e.exports?e.exports=n:(n._prevLogger=t.Logger,n.noConflict=function(){return t.Logger=n._prevLogger,n},t.Logger=n)}(r)}));function Sn(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Cn(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?Sn(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}wn.useDefaults({defaultLevel:wn.TRACE});const En=(e,t)=>{e.unshift("[".concat(t.name||"Global","] ").concat((new Date).toISOString()," - ").concat(t.level.name," -"))},xn=(e,t)=>t?e.value>=kn[t].value:e.value>=Rn.value,In=wn.createDefaultHandler({formatter:En});wn.setHandler(((e,t)=>{((e,t)=>{e=(e=Array.prototype.slice.call(e)).map((e=>"object"==typeof e?JSON.stringify(e):e)),En(e,t),0!==Tn?(Pn.push(e.join(" ")),Pn.length>=Tn&&(Pn=Pn.slice(-Tn))):Pn=[]})(e,t),xn(t.level,t.name)&&In(e,t);for(const{handler:r,level:n}of On)t.level.value>=n.value&&r(e,t)}));let Tn=1e4,Pn=[],Rn=wn.OFF;const kn={},On=[],An=Cn(Cn({},wn),{},{enabledFor:xn,getHistory:()=>Pn,getHistoryMaxSize:()=>Tn,setHistoryMaxSize:e=>{Tn=e},setLevel:e=>{Rn=e;for(const t in kn)kn[t]=e},getLevel:()=>Rn,get:e=>{kn[e]||(kn[e]=Rn);const t=wn.get(e);return t.setLevel=t=>{kn[e]=t},t.getLevel=()=>kn[e],t},setHandler:(e,t)=>{On.push({handler:e,level:t})}});var Dn="process"==I(a.process),Ln=Ce("species"),jn=function(e){var t=F(e),r=Ge.f;u&&t&&!t[Ln]&&r(t,Ln,{configurable:!0,get:function(){return this}})},Mn=TypeError,Nn={};Nn[Ce("toStringTag")]="z";var Bn="[object z]"===String(Nn),_n=Ce("toStringTag"),Un=Object,Fn="Arguments"==I(function(){return arguments}()),Vn=Bn?I:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=Un(e),_n))?r:Fn?I(t):"Object"==(n=I(t))&&N(t.callee)?"Arguments":n},zn=function(){},Gn=[],$n=F("Reflect","construct"),qn=/^\s*(?:class|function)\b/,Wn=C(qn.exec),Xn=!qn.exec(zn),Hn=function(e){if(!N(e))return!1;try{return $n(zn,Gn,e),!0}catch(e){return!1}},Yn=function(e){if(!N(e))return!1;switch(Vn(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Xn||!!Wn(qn,Qe(e))}catch(e){return!0}};Yn.sham=!0;var Jn,Kn,Zn,Qn,ei=!$n||c((function(){var e;return Hn(Hn.call)||!Hn(Object)||!Hn((function(){e=!0}))||e}))?Yn:Hn,ti=TypeError,ri=Ce("species"),ni=function(e,t){var r,n=Ne(e).constructor;return void 0===n||k(r=Ne(n)[ri])?t:function(e){if(ei(e))return e;throw ti(ee(e)+" is not a constructor")}(r)},ii=C(C.bind),oi=function(e,t){return re(e),void 0===t?e:l?ii(e,t):function(){return e.apply(t,arguments)}},si=TypeError,ai=function(e,t){if(e<t)throw si("Not enough arguments");return e},ci=/(?:ipad|iphone|ipod).*applewebkit/i.test(z),ui=a.setImmediate,li=a.clearImmediate,di=a.process,fi=a.Dispatch,pi=a.Function,hi=a.MessageChannel,gi=a.String,mi=0,vi={},yi="onreadystatechange";try{Jn=a.location}catch(e){}var bi=function(e){if(pe(vi,e)){var t=vi[e];delete vi[e],t()}},wi=function(e){return function(){bi(e)}},Si=function(e){bi(e.data)},Ci=function(e){a.postMessage(gi(e),Jn.protocol+"//"+Jn.host)};ui&&li||(ui=function(e){ai(arguments.length,1);var t=N(e)?e:pi(e),r=Kt(arguments,1);return vi[++mi]=function(){Yt(t,void 0,r)},Kn(mi),mi},li=function(e){delete vi[e]},Dn?Kn=function(e){di.nextTick(wi(e))}:fi&&fi.now?Kn=function(e){fi.now(wi(e))}:hi&&!ci?(Qn=(Zn=new hi).port2,Zn.port1.onmessage=Si,Kn=oi(Qn.postMessage,Qn)):a.addEventListener&&N(a.postMessage)&&!a.importScripts&&Jn&&"file:"!==Jn.protocol&&!c(Ci)?(Kn=Ci,a.addEventListener("message",Si,!1)):Kn=yi in ke("script")?function(e){br.appendChild(ke("script")).onreadystatechange=function(){br.removeChild(this),bi(e)}}:function(e){setTimeout(wi(e),0)});var Ei,xi,Ii,Ti,Pi,Ri,ki,Oi,Ai={set:ui,clear:li},Di=/ipad|iphone|ipod/i.test(z)&&void 0!==a.Pebble,Li=/web0s(?!.*chrome)/i.test(z),ji=De.f,Mi=Ai.set,Ni=a.MutationObserver||a.WebKitMutationObserver,Bi=a.document,_i=a.process,Ui=a.Promise,Fi=ji(a,"queueMicrotask"),Vi=Fi&&Fi.value;Vi||(Ei=function(){var e,t;for(Dn&&(e=_i.domain)&&e.exit();xi;){t=xi.fn,xi=xi.next;try{t()}catch(e){throw xi?Ti():Ii=void 0,e}}Ii=void 0,e&&e.enter()},ci||Dn||Li||!Ni||!Bi?!Di&&Ui&&Ui.resolve?((ki=Ui.resolve(void 0)).constructor=Ui,Oi=oi(ki.then,ki),Ti=function(){Oi(Ei)}):Dn?Ti=function(){_i.nextTick(Ei)}:(Mi=oi(Mi,a),Ti=function(){Mi(Ei)}):(Pi=!0,Ri=Bi.createTextNode(""),new Ni(Ei).observe(Ri,{characterData:!0}),Ti=function(){Ri.data=Pi=!Pi}));var zi=Vi||function(e){var t={fn:e,next:void 0};Ii&&(Ii.next=t),xi||(xi=t,Ti()),Ii=t},Gi=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}},$i=function(){this.head=null,this.tail=null};$i.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}};var qi=$i,Wi=a.Promise,Xi="object"==typeof Deno&&Deno&&"object"==typeof Deno.version,Hi=!Xi&&!Dn&&"object"==typeof window&&"object"==typeof document;Wi&&Wi.prototype;var Yi,Ji,Ki,Zi=Ce("species"),Qi=!1,eo=N(a.PromiseRejectionEvent),to=Gt("Promise",(function(){var e=Qe(Wi),t=e!==String(Wi);if(!t&&66===H)return!0;if(!H||H<51||!/native code/.test(e)){var r=new Wi((function(e){e(1)})),n=function(e){e((function(){}),(function(){}))};if((r.constructor={})[Zi]=n,!(Qi=r.then((function(){}))instanceof n))return!0}return!t&&(Hi||Xi)&&!eo})),ro={CONSTRUCTOR:to,REJECTION_EVENT:eo,SUBCLASSING:Qi},no=TypeError,io=function(e){var t,r;this.promise=new e((function(e,n){if(void 0!==t||void 0!==r)throw no("Bad Promise constructor");t=e,r=n})),this.resolve=re(t),this.reject=re(r)},oo={f:function(e){return new io(e)}},so=Ai.set,ao="Promise",co=ro.CONSTRUCTOR,uo=ro.REJECTION_EVENT,lo=ro.SUBCLASSING,fo=pt.getterFor(ao),po=pt.set,ho=Wi&&Wi.prototype,go=Wi,mo=ho,vo=a.TypeError,yo=a.document,bo=a.process,wo=oo.f,So=wo,Co=!!(yo&&yo.createEvent&&a.dispatchEvent),Eo="unhandledrejection",xo=function(e){var t;return!(!_(e)||!N(t=e.then))&&t},Io=function(e,t){var r,n,i,o=t.value,s=1==t.state,a=s?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{a?(s||(2===t.rejection&&Oo(t),t.rejection=1),!0===a?r=o:(l&&l.enter(),r=a(o),l&&(l.exit(),i=!0)),r===e.promise?u(vo("Promise-chain cycle")):(n=xo(r))?f(n,r,c,u):c(r)):u(o)}catch(e){l&&!i&&l.exit(),u(e)}},To=function(e,t){e.notified||(e.notified=!0,zi((function(){for(var r,n=e.reactions;r=n.get();)Io(r,e);e.notified=!1,t&&!e.rejection&&Ro(e)})))},Po=function(e,t,r){var n,i;Co?((n=yo.createEvent("Event")).promise=t,n.reason=r,n.initEvent(e,!1,!0),a.dispatchEvent(n)):n={promise:t,reason:r},!uo&&(i=a["on"+e])?i(n):e===Eo&&function(e,t){var r=a.console;r&&r.error&&(1==arguments.length?r.error(e):r.error(e,t))}("Unhandled promise rejection",r)},Ro=function(e){f(so,a,(function(){var t,r=e.facade,n=e.value;if(ko(e)&&(t=Gi((function(){Dn?bo.emit("unhandledRejection",n,r):Po(Eo,r,n)})),e.rejection=Dn||ko(e)?2:1,t.error))throw t.value}))},ko=function(e){return 1!==e.rejection&&!e.parent},Oo=function(e){f(so,a,(function(){var t=e.facade;Dn?bo.emit("rejectionHandled",t):Po("rejectionhandled",t,e.value)}))},Ao=function(e,t,r){return function(n){e(t,n,r)}},Do=function(e,t,r){e.done||(e.done=!0,r&&(e=r),e.value=t,e.state=2,To(e,!0))},Lo=function(e,t,r){if(!e.done){e.done=!0,r&&(e=r);try{if(e.facade===t)throw vo("Promise can't be resolved itself");var n=xo(t);n?zi((function(){var r={done:!1};try{f(n,t,Ao(Lo,r,e),Ao(Do,r,e))}catch(t){Do(r,t,e)}})):(e.value=t,e.state=1,To(e,!1))}catch(t){Do({done:!1},t,e)}}};if(co&&(mo=(go=function(e){!function(e,t){if(V(t,e))return e;throw Mn("Incorrect invocation")}(this,mo),re(e),f(Yi,this);var t=fo(this);try{e(Ao(Lo,t),Ao(Do,t))}catch(e){Do(t,e)}}).prototype,(Yi=function(e){po(this,{type:ao,done:!1,notified:!1,parent:!1,reactions:new qi,rejection:!1,state:0,value:void 0})}).prototype=gt(mo,"then",(function(e,t){var r=fo(this),n=wo(ni(this,go));return r.parent=!0,n.ok=!N(e)||e,n.fail=N(t)&&t,n.domain=Dn?bo.domain:void 0,0==r.state?r.reactions.add(n):zi((function(){Io(n,r)})),n.promise})),Ji=function(){var e=new Yi,t=fo(e);this.promise=e,this.resolve=Ao(Lo,t),this.reject=Ao(Do,t)},oo.f=wo=function(e){return e===go||undefined===e?new Ji(e):So(e)},N(Wi)&&ho!==Object.prototype)){Ki=ho.then,lo||gt(ho,"then",(function(e,t){var r=this;return new go((function(e,t){f(Ki,r,e,t)})).then(e,t)}),{unsafe:!0});try{delete ho.constructor}catch(e){}Kr&&Kr(ho,mo)}qt({global:!0,constructor:!0,wrap:!0,forced:co},{Promise:go}),qr(go,ao,!1),jn(ao);var jo=Ce("iterator"),Mo=Array.prototype,No=Ce("iterator"),Bo=function(e){if(!k(e))return ne(e,No)||ne(e,"@@iterator")||Lr[Vn(e)]},_o=TypeError,Uo=function(e,t,r){var n,i;Ne(e);try{if(!(n=ne(e,"return"))){if("throw"===t)throw r;return r}n=f(n,e)}catch(e){i=!0,n=e}if("throw"===t)throw r;if(i)throw n;return Ne(n),r},Fo=TypeError,Vo=function(e,t){this.stopped=e,this.result=t},zo=Vo.prototype,Go=function(e,t,r){var n,i,o,s,a,c,u,l,d=r&&r.that,p=!(!r||!r.AS_ENTRIES),h=!(!r||!r.IS_RECORD),g=!(!r||!r.IS_ITERATOR),m=!(!r||!r.INTERRUPTED),v=oi(t,d),y=function(e){return n&&Uo(n,"normal",e),new Vo(!0,e)},b=function(e){return p?(Ne(e),m?v(e[0],e[1],y):v(e[0],e[1])):m?v(e,y):v(e)};if(h)n=e.iterator;else if(g)n=e;else{if(!(i=Bo(e)))throw Fo(ee(e)+" is not iterable");if(void 0!==(l=i)&&(Lr.Array===l||Mo[jo]===l)){for(o=0,s=xt(e);s>o;o++)if((a=b(e[o]))&&V(zo,a))return a;return new Vo(!1)}n=function(e,t){var r=arguments.length<2?Bo(e):t;if(re(r))return Ne(f(r,e));throw _o(ee(e)+" is not iterable")}(e,i)}for(c=h?e.next:n.next;!(u=f(c,n)).done;){try{a=b(u.value)}catch(e){Uo(n,"throw",e)}if("object"==typeof a&&a&&V(zo,a))return a}return new Vo(!1)},$o=Ce("iterator"),qo=!1;try{var Wo=0,Xo={next:function(){return{done:!!Wo++}},return:function(){qo=!0}};Xo[$o]=function(){return this},Array.from(Xo,(function(){throw 2}))}catch(e){}var Ho=ro.CONSTRUCTOR||!function(e,t){if(!t&&!qo)return!1;var r=!1;try{var n={};n[$o]=function(){return{next:function(){return{done:r=!0}}}},e(n)}catch(e){}return r}((function(e){Wi.all(e).then(void 0,(function(){}))}));qt({target:"Promise",stat:!0,forced:Ho},{all:function(e){var t=this,r=oo.f(t),n=r.resolve,i=r.reject,o=Gi((function(){var r=re(t.resolve),o=[],s=0,a=1;Go(e,(function(e){var c=s++,u=!1;a++,f(r,t,e).then((function(e){u||(u=!0,o[c]=e,--a||n(o))}),i)})),--a||n(o)}));return o.error&&i(o.value),r.promise}});var Yo=ro.CONSTRUCTOR,Jo=Wi&&Wi.prototype;if(qt({target:"Promise",proto:!0,forced:Yo,real:!0},{catch:function(e){return this.then(void 0,e)}}),N(Wi)){var Ko=F("Promise").prototype.catch;Jo.catch!==Ko&&gt(Jo,"catch",Ko,{unsafe:!0})}qt({target:"Promise",stat:!0,forced:Ho},{race:function(e){var t=this,r=oo.f(t),n=r.reject,i=Gi((function(){var i=re(t.resolve);Go(e,(function(e){f(i,t,e).then(r.resolve,n)}))}));return i.error&&n(i.value),r.promise}}),qt({target:"Promise",stat:!0,forced:ro.CONSTRUCTOR},{reject:function(e){var t=oo.f(this);return f(t.reject,void 0,e),t.promise}});var Zo=ro.CONSTRUCTOR;F("Promise"),qt({target:"Promise",stat:!0,forced:Zo},{resolve:function(e){return function(e,t){if(Ne(e),_(t)&&t.constructor===e)return t;var r=oo.f(e);return(0,r.resolve)(t),r.promise}(this,e)}});var Qo=Ge.f,es=function(e,t,r){r in e||Qo(e,r,{configurable:!0,get:function(){return t[r]},set:function(e){t[r]=e}})},ts=function(e,t,r){var n,i;return Kr&&N(n=t.constructor)&&n!==r&&_(i=n.prototype)&&i!==r.prototype&&Kr(e,i),e},rs=String,ns=function(e){if("Symbol"===Vn(e))throw TypeError("Cannot convert a Symbol value to a string");return rs(e)},is=function(e,t){return void 0===e?arguments.length<2?"":t:ns(e)},os=function(e,t){_(t)&&"cause"in t&&$e(e,"cause",t.cause)},ss=Error,as=C("".replace),cs=String(ss("zxcasd").stack),us=/\n\s*at [^:]*:[^\n]*/,ls=us.test(cs),ds=function(e,t){if(ls&&"string"==typeof e&&!ss.prepareStackTrace)for(;t--;)e=as(e,us,"");return e},fs=!c((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",v(1,7)),7!==e.stack)})),ps=function(e,t,r,n){var i="stackTraceLimit",o=n?2:1,s=e.split("."),a=s[s.length-1],c=F.apply(null,s);if(c){var l=c.prototype;if(pe(l,"cause")&&delete l.cause,!r)return c;var d=F("Error"),f=t((function(e,t){var r=is(n?t:e,void 0),i=n?new c(e):new c;return void 0!==r&&$e(i,"message",r),fs&&$e(i,"stack",ds(i.stack,2)),this&&V(l,this)&&ts(i,this,f),arguments.length>o&&os(i,arguments[o]),i}));f.prototype=l,"Error"!==a?Kr?Kr(f,d):Nt(f,d,{name:!0}):u&&i in c&&(es(f,c,i),es(f,c,"prepareStackTrace")),Nt(f,c);try{l.name!==a&&$e(l,"name",a),l.constructor=f}catch(e){}return f}},hs="WebAssembly",gs=a.WebAssembly,ms=7!==Error("e",{cause:7}).cause,vs=function(e,t){var r={};r[e]=ps(e,t,ms),qt({global:!0,constructor:!0,arity:1,forced:ms},r)},ys=function(e,t){if(gs&&gs[e]){var r={};r[e]=ps("WebAssembly."+e,t,ms),qt({target:hs,stat:!0,constructor:!0,arity:1,forced:ms},r)}};vs("Error",(function(e){return function(t){return Yt(e,this,arguments)}})),vs("EvalError",(function(e){return function(t){return Yt(e,this,arguments)}})),vs("RangeError",(function(e){return function(t){return Yt(e,this,arguments)}})),vs("ReferenceError",(function(e){return function(t){return Yt(e,this,arguments)}})),vs("SyntaxError",(function(e){return function(t){return Yt(e,this,arguments)}})),vs("TypeError",(function(e){return function(t){return Yt(e,this,arguments)}})),vs("URIError",(function(e){return function(t){return Yt(e,this,arguments)}})),ys("CompileError",(function(e){return function(t){return Yt(e,this,arguments)}})),ys("LinkError",(function(e){return function(t){return Yt(e,this,arguments)}})),ys("RuntimeError",(function(e){return function(t){return Yt(e,this,arguments)}}));var bs=Ce("match"),ws=function(e){var t;return _(e)&&(void 0!==(t=e[bs])?!!t:"RegExp"==I(e))},Ss=function(){var e=Ne(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t},Cs=RegExp.prototype,Es=function(e){var t=e.flags;return void 0!==t||"flags"in Cs||pe(e,"flags")||!V(Cs,e)?t:f(Ss,e)},xs=a.RegExp,Is=c((function(){var e=xs("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),Ts=Is||c((function(){return!xs("a","y").sticky})),Ps={BROKEN_CARET:Is||c((function(){var e=xs("^r","gy");return e.lastIndex=2,null!=e.exec("str")})),MISSED_STICKY:Ts,UNSUPPORTED_Y:Is},Rs=a.RegExp,ks=c((function(){var e=Rs(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)})),Os=a.RegExp,As=c((function(){var e=Os("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")})),Ds=Dt.f,Ls=pt.enforce,js=Ce("match"),Ms=a.RegExp,Ns=Ms.prototype,Bs=a.SyntaxError,_s=C(Ns.exec),Us=C("".charAt),Fs=C("".replace),Vs=C("".indexOf),zs=C("".slice),Gs=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,$s=/a/g,qs=/a/g,Ws=new Ms($s)!==$s,Xs=Ps.MISSED_STICKY,Hs=Ps.UNSUPPORTED_Y,Ys=u&&(!Ws||Xs||ks||As||c((function(){return qs[js]=!1,Ms($s)!=$s||Ms(qs)==qs||"/a/i"!=Ms($s,"i")})));if(Gt("RegExp",Ys)){for(var Js=function(e,t){var r,n,i,o,s,a,c=V(Ns,this),u=ws(e),l=void 0===t,d=[],f=e;if(!c&&u&&l&&e.constructor===Js)return e;if((u||V(Ns,e))&&(e=e.source,l&&(t=Es(f))),e=void 0===e?"":ns(e),t=void 0===t?"":ns(t),f=e,ks&&"dotAll"in $s&&(n=!!t&&Vs(t,"s")>-1)&&(t=Fs(t,/s/g,"")),r=t,Xs&&"sticky"in $s&&(i=!!t&&Vs(t,"y")>-1)&&Hs&&(t=Fs(t,/y/g,"")),As&&(o=function(e){for(var t,r=e.length,n=0,i="",o=[],s={},a=!1,c=!1,u=0,l="";n<=r;n++){if("\\"===(t=Us(e,n)))t+=Us(e,++n);else if("]"===t)a=!1;else if(!a)switch(!0){case"["===t:a=!0;break;case"("===t:_s(Gs,zs(e,n+1))&&(n+=2,c=!0),i+=t,u++;continue;case">"===t&&c:if(""===l||pe(s,l))throw new Bs("Invalid capture group name");s[l]=!0,o[o.length]=[l,u],c=!1,l="";continue}c?l+=t:i+=t}return[i,o]}(e),e=o[0],d=o[1]),s=ts(Ms(e,t),c?this:Ns,Js),(n||i||d.length)&&(a=Ls(s),n&&(a.dotAll=!0,a.raw=Js(function(e){for(var t,r=e.length,n=0,i="",o=!1;n<=r;n++)"\\"!==(t=Us(e,n))?o||"."!==t?("["===t?o=!0:"]"===t&&(o=!1),i+=t):i+="[\\s\\S]":i+=t+Us(e,++n);return i}(e),r)),i&&(a.sticky=!0),d.length&&(a.groups=d)),e!==f)try{$e(s,"source",""===f?"(?:)":f)}catch(e){}return s},Ks=Ds(Ms),Zs=0;Ks.length>Zs;)es(Js,Ms,Ks[Zs++]);Ns.constructor=Js,Js.prototype=Ns,gt(a,"RegExp",Js,{constructor:!0})}jn("RegExp");var Qs,ea,ta,ra=pt.get,na=RegExp.prototype,ia=TypeError;u&&ks&&(Qs=na,ea="dotAll",(ta={configurable:!0,get:function(){if(this!==na){if("RegExp"===I(this))return!!ra(this).dotAll;throw ia("Incompatible receiver, RegExp required")}}}).get&&ht(ta.get,ea,{getter:!0}),ta.set&&ht(ta.set,ea,{setter:!0}),Ge.f(Qs,ea,ta));var oa=pt.get,sa=ue("native-string-replace",String.prototype.replace),aa=RegExp.prototype.exec,ca=aa,ua=C("".charAt),la=C("".indexOf),da=C("".replace),fa=C("".slice),pa=function(){var e=/a/,t=/b*/g;return f(aa,e,"a"),f(aa,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),ha=Ps.BROKEN_CARET,ga=void 0!==/()??/.exec("")[1];(pa||ga||ha||ks||As)&&(ca=function(e){var t,r,n,i,o,s,a,c=this,u=oa(c),l=ns(e),d=u.raw;if(d)return d.lastIndex=c.lastIndex,t=f(ca,d,l),c.lastIndex=d.lastIndex,t;var p=u.groups,h=ha&&c.sticky,g=f(Ss,c),m=c.source,v=0,y=l;if(h&&(g=da(g,"y",""),-1===la(g,"g")&&(g+="g"),y=fa(l,c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==ua(l,c.lastIndex-1))&&(m="(?: "+m+")",y=" "+y,v++),r=new RegExp("^(?:"+m+")",g)),ga&&(r=new RegExp("^"+m+"$(?!\\s)",g)),pa&&(n=c.lastIndex),i=f(aa,h?r:c,y),h?i?(i.input=fa(i.input,v),i[0]=fa(i[0],v),i.index=c.lastIndex,c.lastIndex+=i[0].length):c.lastIndex=0:pa&&i&&(c.lastIndex=c.global?i.index+i[0].length:n),ga&&i&&i.length>1&&f(sa,i[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)})),i&&p)for(i.groups=s=Ir(null),o=0;o<p.length;o++)s[(a=p[o])[0]]=i[a[1]];return i});var ma=ca;qt({target:"RegExp",proto:!0,forced:/./.exec!==ma},{exec:ma});var va,ya="object"==typeof Reflect?Reflect:null,ba=ya&&"function"==typeof ya.apply?ya.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};va=ya&&"function"==typeof ya.ownKeys?ya.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var wa=Number.isNaN||function(e){return e!=e};function Sa(){Sa.init.call(this)}var Ca=Sa,Ea=function(e,t){return new Promise((function(r,n){function i(r){e.removeListener(t,o),n(r)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",i),r([].slice.call(arguments))}La(e,t,o,{once:!0}),"error"!==t&&function(e,t,r){"function"==typeof e.on&&La(e,"error",t,r)}(e,i,{once:!0})}))};Sa.EventEmitter=Sa,Sa.prototype._events=void 0,Sa.prototype._eventsCount=0,Sa.prototype._maxListeners=void 0;var xa=10;function Ia(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function Ta(e){return void 0===e._maxListeners?Sa.defaultMaxListeners:e._maxListeners}function Pa(e,t,r,n){var i,o,s,a;if(Ia(r),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),o=e._events),s=o[t]),void 0===s)s=o[t]=r,++e._eventsCount;else if("function"==typeof s?s=o[t]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),(i=Ta(e))>0&&s.length>i&&!s.warned){s.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=s.length,a=c,console&&console.warn&&console.warn(a)}return e}function Ra(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function ka(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},i=Ra.bind(n);return i.listener=r,n.wrapFn=i,i}function Oa(e,t,r){var n=e._events;if(void 0===n)return[];var i=n[t];return void 0===i?[]:"function"==typeof i?r?[i.listener||i]:[i]:r?function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(i):Da(i,i.length)}function Aa(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function Da(e,t){for(var r=new Array(t),n=0;n<t;++n)r[n]=e[n];return r}function La(e,t,r,n){if("function"==typeof e.on)n.once?e.once(t,r):e.on(t,r);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function i(o){n.once&&e.removeEventListener(t,i),r(o)}))}}Object.defineProperty(Sa,"defaultMaxListeners",{enumerable:!0,get:function(){return xa},set:function(e){if("number"!=typeof e||e<0||wa(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");xa=e}}),Sa.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},Sa.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||wa(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},Sa.prototype.getMaxListeners=function(){return Ta(this)},Sa.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var n="error"===e,i=this._events;if(void 0!==i)n=n&&void 0===i.error;else if(!n)return!1;if(n){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var s=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw s.context=o,s}var a=i[e];if(void 0===a)return!1;if("function"==typeof a)ba(a,this,t);else{var c=a.length,u=Da(a,c);for(r=0;r<c;++r)ba(u[r],this,t)}return!0},Sa.prototype.addListener=function(e,t){return Pa(this,e,t,!1)},Sa.prototype.on=Sa.prototype.addListener,Sa.prototype.prependListener=function(e,t){return Pa(this,e,t,!0)},Sa.prototype.once=function(e,t){return Ia(t),this.on(e,ka(this,e,t)),this},Sa.prototype.prependOnceListener=function(e,t){return Ia(t),this.prependListener(e,ka(this,e,t)),this},Sa.prototype.removeListener=function(e,t){var r,n,i,o,s;if(Ia(t),void 0===(n=this._events))return this;if(void 0===(r=n[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(i=-1,o=r.length-1;o>=0;o--)if(r[o]===t||r[o].listener===t){s=r[o].listener,i=o;break}if(i<0)return this;0===i?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(r,i),1===r.length&&(n[e]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",e,s||t)}return this},Sa.prototype.off=Sa.prototype.removeListener,Sa.prototype.removeAllListeners=function(e){var t,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0===arguments.length){var i,o=Object.keys(r);for(n=0;n<o.length;++n)"removeListener"!==(i=o[n])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},Sa.prototype.listeners=function(e){return Oa(this,e,!0)},Sa.prototype.rawListeners=function(e){return Oa(this,e,!1)},Sa.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):Aa.call(e,t)},Sa.prototype.listenerCount=Aa,Sa.prototype.eventNames=function(){return this._eventsCount>0?va(this._events):[]},Ca.once=Ea;var ja=Ba,Ma=function(e,t){var r=new Na;return Ba(e,r,t),r},Na=Ca.EventEmitter;function Ba(e,t,r){Array.isArray(r)||(r=[r]);var n=[];return r.forEach((function(r){var i=function(){var e=[].slice.call(arguments);e.unshift(r),t.emit.apply(t,e)};n.push(i),e.on(r,i)})),function(){r.forEach((function(t,r){e.removeListener(t,n[r])}))}}ja.filter=Ma;var _a=Tt.includes,Ua=c((function(){return!Array(1).includes()}));function Fa(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Va(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?Fa(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fa(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}qt({target:"Array",proto:!0,forced:Ua},{includes:function(e){return _a(this,e,arguments.length>1?arguments[1]:void 0)}}),Dr("includes");const za=An.get("PeerConnectionStats"),Ga="stats";class $a extends Ca{constructor(e){super(),this.peer=e,this.stats=null,this.emitInterval=null,this.previousStats=null}init(){za.info("Initializing peer connection stats"),this.emitInterval=setInterval((async()=>{const e=await this.peer.getStats();this.parseStats(e),this.emit(Ga,this.stats)}),1e3)}parseStats(e){this.previousStats=this.stats;const t={audio:{inbounds:[],outbounds:[]},video:{inbounds:[],outbounds:[]},raw:e};for(const r of e.values())switch(r.type){case"outbound-rtp":qa(r,this.previousStats,t);break;case"inbound-rtp":Wa(r,this.previousStats,t);break;case"candidate-pair":r.nominated&&Xa(r,t)}this.stats=t}stop(){za.info("Stopping peer connection stats"),clearInterval(this.emitInterval)}}const qa=(e,t,r)=>{var n,i;const o=Ha(e),s=Ya(e.codecId,r.raw),a=Ja(e,o);a.totalBytesSent=e.bytesSent,a.id=e.id,a.mid=e.mid;const c=t?null!==(n=null===(i=t[o].outbounds.find((e=>e.id===a.id)))||void 0===i?void 0:i.totalBytesSent)&&void 0!==n?n:0:null;a.bitrate=c?8*(e.bytesSent-c):0,"video"===o&&(a.qualityLimitationReason=e.qualityLimitationReason),r[o].outbounds.push(Va(Va({},s),a))},Wa=(e,t,r)=>{let n=Ha(e);const i=Ya(e.codecId,r.raw);["audio","video"].includes(n)||(n=e.id.includes("Video")?"video":"audio");const o=Ja(e,n);if(o.totalBytesReceived=e.bytesReceived,o.totalPacketsReceived=e.packetsReceived,o.totalPacketsLost=e.packetsLost,o.jitter=e.jitter,o.id=e.id,o.mid=e.mid,o.bitrate=0,o.packetsLostRatioPerSecond=0,o.packetsLostDeltaPerSecond=0,t){const r=t[n].inbounds.find((e=>e.id===o.id));if(r){const t=r.totalBytesReceived;o.bitrate=8*(e.bytesReceived-t),o.packetsLostRatioPerSecond=Ka(o,r),o.packetsLostDeltaPerSecond=Za(o,r)}}r[n].inbounds.push(Va(Va({},i),o))},Xa=(e,t)=>{t.totalRoundTripTime=e.totalRoundTripTime,t.currentRoundTripTime=e.currentRoundTripTime,t.availableOutgoingBitrate=e.availableOutgoingBitrate,t.candidateType=t.raw.get(e.localCandidateId).candidateType},Ha=e=>e.mediaType||e.kind,Ya=(e,t)=>{var r;const{mimeType:n}=e&&null!==(r=t.get(e))&&void 0!==r?r:{};return{mimeType:n}},Ja=(e,t)=>{const r={};return"video"===t&&(r.framesPerSecond=e.framesPerSecond,r.frameHeight=e.frameHeight,r.frameWidth=e.frameWidth),r.timestamp=e.timestamp,r},Ka=(e,t)=>Za(e,t)/(e.totalPacketsReceived-t.totalPacketsReceived),Za=(e,t)=>e.totalPacketsLost-t.totalPacketsLost;var Qa=Ce("species"),ec=RegExp.prototype,tc=C("".charAt),rc=C("".charCodeAt),nc=C("".slice),ic=function(e){return function(t,r){var n,i,o=ns(A(t)),s=bt(r),a=o.length;return s<0||s>=a?e?"":void 0:(n=rc(o,s))<55296||n>56319||s+1===a||(i=rc(o,s+1))<56320||i>57343?e?tc(o,s):n:e?nc(o,s,s+2):i-56320+(n-55296<<10)+65536}},oc={codeAt:ic(!1),charAt:ic(!0)}.charAt,sc=function(e,t,r){return t+(r?oc(e,t).length:1)},ac=Math.floor,cc=C("".charAt),uc=C("".replace),lc=C("".slice),dc=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,fc=/\$([$&'`]|\d{1,2})/g,pc=function(e,t,r,n,i,o){var s=r+e.length,a=n.length,c=fc;return void 0!==i&&(i=de(i),c=dc),uc(o,c,(function(o,c){var u;switch(cc(c,0)){case"$":return"$";case"&":return e;case"`":return lc(t,0,r);case"'":return lc(t,s);case"<":u=i[lc(c,1,-1)];break;default:var l=+c;if(0===l)return o;if(l>a){var d=ac(l/10);return 0===d?o:d<=a?void 0===n[d-1]?cc(c,1):n[d-1]+cc(c,1):o}u=n[l-1]}return void 0===u?"":u}))},hc=TypeError,gc=function(e,t){var r=e.exec;if(N(r)){var n=f(r,e,t);return null!==n&&Ne(n),n}if("RegExp"===I(e))return f(ma,e,t);throw hc("RegExp#exec called on incompatible receiver")},mc=Ce("replace"),vc=Math.max,yc=Math.min,bc=C([].concat),wc=C([].push),Sc=C("".indexOf),Cc=C("".slice),Ec="$0"==="a".replace(/./,"$0"),xc=!!/./[mc]&&""===/./[mc]("a","$0");!function(e,t,r,n){var i=Ce(e),o=!c((function(){var t={};return t[i]=function(){return 7},7!=""[e](t)})),s=o&&!c((function(){var t=!1,r=/a/;return"split"===e&&((r={}).constructor={},r.constructor[Qa]=function(){return r},r.flags="",r[i]=/./[i]),r.exec=function(){return t=!0,null},r[i](""),!t}));if(!o||!s||r){var a=C(/./[i]),u=t(i,""[e],(function(e,t,r,n,i){var s=C(e),c=t.exec;return c===ma||c===ec.exec?o&&!i?{done:!0,value:a(t,r,n)}:{done:!0,value:s(r,t,n)}:{done:!1}}));gt(String.prototype,e,u[0]),gt(ec,i,u[1])}n&&$e(ec[i],"sham",!0)}("replace",(function(e,t,r){var n=xc?"$":"$0";return[function(e,r){var n=A(this),i=k(e)?void 0:ne(e,mc);return i?f(i,e,n,r):f(t,ns(n),e,r)},function(e,i){var o=Ne(this),s=ns(e);if("string"==typeof i&&-1===Sc(i,n)&&-1===Sc(i,"$<")){var a=r(t,o,s,i);if(a.done)return a.value}var c=N(i);c||(i=ns(i));var u=o.global;if(u){var l=o.unicode;o.lastIndex=0}for(var d=[];;){var f=gc(o,s);if(null===f)break;if(wc(d,f),!u)break;""===ns(f[0])&&(o.lastIndex=sc(s,Et(o.lastIndex),l))}for(var p,h="",g=0,m=0;m<d.length;m++){for(var v=ns((f=d[m])[0]),y=vc(yc(bt(f.index),s.length),0),b=[],w=1;w<f.length;w++)wc(b,void 0===(p=f[w])?p:String(p));var S=f.groups;if(c){var C=bc([v],b,y,s);void 0!==S&&wc(C,S);var E=ns(Yt(i,void 0,C))}else E=pc(v,s,y,b,S,i);y>=g&&(h+=Cc(s,g,y)+E,g=y+v.length)}return h+Cc(s,g)}]}),!!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}))||!Ec||xc);var Ic,Tc="\t\n\v\f\r                　\u2028\u2029\ufeff",Pc=C("".replace),Rc="["+Tc+"]",kc=RegExp("^"+Rc+Rc+"*"),Oc=RegExp(Rc+Rc+"*$"),Ac=function(e){return function(t){var r=ns(A(t));return 1&e&&(r=Pc(r,kc,"")),2&e&&(r=Pc(r,Oc,"")),r}},Dc={start:Ac(1),end:Ac(2),trim:Ac(3)},Lc=He.PROPER,jc=Dc.trim;qt({target:"String",proto:!0,forced:(Ic="trim",c((function(){return!!Tc[Ic]()||"​᠎"!=="​᠎"[Ic]()||Lc&&Tc[Ic].name!==Ic})))},{trim:function(){return jc(this)}});var Mc=Ce("matchAll"),Nc="RegExp String",Bc="RegExp String Iterator",_c=pt.set,Uc=pt.getterFor(Bc),Fc=RegExp.prototype,Vc=TypeError,zc=C("".indexOf),Gc=C("".matchAll),$c=!!Gc&&!c((function(){Gc("a",/./)})),qc=Hr((function(e,t,r,n){_c(this,{type:Bc,regexp:e,string:t,global:r,unicode:n,done:!1})}),Nc,(function(){var e=Uc(this);if(e.done)return cn(void 0,!0);var t=e.regexp,r=e.string,n=gc(t,r);return null===n?(e.done=!0,cn(void 0,!0)):e.global?(""===ns(n[0])&&(t.lastIndex=sc(r,Et(t.lastIndex),e.unicode)),cn(n,!1)):(e.done=!0,cn(n,!1))})),Wc=function(e){var t,r,n,i=Ne(this),o=ns(e),s=ni(i,RegExp),a=ns(Es(i));return t=new s(s===RegExp?i.source:i,a),r=!!~zc(a,"g"),n=!!~zc(a,"u"),t.lastIndex=Et(i.lastIndex),new qc(t,o,r,n)};qt({target:"String",proto:!0,forced:$c},{matchAll:function(e){var t,r,n,i=A(this);if(k(e)){if($c)return Gc(i,e)}else{if(ws(e)&&(t=ns(A(Es(e))),!~zc(t,"g")))throw Vc("`.matchAll` does not allow non-global regexes");if($c)return Gc(i,e);if(n=ne(e,Mc))return f(n,e,i)}return r=ns(i),new RegExp(e,"g")[Mc](r)}}),Mc in Fc||gt(Fc,Mc,Wc);var Xc=C([].reverse),Hc=[1,2];qt({target:"Array",proto:!0,forced:String(Hc)===String(Hc.reverse())},{reverse:function(){return Jt(this)&&(this.length=this.length),Xc(this)}});var Yc=n((function(e){var t=e.exports={v:[{name:"version",reg:/^(\d*)$/}],o:[{name:"origin",reg:/^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,names:["username","sessionId","sessionVersion","netType","ipVer","address"],format:"%s %s %d %s IP%d %s"}],s:[{name:"name"}],i:[{name:"description"}],u:[{name:"uri"}],e:[{name:"email"}],p:[{name:"phone"}],z:[{name:"timezones"}],r:[{name:"repeats"}],t:[{name:"timing",reg:/^(\d*) (\d*)/,names:["start","stop"],format:"%d %d"}],c:[{name:"connection",reg:/^IN IP(\d) (\S*)/,names:["version","ip"],format:"IN IP%d %s"}],b:[{push:"bandwidth",reg:/^(TIAS|AS|CT|RR|RS):(\d*)/,names:["type","limit"],format:"%s:%s"}],m:[{reg:/^(\w*) (\d*) ([\w/]*)(?: (.*))?/,names:["type","port","protocol","payloads"],format:"%s %d %s %s"}],a:[{push:"rtp",reg:/^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,names:["payload","codec","rate","encoding"],format:function(e){return e.encoding?"rtpmap:%d %s/%s/%s":e.rate?"rtpmap:%d %s/%s":"rtpmap:%d %s"}},{push:"fmtp",reg:/^fmtp:(\d*) ([\S| ]*)/,names:["payload","config"],format:"fmtp:%d %s"},{name:"control",reg:/^control:(.*)/,format:"control:%s"},{name:"rtcp",reg:/^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,names:["port","netType","ipVer","address"],format:function(e){return null!=e.address?"rtcp:%d %s IP%d %s":"rtcp:%d"}},{push:"rtcpFbTrrInt",reg:/^rtcp-fb:(\*|\d*) trr-int (\d*)/,names:["payload","value"],format:"rtcp-fb:%s trr-int %d"},{push:"rtcpFb",reg:/^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,names:["payload","type","subtype"],format:function(e){return null!=e.subtype?"rtcp-fb:%s %s %s":"rtcp-fb:%s %s"}},{push:"ext",reg:/^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,names:["value","direction","encrypt-uri","uri","config"],format:function(e){return"extmap:%d"+(e.direction?"/%s":"%v")+(e["encrypt-uri"]?" %s":"%v")+" %s"+(e.config?" %s":"")}},{name:"extmapAllowMixed",reg:/^(extmap-allow-mixed)/},{push:"crypto",reg:/^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,names:["id","suite","config","sessionConfig"],format:function(e){return null!=e.sessionConfig?"crypto:%d %s %s %s":"crypto:%d %s %s"}},{name:"setup",reg:/^setup:(\w*)/,format:"setup:%s"},{name:"connectionType",reg:/^connection:(new|existing)/,format:"connection:%s"},{name:"mid",reg:/^mid:([^\s]*)/,format:"mid:%s"},{name:"msid",reg:/^msid:(.*)/,format:"msid:%s"},{name:"ptime",reg:/^ptime:(\d*(?:\.\d*)*)/,format:"ptime:%d"},{name:"maxptime",reg:/^maxptime:(\d*(?:\.\d*)*)/,format:"maxptime:%d"},{name:"direction",reg:/^(sendrecv|recvonly|sendonly|inactive)/},{name:"icelite",reg:/^(ice-lite)/},{name:"iceUfrag",reg:/^ice-ufrag:(\S*)/,format:"ice-ufrag:%s"},{name:"icePwd",reg:/^ice-pwd:(\S*)/,format:"ice-pwd:%s"},{name:"fingerprint",reg:/^fingerprint:(\S*) (\S*)/,names:["type","hash"],format:"fingerprint:%s %s"},{push:"candidates",reg:/^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,names:["foundation","component","transport","priority","ip","port","type","raddr","rport","tcptype","generation","network-id","network-cost"],format:function(e){var t="candidate:%s %d %s %d %s %d typ %s";return t+=null!=e.raddr?" raddr %s rport %d":"%v%v",t+=null!=e.tcptype?" tcptype %s":"%v",null!=e.generation&&(t+=" generation %d"),t+=null!=e["network-id"]?" network-id %d":"%v",t+=null!=e["network-cost"]?" network-cost %d":"%v"}},{name:"endOfCandidates",reg:/^(end-of-candidates)/},{name:"remoteCandidates",reg:/^remote-candidates:(.*)/,format:"remote-candidates:%s"},{name:"iceOptions",reg:/^ice-options:(\S*)/,format:"ice-options:%s"},{push:"ssrcs",reg:/^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,names:["id","attribute","value"],format:function(e){var t="ssrc:%d";return null!=e.attribute&&(t+=" %s",null!=e.value&&(t+=":%s")),t}},{push:"ssrcGroups",reg:/^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,names:["semantics","ssrcs"],format:"ssrc-group:%s %s"},{name:"msidSemantic",reg:/^msid-semantic:\s?(\w*) (\S*)/,names:["semantic","token"],format:"msid-semantic: %s %s"},{push:"groups",reg:/^group:(\w*) (.*)/,names:["type","mids"],format:"group:%s %s"},{name:"rtcpMux",reg:/^(rtcp-mux)/},{name:"rtcpRsize",reg:/^(rtcp-rsize)/},{name:"sctpmap",reg:/^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,names:["sctpmapNumber","app","maxMessageSize"],format:function(e){return null!=e.maxMessageSize?"sctpmap:%s %s %s":"sctpmap:%s %s"}},{name:"xGoogleFlag",reg:/^x-google-flag:([^\s]*)/,format:"x-google-flag:%s"},{push:"rids",reg:/^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,names:["id","direction","params"],format:function(e){return e.params?"rid:%s %s %s":"rid:%s %s"}},{push:"imageattrs",reg:new RegExp("^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?"),names:["pt","dir1","attrs1","dir2","attrs2"],format:function(e){return"imageattr:%s %s %s"+(e.dir2?" %s %s":"")}},{name:"simulcast",reg:new RegExp("^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$"),names:["dir1","list1","dir2","list2"],format:function(e){return"simulcast:%s %s"+(e.dir2?" %s %s":"")}},{name:"simulcast_03",reg:/^simulcast:[\s\t]+([\S+\s\t]+)$/,names:["value"],format:"simulcast: %s"},{name:"framerate",reg:/^framerate:(\d+(?:$|\.\d+))/,format:"framerate:%s"},{name:"sourceFilter",reg:/^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,names:["filterMode","netType","addressTypes","destAddress","srcList"],format:"source-filter: %s %s %s %s %s"},{name:"bundleOnly",reg:/^(bundle-only)/},{name:"label",reg:/^label:(.+)/,format:"label:%s"},{name:"sctpPort",reg:/^sctp-port:(\d+)$/,format:"sctp-port:%s"},{name:"maxMessageSize",reg:/^max-message-size:(\d+)$/,format:"max-message-size:%s"},{push:"tsRefClocks",reg:/^ts-refclk:([^\s=]*)(?:=(\S*))?/,names:["clksrc","clksrcExt"],format:function(e){return"ts-refclk:%s"+(null!=e.clksrcExt?"=%s":"")}},{name:"mediaClk",reg:/^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,names:["id","mediaClockName","mediaClockValue","rateNumerator","rateDenominator"],format:function(e){var t="mediaclk:";return t+=null!=e.id?"id=%s %s":"%v%s",t+=null!=e.mediaClockValue?"=%s":"",t+=null!=e.rateNumerator?" rate=%s":"",t+=null!=e.rateDenominator?"/%s":""}},{name:"keywords",reg:/^keywds:(.+)$/,format:"keywds:%s"},{name:"content",reg:/^content:(.+)/,format:"content:%s"},{name:"bfcpFloorCtrl",reg:/^floorctrl:(c-only|s-only|c-s)/,format:"floorctrl:%s"},{name:"bfcpConfId",reg:/^confid:(\d+)/,format:"confid:%s"},{name:"bfcpUserId",reg:/^userid:(\d+)/,format:"userid:%s"},{name:"bfcpFloorId",reg:/^floorid:(.+) (?:m-stream|mstrm):(.+)/,names:["id","mStream"],format:"floorid:%s mstrm:%s"},{push:"invalid",names:["value"]}]};Object.keys(t).forEach((function(e){t[e].forEach((function(e){e.reg||(e.reg=/(.*)/),e.format||(e.format="%s")}))}))})),Jc=n((function(e,t){var r=function(e){return String(Number(e))===e?Number(e):e},n=function(e,t,n){var i=e.name&&e.names;e.push&&!t[e.push]?t[e.push]=[]:i&&!t[e.name]&&(t[e.name]={});var o=e.push?{}:i?t[e.name]:t;!function(e,t,n,i){if(i&&!n)t[i]=r(e[1]);else for(var o=0;o<n.length;o+=1)null!=e[o+1]&&(t[n[o]]=r(e[o+1]))}(n.match(e.reg),o,e.names,e.name),e.push&&t[e.push].push(o)},i=RegExp.prototype.test.bind(/^([a-z])=(.*)/);t.parse=function(e){var t={},r=[],o=t;return e.split(/(\r\n|\r|\n)/).filter(i).forEach((function(e){var t=e[0],i=e.slice(2);"m"===t&&(r.push({rtp:[],fmtp:[]}),o=r[r.length-1]);for(var s=0;s<(Yc[t]||[]).length;s+=1){var a=Yc[t][s];if(a.reg.test(i))return n(a,o,i)}})),t.media=r,t};var o=function(e,t){var n=t.split(/=(.+)/,2);return 2===n.length?e[n[0]]=r(n[1]):1===n.length&&t.length>1&&(e[n[0]]=void 0),e};t.parseParams=function(e){return e.split(/;\s?/).reduce(o,{})},t.parseFmtpConfig=t.parseParams,t.parsePayloads=function(e){return e.toString().split(" ").map(Number)},t.parseRemoteCandidates=function(e){for(var t=[],n=e.split(" ").map(r),i=0;i<n.length;i+=3)t.push({component:n[i],ip:n[i+1],port:n[i+2]});return t},t.parseImageAttributes=function(e){return e.split(" ").map((function(e){return e.substring(1,e.length-1).split(",").reduce(o,{})}))},t.parseSimulcastStreamList=function(e){return e.split(";").map((function(e){return e.split(",").map((function(e){var t,n=!1;return"~"!==e[0]?t=r(e):(t=r(e.substring(1,e.length)),n=!0),{scid:t,paused:n}}))}))}})),Kc=/%[sdv%]/g,Zc=function(e){var t=1,r=arguments,n=r.length;return e.replace(Kc,(function(e){if(t>=n)return e;var i=r[t];switch(t+=1,e){case"%%":return"%";case"%s":return String(i);case"%d":return Number(i);case"%v":return""}}))},Qc=function(e,t,r){var n=[e+"="+(t.format instanceof Function?t.format(t.push?r:r[t.name]):t.format)];if(t.names)for(var i=0;i<t.names.length;i+=1){var o=t.names[i];t.name?n.push(r[t.name][o]):n.push(r[t.names[i]])}else n.push(r[t.name]);return Zc.apply(null,n)},eu=["v","o","s","i","u","e","p","c","b","t","r","z","a"],tu=["i","c","b","a"],ru={write:function(e,t){t=t||{},null==e.version&&(e.version=0),null==e.name&&(e.name=" "),e.media.forEach((function(e){null==e.payloads&&(e.payloads="")}));var r=t.outerOrder||eu,n=t.innerOrder||tu,i=[];return r.forEach((function(t){Yc[t].forEach((function(r){r.name in e&&null!=e[r.name]?i.push(Qc(t,r,e)):r.push in e&&null!=e[r.push]&&e[r.push].forEach((function(e){i.push(Qc(t,r,e))}))}))})),e.media.forEach((function(e){i.push(Qc("m",Yc.m[0],e)),n.forEach((function(t){Yc[t].forEach((function(r){r.name in e&&null!=e[r.name]?i.push(Qc(t,r,e)):r.push in e&&null!=e[r.push]&&e[r.push].forEach((function(e){i.push(Qc(t,r,e))}))}))}))})),i.join("\r\n")+"\r\n"},parse:Jc.parse,parseParams:Jc.parseParams,parseFmtpConfig:Jc.parseFmtpConfig,parsePayloads:Jc.parsePayloads,parseRemoteCandidates:Jc.parseRemoteCandidates,parseImageAttributes:Jc.parseImageAttributes,parseSimulcastStreamList:Jc.parseSimulcastStreamList};class nu{constructor(e,t,r,n,i,o,s,a,c){this.foundation=e,this.componentId=t,this.transport=r,this.priority=n,this.address=i,this.port=o,this.type=s,this.relAddr=a,this.relPort=c}equals(e){return e.foundation===this.foundation&&e.componentId===this.componentId&&e.transport===this.transport&&e.priority===this.priority&&e.address===this.address&&e.port===this.port&&e.type===this.type&&e.relAddr===this.relAddr&&e.relPort===this.relPort}clone(){return new nu(this.foundation,this.componentId,this.transport,this.priority,this.address,this.port,this.type,this.relAddr,this.relPort)}plain(){const e={foundation:this.foundation,componentId:this.componentId,transport:this.transport,priority:this.priority,address:this.address,port:this.port,type:this.type};return this.relAddr&&(e.relAddr=this.relAddr),this.relPort&&(e.relPort=this.relPort),e}getFoundation(){return this.foundation}getComponentId(){return this.componentId}getTransport(){return this.transport}getPriority(){return this.priority}getAddress(){return this.address}getPort(){return this.port}getType(){return this.type}getRelAddr(){return this.relAddr}getRelPort(){return this.relPort}}nu.expand=function(e){return new nu(e.foundation,e.componentId,e.transport,e.priority,e.address,e.port,e.type,e.relAddr,e.relPort)};var iu=nu;class ou{constructor(e,t){this.id=e,this.params=t||[]}clone(){return new ou(this.id,this.params)}plain(){return this.params.length?{id:this.id,params:this.params}:{id:this.id}}getId(){return this.id}getParams(){return this.params}}ou.expand=function(e){return new ou(e.id,e.params)};var su=ou;class au{constructor(e,t,r){this.codec=e,this.type=t,this.params={},this.rtcpfbs=new Set,r&&this.addParams(r)}clone(){const e=new au(this.codec,this.type,this.params);this.hasRTX()&&e.setRTX(this.getRTX());for(const t of this.rtcpfbs)e.addRTCPFeedback(t.clone());return this.hasChannels()&&e.setChannels(this.getChannels()),e}plain(){const e={codec:this.codec,type:this.type};this.rtx&&(e.rtx=this.rtx),this.channels&&(e.channels=this.channels),Object.keys(this.params).length&&(e.params=this.params);for(const t of this.rtcpfbs)e.rtcpfbs||(e.rtcpfbs=[]),e.rtcpfbs.push(t.plain());return e}setRTX(e){this.rtx=e}getType(){return this.type}setType(e){this.type=e}getCodec(){return this.codec}getParams(){return this.params}addParams(e){for(const t in e)this.params[t]=e[t]}addParam(e,t){this.params[e]=t}hasParam(e){return this.params.hasOwnProperty(e)}getParam(e,t){return this.hasParam(e)?this.params[e]:""+t}hasRTX(){return this.rtx}getRTX(){return this.rtx}hasChannels(){return this.channels}getChannels(){return this.channels}setChannels(e){this.channels=e}addRTCPFeedback(e){this.rtcpfbs.add(e)}getRTCPFeedbacks(){return this.rtcpfbs}}au.expand=function(e){const t=new au(e.codec,e.type,e.params);e.rtx&&t.setRTX(e.rtx),e.channels&&t.setChannels(e.channels);for(let r=0;e.rtcpfbs&&r<e.rtcpfbs.length;++r){const n=su.expand(e.rtcpfbs[r]);t.addRTCPFeedback(n)}return t},au.MapFromNames=function(e,t,r){const n=new Map;let i=96;for(let o=0;o<e.length;++o){let s;const a=e[o].split(";"),c=a[0].toLowerCase().trim();s="pcmu"===c?0:"pcma"===c?8:++i;const u=new au(c,s);"opus"===c?u.setChannels(2):"multiopus"===c&&u.setChannels(6),t&&"ulpfec"!==c&&"flexfec-03"!==c&&"red"!==c&&u.setRTX(++i);for(let e=0;r&&e<r.length;++e)u.addRTCPFeedback(new su(r[e].id,r[e].params));for(let e=1;e<a.length;++e){let t=a[e].split("=");u.addParam(t[0].trim(),t[1].trim())}n.set(u.getCodec().toLowerCase(),u)}return n};var cu=au;var uu=function e(){var t=this;if(!(this instanceof e))return new(Function.prototype.bind.apply(e,[null].concat(Array.prototype.slice.call(arguments))));Array.from(arguments).forEach((function(e){t[e]=Symbol.for("MEDOOZE_SEMANTIC_SDP_"+e)}))};const lu=uu("ACTIVE","PASSIVE","ACTPASS","INACTIVE");lu.byValue=function(e){switch(e){case lu.ACTIVE:case lu.PASSIVE:case lu.ACTPASS:case lu.INACTIVE:return e}return lu[e.toUpperCase()]},lu.toString=function(e){switch(e){case lu.ACTIVE:return"active";case lu.PASSIVE:return"passive";case lu.ACTPASS:return"actpass";case lu.INACTIVE:return"inactive"}},lu.reverse=function(e){switch(e){case lu.ACTIVE:return lu.PASSIVE;case lu.PASSIVE:return lu.ACTIVE;case lu.ACTPASS:return lu.PASSIVE;case lu.INACTIVE:return lu.INACTIVE}};var du=lu;class fu{constructor(e,t,r){this.setup=e,this.hash=t,this.fingerprint=r}clone(){return new fu(this.setup,this.hash,this.fingerprint)}plain(){return{setup:du.toString(this.setup),hash:this.hash,fingerprint:this.fingerprint}}getFingerprint(){return this.fingerprint}getHash(){return this.hash}getSetup(){return this.setup}setSetup(e){this.setup=e}}fu.expand=function(e){return new fu(e.setup?du.byValue(e.setup):du.ACTPASS,e.hash,e.fingerprint)};var pu=fu;class hu{constructor(e,t,r,n){this.tag=e,this.suite=t,this.keyParams=r,this.sessionParams=n}clone(){return new hu(this.tag,this.suite,this.keyParams,this.sessionParams)}plain(){return{tag:this.tag,suite:this.suite,keyParams:this.keyParams,sessionParams:this.sessionParams}}getSessionParams(){return this.sessionParams}getKeyParams(){return this.keyParams}getSuite(){return this.suite}getTag(){return this.tag}}hu.expand=function(e){return new hu(e.tag,e.suite,e.keyParams,e.sessionParams)};for(var gu=hu,mu=function(e){var t=Iu(e),r=t[0],n=t[1];return 3*(r+n)/4-n},vu=function(e){var t,r,n=Iu(e),i=n[0],o=n[1],s=new Su(function(e,t,r){return 3*(t+r)/4-r}(0,i,o)),a=0,c=o>0?i-4:i;for(r=0;r<c;r+=4)t=wu[e.charCodeAt(r)]<<18|wu[e.charCodeAt(r+1)]<<12|wu[e.charCodeAt(r+2)]<<6|wu[e.charCodeAt(r+3)],s[a++]=t>>16&255,s[a++]=t>>8&255,s[a++]=255&t;2===o&&(t=wu[e.charCodeAt(r)]<<2|wu[e.charCodeAt(r+1)]>>4,s[a++]=255&t);1===o&&(t=wu[e.charCodeAt(r)]<<10|wu[e.charCodeAt(r+1)]<<4|wu[e.charCodeAt(r+2)]>>2,s[a++]=t>>8&255,s[a++]=255&t);return s},yu=function(e){for(var t,r=e.length,n=r%3,i=[],o=16383,s=0,a=r-n;s<a;s+=o)i.push(Tu(e,s,s+o>a?a:s+o));1===n?(t=e[r-1],i.push(bu[t>>2]+bu[t<<4&63]+"==")):2===n&&(t=(e[r-2]<<8)+e[r-1],i.push(bu[t>>10]+bu[t>>4&63]+bu[t<<2&63]+"="));return i.join("")},bu=[],wu=[],Su="undefined"!=typeof Uint8Array?Uint8Array:Array,Cu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Eu=0,xu=Cu.length;Eu<xu;++Eu)bu[Eu]=Cu[Eu],wu[Cu.charCodeAt(Eu)]=Eu;function Iu(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function Tu(e,t,r){for(var n,i,o=[],s=t;s<r;s+=3)n=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),o.push(bu[(i=n)>>18&63]+bu[i>>12&63]+bu[i>>6&63]+bu[63&i]);return o.join("")}wu["-".charCodeAt(0)]=62,wu["_".charCodeAt(0)]=63;var Pu={byteLength:mu,toByteArray:vu,fromByteArray:yu},Ru=function(e,t,r,n,i){var o,s,a=8*i-n-1,c=(1<<a)-1,u=c>>1,l=-7,d=r?i-1:0,f=r?-1:1,p=e[t+d];for(d+=f,o=p&(1<<-l)-1,p>>=-l,l+=a;l>0;o=256*o+e[t+d],d+=f,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=n;l>0;s=256*s+e[t+d],d+=f,l-=8);if(0===o)o=1-u;else{if(o===c)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),o-=u}return(p?-1:1)*s*Math.pow(2,o-n)},ku=function(e,t,r,n,i,o){var s,a,c,u=8*o-i-1,l=(1<<u)-1,d=l>>1,f=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,h=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=l):(s=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-s))<1&&(s--,c*=2),(t+=s+d>=1?f/c:f*Math.pow(2,1-d))*c>=2&&(s++,c/=2),s+d>=l?(a=0,s=l):s+d>=1?(a=(t*c-1)*Math.pow(2,i),s+=d):(a=t*Math.pow(2,d-1)*Math.pow(2,i),s=0));i>=8;e[r+p]=255&a,p+=h,a/=256,i-=8);for(s=s<<i|a,u+=i;u>0;e[r+p]=255&s,p+=h,s/=256,u-=8);e[r+p-h]|=128*g},Ou=n((function(e,t){const r="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=o,t.SlowBuffer=function(e){+e!=e&&(e=0);return o.alloc(+e)},t.INSPECT_MAX_BYTES=50;const n=2147483647;function i(e){if(e>n)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,o.prototype),t}function o(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return c(e)}return s(e,t,r)}function s(e,t,r){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!o.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const r=0|f(e,t);let n=i(r);const s=n.write(e,t);s!==r&&(n=n.slice(0,s));return n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(W(e,Uint8Array)){const t=new Uint8Array(e);return l(t.buffer,t.byteOffset,t.byteLength)}return u(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(W(e,ArrayBuffer)||e&&W(e.buffer,ArrayBuffer))return l(e,t,r);if("undefined"!=typeof SharedArrayBuffer&&(W(e,SharedArrayBuffer)||e&&W(e.buffer,SharedArrayBuffer)))return l(e,t,r);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return o.from(n,t,r);const s=function(e){if(o.isBuffer(e)){const t=0|d(e.length),r=i(t);return 0===r.length||e.copy(r,0,0,t),r}if(void 0!==e.length)return"number"!=typeof e.length||X(e.length)?i(0):u(e);if("Buffer"===e.type&&Array.isArray(e.data))return u(e.data)}(e);if(s)return s;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return o.from(e[Symbol.toPrimitive]("string"),t,r);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function a(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function c(e){return a(e),i(e<0?0:0|d(e))}function u(e){const t=e.length<0?0:0|d(e.length),r=i(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function l(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,o.prototype),n}function d(e){if(e>=n)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n.toString(16)+" bytes");return 0|e}function f(e,t){if(o.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||W(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return G(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return $(e).length;default:if(i)return n?-1:G(e).length;t=(""+t).toLowerCase(),i=!0}}function p(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return P(this,t,r);case"utf8":case"utf-8":return E(this,t,r);case"ascii":return I(this,t,r);case"latin1":case"binary":return T(this,t,r);case"base64":return C(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function h(e,t,r){const n=e[t];e[t]=e[r],e[r]=n}function g(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),X(r=+r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=o.from(t,n)),o.isBuffer(t))return 0===t.length?-1:m(e,t,r,n,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):m(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function m(e,t,r,n,i){let o,s=1,a=e.length,c=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;s=2,a/=2,c/=2,r/=2}function u(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(i){let n=-1;for(o=r;o<a;o++)if(u(e,o)===u(t,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===c)return n*s}else-1!==n&&(o-=o-n),n=-1}else for(r+c>a&&(r=a-c),o=r;o>=0;o--){let r=!0;for(let n=0;n<c;n++)if(u(e,o+n)!==u(t,n)){r=!1;break}if(r)return o}return-1}function v(e,t,r,n){r=Number(r)||0;const i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;const o=t.length;let s;for(n>o/2&&(n=o/2),s=0;s<n;++s){const n=parseInt(t.substr(2*s,2),16);if(X(n))return s;e[r+s]=n}return s}function y(e,t,r,n){return q(G(t,e.length-r),e,r,n)}function b(e,t,r,n){return q(function(e){const t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function w(e,t,r,n){return q($(t),e,r,n)}function S(e,t,r,n){return q(function(e,t){let r,n,i;const o=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)r=e.charCodeAt(s),n=r>>8,i=r%256,o.push(i),o.push(n);return o}(t,e.length-r),e,r,n)}function C(e,t,r){return 0===t&&r===e.length?Pu.fromByteArray(e):Pu.fromByteArray(e.slice(t,r))}function E(e,t,r){r=Math.min(e.length,r);const n=[];let i=t;for(;i<r;){const t=e[i];let o=null,s=t>239?4:t>223?3:t>191?2:1;if(i+s<=r){let r,n,a,c;switch(s){case 1:t<128&&(o=t);break;case 2:r=e[i+1],128==(192&r)&&(c=(31&t)<<6|63&r,c>127&&(o=c));break;case 3:r=e[i+1],n=e[i+2],128==(192&r)&&128==(192&n)&&(c=(15&t)<<12|(63&r)<<6|63&n,c>2047&&(c<55296||c>57343)&&(o=c));break;case 4:r=e[i+1],n=e[i+2],a=e[i+3],128==(192&r)&&128==(192&n)&&128==(192&a)&&(c=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a,c>65535&&c<1114112&&(o=c))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=s}return function(e){const t=e.length;if(t<=x)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=x));return r}(n)}t.kMaxLength=n,o.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),o.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(o.prototype,"parent",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.buffer}}),Object.defineProperty(o.prototype,"offset",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.byteOffset}}),o.poolSize=8192,o.from=function(e,t,r){return s(e,t,r)},Object.setPrototypeOf(o.prototype,Uint8Array.prototype),Object.setPrototypeOf(o,Uint8Array),o.alloc=function(e,t,r){return function(e,t,r){return a(e),e<=0?i(e):void 0!==t?"string"==typeof r?i(e).fill(t,r):i(e).fill(t):i(e)}(e,t,r)},o.allocUnsafe=function(e){return c(e)},o.allocUnsafeSlow=function(e){return c(e)},o.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==o.prototype},o.compare=function(e,t){if(W(e,Uint8Array)&&(e=o.from(e,e.offset,e.byteLength)),W(t,Uint8Array)&&(t=o.from(t,t.offset,t.byteLength)),!o.isBuffer(e)||!o.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return o.alloc(0);let r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;const n=o.allocUnsafe(t);let i=0;for(r=0;r<e.length;++r){let t=e[r];if(W(t,Uint8Array))i+t.length>n.length?(o.isBuffer(t)||(t=o.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else{if(!o.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(n,i)}i+=t.length}return n},o.byteLength=f,o.prototype._isBuffer=!0,o.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)h(this,t,t+1);return this},o.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)h(this,t,t+3),h(this,t+1,t+2);return this},o.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)h(this,t,t+7),h(this,t+1,t+6),h(this,t+2,t+5),h(this,t+3,t+4);return this},o.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?E(this,0,e):p.apply(this,arguments)},o.prototype.toLocaleString=o.prototype.toString,o.prototype.equals=function(e){if(!o.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===o.compare(this,e)},o.prototype.inspect=function(){let e="";const r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},r&&(o.prototype[r]=o.prototype.inspect),o.prototype.compare=function(e,t,r,n,i){if(W(e,Uint8Array)&&(e=o.from(e,e.offset,e.byteLength)),!o.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return-1;if(t>=r)return 1;if(this===e)return 0;let s=(i>>>=0)-(n>>>=0),a=(r>>>=0)-(t>>>=0);const c=Math.min(s,a),u=this.slice(n,i),l=e.slice(t,r);for(let e=0;e<c;++e)if(u[e]!==l[e]){s=u[e],a=l[e];break}return s<a?-1:a<s?1:0},o.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},o.prototype.indexOf=function(e,t,r){return g(this,e,t,r,!0)},o.prototype.lastIndexOf=function(e,t,r){return g(this,e,t,r,!1)},o.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}const i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let o=!1;for(;;)switch(n){case"hex":return v(this,e,t,r);case"utf8":case"utf-8":return y(this,e,t,r);case"ascii":case"latin1":case"binary":return b(this,e,t,r);case"base64":return w(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,e,t,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const x=4096;function I(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function T(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function P(e,t,r){const n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=H[e[n]];return i}function R(e,t,r){const n=e.slice(t,r);let i="";for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}function k(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function O(e,t,r,n,i,s){if(!o.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function A(e,t,r,n,i){U(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,r}function D(e,t,r,n,i){U(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r+7]=o,o>>=8,e[r+6]=o,o>>=8,e[r+5]=o,o>>=8,e[r+4]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=s,s>>=8,e[r+2]=s,s>>=8,e[r+1]=s,s>>=8,e[r]=s,r+8}function L(e,t,r,n,i,o){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function j(e,t,r,n,i){return t=+t,r>>>=0,i||L(e,0,r,4),ku(e,t,r,n,23,4),r+4}function M(e,t,r,n,i){return t=+t,r>>>=0,i||L(e,0,r,8),ku(e,t,r,n,52,8),r+8}o.prototype.slice=function(e,t){const r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);const n=this.subarray(e,t);return Object.setPrototypeOf(n,o.prototype),n},o.prototype.readUintLE=o.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||k(e,t,this.length);let n=this[e],i=1,o=0;for(;++o<t&&(i*=256);)n+=this[e+o]*i;return n},o.prototype.readUintBE=o.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||k(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},o.prototype.readUint8=o.prototype.readUInt8=function(e,t){return e>>>=0,t||k(e,1,this.length),this[e]},o.prototype.readUint16LE=o.prototype.readUInt16LE=function(e,t){return e>>>=0,t||k(e,2,this.length),this[e]|this[e+1]<<8},o.prototype.readUint16BE=o.prototype.readUInt16BE=function(e,t){return e>>>=0,t||k(e,2,this.length),this[e]<<8|this[e+1]},o.prototype.readUint32LE=o.prototype.readUInt32LE=function(e,t){return e>>>=0,t||k(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},o.prototype.readUint32BE=o.prototype.readUInt32BE=function(e,t){return e>>>=0,t||k(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},o.prototype.readBigUInt64LE=Y((function(e){F(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||V(e,this.length-8);const n=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+r*2**24;return BigInt(n)+(BigInt(i)<<BigInt(32))})),o.prototype.readBigUInt64BE=Y((function(e){F(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||V(e,this.length-8);const n=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),o.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||k(e,t,this.length);let n=this[e],i=1,o=0;for(;++o<t&&(i*=256);)n+=this[e+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*t)),n},o.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||k(e,t,this.length);let n=t,i=1,o=this[e+--n];for(;n>0&&(i*=256);)o+=this[e+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*t)),o},o.prototype.readInt8=function(e,t){return e>>>=0,t||k(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},o.prototype.readInt16LE=function(e,t){e>>>=0,t||k(e,2,this.length);const r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},o.prototype.readInt16BE=function(e,t){e>>>=0,t||k(e,2,this.length);const r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},o.prototype.readInt32LE=function(e,t){return e>>>=0,t||k(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},o.prototype.readInt32BE=function(e,t){return e>>>=0,t||k(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},o.prototype.readBigInt64LE=Y((function(e){F(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||V(e,this.length-8);const n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),o.prototype.readBigInt64BE=Y((function(e){F(e>>>=0,"offset");const t=this[e],r=this[e+7];void 0!==t&&void 0!==r||V(e,this.length-8);const n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+r)})),o.prototype.readFloatLE=function(e,t){return e>>>=0,t||k(e,4,this.length),Ru(this,e,!0,23,4)},o.prototype.readFloatBE=function(e,t){return e>>>=0,t||k(e,4,this.length),Ru(this,e,!1,23,4)},o.prototype.readDoubleLE=function(e,t){return e>>>=0,t||k(e,8,this.length),Ru(this,e,!0,52,8)},o.prototype.readDoubleBE=function(e,t){return e>>>=0,t||k(e,8,this.length),Ru(this,e,!1,52,8)},o.prototype.writeUintLE=o.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){O(this,e,t,r,Math.pow(2,8*r)-1,0)}let i=1,o=0;for(this[t]=255&e;++o<r&&(i*=256);)this[t+o]=e/i&255;return t+r},o.prototype.writeUintBE=o.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){O(this,e,t,r,Math.pow(2,8*r)-1,0)}let i=r-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+r},o.prototype.writeUint8=o.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,1,255,0),this[t]=255&e,t+1},o.prototype.writeUint16LE=o.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},o.prototype.writeUint16BE=o.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},o.prototype.writeUint32LE=o.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},o.prototype.writeUint32BE=o.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},o.prototype.writeBigUInt64LE=Y((function(e,t=0){return A(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),o.prototype.writeBigUInt64BE=Y((function(e,t=0){return D(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),o.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);O(this,e,t,r,n-1,-n)}let i=0,o=1,s=0;for(this[t]=255&e;++i<r&&(o*=256);)e<0&&0===s&&0!==this[t+i-1]&&(s=1),this[t+i]=(e/o>>0)-s&255;return t+r},o.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){const n=Math.pow(2,8*r-1);O(this,e,t,r,n-1,-n)}let i=r-1,o=1,s=0;for(this[t+i]=255&e;--i>=0&&(o*=256);)e<0&&0===s&&0!==this[t+i+1]&&(s=1),this[t+i]=(e/o>>0)-s&255;return t+r},o.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},o.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},o.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},o.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},o.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||O(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},o.prototype.writeBigInt64LE=Y((function(e,t=0){return A(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),o.prototype.writeBigInt64BE=Y((function(e,t=0){return D(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),o.prototype.writeFloatLE=function(e,t,r){return j(this,e,t,!0,r)},o.prototype.writeFloatBE=function(e,t,r){return j(this,e,t,!1,r)},o.prototype.writeDoubleLE=function(e,t,r){return M(this,e,t,!0,r)},o.prototype.writeDoubleBE=function(e,t,r){return M(this,e,t,!1,r)},o.prototype.copy=function(e,t,r,n){if(!o.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);const i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},o.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!o.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){const t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;let i;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{const s=o.isBuffer(e)?e:o.from(e,n),a=s.length;if(0===a)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=s[i%a]}return this};const N={};function B(e,t,r){N[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function _(e){let t="",r=e.length;const n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function U(e,t,r,n,i,o){if(e>r||e<t){const n="bigint"==typeof t?"n":"";let i;throw i=o>3?0===t||t===BigInt(0)?`>= 0${n} and < 2${n} ** ${8*(o+1)}${n}`:`>= -(2${n} ** ${8*(o+1)-1}${n}) and < 2 ** ${8*(o+1)-1}${n}`:`>= ${t}${n} and <= ${r}${n}`,new N.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,r){F(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||V(t,e.length-(r+1))}(n,i,o)}function F(e,t){if("number"!=typeof e)throw new N.ERR_INVALID_ARG_TYPE(t,"number",e)}function V(e,t,r){if(Math.floor(e)!==e)throw F(e,r),new N.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new N.ERR_BUFFER_OUT_OF_BOUNDS;throw new N.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}B("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),B("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),B("ERR_OUT_OF_RANGE",(function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>2**32?i=_(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=_(i)),i+="n"),n+=` It must be ${t}. Received ${i}`,n}),RangeError);const z=/[^+/0-9A-Za-z-_]/g;function G(e,t){let r;t=t||1/0;const n=e.length;let i=null;const o=[];for(let s=0;s<n;++s){if(r=e.charCodeAt(s),r>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(t-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function $(e){return Pu.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(z,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function q(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function W(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function X(e){return e!=e}const H=function(){const e="0123456789abcdef",t=new Array(256);for(let r=0;r<16;++r){const n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function Y(e){return"undefined"==typeof BigInt?J:e}function J(){throw new Error("BigInt not supported")}})),Au=n((function(e,t){var r=Ou.Buffer;function n(e,t){for(var r in e)t[r]=e[r]}function i(e,t,n){return r(e,t,n)}r.from&&r.alloc&&r.allocUnsafe&&r.allocUnsafeSlow?e.exports=Ou:(n(Ou,t),t.Buffer=i),i.prototype=Object.create(r.prototype),n(r,i),i.from=function(e,t,n){if("number"==typeof e)throw new TypeError("Argument must not be a number");return r(e,t,n)},i.alloc=function(e,t,n){if("number"!=typeof e)throw new TypeError("Argument must be a number");var i=r(e);return void 0!==t?"string"==typeof n?i.fill(t,n):i.fill(t):i.fill(0),i},i.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return r(e)},i.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return Ou.SlowBuffer(e)}})),Du=n((function(e){var t=65536,n=4294967295;var i=Au.Buffer,o=r.crypto||r.msCrypto;o&&o.getRandomValues?e.exports=function(e,r){if(e>n)throw new RangeError("requested too many random bytes");var s=i.allocUnsafe(e);if(e>0)if(e>t)for(var a=0;a<e;a+=t)o.getRandomValues(s.slice(a,a+t));else o.getRandomValues(s);if("function"==typeof r)return process.nextTick((function(){r(null,s)}));return s}:e.exports=function(){throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")}}));class Lu{constructor(e,t){this.ufrag=e,this.pwd=t,this.lite=!1,this.endOfCandidates=!1}clone(){const e=new Lu(this.ufrag,this.pwd);return e.setLite(this.lite),e.setEndOfCandidates(this.endOfCandidates),e}plain(){const e={ufrag:this.ufrag,pwd:this.pwd};return this.lite&&(e.lite=this.lite),this.endOfCandidates&&(e.endOfCandidates=this.endOfCandidates),e}getUfrag(){return this.ufrag}getPwd(){return this.pwd}isLite(){return this.lite}setLite(e){this.lite=e}isEndOfCandidates(){return this.endOfCandidates}setEndOfCandidates(e){this.endOfCandidates=e}}Lu.generate=function(e){const t=new Lu,r=Du(8),n=Du(24);return t.ufrag=r.toString("hex"),t.pwd=n.toString("hex"),t.lite=e,t},Lu.expand=function(e){const t=new Lu(e.ufrag,e.pwd);return t.setLite(e.lite),t.setEndOfCandidates(e.endOfCandidates),t};var ju=Lu;const Mu=uu("SEND","RECV");Mu.byValue=function(e){return Mu[e.toUpperCase()]},Mu.toString=function(e){switch(e){case Mu.SEND:return"send";case Mu.RECV:return"recv"}},Mu.reverse=function(e){switch(e){case Mu.SEND:return Mu.RECV;case Mu.RECV:return Mu.SEND}};var Nu=Mu;class Bu{constructor(e,t){this.id=e,this.direction=t,this.formats=[],this.params=new Map}clone(){var e=new Bu(this.id,this.direction);return e.setFormats(this.formats),e.setParams(this.params),e}plain(){var e={id:this.id,direction:Nu.toString(this.direction)};for(var[t,r]of(this.formats&&(e.formats=this.formats),this.params.entries()))e.params||(e.params={}),e.params[t]=r;return e}getId(){return this.id}getDirection(){return this.direction}setDirection(e){this.direction=e}getFormats(){return this.formats}setFormats(e){this.formats=[];for(let t=0;t<e.length;++t)this.formats.push(parseInt(e[t]))}getParams(){return this.params}setParams(e){this.params=new Map(e)}addParam(e,t){this.params.set(e,t)}getDirection(){return this.direction}setDirection(e){this.direction=e}}Bu.expand=function(e){const t=new Bu(e.id,Nu.byValue(e.direction));for(let r in e.params)t.addParam(r,e.params[r]);return e.formats&&t.setFormats(e.formats),t};var _u=Bu;class Uu{constructor(e,t){this.paused=t,this.id=e}clone(){return new Uu(this.id,this.paused)}plain(){return{id:this.id,paused:this.paused}}isPaused(){return this.paused}getId(){return this.id}}Uu.expand=function(e){return new Uu(e.id,e.paused)};var Fu=Uu;class Vu{constructor(){this.send=[],this.recv=[]}clone(){const e=new Vu;for(let t=0;t<this.send.length;++t){let r=[];for(let e=0;t<this.send[e].length;++t)r.push(this.send[t][e].clone());e.addSimulcastAlternativeStreams(Nu.SEND,r)}for(let t=0;t<this.recv.length;++t){let r=[];for(let e=0;t<this.recv[e].length;++t)r.push(this.recv[t][e].clone());e.addSimulcastAlternativeStreams(Nu.RECV,r)}return e}plain(){const e={send:[],recv:[]};for(let t=0;t<this.send.length;++t){let r=[];for(let e=0;e<this.send[t].length;++e)r.push(this.send[t][e].plain());e.send.push(r)}for(let t=0;t<this.recv.length;++t){let r=[];for(let e=0;e<this.recv[t].length;++e)r.push(this.recv[t][e].plain());e.recv.push(r)}return e}addSimulcastAlternativeStreams(e,t){return e===Nu.SEND?this.send.push(t):this.recv.push(t)}addSimulcastStream(e,t){return e===Nu.SEND?this.send.push([t]):this.recv.push([t])}getSimulcastStreams(e){return e===Nu.SEND?this.send:this.recv}}Vu.expand=function(e){const t=new Vu;for(let r=0;r<e.send.length;++r){let n=[];for(let t=0;t<e.send[r].length;++t)n.push(Fu.expand(e.send[r][t]));t.addSimulcastAlternativeStreams(Nu.SEND,n)}for(let r=0;r<e.recv.length;++r){let n=[];for(let t=0;t<e.recv[r].length;++t)n.push(Fu.expand(e.recv[r][t]));t.addSimulcastAlternativeStreams(Nu.RECV,n)}return t};var zu=Vu;const Gu=uu("SENDRECV","SENDONLY","RECVONLY","INACTIVE");Gu.byValue=function(e){return Gu[e.toUpperCase()]},Gu.toString=function(e){switch(e){case Gu.SENDRECV:return"sendrecv";case Gu.SENDONLY:return"sendonly";case Gu.RECVONLY:return"recvonly";case Gu.INACTIVE:return"inactive"}},Gu.reverse=function(e){switch(e){case Gu.SENDRECV:return Gu.SENDRECV;case Gu.SENDONLY:return Gu.RECVONLY;case Gu.RECVONLY:return Gu.SENDONLY;case Gu.INACTIVE:return Gu.INACTIVE}};var $u=Gu;class qu{constructor(e,t){this.port=e,this.maxMessageSize=t}clone(){return new qu(this.port,this.maxMessageSize)}plain(){return{port:this.port,maxMessageSize:this.maxMessageSize}}getPort(){return this.port}getMaxMessageSize(){return this.maxMessageSize}}qu.expand=function(e){return new qu(e.port,e.maxMessageSize)};var Wu=qu;class Xu{constructor(e,t){this.id=e,this.type=t,this.direction=$u.SENDRECV,this.extensions=new Map,this.codecs=new Map,this.rids=new Map,this.simulcast=null,this.bitrate=0,this.control=null,this.dataChannel=null}clone(){const e=new Xu(this.id,this.type);e.setDirection(this.direction),e.setBitrate(this.bitrate);for(const t of this.codecs.values())e.addCodec(t.clone());for(const[t,r]of this.extensions.entries())e.addExtension(t,r);for(const t of this.rids.values())e.addRID(t.clone());return this.simulcast&&e.setSimulcast(this.simulcast.clone()),this.control&&e.setControl(this.control),this.dataChannel&&e.setDatachannel(this.dataChannel.clone()),e}plain(){const e={id:this.id,type:this.type,direction:$u.toString(this.direction),codecs:[]};this.dataChannel&&(e.dataChannel=this.dataChannel.plain()),this.bitrate&&(e.bitrate=this.bitrate);for(const t of this.codecs.values())e.codecs.push(t.plain());for(const[t,r]of this.extensions.entries())e.extensions||(e.extensions={}),e.extensions[t]=r;for(const t of this.rids.values())e.rids||(e.rids=[]),e.rids.push(t.plain());return this.simulcast&&(e.simulcast=this.simulcast.plain()),this.control&&(e.control=this.control),e}getType(){return this.type}getId(){return this.id}setId(e){this.id=e}addExtension(e,t){this.extensions.set(e,t)}addRID(e){this.rids.set(e.getId(),e)}addCodec(e){this.codecs.set(e.getType(),e)}setCodecs(e){this.codecs=e}getCodecForType(e){return this.codecs.get(e)}getCodec(e){for(const t of this.codecs.values())if(t.getCodec().toLowerCase()===e.toLowerCase())return t;return null}hasCodec(e){return null!==this.getCodec(e)}getCodecs(){return this.codecs}hasRTX(){for(const e of this.codecs.values())if(e.hasRTX())return!0;return!1}getExtensions(){return this.extensions}getRIDs(){return this.rids}getRID(e){return this.rids.get(e)}getBitrate(){return this.bitrate}setBitrate(e){this.bitrate=e}getDirection(){return this.direction}setDirection(e){this.direction=e}hasControl(){return!!this.control}getControl(){return this.control}setControl(e){this.control=e}hasDataChannel(){return!!this.dataChannel}getDataChannel(){return this.dataChannel}setDataChannel(e){this.dataChannel=e}answer(e){const t=new Xu(this.id,this.type);if(e){if(t.setDirection($u.reverse(this.direction)),e.codecs){let r;r=Array.isArray(e.codecs)?cu.MapFromNames(e.codecs,e.rtx,e.rtcpfbs):e.codecs;for(let e of this.codecs.values())if(r.has(e.getCodec().toLowerCase())){const n=r.get(e.getCodec().toLowerCase());if("h264"===n.getCodec()&&n.hasParam("packetization-mode")&&n.getParam("packetization-mode")!=e.getParam("packetization-mode","0"))continue;if("h264"===n.getCodec()&&n.hasParam("profile-level-id")&&e.hasParam("profile-level-id")&&n.getParam("profile-level-id")!=e.getParam("profile-level-id"))continue;if("multiopus"===n.getCodec()&&n.hasParam("num_streams")&&e.hasParam("num_streams")&&n.getParam("num_streams")!=e.getParam("num_streams"))continue;const i=n.clone();i.setType(e.getType()),i.hasRTX()&&i.setRTX(e.getRTX()),e.hasChannels()&&i.setChannels(e.getChannels()),i.addParams(e.getParams()),t.addCodec(i)}}const n=new Set(e.extensions);for(let[e,r]of this.extensions)n.has(r)&&t.addExtension(e,r);if(e.simulcast&&this.simulcast){const e=new zu,n=this.simulcast.getSimulcastStreams(Nu.SEND);if(n)for(let t=0;t<n.length;++t){var r=[];for(let e=0;e<n[t].length;++e)r.push(n[t][e].clone());e.addSimulcastAlternativeStreams(Nu.RECV,r)}const i=this.simulcast.getSimulcastStreams(Nu.RECV);if(i)for(let t=0;t<i.length;++t){r=[];for(let e=0;e<i[t].length;++e)r.push(i[t][e].clone());e.addSimulcastAlternativeStreams(Nu.SEND,r)}for(const e of this.rids.values()){const r=e.clone();r.setDirection(Nu.reverse(e.getDirection())),t.addRID(r)}t.setSimulcast(e)}if(e.dataChannel&&this.dataChannel){const r=new Wu(this.dataChannel.getPort(),e.dataChannel.maxMessageSize?e.dataChannel.maxMessageSize:this.dataChannel.getMaxMessageSize());t.setDataChannel(r)}}else t.setDirection($u.INACTIVE);return t}getSimulcast(){return this.simulcast}setSimulcast(e){this.simulcast=e}}Xu.create=function(e,t){const r=new Xu(e,e);return t?t.codecs&&(Array.isArray(t.codecs)?r.setCodecs(cu.MapFromNames(t.codecs,t.rtx,t.rtcpfbs)):r.setCodecs(t.codecs)):r.setDirection($u.INACTIVE),r},Xu.expand=function(e){const t=new Xu(e.id,e.type);if(e.direction&&t.setDirection($u.byValue(e.direction)),t.setBitrate(e.bitrate),e.dataChannel){const r=Wu.expand(e.dataChannel);r&&t.setDataChannel(r)}for(let r in e.extensions)t.addExtension(r,e.extensions[r]);for(let r=0;e.codecs&&r<e.codecs.length;++r){const n=cu.expand(e.codecs[r]);n&&t.addCodec(n)}for(let r=0;e.rids&&r<e.rids.length;++r){const n=_u.expand(e.rids[r]);t.addRID(n)}return e.simulcast&&t.setSimulcast(zu.expand(e.simulcast)),e.control&&t.setControl(e.control),t};var Hu=Xu;class Yu{constructor(e,t){this.semantics=e,this.ssrcs=[];for(let e=0;e<t.length;++e)this.ssrcs.push(parseInt(t[e]))}clone(){return new Yu(this.semantics,this.ssrcs)}plain(){const e={semantics:this.semantics,ssrcs:[]};for(let t=0;t<this.ssrcs.length;++t)e.ssrcs.push(this.ssrcs[t]);return e}getSemantics(){return this.semantics}getSSRCs(){return this.ssrcs}}Yu.expand=function(e){return new Yu(e.semantics,e.ssrcs)};var Ju=Yu;class Ku{constructor(e){this.ssrc=e}clone(){const e=new Ku(this.ssrc);e.setCName(this.cname),e.setStreamId(this.streamId),e.setTrackId(this.trackId)}plain(){const e={ssrc:this.ssrc};return this.cname&&(e.cname=this.cname),this.streamId&&(e.streamId=this.streamId),this.trackId&&(e.trackid=this.trackId),e}getCName(){return this.cname}setCName(e){this.cname=e}getStreamId(){return this.streamId}setStreamId(e){this.streamId=e}getTrackId(){return this.trackId}setTrackId(e){this.trackId=e}getSSRC(){return this.ssrc}}Ku.expand=function(e){const t=new Ku(e.ssrc);return t.setCName(e.cname),t.setStreamId(e.streamId),t.setTrackId(e.trackId),t};var Zu=Ku;class Qu{constructor(e,t){this.id=e,this.paused=t,this.codecs=new Map,this.params=new Map}clone(){var e=new Qu(this.id,this.paused);for(let t of this.codecs.values())e.addCodec(t.clone());return e.setParams(this.params),e}plain(){var e={id:this.id,paused:this.paused,codecs:{},params:{}};for(var[t,r]of this.codecs.entries())e.codecs[t]=r.plain();for(var[t,n]of this.params.entries())e.params[t]=n;return e}getId(){return this.id}getCodecs(){return this.codecs}addCodec(e){this.codecs.set(e.getType(),e)}getParams(){return this.params}setParams(e){this.params=new Map(e)}addParam(e,t){this.params.set(e,t)}isPaused(){return this.paused}}Qu.expand=function(e){const t=new Qu(e.id,e.paused);for(let r in e.codecs)t.addCodec(cu.expand(e.codecs[r]));for(let r in e.params)t.addParam(r,e.params[r]);return t};var el=Qu;class tl{constructor(e,t){this.media=e,this.id=t,this.ssrcs=[],this.groups=[],this.encodings=[]}clone(){const e=new tl(this.media,this.id);this.mediaId&&e.setMediaId(this.mediaId);for(let t=0;t<this.ssrcs.length;++t)e.addSSRC(this.ssrcs[t]);for(let t=0;t<this.groups.length;++t)e.addSourceGroup(this.groups[t].clone());for(let t=0;t<this.encodings.length;++t){const r=[];for(let e=0;e<this.encodings[t].length;++e)r.push(this.encodings[t][e].clone());e.addAlternativeEncodings(r)}return e}plain(){const e={media:this.media,id:this.id,ssrcs:[]};this.mediaId&&(e.mediaId=this.mediaId);for(let t=0;t<this.ssrcs.length;++t)e.ssrcs.push(this.ssrcs[t]);for(let t=0;t<this.groups.length;++t)e.groups||(e.groups=[]),e.groups.push(this.groups[t].plain());for(let t=0;t<this.encodings.length;++t){const r=[];for(let e=0;e<this.encodings[t].length;++e)r.push(this.encodings[t][e].plain());r.length&&(e.encodings||(e.encodings=[]),e.encodings.push(r))}return e}getMedia(){return this.media}setMediaId(e){this.mediaId=e}getMediaId(){return this.mediaId}getId(){return this.id}addSSRC(e){this.ssrcs.push(e)}getSSRCs(){return this.ssrcs}addSourceGroup(e){this.groups.push(e)}getSourceGroup(e){for(const t of this.groups)if(t.getSemantics().toLowerCase()===e.toLowerCase())return t;return null}getSourceGroups(){return this.groups}hasSourceGroup(e){for(const t of this.groups)if(t.getSemantics().toLowerCase()===e.toLowerCase())return!0;return!1}getEncodings(){return this.encodings}addEncoding(e){this.encodings.push([e])}addAlternativeEncodings(e){this.encodings.push(e)}setEncodings(e){this.encodings=e}}tl.expand=function(e){const t=new tl(e.media,e.id);e.mediaId&&t.setMediaId(e.mediaId);for(let r=0;e.ssrcs&&r<e.ssrcs.length;++r)t.addSSRC(e.ssrcs[r]);for(let r=0;e.groups&&r<e.groups.length;++r)t.addSourceGroup(Ju.expand(e.groups[r]));for(let r=0;e.encodings&&r<e.encodings.length;++r){const n=[];for(let t=0;t<e.encodings[r].length;++t)n.push(el.expand(e.encodings[r][t]));t.addAlternativeEncodings(n)}return t};var rl=tl;class nl{constructor(e){this.id=e,this.tracks=new Map}clone(){const e=new nl(this.id);for(const t of this.tracks.values())e.addTrack(t.clone());return e}plain(){const e={id:this.id,tracks:[]};for(const t of this.tracks.values())e.tracks.push(t.plain());return e}getId(){return this.id}addTrack(e){this.tracks.set(e.getId(),e)}removeTrack(e){return this.tracks.delete(e.getId())}removeTrackById(e){return this.tracks.delete(e)}getFirstTrack(e){for(let t of this.tracks.values())if(t.getMedia().toLowerCase()===e.toLowerCase())return t;return null}getTracks(){return this.tracks}removeAllTracks(){this.tracks.clear()}getTrack(e){return this.tracks.get(e)}}nl.expand=function(e){const t=new nl(e.id,e.paused);for(let r=0;r<e.tracks.length;++r){const n=rl.expand(e.tracks[r]);n&&t.addTrack(n)}return t};var il=nl;class ol{constructor(e){this.version=e||1,this.streams=new Map,this.medias=new Array,this.candidates=new Array,this.ice=null,this.dtls=null,this.crypto=null,this.extmapAllowMixed=!0}clone(){const e=new ol(this.version);for(let t=0;t<this.medias.length;++t)e.addMedia(this.medias[t].clone());for(const t of this.streams.values())e.addStream(t.clone());for(let t=0;t<this.candidates.length;++t)e.addCandidate(this.candidates[t].clone());return e.setICE(this.ice.clone()),this.dtls&&e.setDTLS(this.dtls.clone()),this.crypto&&e.setCrypto(this.crypto.clone()),e.setExmapAllowMixed(this.extmapAllowMixed),e}plain(){const e={version:this.version,streams:[],medias:[],candidates:[]};for(let t=0;t<this.medias.length;++t)e.medias.push(this.medias[t].plain());for(const t of this.streams.values())e.streams.push(t.plain());for(let t=0;t<this.candidates.length;++t)e.candidates.push(this.candidates[t].plain());return this.ice&&(e.ice=this.ice.plain()),this.dtls&&(e.dtls=this.dtls.plain()),this.crypto&&(e.crypto=this.crypto.plain()),this.extmapAllowMixed||(e.extmapAllowMixedNotSupported=!this.extmapAllowMixed),e}unify(){const e=new ol(this.version);for(let t=0;t<this.medias.length;++t)e.addMedia(this.medias[t].clone());const t={audio:e.getMediasByType("audio"),video:e.getMediasByType("video")};for(const r of this.streams.values()){const n=r.clone();for(const r of n.getTracks().values()){let n=t[r.getMedia()].pop();if(!n){n=this.getMedia(r.getMedia()).clone(),n.setId(r.getId()),e.addMedia(n)}r.setMediaId(n.getId())}e.addStream(n)}for(let t=0;t<this.candidates.length;++t)e.addCandidate(this.candidates[t].clone());return this.ice&&e.setICE(this.ice.clone()),this.dtls&&e.setDTLS(this.dtls.clone()),this.crypto&&e.setCrypto(this.crypto.clone()),e}setVersion(e){this.version=e}addMedia(e){this.medias.push(e)}getMedia(e){for(let t in this.medias){let r=this.medias[t];if(r.getType().toLowerCase()===e.toLowerCase())return r}return null}getMediasByType(e){var t=[];for(let r in this.medias){let n=this.medias[r];n.getType().toLowerCase()===e.toLowerCase()&&t.push(n)}return t}getMediaById(e){for(let t in this.medias){let r=this.medias[t];if(r.getId().toLowerCase()===e.toLowerCase())return r}return null}replaceMedia(e){for(let t in this.medias)if(this.medias[t].getId()==e.getId())return this.medias[t]=e,!0;return!1}getMedias(){return this.medias}getVersion(){return this.version}getDTLS(){return this.dtls}setDTLS(e){this.dtls=e}hasCrypto(){return!!this.crypto}getCrypto(){return this.crypto}setCrypto(e){this.crypto=e}hasICE(){return!!this.ice}getICE(){return this.ice}setICE(e){this.ice=e}addCandidate(e){for(let t=0;t<this.candidates.length;++t)if(this.candidates[t].equals(e))return;this.candidates.push(e)}addCandidates(e){for(let t=0;t<e.length;++t)this.addCandidate(e[t])}getCandidates(){return this.candidates}getStream(e){return this.streams.get(e)}getStreams(){return this.streams}getFirstStream(){for(let e of this.streams.values())return e;return null}addStream(e){this.streams.set(e.getId(),e)}removeStream(e){return this.streams.delete(e.getId())}removeAllStreams(){this.streams.clear()}getTrackByMediaId(e){for(let t of this.streams.values())for(let[r,n]of t.getTracks())if(n.getMediaId()==e)return n;return null}getStreamByMediaId(e){for(let t of this.streams.values())for(let[r,n]of t.getTracks())if(n.getMediaId()==e)return t;return null}getExtmapAllowMixed(){return this.extmapAllowMixed}setExtmapAllowMixed(e){this.extmapAllowMixed=e}answer(e){const t=new ol;e.ice&&(e.ice instanceof ju?t.setICE(e.ice.clone()):t.setICE(ju.expand(e.ice))),e.dtls&&(e.dtls instanceof pu?t.setDTLS(e.dtls):t.setDTLS(pu.expand(e.dtls))),e.crypto&&(e.crypto instanceof gu?t.setCrypto(e.crypto):t.setCrypto(gu.expand(e.crypto)));for(let r=0;e.candidates&&r<e.candidates.length;++r)e.candidates[r]instanceof iu?t.addCandidate(e.candidates[r].clone()):t.addCandidate(iu.expand(e.candidates[r]));for(const r of this.medias){const n=e&&e.capabilities&&e.capabilities[r.getType()];t.addMedia(r.answer(n))}return t.setExtmapAllowMixed(this.extmapAllowMixed),t}toString(){let e={version:0,media:[]};e.version=0,e.origin={username:"-",sessionId:(new Date).getTime(),sessionVersion:this.version,netType:"IN",ipVer:4,address:"127.0.0.1"},e.name="semantic-sdp",e.connection={version:4,ip:"0.0.0.0"},e.timing={start:0,stop:0},this.hasICE()&&this.getICE().isLite()&&(e.icelite="ice-lite"),e.msidSemantic={semantic:"WMS",token:"*"},e.groups=[],this.extmapAllowMixed&&(e.extmapAllowMixed="extmap-allow-mixed");let t={type:"BUNDLE",mids:[]};for(let r in this.medias){let n=this.medias[r],i={type:n.getType(),port:9,protocol:"",fmtp:[],rtp:[],rtcpFb:[],ext:[],bandwidth:[],candidates:[],ssrcGroups:[],ssrcs:[],rids:[]};i.direction=$u.toString(n.getDirection()),this.extmapAllowMixed&&(i.extmapAllowMixed="extmap-allow-mixed"),i.mid=n.getId(),t.mids.push(n.getId()),n.hasControl()&&(i.control=n.getControl()),n.getBitrate()>0&&(i.bandwidth.push({type:"AS",limit:n.getBitrate()}),i.bandwidth.push({type:"TIAS",limit:1e3*n.getBitrate()}));let o=this.getCandidates();for(let e=0;e<o.length;++e){let t=o[e];i.candidates.push({foundation:t.getFoundation(),component:t.getComponentId(),transport:t.getTransport(),priority:t.getPriority(),ip:t.getAddress(),port:t.getPort(),type:t.getType(),raddr:t.getRelAddr(),rport:t.getRelPort()})}if(this.getICE()&&(i.iceUfrag=this.getICE().getUfrag(),i.icePwd=this.getICE().getPwd()),["audio","video"].includes(n.getType().toLowerCase())){i.rtcpMux="rtcp-mux",i.rtcpRsize="rtcp-rsize",this.getDTLS()?(i.protocol="UDP/TLS/RTP/SAVPF",i.fingerprint={type:this.getDTLS().getHash(),hash:this.getDTLS().getFingerprint()},i.setup=du.toString(this.getDTLS().getSetup())):this.getCrypto()?(i.protocol="RTP/SAVPF",i.crypto=[{id:this.getCrypto().getTag(),suite:this.getCrypto().getSuite(),config:this.getCrypto().getKeyParams()}]):i.protocol="RTP/AVP";for(let e of n.getCodecs().values()){"video"===n.getType().toLowerCase()?i.rtp.push({payload:e.getType(),codec:e.getCodec().toUpperCase(),rate:9e4}):"opus"===e.getCodec().toLowerCase()||"multiopus"===e.getCodec().toLowerCase()?i.rtp.push({payload:e.getType(),codec:e.getCodec(),rate:48e3,encoding:e.getChannels()}):i.rtp.push({payload:e.getType(),codec:e.getCodec(),rate:8e3});for(const t of e.getRTCPFeedbacks())i.rtcpFb.push({payload:e.getType(),type:t.getId(),subtype:t.getParams().join(" ")});e.hasRTX()&&(i.rtp.push({payload:e.getRTX(),codec:"rtx",rate:9e4}),i.fmtp.push({payload:e.getRTX(),config:"apt="+e.getType()}));const t=e.getParams();if(Object.keys(t).length){const r={payload:e.getType(),config:""};for(const e in t)r.config.length&&(r.config+=";"),t.hasOwnProperty(e)?r.config+=e+"="+t[e]:r.config+=e;i.fmtp.push(r)}}const e=[];for(let t=0;t<i.rtp.length;++t)e.push(i.rtp[t].payload);i.payloads=e.join(" ");for(let[e,t]of n.getExtensions().entries())i.ext.push({value:e,uri:t});for(let e of n.getRIDs().values()){let t={id:e.getId(),direction:Nu.toString(e.getDirection()),params:""};e.getFormats().length&&(t.params="pt="+e.getFormats().join(","));for(let[r,n]of e.getParams().entries())t.params+=(t.params.length?";":"")+r+"="+n;i.rids.push(t)}const t=n.getSimulcast();if(t){let e=1;i.simulcast={};const r=t.getSimulcastStreams(Nu.SEND),n=t.getSimulcastStreams(Nu.RECV);if(r&&r.length){let t="";for(let e=0;e<r.length;++e){let n="";for(let t=0;t<r[e].length;++t)n+=(n.length?",":"")+(r[e][t].isPaused()?"~":"")+r[e][t].getId();t+=(t.length?";":"")+n}i.simulcast["dir"+e]="send",i.simulcast["list"+e]=t,e++}if(n&&n.length){let t=[];for(let e=0;e<n.length;++e){let r="";for(let t=0;t<n[e].length;++t)r+=(r.length?",":"")+(n[e][t].isPaused()?"~":"")+n[e][t].getId();t+=(t.length?";":"")+r}i.simulcast["dir"+e]="recv",i.simulcast["list"+e]=t,e++}}}else if(n.hasDataChannel()){i.protocol="UDP/DTLS/SCTP",i.payloads="webrtc-datachannel";const e=n.getDataChannel();i.sctpPort=e.getPort(),i.maxMessageSize=e.getMaxMessageSize()}e.media.push(i)}for(let t of this.streams.values())for(let r of t.getTracks().values())for(let n in e.media){let i=e.media[n];if(r.getMediaId()){if(r.getMediaId()==i.mid){let e=r.getSourceGroups();for(let t in e){let r=e[t];i.ssrcGroups.push({semantics:r.getSemantics(),ssrcs:r.getSSRCs().join(" ")})}let n=r.getSSRCs();for(let e in n)i.ssrcs.push({id:n[e],attribute:"cname",value:t.getId()}),i.ssrcs.push({id:n[e],attribute:"msid",value:t.getId()+" "+r.getId()});i.msid=t.getId()+" "+r.getId();break}}else if(i.type.toLowerCase()===r.getMedia().toLowerCase()){let e=r.getSourceGroups();for(let t in e){let r=e[t];i.ssrcGroups.push({semantics:r.getSemantics(),ssrcs:r.getSSRCs().join(" ")})}let n=r.getSSRCs();for(let e in n)i.ssrcs.push({id:n[e],attribute:"cname",value:t.getId()}),i.ssrcs.push({id:n[e],attribute:"msid",value:t.getId()+" "+r.getId()});break}}return t.mids=t.mids.join(" "),e.groups.push(t),ru.write(e)}toIceFragmentString(){let e={version:0,media:[],candidates:[]};this.hasICE()&&this.getICE().isLite()&&(e.icelite="ice-lite"),this.getICE()&&(e.iceUfrag=this.getICE().getUfrag(),e.icePwd=this.getICE().getPwd());for(const t of this.getCandidates())e.candidates.push({foundation:t.getFoundation(),component:t.getComponentId(),transport:t.getTransport(),priority:t.getPriority(),ip:t.getAddress(),port:t.getPort(),type:t.getType(),raddr:t.getRelAddr(),rport:t.getRelPort()});return ru.write(e).slice(10)}}ol.create=function(e){const t=new ol;e.ice&&(e.ice instanceof ju?t.setICE(e.ice.clone()):t.setICE(ju.expand(e.ice))),e.dtls&&(e.dtls instanceof pu?t.setDTLS(e.dtls):t.setDTLS(pu.expand(e.dtls))),e.crypto&&(e.crypto instanceof gu?t.setCrypto(e.crypto):t.setCrypto(gu.expand(e.crypto)));for(let r=0;e.candidates&&r<e.candidates.length;++r)e.candidates[r]instanceof iu?t.addCandidate(e.candidates[r].clone()):t.addCandidate(iu.expand(e.candidates[r]));let r=96,n=1;for(let i in e.capabilities){const o=Hu.create(i,e.capabilities[i]);for(const[e,t]of o.getCodecs())t.getType()>=96&&t.setType(r++),t.getRTX()&&t.setRTX(r++);if(e.capabilities[i].extensions)for(let t of e.capabilities[i].extensions)15===n&&n++,o.addExtension(n++,t);t.addMedia(o)}return t},ol.expand=function(e){const t=new ol(e.version);for(let r=0;e.medias&&r<e.medias.length;++r){const n=Hu.expand(e.medias[r]);n&&t.addMedia(n)}for(let r=0;e.streams&&r<e.streams.length;++r){const n=il.expand(e.streams[r]);n&&t.addStream(n)}for(let r=0;e.candidates&&r<e.candidates.length;++r){const n=iu.expand(e.candidates[r]);n&&t.addCandidate(n)}return e.ice&&t.setICE(ju.expand(e.ice)),e.dtls&&t.setDTLS(pu.expand(e.dtls)),e.crypto&&t.setCrypto(pu.expand(e.crypto)),e.extmapAllowMixedNotSupported&&(this.extmapAllowMixed=!e.extmapAllowMixedNotSupported),t},ol.process=function(e){return ol.parse(e)},ol.parse=function(e){const t=ru.parse(e),r=new ol;if(r.setVersion(t.version),t.iceUfrag&&t.icePwd){const e=String(t.iceUfrag),n=String(t.icePwd),i=new ju(e,n);i.setLite("ice-lite"==t.icelite),i.setEndOfCandidates("end-of-candidates"==t.endOfCandidates),r.setICE(i)}for(let e in t.media){const n=t.media[e],i=n.type,o=n.mid?n.mid.toString():e,s=new Hu(o,i);if(n.iceUfrag&&n.icePwd){const e=String(n.iceUfrag),i=String(n.icePwd),o=new ju(e,i);o.setLite("ice-lite"==t.icelite),o.setEndOfCandidates("end-of-candidates"==n.endOfCandidates),r.setICE(o)}for(let e=0;n.candidates&&e<n.candidates.length;++e){const t=n.candidates[e],i=new iu(t.foundation,t.component,t.transport,t.priority,t.ip,t.port,t.type,t.raddr,t.rport);r.addCandidate(i)}const a=n.fingerprint||t.fingerprint;if(a){const e=a.type,t=a.hash;let i=du.ACTPASS;n.setup&&(i=du.byValue(n.setup)),r.setDTLS(new pu(i,e,t))}if(n.crypto){const e=n.crypto[0];r.setCrypto(new gu(e.id,e.suite,e.config,e.sessionConfig))}let c=$u.SENDRECV;n.direction&&(c=$u.byValue(n.direction),s.setDirection(c)),n.control&&s.setControl(n.control),r.setExtmapAllowMixed("extmap-allow-mixed"==n.extmapAllowMixed||"extmap-allow-mixed"==t.extmapAllowMixed);const u=new Map;for(let e in n.rtp){const t=n.rtp[e],r=t.payload,i=t.codec;if("RED"===i.toUpperCase()||"ULPFEC"===i.toUpperCase())continue;let o={};for(let e in n.fmtp){const t=n.fmtp[e];if(t.payload===r){const e=t.config.split(";");for(let t in e){const r=e[t].split("="),n=r[0].trim(),i=r.splice(1).join("=").trim();o[n]=i}}}if("RTX"===i.toUpperCase())u.set(parseInt(o.apt),r);else{const e=new cu(i,r,o);t.encoding>1&&e.setChannels(t.encoding),s.addCodec(e)}}for(let e of u.entries()){const t=s.getCodecForType(e[0]);t&&t.setRTX(e[1])}for(let e=0;n.rtcpFb&&e<n.rtcpFb.length;++e){const t=s.getCodecForType(n.rtcpFb[e].payload);if(t){const r=n.rtcpFb[e].type,i=n.rtcpFb[e].subtype?n.rtcpFb[e].subtype.split(" "):null;t.addRTCPFeedback(new su(r,i))}}const l=n.ext;for(let e in l){const t=l[e];s.addExtension(t.value,t.uri)}const d=n.rids;for(let e in d){const t=d[e],r=new _u(t.id,Nu.byValue(t.direction));let n=[];const i=new Map;if(t.params){const e=ru.parseParams(t.params);for(let t in e)"pt"===t?n=e[t].split(","):i.set(t,e[t]);r.setFormats(n),r.setParams(i)}s.addRID(r)}const f=[];if(n.simulcast){const e=new zu;if(n.simulcast.dir1){const t=Nu.byValue(n.simulcast.dir1),r=ru.parseSimulcastStreamList(n.simulcast.list1);for(let n=0;n<r.length;++n){const i=[];for(let e=0;e<r[n].length;++e)i.push(new Fu(r[n][e].scid,r[n][e].paused));e.addSimulcastAlternativeStreams(t,i)}}if(n.simulcast.dir2){const t=Nu.byValue(n.simulcast.dir2),r=ru.parseSimulcastStreamList(n.simulcast.list2);for(let n=0;n<r.length;++n){const i=[];for(let e=0;e<r[n].length;++e)i.push(new Fu(r[n][e].scid,r[n][e].paused));e.addSimulcastAlternativeStreams(t,i)}}for(let t of e.getSimulcastStreams(Nu.SEND)){const e=[];for(let r=0;r<t.length;r++){const n=new el(t[r].getId(),t[r].isPaused()),i=s.getRID(n.getId());if(i){const t=i.getFormats();for(let e=0;t&&e<t.length;++e){const r=s.getCodecForType(t[e]);r&&n.addCodec(r)}n.setParams(i.getParams()),e.push(n)}}e.length&&f.push(e)}s.setSimulcast(e)}const p=new Map;if(n.ssrcs)for(let e in n.ssrcs){let t=n.ssrcs[e],s=t.id,a=t.attribute,c=t.value,u=p.get(s);if(u||(u=new Zu(s),p.set(u.getSSRC(),u)),"cname"===a.toLowerCase())u.setCName(c);else if("msid"===a.toLowerCase()){let e=c.split(" "),t=e[0],n=e[1];u.setStreamId(t),u.setTrackId(n);let a=r.getStream(t);a||(a=new il(t),r.addStream(a));let l=a.getTrack(n);l||(l=new rl(i,n),l.setMediaId(o),l.setEncodings(f),a.addTrack(l)),l.addSSRC(s)}}if(n.msid){let e=n.msid.split(" "),t=e[0],s=e[1],a=r.getStream(t);a||(a=new il(t),r.addStream(a));let c=a.getTrack(s);c||(c=new rl(i,s),c.setMediaId(o),c.setEncodings(f),a.addTrack(c));for(let[e,r]of p.entries())r.getStreamId()||(r.setStreamId(t),r.setTrackId(s),c.addSSRC(e))}for(let[e,t]of p.entries())if(!t.getStreamId()){let n=t.getCName(),s=o;t.setStreamId(n),t.setTrackId(s);let a=r.getStream(n);a||(a=new il(n),r.addStream(a));let c=a.getTrack(s);c||(c=new rl(i,s),c.setMediaId(o),c.setEncodings(f),a.addTrack(c)),c.addSSRC(e)}if(n.ssrcGroups)for(let e in n.ssrcGroups){let t=n.ssrcGroups[e],i=t.ssrcs.split(" "),o=new Ju(t.semantics,i),s=p.get(parseInt(i[0]));s&&r.getStream(s.getStreamId()).getTrack(s.getTrackId()).addSourceGroup(o)}if("application"==n.type&&"webrtc-datachannel"==n.payloads){const e=new Wu(n.sctpPort,n.maxMessageSize);s.setDataChannel(e)}r.addMedia(s)}return r};var sl={SDPInfo:ol,CandidateInfo:iu,CodecInfo:cu,DTLSInfo:pu,CryptoInfo:gu,ICEInfo:ju,MediaInfo:Hu,Setup:du,SourceGroupInfo:Ju,SourceInfo:Zu,StreamInfo:il,TrackInfo:rl,RTCPFeedbackInfo:su,TrackEncodingInfo:el,Direction:$u},al=n((function(e,t){!function(r,n){var i="function",o="undefined",s="object",a="string",c="model",u="name",l="type",d="vendor",f="version",p="architecture",h="console",g="mobile",m="tablet",v="smarttv",y="wearable",b="embedded",w="Amazon",S="Apple",C="ASUS",E="BlackBerry",x="Firefox",I="Google",T="Huawei",P="LG",R="Microsoft",k="Motorola",O="Opera",A="Samsung",D="Sony",L="Xiaomi",j="Zebra",M="Facebook",N=function(e){for(var t={},r=0;r<e.length;r++)t[e[r].toUpperCase()]=e[r];return t},B=function(e,t){return typeof e===a&&-1!==_(t).indexOf(_(e))},_=function(e){return e.toLowerCase()},U=function(e,t){if(typeof e===a)return e=e.replace(/^\s\s*/,"").replace(/\s\s*$/,""),typeof t===o?e:e.substring(0,255)},F=function(e,t){for(var r,o,a,c,u,l,d=0;d<t.length&&!u;){var f=t[d],p=t[d+1];for(r=o=0;r<f.length&&!u;)if(u=f[r++].exec(e))for(a=0;a<p.length;a++)l=u[++o],typeof(c=p[a])===s&&c.length>0?2===c.length?typeof c[1]==i?this[c[0]]=c[1].call(this,l):this[c[0]]=c[1]:3===c.length?typeof c[1]!==i||c[1].exec&&c[1].test?this[c[0]]=l?l.replace(c[1],c[2]):n:this[c[0]]=l?c[1].call(this,l,c[2]):n:4===c.length&&(this[c[0]]=l?c[3].call(this,l.replace(c[1],c[2])):n):this[c]=l||n;d+=2}},V=function(e,t){for(var r in t)if(typeof t[r]===s&&t[r].length>0){for(var i=0;i<t[r].length;i++)if(B(t[r][i],e))return"?"===r?n:r}else if(B(t[r],e))return"?"===r?n:r;return e},z={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},G={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[f,[u,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[f,[u,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[u,f],[/opios[\/ ]+([\w\.]+)/i],[f,[u,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[f,[u,O]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[u,f],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[f,[u,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[f,[u,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[f,[u,"WeChat"]],[/konqueror\/([\w\.]+)/i],[f,[u,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[f,[u,"IE"]],[/yabrowser\/([\w\.]+)/i],[f,[u,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[u,/(.+)/,"$1 Secure Browser"],f],[/\bfocus\/([\w\.]+)/i],[f,[u,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[f,[u,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[f,[u,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[f,[u,"Dolphin"]],[/coast\/([\w\.]+)/i],[f,[u,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[f,[u,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[f,[u,x]],[/\bqihu|(qi?ho?o?|360)browser/i],[[u,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[u,/(.+)/,"$1 Browser"],f],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],f],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[u,f],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[u],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[u,M],f],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[u,f],[/\bgsa\/([\w\.]+) .*safari\//i],[f,[u,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[f,[u,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[u,"Chrome WebView"],f],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[f,[u,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[u,f],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[f,[u,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[f,u],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[u,[f,V,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[u,f],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[u,"Netscape"],f],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[f,[u,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[u,f]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/(ia32(?=;))/i],[[p,_]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[p,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[p,"armhf"]],[/windows (ce|mobile); ppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[p,/ower/,"",_]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[p,_]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[d,A],[l,m]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[c,[d,A],[l,g]],[/\((ip(?:hone|od)[\w ]*);/i],[c,[d,S],[l,g]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[d,S],[l,m]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[d,T],[l,m]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[c,[d,T],[l,g]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[c,/_/g," "],[d,L],[l,g]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[d,L],[l,m]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[c,[d,"OPPO"],[l,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[d,"Vivo"],[l,g]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[c,[d,"Realme"],[l,g]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[d,k],[l,g]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[d,k],[l,m]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[d,P],[l,m]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[d,P],[l,g]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[d,"Lenovo"],[l,m]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[d,"Nokia"],[l,g]],[/(pixel c)\b/i],[c,[d,I],[l,m]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[d,I],[l,g]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[d,D],[l,g]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[d,D],[l,m]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[d,"OnePlus"],[l,g]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[d,w],[l,m]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[d,w],[l,g]],[/(playbook);[-\w\),; ]+(rim)/i],[c,d,[l,m]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[d,E],[l,g]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[d,C],[l,m]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[d,C],[l,g]],[/(nexus 9)/i],[c,[d,"HTC"],[l,m]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[d,[c,/_/g," "],[l,g]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[d,"Acer"],[l,m]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[d,"Meizu"],[l,g]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[d,"Sharp"],[l,g]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[d,c,[l,g]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[d,c,[l,m]],[/(surface duo)/i],[c,[d,R],[l,m]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[d,"Fairphone"],[l,g]],[/(u304aa)/i],[c,[d,"AT&T"],[l,g]],[/\bsie-(\w*)/i],[c,[d,"Siemens"],[l,g]],[/\b(rct\w+) b/i],[c,[d,"RCA"],[l,m]],[/\b(venue[\d ]{2,7}) b/i],[c,[d,"Dell"],[l,m]],[/\b(q(?:mv|ta)\w+) b/i],[c,[d,"Verizon"],[l,m]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[d,"Barnes & Noble"],[l,m]],[/\b(tm\d{3}\w+) b/i],[c,[d,"NuVision"],[l,m]],[/\b(k88) b/i],[c,[d,"ZTE"],[l,m]],[/\b(nx\d{3}j) b/i],[c,[d,"ZTE"],[l,g]],[/\b(gen\d{3}) b.+49h/i],[c,[d,"Swiss"],[l,g]],[/\b(zur\d{3}) b/i],[c,[d,"Swiss"],[l,m]],[/\b((zeki)?tb.*\b) b/i],[c,[d,"Zeki"],[l,m]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[d,"Dragon Touch"],c,[l,m]],[/\b(ns-?\w{0,9}) b/i],[c,[d,"Insignia"],[l,m]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[d,"NextBook"],[l,m]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[d,"Voice"],c,[l,g]],[/\b(lvtel\-)?(v1[12]) b/i],[[d,"LvTel"],c,[l,g]],[/\b(ph-1) /i],[c,[d,"Essential"],[l,g]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[d,"Envizen"],[l,m]],[/\b(trio[-\w\. ]+) b/i],[c,[d,"MachSpeed"],[l,m]],[/\btu_(1491) b/i],[c,[d,"Rotor"],[l,m]],[/(shield[\w ]+) b/i],[c,[d,"Nvidia"],[l,m]],[/(sprint) (\w+)/i],[d,c,[l,g]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[d,R],[l,g]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[d,j],[l,m]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[d,j],[l,g]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[d,c,[l,h]],[/droid.+; (shield) bui/i],[c,[d,"Nvidia"],[l,h]],[/(playstation [345portablevi]+)/i],[c,[d,D],[l,h]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[d,R],[l,h]],[/smart-tv.+(samsung)/i],[d,[l,v]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[d,A],[l,v]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[d,P],[l,v]],[/(apple) ?tv/i],[d,[c,"Apple TV"],[l,v]],[/crkey/i],[[c,"Chromecast"],[d,I],[l,v]],[/droid.+aft(\w)( bui|\))/i],[c,[d,w],[l,v]],[/\(dtv[\);].+(aquos)/i],[c,[d,"Sharp"],[l,v]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[d,U],[c,U],[l,v]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[l,v]],[/((pebble))app/i],[d,c,[l,y]],[/droid.+; (glass) \d/i],[c,[d,I],[l,y]],[/droid.+; (wt63?0{2,3})\)/i],[c,[d,j],[l,y]],[/(quest( 2)?)/i],[c,[d,M],[l,y]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[d,[l,b]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[c,[l,g]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[l,m]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[l,m]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[l,g]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[d,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[f,[u,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[f,[u,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[u,f],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[f,u]],os:[[/microsoft (windows) (vista|xp)/i],[u,f],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[u,[f,V,z]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[u,"Windows"],[f,V,z]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[f,/_/g,"."],[u,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[u,"Mac OS"],[f,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[f,u],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[u,f],[/\(bb(10);/i],[f,[u,E]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[f,[u,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[f,[u,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[f,[u,"webOS"]],[/crkey\/([\d\.]+)/i],[f,[u,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[u,"Chromium OS"],f],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[u,f],[/(sunos) ?([\w\.\d]*)/i],[[u,"Solaris"],f],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[u,f]]},$=function(e,t){if(typeof e===s&&(t=e,e=n),!(this instanceof $))return new $(e,t).getResult();var i=e||(typeof r!==o&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),c=t?function(e,t){var r={};for(var n in e)t[n]&&t[n].length%2==0?r[n]=t[n].concat(e[n]):r[n]=e[n];return r}(G,t):G;return this.getBrowser=function(){var e={};return e.name=n,e.version=n,F.call(e,i,c.browser),e.major=function(e){return typeof e===a?e.replace(/[^\d\.]/g,"").split(".")[0]:n}(e.version),e},this.getCPU=function(){var e={};return e.architecture=n,F.call(e,i,c.cpu),e},this.getDevice=function(){var e={};return e.vendor=n,e.model=n,e.type=n,F.call(e,i,c.device),e},this.getEngine=function(){var e={};return e.name=n,e.version=n,F.call(e,i,c.engine),e},this.getOS=function(){var e={};return e.name=n,e.version=n,F.call(e,i,c.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(e){return i=typeof e===a&&e.length>255?U(e,255):e,this},this.setUA(i),this};$.VERSION="0.7.31",$.BROWSER=N([u,f,"major"]),$.CPU=N([p]),$.DEVICE=N([c,d,l,h,g,v,m,y,b]),$.ENGINE=$.OS=N([u,f]),e.exports&&(t=e.exports=$),t.UAParser=$;var q=typeof r!==o&&(r.jQuery||r.Zepto);if(q&&!q.ua){var W=new $;q.ua=W.getResult(),q.ua.get=function(){return W.getUA()},q.ua.set=function(e){W.setUA(e);var t=W.getResult();for(var r in t)q.ua[r]=t[r]}}}("object"==typeof window?window:r)}));const cl=["iOS"];class ul extends al{constructor(){super(window.navigator.userAgent)}isChrome(){const e=this.getBrowser();if(!e.name)return!1;const t=this.getOS();let r=!0;return r=!new RegExp(cl.join("|"),"i").test(t.name),e.name.match(/Chrome/i)&&r}isFirefox(){const e=this.getBrowser();return!!e.name&&e.name.match(/Firefox/i)}}const ll=An.get("SdpParser"),dl=Array.from({length:31},((e,t)=>t+35)),fl=Array.from({length:32},((e,t)=>t+96)),pl=Array.from({length:14},((e,t)=>t+1)),hl=Array.from({length:240},((e,t)=>t+16));class gl{static setSimulcast(e,t){ll.info("Setting simulcast. Codec: ",t);if(!(new ul).isChrome())return ll.warn("Simulcast is only available in Google Chrome browser"),e;if("h264"!==t&&"vp8"!==t)return ll.warn("Simulcast is only available in h264 and vp8 codecs"),e;try{const t=/m=video[\s\S]*?a=ssrc:(\d*) msid:([\s\S]+?)\r\n/,r=/m=video[\s\S]*?a=ssrc:(\d*) cname:([\s\S]+?)\r\n/.exec(e),n=r[1],i=r[2],o=t.exec(e)[2],s=2,a=[n];for(let t=0;t<s;++t){const r=100+2*t,n=r+1;a.push(r),e+="a=ssrc-group:FID "+r+" "+n+"\r\na=ssrc:"+r+" cname:"+i+"\r\na=ssrc:"+r+" msid:"+o+"\r\na=ssrc:"+n+" cname:"+i+"\r\na=ssrc:"+n+" msid:"+o+"\r\n"}return e+="a=ssrc-group:SIM "+a.join(" ")+"\r\n",ll.info("Simulcast setted"),ll.debug("Simulcast SDP: ",e),e}catch(e){throw ll.error("Error setting SDP for simulcast: ",e),e}}static setStereo(e){return ll.info("Replacing SDP response for support stereo"),e=e.replace(/useinbandfec=1/g,"useinbandfec=1; stereo=1"),ll.info("Replaced SDP response for support stereo"),ll.debug("New SDP value: ",e),e}static setDTX(e){return ll.info("Replacing SDP response for support dtx"),e=e.replace("useinbandfec=1","useinbandfec=1; usedtx=1"),ll.info("Replaced SDP response for support dtx"),ll.debug("New SDP value: ",e),e}static setAbsoluteCaptureTime(e){const t="a=extmap:"+gl.getAvailableHeaderExtensionIdRange(e)[0]+" http://www.webrtc.org/experiments/rtp-hdrext/abs-capture-time\r\n";return e=e.replace(/(m=.*\r\n(?:.*\r\n)*?)(a=extmap.*\r\n)/gm,((e,r,n)=>r+t+n)),ll.info("Replaced SDP response for setting absolute capture time"),ll.debug("New SDP value: ",e),e}static setDependencyDescriptor(e){const t="a=extmap:"+gl.getAvailableHeaderExtensionIdRange(e)[0]+" https://aomediacodec.github.io/av1-rtp-spec/#dependency-descriptor-rtp-header-extension\r\n";return e=e.replace(/(m=.*\r\n(?:.*\r\n)*?)(a=extmap.*\r\n)/gm,((e,r,n)=>r+t+n)),ll.info("Replaced SDP response for setting depency descriptor"),ll.debug("New SDP value: ",e),e}static setVideoBitrate(e,t){if(t<1)ll.info("Remove bitrate restrictions"),e=e.replace(/b=AS:.*\r\n/,"").replace(/b=TIAS:.*\r\n/,"");else{const r=sl.SDPInfo.parse(e),n=r.getMedia("video");ll.info("Setting video bitrate"),n.setBitrate(t),e=r.toString()}return e}static removeSdpLine(e,t){return ll.debug("SDP before trimming: ",e),e=e.split("\n").filter((e=>e.trim()!==t)).join("\n"),ll.debug("SDP trimmed result: ",e),e}static adaptCodecName(e,t,r){if(!e)return e;const n=new RegExp("".concat(t),"i");return e.replace(n,r)}static setMultiopus(e,t){if((new ul).isChrome()&&(!t||ml(t)))if(e.includes("multiopus/48000/6"))ll.info("Multiopus already setted");else{ll.info("Setting multiopus");const t=/m=audio 9 UDP\/TLS\/RTP\/SAVPF (.*)\r\n/.exec(e)[0],r=gl.getAvailablePayloadTypeRange(e)[0],n=t.replace("\r\n"," ")+r+"\r\na=rtpmap:"+r+" multiopus/48000/6\r\na=fmtp:"+r+" channel_mapping=0,4,1,2,3,5;coupled_streams=2;minptime=10;num_streams=4;useinbandfec=1\r\n";e=e.replace(t,n),ll.info("Multiopus offer created"),ll.debug("SDP parsed for multioups: ",e)}return e}static getAvailablePayloadTypeRange(e){const t=e.matchAll(/m=(?:.*) (?:.*) UDP\/TLS\/RTP\/SAVPF (.*)\r\n/gm);let r=fl.concat(dl);for(const e of t){const t=e[1].split(" ").map((e=>parseInt(e)));r=r.filter((e=>!t.includes(e)))}return r}static getAvailableHeaderExtensionIdRange(e){const t=e.matchAll(/a=extmap:(\d+)(?:.*)\r\n/gm);let r=pl.concat(hl);for(const e of t){const t=e[1].split(" ").map((e=>parseInt(e)));r=r.filter((e=>!t.includes(e)))}return r}static renegotiate(e,t){const r=sl.SDPInfo.parse(e),n=sl.SDPInfo.parse(t);for(const e of r.getMedias()){let t=n.getMediaById(e.getId());if(!t){t=new sl.MediaInfo(e.getId(),e.getType()),t.setDirection(sl.Direction.reverse(e.getDirection()));const r=n.getMedia(e.getType());if(r){t.setCodecs(r.getCodecs());for(const[e,n]of r.getExtensions())t.addExtension(e,n)}n.addMedia(t)}}return n.toString()}static updateMissingVideoExtensions(e,t){var r;const n=sl.SDPInfo.parse(e),i=null===(r=sl.SDPInfo.parse(t).getMediasByType("video")[0])||void 0===r?void 0:r.getExtensions();if(i||i.length){for(const t of n.getMediasByType("video")){const r=t.getExtensions();i.forEach(((n,i)=>{if(!r.get(i)){const r=t.getId(),o="a=extmap:"+i+" "+n+"\r\n",s=new RegExp("(a=mid:"+r+"\r\n(?:.*\r\n)*?)","g");e=e.replace(s,((e,t,r)=>t+o))}}))}return e}}}const ml=e=>e.getAudioTracks().some((e=>e.getSettings().channelCount>2));class vl extends Ca{constructor(e,t){super(),this.namespace=e,this.tm=t}cmd(e,t){return this.tm.cmd(e,t,this.namespace)}event(e,t){return this.tm.event(e,t,this.namespace)}close(){return this.tm.namespaces.delete(this.namespace)}}var yl=class extends Ca{constructor(e){super(),this.maxId=0,this.namespaces=new Map,this.transactions=new Map,this.transport=e,this.listener=t=>{let r;try{r=JSON.parse(t.utf8Data||t.data||t)}catch(e){return}switch(r.type){case"cmd":const t={name:r.name,data:r.data,namespace:r.namespace,accept:t=>{e.send(JSON.stringify({type:"response",transId:r.transId,data:t}))},reject:t=>{e.send(JSON.stringify({type:"error",transId:r.transId,data:t}))}};if(t.namespace){const e=this.namespaces.get(t.namespace);e?e.emit("cmd",t):this.emit("cmd",t)}else this.emit("cmd",t);break;case"response":{const e=this.transactions.get(r.transId);if(!e)return;this.transactions.delete(r.transId),e.resolve(r.data);break}case"error":{const e=this.transactions.get(r.transId);if(!e)return;this.transactions.delete(r.transId),e.reject(r.data);break}case"event":const i={name:r.name,data:r.data,namespace:r.namespace};if(i.namespace){var n=this.namespaces.get(i.namespace);n?n.emit("event",i):this.emit("event",i)}else this.emit("event",i)}},this.transport.addListener?this.transport.addListener("message",this.listener):this.transport.addEventListener("message",this.listener)}cmd(e,t,r){return new Promise(((n,i)=>{if(!e||0===e.length)throw new Error("Bad command name");const o={type:"cmd",transId:this.maxId++,name:e,data:t};r&&(o.namespace=r);const s=JSON.stringify(o);o.resolve=n,o.reject=i,this.transactions.set(o.transId,o);try{this.transport.send(s)}catch(e){throw this.transactions.delete(o.transId),e}}))}event(e,t,r){if(!e||0===e.length)throw new Error("Bad event name");const n={type:"event",name:e,data:t};r&&(n.namespace=r);const i=JSON.stringify(n);this.transport.send(i)}namespace(e){let t=this.namespaces.get(e);return t||(t=new vl(e,this),this.namespaces.set(e,t),t)}close(){for(const e of this.namespaces.values())e.close();this.transport.removeListener?this.transport.removeListener("message",this.listener):this.transport.removeEventListener("message",this.listener)}};const bl=An.get("Signaling"),wl="wsConnectionSuccess",Sl="wsConnectionError",Cl="wsConnectionClose",El="broadcastEvent",xl={VP8:"vp8",VP9:"vp9",H264:"h264",AV1:"av1"},Il={OPUS:"opus",MULTIOPUS:"multiopus"};class Tl extends Ca{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{streamName:null,url:"ws://localhost:8080/"};super(),this.streamName=e.streamName,this.wsUrl=e.url,this.webSocket=null,this.transactionManager=null,this.serverId=null,this.clusterId=null}async connect(){var e;return bl.info("Connecting to Signaling Server"),this.transactionManager&&(null===(e=this.webSocket)||void 0===e?void 0:e.readyState)===WebSocket.OPEN?(bl.info("Connected to server: ",this.webSocket.url),bl.debug("WebSocket value: ",{url:this.webSocket.url,protocol:this.webSocket.protocol,readyState:this.webSocket.readyState,binaryType:this.webSocket.binaryType,extensions:this.webSocket.extensions}),this.emit(wl,{ws:this.webSocket,tm:this.transactionManager}),this.webSocket):new Promise(((e,t)=>{this.webSocket=new WebSocket(this.wsUrl),this.transactionManager=new yl(this.webSocket),this.webSocket.onopen=()=>{bl.info("WebSocket opened"),this.transactionManager.on("event",(e=>{this.emit(El,e)})),bl.info("Connected to server: ",this.webSocket.url),bl.debug("WebSocket value: ",{url:this.webSocket.url,protocol:this.webSocket.protocol,readyState:this.webSocket.readyState,binaryType:this.webSocket.binaryType,extensions:this.webSocket.extensions}),this.emit(wl,{ws:this.webSocket,tm:this.transactionManager}),e(this.webSocket)},this.webSocket.onerror=()=>{bl.error("WebSocket not connected: ",this.webSocket.url),this.emit(Sl,this.webSocket.url),t(this.webSocket.url)},this.webSocket.onclose=()=>{this.webSocket=null,this.transactionManager=null,bl.info("Connection closed with Signaling Server."),this.emit(Cl)}}))}close(){var e;bl.info("Closing connection with Signaling Server."),null===(e=this.webSocket)||void 0===e||e.close()}async subscribe(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;bl.info("Starting subscription to streamName: ",this.streamName),bl.debug("Subcription local description: ",e);const i=Pl(t,r,n),o={sdp:e=gl.adaptCodecName(e,"AV1X",xl.AV1),streamId:this.streamName,pinnedSourceId:i.pinnedSourceId,excludedSourceIds:i.excludedSourceIds};i.vad&&(o.vad=!0),Array.isArray(i.events)&&(o.events=i.events);try{var s,a,c,u,l;await this.connect(),bl.info("Sending view command");const e=await this.transactionManager.cmd("view",o),t=null===(s=(a=RTCRtpReceiver).getCapabilities)||void 0===s||null===(c=s.call(a,"video"))||void 0===c||null===(u=c.codecs)||void 0===u||null===(l=u.find)||void 0===l?void 0:l.call(u,(e=>"video/AV1X"===e.mimeType));return e.sdp=t?gl.adaptCodecName(e.sdp,xl.AV1,"AV1X"):e.sdp,bl.info("Command sent, subscriberId: ",e.subscriberId),bl.debug("Command result: ",e),this.serverId=e.subscriberId,this.clusterId=e.clusterId,e.sdp}catch(e){throw bl.error("Error sending view command, error: ",e),e}}async publish(e,t){const r=Rl(t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,arguments.length>3&&void 0!==arguments[3]?arguments[3]:null);bl.info("Starting publishing to streamName: ".concat(this.streamName,", codec: ").concat(r.codec)),bl.debug("Publishing local description: ",e);const n=Object.values(xl);if(-1===n.indexOf(r.codec))throw bl.error("Invalid codec. Possible values are: ",n),new Error("Invalid codec. Possible values are: ".concat(n));r.codec===xl.AV1&&(e=gl.adaptCodecName(e,"AV1X",xl.AV1));const i={name:this.streamName,sdp:e,codec:r.codec,sourceId:r.sourceId};null!==r.record&&(i.record=r.record),Array.isArray(r.events)&&(i.events=r.events);try{await this.connect(),bl.info("Sending publish command");const e=await this.transactionManager.cmd("publish",i);if(r.codec===xl.AV1){var o,s,a,c,u;const t=null===(o=(s=RTCRtpSender).getCapabilities)||void 0===o||null===(a=o.call(s,"video"))||void 0===a||null===(c=a.codecs)||void 0===c||null===(u=c.find)||void 0===u?void 0:u.call(c,(e=>"video/AV1X"===e.mimeType));e.sdp=t?gl.adaptCodecName(e.sdp,xl.AV1,"AV1X"):e.sdp}return bl.info("Command sent, publisherId: ",e.publisherId),bl.debug("Command result: ",e),this.serverId=e.publisherId,this.clusterId=e.clusterId,e.sdp}catch(e){throw bl.error("Error sending publish command, error: ",e),e}}async cmd(e,t){return bl.info("Sending cmd: ".concat(e)),this.transactionManager.cmd(e,t)}}const Pl=(e,t,r)=>{let n="object"==typeof e?e:{};return 0===Object.keys(n).length&&(n={vad:e,pinnedSourceId:t,excludedSourceIds:r}),n},Rl=(e,t,r)=>{let n="object"==typeof e?e:{};if(0===Object.keys(n).length){const i=xl.H264;n={codec:null!=e?e:i,record:t,sourceId:r}}return n};function kl(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ol(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?kl(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kl(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const Al=An.get("PeerConnection"),Dl={track:"track",connectionStateChange:"connectionStateChange"},Ll={stereo:!1,mediaStream:null,codec:"h264",simulcast:!1,scalabilityMode:null,disableAudio:!1,disableVideo:!1,setSDPToPeer:!0};class jl extends Ca{constructor(){super(),this.sessionDescription=null,this.peer=null,this.peerConnectionStats=null}async createRTCPeer(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;Al.info("Creating new RTCPeerConnection"),Al.debug("RTC configuration provided by user: ",e),this.peer=Bl(this,e)}getRTCPeer(){return Al.info("Getting RTC Peer"),this.peer}async closeRTCPeer(){var e;Al.info("Closing RTCPeerConnection"),null===(e=this.peer)||void 0===e||e.close(),this.peer=null,this.stopStats(),this.emit(Dl.connectionStateChange,"closed")}async setRTCRemoteSDP(e){Al.info("Setting RTC Remote SDP");const t={type:"answer",sdp:e};try{await this.peer.setRemoteDescription(t),Al.info("RTC Remote SDP was set successfully."),Al.debug("RTC Remote SDP new value: ",e)}catch(e){throw Al.error("Error while setting RTC Remote SDP: ",e),e}}async getRTCLocalSDP(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ll;Al.info("Getting RTC Local SDP"),e=Ol(Ol({},Ll),e),Al.debug("Options: ",e);const t=Nl(e.mediaStream);t?Ul(this.peer,t,e):Fl(this.peer,e),Al.info("Creating peer offer");const r=await this.peer.createOffer();return Al.info("Peer offer created"),Al.debug("Peer offer response: ",r.sdp),this.sessionDescription=r,e.disableAudio||(e.stereo&&(this.sessionDescription.sdp=gl.setStereo(this.sessionDescription.sdp)),e.dtx&&(this.sessionDescription.sdp=gl.setDTX(this.sessionDescription.sdp)),this.sessionDescription.sdp=gl.setMultiopus(this.sessionDescription.sdp,t)),!e.disableVideo&&e.simulcast&&(this.sessionDescription.sdp=gl.setSimulcast(this.sessionDescription.sdp,e.codec)),e.absCaptureTime&&(this.sessionDescription.sdp=gl.setAbsoluteCaptureTime(this.sessionDescription.sdp)),e.dependencyDescriptor&&(this.sessionDescription.sdp=gl.setDependencyDescriptor(this.sessionDescription.sdp)),e.setSDPToPeer&&(await this.peer.setLocalDescription(this.sessionDescription),Al.info("Peer local description set")),this.sessionDescription.sdp}async addRemoteTrack(e,t){return new Promise(((r,n)=>{try{const n=this.peer.addTransceiver(e,{direction:"recvonly"});for(const e of t)e.addTrack(n.receiver.track);n.resolve=r,n.streams=t}catch(e){n(e)}}))}updateBandwidthRestriction(e,t){return Al.info("Updating bandwidth restriction, bitrate value: ",t),Al.debug("SDP value: ",e),gl.setVideoBitrate(e,t)}async updateBitrate(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(!this.peer)throw Al.error("Cannot update bitrate. No peer found."),new Error("Cannot update bitrate. No peer found.");Al.info("Updating bitrate to value: ",e),this.sessionDescription=await this.peer.createOffer(),await this.peer.setLocalDescription(this.sessionDescription);const t=this.updateBandwidthRestriction(this.peer.remoteDescription.sdp,e);await this.setRTCRemoteSDP(t),Al.info("Bitrate restirctions updated: ","".concat(e>0?e:"unlimited"," kbps"))}getRTCPeerStatus(){if(Al.info("Getting RTC peer status"),!this.peer)return null;const e=Vl(this.peer);return Al.info("RTC peer status getted, value: ",e),e}replaceTrack(e){if(!this.peer)return void Al.error("Could not change track if there is not an active connection.");const t=this.peer.getSenders().find((t=>t.track.kind===e.kind));t?t.replaceTrack(e):Al.error("There is no ".concat(e.kind," track in active broadcast."))}static getCapabilities(e){const t=new ul;if(t.isFirefox())return(e=>"video"===e?{codecs:[{codec:"vp8",mimeType:"video/VP8"},{codec:"vp9",mimeType:"video/VP9"},{codec:"h264",mimeType:"video/H264"}],headerExtensions:[]}:"audio"===e?{codecs:[{codec:"opus",mimeType:"audio/opus",channels:2}],headerExtensions:[]}:null)(e);const r=RTCRtpSender.getCapabilities(e);if(r){const n={};let i=new RegExp("^video/(".concat(Object.values(xl).join("|"),")x?$"),"i");"audio"===e&&(i=new RegExp("^audio/(".concat(Object.values(Il).join("|"),")$"),"i"),t.isChrome()&&(n.multiopus={mimeType:"audio/multiopus",channels:6}));for(const e of r.codecs){const t=e.mimeType.match(i);if(t){const r=t[1].toLowerCase();if(n[r]=Ol(Ol({},n[r]),{},{mimeType:e.mimeType}),e.scalabilityModes){let t=n[r].scalabilityModes||[];t=[...t,...e.scalabilityModes],n[r].scalabilityModes=[...new Set(t)]}e.channels&&(n[r].channels=e.channels)}}r.codecs=Object.keys(n).map((e=>Ol({codec:e},n[e])))}return r}getTracks(){var e,t;return null===(e=this.peer)||void 0===e||null===(t=e.getSenders())||void 0===t?void 0:t.map((e=>e.track))}initStats(){this.peerConnectionStats?Al.warn("Cannot init peer stats: Already initialized"):this.peer?(this.peerConnectionStats=new $a(this.peer),this.peerConnectionStats.init(),ja(this.peerConnectionStats,this,[Ga])):Al.warn("Cannot init peer stats: RTCPeerConnection not initialized")}stopStats(){var e;null===(e=this.peerConnectionStats)||void 0===e||e.stop(),this.peerConnectionStats=null}}const Ml=e=>(null==e?void 0:e.getAudioTracks().length)<=1&&(null==e?void 0:e.getVideoTracks().length)<=1,Nl=e=>{if(!e)return null;if(e instanceof MediaStream&&Ml(e))return e;if(!(e instanceof MediaStream)){Al.info("Creating MediaStream to add received tracks.");const t=new MediaStream;for(const r of e)t.addTrack(r);if(Ml(t))return t}throw Al.error("MediaStream must have 1 audio track and 1 video track, or at least one of them."),new Error("MediaStream must have 1 audio track and 1 video track, or at least one of them.")},Bl=(e,t)=>{const r=new RTCPeerConnection(t);return _l(e,r),r},_l=(e,t)=>{t.ontrack=t=>{var r;if(Al.info("New track from peer."),Al.debug("Track event value: ",t),null!=t&&null!==(r=t.transceiver)&&void 0!==r&&r.resolve){const e=t.transceiver.resolve;delete t.transceiver.resolve,e(t.transceiver)}e.emit(Dl.track,t)},t.connectionState?t.onconnectionstatechange=r=>{Al.info("Peer connection state change: ",t.connectionState),e.emit(Dl.connectionStateChange,t.connectionState)}:t.oniceconnectionstatechange=r=>{Al.info("Peer ICE connection state change: ",t.iceConnectionState),e.emit(Dl.connectionStateChange,t.iceConnectionState)},t.onnegotiationneeded=async e=>{if(!t.remoteDescription)return;Al.info("Peer onnegotiationneeded, updating local description");const r=await t.createOffer();Al.info("Peer onnegotiationneeded, got local offer",r.sdp),r.sdp=gl.updateMissingVideoExtensions(r.sdp,t.remoteDescription.sdp),await t.setLocalDescription(r);const n=gl.renegotiate(r.sdp,t.remoteDescription.sdp);Al.info("Peer onnegotiationneeded, updating remote description",n),await t.setRemoteDescription({type:"answer",sdp:n}),Al.info("Peer onnegotiationneeded, renegotiation done")}},Ul=(e,t,r)=>{Al.info("Adding mediaStream tracks to RTCPeerConnection");for(const n of t.getTracks()){const i={streams:[t]};"audio"===n.kind&&(i.direction=r.disableAudio?"inactive":"sendonly"),"video"===n.kind&&(i.direction=r.disableVideo?"inactive":"sendonly",r.scalabilityMode&&(new ul).isChrome()?(Al.debug("Video track with scalability mode: ".concat(r.scalabilityMode,".")),i.sendEncodings=[{scalabilityMode:r.scalabilityMode}]):r.scalabilityMode&&Al.warn("SVC is only supported in Google Chrome")),e.addTransceiver(n,i),Al.info("Track '".concat(n.label,"' added: "),"id: ".concat(n.id),"kind: ".concat(n.kind))}},Fl=(e,t)=>{t.disableVideo||e.addTransceiver("video",{direction:"recvonly"}),t.disableAudio||e.addTransceiver("audio",{direction:"recvonly"});for(let r=0;r<t.multiplexedAudioTracks;r++)e.addTransceiver("audio",{direction:"recvonly"})},Vl=e=>{var t;const r=null!==(t=e.connectionState)&&void 0!==t?t:e.iceConnectionState;switch(r){case"checking":return"connecting";case"completed":return"connected";default:return r}};function zl(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Gl(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?zl(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zl(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const $l=An.get("Director"),ql="WebRtc";let Wl="";let Xl="https://director.millicast.com";class Hl{static setEndpoint(e){Xl=e.replace(/\/$/,"")}static getEndpoint(){return Xl}static setLiveDomain(e){Wl=e.replace(/\/$/,"")}static getLiveDomain(){return Wl}static async getPublisher(e){const t=Yl(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,arguments.length>2&&void 0!==arguments[2]?arguments[2]:ql);$l.info("Getting publisher connection path for stream name: ",t.streamName);const r={streamName:t.streamName,streamType:t.streamType},n={"Content-Type":"application/json",Authorization:"Bearer ".concat(t.token)},i="".concat(this.getEndpoint(),"/api/director/publish");try{let e=await fetch(i,{method:"POST",headers:n,body:JSON.stringify(r)});return e=await e.json(),e=Kl(e),$l.debug("Getting publisher response: ",e),e.data}catch(e){var o;throw $l.error("Error while getting publisher connection path: ",null===(o=e.response)||void 0===o?void 0:o.data),e}}static async getSubscriber(e){const t=Jl(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,arguments.length>2&&void 0!==arguments[2]?arguments[2]:null);$l.info("Getting subscriber connection data for stream name: ".concat(t.streamName," and account id: ").concat(t.streamAccountId));const r={streamAccountId:t.streamAccountId,streamName:t.streamName};let n={"Content-Type":"application/json"};t.subscriberToken&&(n=Gl(Gl({},n),{},{Authorization:"Bearer ".concat(t.subscriberToken)}));const i="".concat(this.getEndpoint(),"/api/director/subscribe");try{let e=await fetch(i,{method:"POST",headers:n,body:JSON.stringify(r)});return e=await e.json(),e=Kl(e),$l.debug("Getting subscriber response: ",e),e.data}catch(e){var o;throw $l.error("Error while getting subscriber connection path: ",null===(o=e.response)||void 0===o?void 0:o.data),e}}}const Yl=(e,t,r)=>{let n="object"==typeof e?e:{};return 0===Object.keys(n).length&&(n={token:e,streamName:t,streamType:r}),n},Jl=(e,t,r)=>{let n="object"==typeof e?e:{};return 0===Object.keys(n).length&&(n={streamName:e,streamAccountId:t,subscriberToken:r}),n},Kl=e=>{if(Hl.getLiveDomain()){const t=/\/\/(.*?)\//,r=e.data.urls.map((e=>{const r=t.exec(e);return e.replace(r[1],Hl.getLiveDomain())}));e.data.urls=r}return e};function Zl(e){this.message=e}Zl.prototype=new Error,Zl.prototype.name="InvalidCharacterError";var Ql="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new Zl("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,n,i=0,o=0,s="";n=t.charAt(o++);~n&&(r=i%4?64*r+n:n,i++%4)?s+=String.fromCharCode(255&r>>(-2*i&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return s};function ed(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(Ql(e).replace(/(.)/g,(function(e,t){var r=t.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r})))}(t)}catch(e){return Ql(t)}}function td(e){this.message=e}td.prototype=new Error,td.prototype.name="InvalidTokenError";var rd=n((function(e,t){!function(r){if(null!=t&&"number"!=typeof t.nodeType)e.exports=r();else{var n=r(),i="undefined"!=typeof self?self:$.global;"function"!=typeof i.btoa&&(i.btoa=n.btoa),"function"!=typeof i.atob&&(i.atob=n.atob)}}((function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function t(e){this.message=e}return t.prototype=new Error,t.prototype.name="InvalidCharacterError",{btoa:function(r){for(var n,i,o=String(r),s=0,a=e,c="";o.charAt(0|s)||(a="=",s%1);c+=a.charAt(63&n>>8-s%1*8)){if((i=o.charCodeAt(s+=3/4))>255)throw new t("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");n=n<<8|i}return c},atob:function(r){var n=String(r).replace(/[=]+$/,"");if(n.length%4==1)throw new t("'atob' failed: The string to be decoded is not correctly encoded.");for(var i,o,s=0,a=0,c="";o=n.charAt(a++);~o&&(i=s%4?64*i+o:o,s++%4)?c+=String.fromCharCode(255&i>>(-2*s&6)):0)o=e.indexOf(o);return c}}}))}));let nd;class id extends Ca{constructor(e,t,r,n){if(super(),nd=r,!e)throw nd.error("Stream Name is required to construct this module."),new Error("Stream Name is required to construct this module.");if(!t)throw nd.error("Token generator is required to construct this module."),new Error("Token generator is required to construct this module.");this.webRTCPeer=new jl,this.signaling=null,this.streamName=e,this.autoReconnect=n,this.reconnectionInterval=1e3,this.alreadyDisconnected=!1,this.firstReconnection=!0,this.tokenGenerator=t,this.options=null}getRTCPeerConnection(){return this.webRTCPeer?this.webRTCPeer.getRTCPeer():null}stop(){var e;nd.info("Stopping"),this.webRTCPeer.closeRTCPeer(),null===(e=this.signaling)||void 0===e||e.close(),this.signaling=null,this.webRTCPeer=new jl}isActive(){const e=this.webRTCPeer.getRTCPeerStatus();return nd.info("Broadcast status: ",e||"not_established"),"connected"===e}setReconnect(){this.signaling.on("migrate",(()=>this.replaceConnection())),this.autoReconnect&&(this.signaling.on(Sl,(()=>{!this.firstReconnection&&this.alreadyDisconnected||(this.firstReconnection=!1,this.reconnect())})),this.webRTCPeer.on(Dl.connectionStateChange,(e=>{("failed"===e||"disconnected"===e&&this.alreadyDisconnected)&&this.firstReconnection?(this.firstReconnection=!1,this.reconnect()):"disconnected"===e?(this.alreadyDisconnected=!0,setTimeout((()=>this.reconnect()),1500)):this.alreadyDisconnected=!1})))}async reconnect(){try{this.isActive()||(this.stop(),await this.connect(this.options),this.alreadyDisconnected=!1,this.reconnectionInterval=1e3,this.firstReconnection=!0)}catch(e){this.reconnectionInterval=od(this.reconnectionInterval),nd.error("Reconnection failed, retrying in ".concat(this.reconnectionInterval,"ms. Error was: "),e),this.emit("reconnect",{timeout:this.reconnectionInterval,error:e}),setTimeout((()=>this.reconnect()),this.reconnectionInterval)}}}const od=e=>e<32e3?2*e:e;function sd(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ad(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?sd(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sd(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const cd=An.get("Publish"),ud={mediaStream:null,bandwidth:0,disableVideo:!1,disableAudio:!1,codec:xl.H264,simulcast:!1,scalabilityMode:null,peerConfig:{}};function ld(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function dd(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?ld(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ld(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const fd=An.get("View"),pd={disableVideo:!1,disableAudio:!1,peerConfig:{}};e.Director=Hl,e.Logger=An,e.PeerConnection=jl,e.Publish=class extends id{constructor(e,t){super(e,t,cd,!(arguments.length>2&&void 0!==arguments[2])||arguments[2])}async connect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ud;this.options=ad(ad(ad({},ud),e),{},{setSDPToPeer:!1}),await this.initConnection({migrate:!1})}reconnect(){var e,t;this.options.mediaStream=null!==(e=null===(t=this.webRTCPeer)||void 0===t?void 0:t.getTracks())&&void 0!==e?e:this.options.mediaStream,super.reconnect()}async replaceConnection(){var e,t;cd.info("Migrating current connection"),this.options.mediaStream=null!==(e=null===(t=this.webRTCPeer)||void 0===t?void 0:t.getTracks())&&void 0!==e?e:this.options.mediaStream,await this.initConnection({migrate:!0})}async record(){var e;this.recordingAvailable?(this.options.record=!0,await(null===(e=this.signaling)||void 0===e?void 0:e.cmd("record")),cd.info("Broadcaster start recording")):cd.error("Record not available")}async unrecord(){var e;this.recordingAvailable?(this.options.record=!1,await(null===(e=this.signaling)||void 0===e?void 0:e.cmd("unrecord")),cd.info("Broadcaster stop recording")):cd.error("Unrecord not available")}async initConnection(e){var t,r;let n,i;if(cd.debug("Broadcast option values: ",this.options),!this.options.mediaStream)throw cd.error("Error while broadcasting. MediaStream required"),new Error("MediaStream required");if(!e.migrate&&this.isActive())throw cd.warn("Broadcast currently working"),new Error("Broadcast currently working");try{var o;i=await this.tokenGenerator(),this.options.peerConfig.iceServers=null===(o=i)||void 0===o?void 0:o.iceServers}catch(e){throw cd.error("Error generating token."),e}if(!i)throw cd.error("Error while broadcasting. Publisher data required"),new Error("Publisher data required");if(this.recordingAvailable=function(e,t){if("string"!=typeof e)throw new td("Invalid token specified");var r=!0===(t=t||{}).header?0:1;try{return JSON.parse(ed(e.split(".")[r]))}catch(e){throw new td("Invalid token specified: "+e.message)}}(i.jwt)[rd.atob("bWlsbGljYXN0")].record,this.options.record&&!this.recordingAvailable)throw cd.error("Error while broadcasting. Record option detected but recording is not available"),new Error("Record option detected but recording is not available");const s=new Tl({streamName:this.streamName,url:"".concat(i.urls[0],"?token=").concat(i.jwt)}),a=e.migrate?new jl:this.webRTCPeer;await a.createRTCPeer(this.options.peerConfig),null===(t=this.stopReemitingWebRTCPeerInstanceEvents)||void 0===t||t.call(this),null===(r=this.stopReemitingSignalingInstanceEvents)||void 0===r||r.call(this),this.stopReemitingWebRTCPeerInstanceEvents=ja(a,this,[Dl.connectionStateChange]),this.stopReemitingSignalingInstanceEvents=ja(s,this,[El]);const c=a.getRTCLocalSDP(this.options),u=s.connect();n=await Promise.all([c,u]);const l=n[0];let d=this.signaling;this.signaling=s;const f=this.signaling.publish(l,this.options),p=a.peer.setLocalDescription(a.sessionDescription);n=await Promise.all([f,p]);let h=n[0];!this.options.disableVideo&&this.options.bandwidth>0&&(h=a.updateBandwidthRestriction(h,this.options.bandwidth)),await a.setRTCRemoteSDP(h),cd.info("Broadcasting to streamName: ",this.streamName);let g=this.webRTCPeer;this.webRTCPeer=a,this.setReconnect(),e.migrate&&this.webRTCPeer.on(Dl.connectionStateChange,(e=>{var t,r,n,i;["connected","disconnected","failed","closed"].includes(e)&&(null===(t=d)||void 0===t||null===(r=t.close)||void 0===r||r.call(t),null===(n=g)||void 0===n||null===(i=n.closeRTCPeer)||void 0===i||i.call(n),d=g=null)}))}},e.Signaling=Tl,e.View=class extends id{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;super(e,t,fd,!(arguments.length>3&&void 0!==arguments[3])||arguments[3]),r&&this.on(Dl.track,(e=>{r.srcObject=e.streams[0]}))}async connect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pd;this.options=dd(dd(dd({},pd),e),{},{setSDPToPeer:!1}),await this.initConnection({migrate:!1})}async select(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};fd.debug("Viewer select layer values: ",e),await this.signaling.cmd("select",{layer:e}),fd.info("Connected to streamName: ",this.streamName)}async addRemoteTrack(e,t){return fd.info("Viewer adding remote % track",e),this.webRTCPeer.addRemoteTrack(e,t)}async project(e,t){for(const e of t){if(!e.trackId&&!e.media)throw fd.error("Error in projection mapping, trackId or mediaId must be set"),new Error("Error in projection mapping, trackId or mediaId must be set");const t=this.webRTCPeer.getRTCPeer();if(e.mediaId&&!t.getTransceivers().find((t=>t.mid===e.mediaId)))throw fd.error("Error in projection mapping, ".concat(e.mediaId," mid not found in local transceivers")),new Error("Error in projection mapping, ".concat(e.mediaId," mid not found in local transceivers"))}fd.debug("Viewer project source:%s layer mappings: ",e,t),await this.signaling.cmd("project",{sourceId:e,mapping:t}),fd.info("Projection done")}async unproject(e){fd.debug("Viewer unproject mediaIds: ",e),await this.signaling.cmd("unproject",{mediaIds:e}),fd.info("Unprojection done")}async replaceConnection(){fd.info("Migrating current connection"),await this.initConnection({migrate:!0})}async initConnection(e){var t,r;let n,i;if(fd.debug("Viewer connect options values: ",this.options),!e.migrate&&this.isActive())throw fd.warn("Viewer currently subscribed"),new Error("Viewer currently subscribed");try{var o;i=await this.tokenGenerator(),this.options.peerConfig.iceServers=null===(o=i)||void 0===o?void 0:o.iceServers}catch(e){throw fd.error("Error generating token."),e}if(!i)throw fd.error("Error while subscribing. Subscriber data required"),new Error("Subscriber data required");const s=new Tl({streamName:this.streamName,url:"".concat(i.urls[0],"?token=").concat(i.jwt)}),a=e.migrate?new jl:this.webRTCPeer;await a.createRTCPeer(this.options.peerConfig),null===(t=this.stopReemitingWebRTCPeerInstanceEvents)||void 0===t||t.call(this),null===(r=this.stopReemitingSignalingInstanceEvents)||void 0===r||r.call(this),this.stopReemitingWebRTCPeerInstanceEvents=ja(a,this,Object.values(Dl)),this.stopReemitingSignalingInstanceEvents=ja(s,this,[El]);const c=a.getRTCLocalSDP(dd(dd({},this.options),{},{stereo:!0})),u=s.connect();n=await Promise.all([c,u]);const l=n[0];let d=this.signaling;this.signaling=s;const f=this.signaling.subscribe(l,dd(dd({},this.options),{},{vad:this.options.multiplexedAudioTracks>0})),p=a.peer.setLocalDescription(a.sessionDescription);n=await Promise.all([f,p]);const h=n[0];await a.setRTCRemoteSDP(h),fd.info("Connected to streamName: ",this.streamName);let g=this.webRTCPeer;this.webRTCPeer=a,this.setReconnect(),e.migrate&&this.webRTCPeer.on(Dl.connectionStateChange,(e=>{if("connected"===e)setTimeout((()=>{var e,t,r,n;null===(e=d)||void 0===e||null===(t=e.close)||void 0===t||t.call(e),null===(r=g)||void 0===r||null===(n=r.closeRTCPeer)||void 0===n||n.call(r),d=g=null,fd.info("Current connection migrated")}),1e3);else if(["disconnected","failed","closed"].includes(e)){var t,r,n,i;null===(t=d)||void 0===t||null===(r=t.close)||void 0===r||r.call(t),null===(n=g)||void 0===n||null===(i=n.closeRTCPeer)||void 0===i||i.call(n),d=g=null}}))}},Object.defineProperty(e,"__esModule",{value:!0})}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba"), __webpack_require__("4362")))

/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var uncurryThis = __webpack_require__("e330");
var hasOwn = __webpack_require__("1a2d");
var isCallable = __webpack_require__("1626");
var isPrototypeOf = __webpack_require__("3a9b");
var toString = __webpack_require__("577e");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;
var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

if (DESCRIPTORS && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString(arguments[0]);
    var result = isPrototypeOf(SymbolPrototype, this)
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };

  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  SymbolWrapper.prototype = SymbolPrototype;
  SymbolPrototype.constructor = SymbolWrapper;

  var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
  var thisSymbolValue = uncurryThis(SymbolPrototype.valueOf);
  var symbolDescriptiveString = uncurryThis(SymbolPrototype.toString);
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  var replace = uncurryThis(''.replace);
  var stringSlice = uncurryThis(''.slice);

  defineProperty(SymbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = thisSymbolValue(this);
      if (hasOwn(EmptyStringDescriptionStore, symbol)) return '';
      var string = symbolDescriptiveString(symbol);
      var desc = NATIVE_SYMBOL ? stringSlice(string, 7, -1) : replace(string, regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, constructor: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e065":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var hasOwn = __webpack_require__("1a2d");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("1a2d");
var isCallable = __webpack_require__("1626");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es-x/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e25e":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var $parseInt = __webpack_require__("c20d");

// `parseInt` method
// https://tc39.es/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != $parseInt }, {
  parseInt: $parseInt
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineProperty = __webpack_require__("9bf2").f;
var defineIterator = __webpack_require__("c6d2");
var createIterResultObject = __webpack_require__("4754");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  if (kind == 'keys') return createIterResultObject(index, false);
  if (kind == 'values') return createIterResultObject(target[index], false);
  return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ "e330":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__("40d5");

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "e391":
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__("577e");

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),

/***/ "e444":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e5cb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var hasOwn = __webpack_require__("1a2d");
var createNonEnumerableProperty = __webpack_require__("9112");
var isPrototypeOf = __webpack_require__("3a9b");
var setPrototypeOf = __webpack_require__("d2bb");
var copyConstructorProperties = __webpack_require__("e893");
var proxyAccessor = __webpack_require__("aeb0");
var inheritIfRequired = __webpack_require__("7156");
var normalizeStringArgument = __webpack_require__("e391");
var installErrorCause = __webpack_require__("ab36");
var clearErrorStack = __webpack_require__("0d26");
var ERROR_STACK_INSTALLABLE = __webpack_require__("b980");
var DESCRIPTORS = __webpack_require__("83ab");
var IS_PURE = __webpack_require__("c430");

module.exports = function (FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
  var STACK_TRACE_LIMIT = 'stackTraceLimit';
  var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
  var path = FULL_NAME.split('.');
  var ERROR_NAME = path[path.length - 1];
  var OriginalError = getBuiltIn.apply(null, path);

  if (!OriginalError) return;

  var OriginalErrorPrototype = OriginalError.prototype;

  // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006
  if (!IS_PURE && hasOwn(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;

  if (!FORCED) return OriginalError;

  var BaseError = getBuiltIn('Error');

  var WrappedError = wrapper(function (a, b) {
    var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
    var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
    if (message !== undefined) createNonEnumerableProperty(result, 'message', message);
    if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty(result, 'stack', clearErrorStack(result.stack, 2));
    if (this && isPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
    if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
    return result;
  });

  WrappedError.prototype = OriginalErrorPrototype;

  if (ERROR_NAME !== 'Error') {
    if (setPrototypeOf) setPrototypeOf(WrappedError, BaseError);
    else copyConstructorProperties(WrappedError, BaseError, { name: true });
  } else if (DESCRIPTORS && STACK_TRACE_LIMIT in OriginalError) {
    proxyAccessor(WrappedError, OriginalError, STACK_TRACE_LIMIT);
    proxyAccessor(WrappedError, OriginalError, 'prepareStackTrace');
  }

  copyConstructorProperties(WrappedError, OriginalError);

  if (!IS_PURE) try {
    // Safari 13- bug: WebAssembly errors does not have a proper `.name`
    if (OriginalErrorPrototype.name !== ERROR_NAME) {
      createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);
    }
    OriginalErrorPrototype.constructor = WrappedError;
  } catch (error) { /* empty */ }

  return WrappedError;
};


/***/ }),

/***/ "e667":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "e6cf":
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__("5e7e");
__webpack_require__("14e5");
__webpack_require__("cc98");
__webpack_require__("3529");
__webpack_require__("f22b");
__webpack_require__("7149");


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__("1a2d");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es-x/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "e9c4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var getBuiltIn = __webpack_require__("d066");
var apply = __webpack_require__("2ba4");
var call = __webpack_require__("c65b");
var uncurryThis = __webpack_require__("e330");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isCallable = __webpack_require__("1626");
var isObject = __webpack_require__("861d");
var isSymbol = __webpack_require__("d9b5");
var arraySlice = __webpack_require__("f36a");
var NATIVE_SYMBOL = __webpack_require__("04f8");

var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')();
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = replacer;
  if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
  if (!isArray(replacer)) replacer = function (key, value) {
    if (isCallable($replacer)) value = call($replacer, this, key, value);
    if (!isSymbol(value)) return value;
  };
  args[1] = replacer;
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}


/***/ }),

/***/ "eb1d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__("c430");
var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var WEBKIT = __webpack_require__("512c");

// Forced replacement object prototype accessors methods
module.exports = IS_PURE || !fails(function () {
  // This feature detection crashes old WebKit
  // https://github.com/zloirock/core-js/issues/232
  if (WEBKIT && WEBKIT < 535) return;
  var key = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call, es-x/no-legacy-object-prototype-accessor-methods -- required for testing
  __defineSetter__.call(null, key, function () { /* empty */ });
  delete global[key];
});


/***/ }),

/***/ "f069":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__("59ed");

var $TypeError = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw $TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "f22b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var call = __webpack_require__("c65b");
var newPromiseCapabilityModule = __webpack_require__("f069");
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__("4738").CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});


/***/ }),

/***/ "f36a":
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__("e330");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "f5b2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var codeAt = __webpack_require__("6547").codeAt;

// `String.prototype.codePointAt` method
// https://tc39.es/ecma262/#sec-string.prototype.codepointat
$({ target: 'String', proto: true }, {
  codePointAt: function codePointAt(pos) {
    return codeAt(this, pos);
  }
});


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var isCallable = __webpack_require__("1626");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "f7d3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsSettingsAudioTrack_vue_vue_type_style_index_0_id_b7f6245a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7030");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsSettingsAudioTrack_vue_vue_type_style_index_0_id_b7f6245a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsSettingsAudioTrack_vue_vue_type_style_index_0_id_b7f6245a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f9ee":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerReportModal_vue_vue_type_style_index_0_id_ce2867ac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6340");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerReportModal_vue_vue_type_style_index_0_id_ce2867ac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerReportModal_vue_vue_type_style_index_0_id_ce2867ac_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=template&id=1f7c2003&scoped=true


var Appvue_type_template_id_1f7c2003_scoped_true_withScopeId = function _withScopeId(n) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-1f7c2003"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n;
};

var _hoisted_1 = {
  id: "viewer-container"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_VideoPlayerContainer = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerContainer");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_VideoPlayerContainer, {
    class: "ml-viewer"
  })]);
}
// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=1f7c2003&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.async-iterator.js
var es_symbol_async_iterator = __webpack_require__("b636");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.to-string-tag.js
var es_symbol_to_string_tag = __webpack_require__("944a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.to-string-tag.js
var es_json_to_string_tag = __webpack_require__("0c47");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.math.to-string-tag.js
var es_math_to_string_tag = __webpack_require__("23dc");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.cause.js
var es_error_cause = __webpack_require__("d9e2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.error.to-string.js
var es_error_to_string = __webpack_require__("d401");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-prototype-of.js
var es_object_get_prototype_of = __webpack_require__("3410");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.set-prototype-of.js
var es_object_set_prototype_of = __webpack_require__("131a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reverse.js
var es_array_reverse = __webpack_require__("26e9");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js







function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js






















function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerContainer.vue?vue&type=template&id=68be1765&scoped=true


var VideoPlayerContainervue_type_template_id_68be1765_scoped_true_withScopeId = function _withScopeId(n) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-68be1765"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n;
};

var VideoPlayerContainervue_type_template_id_68be1765_scoped_true_hoisted_1 = {
  class: "row mx-0",
  style: {
    "height": "100%"
  }
};
var _hoisted_2 = {
  class: "container-fluid pt-3 gradient-top controls-top"
};
var _hoisted_3 = {
  class: "row"
};
var _hoisted_4 = {
  class: "col-6 text-left"
};
var _hoisted_5 = {
  class: "col-6 text-right"
};
var _hoisted_6 = {
  class: "container-fluid pb-2 gradient-bottom controls-bottom"
};
var _hoisted_7 = {
  key: 1,
  class: "overlay d-flex justify-content-center align-items-center"
};

var _hoisted_8 = /*#__PURE__*/VideoPlayerContainervue_type_template_id_68be1765_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "spinner-border text-light",
    role: "status"
  }, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "sr-only"
  }, "Loading...")], -1);
});

var _hoisted_9 = [_hoisted_8];

var _hoisted_10 = /*#__PURE__*/VideoPlayerContainervue_type_template_id_68be1765_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "d-flex justify-content-center"
  }, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    class: "ml-viewer-bi-volume-mute-fill pb-0"
  })]), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("p", {
    class: "text-center tap-text"
  }, "Tap to unmute")], -1);
});

var _hoisted_11 = [_hoisted_10];
function VideoPlayerContainervue_type_template_id_68be1765_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_VideoPlayerControlsUserCount = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerControlsUserCount");

  var _component_VideoPlayerControlsBadge = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerControlsBadge");

  var _component_VideoPlayerControlsContainer = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerControlsContainer");

  var _component_VideoPlayerMedia = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerMedia");

  var _component_VideoPlayerSideVideoSources = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerSideVideoSources");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    style: {
      "height": "100%"
    },
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])({
      'align-self-center': _ctx.isSplittedView
    }),
    onMousemove: _cache[3] || (_cache[3] = function () {
      return $options.showControls && $options.showControls.apply($options, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", VideoPlayerContainervue_type_template_id_68be1765_scoped_true_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    id: "vplayer",
    ref: "player",
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["player", {
      show: $data.show,
      'col-xl-9 col-lg-8 col-xs-8 col-sm-9 limit-screen': _ctx.sourceRemoteTracks.length && _ctx.isSplittedView
    }]),
    onMousemove: _cache[1] || (_cache[1] = function () {
      return $options.showControls && $options.showControls.apply($options, arguments);
    })
  }, [_ctx.queryParams.controls ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 0,
    id: "controls",
    class: "controls",
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(!$data.show ? 'display: none' : '')
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_4, [$options.showButton('userCount') ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_VideoPlayerControlsUserCount, {
    key: 0
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_5, [$options.showButton('liveBadge') ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_VideoPlayerControlsBadge, {
    key: 0
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", _hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_VideoPlayerControlsContainer, {
    isConnected: $data.cast.isConnected,
    showButton: $options.showButton,
    currentTime: $options.currentTime,
    streamId: _ctx.queryParams.streamId
  }, null, 8, ["isConnected", "showButton", "currentTime", "streamId"])])], 4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_VideoPlayerMedia, {
    ref: "element"
  }, null, 512), _ctx.isLoading ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_7, _hoisted_9)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.autoPlayMuted && _ctx.isLive ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 2,
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.tapUnmute && $options.tapUnmute.apply($options, arguments);
    }),
    class: "overlay tap-unmute d-flex align-items-center justify-content-center"
  }, _hoisted_11)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 34), _ctx.sourceRemoteTracks.length && _ctx.isSplittedView ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 0,
    class: "row d-flex side-panel overflow-auto sc1 col-xl-3 col-lg-4 col-xs-4 col-sm-3",
    style: 'scroll-snap-type: y mandatory',
    onMousemove: _cache[2] || (_cache[2] = function () {
      return $options.showControls && $options.showControls.apply($options, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_VideoPlayerSideVideoSources)], 32)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])], 34);
}
// CONCATENATED MODULE: ./src/components/VideoPlayerContainer.vue?vue&type=template&id=68be1765&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerMedia.vue?vue&type=template&id=6ddbf58a&scoped=true


var VideoPlayerMediavue_type_template_id_6ddbf58a_scoped_true_withScopeId = function _withScopeId(n) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-6ddbf58a"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n;
};

var VideoPlayerMediavue_type_template_id_6ddbf58a_scoped_true_hoisted_1 = ["poster"];
var VideoPlayerMediavue_type_template_id_6ddbf58a_scoped_true_hoisted_2 = ["poster"];
var VideoPlayerMediavue_type_template_id_6ddbf58a_scoped_true_hoisted_3 = {
  key: 2
};
function VideoPlayerMediavue_type_template_id_6ddbf58a_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [_ctx.isMigrating || _ctx.currentElementRef === 'player' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 0
  }, [$options.displayAudioOnly ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("audio", {
    key: 0,
    playsinline: "",
    id: "player",
    ref: "player",
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])({
      'display: none;': _ctx.currentElementRef === 'player2'
    })
  }, null, 2)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("video", {
    key: 1,
    playsinline: "",
    id: "player",
    ref: "player",
    poster: _ctx.queryParams.placeholderImg,
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])({
      'display: none;': _ctx.currentElementRef === 'player2'
    })
  }, null, 10, VideoPlayerMediavue_type_template_id_6ddbf58a_scoped_true_hoisted_1))], 64)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.isMigrating || _ctx.currentElementRef === 'player2' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], {
    key: 1
  }, [$options.displayAudioOnly ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("audio", {
    key: 0,
    playsinline: "",
    id: "player2",
    ref: "player2",
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])({
      'display: none;': _ctx.currentElementRef === 'player'
    })
  }, null, 2)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("video", {
    key: 1,
    playsinline: "",
    id: "player2",
    ref: "player2",
    poster: _ctx.queryParams.placeholderImg,
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])({
      'display: none;': _ctx.currentElementRef === 'player'
    })
  }, null, 10, VideoPlayerMediavue_type_template_id_6ddbf58a_scoped_true_hoisted_2))], 64)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.sourceRemoteTracks.length && _ctx.isSplittedView ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", VideoPlayerMediavue_type_template_id_6ddbf58a_scoped_true_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(this.mainLabel), 1)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 64);
}
// CONCATENATED MODULE: ./src/components/VideoPlayerMedia.vue?vue&type=template&id=6ddbf58a&scoped=true

// EXTERNAL MODULE: ./node_modules/@millicast/sdk/dist/millicast.umd.js
var millicast_umd = __webpack_require__("e014");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__("466d");

// EXTERNAL MODULE: ./node_modules/@vue/devtools-api/lib/esm/env.js
var env = __webpack_require__("abc5");

// CONCATENATED MODULE: ./node_modules/@vue/devtools-api/lib/esm/const.js
const HOOK_SETUP = 'devtools-plugin:setup';
const HOOK_PLUGIN_SETTINGS_SET = 'plugin:settings:set';

// EXTERNAL MODULE: ./node_modules/@vue/devtools-api/lib/esm/time.js
var time = __webpack_require__("5134");

// CONCATENATED MODULE: ./node_modules/@vue/devtools-api/lib/esm/proxy.js


class proxy_ApiProxy {
    constructor(plugin, hook) {
        this.target = null;
        this.targetQueue = [];
        this.onQueue = [];
        this.plugin = plugin;
        this.hook = hook;
        const defaultSettings = {};
        if (plugin.settings) {
            for (const id in plugin.settings) {
                const item = plugin.settings[id];
                defaultSettings[id] = item.defaultValue;
            }
        }
        const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
        let currentSettings = Object.assign({}, defaultSettings);
        try {
            const raw = localStorage.getItem(localSettingsSaveId);
            const data = JSON.parse(raw);
            Object.assign(currentSettings, data);
        }
        catch (e) {
            // noop
        }
        this.fallbacks = {
            getSettings() {
                return currentSettings;
            },
            setSettings(value) {
                try {
                    localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
                }
                catch (e) {
                    // noop
                }
                currentSettings = value;
            },
            now() {
                return Object(time["a" /* now */])();
            },
        };
        if (hook) {
            hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
                if (pluginId === this.plugin.id) {
                    this.fallbacks.setSettings(value);
                }
            });
        }
        this.proxiedOn = new Proxy({}, {
            get: (_target, prop) => {
                if (this.target) {
                    return this.target.on[prop];
                }
                else {
                    return (...args) => {
                        this.onQueue.push({
                            method: prop,
                            args,
                        });
                    };
                }
            },
        });
        this.proxiedTarget = new Proxy({}, {
            get: (_target, prop) => {
                if (this.target) {
                    return this.target[prop];
                }
                else if (prop === 'on') {
                    return this.proxiedOn;
                }
                else if (Object.keys(this.fallbacks).includes(prop)) {
                    return (...args) => {
                        this.targetQueue.push({
                            method: prop,
                            args,
                            resolve: () => { },
                        });
                        return this.fallbacks[prop](...args);
                    };
                }
                else {
                    return (...args) => {
                        return new Promise(resolve => {
                            this.targetQueue.push({
                                method: prop,
                                args,
                                resolve,
                            });
                        });
                    };
                }
            },
        });
    }
    async setRealTarget(target) {
        this.target = target;
        for (const item of this.onQueue) {
            this.target.on[item.method](...item.args);
        }
        for (const item of this.targetQueue) {
            item.resolve(await this.target[item.method](...item.args));
        }
    }
}

// CONCATENATED MODULE: ./node_modules/@vue/devtools-api/lib/esm/index.js






function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = Object(env["b" /* getTarget */])();
    const hook = Object(env["a" /* getDevtoolsGlobalHook */])();
    const enableProxy = env["c" /* isProxyAvailable */] && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
        hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    }
    else {
        const proxy = enableProxy ? new proxy_ApiProxy(descriptor, hook) : null;
        const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
        list.push({
            pluginDescriptor: descriptor,
            setupFn,
            proxy,
        });
        if (proxy)
            setupFn(proxy.proxiedTarget);
    }
}

// CONCATENATED MODULE: ./node_modules/vuex/dist/vuex.esm-browser.js
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */



var storeKey = 'store';

function useStore (key) {
  if ( key === void 0 ) key = null;

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])(key !== null ? key : storeKey)
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset state
  resetStoreState(store, state, hot);
}

function resetStoreState (store, state, hot) {
  var oldState = store._state;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computedObj = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldState.
    // using partial to return function with only arguments preserved in closure environment.
    computedObj[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      // TODO: use `computed` when it's possible. at the moment we can't due to
      // https://github.com/vuejs/vuex/pull/1883
      get: function () { return computedObj[key](); },
      enumerable: true // for local getters
    });
  });

  store._state = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
    data: state
  });

  // enable strict mode for new state
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldState) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldState.data = null;
      });
    }
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && true) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      parentState[moduleName] = module.state;
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (!store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (!store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by state update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () { return store._state.data; }, function () {
    {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, flush: 'sync' });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

var LABEL_VUEX_BINDINGS = 'vuex bindings';
var MUTATIONS_LAYER_ID = 'vuex:mutations';
var ACTIONS_LAYER_ID = 'vuex:actions';
var INSPECTOR_ID = 'vuex';

var actionId = 0;

function addDevtools (app, store) {
  setupDevtoolsPlugin(
    {
      id: 'org.vuejs.vuex',
      app: app,
      label: 'Vuex',
      homepage: 'https://next.vuex.vuejs.org/',
      logo: 'https://vuejs.org/images/icons/favicon-96x96.png',
      packageName: 'vuex',
      componentStateTypes: [LABEL_VUEX_BINDINGS]
    },
    function (api) {
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: 'Vuex Mutations',
        color: COLOR_LIME_500
      });

      api.addTimelineLayer({
        id: ACTIONS_LAYER_ID,
        label: 'Vuex Actions',
        color: COLOR_LIME_500
      });

      api.addInspector({
        id: INSPECTOR_ID,
        label: 'Vuex',
        icon: 'storage',
        treeFilterPlaceholder: 'Filter stores...'
      });

      api.on.getInspectorTree(function (payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          if (payload.filter) {
            var nodes = [];
            flattenStoreForInspectorTree(nodes, store._modules.root, payload.filter, '');
            payload.rootNodes = nodes;
          } else {
            payload.rootNodes = [
              formatStoreForInspectorTree(store._modules.root, '')
            ];
          }
        }
      });

      api.on.getInspectorState(function (payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          makeLocalGetters(store, modulePath);
          payload.state = formatStoreForInspectorState(
            getStoreModule(store._modules, modulePath),
            modulePath === 'root' ? store.getters : store._makeLocalGettersCache,
            modulePath
          );
        }
      });

      api.on.editInspectorState(function (payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          var path = payload.path;
          if (modulePath !== 'root') {
            path = modulePath.split('/').filter(Boolean).concat( path);
          }
          store._withCommit(function () {
            payload.set(store._state.data, path, payload.state.value);
          });
        }
      });

      store.subscribe(function (mutation, state) {
        var data = {};

        if (mutation.payload) {
          data.payload = mutation.payload;
        }

        data.state = state;

        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);

        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: Date.now(),
            title: mutation.type,
            data: data
          }
        });
      });

      store.subscribeAction({
        before: function (action, state) {
          var data = {};
          if (action.payload) {
            data.payload = action.payload;
          }
          action._id = actionId++;
          action._time = Date.now();
          data.state = state;

          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: action._time,
              title: action.type,
              groupId: action._id,
              subtitle: 'start',
              data: data
            }
          });
        },
        after: function (action, state) {
          var data = {};
          var duration = Date.now() - action._time;
          data.duration = {
            _custom: {
              type: 'duration',
              display: (duration + "ms"),
              tooltip: 'Action duration',
              value: duration
            }
          };
          if (action.payload) {
            data.payload = action.payload;
          }
          data.state = state;

          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: action.type,
              groupId: action._id,
              subtitle: 'end',
              data: data
            }
          });
        }
      });
    }
  );
}

// extracted from tailwind palette
var COLOR_LIME_500 = 0x84cc16;
var COLOR_DARK = 0x666666;
var COLOR_WHITE = 0xffffff;

var TAG_NAMESPACED = {
  label: 'namespaced',
  textColor: COLOR_WHITE,
  backgroundColor: COLOR_DARK
};

/**
 * @param {string} path
 */
function extractNameFromPath (path) {
  return path && path !== 'root' ? path.split('/').slice(-2, -1)[0] : 'Root'
}

/**
 * @param {*} module
 * @return {import('@vue/devtools-api').CustomInspectorNode}
 */
function formatStoreForInspectorTree (module, path) {
  return {
    id: path || 'root',
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: extractNameFromPath(path),
    tags: module.namespaced ? [TAG_NAMESPACED] : [],
    children: Object.keys(module._children).map(function (moduleName) { return formatStoreForInspectorTree(
        module._children[moduleName],
        path + moduleName + '/'
      ); }
    )
  }
}

/**
 * @param {import('@vue/devtools-api').CustomInspectorNode[]} result
 * @param {*} module
 * @param {string} filter
 * @param {string} path
 */
function flattenStoreForInspectorTree (result, module, filter, path) {
  if (path.includes(filter)) {
    result.push({
      id: path || 'root',
      label: path.endsWith('/') ? path.slice(0, path.length - 1) : path || 'Root',
      tags: module.namespaced ? [TAG_NAMESPACED] : []
    });
  }
  Object.keys(module._children).forEach(function (moduleName) {
    flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + '/');
  });
}

/**
 * @param {*} module
 * @return {import('@vue/devtools-api').CustomInspectorState}
 */
function formatStoreForInspectorState (module, getters, path) {
  getters = path === 'root' ? getters : getters[path];
  var gettersKeys = Object.keys(getters);
  var storeState = {
    state: Object.keys(module.state).map(function (key) { return ({
      key: key,
      editable: true,
      value: module.state[key]
    }); })
  };

  if (gettersKeys.length) {
    var tree = transformPathsToObjectTree(getters);
    storeState.getters = Object.keys(tree).map(function (key) { return ({
      key: key.endsWith('/') ? extractNameFromPath(key) : key,
      editable: false,
      value: canThrow(function () { return tree[key]; })
    }); });
  }

  return storeState
}

function transformPathsToObjectTree (getters) {
  var result = {};
  Object.keys(getters).forEach(function (key) {
    var path = key.split('/');
    if (path.length > 1) {
      var target = result;
      var leafKey = path.pop();
      path.forEach(function (p) {
        if (!target[p]) {
          target[p] = {
            _custom: {
              value: {},
              display: p,
              tooltip: 'Module',
              abstract: true
            }
          };
        }
        target = target[p]._custom.value;
      });
      target[leafKey] = canThrow(function () { return getters[key]; });
    } else {
      result[key] = canThrow(function () { return getters[key]; });
    }
  });
  return result
}

function getStoreModule (moduleMap, path) {
  var names = path.split('/').filter(function (n) { return n; });
  return names.reduce(
    function (module, moduleName, i) {
      var child = module[moduleName];
      if (!child) {
        throw new Error(("Missing module \"" + moduleName + "\" for path \"" + path + "\"."))
      }
      return i === names.length - 1 ? child : child._children
    },
    path === 'root' ? moduleMap : moduleMap.root._children
  )
}

function canThrow (cb) {
  try {
    return cb()
  } catch (e) {
    return e
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1$1 = this;
    if ( runtime === void 0 ) runtime = true;

  {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

function createStore (options) {
  return new Store(options)
}

var Store = function Store (options) {
  var this$1$1 = this;
  if ( options === void 0 ) options = {};

  {
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;
  var devtools = options.devtools;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._makeLocalGettersCache = Object.create(null);
  this._devtools = devtools;

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store state, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreState(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1$1); });
};

var prototypeAccessors = { state: { configurable: true } };

Store.prototype.install = function install (app, injectKey) {
  app.provide(injectKey || storeKey, this);
  app.config.globalProperties.$store = this;

  var useDevtools = this._devtools !== undefined
    ? this._devtools
    : true ;

  if (useDevtools) {
    addDevtools(app, this);
  }
};

prototypeAccessors.state.get = function () {
  return this._state.data
};

prototypeAccessors.state.set = function (v) {
  {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1$1.state); });

  if (
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1$1.state); });
  } catch (e) {
    {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1$1.state); });
      } catch (e) {
        {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1$1.state, error); });
      } catch (e) {
        {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch$1 (getter, cb, options) {
    var this$1$1 = this;

  {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["watch"])(function () { return getter(this$1$1.state, this$1$1.getters); }, cb, Object.assign({}, options))
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1$1 = this;

  this._withCommit(function () {
    this$1$1._state.data = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreState(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1$1 = this;

  if (typeof path === 'string') { path = [path]; }

  {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
    delete parentState[path[path.length - 1]];
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (!isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (!isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (!isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (!(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (!isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (!module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var vuex_esm_browser_index = {
  version: '4.0.2',
  Store: Store,
  storeKey: storeKey,
  createStore: createStore,
  useStore: useStore,
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

/* harmony default export */ var vuex_esm_browser = (vuex_esm_browser_index);


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__("c740");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// CONCATENATED MODULE: ./src/store/modules/sources.js



var defaulState = {
  videoSources: [],
  audioSources: [],
  selectedVideoSource: {
    name: 'none'
  },
  selectedAudioSource: {
    name: 'none'
  },
  isAudioOnly: false,
  stream: null,
  sourceRemoteTracks: [],
  mainLabel: 'Main'
};
/* harmony default export */ var modules_sources = ({
  namespaced: true,
  state: defaulState,
  mutations: {
    setSelectedSource: function setSelectedSource(state, _ref) {
      var kind = _ref.kind,
          selectedSource = _ref.selectedSource;

      if (kind === 'video') {
        state.selectedVideoSource = selectedSource;
      } else if (kind === 'audio') {
        state.selectedAudioSource = selectedSource;
      }
    },
    setSources: function setSources(state, _ref2) {
      var kind = _ref2.kind,
          sources = _ref2.sources;

      if (kind === 'video') {
        state.videoSources = sources;
      } else if (kind === 'audio') {
        state.audioSources = sources;
      }
    },
    setStream: function setStream(state, stream) {
      state.stream = stream;
    },
    setIsAudioOnly: function setIsAudioOnly(state, isAudioOnly) {
      state.isAudioOnly = isAudioOnly;
    },
    addSourceRemoteTrack: function addSourceRemoteTrack(state, sourceRemoteTrack) {
      state.sourceRemoteTracks.push(sourceRemoteTrack); //I know that is video source because we don't implement multi audio

      var sid = state.videoSources.findIndex(function (v) {
        return v.sourceId === sourceRemoteTrack.sourceId;
      });

      if (sid !== -1) {
        state.videoSources[sid].mid = sourceRemoteTrack.transceiver.mid;
      }
    },
    replaceSourceRemoteTrack: function replaceSourceRemoteTrack(state, _ref3) {
      var sourceRemoteTrack = _ref3.sourceRemoteTrack,
          remoteTrackIndex = _ref3.remoteTrackIndex;
      state.sourceRemoteTracks[remoteTrackIndex] = sourceRemoteTrack; //I know that is video source because we don't implement multi audio

      var sid = state.videoSources.findIndex(function (v) {
        return v.sourceId === sourceRemoteTrack.sourceId;
      });

      if (sid !== -1) {
        state.videoSources[sid].mid = sourceRemoteTrack.transceiver.mid;
      }
    },
    removeSourceRemoteTrack: function removeSourceRemoteTrack(state, sourceId) {
      var remoteToDeleteIndex = state.sourceRemoteTracks.findIndex(function (remoteTrack) {
        return remoteTrack.sourceId === sourceId;
      });

      if (remoteToDeleteIndex !== -1) {
        state.sourceRemoteTracks.splice(remoteToDeleteIndex, 1);
      }
    },
    setMainLabel: function setMainLabel(state, label) {
      state.mainLabel = label;
    }
  },
  getters: {
    getVideoSources: function getVideoSources(state) {
      return state.videoSources;
    },
    getAudioSources: function getAudioSources(state) {
      return state.audioSources;
    },
    getVideoHasMain: function getVideoHasMain(state) {
      return state.videoSources.findIndex(function (source) {
        return source.sourceId === null;
      }) !== -1;
    },
    getAudioHasMain: function getAudioHasMain(state) {
      return state.audioSources.findIndex(function (source) {
        return source.sourceId === null;
      }) !== -1;
    }
  }
});
// CONCATENATED MODULE: ./src/store/modules/layers.js
var layers_defaulState = {
  medias: {
    active: [],
    inactive: []
  },
  selectedQuality: {
    name: 'Auto'
  }
};
/* harmony default export */ var modules_layers = ({
  namespaced: true,
  state: layers_defaulState,
  mutations: {
    setMedias: function setMedias(state, medias) {
      state.medias = medias;
    },
    setSelectedQuality: function setSelectedQuality(state, quality) {
      state.selectedQuality = quality;
    },
    selectQuality: function selectQuality(state, quality) {
      state.selectedQuality = quality;
    }
  },
  getters: {
    getActiveMedias: function getActiveMedias(state) {
      return state.medias.active;
    }
  }
});
// CONCATENATED MODULE: ./src/store/modules/controls.js
var controls_defaulState = {
  video: null,
  playing: false,
  muted: false,
  player: null,
  srcObject: null,
  pip: null,
  autoPlayMuted: false,
  volume: '1',
  isMobile: false,
  dropup: '',
  fullscreen: false,
  isLive: false,
  isLoading: true,
  trackWarning: false,
  castOptions: {},
  castAvailable: false,
  castIsConnected: false,
  castDevice: {},
  viewerCount: null,
  reconnection: {
    status: false,
    error: null,
    timeout: null
  },
  currentElementRef: 'player',
  isMigrating: false,
  viewerMigratingEvent: false,
  migrateListenerIsSet: false,
  isSplittedView: false,
  previousSplitState: false
};
/* harmony default export */ var controls = ({
  namespaced: true,
  state: controls_defaulState,
  mutations: {
    setVideo: function setVideo(state, video) {
      state.video = video;
    },
    setPlaying: function setPlaying(state, playing) {
      if (!state.isMigrating) state.playing = playing;
    },
    setPip: function setPip(state, pip) {
      state.pip = pip;
    },
    stopVideo: function stopVideo(state) {
      state.player.stop();
      state.player.currentTime = null;
    },
    setSrcObject: function setSrcObject(state, srcObject) {
      state.srcObject = srcObject;
    },
    setStateSrcObject: function setStateSrcObject(state, srcObject) {
      if (srcObject !== null) {
        state.srcObject = srcObject;
      }
    },
    setCurrentElementRef: function setCurrentElementRef(state, currentElementRef) {
      state.currentElementRef = currentElementRef;
    },
    setVideoVolume: function setVideoVolume(state, volume) {
      state.video.volume = volume;
    },
    setVideoMuted: function setVideoMuted(state, muted) {
      state.video.muted = muted;
      state.muted = muted;
    },
    setVideoAutoplay: function setVideoAutoplay(state, autoplay) {
      state.video.autoplay = autoplay;
    },
    setVideoSource: function setVideoSource(state, source) {
      state.video.srcObject = source;
    },
    setAutoPlayMuted: function setAutoPlayMuted(state, autoPlayMuted) {
      state.autoPlayMuted = autoPlayMuted;
    },
    setDropup: function setDropup(state, name) {
      state.dropup = name != state.dropup ? name : '';
    },
    setMobile: function setMobile(state, status) {
      state.isMobile = status;
    },
    setIsLive: function setIsLive(state, isLive) {
      if (!isLive && document.pictureInPictureElement) {
        document.exitPictureInPicture();
      }

      state.isLive = isLive;
    },
    setIsLoading: function setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
      state.castOptions.loading = isLoading;
    },
    toggleFullscreen: function toggleFullscreen(state) {
      state.fullscreen = !state.fullscreen;
    },
    setTrackWarning: function setTrackWarning(state, trackWarning) {
      state.trackWarning = trackWarning;
    },
    setCastOptions: function setCastOptions(state, options) {
      state.castOptions = options;
    },
    setCastDevice: function setCastDevice(state, castDevice) {
      state.castDevice = castDevice;
    },
    setCastAvailable: function setCastAvailable(state, castAvailable) {
      state.castAvailable = castAvailable;
    },
    setCastIsConnected: function setCastIsConnected(state, castIsConnected) {
      state.castIsConnected = castIsConnected;
    },
    setViewerCount: function setViewerCount(state, viewerCount) {
      state.viewerCount = viewerCount;
    },
    handleReconnection: function handleReconnection(state, _ref) {
      var error = _ref.error,
          timeout = _ref.timeout;
      state.reconnection.error = error;
      state.reconnection.timeout = timeout;
      state.reconnection.status = true;
      setTimeout(function () {
        state.reconnection.status = false;
        state.reconnection.error = null;
        state.reconnection.timeout = null;
      }, timeout);
    },
    setIsMigrating: function setIsMigrating(state, isMigrating) {
      state.isMigrating = isMigrating;
    },
    setViewerMigratingEvent: function setViewerMigratingEvent(state, viewerMigratingEvent) {
      state.viewerMigratingEvent = viewerMigratingEvent;
    },
    setMigrateListenerIsSet: function setMigrateListenerIsSet(state, migrateListenerIsSet) {
      state.migrateListenerIsSet = migrateListenerIsSet;
    },
    setIsSplittedView: function setIsSplittedView(state, isSplittedView) {
      state.isSplittedView = isSplittedView;
    },
    setPreviousSplitState: function setPreviousSplitState(state, previousSplitState) {
      if (!state.isMigrating) {
        state.previousSplitState = previousSplitState;
      }
    }
  },
  getters: {}
});
// CONCATENATED MODULE: ./src/store/modules/viewConnection.js
var defaultState = {
  millicastView: null,
  eventListeners: {
    reconnect: null,
    stats: null,
    broadcastEvent: null
  },
  trackEvent: {
    audio: {
      track: null,
      transceiver: [null]
    },
    video: {
      track: null,
      transceiver: [null]
    }
  }
};
/* harmony default export */ var viewConnection = ({
  namespaced: true,
  state: defaultState,
  mutations: {
    setMillicastView: function setMillicastView(state, millicastView) {
      state.millicastView = millicastView;
    }
  }
});
// CONCATENATED MODULE: ./src/service/userParams.js

 // const availableControls = ['play', 'volume', 'pip', 'fullscreen', 'cast', 'liveBadge', 'userCount', 'settings']

var defaultOptions = {
  audioOnly: false,
  autoplay: true,
  controls: true,
  directorUrl: null,
  hideButtons: [],
  muted: true,
  placeholderImg: null,
  streamId: null,
  token: null
};
function setUserParams(_ref) {
  var streamId = _ref.streamId,
      audioOnly = _ref.audioOnly,
      token = _ref.token,
      image = _ref.image,
      directorUrl = _ref.directorUrl,
      hideButtons = _ref.hideButtons,
      autoplay = _ref.autoplay,
      muted = _ref.muted;
  var options = {};
  options.streamId = streamId;
  options.audioOnly = audioOnly !== null && audioOnly !== void 0 ? audioOnly : false;
  options.token = token;
  options.placeholderImg = image;
  options.directorUrl = directorUrl;
  options.hideButtons = hideButtons !== null && hideButtons !== void 0 ? hideButtons : [];
  options.autoplay = autoplay !== null && autoplay !== void 0 ? autoplay : true;
  options.muted = muted !== null && muted !== void 0 ? muted : false;
  src_store.commit('Params/setQueryParams', _extends(_extends({}, defaultOptions), options));
}
// CONCATENATED MODULE: ./src/store/modules/params.js

var params_defaulState = {
  queryParams: defaultOptions
};
/* harmony default export */ var params = ({
  namespaced: true,
  state: params_defaulState,
  mutations: {
    setQueryParams: function setQueryParams(state, queryParams) {
      state.queryParams = queryParams;
    }
  }
});
// CONCATENATED MODULE: ./src/store/index.js






/* harmony default export */ var src_store = (createStore({
  state: {
    sources: []
  },
  mutations: {},
  actions: {},
  modules: {
    Sources: modules_sources,
    Layers: modules_layers,
    Controls: controls,
    ViewConnection: viewConnection,
    Params: params
  }
}));
// CONCATENATED MODULE: ./src/service/utils/params.js



var params_state = src_store.state;
var getAccountId = function getAccountId() {
  var _state$Params$queryPa, _state$Params$queryPa2;

  return (_state$Params$queryPa = params_state.Params.queryParams.streamId) === null || _state$Params$queryPa === void 0 ? void 0 : (_state$Params$queryPa2 = _state$Params$queryPa.match(/^(.*)\/.*$/)) === null || _state$Params$queryPa2 === void 0 ? void 0 : _state$Params$queryPa2[1];
};
var getStreamName = function getStreamName() {
  var _state$Params$queryPa3, _state$Params$queryPa4;

  return (_state$Params$queryPa3 = params_state.Params.queryParams.streamId) === null || _state$Params$queryPa3 === void 0 ? void 0 : (_state$Params$queryPa4 = _state$Params$queryPa3.match(/^.*\/(.*)$/)) === null || _state$Params$queryPa4 === void 0 ? void 0 : _state$Params$queryPa4[1];
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.define-getter.js
var es_object_define_getter = __webpack_require__("12a8");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// CONCATENATED MODULE: ./node_modules/can-autoplay/build/can-autoplay.es.js
/* global Blob */
// This file is generated. Do not edit this file directly.
// Command: 'npm run generate' should be used to update the content.

/**
 * @type {Blob}
 */
var AUDIO = new Blob([new Uint8Array([255, 227, 24, 196, 0, 0, 0, 3, 72, 1, 64, 0, 0, 4, 132, 16, 31, 227, 192, 225, 76, 255, 67, 12, 255, 221, 27, 255, 228, 97, 73, 63, 255, 195, 131, 69, 192, 232, 223, 255, 255, 207, 102, 239, 255, 255, 255, 101, 158, 206, 70, 20, 59, 255, 254, 95, 70, 149, 66, 4, 16, 128, 0, 2, 2, 32, 240, 138, 255, 36, 106, 183, 255, 227, 24, 196, 59, 11, 34, 62, 80, 49, 135, 40, 0, 253, 29, 191, 209, 200, 141, 71, 7, 255, 252, 152, 74, 15, 130, 33, 185, 6, 63, 255, 252, 195, 70, 203, 86, 53, 15, 255, 255, 247, 103, 76, 121, 64, 32, 47, 255, 34, 227, 194, 209, 138, 76, 65, 77, 69, 51, 46, 57, 55, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 255, 227, 24, 196, 73, 13, 153, 210, 100, 81, 135, 56, 0, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170])], { type: 'audio/mpeg' });

/**
 * @type {Blob}
 */
var VIDEO = new Blob([new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101, 101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111, 118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107, 0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0, 0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105, 110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116, 98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0, 0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0, 1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1, 2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0, 0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111, 111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118, 102, 53, 54, 46, 52, 48, 46, 49, 48, 49])], { type: 'video/mp4' });

/* global URL */
function setupDefaultValues(options) {
  return Object.assign({
    muted: false,
    timeout: 250,
    inline: false
  }, options);
}

function startPlayback(_ref, elementCallback) {
  var muted = _ref.muted,
      timeout = _ref.timeout,
      inline = _ref.inline;

  var _elementCallback = elementCallback(),
      element = _elementCallback.element,
      source = _elementCallback.source;

  var playResult = void 0;
  var timeoutId = void 0;
  var sendOutput = void 0;

  element.muted = muted;
  if (muted === true) {
    element.setAttribute('muted', 'muted');
  }
  // indicates that the video is to be played "inline",
  // that is within the element's playback area.
  if (inline === true) {
    element.setAttribute('playsinline', 'playsinline');
  }

  element.src = source;

  return new Promise(function (resolve) {
    playResult = element.play();
    timeoutId = setTimeout(function () {
      sendOutput(false, new Error('Timeout ' + timeout + ' ms has been reached'));
    }, timeout);
    sendOutput = function sendOutput(result) {
      var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // Clean up to avoid MediaElementLeak
      element.remove();
      element.srcObject = null;

      clearTimeout(timeoutId);
      resolve({ result: result, error: error });
    };

    if (playResult !== undefined) {
      playResult.then(function () {
        return sendOutput(true);
      }).catch(function (playError) {
        return sendOutput(false, playError);
      });
    } else {
      sendOutput(true);
    }
  });
}

//
// API
//

function can_autoplay_es_video(options) {
  options = setupDefaultValues(options);
  return startPlayback(options, function () {
    return {
      element: document.createElement('video'),
      source: URL.createObjectURL(VIDEO)
    };
  });
}

function audio(options) {
  options = setupDefaultValues(options);
  return startPlayback(options, function () {
    return {
      element: document.createElement('audio'),
      source: URL.createObjectURL(AUDIO)
    };
  });
}

var can_autoplay_es_index = { audio: audio, video: can_autoplay_es_video };

/* harmony default export */ var can_autoplay_es = (can_autoplay_es_index);

// CONCATENATED MODULE: ./src/service/utils/viewConnection.js














var commit = src_store.commit,
    viewConnection_state = src_store.state;


var setEnvironment = function setEnvironment() {
  viewConnection_setDirectorEndpoint();
  viewConnection_setLiveDomain();
  viewConnection_setPeerConnection();
};

var viewConnection_setDirectorEndpoint = function setDirectorEndpoint() {
  if (Object({"NODE_ENV":"production","BASE_URL":"/"}).VUE_APP_DIRECTOR_ENDPOINT || viewConnection_state.Params.queryParams.directorUrl) {
    var _state$Params$queryPa;

    millicast_umd["Director"].setEndpoint((_state$Params$queryPa = viewConnection_state.Params.queryParams.directorUrl) !== null && _state$Params$queryPa !== void 0 ? _state$Params$queryPa : Object({"NODE_ENV":"production","BASE_URL":"/"}).VUE_APP_DIRECTOR_ENDPOINT);
  }
};

var viewConnection_setLiveDomain = function setLiveDomain() {
  if (Object({"NODE_ENV":"production","BASE_URL":"/"}).VUE_APP_LIVEWS_ENDPOINT) {
    millicast_umd["Director"].setLiveDomain(Object({"NODE_ENV":"production","BASE_URL":"/"}).VUE_APP_LIVEWS_ENDPOINT);
  }
};

var viewConnection_setPeerConnection = function setPeerConnection() {
  if (Object({"NODE_ENV":"production","BASE_URL":"/"}).VUE_APP_TURN_ENDPOINT) {
    millicast_umd["PeerConnection"].setTurnServerLocation(Object({"NODE_ENV":"production","BASE_URL":"/"}).VUE_APP_TURN_ENDPOINT);
  }
};

var viewConnection_handleInitViewConnection = function handleInitViewConnection(accountId, streamName) {
  if (!streamName || !accountId) {
    throw new Error('Stream ID not provided.');
  }

  setEnvironment();

  var tokenGenerator = function tokenGenerator() {
    return millicast_umd["Director"].getSubscriber(streamName, accountId, viewConnection_state.Params.queryParams.token);
  };

  var millicastView = new millicast_umd["View"](streamName, tokenGenerator);
  window.millicastView = millicastView;

  window.__defineGetter__('peer', function () {
    return millicastView.getRTCPeerConnection();
  });

  commit('ViewConnection/setMillicastView', millicastView);
};
var handleConnectToStream = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var millicastView, _e$response, _e$response$data, _e$response$data$data, message;

    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            millicastView = viewConnection_state.ViewConnection.millicastView;

            if (!millicastView.isActive()) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            _context.prev = 3;
            _context.next = 6;
            return setCanAutoPlayStream();

          case 6:
            _context.next = 8;
            return millicastView.connect({
              events: ['active', 'inactive', 'layers', 'viewercount'],
              absCaptureTime: true
            });

          case 8:
            addSignalingMigrateListener();
            _context.next = 21;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](3);
            message = (_e$response = _context.t0.response) === null || _e$response === void 0 ? void 0 : (_e$response$data = _e$response.data) === null || _e$response$data === void 0 ? void 0 : (_e$response$data$data = _e$response$data.data) === null || _e$response$data$data === void 0 ? void 0 : _e$response$data$data.message;
            commit('Controls/setIsLoading', false);
            commit('Controls/setIsLive', false);
            millicastView.reconnect();

            if (message) {
              _context.next = 19;
              break;
            }

            return _context.abrupt("return");

          case 19:
            if (message.toLowerCase().includes('stream not being published')) {
              _context.next = 21;
              break;
            }

            throw new Error("".concat(message.charAt(0).toUpperCase()).concat(message.slice(1)));

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 11]]);
  }));

  return function handleConnectToStream() {
    return _ref.apply(this, arguments);
  };
}();
var viewConnection_setTrackEvent = function setTrackEvent() {
  var millicastView = viewConnection_state.ViewConnection.millicastView;
  millicastView.on('track', /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!event.streams.length) {
                _context2.next = 3;
                break;
              }

              _context2.next = 3;
              return setStream(event.streams[0]);

            case 3:
              if (!viewConnection_state.ViewConnection.trackEvent[event.track.kind].transceiver[0]) {
                viewConnection_state.ViewConnection.trackEvent[event.track.kind].transceiver[0] = event.transceiver;
              } else {
                viewConnection_state.ViewConnection.trackEvent[event.track.kind].transceiver.push(event.transceiver);
              }

              viewConnection_state.ViewConnection.trackEvent[event.track.kind].track = true;

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
};

var setStream = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(entrySrcObject) {
    var video, opositeElementRef, mediaTag;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            video = viewConnection_state.Controls.video;
            addSignalingMigrateListener();
            commit('Controls/setSrcObject', entrySrcObject); //If we already had a a stream and is not migrating then we ignore it (Firefox addRemoteTrack issue)

            if (!(video.srcObject && video.srcObject.id !== entrySrcObject.id && !viewConnection_state.Controls.viewerMigratingEvent)) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return");

          case 5:
            if (!(video.srcObject && video.srcObject.id !== entrySrcObject.id && viewConnection_state.Controls.viewerMigratingEvent)) {
              _context4.next = 24;
              break;
            }

            commit('Controls/setPreviousSplitState', viewConnection_state.Controls.isSplittedView);
            commit('Controls/setIsMigrating', true);
            commit('Controls/setIsSplittedView', false);
            _context4.next = 11;
            return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])();

          case 11:
            opositeElementRef = viewConnection_state.Controls.currentElementRef === 'player' ? 'player2' : 'player';
            mediaTag = document.getElementById(opositeElementRef);
            mediaTag.srcObject = entrySrcObject;
            mediaTag.autoplay = viewConnection_state.Controls.playing;
            mediaTag.muted = viewConnection_state.Controls.muted;
            removeVideoPauseListeners();
            addVideoEventListeners(mediaTag);
            mediaTag.onloadedmetadata = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      commit('Controls/setVideo', mediaTag);
                      commit('Controls/setCurrentElementRef', opositeElementRef);
                      commit('Controls/setIsMigrating', false);
                      commit('Controls/setIsSplittedView', viewConnection_state.Controls.previousSplitState);

                      if (document.pictureInPictureElement) {
                        mediaTag.requestPictureInPicture();
                      }

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
            commit('Controls/setViewerMigratingEvent', false);
            commit('Controls/setMigrateListenerIsSet', false); //We have to set the listener again since the signaling attribute of millicastView is changed after the migrate.

            addSignalingMigrateListener();
            _context4.next = 25;
            break;

          case 24:
            setVideoPlayer({
              videoPlayer: video,
              srcObject: entrySrcObject
            });

          case 25:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function setStream(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var setCanAutoPlayStream = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var canAutoPlayVideo, muted;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            commit('Controls/setVideoAutoplay', viewConnection_state.Params.queryParams.autoplay);

            if (!viewConnection_state.Params.queryParams.autoplay) {
              _context5.next = 8;
              break;
            }

            _context5.next = 4;
            return can_autoplay_es.video({
              muted: viewConnection_state.Params.queryParams.muted
            });

          case 4:
            canAutoPlayVideo = _context5.sent;
            muted = !viewConnection_state.Params.queryParams.muted ? !canAutoPlayVideo.result : viewConnection_state.Params.queryParams.muted;
            commit('Controls/setVideoMuted', muted);
            commit('Controls/setAutoPlayMuted', muted);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function setCanAutoPlayStream() {
    return _ref5.apply(this, arguments);
  };
}();

var setReconnect = function setReconnect() {
  var _state$ViewConnection;

  viewConnection_state.ViewConnection.eventListeners.reconnect = (_state$ViewConnection = viewConnection_state.ViewConnection.eventListeners.reconnect) !== null && _state$ViewConnection !== void 0 ? _state$ViewConnection : viewConnection_state.ViewConnection.millicastView.on('reconnect', function (_ref6) {
    var _error$response, _error$response$data, _error$response$data$, _error$response$data$2;

    var timeout = _ref6.timeout,
        error = _ref6.error;
    var errorMessage = (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : (_error$response$data$ = _error$response$data.data) === null || _error$response$data$ === void 0 ? void 0 : (_error$response$data$2 = _error$response$data$.message) === null || _error$response$data$2 === void 0 ? void 0 : _error$response$data$2.toLowerCase();

    if (errorMessage !== null && errorMessage !== void 0 && errorMessage.toLowerCase().includes('stream not being published')) {
      commit('Controls/setIsLoading', false);
      commit('Controls/setIsLive', false);
    } else {
      commit('Controls/setVideoSource', null);
      commit('Controls/setSrcObject', null);
      commit('Controls/setViewerMigratingEvent', false);
      commit('Controls/setMigrateListenerIsSet', false);
      commit('Controls/handleReconnection', {
        timeout: timeout,
        error: error
      });
    }
  });
};
var handleStopStream = function handleStopStream() {
  var _state$ViewConnection2;

  (_state$ViewConnection2 = viewConnection_state.ViewConnection.millicastView) === null || _state$ViewConnection2 === void 0 ? void 0 : _state$ViewConnection2.stop();
  commit('Controls/setVideoSource', null);
  commit('Controls/setSrcObject', null);
};

var addSignalingMigrateListener = function addSignalingMigrateListener() {
  if (!viewConnection_state.Controls.viewerMigratingEvent && !viewConnection_state.Controls.migrateListenerIsSet && viewConnection_state.ViewConnection.millicastView.signaling) {
    setTimeout(function () {
      viewConnection_state.ViewConnection.millicastView.signaling.on('migrate', function () {
        commit('Controls/setViewerMigratingEvent', true);
      }); // Avoid setting the event listener more than once

      commit('Controls/setMigrateListenerIsSet', true);
    }, 50); //We have to set a timeout because it takes a while before the millicastView signaling instance changes on migrate.
  }
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__("45fc");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unshift.js
var es_array_unshift = __webpack_require__("3c65");

// CONCATENATED MODULE: ./src/service/utils/cast.js




var cast_commit = src_store.commit,
    cast_state = src_store.state;
var receiverApplicationId = Object({"NODE_ENV":"production","BASE_URL":"/"}).VUE_APP_CHROMECAST_ID;
var castContext = null;
var castSession = null;
var handleSetCast = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var castStateListener, sessionListener;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            castStateListener = /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(castState) {
                var _window, cast;

                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _window = window, cast = _window.cast;
                        _context.t0 = castState;
                        _context.next = _context.t0 === cast.framework.CastState.NO_DEVICES_AVAILABLE ? 4 : _context.t0 === cast.framework.CastState.NOT_CONNECTED ? 6 : _context.t0 === cast.framework.CastState.CONNECTED ? 8 : 11;
                        break;

                      case 4:
                        cast_commit('Controls/setCastAvailable', false);
                        return _context.abrupt("break", 12);

                      case 6:
                        cast_commit('Controls/setCastAvailable', true);
                        return _context.abrupt("break", 12);

                      case 8:
                        _context.next = 10;
                        return sendLoadRequest();

                      case 10:
                        return _context.abrupt("break", 12);

                      case 11:
                        return _context.abrupt("break", 12);

                      case 12:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function castStateListener(_x) {
                return _ref2.apply(this, arguments);
              };
            }();

            sessionListener = function sessionListener(event) {
              var _window2 = window,
                  cast = _window2.cast;

              switch (event.sessionState) {
                case cast.framework.SessionState.SESSION_ENDED:
                  castSession = null;
                  connectToStream(); // Change to new connect

                  cast_commit('Controls/setCastIsConnected', false);
                  break;

                default:
                  break;
              }
            };

            window['__onGCastApiAvailable'] = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(isAvailable) {
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        if (isAvailable) {
                          setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                            var _window$cast$framewor, CAST_STATE_CHANGED, SESSION_STATE_CHANGED;

                            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                              while (1) {
                                switch (_context3.prev = _context3.next) {
                                  case 0:
                                    _context3.next = 2;
                                    return window.cast.framework.CastContext.getInstance();

                                  case 2:
                                    castContext = _context3.sent;

                                    if (!(window.chrome.cast && window.chrome.cast.AutoJoinPolicy)) {
                                      _context3.next = 12;
                                      break;
                                    }

                                    castContext.setOptions({
                                      autoJoinPolicy: window.chrome.cast.AutoJoinPolicy.PAGE_SCOPED,
                                      receiverApplicationId: receiverApplicationId
                                    });
                                    _window$cast$framewor = window.cast.framework.CastContextEventType, CAST_STATE_CHANGED = _window$cast$framewor.CAST_STATE_CHANGED, SESSION_STATE_CHANGED = _window$cast$framewor.SESSION_STATE_CHANGED;
                                    _context3.next = 8;
                                    return castContext.addEventListener(CAST_STATE_CHANGED, /*#__PURE__*/function () {
                                      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(_ref5) {
                                        var castState;
                                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                                          while (1) {
                                            switch (_context2.prev = _context2.next) {
                                              case 0:
                                                castState = _ref5.castState;
                                                _context2.next = 3;
                                                return castStateListener(castState);

                                              case 3:
                                                return _context2.abrupt("return", _context2.sent);

                                              case 4:
                                              case "end":
                                                return _context2.stop();
                                            }
                                          }
                                        }, _callee2);
                                      }));

                                      return function (_x3) {
                                        return _ref6.apply(this, arguments);
                                      };
                                    }());

                                  case 8:
                                    _context3.next = 10;
                                    return castContext.addEventListener(SESSION_STATE_CHANGED, function (e) {
                                      return sessionListener(e);
                                    });

                                  case 10:
                                    _context3.next = 13;
                                    break;

                                  case 12:
                                    cast_commit('Controls/setCastAvailable', false);

                                  case 13:
                                  case "end":
                                    return _context3.stop();
                                }
                              }
                            }, _callee3);
                          })), 20);
                        }

                      case 1:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x2) {
                return _ref3.apply(this, arguments);
              };
            }();

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function handleSetCast() {
    return _ref.apply(this, arguments);
  };
}();
var sendLoadRequest = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var _state$ViewConnection, _state$ViewConnection2, _state$ViewConnection3, _state$ViewConnection4, _state$ViewConnection5, _state$ViewConnection6;

    var _window3, chrome, _state$Controls$castO, streamId, token, multiSourceOptions, mediaInfo, loadRequest;

    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _window3 = window, chrome = _window3.chrome;
            _state$Controls$castO = cast_state.Controls.castOptions, streamId = _state$Controls$castO.streamId, token = _state$Controls$castO.token;
            multiSourceOptions = {
              audioSource: cast_state.Sources.selectedAudioSource,
              videoSource: cast_state.Sources.selectedVideoSource,
              audioMediaId: (_state$ViewConnection = (_state$ViewConnection2 = cast_state.ViewConnection.trackEvent) === null || _state$ViewConnection2 === void 0 ? void 0 : (_state$ViewConnection3 = _state$ViewConnection2.audio) === null || _state$ViewConnection3 === void 0 ? void 0 : _state$ViewConnection3.transceiver.mid) !== null && _state$ViewConnection !== void 0 ? _state$ViewConnection : null,
              videoMediaId: (_state$ViewConnection4 = (_state$ViewConnection5 = cast_state.ViewConnection.trackEvent) === null || _state$ViewConnection5 === void 0 ? void 0 : (_state$ViewConnection6 = _state$ViewConnection5.video) === null || _state$ViewConnection6 === void 0 ? void 0 : _state$ViewConnection6.transceiver.mid) !== null && _state$ViewConnection4 !== void 0 ? _state$ViewConnection4 : null
            };
            _context6.next = 5;
            return castContext.getCurrentSession();

          case 5:
            castSession = _context6.sent;
            mediaInfo = new chrome.cast.media.MediaInfo(streamId, '');
            mediaInfo.customData = {
              streamId: streamId,
              token: token,
              multiSourceOptions: multiSourceOptions
            };
            mediaInfo.streamType = chrome.cast.media.StreamType.LIVE;
            loadRequest = new chrome.cast.media.LoadRequest(mediaInfo);
            castSession.loadMedia(loadRequest).then(function () {
              stopStream();
              cast_commit('Controls/setCastDevice', castSession.getCastDevice());
              cast_commit('Controls/setCastIsConnected', true);
            });

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function sendLoadRequest() {
    return _ref7.apply(this, arguments);
  };
}();
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__("07ac");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__("4e82");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__("e25e");

// CONCATENATED MODULE: ./src/service/utils/layers.js










var layers_commit = src_store.commit,
    layers_state = src_store.state;
var updateLayers = function updateLayers(evntData) {
  var data = evntData.data;
  var activeQualities = [];
  var inactiveQualities = [];
  var encodings = Object.values(data.medias);
  encodings.forEach(function (encoding) {
    var _encoding$active$;

    if ((encoding === null || encoding === void 0 ? void 0 : encoding.active.length) === 1 && (encoding === null || encoding === void 0 ? void 0 : (_encoding$active$ = encoding.active[0]) === null || _encoding$active$ === void 0 ? void 0 : _encoding$active$.layers.length) > 1) {
      var _encoding$active$2, _encoding$active$2$la, _encoding$inactive$, _encoding$inactive$$l;

      (_encoding$active$2 = encoding.active[0]) === null || _encoding$active$2 === void 0 ? void 0 : (_encoding$active$2$la = _encoding$active$2.layers) === null || _encoding$active$2$la === void 0 ? void 0 : _encoding$active$2$la.forEach(function (quality) {
        if (!activeQualities.some(function (info) {
          return info.spatialLayerId === quality.spatialLayerId;
        })) {
          quality.id = encoding.active[0].id;
          quality.selectId = quality.spatialLayerId;
          quality.disabled = quality.bitrate ? false : true;
          activeQualities.push(quality);
        }
      });
      (_encoding$inactive$ = encoding.inactive[0]) === null || _encoding$inactive$ === void 0 ? void 0 : (_encoding$inactive$$l = _encoding$inactive$.layers) === null || _encoding$inactive$$l === void 0 ? void 0 : _encoding$inactive$$l.forEach(function (quality) {
        if (!inactiveQualities.some(function (info) {
          return info.spatialLayerId === quality.spatialLayerId;
        })) {
          inactiveQualities.push(quality);
        }
      });
    } else {
      var _encoding$active, _encoding$inactive;

      (_encoding$active = encoding.active) === null || _encoding$active === void 0 ? void 0 : _encoding$active.forEach(function (quality) {
        if (!activeQualities.some(function (info) {
          return info.id === quality.id;
        })) {
          quality.selectId = quality.id;
          quality.disabled = quality.bitrate ? false : true;
          activeQualities.push(quality);
        }
      });
      (_encoding$inactive = encoding.inactive) === null || _encoding$inactive === void 0 ? void 0 : _encoding$inactive.forEach(function (quality) {
        if (!inactiveQualities.some(function (info) {
          return info.id === quality.id;
        })) {
          inactiveQualities.push(quality);
        }
      });
    }
  });
  activeQualities.sort(function (a, b) {
    return b.bitrate - a.bitrate;
  });

  if (activeQualities.length === 2) {
    activeQualities[0].name = 'High';
    activeQualities[1].name = 'Low';
    activeQualities.unshift({
      name: 'Auto'
    });
  } else if (activeQualities.length === 3) {
    activeQualities[0].name = 'High';
    activeQualities[1].name = 'Medium';
    activeQualities[2].name = 'Low';
    activeQualities.unshift({
      name: 'Auto'
    });
  }

  if (activeQualities.length != layers_state.Layers.medias.active.length) {
    layers_commit('Layers/setSelectedQuality', {
      name: 'Auto'
    });
  }

  layers_commit('Layers/setMedias', {
    active: activeQualities,
    inactive: inactiveQualities
  });
};
var deleteLayers = function deleteLayers() {
  layers_commit('Layers/setMedias', {
    active: [],
    inactive: []
  });
  layers_commit('Layers/setSelectedQuality', {
    name: 'Auto'
  });
};
var handleSelectQuality = function handleSelectQuality(media) {
  var selectedData = {};
  selectedData.encodingId = media.id;

  if (!selectedData.encodingId && media.spatialLayerId !== null) {
    selectedData.spatialLayerId = parseInt(media.spatialLayerId);
  }

  var data = selectedData.encodingId || selectedData.encodingId === 0 || selectedData.spatialLayerId || selectedData.spatialLayerId === 0 ? selectedData : {};
  layers_state.ViewConnection.millicastView.select(data);
  layers_commit('Layers/selectQuality', media);
};
// CONCATENATED MODULE: ./src/service/utils/sources.js














var sources_commit = src_store.commit,
    sources_state = src_store.state,
    getters = src_store.getters;


var getTracks = function getTracks(data) {
  var sourceId = data.sourceId || null;
  data.tracks.forEach(function (e) {
    if (e.media === 'video') {
      addRemoteTracks(sourceId);
      addSource('video', sourceId, e.trackId);

      if (sources_state.Sources.videoSources.length === 1) {
        sources_commit('Sources/setIsAudioOnly', false);
      }
    }

    if (e.media === 'audio') {
      addSource('audio', sourceId, e.trackId);

      if (sources_state.Sources.audioSources.length === 1) {
        sources_commit('Sources/setIsAudioOnly', sources_state.Sources.videoSources.length ? false : true);
      }
    }
  });

  if (tracksAvailableAndMainNotExists()) {
    setTimeout(processTrackWarning, 1000);
  } else if (sources_state.Controls.trackWarning) {
    sources_commit('Controls/setTrackWarning', false);
  }
};

var addRemoteTracks = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sourceId) {
    var remoteTrackIndex, mediaStream;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (sourceId) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return");

          case 2:
            remoteTrackIndex = sources_state.Sources.sourceRemoteTracks.findIndex(function (t) {
              return t.sourceId === sourceId;
            });
            mediaStream = new MediaStream();
            setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var transceiver, sourceRemoteTrack;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return sources_state.ViewConnection.millicastView.addRemoteTrack('video', [mediaStream]);

                    case 2:
                      transceiver = _context.sent;
                      sourceRemoteTrack = {
                        transceiver: transceiver,
                        mediaStream: mediaStream,
                        sourceId: sourceId
                      };

                      if (remoteTrackIndex !== -1) {
                        sources_commit('Sources/replaceSourceRemoteTrack', {
                          sourceRemoteTrack: sourceRemoteTrack,
                          remoteTrackIndex: remoteTrackIndex
                        });
                      } else {
                        sources_commit('Sources/addSourceRemoteTrack', sourceRemoteTrack);
                      }

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })), 50); //We have to set a timeout because it takes a while before the millicastView signaling instance changes on migrate.

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function addRemoteTracks(_x) {
    return _ref.apply(this, arguments);
  };
}();

var tracksAvailableAndMainNotExists = function tracksAvailableAndMainNotExists() {
  return !getters['Sources/getVideoHasMain'] && sources_state.Sources.videoSources.length || !getters['Sources/getAudioHasMain'] && sources_state.Sources.audioSources.length;
};

var addSource = function addSource(kind, sourceId, trackId) {
  var source = {
    name: sourceId === null ? 'Main' : sourceId,
    sourceId: sourceId,
    trackId: trackId
  };
  var sourceToUse = kind === 'video' ? sources_state.Sources.videoSources : sources_state.Sources.audioSources;
  var sources = Array.from(sourceToUse);

  if (!sources.some(function (e) {
    return e.sourceId === source.sourceId;
  })) {
    if (source.sourceId === null) {
      sources.unshift(source);
      var selectedMediaSource = kind === 'video' ? sources_state.Sources.selectedVideoSource : sources_state.Sources.selectedAudioSource;

      if (selectedMediaSource.name === 'none') {
        sources_commit('Sources/setSelectedSource', {
          kind: kind,
          selectedSource: source
        });
      }
    } else {
      sources.push(source);
    }

    sources_commit('Sources/setSources', {
      kind: kind,
      sources: sources
    });
  }
};

var processTrackWarning = function processTrackWarning() {
  if (tracksAvailableAndMainNotExists() && !sources_state.Sources.trackWarning) {
    if (sources_state.Controls.dropup === '') {
      sources_commit('Controls/setDropup', 'settings');
    }

    sources_commit('Controls/setTrackWarning', true);
  }
};

var handleDeleteSource = function handleDeleteSource(sourceId) {
  var videoIndex = sources_state.Sources.videoSources.findIndex(function (source) {
    return source.sourceId === sourceId;
  });
  var audioIndex = sources_state.Sources.audioSources.findIndex(function (source) {
    return source.sourceId === sourceId;
  });

  if (videoIndex !== -1) {
    deleteSource('video', sourceId);

    if (!sources_state.Sources.videoSources.length) {
      sources_commit('Sources/setIsAudioOnly', true);
    }
  }

  if (audioIndex !== -1) {
    deleteSource('audio', sourceId);
  }
};

var deleteSource = function deleteSource(kind, sourceId) {
  var selectedSource = kind === 'video' ? sources_state.Sources.selectedVideoSource : sources_state.Sources.selectedAudioSource;
  var sourcesToUse = kind === 'video' ? sources_state.Sources.videoSources : sources_state.Sources.audioSources;
  sourcesToUse = sourcesToUse.filter(function (source) {
    return source.sourceId !== sourceId;
  });

  if (sourceId === selectedSource.sourceId) {
    if (sourcesToUse.findIndex(function (source) {
      return source.sourceId === null;
    }) !== -1) {
      selectedSource = sourcesToUse[0];
    } else {
      selectedSource = {
        name: 'none',
        sourceId: 0
      };
    }
  }

  sources_commit('Sources/removeSourceRemoteTrack', sourceId);
  sources_commit('Sources/setSources', {
    kind: kind,
    sources: sourcesToUse
  });
  handleSelectSource({
    kind: kind,
    source: selectedSource
  });
};

var handleSelectSource = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref3) {
    var kind, source, track, selectedSource;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            kind = _ref3.kind, source = _ref3.source;
            track = null;
            selectedSource = null;

            if (kind === 'video') {
              deleteLayers();
              track = sources_state.ViewConnection.trackEvent.video.track;
              selectedSource = sources_state.Sources.selectedAudioSource;
            } else if (kind === 'audio') {
              track = sources_state.ViewConnection.trackEvent.audio.track;
              selectedSource = sources_state.Sources.selectedVideoSource;
            }

            sources_commit('Sources/setSelectedSource', {
              kind: kind,
              selectedSource: source
            });

            if (!(source && (source === null || source === void 0 ? void 0 : source.name) !== 'none' && track)) {
              _context3.next = 9;
              break;
            }

            _context3.next = 8;
            return project({
              kind: kind,
              source: source
            });

          case 8:
            if (selectedSource.name !== 'none') {
              sources_commit('Controls/setTrackWarning', false);
            }

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function handleSelectSource(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

var project = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_ref5) {
    var kind, source, sourceId, sources, transceiver, _state$ViewConnection, _state$ViewConnection2, _state$ViewConnection3, _state$ViewConnection4, _transceiver$mid, _transceiver, mediaId;

    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            kind = _ref5.kind, source = _ref5.source;
            sourceId = source === null || source === void 0 ? void 0 : source.sourceId;
            sources = null;
            transceiver = null;

            if (kind === 'video') {
              sources = sources_state.Sources.videoSources;
              transceiver = (_state$ViewConnection = sources_state.ViewConnection.trackEvent) === null || _state$ViewConnection === void 0 ? void 0 : (_state$ViewConnection2 = _state$ViewConnection.video) === null || _state$ViewConnection2 === void 0 ? void 0 : _state$ViewConnection2.transceiver;
            } else if (kind === 'audio') {
              sources = sources_state.Sources.audioSources;
              transceiver = (_state$ViewConnection3 = sources_state.ViewConnection.trackEvent) === null || _state$ViewConnection3 === void 0 ? void 0 : (_state$ViewConnection4 = _state$ViewConnection3.audio) === null || _state$ViewConnection4 === void 0 ? void 0 : _state$ViewConnection4.transceiver;
            }

            if (!(source.name !== 'none' && !(sourceId === null && !sources.length) && !sources_state.Controls.castIsConnected)) {
              _context4.next = 11;
              break;
            }

            mediaId = (_transceiver$mid = (_transceiver = transceiver) === null || _transceiver === void 0 ? void 0 : _transceiver.mid) !== null && _transceiver$mid !== void 0 ? _transceiver$mid : null;
            _context4.next = 9;
            return sources_state.ViewConnection.millicastView.project(sourceId, [{
              trackId: source.trackId,
              mediaId: mediaId
            }]);

          case 9:
            _context4.next = 17;
            break;

          case 11:
            if (!sources_state.Controls.castIsConnected) {
              _context4.next = 15;
              break;
            }

            sendLoadRequest();
            _context4.next = 17;
            break;

          case 15:
            _context4.next = 17;
            return handleSelectSource({
              kind: kind,
              source: source
            });

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function project(_x3) {
    return _ref6.apply(this, arguments);
  };
}();

var handleProjectVideo = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(what, where, index) {
    var sideLabel;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            sideLabel = 'sideLabel' + where;
            document.getElementById(sideLabel).textContent = what !== null && what !== void 0 ? what : 'Main';
            _context5.next = 4;
            return sources_state.ViewConnection.millicastView.project(what, [{
              trackId: sources_state.Sources.videoSources[index].trackId,
              mediaId: where
            }]);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function handleProjectVideo(_x4, _x5, _x6) {
    return _ref7.apply(this, arguments);
  };
}();
var handleProjectRemoteTracks = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(index) {
    var _state$Sources$source, _state$Sources$source2;

    var newSourceRemoteTrackIndex, vidId, sidePlayerId;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])();

          case 2:
            newSourceRemoteTrackIndex = index;
            vidId = index + sources_state.Sources.videoSources.length - sources_state.Sources.sourceRemoteTracks.length;

            if (!(newSourceRemoteTrackIndex < 0)) {
              _context6.next = 6;
              break;
            }

            return _context6.abrupt("return");

          case 6:
            sidePlayerId = 'sidePlayer' + sources_state.Sources.sourceRemoteTracks[newSourceRemoteTrackIndex].sourceId;
            document.getElementById(sidePlayerId).srcObject = sources_state.Sources.sourceRemoteTracks[newSourceRemoteTrackIndex].mediaStream;
            handleProjectVideo(sources_state.Sources.sourceRemoteTracks[newSourceRemoteTrackIndex].sourceId, (_state$Sources$source = (_state$Sources$source2 = sources_state.Sources.sourceRemoteTracks[newSourceRemoteTrackIndex].transceiver) === null || _state$Sources$source2 === void 0 ? void 0 : _state$Sources$source2.mid) !== null && _state$Sources$source !== void 0 ? _state$Sources$source : null, vidId);
            document.getElementById(sidePlayerId).muted = true;
            document.getElementById(sidePlayerId).play();

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function handleProjectRemoteTracks(_x7) {
    return _ref8.apply(this, arguments);
  };
}();
// CONCATENATED MODULE: ./src/service/sdkManager.js







 //Import Vuex Store.


var sdkManager_commit = src_store.commit,
    sdkManager_state = src_store.state; // VIDEO PLAYER
// Similar logic to playerChange event

var setVideoPlayer = function setVideoPlayer(_ref) {
  var videoPlayer = _ref.videoPlayer,
      srcObject = _ref.srcObject,
      volume = _ref.volume,
      muted = _ref.muted,
      autoplay = _ref.autoplay;

  if (videoPlayer) {
    sdkManager_commit('Controls/setVideo', videoPlayer);
    sdkManager_commit('Controls/setCurrentElementRef', videoPlayer.id);
  }

  if (srcObject) sdkManager_commit('Controls/setVideoSource', srcObject);
  if (volume) sdkManager_commit('Controls/setVideoVolume', volume);
  if (muted) sdkManager_commit('Controls/setVideoMuted', muted);
  if (autoplay) sdkManager_commit('Controls/setVideoAutoplay', autoplay);
  addVideoEventListeners(sdkManager_state.Controls.video);
};
var addVideoEventListeners = function addVideoEventListeners(video) {
  video.onplay = function () {
    return sdkManager_commit('Controls/setPlaying', true);
  };

  video.addEventListener('emptied', pauseControlListener);
  video.addEventListener('pause', pauseControlListener);

  video.onenterpictureinpicture = function () {
    return sdkManager_commit('Controls/setPip', true);
  };

  video.onleavepictureinpicture = function () {
    return sdkManager_commit('Controls/setPip', false);
  };
};
var removeVideoPauseListeners = function removeVideoPauseListeners() {
  sdkManager_state.Controls.video.removeEventListener('emptied', pauseControlListener);
  sdkManager_state.Controls.video.removeEventListener('pause', pauseControlListener);
};

var pauseControlListener = function pauseControlListener() {
  sdkManager_commit('Controls/setPlaying', false);
}; // SDK VIEW MODULE INITIALIZATION


var sdkManager_initViewModule = function initViewModule() {
  //Expose Viewer version and SDK Logger into the console
  window.Version = Object({"NODE_ENV":"production","BASE_URL":"/"}).PACKAGE_VERSION;
  window.Logger = millicast_umd["Logger"];
  var accountId = getAccountId();
  var streamName = getStreamName();
  viewConnection_handleInitViewConnection(accountId, streamName);
  sdkManager_setViewerEvents();
};
var connectToStream = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            handleConnectToStream();

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function connectToStream() {
    return _ref2.apply(this, arguments);
  };
}();
var stopStream = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            handleStopStream();

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function stopStream() {
    return _ref3.apply(this, arguments);
  };
}();

var sdkManager_setViewerEvents = function setViewerEvents() {
  viewConnection_setTrackEvent();
  setBroadcastEvent();
}; // BROADCAST EVENTS


var setBroadcastEvent = function setBroadcastEvent() {
  var _state$ViewConnection;

  //todo: catch user count event and set it in Vuex
  var millicastView = sdkManager_state.ViewConnection.millicastView;
  sdkManager_state.ViewConnection.eventListeners.broadcastEvent = (_state$ViewConnection = sdkManager_state.ViewConnection.eventListeners.broadcastEvent) !== null && _state$ViewConnection !== void 0 ? _state$ViewConnection : millicastView.on('broadcastEvent', function (event) {
    var name = event.name;

    switch (name) {
      case 'active':
        sdkManager_updateActiveBroadcastState(event);
        break;

      case 'stopped':
        updateStoppedBroadcastState(event);
        break;

      case 'inactive':
        sdkManager_updateInactiveBroadcastState(event);
        break;

      case 'layers':
        sdkManager_updateLayersBroadcastState(event);
        break;

      case 'viewercount':
        updateViewerCount(event);
        break;

      default:
        break;
    }
  });
};

var sdkManager_updateActiveBroadcastState = function updateActiveBroadcastState(event) {
  getTracks(event.data);
  sdkManager_commit('Controls/setIsLoading', false);
  sdkManager_commit('Controls/setIsLive', true);
  setReconnect();

  if (!sdkManager_state.Controls.video.srcObject) {
    sdkManager_commit('Controls/setVideoSource', sdkManager_state.Controls.srcObject);
  }
};

var updateStoppedBroadcastState = function updateStoppedBroadcastState() {
  sdkManager_commit('Controls/setIsLoading', false);
  sdkManager_commit('Controls/setIsLive', false);
};

var sdkManager_updateInactiveBroadcastState = function updateInactiveBroadcastState(event) {
  var _data$sourceId;

  var data = event.data;
  var selectedVideoSource = sdkManager_state.Sources.selectedVideoSource;
  var selectedAudioSource = sdkManager_state.Sources.selectedAudioSource;
  var trackWarning = (selectedVideoSource.sourceId === null || selectedAudioSource.sourceId === null) && data.sourceId === null;
  handleDeleteSource((_data$sourceId = data === null || data === void 0 ? void 0 : data.sourceId) !== null && _data$sourceId !== void 0 ? _data$sourceId : null);

  if (!event.data.streamId) {
    sdkManager_commit('Controls/setUserCount', null);
  }

  if (sdkManager_state.Sources.videoSources.length + sdkManager_state.Sources.audioSources.length === 0) {
    deleteLayers();
    sdkManager_commit('Controls/setTrackWarning', false);
    sdkManager_commit('Controls/setIsLive', false);
    sdkManager_commit('Controls/setPlaying', false);
    sdkManager_commit('Controls/setVideoSource', null);
  } else if (trackWarning) {
    if (sdkManager_state.Controls.dropup === '') {
      sdkManager_commit('Controls/setDropup', 'settings');
    }

    sdkManager_commit('Controls/setTrackWarning', trackWarning);
  }
};

var sdkManager_updateLayersBroadcastState = function updateLayersBroadcastState(event) {
  updateLayers(event);
};

var updateViewerCount = function updateViewerCount(event) {
  sdkManager_commit('Controls/setViewerCount', event.data.viewercount);
}; // LAYERS


var sdkManager_selectQuality = function selectQuality(media) {
  handleSelectQuality(media);
}; // SOURCES

var selectSource = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref4) {
    var kind, source;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            kind = _ref4.kind, source = _ref4.source;
            handleSelectSource({
              kind: kind,
              source: source
            });

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function selectSource(_x) {
    return _ref5.apply(this, arguments);
  };
}();
var projectRemoteTracks = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(index) {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            handleProjectRemoteTracks(index);

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function projectRemoteTracks(_x2) {
    return _ref6.apply(this, arguments);
  };
}();
var projectVideo = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(what, where, index) {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            handleProjectVideo(what, where, index);

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function projectVideo(_x3, _x4, _x5) {
    return _ref7.apply(this, arguments);
  };
}(); // CAST

var setCast = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            handleSetCast();

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function setCast() {
    return _ref8.apply(this, arguments);
  };
}();
// CONCATENATED MODULE: ./node_modules/vue-toastification/dist/index.mjs
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};

// src/index.ts


// src/ts/interface.ts


// src/ts/utils.ts

var isFunction = (value) => typeof value === "function";
var isString = (value) => typeof value === "string";
var isNonEmptyString = (value) => isString(value) && value.trim().length > 0;
var isNumber = (value) => typeof value === "number";
var isUndefined = (value) => typeof value === "undefined";
var dist_isObject = (value) => typeof value === "object" && value !== null;
var isJSX = (obj) => hasProp(obj, "tag") && isNonEmptyString(obj.tag);
var isTouchEvent = (event) => window.TouchEvent && event instanceof TouchEvent;
var isToastComponent = (obj) => hasProp(obj, "component") && isToastContent(obj.component);
var isVueComponent = (c) => isFunction(c) || dist_isObject(c);
var isToastContent = (obj) => !isUndefined(obj) && (isString(obj) || isVueComponent(obj) || isToastComponent(obj));
var isDOMRect = (obj) => dist_isObject(obj) && ["height", "width", "right", "left", "top", "bottom"].every((p) => isNumber(obj[p]));
var hasProp = (obj, propKey) => (dist_isObject(obj) || isFunction(obj)) && propKey in obj;
var getId = ((i) => () => i++)(0);
function getX(event) {
  return isTouchEvent(event) ? event.targetTouches[0].clientX : event.clientX;
}
function getY(event) {
  return isTouchEvent(event) ? event.targetTouches[0].clientY : event.clientY;
}
var removeElement = (el) => {
  if (!isUndefined(el.remove)) {
    el.remove();
  } else if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
};
var getVueComponentFromObj = (obj) => {
  if (isToastComponent(obj)) {
    return getVueComponentFromObj(obj.component);
  }
  if (isJSX(obj)) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
      render() {
        return obj;
      }
    });
  }
  return typeof obj === "string" ? obj : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toRaw"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["unref"])(obj));
};
var normalizeToastComponent = (obj) => {
  if (typeof obj === "string") {
    return obj;
  }
  const props = hasProp(obj, "props") && dist_isObject(obj.props) ? obj.props : {};
  const listeners = hasProp(obj, "listeners") && dist_isObject(obj.listeners) ? obj.listeners : {};
  return { component: getVueComponentFromObj(obj), props, listeners };
};
var isBrowser = () => typeof window !== "undefined";

// src/ts/eventBus.ts
var EventBus = class {
  constructor() {
    this.allHandlers = {};
  }
  getHandlers(eventType) {
    return this.allHandlers[eventType] || [];
  }
  on(eventType, handler) {
    const handlers = this.getHandlers(eventType);
    handlers.push(handler);
    this.allHandlers[eventType] = handlers;
  }
  off(eventType, handler) {
    const handlers = this.getHandlers(eventType);
    handlers.splice(handlers.indexOf(handler) >>> 0, 1);
  }
  emit(eventType, event) {
    const handlers = this.getHandlers(eventType);
    handlers.forEach((handler) => handler(event));
  }
};
var isEventBusInterface = (e) => ["on", "off", "emit"].every((f) => hasProp(e, f) && isFunction(e[f]));

// vue:/Users/maronato/Developer/vue-toastification/src/components/VtToastContainer.vue?vue&type=script


// src/ts/constants.ts
var TYPE;
(function(TYPE2) {
  TYPE2["SUCCESS"] = "success";
  TYPE2["ERROR"] = "error";
  TYPE2["WARNING"] = "warning";
  TYPE2["INFO"] = "info";
  TYPE2["DEFAULT"] = "default";
})(TYPE || (TYPE = {}));
var POSITION;
(function(POSITION2) {
  POSITION2["TOP_LEFT"] = "top-left";
  POSITION2["TOP_CENTER"] = "top-center";
  POSITION2["TOP_RIGHT"] = "top-right";
  POSITION2["BOTTOM_LEFT"] = "bottom-left";
  POSITION2["BOTTOM_CENTER"] = "bottom-center";
  POSITION2["BOTTOM_RIGHT"] = "bottom-right";
})(POSITION || (POSITION = {}));
var EVENTS;
(function(EVENTS2) {
  EVENTS2["ADD"] = "add";
  EVENTS2["DISMISS"] = "dismiss";
  EVENTS2["UPDATE"] = "update";
  EVENTS2["CLEAR"] = "clear";
  EVENTS2["UPDATE_DEFAULTS"] = "update_defaults";
})(EVENTS || (EVENTS = {}));
var VT_NAMESPACE = "Vue-Toastification";

// src/ts/propValidators.ts
var COMMON = {
  type: {
    type: String,
    default: TYPE.DEFAULT
  },
  classNames: {
    type: [String, Array],
    default: () => []
  },
  trueBoolean: {
    type: Boolean,
    default: true
  }
};
var ICON = {
  type: COMMON.type,
  customIcon: {
    type: [String, Boolean, Object, Function],
    default: true
  }
};
var CLOSE_BUTTON = {
  component: {
    type: [String, Object, Function, Boolean],
    default: "button"
  },
  classNames: COMMON.classNames,
  showOnHover: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: "close"
  }
};
var PROGRESS_BAR = {
  timeout: {
    type: [Number, Boolean],
    default: 5e3
  },
  hideProgressBar: {
    type: Boolean,
    default: false
  },
  isRunning: {
    type: Boolean,
    default: false
  }
};
var TRANSITION = {
  transition: {
    type: [Object, String],
    default: `${VT_NAMESPACE}__bounce`
  }
};
var CORE_TOAST = {
  position: {
    type: String,
    default: POSITION.TOP_RIGHT
  },
  draggable: COMMON.trueBoolean,
  draggablePercent: {
    type: Number,
    default: 0.6
  },
  pauseOnFocusLoss: COMMON.trueBoolean,
  pauseOnHover: COMMON.trueBoolean,
  closeOnClick: COMMON.trueBoolean,
  timeout: PROGRESS_BAR.timeout,
  hideProgressBar: PROGRESS_BAR.hideProgressBar,
  toastClassName: COMMON.classNames,
  bodyClassName: COMMON.classNames,
  icon: ICON.customIcon,
  closeButton: CLOSE_BUTTON.component,
  closeButtonClassName: CLOSE_BUTTON.classNames,
  showCloseButtonOnHover: CLOSE_BUTTON.showOnHover,
  accessibility: {
    type: Object,
    default: () => ({
      toastRole: "alert",
      closeButtonLabel: "close"
    })
  },
  rtl: {
    type: Boolean,
    default: false
  },
  eventBus: {
    type: Object,
    required: false,
    default: () => new EventBus()
  }
};
var TOAST = {
  id: {
    type: [String, Number],
    required: true,
    default: 0
  },
  type: COMMON.type,
  content: {
    type: [String, Object, Function],
    required: true,
    default: ""
  },
  onClick: {
    type: Function,
    default: void 0
  },
  onClose: {
    type: Function,
    default: void 0
  }
};
var CONTAINER = {
  container: {
    type: [
      Object,
      Function
    ],
    default: () => document.body
  },
  newestOnTop: COMMON.trueBoolean,
  maxToasts: {
    type: Number,
    default: 20
  },
  transition: TRANSITION.transition,
  toastDefaults: Object,
  filterBeforeCreate: {
    type: Function,
    default: (toast) => toast
  },
  filterToasts: {
    type: Function,
    default: (toasts) => toasts
  },
  containerClassName: COMMON.classNames,
  onMounted: Function,
  shareAppContext: [Boolean, Object]
};
var propValidators_default = {
  CORE_TOAST,
  TOAST,
  CONTAINER,
  PROGRESS_BAR,
  ICON,
  TRANSITION,
  CLOSE_BUTTON
};

// vue:/Users/maronato/Developer/vue-toastification/src/components/VtToast.vue?vue&type=script


// vue:/Users/maronato/Developer/vue-toastification/src/components/VtProgressBar.vue?vue&type=script

var VtProgressBar_default = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "VtProgressBar",
  props: propValidators_default.PROGRESS_BAR,
  data() {
    return {
      hasClass: true
    };
  },
  computed: {
    style() {
      return {
        animationDuration: `${this.timeout}ms`,
        animationPlayState: this.isRunning ? "running" : "paused",
        opacity: this.hideProgressBar ? 0 : 1
      };
    },
    cpClass() {
      return this.hasClass ? `${VT_NAMESPACE}__progress-bar` : "";
    }
  },
  watch: {
    timeout() {
      this.hasClass = false;
      this.$nextTick(() => this.hasClass = true);
    }
  },
  mounted() {
    this.$el.addEventListener("animationend", this.animationEnded);
  },
  beforeUnmount() {
    this.$el.removeEventListener("animationend", this.animationEnded);
  },
  methods: {
    animationEnded() {
      this.$emit("close-toast");
    }
  }
});

// vue:/Users/maronato/Developer/vue-toastification/src/components/VtProgressBar.vue?vue&type=template

function dist_render(_ctx, _cache) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.style),
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(_ctx.cpClass)
  }, null, 6);
}

// vue:/Users/maronato/Developer/vue-toastification/src/components/VtProgressBar.vue
VtProgressBar_default.render = dist_render;
var VtProgressBar_default2 = VtProgressBar_default;

// vue:/Users/maronato/Developer/vue-toastification/src/components/VtCloseButton.vue?vue&type=script

var VtCloseButton_default = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "VtCloseButton",
  props: propValidators_default.CLOSE_BUTTON,
  computed: {
    buttonComponent() {
      if (this.component !== false) {
        return getVueComponentFromObj(this.component);
      }
      return "button";
    },
    classes() {
      const classes = [`${VT_NAMESPACE}__close-button`];
      if (this.showOnHover) {
        classes.push("show-on-hover");
      }
      return classes.concat(this.classNames);
    }
  }
});

// vue:/Users/maronato/Developer/vue-toastification/src/components/VtCloseButton.vue?vue&type=template

var dist_hoisted_1 = /* @__PURE__ */ Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" \xD7 ");
function render2(_ctx, _cache) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])(_ctx.buttonComponent), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    "aria-label": _ctx.ariaLabel,
    class: _ctx.classes
  }, _ctx.$attrs), {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [
      dist_hoisted_1
    ]),
    _: 1
  }, 16, ["aria-label", "class"]);
}

// vue:/Users/maronato/Developer/vue-toastification/src/components/VtCloseButton.vue
VtCloseButton_default.render = render2;
var VtCloseButton_default2 = VtCloseButton_default;

// vue:/Users/maronato/Developer/vue-toastification/src/components/VtIcon.vue?vue&type=script


// vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtSuccessIcon.vue?vue&type=script
var VtSuccessIcon_default = {};

// vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtSuccessIcon.vue?vue&type=template

var _hoisted_12 = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "check-circle",
  class: "svg-inline--fa fa-check-circle fa-w-16",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};
var dist_hoisted_2 = /* @__PURE__ */ Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("path", {
  fill: "currentColor",
  d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
}, null, -1);
var dist_hoisted_3 = [
  dist_hoisted_2
];
function render3(_ctx, _cache) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("svg", _hoisted_12, dist_hoisted_3);
}

// vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtSuccessIcon.vue
VtSuccessIcon_default.render = render3;
var VtSuccessIcon_default2 = VtSuccessIcon_default;

// vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtInfoIcon.vue?vue&type=script
var VtInfoIcon_default = {};

// vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtInfoIcon.vue?vue&type=template

var _hoisted_13 = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "info-circle",
  class: "svg-inline--fa fa-info-circle fa-w-16",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};
var _hoisted_22 = /* @__PURE__ */ Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("path", {
  fill: "currentColor",
  d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
}, null, -1);
var _hoisted_32 = [
  _hoisted_22
];
function render4(_ctx, _cache) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("svg", _hoisted_13, _hoisted_32);
}

// vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtInfoIcon.vue
VtInfoIcon_default.render = render4;
var VtInfoIcon_default2 = VtInfoIcon_default;

// vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtWarningIcon.vue?vue&type=script
var VtWarningIcon_default = {};

// vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtWarningIcon.vue?vue&type=template

var _hoisted_14 = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "exclamation-circle",
  class: "svg-inline--fa fa-exclamation-circle fa-w-16",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
};
var _hoisted_23 = /* @__PURE__ */ Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("path", {
  fill: "currentColor",
  d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
}, null, -1);
var _hoisted_33 = [
  _hoisted_23
];
function render5(_ctx, _cache) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("svg", _hoisted_14, _hoisted_33);
}

// vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtWarningIcon.vue
VtWarningIcon_default.render = render5;
var VtWarningIcon_default2 = VtWarningIcon_default;

// vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtErrorIcon.vue?vue&type=script
var VtErrorIcon_default = {};

// vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtErrorIcon.vue?vue&type=template

var _hoisted_15 = {
  "aria-hidden": "true",
  focusable: "false",
  "data-prefix": "fas",
  "data-icon": "exclamation-triangle",
  class: "svg-inline--fa fa-exclamation-triangle fa-w-18",
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
};
var _hoisted_24 = /* @__PURE__ */ Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("path", {
  fill: "currentColor",
  d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
}, null, -1);
var _hoisted_34 = [
  _hoisted_24
];
function render6(_ctx, _cache) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("svg", _hoisted_15, _hoisted_34);
}

// vue:/Users/maronato/Developer/vue-toastification/src/components/icons/VtErrorIcon.vue
VtErrorIcon_default.render = render6;
var VtErrorIcon_default2 = VtErrorIcon_default;

// vue:/Users/maronato/Developer/vue-toastification/src/components/VtIcon.vue?vue&type=script
var VtIcon_default = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "VtIcon",
  props: propValidators_default.ICON,
  computed: {
    customIconChildren() {
      return hasProp(this.customIcon, "iconChildren") ? this.trimValue(this.customIcon.iconChildren) : "";
    },
    customIconClass() {
      if (isString(this.customIcon)) {
        return this.trimValue(this.customIcon);
      } else if (hasProp(this.customIcon, "iconClass")) {
        return this.trimValue(this.customIcon.iconClass);
      }
      return "";
    },
    customIconTag() {
      if (hasProp(this.customIcon, "iconTag")) {
        return this.trimValue(this.customIcon.iconTag, "i");
      }
      return "i";
    },
    hasCustomIcon() {
      return this.customIconClass.length > 0;
    },
    component() {
      if (this.hasCustomIcon) {
        return this.customIconTag;
      }
      if (isToastContent(this.customIcon)) {
        return getVueComponentFromObj(this.customIcon);
      }
      return this.iconTypeComponent;
    },
    iconTypeComponent() {
      const types = {
        [TYPE.DEFAULT]: VtInfoIcon_default2,
        [TYPE.INFO]: VtInfoIcon_default2,
        [TYPE.SUCCESS]: VtSuccessIcon_default2,
        [TYPE.ERROR]: VtErrorIcon_default2,
        [TYPE.WARNING]: VtWarningIcon_default2
      };
      return types[this.type];
    },
    iconClasses() {
      const classes = [`${VT_NAMESPACE}__icon`];
      if (this.hasCustomIcon) {
        return classes.concat(this.customIconClass);
      }
      return classes;
    }
  },
  methods: {
    trimValue(value, empty = "") {
      return isNonEmptyString(value) ? value.trim() : empty;
    }
  }
});

// vue:/Users/maronato/Developer/vue-toastification/src/components/VtIcon.vue?vue&type=template

function render7(_ctx, _cache) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])(_ctx.component), {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(_ctx.iconClasses)
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.customIconChildren), 1)
    ]),
    _: 1
  }, 8, ["class"]);
}

// vue:/Users/maronato/Developer/vue-toastification/src/components/VtIcon.vue
VtIcon_default.render = render7;
var VtIcon_default2 = VtIcon_default;

// vue:/Users/maronato/Developer/vue-toastification/src/components/VtToast.vue?vue&type=script
var VtToast_default = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "VtToast",
  components: { ProgressBar: VtProgressBar_default2, CloseButton: VtCloseButton_default2, Icon: VtIcon_default2 },
  inheritAttrs: false,
  props: Object.assign({}, propValidators_default.CORE_TOAST, propValidators_default.TOAST),
  data() {
    const data = {
      isRunning: true,
      disableTransitions: false,
      beingDragged: false,
      dragStart: 0,
      dragPos: { x: 0, y: 0 },
      dragRect: {}
    };
    return data;
  },
  computed: {
    classes() {
      const classes = [
        `${VT_NAMESPACE}__toast`,
        `${VT_NAMESPACE}__toast--${this.type}`,
        `${this.position}`
      ].concat(this.toastClassName);
      if (this.disableTransitions) {
        classes.push("disable-transition");
      }
      if (this.rtl) {
        classes.push(`${VT_NAMESPACE}__toast--rtl`);
      }
      return classes;
    },
    bodyClasses() {
      const classes = [
        `${VT_NAMESPACE}__toast-${isString(this.content) ? "body" : "component-body"}`
      ].concat(this.bodyClassName);
      return classes;
    },
    draggableStyle() {
      if (this.dragStart === this.dragPos.x) {
        return {};
      } else if (this.beingDragged) {
        return {
          transform: `translateX(${this.dragDelta}px)`,
          opacity: 1 - Math.abs(this.dragDelta / this.removalDistance)
        };
      } else {
        return {
          transition: "transform 0.2s, opacity 0.2s",
          transform: "translateX(0)",
          opacity: 1
        };
      }
    },
    dragDelta() {
      return this.beingDragged ? this.dragPos.x - this.dragStart : 0;
    },
    removalDistance() {
      if (isDOMRect(this.dragRect)) {
        return (this.dragRect.right - this.dragRect.left) * this.draggablePercent;
      }
      return 0;
    }
  },
  mounted() {
    if (this.draggable) {
      this.draggableSetup();
    }
    if (this.pauseOnFocusLoss) {
      this.focusSetup();
    }
  },
  beforeUnmount() {
    if (this.draggable) {
      this.draggableCleanup();
    }
    if (this.pauseOnFocusLoss) {
      this.focusCleanup();
    }
  },
  methods: {
    hasProp,
    getVueComponentFromObj,
    closeToast() {
      this.eventBus.emit(EVENTS.DISMISS, this.id);
    },
    clickHandler() {
      if (this.onClick) {
        this.onClick(this.closeToast);
      }
      if (this.closeOnClick) {
        if (!this.beingDragged || this.dragStart === this.dragPos.x) {
          this.closeToast();
        }
      }
    },
    timeoutHandler() {
      this.closeToast();
    },
    hoverPause() {
      if (this.pauseOnHover) {
        this.isRunning = false;
      }
    },
    hoverPlay() {
      if (this.pauseOnHover) {
        this.isRunning = true;
      }
    },
    focusPause() {
      this.isRunning = false;
    },
    focusPlay() {
      this.isRunning = true;
    },
    focusSetup() {
      addEventListener("blur", this.focusPause);
      addEventListener("focus", this.focusPlay);
    },
    focusCleanup() {
      removeEventListener("blur", this.focusPause);
      removeEventListener("focus", this.focusPlay);
    },
    draggableSetup() {
      const element = this.$el;
      element.addEventListener("touchstart", this.onDragStart, {
        passive: true
      });
      element.addEventListener("mousedown", this.onDragStart);
      addEventListener("touchmove", this.onDragMove, { passive: false });
      addEventListener("mousemove", this.onDragMove);
      addEventListener("touchend", this.onDragEnd);
      addEventListener("mouseup", this.onDragEnd);
    },
    draggableCleanup() {
      const element = this.$el;
      element.removeEventListener("touchstart", this.onDragStart);
      element.removeEventListener("mousedown", this.onDragStart);
      removeEventListener("touchmove", this.onDragMove);
      removeEventListener("mousemove", this.onDragMove);
      removeEventListener("touchend", this.onDragEnd);
      removeEventListener("mouseup", this.onDragEnd);
    },
    onDragStart(event) {
      this.beingDragged = true;
      this.dragPos = { x: getX(event), y: getY(event) };
      this.dragStart = getX(event);
      this.dragRect = this.$el.getBoundingClientRect();
    },
    onDragMove(event) {
      if (this.beingDragged) {
        event.preventDefault();
        if (this.isRunning) {
          this.isRunning = false;
        }
        this.dragPos = { x: getX(event), y: getY(event) };
      }
    },
    onDragEnd() {
      if (this.beingDragged) {
        if (Math.abs(this.dragDelta) >= this.removalDistance) {
          this.disableTransitions = true;
          this.$nextTick(() => this.closeToast());
        } else {
          setTimeout(() => {
            this.beingDragged = false;
            if (isDOMRect(this.dragRect) && this.pauseOnHover && this.dragRect.bottom >= this.dragPos.y && this.dragPos.y >= this.dragRect.top && this.dragRect.left <= this.dragPos.x && this.dragPos.x <= this.dragRect.right) {
              this.isRunning = false;
            } else {
              this.isRunning = true;
            }
          });
        }
      }
    }
  }
});

// vue:/Users/maronato/Developer/vue-toastification/src/components/VtToast.vue?vue&type=template

var _hoisted_16 = ["role"];
function render8(_ctx, _cache) {
  const _component_Icon = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Icon");
  const _component_CloseButton = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("CloseButton");
  const _component_ProgressBar = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ProgressBar");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(_ctx.classes),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])(_ctx.draggableStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
    onMouseenter: _cache[1] || (_cache[1] = (...args) => _ctx.hoverPause && _ctx.hoverPause(...args)),
    onMouseleave: _cache[2] || (_cache[2] = (...args) => _ctx.hoverPlay && _ctx.hoverPlay(...args))
  }, [
    _ctx.icon ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Icon, {
      key: 0,
      "custom-icon": _ctx.icon,
      type: _ctx.type
    }, null, 8, ["custom-icon", "type"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true),
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
      role: _ctx.accessibility.toastRole || "alert",
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(_ctx.bodyClasses)
    }, [
      typeof _ctx.content === "string" ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], { key: 0 }, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.content), 1)
      ], 2112)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveDynamicComponent"])(_ctx.getVueComponentFromObj(_ctx.content)), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
        key: 1,
        "toast-id": _ctx.id
      }, _ctx.hasProp(_ctx.content, "props") ? _ctx.content.props : {}, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toHandlers"])(_ctx.hasProp(_ctx.content, "listeners") ? _ctx.content.listeners : {}), { onCloseToast: _ctx.closeToast }), null, 16, ["toast-id", "onCloseToast"]))
    ], 10, _hoisted_16),
    !!_ctx.closeButton ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_CloseButton, {
      key: 1,
      component: _ctx.closeButton,
      "class-names": _ctx.closeButtonClassName,
      "show-on-hover": _ctx.showCloseButtonOnHover,
      "aria-label": _ctx.accessibility.closeButtonLabel,
      onClick: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(_ctx.closeToast, ["stop"])
    }, null, 8, ["component", "class-names", "show-on-hover", "aria-label", "onClick"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true),
    _ctx.timeout ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_ProgressBar, {
      key: 2,
      "is-running": _ctx.isRunning,
      "hide-progress-bar": _ctx.hideProgressBar,
      timeout: _ctx.timeout,
      onCloseToast: _ctx.timeoutHandler
    }, null, 8, ["is-running", "hide-progress-bar", "timeout", "onCloseToast"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("v-if", true)
  ], 38);
}

// vue:/Users/maronato/Developer/vue-toastification/src/components/VtToast.vue
VtToast_default.render = render8;
var VtToast_default2 = VtToast_default;

// vue:/Users/maronato/Developer/vue-toastification/src/components/VtTransition.vue?vue&type=script

var VtTransition_default = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "VtTransition",
  props: propValidators_default.TRANSITION,
  emits: ["leave"],
  methods: {
    hasProp,
    leave(el) {
      if (el instanceof HTMLElement) {
        el.style.left = el.offsetLeft + "px";
        el.style.top = el.offsetTop + "px";
        el.style.width = getComputedStyle(el).width;
        el.style.position = "absolute";
      }
    }
  }
});

// vue:/Users/maronato/Developer/vue-toastification/src/components/VtTransition.vue?vue&type=template

function render9(_ctx, _cache) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["TransitionGroup"], {
    tag: "div",
    "enter-active-class": _ctx.transition.enter ? _ctx.transition.enter : `${_ctx.transition}-enter-active`,
    "move-class": _ctx.transition.move ? _ctx.transition.move : `${_ctx.transition}-move`,
    "leave-active-class": _ctx.transition.leave ? _ctx.transition.leave : `${_ctx.transition}-leave-active`,
    onLeave: _ctx.leave
  }, {
    default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [
      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["enter-active-class", "move-class", "leave-active-class", "onLeave"]);
}

// vue:/Users/maronato/Developer/vue-toastification/src/components/VtTransition.vue
VtTransition_default.render = render9;
var VtTransition_default2 = VtTransition_default;

// vue:/Users/maronato/Developer/vue-toastification/src/components/VtToastContainer.vue?vue&type=script
var VtToastContainer_default = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "VueToastification",
  devtools: {
    hide: true
  },
  components: { Toast: VtToast_default2, VtTransition: VtTransition_default2 },
  props: Object.assign({}, propValidators_default.CORE_TOAST, propValidators_default.CONTAINER, propValidators_default.TRANSITION),
  data() {
    const data = {
      count: 0,
      positions: Object.values(POSITION),
      toasts: {},
      defaults: {}
    };
    return data;
  },
  computed: {
    toastArray() {
      return Object.values(this.toasts);
    },
    filteredToasts() {
      return this.defaults.filterToasts(this.toastArray);
    }
  },
  beforeMount() {
    const events = this.eventBus;
    events.on(EVENTS.ADD, this.addToast);
    events.on(EVENTS.CLEAR, this.clearToasts);
    events.on(EVENTS.DISMISS, this.dismissToast);
    events.on(EVENTS.UPDATE, this.updateToast);
    events.on(EVENTS.UPDATE_DEFAULTS, this.updateDefaults);
    this.defaults = this.$props;
  },
  mounted() {
    this.setup(this.container);
  },
  methods: {
    async setup(container) {
      if (isFunction(container)) {
        container = await container();
      }
      removeElement(this.$el);
      container.appendChild(this.$el);
    },
    setToast(props) {
      if (!isUndefined(props.id)) {
        this.toasts[props.id] = props;
      }
    },
    addToast(params) {
      params.content = normalizeToastComponent(params.content);
      const props = Object.assign({}, this.defaults, params.type && this.defaults.toastDefaults && this.defaults.toastDefaults[params.type], params);
      const toast = this.defaults.filterBeforeCreate(props, this.toastArray);
      toast && this.setToast(toast);
    },
    dismissToast(id) {
      const toast = this.toasts[id];
      if (!isUndefined(toast) && !isUndefined(toast.onClose)) {
        toast.onClose();
      }
      delete this.toasts[id];
    },
    clearToasts() {
      Object.keys(this.toasts).forEach((id) => {
        this.dismissToast(id);
      });
    },
    getPositionToasts(position) {
      const toasts = this.filteredToasts.filter((toast) => toast.position === position).slice(0, this.defaults.maxToasts);
      return this.defaults.newestOnTop ? toasts.reverse() : toasts;
    },
    updateDefaults(update) {
      if (!isUndefined(update.container)) {
        this.setup(update.container);
      }
      this.defaults = Object.assign({}, this.defaults, update);
    },
    updateToast({
      id,
      options,
      create
    }) {
      if (this.toasts[id]) {
        if (options.timeout && options.timeout === this.toasts[id].timeout) {
          options.timeout++;
        }
        this.setToast(Object.assign({}, this.toasts[id], options));
      } else if (create) {
        this.addToast(Object.assign({}, { id }, options));
      }
    },
    getClasses(position) {
      const classes = [`${VT_NAMESPACE}__container`, position];
      return classes.concat(this.defaults.containerClassName);
    }
  }
});

// vue:/Users/maronato/Developer/vue-toastification/src/components/VtToastContainer.vue?vue&type=template

function render10(_ctx, _cache) {
  const _component_Toast = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("Toast");
  const _component_VtTransition = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VtTransition");
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [
    (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.positions, (pos) => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", { key: pos }, [
        Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_VtTransition, {
          transition: _ctx.defaults.transition,
          class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(_ctx.getClasses(pos))
        }, {
          default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(() => [
            (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.getPositionToasts(pos), (toast) => {
              return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_Toast, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
                key: toast.id
              }, toast), null, 16);
            }), 128))
          ]),
          _: 2
        }, 1032, ["transition", "class"])
      ]);
    }), 128))
  ]);
}

// vue:/Users/maronato/Developer/vue-toastification/src/components/VtToastContainer.vue
VtToastContainer_default.render = render10;
var VtToastContainer_default2 = VtToastContainer_default;

// src/ts/interface.ts
var buildInterface = (globalOptions = {}, mountContainer = true) => {
  const events = globalOptions.eventBus = globalOptions.eventBus || new EventBus();
  if (mountContainer) {
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(() => {
      const app = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createApp"])(VtToastContainer_default2, __spreadValues({}, globalOptions));
      const component = app.mount(document.createElement("div"));
      const onMounted = globalOptions.onMounted;
      if (!isUndefined(onMounted)) {
        onMounted(component, app);
      }
      if (globalOptions.shareAppContext) {
        const baseApp = globalOptions.shareAppContext;
        if (baseApp === true) {
          console.warn(`[${VT_NAMESPACE}] App to share context with was not provided.`);
        } else {
          app._context.components = baseApp._context.components;
          app._context.directives = baseApp._context.directives;
          app._context.mixins = baseApp._context.mixins;
          app._context.provides = baseApp._context.provides;
          app.config.globalProperties = baseApp.config.globalProperties;
        }
      }
    });
  }
  const toast = (content, options) => {
    const props = Object.assign({}, { id: getId(), type: TYPE.DEFAULT }, options, {
      content
    });
    events.emit(EVENTS.ADD, props);
    return props.id;
  };
  toast.clear = () => events.emit(EVENTS.CLEAR, void 0);
  toast.updateDefaults = (update) => {
    events.emit(EVENTS.UPDATE_DEFAULTS, update);
  };
  toast.dismiss = (id) => {
    events.emit(EVENTS.DISMISS, id);
  };
  function updateToast(id, { content, options }, create = false) {
    const opt = Object.assign({}, options, { content });
    events.emit(EVENTS.UPDATE, {
      id,
      options: opt,
      create
    });
  }
  toast.update = updateToast;
  toast.success = (content, options) => toast(content, Object.assign({}, options, { type: TYPE.SUCCESS }));
  toast.info = (content, options) => toast(content, Object.assign({}, options, { type: TYPE.INFO }));
  toast.error = (content, options) => toast(content, Object.assign({}, options, { type: TYPE.ERROR }));
  toast.warning = (content, options) => toast(content, Object.assign({}, options, { type: TYPE.WARNING }));
  return toast;
};

// src/index.ts
var createMockToastInterface = () => {
  const toast = () => console.warn(`[${VT_NAMESPACE}] This plugin does not support SSR!`);
  return new Proxy(toast, {
    get() {
      return toast;
    }
  });
};
function createToastInterface(optionsOrEventBus) {
  if (!isBrowser()) {
    return createMockToastInterface();
  }
  if (isEventBusInterface(optionsOrEventBus)) {
    return buildInterface({ eventBus: optionsOrEventBus }, false);
  }
  return buildInterface(optionsOrEventBus, true);
}
var toastInjectionKey = Symbol("VueToastification");
var globalEventBus = new EventBus();
var VueToastificationPlugin = (App, options) => {
  if ((options == null ? void 0 : options.shareAppContext) === true) {
    options.shareAppContext = App;
  }
  const inter = createToastInterface(__spreadValues({
    eventBus: globalEventBus
  }, options));
  App.provide(toastInjectionKey, inter);
};
var provideToast = (options) => {
  const toast = createToastInterface(options);
  if (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["getCurrentInstance"])()) {
    Object(external_commonjs_vue_commonjs2_vue_root_Vue_["provide"])(toastInjectionKey, toast);
  }
};
var useToast = (eventBus) => {
  if (eventBus) {
    return createToastInterface(eventBus);
  }
  const toast = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["getCurrentInstance"])() ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["inject"])(toastInjectionKey, void 0) : void 0;
  return toast ? toast : createToastInterface(globalEventBus);
};
var src_default = VueToastificationPlugin;


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerMedia.vue?vue&type=script&lang=js







/* harmony default export */ var VideoPlayerMediavue_type_script_lang_js = ({
  name: 'VideoPlayerMedia',
  data: function data() {
    return {
      accountId: null,
      streamName: null,
      eventListeners: {
        reconnect: null,
        stats: null,
        broadcastEvent: null
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var player;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              player = document.getElementById(_this.currentElementRef);
              setVideoPlayer({
                videoPlayer: player,
                srcObject: null,
                volume: 1,
                muted: _this.queryParams.muted,
                autoplay: _this.queryParams.autoplay
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: _extends(_extends(_extends(_extends(_extends(_extends(_extends({}, mapState('ViewConnection', {
    millicastView: function millicastView(state) {
      return state.millicastView;
    }
  })), mapState('Layers', {
    selectedQuality: function selectedQuality(state) {
      return state.selectedQuality;
    }
  })), mapState('Sources', {
    isAudioOnly: function isAudioOnly(state) {
      return state.isAudioOnly;
    },
    stream: function stream(state) {
      return state.stream;
    },
    selectedVideoSource: function selectedVideoSource(state) {
      return state.selectedVideoSource;
    },
    selectedAudioSource: function selectedAudioSource(state) {
      return state.selectedAudioSource;
    },
    audioSources: function audioSources(state) {
      return state.audioSources;
    },
    videoSources: function videoSources(state) {
      return state.videoSources;
    },
    sourceRemoteTracks: function sourceRemoteTracks(state) {
      return state.sourceRemoteTracks;
    },
    mainLabel: function mainLabel(state) {
      return state.mainLabel;
    }
  })), mapState('Controls', {
    video: function video(state) {
      return state.video;
    },
    dropup: function dropup(state) {
      return state.dropup;
    },
    playerMuted: function playerMuted(state) {
      return state.muted;
    },
    isLive: function isLive(state) {
      return state.isLive;
    },
    reconnection: function reconnection(state) {
      return state.reconnection;
    },
    reconnectionStatus: function reconnectionStatus(state) {
      return state.reconnection.status;
    },
    currentElementRef: function currentElementRef(state) {
      return state.currentElementRef;
    },
    isMigrating: function isMigrating(state) {
      return state.isMigrating;
    },
    isSplittedView: function isSplittedView(state) {
      return state.isSplittedView;
    }
  })), mapState('Params', {
    queryParams: function queryParams(state) {
      return state.queryParams;
    }
  })), mapGetters('Sources', ['getVideoHasMain', 'getAudioHasMain'])), {}, {
    displayAudioOnly: function displayAudioOnly() {
      return this.isAudioOnly && this.isLive || this.queryParams.placeholderImg === null && !this.isLive;
    }
  }),
  methods: _extends(_extends(_extends(_extends(_extends(_extends({}, mapMutations('Sources', ['addVideoSource', 'addAudioSource', 'setStream'])), mapMutations('Layers', ['addLayers', 'selectQuality', 'deleteLayers'])), mapMutations('Controls', ['setVideoMuted', 'setDropup', 'setTrackWarning', 'stopVideo', 'setAutoPlayMuted', 'userParamOptions', 'setIsSplittedView'])), mapMutations('ViewConnection', ['setMillicastView'])), mapActions('Sources', ['updateBroadcastState'])), {}, {
    stop: function stop() {
      var _this$millicastView;

      (_this$millicastView = this.millicastView) === null || _this$millicastView === void 0 ? void 0 : _this$millicastView.stop();
      this.stopCurrentVideo();
    },
    stopCurrentVideo: function stopCurrentVideo() {
      this.eventListeners.stats = null;
      this.stopVideo();
    }
  }),
  watch: {
    reconnectionStatus: function reconnectionStatus(isReconnecting) {
      var toast = useToast();
      toast.clear();

      if (isReconnecting) {
        this.setIsSplittedView(false);
        toast.warning("Connection lost. Retrying...");
      }
    },
    displayAudioOnly: function () {
      var _displayAudioOnly = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var srcObject, volume, muted, autoplay, player;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                //If the flag changes we have to set the same events and src to the new tag
                //Get current params from previous video/audio tag
                srcObject = this.video.srcObject;
                volume = this.video.volume;
                muted = this.video.muted;
                autoplay = this.video.autoplay; //Render new tag

                _context2.next = 6;
                return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])();

              case 6:
                //Set new tag params
                player = document.getElementById(this.currentElementRef);
                setVideoPlayer({
                  videoPlayer: player,
                  srcObject: srcObject,
                  volume: volume,
                  muted: muted,
                  autoplay: autoplay
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function displayAudioOnly() {
        return _displayAudioOnly.apply(this, arguments);
      }

      return displayAudioOnly;
    }(),
    queryParams: function queryParams() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var toast;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return stopStream();

              case 2:
                _context3.next = 4;
                return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])();

              case 4:
                _context3.next = 6;
                return useToast();

              case 6:
                toast = _context3.sent;
                sdkManager_initViewModule();
                _context3.prev = 8;
                _context3.next = 11;
                return connectToStream();

              case 11:
                setTimeout(function () {
                  _this2.setAutoPlayMuted(false);
                }, 6000);
                _context3.next = 17;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](8);
                toast.error(_context3.t0.message);

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[8, 14]]);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/components/VideoPlayerMedia.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/VideoPlayerMedia.vue?vue&type=style&index=0&id=6ddbf58a&scoped=true&lang=css
var VideoPlayerMediavue_type_style_index_0_id_6ddbf58a_scoped_true_lang_css = __webpack_require__("3d21");

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/VideoPlayerMedia.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(VideoPlayerMediavue_type_script_lang_js, [['render',VideoPlayerMediavue_type_template_id_6ddbf58a_scoped_true_render],['__scopeId',"data-v-6ddbf58a"]])

/* harmony default export */ var VideoPlayerMedia = (__exports__);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerSideVideoSources.vue?vue&type=template&id=1895dc47&scoped=true


var VideoPlayerSideVideoSourcesvue_type_template_id_1895dc47_scoped_true_withScopeId = function _withScopeId(n) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-1895dc47"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n;
};

var VideoPlayerSideVideoSourcesvue_type_template_id_1895dc47_scoped_true_hoisted_1 = {
  class: "p-0 flex-lg-column flex-row justify-content-center",
  style: {
    "width": "100%"
  }
};
var VideoPlayerSideVideoSourcesvue_type_template_id_1895dc47_scoped_true_hoisted_2 = {
  class: "videoText",
  style: 'height:100%'
};
var VideoPlayerSideVideoSourcesvue_type_template_id_1895dc47_scoped_true_hoisted_3 = ["onClick", "id"];
var VideoPlayerSideVideoSourcesvue_type_template_id_1895dc47_scoped_true_hoisted_4 = ["id"];
function VideoPlayerSideVideoSourcesvue_type_template_id_1895dc47_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("ul", VideoPlayerSideVideoSourcesvue_type_template_id_1895dc47_scoped_true_hoisted_1, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.sourceRemoteTracks, function (source, index) {
    var _source$transceiver;

    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("li", {
      class: "col-6 col-lg-12 col-sm-12",
      style: 'scroll-snap-align: end',
      key: 'p' + index
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", VideoPlayerSideVideoSourcesvue_type_template_id_1895dc47_scoped_true_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("video", {
      onClick: function onClick($event) {
        return $options.switchProjection(index);
      },
      id: 'sidePlayer' + source.sourceId,
      ref_for: true,
      ref: 'sidePlayer' + source.sourceId
    }, null, 8, VideoPlayerSideVideoSourcesvue_type_template_id_1895dc47_scoped_true_hoisted_3), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      id: 'sideLabel' + ((_source$transceiver = source.transceiver) === null || _source$transceiver === void 0 ? void 0 : _source$transceiver.mid)
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(source.sourceId), 9, VideoPlayerSideVideoSourcesvue_type_template_id_1895dc47_scoped_true_hoisted_4)])]);
  }), 128))]);
}
// CONCATENATED MODULE: ./src/components/VideoPlayerSideVideoSources.vue?vue&type=template&id=1895dc47&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerSideVideoSources.vue?vue&type=script&lang=js









/* harmony default export */ var VideoPlayerSideVideoSourcesvue_type_script_lang_js = ({
  name: "VideoPlayerSideVideoSources",
  data: function data() {
    return {
      indexSourceProjectedInMain: null,
      indexMainMediaSource: 0
    };
  },
  computed: _extends(_extends(_extends({}, mapState("Sources", ["sourceRemoteTracks", "videoSources"])), mapGetters("Sources", ["getVideoHasMain"])), mapState('ViewConnection', {
    millicastView: function millicastView(state) {
      return state.millicastView;
    }
  })),
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.sourceRemoteTracks.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_, index) {
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return projectRemoteTracks(index);

                        case 2:
                          return _context.abrupt("return", _context.sent);

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x, _x2) {
                  return _ref.apply(this, arguments);
                };
              }());

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  watch: {
    'sourceRemoteTracks.length': function () {
      var _sourceRemoteTracksLength = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return projectRemoteTracks(this.sourceRemoteTracks.length - 1);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function sourceRemoteTracksLength() {
        return _sourceRemoteTracksLength.apply(this, arguments);
      }

      return sourceRemoteTracksLength;
    }()
  },
  methods: _extends(_extends({}, mapMutations('Sources', ['setMainLabel'])), {}, {
    switchProjection: function switchProjection(index) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _source$sourceId;

        var vidId, source, _this2$sourceRemoteTr, _this2$sourceRemoteTr2, _this2$sourceRemoteTr3, _this2$sourceRemoteTr4;

        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])();

              case 2:
                // select the source in the dropdown
                vidId = index + _this2.videoSources.length - _this2.sourceRemoteTracks.length;
                source = _this2.videoSources[vidId];

                if (_this2.getVideoHasMain) {
                  if (_this2.indexSourceProjectedInMain === null) {
                    // the one projected is the main and want to project a small one
                    projectVideo(null, (_this2$sourceRemoteTr = _this2.sourceRemoteTracks[index].transceiver) === null || _this2$sourceRemoteTr === void 0 ? void 0 : _this2$sourceRemoteTr.mid, vidId);
                    _this2.indexSourceProjectedInMain = index;
                  } else if (_this2.indexSourceProjectedInMain === index) {
                    // is being projected a small video and want to switch to main with this one
                    projectVideo(_this2.sourceRemoteTracks[index].sourceId, (_this2$sourceRemoteTr2 = _this2.sourceRemoteTracks[index].transceiver) === null || _this2$sourceRemoteTr2 === void 0 ? void 0 : _this2$sourceRemoteTr2.mid, vidId);
                    _this2.indexSourceProjectedInMain = null;
                    source = _this2.videoSources[_this2.indexMainMediaSource];
                  } else {
                    // is being projected a small video but want to project another small one
                    projectVideo(null, (_this2$sourceRemoteTr3 = _this2.sourceRemoteTracks[index].transceiver) === null || _this2$sourceRemoteTr3 === void 0 ? void 0 : _this2$sourceRemoteTr3.mid, vidId);
                    projectVideo(_this2.sourceRemoteTracks[_this2.indexSourceProjectedInMain].sourceId, (_this2$sourceRemoteTr4 = _this2.sourceRemoteTracks[_this2.indexSourceProjectedInMain].transceiver) === null || _this2$sourceRemoteTr4 === void 0 ? void 0 : _this2$sourceRemoteTr4.mid, vidId);
                    _this2.indexSourceProjectedInMain = index;
                  }
                }

                _this2.setMainLabel((_source$sourceId = source.sourceId) !== null && _source$sourceId !== void 0 ? _source$sourceId : 'Main');

                _context4.next = 8;
                return selectSource({
                  kind: source.trackId,
                  source: source
                });

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  })
});
// CONCATENATED MODULE: ./src/components/VideoPlayerSideVideoSources.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/VideoPlayerSideVideoSources.vue?vue&type=style&index=0&id=1895dc47&scoped=true&lang=css
var VideoPlayerSideVideoSourcesvue_type_style_index_0_id_1895dc47_scoped_true_lang_css = __webpack_require__("cb4e");

// CONCATENATED MODULE: ./src/components/VideoPlayerSideVideoSources.vue







const VideoPlayerSideVideoSources_exports_ = /*#__PURE__*/exportHelper_default()(VideoPlayerSideVideoSourcesvue_type_script_lang_js, [['render',VideoPlayerSideVideoSourcesvue_type_template_id_1895dc47_scoped_true_render],['__scopeId',"data-v-1895dc47"]])

/* harmony default export */ var VideoPlayerSideVideoSources = (VideoPlayerSideVideoSources_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsBadge.vue?vue&type=template&id=11dcaf08

var VideoPlayerControlsBadgevue_type_template_id_11dcaf08_hoisted_1 = {
  key: 0,
  class: "align-middle"
};
var VideoPlayerControlsBadgevue_type_template_id_11dcaf08_hoisted_2 = ["textContent"];
function VideoPlayerControlsBadgevue_type_template_id_11dcaf08_render(_ctx, _cache, $props, $setup, $data, $options) {
  return !_ctx.isLoading ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("h4", VideoPlayerControlsBadgevue_type_template_id_11dcaf08_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["badge badge-secondary", {
      'badge-danger': _ctx.isLive
    }]),
    textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.text),
    style: {
      "border": "0px"
    }
  }, null, 10, VideoPlayerControlsBadgevue_type_template_id_11dcaf08_hoisted_2)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true);
}
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsBadge.vue?vue&type=template&id=11dcaf08

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsBadge.vue?vue&type=script&lang=js


/* harmony default export */ var VideoPlayerControlsBadgevue_type_script_lang_js = ({
  name: 'VideoPlayerControlsBadge',
  computed: _extends(_extends({}, mapState('Controls', {
    isLive: function isLive(state) {
      return state.isLive;
    },
    isLoading: function isLoading(state) {
      return state.isLoading;
    }
  })), {}, {
    text: function text() {
      return this.isLive ? 'LIVE' : 'NOT LIVE';
    }
  })
});
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsBadge.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsBadge.vue





const VideoPlayerControlsBadge_exports_ = /*#__PURE__*/exportHelper_default()(VideoPlayerControlsBadgevue_type_script_lang_js, [['render',VideoPlayerControlsBadgevue_type_template_id_11dcaf08_render]])

/* harmony default export */ var VideoPlayerControlsBadge = (VideoPlayerControlsBadge_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsFullscreen.vue?vue&type=template&id=8ba83ece

function VideoPlayerControlsFullscreenvue_type_template_id_8ba83ece_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.isMobile ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 0,
    class: "dropdown-item",
    onClick: _cache[0] || (_cache[0] = function () {
      return $props.click && $props.click.apply($props, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["align-middle control-icon", {
      'ml-viewer-bi-fullscreen': !$data.fullscreen,
      'ml-viewer-bi-fullscreen-exit': $data.fullscreen
    }])
  }, null, 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" Full Screen ")])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("i", {
    key: 1,
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["h3 align-middle control-icon", {
      'ml-viewer-bi-fullscreen': !$data.fullscreen,
      'ml-viewer-bi-fullscreen-exit': $data.fullscreen
    }]),
    onClick: _cache[1] || (_cache[1] = function () {
      return $props.click && $props.click.apply($props, arguments);
    })
  }, null, 2));
}
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsFullscreen.vue?vue&type=template&id=8ba83ece

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsFullscreen.vue?vue&type=script&lang=js


/* harmony default export */ var VideoPlayerControlsFullscreenvue_type_script_lang_js = ({
  name: 'VideoPlayerControlsFullscreen',
  props: {
    click: Function
  },
  data: function data() {
    return {
      fullscreen: document.fullscreenElement !== null
    };
  },
  mounted: function mounted() {
    var _this = this;

    document.onfullscreenchange = function () {
      _this.fullscreen = document.fullscreenElement !== null;
    };
  },
  computed: _extends({}, mapState('Controls', {
    isMobile: function isMobile(state) {
      return state.isMobile;
    }
  }))
});
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsFullscreen.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsFullscreen.vue





const VideoPlayerControlsFullscreen_exports_ = /*#__PURE__*/exportHelper_default()(VideoPlayerControlsFullscreenvue_type_script_lang_js, [['render',VideoPlayerControlsFullscreenvue_type_template_id_8ba83ece_render]])

/* harmony default export */ var VideoPlayerControlsFullscreen = (VideoPlayerControlsFullscreen_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsPip.vue?vue&type=template&id=63e7514d&scoped=true

function VideoPlayerControlsPipvue_type_template_id_63e7514d_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.isMobile ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    key: 0,
    class: "dropdown-item",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.togglePip && $options.togglePip.apply($options, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["align-middle control-icon", {
      'ml-viewer-bi-pip': !_ctx.pip,
      'ml-viewer-bi-pip-fill': _ctx.pip
    }])
  }, null, 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" Miniplayer ")])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    key: 1,
    class: "mobile-setting",
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.togglePip && $options.togglePip.apply($options, arguments);
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["h3 align-middle control-icon", {
      'ml-viewer-bi-pip': !_ctx.pip,
      'ml-viewer-bi-pip-fill': _ctx.pip
    }])
  }, null, 2)]));
}
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsPip.vue?vue&type=template&id=63e7514d&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsPip.vue?vue&type=script&lang=js


/* harmony default export */ var VideoPlayerControlsPipvue_type_script_lang_js = ({
  name: 'VideoPlayerControlsPip',
  computed: _extends({}, mapState('Controls', {
    isMobile: function isMobile(state) {
      return state.isMobile;
    },
    pip: function pip(state) {
      return state.pip;
    },
    video: function video(state) {
      return state.video;
    }
  })),
  methods: {
    togglePip: function togglePip() {
      if (!this.pip && this.video.srcObject && this.video.nodeName === 'VIDEO') {
        this.video.requestPictureInPicture();
      } else {
        document.exitPictureInPicture();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsPip.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsPip.vue?vue&type=style&index=0&id=63e7514d&scoped=true&lang=css
var VideoPlayerControlsPipvue_type_style_index_0_id_63e7514d_scoped_true_lang_css = __webpack_require__("6a15");

// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsPip.vue







const VideoPlayerControlsPip_exports_ = /*#__PURE__*/exportHelper_default()(VideoPlayerControlsPipvue_type_script_lang_js, [['render',VideoPlayerControlsPipvue_type_template_id_63e7514d_scoped_true_render],['__scopeId',"data-v-63e7514d"]])

/* harmony default export */ var VideoPlayerControlsPip = (VideoPlayerControlsPip_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsPlay.vue?vue&type=template&id=11fee096

function VideoPlayerControlsPlayvue_type_template_id_11fee096_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("i", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["h3 align-middle control-icon", {
      'ml-viewer-bi-play-fill': !_ctx.playing,
      'ml-viewer-bi-pause-fill': _ctx.playing
    }]),
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.togglePlay && $options.togglePlay.apply($options, arguments);
    })
  }, null, 2);
}
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsPlay.vue?vue&type=template&id=11fee096

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsPlay.vue?vue&type=script&lang=js





/* harmony default export */ var VideoPlayerControlsPlayvue_type_script_lang_js = ({
  name: 'VideoPlayerControlsPlay',
  computed: _extends({}, mapState('Controls', {
    video: function video(state) {
      return state.video;
    },
    playing: function playing(state) {
      return state.playing;
    }
  })),
  methods: {
    togglePlay: function () {
      var _togglePlay = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this$video;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.playing) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return this.video.pause();

              case 3:
                _context.next = 10;
                break;

              case 5:
                if (!(((_this$video = this.video) === null || _this$video === void 0 ? void 0 : _this$video.srcObject) !== null)) {
                  _context.next = 10;
                  break;
                }

                _context.next = 8;
                return connectToStream();

              case 8:
                _context.next = 10;
                return this.video.play();

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function togglePlay() {
        return _togglePlay.apply(this, arguments);
      }

      return togglePlay;
    }()
  }
});
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsPlay.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsPlay.vue





const VideoPlayerControlsPlay_exports_ = /*#__PURE__*/exportHelper_default()(VideoPlayerControlsPlayvue_type_script_lang_js, [['render',VideoPlayerControlsPlayvue_type_template_id_11fee096_render]])

/* harmony default export */ var VideoPlayerControlsPlay = (VideoPlayerControlsPlay_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsSettings.vue?vue&type=template&id=1a8f28b5&scoped=true


var VideoPlayerControlsSettingsvue_type_template_id_1a8f28b5_scoped_true_withScopeId = function _withScopeId(n) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-1a8f28b5"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n;
};

var VideoPlayerControlsSettingsvue_type_template_id_1a8f28b5_scoped_true_hoisted_1 = {
  class: "dropup"
};
var VideoPlayerControlsSettingsvue_type_template_id_1a8f28b5_scoped_true_hoisted_2 = {
  key: 0,
  class: "badge bg-light ms-2"
};

var VideoPlayerControlsSettingsvue_type_template_id_1a8f28b5_scoped_true_hoisted_3 = /*#__PURE__*/VideoPlayerControlsSettingsvue_type_template_id_1a8f28b5_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    class: "bi ml-viewer-bi-exclamation-circle-fill p-0"
  }, null, -1);
});

var VideoPlayerControlsSettingsvue_type_template_id_1a8f28b5_scoped_true_hoisted_4 = [VideoPlayerControlsSettingsvue_type_template_id_1a8f28b5_scoped_true_hoisted_3];
var VideoPlayerControlsSettingsvue_type_template_id_1a8f28b5_scoped_true_hoisted_5 = {
  class: "dropdown-header d-flex m-0 col-12"
};

var VideoPlayerControlsSettingsvue_type_template_id_1a8f28b5_scoped_true_hoisted_6 = /*#__PURE__*/VideoPlayerControlsSettingsvue_type_template_id_1a8f28b5_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h6", {
    class: "p-0 m-0"
  }, "Settings", -1);
});

var VideoPlayerControlsSettingsvue_type_template_id_1a8f28b5_scoped_true_hoisted_7 = {
  class: "p-0 ml-auto",
  style: {
    "color": "#9e9e9e"
  }
};
function VideoPlayerControlsSettingsvue_type_template_id_1a8f28b5_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_VideoPlayerControlsSettingsQuality = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerControlsSettingsQuality");

  var _component_VideoPlayerControlsSettingsSplitView = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerControlsSettingsSplitView");

  var _component_VideoPlayerControlsSettingsVideoTrack = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerControlsSettingsVideoTrack");

  var _component_VideoPlayerControlsSettingsAudioTrack = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerControlsSettingsAudioTrack");

  var _component_VideoPlayerControlsSettingsStats = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerControlsSettingsStats");

  var _component_VideoPlayerControlsSettingsReportIssue = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerControlsSettingsReportIssue");

  var _component_VideoPlayerControlsSettingsDropdown = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerControlsSettingsDropdown");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "backdrop",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.setDropup('');
    }),
    onDblclick: _cache[1] || (_cache[1] = function () {
      return _ctx.toggleFullscreen && _ctx.toggleFullscreen.apply(_ctx, arguments);
    })
  }, null, 32), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", VideoPlayerControlsSettingsvue_type_template_id_1a8f28b5_scoped_true_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    class: "ml-viewer-bi-gear-fill h3 align-middle control-icon",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.setDropup('settings');
    })
  }, [_ctx.trackWarning ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", VideoPlayerControlsSettingsvue_type_template_id_1a8f28b5_scoped_true_hoisted_2, VideoPlayerControlsSettingsvue_type_template_id_1a8f28b5_scoped_true_hoisted_4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    ref: "settings",
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["dropdown-menu dropdown-menu-right", {
      show: _ctx.dropup === 'settings'
    }]),
    style: {
      "margin-bottom": "0.9rem"
    }
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", VideoPlayerControlsSettingsvue_type_template_id_1a8f28b5_scoped_true_hoisted_5, [VideoPlayerControlsSettingsvue_type_template_id_1a8f28b5_scoped_true_hoisted_6, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", VideoPlayerControlsSettingsvue_type_template_id_1a8f28b5_scoped_true_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($data.viewerVersion), 1)]), _ctx.getActiveMedias.length > 1 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_VideoPlayerControlsSettingsQuality, {
    key: 0
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.getVideoSources.length > 1 ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_VideoPlayerControlsSettingsSplitView, {
    key: 1
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.getVideoSources.length > 1 || !_ctx.getVideoHasMain && _ctx.getVideoSources.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_VideoPlayerControlsSettingsVideoTrack, {
    key: 2,
    unsupportedFlagEmoji: $options.unsupportedFlagEmoji,
    sourceFlagEmojiToPng: $options.sourceFlagEmojiToPng
  }, null, 8, ["unsupportedFlagEmoji", "sourceFlagEmojiToPng"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.getAudioSources.length > 1 || !_ctx.getAudioHasMain && _ctx.getAudioSources.length ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_VideoPlayerControlsSettingsAudioTrack, {
    key: 3,
    unsupportedFlagEmoji: $options.unsupportedFlagEmoji,
    sourceFlagEmojiToPng: $options.sourceFlagEmojiToPng
  }, null, 8, ["unsupportedFlagEmoji", "sourceFlagEmojiToPng"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_VideoPlayerControlsSettingsStats), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_VideoPlayerControlsSettingsReportIssue, {
    streamId: $props.streamId
  }, null, 8, ["streamId"])], 2), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["dropdown-menu dropdown-menu-right", {
      show: $data.showDropup
    }]),
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])([{
      width: $data.settingsWidth
    }, {
      "margin-bottom": "0.9rem"
    }])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_VideoPlayerControlsSettingsDropdown, {
    selected: $data.selected,
    items: $data.items,
    compare: $data.compare,
    handleClick: $data.handleClick,
    title: $data.dropupTitle,
    unsupportedFlagEmoji: $options.unsupportedFlagEmoji,
    sourceFlagEmojiToPng: $options.sourceFlagEmojiToPng
  }, null, 8, ["selected", "items", "compare", "handleClick", "title", "unsupportedFlagEmoji", "sourceFlagEmojiToPng"])], 6)])], 64);
}
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettings.vue?vue&type=template&id=1a8f28b5&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.code-point-at.js
var es_string_code_point_at = __webpack_require__("f5b2");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsSettingsVideoTrack.vue?vue&type=template&id=7ef173a6&scoped=true


var VideoPlayerControlsSettingsVideoTrackvue_type_template_id_7ef173a6_scoped_true_withScopeId = function _withScopeId(n) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-7ef173a6"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n;
};

var VideoPlayerControlsSettingsVideoTrackvue_type_template_id_7ef173a6_scoped_true_hoisted_1 = {
  class: "back-header mr-2"
};
var VideoPlayerControlsSettingsVideoTrackvue_type_template_id_7ef173a6_scoped_true_hoisted_2 = {
  class: "bi ml-viewer-bi-camera-video-fill"
};
var VideoPlayerControlsSettingsVideoTrackvue_type_template_id_7ef173a6_scoped_true_hoisted_3 = {
  key: 0,
  class: "badge bg-danger"
};
var VideoPlayerControlsSettingsVideoTrackvue_type_template_id_7ef173a6_scoped_true_hoisted_4 = ["innerHTML"];
var VideoPlayerControlsSettingsVideoTrackvue_type_template_id_7ef173a6_scoped_true_hoisted_5 = {
  key: 1
};

var VideoPlayerControlsSettingsVideoTrackvue_type_template_id_7ef173a6_scoped_true_hoisted_6 = /*#__PURE__*/VideoPlayerControlsSettingsVideoTrackvue_type_template_id_7ef173a6_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "back-arrow"
  }, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    class: "bi ml-viewer-bi-chevron-right ml-auto py-0"
  })], -1);
});

function VideoPlayerControlsSettingsVideoTrackvue_type_template_id_7ef173a6_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    class: "dropdown-item d-flex align-items-center pr-0 justify-content-between",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.setDropup('videoTracks');
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", VideoPlayerControlsSettingsVideoTrackvue_type_template_id_7ef173a6_scoped_true_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", VideoPlayerControlsSettingsVideoTrackvue_type_template_id_7ef173a6_scoped_true_hoisted_2, [this.selectedVideoSource.name === 'none' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", VideoPlayerControlsSettingsVideoTrackvue_type_template_id_7ef173a6_scoped_true_hoisted_3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" Video Source: ")]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["dropdown-item-name mr-auto", [this.selectedVideoSource.name === 'none' ? 'none' : '', this.selectedVideoSource.sourceId === null ? 'main' : '']])
  }, [$props.unsupportedFlagEmoji(this.selectedVideoSource.name) ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
    key: 0,
    innerHTML: $props.sourceFlagEmojiToPng(this.selectedVideoSource.name)
  }, null, 8, VideoPlayerControlsSettingsVideoTrackvue_type_template_id_7ef173a6_scoped_true_hoisted_4)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", VideoPlayerControlsSettingsVideoTrackvue_type_template_id_7ef173a6_scoped_true_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(this.selectedVideoSource.name), 1))], 2), VideoPlayerControlsSettingsVideoTrackvue_type_template_id_7ef173a6_scoped_true_hoisted_6]);
}
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsVideoTrack.vue?vue&type=template&id=7ef173a6&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsSettingsVideoTrack.vue?vue&type=script&lang=js


/* harmony default export */ var VideoPlayerControlsSettingsVideoTrackvue_type_script_lang_js = ({
  name: 'VideoPlayerControlsSettingsQuality',
  props: {
    unsupportedFlagEmoji: Function,
    sourceFlagEmojiToPng: Function
  },
  computed: _extends({}, mapState('Sources', {
    selectedVideoSource: function selectedVideoSource(state) {
      return state.selectedVideoSource;
    }
  })),
  methods: _extends({}, mapMutations('Controls', ['setDropup']))
});
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsVideoTrack.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsVideoTrack.vue?vue&type=style&index=0&id=7ef173a6&scoped=true&lang=css
var VideoPlayerControlsSettingsVideoTrackvue_type_style_index_0_id_7ef173a6_scoped_true_lang_css = __webpack_require__("d8d3");

// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsVideoTrack.vue







const VideoPlayerControlsSettingsVideoTrack_exports_ = /*#__PURE__*/exportHelper_default()(VideoPlayerControlsSettingsVideoTrackvue_type_script_lang_js, [['render',VideoPlayerControlsSettingsVideoTrackvue_type_template_id_7ef173a6_scoped_true_render],['__scopeId',"data-v-7ef173a6"]])

/* harmony default export */ var VideoPlayerControlsSettingsVideoTrack = (VideoPlayerControlsSettingsVideoTrack_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsSettingsAudioTrack.vue?vue&type=template&id=b7f6245a&scoped=true


var VideoPlayerControlsSettingsAudioTrackvue_type_template_id_b7f6245a_scoped_true_withScopeId = function _withScopeId(n) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-b7f6245a"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n;
};

var VideoPlayerControlsSettingsAudioTrackvue_type_template_id_b7f6245a_scoped_true_hoisted_1 = {
  class: "back-header mr-2"
};
var VideoPlayerControlsSettingsAudioTrackvue_type_template_id_b7f6245a_scoped_true_hoisted_2 = {
  class: "bi ml-viewer-bi-soundwave"
};
var VideoPlayerControlsSettingsAudioTrackvue_type_template_id_b7f6245a_scoped_true_hoisted_3 = {
  key: 0,
  class: "badge bg-danger"
};
var VideoPlayerControlsSettingsAudioTrackvue_type_template_id_b7f6245a_scoped_true_hoisted_4 = ["innerHTML"];
var VideoPlayerControlsSettingsAudioTrackvue_type_template_id_b7f6245a_scoped_true_hoisted_5 = {
  key: 1
};

var VideoPlayerControlsSettingsAudioTrackvue_type_template_id_b7f6245a_scoped_true_hoisted_6 = /*#__PURE__*/VideoPlayerControlsSettingsAudioTrackvue_type_template_id_b7f6245a_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    class: "bi ml-viewer-bi-chevron-right ml-auto py-0"
  })], -1);
});

function VideoPlayerControlsSettingsAudioTrackvue_type_template_id_b7f6245a_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    class: "dropdown-item d-flex align-items-center pr-0 justify-content-between",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.setDropup('audioTracks');
    })
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", VideoPlayerControlsSettingsAudioTrackvue_type_template_id_b7f6245a_scoped_true_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", VideoPlayerControlsSettingsAudioTrackvue_type_template_id_b7f6245a_scoped_true_hoisted_2, [this.selectedAudioSource.name === 'none' ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", VideoPlayerControlsSettingsAudioTrackvue_type_template_id_b7f6245a_scoped_true_hoisted_3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" Audio Source: ")]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["dropdown-item-name mr-auto", [this.selectedAudioSource.name === 'none' ? 'none' : '', this.selectedAudioSource.sourceId === null ? 'main' : '']])
  }, [$props.unsupportedFlagEmoji(this.selectedAudioSource.name) ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
    key: 0,
    innerHTML: $props.sourceFlagEmojiToPng(this.selectedAudioSource.name)
  }, null, 8, VideoPlayerControlsSettingsAudioTrackvue_type_template_id_b7f6245a_scoped_true_hoisted_4)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", VideoPlayerControlsSettingsAudioTrackvue_type_template_id_b7f6245a_scoped_true_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(this.selectedAudioSource.name), 1))], 2), VideoPlayerControlsSettingsAudioTrackvue_type_template_id_b7f6245a_scoped_true_hoisted_6]);
}
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsAudioTrack.vue?vue&type=template&id=b7f6245a&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsSettingsAudioTrack.vue?vue&type=script&lang=js


/* harmony default export */ var VideoPlayerControlsSettingsAudioTrackvue_type_script_lang_js = ({
  name: 'VideoPlayerControlsSettingsQuality',
  props: {
    unsupportedFlagEmoji: Function,
    sourceFlagEmojiToPng: Function
  },
  computed: _extends({}, mapState('Sources', {
    selectedAudioSource: function selectedAudioSource(state) {
      return state.selectedAudioSource;
    }
  })),
  methods: _extends({}, mapMutations('Controls', ['setDropup']))
});
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsAudioTrack.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsAudioTrack.vue?vue&type=style&index=0&id=b7f6245a&scoped=true&lang=css
var VideoPlayerControlsSettingsAudioTrackvue_type_style_index_0_id_b7f6245a_scoped_true_lang_css = __webpack_require__("f7d3");

// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsAudioTrack.vue







const VideoPlayerControlsSettingsAudioTrack_exports_ = /*#__PURE__*/exportHelper_default()(VideoPlayerControlsSettingsAudioTrackvue_type_script_lang_js, [['render',VideoPlayerControlsSettingsAudioTrackvue_type_template_id_b7f6245a_scoped_true_render],['__scopeId',"data-v-b7f6245a"]])

/* harmony default export */ var VideoPlayerControlsSettingsAudioTrack = (VideoPlayerControlsSettingsAudioTrack_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsSettingsQuality.vue?vue&type=template&id=87b9709e


var VideoPlayerControlsSettingsQualityvue_type_template_id_87b9709e_hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
  class: "back-header mr-2"
}, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
  class: "bi ml-viewer-bi-sliders"
}), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" Video Quality: ")], -1);

var VideoPlayerControlsSettingsQualityvue_type_template_id_87b9709e_hoisted_2 = {
  class: "dropdown-item-name mr-auto"
};

var VideoPlayerControlsSettingsQualityvue_type_template_id_87b9709e_hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
  class: "bi ml-viewer-bi-chevron-right ml-auto py-0"
})], -1);

function VideoPlayerControlsSettingsQualityvue_type_template_id_87b9709e_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    class: "dropdown-item d-flex align-items-center pr-0 justify-content-between",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.setDropup('qualities');
    })
  }, [VideoPlayerControlsSettingsQualityvue_type_template_id_87b9709e_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", VideoPlayerControlsSettingsQualityvue_type_template_id_87b9709e_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(this.selectedQuality.name), 1), VideoPlayerControlsSettingsQualityvue_type_template_id_87b9709e_hoisted_3]);
}
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsQuality.vue?vue&type=template&id=87b9709e

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsSettingsQuality.vue?vue&type=script&lang=js


/* harmony default export */ var VideoPlayerControlsSettingsQualityvue_type_script_lang_js = ({
  name: 'VideoPlayerControlsSettingsQuality',
  computed: _extends({}, mapState('Layers', {
    selectedQuality: function selectedQuality(state) {
      return state.selectedQuality;
    }
  })),
  methods: _extends({}, mapMutations('Controls', ['setDropup']))
});
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsQuality.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsQuality.vue





const VideoPlayerControlsSettingsQuality_exports_ = /*#__PURE__*/exportHelper_default()(VideoPlayerControlsSettingsQualityvue_type_script_lang_js, [['render',VideoPlayerControlsSettingsQualityvue_type_template_id_87b9709e_render]])

/* harmony default export */ var VideoPlayerControlsSettingsQuality = (VideoPlayerControlsSettingsQuality_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsSettingsStats.vue?vue&type=template&id=00e40a59&scoped=true


var VideoPlayerControlsSettingsStatsvue_type_template_id_00e40a59_scoped_true_withScopeId = function _withScopeId(n) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-00e40a59"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n;
};

var VideoPlayerControlsSettingsStatsvue_type_template_id_00e40a59_scoped_true_hoisted_1 = /*#__PURE__*/VideoPlayerControlsSettingsStatsvue_type_template_id_00e40a59_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    class: "ml-viewer-bi-info-circle-fill align-middle control-icon"
  }, null, -1);
});

function VideoPlayerControlsSettingsStatsvue_type_template_id_00e40a59_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_VideoPlayerStatsTable = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerStatsTable");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["dropdown-item", {
      disabled: !_ctx.isLive
    }]),
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.toggleStats && $options.toggleStats.apply($options, arguments);
    })
  }, [VideoPlayerControlsSettingsStatsvue_type_template_id_00e40a59_scoped_true_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" Media Stats "), $data.showStats ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Teleport"], {
    key: 0,
    to: "#vplayer"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_VideoPlayerStatsTable, {
    close: $options.toggleStats
  }, null, 8, ["close"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 2);
}
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsStats.vue?vue&type=template&id=00e40a59&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerStatsTable.vue?vue&type=template&id=6912e151&scoped=true



var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId = function _withScopeId(n) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-6912e151"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n;
};

var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_1 = {
  class: "table table-sm table-dark table-borderless fixed-top"
};
var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_2 = {
  key: 0,
  class: "d-flex align-items-center"
};

var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_3 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", null, "Source:", -1);
});

var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_4 = ["value"];
var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_5 = {
  colspan: "2",
  class: "text-right"
};

var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_6 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", {
    class: "row mx-0 text-left"
  }, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", {
    scope: "col",
    class: "col-6"
  }, "Name"), /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", {
    scope: "col",
    class: "col-6"
  }, "Value")], -1);
});

var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_7 = {
  key: 0,
  class: "row mx-0"
};

var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_8 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    class: "col-6"
  }, "Server Id", -1);
});

var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_9 = {
  class: "col-6"
};
var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_10 = {
  key: 1,
  class: "row mx-0"
};

var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_11 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    class: "col-6"
  }, "RTT", -1);
});

var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_12 = {
  class: "col-6"
};
var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_13 = {
  key: 2,
  class: "row mx-0"
};

var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_14 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    class: "col-6"
  }, "Video Resolution", -1);
});

var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_15 = {
  class: "col-6"
};
var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_16 = {
  key: 3,
  class: "row mx-0"
};

var _hoisted_17 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    class: "col-6"
  }, "FPS", -1);
});

var _hoisted_18 = {
  class: "col-6"
};
var _hoisted_19 = {
  key: 4,
  class: "row mx-0"
};

var _hoisted_20 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    class: "col-6"
  }, "Video Bitrate", -1);
});

var _hoisted_21 = {
  class: "col-6"
};
var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_22 = {
  key: 5,
  class: "row mx-0"
};

var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_23 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    class: "col-6"
  }, "Audio Bitrate", -1);
});

var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_24 = {
  class: "col-6"
};
var _hoisted_25 = {
  key: 6,
  class: "row mx-0"
};

var _hoisted_26 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    class: "col-6"
  }, "Video Total Received", -1);
});

var _hoisted_27 = {
  class: "col-6"
};
var _hoisted_28 = {
  key: 7,
  class: "row mx-0"
};

var _hoisted_29 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    class: "col-6"
  }, "Audio Total Received", -1);
});

var _hoisted_30 = {
  class: "col-6"
};
var _hoisted_31 = {
  key: 8,
  class: "row mx-0"
};

var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_32 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    class: "col-6"
  }, "Video Packet Loss", -1);
});

var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_33 = {
  class: "col-6"
};
var VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_34 = {
  key: 9,
  class: "row mx-0"
};

var _hoisted_35 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    class: "col-6"
  }, "Audio Packet Loss", -1);
});

var _hoisted_36 = {
  class: "col-6"
};
var _hoisted_37 = {
  key: 10,
  class: "row mx-0"
};

var _hoisted_38 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    class: "col-6"
  }, "Video Jitter", -1);
});

var _hoisted_39 = {
  class: "col-6"
};
var _hoisted_40 = {
  key: 11,
  class: "row mx-0"
};

var _hoisted_41 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    class: "col-6"
  }, "Audio Jitter", -1);
});

var _hoisted_42 = {
  class: "col-6"
};
var _hoisted_43 = {
  key: 12,
  class: "row mx-0"
};

var _hoisted_44 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    class: "col-6"
  }, "Capture timestamp", -1);
});

var _hoisted_45 = ["textContent"];
var _hoisted_46 = {
  key: 13,
  class: "row mx-0"
};

var _hoisted_47 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    class: "col-6"
  }, "Capture delta time", -1);
});

var _hoisted_48 = ["textContent"];
var _hoisted_49 = {
  key: 14,
  class: "row mx-0"
};

var _hoisted_50 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    class: "col-6"
  }, "Codecs", -1);
});

var _hoisted_51 = ["textContent"];
var _hoisted_52 = {
  key: 15,
  class: "row mx-0"
};

var _hoisted_53 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    class: "col-6 text-break"
  }, "Timestamp", -1);
});

var _hoisted_54 = ["textContent"];
var _hoisted_55 = {
  key: 16,
  class: "row mx-0"
};

var _hoisted_56 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    class: "col-6 text-break"
  }, "Server", -1);
});

var _hoisted_57 = ["textContent"];
var _hoisted_58 = {
  key: 17,
  class: "row mx-0"
};

var _hoisted_59 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    class: "col-6 text-break"
  }, "Cluster", -1);
});

var _hoisted_60 = ["textContent"];
var _hoisted_61 = {
  key: 18,
  class: "row mx-0"
};

var _hoisted_62 = /*#__PURE__*/VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    class: "col-12 center"
  }, null, -1);
});

var _hoisted_63 = [_hoisted_62];
var _hoisted_64 = {
  key: 19,
  class: "row mx-0"
};
var _hoisted_65 = {
  class: "col-12",
  align: "center"
};
function VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$millicastView, _ctx$millicastView$si, _$options$video, _$options$video2, _$options$video3, _$options$video4, _$options$audio, _$options$video5, _$options$audio2, _$options$video6, _$options$audio3, _$options$video7, _$options$audio4;

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("table", VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["row mx-0 align-items-center", $options.multiStatsAvailable ? 'justify-content-between' : 'justify-content-end'])
  }, [$options.multiStatsAvailable ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("th", VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_2, [VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("select", {
    class: "ml-2 source-select",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.selectedSourceMid = $event;
    }),
    onChange: _cache[1] || (_cache[1] = function () {
      return $options.handleSourceChange && $options.handleSourceChange.apply($options, arguments);
    })
  }, [(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.getVideoSources, function (source) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("option", {
      key: source.sourceId,
      value: source.mid
    }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(source.name), 9, VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_4);
  }), 128))], 544), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelSelect"], $data.selectedSourceMid]])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    class: "bi ml-viewer-bi-x-lg",
    onClick: _cache[2] || (_cache[2] = function () {
      return $props.close && $props.close.apply($props, arguments);
    })
  })])], 2), VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_6]), $options.hasStats ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tbody", {
    key: 0,
    style: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeStyle"])([_ctx.isMobile ? 'overflow-x: auto;' : 'overflow-x: hidden;']),
    class: "text-left"
  }, [(_ctx$millicastView = _ctx.millicastView) !== null && _ctx$millicastView !== void 0 && (_ctx$millicastView$si = _ctx$millicastView.signaling) !== null && _ctx$millicastView$si !== void 0 && _ctx$millicastView$si.subscriberId ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_7, [VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_9, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.millicastView.signaling.subscriberId), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $data.stats.currentRoundTripTime ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_10, [VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_11, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_12, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.formatMilliseconds($data.stats.currentRoundTripTime)), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (_$options$video = $options.video) !== null && _$options$video !== void 0 && _$options$video.frameWidth && (_$options$video2 = $options.video) !== null && _$options$video2 !== void 0 && _$options$video2.frameHeight ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_13, [VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_14, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_15, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])("".concat($options.video.frameWidth, "x").concat($options.video.frameHeight)), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (_$options$video3 = $options.video) !== null && _$options$video3 !== void 0 && _$options$video3.framesPerSecond ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_16, [_hoisted_17, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", _hoisted_18, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.video.framesPerSecond), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (_$options$video4 = $options.video) !== null && _$options$video4 !== void 0 && _$options$video4.bitrate ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", _hoisted_19, [_hoisted_20, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", _hoisted_21, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.formatBitrate($options.video.bitrate)), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (_$options$audio = $options.audio) !== null && _$options$audio !== void 0 && _$options$audio.bitrate ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_22, [VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_23, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_24, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.formatBitrate($options.audio.bitrate)), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (_$options$video5 = $options.video) !== null && _$options$video5 !== void 0 && _$options$video5.totalBytesReceived ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", _hoisted_25, [_hoisted_26, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", _hoisted_27, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.formatTotalBytes($options.video.totalBytesReceived)), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), (_$options$audio2 = $options.audio) !== null && _$options$audio2 !== void 0 && _$options$audio2.totalBytesReceived ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", _hoisted_28, [_hoisted_29, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", _hoisted_30, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.formatTotalBytes($options.audio.totalBytesReceived)), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), ((_$options$video6 = $options.video) === null || _$options$video6 === void 0 ? void 0 : _$options$video6.totalPacketsLost) !== undefined ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", _hoisted_31, [VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_32, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_33, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.video.totalPacketsLost), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), ((_$options$audio3 = $options.audio) === null || _$options$audio3 === void 0 ? void 0 : _$options$audio3.totalPacketsLost) !== undefined ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_hoisted_34, [_hoisted_35, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", _hoisted_36, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.audio.totalPacketsLost), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), ((_$options$video7 = $options.video) === null || _$options$video7 === void 0 ? void 0 : _$options$video7.jitter) !== undefined ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", _hoisted_37, [_hoisted_38, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", _hoisted_39, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.formatMilliseconds($options.video.jitter)), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), ((_$options$audio4 = $options.audio) === null || _$options$audio4 === void 0 ? void 0 : _$options$audio4.jitter) !== undefined ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", _hoisted_40, [_hoisted_41, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", _hoisted_42, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.formatMilliseconds($options.audio.jitter)), 1)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $options.videoCaptureTimestamp ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", _hoisted_43, [_hoisted_44, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.videoCaptureTimestamp),
    class: "col-6"
  }, null, 8, _hoisted_45)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $options.videoCaptureDelta ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", _hoisted_46, [_hoisted_47, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.videoCaptureDelta),
    class: "col-6"
  }, null, 8, _hoisted_48)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $options.codecs ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", _hoisted_49, [_hoisted_50, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.codecs),
    class: "col-6 text-break"
  }, null, 8, _hoisted_51)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $options.timestamp ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", _hoisted_52, [_hoisted_53, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.timestamp),
    class: "col-6"
  }, null, 8, _hoisted_54)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $options.serverId ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", _hoisted_55, [_hoisted_56, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.serverId),
    class: "col-6"
  }, null, 8, _hoisted_57)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $options.clusterId ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", _hoisted_58, [_hoisted_59, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", {
    textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.clusterId),
    class: "col-6"
  }, null, 8, _hoisted_60)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.isMobile ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", _hoisted_61, _hoisted_63)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), _ctx.isMobile ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", _hoisted_64, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", _hoisted_65, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("a", {
    onClick: _cache[3] || (_cache[3] = function () {
      return $props.close && $props.close.apply($props, arguments);
    }),
    style: {
      "cursor": "pointer"
    }
  }, "Close stats")])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 4)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]);
}
// CONCATENATED MODULE: ./src/components/VideoPlayerStatsTable.vue?vue&type=template&id=6912e151&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-iso-string.js
var es_date_to_iso_string = __webpack_require__("accc");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerStatsTable.vue?vue&type=script&lang=js










var bytesUnitsStorage = ['B', 'KB', 'MB', 'GB', 'TB'];
var bitsUnitsStorage = ['bps', 'kbps', 'mbps', 'gbps'];
/* harmony default export */ var VideoPlayerStatsTablevue_type_script_lang_js = ({
  name: 'VideoPlayerStatsTable',
  props: {
    close: Function
  },
  data: function data() {
    return {
      stats: {},
      statsIndex: 0,
      selectedSourceMid: null,
      midToStatsIndexMap: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.millicastView.webRTCPeer.initStats();
    this.millicastView.webRTCPeer.on('stats', function (peerStats) {
      var _peerStats$video, _peerStats$video$inbo, _window$peer, _window$peer$getRecei, _window$peer$getRecei2, _window$peer$getRecei3;

      (_peerStats$video = peerStats.video) === null || _peerStats$video === void 0 ? void 0 : (_peerStats$video$inbo = _peerStats$video.inbounds) === null || _peerStats$video$inbo === void 0 ? void 0 : _peerStats$video$inbo.forEach(function (stat, index) {
        if (stat.mid) {
          _this.midToStatsIndexMap[stat.mid] = index;
        }
      });
      (_window$peer = window.peer) === null || _window$peer === void 0 ? void 0 : (_window$peer$getRecei = _window$peer.getReceivers) === null || _window$peer$getRecei === void 0 ? void 0 : (_window$peer$getRecei2 = (_window$peer$getRecei3 = _window$peer$getRecei.call(_window$peer)).forEach) === null || _window$peer$getRecei2 === void 0 ? void 0 : _window$peer$getRecei2.call(_window$peer$getRecei3, function (receiver) {
        _this.stats.videoSynchronizationSources = receiver.track.kind === 'video' ? receiver.getSynchronizationSources() : _this.stats.videoSynchronizationSources;
      });
      _this.stats = _extends(_extends({}, _this.stats), peerStats);
    });
  },
  beforeUnmount: function beforeUnmount() {
    this.millicastView.webRTCPeer.stopStats();
    this.millicastView.webRTCPeer.removeAllListeners('stats');
  },
  methods: {
    closeTable: function closeTable() {
      this.close();
    },
    formatTotalBytes: function formatTotalBytes(value) {
      return formatBytesRecursive(value);
    },
    formatBitrate: function formatBitrate(value) {
      return formatBitsRecursive(value);
    },
    formatMilliseconds: function formatMilliseconds(value) {
      return "".concat((value || 0) * 1000, " ms");
    },
    handleSourceChange: function handleSourceChange() {
      var _this$selectedSourceM;

      var mid = (_this$selectedSourceM = this.selectedSourceMid) !== null && _this$selectedSourceM !== void 0 ? _this$selectedSourceM : 0;
      this.statsIndex = this.midToStatsIndexMap[mid];
    }
  },
  computed: _extends(_extends(_extends(_extends(_extends({}, mapState('Controls', ['isMobile', 'isSplittedView'])), mapState('ViewConnection', {
    millicastView: function millicastView(state) {
      return state.millicastView;
    }
  })), mapState('Sources', ['sourceRemoteTracks'])), mapGetters('Sources', ['getVideoSources'])), {}, {
    hasStats: function hasStats() {
      return Object.keys(this.stats).length > 0;
    },
    audio: function audio() {
      var _this$stats$audio;

      var audio = (_this$stats$audio = this.stats.audio) === null || _this$stats$audio === void 0 ? void 0 : _this$stats$audio.inbounds;

      if ((audio === null || audio === void 0 ? void 0 : audio.length) > 0) {
        return audio[0];
      }

      return null;
    },
    video: function video() {
      var _this$stats$video;

      var video = (_this$stats$video = this.stats.video) === null || _this$stats$video === void 0 ? void 0 : _this$stats$video.inbounds;
      var videoLength = video === null || video === void 0 ? void 0 : video.length;

      if (videoLength) {
        return video[this.statsIndex > this.sourceRemoteTracks.length - 1 ? 0 : this.statsIndex];
      }

      return null;
    },
    codecs: function codecs() {
      var _this$video, _this$audio;

      var codecs = [];

      if ((_this$video = this.video) !== null && _this$video !== void 0 && _this$video.mimeType) {
        codecs.push(this.video.mimeType);
      }

      if ((_this$audio = this.audio) !== null && _this$audio !== void 0 && _this$audio.mimeType) {
        codecs.push(this.audio.mimeType);
      }

      return codecs.join();
    },
    timestamp: function timestamp() {
      var _this$video$timestamp, _this$video2, _this$audio2;

      var timestamp = (_this$video$timestamp = (_this$video2 = this.video) === null || _this$video2 === void 0 ? void 0 : _this$video2.timestamp) !== null && _this$video$timestamp !== void 0 ? _this$video$timestamp : (_this$audio2 = this.audio) === null || _this$audio2 === void 0 ? void 0 : _this$audio2.timestamp;
      return timestamp ? new Date(timestamp).toISOString() : null;
    },
    videoCaptureTimestamp: function videoCaptureTimestamp() {
      var _this$stats$videoSync, _this$stats$videoSync2, _this$stats$videoSync3, _this$stats$videoSync4;

      var timestamp;

      if ((_this$stats$videoSync = this.stats.videoSynchronizationSources) !== null && _this$stats$videoSync !== void 0 && (_this$stats$videoSync2 = _this$stats$videoSync[0]) !== null && _this$stats$videoSync2 !== void 0 && _this$stats$videoSync2.captureTimestamp && (_this$stats$videoSync3 = this.stats.videoSynchronizationSources) !== null && _this$stats$videoSync3 !== void 0 && (_this$stats$videoSync4 = _this$stats$videoSync3[0]) !== null && _this$stats$videoSync4 !== void 0 && _this$stats$videoSync4.timestamp) {
        var captureTime = formatNtpToEpoch(this.stats.videoSynchronizationSources[0].captureTimestamp);
        timestamp = new Date(captureTime).toISOString();
      }

      return timestamp;
    },
    videoCaptureDelta: function videoCaptureDelta() {
      var _this$stats$videoSync5, _this$stats$videoSync6, _this$stats$videoSync7, _this$stats$videoSync8;

      var delta;

      if ((_this$stats$videoSync5 = this.stats.videoSynchronizationSources) !== null && _this$stats$videoSync5 !== void 0 && (_this$stats$videoSync6 = _this$stats$videoSync5[0]) !== null && _this$stats$videoSync6 !== void 0 && _this$stats$videoSync6.captureTimestamp && (_this$stats$videoSync7 = this.stats.videoSynchronizationSources) !== null && _this$stats$videoSync7 !== void 0 && (_this$stats$videoSync8 = _this$stats$videoSync7[0]) !== null && _this$stats$videoSync8 !== void 0 && _this$stats$videoSync8.timestamp) {
        var _this$stats$videoSync9;

        var captureTime = formatNtpToEpoch(this.stats.videoSynchronizationSources[0].captureTimestamp);
        delta = ((_this$stats$videoSync9 = this.stats.videoSynchronizationSources) === null || _this$stats$videoSync9 === void 0 ? void 0 : _this$stats$videoSync9[0].timestamp) - captureTime;
        delta = "".concat(delta, " ms");
      }

      return delta;
    },
    serverId: function serverId() {
      var _this$millicastView, _this$millicastView$s;

      return (_this$millicastView = this.millicastView) === null || _this$millicastView === void 0 ? void 0 : (_this$millicastView$s = _this$millicastView.signaling) === null || _this$millicastView$s === void 0 ? void 0 : _this$millicastView$s.serverId;
    },
    clusterId: function clusterId() {
      var _this$millicastView2, _this$millicastView2$;

      return (_this$millicastView2 = this.millicastView) === null || _this$millicastView2 === void 0 ? void 0 : (_this$millicastView2$ = _this$millicastView2.signaling) === null || _this$millicastView2$ === void 0 ? void 0 : _this$millicastView2$.clusterId;
    },
    multiStatsAvailable: function multiStatsAvailable() {
      return this.sourceRemoteTracks.length && this.isSplittedView && Object.keys(this.midToStatsIndexMap).length;
    }
  })
});

var formatBytesRecursive = function formatBytesRecursive(value) {
  var unitsStoragePosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var newValue = value / 1024;

  if (newValue < 1 || newValue > 1 && unitsStoragePosition + 1 > bytesUnitsStorage.length) {
    return "".concat(Math.round(value * 100) / 100, " ").concat(bytesUnitsStorage[unitsStoragePosition]);
  } else if (newValue > 1) {
    return formatBytesRecursive(newValue, unitsStoragePosition + 1);
  }
};

var formatBitsRecursive = function formatBitsRecursive(value) {
  var unitsStoragePosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var newValue = value / 1000;

  if (newValue < 1 || newValue > 1 && unitsStoragePosition + 1 > bitsUnitsStorage.length) {
    return "".concat(Math.round(value * 100) / 100, " ").concat(bitsUnitsStorage[unitsStoragePosition]);
  } else if (newValue > 1) {
    return formatBitsRecursive(newValue, unitsStoragePosition + 1);
  }
};

var formatNtpToEpoch = function formatNtpToEpoch(value) {
  return value - 2208988800000;
};
// CONCATENATED MODULE: ./src/components/VideoPlayerStatsTable.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/VideoPlayerStatsTable.vue?vue&type=style&index=0&id=6912e151&lang=scss&scoped=true
var VideoPlayerStatsTablevue_type_style_index_0_id_6912e151_lang_scss_scoped_true = __webpack_require__("cd6d");

// CONCATENATED MODULE: ./src/components/VideoPlayerStatsTable.vue







const VideoPlayerStatsTable_exports_ = /*#__PURE__*/exportHelper_default()(VideoPlayerStatsTablevue_type_script_lang_js, [['render',VideoPlayerStatsTablevue_type_template_id_6912e151_scoped_true_render],['__scopeId',"data-v-6912e151"]])

/* harmony default export */ var VideoPlayerStatsTable = (VideoPlayerStatsTable_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsSettingsStats.vue?vue&type=script&lang=js



/* harmony default export */ var VideoPlayerControlsSettingsStatsvue_type_script_lang_js = ({
  name: 'VideoPlayerControlsSettingsStats',
  components: {
    VideoPlayerStatsTable: VideoPlayerStatsTable
  },
  data: function data() {
    return {
      stats: {},
      showStats: false
    };
  },
  computed: _extends({}, mapState('Controls', ['isLive'])),
  methods: _extends(_extends({}, mapMutations('Controls', ['setDropup'])), {}, {
    toggleStats: function toggleStats() {
      this.showStats = !this.showStats;
      this.setDropup();
    }
  })
});
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsStats.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsStats.vue?vue&type=style&index=0&id=00e40a59&lang=scss&scoped=true
var VideoPlayerControlsSettingsStatsvue_type_style_index_0_id_00e40a59_lang_scss_scoped_true = __webpack_require__("778f");

// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsStats.vue







const VideoPlayerControlsSettingsStats_exports_ = /*#__PURE__*/exportHelper_default()(VideoPlayerControlsSettingsStatsvue_type_script_lang_js, [['render',VideoPlayerControlsSettingsStatsvue_type_template_id_00e40a59_scoped_true_render],['__scopeId',"data-v-00e40a59"]])

/* harmony default export */ var VideoPlayerControlsSettingsStats = (VideoPlayerControlsSettingsStats_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsSettingsReportIssue.vue?vue&type=template&id=7153d1b1


var VideoPlayerControlsSettingsReportIssuevue_type_template_id_7153d1b1_hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
  class: "ml-viewer-bi-flag-fill align-middle control-icon"
}, null, -1);

function VideoPlayerControlsSettingsReportIssuevue_type_template_id_7153d1b1_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_VideoPlayerReportModal = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerReportModal");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    class: "dropdown-item",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.toggleReport && $options.toggleReport.apply($options, arguments);
    })
  }, [VideoPlayerControlsSettingsReportIssuevue_type_template_id_7153d1b1_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" Report Playback Issue "), $data.showReportModal ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Teleport"], {
    key: 0,
    to: "#vplayer"
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_VideoPlayerReportModal, {
    streamId: $props.streamId,
    close: $options.toggleReport
  }, null, 8, ["streamId", "close"])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 512)), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $data.showReportButton]]);
}
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsReportIssue.vue?vue&type=template&id=7153d1b1

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerReportModal.vue?vue&type=template&id=ce2867ac&scoped=true




var VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_withScopeId = function _withScopeId(n) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-ce2867ac"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n;
};

var VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_hoisted_1 = {
  class: "header"
};

var VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_hoisted_2 = /*#__PURE__*/VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    class: "ml-viewer-bi-flag-fill align-middle"
  }, null, -1);
});

var VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_hoisted_3 = ["textContent"];
var VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_hoisted_4 = {
  class: "form-group"
};

var VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_hoisted_5 = /*#__PURE__*/VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
    for: "name-input"
  }, "Name", -1);
});

var VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_hoisted_6 = {
  class: "form-group"
};

var VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_hoisted_7 = /*#__PURE__*/VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
    for: "email-input"
  }, "Email", -1);
});

var VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_hoisted_8 = {
  class: "form-group"
};

var VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_hoisted_9 = /*#__PURE__*/VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
    for: "description-input"
  }, "Description", -1);
});

function VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_base_button = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("base-button");

  var _component_base_modal = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("base-modal");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_base_modal, {
    toggle: $props.close
  }, {
    "modal-header": Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_hoisted_1, [VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h3", {
        textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($data.title)
      }, null, 8, VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_hoisted_3)])];
    }),
    "modal-body": Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("form", {
        id: "reportForm",
        onSubmit: _cache[3] || (_cache[3] = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withModifiers"])(function () {
          return $options.sendReport && $options.sendReport.apply($options, arguments);
        }, ["prevent"]))
      }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_hoisted_4, [VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
        type: "text",
        class: "form-control",
        id: "name-input",
        placeholder: "Name Lastname",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $data.report.name = $event;
        }),
        required: ""
      }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], $data.report.name]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_hoisted_6, [VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
        type: "email",
        class: "form-control",
        id: "email-input",
        placeholder: "name@example.com",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.report.email = $event;
        }),
        required: ""
      }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], $data.report.email]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_hoisted_8, [VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_hoisted_9, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("textarea", {
        class: "form-control",
        id: "description-input",
        rows: "4",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.report.description = $event;
        }),
        required: ""
      }, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], $data.report.description]])])], 32)];
    }),
    "modal-footer": Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
      return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_base_button, {
        btype: "btn-secondary",
        onClick: $props.close
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("Cancel")];
        }),
        _: 1
      }, 8, ["onClick"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_base_button, {
        type: "submit",
        btype: "btn-p",
        form: "reportForm",
        disabled: $data.isLoading
      }, {
        default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
          return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("Submit")];
        }),
        _: 1
      }, 8, ["disabled"])];
    }),
    _: 1
  }, 8, ["toggle"]);
}
// CONCATENATED MODULE: ./src/components/VideoPlayerReportModal.vue?vue&type=template&id=ce2867ac&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.json.stringify.js
var es_json_stringify = __webpack_require__("e9c4");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerReportModal.vue?vue&type=script&lang=js













/* harmony default export */ var VideoPlayerReportModalvue_type_script_lang_js = ({
  name: 'VideoPlayerReportModal',
  props: {
    close: Function,
    streamId: String
  },
  data: function data() {
    return {
      title: 'Report playback issue',
      report: {
        from: 'Viewer',
        name: '',
        email: '',
        description: '',
        streamId: '',
        accountId: '',
        serverId: '',
        clusterId: '',
        url: '',
        log: [],
        statsInitialized: false
      },
      localStats: [],
      isLoading: false
    };
  },
  methods: {
    sendReport: function sendReport() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var log, i, toast, _this$millicastView$s, _this$millicastView, _this$millicastView$s2, _this$millicastView$s3, _this$millicastView2, _this$millicastView2$, headers, _err$response, message;

        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.isLoading) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                log = millicast_umd["Logger"].getHistory();

                for (i = 0; i < _this.localStats.length; i++) {
                  log.push('[PeerConnectionStats] - ' + JSON.stringify(_this.localStats[i]));
                }

                _this.report.log = log;
                toast = useToast();
                _context.prev = 6;
                _this.isLoading = true;
                headers = {
                  'Content-Type': 'application/json'
                };
                _this.report.serverId = (_this$millicastView$s = (_this$millicastView = _this.millicastView) === null || _this$millicastView === void 0 ? void 0 : (_this$millicastView$s2 = _this$millicastView.signaling) === null || _this$millicastView$s2 === void 0 ? void 0 : _this$millicastView$s2.serverId) !== null && _this$millicastView$s !== void 0 ? _this$millicastView$s : 'NOT_CONNECTED';
                _this.report.clusterId = (_this$millicastView$s3 = (_this$millicastView2 = _this.millicastView) === null || _this$millicastView2 === void 0 ? void 0 : (_this$millicastView2$ = _this$millicastView2.signaling) === null || _this$millicastView2$ === void 0 ? void 0 : _this$millicastView2$.clusterId) !== null && _this$millicastView$s3 !== void 0 ? _this$millicastView$s3 : 'NOT_CONNECTED';
                _context.next = 13;
                return fetch(Object({"NODE_ENV":"production","BASE_URL":"/"}).VUE_APP_REPORT_URL + '/reports', {
                  method: 'POST',
                  headers: headers,
                  body: JSON.stringify(_this.report)
                });

              case 13:
                toast.success('Report sent successfully', {
                  timeout: 3000
                });
                _context.next = 21;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](6);
                message = "Error: couldn't send report";

                if ((_err$response = _context.t0.response) !== null && _err$response !== void 0 && _err$response.data) {
                  message += ', ' + _context.t0.response.data;
                }

                toast.error(message, {
                  timeout: 3000
                });

              case 21:
                _context.prev = 21;
                _this.isLoading = false;

                _this.close();

                return _context.finish(21);

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 16, 21, 25]]);
      }))();
    },
    statsHandler: function statsHandler(stats) {
      var MAX_STATS_LENGTH = 40;
      this.localStats.push(stats);

      if (this.localStats.length >= MAX_STATS_LENGTH) {
        this.localStats = this.localStats.slice(-MAX_STATS_LENGTH);
      }
    }
  },
  computed: _extends({}, mapState('ViewConnection', {
    millicastView: function millicastView(state) {
      return state.millicastView;
    }
  })),
  mounted: function mounted() {
    var _this$streamId, _this$streamId2, _this$millicastView3, _this$millicastView4, _this$millicastView4$;

    this.report.accountId = (_this$streamId = this.streamId) === null || _this$streamId === void 0 ? void 0 : _this$streamId.match(/^(.*)\/.*$/)[1];
    this.report.streamId = (_this$streamId2 = this.streamId) === null || _this$streamId2 === void 0 ? void 0 : _this$streamId2.match(/^.*\/(.*)$/)[1];
    this.report.url = window.location.href;

    if ((_this$millicastView3 = this.millicastView) !== null && _this$millicastView3 !== void 0 && _this$millicastView3.webRTCPeer && !((_this$millicastView4 = this.millicastView) !== null && _this$millicastView4 !== void 0 && (_this$millicastView4$ = _this$millicastView4.webRTCPeer) !== null && _this$millicastView4$ !== void 0 && _this$millicastView4$.peerConnectionStats)) {
      this.millicastView.webRTCPeer.initStats();
      this.statsInitialized = true;
    }

    this.millicastView.webRTCPeer.on('stats', this.statsHandler);
  },
  beforeUnmount: function beforeUnmount() {
    if (this.statsInitialized) {
      this.millicastView.webRTCPeer.stopStats();
    }

    this.millicastView.webRTCPeer.removeListener('stats', this.statsHandler);
  }
});
// CONCATENATED MODULE: ./src/components/VideoPlayerReportModal.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/VideoPlayerReportModal.vue?vue&type=style&index=0&id=ce2867ac&scoped=true&lang=css
var VideoPlayerReportModalvue_type_style_index_0_id_ce2867ac_scoped_true_lang_css = __webpack_require__("f9ee");

// CONCATENATED MODULE: ./src/components/VideoPlayerReportModal.vue







const VideoPlayerReportModal_exports_ = /*#__PURE__*/exportHelper_default()(VideoPlayerReportModalvue_type_script_lang_js, [['render',VideoPlayerReportModalvue_type_template_id_ce2867ac_scoped_true_render],['__scopeId',"data-v-ce2867ac"]])

/* harmony default export */ var VideoPlayerReportModal = (VideoPlayerReportModal_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsSettingsReportIssue.vue?vue&type=script&lang=js



/* harmony default export */ var VideoPlayerControlsSettingsReportIssuevue_type_script_lang_js = ({
  name: 'VideoPlayerControlsSettingsReportIssue',
  components: {
    VideoPlayerReportModal: VideoPlayerReportModal
  },
  props: {
    streamId: String
  },
  data: function data() {
    return {
      showReportModal: false,
      showReportButton: false
    };
  },
  methods: _extends(_extends({}, mapMutations('Controls', ['setDropup'])), {}, {
    toggleReport: function toggleReport() {
      this.showReportModal = !this.showReportModal;
      this.setDropup('');
    }
  }),
  mounted: function mounted() {
    this.showReportButton = Object({"NODE_ENV":"production","BASE_URL":"/"}).VUE_APP_REPORT_URL;
  }
});
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsReportIssue.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsReportIssue.vue





const VideoPlayerControlsSettingsReportIssue_exports_ = /*#__PURE__*/exportHelper_default()(VideoPlayerControlsSettingsReportIssuevue_type_script_lang_js, [['render',VideoPlayerControlsSettingsReportIssuevue_type_template_id_7153d1b1_render]])

/* harmony default export */ var VideoPlayerControlsSettingsReportIssue = (VideoPlayerControlsSettingsReportIssue_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsSettingsDropdown.vue?vue&type=template&id=cf737074&scoped=true


var VideoPlayerControlsSettingsDropdownvue_type_template_id_cf737074_scoped_true_withScopeId = function _withScopeId(n) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-cf737074"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n;
};

var VideoPlayerControlsSettingsDropdownvue_type_template_id_cf737074_scoped_true_hoisted_1 = /*#__PURE__*/VideoPlayerControlsSettingsDropdownvue_type_template_id_cf737074_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    class: "bi ml-viewer-bi-chevron-left p-0"
  }, null, -1);
});

var VideoPlayerControlsSettingsDropdownvue_type_template_id_cf737074_scoped_true_hoisted_2 = ["onClick"];
var VideoPlayerControlsSettingsDropdownvue_type_template_id_cf737074_scoped_true_hoisted_3 = {
  class: "form-check p-0"
};
var VideoPlayerControlsSettingsDropdownvue_type_template_id_cf737074_scoped_true_hoisted_4 = {
  class: "row"
};
var VideoPlayerControlsSettingsDropdownvue_type_template_id_cf737074_scoped_true_hoisted_5 = {
  class: "col-1 mr-1"
};
var VideoPlayerControlsSettingsDropdownvue_type_template_id_cf737074_scoped_true_hoisted_6 = {
  class: "bi ml-viewer-bi-check p-0"
};
var VideoPlayerControlsSettingsDropdownvue_type_template_id_cf737074_scoped_true_hoisted_7 = ["innerHTML"];
var VideoPlayerControlsSettingsDropdownvue_type_template_id_cf737074_scoped_true_hoisted_8 = {
  key: 1
};
function VideoPlayerControlsSettingsDropdownvue_type_template_id_cf737074_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h6", {
    class: "dropdown-header back-header",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.setDropup('settings');
    })
  }, [VideoPlayerControlsSettingsDropdownvue_type_template_id_cf737074_scoped_true_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.title), 1)]), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($props.items, function (item) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
      key: item.selectId,
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([{
        disabled: item.disabled
      }, "dropdown-item"]),
      onClick: function onClick($event) {
        return $options.handleSelect(item);
      }
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", VideoPlayerControlsSettingsDropdownvue_type_template_id_cf737074_scoped_true_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", VideoPlayerControlsSettingsDropdownvue_type_template_id_cf737074_scoped_true_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", VideoPlayerControlsSettingsDropdownvue_type_template_id_cf737074_scoped_true_hoisted_5, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", VideoPlayerControlsSettingsDropdownvue_type_template_id_cf737074_scoped_true_hoisted_6, null, 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], $props.compare($props.selected, item)]])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
      class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["item-name", [(item === null || item === void 0 ? void 0 : item.sourceId) === null ? 'main' : '']])
    }, [$props.unsupportedFlagEmoji(item === null || item === void 0 ? void 0 : item.name) ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
      key: 0,
      innerHTML: $props.sourceFlagEmojiToPng(item === null || item === void 0 ? void 0 : item.name)
    }, null, 8, VideoPlayerControlsSettingsDropdownvue_type_template_id_cf737074_scoped_true_hoisted_7)) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", VideoPlayerControlsSettingsDropdownvue_type_template_id_cf737074_scoped_true_hoisted_8, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(item === null || item === void 0 ? void 0 : item.name), 1))], 2)])])], 10, VideoPlayerControlsSettingsDropdownvue_type_template_id_cf737074_scoped_true_hoisted_2);
  }), 128))], 64);
}
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsDropdown.vue?vue&type=template&id=cf737074&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsSettingsDropdown.vue?vue&type=script&lang=js


/* harmony default export */ var VideoPlayerControlsSettingsDropdownvue_type_script_lang_js = ({
  name: 'VideoPlayerControlsSettingsDropdown',
  components: {},
  props: {
    title: String,
    handleClick: Function,
    selected: Object,
    items: Array,
    compare: Function,
    unsupportedFlagEmoji: Function,
    sourceFlagEmojiToPng: Function
  },
  computed: {},
  methods: _extends(_extends({}, mapMutations('Controls', ['setDropup'])), {}, {
    handleSelect: function handleSelect(media) {
      this.handleClick(media);
      this.setDropup('');
    }
  })
});
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsDropdown.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsDropdown.vue?vue&type=style&index=0&id=cf737074&lang=scss&scoped=true
var VideoPlayerControlsSettingsDropdownvue_type_style_index_0_id_cf737074_lang_scss_scoped_true = __webpack_require__("90d2");

// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsDropdown.vue







const VideoPlayerControlsSettingsDropdown_exports_ = /*#__PURE__*/exportHelper_default()(VideoPlayerControlsSettingsDropdownvue_type_script_lang_js, [['render',VideoPlayerControlsSettingsDropdownvue_type_template_id_cf737074_scoped_true_render],['__scopeId',"data-v-cf737074"]])

/* harmony default export */ var VideoPlayerControlsSettingsDropdown = (VideoPlayerControlsSettingsDropdown_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsSettingsSplitView.vue?vue&type=template&id=f3b0fd42


var VideoPlayerControlsSettingsSplitViewvue_type_template_id_f3b0fd42_hoisted_1 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
  class: "bi-layout-sidebar-inset-reverse align-middle control-icon"
}, null, -1);

function VideoPlayerControlsSettingsSplitViewvue_type_template_id_f3b0fd42_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("a", {
    class: "dropdown-item",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.setIsSplittedView(!_ctx.isSplittedView);
    })
  }, [VideoPlayerControlsSettingsSplitViewvue_type_template_id_f3b0fd42_hoisted_1, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.isSplittedView ? "Hide" : "Show") + " Multi View ", 1)]);
}
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsSplitView.vue?vue&type=template&id=f3b0fd42

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsSettingsSplitView.vue?vue&type=script&lang=js


/* harmony default export */ var VideoPlayerControlsSettingsSplitViewvue_type_script_lang_js = ({
  name: "VideoPlayerControlsSettingsSplitView",
  computed: _extends({}, mapState("Controls", ["isSplittedView"])),
  methods: _extends({}, mapMutations("Controls", ["setIsSplittedView"]))
});
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsSplitView.vue?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettingsSplitView.vue





const VideoPlayerControlsSettingsSplitView_exports_ = /*#__PURE__*/exportHelper_default()(VideoPlayerControlsSettingsSplitViewvue_type_script_lang_js, [['render',VideoPlayerControlsSettingsSplitViewvue_type_template_id_f3b0fd42_render]])

/* harmony default export */ var VideoPlayerControlsSettingsSplitView = (VideoPlayerControlsSettingsSplitView_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsSettings.vue?vue&type=script&lang=js

























/* harmony default export */ var VideoPlayerControlsSettingsvue_type_script_lang_js = ({
  name: 'VideoPlayerControlsSettings',
  components: {
    VideoPlayerControlsSettingsVideoTrack: VideoPlayerControlsSettingsVideoTrack,
    VideoPlayerControlsSettingsAudioTrack: VideoPlayerControlsSettingsAudioTrack,
    VideoPlayerControlsSettingsQuality: VideoPlayerControlsSettingsQuality,
    VideoPlayerControlsSettingsStats: VideoPlayerControlsSettingsStats,
    VideoPlayerControlsSettingsReportIssue: VideoPlayerControlsSettingsReportIssue,
    VideoPlayerControlsSettingsDropdown: VideoPlayerControlsSettingsDropdown,
    VideoPlayerControlsSettingsSplitView: VideoPlayerControlsSettingsSplitView
  },
  props: {
    streamId: String
  },
  data: function data() {
    return {
      viewerVersion: '',
      showDropup: false,
      settingsWidth: '0px',
      selected: {},
      items: [],
      dropupTitle: '',
      handleClick: function handleClick() {},
      compare: function compare() {}
    };
  },
  computed: _extends(_extends(_extends(_extends(_extends({}, mapGetters('Layers', ['getActiveMedias'])), mapGetters('Sources', ['getVideoSources', 'getAudioSources', 'getVideoHasMain', 'getAudioHasMain'])), mapState('Layers', {
    selectedQuality: function selectedQuality(state) {
      return state.selectedQuality;
    }
  })), mapState('Sources', {
    selectedVideoSource: function selectedVideoSource(state) {
      return state.selectedVideoSource;
    },
    selectedAudioSource: function selectedAudioSource(state) {
      return state.selectedAudioSource;
    }
  })), mapState('Controls', {
    isMobile: function isMobile(state) {
      return state.isMobile;
    },
    dropup: function dropup(state) {
      return state.dropup;
    },
    trackWarning: function trackWarning(state) {
      return state.trackWarning;
    }
  })),
  methods: _extends(_extends({}, mapMutations('Controls', ['setDropup', 'toggleFullscreen'])), {}, {
    compareItems: function compareItems(entry, current) {
      return (entry === null || entry === void 0 ? void 0 : entry.name) === (current === null || current === void 0 ? void 0 : current.name);
    },
    compareSources: function compareSources(entry, current) {
      return (entry === null || entry === void 0 ? void 0 : entry.sourceId) === (current === null || current === void 0 ? void 0 : current.sourceId);
    },
    setDropupSettings: function setDropupSettings(selected, items, title, click, compare) {
      this.selected = selected;
      this.items = items;
      this.dropupTitle = title;
      this.handleClick = click;
      this.compare = compare;
    },
    unsupportedFlagEmoji: function unsupportedFlagEmoji(sourceId) {
      var nAgt = navigator.userAgent;
      var isChrome = nAgt.indexOf('Chrome') !== -1;
      var isFlagEmoji = sourceId.match(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g) !== null;
      var isWindows; // navigator.userAgentData is not supported for Firefox/Safari

      if (isChrome) {
        isWindows = navigator.userAgentData.platform == 'Windows';
        return isFlagEmoji && isWindows;
      } else {
        return false;
      }
    },
    sourceFlagEmojiToPng: function sourceFlagEmojiToPng(sourceId) {
      var selectedSourceFlagEmojis = sourceId.match(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g); // replace emojis  for img

      selectedSourceFlagEmojis.forEach(function (emoji) {
        // get emoji flag code, example france=fr
        var flagCode = Array.from(emoji, function (codeUnit) {
          return codeUnit.codePointAt();
        }).map(function (char) {
          return String.fromCharCode(char - 127397).toLowerCase();
        }).join('');
        sourceId = sourceId.replace(emoji, " <img src='https://flagcdn.com/20x15/".concat(flagCode, ".png' alt=\"FlagEmoji\"}>"));
      });
      return sourceId;
    }
  }),
  mounted: function mounted() {
    this.viewerVersion = Object({"NODE_ENV":"production","BASE_URL":"/"}).PACKAGE_VERSION ? 'v' + Object({"NODE_ENV":"production","BASE_URL":"/"}).PACKAGE_VERSION : '';
  },
  watch: {
    dropup: function dropup(_dropup) {
      if (_dropup === 'videoTracks' || _dropup === 'audioTracks' || _dropup === 'qualities') {
        this.settingsWidth = this.$refs.settings.clientWidth + 'px';

        switch (_dropup) {
          case 'videoTracks':
            {
              var videoTrackChange = /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(source) {
                  var toast;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return selectSource({
                            kind: 'video',
                            source: source
                          });

                        case 3:
                          _context.next = 9;
                          break;

                        case 5:
                          _context.prev = 5;
                          _context.t0 = _context["catch"](0);
                          toast = useToast();
                          toast.error('There was an error selecting the desired source, try again', {
                            timeout: 5000
                          });

                        case 9:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[0, 5]]);
                }));

                return function videoTrackChange(_x) {
                  return _ref.apply(this, arguments);
                };
              }();

              this.setDropupSettings(this.selectedVideoSource, this.getVideoSources, 'Video Source', videoTrackChange, this.compareSources);
              break;
            }

          case 'audioTracks':
            {
              var audioTrackChange = /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(source) {
                  var toast;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.prev = 0;
                          _context2.next = 3;
                          return selectSource({
                            kind: 'audio',
                            source: source
                          });

                        case 3:
                          _context2.next = 9;
                          break;

                        case 5:
                          _context2.prev = 5;
                          _context2.t0 = _context2["catch"](0);
                          toast = useToast();
                          toast.error('There was an error selecting the desired source, try again', {
                            timeout: 5000
                          });

                        case 9:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, null, [[0, 5]]);
                }));

                return function audioTrackChange(_x2) {
                  return _ref2.apply(this, arguments);
                };
              }();

              this.setDropupSettings(this.selectedAudioSource, this.getAudioSources, 'Audio Source', audioTrackChange, this.compareSources);
              break;
            }

          case 'qualities':
            {
              var qualityChange = function qualityChange(media) {
                sdkManager_selectQuality(media);
              };

              this.setDropupSettings(this.selectedQuality, this.getActiveMedias, 'Video Quality', qualityChange, this.compareItems);
              break;
            }
        }

        this.showDropup = true;
      } else {
        this.showDropup = false;
      }
    },
    getActiveMedias: function getActiveMedias() {
      if (this.dropup === 'qualities') {
        this.items = this.getActiveMedias;
      }
    },
    getVideoSources: function getVideoSources() {
      if (this.dropup === 'videoTracks') {
        this.items = this.getVideoSources;
      }
    },
    getAudioSources: function getAudioSources() {
      if (this.dropup === 'audioTracks') {
        this.items = this.getAudioSources;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettings.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettings.vue?vue&type=style&index=0&id=1a8f28b5&lang=scss&scoped=true
var VideoPlayerControlsSettingsvue_type_style_index_0_id_1a8f28b5_lang_scss_scoped_true = __webpack_require__("7402");

// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsSettings.vue







const VideoPlayerControlsSettings_exports_ = /*#__PURE__*/exportHelper_default()(VideoPlayerControlsSettingsvue_type_script_lang_js, [['render',VideoPlayerControlsSettingsvue_type_template_id_1a8f28b5_scoped_true_render],['__scopeId',"data-v-1a8f28b5"]])

/* harmony default export */ var VideoPlayerControlsSettings = (VideoPlayerControlsSettings_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsUserCount.vue?vue&type=template&id=48f1b614&scoped=true


var VideoPlayerControlsUserCountvue_type_template_id_48f1b614_scoped_true_withScopeId = function _withScopeId(n) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-48f1b614"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n;
};

var VideoPlayerControlsUserCountvue_type_template_id_48f1b614_scoped_true_hoisted_1 = {
  key: 0,
  class: "align-middle"
};
var VideoPlayerControlsUserCountvue_type_template_id_48f1b614_scoped_true_hoisted_2 = {
  class: "badge",
  style: {
    "border": "0px"
  }
};

var VideoPlayerControlsUserCountvue_type_template_id_48f1b614_scoped_true_hoisted_3 = /*#__PURE__*/VideoPlayerControlsUserCountvue_type_template_id_48f1b614_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    class: "bi ml-viewer-bi-person-fill"
  }, null, -1);
});

function VideoPlayerControlsUserCountvue_type_template_id_48f1b614_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.count ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("h4", VideoPlayerControlsUserCountvue_type_template_id_48f1b614_scoped_true_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", VideoPlayerControlsUserCountvue_type_template_id_48f1b614_scoped_true_hoisted_2, [VideoPlayerControlsUserCountvue_type_template_id_48f1b614_scoped_true_hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])(" " + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($options.count), 1)])])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true);
}
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsUserCount.vue?vue&type=template&id=48f1b614&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsUserCount.vue?vue&type=script&lang=js


/* harmony default export */ var VideoPlayerControlsUserCountvue_type_script_lang_js = ({
  name: 'VideoPlayerControlsUserCount',
  computed: _extends(_extends({}, mapState('Controls', ['viewerCount'])), {}, {
    count: function count() {
      var _this$viewerCount;

      return (_this$viewerCount = this.viewerCount) === null || _this$viewerCount === void 0 ? void 0 : _this$viewerCount.toLocaleString('en');
    }
  })
});
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsUserCount.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsUserCount.vue?vue&type=style&index=0&id=48f1b614&lang=scss&scoped=true
var VideoPlayerControlsUserCountvue_type_style_index_0_id_48f1b614_lang_scss_scoped_true = __webpack_require__("c03e");

// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsUserCount.vue







const VideoPlayerControlsUserCount_exports_ = /*#__PURE__*/exportHelper_default()(VideoPlayerControlsUserCountvue_type_script_lang_js, [['render',VideoPlayerControlsUserCountvue_type_template_id_48f1b614_scoped_true_render],['__scopeId',"data-v-48f1b614"]])

/* harmony default export */ var VideoPlayerControlsUserCount = (VideoPlayerControlsUserCount_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsVolume.vue?vue&type=template&id=0cf82b5a&scoped=true


var VideoPlayerControlsVolumevue_type_template_id_0cf82b5a_scoped_true_withScopeId = function _withScopeId(n) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-0cf82b5a"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n;
};

var VideoPlayerControlsVolumevue_type_template_id_0cf82b5a_scoped_true_hoisted_1 = {
  class: "d-inline"
};
function VideoPlayerControlsVolumevue_type_template_id_0cf82b5a_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", VideoPlayerControlsVolumevue_type_template_id_0cf82b5a_scoped_true_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["h3 align-middle control-icon", $options.volumeIcon]),
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.toggleMuted && $options.toggleMuted.apply($options, arguments);
    }),
    onMousemove: _cache[1] || (_cache[1] = function () {
      return $options.toggleVolumeSlider && $options.toggleVolumeSlider.apply($options, arguments);
    })
  }, null, 34), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    type: "range",
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["align-middle mr-2 slider", {
      show: $data.showVolume,
      volumeMobile: true
    }]),
    id: "volumeSlider",
    min: "0",
    max: "1",
    step: ".01",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.volume = $event;
    }),
    onMousemove: _cache[3] || (_cache[3] = function () {
      return $options.toggleVolumeSlider && $options.toggleVolumeSlider.apply($options, arguments);
    })
  }, null, 34), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], $data.volume]])]);
}
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsVolume.vue?vue&type=template&id=0cf82b5a&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsVolume.vue?vue&type=script&lang=js


/* harmony default export */ var VideoPlayerControlsVolumevue_type_script_lang_js = ({
  name: 'VideoPlayerControlsVolume',
  data: function data() {
    return {
      volume: 1,
      showVolume: false
    };
  },
  watch: {
    volume: function volume(newVolume) {
      if (this.volume === 0 && !this.muted) {
        this.toggleMuted();
      } else if (this.muted) {
        this.toggleMuted();
      }

      this.setVideoVolume(newVolume);
    }
  },
  computed: _extends(_extends({}, mapState('Controls', {
    muted: function muted(state) {
      return state.muted;
    }
  })), {}, {
    volumeIcon: function volumeIcon() {
      if (this.muted || this.volume === 0) {
        return 'ml-viewer-bi-volume-mute-fill';
      } else if (this.volume < 0.1) {
        return 'ml-viewer-bi-volume-off-fill';
      } else if (this.volume < 0.5) {
        return 'ml-viewer-bi-volume-down-fill';
      } else {
        return 'ml-viewer-bi-volume-up-fill';
      }
    }
  }),
  methods: _extends(_extends({}, mapMutations('Controls', ['setVideoMuted', 'setVideoVolume'])), {}, {
    toggleVolumeSlider: function toggleVolumeSlider() {
      var _this = this;

      if (this.showVolumeTimeout) {
        clearTimeout(this.showVolumeTimeout);
      }

      this.showVolume = true;
      this.showVolumeTimeout = setTimeout(function () {
        _this.showVolume = false;
      }, 4000);
    },
    toggleMuted: function toggleMuted() {
      this.setVideoMuted(!this.muted);
    }
  })
});
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsVolume.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsVolume.vue?vue&type=style&index=0&id=0cf82b5a&scoped=true&lang=scss
var VideoPlayerControlsVolumevue_type_style_index_0_id_0cf82b5a_scoped_true_lang_scss = __webpack_require__("c7df");

// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsVolume.vue







const VideoPlayerControlsVolume_exports_ = /*#__PURE__*/exportHelper_default()(VideoPlayerControlsVolumevue_type_script_lang_js, [['render',VideoPlayerControlsVolumevue_type_template_id_0cf82b5a_scoped_true_render],['__scopeId',"data-v-0cf82b5a"]])

/* harmony default export */ var VideoPlayerControlsVolume = (VideoPlayerControlsVolume_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsContainer.vue?vue&type=template&id=6a98c20a&scoped=true


var VideoPlayerControlsContainervue_type_template_id_6a98c20a_scoped_true_withScopeId = function _withScopeId(n) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-6a98c20a"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n;
};

var VideoPlayerControlsContainervue_type_template_id_6a98c20a_scoped_true_hoisted_1 = {
  class: "row"
};
var VideoPlayerControlsContainervue_type_template_id_6a98c20a_scoped_true_hoisted_2 = {
  key: 0
};
var VideoPlayerControlsContainervue_type_template_id_6a98c20a_scoped_true_hoisted_3 = ["textContent"];
var VideoPlayerControlsContainervue_type_template_id_6a98c20a_scoped_true_hoisted_4 = {
  key: 0,
  class: "col-6 text-right"
};
var VideoPlayerControlsContainervue_type_template_id_6a98c20a_scoped_true_hoisted_5 = {
  key: 1,
  class: "col-5 pl-0 pr-1 text-right"
};
var VideoPlayerControlsContainervue_type_template_id_6a98c20a_scoped_true_hoisted_6 = {
  key: 0,
  class: "dropup"
};

var VideoPlayerControlsContainervue_type_template_id_6a98c20a_scoped_true_hoisted_7 = /*#__PURE__*/VideoPlayerControlsContainervue_type_template_id_6a98c20a_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: "dropdown-header d-flex m-0 col-12"
  }, [/*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h6", {
    class: "p-0 m-0"
  }, "Options")], -1);
});

function VideoPlayerControlsContainervue_type_template_id_6a98c20a_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_VideoPlayerControlsPlay = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerControlsPlay");

  var _component_VideoPlayerControlsVolume = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerControlsVolume");

  var _component_VideoPlayerControlsSettings = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerControlsSettings");

  var _component_VideoPlayerControlsPip = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerControlsPip");

  var _component_VideoPlayerControlsFullscreen = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerControlsFullscreen");

  var _component_VideoPlayerControlsSettingsStats = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("VideoPlayerControlsSettingsStats");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", VideoPlayerControlsContainervue_type_template_id_6a98c20a_scoped_true_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])([_ctx.isMobile ? 'col-7 text-left pr-0' : 'col-6 text-left'])
  }, [!$props.isConnected ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", VideoPlayerControlsContainervue_type_template_id_6a98c20a_scoped_true_hoisted_2, [$props.showButton('play') ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_VideoPlayerControlsPlay, {
    key: 0
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $props.showButton('volume') ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_VideoPlayerControlsVolume, {
    key: 1
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), !_ctx.isMobile ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
    key: 2,
    class: "h5 align-middle p-2",
    textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.currentTime)
  }, null, 8, VideoPlayerControlsContainervue_type_template_id_6a98c20a_scoped_true_hoisted_3)) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 2), !_ctx.isMobile ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", VideoPlayerControlsContainervue_type_template_id_6a98c20a_scoped_true_hoisted_4, [$props.showButton('settings') ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_VideoPlayerControlsSettings, {
    key: 0,
    streamId: $props.streamId
  }, null, 8, ["streamId"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $options.pipEnabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_VideoPlayerControlsPip, {
    key: 1
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $data.fullscreenEnabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_VideoPlayerControlsFullscreen, {
    key: 2,
    click: _ctx.toggleFullscreen
  }, null, 8, ["click"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)])) : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", VideoPlayerControlsContainervue_type_template_id_6a98c20a_scoped_true_hoisted_5, [_ctx.isLive && $options.pipEnabled && $props.showButton('pip') && $options.isVideoTag || $data.fullscreenEnabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", VideoPlayerControlsContainervue_type_template_id_6a98c20a_scoped_true_hoisted_6, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", {
    class: "h3 align-middle control-icon bi ml-viewer-bi-three-dots-vertical",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.setDropup('mobile');
    })
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["dropdown-menu dropdown-menu-right", {
      show: _ctx.dropup === 'mobile'
    }]),
    style: {
      "margin-bottom": "0.9rem"
    }
  }, [VideoPlayerControlsContainervue_type_template_id_6a98c20a_scoped_true_hoisted_7, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_VideoPlayerControlsSettingsStats), $options.pipEnabled && !_ctx.fullscreen ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_VideoPlayerControlsPip, {
    key: 0
  })) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true), $data.fullscreenEnabled ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_VideoPlayerControlsFullscreen, {
    key: 1,
    click: _ctx.toggleFullscreen
  }, null, 8, ["click"])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)], 2)])) : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)]))]);
}
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsContainer.vue?vue&type=template&id=6a98c20a&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerControls/VideoPlayerControlsContainer.vue?vue&type=script&lang=js







/* harmony default export */ var VideoPlayerControlsContainervue_type_script_lang_js = ({
  name: 'VideoPlayer',
  components: {
    VideoPlayerControlsFullscreen: VideoPlayerControlsFullscreen,
    VideoPlayerControlsPip: VideoPlayerControlsPip,
    VideoPlayerControlsPlay: VideoPlayerControlsPlay,
    VideoPlayerControlsSettings: VideoPlayerControlsSettings,
    VideoPlayerControlsVolume: VideoPlayerControlsVolume,
    VideoPlayerControlsSettingsStats: VideoPlayerControlsSettingsStats
  },
  props: {
    showButton: Function,
    streamId: String,
    isConnected: Boolean,
    currentTime: String
  },
  data: function data() {
    return {
      dropupShow: false,
      fullscreenEnabled: this.showFullscreen()
    };
  },
  computed: _extends(_extends({}, mapState('Controls', {
    video: function video(state) {
      return state.video;
    },
    dropup: function dropup(state) {
      return state.dropup;
    },
    isMobile: function isMobile(state) {
      return state.isMobile;
    },
    isLive: function isLive(state) {
      return state.isLive;
    },
    fullscreen: function fullscreen(state) {
      return state.fullscreen;
    }
  })), {}, {
    isVideoTag: function isVideoTag() {
      var _this$video;

      return ((_this$video = this.video) === null || _this$video === void 0 ? void 0 : _this$video.nodeName) === 'VIDEO';
    },
    pipEnabled: function pipEnabled() {
      return this.showButton('pip') && document.pictureInPictureEnabled && this.isLive && this.isVideoTag;
    }
  }),
  methods: _extends(_extends({}, mapMutations('Controls', ['setDropup', 'toggleFullscreen'])), {}, {
    showFullscreen: function showFullscreen() {
      var fullscreenEnabled = this.showButton('fullscreen');

      if (fullscreenEnabled && !canEnableFullscreen()) {
        console.warn('Fullscreen disabled due to incompatibility with the browser.');
        return false;
      }

      return fullscreenEnabled;
    }
  }),
  beforeMount: function beforeMount() {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return setCast();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

var canEnableFullscreen = function canEnableFullscreen() {
  return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
};
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsContainer.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsContainer.vue?vue&type=style&index=0&id=6a98c20a&lang=scss&scoped=true
var VideoPlayerControlsContainervue_type_style_index_0_id_6a98c20a_lang_scss_scoped_true = __webpack_require__("fbe0");

// CONCATENATED MODULE: ./src/components/VideoPlayerControls/VideoPlayerControlsContainer.vue







const VideoPlayerControlsContainer_exports_ = /*#__PURE__*/exportHelper_default()(VideoPlayerControlsContainervue_type_script_lang_js, [['render',VideoPlayerControlsContainervue_type_template_id_6a98c20a_scoped_true_render],['__scopeId',"data-v-6a98c20a"]])

/* harmony default export */ var VideoPlayerControlsContainer = (VideoPlayerControlsContainer_exports_);
// CONCATENATED MODULE: ./src/components/VideoPlayerControls/index.js









// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/VideoPlayerContainer.vue?vue&type=script&lang=js







/* harmony default export */ var VideoPlayerContainervue_type_script_lang_js = ({
  name: 'VideoPlayerContainer',
  components: {
    VideoPlayerMedia: VideoPlayerMedia,
    VideoPlayerControlsBadge: VideoPlayerControlsBadge,
    VideoPlayerControlsUserCount: VideoPlayerControlsUserCount,
    VideoPlayerControlsContainer: VideoPlayerControlsContainer,
    VideoPlayerSideVideoSources: VideoPlayerSideVideoSources
  },
  data: function data() {
    return {
      show: true,
      timeInterval: 0,
      secondsElapsed: 0,
      cast: {
        isConnected: false
      },
      windowWidth: false,
      controlsTimeout: 0,
      mobileFullscreen: false
    };
  },
  mounted: function mounted() {
    var _screen$orientation,
        _this = this;

    this.windowWidth = window.innerWidth;
    (_screen$orientation = screen.orientation) === null || _screen$orientation === void 0 ? void 0 : _screen$orientation.addEventListener('change', this.handleOrientationChange);
    this.$nextTick(function () {
      window.addEventListener('resize', _this.onResize);
    });
    this.controlsTimeout = setTimeout(function () {
      _this.show = false;
    }, 4000);
    this.timeInterval = setInterval(function () {
      _this.secondsElapsed = _this.video.currentTime;
    }, 500);
    this.setCastOptions({
      streamId: this.queryParams.streamId,
      token: this.queryParams.token,
      loading: this.isLoading
    });
  },
  beforeUnmount: function beforeUnmount() {
    clearInterval(this.timeInterval);
    window.removeEventListener('resize', this.onResize);
  },
  computed: _extends(_extends(_extends(_extends({}, mapState('Params', {
    queryParams: function queryParams(state) {
      return state.queryParams;
    }
  })), mapState('Sources', {
    videoSources: function videoSources(state) {
      return state.videoSources;
    },
    audioSources: function audioSources(state) {
      return state.audioSources;
    },
    selectedVideoSource: function selectedVideoSource(state) {
      return state.selectedVideoSource;
    },
    selectedAudioSource: function selectedAudioSource(state) {
      return state.selectedAudioSource;
    },
    sourceRemoteTracks: function sourceRemoteTracks(state) {
      return state.sourceRemoteTracks;
    }
  })), mapState('Controls', {
    video: function video(state) {
      return state.video;
    },
    playing: function playing(state) {
      return state.playing;
    },
    player: function player(state) {
      return state.player;
    },
    fullscreen: function fullscreen(state) {
      return state.fullscreen;
    },
    dropup: function dropup(state) {
      return state.dropup;
    },
    isLoading: function isLoading(state) {
      return state.isLoading;
    },
    volume: function volume(state) {
      return state.volume;
    },
    playerMuted: function playerMuted(state) {
      return state.muted;
    },
    castIsConnected: function castIsConnected(state) {
      return state.castIsConnected;
    },
    castDevice: function castDevice(state) {
      return state.castDevice;
    },
    srcObject: function srcObject(state) {
      return state.srcObject;
    },
    autoPlayMuted: function autoPlayMuted(state) {
      return state.autoPlayMuted;
    },
    isLive: function isLive(state) {
      return state.isLive;
    },
    isSplittedView: function isSplittedView(state) {
      return state.isSplittedView;
    }
  })), {}, {
    currentTime: function currentTime() {
      var seconds = this.secondsElapsed;
      var minutes = Math.floor(seconds / 60);
      minutes = minutes >= 10 ? minutes : '0' + minutes;
      seconds = Math.floor(seconds % 60);
      seconds = seconds >= 10 ? seconds : '0' + seconds;
      return minutes + ':' + seconds;
    }
  }),
  methods: _extends(_extends(_extends(_extends({}, mapMutations('Layers', ['deleteLayers'])), mapMutations('Sources', ['deleteSource'])), mapMutations('Controls', ['setVideo', 'setMobile', 'setIsLive', 'setIsLoading', 'setTrackWarning', 'setDropup', 'setVideoVolume', 'setVideoMuted', 'setPlaying', 'setCastOptions', 'setAutoPlayMuted', "toggleFullscreen"])), {}, {
    onResize: function onResize() {
      this.windowWidth = window.innerWidth;
    },
    showControls: function showControls() {
      if (this.controlsTimeout) {
        clearTimeout(this.controlsTimeout);
      }

      this.show = true;
      this.hideControls();
    },
    hideControls: function hideControls() {
      var _this2 = this;

      if (!this.playing || this.dropup !== '') return;
      this.controlsTimeout = setTimeout(function () {
        _this2.show = false;
      }, 4000);
    },
    showButton: function showButton(button) {
      return !this.queryParams.hideButtons.includes(button);
    },
    handleOrientationChange: function handleOrientationChange() {
      var orientation = screen.orientation.type;

      if (orientation === 'portrait-primary' && getFullscreenElement() && !this.mobileFullscreen) {
        this.leaveFullScreen(); // portrait mode
      } else if (orientation === 'landscape-primary') {
        this.goFullScreen();
      }
    },
    goFullScreen: function goFullScreen() {
      var _ref, _ref2, _player$requestFullsc, _player$requestFullsc2, _player$webkitRequest, _player$mozRequestFul, _player$msRequestFull;

      var player = this.$refs.player;
      (_ref = (_ref2 = (_player$requestFullsc = (_player$requestFullsc2 = player.requestFullscreen) === null || _player$requestFullsc2 === void 0 ? void 0 : _player$requestFullsc2.call(player)) !== null && _player$requestFullsc !== void 0 ? _player$requestFullsc : (_player$webkitRequest = player.webkitRequestFullscreen) === null || _player$webkitRequest === void 0 ? void 0 : _player$webkitRequest.call(player)) !== null && _ref2 !== void 0 ? _ref2 : (_player$mozRequestFul = player.mozRequestFullScreen) === null || _player$mozRequestFul === void 0 ? void 0 : _player$mozRequestFul.call(player)) !== null && _ref !== void 0 ? _ref : (_player$msRequestFull = player.msRequestFullscreen) === null || _player$msRequestFull === void 0 ? void 0 : _player$msRequestFull.call(player);
    },
    leaveFullScreen: function leaveFullScreen() {
      var _ref3, _ref4, _document$exitFullscr, _document$exitFullscr2, _document, _document$webkitExitF, _document2, _document$mozCancelFu, _document3, _document$msExitFulls, _document4;

      (_ref3 = (_ref4 = (_document$exitFullscr = (_document$exitFullscr2 = (_document = document).exitFullscreen) === null || _document$exitFullscr2 === void 0 ? void 0 : _document$exitFullscr2.call(_document)) !== null && _document$exitFullscr !== void 0 ? _document$exitFullscr : (_document$webkitExitF = (_document2 = document).webkitExitFullscreen) === null || _document$webkitExitF === void 0 ? void 0 : _document$webkitExitF.call(_document2)) !== null && _ref4 !== void 0 ? _ref4 : (_document$mozCancelFu = (_document3 = document).mozCancelFullScreen) === null || _document$mozCancelFu === void 0 ? void 0 : _document$mozCancelFu.call(_document3)) !== null && _ref3 !== void 0 ? _ref3 : (_document$msExitFulls = (_document4 = document).msExitFullscreen) === null || _document$msExitFulls === void 0 ? void 0 : _document$msExitFulls.call(_document4);
    },
    tapUnmute: function tapUnmute() {
      this.setVideoMuted(false);
      this.setAutoPlayMuted(false);
    }
  }),
  watch: {
    playing: function playing(_playing) {
      if (_playing) {
        this.hideControls();
      } else {
        this.showControls();
      }
    },
    windowWidth: function windowWidth(width) {
      this.setMobile(width < 770);
    },
    fullscreen: function fullscreen() {
      if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
      }

      if (!getFullscreenElement()) {
        this.mobileFullscreen = true;
        this.goFullScreen();
      } else {
        this.mobileFullscreen = false;
        this.leaveFullScreen();
      }
    },
    dropup: function dropup() {
      this.showControls();
    },
    token: function token() {
      this.setCastOptions({
        streamId: this.queryParams.streamId,
        token: this.queryParams.token,
        loading: this.isLoading
      });
    },
    castIsConnected: function castIsConnected(isConnected) {
      if (isConnected) {
        this.setPlaying(false);
        this.setIsLoading(false);
        var device = this.castDevice;
        this.cast = {
          isConnected: isConnected,
          device: device
        };
        this.showControls();
      } else {
        this.cast = {
          isConnected: isConnected
        };
      }
    },
    queryParams: function queryParams() {
      this.setCastOptions({
        streamId: this.queryParams.streamId,
        token: this.queryParams.token,
        loading: this.isLoading
      });
    }
  }
});

var getFullscreenElement = function getFullscreenElement() {
  return document.fullscreenElement || document.webkitFullscreenElement;
};
// CONCATENATED MODULE: ./src/components/VideoPlayerContainer.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/VideoPlayerContainer.vue?vue&type=style&index=0&id=68be1765&lang=scss&scoped=true
var VideoPlayerContainervue_type_style_index_0_id_68be1765_lang_scss_scoped_true = __webpack_require__("46f6");

// CONCATENATED MODULE: ./src/components/VideoPlayerContainer.vue







const VideoPlayerContainer_exports_ = /*#__PURE__*/exportHelper_default()(VideoPlayerContainervue_type_script_lang_js, [['render',VideoPlayerContainervue_type_template_id_68be1765_scoped_true_render],['__scopeId',"data-v-68be1765"]])

/* harmony default export */ var VideoPlayerContainer = (VideoPlayerContainer_exports_);
// EXTERNAL MODULE: ./node_modules/bootstrap-icons/font/bootstrap-icons.css
var bootstrap_icons = __webpack_require__("cd74");

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("ab8b");

// EXTERNAL MODULE: ./node_modules/vue-toastification/dist/index.css
var dist = __webpack_require__("da96");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=script&lang=js








/* harmony default export */ var Appvue_type_script_lang_js = ({
  name: 'App',
  components: {
    VideoPlayerContainer: VideoPlayerContainer
  },
  props: {
    paramsOptions: Object
  },
  methods: {
    updateParams: function updateParams() {
      if (this.paramsOptions) {
        var _this$paramsOptions, _this$paramsOptions2, _this$paramsOptions$a, _this$paramsOptions3, _this$paramsOptions4, _this$paramsOptions5, _this$paramsOptions6, _this$paramsOptions$h;

        setUserParams({
          streamId: ((_this$paramsOptions = this.paramsOptions) === null || _this$paramsOptions === void 0 ? void 0 : _this$paramsOptions.accountId) + '/' + ((_this$paramsOptions2 = this.paramsOptions) === null || _this$paramsOptions2 === void 0 ? void 0 : _this$paramsOptions2.streamName),
          audioOnly: (_this$paramsOptions$a = (_this$paramsOptions3 = this.paramsOptions) === null || _this$paramsOptions3 === void 0 ? void 0 : _this$paramsOptions3.audioOnly) !== null && _this$paramsOptions$a !== void 0 ? _this$paramsOptions$a : false,
          token: (_this$paramsOptions4 = this.paramsOptions) === null || _this$paramsOptions4 === void 0 ? void 0 : _this$paramsOptions4.token,
          image: (_this$paramsOptions5 = this.paramsOptions) === null || _this$paramsOptions5 === void 0 ? void 0 : _this$paramsOptions5.image,
          directorUrl:  false ? undefined : null,
          hideButtons: (_this$paramsOptions$h = this.paramsOptions.hideButtons) !== null && _this$paramsOptions$h !== void 0 ? _this$paramsOptions$h : []
        });
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var myContainer, toast;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              myContainer = document.querySelector('#vplayer');
              _context.next = 3;
              return useToast();

            case 3:
              toast = _context.sent;
              toast.updateDefaults({
                container: myContainer
              });

              _this.updateParams();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  watch: {
    paramsOptions: function paramsOptions() {
      this.updateParams();
    }
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&id=1f7c2003&scoped=true&lang=css
var Appvue_type_style_index_0_id_1f7c2003_scoped_true_lang_css = __webpack_require__("17a0");

// CONCATENATED MODULE: ./src/App.vue







const App_exports_ = /*#__PURE__*/exportHelper_default()(Appvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-1f7c2003"]])

/* harmony default export */ var App = (App_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/UI/BaseModal.vue?vue&type=template&id=6bcf2fcf&scoped=true


var BaseModalvue_type_template_id_6bcf2fcf_scoped_true_withScopeId = function _withScopeId(n) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["pushScopeId"])("data-v-6bcf2fcf"), n = n(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["popScopeId"])(), n;
};

var BaseModalvue_type_template_id_6bcf2fcf_scoped_true_hoisted_1 = {
  class: "modal fade show",
  tabindex: "-1",
  role: "dialog",
  "aria-labelledby": "exampleModalLabel",
  "aria-hidden": "true",
  style: {
    "display": "block"
  }
};
var BaseModalvue_type_template_id_6bcf2fcf_scoped_true_hoisted_2 = {
  class: "modal-dialog modal-dialog-scrollable",
  role: "document"
};
var BaseModalvue_type_template_id_6bcf2fcf_scoped_true_hoisted_3 = {
  class: "modal-content"
};
var BaseModalvue_type_template_id_6bcf2fcf_scoped_true_hoisted_4 = {
  class: "modal-header"
};
var BaseModalvue_type_template_id_6bcf2fcf_scoped_true_hoisted_5 = ["textContent"];

var BaseModalvue_type_template_id_6bcf2fcf_scoped_true_hoisted_6 = /*#__PURE__*/BaseModalvue_type_template_id_6bcf2fcf_scoped_true_withScopeId(function () {
  return /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
    "aria-hidden": "true"
  }, "×", -1);
});

var BaseModalvue_type_template_id_6bcf2fcf_scoped_true_hoisted_7 = [BaseModalvue_type_template_id_6bcf2fcf_scoped_true_hoisted_6];
var BaseModalvue_type_template_id_6bcf2fcf_scoped_true_hoisted_8 = {
  class: "modal-body"
};
var BaseModalvue_type_template_id_6bcf2fcf_scoped_true_hoisted_9 = {
  class: "modal-footer"
};
function BaseModalvue_type_template_id_6bcf2fcf_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_base_button = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("base-button");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", BaseModalvue_type_template_id_6bcf2fcf_scoped_true_hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $props.toggle && $props.toggle.apply($props, arguments);
    }),
    class: "backdrop"
  }), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", BaseModalvue_type_template_id_6bcf2fcf_scoped_true_hoisted_2, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", BaseModalvue_type_template_id_6bcf2fcf_scoped_true_hoisted_3, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", BaseModalvue_type_template_id_6bcf2fcf_scoped_true_hoisted_4, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "modal-header", {}, function () {
    return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("h5", {
      class: "modal-title",
      textContent: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])($props.title)
    }, null, 8, BaseModalvue_type_template_id_6bcf2fcf_scoped_true_hoisted_5), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("button", {
      type: "button",
      class: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: _cache[1] || (_cache[1] = function () {
        return $props.toggle && $props.toggle.apply($props, arguments);
      })
    }, BaseModalvue_type_template_id_6bcf2fcf_scoped_true_hoisted_7)];
  }, true)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", BaseModalvue_type_template_id_6bcf2fcf_scoped_true_hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "modal-body", {}, undefined, true)]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", BaseModalvue_type_template_id_6bcf2fcf_scoped_true_hoisted_9, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "modal-footer", {}, function () {
    return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_base_button, {
      btype: "btn-p",
      onClick: $props.toggle
    }, {
      default: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])(function () {
        return [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createTextVNode"])("OK")];
      }),
      _: 1
    }, 8, ["onClick"])];
  }, true)])])])]);
}
// CONCATENATED MODULE: ./src/components/UI/BaseModal.vue?vue&type=template&id=6bcf2fcf&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/UI/BaseModal.vue?vue&type=script&lang=js
/* harmony default export */ var BaseModalvue_type_script_lang_js = ({
  name: 'BaseModal',
  props: {
    title: String,
    toggle: Function
  }
});
// CONCATENATED MODULE: ./src/components/UI/BaseModal.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/UI/BaseModal.vue?vue&type=style&index=0&id=6bcf2fcf&lang=scss&scoped=true
var BaseModalvue_type_style_index_0_id_6bcf2fcf_lang_scss_scoped_true = __webpack_require__("17ec");

// CONCATENATED MODULE: ./src/components/UI/BaseModal.vue







const BaseModal_exports_ = /*#__PURE__*/exportHelper_default()(BaseModalvue_type_script_lang_js, [['render',BaseModalvue_type_template_id_6bcf2fcf_scoped_true_render],['__scopeId',"data-v-6bcf2fcf"]])

/* harmony default export */ var BaseModal = (BaseModal_exports_);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/UI/BaseButton.vue?vue&type=template&id=7037ab8a&scoped=true

function BaseButtonvue_type_template_id_7037ab8a_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("button", {
    type: "button",
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(["btn shadow-none", [$props.btype]])
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "default", {}, undefined, true)], 2);
}
// CONCATENATED MODULE: ./src/components/UI/BaseButton.vue?vue&type=template&id=7037ab8a&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/UI/BaseButton.vue?vue&type=script&lang=js
/* harmony default export */ var BaseButtonvue_type_script_lang_js = ({
  name: 'BaseButton',
  props: ['btype', 'bstyle', 'bcolor']
});
// CONCATENATED MODULE: ./src/components/UI/BaseButton.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/UI/BaseButton.vue?vue&type=style&index=0&id=7037ab8a&scoped=true&lang=css
var BaseButtonvue_type_style_index_0_id_7037ab8a_scoped_true_lang_css = __webpack_require__("b3ad");

// CONCATENATED MODULE: ./src/components/UI/BaseButton.vue







const BaseButton_exports_ = /*#__PURE__*/exportHelper_default()(BaseButtonvue_type_script_lang_js, [['render',BaseButtonvue_type_template_id_7037ab8a_scoped_true_render],['__scopeId',"data-v-7037ab8a"]])

/* harmony default export */ var BaseButton = (BaseButton_exports_);
// CONCATENATED MODULE: ./index.js














var filterBeforeCreate = function filterBeforeCreate(toast, toasts) {
  if (toasts.filter(function (t) {
    return t.type === toast.type;
  }).length !== 0) {
    return false;
  }

  return toast;
};

/* harmony default export */ var index_0 = ({
  install: function install(vue, options) {
    var _options$audioOnly, _options$hideButtons, _options$autoplay, _options$muted;

    if (!options.store) {
      vue.use(src_store);
    } else {
      options.store.registerModule('Controls', controls);
      options.store.registerModule('Layers', modules_layers);
      options.store.registerModule('Params', params);
      options.store.registerModule('Sources', modules_sources);
      options.store.registerModule('ViewConnection', viewConnection);
    }

    setUserParams({
      streamId: (options === null || options === void 0 ? void 0 : options.accountId) + '/' + (options === null || options === void 0 ? void 0 : options.streamName),
      audioOnly: (_options$audioOnly = options.audioOnly) !== null && _options$audioOnly !== void 0 ? _options$audioOnly : false,
      token: options === null || options === void 0 ? void 0 : options.token,
      image: options === null || options === void 0 ? void 0 : options.image,
      directorUrl:  false ? undefined : null,
      hideButtons: (_options$hideButtons = options.hideButtons) !== null && _options$hideButtons !== void 0 ? _options$hideButtons : [],
      autoplay: (_options$autoplay = options === null || options === void 0 ? void 0 : options.autoplay) !== null && _options$autoplay !== void 0 ? _options$autoplay : true,
      muted: (_options$muted = options === null || options === void 0 ? void 0 : options.muted) !== null && _options$muted !== void 0 ? _options$muted : false
    });
    vue.use(src_default, {
      transition: 'Vue-Toastification__fade',
      maxToasts: 2,
      newestOnTop: true,
      position: 'top-center',
      closeOnClick: false,
      closeButton: false,
      pauseOnFocusLoss: false,
      pauseOnHover: false,
      draggable: false,
      timeout: false,
      filterBeforeCreate: filterBeforeCreate
    });
    vue.component('base-modal', BaseModal);
    vue.component('base-button', BaseButton);
    vue.component('VideoPlayer', App);
  }
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (index_0);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isArray = __webpack_require__("e8b5");
var isConstructor = __webpack_require__("68ee");
var isObject = __webpack_require__("861d");
var toAbsoluteIndex = __webpack_require__("23cb");
var lengthOfArrayLike = __webpack_require__("07fa");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var nativeSlice = __webpack_require__("f36a");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array || Constructor === undefined) {
        return nativeSlice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fbe0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsContainer_vue_vue_type_style_index_0_id_6a98c20a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bff8");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsContainer_vue_vue_type_style_index_0_id_6a98c20a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_VideoPlayerControlsContainer_vue_vue_type_style_index_0_id_6a98c20a_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fce3":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var global = __webpack_require__("da84");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__("04f8");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ });
});
//# sourceMappingURL=millicast-vue-viewer-plugin.umd.js.map