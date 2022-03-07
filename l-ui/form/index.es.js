import { defineComponent, ref, onMounted, watch, resolveComponent, unref, openBlock, createBlock, mergeProps, withCtx, createElementBlock, Fragment, renderList, resolveDynamicComponent, createCommentVNode, renderSlot, createVNode, nextTick } from "vue";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var lodash = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(module, exports) {
  (function() {
    var undefined$1;
    var VERSION = "4.17.21";
    var LARGE_ARRAY_SIZE = 200;
    var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var MAX_MEMOIZE_SIZE = 500;
    var PLACEHOLDER = "__lodash_placeholder__";
    var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
    var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
    var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
    var HOT_COUNT = 800, HOT_SPAN = 16;
    var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
    var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
    var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    var wrapFlags = [
      ["ary", WRAP_ARY_FLAG],
      ["bind", WRAP_BIND_FLAG],
      ["bindKey", WRAP_BIND_KEY_FLAG],
      ["curry", WRAP_CURRY_FLAG],
      ["curryRight", WRAP_CURRY_RIGHT_FLAG],
      ["flip", WRAP_FLIP_FLAG],
      ["partial", WRAP_PARTIAL_FLAG],
      ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
      ["rearg", WRAP_REARG_FLAG]
    ];
    var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
    var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
    var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
    var reTrimStart = /^\s+/;
    var reWhitespace = /\s/;
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
    var reEscapeChar = /\\(\\)?/g;
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags = /\w*$/;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsOctal = /^0o[0-7]+$/i;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var reNoMatch = /($^)/;
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
    var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
      rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
      rsUpper + "+" + rsOptContrUpper,
      rsOrdUpper,
      rsOrdLower,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var contextProps = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ];
    var templateCounter = -1;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var deburredLetters = {
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "s"
    };
    var htmlEscapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    var htmlUnescapes = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    };
    var stringEscapes = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    };
    var freeParseFloat = parseFloat, freeParseInt = parseInt;
    var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function arrayAggregator(array, setter, iteratee, accumulator) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        var value = array[index2];
        setter(accumulator, value, iteratee(value), array);
      }
      return accumulator;
    }
    function arrayEach(array, iteratee) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (iteratee(array[index2], index2, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEachRight(array, iteratee) {
      var length = array == null ? 0 : array.length;
      while (length--) {
        if (iteratee(array[length], length, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEvery(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (!predicate(array[index2], index2, array)) {
          return false;
        }
      }
      return true;
    }
    function arrayFilter(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value = array[index2];
        if (predicate(value, index2, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    function arrayIncludesWith(array, value, comparator) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (comparator(value, array[index2])) {
          return true;
        }
      }
      return false;
    }
    function arrayMap(array, iteratee) {
      var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index2 < length) {
        result[index2] = iteratee(array[index2], index2, array);
      }
      return result;
    }
    function arrayPush(array, values) {
      var index2 = -1, length = values.length, offset = array.length;
      while (++index2 < length) {
        array[offset + index2] = values[index2];
      }
      return array;
    }
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index2 = -1, length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[++index2];
      }
      while (++index2 < length) {
        accumulator = iteratee(accumulator, array[index2], index2, array);
      }
      return accumulator;
    }
    function arrayReduceRight(array, iteratee, accumulator, initAccum) {
      var length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[--length];
      }
      while (length--) {
        accumulator = iteratee(accumulator, array[length], length, array);
      }
      return accumulator;
    }
    function arraySome(array, predicate) {
      var index2 = -1, length = array == null ? 0 : array.length;
      while (++index2 < length) {
        if (predicate(array[index2], index2, array)) {
          return true;
        }
      }
      return false;
    }
    var asciiSize = baseProperty("length");
    function asciiToArray(string) {
      return string.split("");
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function baseFindKey(collection, predicate, eachFunc) {
      var result;
      eachFunc(collection, function(value, key, collection2) {
        if (predicate(value, key, collection2)) {
          result = key;
          return false;
        }
      });
      return result;
    }
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index2-- : ++index2 < length) {
        if (predicate(array[index2], index2, array)) {
          return index2;
        }
      }
      return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    function baseIndexOfWith(array, value, fromIndex, comparator) {
      var index2 = fromIndex - 1, length = array.length;
      while (++index2 < length) {
        if (comparator(array[index2], value)) {
          return index2;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function baseMean(array, iteratee) {
      var length = array == null ? 0 : array.length;
      return length ? baseSum(array, iteratee) / length : NAN;
    }
    function baseProperty(key) {
      return function(object) {
        return object == null ? undefined$1 : object[key];
      };
    }
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? undefined$1 : object[key];
      };
    }
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
      eachFunc(collection, function(value, index2, collection2) {
        accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index2, collection2);
      });
      return accumulator;
    }
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    function baseSum(array, iteratee) {
      var result, index2 = -1, length = array.length;
      while (++index2 < length) {
        var current = iteratee(array[index2]);
        if (current !== undefined$1) {
          result = result === undefined$1 ? current : result + current;
        }
      }
      return result;
    }
    function baseTimes(n, iteratee) {
      var index2 = -1, result = Array(n);
      while (++index2 < n) {
        result[index2] = iteratee(index2);
      }
      return result;
    }
    function baseToPairs(object, props) {
      return arrayMap(props, function(key) {
        return [key, object[key]];
      });
    }
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function baseValues(object, props) {
      return arrayMap(props, function(key) {
        return object[key];
      });
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function charsStartIndex(strSymbols, chrSymbols) {
      var index2 = -1, length = strSymbols.length;
      while (++index2 < length && baseIndexOf(chrSymbols, strSymbols[index2], 0) > -1) {
      }
      return index2;
    }
    function charsEndIndex(strSymbols, chrSymbols) {
      var index2 = strSymbols.length;
      while (index2-- && baseIndexOf(chrSymbols, strSymbols[index2], 0) > -1) {
      }
      return index2;
    }
    function countHolders(array, placeholder) {
      var length = array.length, result = 0;
      while (length--) {
        if (array[length] === placeholder) {
          ++result;
        }
      }
      return result;
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    var escapeHtmlChar = basePropertyOf(htmlEscapes);
    function escapeStringChar(chr) {
      return "\\" + stringEscapes[chr];
    }
    function getValue(object, key) {
      return object == null ? undefined$1 : object[key];
    }
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function iteratorToArray(iterator) {
      var data, result = [];
      while (!(data = iterator.next()).done) {
        result.push(data.value);
      }
      return result;
    }
    function mapToArray(map) {
      var index2 = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index2] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function replaceHolders(array, placeholder) {
      var index2 = -1, length = array.length, resIndex = 0, result = [];
      while (++index2 < length) {
        var value = array[index2];
        if (value === placeholder || value === PLACEHOLDER) {
          array[index2] = PLACEHOLDER;
          result[resIndex++] = index2;
        }
      }
      return result;
    }
    function setToArray(set) {
      var index2 = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index2] = value;
      });
      return result;
    }
    function setToPairs(set) {
      var index2 = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index2] = [value, value];
      });
      return result;
    }
    function strictIndexOf(array, value, fromIndex) {
      var index2 = fromIndex - 1, length = array.length;
      while (++index2 < length) {
        if (array[index2] === value) {
          return index2;
        }
      }
      return -1;
    }
    function strictLastIndexOf(array, value, fromIndex) {
      var index2 = fromIndex + 1;
      while (index2--) {
        if (array[index2] === value) {
          return index2;
        }
      }
      return index2;
    }
    function stringSize(string) {
      return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function trimmedEndIndex(string) {
      var index2 = string.length;
      while (index2-- && reWhitespace.test(string.charAt(index2))) {
      }
      return index2;
    }
    var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
    function unicodeSize(string) {
      var result = reUnicode.lastIndex = 0;
      while (reUnicode.test(string)) {
        ++result;
      }
      return result;
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var runInContext = function runInContext2(context) {
      context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
      var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
      var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
      var coreJsData = context["__core-js_shared__"];
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var idCounter = 0;
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var nativeObjectToString = objectProto.toString;
      var objectCtorString = funcToString.call(Object2);
      var oldDash = root._;
      var reIsNative = RegExp2("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
      var Buffer = moduleExports ? context.Buffer : undefined$1, Symbol2 = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined$1, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined$1, symIterator = Symbol2 ? Symbol2.iterator : undefined$1, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined$1;
      var defineProperty = function() {
        try {
          var func = getNative(Object2, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
      var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
      var DataView = getNative(context, "DataView"), Map = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
      var metaMap = WeakMap && new WeakMap();
      var realNames = {};
      var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
      var symbolProto = Symbol2 ? Symbol2.prototype : undefined$1, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1, symbolToString = symbolProto ? symbolProto.toString : undefined$1;
      function lodash2(value) {
        if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result2 = new object();
          object.prototype = undefined$1;
          return result2;
        };
      }();
      function baseLodash() {
      }
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = undefined$1;
      }
      lodash2.templateSettings = {
        "escape": reEscape,
        "evaluate": reEvaluate,
        "interpolate": reInterpolate,
        "variable": "",
        "imports": {
          "_": lodash2
        }
      };
      lodash2.prototype = baseLodash.prototype;
      lodash2.prototype.constructor = lodash2;
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      function lazyClone() {
        var result2 = new LazyWrapper(this.__wrapped__);
        result2.__actions__ = copyArray(this.__actions__);
        result2.__dir__ = this.__dir__;
        result2.__filtered__ = this.__filtered__;
        result2.__iteratees__ = copyArray(this.__iteratees__);
        result2.__takeCount__ = this.__takeCount__;
        result2.__views__ = copyArray(this.__views__);
        return result2;
      }
      function lazyReverse() {
        if (this.__filtered__) {
          var result2 = new LazyWrapper(this);
          result2.__dir__ = -1;
          result2.__filtered__ = true;
        } else {
          result2 = this.clone();
          result2.__dir__ *= -1;
        }
        return result2;
      }
      function lazyValue() {
        var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index2 = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
        if (!isArr || !isRight && arrLength == length && takeCount == length) {
          return baseWrapperValue(array, this.__actions__);
        }
        var result2 = [];
        outer:
          while (length-- && resIndex < takeCount) {
            index2 += dir;
            var iterIndex = -1, value = array[index2];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
              if (type == LAZY_MAP_FLAG) {
                value = computed;
              } else if (!computed) {
                if (type == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result2[resIndex++] = value;
          }
        return result2;
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      function Hash(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key) {
        var result2 = this.has(key) && delete this.__data__[key];
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result2 = data[key];
          return result2 === HASH_UNDEFINED ? undefined$1 : result2;
        }
        return hasOwnProperty.call(data, key) ? data[key] : undefined$1;
      }
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== undefined$1 : hasOwnProperty.call(data, key);
      }
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === undefined$1 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete(key) {
        var data = this.__data__, index2 = assocIndexOf(data, key);
        if (index2 < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index2 == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index2, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__, index2 = assocIndexOf(data, key);
        return index2 < 0 ? undefined$1 : data[index2][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__, index2 = assocIndexOf(data, key);
        if (index2 < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index2][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index2 = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index2 < length) {
          var entry = entries[index2];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key) {
        var result2 = getMapData(this, key)["delete"](key);
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size2 = data.size;
        data.set(key, value);
        this.size += data.size == size2 ? 0 : 1;
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function SetCache(values2) {
        var index2 = -1, length = values2 == null ? 0 : values2.length;
        this.__data__ = new MapCache();
        while (++index2 < length) {
          this.add(values2[index2]);
        }
      }
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      function stackDelete(key) {
        var data = this.__data__, result2 = data["delete"](key);
        this.size = data.size;
        return result2;
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function arraySample(array) {
        var length = array.length;
        return length ? array[baseRandom(0, length - 1)] : undefined$1;
      }
      function arraySampleSize(array, n) {
        return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
      }
      function arrayShuffle(array) {
        return shuffleSelf(copyArray(array));
      }
      function assignMergeValue(object, key, value) {
        if (value !== undefined$1 && !eq(object[key], value) || value === undefined$1 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined$1 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseAggregator(collection, setter, iteratee2, accumulator) {
        baseEach(collection, function(value, key, collection2) {
          setter(accumulator, value, iteratee2(value), collection2);
        });
        return accumulator;
      }
      function baseAssign(object, source) {
        return object && copyObject(source, keys(source), object);
      }
      function baseAssignIn(object, source) {
        return object && copyObject(source, keysIn(source), object);
      }
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      function baseAt(object, paths) {
        var index2 = -1, length = paths.length, result2 = Array2(length), skip = object == null;
        while (++index2 < length) {
          result2[index2] = skip ? undefined$1 : get(object, paths[index2]);
        }
        return result2;
      }
      function baseClamp(number, lower, upper) {
        if (number === number) {
          if (upper !== undefined$1) {
            number = number <= upper ? number : upper;
          }
          if (lower !== undefined$1) {
            number = number >= lower ? number : lower;
          }
        }
        return number;
      }
      function baseClone(value, bitmask, customizer, key, object, stack) {
        var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
        if (customizer) {
          result2 = object ? customizer(value, key, object, stack) : customizer(value);
        }
        if (result2 !== undefined$1) {
          return result2;
        }
        if (!isObject(value)) {
          return value;
        }
        var isArr = isArray(value);
        if (isArr) {
          result2 = initCloneArray(value);
          if (!isDeep) {
            return copyArray(value, result2);
          }
        } else {
          var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
          if (isBuffer(value)) {
            return cloneBuffer(value, isDeep);
          }
          if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result2 = isFlat || isFunc ? {} : initCloneObject(value);
            if (!isDeep) {
              return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }
            result2 = initCloneByTag(value, tag, isDeep);
          }
        }
        stack || (stack = new Stack());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result2);
        if (isSet(value)) {
          value.forEach(function(subValue) {
            result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap(value)) {
          value.forEach(function(subValue, key2) {
            result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
        }
        var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
        var props = isArr ? undefined$1 : keysFunc(value);
        arrayEach(props || value, function(subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
        return result2;
      }
      function baseConforms(source) {
        var props = keys(source);
        return function(object) {
          return baseConformsTo(object, source, props);
        };
      }
      function baseConformsTo(object, source, props) {
        var length = props.length;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (length--) {
          var key = props[length], predicate = source[key], value = object[key];
          if (value === undefined$1 && !(key in object) || !predicate(value)) {
            return false;
          }
        }
        return true;
      }
      function baseDelay(func, wait, args) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return setTimeout2(function() {
          func.apply(undefined$1, args);
        }, wait);
      }
      function baseDifference(array, values2, iteratee2, comparator) {
        var index2 = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
        if (!length) {
          return result2;
        }
        if (iteratee2) {
          values2 = arrayMap(values2, baseUnary(iteratee2));
        }
        if (comparator) {
          includes2 = arrayIncludesWith;
          isCommon = false;
        } else if (values2.length >= LARGE_ARRAY_SIZE) {
          includes2 = cacheHas;
          isCommon = false;
          values2 = new SetCache(values2);
        }
        outer:
          while (++index2 < length) {
            var value = array[index2], computed = iteratee2 == null ? value : iteratee2(value);
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values2[valuesIndex] === computed) {
                  continue outer;
                }
              }
              result2.push(value);
            } else if (!includes2(values2, computed, comparator)) {
              result2.push(value);
            }
          }
        return result2;
      }
      var baseEach = createBaseEach(baseForOwn);
      var baseEachRight = createBaseEach(baseForOwnRight, true);
      function baseEvery(collection, predicate) {
        var result2 = true;
        baseEach(collection, function(value, index2, collection2) {
          result2 = !!predicate(value, index2, collection2);
          return result2;
        });
        return result2;
      }
      function baseExtremum(array, iteratee2, comparator) {
        var index2 = -1, length = array.length;
        while (++index2 < length) {
          var value = array[index2], current = iteratee2(value);
          if (current != null && (computed === undefined$1 ? current === current && !isSymbol(current) : comparator(current, computed))) {
            var computed = current, result2 = value;
          }
        }
        return result2;
      }
      function baseFill(array, value, start, end) {
        var length = array.length;
        start = toInteger(start);
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end === undefined$1 || end > length ? length : toInteger(end);
        if (end < 0) {
          end += length;
        }
        end = start > end ? 0 : toLength(end);
        while (start < end) {
          array[start++] = value;
        }
        return array;
      }
      function baseFilter(collection, predicate) {
        var result2 = [];
        baseEach(collection, function(value, index2, collection2) {
          if (predicate(value, index2, collection2)) {
            result2.push(value);
          }
        });
        return result2;
      }
      function baseFlatten(array, depth, predicate, isStrict, result2) {
        var index2 = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result2 || (result2 = []);
        while (++index2 < length) {
          var value = array[index2];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result2);
            } else {
              arrayPush(result2, value);
            }
          } else if (!isStrict) {
            result2[result2.length] = value;
          }
        }
        return result2;
      }
      var baseFor = createBaseFor();
      var baseForRight = createBaseFor(true);
      function baseForOwn(object, iteratee2) {
        return object && baseFor(object, iteratee2, keys);
      }
      function baseForOwnRight(object, iteratee2) {
        return object && baseForRight(object, iteratee2, keys);
      }
      function baseFunctions(object, props) {
        return arrayFilter(props, function(key) {
          return isFunction(object[key]);
        });
      }
      function baseGet(object, path) {
        path = castPath(path, object);
        var index2 = 0, length = path.length;
        while (object != null && index2 < length) {
          object = object[toKey(path[index2++])];
        }
        return index2 && index2 == length ? object : undefined$1;
      }
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result2 = keysFunc(object);
        return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
      }
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined$1 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
      }
      function baseGt(value, other) {
        return value > other;
      }
      function baseHas(object, key) {
        return object != null && hasOwnProperty.call(object, key);
      }
      function baseHasIn(object, key) {
        return object != null && key in Object2(object);
      }
      function baseInRange(number, start, end) {
        return number >= nativeMin(start, end) && number < nativeMax(start, end);
      }
      function baseIntersection(arrays, iteratee2, comparator) {
        var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
        while (othIndex--) {
          var array = arrays[othIndex];
          if (othIndex && iteratee2) {
            array = arrayMap(array, baseUnary(iteratee2));
          }
          maxLength = nativeMin(array.length, maxLength);
          caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined$1;
        }
        array = arrays[0];
        var index2 = -1, seen = caches[0];
        outer:
          while (++index2 < length && result2.length < maxLength) {
            var value = array[index2], computed = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache = caches[othIndex];
                if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseInverter(object, setter, iteratee2, accumulator) {
        baseForOwn(object, function(value, key, object2) {
          setter(accumulator, iteratee2(value), key, object2);
        });
        return accumulator;
      }
      function baseInvoke(object, path, args) {
        path = castPath(path, object);
        object = parent(object, path);
        var func = object == null ? object : object[toKey(last(path))];
        return func == null ? undefined$1 : apply(func, object, args);
      }
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      function baseIsArrayBuffer(value) {
        return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
      }
      function baseIsDate(value) {
        return isObjectLike(value) && baseGetTag(value) == dateTag;
      }
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsMap(value) {
        return isObjectLike(value) && getTag(value) == mapTag;
      }
      function baseIsMatch(object, source, matchData, customizer) {
        var index2 = matchData.length, length = index2, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (index2--) {
          var data = matchData[index2];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index2 < length) {
          data = matchData[index2];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === undefined$1 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result2 = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result2 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
              return false;
            }
          }
        }
        return true;
      }
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseIsRegExp(value) {
        return isObjectLike(value) && baseGetTag(value) == regexpTag;
      }
      function baseIsSet(value) {
        return isObjectLike(value) && getTag(value) == setTag;
      }
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == "object") {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result2 = [];
        for (var key in Object2(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result2 = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseLt(value, other) {
        return value < other;
      }
      function baseMap(collection, iteratee2) {
        var index2 = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value, key, collection2) {
          result2[++index2] = iteratee2(value, key, collection2);
        });
        return result2;
      }
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get(object, path);
          return objValue === undefined$1 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      function baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack());
          if (isObject(srcValue)) {
            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined$1;
            if (newValue === undefined$1) {
              newValue = srcValue;
            }
            assignMergeValue(object, key, newValue);
          }
        }, keysIn);
      }
      function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined$1;
        var isCommon = newValue === undefined$1;
        if (isCommon) {
          var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject(objValue) || isFunction(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }
      function baseNth(array, n) {
        var length = array.length;
        if (!length) {
          return;
        }
        n += n < 0 ? length : 0;
        return isIndex(n, length) ? array[n] : undefined$1;
      }
      function baseOrderBy(collection, iteratees, orders) {
        if (iteratees.length) {
          iteratees = arrayMap(iteratees, function(iteratee2) {
            if (isArray(iteratee2)) {
              return function(value) {
                return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
              };
            }
            return iteratee2;
          });
        } else {
          iteratees = [identity];
        }
        var index2 = -1;
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        var result2 = baseMap(collection, function(value, key, collection2) {
          var criteria = arrayMap(iteratees, function(iteratee2) {
            return iteratee2(value);
          });
          return { "criteria": criteria, "index": ++index2, "value": value };
        });
        return baseSortBy(result2, function(object, other) {
          return compareMultiple(object, other, orders);
        });
      }
      function basePick(object, paths) {
        return basePickBy(object, paths, function(value, path) {
          return hasIn(object, path);
        });
      }
      function basePickBy(object, paths, predicate) {
        var index2 = -1, length = paths.length, result2 = {};
        while (++index2 < length) {
          var path = paths[index2], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result2, castPath(path, object), value);
          }
        }
        return result2;
      }
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      function basePullAll(array, values2, iteratee2, comparator) {
        var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index2 = -1, length = values2.length, seen = array;
        if (array === values2) {
          values2 = copyArray(values2);
        }
        if (iteratee2) {
          seen = arrayMap(array, baseUnary(iteratee2));
        }
        while (++index2 < length) {
          var fromIndex = 0, value = values2[index2], computed = iteratee2 ? iteratee2(value) : value;
          while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
            if (seen !== array) {
              splice.call(seen, fromIndex, 1);
            }
            splice.call(array, fromIndex, 1);
          }
        }
        return array;
      }
      function basePullAt(array, indexes) {
        var length = array ? indexes.length : 0, lastIndex = length - 1;
        while (length--) {
          var index2 = indexes[length];
          if (length == lastIndex || index2 !== previous) {
            var previous = index2;
            if (isIndex(index2)) {
              splice.call(array, index2, 1);
            } else {
              baseUnset(array, index2);
            }
          }
        }
        return array;
      }
      function baseRandom(lower, upper) {
        return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
      }
      function baseRange(start, end, step, fromRight) {
        var index2 = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
        while (length--) {
          result2[fromRight ? length : ++index2] = start;
          start += step;
        }
        return result2;
      }
      function baseRepeat(string, n) {
        var result2 = "";
        if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
          return result2;
        }
        do {
          if (n % 2) {
            result2 += string;
          }
          n = nativeFloor(n / 2);
          if (n) {
            string += string;
          }
        } while (n);
        return result2;
      }
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + "");
      }
      function baseSample(collection) {
        return arraySample(values(collection));
      }
      function baseSampleSize(collection, n) {
        var array = values(collection);
        return shuffleSelf(array, baseClamp(n, 0, array.length));
      }
      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }
        path = castPath(path, object);
        var index2 = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index2 < length) {
          var key = toKey(path[index2]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index2 != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
            if (newValue === undefined$1) {
              newValue = isObject(objValue) ? objValue : isIndex(path[index2 + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      var baseSetData = !metaMap ? identity : function(func, data) {
        metaMap.set(func, data);
        return func;
      };
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string),
          "writable": true
        });
      };
      function baseShuffle(collection) {
        return shuffleSelf(values(collection));
      }
      function baseSlice(array, start, end) {
        var index2 = -1, length = array.length;
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result2 = Array2(length);
        while (++index2 < length) {
          result2[index2] = array[index2 + start];
        }
        return result2;
      }
      function baseSome(collection, predicate) {
        var result2;
        baseEach(collection, function(value, index2, collection2) {
          result2 = predicate(value, index2, collection2);
          return !result2;
        });
        return !!result2;
      }
      function baseSortedIndex(array, value, retHighest) {
        var low = 0, high = array == null ? low : array.length;
        if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
          while (low < high) {
            var mid = low + high >>> 1, computed = array[mid];
            if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return high;
        }
        return baseSortedIndexBy(array, value, identity, retHighest);
      }
      function baseSortedIndexBy(array, value, iteratee2, retHighest) {
        var low = 0, high = array == null ? 0 : array.length;
        if (high === 0) {
          return 0;
        }
        value = iteratee2(value);
        var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined$1;
        while (low < high) {
          var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined$1, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
          if (valIsNaN) {
            var setLow = retHighest || othIsReflexive;
          } else if (valIsUndefined) {
            setLow = othIsReflexive && (retHighest || othIsDefined);
          } else if (valIsNull) {
            setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
          } else if (valIsSymbol) {
            setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
          } else if (othIsNull || othIsSymbol) {
            setLow = false;
          } else {
            setLow = retHighest ? computed <= value : computed < value;
          }
          if (setLow) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return nativeMin(high, MAX_ARRAY_INDEX);
      }
      function baseSortedUniq(array, iteratee2) {
        var index2 = -1, length = array.length, resIndex = 0, result2 = [];
        while (++index2 < length) {
          var value = array[index2], computed = iteratee2 ? iteratee2(value) : value;
          if (!index2 || !eq(computed, seen)) {
            var seen = computed;
            result2[resIndex++] = value === 0 ? 0 : value;
          }
        }
        return result2;
      }
      function baseToNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        return +value;
      }
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      function baseUniq(array, iteratee2, comparator) {
        var index2 = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
        if (comparator) {
          isCommon = false;
          includes2 = arrayIncludesWith;
        } else if (length >= LARGE_ARRAY_SIZE) {
          var set2 = iteratee2 ? null : createSet(array);
          if (set2) {
            return setToArray(set2);
          }
          isCommon = false;
          includes2 = cacheHas;
          seen = new SetCache();
        } else {
          seen = iteratee2 ? [] : result2;
        }
        outer:
          while (++index2 < length) {
            var value = array[index2], computed = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed) {
                  continue outer;
                }
              }
              if (iteratee2) {
                seen.push(computed);
              }
              result2.push(value);
            } else if (!includes2(seen, computed, comparator)) {
              if (seen !== result2) {
                seen.push(computed);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseUnset(object, path) {
        path = castPath(path, object);
        object = parent(object, path);
        return object == null || delete object[toKey(last(path))];
      }
      function baseUpdate(object, path, updater, customizer) {
        return baseSet(object, path, updater(baseGet(object, path)), customizer);
      }
      function baseWhile(array, predicate, isDrop, fromRight) {
        var length = array.length, index2 = fromRight ? length : -1;
        while ((fromRight ? index2-- : ++index2 < length) && predicate(array[index2], index2, array)) {
        }
        return isDrop ? baseSlice(array, fromRight ? 0 : index2, fromRight ? index2 + 1 : length) : baseSlice(array, fromRight ? index2 + 1 : 0, fromRight ? length : index2);
      }
      function baseWrapperValue(value, actions) {
        var result2 = value;
        if (result2 instanceof LazyWrapper) {
          result2 = result2.value();
        }
        return arrayReduce(actions, function(result3, action) {
          return action.func.apply(action.thisArg, arrayPush([result3], action.args));
        }, result2);
      }
      function baseXor(arrays, iteratee2, comparator) {
        var length = arrays.length;
        if (length < 2) {
          return length ? baseUniq(arrays[0]) : [];
        }
        var index2 = -1, result2 = Array2(length);
        while (++index2 < length) {
          var array = arrays[index2], othIndex = -1;
          while (++othIndex < length) {
            if (othIndex != index2) {
              result2[index2] = baseDifference(result2[index2] || array, arrays[othIndex], iteratee2, comparator);
            }
          }
        }
        return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
      }
      function baseZipObject(props, values2, assignFunc) {
        var index2 = -1, length = props.length, valsLength = values2.length, result2 = {};
        while (++index2 < length) {
          var value = index2 < valsLength ? values2[index2] : undefined$1;
          assignFunc(result2, props[index2], value);
        }
        return result2;
      }
      function castArrayLikeObject(value) {
        return isArrayLikeObject(value) ? value : [];
      }
      function castFunction(value) {
        return typeof value == "function" ? value : identity;
      }
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      var castRest = baseRest;
      function castSlice(array, start, end) {
        var length = array.length;
        end = end === undefined$1 ? length : end;
        return !start && end >= length ? array : baseSlice(array, start, end);
      }
      var clearTimeout2 = ctxClearTimeout || function(id) {
        return root.clearTimeout(id);
      };
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result2);
        return result2;
      }
      function cloneArrayBuffer(arrayBuffer) {
        var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array(result2).set(new Uint8Array(arrayBuffer));
        return result2;
      }
      function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      function cloneRegExp(regexp) {
        var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result2.lastIndex = regexp.lastIndex;
        return result2;
      }
      function cloneSymbol(symbol) {
        return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
      }
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      function compareAscending(value, other) {
        if (value !== other) {
          var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
          var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
          if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
            return 1;
          }
          if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
            return -1;
          }
        }
        return 0;
      }
      function compareMultiple(object, other, orders) {
        var index2 = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
        while (++index2 < length) {
          var result2 = compareAscending(objCriteria[index2], othCriteria[index2]);
          if (result2) {
            if (index2 >= ordersLength) {
              return result2;
            }
            var order = orders[index2];
            return result2 * (order == "desc" ? -1 : 1);
          }
        }
        return object.index - other.index;
      }
      function composeArgs(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
        while (++leftIndex < leftLength) {
          result2[leftIndex] = partials[leftIndex];
        }
        while (++argsIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[holders[argsIndex]] = args[argsIndex];
          }
        }
        while (rangeLength--) {
          result2[leftIndex++] = args[argsIndex++];
        }
        return result2;
      }
      function composeArgsRight(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
        while (++argsIndex < rangeLength) {
          result2[argsIndex] = args[argsIndex];
        }
        var offset = argsIndex;
        while (++rightIndex < rightLength) {
          result2[offset + rightIndex] = partials[rightIndex];
        }
        while (++holdersIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[offset + holders[holdersIndex]] = args[argsIndex++];
          }
        }
        return result2;
      }
      function copyArray(source, array) {
        var index2 = -1, length = source.length;
        array || (array = Array2(length));
        while (++index2 < length) {
          array[index2] = source[index2];
        }
        return array;
      }
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index2 = -1, length = props.length;
        while (++index2 < length) {
          var key = props[index2];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined$1;
          if (newValue === undefined$1) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }
      function copySymbols(source, object) {
        return copyObject(source, getSymbols(source), object);
      }
      function copySymbolsIn(source, object) {
        return copyObject(source, getSymbolsIn(source), object);
      }
      function createAggregator(setter, initializer) {
        return function(collection, iteratee2) {
          var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
          return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
        };
      }
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined$1 : customizer;
            length = 1;
          }
          object = Object2(object);
          while (++index2 < length) {
            var source = sources[index2];
            if (source) {
              assigner(object, source, index2, customizer);
            }
          }
          return object;
        });
      }
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee2) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee2);
          }
          var length = collection.length, index2 = fromRight ? length : -1, iterable = Object2(collection);
          while (fromRight ? index2-- : ++index2 < length) {
            if (iteratee2(iterable[index2], index2, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      function createBaseFor(fromRight) {
        return function(object, iteratee2, keysFunc) {
          var index2 = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index2];
            if (iteratee2(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      function createBind(func, bitmask, thisArg) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          return fn.apply(isBind ? thisArg : this, arguments);
        }
        return wrapper;
      }
      function createCaseFirst(methodName) {
        return function(string) {
          string = toString(string);
          var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined$1;
          var chr = strSymbols ? strSymbols[0] : string.charAt(0);
          var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      function createCompounder(callback) {
        return function(string) {
          return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
        };
      }
      function createCtor(Ctor) {
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return new Ctor();
            case 1:
              return new Ctor(args[0]);
            case 2:
              return new Ctor(args[0], args[1]);
            case 3:
              return new Ctor(args[0], args[1], args[2]);
            case 4:
              return new Ctor(args[0], args[1], args[2], args[3]);
            case 5:
              return new Ctor(args[0], args[1], args[2], args[3], args[4]);
            case 6:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
          }
          var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
          return isObject(result2) ? result2 : thisBinding;
        };
      }
      function createCurry(func, bitmask, arity) {
        var Ctor = createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index2 = length, placeholder = getHolder(wrapper);
          while (index2--) {
            args[index2] = arguments[index2];
          }
          var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
          length -= holders.length;
          if (length < arity) {
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined$1, args, holders, undefined$1, undefined$1, arity - length);
          }
          var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          return apply(fn, this, args);
        }
        return wrapper;
      }
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object2(collection);
          if (!isArrayLike(collection)) {
            var iteratee2 = getIteratee(predicate, 3);
            collection = keys(collection);
            predicate = function(key) {
              return iteratee2(iterable[key], key, iterable);
            };
          }
          var index2 = findIndexFunc(collection, predicate, fromIndex);
          return index2 > -1 ? iterable[iteratee2 ? collection[index2] : index2] : undefined$1;
        };
      }
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length, index2 = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index2--) {
            var func = funcs[index2];
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index2 = wrapper ? index2 : length;
          while (++index2 < length) {
            func = funcs[index2];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray(value)) {
              return wrapper.plant(value).value();
            }
            var index3 = 0, result2 = length ? funcs[index3].apply(this, args) : value;
            while (++index3 < length) {
              result2 = funcs[index3].call(this, result2);
            }
            return result2;
          };
        });
      }
      function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
        var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index2 = length;
          while (index2--) {
            args[index2] = arguments[index2];
          }
          if (isCurried) {
            var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
          }
          if (partials) {
            args = composeArgs(args, partials, holders, isCurried);
          }
          if (partialsRight) {
            args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
          }
          length -= holdersCount;
          if (isCurried && length < arity) {
            var newHolders = replaceHolders(args, placeholder);
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary2, arity - length);
          }
          var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
          length = args.length;
          if (argPos) {
            args = reorder(args, argPos);
          } else if (isFlip && length > 1) {
            args.reverse();
          }
          if (isAry && ary2 < length) {
            args.length = ary2;
          }
          if (this && this !== root && this instanceof wrapper) {
            fn = Ctor || createCtor(fn);
          }
          return fn.apply(thisBinding, args);
        }
        return wrapper;
      }
      function createInverter(setter, toIteratee) {
        return function(object, iteratee2) {
          return baseInverter(object, setter, toIteratee(iteratee2), {});
        };
      }
      function createMathOperation(operator, defaultValue) {
        return function(value, other) {
          var result2;
          if (value === undefined$1 && other === undefined$1) {
            return defaultValue;
          }
          if (value !== undefined$1) {
            result2 = value;
          }
          if (other !== undefined$1) {
            if (result2 === undefined$1) {
              return other;
            }
            if (typeof value == "string" || typeof other == "string") {
              value = baseToString(value);
              other = baseToString(other);
            } else {
              value = baseToNumber(value);
              other = baseToNumber(other);
            }
            result2 = operator(value, other);
          }
          return result2;
        };
      }
      function createOver(arrayFunc) {
        return flatRest(function(iteratees) {
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          return baseRest(function(args) {
            var thisArg = this;
            return arrayFunc(iteratees, function(iteratee2) {
              return apply(iteratee2, thisArg, args);
            });
          });
        });
      }
      function createPadding(length, chars) {
        chars = chars === undefined$1 ? " " : baseToString(chars);
        var charsLength = chars.length;
        if (charsLength < 2) {
          return charsLength ? baseRepeat(chars, length) : chars;
        }
        var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
        return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
      }
      function createPartial(func, bitmask, thisArg, partials) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          while (++leftIndex < leftLength) {
            args[leftIndex] = partials[leftIndex];
          }
          while (argsLength--) {
            args[leftIndex++] = arguments[++argsIndex];
          }
          return apply(fn, isBind ? thisArg : this, args);
        }
        return wrapper;
      }
      function createRange(fromRight) {
        return function(start, end, step) {
          if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
            end = step = undefined$1;
          }
          start = toFinite(start);
          if (end === undefined$1) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          step = step === undefined$1 ? start < end ? 1 : -1 : toFinite(step);
          return baseRange(start, end, step, fromRight);
        };
      }
      function createRelationalOperation(operator) {
        return function(value, other) {
          if (!(typeof value == "string" && typeof other == "string")) {
            value = toNumber(value);
            other = toNumber(other);
          }
          return operator(value, other);
        };
      }
      function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
        var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
        bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
        bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
        if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
          bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
        }
        var newData = [
          func,
          bitmask,
          thisArg,
          newPartials,
          newHolders,
          newPartialsRight,
          newHoldersRight,
          argPos,
          ary2,
          arity
        ];
        var result2 = wrapFunc.apply(undefined$1, newData);
        if (isLaziable(func)) {
          setData(result2, newData);
        }
        result2.placeholder = placeholder;
        return setWrapToString(result2, func, bitmask);
      }
      function createRound(methodName) {
        var func = Math2[methodName];
        return function(number, precision) {
          number = toNumber(number);
          precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
          if (precision && nativeIsFinite(number)) {
            var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
            pair = (toString(value) + "e").split("e");
            return +(pair[0] + "e" + (+pair[1] - precision));
          }
          return func(number);
        };
      }
      var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values2) {
        return new Set(values2);
      };
      function createToPairs(keysFunc) {
        return function(object) {
          var tag = getTag(object);
          if (tag == mapTag) {
            return mapToArray(object);
          }
          if (tag == setTag) {
            return setToPairs(object);
          }
          return baseToPairs(object, keysFunc(object));
        };
      }
      function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
        var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
        if (!isBindKey && typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var length = partials ? partials.length : 0;
        if (!length) {
          bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
          partials = holders = undefined$1;
        }
        ary2 = ary2 === undefined$1 ? ary2 : nativeMax(toInteger(ary2), 0);
        arity = arity === undefined$1 ? arity : toInteger(arity);
        length -= holders ? holders.length : 0;
        if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
          var partialsRight = partials, holdersRight = holders;
          partials = holders = undefined$1;
        }
        var data = isBindKey ? undefined$1 : getData(func);
        var newData = [
          func,
          bitmask,
          thisArg,
          partials,
          holders,
          partialsRight,
          holdersRight,
          argPos,
          ary2,
          arity
        ];
        if (data) {
          mergeData(newData, data);
        }
        func = newData[0];
        bitmask = newData[1];
        thisArg = newData[2];
        partials = newData[3];
        holders = newData[4];
        arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
        if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
          bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
        }
        if (!bitmask || bitmask == WRAP_BIND_FLAG) {
          var result2 = createBind(func, bitmask, thisArg);
        } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
          result2 = createCurry(func, bitmask, arity);
        } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
          result2 = createPartial(func, bitmask, thisArg, partials);
        } else {
          result2 = createHybrid.apply(undefined$1, newData);
        }
        var setter = data ? baseSetData : setData;
        return setWrapToString(setter(result2, newData), func, bitmask);
      }
      function customDefaultsAssignIn(objValue, srcValue, key, object) {
        if (objValue === undefined$1 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
          return srcValue;
        }
        return objValue;
      }
      function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
        if (isObject(objValue) && isObject(srcValue)) {
          stack.set(srcValue, objValue);
          baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
          stack["delete"](srcValue);
        }
        return objValue;
      }
      function customOmitClone(value) {
        return isPlainObject(value) ? undefined$1 : value;
      }
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index2 = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
        stack.set(array, other);
        stack.set(other, array);
        while (++index2 < arrLength) {
          var arrValue = array[index2], othValue = other[index2];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
          }
          if (compared !== undefined$1) {
            if (compared) {
              continue;
            }
            result2 = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result2 = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result2 = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result2;
      }
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result2;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index2 = objLength;
        while (index2--) {
          var key = objProps[index2];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result2 = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index2 < objLength) {
          key = objProps[index2];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result2 = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result2 && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result2 = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result2;
      }
      function flatRest(func) {
        return setToString(overRest(func, undefined$1, flatten), func + "");
      }
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      var getData = !metaMap ? noop : function(func) {
        return metaMap.get(func);
      };
      function getFuncName(func) {
        var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
        while (length--) {
          var data = array[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result2;
      }
      function getHolder(func) {
        var object = hasOwnProperty.call(lodash2, "placeholder") ? lodash2 : func;
        return object.placeholder;
      }
      function getIteratee() {
        var result2 = lodash2.iteratee || iteratee;
        result2 = result2 === iteratee ? baseIteratee : result2;
        return arguments.length ? result2(arguments[0], arguments[1]) : result2;
      }
      function getMapData(map2, key) {
        var data = map2.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getMatchData(object) {
        var result2 = keys(object), length = result2.length;
        while (length--) {
          var key = result2[length], value = object[key];
          result2[length] = [key, value, isStrictComparable(value)];
        }
        return result2;
      }
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : undefined$1;
      }
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = undefined$1;
          var unmasked = true;
        } catch (e) {
        }
        var result2 = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result2;
      }
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object2(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result2 = [];
        while (object) {
          arrayPush(result2, getSymbols(object));
          object = getPrototype(object);
        }
        return result2;
      };
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
        getTag = function(value) {
          var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined$1, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result2;
        };
      }
      function getView(start, end, transforms) {
        var index2 = -1, length = transforms.length;
        while (++index2 < length) {
          var data = transforms[index2], size2 = data.size;
          switch (data.type) {
            case "drop":
              start += size2;
              break;
            case "dropRight":
              end -= size2;
              break;
            case "take":
              end = nativeMin(end, start + size2);
              break;
            case "takeRight":
              start = nativeMax(start, end - size2);
              break;
          }
        }
        return { "start": start, "end": end };
      }
      function getWrapDetails(source) {
        var match = source.match(reWrapDetails);
        return match ? match[1].split(reSplitDetails) : [];
      }
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index2 = -1, length = path.length, result2 = false;
        while (++index2 < length) {
          var key = toKey(path[index2]);
          if (!(result2 = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result2 || ++index2 != length) {
          return result2;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }
      function initCloneArray(array) {
        var length = array.length, result2 = new array.constructor(length);
        if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
          result2.index = array.index;
          result2.input = array.input;
        }
        return result2;
      }
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag:
            return cloneArrayBuffer(object);
          case boolTag:
          case dateTag:
            return new Ctor(+object);
          case dataViewTag:
            return cloneDataView(object, isDeep);
          case float32Tag:
          case float64Tag:
          case int8Tag:
          case int16Tag:
          case int32Tag:
          case uint8Tag:
          case uint8ClampedTag:
          case uint16Tag:
          case uint32Tag:
            return cloneTypedArray(object, isDeep);
          case mapTag:
            return new Ctor();
          case numberTag:
          case stringTag:
            return new Ctor(object);
          case regexpTag:
            return cloneRegExp(object);
          case setTag:
            return new Ctor();
          case symbolTag:
            return cloneSymbol(object);
        }
      }
      function insertWrapDetails(source, details) {
        var length = details.length;
        if (!length) {
          return source;
        }
        var lastIndex = length - 1;
        details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
        details = details.join(length > 2 ? ", " : " ");
        return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
      }
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isIterateeCall(value, index2, object) {
        if (!isObject(object)) {
          return false;
        }
        var type = typeof index2;
        if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
          return eq(object[index2], value);
        }
        return false;
      }
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash2[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      var isMaskable = coreJsData ? isFunction : stubFalse;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object));
        };
      }
      function memoizeCapped(func) {
        var result2 = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result2.cache;
        return result2;
      }
      function mergeData(data, source) {
        var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
        var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
        if (!(isCommon || isCombo)) {
          return data;
        }
        if (srcBitmask & WRAP_BIND_FLAG) {
          data[2] = source[2];
          newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
        }
        var value = source[3];
        if (value) {
          var partials = data[3];
          data[3] = partials ? composeArgs(partials, value, source[4]) : value;
          data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
        }
        value = source[5];
        if (value) {
          partials = data[5];
          data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
          data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
        }
        value = source[7];
        if (value) {
          data[7] = value;
        }
        if (srcBitmask & WRAP_ARY_FLAG) {
          data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
        }
        if (data[9] == null) {
          data[9] = source[9];
        }
        data[0] = source[0];
        data[1] = newBitmask;
        return data;
      }
      function nativeKeysIn(object) {
        var result2 = [];
        if (object != null) {
          for (var key in Object2(object)) {
            result2.push(key);
          }
        }
        return result2;
      }
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      function overRest(func, start, transform2) {
        start = nativeMax(start === undefined$1 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
          while (++index2 < length) {
            array[index2] = args[start + index2];
          }
          index2 = -1;
          var otherArgs = Array2(start + 1);
          while (++index2 < start) {
            otherArgs[index2] = args[index2];
          }
          otherArgs[start] = transform2(array);
          return apply(func, this, otherArgs);
        };
      }
      function parent(object, path) {
        return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
      }
      function reorder(array, indexes) {
        var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
        while (length--) {
          var index2 = indexes[length];
          array[length] = isIndex(index2, arrLength) ? oldArray[index2] : undefined$1;
        }
        return array;
      }
      function safeGet(object, key) {
        if (key === "constructor" && typeof object[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object[key];
      }
      var setData = shortOut(baseSetData);
      var setTimeout2 = ctxSetTimeout || function(func, wait) {
        return root.setTimeout(func, wait);
      };
      var setToString = shortOut(baseSetToString);
      function setWrapToString(wrapper, reference, bitmask) {
        var source = reference + "";
        return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
      }
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined$1, arguments);
        };
      }
      function shuffleSelf(array, size2) {
        var index2 = -1, length = array.length, lastIndex = length - 1;
        size2 = size2 === undefined$1 ? length : size2;
        while (++index2 < size2) {
          var rand = baseRandom(index2, lastIndex), value = array[rand];
          array[rand] = array[index2];
          array[index2] = value;
        }
        array.length = size2;
        return array;
      }
      var stringToPath = memoizeCapped(function(string) {
        var result2 = [];
        if (string.charCodeAt(0) === 46) {
          result2.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result2;
      });
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function updateWrapDetails(details, bitmask) {
        arrayEach(wrapFlags, function(pair) {
          var value = "_." + pair[0];
          if (bitmask & pair[1] && !arrayIncludes(details, value)) {
            details.push(value);
          }
        });
        return details.sort();
      }
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result2.__actions__ = copyArray(wrapper.__actions__);
        result2.__index__ = wrapper.__index__;
        result2.__values__ = wrapper.__values__;
        return result2;
      }
      function chunk(array, size2, guard) {
        if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined$1) {
          size2 = 1;
        } else {
          size2 = nativeMax(toInteger(size2), 0);
        }
        var length = array == null ? 0 : array.length;
        if (!length || size2 < 1) {
          return [];
        }
        var index2 = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
        while (index2 < length) {
          result2[resIndex++] = baseSlice(array, index2, index2 += size2);
        }
        return result2;
      }
      function compact(array) {
        var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
        while (++index2 < length) {
          var value = array[index2];
          if (value) {
            result2[resIndex++] = value;
          }
        }
        return result2;
      }
      function concat() {
        var length = arguments.length;
        if (!length) {
          return [];
        }
        var args = Array2(length - 1), array = arguments[0], index2 = length;
        while (index2--) {
          args[index2 - 1] = arguments[index2];
        }
        return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
      }
      var difference = baseRest(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
      });
      var differenceBy = baseRest(function(array, values2) {
        var iteratee2 = last(values2);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
      });
      var differenceWith = baseRest(function(array, values2) {
        var comparator = last(values2);
        if (isArrayLikeObject(comparator)) {
          comparator = undefined$1;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
      });
      function drop(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        return baseSlice(array, n < 0 ? 0 : n, length);
      }
      function dropRight(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array, 0, n < 0 ? 0 : n);
      }
      function dropRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
      }
      function dropWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
      }
      function fill(array, value, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
          start = 0;
          end = length;
        }
        return baseFill(array, value, start, end);
      }
      function findIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index2 < 0) {
          index2 = nativeMax(length + index2, 0);
        }
        return baseFindIndex(array, getIteratee(predicate, 3), index2);
      }
      function findLastIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index2 = length - 1;
        if (fromIndex !== undefined$1) {
          index2 = toInteger(fromIndex);
          index2 = fromIndex < 0 ? nativeMax(length + index2, 0) : nativeMin(index2, length - 1);
        }
        return baseFindIndex(array, getIteratee(predicate, 3), index2, true);
      }
      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }
      function flattenDeep(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, INFINITY) : [];
      }
      function flattenDepth(array, depth) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten(array, depth);
      }
      function fromPairs(pairs) {
        var index2 = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
        while (++index2 < length) {
          var pair = pairs[index2];
          result2[pair[0]] = pair[1];
        }
        return result2;
      }
      function head(array) {
        return array && array.length ? array[0] : undefined$1;
      }
      function indexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index2 = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index2 < 0) {
          index2 = nativeMax(length + index2, 0);
        }
        return baseIndexOf(array, value, index2);
      }
      function initial(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice(array, 0, -1) : [];
      }
      var intersection = baseRest(function(arrays) {
        var mapped = arrayMap(arrays, castArrayLikeObject);
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
      });
      var intersectionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        if (iteratee2 === last(mapped)) {
          iteratee2 = undefined$1;
        } else {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
      });
      var intersectionWith = baseRest(function(arrays) {
        var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        if (comparator) {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
      });
      function join(array, separator) {
        return array == null ? "" : nativeJoin.call(array, separator);
      }
      function last(array) {
        var length = array == null ? 0 : array.length;
        return length ? array[length - 1] : undefined$1;
      }
      function lastIndexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index2 = length;
        if (fromIndex !== undefined$1) {
          index2 = toInteger(fromIndex);
          index2 = index2 < 0 ? nativeMax(length + index2, 0) : nativeMin(index2, length - 1);
        }
        return value === value ? strictLastIndexOf(array, value, index2) : baseFindIndex(array, baseIsNaN, index2, true);
      }
      function nth(array, n) {
        return array && array.length ? baseNth(array, toInteger(n)) : undefined$1;
      }
      var pull = baseRest(pullAll);
      function pullAll(array, values2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
      }
      function pullAllBy(array, values2, iteratee2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
      }
      function pullAllWith(array, values2, comparator) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined$1, comparator) : array;
      }
      var pullAt = flatRest(function(array, indexes) {
        var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
        basePullAt(array, arrayMap(indexes, function(index2) {
          return isIndex(index2, length) ? +index2 : index2;
        }).sort(compareAscending));
        return result2;
      });
      function remove(array, predicate) {
        var result2 = [];
        if (!(array && array.length)) {
          return result2;
        }
        var index2 = -1, indexes = [], length = array.length;
        predicate = getIteratee(predicate, 3);
        while (++index2 < length) {
          var value = array[index2];
          if (predicate(value, index2, array)) {
            result2.push(value);
            indexes.push(index2);
          }
        }
        basePullAt(array, indexes);
        return result2;
      }
      function reverse(array) {
        return array == null ? array : nativeReverse.call(array);
      }
      function slice(array, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
          start = 0;
          end = length;
        } else {
          start = start == null ? 0 : toInteger(start);
          end = end === undefined$1 ? length : toInteger(end);
        }
        return baseSlice(array, start, end);
      }
      function sortedIndex(array, value) {
        return baseSortedIndex(array, value);
      }
      function sortedIndexBy(array, value, iteratee2) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
      }
      function sortedIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index2 = baseSortedIndex(array, value);
          if (index2 < length && eq(array[index2], value)) {
            return index2;
          }
        }
        return -1;
      }
      function sortedLastIndex(array, value) {
        return baseSortedIndex(array, value, true);
      }
      function sortedLastIndexBy(array, value, iteratee2) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
      }
      function sortedLastIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index2 = baseSortedIndex(array, value, true) - 1;
          if (eq(array[index2], value)) {
            return index2;
          }
        }
        return -1;
      }
      function sortedUniq(array) {
        return array && array.length ? baseSortedUniq(array) : [];
      }
      function sortedUniqBy(array, iteratee2) {
        return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function tail(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice(array, 1, length) : [];
      }
      function take(array, n, guard) {
        if (!(array && array.length)) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        return baseSlice(array, 0, n < 0 ? 0 : n);
      }
      function takeRight(array, n, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n = guard || n === undefined$1 ? 1 : toInteger(n);
        n = length - n;
        return baseSlice(array, n < 0 ? 0 : n, length);
      }
      function takeRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
      }
      function takeWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
      }
      var union = baseRest(function(arrays) {
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
      });
      var unionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
      });
      var unionWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
      });
      function uniq(array) {
        return array && array.length ? baseUniq(array) : [];
      }
      function uniqBy(array, iteratee2) {
        return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function uniqWith(array, comparator) {
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return array && array.length ? baseUniq(array, undefined$1, comparator) : [];
      }
      function unzip(array) {
        if (!(array && array.length)) {
          return [];
        }
        var length = 0;
        array = arrayFilter(array, function(group) {
          if (isArrayLikeObject(group)) {
            length = nativeMax(group.length, length);
            return true;
          }
        });
        return baseTimes(length, function(index2) {
          return arrayMap(array, baseProperty(index2));
        });
      }
      function unzipWith(array, iteratee2) {
        if (!(array && array.length)) {
          return [];
        }
        var result2 = unzip(array);
        if (iteratee2 == null) {
          return result2;
        }
        return arrayMap(result2, function(group) {
          return apply(iteratee2, undefined$1, group);
        });
      }
      var without = baseRest(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
      });
      var xor = baseRest(function(arrays) {
        return baseXor(arrayFilter(arrays, isArrayLikeObject));
      });
      var xorBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
      });
      var xorWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
      });
      var zip = baseRest(unzip);
      function zipObject(props, values2) {
        return baseZipObject(props || [], values2 || [], assignValue);
      }
      function zipObjectDeep(props, values2) {
        return baseZipObject(props || [], values2 || [], baseSet);
      }
      var zipWith = baseRest(function(arrays) {
        var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined$1;
        iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
        return unzipWith(arrays, iteratee2);
      });
      function chain(value) {
        var result2 = lodash2(value);
        result2.__chain__ = true;
        return result2;
      }
      function tap(value, interceptor) {
        interceptor(value);
        return value;
      }
      function thru(value, interceptor) {
        return interceptor(value);
      }
      var wrapperAt = flatRest(function(paths) {
        var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
          return baseAt(object, paths);
        };
        if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
          return this.thru(interceptor);
        }
        value = value.slice(start, +start + (length ? 1 : 0));
        value.__actions__.push({
          "func": thru,
          "args": [interceptor],
          "thisArg": undefined$1
        });
        return new LodashWrapper(value, this.__chain__).thru(function(array) {
          if (length && !array.length) {
            array.push(undefined$1);
          }
          return array;
        });
      });
      function wrapperChain() {
        return chain(this);
      }
      function wrapperCommit() {
        return new LodashWrapper(this.value(), this.__chain__);
      }
      function wrapperNext() {
        if (this.__values__ === undefined$1) {
          this.__values__ = toArray(this.value());
        }
        var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
        return { "done": done, "value": value };
      }
      function wrapperToIterator() {
        return this;
      }
      function wrapperPlant(value) {
        var result2, parent2 = this;
        while (parent2 instanceof baseLodash) {
          var clone2 = wrapperClone(parent2);
          clone2.__index__ = 0;
          clone2.__values__ = undefined$1;
          if (result2) {
            previous.__wrapped__ = clone2;
          } else {
            result2 = clone2;
          }
          var previous = clone2;
          parent2 = parent2.__wrapped__;
        }
        previous.__wrapped__ = value;
        return result2;
      }
      function wrapperReverse() {
        var value = this.__wrapped__;
        if (value instanceof LazyWrapper) {
          var wrapped = value;
          if (this.__actions__.length) {
            wrapped = new LazyWrapper(this);
          }
          wrapped = wrapped.reverse();
          wrapped.__actions__.push({
            "func": thru,
            "args": [reverse],
            "thisArg": undefined$1
          });
          return new LodashWrapper(wrapped, this.__chain__);
        }
        return this.thru(reverse);
      }
      function wrapperValue() {
        return baseWrapperValue(this.__wrapped__, this.__actions__);
      }
      var countBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty.call(result2, key)) {
          ++result2[key];
        } else {
          baseAssignValue(result2, key, 1);
        }
      });
      function every(collection, predicate, guard) {
        var func = isArray(collection) ? arrayEvery : baseEvery;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      function filter(collection, predicate) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        return func(collection, getIteratee(predicate, 3));
      }
      var find = createFind(findIndex);
      var findLast = createFind(findLastIndex);
      function flatMap(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), 1);
      }
      function flatMapDeep(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), INFINITY);
      }
      function flatMapDepth(collection, iteratee2, depth) {
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten(map(collection, iteratee2), depth);
      }
      function forEach(collection, iteratee2) {
        var func = isArray(collection) ? arrayEach : baseEach;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function forEachRight(collection, iteratee2) {
        var func = isArray(collection) ? arrayEachRight : baseEachRight;
        return func(collection, getIteratee(iteratee2, 3));
      }
      var groupBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty.call(result2, key)) {
          result2[key].push(value);
        } else {
          baseAssignValue(result2, key, [value]);
        }
      });
      function includes(collection, value, fromIndex, guard) {
        collection = isArrayLike(collection) ? collection : values(collection);
        fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
        var length = collection.length;
        if (fromIndex < 0) {
          fromIndex = nativeMax(length + fromIndex, 0);
        }
        return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
      }
      var invokeMap = baseRest(function(collection, path, args) {
        var index2 = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value) {
          result2[++index2] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
        });
        return result2;
      });
      var keyBy = createAggregator(function(result2, value, key) {
        baseAssignValue(result2, key, value);
      });
      function map(collection, iteratee2) {
        var func = isArray(collection) ? arrayMap : baseMap;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function orderBy(collection, iteratees, orders, guard) {
        if (collection == null) {
          return [];
        }
        if (!isArray(iteratees)) {
          iteratees = iteratees == null ? [] : [iteratees];
        }
        orders = guard ? undefined$1 : orders;
        if (!isArray(orders)) {
          orders = orders == null ? [] : [orders];
        }
        return baseOrderBy(collection, iteratees, orders);
      }
      var partition = createAggregator(function(result2, value, key) {
        result2[key ? 0 : 1].push(value);
      }, function() {
        return [[], []];
      });
      function reduce(collection, iteratee2, accumulator) {
        var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
      }
      function reduceRight(collection, iteratee2, accumulator) {
        var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
      }
      function reject(collection, predicate) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        return func(collection, negate(getIteratee(predicate, 3)));
      }
      function sample(collection) {
        var func = isArray(collection) ? arraySample : baseSample;
        return func(collection);
      }
      function sampleSize(collection, n, guard) {
        if (guard ? isIterateeCall(collection, n, guard) : n === undefined$1) {
          n = 1;
        } else {
          n = toInteger(n);
        }
        var func = isArray(collection) ? arraySampleSize : baseSampleSize;
        return func(collection, n);
      }
      function shuffle(collection) {
        var func = isArray(collection) ? arrayShuffle : baseShuffle;
        return func(collection);
      }
      function size(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike(collection)) {
          return isString(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag(collection);
        if (tag == mapTag || tag == setTag) {
          return collection.size;
        }
        return baseKeys(collection).length;
      }
      function some(collection, predicate, guard) {
        var func = isArray(collection) ? arraySome : baseSome;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      var sortBy = baseRest(function(collection, iteratees) {
        if (collection == null) {
          return [];
        }
        var length = iteratees.length;
        if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
          iteratees = [];
        } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
          iteratees = [iteratees[0]];
        }
        return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
      });
      var now = ctxNow || function() {
        return root.Date.now();
      };
      function after(n, func) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n = toInteger(n);
        return function() {
          if (--n < 1) {
            return func.apply(this, arguments);
          }
        };
      }
      function ary(func, n, guard) {
        n = guard ? undefined$1 : n;
        n = func && n == null ? func.length : n;
        return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
      }
      function before(n, func) {
        var result2;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n = toInteger(n);
        return function() {
          if (--n > 0) {
            result2 = func.apply(this, arguments);
          }
          if (n <= 1) {
            func = undefined$1;
          }
          return result2;
        };
      }
      var bind = baseRest(function(func, thisArg, partials) {
        var bitmask = WRAP_BIND_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bind));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(func, bitmask, thisArg, partials, holders);
      });
      var bindKey = baseRest(function(object, key, partials) {
        var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bindKey));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(key, bitmask, object, partials, holders);
      });
      function curry(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curry.placeholder;
        return result2;
      }
      function curryRight(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curryRight.placeholder;
        return result2;
      }
      function debounce(func, wait, options) {
        var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = undefined$1;
          lastInvokeTime = time;
          result2 = func.apply(thisArg, args);
          return result2;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout2(timerExpired, wait);
          return leading ? invokeFunc(time) : result2;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout2(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = undefined$1;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined$1;
          return result2;
        }
        function cancel() {
          if (timerId !== undefined$1) {
            clearTimeout2(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined$1;
        }
        function flush() {
          return timerId === undefined$1 ? result2 : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === undefined$1) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout2(timerId);
              timerId = setTimeout2(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined$1) {
            timerId = setTimeout2(timerExpired, wait);
          }
          return result2;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      var defer = baseRest(function(func, args) {
        return baseDelay(func, 1, args);
      });
      var delay = baseRest(function(func, wait, args) {
        return baseDelay(func, toNumber(wait) || 0, args);
      });
      function flip(func) {
        return createWrap(func, WRAP_FLIP_FLAG);
      }
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result2 = func.apply(this, args);
          memoized.cache = cache.set(key, result2) || cache;
          return result2;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      function once(func) {
        return before(2, func);
      }
      var overArgs = castRest(function(func, transforms) {
        transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
        var funcsLength = transforms.length;
        return baseRest(function(args) {
          var index2 = -1, length = nativeMin(args.length, funcsLength);
          while (++index2 < length) {
            args[index2] = transforms[index2].call(this, args[index2]);
          }
          return apply(func, this, args);
        });
      });
      var partial = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partial));
        return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
      });
      var partialRight = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partialRight));
        return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
      });
      var rearg = flatRest(function(func, indexes) {
        return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
      });
      function rest(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start = start === undefined$1 ? start : toInteger(start);
        return baseRest(func, start);
      }
      function spread(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start = start == null ? 0 : nativeMax(toInteger(start), 0);
        return baseRest(function(args) {
          var array = args[start], otherArgs = castSlice(args, 0, start);
          if (array) {
            arrayPush(otherArgs, array);
          }
          return apply(func, this, otherArgs);
        });
      }
      function throttle(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      function unary(func) {
        return ary(func, 1);
      }
      function wrap(value, wrapper) {
        return partial(castFunction(wrapper), value);
      }
      function castArray() {
        if (!arguments.length) {
          return [];
        }
        var value = arguments[0];
        return isArray(value) ? value : [value];
      }
      function clone(value) {
        return baseClone(value, CLONE_SYMBOLS_FLAG);
      }
      function cloneWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
      }
      function cloneDeep(value) {
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
      }
      function cloneDeepWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
      }
      function conformsTo(object, source) {
        return source == null || baseConformsTo(object, source, keys(source));
      }
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      var gt = createRelationalOperation(baseGt);
      var gte = createRelationalOperation(function(value, other) {
        return value >= other;
      });
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      var isArray = Array2.isArray;
      var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      function isBoolean(value) {
        return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
      }
      var isBuffer = nativeIsBuffer || stubFalse;
      var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
      function isElement(value) {
        return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
      }
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
          return !value.length;
        }
        var tag = getTag(value);
        if (tag == mapTag || tag == setTag) {
          return !value.size;
        }
        if (isPrototype(value)) {
          return !baseKeys(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      function isEqual(value, other) {
        return baseIsEqual(value, other);
      }
      function isEqualWith(value, other, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        var result2 = customizer ? customizer(value, other) : undefined$1;
        return result2 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result2;
      }
      function isError(value) {
        if (!isObjectLike(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
      }
      function isFinite2(value) {
        return typeof value == "number" && nativeIsFinite(value);
      }
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      function isInteger(value) {
        return typeof value == "number" && value == toInteger(value);
      }
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
      function isMatch(object, source) {
        return object === source || baseIsMatch(object, source, getMatchData(source));
      }
      function isMatchWith(object, source, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseIsMatch(object, source, getMatchData(source), customizer);
      }
      function isNaN2(value) {
        return isNumber(value) && value != +value;
      }
      function isNative(value) {
        if (isMaskable(value)) {
          throw new Error2(CORE_ERROR_TEXT);
        }
        return baseIsNative(value);
      }
      function isNull(value) {
        return value === null;
      }
      function isNil(value) {
        return value == null;
      }
      function isNumber(value) {
        return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
      }
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
      function isSafeInteger(value) {
        return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
      }
      var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
      function isString(value) {
        return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      function isUndefined(value) {
        return value === undefined$1;
      }
      function isWeakMap(value) {
        return isObjectLike(value) && getTag(value) == weakMapTag;
      }
      function isWeakSet(value) {
        return isObjectLike(value) && baseGetTag(value) == weakSetTag;
      }
      var lt = createRelationalOperation(baseLt);
      var lte = createRelationalOperation(function(value, other) {
        return value <= other;
      });
      function toArray(value) {
        if (!value) {
          return [];
        }
        if (isArrayLike(value)) {
          return isString(value) ? stringToArray(value) : copyArray(value);
        }
        if (symIterator && value[symIterator]) {
          return iteratorToArray(value[symIterator]());
        }
        var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
        return func(value);
      }
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      function toInteger(value) {
        var result2 = toFinite(value), remainder = result2 % 1;
        return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
      }
      function toLength(value) {
        return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      function toPlainObject(value) {
        return copyObject(value, keysIn(value));
      }
      function toSafeInteger(value) {
        return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
      }
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      var assign = createAssigner(function(object, source) {
        if (isPrototype(source) || isArrayLike(source)) {
          copyObject(source, keys(source), object);
          return;
        }
        for (var key in source) {
          if (hasOwnProperty.call(source, key)) {
            assignValue(object, key, source[key]);
          }
        }
      });
      var assignIn = createAssigner(function(object, source) {
        copyObject(source, keysIn(source), object);
      });
      var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keysIn(source), object, customizer);
      });
      var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keys(source), object, customizer);
      });
      var at = flatRest(baseAt);
      function create(prototype, properties) {
        var result2 = baseCreate(prototype);
        return properties == null ? result2 : baseAssign(result2, properties);
      }
      var defaults = baseRest(function(object, sources) {
        object = Object2(object);
        var index2 = -1;
        var length = sources.length;
        var guard = length > 2 ? sources[2] : undefined$1;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          length = 1;
        }
        while (++index2 < length) {
          var source = sources[index2];
          var props = keysIn(source);
          var propsIndex = -1;
          var propsLength = props.length;
          while (++propsIndex < propsLength) {
            var key = props[propsIndex];
            var value = object[key];
            if (value === undefined$1 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
              object[key] = source[key];
            }
          }
        }
        return object;
      });
      var defaultsDeep = baseRest(function(args) {
        args.push(undefined$1, customDefaultsMerge);
        return apply(mergeWith, undefined$1, args);
      });
      function findKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
      }
      function findLastKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
      }
      function forIn(object, iteratee2) {
        return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
      }
      function forInRight(object, iteratee2) {
        return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
      }
      function forOwn(object, iteratee2) {
        return object && baseForOwn(object, getIteratee(iteratee2, 3));
      }
      function forOwnRight(object, iteratee2) {
        return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
      }
      function functions(object) {
        return object == null ? [] : baseFunctions(object, keys(object));
      }
      function functionsIn(object) {
        return object == null ? [] : baseFunctions(object, keysIn(object));
      }
      function get(object, path, defaultValue) {
        var result2 = object == null ? undefined$1 : baseGet(object, path);
        return result2 === undefined$1 ? defaultValue : result2;
      }
      function has(object, path) {
        return object != null && hasPath(object, path, baseHas);
      }
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      var invert = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString.call(value);
        }
        result2[value] = key;
      }, constant(identity));
      var invertBy = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString.call(value);
        }
        if (hasOwnProperty.call(result2, value)) {
          result2[value].push(key);
        } else {
          result2[value] = [key];
        }
      }, getIteratee);
      var invoke = baseRest(baseInvoke);
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      function mapKeys(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result2, iteratee2(value, key, object2), value);
        });
        return result2;
      }
      function mapValues(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result2, key, iteratee2(value, key, object2));
        });
        return result2;
      }
      var merge = createAssigner(function(object, source, srcIndex) {
        baseMerge(object, source, srcIndex);
      });
      var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
        baseMerge(object, source, srcIndex, customizer);
      });
      var omit = flatRest(function(object, paths) {
        var result2 = {};
        if (object == null) {
          return result2;
        }
        var isDeep = false;
        paths = arrayMap(paths, function(path) {
          path = castPath(path, object);
          isDeep || (isDeep = path.length > 1);
          return path;
        });
        copyObject(object, getAllKeysIn(object), result2);
        if (isDeep) {
          result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
        }
        var length = paths.length;
        while (length--) {
          baseUnset(result2, paths[length]);
        }
        return result2;
      });
      function omitBy(object, predicate) {
        return pickBy(object, negate(getIteratee(predicate)));
      }
      var pick = flatRest(function(object, paths) {
        return object == null ? {} : basePick(object, paths);
      });
      function pickBy(object, predicate) {
        if (object == null) {
          return {};
        }
        var props = arrayMap(getAllKeysIn(object), function(prop) {
          return [prop];
        });
        predicate = getIteratee(predicate);
        return basePickBy(object, props, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      function result(object, path, defaultValue) {
        path = castPath(path, object);
        var index2 = -1, length = path.length;
        if (!length) {
          length = 1;
          object = undefined$1;
        }
        while (++index2 < length) {
          var value = object == null ? undefined$1 : object[toKey(path[index2])];
          if (value === undefined$1) {
            index2 = length;
            value = defaultValue;
          }
          object = isFunction(value) ? value.call(object) : value;
        }
        return object;
      }
      function set(object, path, value) {
        return object == null ? object : baseSet(object, path, value);
      }
      function setWith(object, path, value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object == null ? object : baseSet(object, path, value, customizer);
      }
      var toPairs = createToPairs(keys);
      var toPairsIn = createToPairs(keysIn);
      function transform(object, iteratee2, accumulator) {
        var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
        iteratee2 = getIteratee(iteratee2, 4);
        if (accumulator == null) {
          var Ctor = object && object.constructor;
          if (isArrLike) {
            accumulator = isArr ? new Ctor() : [];
          } else if (isObject(object)) {
            accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
          } else {
            accumulator = {};
          }
        }
        (isArrLike ? arrayEach : baseForOwn)(object, function(value, index2, object2) {
          return iteratee2(accumulator, value, index2, object2);
        });
        return accumulator;
      }
      function unset(object, path) {
        return object == null ? true : baseUnset(object, path);
      }
      function update(object, path, updater) {
        return object == null ? object : baseUpdate(object, path, castFunction(updater));
      }
      function updateWith(object, path, updater, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
      }
      function values(object) {
        return object == null ? [] : baseValues(object, keys(object));
      }
      function valuesIn(object) {
        return object == null ? [] : baseValues(object, keysIn(object));
      }
      function clamp(number, lower, upper) {
        if (upper === undefined$1) {
          upper = lower;
          lower = undefined$1;
        }
        if (upper !== undefined$1) {
          upper = toNumber(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== undefined$1) {
          lower = toNumber(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp(toNumber(number), lower, upper);
      }
      function inRange(number, start, end) {
        start = toFinite(start);
        if (end === undefined$1) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        number = toNumber(number);
        return baseInRange(number, start, end);
      }
      function random(lower, upper, floating) {
        if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
          upper = floating = undefined$1;
        }
        if (floating === undefined$1) {
          if (typeof upper == "boolean") {
            floating = upper;
            upper = undefined$1;
          } else if (typeof lower == "boolean") {
            floating = lower;
            lower = undefined$1;
          }
        }
        if (lower === undefined$1 && upper === undefined$1) {
          lower = 0;
          upper = 1;
        } else {
          lower = toFinite(lower);
          if (upper === undefined$1) {
            upper = lower;
            lower = 0;
          } else {
            upper = toFinite(upper);
          }
        }
        if (lower > upper) {
          var temp = lower;
          lower = upper;
          upper = temp;
        }
        if (floating || lower % 1 || upper % 1) {
          var rand = nativeRandom();
          return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
        }
        return baseRandom(lower, upper);
      }
      var camelCase = createCompounder(function(result2, word, index2) {
        word = word.toLowerCase();
        return result2 + (index2 ? capitalize(word) : word);
      });
      function capitalize(string) {
        return upperFirst(toString(string).toLowerCase());
      }
      function deburr(string) {
        string = toString(string);
        return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
      }
      function endsWith(string, target, position) {
        string = toString(string);
        target = baseToString(target);
        var length = string.length;
        position = position === undefined$1 ? length : baseClamp(toInteger(position), 0, length);
        var end = position;
        position -= target.length;
        return position >= 0 && string.slice(position, end) == target;
      }
      function escape(string) {
        string = toString(string);
        return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
      }
      function escapeRegExp(string) {
        string = toString(string);
        return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
      }
      var kebabCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? "-" : "") + word.toLowerCase();
      });
      var lowerCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? " " : "") + word.toLowerCase();
      });
      var lowerFirst = createCaseFirst("toLowerCase");
      function pad(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        if (!length || strLength >= length) {
          return string;
        }
        var mid = (length - strLength) / 2;
        return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
      }
      function padEnd(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
      }
      function padStart(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
      }
      function parseInt2(string, radix, guard) {
        if (guard || radix == null) {
          radix = 0;
        } else if (radix) {
          radix = +radix;
        }
        return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
      }
      function repeat(string, n, guard) {
        if (guard ? isIterateeCall(string, n, guard) : n === undefined$1) {
          n = 1;
        } else {
          n = toInteger(n);
        }
        return baseRepeat(toString(string), n);
      }
      function replace() {
        var args = arguments, string = toString(args[0]);
        return args.length < 3 ? string : string.replace(args[1], args[2]);
      }
      var snakeCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? "_" : "") + word.toLowerCase();
      });
      function split(string, separator, limit) {
        if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
          separator = limit = undefined$1;
        }
        limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
        if (!limit) {
          return [];
        }
        string = toString(string);
        if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
          separator = baseToString(separator);
          if (!separator && hasUnicode(string)) {
            return castSlice(stringToArray(string), 0, limit);
          }
        }
        return string.split(separator, limit);
      }
      var startCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? " " : "") + upperFirst(word);
      });
      function startsWith(string, target, position) {
        string = toString(string);
        position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
        target = baseToString(target);
        return string.slice(position, position + target.length) == target;
      }
      function template(string, options, guard) {
        var settings = lodash2.templateSettings;
        if (guard && isIterateeCall(string, options, guard)) {
          options = undefined$1;
        }
        string = toString(string);
        options = assignInWith({}, options, settings, customDefaultsAssignIn);
        var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
        var isEscaping, isEvaluating, index2 = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
        var reDelimiters = RegExp2((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
        var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
        string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
          interpolateValue || (interpolateValue = esTemplateValue);
          source += string.slice(index2, offset).replace(reUnescapedString, escapeStringChar);
          if (escapeValue) {
            isEscaping = true;
            source += "' +\n__e(" + escapeValue + ") +\n'";
          }
          if (evaluateValue) {
            isEvaluating = true;
            source += "';\n" + evaluateValue + ";\n__p += '";
          }
          if (interpolateValue) {
            source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
          }
          index2 = offset + match.length;
          return match;
        });
        source += "';\n";
        var variable = hasOwnProperty.call(options, "variable") && options.variable;
        if (!variable) {
          source = "with (obj) {\n" + source + "\n}\n";
        } else if (reForbiddenIdentifierChars.test(variable)) {
          throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
        }
        source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
        source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
        var result2 = attempt(function() {
          return Function2(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
        });
        result2.source = source;
        if (isError(result2)) {
          throw result2;
        }
        return result2;
      }
      function toLower(value) {
        return toString(value).toLowerCase();
      }
      function toUpper(value) {
        return toString(value).toUpperCase();
      }
      function trim(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return baseTrim(string);
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
        return castSlice(strSymbols, start, end).join("");
      }
      function trimEnd(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return string.slice(0, trimmedEndIndex(string) + 1);
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
        return castSlice(strSymbols, 0, end).join("");
      }
      function trimStart(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return string.replace(reTrimStart, "");
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
        return castSlice(strSymbols, start).join("");
      }
      function truncate(string, options) {
        var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
        if (isObject(options)) {
          var separator = "separator" in options ? options.separator : separator;
          length = "length" in options ? toInteger(options.length) : length;
          omission = "omission" in options ? baseToString(options.omission) : omission;
        }
        string = toString(string);
        var strLength = string.length;
        if (hasUnicode(string)) {
          var strSymbols = stringToArray(string);
          strLength = strSymbols.length;
        }
        if (length >= strLength) {
          return string;
        }
        var end = length - stringSize(omission);
        if (end < 1) {
          return omission;
        }
        var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
        if (separator === undefined$1) {
          return result2 + omission;
        }
        if (strSymbols) {
          end += result2.length - end;
        }
        if (isRegExp(separator)) {
          if (string.slice(end).search(separator)) {
            var match, substring = result2;
            if (!separator.global) {
              separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
            }
            separator.lastIndex = 0;
            while (match = separator.exec(substring)) {
              var newEnd = match.index;
            }
            result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
          }
        } else if (string.indexOf(baseToString(separator), end) != end) {
          var index2 = result2.lastIndexOf(separator);
          if (index2 > -1) {
            result2 = result2.slice(0, index2);
          }
        }
        return result2 + omission;
      }
      function unescape2(string) {
        string = toString(string);
        return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
      }
      var upperCase = createCompounder(function(result2, word, index2) {
        return result2 + (index2 ? " " : "") + word.toUpperCase();
      });
      var upperFirst = createCaseFirst("toUpperCase");
      function words(string, pattern, guard) {
        string = toString(string);
        pattern = guard ? undefined$1 : pattern;
        if (pattern === undefined$1) {
          return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
        }
        return string.match(pattern) || [];
      }
      var attempt = baseRest(function(func, args) {
        try {
          return apply(func, undefined$1, args);
        } catch (e) {
          return isError(e) ? e : new Error2(e);
        }
      });
      var bindAll = flatRest(function(object, methodNames) {
        arrayEach(methodNames, function(key) {
          key = toKey(key);
          baseAssignValue(object, key, bind(object[key], object));
        });
        return object;
      });
      function cond(pairs) {
        var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
        pairs = !length ? [] : arrayMap(pairs, function(pair) {
          if (typeof pair[1] != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return [toIteratee(pair[0]), pair[1]];
        });
        return baseRest(function(args) {
          var index2 = -1;
          while (++index2 < length) {
            var pair = pairs[index2];
            if (apply(pair[0], this, args)) {
              return apply(pair[1], this, args);
            }
          }
        });
      }
      function conforms(source) {
        return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
      }
      function constant(value) {
        return function() {
          return value;
        };
      }
      function defaultTo(value, defaultValue) {
        return value == null || value !== value ? defaultValue : value;
      }
      var flow = createFlow();
      var flowRight = createFlow(true);
      function identity(value) {
        return value;
      }
      function iteratee(func) {
        return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
      }
      function matches(source) {
        return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
      }
      function matchesProperty(path, srcValue) {
        return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
      }
      var method = baseRest(function(path, args) {
        return function(object) {
          return baseInvoke(object, path, args);
        };
      });
      var methodOf = baseRest(function(object, args) {
        return function(path) {
          return baseInvoke(object, path, args);
        };
      });
      function mixin(object, source, options) {
        var props = keys(source), methodNames = baseFunctions(source, props);
        if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
          options = source;
          source = object;
          object = this;
          methodNames = baseFunctions(source, keys(source));
        }
        var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
        arrayEach(methodNames, function(methodName) {
          var func = source[methodName];
          object[methodName] = func;
          if (isFunc) {
            object.prototype[methodName] = function() {
              var chainAll = this.__chain__;
              if (chain2 || chainAll) {
                var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                actions.push({ "func": func, "args": arguments, "thisArg": object });
                result2.__chain__ = chainAll;
                return result2;
              }
              return func.apply(object, arrayPush([this.value()], arguments));
            };
          }
        });
        return object;
      }
      function noConflict() {
        if (root._ === this) {
          root._ = oldDash;
        }
        return this;
      }
      function noop() {
      }
      function nthArg(n) {
        n = toInteger(n);
        return baseRest(function(args) {
          return baseNth(args, n);
        });
      }
      var over = createOver(arrayMap);
      var overEvery = createOver(arrayEvery);
      var overSome = createOver(arraySome);
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      function propertyOf(object) {
        return function(path) {
          return object == null ? undefined$1 : baseGet(object, path);
        };
      }
      var range = createRange();
      var rangeRight = createRange(true);
      function stubArray() {
        return [];
      }
      function stubFalse() {
        return false;
      }
      function stubObject() {
        return {};
      }
      function stubString() {
        return "";
      }
      function stubTrue() {
        return true;
      }
      function times(n, iteratee2) {
        n = toInteger(n);
        if (n < 1 || n > MAX_SAFE_INTEGER) {
          return [];
        }
        var index2 = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
        iteratee2 = getIteratee(iteratee2);
        n -= MAX_ARRAY_LENGTH;
        var result2 = baseTimes(length, iteratee2);
        while (++index2 < n) {
          iteratee2(index2);
        }
        return result2;
      }
      function toPath(value) {
        if (isArray(value)) {
          return arrayMap(value, toKey);
        }
        return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
      }
      function uniqueId(prefix) {
        var id = ++idCounter;
        return toString(prefix) + id;
      }
      var add = createMathOperation(function(augend, addend) {
        return augend + addend;
      }, 0);
      var ceil = createRound("ceil");
      var divide = createMathOperation(function(dividend, divisor) {
        return dividend / divisor;
      }, 1);
      var floor = createRound("floor");
      function max(array) {
        return array && array.length ? baseExtremum(array, identity, baseGt) : undefined$1;
      }
      function maxBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined$1;
      }
      function mean(array) {
        return baseMean(array, identity);
      }
      function meanBy(array, iteratee2) {
        return baseMean(array, getIteratee(iteratee2, 2));
      }
      function min(array) {
        return array && array.length ? baseExtremum(array, identity, baseLt) : undefined$1;
      }
      function minBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined$1;
      }
      var multiply = createMathOperation(function(multiplier, multiplicand) {
        return multiplier * multiplicand;
      }, 1);
      var round = createRound("round");
      var subtract = createMathOperation(function(minuend, subtrahend) {
        return minuend - subtrahend;
      }, 0);
      function sum(array) {
        return array && array.length ? baseSum(array, identity) : 0;
      }
      function sumBy(array, iteratee2) {
        return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
      }
      lodash2.after = after;
      lodash2.ary = ary;
      lodash2.assign = assign;
      lodash2.assignIn = assignIn;
      lodash2.assignInWith = assignInWith;
      lodash2.assignWith = assignWith;
      lodash2.at = at;
      lodash2.before = before;
      lodash2.bind = bind;
      lodash2.bindAll = bindAll;
      lodash2.bindKey = bindKey;
      lodash2.castArray = castArray;
      lodash2.chain = chain;
      lodash2.chunk = chunk;
      lodash2.compact = compact;
      lodash2.concat = concat;
      lodash2.cond = cond;
      lodash2.conforms = conforms;
      lodash2.constant = constant;
      lodash2.countBy = countBy;
      lodash2.create = create;
      lodash2.curry = curry;
      lodash2.curryRight = curryRight;
      lodash2.debounce = debounce;
      lodash2.defaults = defaults;
      lodash2.defaultsDeep = defaultsDeep;
      lodash2.defer = defer;
      lodash2.delay = delay;
      lodash2.difference = difference;
      lodash2.differenceBy = differenceBy;
      lodash2.differenceWith = differenceWith;
      lodash2.drop = drop;
      lodash2.dropRight = dropRight;
      lodash2.dropRightWhile = dropRightWhile;
      lodash2.dropWhile = dropWhile;
      lodash2.fill = fill;
      lodash2.filter = filter;
      lodash2.flatMap = flatMap;
      lodash2.flatMapDeep = flatMapDeep;
      lodash2.flatMapDepth = flatMapDepth;
      lodash2.flatten = flatten;
      lodash2.flattenDeep = flattenDeep;
      lodash2.flattenDepth = flattenDepth;
      lodash2.flip = flip;
      lodash2.flow = flow;
      lodash2.flowRight = flowRight;
      lodash2.fromPairs = fromPairs;
      lodash2.functions = functions;
      lodash2.functionsIn = functionsIn;
      lodash2.groupBy = groupBy;
      lodash2.initial = initial;
      lodash2.intersection = intersection;
      lodash2.intersectionBy = intersectionBy;
      lodash2.intersectionWith = intersectionWith;
      lodash2.invert = invert;
      lodash2.invertBy = invertBy;
      lodash2.invokeMap = invokeMap;
      lodash2.iteratee = iteratee;
      lodash2.keyBy = keyBy;
      lodash2.keys = keys;
      lodash2.keysIn = keysIn;
      lodash2.map = map;
      lodash2.mapKeys = mapKeys;
      lodash2.mapValues = mapValues;
      lodash2.matches = matches;
      lodash2.matchesProperty = matchesProperty;
      lodash2.memoize = memoize;
      lodash2.merge = merge;
      lodash2.mergeWith = mergeWith;
      lodash2.method = method;
      lodash2.methodOf = methodOf;
      lodash2.mixin = mixin;
      lodash2.negate = negate;
      lodash2.nthArg = nthArg;
      lodash2.omit = omit;
      lodash2.omitBy = omitBy;
      lodash2.once = once;
      lodash2.orderBy = orderBy;
      lodash2.over = over;
      lodash2.overArgs = overArgs;
      lodash2.overEvery = overEvery;
      lodash2.overSome = overSome;
      lodash2.partial = partial;
      lodash2.partialRight = partialRight;
      lodash2.partition = partition;
      lodash2.pick = pick;
      lodash2.pickBy = pickBy;
      lodash2.property = property;
      lodash2.propertyOf = propertyOf;
      lodash2.pull = pull;
      lodash2.pullAll = pullAll;
      lodash2.pullAllBy = pullAllBy;
      lodash2.pullAllWith = pullAllWith;
      lodash2.pullAt = pullAt;
      lodash2.range = range;
      lodash2.rangeRight = rangeRight;
      lodash2.rearg = rearg;
      lodash2.reject = reject;
      lodash2.remove = remove;
      lodash2.rest = rest;
      lodash2.reverse = reverse;
      lodash2.sampleSize = sampleSize;
      lodash2.set = set;
      lodash2.setWith = setWith;
      lodash2.shuffle = shuffle;
      lodash2.slice = slice;
      lodash2.sortBy = sortBy;
      lodash2.sortedUniq = sortedUniq;
      lodash2.sortedUniqBy = sortedUniqBy;
      lodash2.split = split;
      lodash2.spread = spread;
      lodash2.tail = tail;
      lodash2.take = take;
      lodash2.takeRight = takeRight;
      lodash2.takeRightWhile = takeRightWhile;
      lodash2.takeWhile = takeWhile;
      lodash2.tap = tap;
      lodash2.throttle = throttle;
      lodash2.thru = thru;
      lodash2.toArray = toArray;
      lodash2.toPairs = toPairs;
      lodash2.toPairsIn = toPairsIn;
      lodash2.toPath = toPath;
      lodash2.toPlainObject = toPlainObject;
      lodash2.transform = transform;
      lodash2.unary = unary;
      lodash2.union = union;
      lodash2.unionBy = unionBy;
      lodash2.unionWith = unionWith;
      lodash2.uniq = uniq;
      lodash2.uniqBy = uniqBy;
      lodash2.uniqWith = uniqWith;
      lodash2.unset = unset;
      lodash2.unzip = unzip;
      lodash2.unzipWith = unzipWith;
      lodash2.update = update;
      lodash2.updateWith = updateWith;
      lodash2.values = values;
      lodash2.valuesIn = valuesIn;
      lodash2.without = without;
      lodash2.words = words;
      lodash2.wrap = wrap;
      lodash2.xor = xor;
      lodash2.xorBy = xorBy;
      lodash2.xorWith = xorWith;
      lodash2.zip = zip;
      lodash2.zipObject = zipObject;
      lodash2.zipObjectDeep = zipObjectDeep;
      lodash2.zipWith = zipWith;
      lodash2.entries = toPairs;
      lodash2.entriesIn = toPairsIn;
      lodash2.extend = assignIn;
      lodash2.extendWith = assignInWith;
      mixin(lodash2, lodash2);
      lodash2.add = add;
      lodash2.attempt = attempt;
      lodash2.camelCase = camelCase;
      lodash2.capitalize = capitalize;
      lodash2.ceil = ceil;
      lodash2.clamp = clamp;
      lodash2.clone = clone;
      lodash2.cloneDeep = cloneDeep;
      lodash2.cloneDeepWith = cloneDeepWith;
      lodash2.cloneWith = cloneWith;
      lodash2.conformsTo = conformsTo;
      lodash2.deburr = deburr;
      lodash2.defaultTo = defaultTo;
      lodash2.divide = divide;
      lodash2.endsWith = endsWith;
      lodash2.eq = eq;
      lodash2.escape = escape;
      lodash2.escapeRegExp = escapeRegExp;
      lodash2.every = every;
      lodash2.find = find;
      lodash2.findIndex = findIndex;
      lodash2.findKey = findKey;
      lodash2.findLast = findLast;
      lodash2.findLastIndex = findLastIndex;
      lodash2.findLastKey = findLastKey;
      lodash2.floor = floor;
      lodash2.forEach = forEach;
      lodash2.forEachRight = forEachRight;
      lodash2.forIn = forIn;
      lodash2.forInRight = forInRight;
      lodash2.forOwn = forOwn;
      lodash2.forOwnRight = forOwnRight;
      lodash2.get = get;
      lodash2.gt = gt;
      lodash2.gte = gte;
      lodash2.has = has;
      lodash2.hasIn = hasIn;
      lodash2.head = head;
      lodash2.identity = identity;
      lodash2.includes = includes;
      lodash2.indexOf = indexOf;
      lodash2.inRange = inRange;
      lodash2.invoke = invoke;
      lodash2.isArguments = isArguments;
      lodash2.isArray = isArray;
      lodash2.isArrayBuffer = isArrayBuffer;
      lodash2.isArrayLike = isArrayLike;
      lodash2.isArrayLikeObject = isArrayLikeObject;
      lodash2.isBoolean = isBoolean;
      lodash2.isBuffer = isBuffer;
      lodash2.isDate = isDate;
      lodash2.isElement = isElement;
      lodash2.isEmpty = isEmpty;
      lodash2.isEqual = isEqual;
      lodash2.isEqualWith = isEqualWith;
      lodash2.isError = isError;
      lodash2.isFinite = isFinite2;
      lodash2.isFunction = isFunction;
      lodash2.isInteger = isInteger;
      lodash2.isLength = isLength;
      lodash2.isMap = isMap;
      lodash2.isMatch = isMatch;
      lodash2.isMatchWith = isMatchWith;
      lodash2.isNaN = isNaN2;
      lodash2.isNative = isNative;
      lodash2.isNil = isNil;
      lodash2.isNull = isNull;
      lodash2.isNumber = isNumber;
      lodash2.isObject = isObject;
      lodash2.isObjectLike = isObjectLike;
      lodash2.isPlainObject = isPlainObject;
      lodash2.isRegExp = isRegExp;
      lodash2.isSafeInteger = isSafeInteger;
      lodash2.isSet = isSet;
      lodash2.isString = isString;
      lodash2.isSymbol = isSymbol;
      lodash2.isTypedArray = isTypedArray;
      lodash2.isUndefined = isUndefined;
      lodash2.isWeakMap = isWeakMap;
      lodash2.isWeakSet = isWeakSet;
      lodash2.join = join;
      lodash2.kebabCase = kebabCase;
      lodash2.last = last;
      lodash2.lastIndexOf = lastIndexOf;
      lodash2.lowerCase = lowerCase;
      lodash2.lowerFirst = lowerFirst;
      lodash2.lt = lt;
      lodash2.lte = lte;
      lodash2.max = max;
      lodash2.maxBy = maxBy;
      lodash2.mean = mean;
      lodash2.meanBy = meanBy;
      lodash2.min = min;
      lodash2.minBy = minBy;
      lodash2.stubArray = stubArray;
      lodash2.stubFalse = stubFalse;
      lodash2.stubObject = stubObject;
      lodash2.stubString = stubString;
      lodash2.stubTrue = stubTrue;
      lodash2.multiply = multiply;
      lodash2.nth = nth;
      lodash2.noConflict = noConflict;
      lodash2.noop = noop;
      lodash2.now = now;
      lodash2.pad = pad;
      lodash2.padEnd = padEnd;
      lodash2.padStart = padStart;
      lodash2.parseInt = parseInt2;
      lodash2.random = random;
      lodash2.reduce = reduce;
      lodash2.reduceRight = reduceRight;
      lodash2.repeat = repeat;
      lodash2.replace = replace;
      lodash2.result = result;
      lodash2.round = round;
      lodash2.runInContext = runInContext2;
      lodash2.sample = sample;
      lodash2.size = size;
      lodash2.snakeCase = snakeCase;
      lodash2.some = some;
      lodash2.sortedIndex = sortedIndex;
      lodash2.sortedIndexBy = sortedIndexBy;
      lodash2.sortedIndexOf = sortedIndexOf;
      lodash2.sortedLastIndex = sortedLastIndex;
      lodash2.sortedLastIndexBy = sortedLastIndexBy;
      lodash2.sortedLastIndexOf = sortedLastIndexOf;
      lodash2.startCase = startCase;
      lodash2.startsWith = startsWith;
      lodash2.subtract = subtract;
      lodash2.sum = sum;
      lodash2.sumBy = sumBy;
      lodash2.template = template;
      lodash2.times = times;
      lodash2.toFinite = toFinite;
      lodash2.toInteger = toInteger;
      lodash2.toLength = toLength;
      lodash2.toLower = toLower;
      lodash2.toNumber = toNumber;
      lodash2.toSafeInteger = toSafeInteger;
      lodash2.toString = toString;
      lodash2.toUpper = toUpper;
      lodash2.trim = trim;
      lodash2.trimEnd = trimEnd;
      lodash2.trimStart = trimStart;
      lodash2.truncate = truncate;
      lodash2.unescape = unescape2;
      lodash2.uniqueId = uniqueId;
      lodash2.upperCase = upperCase;
      lodash2.upperFirst = upperFirst;
      lodash2.each = forEach;
      lodash2.eachRight = forEachRight;
      lodash2.first = head;
      mixin(lodash2, function() {
        var source = {};
        baseForOwn(lodash2, function(func, methodName) {
          if (!hasOwnProperty.call(lodash2.prototype, methodName)) {
            source[methodName] = func;
          }
        });
        return source;
      }(), { "chain": false });
      lodash2.VERSION = VERSION;
      arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
        lodash2[methodName].placeholder = lodash2;
      });
      arrayEach(["drop", "take"], function(methodName, index2) {
        LazyWrapper.prototype[methodName] = function(n) {
          n = n === undefined$1 ? 1 : nativeMax(toInteger(n), 0);
          var result2 = this.__filtered__ && !index2 ? new LazyWrapper(this) : this.clone();
          if (result2.__filtered__) {
            result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
          } else {
            result2.__views__.push({
              "size": nativeMin(n, MAX_ARRAY_LENGTH),
              "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
            });
          }
          return result2;
        };
        LazyWrapper.prototype[methodName + "Right"] = function(n) {
          return this.reverse()[methodName](n).reverse();
        };
      });
      arrayEach(["filter", "map", "takeWhile"], function(methodName, index2) {
        var type = index2 + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
        LazyWrapper.prototype[methodName] = function(iteratee2) {
          var result2 = this.clone();
          result2.__iteratees__.push({
            "iteratee": getIteratee(iteratee2, 3),
            "type": type
          });
          result2.__filtered__ = result2.__filtered__ || isFilter;
          return result2;
        };
      });
      arrayEach(["head", "last"], function(methodName, index2) {
        var takeName = "take" + (index2 ? "Right" : "");
        LazyWrapper.prototype[methodName] = function() {
          return this[takeName](1).value()[0];
        };
      });
      arrayEach(["initial", "tail"], function(methodName, index2) {
        var dropName = "drop" + (index2 ? "" : "Right");
        LazyWrapper.prototype[methodName] = function() {
          return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
        };
      });
      LazyWrapper.prototype.compact = function() {
        return this.filter(identity);
      };
      LazyWrapper.prototype.find = function(predicate) {
        return this.filter(predicate).head();
      };
      LazyWrapper.prototype.findLast = function(predicate) {
        return this.reverse().find(predicate);
      };
      LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
        if (typeof path == "function") {
          return new LazyWrapper(this);
        }
        return this.map(function(value) {
          return baseInvoke(value, path, args);
        });
      });
      LazyWrapper.prototype.reject = function(predicate) {
        return this.filter(negate(getIteratee(predicate)));
      };
      LazyWrapper.prototype.slice = function(start, end) {
        start = toInteger(start);
        var result2 = this;
        if (result2.__filtered__ && (start > 0 || end < 0)) {
          return new LazyWrapper(result2);
        }
        if (start < 0) {
          result2 = result2.takeRight(-start);
        } else if (start) {
          result2 = result2.drop(start);
        }
        if (end !== undefined$1) {
          end = toInteger(end);
          result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
        }
        return result2;
      };
      LazyWrapper.prototype.takeRightWhile = function(predicate) {
        return this.reverse().takeWhile(predicate).reverse();
      };
      LazyWrapper.prototype.toArray = function() {
        return this.take(MAX_ARRAY_LENGTH);
      };
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
        if (!lodashFunc) {
          return;
        }
        lodash2.prototype[methodName] = function() {
          var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
          var interceptor = function(value2) {
            var result3 = lodashFunc.apply(lodash2, arrayPush([value2], args));
            return isTaker && chainAll ? result3[0] : result3;
          };
          if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
            isLazy = useLazy = false;
          }
          var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
          if (!retUnwrapped && useLazy) {
            value = onlyLazy ? value : new LazyWrapper(this);
            var result2 = func.apply(value, args);
            result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
            return new LodashWrapper(result2, chainAll);
          }
          if (isUnwrapped && onlyLazy) {
            return func.apply(this, args);
          }
          result2 = this.thru(interceptor);
          return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
        };
      });
      arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
        var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
        lodash2.prototype[methodName] = function() {
          var args = arguments;
          if (retUnwrapped && !this.__chain__) {
            var value = this.value();
            return func.apply(isArray(value) ? value : [], args);
          }
          return this[chainName](function(value2) {
            return func.apply(isArray(value2) ? value2 : [], args);
          });
        };
      });
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var lodashFunc = lodash2[methodName];
        if (lodashFunc) {
          var key = lodashFunc.name + "";
          if (!hasOwnProperty.call(realNames, key)) {
            realNames[key] = [];
          }
          realNames[key].push({ "name": methodName, "func": lodashFunc });
        }
      });
      realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
        "name": "wrapper",
        "func": undefined$1
      }];
      LazyWrapper.prototype.clone = lazyClone;
      LazyWrapper.prototype.reverse = lazyReverse;
      LazyWrapper.prototype.value = lazyValue;
      lodash2.prototype.at = wrapperAt;
      lodash2.prototype.chain = wrapperChain;
      lodash2.prototype.commit = wrapperCommit;
      lodash2.prototype.next = wrapperNext;
      lodash2.prototype.plant = wrapperPlant;
      lodash2.prototype.reverse = wrapperReverse;
      lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
      lodash2.prototype.first = lodash2.prototype.head;
      if (symIterator) {
        lodash2.prototype[symIterator] = wrapperToIterator;
      }
      return lodash2;
    };
    var _ = runInContext();
    if (freeModule) {
      (freeModule.exports = _)._ = _;
      freeExports._ = _;
    } else {
      root._ = _;
    }
  }).call(commonjsGlobal);
})(lodash, lodash.exports);
var wangEditor = { exports: {} };
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(window, function() {
    return function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, { enumerable: true, get: getter });
        }
      };
      __webpack_require__.r = function(exports2) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports2, "__esModule", { value: true });
      };
      __webpack_require__.t = function(value, mode) {
        if (mode & 1)
          value = __webpack_require__(value);
        if (mode & 8)
          return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
          return value;
        var ns = /* @__PURE__ */ Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", { enumerable: true, value });
        if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(ns, key, function(key2) {
              return value[key2];
            }.bind(null, key));
        return ns;
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? function getDefault() {
          return module2["default"];
        } : function getModuleExports() {
          return module2;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = 141);
    }([
      function(module2, exports2) {
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            "default": obj
          };
        }
        module2.exports = _interopRequireDefault;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(142);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "__extends", function() {
          return __extends;
        });
        __webpack_require__.d(__webpack_exports__, "__assign", function() {
          return __assign;
        });
        __webpack_require__.d(__webpack_exports__, "__rest", function() {
          return __rest;
        });
        __webpack_require__.d(__webpack_exports__, "__decorate", function() {
          return __decorate;
        });
        __webpack_require__.d(__webpack_exports__, "__param", function() {
          return __param;
        });
        __webpack_require__.d(__webpack_exports__, "__metadata", function() {
          return __metadata;
        });
        __webpack_require__.d(__webpack_exports__, "__awaiter", function() {
          return __awaiter;
        });
        __webpack_require__.d(__webpack_exports__, "__generator", function() {
          return __generator;
        });
        __webpack_require__.d(__webpack_exports__, "__createBinding", function() {
          return __createBinding;
        });
        __webpack_require__.d(__webpack_exports__, "__exportStar", function() {
          return __exportStar;
        });
        __webpack_require__.d(__webpack_exports__, "__values", function() {
          return __values;
        });
        __webpack_require__.d(__webpack_exports__, "__read", function() {
          return __read;
        });
        __webpack_require__.d(__webpack_exports__, "__spread", function() {
          return __spread;
        });
        __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() {
          return __spreadArrays;
        });
        __webpack_require__.d(__webpack_exports__, "__spreadArray", function() {
          return __spreadArray;
        });
        __webpack_require__.d(__webpack_exports__, "__await", function() {
          return __await;
        });
        __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() {
          return __asyncGenerator;
        });
        __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() {
          return __asyncDelegator;
        });
        __webpack_require__.d(__webpack_exports__, "__asyncValues", function() {
          return __asyncValues;
        });
        __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() {
          return __makeTemplateObject;
        });
        __webpack_require__.d(__webpack_exports__, "__importStar", function() {
          return __importStar;
        });
        __webpack_require__.d(__webpack_exports__, "__importDefault", function() {
          return __importDefault;
        });
        __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() {
          return __classPrivateFieldGet;
        });
        __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() {
          return __classPrivateFieldSet;
        });
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
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        function __extends(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }
        var __assign = function() {
          __assign = Object.assign || function __assign2(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                  t[p] = s[p];
            }
            return t;
          };
          return __assign.apply(this, arguments);
        };
        function __rest(s, e) {
          var t = {};
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        }
        function __param(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        }
        function __metadata(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        }
        function __awaiter(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        }
        function __generator(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        }
        var __createBinding = Object.create ? function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          Object.defineProperty(o, k2, { enumerable: true, get: function() {
            return m[k];
          } });
        } : function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          o[k2] = m[k];
        };
        function __exportStar(m, o) {
          for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding(o, m, p);
        }
        function __values(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
          if (m)
            return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function() {
                if (o && i >= o.length)
                  o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function __read(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
            return o;
          var i = m.call(o), r, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error };
          } finally {
            try {
              if (r && !r.done && (m = i["return"]))
                m.call(i);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        }
        function __spread() {
          for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
          return ar;
        }
        function __spreadArrays() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
          return r;
        }
        function __spreadArray(to, from) {
          for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
          return to;
        }
        function __await(v) {
          return this instanceof __await ? (this.v = v, this) : new __await(v);
        }
        function __asyncGenerator(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i, q = [];
          return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function verb(n) {
            if (g[n])
              i[n] = function(v) {
                return new Promise(function(a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
                });
              };
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v) {
            if (f(v), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        }
        function __asyncDelegator(o) {
          var i, p;
          return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i[Symbol.iterator] = function() {
            return this;
          }, i;
          function verb(n, f) {
            i[n] = o[n] ? function(v) {
              return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
            } : f;
          }
        }
        function __asyncValues(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i;
          return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i);
          function verb(n) {
            i[n] = o[n] && function(v) {
              return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v2) {
              resolve({ value: v2, done: d });
            }, reject);
          }
        }
        function __makeTemplateObject(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        }
        var __setModuleDefault = Object.create ? function(o, v) {
          Object.defineProperty(o, "default", { enumerable: true, value: v });
        } : function(o, v) {
          o["default"] = v;
        };
        function __importStar(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
          }
          __setModuleDefault(result, mod);
          return result;
        }
        function __importDefault(mod) {
          return mod && mod.__esModule ? mod : { default: mod };
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
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _isArray = _interopRequireDefault(__webpack_require__(89));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        var _map = _interopRequireDefault(__webpack_require__(26));
        var _trim = _interopRequireDefault(__webpack_require__(17));
        var _map2 = _interopRequireDefault(__webpack_require__(120));
        var _indexOf = _interopRequireDefault(__webpack_require__(27));
        var _splice = _interopRequireDefault(__webpack_require__(91));
        var _filter = _interopRequireDefault(__webpack_require__(70));
        var _includes = _interopRequireDefault(__webpack_require__(44));
        var _bind = _interopRequireDefault(__webpack_require__(57));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.DomElement = void 0;
        var tslib_1 = __webpack_require__(2);
        var util_1 = __webpack_require__(6);
        var AGENT_EVENTS = [];
        function _createElemByHTML(html) {
          var div = document.createElement("div");
          div.innerHTML = html;
          var elems = div.children;
          return util_1.toArray(elems);
        }
        function _isDOMList(selector) {
          if (!selector) {
            return false;
          }
          if (selector instanceof HTMLCollection || selector instanceof NodeList) {
            return true;
          }
          return false;
        }
        function _querySelectorAll(selector) {
          var elems = document.querySelectorAll(selector);
          return util_1.toArray(elems);
        }
        function _styleArrTrim(style) {
          var styleArr = [];
          var resultArr = [];
          if (!(0, _isArray["default"])(style)) {
            styleArr = style.split(";");
          } else {
            styleArr = style;
          }
          (0, _forEach["default"])(styleArr).call(styleArr, function(item) {
            var _context;
            var arr = (0, _map["default"])(_context = item.split(":")).call(_context, function(i) {
              return (0, _trim["default"])(i).call(i);
            });
            if (arr.length === 2) {
              resultArr.push(arr[0] + ":" + arr[1]);
            }
          });
          return resultArr;
        }
        var DomElement = function() {
          function DomElement2(selector) {
            this.elems = [];
            this.length = this.elems.length;
            this.dataSource = new _map2["default"]();
            if (!selector) {
              return;
            }
            if (selector instanceof DomElement2) {
              return selector;
            }
            var selectorResult = [];
            var nodeType = selector instanceof Node ? selector.nodeType : -1;
            this.selector = selector;
            if (nodeType === 1 || nodeType === 9) {
              selectorResult = [selector];
            } else if (_isDOMList(selector)) {
              selectorResult = util_1.toArray(selector);
            } else if (selector instanceof Array) {
              selectorResult = selector;
            } else if (typeof selector === "string") {
              var _context2;
              var tmpSelector = (0, _trim["default"])(_context2 = selector.replace("/\n/mg", "")).call(_context2);
              if ((0, _indexOf["default"])(tmpSelector).call(tmpSelector, "<") === 0) {
                selectorResult = _createElemByHTML(tmpSelector);
              } else {
                selectorResult = _querySelectorAll(tmpSelector);
              }
            }
            var length = selectorResult.length;
            if (!length) {
              return this;
            }
            var i = 0;
            for (; i < length; i++) {
              this.elems.push(selectorResult[i]);
            }
            this.length = length;
          }
          (0, _defineProperty["default"])(DomElement2.prototype, "id", {
            get: function get() {
              return this.elems[0].id;
            },
            enumerable: false,
            configurable: true
          });
          DomElement2.prototype.forEach = function(fn) {
            for (var i = 0; i < this.length; i++) {
              var elem = this.elems[i];
              var result = fn.call(elem, elem, i);
              if (result === false) {
                break;
              }
            }
            return this;
          };
          DomElement2.prototype.clone = function(deep) {
            var _context3;
            if (deep === void 0) {
              deep = false;
            }
            var cloneList = [];
            (0, _forEach["default"])(_context3 = this.elems).call(_context3, function(elem) {
              cloneList.push(elem.cloneNode(!!deep));
            });
            return $(cloneList);
          };
          DomElement2.prototype.get = function(index2) {
            if (index2 === void 0) {
              index2 = 0;
            }
            var length = this.length;
            if (index2 >= length) {
              index2 = index2 % length;
            }
            return $(this.elems[index2]);
          };
          DomElement2.prototype.first = function() {
            return this.get(0);
          };
          DomElement2.prototype.last = function() {
            var length = this.length;
            return this.get(length - 1);
          };
          DomElement2.prototype.on = function(type, selector, fn) {
            var _context4;
            if (!type)
              return this;
            if (typeof selector === "function") {
              fn = selector;
              selector = "";
            }
            return (0, _forEach["default"])(_context4 = this).call(_context4, function(elem) {
              if (!selector) {
                elem.addEventListener(type, fn);
                return;
              }
              var agentFn = function agentFn2(e) {
                var target = e.target;
                if (target.matches(selector)) {
                  fn.call(target, e);
                }
              };
              elem.addEventListener(type, agentFn);
              AGENT_EVENTS.push({
                elem,
                selector,
                fn,
                agentFn
              });
            });
          };
          DomElement2.prototype.off = function(type, selector, fn) {
            var _context5;
            if (!type)
              return this;
            if (typeof selector === "function") {
              fn = selector;
              selector = "";
            }
            return (0, _forEach["default"])(_context5 = this).call(_context5, function(elem) {
              if (selector) {
                var idx = -1;
                for (var i = 0; i < AGENT_EVENTS.length; i++) {
                  var item = AGENT_EVENTS[i];
                  if (item.selector === selector && item.fn === fn && item.elem === elem) {
                    idx = i;
                    break;
                  }
                }
                if (idx !== -1) {
                  var agentFn = (0, _splice["default"])(AGENT_EVENTS).call(AGENT_EVENTS, idx, 1)[0].agentFn;
                  elem.removeEventListener(type, agentFn);
                }
              } else {
                elem.removeEventListener(type, fn);
              }
            });
          };
          DomElement2.prototype.attr = function(key, val) {
            var _context6;
            if (val == null) {
              return this.elems[0].getAttribute(key) || "";
            }
            return (0, _forEach["default"])(_context6 = this).call(_context6, function(elem) {
              elem.setAttribute(key, val);
            });
          };
          DomElement2.prototype.removeAttr = function(key) {
            var _context7;
            (0, _forEach["default"])(_context7 = this).call(_context7, function(elem) {
              elem.removeAttribute(key);
            });
          };
          DomElement2.prototype.addClass = function(className) {
            var _context8;
            if (!className) {
              return this;
            }
            return (0, _forEach["default"])(_context8 = this).call(_context8, function(elem) {
              if (elem.className) {
                var arr = elem.className.split(/\s/);
                arr = (0, _filter["default"])(arr).call(arr, function(item) {
                  return !!(0, _trim["default"])(item).call(item);
                });
                if ((0, _indexOf["default"])(arr).call(arr, className) < 0) {
                  arr.push(className);
                }
                elem.className = arr.join(" ");
              } else {
                elem.className = className;
              }
            });
          };
          DomElement2.prototype.removeClass = function(className) {
            var _context9;
            if (!className) {
              return this;
            }
            return (0, _forEach["default"])(_context9 = this).call(_context9, function(elem) {
              if (!elem.className) {
                return;
              }
              var arr = elem.className.split(/\s/);
              arr = (0, _filter["default"])(arr).call(arr, function(item) {
                item = (0, _trim["default"])(item).call(item);
                if (!item || item === className) {
                  return false;
                }
                return true;
              });
              elem.className = arr.join(" ");
            });
          };
          DomElement2.prototype.hasClass = function(className) {
            if (!className) {
              return false;
            }
            var elem = this.elems[0];
            if (!elem.className) {
              return false;
            }
            var arr = elem.className.split(/\s/);
            return (0, _includes["default"])(arr).call(arr, className);
          };
          DomElement2.prototype.css = function(key, val) {
            var _context10;
            var currentStyle;
            if (val == "") {
              currentStyle = "";
            } else {
              currentStyle = key + ":" + val + ";";
            }
            return (0, _forEach["default"])(_context10 = this).call(_context10, function(elem) {
              var _context11;
              var style = (0, _trim["default"])(_context11 = elem.getAttribute("style") || "").call(_context11);
              if (style) {
                var resultArr = _styleArrTrim(style);
                resultArr = (0, _map["default"])(resultArr).call(resultArr, function(item) {
                  if ((0, _indexOf["default"])(item).call(item, key) === 0) {
                    return currentStyle;
                  } else {
                    return item;
                  }
                });
                if (currentStyle != "" && (0, _indexOf["default"])(resultArr).call(resultArr, currentStyle) < 0) {
                  resultArr.push(currentStyle);
                }
                if (currentStyle == "") {
                  resultArr = _styleArrTrim(resultArr);
                }
                elem.setAttribute("style", resultArr.join("; "));
              } else {
                elem.setAttribute("style", currentStyle);
              }
            });
          };
          DomElement2.prototype.getBoundingClientRect = function() {
            var elem = this.elems[0];
            return elem.getBoundingClientRect();
          };
          DomElement2.prototype.show = function() {
            return this.css("display", "block");
          };
          DomElement2.prototype.hide = function() {
            return this.css("display", "none");
          };
          DomElement2.prototype.children = function() {
            var elem = this.elems[0];
            if (!elem) {
              return null;
            }
            return $(elem.children);
          };
          DomElement2.prototype.childNodes = function() {
            var elem = this.elems[0];
            if (!elem) {
              return null;
            }
            return $(elem.childNodes);
          };
          DomElement2.prototype.replaceChildAll = function($children) {
            var parent = this.getNode();
            var elem = this.elems[0];
            while (elem.hasChildNodes()) {
              parent.firstChild && elem.removeChild(parent.firstChild);
            }
            this.append($children);
          };
          DomElement2.prototype.append = function($children) {
            var _context12;
            return (0, _forEach["default"])(_context12 = this).call(_context12, function(elem) {
              (0, _forEach["default"])($children).call($children, function(child) {
                elem.appendChild(child);
              });
            });
          };
          DomElement2.prototype.remove = function() {
            var _context13;
            return (0, _forEach["default"])(_context13 = this).call(_context13, function(elem) {
              if (elem.remove) {
                elem.remove();
              } else {
                var parent_1 = elem.parentElement;
                parent_1 && parent_1.removeChild(elem);
              }
            });
          };
          DomElement2.prototype.isContain = function($child) {
            var elem = this.elems[0];
            var child = $child.elems[0];
            return elem.contains(child);
          };
          DomElement2.prototype.getNodeName = function() {
            var elem = this.elems[0];
            return elem.nodeName;
          };
          DomElement2.prototype.getNode = function(n) {
            if (n === void 0) {
              n = 0;
            }
            var elem;
            elem = this.elems[n];
            return elem;
          };
          DomElement2.prototype.find = function(selector) {
            var elem = this.elems[0];
            return $(elem.querySelectorAll(selector));
          };
          DomElement2.prototype.text = function(val) {
            if (!val) {
              var elem = this.elems[0];
              return elem.innerHTML.replace(/<[^>]+>/g, function() {
                return "";
              });
            } else {
              var _context14;
              return (0, _forEach["default"])(_context14 = this).call(_context14, function(elem2) {
                elem2.innerHTML = val;
              });
            }
          };
          DomElement2.prototype.html = function(val) {
            var elem = this.elems[0];
            if (!val) {
              return elem.innerHTML;
            } else {
              elem.innerHTML = val;
              return this;
            }
          };
          DomElement2.prototype.val = function() {
            var _context15;
            var elem = this.elems[0];
            return (0, _trim["default"])(_context15 = elem.value).call(_context15);
          };
          DomElement2.prototype.focus = function() {
            var _context16;
            return (0, _forEach["default"])(_context16 = this).call(_context16, function(elem) {
              elem.focus();
            });
          };
          DomElement2.prototype.prev = function() {
            var elem = this.elems[0];
            return $(elem.previousElementSibling);
          };
          DomElement2.prototype.next = function() {
            var elem = this.elems[0];
            return $(elem.nextElementSibling);
          };
          DomElement2.prototype.getNextSibling = function() {
            var elem = this.elems[0];
            return $(elem.nextSibling);
          };
          DomElement2.prototype.parent = function() {
            var elem = this.elems[0];
            return $(elem.parentElement);
          };
          DomElement2.prototype.parentUntil = function(selector, curElem) {
            var elem = curElem || this.elems[0];
            if (elem.nodeName === "BODY") {
              return null;
            }
            var parent = elem.parentElement;
            if (parent === null) {
              return null;
            }
            if (parent.matches(selector)) {
              return $(parent);
            }
            return this.parentUntil(selector, parent);
          };
          DomElement2.prototype.parentUntilEditor = function(selector, editor, curElem) {
            var elem = curElem || this.elems[0];
            if ($(elem).equal(editor.$textContainerElem) || $(elem).equal(editor.$toolbarElem)) {
              return null;
            }
            var parent = elem.parentElement;
            if (parent === null) {
              return null;
            }
            if (parent.matches(selector)) {
              return $(parent);
            }
            return this.parentUntilEditor(selector, editor, parent);
          };
          DomElement2.prototype.equal = function($elem) {
            if ($elem instanceof DomElement2) {
              return this.elems[0] === $elem.elems[0];
            } else if ($elem instanceof HTMLElement) {
              return this.elems[0] === $elem;
            } else {
              return false;
            }
          };
          DomElement2.prototype.insertBefore = function(selector) {
            var _context17;
            var $referenceNode = $(selector);
            var referenceNode = $referenceNode.elems[0];
            if (!referenceNode) {
              return this;
            }
            return (0, _forEach["default"])(_context17 = this).call(_context17, function(elem) {
              var parent = referenceNode.parentNode;
              parent === null || parent === void 0 ? void 0 : parent.insertBefore(elem, referenceNode);
            });
          };
          DomElement2.prototype.insertAfter = function(selector) {
            var _context18;
            var $referenceNode = $(selector);
            var referenceNode = $referenceNode.elems[0];
            var anchorNode = referenceNode && referenceNode.nextSibling;
            if (!referenceNode) {
              return this;
            }
            return (0, _forEach["default"])(_context18 = this).call(_context18, function(elem) {
              var parent = referenceNode.parentNode;
              if (anchorNode) {
                parent.insertBefore(elem, anchorNode);
              } else {
                parent.appendChild(elem);
              }
            });
          };
          DomElement2.prototype.data = function(key, value) {
            if (value != null) {
              this.dataSource.set(key, value);
            } else {
              return this.dataSource.get(key);
            }
          };
          DomElement2.prototype.getNodeTop = function(editor) {
            if (this.length < 1) {
              return this;
            }
            var $parent = this.parent();
            if (editor.$textElem.equal(this) || editor.$textElem.equal($parent)) {
              return this;
            }
            $parent.prior = this;
            return $parent.getNodeTop(editor);
          };
          DomElement2.prototype.getOffsetData = function() {
            var $node = this.elems[0];
            return {
              top: $node.offsetTop,
              left: $node.offsetLeft,
              width: $node.offsetWidth,
              height: $node.offsetHeight,
              parent: $node.offsetParent
            };
          };
          DomElement2.prototype.scrollTop = function(top) {
            var $node = this.elems[0];
            $node.scrollTo({
              top
            });
          };
          return DomElement2;
        }();
        exports2.DomElement = DomElement;
        function $() {
          var arg = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
          }
          return new ((0, _bind["default"])(DomElement).apply(DomElement, tslib_1.__spreadArrays([void 0], arg)))();
        }
        exports2["default"] = $;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(180);
      },
      function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__(8);
        var getOwnPropertyDescriptor = __webpack_require__(71).f;
        var isForced = __webpack_require__(100);
        var path = __webpack_require__(9);
        var bind = __webpack_require__(39);
        var createNonEnumerableProperty = __webpack_require__(19);
        var has = __webpack_require__(16);
        var wrapConstructor = function(NativeConstructor) {
          var Wrapper = function(a, b, c) {
            if (this instanceof NativeConstructor) {
              switch (arguments.length) {
                case 0:
                  return new NativeConstructor();
                case 1:
                  return new NativeConstructor(a);
                case 2:
                  return new NativeConstructor(a, b);
              }
              return new NativeConstructor(a, b, c);
            }
            return NativeConstructor.apply(this, arguments);
          };
          Wrapper.prototype = NativeConstructor.prototype;
          return Wrapper;
        };
        module2.exports = function(options, source) {
          var TARGET = options.target;
          var GLOBAL = options.global;
          var STATIC = options.stat;
          var PROTO = options.proto;
          var nativeSource = GLOBAL ? global2 : STATIC ? global2[TARGET] : (global2[TARGET] || {}).prototype;
          var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
          var targetPrototype = target.prototype;
          var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
          var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
          for (key in source) {
            FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
            USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);
            targetProperty = target[key];
            if (USE_NATIVE)
              if (options.noTargetGet) {
                descriptor = getOwnPropertyDescriptor(nativeSource, key);
                nativeProperty = descriptor && descriptor.value;
              } else
                nativeProperty = nativeSource[key];
            sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
            if (USE_NATIVE && typeof targetProperty === typeof sourceProperty)
              continue;
            if (options.bind && USE_NATIVE)
              resultProperty = bind(sourceProperty, global2);
            else if (options.wrap && USE_NATIVE)
              resultProperty = wrapConstructor(sourceProperty);
            else if (PROTO && typeof sourceProperty == "function")
              resultProperty = bind(Function.call, sourceProperty);
            else
              resultProperty = sourceProperty;
            if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
              createNonEnumerableProperty(resultProperty, "sham", true);
            }
            target[key] = resultProperty;
            if (PROTO) {
              VIRTUAL_PROTOTYPE = TARGET + "Prototype";
              if (!has(path, VIRTUAL_PROTOTYPE)) {
                createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
              }
              path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
              if (options.real && targetPrototype && !targetPrototype[key]) {
                createNonEnumerableProperty(targetPrototype, key, sourceProperty);
              }
            }
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _typeof2 = _interopRequireDefault(__webpack_require__(92));
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _parseInt2 = _interopRequireDefault(__webpack_require__(256));
        var _slice = _interopRequireDefault(__webpack_require__(45));
        var _setTimeout2 = _interopRequireDefault(__webpack_require__(46));
        var _isArray = _interopRequireDefault(__webpack_require__(89));
        var _map = _interopRequireDefault(__webpack_require__(26));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.hexToRgb = exports2.getRandomCode = exports2.toArray = exports2.deepClone = exports2.isFunction = exports2.debounce = exports2.throttle = exports2.arrForEach = exports2.forEach = exports2.replaceSpecialSymbol = exports2.replaceHtmlSymbol = exports2.getRandom = exports2.UA = void 0;
        var tslib_1 = __webpack_require__(2);
        var NavUA = function() {
          function NavUA2() {
            this._ua = navigator.userAgent;
            var math = this._ua.match(/(Edge?)\/(\d+)/);
            this.isOldEdge = math && math[1] == "Edge" && (0, _parseInt2["default"])(math[2]) < 19 ? true : false;
            this.isFirefox = /Firefox\/\d+/.test(this._ua) && !/Seamonkey\/\d+/.test(this._ua) ? true : false;
          }
          NavUA2.prototype.isIE = function() {
            return "ActiveXObject" in window;
          };
          NavUA2.prototype.isWebkit = function() {
            return /webkit/i.test(this._ua);
          };
          return NavUA2;
        }();
        exports2.UA = new NavUA();
        function getRandom(prefix) {
          var _context;
          if (prefix === void 0) {
            prefix = "";
          }
          return prefix + (0, _slice["default"])(_context = Math.random().toString()).call(_context, 2);
        }
        exports2.getRandom = getRandom;
        function replaceHtmlSymbol(html) {
          return html.replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;").replace(/(\r\n|\r|\n)/g, "<br/>");
        }
        exports2.replaceHtmlSymbol = replaceHtmlSymbol;
        function replaceSpecialSymbol(value) {
          return value.replace(/&lt;/gm, "<").replace(/&gt;/gm, ">").replace(/&quot;/gm, '"');
        }
        exports2.replaceSpecialSymbol = replaceSpecialSymbol;
        function forEach(obj, fn) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var result = fn(key, obj[key]);
              if (result === false) {
                break;
              }
            }
          }
        }
        exports2.forEach = forEach;
        function arrForEach(fakeArr, fn) {
          var i, item, result;
          var length = fakeArr.length || 0;
          for (i = 0; i < length; i++) {
            item = fakeArr[i];
            result = fn.call(fakeArr, item, i);
            if (result === false) {
              break;
            }
          }
        }
        exports2.arrForEach = arrForEach;
        function throttle(fn, interval) {
          if (interval === void 0) {
            interval = 200;
          }
          var flag = false;
          return function() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            if (!flag) {
              flag = true;
              (0, _setTimeout2["default"])(function() {
                flag = false;
                fn.call.apply(fn, tslib_1.__spreadArrays([_this], args));
              }, interval);
            }
          };
        }
        exports2.throttle = throttle;
        function debounce(fn, delay) {
          if (delay === void 0) {
            delay = 200;
          }
          var lastFn = 0;
          return function() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            if (lastFn) {
              window.clearTimeout(lastFn);
            }
            lastFn = (0, _setTimeout2["default"])(function() {
              lastFn = 0;
              fn.call.apply(fn, tslib_1.__spreadArrays([_this], args));
            }, delay);
          };
        }
        exports2.debounce = debounce;
        function isFunction(fn) {
          return typeof fn === "function";
        }
        exports2.isFunction = isFunction;
        function deepClone(data) {
          if ((0, _typeof2["default"])(data) !== "object" || typeof data == "function" || data === null) {
            return data;
          }
          var item;
          if ((0, _isArray["default"])(data)) {
            item = [];
          }
          if (!(0, _isArray["default"])(data)) {
            item = {};
          }
          for (var i in data) {
            if (Object.prototype.hasOwnProperty.call(data, i)) {
              item[i] = deepClone(data[i]);
            }
          }
          return item;
        }
        exports2.deepClone = deepClone;
        function toArray(data) {
          return (0, _slice["default"])(Array.prototype).call(data);
        }
        exports2.toArray = toArray;
        function getRandomCode() {
          var _context2;
          return (0, _slice["default"])(_context2 = Math.random().toString(36)).call(_context2, -5);
        }
        exports2.getRandomCode = getRandomCode;
        function hexToRgb(hex) {
          var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
          if (result == null)
            return null;
          var colors = (0, _map["default"])(result).call(result, function(i) {
            return (0, _parseInt2["default"])(i, 16);
          });
          var r = colors[1];
          var g = colors[2];
          var b = colors[3];
          return "rgb(" + r + ", " + g + ", " + b + ")";
        }
        exports2.hexToRgb = hexToRgb;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.EMPTY_P_REGEX = exports2.EMPTY_P_LAST_REGEX = exports2.EMPTY_P = exports2.urlRegex = exports2.EMPTY_FN = void 0;
        function EMPTY_FN() {
        }
        exports2.EMPTY_FN = EMPTY_FN;
        exports2.urlRegex = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/;
        exports2.EMPTY_P = '<p data-we-empty-p=""><br></p>';
        exports2.EMPTY_P_LAST_REGEX = /<p data-we-empty-p=""><br\/?><\/p>$/gim;
        exports2.EMPTY_P_REGEX = /<p data-we-empty-p="">/gim;
      },
      function(module2, exports2, __webpack_require__) {
        (function(global2) {
          var check = function(it) {
            return it && it.Math == Math && it;
          };
          module2.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global2 == "object" && global2) || Function("return this")();
        }).call(this, __webpack_require__(145));
      },
      function(module2, exports2) {
        module2.exports = {};
      },
      function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__(8);
        var shared = __webpack_require__(74);
        var has = __webpack_require__(16);
        var uid = __webpack_require__(64);
        var NATIVE_SYMBOL = __webpack_require__(76);
        var USE_SYMBOL_AS_UID = __webpack_require__(105);
        var WellKnownSymbolsStore = shared("wks");
        var Symbol2 = global2.Symbol;
        var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
        module2.exports = function(name) {
          if (!has(WellKnownSymbolsStore, name)) {
            if (NATIVE_SYMBOL && has(Symbol2, name))
              WellKnownSymbolsStore[name] = Symbol2[name];
            else
              WellKnownSymbolsStore[name] = createWellKnownSymbol("Symbol." + name);
          }
          return WellKnownSymbolsStore[name];
        };
      },
      function(module2, exports2) {
        module2.exports = function(exec) {
          try {
            return !!exec();
          } catch (error) {
            return true;
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        var path = __webpack_require__(9);
        var has = __webpack_require__(16);
        var wrappedWellKnownSymbolModule = __webpack_require__(93);
        var defineProperty = __webpack_require__(18).f;
        module2.exports = function(NAME) {
          var Symbol2 = path.Symbol || (path.Symbol = {});
          if (!has(Symbol2, NAME))
            defineProperty(Symbol2, NAME, {
              value: wrappedWellKnownSymbolModule.f(NAME)
            });
        };
      },
      function(module2, exports2) {
        module2.exports = function(it) {
          return typeof it === "object" ? it !== null : typeof it === "function";
        };
      },
      function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__(11);
        module2.exports = !fails(function() {
          return Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1] != 7;
        });
      },
      function(module2, exports2, __webpack_require__) {
        var path = __webpack_require__(9);
        module2.exports = function(CONSTRUCTOR) {
          return path[CONSTRUCTOR + "Prototype"];
        };
      },
      function(module2, exports2) {
        var hasOwnProperty = {}.hasOwnProperty;
        module2.exports = function(it, key) {
          return hasOwnProperty.call(it, key);
        };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(192);
      },
      function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(14);
        var IE8_DOM_DEFINE = __webpack_require__(99);
        var anObject = __webpack_require__(25);
        var toPrimitive = __webpack_require__(60);
        var nativeDefineProperty = Object.defineProperty;
        exports2.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
          anObject(O);
          P = toPrimitive(P, true);
          anObject(Attributes);
          if (IE8_DOM_DEFINE)
            try {
              return nativeDefineProperty(O, P, Attributes);
            } catch (error) {
            }
          if ("get" in Attributes || "set" in Attributes)
            throw TypeError("Accessors not supported");
          if ("value" in Attributes)
            O[P] = Attributes.value;
          return O;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(14);
        var definePropertyModule = __webpack_require__(18);
        var createPropertyDescriptor = __webpack_require__(48);
        module2.exports = DESCRIPTORS ? function(object, key, value) {
          return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
        } : function(object, key, value) {
          object[key] = value;
          return object;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var isOldIE = function isOldIE2() {
          var memo;
          return function memorize() {
            if (typeof memo === "undefined") {
              memo = Boolean(window && document && document.all && !window.atob);
            }
            return memo;
          };
        }();
        var getTarget = function getTarget2() {
          var memo = {};
          return function memorize(target) {
            if (typeof memo[target] === "undefined") {
              var styleTarget = document.querySelector(target);
              if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                try {
                  styleTarget = styleTarget.contentDocument.head;
                } catch (e) {
                  styleTarget = null;
                }
              }
              memo[target] = styleTarget;
            }
            return memo[target];
          };
        }();
        var stylesInDom = [];
        function getIndexByIdentifier(identifier) {
          var result = -1;
          for (var i = 0; i < stylesInDom.length; i++) {
            if (stylesInDom[i].identifier === identifier) {
              result = i;
              break;
            }
          }
          return result;
        }
        function modulesToDom(list, options) {
          var idCountMap = {};
          var identifiers = [];
          for (var i = 0; i < list.length; i++) {
            var item = list[i];
            var id = options.base ? item[0] + options.base : item[0];
            var count = idCountMap[id] || 0;
            var identifier = "".concat(id, " ").concat(count);
            idCountMap[id] = count + 1;
            var index2 = getIndexByIdentifier(identifier);
            var obj = {
              css: item[1],
              media: item[2],
              sourceMap: item[3]
            };
            if (index2 !== -1) {
              stylesInDom[index2].references++;
              stylesInDom[index2].updater(obj);
            } else {
              stylesInDom.push({
                identifier,
                updater: addStyle(obj, options),
                references: 1
              });
            }
            identifiers.push(identifier);
          }
          return identifiers;
        }
        function insertStyleElement(options) {
          var style = document.createElement("style");
          var attributes = options.attributes || {};
          if (typeof attributes.nonce === "undefined") {
            var nonce = __webpack_require__.nc;
            if (nonce) {
              attributes.nonce = nonce;
            }
          }
          Object.keys(attributes).forEach(function(key) {
            style.setAttribute(key, attributes[key]);
          });
          if (typeof options.insert === "function") {
            options.insert(style);
          } else {
            var target = getTarget(options.insert || "head");
            if (!target) {
              throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            }
            target.appendChild(style);
          }
          return style;
        }
        function removeStyleElement(style) {
          if (style.parentNode === null) {
            return false;
          }
          style.parentNode.removeChild(style);
        }
        var replaceText = function replaceText2() {
          var textStore = [];
          return function replace(index2, replacement) {
            textStore[index2] = replacement;
            return textStore.filter(Boolean).join("\n");
          };
        }();
        function applyToSingletonTag(style, index2, remove, obj) {
          var css = remove ? "" : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css;
          if (style.styleSheet) {
            style.styleSheet.cssText = replaceText(index2, css);
          } else {
            var cssNode = document.createTextNode(css);
            var childNodes = style.childNodes;
            if (childNodes[index2]) {
              style.removeChild(childNodes[index2]);
            }
            if (childNodes.length) {
              style.insertBefore(cssNode, childNodes[index2]);
            } else {
              style.appendChild(cssNode);
            }
          }
        }
        function applyToTag(style, options, obj) {
          var css = obj.css;
          var media = obj.media;
          var sourceMap = obj.sourceMap;
          if (media) {
            style.setAttribute("media", media);
          } else {
            style.removeAttribute("media");
          }
          if (sourceMap && typeof btoa !== "undefined") {
            css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
          }
          if (style.styleSheet) {
            style.styleSheet.cssText = css;
          } else {
            while (style.firstChild) {
              style.removeChild(style.firstChild);
            }
            style.appendChild(document.createTextNode(css));
          }
        }
        var singleton = null;
        var singletonCounter = 0;
        function addStyle(obj, options) {
          var style;
          var update;
          var remove;
          if (options.singleton) {
            var styleIndex = singletonCounter++;
            style = singleton || (singleton = insertStyleElement(options));
            update = applyToSingletonTag.bind(null, style, styleIndex, false);
            remove = applyToSingletonTag.bind(null, style, styleIndex, true);
          } else {
            style = insertStyleElement(options);
            update = applyToTag.bind(null, style, options);
            remove = function remove2() {
              removeStyleElement(style);
            };
          }
          update(obj);
          return function updateStyle(newObj) {
            if (newObj) {
              if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
              }
              update(obj = newObj);
            } else {
              remove();
            }
          };
        }
        module2.exports = function(list, options) {
          options = options || {};
          if (!options.singleton && typeof options.singleton !== "boolean") {
            options.singleton = isOldIE();
          }
          list = list || [];
          var lastIdentifiers = modulesToDom(list, options);
          return function update(newList) {
            newList = newList || [];
            if (Object.prototype.toString.call(newList) !== "[object Array]") {
              return;
            }
            for (var i = 0; i < lastIdentifiers.length; i++) {
              var identifier = lastIdentifiers[i];
              var index2 = getIndexByIdentifier(identifier);
              stylesInDom[index2].references--;
            }
            var newLastIdentifiers = modulesToDom(newList, options);
            for (var _i = 0; _i < lastIdentifiers.length; _i++) {
              var _identifier = lastIdentifiers[_i];
              var _index = getIndexByIdentifier(_identifier);
              if (stylesInDom[_index].references === 0) {
                stylesInDom[_index].updater();
                stylesInDom.splice(_index, 1);
              }
            }
            lastIdentifiers = newLastIdentifiers;
          };
        };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = function(useSourceMap) {
          var list = [];
          list.toString = function toString() {
            return this.map(function(item) {
              var content = cssWithMappingToString(item, useSourceMap);
              if (item[2]) {
                return "@media ".concat(item[2], " {").concat(content, "}");
              }
              return content;
            }).join("");
          };
          list.i = function(modules, mediaQuery, dedupe) {
            if (typeof modules === "string") {
              modules = [[null, modules, ""]];
            }
            var alreadyImportedModules = {};
            if (dedupe) {
              for (var i = 0; i < this.length; i++) {
                var id = this[i][0];
                if (id != null) {
                  alreadyImportedModules[id] = true;
                }
              }
            }
            for (var _i = 0; _i < modules.length; _i++) {
              var item = [].concat(modules[_i]);
              if (dedupe && alreadyImportedModules[item[0]]) {
                continue;
              }
              if (mediaQuery) {
                if (!item[2]) {
                  item[2] = mediaQuery;
                } else {
                  item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
                }
              }
              list.push(item);
            }
          };
          return list;
        };
        function cssWithMappingToString(item, useSourceMap) {
          var content = item[1] || "";
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (useSourceMap && typeof btoa === "function") {
            var sourceMapping = toComment(cssMapping);
            var sourceURLs = cssMapping.sources.map(function(source) {
              return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
            });
            return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        }
        function toComment(sourceMap) {
          var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
          var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
          return "/*# ".concat(data, " */");
        }
      },
      function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(14);
        var fails = __webpack_require__(11);
        var has = __webpack_require__(16);
        var defineProperty = Object.defineProperty;
        var cache = {};
        var thrower = function(it) {
          throw it;
        };
        module2.exports = function(METHOD_NAME, options) {
          if (has(cache, METHOD_NAME))
            return cache[METHOD_NAME];
          if (!options)
            options = {};
          var method = [][METHOD_NAME];
          var ACCESSORS = has(options, "ACCESSORS") ? options.ACCESSORS : false;
          var argument0 = has(options, 0) ? options[0] : thrower;
          var argument1 = has(options, 1) ? options[1] : void 0;
          return cache[METHOD_NAME] = !!method && !fails(function() {
            if (ACCESSORS && !DESCRIPTORS)
              return true;
            var O = { length: -1 };
            if (ACCESSORS)
              defineProperty(O, 1, { enumerable: true, get: thrower });
            else
              O[1] = 1;
            method.call(O, argument0, argument1);
          });
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var Menu_1 = tslib_1.__importDefault(__webpack_require__(95));
        var BtnMenu = function(_super) {
          tslib_1.__extends(BtnMenu2, _super);
          function BtnMenu2($elem, editor) {
            return _super.call(this, $elem, editor) || this;
          }
          return BtnMenu2;
        }(Menu_1["default"]);
        exports2["default"] = BtnMenu;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        var _setTimeout2 = _interopRequireDefault(__webpack_require__(46));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var Menu_1 = tslib_1.__importDefault(__webpack_require__(95));
        var DropList_1 = tslib_1.__importDefault(__webpack_require__(133));
        var DropListMenu = function(_super) {
          tslib_1.__extends(DropListMenu2, _super);
          function DropListMenu2($elem, editor, conf) {
            var _this = _super.call(this, $elem, editor) || this;
            conf.title = editor.i18next.t("menus.dropListMenu." + conf.title);
            var className = editor.config.lang === "zh-CN" ? "" : "w-e-drop-list-tl";
            if (className !== "" && conf.type === "list") {
              var _context;
              (0, _forEach["default"])(_context = conf.list).call(_context, function(item) {
                var $elem2 = item.$elem;
                var $children = dom_core_1["default"]($elem2.children());
                if ($children.length > 0) {
                  var nodeName = $children === null || $children === void 0 ? void 0 : $children.getNodeName();
                  if (nodeName && nodeName === "I") {
                    $elem2.addClass(className);
                  }
                }
              });
            }
            var dropList = new DropList_1["default"](_this, conf);
            _this.dropList = dropList;
            $elem.on("click", function() {
              var _context2;
              if (editor.selection.getRange() == null) {
                return;
              }
              $elem.css("z-index", editor.zIndex.get("menu"));
              (0, _forEach["default"])(_context2 = editor.txt.eventHooks.dropListMenuHoverEvents).call(_context2, function(fn) {
                return fn();
              });
              dropList.show();
            }).on("mouseleave", function() {
              $elem.css("z-index", "auto");
              dropList.hideTimeoutId = (0, _setTimeout2["default"])(function() {
                dropList.hide();
              });
            });
            return _this;
          }
          return DropListMenu2;
        }(Menu_1["default"]);
        exports2["default"] = DropListMenu;
      },
      function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__(13);
        module2.exports = function(it) {
          if (!isObject(it)) {
            throw TypeError(String(it) + " is not an object");
          }
          return it;
        };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(188);
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(201);
      },
      function(module2, exports2, __webpack_require__) {
        var IndexedObject = __webpack_require__(72);
        var requireObjectCoercible = __webpack_require__(49);
        module2.exports = function(it) {
          return IndexedObject(requireObjectCoercible(it));
        };
      },
      function(module2, exports2, __webpack_require__) {
        var requireObjectCoercible = __webpack_require__(49);
        module2.exports = function(argument) {
          return Object(requireObjectCoercible(argument));
        };
      },
      function(module2, exports2, __webpack_require__) {
        var bind = __webpack_require__(39);
        var IndexedObject = __webpack_require__(72);
        var toObject = __webpack_require__(29);
        var toLength = __webpack_require__(34);
        var arraySpeciesCreate = __webpack_require__(88);
        var push = [].push;
        var createMethod = function(TYPE) {
          var IS_MAP = TYPE == 1;
          var IS_FILTER = TYPE == 2;
          var IS_SOME = TYPE == 3;
          var IS_EVERY = TYPE == 4;
          var IS_FIND_INDEX = TYPE == 6;
          var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
          return function($this, callbackfn, that, specificCreate) {
            var O = toObject($this);
            var self2 = IndexedObject(O);
            var boundFunction = bind(callbackfn, that, 3);
            var length = toLength(self2.length);
            var index2 = 0;
            var create = specificCreate || arraySpeciesCreate;
            var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : void 0;
            var value, result;
            for (; length > index2; index2++)
              if (NO_HOLES || index2 in self2) {
                value = self2[index2];
                result = boundFunction(value, index2, O);
                if (TYPE) {
                  if (IS_MAP)
                    target[index2] = result;
                  else if (result)
                    switch (TYPE) {
                      case 3:
                        return true;
                      case 5:
                        return value;
                      case 6:
                        return index2;
                      case 2:
                        push.call(target, value);
                    }
                  else if (IS_EVERY)
                    return false;
                }
              }
            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
          };
        };
        module2.exports = {
          forEach: createMethod(0),
          map: createMethod(1),
          filter: createMethod(2),
          some: createMethod(3),
          every: createMethod(4),
          find: createMethod(5),
          findIndex: createMethod(6)
        };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(283);
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        var _find = _interopRequireDefault(__webpack_require__(31));
        var _set = _interopRequireDefault(__webpack_require__(131));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var const_1 = __webpack_require__(7);
        var Panel = function() {
          function Panel2(menu, conf) {
            this.menu = menu;
            this.conf = conf;
            this.$container = dom_core_1["default"]('<div class="w-e-panel-container"></div>');
            var editor = menu.editor;
            editor.txt.eventHooks.clickEvents.push(Panel2.hideCurAllPanels);
            editor.txt.eventHooks.toolbarClickEvents.push(Panel2.hideCurAllPanels);
            editor.txt.eventHooks.dropListMenuHoverEvents.push(Panel2.hideCurAllPanels);
          }
          Panel2.prototype.create = function() {
            var _this = this;
            var menu = this.menu;
            if (Panel2.createdMenus.has(menu)) {
              return;
            }
            var conf = this.conf;
            var $container = this.$container;
            var width = conf.width || 300;
            var rect = menu.editor.$toolbarElem.getBoundingClientRect();
            var menuRect = menu.$elem.getBoundingClientRect();
            var top = rect.height + rect.top - menuRect.top;
            var left = (rect.width - width) / 2 + rect.left - menuRect.left;
            var offset = 300;
            if (Math.abs(left) > offset) {
              if (menuRect.left < document.documentElement.clientWidth / 2) {
                left = -menuRect.width / 2;
              } else {
                left = -width + menuRect.width / 2;
              }
            }
            $container.css("width", width + "px").css("margin-top", top + "px").css("margin-left", left + "px").css("z-index", menu.editor.zIndex.get("panel"));
            var $closeBtn = dom_core_1["default"]('<i class="w-e-icon-close w-e-panel-close"></i>');
            $container.append($closeBtn);
            $closeBtn.on("click", function() {
              _this.remove();
            });
            var $tabTitleContainer = dom_core_1["default"]('<ul class="w-e-panel-tab-title"></ul>');
            var $tabContentContainer = dom_core_1["default"]('<div class="w-e-panel-tab-content"></div>');
            $container.append($tabTitleContainer).append($tabContentContainer);
            var height = conf.height;
            if (height) {
              $tabContentContainer.css("height", height + "px").css("overflow-y", "auto");
            }
            var tabs = conf.tabs || [];
            var tabTitleArr = [];
            var tabContentArr = [];
            (0, _forEach["default"])(tabs).call(tabs, function(tab, tabIndex) {
              if (!tab) {
                return;
              }
              var title = tab.title || "";
              var tpl = tab.tpl || "";
              var $title = dom_core_1["default"]('<li class="w-e-item">' + title + "</li>");
              $tabTitleContainer.append($title);
              var $content = dom_core_1["default"](tpl);
              $tabContentContainer.append($content);
              tabTitleArr.push($title);
              tabContentArr.push($content);
              if (tabIndex === 0) {
                $title.data("active", true);
                $title.addClass("w-e-active");
              } else {
                $content.hide();
              }
              $title.on("click", function() {
                if ($title.data("active")) {
                  return;
                }
                (0, _forEach["default"])(tabTitleArr).call(tabTitleArr, function($title2) {
                  $title2.data("active", false);
                  $title2.removeClass("w-e-active");
                });
                (0, _forEach["default"])(tabContentArr).call(tabContentArr, function($content2) {
                  $content2.hide();
                });
                $title.data("active", true);
                $title.addClass("w-e-active");
                $content.show();
              });
            });
            $container.on("click", function(e) {
              e.stopPropagation();
            });
            menu.$elem.append($container);
            (0, _forEach["default"])(tabs).call(tabs, function(tab, index2) {
              if (!tab) {
                return;
              }
              var events = tab.events || [];
              (0, _forEach["default"])(events).call(events, function(event) {
                var _a;
                var selector = event.selector;
                var type = event.type;
                var fn = event.fn || const_1.EMPTY_FN;
                var $content = tabContentArr[index2];
                var bindEnter = (_a = event.bindEnter) !== null && _a !== void 0 ? _a : false;
                var doneFn = function doneFn2(e) {
                  return tslib_1.__awaiter(_this, void 0, void 0, function() {
                    var needToHide;
                    return tslib_1.__generator(this, function(_a2) {
                      switch (_a2.label) {
                        case 0:
                          e.stopPropagation();
                          return [
                            4,
                            fn(e)
                          ];
                        case 1:
                          needToHide = _a2.sent();
                          if (needToHide) {
                            this.remove();
                          }
                          return [
                            2
                          ];
                      }
                    });
                  });
                };
                (0, _find["default"])($content).call($content, selector).on(type, doneFn);
                if (bindEnter && type === "click") {
                  $content.on("keyup", function(e) {
                    if (e.keyCode == 13) {
                      doneFn(e);
                    }
                  });
                }
              });
            });
            var $inputs = (0, _find["default"])($container).call($container, "input[type=text],textarea");
            if ($inputs.length) {
              $inputs.get(0).focus();
            }
            Panel2.hideCurAllPanels();
            menu.setPanel(this);
            Panel2.createdMenus.add(menu);
          };
          Panel2.prototype.remove = function() {
            var menu = this.menu;
            var $container = this.$container;
            if ($container) {
              $container.remove();
            }
            Panel2.createdMenus["delete"](menu);
          };
          Panel2.hideCurAllPanels = function() {
            var _context;
            if (Panel2.createdMenus.size === 0) {
              return;
            }
            (0, _forEach["default"])(_context = Panel2.createdMenus).call(_context, function(menu) {
              var panel = menu.panel;
              panel && panel.remove();
            });
          };
          Panel2.createdMenus = new _set["default"]();
          return Panel2;
        }();
        exports2["default"] = Panel;
      },
      function(module2, exports2) {
        var toString = {}.toString;
        module2.exports = function(it) {
          return toString.call(it).slice(8, -1);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var toInteger = __webpack_require__(62);
        var min = Math.min;
        module2.exports = function(argument) {
          return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var path = __webpack_require__(9);
        var global2 = __webpack_require__(8);
        var aFunction = function(variable) {
          return typeof variable == "function" ? variable : void 0;
        };
        module2.exports = function(namespace, method) {
          return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global2[namespace]) : path[namespace] && path[namespace][method] || global2[namespace] && global2[namespace][method];
        };
      },
      function(module2, exports2, __webpack_require__) {
        var TO_STRING_TAG_SUPPORT = __webpack_require__(81);
        var defineProperty = __webpack_require__(18).f;
        var createNonEnumerableProperty = __webpack_require__(19);
        var has = __webpack_require__(16);
        var toString = __webpack_require__(170);
        var wellKnownSymbol = __webpack_require__(10);
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        module2.exports = function(it, TAG, STATIC, SET_METHOD) {
          if (it) {
            var target = STATIC ? it : it.prototype;
            if (!has(target, TO_STRING_TAG)) {
              defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
            }
            if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
              createNonEnumerableProperty(target, "toString", toString);
            }
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var Menu_1 = tslib_1.__importDefault(__webpack_require__(95));
        var PanelMenu = function(_super) {
          tslib_1.__extends(PanelMenu2, _super);
          function PanelMenu2($elem, editor) {
            return _super.call(this, $elem, editor) || this;
          }
          PanelMenu2.prototype.setPanel = function(panel) {
            this.panel = panel;
          };
          return PanelMenu2;
        }(Menu_1["default"]);
        exports2["default"] = PanelMenu;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        var _bind = _interopRequireDefault(__webpack_require__(57));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var Tooltip = function() {
          function Tooltip2(editor, $elem, conf) {
            this.editor = editor;
            this.$targetElem = $elem;
            this.conf = conf;
            this._show = false;
            this._isInsertTextContainer = false;
            var $container = dom_core_1["default"]("<div></div>");
            $container.addClass("w-e-tooltip");
            this.$container = $container;
          }
          Tooltip2.prototype.getPositionData = function() {
            var $container = this.$container;
            var top = 0;
            var left = 0;
            var tooltipHeight = 20;
            var pageScrollTop = document.documentElement.scrollTop;
            var targetElemRect = this.$targetElem.getBoundingClientRect();
            var textElemRect = this.editor.$textElem.getBoundingClientRect();
            var targetOffset = this.$targetElem.getOffsetData();
            var targetParentElem = dom_core_1["default"](targetOffset.parent);
            var scrollTop = this.editor.$textElem.elems[0].scrollTop;
            this._isInsertTextContainer = targetParentElem.equal(this.editor.$textContainerElem);
            if (this._isInsertTextContainer) {
              var targetParentElemHeight = targetParentElem.getBoundingClientRect().height;
              var offsetTop = targetOffset.top, offsetLeft = targetOffset.left, offsetHeight = targetOffset.height;
              var absoluteTop = offsetTop - scrollTop;
              if (absoluteTop > tooltipHeight + 5) {
                top = absoluteTop - tooltipHeight - 15;
                $container.addClass("w-e-tooltip-up");
              } else if (absoluteTop + offsetHeight + tooltipHeight < targetParentElemHeight) {
                top = absoluteTop + offsetHeight + 10;
                $container.addClass("w-e-tooltip-down");
              } else {
                top = (absoluteTop > 0 ? absoluteTop : 0) + tooltipHeight + 10;
                $container.addClass("w-e-tooltip-down");
              }
              if (offsetLeft < 0) {
                left = 0;
              } else {
                left = offsetLeft;
              }
            } else {
              if (targetElemRect.top < tooltipHeight) {
                top = targetElemRect.bottom + pageScrollTop + 5;
                $container.addClass("w-e-tooltip-down");
              } else if (targetElemRect.top - textElemRect.top < tooltipHeight) {
                top = targetElemRect.bottom + pageScrollTop + 5;
                $container.addClass("w-e-tooltip-down");
              } else {
                top = targetElemRect.top + pageScrollTop - tooltipHeight - 15;
                $container.addClass("w-e-tooltip-up");
              }
              if (targetElemRect.left < 0) {
                left = 0;
              } else {
                left = targetElemRect.left;
              }
            }
            return {
              top,
              left
            };
          };
          Tooltip2.prototype.appendMenus = function() {
            var _this = this;
            var conf = this.conf;
            var editor = this.editor;
            var $targetElem = this.$targetElem;
            var $container = this.$container;
            (0, _forEach["default"])(conf).call(conf, function(item, index2) {
              var $elem = item.$elem;
              var $wrapper = dom_core_1["default"]("<div></div>");
              $wrapper.addClass("w-e-tooltip-item-wrapper ");
              $wrapper.append($elem);
              $container.append($wrapper);
              $elem.on("click", function(e) {
                e.preventDefault();
                var res = item.onClick(editor, $targetElem);
                if (res)
                  _this.remove();
              });
            });
          };
          Tooltip2.prototype.create = function() {
            var _context, _context2;
            var editor = this.editor;
            var $container = this.$container;
            this.appendMenus();
            var _a = this.getPositionData(), top = _a.top, left = _a.left;
            $container.css("top", top + "px");
            $container.css("left", left + "px");
            $container.css("z-index", editor.zIndex.get("tooltip"));
            if (this._isInsertTextContainer) {
              this.editor.$textContainerElem.append($container);
            } else {
              dom_core_1["default"]("body").append($container);
            }
            this._show = true;
            editor.beforeDestroy((0, _bind["default"])(_context = this.remove).call(_context, this));
            editor.txt.eventHooks.onBlurEvents.push((0, _bind["default"])(_context2 = this.remove).call(_context2, this));
          };
          Tooltip2.prototype.remove = function() {
            this.$container.remove();
            this._show = false;
          };
          (0, _defineProperty["default"])(Tooltip2.prototype, "isShow", {
            get: function get() {
              return this._show;
            },
            enumerable: false,
            configurable: true
          });
          return Tooltip2;
        }();
        exports2["default"] = Tooltip;
      },
      function(module2, exports2, __webpack_require__) {
        var aFunction = __webpack_require__(40);
        module2.exports = function(fn, that, length) {
          aFunction(fn);
          if (that === void 0)
            return fn;
          switch (length) {
            case 0:
              return function() {
                return fn.call(that);
              };
            case 1:
              return function(a) {
                return fn.call(that, a);
              };
            case 2:
              return function(a, b) {
                return fn.call(that, a, b);
              };
            case 3:
              return function(a, b, c) {
                return fn.call(that, a, b, c);
              };
          }
          return function() {
            return fn.apply(that, arguments);
          };
        };
      },
      function(module2, exports2) {
        module2.exports = function(it) {
          if (typeof it != "function") {
            throw TypeError(String(it) + " is not a function");
          }
          return it;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var NATIVE_WEAK_MAP = __webpack_require__(165);
        var global2 = __webpack_require__(8);
        var isObject = __webpack_require__(13);
        var createNonEnumerableProperty = __webpack_require__(19);
        var objectHas = __webpack_require__(16);
        var sharedKey = __webpack_require__(63);
        var hiddenKeys = __webpack_require__(51);
        var WeakMap = global2.WeakMap;
        var set, get, has;
        var enforce = function(it) {
          return has(it) ? get(it) : set(it, {});
        };
        var getterFor = function(TYPE) {
          return function(it) {
            var state;
            if (!isObject(it) || (state = get(it)).type !== TYPE) {
              throw TypeError("Incompatible receiver, " + TYPE + " required");
            }
            return state;
          };
        };
        if (NATIVE_WEAK_MAP) {
          var store = new WeakMap();
          var wmget = store.get;
          var wmhas = store.has;
          var wmset = store.set;
          set = function(it, metadata) {
            wmset.call(store, it, metadata);
            return metadata;
          };
          get = function(it) {
            return wmget.call(store, it) || {};
          };
          has = function(it) {
            return wmhas.call(store, it);
          };
        } else {
          var STATE = sharedKey("state");
          hiddenKeys[STATE] = true;
          set = function(it, metadata) {
            createNonEnumerableProperty(it, STATE, metadata);
            return metadata;
          };
          get = function(it) {
            return objectHas(it, STATE) ? it[STATE] : {};
          };
          has = function(it) {
            return objectHas(it, STATE);
          };
        }
        module2.exports = {
          set,
          get,
          has,
          enforce,
          getterFor
        };
      },
      function(module2, exports2) {
        module2.exports = true;
      },
      function(module2, exports2) {
        module2.exports = {};
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(213);
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(261);
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(265);
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.createElementFragment = exports2.createDocumentFragment = exports2.createElement = exports2.insertBefore = exports2.getEndPoint = exports2.getStartPoint = exports2.updateRange = exports2.filterSelectionNodes = void 0;
        var tslib_1 = __webpack_require__(2);
        var _1 = __webpack_require__(137);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        function filterSelectionNodes($nodes) {
          var $listHtml = [];
          (0, _forEach["default"])($nodes).call($nodes, function($node) {
            var targerName = $node.getNodeName();
            if (targerName !== _1.ListType.OrderedList && targerName !== _1.ListType.UnorderedList) {
              $listHtml.push($node);
            } else {
              if ($node.prior) {
                $listHtml.push($node.prior);
              } else {
                var $children = $node.children();
                $children === null || $children === void 0 ? void 0 : (0, _forEach["default"])($children).call($children, function($li) {
                  $listHtml.push(dom_core_1["default"]($li));
                });
              }
            }
          });
          return $listHtml;
        }
        exports2.filterSelectionNodes = filterSelectionNodes;
        function updateRange(editor, $node, collapsed) {
          var selection = editor.selection;
          var range = document.createRange();
          if ($node.length > 1) {
            range.setStart($node.elems[0], 0);
            range.setEnd($node.elems[$node.length - 1], $node.elems[$node.length - 1].childNodes.length);
          } else {
            range.selectNodeContents($node.elems[0]);
          }
          collapsed && range.collapse(false);
          selection.saveRange(range);
          selection.restoreSelection();
        }
        exports2.updateRange = updateRange;
        function getStartPoint($startElem) {
          var _a;
          return $startElem.prior ? $startElem.prior : dom_core_1["default"]((_a = $startElem.children()) === null || _a === void 0 ? void 0 : _a.elems[0]);
        }
        exports2.getStartPoint = getStartPoint;
        function getEndPoint($endElem) {
          var _a;
          return $endElem.prior ? $endElem.prior : dom_core_1["default"]((_a = $endElem.children()) === null || _a === void 0 ? void 0 : _a.last().elems[0]);
        }
        exports2.getEndPoint = getEndPoint;
        function insertBefore($node, newNode, existingNode) {
          if (existingNode === void 0) {
            existingNode = null;
          }
          $node.parent().elems[0].insertBefore(newNode, existingNode);
        }
        exports2.insertBefore = insertBefore;
        function createElement(target) {
          return document.createElement(target);
        }
        exports2.createElement = createElement;
        function createDocumentFragment() {
          return document.createDocumentFragment();
        }
        exports2.createDocumentFragment = createDocumentFragment;
        function createElementFragment($nodes, $fragment, tag) {
          if (tag === void 0) {
            tag = "li";
          }
          (0, _forEach["default"])($nodes).call($nodes, function($node) {
            var $list = createElement(tag);
            $list.innerHTML = $node.html();
            $fragment.appendChild($list);
            $node.remove();
          });
          return $fragment;
        }
        exports2.createElementFragment = createElementFragment;
      },
      function(module2, exports2) {
        module2.exports = function(bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value
          };
        };
      },
      function(module2, exports2) {
        module2.exports = function(it) {
          if (it == void 0)
            throw TypeError("Can't call method on " + it);
          return it;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var charAt = __webpack_require__(164).charAt;
        var InternalStateModule = __webpack_require__(41);
        var defineIterator = __webpack_require__(75);
        var STRING_ITERATOR = "String Iterator";
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
        defineIterator(String, "String", function(iterated) {
          setInternalState(this, {
            type: STRING_ITERATOR,
            string: String(iterated),
            index: 0
          });
        }, function next() {
          var state = getInternalState(this);
          var string = state.string;
          var index2 = state.index;
          var point;
          if (index2 >= string.length)
            return { value: void 0, done: true };
          point = charAt(string, index2);
          state.index += point.length;
          return { value: point, done: false };
        });
      },
      function(module2, exports2) {
        module2.exports = {};
      },
      function(module2, exports2, __webpack_require__) {
        var internalObjectKeys = __webpack_require__(106);
        var enumBugKeys = __webpack_require__(80);
        module2.exports = Object.keys || function keys(O) {
          return internalObjectKeys(O, enumBugKeys);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var createNonEnumerableProperty = __webpack_require__(19);
        module2.exports = function(target, key, value, options) {
          if (options && options.enumerable)
            target[key] = value;
          else
            createNonEnumerableProperty(target, key, value);
        };
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(173);
        var DOMIterables = __webpack_require__(174);
        var global2 = __webpack_require__(8);
        var classof = __webpack_require__(65);
        var createNonEnumerableProperty = __webpack_require__(19);
        var Iterators = __webpack_require__(43);
        var wellKnownSymbol = __webpack_require__(10);
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        for (var COLLECTION_NAME in DOMIterables) {
          var Collection = global2[COLLECTION_NAME];
          var CollectionPrototype = Collection && Collection.prototype;
          if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
            createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
          }
          Iterators[COLLECTION_NAME] = Iterators.Array;
        }
      },
      function(module2, exports2, __webpack_require__) {
        var classof = __webpack_require__(33);
        module2.exports = Array.isArray || function isArray(arg) {
          return classof(arg) == "Array";
        };
      },
      function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__(11);
        var wellKnownSymbol = __webpack_require__(10);
        var V8_VERSION = __webpack_require__(86);
        var SPECIES = wellKnownSymbol("species");
        module2.exports = function(METHOD_NAME) {
          return V8_VERSION >= 51 || !fails(function() {
            var array = [];
            var constructor = array.constructor = {};
            constructor[SPECIES] = function() {
              return { foo: 1 };
            };
            return array[METHOD_NAME](Boolean).foo !== 1;
          });
        };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(222);
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.ListHandle = void 0;
        var tslib_1 = __webpack_require__(2);
        var SelectionRangeElem_1 = tslib_1.__importDefault(__webpack_require__(373));
        var ListHandle = function() {
          function ListHandle2(options) {
            this.options = options;
            this.selectionRangeElem = new SelectionRangeElem_1["default"]();
          }
          return ListHandle2;
        }();
        exports2.ListHandle = ListHandle;
      },
      function(module2, exports2, __webpack_require__) {
        var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);
        exports2.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
          var descriptor = getOwnPropertyDescriptor(this, V);
          return !!descriptor && descriptor.enumerable;
        } : nativePropertyIsEnumerable;
      },
      function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__(13);
        module2.exports = function(input, PREFERRED_STRING) {
          if (!isObject(input))
            return input;
          var fn, val;
          if (PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input)))
            return val;
          if (typeof (fn = input.valueOf) == "function" && !isObject(val = fn.call(input)))
            return val;
          if (!PREFERRED_STRING && typeof (fn = input.toString) == "function" && !isObject(val = fn.call(input)))
            return val;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      function(module2, exports2) {
      },
      function(module2, exports2) {
        var ceil = Math.ceil;
        var floor = Math.floor;
        module2.exports = function(argument) {
          return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var shared = __webpack_require__(74);
        var uid = __webpack_require__(64);
        var keys = shared("keys");
        module2.exports = function(key) {
          return keys[key] || (keys[key] = uid(key));
        };
      },
      function(module2, exports2) {
        var id = 0;
        var postfix = Math.random();
        module2.exports = function(key) {
          return "Symbol(" + String(key === void 0 ? "" : key) + ")_" + (++id + postfix).toString(36);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var TO_STRING_TAG_SUPPORT = __webpack_require__(81);
        var classofRaw = __webpack_require__(33);
        var wellKnownSymbol = __webpack_require__(10);
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var CORRECT_ARGUMENTS = classofRaw(function() {
          return arguments;
        }()) == "Arguments";
        var tryGet = function(it, key) {
          try {
            return it[key];
          } catch (error) {
          }
        };
        module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
          var O, tag, result;
          return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : result;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__(25);
        var isArrayIteratorMethod = __webpack_require__(111);
        var toLength = __webpack_require__(34);
        var bind = __webpack_require__(39);
        var getIteratorMethod = __webpack_require__(112);
        var callWithSafeIterationClosing = __webpack_require__(113);
        var Result = function(stopped, result) {
          this.stopped = stopped;
          this.result = result;
        };
        var iterate = module2.exports = function(iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
          var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
          var iterator, iterFn, index2, length, result, next, step;
          if (IS_ITERATOR) {
            iterator = iterable;
          } else {
            iterFn = getIteratorMethod(iterable);
            if (typeof iterFn != "function")
              throw TypeError("Target is not iterable");
            if (isArrayIteratorMethod(iterFn)) {
              for (index2 = 0, length = toLength(iterable.length); length > index2; index2++) {
                result = AS_ENTRIES ? boundFunction(anObject(step = iterable[index2])[0], step[1]) : boundFunction(iterable[index2]);
                if (result && result instanceof Result)
                  return result;
              }
              return new Result(false);
            }
            iterator = iterFn.call(iterable);
          }
          next = iterator.next;
          while (!(step = next.call(iterator)).done) {
            result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
            if (typeof result == "object" && result && result instanceof Result)
              return result;
          }
          return new Result(false);
        };
        iterate.stop = function(result) {
          return new Result(true, result);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__(11);
        module2.exports = function(METHOD_NAME, argument) {
          var method = [][METHOD_NAME];
          return !!method && fails(function() {
            method.call(null, argument || function() {
              throw 1;
            }, 1);
          });
        };
      },
      function(module2, exports2) {
        module2.exports = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
      },
      function(module2, exports2, __webpack_require__) {
        var toPrimitive = __webpack_require__(60);
        var definePropertyModule = __webpack_require__(18);
        var createPropertyDescriptor = __webpack_require__(48);
        module2.exports = function(object, key, value) {
          var propertyKey = toPrimitive(key);
          if (propertyKey in object)
            definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
          else
            object[propertyKey] = value;
        };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(209);
      },
      function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(14);
        var propertyIsEnumerableModule = __webpack_require__(59);
        var createPropertyDescriptor = __webpack_require__(48);
        var toIndexedObject = __webpack_require__(28);
        var toPrimitive = __webpack_require__(60);
        var has = __webpack_require__(16);
        var IE8_DOM_DEFINE = __webpack_require__(99);
        var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        exports2.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
          O = toIndexedObject(O);
          P = toPrimitive(P, true);
          if (IE8_DOM_DEFINE)
            try {
              return nativeGetOwnPropertyDescriptor(O, P);
            } catch (error) {
            }
          if (has(O, P))
            return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__(11);
        var classof = __webpack_require__(33);
        var split = "".split;
        module2.exports = fails(function() {
          return !Object("z").propertyIsEnumerable(0);
        }) ? function(it) {
          return classof(it) == "String" ? split.call(it, "") : Object(it);
        } : Object;
      },
      function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__(8);
        var isObject = __webpack_require__(13);
        var document2 = global2.document;
        var EXISTS = isObject(document2) && isObject(document2.createElement);
        module2.exports = function(it) {
          return EXISTS ? document2.createElement(it) : {};
        };
      },
      function(module2, exports2, __webpack_require__) {
        var IS_PURE = __webpack_require__(42);
        var store = __webpack_require__(102);
        (module2.exports = function(key, value) {
          return store[key] || (store[key] = value !== void 0 ? value : {});
        })("versions", []).push({
          version: "3.6.4",
          mode: IS_PURE ? "pure" : "global",
          copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)"
        });
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var createIteratorConstructor = __webpack_require__(167);
        var getPrototypeOf = __webpack_require__(104);
        var setPrototypeOf = __webpack_require__(171);
        var setToStringTag = __webpack_require__(36);
        var createNonEnumerableProperty = __webpack_require__(19);
        var redefine = __webpack_require__(53);
        var wellKnownSymbol = __webpack_require__(10);
        var IS_PURE = __webpack_require__(42);
        var Iterators = __webpack_require__(43);
        var IteratorsCore = __webpack_require__(103);
        var IteratorPrototype = IteratorsCore.IteratorPrototype;
        var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
        var ITERATOR = wellKnownSymbol("iterator");
        var KEYS = "keys";
        var VALUES = "values";
        var ENTRIES = "entries";
        var returnThis = function() {
          return this;
        };
        module2.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
          createIteratorConstructor(IteratorConstructor, NAME, next);
          var getIterationMethod = function(KIND) {
            if (KIND === DEFAULT && defaultIterator)
              return defaultIterator;
            if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
              return IterablePrototype[KIND];
            switch (KIND) {
              case KEYS:
                return function keys() {
                  return new IteratorConstructor(this, KIND);
                };
              case VALUES:
                return function values() {
                  return new IteratorConstructor(this, KIND);
                };
              case ENTRIES:
                return function entries() {
                  return new IteratorConstructor(this, KIND);
                };
            }
            return function() {
              return new IteratorConstructor(this);
            };
          };
          var TO_STRING_TAG = NAME + " Iterator";
          var INCORRECT_VALUES_NAME = false;
          var IterablePrototype = Iterable.prototype;
          var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
          var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
          var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
          var CurrentIteratorPrototype, methods, KEY;
          if (anyNativeIterator) {
            CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
            if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
              if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                if (setPrototypeOf) {
                  setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                } else if (typeof CurrentIteratorPrototype[ITERATOR] != "function") {
                  createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
                }
              }
              setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
              if (IS_PURE)
                Iterators[TO_STRING_TAG] = returnThis;
            }
          }
          if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
              return nativeIterator.call(this);
            };
          }
          if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
            createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
          }
          Iterators[NAME] = defaultIterator;
          if (DEFAULT) {
            methods = {
              values: getIterationMethod(VALUES),
              keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
              entries: getIterationMethod(ENTRIES)
            };
            if (FORCED)
              for (KEY in methods) {
                if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                  redefine(IterablePrototype, KEY, methods[KEY]);
                }
              }
            else
              $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
          }
          return methods;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__(11);
        module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
          return !String(Symbol());
        });
      },
      function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__(25);
        var defineProperties = __webpack_require__(169);
        var enumBugKeys = __webpack_require__(80);
        var hiddenKeys = __webpack_require__(51);
        var html = __webpack_require__(107);
        var documentCreateElement = __webpack_require__(73);
        var sharedKey = __webpack_require__(63);
        var GT = ">";
        var LT = "<";
        var PROTOTYPE = "prototype";
        var SCRIPT = "script";
        var IE_PROTO = sharedKey("IE_PROTO");
        var EmptyConstructor = function() {
        };
        var scriptTag = function(content) {
          return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
        };
        var NullProtoObjectViaActiveX = function(activeXDocument2) {
          activeXDocument2.write(scriptTag(""));
          activeXDocument2.close();
          var temp = activeXDocument2.parentWindow.Object;
          activeXDocument2 = null;
          return temp;
        };
        var NullProtoObjectViaIFrame = function() {
          var iframe = documentCreateElement("iframe");
          var JS = "java" + SCRIPT + ":";
          var iframeDocument;
          iframe.style.display = "none";
          html.appendChild(iframe);
          iframe.src = String(JS);
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(scriptTag("document.F=Object"));
          iframeDocument.close();
          return iframeDocument.F;
        };
        var activeXDocument;
        var NullProtoObject = function() {
          try {
            activeXDocument = document.domain && new ActiveXObject("htmlfile");
          } catch (error) {
          }
          NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
          var length = enumBugKeys.length;
          while (length--)
            delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
          return NullProtoObject();
        };
        hiddenKeys[IE_PROTO] = true;
        module2.exports = Object.create || function create(O, Properties) {
          var result;
          if (O !== null) {
            EmptyConstructor[PROTOTYPE] = anObject(O);
            result = new EmptyConstructor();
            EmptyConstructor[PROTOTYPE] = null;
            result[IE_PROTO] = O;
          } else
            result = NullProtoObject();
          return Properties === void 0 ? result : defineProperties(result, Properties);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var toIndexedObject = __webpack_require__(28);
        var toLength = __webpack_require__(34);
        var toAbsoluteIndex = __webpack_require__(79);
        var createMethod = function(IS_INCLUDES) {
          return function($this, el, fromIndex) {
            var O = toIndexedObject($this);
            var length = toLength(O.length);
            var index2 = toAbsoluteIndex(fromIndex, length);
            var value;
            if (IS_INCLUDES && el != el)
              while (length > index2) {
                value = O[index2++];
                if (value != value)
                  return true;
              }
            else
              for (; length > index2; index2++) {
                if ((IS_INCLUDES || index2 in O) && O[index2] === el)
                  return IS_INCLUDES || index2 || 0;
              }
            return !IS_INCLUDES && -1;
          };
        };
        module2.exports = {
          includes: createMethod(true),
          indexOf: createMethod(false)
        };
      },
      function(module2, exports2, __webpack_require__) {
        var toInteger = __webpack_require__(62);
        var max = Math.max;
        var min = Math.min;
        module2.exports = function(index2, length) {
          var integer = toInteger(index2);
          return integer < 0 ? max(integer + length, 0) : min(integer, length);
        };
      },
      function(module2, exports2) {
        module2.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf"
        ];
      },
      function(module2, exports2, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(10);
        var TO_STRING_TAG = wellKnownSymbol("toStringTag");
        var test = {};
        test[TO_STRING_TAG] = "z";
        module2.exports = String(test) === "[object z]";
      },
      function(module2, exports2) {
        module2.exports = function() {
        };
      },
      function(module2, exports2) {
        module2.exports = function(it, Constructor, name) {
          if (!(it instanceof Constructor)) {
            throw TypeError("Incorrect " + (name ? name + " " : "") + "invocation");
          }
          return it;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var getBuiltIn = __webpack_require__(35);
        module2.exports = getBuiltIn("navigator", "userAgent") || "";
      },
      function(module2, exports2, __webpack_require__) {
        var aFunction = __webpack_require__(40);
        var PromiseCapability = function(C) {
          var resolve, reject;
          this.promise = new C(function($$resolve, $$reject) {
            if (resolve !== void 0 || reject !== void 0)
              throw TypeError("Bad Promise constructor");
            resolve = $$resolve;
            reject = $$reject;
          });
          this.resolve = aFunction(resolve);
          this.reject = aFunction(reject);
        };
        module2.exports.f = function(C) {
          return new PromiseCapability(C);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__(8);
        var userAgent = __webpack_require__(84);
        var process = global2.process;
        var versions = process && process.versions;
        var v8 = versions && versions.v8;
        var match, version;
        if (v8) {
          match = v8.split(".");
          version = match[0] + match[1];
        } else if (userAgent) {
          match = userAgent.match(/Edge\/(\d+)/);
          if (!match || match[1] >= 74) {
            match = userAgent.match(/Chrome\/(\d+)/);
            if (match)
              version = match[1];
          }
        }
        module2.exports = version && +version;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var util_1 = __webpack_require__(6);
        var config_1 = tslib_1.__importDefault(__webpack_require__(267));
        var selection_1 = tslib_1.__importDefault(__webpack_require__(280));
        var command_1 = tslib_1.__importDefault(__webpack_require__(281));
        var index_1 = tslib_1.__importDefault(__webpack_require__(282));
        var index_2 = tslib_1.__importDefault(__webpack_require__(301));
        var init_dom_1 = tslib_1.__importStar(__webpack_require__(416));
        var init_selection_1 = tslib_1.__importDefault(__webpack_require__(417));
        var bind_event_1 = tslib_1.__importDefault(__webpack_require__(418));
        var i18next_init_1 = tslib_1.__importDefault(__webpack_require__(419));
        var set_full_screen_1 = tslib_1.__importStar(__webpack_require__(420));
        var scroll_to_head_1 = tslib_1.__importDefault(__webpack_require__(423));
        var z_index_1 = tslib_1.__importDefault(__webpack_require__(424));
        var index_3 = tslib_1.__importDefault(__webpack_require__(425));
        var index_4 = tslib_1.__importDefault(__webpack_require__(427));
        var disable_1 = tslib_1.__importDefault(__webpack_require__(437));
        var selection_change_1 = tslib_1.__importDefault(__webpack_require__(440));
        var plugins_1 = tslib_1.__importStar(__webpack_require__(441));
        var BtnMenu_1 = tslib_1.__importDefault(__webpack_require__(23));
        var DropList_1 = tslib_1.__importDefault(__webpack_require__(133));
        var DropListMenu_1 = tslib_1.__importDefault(__webpack_require__(24));
        var Panel_1 = tslib_1.__importDefault(__webpack_require__(32));
        var PanelMenu_1 = tslib_1.__importDefault(__webpack_require__(37));
        var Tooltip_1 = tslib_1.__importDefault(__webpack_require__(38));
        var EDITOR_ID = 1;
        var Editor = function() {
          function Editor2(toolbarSelector, textSelector) {
            this.pluginsFunctionList = {};
            this.beforeDestroyHooks = [];
            this.id = "wangEditor-" + EDITOR_ID++;
            this.toolbarSelector = toolbarSelector;
            this.textSelector = textSelector;
            init_dom_1.selectorValidator(this);
            this.config = util_1.deepClone(config_1["default"]);
            this.$toolbarElem = dom_core_1["default"]("<div></div>");
            this.$textContainerElem = dom_core_1["default"]("<div></div>");
            this.$textElem = dom_core_1["default"]("<div></div>");
            this.toolbarElemId = "";
            this.textElemId = "";
            this.isFocus = false;
            this.isComposing = false;
            this.isCompatibleMode = false;
            this.selection = new selection_1["default"](this);
            this.cmd = new command_1["default"](this);
            this.txt = new index_1["default"](this);
            this.menus = new index_2["default"](this);
            this.zIndex = new z_index_1["default"]();
            this.change = new index_3["default"](this);
            this.history = new index_4["default"](this);
            this.onSelectionChange = new selection_change_1["default"](this);
            var _a = disable_1["default"](this), disable = _a.disable, enable = _a.enable;
            this.disable = disable;
            this.enable = enable;
            this.isEnable = true;
          }
          Editor2.prototype.initSelection = function(newLine) {
            init_selection_1["default"](this, newLine);
          };
          Editor2.prototype.create = function() {
            this.zIndex.init(this);
            this.isCompatibleMode = this.config.compatibleMode();
            if (!this.isCompatibleMode) {
              this.config.onchangeTimeout = 30;
            }
            i18next_init_1["default"](this);
            init_dom_1["default"](this);
            this.txt.init();
            this.menus.init();
            set_full_screen_1["default"](this);
            this.initSelection(true);
            bind_event_1["default"](this);
            this.change.observe();
            this.history.observe();
            plugins_1["default"](this);
          };
          Editor2.prototype.beforeDestroy = function(fn) {
            this.beforeDestroyHooks.push(fn);
            return this;
          };
          Editor2.prototype.destroy = function() {
            var _context;
            var _this = this;
            (0, _forEach["default"])(_context = this.beforeDestroyHooks).call(_context, function(fn) {
              return fn.call(_this);
            });
            this.$toolbarElem.remove();
            this.$textContainerElem.remove();
          };
          Editor2.prototype.fullScreen = function() {
            set_full_screen_1.setFullScreen(this);
          };
          Editor2.prototype.unFullScreen = function() {
            set_full_screen_1.setUnFullScreen(this);
          };
          Editor2.prototype.scrollToHead = function(id) {
            scroll_to_head_1["default"](this, id);
          };
          Editor2.registerMenu = function(key, Menu) {
            if (!Menu || typeof Menu !== "function")
              return;
            Editor2.globalCustomMenuConstructorList[key] = Menu;
          };
          Editor2.prototype.registerPlugin = function(name, options) {
            plugins_1.registerPlugin(name, options, this.pluginsFunctionList);
          };
          Editor2.registerPlugin = function(name, options) {
            plugins_1.registerPlugin(name, options, Editor2.globalPluginsFunctionList);
          };
          Editor2.$ = dom_core_1["default"];
          Editor2.BtnMenu = BtnMenu_1["default"];
          Editor2.DropList = DropList_1["default"];
          Editor2.DropListMenu = DropListMenu_1["default"];
          Editor2.Panel = Panel_1["default"];
          Editor2.PanelMenu = PanelMenu_1["default"];
          Editor2.Tooltip = Tooltip_1["default"];
          Editor2.globalCustomMenuConstructorList = {};
          Editor2.globalPluginsFunctionList = {};
          return Editor2;
        }();
        exports2["default"] = Editor;
      },
      function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__(13);
        var isArray = __webpack_require__(55);
        var wellKnownSymbol = __webpack_require__(10);
        var SPECIES = wellKnownSymbol("species");
        module2.exports = function(originalArray, length) {
          var C;
          if (isArray(originalArray)) {
            C = originalArray.constructor;
            if (typeof C == "function" && (C === Array || isArray(C.prototype)))
              C = void 0;
            else if (isObject(C)) {
              C = C[SPECIES];
              if (C === null)
                C = void 0;
            }
          }
          return new (C === void 0 ? Array : C)(length === 0 ? 0 : length);
        };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(185);
      },
      function(module2, exports2, __webpack_require__) {
        var requireObjectCoercible = __webpack_require__(49);
        var whitespaces = __webpack_require__(68);
        var whitespace = "[" + whitespaces + "]";
        var ltrim = RegExp("^" + whitespace + whitespace + "*");
        var rtrim = RegExp(whitespace + whitespace + "*$");
        var createMethod = function(TYPE) {
          return function($this) {
            var string = String(requireObjectCoercible($this));
            if (TYPE & 1)
              string = string.replace(ltrim, "");
            if (TYPE & 2)
              string = string.replace(rtrim, "");
            return string;
          };
        };
        module2.exports = {
          start: createMethod(1),
          end: createMethod(2),
          trim: createMethod(3)
        };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(205);
      },
      function(module2, exports2, __webpack_require__) {
        var _Symbol$iterator = __webpack_require__(227);
        var _Symbol = __webpack_require__(230);
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") {
            module2.exports = _typeof = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            module2.exports = _typeof = function _typeof2(obj2) {
              return obj2 && typeof _Symbol === "function" && obj2.constructor === _Symbol && obj2 !== _Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
        module2.exports = _typeof;
      },
      function(module2, exports2, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(10);
        exports2.f = wellKnownSymbol;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(306);
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var Panel_1 = tslib_1.__importDefault(__webpack_require__(32));
        var Menu = function() {
          function Menu2($elem, editor) {
            var _this = this;
            this.$elem = $elem;
            this.editor = editor;
            this._active = false;
            $elem.on("click", function(e) {
              var _context;
              Panel_1["default"].hideCurAllPanels();
              (0, _forEach["default"])(_context = editor.txt.eventHooks.menuClickEvents).call(_context, function(fn) {
                return fn();
              });
              e.stopPropagation();
              if (editor.selection.getRange() == null) {
                return;
              }
              _this.clickHandler(e);
            });
          }
          Menu2.prototype.clickHandler = function(e) {
          };
          Menu2.prototype.active = function() {
            this._active = true;
            this.$elem.addClass("w-e-active");
          };
          Menu2.prototype.unActive = function() {
            this._active = false;
            this.$elem.removeClass("w-e-active");
          };
          (0, _defineProperty["default"])(Menu2.prototype, "isActive", {
            get: function get() {
              return this._active;
            },
            enumerable: false,
            configurable: true
          });
          return Menu2;
        }();
        exports2["default"] = Menu;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _bind = _interopRequireDefault(__webpack_require__(57));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        var _indexOf = _interopRequireDefault(__webpack_require__(27));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var util_1 = __webpack_require__(6);
        var upload_core_1 = tslib_1.__importDefault(__webpack_require__(135));
        var progress_1 = tslib_1.__importDefault(__webpack_require__(136));
        var UploadImg = function() {
          function UploadImg2(editor) {
            this.editor = editor;
          }
          UploadImg2.prototype.insertImg = function(src, alt, href) {
            var editor = this.editor;
            var config = editor.config;
            var i18nPrefix = "validate.";
            var t = function t2(text, prefix) {
              if (prefix === void 0) {
                prefix = i18nPrefix;
              }
              return editor.i18next.t(prefix + text);
            };
            var altText = alt ? 'alt="' + alt + '" ' : "";
            var hrefText = href ? 'data-href="' + encodeURIComponent(href) + '" ' : "";
            editor.cmd["do"]("insertHTML", '<img src="' + src + '" ' + altText + hrefText + 'style="max-width:100%;" contenteditable="false"/>');
            config.linkImgCallback(src, alt, href);
            var img = document.createElement("img");
            img.onload = function() {
              img = null;
            };
            img.onerror = function() {
              config.customAlert(t("\u63D2\u5165\u56FE\u7247\u9519\u8BEF"), "error", "wangEditor: " + t("\u63D2\u5165\u56FE\u7247\u9519\u8BEF") + "\uFF0C" + t("\u56FE\u7247\u94FE\u63A5") + ' "' + src + '"\uFF0C' + t("\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25"));
              img = null;
            };
            img.onabort = function() {
              return img = null;
            };
            img.src = src;
          };
          UploadImg2.prototype.uploadImg = function(files) {
            var _this_1 = this;
            if (!files.length) {
              return;
            }
            var editor = this.editor;
            var config = editor.config;
            var i18nPrefix = "validate.";
            var t = function t2(text) {
              return editor.i18next.t(i18nPrefix + text);
            };
            var uploadImgServer = config.uploadImgServer;
            var uploadImgShowBase64 = config.uploadImgShowBase64;
            var maxSize = config.uploadImgMaxSize;
            var maxSizeM = maxSize / 1024 / 1024;
            var maxLength = config.uploadImgMaxLength;
            var uploadFileName = config.uploadFileName;
            var uploadImgParams = config.uploadImgParams;
            var uploadImgParamsWithUrl = config.uploadImgParamsWithUrl;
            var uploadImgHeaders = config.uploadImgHeaders;
            var hooks = config.uploadImgHooks;
            var timeout = config.uploadImgTimeout;
            var withCredentials = config.withCredentials;
            var customUploadImg = config.customUploadImg;
            if (!customUploadImg) {
              if (!uploadImgServer && !uploadImgShowBase64) {
                return;
              }
            }
            var resultFiles = [];
            var errInfos = [];
            util_1.arrForEach(files, function(file) {
              if (!file)
                return;
              var name = file.name || file.type.replace("/", ".");
              var size = file.size;
              if (!name || !size) {
                return;
              }
              var imgType = editor.config.uploadImgAccept.join("|");
              var imgTypeRuleStr = ".(" + imgType + ")$";
              var uploadImgAcceptRule = new RegExp(imgTypeRuleStr, "i");
              if (uploadImgAcceptRule.test(name) === false) {
                errInfos.push("\u3010" + name + "\u3011" + t("\u4E0D\u662F\u56FE\u7247"));
                return;
              }
              if (maxSize < size) {
                errInfos.push("\u3010" + name + "\u3011" + t("\u5927\u4E8E") + " " + maxSizeM + "M");
                return;
              }
              resultFiles.push(file);
            });
            if (errInfos.length) {
              config.customAlert(t("\u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7") + ": \n" + errInfos.join("\n"), "warning");
              return;
            }
            if (resultFiles.length === 0) {
              config.customAlert(t("\u4F20\u5165\u7684\u6587\u4EF6\u4E0D\u5408\u6CD5"), "warning");
              return;
            }
            if (resultFiles.length > maxLength) {
              config.customAlert(t("\u4E00\u6B21\u6700\u591A\u4E0A\u4F20") + maxLength + t("\u5F20\u56FE\u7247"), "warning");
              return;
            }
            if (customUploadImg && typeof customUploadImg === "function") {
              var _context;
              customUploadImg(resultFiles, (0, _bind["default"])(_context = this.insertImg).call(_context, this));
              return;
            }
            var formData = new FormData();
            (0, _forEach["default"])(resultFiles).call(resultFiles, function(file, index2) {
              var name = uploadFileName || file.name;
              if (resultFiles.length > 1) {
                name = name + (index2 + 1);
              }
              formData.append(name, file);
            });
            if (uploadImgServer) {
              var uploadImgServerArr = uploadImgServer.split("#");
              uploadImgServer = uploadImgServerArr[0];
              var uploadImgServerHash = uploadImgServerArr[1] || "";
              (0, _forEach["default"])(util_1).call(util_1, uploadImgParams, function(key, val) {
                if (uploadImgParamsWithUrl) {
                  if ((0, _indexOf["default"])(uploadImgServer).call(uploadImgServer, "?") > 0) {
                    uploadImgServer += "&";
                  } else {
                    uploadImgServer += "?";
                  }
                  uploadImgServer = uploadImgServer + key + "=" + val;
                }
                formData.append(key, val);
              });
              if (uploadImgServerHash) {
                uploadImgServer += "#" + uploadImgServerHash;
              }
              var xhr = upload_core_1["default"](uploadImgServer, {
                timeout,
                formData,
                headers: uploadImgHeaders,
                withCredentials: !!withCredentials,
                beforeSend: function beforeSend(xhr2) {
                  if (hooks.before)
                    return hooks.before(xhr2, editor, resultFiles);
                },
                onTimeout: function onTimeout(xhr2) {
                  config.customAlert(t("\u4E0A\u4F20\u56FE\u7247\u8D85\u65F6"), "error");
                  if (hooks.timeout)
                    hooks.timeout(xhr2, editor);
                },
                onProgress: function onProgress(percent, e) {
                  var progressBar = new progress_1["default"](editor);
                  if (e.lengthComputable) {
                    percent = e.loaded / e.total;
                    progressBar.show(percent);
                  }
                },
                onError: function onError(xhr2) {
                  config.customAlert(t("\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF"), "error", t("\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF") + "\uFF0C" + t("\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001") + ": " + xhr2.status);
                  if (hooks.error)
                    hooks.error(xhr2, editor);
                },
                onFail: function onFail(xhr2, resultStr) {
                  config.customAlert(t("\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"), "error", t("\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + ("\uFF0C" + t("\u8FD4\u56DE\u7ED3\u679C") + ": ") + resultStr);
                  if (hooks.fail)
                    hooks.fail(xhr2, editor, resultStr);
                },
                onSuccess: function onSuccess(xhr2, result) {
                  if (hooks.customInsert) {
                    var _context2;
                    hooks.customInsert((0, _bind["default"])(_context2 = _this_1.insertImg).call(_context2, _this_1), result, editor);
                    return;
                  }
                  if (result.errno != "0") {
                    config.customAlert(t("\u4E0A\u4F20\u56FE\u7247\u5931\u8D25"), "error", t("\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + "\uFF0C" + t("\u8FD4\u56DE\u7ED3\u679C") + " errno=" + result.errno);
                    if (hooks.fail)
                      hooks.fail(xhr2, editor, result);
                    return;
                  }
                  var data = result.data;
                  (0, _forEach["default"])(data).call(data, function(link) {
                    if (typeof link === "string") {
                      _this_1.insertImg(link);
                    } else {
                      _this_1.insertImg(link.url, link.alt, link.href);
                    }
                  });
                  if (hooks.success)
                    hooks.success(xhr2, editor, result);
                }
              });
              if (typeof xhr === "string") {
                config.customAlert(xhr, "error");
              }
              return;
            }
            if (uploadImgShowBase64) {
              util_1.arrForEach(files, function(file) {
                var _this = _this_1;
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function() {
                  if (!this.result)
                    return;
                  var imgLink = this.result.toString();
                  _this.insertImg(imgLink, imgLink);
                };
              });
            }
          };
          return UploadImg2;
        }();
        exports2["default"] = UploadImg;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _every = _interopRequireDefault(__webpack_require__(410));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        var _slice = _interopRequireDefault(__webpack_require__(45));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.dealTextNode = exports2.isAllTodo = exports2.isTodo = exports2.getCursorNextNode = void 0;
        function isTodo($topSelectElem) {
          if ($topSelectElem.length) {
            return $topSelectElem.attr("class") === "w-e-todo";
          }
          return false;
        }
        exports2.isTodo = isTodo;
        function isAllTodo(editor) {
          var $topSelectElems = editor.selection.getSelectionRangeTopNodes();
          if ($topSelectElems.length === 0)
            return;
          return (0, _every["default"])($topSelectElems).call($topSelectElems, function($topSelectElem) {
            return isTodo($topSelectElem);
          });
        }
        exports2.isAllTodo = isAllTodo;
        function getCursorNextNode(node, textNode, pos) {
          var _context;
          if (!node.hasChildNodes())
            return;
          var newNode = node.cloneNode();
          var end = false;
          if (textNode.nodeValue === "") {
            end = true;
          }
          var delArr = [];
          (0, _forEach["default"])(_context = node.childNodes).call(_context, function(v) {
            if (!isContains(v, textNode) && end) {
              newNode.appendChild(v.cloneNode(true));
              if (v.nodeName !== "BR") {
                delArr.push(v);
              }
            }
            if (isContains(v, textNode)) {
              if (v.nodeType === 1) {
                var childNode = getCursorNextNode(v, textNode, pos);
                if (childNode && childNode.textContent !== "")
                  newNode === null || newNode === void 0 ? void 0 : newNode.appendChild(childNode);
              }
              if (v.nodeType === 3) {
                if (textNode.isEqualNode(v)) {
                  var textContent = dealTextNode(v, pos);
                  newNode.textContent = textContent;
                }
              }
              end = true;
            }
          });
          (0, _forEach["default"])(delArr).call(delArr, function(v) {
            var node2 = v;
            node2.remove();
          });
          return newNode;
        }
        exports2.getCursorNextNode = getCursorNextNode;
        function isContains(node, otherNode) {
          if (node.nodeType === 3) {
            return node.nodeValue === otherNode.nodeValue;
          }
          return node.contains(otherNode);
        }
        function dealTextNode(node, pos, start) {
          if (start === void 0) {
            start = true;
          }
          var content = node.nodeValue;
          var oldContent = content === null || content === void 0 ? void 0 : (0, _slice["default"])(content).call(content, 0, pos);
          content = content === null || content === void 0 ? void 0 : (0, _slice["default"])(content).call(content, pos);
          if (!start) {
            var temp = content;
            content = oldContent;
            oldContent = temp;
          }
          node.nodeValue = oldContent;
          return content;
        }
        exports2.dealTextNode = dealTextNode;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var stack_1 = __webpack_require__(430);
        var Cache = function() {
          function Cache2(maxSize) {
            this.maxSize = maxSize;
            this.isRe = false;
            this.data = new stack_1.CeilStack(maxSize);
            this.revokeData = new stack_1.CeilStack(maxSize);
          }
          (0, _defineProperty["default"])(Cache2.prototype, "size", {
            get: function get() {
              return [this.data.size, this.revokeData.size];
            },
            enumerable: false,
            configurable: true
          });
          Cache2.prototype.resetMaxSize = function(maxSize) {
            this.data.resetMax(maxSize);
            this.revokeData.resetMax(maxSize);
          };
          Cache2.prototype.save = function(data) {
            if (this.isRe) {
              this.revokeData.clear();
              this.isRe = false;
            }
            this.data.instack(data);
            return this;
          };
          Cache2.prototype.revoke = function(fn) {
            !this.isRe && (this.isRe = true);
            var data = this.data.outstack();
            if (data) {
              this.revokeData.instack(data);
              fn(data);
              return true;
            }
            return false;
          };
          Cache2.prototype.restore = function(fn) {
            !this.isRe && (this.isRe = true);
            var data = this.revokeData.outstack();
            if (data) {
              this.data.instack(data);
              fn(data);
              return true;
            }
            return false;
          };
          return Cache2;
        }();
        exports2["default"] = Cache;
      },
      function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(14);
        var fails = __webpack_require__(11);
        var createElement = __webpack_require__(73);
        module2.exports = !DESCRIPTORS && !fails(function() {
          return Object.defineProperty(createElement("div"), "a", {
            get: function() {
              return 7;
            }
          }).a != 7;
        });
      },
      function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__(11);
        var replacement = /#|\.prototype\./;
        var isForced = function(feature, detection) {
          var value = data[normalize(feature)];
          return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == "function" ? fails(detection) : !!detection;
        };
        var normalize = isForced.normalize = function(string) {
          return String(string).replace(replacement, ".").toLowerCase();
        };
        var data = isForced.data = {};
        var NATIVE = isForced.NATIVE = "N";
        var POLYFILL = isForced.POLYFILL = "P";
        module2.exports = isForced;
      },
      function(module2, exports2, __webpack_require__) {
        var store = __webpack_require__(102);
        var functionToString = Function.toString;
        if (typeof store.inspectSource != "function") {
          store.inspectSource = function(it) {
            return functionToString.call(it);
          };
        }
        module2.exports = store.inspectSource;
      },
      function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__(8);
        var setGlobal = __webpack_require__(166);
        var SHARED = "__core-js_shared__";
        var store = global2[SHARED] || setGlobal(SHARED, {});
        module2.exports = store;
      },
      function(module2, exports2, __webpack_require__) {
        var getPrototypeOf = __webpack_require__(104);
        var createNonEnumerableProperty = __webpack_require__(19);
        var has = __webpack_require__(16);
        var wellKnownSymbol = __webpack_require__(10);
        var IS_PURE = __webpack_require__(42);
        var ITERATOR = wellKnownSymbol("iterator");
        var BUGGY_SAFARI_ITERATORS = false;
        var returnThis = function() {
          return this;
        };
        var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
        if ([].keys) {
          arrayIterator = [].keys();
          if (!("next" in arrayIterator))
            BUGGY_SAFARI_ITERATORS = true;
          else {
            PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
            if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
              IteratorPrototype = PrototypeOfArrayIteratorPrototype;
          }
        }
        if (IteratorPrototype == void 0)
          IteratorPrototype = {};
        if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
          createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
        }
        module2.exports = {
          IteratorPrototype,
          BUGGY_SAFARI_ITERATORS
        };
      },
      function(module2, exports2, __webpack_require__) {
        var has = __webpack_require__(16);
        var toObject = __webpack_require__(29);
        var sharedKey = __webpack_require__(63);
        var CORRECT_PROTOTYPE_GETTER = __webpack_require__(168);
        var IE_PROTO = sharedKey("IE_PROTO");
        var ObjectPrototype = Object.prototype;
        module2.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
          O = toObject(O);
          if (has(O, IE_PROTO))
            return O[IE_PROTO];
          if (typeof O.constructor == "function" && O instanceof O.constructor) {
            return O.constructor.prototype;
          }
          return O instanceof Object ? ObjectPrototype : null;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var NATIVE_SYMBOL = __webpack_require__(76);
        module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
      },
      function(module2, exports2, __webpack_require__) {
        var has = __webpack_require__(16);
        var toIndexedObject = __webpack_require__(28);
        var indexOf = __webpack_require__(78).indexOf;
        var hiddenKeys = __webpack_require__(51);
        module2.exports = function(object, names) {
          var O = toIndexedObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O)
            !has(hiddenKeys, key) && has(O, key) && result.push(key);
          while (names.length > i)
            if (has(O, key = names[i++])) {
              ~indexOf(result, key) || result.push(key);
            }
          return result;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var getBuiltIn = __webpack_require__(35);
        module2.exports = getBuiltIn("document", "documentElement");
      },
      function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__(8);
        module2.exports = global2.Promise;
      },
      function(module2, exports2, __webpack_require__) {
        var redefine = __webpack_require__(53);
        module2.exports = function(target, src, options) {
          for (var key in src) {
            if (options && options.unsafe && target[key])
              target[key] = src[key];
            else
              redefine(target, key, src[key], options);
          }
          return target;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var getBuiltIn = __webpack_require__(35);
        var definePropertyModule = __webpack_require__(18);
        var wellKnownSymbol = __webpack_require__(10);
        var DESCRIPTORS = __webpack_require__(14);
        var SPECIES = wellKnownSymbol("species");
        module2.exports = function(CONSTRUCTOR_NAME) {
          var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
          var defineProperty = definePropertyModule.f;
          if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
            defineProperty(Constructor, SPECIES, {
              configurable: true,
              get: function() {
                return this;
              }
            });
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(10);
        var Iterators = __webpack_require__(43);
        var ITERATOR = wellKnownSymbol("iterator");
        var ArrayPrototype = Array.prototype;
        module2.exports = function(it) {
          return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var classof = __webpack_require__(65);
        var Iterators = __webpack_require__(43);
        var wellKnownSymbol = __webpack_require__(10);
        var ITERATOR = wellKnownSymbol("iterator");
        module2.exports = function(it) {
          if (it != void 0)
            return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
        };
      },
      function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__(25);
        module2.exports = function(iterator, fn, value, ENTRIES) {
          try {
            return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
          } catch (error) {
            var returnMethod = iterator["return"];
            if (returnMethod !== void 0)
              anObject(returnMethod.call(iterator));
            throw error;
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(10);
        var ITERATOR = wellKnownSymbol("iterator");
        var SAFE_CLOSING = false;
        try {
          var called = 0;
          var iteratorWithReturn = {
            next: function() {
              return { done: !!called++ };
            },
            "return": function() {
              SAFE_CLOSING = true;
            }
          };
          iteratorWithReturn[ITERATOR] = function() {
            return this;
          };
          Array.from(iteratorWithReturn, function() {
            throw 2;
          });
        } catch (error) {
        }
        module2.exports = function(exec, SKIP_CLOSING) {
          if (!SKIP_CLOSING && !SAFE_CLOSING)
            return false;
          var ITERATION_SUPPORT = false;
          try {
            var object = {};
            object[ITERATOR] = function() {
              return {
                next: function() {
                  return { done: ITERATION_SUPPORT = true };
                }
              };
            };
            exec(object);
          } catch (error) {
          }
          return ITERATION_SUPPORT;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__(25);
        var aFunction = __webpack_require__(40);
        var wellKnownSymbol = __webpack_require__(10);
        var SPECIES = wellKnownSymbol("species");
        module2.exports = function(O, defaultConstructor) {
          var C = anObject(O).constructor;
          var S;
          return C === void 0 || (S = anObject(C)[SPECIES]) == void 0 ? defaultConstructor : aFunction(S);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__(8);
        var fails = __webpack_require__(11);
        var classof = __webpack_require__(33);
        var bind = __webpack_require__(39);
        var html = __webpack_require__(107);
        var createElement = __webpack_require__(73);
        var IS_IOS = __webpack_require__(117);
        var location = global2.location;
        var set = global2.setImmediate;
        var clear = global2.clearImmediate;
        var process = global2.process;
        var MessageChannel = global2.MessageChannel;
        var Dispatch = global2.Dispatch;
        var counter = 0;
        var queue = {};
        var ONREADYSTATECHANGE = "onreadystatechange";
        var defer, channel, port;
        var run = function(id) {
          if (queue.hasOwnProperty(id)) {
            var fn = queue[id];
            delete queue[id];
            fn();
          }
        };
        var runner = function(id) {
          return function() {
            run(id);
          };
        };
        var listener = function(event) {
          run(event.data);
        };
        var post = function(id) {
          global2.postMessage(id + "", location.protocol + "//" + location.host);
        };
        if (!set || !clear) {
          set = function setImmediate(fn) {
            var args = [];
            var i = 1;
            while (arguments.length > i)
              args.push(arguments[i++]);
            queue[++counter] = function() {
              (typeof fn == "function" ? fn : Function(fn)).apply(void 0, args);
            };
            defer(counter);
            return counter;
          };
          clear = function clearImmediate(id) {
            delete queue[id];
          };
          if (classof(process) == "process") {
            defer = function(id) {
              process.nextTick(runner(id));
            };
          } else if (Dispatch && Dispatch.now) {
            defer = function(id) {
              Dispatch.now(runner(id));
            };
          } else if (MessageChannel && !IS_IOS) {
            channel = new MessageChannel();
            port = channel.port2;
            channel.port1.onmessage = listener;
            defer = bind(port.postMessage, port, 1);
          } else if (global2.addEventListener && typeof postMessage == "function" && !global2.importScripts && !fails(post) && location.protocol !== "file:") {
            defer = post;
            global2.addEventListener("message", listener, false);
          } else if (ONREADYSTATECHANGE in createElement("script")) {
            defer = function(id) {
              html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
                html.removeChild(this);
                run(id);
              };
            };
          } else {
            defer = function(id) {
              setTimeout(runner(id), 0);
            };
          }
        }
        module2.exports = {
          set,
          clear
        };
      },
      function(module2, exports2, __webpack_require__) {
        var userAgent = __webpack_require__(84);
        module2.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);
      },
      function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__(25);
        var isObject = __webpack_require__(13);
        var newPromiseCapability = __webpack_require__(85);
        module2.exports = function(C, x) {
          anObject(C);
          if (isObject(x) && x.constructor === C)
            return x;
          var promiseCapability = newPromiseCapability.f(C);
          var resolve = promiseCapability.resolve;
          resolve(x);
          return promiseCapability.promise;
        };
      },
      function(module2, exports2) {
        module2.exports = function(exec) {
          try {
            return { error: false, value: exec() };
          } catch (error) {
            return { error: true, value: error };
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(197);
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var global2 = __webpack_require__(8);
        var InternalMetadataModule = __webpack_require__(122);
        var fails = __webpack_require__(11);
        var createNonEnumerableProperty = __webpack_require__(19);
        var iterate = __webpack_require__(66);
        var anInstance = __webpack_require__(83);
        var isObject = __webpack_require__(13);
        var setToStringTag = __webpack_require__(36);
        var defineProperty = __webpack_require__(18).f;
        var forEach = __webpack_require__(30).forEach;
        var DESCRIPTORS = __webpack_require__(14);
        var InternalStateModule = __webpack_require__(41);
        var setInternalState = InternalStateModule.set;
        var internalStateGetterFor = InternalStateModule.getterFor;
        module2.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
          var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
          var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
          var ADDER = IS_MAP ? "set" : "add";
          var NativeConstructor = global2[CONSTRUCTOR_NAME];
          var NativePrototype = NativeConstructor && NativeConstructor.prototype;
          var exported = {};
          var Constructor;
          if (!DESCRIPTORS || typeof NativeConstructor != "function" || !(IS_WEAK || NativePrototype.forEach && !fails(function() {
            new NativeConstructor().entries().next();
          }))) {
            Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
            InternalMetadataModule.REQUIRED = true;
          } else {
            Constructor = wrapper(function(target, iterable) {
              setInternalState(anInstance(target, Constructor, CONSTRUCTOR_NAME), {
                type: CONSTRUCTOR_NAME,
                collection: new NativeConstructor()
              });
              if (iterable != void 0)
                iterate(iterable, target[ADDER], target, IS_MAP);
            });
            var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
            forEach(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(KEY) {
              var IS_ADDER = KEY == "add" || KEY == "set";
              if (KEY in NativePrototype && !(IS_WEAK && KEY == "clear")) {
                createNonEnumerableProperty(Constructor.prototype, KEY, function(a, b) {
                  var collection = getInternalState(this).collection;
                  if (!IS_ADDER && IS_WEAK && !isObject(a))
                    return KEY == "get" ? void 0 : false;
                  var result = collection[KEY](a === 0 ? 0 : a, b);
                  return IS_ADDER ? this : result;
                });
              }
            });
            IS_WEAK || defineProperty(Constructor.prototype, "size", {
              configurable: true,
              get: function() {
                return getInternalState(this).collection.size;
              }
            });
          }
          setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);
          exported[CONSTRUCTOR_NAME] = Constructor;
          $({ global: true, forced: true }, exported);
          if (!IS_WEAK)
            common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
          return Constructor;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var hiddenKeys = __webpack_require__(51);
        var isObject = __webpack_require__(13);
        var has = __webpack_require__(16);
        var defineProperty = __webpack_require__(18).f;
        var uid = __webpack_require__(64);
        var FREEZING = __webpack_require__(200);
        var METADATA = uid("meta");
        var id = 0;
        var isExtensible = Object.isExtensible || function() {
          return true;
        };
        var setMetadata = function(it) {
          defineProperty(it, METADATA, { value: {
            objectID: "O" + ++id,
            weakData: {}
          } });
        };
        var fastKey = function(it, create) {
          if (!isObject(it))
            return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
          if (!has(it, METADATA)) {
            if (!isExtensible(it))
              return "F";
            if (!create)
              return "E";
            setMetadata(it);
          }
          return it[METADATA].objectID;
        };
        var getWeakData = function(it, create) {
          if (!has(it, METADATA)) {
            if (!isExtensible(it))
              return true;
            if (!create)
              return false;
            setMetadata(it);
          }
          return it[METADATA].weakData;
        };
        var onFreeze = function(it) {
          if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA))
            setMetadata(it);
          return it;
        };
        var meta = module2.exports = {
          REQUIRED: false,
          fastKey,
          getWeakData,
          onFreeze
        };
        hiddenKeys[METADATA] = true;
      },
      function(module2, exports2, __webpack_require__) {
        var defineProperty = __webpack_require__(18).f;
        var create = __webpack_require__(77);
        var redefineAll = __webpack_require__(109);
        var bind = __webpack_require__(39);
        var anInstance = __webpack_require__(83);
        var iterate = __webpack_require__(66);
        var defineIterator = __webpack_require__(75);
        var setSpecies = __webpack_require__(110);
        var DESCRIPTORS = __webpack_require__(14);
        var fastKey = __webpack_require__(122).fastKey;
        var InternalStateModule = __webpack_require__(41);
        var setInternalState = InternalStateModule.set;
        var internalStateGetterFor = InternalStateModule.getterFor;
        module2.exports = {
          getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
            var C = wrapper(function(that, iterable) {
              anInstance(that, C, CONSTRUCTOR_NAME);
              setInternalState(that, {
                type: CONSTRUCTOR_NAME,
                index: create(null),
                first: void 0,
                last: void 0,
                size: 0
              });
              if (!DESCRIPTORS)
                that.size = 0;
              if (iterable != void 0)
                iterate(iterable, that[ADDER], that, IS_MAP);
            });
            var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
            var define = function(that, key, value) {
              var state = getInternalState(that);
              var entry = getEntry(that, key);
              var previous, index2;
              if (entry) {
                entry.value = value;
              } else {
                state.last = entry = {
                  index: index2 = fastKey(key, true),
                  key,
                  value,
                  previous: previous = state.last,
                  next: void 0,
                  removed: false
                };
                if (!state.first)
                  state.first = entry;
                if (previous)
                  previous.next = entry;
                if (DESCRIPTORS)
                  state.size++;
                else
                  that.size++;
                if (index2 !== "F")
                  state.index[index2] = entry;
              }
              return that;
            };
            var getEntry = function(that, key) {
              var state = getInternalState(that);
              var index2 = fastKey(key);
              var entry;
              if (index2 !== "F")
                return state.index[index2];
              for (entry = state.first; entry; entry = entry.next) {
                if (entry.key == key)
                  return entry;
              }
            };
            redefineAll(C.prototype, {
              clear: function clear() {
                var that = this;
                var state = getInternalState(that);
                var data = state.index;
                var entry = state.first;
                while (entry) {
                  entry.removed = true;
                  if (entry.previous)
                    entry.previous = entry.previous.next = void 0;
                  delete data[entry.index];
                  entry = entry.next;
                }
                state.first = state.last = void 0;
                if (DESCRIPTORS)
                  state.size = 0;
                else
                  that.size = 0;
              },
              "delete": function(key) {
                var that = this;
                var state = getInternalState(that);
                var entry = getEntry(that, key);
                if (entry) {
                  var next = entry.next;
                  var prev = entry.previous;
                  delete state.index[entry.index];
                  entry.removed = true;
                  if (prev)
                    prev.next = next;
                  if (next)
                    next.previous = prev;
                  if (state.first == entry)
                    state.first = next;
                  if (state.last == entry)
                    state.last = prev;
                  if (DESCRIPTORS)
                    state.size--;
                  else
                    that.size--;
                }
                return !!entry;
              },
              forEach: function forEach(callbackfn) {
                var state = getInternalState(this);
                var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : void 0, 3);
                var entry;
                while (entry = entry ? entry.next : state.first) {
                  boundFunction(entry.value, entry.key, this);
                  while (entry && entry.removed)
                    entry = entry.previous;
                }
              },
              has: function has(key) {
                return !!getEntry(this, key);
              }
            });
            redefineAll(C.prototype, IS_MAP ? {
              get: function get(key) {
                var entry = getEntry(this, key);
                return entry && entry.value;
              },
              set: function set(key, value) {
                return define(this, key === 0 ? 0 : key, value);
              }
            } : {
              add: function add(value) {
                return define(this, value = value === 0 ? 0 : value, value);
              }
            });
            if (DESCRIPTORS)
              defineProperty(C.prototype, "size", {
                get: function() {
                  return getInternalState(this).size;
                }
              });
            return C;
          },
          setStrong: function(C, CONSTRUCTOR_NAME, IS_MAP) {
            var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
            var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
            var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
            defineIterator(C, CONSTRUCTOR_NAME, function(iterated, kind) {
              setInternalState(this, {
                type: ITERATOR_NAME,
                target: iterated,
                state: getInternalCollectionState(iterated),
                kind,
                last: void 0
              });
            }, function() {
              var state = getInternalIteratorState(this);
              var kind = state.kind;
              var entry = state.last;
              while (entry && entry.removed)
                entry = entry.previous;
              if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
                state.target = void 0;
                return { value: void 0, done: true };
              }
              if (kind == "keys")
                return { value: entry.key, done: false };
              if (kind == "values")
                return { value: entry.value, done: false };
              return { value: [entry.key, entry.value], done: false };
            }, IS_MAP ? "entries" : "values", !IS_MAP, true);
            setSpecies(CONSTRUCTOR_NAME);
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(12);
        defineWellKnownSymbol("iterator");
      },
      function(module2, exports2, __webpack_require__) {
        var internalObjectKeys = __webpack_require__(106);
        var enumBugKeys = __webpack_require__(80);
        var hiddenKeys = enumBugKeys.concat("length", "prototype");
        exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
          return internalObjectKeys(O, hiddenKeys);
        };
      },
      function(module2, exports2) {
        exports2.f = Object.getOwnPropertySymbols;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(268);
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2["default"] = {
          zIndex: 1e4
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2["default"] = {
          focus: true,
          height: 300,
          placeholder: "\u8BF7\u8F93\u5165\u6B63\u6587",
          zIndexFullScreen: 10002,
          showFullScreen: true
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.getPasteImgs = exports2.getPasteHtml = exports2.getPasteText = void 0;
        var tslib_1 = __webpack_require__(2);
        var util_1 = __webpack_require__(6);
        var parse_html_1 = tslib_1.__importDefault(__webpack_require__(292));
        function getPasteText(e) {
          var clipboardData = e.clipboardData;
          var pasteText = "";
          if (clipboardData == null) {
            pasteText = window.clipboardData && window.clipboardData.getData("text");
          } else {
            pasteText = clipboardData.getData("text/plain");
          }
          return util_1.replaceHtmlSymbol(pasteText);
        }
        exports2.getPasteText = getPasteText;
        function getPasteHtml(e, filterStyle, ignoreImg) {
          if (filterStyle === void 0) {
            filterStyle = true;
          }
          if (ignoreImg === void 0) {
            ignoreImg = false;
          }
          var clipboardData = e.clipboardData;
          var pasteHtml = "";
          if (clipboardData) {
            pasteHtml = clipboardData.getData("text/html");
          }
          if (!pasteHtml) {
            var text = getPasteText(e);
            if (!text) {
              return "";
            }
            pasteHtml = "<p>" + text + "</p>";
          }
          pasteHtml = pasteHtml.replace(/<(\d)/gm, function(_, num) {
            return "&lt;" + num;
          });
          pasteHtml = pasteHtml.replace(/<(\/?meta.*?)>/gim, "");
          pasteHtml = parse_html_1["default"](pasteHtml, filterStyle, ignoreImg);
          return pasteHtml;
        }
        exports2.getPasteHtml = getPasteHtml;
        function getPasteImgs(e) {
          var _a;
          var result = [];
          var txt = getPasteText(e);
          if (txt) {
            return result;
          }
          var items = (_a = e.clipboardData) === null || _a === void 0 ? void 0 : _a.items;
          if (!items)
            return result;
          (0, _forEach["default"])(util_1).call(util_1, items, function(key, value) {
            var type = value.type;
            if (/image/i.test(type)) {
              result.push(value.getAsFile());
            }
          });
          return result;
        }
        exports2.getPasteImgs = getPasteImgs;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(294);
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(310);
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        var _setTimeout2 = _interopRequireDefault(__webpack_require__(46));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var const_1 = __webpack_require__(7);
        var DropList = function() {
          function DropList2(menu, conf) {
            var _this = this;
            this.hideTimeoutId = 0;
            this.menu = menu;
            this.conf = conf;
            var $container = dom_core_1["default"]('<div class="w-e-droplist"></div>');
            var $title = dom_core_1["default"]("<p>" + conf.title + "</p>");
            $title.addClass("w-e-dp-title");
            $container.append($title);
            var list = conf.list || [];
            var type = conf.type || "list";
            var clickHandler = conf.clickHandler || const_1.EMPTY_FN;
            var $list = dom_core_1["default"]('<ul class="' + (type === "list" ? "w-e-list" : "w-e-block") + '"></ul>');
            (0, _forEach["default"])(list).call(list, function(item) {
              var $elem = item.$elem;
              var value = item.value;
              var $li = dom_core_1["default"]('<li class="w-e-item"></li>');
              if ($elem) {
                $li.append($elem);
                $list.append($li);
                $li.on("click", function(e) {
                  clickHandler(value);
                  e.stopPropagation();
                  _this.hideTimeoutId = (0, _setTimeout2["default"])(function() {
                    _this.hide();
                  });
                });
              }
            });
            $container.append($list);
            $container.on("mouseleave", function() {
              _this.hideTimeoutId = (0, _setTimeout2["default"])(function() {
                _this.hide();
              });
            });
            this.$container = $container;
            this.rendered = false;
            this._show = false;
          }
          DropList2.prototype.show = function() {
            if (this.hideTimeoutId) {
              clearTimeout(this.hideTimeoutId);
            }
            var menu = this.menu;
            var $menuELem = menu.$elem;
            var $container = this.$container;
            if (this._show) {
              return;
            }
            if (this.rendered) {
              $container.show();
            } else {
              var menuHeight = $menuELem.getBoundingClientRect().height || 0;
              var width = this.conf.width || 100;
              $container.css("margin-top", menuHeight + "px").css("width", width + "px");
              $menuELem.append($container);
              this.rendered = true;
            }
            this._show = true;
          };
          DropList2.prototype.hide = function() {
            var $container = this.$container;
            if (!this._show) {
              return;
            }
            $container.hide();
            this._show = false;
          };
          (0, _defineProperty["default"])(DropList2.prototype, "isShow", {
            get: function get() {
              return this._show;
            },
            enumerable: false,
            configurable: true
          });
          return DropList2;
        }();
        exports2["default"] = DropList;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        function isActive(editor) {
          var $selectionELem = editor.selection.getSelectionContainerElem();
          if (!($selectionELem === null || $selectionELem === void 0 ? void 0 : $selectionELem.length)) {
            return false;
          }
          if ($selectionELem.getNodeName() === "A") {
            return true;
          } else {
            return false;
          }
        }
        exports2["default"] = isActive;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _typeof2 = _interopRequireDefault(__webpack_require__(92));
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var util_1 = __webpack_require__(6);
        function post(url, option) {
          var xhr = new XMLHttpRequest();
          xhr.open("POST", url);
          xhr.timeout = option.timeout || 10 * 1e3;
          xhr.ontimeout = function() {
            console.error("wangEditor - \u8BF7\u6C42\u8D85\u65F6");
            option.onTimeout && option.onTimeout(xhr);
          };
          if (xhr.upload) {
            xhr.upload.onprogress = function(e) {
              var percent = e.loaded / e.total;
              option.onProgress && option.onProgress(percent, e);
            };
          }
          if (option.headers) {
            (0, _forEach["default"])(util_1).call(util_1, option.headers, function(key, val) {
              xhr.setRequestHeader(key, val);
            });
          }
          xhr.withCredentials = !!option.withCredentials;
          if (option.beforeSend) {
            var beforeResult = option.beforeSend(xhr);
            if (beforeResult && (0, _typeof2["default"])(beforeResult) === "object") {
              if (beforeResult.prevent) {
                return beforeResult.msg;
              }
            }
          }
          xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4)
              return;
            var status = xhr.status;
            if (status < 200)
              return;
            if (status >= 300 && status < 400)
              return;
            if (status >= 400) {
              console.error("wangEditor - XHR \u62A5\u9519\uFF0C\u72B6\u6001\u7801 " + status);
              if (option.onError)
                option.onError(xhr);
              return;
            }
            var resultStr = xhr.responseText;
            var result;
            if ((0, _typeof2["default"])(resultStr) !== "object") {
              try {
                result = JSON.parse(resultStr);
              } catch (ex) {
                console.error("wangEditor - \u8FD4\u56DE\u7ED3\u679C\u4E0D\u662F JSON \u683C\u5F0F", resultStr);
                if (option.onFail)
                  option.onFail(xhr, resultStr);
                return;
              }
            } else {
              result = resultStr;
            }
            option.onSuccess(xhr, result);
          };
          xhr.send(option.formData || null);
          return xhr;
        }
        exports2["default"] = post;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _now = _interopRequireDefault(__webpack_require__(342));
        var _setTimeout2 = _interopRequireDefault(__webpack_require__(46));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var Progress = function() {
          function Progress2(editor) {
            this.editor = editor;
            this.$textContainer = editor.$textContainerElem;
            this.$bar = dom_core_1["default"]('<div class="w-e-progress"></div>');
            this.isShow = false;
            this.time = 0;
            this.timeoutId = 0;
          }
          Progress2.prototype.show = function(progress) {
            var _this = this;
            if (this.isShow) {
              return;
            }
            this.isShow = true;
            var $bar = this.$bar;
            var $textContainer = this.$textContainer;
            $textContainer.append($bar);
            if ((0, _now["default"])() - this.time > 100) {
              if (progress <= 1) {
                $bar.css("width", progress * 100 + "%");
                this.time = (0, _now["default"])();
              }
            }
            var timeoutId = this.timeoutId;
            if (timeoutId) {
              clearTimeout(timeoutId);
            }
            this.timeoutId = (0, _setTimeout2["default"])(function() {
              _this.hide();
            }, 500);
          };
          Progress2.prototype.hide = function() {
            var $bar = this.$bar;
            $bar.remove();
            this.isShow = false;
            this.time = 0;
            this.timeoutId = 0;
          };
          return Progress2;
        }();
        exports2["default"] = Progress;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.ListType = void 0;
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var DropListMenu_1 = tslib_1.__importDefault(__webpack_require__(24));
        var utils_1 = __webpack_require__(47);
        var ListHandle_1 = tslib_1.__importStar(__webpack_require__(371));
        var ListType;
        (function(ListType2) {
          ListType2["OrderedList"] = "OL";
          ListType2["UnorderedList"] = "UL";
        })(ListType = exports2.ListType || (exports2.ListType = {}));
        var List = function(_super) {
          tslib_1.__extends(List2, _super);
          function List2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u5E8F\u5217">\n                <i class="w-e-icon-list2"></i>\n            </div>');
            var dropListConf = {
              width: 130,
              title: "\u5E8F\u5217",
              type: "list",
              list: [{
                $elem: dom_core_1["default"]('\n                        <p>\n                            <i class="w-e-icon-list2 w-e-drop-list-item"></i>\n                            ' + editor.i18next.t("menus.dropListMenu.list.\u65E0\u5E8F\u5217\u8868") + "\n                        <p>"),
                value: ListType.UnorderedList
              }, {
                $elem: dom_core_1["default"]('<p>\n                            <i class="w-e-icon-list-numbered w-e-drop-list-item"></i>\n                            ' + editor.i18next.t("menus.dropListMenu.list.\u6709\u5E8F\u5217\u8868") + "\n                        <p>"),
                value: ListType.OrderedList
              }],
              clickHandler: function clickHandler(value) {
                _this.command(value);
              }
            };
            _this = _super.call(this, $elem, editor, dropListConf) || this;
            return _this;
          }
          List2.prototype.command = function(type) {
            var editor = this.editor;
            var $selectionElem = editor.selection.getSelectionContainerElem();
            if ($selectionElem === void 0)
              return;
            this.handleSelectionRangeNodes(type);
            this.tryChangeActive();
          };
          List2.prototype.validator = function($startElem, $endElem, $textElem) {
            if (!$startElem.length || !$endElem.length || $textElem.equal($startElem) || $textElem.equal($endElem)) {
              return false;
            }
            return true;
          };
          List2.prototype.handleSelectionRangeNodes = function(listType) {
            var editor = this.editor;
            var selection = editor.selection;
            var listTarget = listType.toLowerCase();
            var $selectionElem = selection.getSelectionContainerElem();
            var $startElem = selection.getSelectionStartElem().getNodeTop(editor);
            var $endElem = selection.getSelectionEndElem().getNodeTop(editor);
            if (!this.validator($startElem, $endElem, editor.$textElem)) {
              return;
            }
            var _range = selection.getRange();
            var _collapsed = _range === null || _range === void 0 ? void 0 : _range.collapsed;
            if (!editor.$textElem.equal($selectionElem)) {
              $selectionElem = $selectionElem.getNodeTop(editor);
            }
            var options = {
              editor,
              listType,
              listTarget,
              $selectionElem,
              $startElem,
              $endElem
            };
            var classType;
            if (this.isOrderElem($selectionElem)) {
              classType = ListHandle_1.ClassType.Wrap;
            } else if (this.isOrderElem($startElem) && this.isOrderElem($endElem)) {
              classType = ListHandle_1.ClassType.Join;
            } else if (this.isOrderElem($startElem)) {
              classType = ListHandle_1.ClassType.StartJoin;
            } else if (this.isOrderElem($endElem)) {
              classType = ListHandle_1.ClassType.EndJoin;
            } else {
              classType = ListHandle_1.ClassType.Other;
            }
            var listHandleCmd = new ListHandle_1["default"](ListHandle_1.createListHandle(classType, options, _range));
            utils_1.updateRange(editor, listHandleCmd.getSelectionRangeElem(), !!_collapsed);
          };
          List2.prototype.isOrderElem = function($node) {
            var nodeName = $node.getNodeName();
            if (nodeName === ListType.OrderedList || nodeName === ListType.UnorderedList) {
              return true;
            }
            return false;
          };
          List2.prototype.tryChangeActive = function() {
          };
          return List2;
        }(DropListMenu_1["default"]);
        exports2["default"] = List;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(395);
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        function isActive(editor) {
          var $selectionELem = editor.selection.getSelectionContainerElem();
          if (!($selectionELem === null || $selectionELem === void 0 ? void 0 : $selectionELem.length)) {
            return false;
          }
          if ($selectionELem.getNodeName() == "CODE" || $selectionELem.getNodeName() == "PRE" || $selectionELem.parent().getNodeName() == "CODE" || $selectionELem.parent().getNodeName() == "PRE" || /hljs/.test($selectionELem.parent().attr("class"))) {
            return true;
          } else {
            return false;
          }
        }
        exports2["default"] = isActive;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _find = _interopRequireDefault(__webpack_require__(31));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.todo = void 0;
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var todo = function() {
          function todo2($orginElem) {
            var _a;
            this.template = '<ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span></li></ul>';
            this.checked = false;
            this.$todo = dom_core_1["default"](this.template);
            this.$child = (_a = $orginElem === null || $orginElem === void 0 ? void 0 : $orginElem.childNodes()) === null || _a === void 0 ? void 0 : _a.clone(true);
          }
          todo2.prototype.init = function() {
            var $child = this.$child;
            var $inputContainer = this.getInputContainer();
            if ($child) {
              $child.insertAfter($inputContainer);
            }
          };
          todo2.prototype.getInput = function() {
            var $todo = this.$todo;
            var $input = (0, _find["default"])($todo).call($todo, "input");
            return $input;
          };
          todo2.prototype.getInputContainer = function() {
            var $inputContainer = this.getInput().parent();
            return $inputContainer;
          };
          todo2.prototype.getTodo = function() {
            return this.$todo;
          };
          return todo2;
        }();
        exports2.todo = todo;
        function createTodo($orginElem) {
          var t = new todo($orginElem);
          t.init();
          return t;
        }
        exports2["default"] = createTodo;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        __webpack_require__(146);
        __webpack_require__(148);
        __webpack_require__(152);
        __webpack_require__(154);
        __webpack_require__(156);
        __webpack_require__(158);
        __webpack_require__(160);
        var index_1 = tslib_1.__importDefault(__webpack_require__(87));
        tslib_1.__exportStar(__webpack_require__(442), exports2);
        try {
          document;
        } catch (ex) {
          throw new Error("\u8BF7\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E0B\u8FD0\u884C");
        }
        exports2["default"] = index_1["default"];
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(143);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(144);
        var path = __webpack_require__(9);
        var Object2 = path.Object;
        var defineProperty = module2.exports = function defineProperty2(it, key, desc) {
          return Object2.defineProperty(it, key, desc);
        };
        if (Object2.defineProperty.sham)
          defineProperty.sham = true;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var DESCRIPTORS = __webpack_require__(14);
        var objectDefinePropertyModile = __webpack_require__(18);
        $({ target: "Object", stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
          defineProperty: objectDefinePropertyModile.f
        });
      },
      function(module2, exports2) {
        var g;
        g = function() {
          return this;
        }();
        try {
          g = g || new Function("return this")();
        } catch (e) {
          if (typeof window === "object")
            g = window;
        }
        module2.exports = g;
      },
      function(module2, exports2, __webpack_require__) {
        var api = __webpack_require__(20);
        var content = __webpack_require__(147);
        content = content.__esModule ? content.default : content;
        if (typeof content === "string") {
          content = [[module2.i, content, ""]];
        }
        var options = {};
        options.insert = "head";
        options.singleton = false;
        api(content, options);
        module2.exports = content.locals || {};
      },
      function(module2, exports2, __webpack_require__) {
        var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
        exports2 = ___CSS_LOADER_API_IMPORT___(false);
        exports2.push([module2.i, '.w-e-toolbar,\n.w-e-text-container,\n.w-e-menu-panel {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  background-color: #fff;\n  /*\u8868\u60C5\u83DC\u5355\u6837\u5F0F*/\n  /*\u5206\u5272\u7EBF\u6837\u5F0F*/\n}\n.w-e-toolbar h1,\n.w-e-text-container h1,\n.w-e-menu-panel h1 {\n  font-size: 32px !important;\n}\n.w-e-toolbar h2,\n.w-e-text-container h2,\n.w-e-menu-panel h2 {\n  font-size: 24px !important;\n}\n.w-e-toolbar h3,\n.w-e-text-container h3,\n.w-e-menu-panel h3 {\n  font-size: 18.72px !important;\n}\n.w-e-toolbar h4,\n.w-e-text-container h4,\n.w-e-menu-panel h4 {\n  font-size: 16px !important;\n}\n.w-e-toolbar h5,\n.w-e-text-container h5,\n.w-e-menu-panel h5 {\n  font-size: 13.28px !important;\n}\n.w-e-toolbar p,\n.w-e-text-container p,\n.w-e-menu-panel p {\n  font-size: 16px !important;\n}\n.w-e-toolbar .eleImg,\n.w-e-text-container .eleImg,\n.w-e-menu-panel .eleImg {\n  cursor: pointer;\n  display: inline-block;\n  font-size: 18px;\n  padding: 0 3px;\n}\n.w-e-toolbar *,\n.w-e-text-container *,\n.w-e-menu-panel * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.w-e-toolbar hr,\n.w-e-text-container hr,\n.w-e-menu-panel hr {\n  cursor: pointer;\n  display: block;\n  height: 0px;\n  border: 0;\n  border-top: 3px solid #ccc;\n  margin: 20px 0;\n}\n.w-e-clear-fix:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n.w-e-drop-list-item {\n  position: relative;\n  top: 1px;\n  padding-right: 7px;\n  color: #333 !important;\n}\n.w-e-drop-list-tl {\n  padding-left: 10px;\n  text-align: left;\n}\n', ""]);
        module2.exports = exports2;
      },
      function(module2, exports2, __webpack_require__) {
        var api = __webpack_require__(20);
        var content = __webpack_require__(149);
        content = content.__esModule ? content.default : content;
        if (typeof content === "string") {
          content = [[module2.i, content, ""]];
        }
        var options = {};
        options.insert = "head";
        options.singleton = false;
        api(content, options);
        module2.exports = content.locals || {};
      },
      function(module2, exports2, __webpack_require__) {
        var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
        var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(150);
        var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(151);
        exports2 = ___CSS_LOADER_API_IMPORT___(false);
        var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
        exports2.push([module2.i, "@font-face {\n  font-family: 'w-e-icon';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + `) format('truetype');
  font-weight: normal;
  font-style: normal;
}
[class^="w-e-icon-"],
[class*=" w-e-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'w-e-icon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.w-e-icon-close:before {
  content: "\\f00d";
}
.w-e-icon-upload2:before {
  content: "\\e9c6";
}
.w-e-icon-trash-o:before {
  content: "\\f014";
}
.w-e-icon-header:before {
  content: "\\f1dc";
}
.w-e-icon-pencil2:before {
  content: "\\e906";
}
.w-e-icon-paint-brush:before {
  content: "\\f1fc";
}
.w-e-icon-image:before {
  content: "\\e90d";
}
.w-e-icon-play:before {
  content: "\\e912";
}
.w-e-icon-location:before {
  content: "\\e947";
}
.w-e-icon-undo:before {
  content: "\\e965";
}
.w-e-icon-redo:before {
  content: "\\e966";
}
.w-e-icon-quotes-left:before {
  content: "\\e977";
}
.w-e-icon-list-numbered:before {
  content: "\\e9b9";
}
.w-e-icon-list2:before {
  content: "\\e9bb";
}
.w-e-icon-link:before {
  content: "\\e9cb";
}
.w-e-icon-happy:before {
  content: "\\e9df";
}
.w-e-icon-bold:before {
  content: "\\ea62";
}
.w-e-icon-underline:before {
  content: "\\ea63";
}
.w-e-icon-italic:before {
  content: "\\ea64";
}
.w-e-icon-strikethrough:before {
  content: "\\ea65";
}
.w-e-icon-table2:before {
  content: "\\ea71";
}
.w-e-icon-paragraph-left:before {
  content: "\\ea77";
}
.w-e-icon-paragraph-center:before {
  content: "\\ea78";
}
.w-e-icon-paragraph-right:before {
  content: "\\ea79";
}
.w-e-icon-paragraph-justify:before {
  content: "\\ea7a";
}
.w-e-icon-terminal:before {
  content: "\\f120";
}
.w-e-icon-page-break:before {
  content: "\\ea68";
}
.w-e-icon-cancel-circle:before {
  content: "\\ea0d";
}
.w-e-icon-font:before {
  content: "\\ea5c";
}
.w-e-icon-text-heigh:before {
  content: "\\ea5f";
}
.w-e-icon-paint-format:before {
  content: "\\e90c";
}
.w-e-icon-indent-increase:before {
  content: "\\ea7b";
}
.w-e-icon-indent-decrease:before {
  content: "\\ea7c";
}
.w-e-icon-row-height:before {
  content: "\\e9be";
}
.w-e-icon-fullscreen_exit:before {
  content: "\\e900";
}
.w-e-icon-fullscreen:before {
  content: "\\e901";
}
.w-e-icon-split-line:before {
  content: "\\ea0b";
}
.w-e-icon-checkbox-checked:before {
  content: "\\ea52";
}
`, ""]);
        module2.exports = exports2;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = function(url, options) {
          if (!options) {
            options = {};
          }
          url = url && url.__esModule ? url.default : url;
          if (typeof url !== "string") {
            return url;
          }
          if (/^['"].*['"]$/.test(url)) {
            url = url.slice(1, -1);
          }
          if (options.hash) {
            url += options.hash;
          }
          if (/["'() \t\n]/.test(url) || options.needQuotes) {
            return '"'.concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"');
          }
          return url;
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = "data:font/woff;base64,d09GRgABAAAAABskAAsAAAAAGtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPFWNtYXAAAAFoAAABHAAAARz2mfAgZ2FzcAAAAoQAAAAIAAAACAAAABBnbHlmAAACjAAAFXwAABV8IH7+mGhlYWQAABgIAAAANgAAADYb6gumaGhlYQAAGEAAAAAkAAAAJAkjBWlobXR4AAAYZAAAAKQAAACkmYcEbmxvY2EAABkIAAAAVAAAAFReAmKYbWF4cAAAGVwAAAAgAAAAIAA0ALZuYW1lAAAZfAAAAYYAAAGGmUoJ+3Bvc3QAABsEAAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAQAAAAA8ACAABAAcAAEAIOkB6QbpDekS6UfpZul36bnpu+m+6cbpy+nf6gvqDepS6lzqX+pl6nHqfPAN8BTxIPHc8fz//f//AAAAAAAg6QDpBukM6RLpR+ll6Xfpuem76b7pxunL6d/qC+oN6lLqXOpf6mLqcep38A3wFPEg8dzx/P/9//8AAf/jFwQXABb7FvcWwxamFpYWVRZUFlIWSxZHFjQWCRYIFcQVuxW5FbcVrBWnEBcQEQ8GDksOLAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAEEAAQO/A38ABQALABEAFwAAATMVIREzAxEhFSMVATUzESE1ETUhESM1Av/A/sJ+fgE+wP4Cfv7CAT5+Ar9+AT78ggE+fsACvsD+wn7+An7+wsAAAAAABABBAAEDvwN/AAUACwARABcAAAEhESM1IxM1MxEhNQERIRUjFREVMxUhEQKBAT5+wMB+/sL9wAE+wMD+wgN//sLA/X7A/sJ+AcIBPn7A/v7AfgE+AAAAAAIAAP/ABAADwAAEABMAAAE3AScBAy4BJxM3ASMBAyUBNQEHAYCAAcBA/kCfFzsyY4ABgMD+gMACgAGA/oBOAUBAAcBA/kD+nTI7FwERTgGA/oD9gMABgMD+gIAAAgAA/8AEAAOAACkALQAAAREjNTQmIyEiBh0BFBYzITI2PQEzESEVIyIGFREUFjsBMjY1ETQmKwE1ASE1IQQAwCYa/UAaJiYaAsAaJoD9wCANExMNgA0TEw0gAUD9QALAAYABgEAaJiYawBomJhpA/wCAEw3+wA0TEw0BQA0TQAGAQAAABAAAAAAEAAOAABAAIQAtADQAAAE4ATEROAExITgBMRE4ATEhNSEiBhURFBYzITI2NRE0JiMHFAYjIiY1NDYzMhYTITUTATM3A8D8gAOA/IAaJiYaA4AaJiYagDgoKDg4KCg4QP0A4AEAQOADQP0AAwBAJhr9ABomJhoDABom4Cg4OCgoODj9uIABgP7AwAAAAgAAAEAEAANAADgAPAAAASYnLgEnJiMiBw4BBwYHBgcOAQcGFRQXHgEXFhcWFx4BFxYzMjc+ATc2NzY3PgE3NjU0Jy4BJyYnARENAQPVNjg5djw9Pz89PHY5ODYLBwgLAwMDAwsIBws2ODl2PD0/Pz08djk4NgsHCAsDAwMDCwgHC/2rAUD+wAMgCAYGCAICAgIIBgYIKSoqWS0uLy8uLVkqKikIBgYIAgICAggGBggpKipZLS4vLy4tWSoqKf3gAYDAwAAAAAACAMD/wANAA8AAGwAnAAABIgcOAQcGFRQXHgEXFjEwNz4BNzY1NCcuAScmAyImNTQ2MzIWFRQGAgBCOzpXGRkyMngyMjIyeDIyGRlXOjtCUHBwUFBwcAPAGRlXOjtCeH19zEFBQUHMfX14Qjs6VxkZ/gBwUFBwcFBQcAAAAQAAAAAEAAOAACsAAAEiBw4BBwYHJxEhJz4BMzIXHgEXFhUUBw4BBwYHFzY3PgE3NjU0Jy4BJyYjAgA1MjJcKSkjlgGAkDWLUFBFRmkeHgkJIhgYHlUoICAtDAwoKIteXWoDgAoLJxscI5b+gJA0PB4eaUZFUCsoKUkgIRpgIysrYjY2OWpdXosoKAABAAAAAAQAA4AAKgAAExQXHgEXFhc3JicuAScmNTQ3PgE3NjMyFhcHIREHJicuAScmIyIHDgEHBgAMDC0gIChVHhgYIgkJHh5pRkVQUIs1kAGAliMpKVwyMjVqXV6LKCgBgDk2NmIrKyNgGiEgSSkoK1BFRmkeHjw0kAGAliMcGycLCigoi15dAAAAAAIAAABABAEDAAAmAE0AABMyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+ASEyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+AeEuKSk9ERISET0pKS4uKSk9ERIBIyN6UlFdQHUtCRAHCBICSS4pKT0REhIRPSkpLi4pKT0REgEjI3pSUV1AdS0JEAcIEgIAEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBAAAGAED/wAQAA8AAAwAHAAsAEQAdACkAACUhFSERIRUhESEVIScRIzUjNRMVMxUjNTc1IzUzFRURIzUzNSM1MzUjNQGAAoD9gAKA/YACgP2AwEBAQIDAgIDAwICAgICAgAIAgAIAgMD/AMBA/fIyQJI8MkCS7v7AQEBAQEAABgAA/8AEAAPAAAMABwALABcAIwAvAAABIRUhESEVIREhFSEBNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYBgAKA/YACgP2AAoD9gP6ASzU1S0s1NUtLNTVLSzU1S0s1NUtLNTVLA4CA/wCA/wCAA0A1S0s1NUtL/rU1S0s1NUtL/rU1S0s1NUtLAAUAAABABWADAAADAAcACwAOABEAABMhFSEVIRUhFSEVIQEXNzUnBwADgPyAA4D8gAOA/IAD4MDAwMADAMBAwEDAAUDAwEDAwAAAAAADAAAAAAQAA6AAAwANABQAADchFSElFSE1EyEVITUhJQkBIxEjEQAEAPwABAD8AIABAAEAAQD9YAEgASDggEBAwEBAAQCAgMABIP7g/wABAAAAAAACAB7/zAPiA7QAMwBkAAABIiYnJicmNDc2PwE+ATMyFhcWFxYUBwYPAQYiJyY0PwE2NCcuASMiBg8BBhQXFhQHDgEjAyImJyYnJjQ3Nj8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFxYUBwYPAQ4BIwG4ChMIIxISEhIjwCNZMTFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PCBMKuDFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PDysQIxISEhIjwCNZMQFECAckLS1eLS0kwCIlJSIkLS1eLS0kVxAQDysPWCl0KRQVFRTAKXQpDysQBwj+iCUiJC0tXi0tJFcQEA8rD1gpdCkUFRUUwCl0KQ8rEA8PJC0tXi0tJMAiJQAAAAAFAAD/wAQAA8AAGwA3AFMAXwBrAAAFMjc+ATc2NTQnLgEnJiMiBw4BBwYVFBceARcWEzIXHgEXFhUUBw4BBwYjIicuAScmNTQ3PgE3NhMyNz4BNzY3BgcOAQcGIyInLgEnJicWFx4BFxYnNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYCAGpdXosoKCgoi15dampdXosoKCgoi15dalZMTHEgISEgcUxMVlZMTHEgISEgcUxMVisrKlEmJiMFHBtWODc/Pzc4VhscBSMmJlEqK9UlGxslJRsbJQGAJRsbJSUbGyVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoA6AhIHFMTFZWTExxICEhIHFMTFZWTExxICH+CQYGFRAQFEM6OlYYGRkYVjo6QxQQEBUGBvcoODgoKDg4KCg4OCgoODgAAAEAAAFABAACQAAPAAATFRQWMyEyNj0BNCYjISIGABMNA8ANExMN/EANEwIgwA0TEw3ADRMTAAAAAwAA/8AEAAPAABsANwBDAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBhMHJwcXBxc3FzcnNwIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTExKoKBgoKBgoKBgoKADwCgoi15dampdXosoKCgoi15dampdXosoKPxgISBxTExWVkxMcSAhISBxTExWVkxMcSAhAqCgoGCgoGCgoGCgoAACAAD/wAQAA8AADwAVAAABISIGFREUFjMhMjY1ETQmASc3FwEXA4D9ADVLSzUDADVLS/4L7VqTATNaA8BLNf0ANUtLNQMANUv85e5akgEyWgAAAAABAGX/wAObA8AAKQAAASImIyIHDgEHBhUUFjMuATU0NjcwBwYCBwYHFSETMzcjNx4BMzI2Nw4BAyBEaEZxU1RtGhtJSAYNZUoQEEs8PFkBPWzGLNc0LVUmLlAYHT0DsBAeHWE+P0FNOwsmN5lvA31+/sWPkCMZAgCA9gkPN2sJBwAAAAACAAAAAAQAA4AACQAXAAAlMwcnMxEjNxcjJREnIxEzFSE1MxEjBxEDgICgoICAoKCA/wBAwID+gIDAQMDAwAIAwMDA/wCA/UBAQALAgAEAAAMAwAAAA0ADgAAWAB8AKAAAAT4BNTQnLgEnJiMhESEyNz4BNzY1NCYBMzIWFRQGKwETIxEzMhYVFAYCxBwgFBRGLi81/sABgDUvLkYUFET+hGUqPDwpZp+fnyw+PgHbIlQvNS8uRhQU/IAUFEYuLzVGdAFGSzU1S/6AAQBLNTVLAAAAAAIAwAAAA0ADgAAfACMAAAEzERQHDgEHBiMiJy4BJyY1ETMRFBYXHgEzMjY3PgE1ASEVIQLAgBkZVzo7QkI7OlcZGYAbGBxJKChJHBgb/gACgP2AA4D+YDw0NU4WFxcWTjU0PAGg/mAeOBcYGxsYFzge/qCAAAAAAAEAgAAAA4ADgAALAAABFSMBMxUhNTMBIzUDgID+wID+QIABQIADgED9AEBAAwBAAAEAAAAABAADgAA9AAABFSMeARUUBgcOASMiJicuATUzFBYzMjY1NCYjITUhLgEnLgE1NDY3PgEzMhYXHgEVIzQmIyIGFRQWMzIWFwQA6xUWNTAscT4+cSwwNYByTk5yck7+AAEsAgQBMDU1MCxxPj5xLDA1gHJOTnJyTjtuKwHAQB1BIjViJCEkJCEkYjU0TEw0NExAAQMBJGI1NWIkISQkISRiNTRMTDQ0TCEfAAAACgAAAAAEAAOAAAMABwALAA8AEwAXABsAHwAjACcAABMRIREBNSEVHQEhNQEVITUjFSE1ESEVISUhFSERNSEVASEVISE1IRUABAD9gAEA/wABAP8AQP8AAQD/AAKAAQD/AAEA/IABAP8AAoABAAOA/IADgP3AwMBAwMACAMDAwMD/AMDAwAEAwMD+wMDAwAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIRUhFSERIRUhESEVIREhFSEABAD8AAKA/YACgP2ABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFyEVIREhFSEDIRUhESEVIQAEAPwAwAKA/YACgP2AwAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEFIRUhESEVIQEhFSERIRUhAAQA/AABgAKA/YACgP2A/oAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEVIRUhFSEVIRUhFSEVIRUhAAQA/AAEAPwABAD8AAQA/AAEAPwAA4CAQIBAgECAQIAAAAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhGQEFAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEAA4CAQIBAgECAQIABAAGAwAAAAAYAAAAABAADgAADAAcACwAPABMAFgAAEyEVIQUhFSEVIRUhFSEVIQUhFSEBESUABAD8AAGAAoD9gAKA/YACgP2A/oAEAPwAAQD/AAOAgECAQIBAgECAAoD+gMAAAQA/AD8C5gLmACwAACUUDwEGIyIvAQcGIyIvASY1ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFQLmEE4QFxcQqKgQFxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQwxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQEE4QFxcQqKgQFwAAAAYAAAAAAyUDbgAUACgAPABNAFUAggAAAREUBwYrASInJjURNDc2OwEyFxYVMxEUBwYrASInJjURNDc2OwEyFxYXERQHBisBIicmNRE0NzY7ATIXFhMRIREUFxYXFjMhMjc2NzY1ASEnJicjBgcFFRQHBisBERQHBiMhIicmNREjIicmPQE0NzY7ATc2NzY7ATIXFh8BMzIXFhUBJQYFCCQIBQYGBQgkCAUGkgUFCCUIBQUFBQglCAUFkgUFCCUIBQUFBQglCAUFSf4ABAQFBAIB2wIEBAQE/oABABsEBrUGBAH3BgUINxobJv4lJhsbNwgFBQUFCLEoCBcWF7cXFhYJKLAIBQYCEv63CAUFBQUIAUkIBQYGBQj+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYF/lsCHf3jDQsKBQUFBQoLDQJmQwUCAgVVJAgGBf3jMCIjISIvAiAFBggkCAUFYBUPDw8PFWAFBQgAAgAHAEkDtwKvABoALgAACQEGIyIvASY1ND8BJyY1ND8BNjMyFwEWFRQHARUUBwYjISInJj0BNDc2MyEyFxYBTv72BgcIBR0GBuHhBgYdBQgHBgEKBgYCaQUFCP3bCAUFBQUIAiUIBQUBhf72BgYcBggHBuDhBgcHBh0FBf71BQgHBv77JQgFBQUFCCUIBQUFBQAAAAEAIwAAA90DbgCzAAAlIicmIyIHBiMiJyY1NDc2NzY3Njc2PQE0JyYjISIHBh0BFBcWFxYzFhcWFRQHBiMiJyYjIgcGIyInJjU0NzY3Njc2NzY9ARE0NTQ1NCc0JyYnJicmJyYnJiMiJyY1NDc2MzIXFjMyNzYzMhcWFRQHBiMGBwYHBh0BFBcWMyEyNzY9ATQnJicmJyY1NDc2MzIXFjMyNzYzMhcWFRQHBgciBwYHBhURFBcWFxYXMhcWFRQHBiMDwRkzMhoZMjMZDQgHCQoNDBEQChIBBxX+fhYHARUJEhMODgwLBwcOGzU1GhgxMRgNBwcJCQsMEA8JEgECAQIDBAQFCBIRDQ0KCwcHDho1NRoYMDEYDgcHCQoMDRAQCBQBBw8BkA4HARQKFxcPDgcHDhkzMhkZMTEZDgcHCgoNDRARCBQUCRERDg0KCwcHDgACAgICDAsPEQkJAQEDAwUMROAMBQMDBQzUUQ0GAQIBCAgSDwwNAgICAgwMDhEICQECAwMFDUUhAdACDQ0ICA4OCgoLCwcHAwYBAQgIEg8MDQICAgINDA8RCAgBAgEGDFC2DAcBAQcMtlAMBgEBBgcWDwwNAgICAg0MDxEICAEBAgYNT/3mRAwGAgIBCQgRDwwNAAACAAD/twP/A7cAEwA5AAABMhcWFRQHAgcGIyInJjU0NwE2MwEWFxYfARYHBiMiJyYnJicmNRYXFhcWFxYzMjc2NzY3Njc2NzY3A5soHh4avkw3RUg0NDUBbSEp/fgXJicvAQJMTHtHNjYhIRARBBMUEBASEQkXCA8SExUVHR0eHikDtxsaKCQz/plGNDU0SUkwAUsf/bErHx8NKHpNTBobLi86OkQDDw4LCwoKFiUbGhERCgsEBAIAAQAAAAAAAIWwaoFfDzz1AAsEAAAAAADbteOZAAAAANu145kAAP+3BWADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAFgAAA//8FYAABAAAAAAAAAAAAAAAAAAAAKQQAAAAAAAAAAAAAAAIAAAAEAABBBAAAQQQAAAAEAAAABAAAAAQAAAAEAADABAAAAAQAAAAEAAAABAAAQAQAAAAFgAAABAAAAAQAAB4EAAAABAAAAAQAAAAEAAAABAAAZQQAAAAEAADABAAAwAQAAIAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAMlAD8DJQAAA74ABwQAACMD/wAAAAAAAAAKABQAHgBKAHYApADmAS4BkgHQAhYCXALQAw4DWAN+A6gEPgTeBPoFZAWOBdAF+AY6BnYGjgbmBy4HVgd+B6gHzgf8CCoIbgkmCXAKYgq+AAEAAAApALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
      },
      function(module2, exports2, __webpack_require__) {
        var api = __webpack_require__(20);
        var content = __webpack_require__(153);
        content = content.__esModule ? content.default : content;
        if (typeof content === "string") {
          content = [[module2.i, content, ""]];
        }
        var options = {};
        options.insert = "head";
        options.singleton = false;
        api(content, options);
        module2.exports = content.locals || {};
      },
      function(module2, exports2, __webpack_require__) {
        var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
        exports2 = ___CSS_LOADER_API_IMPORT___(false);
        exports2.push([module2.i, '.w-e-toolbar {\n  display: flex;\n  padding: 0 6px;\n  flex-wrap: wrap;\n  position: relative;\n  /* \u5355\u4E2A\u83DC\u5355 */\n}\n.w-e-toolbar .w-e-menu {\n  position: relative;\n  display: flex;\n  width: 40px;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  cursor: pointer;\n}\n.w-e-toolbar .w-e-menu i {\n  color: #999;\n}\n.w-e-toolbar .w-e-menu:hover {\n  background-color: #F6F6F6;\n}\n.w-e-toolbar .w-e-menu:hover i {\n  color: #333;\n}\n.w-e-toolbar .w-e-active i {\n  color: #1e88e5;\n}\n.w-e-toolbar .w-e-active:hover i {\n  color: #1e88e5;\n}\n.w-e-menu-tooltip {\n  position: absolute;\n  display: flex;\n  color: #f1f1f1;\n  background-color: rgba(0, 0, 0, 0.75);\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  padding: 4px 5px 6px;\n  justify-content: center;\n  align-items: center;\n}\n.w-e-menu-tooltip-up::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-top-color: rgba(0, 0, 0, 0.73);\n}\n.w-e-menu-tooltip-down::after {\n  content: "";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: rgba(0, 0, 0, 0.73);\n}\n.w-e-menu-tooltip-item-wrapper {\n  font-size: 14px;\n  margin: 0 5px;\n}\n', ""]);
        module2.exports = exports2;
      },
      function(module2, exports2, __webpack_require__) {
        var api = __webpack_require__(20);
        var content = __webpack_require__(155);
        content = content.__esModule ? content.default : content;
        if (typeof content === "string") {
          content = [[module2.i, content, ""]];
        }
        var options = {};
        options.insert = "head";
        options.singleton = false;
        api(content, options);
        module2.exports = content.locals || {};
      },
      function(module2, exports2, __webpack_require__) {
        var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
        exports2 = ___CSS_LOADER_API_IMPORT___(false);
        exports2.push([module2.i, '.w-e-text-container {\n  position: relative;\n  height: 100%;\n}\n.w-e-text-container .w-e-progress {\n  position: absolute;\n  background-color: #1e88e5;\n  top: 0;\n  left: 0;\n  height: 1px;\n}\n.w-e-text-container .placeholder {\n  color: #D4D4D4;\n  position: absolute;\n  font-size: 11pt;\n  line-height: 22px;\n  left: 10px;\n  top: 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: -1;\n}\n.w-e-text {\n  padding: 0 10px;\n  overflow-y: auto;\n}\n.w-e-text p,\n.w-e-text h1,\n.w-e-text h2,\n.w-e-text h3,\n.w-e-text h4,\n.w-e-text h5,\n.w-e-text table,\n.w-e-text pre {\n  margin: 10px 0;\n  line-height: 1.5;\n}\n.w-e-text ul,\n.w-e-text ol {\n  margin: 10px 0 10px 20px;\n}\n.w-e-text blockquote {\n  display: block;\n  border-left: 8px solid #d0e5f2;\n  padding: 5px 10px;\n  margin: 10px 0;\n  line-height: 1.4;\n  font-size: 100%;\n  background-color: #f1f1f1;\n}\n.w-e-text code {\n  display: inline-block;\n  background-color: #f1f1f1;\n  border-radius: 3px;\n  padding: 3px 5px;\n  margin: 0 3px;\n}\n.w-e-text pre code {\n  display: block;\n}\n.w-e-text table {\n  border-top: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n}\n.w-e-text table td,\n.w-e-text table th {\n  border-bottom: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  padding: 3px 5px;\n  min-height: 30px;\n  height: 30px;\n}\n.w-e-text table th {\n  border-bottom: 2px solid #ccc;\n  text-align: center;\n  background-color: #f1f1f1;\n}\n.w-e-text:focus {\n  outline: none;\n}\n.w-e-text img {\n  cursor: pointer;\n}\n.w-e-text img:hover {\n  box-shadow: 0 0 5px #333;\n}\n.w-e-text .w-e-todo {\n  margin: 0 0 0 20px;\n}\n.w-e-text .w-e-todo li {\n  list-style: none;\n  font-size: 1em;\n}\n.w-e-text .w-e-todo li span:nth-child(1) {\n  position: relative;\n  left: -18px;\n}\n.w-e-text .w-e-todo li span:nth-child(1) input {\n  position: absolute;\n  margin-right: 3px;\n}\n.w-e-text .w-e-todo li span:nth-child(1) input[type=checkbox] {\n  top: 50%;\n  margin-top: -6px;\n}\n.w-e-tooltip {\n  position: absolute;\n  display: flex;\n  color: #f1f1f1;\n  background-color: rgba(0, 0, 0, 0.75);\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  padding: 4px 5px 6px;\n  justify-content: center;\n  align-items: center;\n}\n.w-e-tooltip-up::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-top-color: rgba(0, 0, 0, 0.73);\n}\n.w-e-tooltip-down::after {\n  content: "";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: rgba(0, 0, 0, 0.73);\n}\n.w-e-tooltip-item-wrapper {\n  cursor: pointer;\n  font-size: 14px;\n  margin: 0 5px;\n}\n.w-e-tooltip-item-wrapper:hover {\n  color: #ccc;\n  text-decoration: underline;\n}\n', ""]);
        module2.exports = exports2;
      },
      function(module2, exports2, __webpack_require__) {
        var api = __webpack_require__(20);
        var content = __webpack_require__(157);
        content = content.__esModule ? content.default : content;
        if (typeof content === "string") {
          content = [[module2.i, content, ""]];
        }
        var options = {};
        options.insert = "head";
        options.singleton = false;
        api(content, options);
        module2.exports = content.locals || {};
      },
      function(module2, exports2, __webpack_require__) {
        var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
        exports2 = ___CSS_LOADER_API_IMPORT___(false);
        exports2.push([module2.i, '.w-e-menu .w-e-panel-container {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  border: 1px solid #ccc;\n  border-top: 0;\n  box-shadow: 1px 1px 2px #ccc;\n  color: #333;\n  background-color: #fff;\n  text-align: left;\n  /* \u4E3A emotion panel \u5B9A\u5236\u7684\u6837\u5F0F */\n  /* \u4E0A\u4F20\u56FE\u7247\u3001\u4E0A\u4F20\u89C6\u9891\u7684 panel \u5B9A\u5236\u6837\u5F0F */\n}\n.w-e-menu .w-e-panel-container .w-e-panel-close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px;\n  margin: 2px 5px 0 0;\n  cursor: pointer;\n  color: #999;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-close:hover {\n  color: #333;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-title {\n  list-style: none;\n  display: flex;\n  font-size: 14px;\n  margin: 2px 10px 0 10px;\n  border-bottom: 1px solid #f1f1f1;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-item {\n  padding: 3px 5px;\n  color: #999;\n  cursor: pointer;\n  margin: 0 3px;\n  position: relative;\n  top: 1px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-active {\n  color: #333;\n  border-bottom: 1px solid #333;\n  cursor: default;\n  font-weight: 700;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content {\n  padding: 10px 15px 10px 15px;\n  font-size: 16px;\n  /* \u8F93\u5165\u6846\u7684\u6837\u5F0F */\n  /* \u6309\u94AE\u7684\u6837\u5F0F */\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input:focus,\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus,\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content button:focus {\n  outline: none;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea {\n  width: 100%;\n  border: 1px solid #ccc;\n  padding: 5px;\n  margin-top: 10px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus {\n  border-color: #1e88e5;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text] {\n  border: none;\n  border-bottom: 1px solid #ccc;\n  font-size: 14px;\n  height: 20px;\n  color: #333;\n  text-align: left;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].small {\n  width: 30px;\n  text-align: center;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].block {\n  display: block;\n  width: 100%;\n  margin: 10px 0;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {\n  border-bottom: 2px solid #1e88e5;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {\n  font-size: 14px;\n  color: #1e88e5;\n  border: none;\n  padding: 5px 10px;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {\n  float: left;\n  margin-right: 10px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {\n  float: right;\n  margin-left: 10px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {\n  color: #999;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {\n  color: #c24f4a;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {\n  background-color: #f1f1f1;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n.w-e-menu .w-e-panel-container .w-e-emoticon-container .w-e-item {\n  cursor: pointer;\n  font-size: 18px;\n  padding: 0 3px;\n  display: inline-block;\n}\n.w-e-menu .w-e-panel-container .w-e-up-img-container,\n.w-e-menu .w-e-panel-container .w-e-up-video-container {\n  text-align: center;\n}\n.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn,\n.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn {\n  display: inline-block;\n  color: #999;\n  cursor: pointer;\n  font-size: 60px;\n  line-height: 1;\n}\n.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover,\n.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn:hover {\n  color: #333;\n}\n', ""]);
        module2.exports = exports2;
      },
      function(module2, exports2, __webpack_require__) {
        var api = __webpack_require__(20);
        var content = __webpack_require__(159);
        content = content.__esModule ? content.default : content;
        if (typeof content === "string") {
          content = [[module2.i, content, ""]];
        }
        var options = {};
        options.insert = "head";
        options.singleton = false;
        api(content, options);
        module2.exports = content.locals || {};
      },
      function(module2, exports2, __webpack_require__) {
        var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
        exports2 = ___CSS_LOADER_API_IMPORT___(false);
        exports2.push([module2.i, ".w-e-toolbar .w-e-droplist {\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: #fff;\n  border: 1px solid #f1f1f1;\n  border-right-color: #ccc;\n  border-bottom-color: #ccc;\n}\n.w-e-toolbar .w-e-droplist .w-e-dp-title {\n  text-align: center;\n  color: #999;\n  line-height: 2;\n  border-bottom: 1px solid #f1f1f1;\n  font-size: 13px;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-list {\n  list-style: none;\n  line-height: 1;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {\n  color: #333;\n  padding: 5px 0;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {\n  background-color: #f1f1f1;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-block {\n  list-style: none;\n  text-align: left;\n  padding: 5px;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {\n  display: inline-block;\n  padding: 3px 5px;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {\n  background-color: #f1f1f1;\n}\n", ""]);
        module2.exports = exports2;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _promise = _interopRequireDefault(__webpack_require__(161));
        if (!Element.prototype.matches) {
          Element.prototype.matches = function(s) {
            var matches = this.ownerDocument.querySelectorAll(s);
            var i = matches.length;
            for (i; i >= 0; i--) {
              if (matches.item(i) === this)
                break;
            }
            return i > -1;
          };
        }
        if (!_promise["default"]) {
          window.Promise = _promise["default"];
        }
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(162);
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(163);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(61);
        __webpack_require__(50);
        __webpack_require__(54);
        __webpack_require__(175);
        __webpack_require__(178);
        __webpack_require__(179);
        var path = __webpack_require__(9);
        module2.exports = path.Promise;
      },
      function(module2, exports2, __webpack_require__) {
        var toInteger = __webpack_require__(62);
        var requireObjectCoercible = __webpack_require__(49);
        var createMethod = function(CONVERT_TO_STRING) {
          return function($this, pos) {
            var S = String(requireObjectCoercible($this));
            var position = toInteger(pos);
            var size = S.length;
            var first, second;
            if (position < 0 || position >= size)
              return CONVERT_TO_STRING ? "" : void 0;
            first = S.charCodeAt(position);
            return first < 55296 || first > 56319 || position + 1 === size || (second = S.charCodeAt(position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
          };
        };
        module2.exports = {
          codeAt: createMethod(false),
          charAt: createMethod(true)
        };
      },
      function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__(8);
        var inspectSource = __webpack_require__(101);
        var WeakMap = global2.WeakMap;
        module2.exports = typeof WeakMap === "function" && /native code/.test(inspectSource(WeakMap));
      },
      function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__(8);
        var createNonEnumerableProperty = __webpack_require__(19);
        module2.exports = function(key, value) {
          try {
            createNonEnumerableProperty(global2, key, value);
          } catch (error) {
            global2[key] = value;
          }
          return value;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var IteratorPrototype = __webpack_require__(103).IteratorPrototype;
        var create = __webpack_require__(77);
        var createPropertyDescriptor = __webpack_require__(48);
        var setToStringTag = __webpack_require__(36);
        var Iterators = __webpack_require__(43);
        var returnThis = function() {
          return this;
        };
        module2.exports = function(IteratorConstructor, NAME, next) {
          var TO_STRING_TAG = NAME + " Iterator";
          IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
          setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
          Iterators[TO_STRING_TAG] = returnThis;
          return IteratorConstructor;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__(11);
        module2.exports = !fails(function() {
          function F() {
          }
          F.prototype.constructor = null;
          return Object.getPrototypeOf(new F()) !== F.prototype;
        });
      },
      function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(14);
        var definePropertyModule = __webpack_require__(18);
        var anObject = __webpack_require__(25);
        var objectKeys = __webpack_require__(52);
        module2.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
          anObject(O);
          var keys = objectKeys(Properties);
          var length = keys.length;
          var index2 = 0;
          var key;
          while (length > index2)
            definePropertyModule.f(O, key = keys[index2++], Properties[key]);
          return O;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var TO_STRING_TAG_SUPPORT = __webpack_require__(81);
        var classof = __webpack_require__(65);
        module2.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
          return "[object " + classof(this) + "]";
        };
      },
      function(module2, exports2, __webpack_require__) {
        var anObject = __webpack_require__(25);
        var aPossiblePrototype = __webpack_require__(172);
        module2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
          var CORRECT_SETTER = false;
          var test = {};
          var setter;
          try {
            setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
            setter.call(test, []);
            CORRECT_SETTER = test instanceof Array;
          } catch (error) {
          }
          return function setPrototypeOf(O, proto) {
            anObject(O);
            aPossiblePrototype(proto);
            if (CORRECT_SETTER)
              setter.call(O, proto);
            else
              O.__proto__ = proto;
            return O;
          };
        }() : void 0);
      },
      function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__(13);
        module2.exports = function(it) {
          if (!isObject(it) && it !== null) {
            throw TypeError("Can't set " + String(it) + " as a prototype");
          }
          return it;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var toIndexedObject = __webpack_require__(28);
        var addToUnscopables = __webpack_require__(82);
        var Iterators = __webpack_require__(43);
        var InternalStateModule = __webpack_require__(41);
        var defineIterator = __webpack_require__(75);
        var ARRAY_ITERATOR = "Array Iterator";
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
        module2.exports = defineIterator(Array, "Array", function(iterated, kind) {
          setInternalState(this, {
            type: ARRAY_ITERATOR,
            target: toIndexedObject(iterated),
            index: 0,
            kind
          });
        }, function() {
          var state = getInternalState(this);
          var target = state.target;
          var kind = state.kind;
          var index2 = state.index++;
          if (!target || index2 >= target.length) {
            state.target = void 0;
            return { value: void 0, done: true };
          }
          if (kind == "keys")
            return { value: index2, done: false };
          if (kind == "values")
            return { value: target[index2], done: false };
          return { value: [index2, target[index2]], done: false };
        }, "values");
        Iterators.Arguments = Iterators.Array;
        addToUnscopables("keys");
        addToUnscopables("values");
        addToUnscopables("entries");
      },
      function(module2, exports2) {
        module2.exports = {
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
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var IS_PURE = __webpack_require__(42);
        var global2 = __webpack_require__(8);
        var getBuiltIn = __webpack_require__(35);
        var NativePromise = __webpack_require__(108);
        var redefine = __webpack_require__(53);
        var redefineAll = __webpack_require__(109);
        var setToStringTag = __webpack_require__(36);
        var setSpecies = __webpack_require__(110);
        var isObject = __webpack_require__(13);
        var aFunction = __webpack_require__(40);
        var anInstance = __webpack_require__(83);
        var classof = __webpack_require__(33);
        var inspectSource = __webpack_require__(101);
        var iterate = __webpack_require__(66);
        var checkCorrectnessOfIteration = __webpack_require__(114);
        var speciesConstructor = __webpack_require__(115);
        var task = __webpack_require__(116).set;
        var microtask = __webpack_require__(176);
        var promiseResolve = __webpack_require__(118);
        var hostReportErrors = __webpack_require__(177);
        var newPromiseCapabilityModule = __webpack_require__(85);
        var perform = __webpack_require__(119);
        var InternalStateModule = __webpack_require__(41);
        var isForced = __webpack_require__(100);
        var wellKnownSymbol = __webpack_require__(10);
        var V8_VERSION = __webpack_require__(86);
        var SPECIES = wellKnownSymbol("species");
        var PROMISE = "Promise";
        var getInternalState = InternalStateModule.get;
        var setInternalState = InternalStateModule.set;
        var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
        var PromiseConstructor = NativePromise;
        var TypeError2 = global2.TypeError;
        var document2 = global2.document;
        var process = global2.process;
        var $fetch = getBuiltIn("fetch");
        var newPromiseCapability = newPromiseCapabilityModule.f;
        var newGenericPromiseCapability = newPromiseCapability;
        var IS_NODE = classof(process) == "process";
        var DISPATCH_EVENT = !!(document2 && document2.createEvent && global2.dispatchEvent);
        var UNHANDLED_REJECTION = "unhandledrejection";
        var REJECTION_HANDLED = "rejectionhandled";
        var PENDING = 0;
        var FULFILLED = 1;
        var REJECTED = 2;
        var HANDLED = 1;
        var UNHANDLED = 2;
        var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
        var FORCED = isForced(PROMISE, function() {
          var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
          if (!GLOBAL_CORE_JS_PROMISE) {
            if (V8_VERSION === 66)
              return true;
            if (!IS_NODE && typeof PromiseRejectionEvent != "function")
              return true;
          }
          if (IS_PURE && !PromiseConstructor.prototype["finally"])
            return true;
          if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor))
            return false;
          var promise = PromiseConstructor.resolve(1);
          var FakePromise = function(exec) {
            exec(function() {
            }, function() {
            });
          };
          var constructor = promise.constructor = {};
          constructor[SPECIES] = FakePromise;
          return !(promise.then(function() {
          }) instanceof FakePromise);
        });
        var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function(iterable) {
          PromiseConstructor.all(iterable)["catch"](function() {
          });
        });
        var isThenable = function(it) {
          var then;
          return isObject(it) && typeof (then = it.then) == "function" ? then : false;
        };
        var notify = function(promise, state, isReject) {
          if (state.notified)
            return;
          state.notified = true;
          var chain = state.reactions;
          microtask(function() {
            var value = state.value;
            var ok = state.state == FULFILLED;
            var index2 = 0;
            while (chain.length > index2) {
              var reaction = chain[index2++];
              var handler = ok ? reaction.ok : reaction.fail;
              var resolve = reaction.resolve;
              var reject = reaction.reject;
              var domain = reaction.domain;
              var result, then, exited;
              try {
                if (handler) {
                  if (!ok) {
                    if (state.rejection === UNHANDLED)
                      onHandleUnhandled(promise, state);
                    state.rejection = HANDLED;
                  }
                  if (handler === true)
                    result = value;
                  else {
                    if (domain)
                      domain.enter();
                    result = handler(value);
                    if (domain) {
                      domain.exit();
                      exited = true;
                    }
                  }
                  if (result === reaction.promise) {
                    reject(TypeError2("Promise-chain cycle"));
                  } else if (then = isThenable(result)) {
                    then.call(result, resolve, reject);
                  } else
                    resolve(result);
                } else
                  reject(value);
              } catch (error) {
                if (domain && !exited)
                  domain.exit();
                reject(error);
              }
            }
            state.reactions = [];
            state.notified = false;
            if (isReject && !state.rejection)
              onUnhandled(promise, state);
          });
        };
        var dispatchEvent = function(name, promise, reason) {
          var event, handler;
          if (DISPATCH_EVENT) {
            event = document2.createEvent("Event");
            event.promise = promise;
            event.reason = reason;
            event.initEvent(name, false, true);
            global2.dispatchEvent(event);
          } else
            event = { promise, reason };
          if (handler = global2["on" + name])
            handler(event);
          else if (name === UNHANDLED_REJECTION)
            hostReportErrors("Unhandled promise rejection", reason);
        };
        var onUnhandled = function(promise, state) {
          task.call(global2, function() {
            var value = state.value;
            var IS_UNHANDLED = isUnhandled(state);
            var result;
            if (IS_UNHANDLED) {
              result = perform(function() {
                if (IS_NODE) {
                  process.emit("unhandledRejection", value, promise);
                } else
                  dispatchEvent(UNHANDLED_REJECTION, promise, value);
              });
              state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
              if (result.error)
                throw result.value;
            }
          });
        };
        var isUnhandled = function(state) {
          return state.rejection !== HANDLED && !state.parent;
        };
        var onHandleUnhandled = function(promise, state) {
          task.call(global2, function() {
            if (IS_NODE) {
              process.emit("rejectionHandled", promise);
            } else
              dispatchEvent(REJECTION_HANDLED, promise, state.value);
          });
        };
        var bind = function(fn, promise, state, unwrap) {
          return function(value) {
            fn(promise, state, value, unwrap);
          };
        };
        var internalReject = function(promise, state, value, unwrap) {
          if (state.done)
            return;
          state.done = true;
          if (unwrap)
            state = unwrap;
          state.value = value;
          state.state = REJECTED;
          notify(promise, state, true);
        };
        var internalResolve = function(promise, state, value, unwrap) {
          if (state.done)
            return;
          state.done = true;
          if (unwrap)
            state = unwrap;
          try {
            if (promise === value)
              throw TypeError2("Promise can't be resolved itself");
            var then = isThenable(value);
            if (then) {
              microtask(function() {
                var wrapper = { done: false };
                try {
                  then.call(value, bind(internalResolve, promise, wrapper, state), bind(internalReject, promise, wrapper, state));
                } catch (error) {
                  internalReject(promise, wrapper, error, state);
                }
              });
            } else {
              state.value = value;
              state.state = FULFILLED;
              notify(promise, state, false);
            }
          } catch (error) {
            internalReject(promise, { done: false }, error, state);
          }
        };
        if (FORCED) {
          PromiseConstructor = function Promise2(executor) {
            anInstance(this, PromiseConstructor, PROMISE);
            aFunction(executor);
            Internal.call(this);
            var state = getInternalState(this);
            try {
              executor(bind(internalResolve, this, state), bind(internalReject, this, state));
            } catch (error) {
              internalReject(this, state, error);
            }
          };
          Internal = function Promise2(executor) {
            setInternalState(this, {
              type: PROMISE,
              done: false,
              notified: false,
              parent: false,
              reactions: [],
              rejection: false,
              state: PENDING,
              value: void 0
            });
          };
          Internal.prototype = redefineAll(PromiseConstructor.prototype, {
            then: function then(onFulfilled, onRejected) {
              var state = getInternalPromiseState(this);
              var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
              reaction.ok = typeof onFulfilled == "function" ? onFulfilled : true;
              reaction.fail = typeof onRejected == "function" && onRejected;
              reaction.domain = IS_NODE ? process.domain : void 0;
              state.parent = true;
              state.reactions.push(reaction);
              if (state.state != PENDING)
                notify(this, state, false);
              return reaction.promise;
            },
            "catch": function(onRejected) {
              return this.then(void 0, onRejected);
            }
          });
          OwnPromiseCapability = function() {
            var promise = new Internal();
            var state = getInternalState(promise);
            this.promise = promise;
            this.resolve = bind(internalResolve, promise, state);
            this.reject = bind(internalReject, promise, state);
          };
          newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
            return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
          };
          if (!IS_PURE && typeof NativePromise == "function") {
            nativeThen = NativePromise.prototype.then;
            redefine(NativePromise.prototype, "then", function then(onFulfilled, onRejected) {
              var that = this;
              return new PromiseConstructor(function(resolve, reject) {
                nativeThen.call(that, resolve, reject);
              }).then(onFulfilled, onRejected);
            }, { unsafe: true });
            if (typeof $fetch == "function")
              $({ global: true, enumerable: true, forced: true }, {
                fetch: function fetch(input) {
                  return promiseResolve(PromiseConstructor, $fetch.apply(global2, arguments));
                }
              });
          }
        }
        $({ global: true, wrap: true, forced: FORCED }, {
          Promise: PromiseConstructor
        });
        setToStringTag(PromiseConstructor, PROMISE, false, true);
        setSpecies(PROMISE);
        PromiseWrapper = getBuiltIn(PROMISE);
        $({ target: PROMISE, stat: true, forced: FORCED }, {
          reject: function reject(r) {
            var capability = newPromiseCapability(this);
            capability.reject.call(void 0, r);
            return capability.promise;
          }
        });
        $({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
          resolve: function resolve(x) {
            return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
          }
        });
        $({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
          all: function all(iterable) {
            var C = this;
            var capability = newPromiseCapability(C);
            var resolve = capability.resolve;
            var reject = capability.reject;
            var result = perform(function() {
              var $promiseResolve = aFunction(C.resolve);
              var values = [];
              var counter = 0;
              var remaining = 1;
              iterate(iterable, function(promise) {
                var index2 = counter++;
                var alreadyCalled = false;
                values.push(void 0);
                remaining++;
                $promiseResolve.call(C, promise).then(function(value) {
                  if (alreadyCalled)
                    return;
                  alreadyCalled = true;
                  values[index2] = value;
                  --remaining || resolve(values);
                }, reject);
              });
              --remaining || resolve(values);
            });
            if (result.error)
              reject(result.value);
            return capability.promise;
          },
          race: function race(iterable) {
            var C = this;
            var capability = newPromiseCapability(C);
            var reject = capability.reject;
            var result = perform(function() {
              var $promiseResolve = aFunction(C.resolve);
              iterate(iterable, function(promise) {
                $promiseResolve.call(C, promise).then(capability.resolve, reject);
              });
            });
            if (result.error)
              reject(result.value);
            return capability.promise;
          }
        });
      },
      function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__(8);
        var getOwnPropertyDescriptor = __webpack_require__(71).f;
        var classof = __webpack_require__(33);
        var macrotask = __webpack_require__(116).set;
        var IS_IOS = __webpack_require__(117);
        var MutationObserver2 = global2.MutationObserver || global2.WebKitMutationObserver;
        var process = global2.process;
        var Promise2 = global2.Promise;
        var IS_NODE = classof(process) == "process";
        var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global2, "queueMicrotask");
        var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
        var flush, head, last, notify, toggle, node, promise, then;
        if (!queueMicrotask) {
          flush = function() {
            var parent, fn;
            if (IS_NODE && (parent = process.domain))
              parent.exit();
            while (head) {
              fn = head.fn;
              head = head.next;
              try {
                fn();
              } catch (error) {
                if (head)
                  notify();
                else
                  last = void 0;
                throw error;
              }
            }
            last = void 0;
            if (parent)
              parent.enter();
          };
          if (IS_NODE) {
            notify = function() {
              process.nextTick(flush);
            };
          } else if (MutationObserver2 && !IS_IOS) {
            toggle = true;
            node = document.createTextNode("");
            new MutationObserver2(flush).observe(node, { characterData: true });
            notify = function() {
              node.data = toggle = !toggle;
            };
          } else if (Promise2 && Promise2.resolve) {
            promise = Promise2.resolve(void 0);
            then = promise.then;
            notify = function() {
              then.call(promise, flush);
            };
          } else {
            notify = function() {
              macrotask.call(global2, flush);
            };
          }
        }
        module2.exports = queueMicrotask || function(fn) {
          var task = { fn, next: void 0 };
          if (last)
            last.next = task;
          if (!head) {
            head = task;
            notify();
          }
          last = task;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__(8);
        module2.exports = function(a, b) {
          var console2 = global2.console;
          if (console2 && console2.error) {
            arguments.length === 1 ? console2.error(a) : console2.error(a, b);
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var aFunction = __webpack_require__(40);
        var newPromiseCapabilityModule = __webpack_require__(85);
        var perform = __webpack_require__(119);
        var iterate = __webpack_require__(66);
        $({ target: "Promise", stat: true }, {
          allSettled: function allSettled(iterable) {
            var C = this;
            var capability = newPromiseCapabilityModule.f(C);
            var resolve = capability.resolve;
            var reject = capability.reject;
            var result = perform(function() {
              var promiseResolve = aFunction(C.resolve);
              var values = [];
              var counter = 0;
              var remaining = 1;
              iterate(iterable, function(promise) {
                var index2 = counter++;
                var alreadyCalled = false;
                values.push(void 0);
                remaining++;
                promiseResolve.call(C, promise).then(function(value) {
                  if (alreadyCalled)
                    return;
                  alreadyCalled = true;
                  values[index2] = { status: "fulfilled", value };
                  --remaining || resolve(values);
                }, function(e) {
                  if (alreadyCalled)
                    return;
                  alreadyCalled = true;
                  values[index2] = { status: "rejected", reason: e };
                  --remaining || resolve(values);
                });
              });
              --remaining || resolve(values);
            });
            if (result.error)
              reject(result.value);
            return capability.promise;
          }
        });
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var IS_PURE = __webpack_require__(42);
        var NativePromise = __webpack_require__(108);
        var fails = __webpack_require__(11);
        var getBuiltIn = __webpack_require__(35);
        var speciesConstructor = __webpack_require__(115);
        var promiseResolve = __webpack_require__(118);
        var redefine = __webpack_require__(53);
        var NON_GENERIC = !!NativePromise && fails(function() {
          NativePromise.prototype["finally"].call({ then: function() {
          } }, function() {
          });
        });
        $({ target: "Promise", proto: true, real: true, forced: NON_GENERIC }, {
          "finally": function(onFinally) {
            var C = speciesConstructor(this, getBuiltIn("Promise"));
            var isFunction = typeof onFinally == "function";
            return this.then(isFunction ? function(x) {
              return promiseResolve(C, onFinally()).then(function() {
                return x;
              });
            } : onFinally, isFunction ? function(e) {
              return promiseResolve(C, onFinally()).then(function() {
                throw e;
              });
            } : onFinally);
          }
        });
        if (!IS_PURE && typeof NativePromise == "function" && !NativePromise.prototype["finally"]) {
          redefine(NativePromise.prototype, "finally", getBuiltIn("Promise").prototype["finally"]);
        }
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(54);
        var forEach = __webpack_require__(181);
        var classof = __webpack_require__(65);
        var ArrayPrototype = Array.prototype;
        var DOMIterables = {
          DOMTokenList: true,
          NodeList: true
        };
        module2.exports = function(it) {
          var own = it.forEach;
          return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.forEach || DOMIterables.hasOwnProperty(classof(it)) ? forEach : own;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(182);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(183);
        var entryVirtual = __webpack_require__(15);
        module2.exports = entryVirtual("Array").forEach;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var forEach = __webpack_require__(184);
        $({ target: "Array", proto: true, forced: [].forEach != forEach }, {
          forEach
        });
      },
      function(module2, exports2, __webpack_require__) {
        var $forEach = __webpack_require__(30).forEach;
        var arrayMethodIsStrict = __webpack_require__(67);
        var arrayMethodUsesToLength = __webpack_require__(22);
        var STRICT_METHOD = arrayMethodIsStrict("forEach");
        var USES_TO_LENGTH = arrayMethodUsesToLength("forEach");
        module2.exports = !STRICT_METHOD || !USES_TO_LENGTH ? function forEach(callbackfn) {
          return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        } : [].forEach;
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(186);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(187);
        var path = __webpack_require__(9);
        module2.exports = path.Array.isArray;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var isArray = __webpack_require__(55);
        $({ target: "Array", stat: true }, {
          isArray
        });
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(189);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        var map = __webpack_require__(190);
        var ArrayPrototype = Array.prototype;
        module2.exports = function(it) {
          var own = it.map;
          return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.map ? map : own;
        };
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(191);
        var entryVirtual = __webpack_require__(15);
        module2.exports = entryVirtual("Array").map;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var $map = __webpack_require__(30).map;
        var arrayMethodHasSpeciesSupport = __webpack_require__(56);
        var arrayMethodUsesToLength = __webpack_require__(22);
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("map");
        var USES_TO_LENGTH = arrayMethodUsesToLength("map");
        $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
          map: function map(callbackfn) {
            return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(193);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        var trim = __webpack_require__(194);
        var StringPrototype = String.prototype;
        module2.exports = function(it) {
          var own = it.trim;
          return typeof it === "string" || it === StringPrototype || it instanceof String && own === StringPrototype.trim ? trim : own;
        };
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(195);
        var entryVirtual = __webpack_require__(15);
        module2.exports = entryVirtual("String").trim;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var $trim = __webpack_require__(90).trim;
        var forcedStringTrimMethod = __webpack_require__(196);
        $({ target: "String", proto: true, forced: forcedStringTrimMethod("trim") }, {
          trim: function trim() {
            return $trim(this);
          }
        });
      },
      function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__(11);
        var whitespaces = __webpack_require__(68);
        var non = "\u200B\x85\u180E";
        module2.exports = function(METHOD_NAME) {
          return fails(function() {
            return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
          });
        };
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(198);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(199);
        __webpack_require__(61);
        __webpack_require__(50);
        __webpack_require__(54);
        var path = __webpack_require__(9);
        module2.exports = path.Map;
      },
      function(module2, exports2, __webpack_require__) {
        var collection = __webpack_require__(121);
        var collectionStrong = __webpack_require__(123);
        module2.exports = collection("Map", function(init) {
          return function Map() {
            return init(this, arguments.length ? arguments[0] : void 0);
          };
        }, collectionStrong);
      },
      function(module2, exports2, __webpack_require__) {
        var fails = __webpack_require__(11);
        module2.exports = !fails(function() {
          return Object.isExtensible(Object.preventExtensions({}));
        });
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(202);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        var indexOf = __webpack_require__(203);
        var ArrayPrototype = Array.prototype;
        module2.exports = function(it) {
          var own = it.indexOf;
          return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.indexOf ? indexOf : own;
        };
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(204);
        var entryVirtual = __webpack_require__(15);
        module2.exports = entryVirtual("Array").indexOf;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var $indexOf = __webpack_require__(78).indexOf;
        var arrayMethodIsStrict = __webpack_require__(67);
        var arrayMethodUsesToLength = __webpack_require__(22);
        var nativeIndexOf = [].indexOf;
        var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
        var STRICT_METHOD = arrayMethodIsStrict("indexOf");
        var USES_TO_LENGTH = arrayMethodUsesToLength("indexOf", { ACCESSORS: true, 1: 0 });
        $({ target: "Array", proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
          indexOf: function indexOf(searchElement) {
            return NEGATIVE_ZERO ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(206);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        var splice = __webpack_require__(207);
        var ArrayPrototype = Array.prototype;
        module2.exports = function(it) {
          var own = it.splice;
          return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.splice ? splice : own;
        };
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(208);
        var entryVirtual = __webpack_require__(15);
        module2.exports = entryVirtual("Array").splice;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var toAbsoluteIndex = __webpack_require__(79);
        var toInteger = __webpack_require__(62);
        var toLength = __webpack_require__(34);
        var toObject = __webpack_require__(29);
        var arraySpeciesCreate = __webpack_require__(88);
        var createProperty = __webpack_require__(69);
        var arrayMethodHasSpeciesSupport = __webpack_require__(56);
        var arrayMethodUsesToLength = __webpack_require__(22);
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("splice");
        var USES_TO_LENGTH = arrayMethodUsesToLength("splice", { ACCESSORS: true, 0: 0, 1: 2 });
        var max = Math.max;
        var min = Math.min;
        var MAX_SAFE_INTEGER = 9007199254740991;
        var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = "Maximum allowed length exceeded";
        $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
          splice: function splice(start, deleteCount) {
            var O = toObject(this);
            var len = toLength(O.length);
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
              actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
            }
            if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
              throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
            }
            A = arraySpeciesCreate(O, actualDeleteCount);
            for (k = 0; k < actualDeleteCount; k++) {
              from = actualStart + k;
              if (from in O)
                createProperty(A, k, O[from]);
            }
            A.length = actualDeleteCount;
            if (insertCount < actualDeleteCount) {
              for (k = actualStart; k < len - actualDeleteCount; k++) {
                from = k + actualDeleteCount;
                to = k + insertCount;
                if (from in O)
                  O[to] = O[from];
                else
                  delete O[to];
              }
              for (k = len; k > len - actualDeleteCount + insertCount; k--)
                delete O[k - 1];
            } else if (insertCount > actualDeleteCount) {
              for (k = len - actualDeleteCount; k > actualStart; k--) {
                from = k + actualDeleteCount - 1;
                to = k + insertCount - 1;
                if (from in O)
                  O[to] = O[from];
                else
                  delete O[to];
              }
            }
            for (k = 0; k < insertCount; k++) {
              O[k + actualStart] = arguments[k + 2];
            }
            O.length = len - actualDeleteCount + insertCount;
            return A;
          }
        });
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(210);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        var filter = __webpack_require__(211);
        var ArrayPrototype = Array.prototype;
        module2.exports = function(it) {
          var own = it.filter;
          return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.filter ? filter : own;
        };
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(212);
        var entryVirtual = __webpack_require__(15);
        module2.exports = entryVirtual("Array").filter;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var $filter = __webpack_require__(30).filter;
        var arrayMethodHasSpeciesSupport = __webpack_require__(56);
        var arrayMethodUsesToLength = __webpack_require__(22);
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("filter");
        var USES_TO_LENGTH = arrayMethodUsesToLength("filter");
        $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
          filter: function filter(callbackfn) {
            return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(214);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        var arrayIncludes = __webpack_require__(215);
        var stringIncludes = __webpack_require__(217);
        var ArrayPrototype = Array.prototype;
        var StringPrototype = String.prototype;
        module2.exports = function(it) {
          var own = it.includes;
          if (it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.includes)
            return arrayIncludes;
          if (typeof it === "string" || it === StringPrototype || it instanceof String && own === StringPrototype.includes) {
            return stringIncludes;
          }
          return own;
        };
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(216);
        var entryVirtual = __webpack_require__(15);
        module2.exports = entryVirtual("Array").includes;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var $includes = __webpack_require__(78).includes;
        var addToUnscopables = __webpack_require__(82);
        var arrayMethodUsesToLength = __webpack_require__(22);
        var USES_TO_LENGTH = arrayMethodUsesToLength("indexOf", { ACCESSORS: true, 1: 0 });
        $({ target: "Array", proto: true, forced: !USES_TO_LENGTH }, {
          includes: function includes(el) {
            return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        addToUnscopables("includes");
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(218);
        var entryVirtual = __webpack_require__(15);
        module2.exports = entryVirtual("String").includes;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var notARegExp = __webpack_require__(219);
        var requireObjectCoercible = __webpack_require__(49);
        var correctIsRegExpLogic = __webpack_require__(221);
        $({ target: "String", proto: true, forced: !correctIsRegExpLogic("includes") }, {
          includes: function includes(searchString) {
            return !!~String(requireObjectCoercible(this)).indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(module2, exports2, __webpack_require__) {
        var isRegExp = __webpack_require__(220);
        module2.exports = function(it) {
          if (isRegExp(it)) {
            throw TypeError("The method doesn't accept regular expressions");
          }
          return it;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__(13);
        var classof = __webpack_require__(33);
        var wellKnownSymbol = __webpack_require__(10);
        var MATCH = wellKnownSymbol("match");
        module2.exports = function(it) {
          var isRegExp;
          return isObject(it) && ((isRegExp = it[MATCH]) !== void 0 ? !!isRegExp : classof(it) == "RegExp");
        };
      },
      function(module2, exports2, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(10);
        var MATCH = wellKnownSymbol("match");
        module2.exports = function(METHOD_NAME) {
          var regexp = /./;
          try {
            "/./"[METHOD_NAME](regexp);
          } catch (e) {
            try {
              regexp[MATCH] = false;
              return "/./"[METHOD_NAME](regexp);
            } catch (f) {
            }
          }
          return false;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(223);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        var bind = __webpack_require__(224);
        var FunctionPrototype = Function.prototype;
        module2.exports = function(it) {
          var own = it.bind;
          return it === FunctionPrototype || it instanceof Function && own === FunctionPrototype.bind ? bind : own;
        };
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(225);
        var entryVirtual = __webpack_require__(15);
        module2.exports = entryVirtual("Function").bind;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var bind = __webpack_require__(226);
        $({ target: "Function", proto: true }, {
          bind
        });
      },
      function(module2, exports2, __webpack_require__) {
        var aFunction = __webpack_require__(40);
        var isObject = __webpack_require__(13);
        var slice = [].slice;
        var factories = {};
        var construct = function(C, argsLength, args) {
          if (!(argsLength in factories)) {
            for (var list = [], i = 0; i < argsLength; i++)
              list[i] = "a[" + i + "]";
            factories[argsLength] = Function("C,a", "return new C(" + list.join(",") + ")");
          }
          return factories[argsLength](C, args);
        };
        module2.exports = Function.bind || function bind(that) {
          var fn = aFunction(this);
          var partArgs = slice.call(arguments, 1);
          var boundFunction = function bound() {
            var args = partArgs.concat(slice.call(arguments));
            return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
          };
          if (isObject(fn.prototype))
            boundFunction.prototype = fn.prototype;
          return boundFunction;
        };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(228);
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(229);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(124);
        __webpack_require__(50);
        __webpack_require__(54);
        var WrappedWellKnownSymbolModule = __webpack_require__(93);
        module2.exports = WrappedWellKnownSymbolModule.f("iterator");
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(231);
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(232);
        __webpack_require__(251);
        __webpack_require__(252);
        __webpack_require__(253);
        __webpack_require__(254);
        __webpack_require__(255);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(233);
        __webpack_require__(61);
        __webpack_require__(234);
        __webpack_require__(236);
        __webpack_require__(237);
        __webpack_require__(238);
        __webpack_require__(239);
        __webpack_require__(124);
        __webpack_require__(240);
        __webpack_require__(241);
        __webpack_require__(242);
        __webpack_require__(243);
        __webpack_require__(244);
        __webpack_require__(245);
        __webpack_require__(246);
        __webpack_require__(247);
        __webpack_require__(248);
        __webpack_require__(249);
        __webpack_require__(250);
        var path = __webpack_require__(9);
        module2.exports = path.Symbol;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var fails = __webpack_require__(11);
        var isArray = __webpack_require__(55);
        var isObject = __webpack_require__(13);
        var toObject = __webpack_require__(29);
        var toLength = __webpack_require__(34);
        var createProperty = __webpack_require__(69);
        var arraySpeciesCreate = __webpack_require__(88);
        var arrayMethodHasSpeciesSupport = __webpack_require__(56);
        var wellKnownSymbol = __webpack_require__(10);
        var V8_VERSION = __webpack_require__(86);
        var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
        var MAX_SAFE_INTEGER = 9007199254740991;
        var MAXIMUM_ALLOWED_INDEX_EXCEEDED = "Maximum allowed index exceeded";
        var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
          var array = [];
          array[IS_CONCAT_SPREADABLE] = false;
          return array.concat()[0] !== array;
        });
        var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("concat");
        var isConcatSpreadable = function(O) {
          if (!isObject(O))
            return false;
          var spreadable = O[IS_CONCAT_SPREADABLE];
          return spreadable !== void 0 ? !!spreadable : isArray(O);
        };
        var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
        $({ target: "Array", proto: true, forced: FORCED }, {
          concat: function concat(arg) {
            var O = toObject(this);
            var A = arraySpeciesCreate(O, 0);
            var n = 0;
            var i, k, length, len, E2;
            for (i = -1, length = arguments.length; i < length; i++) {
              E2 = i === -1 ? O : arguments[i];
              if (isConcatSpreadable(E2)) {
                len = toLength(E2.length);
                if (n + len > MAX_SAFE_INTEGER)
                  throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                for (k = 0; k < len; k++, n++)
                  if (k in E2)
                    createProperty(A, n, E2[k]);
              } else {
                if (n >= MAX_SAFE_INTEGER)
                  throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                createProperty(A, n++, E2);
              }
            }
            A.length = n;
            return A;
          }
        });
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var global2 = __webpack_require__(8);
        var getBuiltIn = __webpack_require__(35);
        var IS_PURE = __webpack_require__(42);
        var DESCRIPTORS = __webpack_require__(14);
        var NATIVE_SYMBOL = __webpack_require__(76);
        var USE_SYMBOL_AS_UID = __webpack_require__(105);
        var fails = __webpack_require__(11);
        var has = __webpack_require__(16);
        var isArray = __webpack_require__(55);
        var isObject = __webpack_require__(13);
        var anObject = __webpack_require__(25);
        var toObject = __webpack_require__(29);
        var toIndexedObject = __webpack_require__(28);
        var toPrimitive = __webpack_require__(60);
        var createPropertyDescriptor = __webpack_require__(48);
        var nativeObjectCreate = __webpack_require__(77);
        var objectKeys = __webpack_require__(52);
        var getOwnPropertyNamesModule = __webpack_require__(125);
        var getOwnPropertyNamesExternal = __webpack_require__(235);
        var getOwnPropertySymbolsModule = __webpack_require__(126);
        var getOwnPropertyDescriptorModule = __webpack_require__(71);
        var definePropertyModule = __webpack_require__(18);
        var propertyIsEnumerableModule = __webpack_require__(59);
        var createNonEnumerableProperty = __webpack_require__(19);
        var redefine = __webpack_require__(53);
        var shared = __webpack_require__(74);
        var sharedKey = __webpack_require__(63);
        var hiddenKeys = __webpack_require__(51);
        var uid = __webpack_require__(64);
        var wellKnownSymbol = __webpack_require__(10);
        var wrappedWellKnownSymbolModule = __webpack_require__(93);
        var defineWellKnownSymbol = __webpack_require__(12);
        var setToStringTag = __webpack_require__(36);
        var InternalStateModule = __webpack_require__(41);
        var $forEach = __webpack_require__(30).forEach;
        var HIDDEN = sharedKey("hidden");
        var SYMBOL = "Symbol";
        var PROTOTYPE = "prototype";
        var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
        var setInternalState = InternalStateModule.set;
        var getInternalState = InternalStateModule.getterFor(SYMBOL);
        var ObjectPrototype = Object[PROTOTYPE];
        var $Symbol = global2.Symbol;
        var $stringify = getBuiltIn("JSON", "stringify");
        var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
        var nativeDefineProperty = definePropertyModule.f;
        var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
        var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
        var AllSymbols = shared("symbols");
        var ObjectPrototypeSymbols = shared("op-symbols");
        var StringToSymbolRegistry = shared("string-to-symbol-registry");
        var SymbolToStringRegistry = shared("symbol-to-string-registry");
        var WellKnownSymbolsStore = shared("wks");
        var QObject = global2.QObject;
        var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
        var setSymbolDescriptor = DESCRIPTORS && fails(function() {
          return nativeObjectCreate(nativeDefineProperty({}, "a", {
            get: function() {
              return nativeDefineProperty(this, "a", { value: 7 }).a;
            }
          })).a != 7;
        }) ? function(O, P, Attributes) {
          var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
          if (ObjectPrototypeDescriptor)
            delete ObjectPrototype[P];
          nativeDefineProperty(O, P, Attributes);
          if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
            nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
          }
        } : nativeDefineProperty;
        var wrap = function(tag, description) {
          var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
          setInternalState(symbol, {
            type: SYMBOL,
            tag,
            description
          });
          if (!DESCRIPTORS)
            symbol.description = description;
          return symbol;
        };
        var isSymbol = USE_SYMBOL_AS_UID ? function(it) {
          return typeof it == "symbol";
        } : function(it) {
          return Object(it) instanceof $Symbol;
        };
        var $defineProperty = function defineProperty(O, P, Attributes) {
          if (O === ObjectPrototype)
            $defineProperty(ObjectPrototypeSymbols, P, Attributes);
          anObject(O);
          var key = toPrimitive(P, true);
          anObject(Attributes);
          if (has(AllSymbols, key)) {
            if (!Attributes.enumerable) {
              if (!has(O, HIDDEN))
                nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
              O[HIDDEN][key] = true;
            } else {
              if (has(O, HIDDEN) && O[HIDDEN][key])
                O[HIDDEN][key] = false;
              Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
            }
            return setSymbolDescriptor(O, key, Attributes);
          }
          return nativeDefineProperty(O, key, Attributes);
        };
        var $defineProperties = function defineProperties(O, Properties) {
          anObject(O);
          var properties = toIndexedObject(Properties);
          var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
          $forEach(keys, function(key) {
            if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key))
              $defineProperty(O, key, properties[key]);
          });
          return O;
        };
        var $create = function create(O, Properties) {
          return Properties === void 0 ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
        };
        var $propertyIsEnumerable = function propertyIsEnumerable(V) {
          var P = toPrimitive(V, true);
          var enumerable = nativePropertyIsEnumerable.call(this, P);
          if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P))
            return false;
          return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
        };
        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
          var it = toIndexedObject(O);
          var key = toPrimitive(P, true);
          if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key))
            return;
          var descriptor = nativeGetOwnPropertyDescriptor(it, key);
          if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
            descriptor.enumerable = true;
          }
          return descriptor;
        };
        var $getOwnPropertyNames = function getOwnPropertyNames(O) {
          var names = nativeGetOwnPropertyNames(toIndexedObject(O));
          var result = [];
          $forEach(names, function(key) {
            if (!has(AllSymbols, key) && !has(hiddenKeys, key))
              result.push(key);
          });
          return result;
        };
        var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
          var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
          var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
          var result = [];
          $forEach(names, function(key) {
            if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
              result.push(AllSymbols[key]);
            }
          });
          return result;
        };
        if (!NATIVE_SYMBOL) {
          $Symbol = function Symbol2() {
            if (this instanceof $Symbol)
              throw TypeError("Symbol is not a constructor");
            var description = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]);
            var tag = uid(description);
            var setter = function(value) {
              if (this === ObjectPrototype)
                setter.call(ObjectPrototypeSymbols, value);
              if (has(this, HIDDEN) && has(this[HIDDEN], tag))
                this[HIDDEN][tag] = false;
              setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
            };
            if (DESCRIPTORS && USE_SETTER)
              setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
            return wrap(tag, description);
          };
          redefine($Symbol[PROTOTYPE], "toString", function toString() {
            return getInternalState(this).tag;
          });
          redefine($Symbol, "withoutSetter", function(description) {
            return wrap(uid(description), description);
          });
          propertyIsEnumerableModule.f = $propertyIsEnumerable;
          definePropertyModule.f = $defineProperty;
          getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
          getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
          getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
          wrappedWellKnownSymbolModule.f = function(name) {
            return wrap(wellKnownSymbol(name), name);
          };
          if (DESCRIPTORS) {
            nativeDefineProperty($Symbol[PROTOTYPE], "description", {
              configurable: true,
              get: function description() {
                return getInternalState(this).description;
              }
            });
            if (!IS_PURE) {
              redefine(ObjectPrototype, "propertyIsEnumerable", $propertyIsEnumerable, { unsafe: true });
            }
          }
        }
        $({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
          Symbol: $Symbol
        });
        $forEach(objectKeys(WellKnownSymbolsStore), function(name) {
          defineWellKnownSymbol(name);
        });
        $({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
          "for": function(key) {
            var string = String(key);
            if (has(StringToSymbolRegistry, string))
              return StringToSymbolRegistry[string];
            var symbol = $Symbol(string);
            StringToSymbolRegistry[string] = symbol;
            SymbolToStringRegistry[symbol] = string;
            return symbol;
          },
          keyFor: function keyFor(sym) {
            if (!isSymbol(sym))
              throw TypeError(sym + " is not a symbol");
            if (has(SymbolToStringRegistry, sym))
              return SymbolToStringRegistry[sym];
          },
          useSetter: function() {
            USE_SETTER = true;
          },
          useSimple: function() {
            USE_SETTER = false;
          }
        });
        $({ target: "Object", stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
          create: $create,
          defineProperty: $defineProperty,
          defineProperties: $defineProperties,
          getOwnPropertyDescriptor: $getOwnPropertyDescriptor
        });
        $({ target: "Object", stat: true, forced: !NATIVE_SYMBOL }, {
          getOwnPropertyNames: $getOwnPropertyNames,
          getOwnPropertySymbols: $getOwnPropertySymbols
        });
        $({ target: "Object", stat: true, forced: fails(function() {
          getOwnPropertySymbolsModule.f(1);
        }) }, {
          getOwnPropertySymbols: function getOwnPropertySymbols(it) {
            return getOwnPropertySymbolsModule.f(toObject(it));
          }
        });
        if ($stringify) {
          var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function() {
            var symbol = $Symbol();
            return $stringify([symbol]) != "[null]" || $stringify({ a: symbol }) != "{}" || $stringify(Object(symbol)) != "{}";
          });
          $({ target: "JSON", stat: true, forced: FORCED_JSON_STRINGIFY }, {
            stringify: function stringify(it, replacer, space) {
              var args = [it];
              var index2 = 1;
              var $replacer;
              while (arguments.length > index2)
                args.push(arguments[index2++]);
              $replacer = replacer;
              if (!isObject(replacer) && it === void 0 || isSymbol(it))
                return;
              if (!isArray(replacer))
                replacer = function(key, value) {
                  if (typeof $replacer == "function")
                    value = $replacer.call(this, key, value);
                  if (!isSymbol(value))
                    return value;
                };
              args[1] = replacer;
              return $stringify.apply(null, args);
            }
          });
        }
        if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
          createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
        }
        setToStringTag($Symbol, SYMBOL);
        hiddenKeys[HIDDEN] = true;
      },
      function(module2, exports2, __webpack_require__) {
        var toIndexedObject = __webpack_require__(28);
        var nativeGetOwnPropertyNames = __webpack_require__(125).f;
        var toString = {}.toString;
        var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        var getWindowNames = function(it) {
          try {
            return nativeGetOwnPropertyNames(it);
          } catch (error) {
            return windowNames.slice();
          }
        };
        module2.exports.f = function getOwnPropertyNames(it) {
          return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : nativeGetOwnPropertyNames(toIndexedObject(it));
        };
      },
      function(module2, exports2, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(12);
        defineWellKnownSymbol("asyncIterator");
      },
      function(module2, exports2) {
      },
      function(module2, exports2, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(12);
        defineWellKnownSymbol("hasInstance");
      },
      function(module2, exports2, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(12);
        defineWellKnownSymbol("isConcatSpreadable");
      },
      function(module2, exports2, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(12);
        defineWellKnownSymbol("match");
      },
      function(module2, exports2, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(12);
        defineWellKnownSymbol("matchAll");
      },
      function(module2, exports2, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(12);
        defineWellKnownSymbol("replace");
      },
      function(module2, exports2, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(12);
        defineWellKnownSymbol("search");
      },
      function(module2, exports2, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(12);
        defineWellKnownSymbol("species");
      },
      function(module2, exports2, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(12);
        defineWellKnownSymbol("split");
      },
      function(module2, exports2, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(12);
        defineWellKnownSymbol("toPrimitive");
      },
      function(module2, exports2, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(12);
        defineWellKnownSymbol("toStringTag");
      },
      function(module2, exports2, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(12);
        defineWellKnownSymbol("unscopables");
      },
      function(module2, exports2, __webpack_require__) {
        var setToStringTag = __webpack_require__(36);
        setToStringTag(Math, "Math", true);
      },
      function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__(8);
        var setToStringTag = __webpack_require__(36);
        setToStringTag(global2.JSON, "JSON", true);
      },
      function(module2, exports2, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(12);
        defineWellKnownSymbol("asyncDispose");
      },
      function(module2, exports2, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(12);
        defineWellKnownSymbol("dispose");
      },
      function(module2, exports2, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(12);
        defineWellKnownSymbol("observable");
      },
      function(module2, exports2, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(12);
        defineWellKnownSymbol("patternMatch");
      },
      function(module2, exports2, __webpack_require__) {
        var defineWellKnownSymbol = __webpack_require__(12);
        defineWellKnownSymbol("replaceAll");
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(257);
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(258);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(259);
        var path = __webpack_require__(9);
        module2.exports = path.parseInt;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var parseIntImplementation = __webpack_require__(260);
        $({ global: true, forced: parseInt != parseIntImplementation }, {
          parseInt: parseIntImplementation
        });
      },
      function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__(8);
        var trim = __webpack_require__(90).trim;
        var whitespaces = __webpack_require__(68);
        var $parseInt = global2.parseInt;
        var hex = /^[+-]?0[Xx]/;
        var FORCED = $parseInt(whitespaces + "08") !== 8 || $parseInt(whitespaces + "0x16") !== 22;
        module2.exports = FORCED ? function parseInt2(string, radix) {
          var S = trim(String(string));
          return $parseInt(S, radix >>> 0 || (hex.test(S) ? 16 : 10));
        } : $parseInt;
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(262);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        var slice = __webpack_require__(263);
        var ArrayPrototype = Array.prototype;
        module2.exports = function(it) {
          var own = it.slice;
          return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.slice ? slice : own;
        };
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(264);
        var entryVirtual = __webpack_require__(15);
        module2.exports = entryVirtual("Array").slice;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var isObject = __webpack_require__(13);
        var isArray = __webpack_require__(55);
        var toAbsoluteIndex = __webpack_require__(79);
        var toLength = __webpack_require__(34);
        var toIndexedObject = __webpack_require__(28);
        var createProperty = __webpack_require__(69);
        var wellKnownSymbol = __webpack_require__(10);
        var arrayMethodHasSpeciesSupport = __webpack_require__(56);
        var arrayMethodUsesToLength = __webpack_require__(22);
        var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("slice");
        var USES_TO_LENGTH = arrayMethodUsesToLength("slice", { ACCESSORS: true, 0: 0, 1: 2 });
        var SPECIES = wellKnownSymbol("species");
        var nativeSlice = [].slice;
        var max = Math.max;
        $({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
          slice: function slice(start, end) {
            var O = toIndexedObject(this);
            var length = toLength(O.length);
            var k = toAbsoluteIndex(start, length);
            var fin = toAbsoluteIndex(end === void 0 ? length : end, length);
            var Constructor, result, n;
            if (isArray(O)) {
              Constructor = O.constructor;
              if (typeof Constructor == "function" && (Constructor === Array || isArray(Constructor.prototype))) {
                Constructor = void 0;
              } else if (isObject(Constructor)) {
                Constructor = Constructor[SPECIES];
                if (Constructor === null)
                  Constructor = void 0;
              }
              if (Constructor === Array || Constructor === void 0) {
                return nativeSlice.call(O, k, fin);
              }
            }
            result = new (Constructor === void 0 ? Array : Constructor)(max(fin - k, 0));
            for (n = 0; k < fin; k++, n++)
              if (k in O)
                createProperty(result, n, O[k]);
            result.length = n;
            return result;
          }
        });
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(266);
        var path = __webpack_require__(9);
        module2.exports = path.setTimeout;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var global2 = __webpack_require__(8);
        var userAgent = __webpack_require__(84);
        var slice = [].slice;
        var MSIE = /MSIE .\./.test(userAgent);
        var wrap = function(scheduler) {
          return function(handler, timeout) {
            var boundArgs = arguments.length > 2;
            var args = boundArgs ? slice.call(arguments, 2) : void 0;
            return scheduler(boundArgs ? function() {
              (typeof handler == "function" ? handler : Function(handler)).apply(this, args);
            } : handler, timeout);
          };
        };
        $({ global: true, bind: true, forced: MSIE }, {
          setTimeout: wrap(global2.setTimeout),
          setInterval: wrap(global2.setInterval)
        });
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _assign = _interopRequireDefault(__webpack_require__(127));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var menus_1 = tslib_1.__importDefault(__webpack_require__(272));
        var events_1 = tslib_1.__importDefault(__webpack_require__(273));
        var style_1 = tslib_1.__importDefault(__webpack_require__(128));
        var paste_1 = tslib_1.__importDefault(__webpack_require__(274));
        var cmd_1 = tslib_1.__importDefault(__webpack_require__(275));
        var image_1 = tslib_1.__importDefault(__webpack_require__(276));
        var text_1 = tslib_1.__importDefault(__webpack_require__(129));
        var lang_1 = tslib_1.__importDefault(__webpack_require__(277));
        var history_1 = tslib_1.__importDefault(__webpack_require__(278));
        var video_1 = tslib_1.__importDefault(__webpack_require__(279));
        var defaultConfig = (0, _assign["default"])({}, menus_1["default"], events_1["default"], style_1["default"], cmd_1["default"], paste_1["default"], image_1["default"], text_1["default"], lang_1["default"], history_1["default"], video_1["default"], {
          linkCheck: function linkCheck(text, link) {
            return true;
          }
        });
        exports2["default"] = defaultConfig;
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(269);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(270);
        var path = __webpack_require__(9);
        module2.exports = path.Object.assign;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var assign = __webpack_require__(271);
        $({ target: "Object", stat: true, forced: Object.assign !== assign }, {
          assign
        });
      },
      function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(14);
        var fails = __webpack_require__(11);
        var objectKeys = __webpack_require__(52);
        var getOwnPropertySymbolsModule = __webpack_require__(126);
        var propertyIsEnumerableModule = __webpack_require__(59);
        var toObject = __webpack_require__(29);
        var IndexedObject = __webpack_require__(72);
        var nativeAssign = Object.assign;
        var defineProperty = Object.defineProperty;
        module2.exports = !nativeAssign || fails(function() {
          if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, "a", {
            enumerable: true,
            get: function() {
              defineProperty(this, "b", {
                value: 3,
                enumerable: false
              });
            }
          }), { b: 2 })).b !== 1)
            return true;
          var A = {};
          var B = {};
          var symbol = Symbol();
          var alphabet = "abcdefghijklmnopqrst";
          A[symbol] = 7;
          alphabet.split("").forEach(function(chr) {
            B[chr] = chr;
          });
          return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join("") != alphabet;
        }) ? function assign(target, source) {
          var T = toObject(target);
          var argumentsLength = arguments.length;
          var index2 = 1;
          var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
          var propertyIsEnumerable = propertyIsEnumerableModule.f;
          while (argumentsLength > index2) {
            var S = IndexedObject(arguments[index2++]);
            var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
            var length = keys.length;
            var j = 0;
            var key;
            while (length > j) {
              key = keys[j++];
              if (!DESCRIPTORS || propertyIsEnumerable.call(S, key))
                T[key] = S[key];
            }
          }
          return T;
        } : nativeAssign;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2["default"] = {
          menus: [
            "head",
            "bold",
            "fontSize",
            "fontName",
            "italic",
            "underline",
            "strikeThrough",
            "indent",
            "lineHeight",
            "foreColor",
            "backColor",
            "link",
            "list",
            "todo",
            "justify",
            "quote",
            "emoticon",
            "image",
            "video",
            "table",
            "code",
            "splitLine",
            "undo",
            "redo"
          ],
          fontNames: ["\u9ED1\u4F53", "\u4EFF\u5B8B", "\u6977\u4F53", "\u6807\u6977\u4F53", "\u534E\u6587\u4EFF\u5B8B", "\u534E\u6587\u6977\u4F53", "\u5B8B\u4F53", "\u5FAE\u8F6F\u96C5\u9ED1", "Arial", "Tahoma", "Verdana", "Times New Roman", "Courier New"],
          fontSizes: {
            "x-small": {
              name: "10px",
              value: "1"
            },
            small: {
              name: "13px",
              value: "2"
            },
            normal: {
              name: "16px",
              value: "3"
            },
            large: {
              name: "18px",
              value: "4"
            },
            "x-large": {
              name: "24px",
              value: "5"
            },
            "xx-large": {
              name: "32px",
              value: "6"
            },
            "xxx-large": {
              name: "48px",
              value: "7"
            }
          },
          colors: ["#000000", "#ffffff", "#eeece0", "#1c487f", "#4d80bf", "#c24f4a", "#8baa4a", "#7b5ba1", "#46acc8", "#f9963b"],
          languageType: ["Bash", "C", "C#", "C++", "CSS", "Java", "JavaScript", "JSON", "TypeScript", "Plain text", "Html", "XML", "SQL", "Go", "Kotlin", "Lua", "Markdown", "PHP", "Python", "Shell Session", "Ruby"],
          languageTab: "\u3000\u3000\u3000\u3000",
          emotions: [{
            title: "\u8868\u60C5",
            type: "emoji",
            content: "\u{1F600} \u{1F603} \u{1F604} \u{1F601} \u{1F606} \u{1F605} \u{1F602} \u{1F923} \u{1F60A} \u{1F607} \u{1F642} \u{1F643} \u{1F609} \u{1F60C} \u{1F60D} \u{1F618} \u{1F617} \u{1F619} \u{1F61A} \u{1F60B} \u{1F61B} \u{1F61D} \u{1F61C} \u{1F913} \u{1F60E} \u{1F60F} \u{1F612} \u{1F61E} \u{1F614} \u{1F61F} \u{1F615} \u{1F641} \u{1F623} \u{1F616} \u{1F62B} \u{1F629} \u{1F622} \u{1F62D} \u{1F624} \u{1F620} \u{1F621} \u{1F633} \u{1F631} \u{1F628} \u{1F917} \u{1F914} \u{1F636} \u{1F611} \u{1F62C} \u{1F644} \u{1F62F} \u{1F634} \u{1F637} \u{1F911} \u{1F608} \u{1F921} \u{1F4A9} \u{1F47B} \u{1F480} \u{1F440} \u{1F463}".split(/\s/)
          }, {
            title: "\u624B\u52BF",
            type: "emoji",
            content: "\u{1F450} \u{1F64C} \u{1F44F} \u{1F91D} \u{1F44D} \u{1F44E} \u{1F44A} \u270A \u{1F91B} \u{1F91C} \u{1F91E} \u270C\uFE0F \u{1F918} \u{1F44C} \u{1F448} \u{1F449} \u{1F446} \u{1F447} \u261D\uFE0F \u270B \u{1F91A} \u{1F590} \u{1F596} \u{1F44B} \u{1F919} \u{1F4AA} \u{1F595} \u270D\uFE0F \u{1F64F}".split(/\s/)
          }],
          lineHeights: ["1", "1.15", "1.6", "2", "2.5", "3"],
          undoLimit: 20,
          indentation: "2em",
          showMenuTooltips: true,
          menuTooltipPosition: "up"
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var const_1 = __webpack_require__(7);
        function customAlert(alertInfo, alertType, debugInfo) {
          window.alert(alertInfo);
          if (debugInfo) {
            console.error("wangEditor: " + debugInfo);
          }
        }
        exports2["default"] = {
          onchangeTimeout: 200,
          onchange: null,
          onfocus: const_1.EMPTY_FN,
          onblur: const_1.EMPTY_FN,
          onCatalogChange: null,
          customAlert
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2["default"] = {
          pasteFilterStyle: true,
          pasteIgnoreImg: false,
          pasteTextHandle: function pasteTextHandle(content) {
            return content;
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2["default"] = {
          styleWithCSS: false
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var const_1 = __webpack_require__(7);
        exports2["default"] = {
          linkImgCheck: function linkImgCheck(src, alt, href) {
            return true;
          },
          showLinkImg: true,
          showLinkImgAlt: true,
          showLinkImgHref: true,
          linkImgCallback: const_1.EMPTY_FN,
          uploadImgAccept: ["jpg", "jpeg", "png", "gif", "bmp"],
          uploadImgServer: "",
          uploadImgShowBase64: false,
          uploadImgMaxSize: 5 * 1024 * 1024,
          uploadImgMaxLength: 100,
          uploadFileName: "",
          uploadImgParams: {},
          uploadImgParamsWithUrl: false,
          uploadImgHeaders: {},
          uploadImgHooks: {},
          uploadImgTimeout: 10 * 1e3,
          withCredentials: false,
          customUploadImg: null,
          uploadImgFromMedia: null
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2["default"] = {
          lang: "zh-CN",
          languages: {
            "zh-CN": {
              wangEditor: {
                \u91CD\u7F6E: "\u91CD\u7F6E",
                \u63D2\u5165: "\u63D2\u5165",
                \u9ED8\u8BA4: "\u9ED8\u8BA4",
                \u521B\u5EFA: "\u521B\u5EFA",
                \u4FEE\u6539: "\u4FEE\u6539",
                \u5982: "\u5982",
                \u8BF7\u8F93\u5165\u6B63\u6587: "\u8BF7\u8F93\u5165\u6B63\u6587",
                menus: {
                  title: {
                    \u6807\u9898: "\u6807\u9898",
                    \u52A0\u7C97: "\u52A0\u7C97",
                    \u5B57\u53F7: "\u5B57\u53F7",
                    \u5B57\u4F53: "\u5B57\u4F53",
                    \u659C\u4F53: "\u659C\u4F53",
                    \u4E0B\u5212\u7EBF: "\u4E0B\u5212\u7EBF",
                    \u5220\u9664\u7EBF: "\u5220\u9664\u7EBF",
                    \u7F29\u8FDB: "\u7F29\u8FDB",
                    \u884C\u9AD8: "\u884C\u9AD8",
                    \u6587\u5B57\u989C\u8272: "\u6587\u5B57\u989C\u8272",
                    \u80CC\u666F\u8272: "\u80CC\u666F\u8272",
                    \u94FE\u63A5: "\u94FE\u63A5",
                    \u5E8F\u5217: "\u5E8F\u5217",
                    \u5BF9\u9F50: "\u5BF9\u9F50",
                    \u5F15\u7528: "\u5F15\u7528",
                    \u8868\u60C5: "\u8868\u60C5",
                    \u56FE\u7247: "\u56FE\u7247",
                    \u89C6\u9891: "\u89C6\u9891",
                    \u8868\u683C: "\u8868\u683C",
                    \u4EE3\u7801: "\u4EE3\u7801",
                    \u5206\u5272\u7EBF: "\u5206\u5272\u7EBF",
                    \u6062\u590D: "\u6062\u590D",
                    \u64A4\u9500: "\u64A4\u9500",
                    \u5168\u5C4F: "\u5168\u5C4F",
                    \u53D6\u6D88\u5168\u5C4F: "\u53D6\u6D88\u5168\u5C4F",
                    \u5F85\u529E\u4E8B\u9879: "\u5F85\u529E\u4E8B\u9879"
                  },
                  dropListMenu: {
                    \u8BBE\u7F6E\u6807\u9898: "\u8BBE\u7F6E\u6807\u9898",
                    \u80CC\u666F\u989C\u8272: "\u80CC\u666F\u989C\u8272",
                    \u6587\u5B57\u989C\u8272: "\u6587\u5B57\u989C\u8272",
                    \u8BBE\u7F6E\u5B57\u53F7: "\u8BBE\u7F6E\u5B57\u53F7",
                    \u8BBE\u7F6E\u5B57\u4F53: "\u8BBE\u7F6E\u5B57\u4F53",
                    \u8BBE\u7F6E\u7F29\u8FDB: "\u8BBE\u7F6E\u7F29\u8FDB",
                    \u5BF9\u9F50\u65B9\u5F0F: "\u5BF9\u9F50\u65B9\u5F0F",
                    \u8BBE\u7F6E\u884C\u9AD8: "\u8BBE\u7F6E\u884C\u9AD8",
                    \u5E8F\u5217: "\u5E8F\u5217",
                    head: {
                      \u6B63\u6587: "\u6B63\u6587"
                    },
                    indent: {
                      \u589E\u52A0\u7F29\u8FDB: "\u589E\u52A0\u7F29\u8FDB",
                      \u51CF\u5C11\u7F29\u8FDB: "\u51CF\u5C11\u7F29\u8FDB"
                    },
                    justify: {
                      \u9760\u5DE6: "\u9760\u5DE6",
                      \u5C45\u4E2D: "\u5C45\u4E2D",
                      \u9760\u53F3: "\u9760\u53F3",
                      \u4E24\u7AEF: "\u4E24\u7AEF"
                    },
                    list: {
                      \u65E0\u5E8F\u5217\u8868: "\u65E0\u5E8F\u5217\u8868",
                      \u6709\u5E8F\u5217\u8868: "\u6709\u5E8F\u5217\u8868"
                    }
                  },
                  panelMenus: {
                    emoticon: {
                      \u9ED8\u8BA4: "\u9ED8\u8BA4",
                      \u65B0\u6D6A: "\u65B0\u6D6A",
                      emoji: "emoji",
                      \u624B\u52BF: "\u624B\u52BF"
                    },
                    image: {
                      \u4E0A\u4F20\u56FE\u7247: "\u4E0A\u4F20\u56FE\u7247",
                      \u7F51\u7EDC\u56FE\u7247: "\u7F51\u7EDC\u56FE\u7247",
                      \u56FE\u7247\u5730\u5740: "\u56FE\u7247\u5730\u5740",
                      \u56FE\u7247\u6587\u5B57\u8BF4\u660E: "\u56FE\u7247\u6587\u5B57\u8BF4\u660E",
                      \u8DF3\u8F6C\u94FE\u63A5: "\u8DF3\u8F6C\u94FE\u63A5"
                    },
                    link: {
                      \u94FE\u63A5: "\u94FE\u63A5",
                      \u94FE\u63A5\u6587\u5B57: "\u94FE\u63A5\u6587\u5B57",
                      \u53D6\u6D88\u94FE\u63A5: "\u53D6\u6D88\u94FE\u63A5",
                      \u67E5\u770B\u94FE\u63A5: "\u67E5\u770B\u94FE\u63A5"
                    },
                    video: {
                      \u63D2\u5165\u89C6\u9891: "\u63D2\u5165\u89C6\u9891",
                      \u4E0A\u4F20\u89C6\u9891: "\u4E0A\u4F20\u89C6\u9891"
                    },
                    table: {
                      \u884C: "\u884C",
                      \u5217: "\u5217",
                      \u7684: "\u7684",
                      \u8868\u683C: "\u8868\u683C",
                      \u6DFB\u52A0\u884C: "\u6DFB\u52A0\u884C",
                      \u5220\u9664\u884C: "\u5220\u9664\u884C",
                      \u6DFB\u52A0\u5217: "\u6DFB\u52A0\u5217",
                      \u5220\u9664\u5217: "\u5220\u9664\u5217",
                      \u8BBE\u7F6E\u8868\u5934: "\u8BBE\u7F6E\u8868\u5934",
                      \u53D6\u6D88\u8868\u5934: "\u53D6\u6D88\u8868\u5934",
                      \u63D2\u5165\u8868\u683C: "\u63D2\u5165\u8868\u683C",
                      \u5220\u9664\u8868\u683C: "\u5220\u9664\u8868\u683C"
                    },
                    code: {
                      \u5220\u9664\u4EE3\u7801: "\u5220\u9664\u4EE3\u7801",
                      \u4FEE\u6539\u4EE3\u7801: "\u4FEE\u6539\u4EE3\u7801",
                      \u63D2\u5165\u4EE3\u7801: "\u63D2\u5165\u4EE3\u7801"
                    }
                  }
                },
                validate: {
                  \u5F20\u56FE\u7247: "\u5F20\u56FE\u7247",
                  \u5927\u4E8E: "\u5927\u4E8E",
                  \u56FE\u7247\u94FE\u63A5: "\u56FE\u7247\u94FE\u63A5",
                  \u4E0D\u662F\u56FE\u7247: "\u4E0D\u662F\u56FE\u7247",
                  \u8FD4\u56DE\u7ED3\u679C: "\u8FD4\u56DE\u7ED3\u679C",
                  \u4E0A\u4F20\u56FE\u7247\u8D85\u65F6: "\u4E0A\u4F20\u56FE\u7247\u8D85\u65F6",
                  \u4E0A\u4F20\u56FE\u7247\u9519\u8BEF: "\u4E0A\u4F20\u56FE\u7247\u9519\u8BEF",
                  \u4E0A\u4F20\u56FE\u7247\u5931\u8D25: "\u4E0A\u4F20\u56FE\u7247\u5931\u8D25",
                  \u63D2\u5165\u56FE\u7247\u9519\u8BEF: "\u63D2\u5165\u56FE\u7247\u9519\u8BEF",
                  \u4E00\u6B21\u6700\u591A\u4E0A\u4F20: "\u4E00\u6B21\u6700\u591A\u4E0A\u4F20",
                  \u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25: "\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25",
                  \u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7: "\u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7",
                  \u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001: "\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001",
                  \u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "\u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF",
                  \u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B: "\u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B",
                  \u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B: "\u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B",
                  \u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C: "\u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C",
                  \u63D2\u5165\u89C6\u9891\u9519\u8BEF: "\u63D2\u5165\u89C6\u9891\u9519\u8BEF",
                  \u89C6\u9891\u94FE\u63A5: "\u89C6\u9891\u94FE\u63A5",
                  \u4E0D\u662F\u89C6\u9891: "\u4E0D\u662F\u89C6\u9891",
                  \u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7: "\u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7",
                  \u4E2A\u89C6\u9891: "\u4E2A\u89C6\u9891",
                  \u4E0A\u4F20\u89C6\u9891\u8D85\u65F6: "\u4E0A\u4F20\u89C6\u9891\u8D85\u65F6",
                  \u4E0A\u4F20\u89C6\u9891\u9519\u8BEF: "\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF",
                  \u4E0A\u4F20\u89C6\u9891\u5931\u8D25: "\u4E0A\u4F20\u89C6\u9891\u5931\u8D25",
                  \u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF"
                }
              }
            },
            en: {
              wangEditor: {
                \u91CD\u7F6E: "reset",
                \u63D2\u5165: "insert",
                \u9ED8\u8BA4: "default",
                \u521B\u5EFA: "create",
                \u4FEE\u6539: "edit",
                \u5982: "like",
                \u8BF7\u8F93\u5165\u6B63\u6587: "please enter the text",
                menus: {
                  title: {
                    \u6807\u9898: "head",
                    \u52A0\u7C97: "bold",
                    \u5B57\u53F7: "font size",
                    \u5B57\u4F53: "font family",
                    \u659C\u4F53: "italic",
                    \u4E0B\u5212\u7EBF: "underline",
                    \u5220\u9664\u7EBF: "strikethrough",
                    \u7F29\u8FDB: "indent",
                    \u884C\u9AD8: "line heihgt",
                    \u6587\u5B57\u989C\u8272: "font color",
                    \u80CC\u666F\u8272: "background",
                    \u94FE\u63A5: "link",
                    \u5E8F\u5217: "numbered list",
                    \u5BF9\u9F50: "align",
                    \u5F15\u7528: "quote",
                    \u8868\u60C5: "emoticons",
                    \u56FE\u7247: "image",
                    \u89C6\u9891: "media",
                    \u8868\u683C: "table",
                    \u4EE3\u7801: "code",
                    \u5206\u5272\u7EBF: "split line",
                    \u6062\u590D: "undo",
                    \u64A4\u9500: "redo",
                    \u5168\u5C4F: "fullscreen",
                    \u53D6\u6D88\u5168\u5C4F: "cancel fullscreen",
                    \u5F85\u529E\u4E8B\u9879: "todo"
                  },
                  dropListMenu: {
                    \u8BBE\u7F6E\u6807\u9898: "title",
                    \u80CC\u666F\u989C\u8272: "background",
                    \u6587\u5B57\u989C\u8272: "font color",
                    \u8BBE\u7F6E\u5B57\u53F7: "font size",
                    \u8BBE\u7F6E\u5B57\u4F53: "font family",
                    \u8BBE\u7F6E\u7F29\u8FDB: "indent",
                    \u5BF9\u9F50\u65B9\u5F0F: "align",
                    \u8BBE\u7F6E\u884C\u9AD8: "line heihgt",
                    \u5E8F\u5217: "list",
                    head: {
                      \u6B63\u6587: "text"
                    },
                    indent: {
                      \u589E\u52A0\u7F29\u8FDB: "indent",
                      \u51CF\u5C11\u7F29\u8FDB: "outdent"
                    },
                    justify: {
                      \u9760\u5DE6: "left",
                      \u5C45\u4E2D: "center",
                      \u9760\u53F3: "right",
                      \u4E24\u7AEF: "justify"
                    },
                    list: {
                      \u65E0\u5E8F\u5217\u8868: "unordered",
                      \u6709\u5E8F\u5217\u8868: "ordered"
                    }
                  },
                  panelMenus: {
                    emoticon: {
                      \u8868\u60C5: "emoji",
                      \u624B\u52BF: "gesture"
                    },
                    image: {
                      \u4E0A\u4F20\u56FE\u7247: "upload image",
                      \u7F51\u7EDC\u56FE\u7247: "network image",
                      \u56FE\u7247\u5730\u5740: "image link",
                      \u56FE\u7247\u6587\u5B57\u8BF4\u660E: "image alt",
                      \u8DF3\u8F6C\u94FE\u63A5: "hyperlink"
                    },
                    link: {
                      \u94FE\u63A5: "link",
                      \u94FE\u63A5\u6587\u5B57: "link text",
                      \u53D6\u6D88\u94FE\u63A5: "unlink",
                      \u67E5\u770B\u94FE\u63A5: "view links"
                    },
                    video: {
                      \u63D2\u5165\u89C6\u9891: "insert video",
                      \u4E0A\u4F20\u89C6\u9891: "upload local video"
                    },
                    table: {
                      \u884C: "rows",
                      \u5217: "columns",
                      \u7684: " ",
                      \u8868\u683C: "table",
                      \u6DFB\u52A0\u884C: "insert row",
                      \u5220\u9664\u884C: "delete row",
                      \u6DFB\u52A0\u5217: "insert column",
                      \u5220\u9664\u5217: "delete column",
                      \u8BBE\u7F6E\u8868\u5934: "set header",
                      \u53D6\u6D88\u8868\u5934: "cancel header",
                      \u63D2\u5165\u8868\u683C: "insert table",
                      \u5220\u9664\u8868\u683C: "delete table"
                    },
                    code: {
                      \u5220\u9664\u4EE3\u7801: "delete code",
                      \u4FEE\u6539\u4EE3\u7801: "edit code",
                      \u63D2\u5165\u4EE3\u7801: "insert code"
                    }
                  }
                },
                validate: {
                  \u5F20\u56FE\u7247: "images",
                  \u5927\u4E8E: "greater than",
                  \u56FE\u7247\u94FE\u63A5: "image link",
                  \u4E0D\u662F\u56FE\u7247: "is not image",
                  \u8FD4\u56DE\u7ED3\u679C: "return results",
                  \u4E0A\u4F20\u56FE\u7247\u8D85\u65F6: "upload image timeout",
                  \u4E0A\u4F20\u56FE\u7247\u9519\u8BEF: "upload image error",
                  \u4E0A\u4F20\u56FE\u7247\u5931\u8D25: "upload image failed",
                  \u63D2\u5165\u56FE\u7247\u9519\u8BEF: "insert image error",
                  \u4E00\u6B21\u6700\u591A\u4E0A\u4F20: "once most at upload",
                  \u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25: "download link failed",
                  \u56FE\u7247\u9A8C\u8BC1\u672A\u901A\u8FC7: "image validate failed",
                  \u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001: "server return status",
                  \u4E0A\u4F20\u56FE\u7247\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "upload image return results error",
                  \u8BF7\u66FF\u6362\u4E3A\u652F\u6301\u7684\u56FE\u7247\u7C7B\u578B: "please replace with a supported image type",
                  \u60A8\u63D2\u5165\u7684\u7F51\u7EDC\u56FE\u7247\u65E0\u6CD5\u8BC6\u522B: "the network picture you inserted is not recognized",
                  \u60A8\u521A\u624D\u63D2\u5165\u7684\u56FE\u7247\u94FE\u63A5\u672A\u901A\u8FC7\u7F16\u8F91\u5668\u6821\u9A8C: "the image link you just inserted did not pass the editor verification",
                  \u63D2\u5165\u89C6\u9891\u9519\u8BEF: "insert video error",
                  \u89C6\u9891\u94FE\u63A5: "video link",
                  \u4E0D\u662F\u89C6\u9891: "is not video",
                  \u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7: "video validate failed",
                  \u4E2A\u89C6\u9891: "videos",
                  \u4E0A\u4F20\u89C6\u9891\u8D85\u65F6: "upload video timeout",
                  \u4E0A\u4F20\u89C6\u9891\u9519\u8BEF: "upload video error",
                  \u4E0A\u4F20\u89C6\u9891\u5931\u8D25: "upload video failed",
                  \u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF: "upload video return results error"
                }
              }
            }
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var util_1 = __webpack_require__(6);
        function compatibleMode() {
          if (util_1.UA.isIE() || util_1.UA.isOldEdge) {
            return true;
          }
          return false;
        }
        exports2["default"] = {
          compatibleMode,
          historyMaxSize: 30
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var const_1 = __webpack_require__(7);
        exports2["default"] = {
          onlineVideoCheck: function onlineVideoCheck(video) {
            return true;
          },
          onlineVideoCallback: const_1.EMPTY_FN,
          showLinkVideo: true,
          uploadVideoAccept: ["mp4"],
          uploadVideoServer: "",
          uploadVideoMaxSize: 1 * 1024 * 1024 * 1024,
          uploadVideoName: "",
          uploadVideoParams: {},
          uploadVideoParamsWithUrl: false,
          uploadVideoHeaders: {},
          uploadVideoHooks: {},
          uploadVideoTimeout: 1e3 * 60 * 60 * 2,
          withVideoCredentials: false,
          customUploadVideo: null,
          customInsertVideo: null
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _trim = _interopRequireDefault(__webpack_require__(17));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var util_1 = __webpack_require__(6);
        var const_1 = __webpack_require__(7);
        var SelectionAndRange = function() {
          function SelectionAndRange2(editor) {
            this._currentRange = null;
            this.editor = editor;
          }
          SelectionAndRange2.prototype.getRange = function() {
            return this._currentRange;
          };
          SelectionAndRange2.prototype.saveRange = function(_range) {
            if (_range) {
              this._currentRange = _range;
              return;
            }
            var selection = window.getSelection();
            if (selection.rangeCount === 0) {
              return;
            }
            var range = selection.getRangeAt(0);
            var $containerElem = this.getSelectionContainerElem(range);
            if (!($containerElem === null || $containerElem === void 0 ? void 0 : $containerElem.length)) {
              return;
            }
            if ($containerElem.attr("contenteditable") === "false" || $containerElem.parentUntil("[contenteditable=false]")) {
              return;
            }
            var editor = this.editor;
            var $textElem = editor.$textElem;
            if ($textElem.isContain($containerElem)) {
              if ($textElem.elems[0] === $containerElem.elems[0]) {
                var _context;
                if ((0, _trim["default"])(_context = $textElem.html()).call(_context) === const_1.EMPTY_P) {
                  var $children = $textElem.children();
                  var $last = $children === null || $children === void 0 ? void 0 : $children.last();
                  editor.selection.createRangeByElem($last, true, true);
                  editor.selection.restoreSelection();
                }
              }
              this._currentRange = range;
            }
          };
          SelectionAndRange2.prototype.collapseRange = function(toStart) {
            if (toStart === void 0) {
              toStart = false;
            }
            var range = this._currentRange;
            if (range) {
              range.collapse(toStart);
            }
          };
          SelectionAndRange2.prototype.getSelectionText = function() {
            var range = this._currentRange;
            if (range) {
              return range.toString();
            } else {
              return "";
            }
          };
          SelectionAndRange2.prototype.getSelectionContainerElem = function(range) {
            var r;
            r = range || this._currentRange;
            var elem;
            if (r) {
              elem = r.commonAncestorContainer;
              return dom_core_1["default"](elem.nodeType === 1 ? elem : elem.parentNode);
            }
          };
          SelectionAndRange2.prototype.getSelectionStartElem = function(range) {
            var r;
            r = range || this._currentRange;
            var elem;
            if (r) {
              elem = r.startContainer;
              return dom_core_1["default"](elem.nodeType === 1 ? elem : elem.parentNode);
            }
          };
          SelectionAndRange2.prototype.getSelectionEndElem = function(range) {
            var r;
            r = range || this._currentRange;
            var elem;
            if (r) {
              elem = r.endContainer;
              return dom_core_1["default"](elem.nodeType === 1 ? elem : elem.parentNode);
            }
          };
          SelectionAndRange2.prototype.isSelectionEmpty = function() {
            var range = this._currentRange;
            if (range && range.startContainer) {
              if (range.startContainer === range.endContainer) {
                if (range.startOffset === range.endOffset) {
                  return true;
                }
              }
            }
            return false;
          };
          SelectionAndRange2.prototype.restoreSelection = function() {
            var selection = window.getSelection();
            var r = this._currentRange;
            if (selection && r) {
              selection.removeAllRanges();
              selection.addRange(r);
            }
          };
          SelectionAndRange2.prototype.createEmptyRange = function() {
            var editor = this.editor;
            var range = this.getRange();
            var $elem;
            if (!range) {
              return;
            }
            if (!this.isSelectionEmpty()) {
              return;
            }
            try {
              if (util_1.UA.isWebkit()) {
                editor.cmd["do"]("insertHTML", "&#8203;");
                range.setEnd(range.endContainer, range.endOffset + 1);
                this.saveRange(range);
              } else {
                $elem = dom_core_1["default"]("<strong>&#8203;</strong>");
                editor.cmd["do"]("insertElem", $elem);
                this.createRangeByElem($elem, true);
              }
            } catch (ex) {
            }
          };
          SelectionAndRange2.prototype.createRangeByElems = function(startDom, endDom) {
            var selection = window.getSelection ? window.getSelection() : document.getSelection();
            selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
            var range = document.createRange();
            range.setStart(startDom, 0);
            range.setEnd(endDom, endDom.childNodes.length || 1);
            this.saveRange(range);
            this.restoreSelection();
          };
          SelectionAndRange2.prototype.createRangeByElem = function($elem, toStart, isContent) {
            if (!$elem.length) {
              return;
            }
            var elem = $elem.elems[0];
            var range = document.createRange();
            if (isContent) {
              range.selectNodeContents(elem);
            } else {
              range.selectNode(elem);
            }
            if (toStart != null) {
              range.collapse(toStart);
              if (!toStart) {
                this.saveRange(range);
                this.editor.selection.moveCursor(elem);
              }
            }
            this.saveRange(range);
          };
          SelectionAndRange2.prototype.getSelectionRangeTopNodes = function() {
            var _a, _b;
            var $nodeList;
            var $startElem = (_a = this.getSelectionStartElem()) === null || _a === void 0 ? void 0 : _a.getNodeTop(this.editor);
            var $endElem = (_b = this.getSelectionEndElem()) === null || _b === void 0 ? void 0 : _b.getNodeTop(this.editor);
            $nodeList = this.recordSelectionNodes(dom_core_1["default"]($startElem), dom_core_1["default"]($endElem));
            return $nodeList;
          };
          SelectionAndRange2.prototype.moveCursor = function(node, position) {
            var _a;
            var range = this.getRange();
            var len = node.nodeType === 3 ? (_a = node.nodeValue) === null || _a === void 0 ? void 0 : _a.length : node.childNodes.length;
            if ((util_1.UA.isFirefox || util_1.UA.isIE()) && len !== 0) {
              if (node.nodeType === 3 || node.childNodes[len - 1].nodeName === "BR") {
                len = len - 1;
              }
            }
            var pos = position !== null && position !== void 0 ? position : len;
            if (!range) {
              return;
            }
            if (node) {
              range.setStart(node, pos);
              range.setEnd(node, pos);
              this.restoreSelection();
            }
          };
          SelectionAndRange2.prototype.getCursorPos = function() {
            var selection = window.getSelection();
            return selection === null || selection === void 0 ? void 0 : selection.anchorOffset;
          };
          SelectionAndRange2.prototype.clearWindowSelectionRange = function() {
            var selection = window.getSelection();
            if (selection) {
              selection.removeAllRanges();
            }
          };
          SelectionAndRange2.prototype.recordSelectionNodes = function($node, $endElem) {
            var $list = [];
            var isEnd = true;
            try {
              var $NODE = $node;
              var $textElem = this.editor.$textElem;
              while (isEnd) {
                var $elem = $NODE === null || $NODE === void 0 ? void 0 : $NODE.getNodeTop(this.editor);
                if ($elem.getNodeName() === "BODY")
                  isEnd = false;
                if ($elem.length > 0) {
                  $list.push(dom_core_1["default"]($NODE));
                  if (($endElem === null || $endElem === void 0 ? void 0 : $endElem.equal($elem)) || $textElem.equal($elem)) {
                    isEnd = false;
                  } else {
                    $NODE = $elem.getNextSibling();
                  }
                }
              }
            } catch (e) {
              isEnd = false;
            }
            return $list;
          };
          SelectionAndRange2.prototype.setRangeToElem = function(node) {
            var range = this.getRange();
            range === null || range === void 0 ? void 0 : range.setStart(node, 0);
            range === null || range === void 0 ? void 0 : range.setEnd(node, 0);
          };
          return SelectionAndRange2;
        }();
        exports2["default"] = SelectionAndRange;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var Command = function() {
          function Command2(editor) {
            this.editor = editor;
          }
          Command2.prototype["do"] = function(name, value) {
            var editor = this.editor;
            if (editor.config.styleWithCSS) {
              document.execCommand("styleWithCSS", false, "true");
            }
            var selection = editor.selection;
            if (!selection.getRange()) {
              return;
            }
            selection.restoreSelection();
            switch (name) {
              case "insertHTML":
                this.insertHTML(value);
                break;
              case "insertElem":
                this.insertElem(value);
                break;
              default:
                this.execCommand(name, value);
                break;
            }
            editor.menus.changeActive();
            selection.saveRange();
            selection.restoreSelection();
          };
          Command2.prototype.insertHTML = function(html) {
            var editor = this.editor;
            var range = editor.selection.getRange();
            if (range == null)
              return;
            if (this.queryCommandSupported("insertHTML")) {
              this.execCommand("insertHTML", html);
            } else if (range.insertNode) {
              range.deleteContents();
              if (dom_core_1["default"](html).elems.length > 0) {
                range.insertNode(dom_core_1["default"](html).elems[0]);
              } else {
                var newNode = document.createElement("p");
                newNode.appendChild(document.createTextNode(html));
                range.insertNode(newNode);
              }
              editor.selection.collapseRange();
            }
          };
          Command2.prototype.insertElem = function($elem) {
            var editor = this.editor;
            var range = editor.selection.getRange();
            if (range == null)
              return;
            if (range.insertNode) {
              range.deleteContents();
              range.insertNode($elem.elems[0]);
            }
          };
          Command2.prototype.execCommand = function(name, value) {
            document.execCommand(name, false, value);
          };
          Command2.prototype.queryCommandValue = function(name) {
            return document.queryCommandValue(name);
          };
          Command2.prototype.queryCommandState = function(name) {
            return document.queryCommandState(name);
          };
          Command2.prototype.queryCommandSupported = function(name) {
            return document.queryCommandSupported(name);
          };
          return Command2;
        }();
        exports2["default"] = Command;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _find = _interopRequireDefault(__webpack_require__(31));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        var _trim = _interopRequireDefault(__webpack_require__(17));
        var _indexOf = _interopRequireDefault(__webpack_require__(27));
        var _setTimeout2 = _interopRequireDefault(__webpack_require__(46));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var index_1 = tslib_1.__importDefault(__webpack_require__(287));
        var util_1 = __webpack_require__(6);
        var getChildrenJSON_1 = tslib_1.__importDefault(__webpack_require__(299));
        var getHtmlByNodeList_1 = tslib_1.__importDefault(__webpack_require__(300));
        var const_1 = __webpack_require__(7);
        var Text = function() {
          function Text2(editor) {
            this.editor = editor;
            this.eventHooks = {
              onBlurEvents: [],
              changeEvents: [],
              dropEvents: [],
              clickEvents: [],
              keydownEvents: [],
              keyupEvents: [],
              tabUpEvents: [],
              tabDownEvents: [],
              enterUpEvents: [],
              enterDownEvents: [],
              deleteUpEvents: [],
              deleteDownEvents: [],
              pasteEvents: [],
              linkClickEvents: [],
              codeClickEvents: [],
              textScrollEvents: [],
              toolbarClickEvents: [],
              imgClickEvents: [],
              imgDragBarMouseDownEvents: [],
              tableClickEvents: [],
              menuClickEvents: [],
              dropListMenuHoverEvents: [],
              splitLineEvents: [],
              videoClickEvents: []
            };
          }
          Text2.prototype.init = function() {
            this._saveRange();
            this._bindEventHooks();
            index_1["default"](this);
          };
          Text2.prototype.togglePlaceholder = function() {
            var _context;
            var html = this.html();
            var $placeholder = (0, _find["default"])(_context = this.editor.$textContainerElem).call(_context, ".placeholder");
            $placeholder.hide();
            if (this.editor.isComposing)
              return;
            if (!html || html === " ")
              $placeholder.show();
          };
          Text2.prototype.clear = function() {
            this.html(const_1.EMPTY_P);
          };
          Text2.prototype.html = function(val) {
            var editor = this.editor;
            var $textElem = editor.$textElem;
            if (val == null) {
              var html_1 = $textElem.html();
              html_1 = html_1.replace(/\u200b/gm, "");
              html_1 = html_1.replace(/<p><\/p>/gim, "");
              html_1 = html_1.replace(const_1.EMPTY_P_LAST_REGEX, "");
              html_1 = html_1.replace(const_1.EMPTY_P_REGEX, "<p>");
              var selfCloseHtmls = html_1.match(/<(img|br|hr|input)[^>]*>/gi);
              if (selfCloseHtmls !== null) {
                (0, _forEach["default"])(selfCloseHtmls).call(selfCloseHtmls, function(item) {
                  if (!item.match(/\/>/)) {
                    html_1 = html_1.replace(item, item.substring(0, item.length - 1) + "/>");
                  }
                });
              }
              return html_1;
            }
            val = (0, _trim["default"])(val).call(val);
            if (val === "") {
              val = const_1.EMPTY_P;
            }
            if ((0, _indexOf["default"])(val).call(val, "<") !== 0) {
              val = "<p>" + val + "</p>";
            }
            $textElem.html(val);
            editor.initSelection();
          };
          Text2.prototype.setJSON = function(nodeList) {
            var html = getHtmlByNodeList_1["default"](nodeList).children();
            var editor = this.editor;
            var $textElem = editor.$textElem;
            if (!html)
              return;
            $textElem.replaceChildAll(html);
          };
          Text2.prototype.getJSON = function() {
            var editor = this.editor;
            var $textElem = editor.$textElem;
            return getChildrenJSON_1["default"]($textElem);
          };
          Text2.prototype.text = function(val) {
            var editor = this.editor;
            var $textElem = editor.$textElem;
            if (val == null) {
              var text = $textElem.text();
              text = text.replace(/\u200b/gm, "");
              return text;
            }
            $textElem.text("<p>" + val + "</p>");
            editor.initSelection();
          };
          Text2.prototype.append = function(html) {
            var editor = this.editor;
            if ((0, _indexOf["default"])(html).call(html, "<") !== 0) {
              html = "<p>" + html + "</p>";
            }
            this.html(this.html() + html);
            editor.initSelection();
          };
          Text2.prototype._saveRange = function() {
            var editor = this.editor;
            var $textElem = editor.$textElem;
            var $document = dom_core_1["default"](document);
            function saveRange() {
              editor.selection.saveRange();
              editor.menus.changeActive();
            }
            $textElem.on("keyup", saveRange);
            function onceClickSaveRange() {
              saveRange();
              $textElem.off("click", onceClickSaveRange);
            }
            $textElem.on("click", onceClickSaveRange);
            function handleMouseUp() {
              saveRange();
              $document.off("mouseup", handleMouseUp);
            }
            function listenMouseLeave() {
              $document.on("mouseup", handleMouseUp);
              $textElem.off("mouseleave", listenMouseLeave);
            }
            $textElem.on("mousedown", function() {
              $textElem.on("mouseleave", listenMouseLeave);
            });
            $textElem.on("mouseup", function(e) {
              $textElem.off("mouseleave", listenMouseLeave);
              (0, _setTimeout2["default"])(function() {
                var selection = editor.selection;
                var range = selection.getRange();
                if (range === null)
                  return;
                saveRange();
              }, 0);
            });
          };
          Text2.prototype._bindEventHooks = function() {
            var editor = this.editor;
            var $textElem = editor.$textElem;
            var eventHooks = this.eventHooks;
            $textElem.on("click", function(e) {
              var clickEvents = eventHooks.clickEvents;
              (0, _forEach["default"])(clickEvents).call(clickEvents, function(fn) {
                return fn(e);
              });
            });
            $textElem.on("keyup", function(e) {
              if (e.keyCode !== 13)
                return;
              var enterUpEvents = eventHooks.enterUpEvents;
              (0, _forEach["default"])(enterUpEvents).call(enterUpEvents, function(fn) {
                return fn(e);
              });
            });
            $textElem.on("keyup", function(e) {
              var keyupEvents = eventHooks.keyupEvents;
              (0, _forEach["default"])(keyupEvents).call(keyupEvents, function(fn) {
                return fn(e);
              });
            });
            $textElem.on("keydown", function(e) {
              var keydownEvents = eventHooks.keydownEvents;
              (0, _forEach["default"])(keydownEvents).call(keydownEvents, function(fn) {
                return fn(e);
              });
            });
            $textElem.on("keyup", function(e) {
              if (e.keyCode !== 8 && e.keyCode !== 46)
                return;
              var deleteUpEvents = eventHooks.deleteUpEvents;
              (0, _forEach["default"])(deleteUpEvents).call(deleteUpEvents, function(fn) {
                return fn(e);
              });
            });
            $textElem.on("keydown", function(e) {
              if (e.keyCode !== 8 && e.keyCode !== 46)
                return;
              var deleteDownEvents = eventHooks.deleteDownEvents;
              (0, _forEach["default"])(deleteDownEvents).call(deleteDownEvents, function(fn) {
                return fn(e);
              });
            });
            $textElem.on("paste", function(e) {
              if (util_1.UA.isIE())
                return;
              e.preventDefault();
              var pasteEvents = eventHooks.pasteEvents;
              (0, _forEach["default"])(pasteEvents).call(pasteEvents, function(fn) {
                return fn(e);
              });
            });
            $textElem.on("keydown", function(e) {
              if ((editor.isFocus || editor.isCompatibleMode) && (e.ctrlKey || e.metaKey) && e.keyCode === 90) {
                e.preventDefault();
                if (e.shiftKey) {
                  editor.history.restore();
                } else {
                  editor.history.revoke();
                }
              }
            });
            $textElem.on("keyup", function(e) {
              if (e.keyCode !== 9)
                return;
              e.preventDefault();
              var tabUpEvents = eventHooks.tabUpEvents;
              (0, _forEach["default"])(tabUpEvents).call(tabUpEvents, function(fn) {
                return fn(e);
              });
            });
            $textElem.on("keydown", function(e) {
              if (e.keyCode !== 9)
                return;
              e.preventDefault();
              var tabDownEvents = eventHooks.tabDownEvents;
              (0, _forEach["default"])(tabDownEvents).call(tabDownEvents, function(fn) {
                return fn(e);
              });
            });
            $textElem.on("scroll", util_1.throttle(function(e) {
              var textScrollEvents = eventHooks.textScrollEvents;
              (0, _forEach["default"])(textScrollEvents).call(textScrollEvents, function(fn) {
                return fn(e);
              });
            }, 100));
            function preventDefault(e) {
              e.preventDefault();
            }
            dom_core_1["default"](document).on("dragleave", preventDefault).on("drop", preventDefault).on("dragenter", preventDefault).on("dragover", preventDefault);
            editor.beforeDestroy(function() {
              dom_core_1["default"](document).off("dragleave", preventDefault).off("drop", preventDefault).off("dragenter", preventDefault).off("dragover", preventDefault);
            });
            $textElem.on("drop", function(e) {
              e.preventDefault();
              var events = eventHooks.dropEvents;
              (0, _forEach["default"])(events).call(events, function(fn) {
                return fn(e);
              });
            });
            $textElem.on("click", function(e) {
              var $link = null;
              var target = e.target;
              var $target = dom_core_1["default"](target);
              if ($target.getNodeName() === "A") {
                $link = $target;
              } else {
                var $parent = $target.parentUntil("a");
                if ($parent != null) {
                  $link = $parent;
                }
              }
              if (!$link)
                return;
              var linkClickEvents = eventHooks.linkClickEvents;
              (0, _forEach["default"])(linkClickEvents).call(linkClickEvents, function(fn) {
                return fn($link);
              });
            });
            $textElem.on("click", function(e) {
              var $img = null;
              var target = e.target;
              var $target = dom_core_1["default"](target);
              if ($target.getNodeName() === "IMG" && !$target.elems[0].getAttribute("data-emoji")) {
                e.stopPropagation();
                $img = $target;
              }
              if (!$img)
                return;
              var imgClickEvents = eventHooks.imgClickEvents;
              (0, _forEach["default"])(imgClickEvents).call(imgClickEvents, function(fn) {
                return fn($img);
              });
            });
            $textElem.on("click", function(e) {
              var $code = null;
              var target = e.target;
              var $target = dom_core_1["default"](target);
              if ($target.getNodeName() === "PRE") {
                $code = $target;
              } else {
                var $parent = $target.parentUntil("pre");
                if ($parent !== null) {
                  $code = $parent;
                }
              }
              if (!$code)
                return;
              var codeClickEvents = eventHooks.codeClickEvents;
              (0, _forEach["default"])(codeClickEvents).call(codeClickEvents, function(fn) {
                return fn($code);
              });
            });
            $textElem.on("click", function(e) {
              var $splitLine = null;
              var target = e.target;
              var $target = dom_core_1["default"](target);
              if ($target.getNodeName() === "HR") {
                $splitLine = $target;
              }
              if (!$splitLine)
                return;
              editor.selection.createRangeByElem($splitLine);
              editor.selection.restoreSelection();
              var splitLineClickEvents = eventHooks.splitLineEvents;
              (0, _forEach["default"])(splitLineClickEvents).call(splitLineClickEvents, function(fn) {
                return fn($splitLine);
              });
            });
            editor.$toolbarElem.on("click", function(e) {
              var toolbarClickEvents = eventHooks.toolbarClickEvents;
              (0, _forEach["default"])(toolbarClickEvents).call(toolbarClickEvents, function(fn) {
                return fn(e);
              });
            });
            editor.$textContainerElem.on("mousedown", function(e) {
              var target = e.target;
              var $target = dom_core_1["default"](target);
              if ($target.hasClass("w-e-img-drag-rb")) {
                var imgDragBarMouseDownEvents = eventHooks.imgDragBarMouseDownEvents;
                (0, _forEach["default"])(imgDragBarMouseDownEvents).call(imgDragBarMouseDownEvents, function(fn) {
                  return fn();
                });
              }
            });
            $textElem.on("click", function(e) {
              var $dom = null;
              var target = e.target;
              $dom = dom_core_1["default"](target).parentUntilEditor("TABLE", editor, target);
              if (!$dom)
                return;
              var tableClickEvents = eventHooks.tableClickEvents;
              (0, _forEach["default"])(tableClickEvents).call(tableClickEvents, function(fn) {
                return fn($dom, e);
              });
            });
            $textElem.on("keydown", function(e) {
              if (e.keyCode !== 13)
                return;
              var enterDownEvents = eventHooks.enterDownEvents;
              (0, _forEach["default"])(enterDownEvents).call(enterDownEvents, function(fn) {
                return fn(e);
              });
            });
            $textElem.on("click", function(e) {
              var $video = null;
              var target = e.target;
              var $target = dom_core_1["default"](target);
              if ($target.getNodeName() === "VIDEO") {
                e.stopPropagation();
                $video = $target;
              }
              if (!$video)
                return;
              var videoClickEvents = eventHooks.videoClickEvents;
              (0, _forEach["default"])(videoClickEvents).call(videoClickEvents, function(fn) {
                return fn($video);
              });
            });
          };
          return Text2;
        }();
        exports2["default"] = Text;
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(284);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        var find = __webpack_require__(285);
        var ArrayPrototype = Array.prototype;
        module2.exports = function(it) {
          var own = it.find;
          return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.find ? find : own;
        };
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(286);
        var entryVirtual = __webpack_require__(15);
        module2.exports = entryVirtual("Array").find;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var $find = __webpack_require__(30).find;
        var addToUnscopables = __webpack_require__(82);
        var arrayMethodUsesToLength = __webpack_require__(22);
        var FIND = "find";
        var SKIPS_HOLES = true;
        var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);
        if (FIND in [])
          Array(1)[FIND](function() {
            SKIPS_HOLES = false;
          });
        $({ target: "Array", proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
          find: function find(callbackfn) {
            return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
        addToUnscopables(FIND);
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var enter_to_create_p_1 = tslib_1.__importDefault(__webpack_require__(288));
        var del_to_keep_p_1 = tslib_1.__importStar(__webpack_require__(289));
        var tab_to_space_1 = tslib_1.__importDefault(__webpack_require__(290));
        var paste_text_html_1 = tslib_1.__importDefault(__webpack_require__(291));
        var img_click_active_1 = tslib_1.__importDefault(__webpack_require__(298));
        function initTextHooks(text) {
          var editor = text.editor;
          var eventHooks = text.eventHooks;
          enter_to_create_p_1["default"](editor, eventHooks.enterUpEvents, eventHooks.enterDownEvents);
          del_to_keep_p_1["default"](editor, eventHooks.deleteUpEvents, eventHooks.deleteDownEvents);
          del_to_keep_p_1.cutToKeepP(editor, eventHooks.keyupEvents);
          tab_to_space_1["default"](editor, eventHooks.tabDownEvents);
          paste_text_html_1["default"](editor, eventHooks.pasteEvents);
          img_click_active_1["default"](editor, eventHooks.imgClickEvents);
        }
        exports2["default"] = initTextHooks;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _indexOf = _interopRequireDefault(__webpack_require__(27));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var const_1 = __webpack_require__(7);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        function enterToCreateP(editor, enterUpEvents, enterDownEvents) {
          function insertEmptyP($selectionElem) {
            var _context;
            var $p = dom_core_1["default"](const_1.EMPTY_P);
            $p.insertBefore($selectionElem);
            if ((0, _indexOf["default"])(_context = $selectionElem.html()).call(_context, "<img") >= 0) {
              $p.remove();
              return;
            }
            editor.selection.createRangeByElem($p, true, true);
            editor.selection.restoreSelection();
            $selectionElem.remove();
          }
          function fn() {
            var $textElem = editor.$textElem;
            var $selectionElem = editor.selection.getSelectionContainerElem();
            var $parentElem = $selectionElem.parent();
            if ($parentElem.html() === "<code><br></code>") {
              insertEmptyP($parentElem);
              return;
            }
            if ($selectionElem.getNodeName() === "FONT" && $selectionElem.text() === "" && $selectionElem.attr("face") === "monospace") {
              insertEmptyP($parentElem);
              return;
            }
            if (!$parentElem.equal($textElem)) {
              return;
            }
            var nodeName = $selectionElem.getNodeName();
            if (nodeName === "P" && $selectionElem.attr("data-we-empty-p") === null) {
              return;
            }
            if ($selectionElem.text()) {
              return;
            }
            insertEmptyP($selectionElem);
          }
          enterUpEvents.push(fn);
          function createPWhenEnterText(e) {
            var _a;
            editor.selection.saveRange((_a = getSelection()) === null || _a === void 0 ? void 0 : _a.getRangeAt(0));
            var $selectElem = editor.selection.getSelectionContainerElem();
            if ($selectElem.id === editor.textElemId) {
              e.preventDefault();
              editor.cmd["do"]("insertHTML", "<p><br></p>");
            }
          }
          enterDownEvents.push(createPWhenEnterText);
        }
        exports2["default"] = enterToCreateP;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _trim = _interopRequireDefault(__webpack_require__(17));
        var _includes = _interopRequireDefault(__webpack_require__(44));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.cutToKeepP = void 0;
        var tslib_1 = __webpack_require__(2);
        var const_1 = __webpack_require__(7);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        function deleteToKeepP(editor, deleteUpEvents, deleteDownEvents) {
          function upFn() {
            var $textElem = editor.$textElem;
            var html = editor.$textElem.html();
            var text = editor.$textElem.text();
            var txtHtml = (0, _trim["default"])(html).call(html);
            var emptyTags = ["<p><br></p>", "<br>", '<p data-we-empty-p=""></p>', const_1.EMPTY_P];
            if (/^\s*$/.test(text) && (!txtHtml || (0, _includes["default"])(emptyTags).call(emptyTags, txtHtml))) {
              $textElem.html(const_1.EMPTY_P);
              var containerElem = $textElem.getNode();
              editor.selection.createRangeByElems(containerElem.childNodes[0], containerElem.childNodes[0]);
              var $selectionElem = editor.selection.getSelectionContainerElem();
              editor.selection.restoreSelection();
              editor.selection.moveCursor($selectionElem.getNode(), 0);
            }
          }
          deleteUpEvents.push(upFn);
          function downFn(e) {
            var _context;
            var $textElem = editor.$textElem;
            var txtHtml = (0, _trim["default"])(_context = $textElem.html().toLowerCase()).call(_context);
            if (txtHtml === const_1.EMPTY_P) {
              e.preventDefault();
              return;
            }
          }
          deleteDownEvents.push(downFn);
        }
        function cutToKeepP(editor, cutEvents) {
          function upFn(e) {
            var _context2;
            if (e.keyCode !== 88) {
              return;
            }
            var $textElem = editor.$textElem;
            var txtHtml = (0, _trim["default"])(_context2 = $textElem.html().toLowerCase()).call(_context2);
            if (!txtHtml || txtHtml === "<br>") {
              var $p = dom_core_1["default"](const_1.EMPTY_P);
              $textElem.html(" ");
              $textElem.append($p);
              editor.selection.createRangeByElem($p, false, true);
              editor.selection.restoreSelection();
              editor.selection.moveCursor($p.getNode(), 0);
            }
          }
          cutEvents.push(upFn);
        }
        exports2.cutToKeepP = cutToKeepP;
        exports2["default"] = deleteToKeepP;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        function tabHandler(editor, tabDownEvents) {
          function fn() {
            if (!editor.cmd.queryCommandSupported("insertHTML")) {
              return;
            }
            var $selectionElem = editor.selection.getSelectionContainerElem();
            if (!$selectionElem) {
              return;
            }
            var $parentElem = $selectionElem.parent();
            var selectionNodeName = $selectionElem.getNodeName();
            var parentNodeName = $parentElem.getNodeName();
            if (selectionNodeName == "CODE" || parentNodeName === "CODE" || parentNodeName === "PRE" || /hljs/.test(parentNodeName)) {
              editor.cmd["do"]("insertHTML", editor.config.languageTab);
            } else {
              editor.cmd["do"]("insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
            }
          }
          tabDownEvents.push(fn);
        }
        exports2["default"] = tabHandler;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _trim = _interopRequireDefault(__webpack_require__(17));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var paste_event_1 = __webpack_require__(130);
        var util_1 = __webpack_require__(6);
        var const_1 = __webpack_require__(7);
        function formatHtml(htmlText) {
          var _context;
          var paste = (0, _trim["default"])(_context = htmlText.replace(/<div>/gim, "<p>").replace(/<\/div>/gim, "</p>")).call(_context);
          var tempContainer = document.createElement("div");
          tempContainer.innerHTML = paste;
          return tempContainer.innerHTML.replace(/<p><\/p>/gim, "");
        }
        function formatCode(val) {
          var pasteText = val.replace(/<br>|<br\/>/gm, "\n").replace(/<[^>]+>/gm, "");
          return pasteText;
        }
        function isParagraphHtml(html) {
          var _a;
          if (html === "")
            return false;
          var container = document.createElement("div");
          container.innerHTML = html;
          return ((_a = container.firstChild) === null || _a === void 0 ? void 0 : _a.nodeName) === "P";
        }
        function isEmptyParagraph(topElem) {
          if (!(topElem === null || topElem === void 0 ? void 0 : topElem.length))
            return false;
          var dom = topElem.elems[0];
          return dom.nodeName === "P" && dom.innerHTML === "<br>";
        }
        function pasteTextHtml(editor, pasteEvents) {
          function fn(e) {
            var config = editor.config;
            var pasteFilterStyle = config.pasteFilterStyle;
            var pasteIgnoreImg = config.pasteIgnoreImg;
            var pasteTextHandle = config.pasteTextHandle;
            var pasteHtml = paste_event_1.getPasteHtml(e, pasteFilterStyle, pasteIgnoreImg);
            var pasteText = paste_event_1.getPasteText(e);
            pasteText = pasteText.replace(/\n/gm, "<br>");
            var $selectionElem = editor.selection.getSelectionContainerElem();
            if (!$selectionElem) {
              return;
            }
            var nodeName = $selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.getNodeName();
            var $topElem = $selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.getNodeTop(editor);
            var topNodeName = "";
            if ($topElem.elems[0]) {
              topNodeName = $topElem === null || $topElem === void 0 ? void 0 : $topElem.getNodeName();
            }
            if (nodeName === "CODE" || topNodeName === "PRE") {
              if (pasteTextHandle && util_1.isFunction(pasteTextHandle)) {
                pasteText = "" + (pasteTextHandle(pasteText) || "");
              }
              editor.cmd["do"]("insertHTML", formatCode(pasteText));
              return;
            }
            if (const_1.urlRegex.test(pasteText) && pasteFilterStyle) {
              if (pasteTextHandle && util_1.isFunction(pasteTextHandle)) {
                pasteText = "" + (pasteTextHandle(pasteText) || "");
              }
              var insertUrl = const_1.urlRegex.exec(pasteText)[0];
              var otherText = pasteText.replace(const_1.urlRegex, "");
              return editor.cmd["do"]("insertHTML", '<a href="' + insertUrl + '" target="_blank">' + insertUrl + "</a>" + otherText);
            }
            if (!pasteHtml) {
              return;
            }
            try {
              if (pasteTextHandle && util_1.isFunction(pasteTextHandle)) {
                pasteHtml = "" + (pasteTextHandle(pasteHtml) || "");
              }
              var isCssStyle = /[\.\#\@]?\w+[ ]+\{[^}]*\}/.test(pasteHtml);
              if (isCssStyle && pasteFilterStyle) {
                editor.cmd["do"]("insertHTML", "" + formatHtml(pasteText));
              } else {
                var html = formatHtml(pasteHtml);
                if (isParagraphHtml(html)) {
                  var $textEl = editor.$textElem;
                  editor.cmd["do"]("insertHTML", html);
                  if ($textEl.equal($selectionElem)) {
                    editor.selection.createEmptyRange();
                    return;
                  }
                  if (isEmptyParagraph($topElem)) {
                    $topElem.remove();
                  }
                } else {
                  editor.cmd["do"]("insertHTML", html);
                }
              }
            } catch (ex) {
              if (pasteTextHandle && util_1.isFunction(pasteTextHandle)) {
                pasteText = "" + (pasteTextHandle(pasteText) || "");
              }
              editor.cmd["do"]("insertHTML", "" + formatHtml(pasteText));
            }
          }
          pasteEvents.push(fn);
        }
        exports2["default"] = pasteTextHtml;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _trim = _interopRequireDefault(__webpack_require__(17));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        var _includes = _interopRequireDefault(__webpack_require__(44));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var tags_1 = __webpack_require__(293);
        var simplehtmlparser_js_1 = tslib_1.__importDefault(__webpack_require__(297));
        function filterEmptySpan(html) {
          var regForReplace = /<span>.*?<\/span>/gi;
          var regForMatch = /<span>(.*?)<\/span>/;
          return html.replace(regForReplace, function(s) {
            var result = s.match(regForMatch);
            if (result == null)
              return "";
            return result[1];
          });
        }
        function isIgnoreTag(tag, ignoreImg) {
          var _context;
          tag = (0, _trim["default"])(_context = tag.toLowerCase()).call(_context);
          if (tags_1.IGNORE_TAGS.has(tag)) {
            return true;
          }
          if (ignoreImg) {
            if (tag === "img") {
              return true;
            }
          }
          return false;
        }
        function genStartHtml(tag, attrs) {
          var result = "";
          result = "<" + tag;
          var attrStrArr = [];
          (0, _forEach["default"])(attrs).call(attrs, function(attr) {
            attrStrArr.push(attr.name + '="' + attr.value + '"');
          });
          if (attrStrArr.length > 0) {
            result = result + " " + attrStrArr.join(" ");
          }
          var isEmpty = tags_1.EMPTY_TAGS.has(tag);
          result = result + (isEmpty ? "/" : "") + ">";
          return result;
        }
        function genEndHtml(tag) {
          return "</" + tag + ">";
        }
        function parseHtml(html, filterStyle, ignoreImg) {
          if (filterStyle === void 0) {
            filterStyle = true;
          }
          if (ignoreImg === void 0) {
            ignoreImg = false;
          }
          var resultArr = [];
          var CUR_TAG = "";
          function markTagStart(tag) {
            tag = (0, _trim["default"])(tag).call(tag);
            if (!tag)
              return;
            if (tags_1.EMPTY_TAGS.has(tag))
              return;
            CUR_TAG = tag;
          }
          function markTagEnd() {
            CUR_TAG = "";
          }
          var htmlParser = new simplehtmlparser_js_1["default"]();
          htmlParser.parse(html, {
            startElement: function startElement(tag, attrs) {
              markTagStart(tag);
              if (isIgnoreTag(tag, ignoreImg)) {
                return;
              }
              var necessaryAttrKeys = tags_1.NECESSARY_ATTRS.get(tag) || [];
              var attrsForTag = [];
              (0, _forEach["default"])(attrs).call(attrs, function(attr) {
                var name = attr.name;
                if (name === "style") {
                  if (!filterStyle) {
                    attrsForTag.push(attr);
                  }
                  return;
                }
                if ((0, _includes["default"])(necessaryAttrKeys).call(necessaryAttrKeys, name) === false) {
                  return;
                }
                attrsForTag.push(attr);
              });
              var html2 = genStartHtml(tag, attrsForTag);
              resultArr.push(html2);
            },
            characters: function characters(str) {
              if (!str) {
                return;
              }
              if (isIgnoreTag(CUR_TAG, ignoreImg))
                return;
              resultArr.push(str);
            },
            endElement: function endElement(tag) {
              if (isIgnoreTag(tag, ignoreImg)) {
                return;
              }
              var html2 = genEndHtml(tag);
              resultArr.push(html2);
              markTagEnd();
            },
            comment: function comment(str) {
              markTagStart(str);
            }
          });
          var result = resultArr.join("");
          result = filterEmptySpan(result);
          return result;
        }
        exports2["default"] = parseHtml;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _set = _interopRequireDefault(__webpack_require__(131));
        var _map = _interopRequireDefault(__webpack_require__(120));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.TOP_LEVEL_TAGS = exports2.EMPTY_TAGS = exports2.NECESSARY_ATTRS = exports2.IGNORE_TAGS = void 0;
        exports2.IGNORE_TAGS = new _set["default"](["doctype", "!doctype", "html", "head", "meta", "body", "script", "style", "link", "frame", "iframe", "title", "svg", "center", "o:p"]);
        exports2.NECESSARY_ATTRS = new _map["default"]([["img", ["src", "alt"]], ["a", ["href", "target"]], ["td", ["colspan", "rowspan"]], ["th", ["colspan", "rowspan"]]]);
        exports2.EMPTY_TAGS = new _set["default"](["area", "base", "basefont", "br", "col", "hr", "img", "input", "isindex", "embed"]);
        exports2.TOP_LEVEL_TAGS = new _set["default"](["h1", "h2", "h3", "h4", "h5", "p", "ul", "ol", "table", "blockquote", "pre", "hr", "form"]);
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(295);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(296);
        __webpack_require__(61);
        __webpack_require__(50);
        __webpack_require__(54);
        var path = __webpack_require__(9);
        module2.exports = path.Set;
      },
      function(module2, exports2, __webpack_require__) {
        var collection = __webpack_require__(121);
        var collectionStrong = __webpack_require__(123);
        module2.exports = collection("Set", function(init) {
          return function Set() {
            return init(this, arguments.length ? arguments[0] : void 0);
          };
        }, collectionStrong);
      },
      function(module2, exports2) {
        function SimpleHtmlParser() {
        }
        SimpleHtmlParser.prototype = {
          handler: null,
          startTagRe: /^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,
          endTagRe: /^<\/([^>\s]+)[^>]*>/m,
          attrRe: /([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,
          parse: function(s, oHandler) {
            if (oHandler)
              this.contentHandler = oHandler;
            var lm, rc, index2;
            var treatAsChars = false;
            var oThis = this;
            while (s.length > 0) {
              if (s.substring(0, 4) == "<!--") {
                index2 = s.indexOf("-->");
                if (index2 != -1) {
                  this.contentHandler.comment(s.substring(4, index2));
                  s = s.substring(index2 + 3);
                  treatAsChars = false;
                } else {
                  treatAsChars = true;
                }
              } else if (s.substring(0, 2) == "</") {
                if (this.endTagRe.test(s)) {
                  lm = RegExp.lastMatch;
                  rc = RegExp.rightContext;
                  lm.replace(this.endTagRe, function() {
                    return oThis.parseEndTag.apply(oThis, arguments);
                  });
                  s = rc;
                  treatAsChars = false;
                } else {
                  treatAsChars = true;
                }
              } else if (s.charAt(0) == "<") {
                if (this.startTagRe.test(s)) {
                  lm = RegExp.lastMatch;
                  rc = RegExp.rightContext;
                  lm.replace(this.startTagRe, function() {
                    return oThis.parseStartTag.apply(oThis, arguments);
                  });
                  s = rc;
                  treatAsChars = false;
                } else {
                  treatAsChars = true;
                }
              }
              if (treatAsChars) {
                index2 = s.indexOf("<");
                if (index2 == -1) {
                  this.contentHandler.characters(s);
                  s = "";
                } else {
                  this.contentHandler.characters(s.substring(0, index2));
                  s = s.substring(index2);
                }
              }
              treatAsChars = true;
            }
          },
          parseStartTag: function(sTag, sTagName, sRest) {
            var attrs = this.parseAttributes(sTagName, sRest);
            this.contentHandler.startElement(sTagName, attrs);
          },
          parseEndTag: function(sTag, sTagName) {
            this.contentHandler.endElement(sTagName);
          },
          parseAttributes: function(sTagName, s) {
            var oThis = this;
            var attrs = [];
            s.replace(this.attrRe, function(a0, a1, a2, a3, a4, a5, a6, a7) {
              attrs.push(oThis.parseAttribute(sTagName, a0, a1, a2, a3, a4, a5, a6, a7));
            });
            return attrs;
          },
          parseAttribute: function(sTagName, sAttribute, sName) {
            var value = "";
            if (arguments[7])
              value = arguments[8];
            else if (arguments[5])
              value = arguments[6];
            else if (arguments[3])
              value = arguments[4];
            var empty = !value && !arguments[3];
            return { name: sName, value: empty ? null : value };
          }
        };
        module2.exports = SimpleHtmlParser;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        function imgClickActive(editor, imgClickEvents) {
          function clickFn($img) {
            editor.selection.createRangeByElem($img);
            editor.selection.restoreSelection();
          }
          imgClickEvents.push(clickFn);
        }
        exports2["default"] = imgClickActive;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var util_1 = __webpack_require__(6);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        function getChildrenJSON($elem) {
          var result = [];
          var $children = $elem.childNodes() || [];
          (0, _forEach["default"])($children).call($children, function(curElem) {
            var elemResult;
            var nodeType = curElem.nodeType;
            if (nodeType === 3) {
              elemResult = curElem.textContent || "";
              elemResult = util_1.replaceHtmlSymbol(elemResult);
            }
            if (nodeType === 1) {
              elemResult = {};
              elemResult = elemResult;
              elemResult.tag = curElem.nodeName.toLowerCase();
              var attrData = [];
              var attrList = curElem.attributes;
              var attrListLength = attrList.length || 0;
              for (var i = 0; i < attrListLength; i++) {
                var attr = attrList[i];
                attrData.push({
                  name: attr.name,
                  value: attr.value
                });
              }
              elemResult.attrs = attrData;
              elemResult.children = getChildrenJSON(dom_core_1["default"](curElem));
            }
            if (elemResult) {
              result.push(elemResult);
            }
          });
          return result;
        }
        exports2["default"] = getChildrenJSON;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _typeof2 = _interopRequireDefault(__webpack_require__(92));
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        function getHtmlByNodeList(nodeList, parent) {
          if (parent === void 0) {
            parent = document.createElement("div");
          }
          var root = parent;
          (0, _forEach["default"])(nodeList).call(nodeList, function(item) {
            var elem;
            if (typeof item === "string") {
              elem = document.createTextNode(item);
            }
            if ((0, _typeof2["default"])(item) === "object") {
              var _context;
              elem = document.createElement(item.tag);
              (0, _forEach["default"])(_context = item.attrs).call(_context, function(attr) {
                dom_core_1["default"](elem).attr(attr.name, attr.value);
              });
              if (item.children && item.children.length > 0) {
                getHtmlByNodeList(item.children, elem.getRootNode());
              }
            }
            elem && root.appendChild(elem);
          });
          return dom_core_1["default"](root);
        }
        exports2["default"] = getHtmlByNodeList;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _isArray = _interopRequireDefault(__webpack_require__(89));
        var _filter = _interopRequireDefault(__webpack_require__(70));
        var _includes = _interopRequireDefault(__webpack_require__(44));
        var _keys = _interopRequireDefault(__webpack_require__(302));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        var _entries = _interopRequireDefault(__webpack_require__(94));
        var _some = _interopRequireDefault(__webpack_require__(132));
        var _setTimeout2 = _interopRequireDefault(__webpack_require__(46));
        var _bind = _interopRequireDefault(__webpack_require__(57));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var index_1 = tslib_1.__importDefault(__webpack_require__(87));
        var menu_list_1 = tslib_1.__importDefault(__webpack_require__(314));
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var Menus = function() {
          function Menus2(editor) {
            this.editor = editor;
            this.menuList = [];
            this.constructorList = menu_list_1["default"];
          }
          Menus2.prototype.extend = function(key, Menu) {
            if (!Menu || typeof Menu !== "function")
              return;
            this.constructorList[key] = Menu;
          };
          Menus2.prototype.init = function() {
            var _context, _context2;
            var _this = this;
            var config = this.editor.config;
            var excludeMenus = config.excludeMenus;
            if ((0, _isArray["default"])(excludeMenus) === false)
              excludeMenus = [];
            config.menus = (0, _filter["default"])(_context = config.menus).call(_context, function(key) {
              return (0, _includes["default"])(excludeMenus).call(excludeMenus, key) === false;
            });
            var CustomMenuKeysList = (0, _keys["default"])(index_1["default"].globalCustomMenuConstructorList);
            CustomMenuKeysList = (0, _filter["default"])(CustomMenuKeysList).call(CustomMenuKeysList, function(key) {
              return (0, _includes["default"])(excludeMenus).call(excludeMenus, key);
            });
            (0, _forEach["default"])(CustomMenuKeysList).call(CustomMenuKeysList, function(key) {
              delete index_1["default"].globalCustomMenuConstructorList[key];
            });
            (0, _forEach["default"])(_context2 = config.menus).call(_context2, function(menuKey2) {
              var MenuConstructor2 = _this.constructorList[menuKey2];
              _this._initMenuList(menuKey2, MenuConstructor2);
            });
            for (var _i = 0, _a = (0, _entries["default"])(index_1["default"].globalCustomMenuConstructorList); _i < _a.length; _i++) {
              var _b = _a[_i], menuKey = _b[0], menuFun = _b[1];
              var MenuConstructor = menuFun;
              this._initMenuList(menuKey, MenuConstructor);
            }
            this._addToToolbar();
            if (config.showMenuTooltips) {
              this._bindMenuTooltips();
            }
          };
          Menus2.prototype._initMenuList = function(menuKey, MenuConstructor) {
            var _context3;
            if (MenuConstructor == null || typeof MenuConstructor !== "function") {
              return;
            }
            if ((0, _some["default"])(_context3 = this.menuList).call(_context3, function(menu) {
              return menu.key === menuKey;
            })) {
              console.warn("\u83DC\u5355\u540D\u79F0\u91CD\u590D:" + menuKey);
            } else {
              var m = new MenuConstructor(this.editor);
              m.key = menuKey;
              this.menuList.push(m);
            }
          };
          Menus2.prototype._bindMenuTooltips = function() {
            var editor = this.editor;
            var $toolbarElem = editor.$toolbarElem;
            var config = editor.config;
            var menuTooltipPosition = config.menuTooltipPosition;
            var $tooltipEl = dom_core_1["default"]('<div class="w-e-menu-tooltip w-e-menu-tooltip-' + menuTooltipPosition + '">\n            <div class="w-e-menu-tooltip-item-wrapper">\n              <div></div>\n            </div>\n          </div>');
            $tooltipEl.css("visibility", "hidden");
            $toolbarElem.append($tooltipEl);
            $tooltipEl.css("z-index", editor.zIndex.get("tooltip"));
            var showTimeoutId = 0;
            function clearShowTimeoutId() {
              if (showTimeoutId) {
                clearTimeout(showTimeoutId);
              }
            }
            function hide() {
              clearShowTimeoutId();
              $tooltipEl.css("visibility", "hidden");
            }
            $toolbarElem.on("mouseover", function(e) {
              var target = e.target;
              var $target = dom_core_1["default"](target);
              var title;
              var $menuEl;
              if ($target.isContain($toolbarElem)) {
                hide();
                return;
              }
              if ($target.parentUntil(".w-e-droplist") != null) {
                hide();
              } else {
                if ($target.attr("data-title")) {
                  title = $target.attr("data-title");
                  $menuEl = $target;
                } else {
                  var $parent = $target.parentUntil(".w-e-menu");
                  if ($parent != null) {
                    title = $parent.attr("data-title");
                    $menuEl = $parent;
                  }
                }
              }
              if (title && $menuEl) {
                clearShowTimeoutId();
                var targetOffset = $menuEl.getOffsetData();
                $tooltipEl.text(editor.i18next.t("menus.title." + title));
                var tooltipOffset = $tooltipEl.getOffsetData();
                var left = targetOffset.left + targetOffset.width / 2 - tooltipOffset.width / 2;
                $tooltipEl.css("left", left + "px");
                if (menuTooltipPosition === "up") {
                  $tooltipEl.css("top", targetOffset.top - tooltipOffset.height - 8 + "px");
                } else if (menuTooltipPosition === "down") {
                  $tooltipEl.css("top", targetOffset.top + targetOffset.height + 8 + "px");
                }
                showTimeoutId = (0, _setTimeout2["default"])(function() {
                  $tooltipEl.css("visibility", "visible");
                }, 200);
              } else {
                hide();
              }
            }).on("mouseleave", function() {
              hide();
            });
          };
          Menus2.prototype._addToToolbar = function() {
            var _context4;
            var editor = this.editor;
            var $toolbarElem = editor.$toolbarElem;
            (0, _forEach["default"])(_context4 = this.menuList).call(_context4, function(menu) {
              var $elem = menu.$elem;
              if ($elem) {
                $toolbarElem.append($elem);
              }
            });
          };
          Menus2.prototype.menuFind = function(key) {
            var menuList = this.menuList;
            for (var i = 0, l = menuList.length; i < l; i++) {
              if (menuList[i].key === key)
                return menuList[i];
            }
            return menuList[0];
          };
          Menus2.prototype.changeActive = function() {
            var _context5;
            (0, _forEach["default"])(_context5 = this.menuList).call(_context5, function(menu) {
              var _context6;
              (0, _setTimeout2["default"])((0, _bind["default"])(_context6 = menu.tryChangeActive).call(_context6, menu), 100);
            });
          };
          return Menus2;
        }();
        exports2["default"] = Menus;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(303);
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(304);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(305);
        var path = __webpack_require__(9);
        module2.exports = path.Object.keys;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var toObject = __webpack_require__(29);
        var nativeKeys = __webpack_require__(52);
        var fails = __webpack_require__(11);
        var FAILS_ON_PRIMITIVES = fails(function() {
          nativeKeys(1);
        });
        $({ target: "Object", stat: true, forced: FAILS_ON_PRIMITIVES }, {
          keys: function keys(it) {
            return nativeKeys(toObject(it));
          }
        });
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(307);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(308);
        var path = __webpack_require__(9);
        module2.exports = path.Object.entries;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var $entries = __webpack_require__(309).entries;
        $({ target: "Object", stat: true }, {
          entries: function entries(O) {
            return $entries(O);
          }
        });
      },
      function(module2, exports2, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(14);
        var objectKeys = __webpack_require__(52);
        var toIndexedObject = __webpack_require__(28);
        var propertyIsEnumerable = __webpack_require__(59).f;
        var createMethod = function(TO_ENTRIES) {
          return function(it) {
            var O = toIndexedObject(it);
            var keys = objectKeys(O);
            var length = keys.length;
            var i = 0;
            var result = [];
            var key;
            while (length > i) {
              key = keys[i++];
              if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
                result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
              }
            }
            return result;
          };
        };
        module2.exports = {
          entries: createMethod(true),
          values: createMethod(false)
        };
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(311);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        var some = __webpack_require__(312);
        var ArrayPrototype = Array.prototype;
        module2.exports = function(it) {
          var own = it.some;
          return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.some ? some : own;
        };
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(313);
        var entryVirtual = __webpack_require__(15);
        module2.exports = entryVirtual("Array").some;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var $some = __webpack_require__(30).some;
        var arrayMethodIsStrict = __webpack_require__(67);
        var arrayMethodUsesToLength = __webpack_require__(22);
        var STRICT_METHOD = arrayMethodIsStrict("some");
        var USES_TO_LENGTH = arrayMethodUsesToLength("some");
        $({ target: "Array", proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
          some: function some(callbackfn) {
            return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var index_1 = tslib_1.__importDefault(__webpack_require__(315));
        var index_2 = tslib_1.__importDefault(__webpack_require__(316));
        var index_3 = tslib_1.__importDefault(__webpack_require__(321));
        var index_4 = tslib_1.__importDefault(__webpack_require__(326));
        var index_5 = tslib_1.__importDefault(__webpack_require__(327));
        var index_6 = tslib_1.__importDefault(__webpack_require__(328));
        var index_7 = tslib_1.__importDefault(__webpack_require__(329));
        var font_size_1 = tslib_1.__importDefault(__webpack_require__(331));
        var index_8 = tslib_1.__importDefault(__webpack_require__(333));
        var index_9 = tslib_1.__importDefault(__webpack_require__(334));
        var index_10 = tslib_1.__importDefault(__webpack_require__(337));
        var index_11 = tslib_1.__importDefault(__webpack_require__(338));
        var index_12 = tslib_1.__importDefault(__webpack_require__(339));
        var index_13 = tslib_1.__importDefault(__webpack_require__(350));
        var index_14 = tslib_1.__importDefault(__webpack_require__(365));
        var index_15 = tslib_1.__importDefault(__webpack_require__(369));
        var index_16 = tslib_1.__importDefault(__webpack_require__(137));
        var index_17 = tslib_1.__importDefault(__webpack_require__(378));
        var index_18 = tslib_1.__importDefault(__webpack_require__(380));
        var index_19 = tslib_1.__importDefault(__webpack_require__(381));
        var index_20 = tslib_1.__importDefault(__webpack_require__(382));
        var code_1 = tslib_1.__importDefault(__webpack_require__(401));
        var index_21 = tslib_1.__importDefault(__webpack_require__(406));
        var todo_1 = tslib_1.__importDefault(__webpack_require__(409));
        exports2["default"] = {
          bold: index_1["default"],
          head: index_2["default"],
          italic: index_4["default"],
          link: index_3["default"],
          underline: index_5["default"],
          strikeThrough: index_6["default"],
          fontName: index_7["default"],
          fontSize: font_size_1["default"],
          justify: index_8["default"],
          quote: index_9["default"],
          backColor: index_10["default"],
          foreColor: index_11["default"],
          video: index_12["default"],
          image: index_13["default"],
          indent: index_14["default"],
          emoticon: index_15["default"],
          list: index_16["default"],
          lineHeight: index_17["default"],
          undo: index_18["default"],
          redo: index_19["default"],
          table: index_20["default"],
          code: code_1["default"],
          splitLine: index_21["default"],
          todo: todo_1["default"]
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var BtnMenu_1 = tslib_1.__importDefault(__webpack_require__(23));
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var Bold = function(_super) {
          tslib_1.__extends(Bold2, _super);
          function Bold2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u52A0\u7C97">\n                <i class="w-e-icon-bold"></i>\n            </div>');
            _this = _super.call(this, $elem, editor) || this;
            return _this;
          }
          Bold2.prototype.clickHandler = function() {
            var editor = this.editor;
            var isSelectEmpty = editor.selection.isSelectionEmpty();
            if (isSelectEmpty) {
              editor.selection.createEmptyRange();
            }
            editor.cmd["do"]("bold");
            if (isSelectEmpty) {
              editor.selection.collapseRange();
              editor.selection.restoreSelection();
            }
          };
          Bold2.prototype.tryChangeActive = function() {
            var editor = this.editor;
            if (editor.cmd.queryCommandState("bold")) {
              this.active();
            } else {
              this.unActive();
            }
          };
          return Bold2;
        }(BtnMenu_1["default"]);
        exports2["default"] = Bold;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _indexOf = _interopRequireDefault(__webpack_require__(27));
        var _find = _interopRequireDefault(__webpack_require__(31));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        var _stringify = _interopRequireDefault(__webpack_require__(317));
        var _includes = _interopRequireDefault(__webpack_require__(44));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var DropListMenu_1 = tslib_1.__importDefault(__webpack_require__(24));
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var util_1 = __webpack_require__(6);
        var const_1 = __webpack_require__(7);
        var Head = function(_super) {
          tslib_1.__extends(Head2, _super);
          function Head2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u6807\u9898"><i class="w-e-icon-header"></i></div>');
            var dropListConf = {
              width: 100,
              title: "\u8BBE\u7F6E\u6807\u9898",
              type: "list",
              list: [{
                $elem: dom_core_1["default"]("<h1>H1</h1>"),
                value: "<h1>"
              }, {
                $elem: dom_core_1["default"]("<h2>H2</h2>"),
                value: "<h2>"
              }, {
                $elem: dom_core_1["default"]("<h3>H3</h3>"),
                value: "<h3>"
              }, {
                $elem: dom_core_1["default"]("<h4>H4</h4>"),
                value: "<h4>"
              }, {
                $elem: dom_core_1["default"]("<h5>H5</h5>"),
                value: "<h5>"
              }, {
                $elem: dom_core_1["default"]("<p>" + editor.i18next.t("menus.dropListMenu.head.\u6B63\u6587") + "</p>"),
                value: "<p>"
              }],
              clickHandler: function clickHandler(value) {
                _this.command(value);
              }
            };
            _this = _super.call(this, $elem, editor, dropListConf) || this;
            var onCatalogChange = editor.config.onCatalogChange;
            if (onCatalogChange) {
              _this.oldCatalogs = [];
              _this.addListenerCatalog();
              _this.getCatalogs();
            }
            return _this;
          }
          Head2.prototype.command = function(value) {
            var editor = this.editor;
            var $selectionElem = editor.selection.getSelectionContainerElem();
            if ($selectionElem && editor.$textElem.equal($selectionElem)) {
              this.setMultilineHead(value);
            } else {
              var _context;
              if ((0, _indexOf["default"])(_context = ["OL", "UL", "LI", "TABLE", "TH", "TR", "CODE", "HR"]).call(_context, dom_core_1["default"]($selectionElem).getNodeName()) > -1) {
                return;
              }
              editor.cmd["do"]("formatBlock", value);
            }
            value !== "<p>" && this.addUidForSelectionElem();
          };
          Head2.prototype.addUidForSelectionElem = function() {
            var editor = this.editor;
            var tag = editor.selection.getSelectionContainerElem();
            var id = util_1.getRandomCode();
            dom_core_1["default"](tag).attr("id", id);
          };
          Head2.prototype.addListenerCatalog = function() {
            var _this = this;
            var editor = this.editor;
            editor.txt.eventHooks.changeEvents.push(function() {
              _this.getCatalogs();
            });
          };
          Head2.prototype.getCatalogs = function() {
            var editor = this.editor;
            var $textElem = this.editor.$textElem;
            var onCatalogChange = editor.config.onCatalogChange;
            var elems = (0, _find["default"])($textElem).call($textElem, "h1,h2,h3,h4,h5");
            var catalogs = [];
            (0, _forEach["default"])(elems).call(elems, function(elem, index2) {
              var $elem = dom_core_1["default"](elem);
              var id = $elem.attr("id");
              var tag = $elem.getNodeName();
              var text = $elem.text();
              if (!id) {
                id = util_1.getRandomCode();
                $elem.attr("id", id);
              }
              if (!text)
                return;
              catalogs.push({
                tag,
                id,
                text
              });
            });
            if ((0, _stringify["default"])(this.oldCatalogs) !== (0, _stringify["default"])(catalogs)) {
              this.oldCatalogs = catalogs;
              onCatalogChange && onCatalogChange(catalogs);
            }
          };
          Head2.prototype.setMultilineHead = function(value) {
            var _this = this;
            var _a, _b;
            var editor = this.editor;
            var $selection = editor.selection;
            var containerElem = (_a = $selection.getSelectionContainerElem()) === null || _a === void 0 ? void 0 : _a.elems[0];
            var _WHITE_LIST = ["IMG", "VIDEO", "TABLE", "TH", "TR", "UL", "OL", "PRE", "HR", "BLOCKQUOTE"];
            var startElem = dom_core_1["default"]($selection.getSelectionStartElem());
            var endElem = dom_core_1["default"]($selection.getSelectionEndElem());
            if (endElem.elems[0].outerHTML === dom_core_1["default"](const_1.EMPTY_P).elems[0].outerHTML && !endElem.elems[0].nextSibling) {
              endElem = endElem.prev();
            }
            var cacheDomList = [];
            cacheDomList.push(startElem.getNodeTop(editor));
            var indexList = [];
            var childList = (_b = $selection.getRange()) === null || _b === void 0 ? void 0 : _b.commonAncestorContainer.childNodes;
            childList === null || childList === void 0 ? void 0 : (0, _forEach["default"])(childList).call(childList, function(item, index2) {
              if (item === cacheDomList[0].getNode()) {
                indexList.push(index2);
              }
              if (item === endElem.getNodeTop(editor).getNode()) {
                indexList.push(index2);
              }
            });
            var i = 0;
            while (cacheDomList[i].getNode() !== endElem.getNodeTop(editor).getNode()) {
              if (!cacheDomList[i].elems[0])
                return;
              var d = dom_core_1["default"](cacheDomList[i].next().getNode());
              cacheDomList.push(d);
              i++;
            }
            cacheDomList === null || cacheDomList === void 0 ? void 0 : (0, _forEach["default"])(cacheDomList).call(cacheDomList, function(_node, index2) {
              if (!_this.hasTag(_node, _WHITE_LIST)) {
                var $h = dom_core_1["default"](value);
                var $parentNode = _node.parent().getNode();
                $h.html("" + _node.html());
                $parentNode.insertBefore($h.getNode(), _node.getNode());
                _node.remove();
              }
            });
            $selection.createRangeByElems(containerElem.children[indexList[0]], containerElem.children[indexList[1]]);
          };
          Head2.prototype.hasTag = function(elem, whiteList) {
            var _this = this;
            var _a;
            if (!elem)
              return false;
            if ((0, _includes["default"])(whiteList).call(whiteList, elem === null || elem === void 0 ? void 0 : elem.getNodeName()))
              return true;
            var _flag = false;
            (_a = elem.children()) === null || _a === void 0 ? void 0 : (0, _forEach["default"])(_a).call(_a, function(child) {
              _flag = _this.hasTag(dom_core_1["default"](child), whiteList);
            });
            return _flag;
          };
          Head2.prototype.tryChangeActive = function() {
            var editor = this.editor;
            var reg = /^h/i;
            var cmdValue = editor.cmd.queryCommandValue("formatBlock");
            if (reg.test(cmdValue)) {
              this.active();
            } else {
              this.unActive();
            }
          };
          return Head2;
        }(DropListMenu_1["default"]);
        exports2["default"] = Head;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(318);
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(319);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(320);
        var core = __webpack_require__(9);
        if (!core.JSON)
          core.JSON = { stringify: JSON.stringify };
        module2.exports = function stringify(it, replacer, space) {
          return core.JSON.stringify.apply(null, arguments);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var getBuiltIn = __webpack_require__(35);
        var fails = __webpack_require__(11);
        var $stringify = getBuiltIn("JSON", "stringify");
        var re = /[\uD800-\uDFFF]/g;
        var low = /^[\uD800-\uDBFF]$/;
        var hi = /^[\uDC00-\uDFFF]$/;
        var fix = function(match, offset, string) {
          var prev = string.charAt(offset - 1);
          var next = string.charAt(offset + 1);
          if (low.test(match) && !hi.test(next) || hi.test(match) && !low.test(prev)) {
            return "\\u" + match.charCodeAt(0).toString(16);
          }
          return match;
        };
        var FORCED = fails(function() {
          return $stringify("\uDF06\uD834") !== '"\\udf06\\ud834"' || $stringify("\uDEAD") !== '"\\udead"';
        });
        if ($stringify) {
          $({ target: "JSON", stat: true, forced: FORCED }, {
            stringify: function stringify(it, replacer, space) {
              var result = $stringify.apply(null, arguments);
              return typeof result == "string" ? result.replace(re, fix) : result;
            }
          });
        }
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _trim = _interopRequireDefault(__webpack_require__(17));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var PanelMenu_1 = tslib_1.__importDefault(__webpack_require__(37));
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var create_panel_conf_1 = tslib_1.__importDefault(__webpack_require__(322));
        var is_active_1 = tslib_1.__importDefault(__webpack_require__(134));
        var Panel_1 = tslib_1.__importDefault(__webpack_require__(32));
        var index_1 = tslib_1.__importDefault(__webpack_require__(324));
        var const_1 = __webpack_require__(7);
        var Link = function(_super) {
          tslib_1.__extends(Link2, _super);
          function Link2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u94FE\u63A5"><i class="w-e-icon-link"></i></div>');
            _this = _super.call(this, $elem, editor) || this;
            index_1["default"](editor);
            return _this;
          }
          Link2.prototype.clickHandler = function() {
            var editor = this.editor;
            var $linkElem;
            var $selectionElem = editor.selection.getSelectionContainerElem();
            var $textElem = editor.$textElem;
            var html = $textElem.html();
            var $txtHtml = (0, _trim["default"])(html).call(html);
            if ($txtHtml === const_1.EMPTY_P) {
              var $emptyChild = $textElem.children();
              editor.selection.createRangeByElem($emptyChild, true, true);
              $selectionElem = editor.selection.getSelectionContainerElem();
            }
            if ($selectionElem && editor.$textElem.equal($selectionElem)) {
              return;
            }
            if (this.isActive) {
              $linkElem = editor.selection.getSelectionContainerElem();
              if (!$linkElem) {
                return;
              }
              this.createPanel($linkElem.text(), $linkElem.attr("href"));
            } else {
              if (editor.selection.isSelectionEmpty()) {
                this.createPanel("", "");
              } else {
                this.createPanel(editor.selection.getSelectionText(), "");
              }
            }
          };
          Link2.prototype.createPanel = function(text, link) {
            var conf = create_panel_conf_1["default"](this.editor, text, link);
            var panel = new Panel_1["default"](this, conf);
            panel.create();
          };
          Link2.prototype.tryChangeActive = function() {
            var editor = this.editor;
            if (is_active_1["default"](editor)) {
              this.active();
            } else {
              this.unActive();
            }
          };
          return Link2;
        }(PanelMenu_1["default"]);
        exports2["default"] = Link;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _trim = _interopRequireDefault(__webpack_require__(17));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var util_1 = __webpack_require__(6);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var is_active_1 = tslib_1.__importDefault(__webpack_require__(134));
        var util_2 = __webpack_require__(323);
        function default_1(editor, text, link) {
          var inputLinkId = util_1.getRandom("input-link");
          var inputTextId = util_1.getRandom("input-text");
          var btnOkId = util_1.getRandom("btn-ok");
          var btnDelId = util_1.getRandom("btn-del");
          var delBtnDisplay = is_active_1["default"](editor) ? "inline-block" : "none";
          var $selectedLink;
          function selectLinkElem() {
            if (!is_active_1["default"](editor))
              return;
            var $linkElem = editor.selection.getSelectionContainerElem();
            if (!$linkElem)
              return;
            editor.selection.createRangeByElem($linkElem);
            editor.selection.restoreSelection();
            $selectedLink = $linkElem;
          }
          function insertLink(text2, link2) {
            if (is_active_1["default"](editor)) {
              selectLinkElem();
              editor.cmd["do"]("insertHTML", '<a href="' + link2 + '" target="_blank">' + text2 + "</a>");
            } else {
              editor.cmd["do"]("insertHTML", '<a href="' + link2 + '" target="_blank">' + text2 + "</a>");
            }
          }
          function delLink() {
            if (!is_active_1["default"](editor)) {
              return;
            }
            selectLinkElem();
            var selectionText = $selectedLink.text();
            editor.cmd["do"]("insertHTML", "<span>" + selectionText + "</span>");
          }
          function checkLink(text2, link2) {
            var check = editor.config.linkCheck(text2, link2);
            if (check === void 0)
              ;
            else if (check === true) {
              return true;
            } else {
              editor.config.customAlert(check, "warning");
            }
            return false;
          }
          var conf = {
            width: 300,
            height: 0,
            tabs: [{
              title: editor.i18next.t("menus.panelMenus.link.\u94FE\u63A5"),
              tpl: '<div>\n                        <input\n                            id="' + inputTextId + '"\n                            type="text"\n                            class="block"\n                            value="' + text + '"\n                            placeholder="' + editor.i18next.t("menus.panelMenus.link.\u94FE\u63A5\u6587\u5B57") + '"/>\n                        </td>\n                        <input\n                            id="' + inputLinkId + '"\n                            type="text"\n                            class="block"\n                            value="' + link + '"\n                            placeholder="' + editor.i18next.t("\u5982") + ' https://..."/>\n                        </td>\n                        <div class="w-e-button-container">\n                            <button type="button" id="' + btnOkId + '" class="right">\n                                ' + editor.i18next.t("\u63D2\u5165") + '\n                            </button>\n                            <button type="button" id="' + btnDelId + '" class="gray right" style="display:' + delBtnDisplay + '">\n                                ' + editor.i18next.t("menus.panelMenus.link.\u53D6\u6D88\u94FE\u63A5") + "\n                            </button>\n                        </div>\n                    </div>",
              events: [
                {
                  selector: "#" + btnOkId,
                  type: "click",
                  fn: function fn() {
                    var _context, _context2;
                    var _a, _b;
                    editor.selection.restoreSelection();
                    var topNode = editor.selection.getSelectionRangeTopNodes()[0].getNode();
                    var selection = window.getSelection();
                    var $link = dom_core_1["default"]("#" + inputLinkId);
                    var $text = dom_core_1["default"]("#" + inputTextId);
                    var link2 = (0, _trim["default"])(_context = $link.val()).call(_context);
                    var text2 = (0, _trim["default"])(_context2 = $text.val()).call(_context2);
                    var html = "";
                    if (selection && !(selection === null || selection === void 0 ? void 0 : selection.isCollapsed)) {
                      html = (_a = util_2.insertHtml(selection, topNode)) === null || _a === void 0 ? void 0 : (0, _trim["default"])(_a).call(_a);
                    }
                    var htmlText = html === null || html === void 0 ? void 0 : html.replace(/<.*?>/g, "");
                    var htmlTextLen = (_b = htmlText === null || htmlText === void 0 ? void 0 : htmlText.length) !== null && _b !== void 0 ? _b : 0;
                    if (htmlTextLen <= text2.length) {
                      var startText = text2.substring(0, htmlTextLen);
                      var endText = text2.substring(htmlTextLen);
                      if (htmlText === startText) {
                        text2 = htmlText + endText;
                      }
                    }
                    if (!link2)
                      return;
                    if (!text2)
                      text2 = link2;
                    if (!checkLink(text2, link2))
                      return;
                    insertLink(text2, link2);
                    return true;
                  },
                  bindEnter: true
                },
                {
                  selector: "#" + btnDelId,
                  type: "click",
                  fn: function fn() {
                    delLink();
                    return true;
                  }
                }
              ]
            }]
          };
          return conf;
        }
        exports2["default"] = default_1;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.insertHtml = exports2.createPartHtml = exports2.makeHtmlString = exports2.getTopNode = void 0;
        function getTopNode(node, topText) {
          var pointerNode = node;
          var topNode = node;
          do {
            if (pointerNode.textContent === topText)
              break;
            topNode = pointerNode;
            if (pointerNode.parentNode) {
              pointerNode = pointerNode === null || pointerNode === void 0 ? void 0 : pointerNode.parentNode;
            }
          } while ((pointerNode === null || pointerNode === void 0 ? void 0 : pointerNode.nodeName) !== "P");
          return topNode;
        }
        exports2.getTopNode = getTopNode;
        function makeHtmlString(node, content) {
          var tagName = node.nodeName;
          var attr = "";
          if (node.nodeType === 3 || /^(h|H)[1-6]$/.test(tagName)) {
            return content;
          }
          if (node.nodeType === 1) {
            var style = node.getAttribute("style");
            var face = node.getAttribute("face");
            var color = node.getAttribute("color");
            if (style)
              attr = attr + (' style="' + style + '"');
            if (face)
              attr = attr + (' face="' + face + '"');
            if (color)
              attr = attr + (' color="' + color + '"');
          }
          tagName = tagName.toLowerCase();
          return "<" + tagName + attr + ">" + content + "</" + tagName + ">";
        }
        exports2.makeHtmlString = makeHtmlString;
        function createPartHtml(topText, node, startPos, endPost) {
          var _a;
          var selectionContent = (_a = node.textContent) === null || _a === void 0 ? void 0 : _a.substring(startPos, endPost);
          var pointerNode = node;
          var content = "";
          do {
            content = makeHtmlString(pointerNode, selectionContent !== null && selectionContent !== void 0 ? selectionContent : "");
            selectionContent = content;
            pointerNode = pointerNode === null || pointerNode === void 0 ? void 0 : pointerNode.parentElement;
          } while (pointerNode && pointerNode.textContent !== topText);
          return content;
        }
        exports2.createPartHtml = createPartHtml;
        function insertHtml(selection, topNode) {
          var _a, _b, _c, _d, _e;
          var anchorNode = selection.anchorNode, focusNode = selection.focusNode, anchorPos = selection.anchorOffset, focusPos = selection.focusOffset;
          var topText = (_a = topNode.textContent) !== null && _a !== void 0 ? _a : "";
          var TagArr = getContainerTag(topNode);
          var content = "";
          var startContent = "";
          var middleContent = "";
          var endContent = "";
          var startNode = anchorNode;
          var endNode = focusNode;
          var pointerNode = anchorNode;
          if (anchorNode === null || anchorNode === void 0 ? void 0 : anchorNode.isEqualNode(focusNode !== null && focusNode !== void 0 ? focusNode : null)) {
            var innerContent = createPartHtml(topText, anchorNode, anchorPos, focusPos);
            innerContent = addContainer(TagArr, innerContent);
            return innerContent;
          }
          if (anchorNode)
            startContent = createPartHtml(topText, anchorNode, anchorPos !== null && anchorPos !== void 0 ? anchorPos : 0);
          if (focusNode)
            endContent = createPartHtml(topText, focusNode, 0, focusPos);
          if (anchorNode) {
            startNode = getTopNode(anchorNode, topText);
          }
          if (focusNode) {
            endNode = getTopNode(focusNode, topText);
          }
          pointerNode = (_b = startNode === null || startNode === void 0 ? void 0 : startNode.nextSibling) !== null && _b !== void 0 ? _b : anchorNode;
          while (!(pointerNode === null || pointerNode === void 0 ? void 0 : pointerNode.isEqualNode(endNode !== null && endNode !== void 0 ? endNode : null))) {
            var pointerNodeName = pointerNode === null || pointerNode === void 0 ? void 0 : pointerNode.nodeName;
            if (pointerNodeName === "#text") {
              middleContent = middleContent + (pointerNode === null || pointerNode === void 0 ? void 0 : pointerNode.textContent);
            } else {
              var htmlString = (_d = (_c = pointerNode === null || pointerNode === void 0 ? void 0 : pointerNode.firstChild) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.innerHTML;
              if (pointerNode)
                middleContent = middleContent + makeHtmlString(pointerNode, htmlString !== null && htmlString !== void 0 ? htmlString : "");
            }
            var nextPointNode = (_e = pointerNode === null || pointerNode === void 0 ? void 0 : pointerNode.nextSibling) !== null && _e !== void 0 ? _e : pointerNode;
            if (nextPointNode === pointerNode)
              break;
            pointerNode = nextPointNode;
          }
          content = "" + startContent + middleContent + endContent;
          content = addContainer(TagArr, content);
          return content;
        }
        exports2.insertHtml = insertHtml;
        function getContainerTag(node) {
          var _a;
          var topText = (_a = node.textContent) !== null && _a !== void 0 ? _a : "";
          var tagArr = [];
          while ((node === null || node === void 0 ? void 0 : node.textContent) === topText) {
            if (node.nodeName !== "P" && node.nodeName !== "TABLE") {
              tagArr.push(node);
            }
            node = node.childNodes[0];
          }
          return tagArr;
        }
        function addContainer(tagArr, content) {
          (0, _forEach["default"])(tagArr).call(tagArr, function(v) {
            content = makeHtmlString(v, content);
          });
          return content;
        }
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var tooltip_event_1 = tslib_1.__importDefault(__webpack_require__(325));
        function bindEvent(editor) {
          tooltip_event_1["default"](editor);
        }
        exports2["default"] = bindEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var Tooltip_1 = tslib_1.__importDefault(__webpack_require__(38));
        function createShowHideFn(editor) {
          var tooltip;
          function showLinkTooltip($link) {
            var conf = [{
              $elem: dom_core_1["default"]("<span>" + editor.i18next.t("menus.panelMenus.link.\u67E5\u770B\u94FE\u63A5") + "</span>"),
              onClick: function onClick(editor2, $link2) {
                var link = $link2.attr("href");
                window.open(link, "_target");
                return true;
              }
            }, {
              $elem: dom_core_1["default"]("<span>" + editor.i18next.t("menus.panelMenus.link.\u53D6\u6D88\u94FE\u63A5") + "</span>"),
              onClick: function onClick(editor2, $link2) {
                var _a, _b;
                editor2.selection.createRangeByElem($link2);
                editor2.selection.restoreSelection();
                var $childNodes = $link2.childNodes();
                if (($childNodes === null || $childNodes === void 0 ? void 0 : $childNodes.getNodeName()) === "IMG") {
                  var $selectIMG = (_b = (_a = editor2.selection.getSelectionContainerElem()) === null || _a === void 0 ? void 0 : _a.children()) === null || _b === void 0 ? void 0 : _b.elems[0].children[0];
                  editor2.cmd["do"]("insertHTML", "<img \n                                src=" + ($selectIMG === null || $selectIMG === void 0 ? void 0 : $selectIMG.getAttribute("src")) + " \n                                style=" + ($selectIMG === null || $selectIMG === void 0 ? void 0 : $selectIMG.getAttribute("style")) + ">");
                } else {
                  var selectionText = $link2.text();
                  editor2.cmd["do"]("insertHTML", "<span>" + selectionText + "</span>");
                }
                return true;
              }
            }];
            tooltip = new Tooltip_1["default"](editor, $link, conf);
            tooltip.create();
          }
          function hideLinkTooltip() {
            if (tooltip) {
              tooltip.remove();
              tooltip = null;
            }
          }
          return {
            showLinkTooltip,
            hideLinkTooltip
          };
        }
        function bindTooltipEvent(editor) {
          var _a = createShowHideFn(editor), showLinkTooltip = _a.showLinkTooltip, hideLinkTooltip = _a.hideLinkTooltip;
          editor.txt.eventHooks.linkClickEvents.push(showLinkTooltip);
          editor.txt.eventHooks.clickEvents.push(hideLinkTooltip);
          editor.txt.eventHooks.keyupEvents.push(hideLinkTooltip);
          editor.txt.eventHooks.toolbarClickEvents.push(hideLinkTooltip);
          editor.txt.eventHooks.menuClickEvents.push(hideLinkTooltip);
          editor.txt.eventHooks.textScrollEvents.push(hideLinkTooltip);
        }
        exports2["default"] = bindTooltipEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var BtnMenu_1 = tslib_1.__importDefault(__webpack_require__(23));
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var Italic = function(_super) {
          tslib_1.__extends(Italic2, _super);
          function Italic2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u659C\u4F53">\n                <i class="w-e-icon-italic"></i>\n            </div>');
            _this = _super.call(this, $elem, editor) || this;
            return _this;
          }
          Italic2.prototype.clickHandler = function() {
            var editor = this.editor;
            var isSelectEmpty = editor.selection.isSelectionEmpty();
            if (isSelectEmpty) {
              editor.selection.createEmptyRange();
            }
            editor.cmd["do"]("italic");
            if (isSelectEmpty) {
              editor.selection.collapseRange();
              editor.selection.restoreSelection();
            }
          };
          Italic2.prototype.tryChangeActive = function() {
            var editor = this.editor;
            if (editor.cmd.queryCommandState("italic")) {
              this.active();
            } else {
              this.unActive();
            }
          };
          return Italic2;
        }(BtnMenu_1["default"]);
        exports2["default"] = Italic;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var BtnMenu_1 = tslib_1.__importDefault(__webpack_require__(23));
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var Underline = function(_super) {
          tslib_1.__extends(Underline2, _super);
          function Underline2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u4E0B\u5212\u7EBF">\n                <i class="w-e-icon-underline"></i>\n            </div>');
            _this = _super.call(this, $elem, editor) || this;
            return _this;
          }
          Underline2.prototype.clickHandler = function() {
            var editor = this.editor;
            var isSelectEmpty = editor.selection.isSelectionEmpty();
            if (isSelectEmpty) {
              editor.selection.createEmptyRange();
            }
            editor.cmd["do"]("underline");
            if (isSelectEmpty) {
              editor.selection.collapseRange();
              editor.selection.restoreSelection();
            }
          };
          Underline2.prototype.tryChangeActive = function() {
            var editor = this.editor;
            if (editor.cmd.queryCommandState("underline")) {
              this.active();
            } else {
              this.unActive();
            }
          };
          return Underline2;
        }(BtnMenu_1["default"]);
        exports2["default"] = Underline;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var BtnMenu_1 = tslib_1.__importDefault(__webpack_require__(23));
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var StrikeThrough = function(_super) {
          tslib_1.__extends(StrikeThrough2, _super);
          function StrikeThrough2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u5220\u9664\u7EBF">\n                <i class="w-e-icon-strikethrough"></i>\n            </div>');
            _this = _super.call(this, $elem, editor) || this;
            return _this;
          }
          StrikeThrough2.prototype.clickHandler = function() {
            var editor = this.editor;
            var isSelectEmpty = editor.selection.isSelectionEmpty();
            if (isSelectEmpty) {
              editor.selection.createEmptyRange();
            }
            editor.cmd["do"]("strikeThrough");
            if (isSelectEmpty) {
              editor.selection.collapseRange();
              editor.selection.restoreSelection();
            }
          };
          StrikeThrough2.prototype.tryChangeActive = function() {
            var editor = this.editor;
            if (editor.cmd.queryCommandState("strikeThrough")) {
              this.active();
            } else {
              this.unActive();
            }
          };
          return StrikeThrough2;
        }(BtnMenu_1["default"]);
        exports2["default"] = StrikeThrough;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var DropListMenu_1 = tslib_1.__importDefault(__webpack_require__(24));
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var FontStyleList_1 = tslib_1.__importDefault(__webpack_require__(330));
        var FontStyle = function(_super) {
          tslib_1.__extends(FontStyle2, _super);
          function FontStyle2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u5B57\u4F53">\n                <i class="w-e-icon-font"></i>\n            </div>');
            var fontStyleList = new FontStyleList_1["default"](editor.config.fontNames);
            var fontListConf = {
              width: 100,
              title: "\u8BBE\u7F6E\u5B57\u4F53",
              type: "list",
              list: fontStyleList.getItemList(),
              clickHandler: function clickHandler(value) {
                _this.command(value);
              }
            };
            _this = _super.call(this, $elem, editor, fontListConf) || this;
            return _this;
          }
          FontStyle2.prototype.command = function(value) {
            var _a;
            var editor = this.editor;
            var isEmptySelection = editor.selection.isSelectionEmpty();
            var $selectionElem = (_a = editor.selection.getSelectionContainerElem()) === null || _a === void 0 ? void 0 : _a.elems[0];
            if ($selectionElem == null)
              return;
            var isFont = ($selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.nodeName.toLowerCase()) !== "p";
            var isSameValue = ($selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.getAttribute("face")) === value;
            if (isEmptySelection) {
              if (isFont && !isSameValue) {
                var $elems = editor.selection.getSelectionRangeTopNodes();
                editor.selection.createRangeByElem($elems[0]);
                editor.selection.moveCursor($elems[0].elems[0]);
              }
              editor.selection.setRangeToElem($selectionElem);
              editor.selection.createEmptyRange();
            }
            editor.cmd["do"]("fontName", value);
            if (isEmptySelection) {
              editor.selection.collapseRange();
              editor.selection.restoreSelection();
            }
          };
          FontStyle2.prototype.tryChangeActive = function() {
          };
          return FontStyle2;
        }(DropListMenu_1["default"]);
        exports2["default"] = FontStyle;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var FontStyleList = function() {
          function FontStyleList2(list) {
            var _this = this;
            this.itemList = [];
            (0, _forEach["default"])(list).call(list, function(fontValue) {
              var fontFamily = typeof fontValue === "string" ? fontValue : fontValue.value;
              var fontName = typeof fontValue === "string" ? fontValue : fontValue.name;
              _this.itemList.push({
                $elem: dom_core_1["default"](`<p style="font-family:'` + fontFamily + `'">` + fontName + "</p>"),
                value: fontName
              });
            });
          }
          FontStyleList2.prototype.getItemList = function() {
            return this.itemList;
          };
          return FontStyleList2;
        }();
        exports2["default"] = FontStyleList;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var DropListMenu_1 = tslib_1.__importDefault(__webpack_require__(24));
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var FontSizeList_1 = tslib_1.__importDefault(__webpack_require__(332));
        var FontSize = function(_super) {
          tslib_1.__extends(FontSize2, _super);
          function FontSize2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u5B57\u53F7">\n                <i class="w-e-icon-text-heigh"></i>\n            </div>');
            var fontStyleList = new FontSizeList_1["default"](editor.config.fontSizes);
            var fontListConf = {
              width: 160,
              title: "\u8BBE\u7F6E\u5B57\u53F7",
              type: "list",
              list: fontStyleList.getItemList(),
              clickHandler: function clickHandler(value) {
                _this.command(value);
              }
            };
            _this = _super.call(this, $elem, editor, fontListConf) || this;
            return _this;
          }
          FontSize2.prototype.command = function(value) {
            var _a;
            var editor = this.editor;
            var isEmptySelection = editor.selection.isSelectionEmpty();
            var selectionElem = (_a = editor.selection.getSelectionContainerElem()) === null || _a === void 0 ? void 0 : _a.elems[0];
            if (selectionElem == null)
              return;
            editor.cmd["do"]("fontSize", value);
            if (isEmptySelection) {
              editor.selection.collapseRange();
              editor.selection.restoreSelection();
            }
          };
          FontSize2.prototype.tryChangeActive = function() {
          };
          return FontSize2;
        }(DropListMenu_1["default"]);
        exports2["default"] = FontSize;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var FontSizeList = function() {
          function FontSizeList2(list) {
            this.itemList = [];
            for (var key in list) {
              var item = list[key];
              this.itemList.push({
                $elem: dom_core_1["default"]('<p style="font-size:' + key + '">' + item.name + "</p>"),
                value: item.value
              });
            }
          }
          FontSizeList2.prototype.getItemList = function() {
            return this.itemList;
          };
          return FontSizeList2;
        }();
        exports2["default"] = FontSizeList;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        var _indexOf = _interopRequireDefault(__webpack_require__(27));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var DropListMenu_1 = tslib_1.__importDefault(__webpack_require__(24));
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var SPECIAL_NODE_LIST = ["LI"];
        var SPECIAL_TOP_NODE_LIST = ["UL", "BLOCKQUOTE"];
        var Justify = function(_super) {
          tslib_1.__extends(Justify2, _super);
          function Justify2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u5BF9\u9F50"><i class="w-e-icon-paragraph-left"></i></div>');
            var dropListConf = {
              width: 100,
              title: "\u5BF9\u9F50\u65B9\u5F0F",
              type: "list",
              list: [{
                $elem: dom_core_1["default"]('<p>\n                            <i class="w-e-icon-paragraph-left w-e-drop-list-item"></i>\n                            ' + editor.i18next.t("menus.dropListMenu.justify.\u9760\u5DE6") + "\n                        </p>"),
                value: "left"
              }, {
                $elem: dom_core_1["default"]('<p>\n                            <i class="w-e-icon-paragraph-center w-e-drop-list-item"></i>\n                            ' + editor.i18next.t("menus.dropListMenu.justify.\u5C45\u4E2D") + "\n                        </p>"),
                value: "center"
              }, {
                $elem: dom_core_1["default"]('<p>\n                            <i class="w-e-icon-paragraph-right w-e-drop-list-item"></i>\n                            ' + editor.i18next.t("menus.dropListMenu.justify.\u9760\u53F3") + "\n                        </p>"),
                value: "right"
              }, {
                $elem: dom_core_1["default"]('<p>\n                            <i class="w-e-icon-paragraph-justify w-e-drop-list-item"></i>\n                            ' + editor.i18next.t("menus.dropListMenu.justify.\u4E24\u7AEF") + "\n                        </p>"),
                value: "justify"
              }],
              clickHandler: function clickHandler(value) {
                _this.command(value);
              }
            };
            _this = _super.call(this, $elem, editor, dropListConf) || this;
            return _this;
          }
          Justify2.prototype.command = function(value) {
            var editor = this.editor;
            var selection = editor.selection;
            var $selectionElem = selection.getSelectionContainerElem();
            selection.saveRange();
            var $elems = editor.selection.getSelectionRangeTopNodes();
            if ($selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.length) {
              if (this.isSpecialNode($selectionElem, $elems[0]) || this.isSpecialTopNode($elems[0])) {
                var el = this.getSpecialNodeUntilTop($selectionElem, $elems[0]);
                if (el == null)
                  return;
                dom_core_1["default"](el).css("text-align", value);
              } else {
                (0, _forEach["default"])($elems).call($elems, function(el2) {
                  el2.css("text-align", value);
                });
              }
            }
            selection.restoreSelection();
          };
          Justify2.prototype.getSpecialNodeUntilTop = function(el, topEl) {
            var parentNode = el.elems[0];
            var topNode = topEl.elems[0];
            while (parentNode != null) {
              if ((0, _indexOf["default"])(SPECIAL_NODE_LIST).call(SPECIAL_NODE_LIST, parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeName) !== -1) {
                return parentNode;
              }
              if (parentNode.parentNode === topNode) {
                return parentNode;
              }
              parentNode = parentNode.parentNode;
            }
            return parentNode;
          };
          Justify2.prototype.isSpecialNode = function(el, topEl) {
            var parentNode = this.getSpecialNodeUntilTop(el, topEl);
            if (parentNode == null)
              return false;
            return (0, _indexOf["default"])(SPECIAL_NODE_LIST).call(SPECIAL_NODE_LIST, parentNode.nodeName) !== -1;
          };
          Justify2.prototype.isSpecialTopNode = function(topEl) {
            var _a;
            if (topEl == null)
              return false;
            return (0, _indexOf["default"])(SPECIAL_TOP_NODE_LIST).call(SPECIAL_TOP_NODE_LIST, (_a = topEl.elems[0]) === null || _a === void 0 ? void 0 : _a.nodeName) !== -1;
          };
          Justify2.prototype.tryChangeActive = function() {
          };
          return Justify2;
        }(DropListMenu_1["default"]);
        exports2["default"] = Justify;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var BtnMenu_1 = tslib_1.__importDefault(__webpack_require__(23));
        var bind_event_1 = tslib_1.__importDefault(__webpack_require__(335));
        var create_quote_node_1 = tslib_1.__importDefault(__webpack_require__(336));
        var const_1 = __webpack_require__(7);
        var Quote = function(_super) {
          tslib_1.__extends(Quote2, _super);
          function Quote2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u5F15\u7528">\n                <i class="w-e-icon-quotes-left"></i>\n            </div>');
            _this = _super.call(this, $elem, editor) || this;
            bind_event_1["default"](editor);
            return _this;
          }
          Quote2.prototype.clickHandler = function() {
            var _a, _b;
            var editor = this.editor;
            var isSelectEmpty = editor.selection.isSelectionEmpty();
            var topNodeElem = editor.selection.getSelectionRangeTopNodes();
            var $topNodeElem = topNodeElem[topNodeElem.length - 1];
            var nodeName = this.getTopNodeName();
            if (nodeName === "BLOCKQUOTE") {
              var $targetELem = dom_core_1["default"]($topNodeElem.childNodes());
              var len = $targetELem.length;
              var $middle_1 = $topNodeElem;
              (0, _forEach["default"])($targetELem).call($targetELem, function(elem) {
                var $elem = dom_core_1["default"](elem);
                $elem.insertAfter($middle_1);
                $middle_1 = $elem;
              });
              $topNodeElem.remove();
              editor.selection.moveCursor($targetELem.elems[len - 1]);
              this.tryChangeActive();
            } else {
              var $quote = create_quote_node_1["default"](topNodeElem);
              if (editor.$textElem.equal($topNodeElem)) {
                var containerElem = (_a = editor.selection.getSelectionContainerElem()) === null || _a === void 0 ? void 0 : _a.elems[0];
                editor.selection.createRangeByElems(containerElem.children[0], containerElem.children[0]);
                topNodeElem = editor.selection.getSelectionRangeTopNodes();
                $quote = create_quote_node_1["default"](topNodeElem);
                $topNodeElem.append($quote);
              } else {
                $quote.insertAfter($topNodeElem);
              }
              this.delSelectNode(topNodeElem);
              var moveNode = (_b = $quote.childNodes()) === null || _b === void 0 ? void 0 : _b.last().getNode();
              if (moveNode == null)
                return;
              moveNode.textContent ? editor.selection.moveCursor(moveNode) : editor.selection.moveCursor(moveNode, 0);
              this.tryChangeActive();
              dom_core_1["default"](const_1.EMPTY_P).insertAfter($quote);
              return;
            }
            if (isSelectEmpty) {
              editor.selection.collapseRange();
              editor.selection.restoreSelection();
            }
          };
          Quote2.prototype.tryChangeActive = function() {
            var _a;
            var editor = this.editor;
            var cmdValue = (_a = editor.selection.getSelectionRangeTopNodes()[0]) === null || _a === void 0 ? void 0 : _a.getNodeName();
            if (cmdValue === "BLOCKQUOTE") {
              this.active();
            } else {
              this.unActive();
            }
          };
          Quote2.prototype.getTopNodeName = function() {
            var editor = this.editor;
            var $topNodeElem = editor.selection.getSelectionRangeTopNodes()[0];
            var nodeName = $topNodeElem === null || $topNodeElem === void 0 ? void 0 : $topNodeElem.getNodeName();
            return nodeName;
          };
          Quote2.prototype.delSelectNode = function(selectElem) {
            (0, _forEach["default"])(selectElem).call(selectElem, function(node) {
              node.remove();
            });
          };
          return Quote2;
        }(BtnMenu_1["default"]);
        exports2["default"] = Quote;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var const_1 = __webpack_require__(7);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        function bindEvent(editor) {
          function quoteEnter(e) {
            var _a;
            var $selectElem = editor.selection.getSelectionContainerElem();
            var $topSelectElem = editor.selection.getSelectionRangeTopNodes()[0];
            if (($topSelectElem === null || $topSelectElem === void 0 ? void 0 : $topSelectElem.getNodeName()) === "BLOCKQUOTE") {
              if ($selectElem.getNodeName() === "BLOCKQUOTE") {
                var selectNode = (_a = $selectElem.childNodes()) === null || _a === void 0 ? void 0 : _a.getNode();
                editor.selection.moveCursor(selectNode);
              }
              if ($selectElem.text() === "") {
                e.preventDefault();
                $selectElem.remove();
                var $newLine = dom_core_1["default"](const_1.EMPTY_P);
                $newLine.insertAfter($topSelectElem);
                editor.selection.moveCursor($newLine.getNode(), 0);
              }
              if ($topSelectElem.text() === "") {
                $topSelectElem.remove();
              }
            }
          }
          editor.txt.eventHooks.enterDownEvents.push(quoteEnter);
        }
        exports2["default"] = bindEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        function createQuote($childElem) {
          var $targetElem = dom_core_1["default"]("<blockquote></blockquote>");
          (0, _forEach["default"])($childElem).call($childElem, function(node) {
            $targetElem.append(node.clone(true));
          });
          return $targetElem;
        }
        exports2["default"] = createQuote;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _map = _interopRequireDefault(__webpack_require__(26));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var DropListMenu_1 = tslib_1.__importDefault(__webpack_require__(24));
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var util_1 = __webpack_require__(6);
        var BackColor = function(_super) {
          tslib_1.__extends(BackColor2, _super);
          function BackColor2(editor) {
            var _context;
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u80CC\u666F\u8272">\n                <i class="w-e-icon-paint-brush"></i>\n            </div>');
            var colorListConf = {
              width: 120,
              title: "\u80CC\u666F\u989C\u8272",
              type: "inline-block",
              list: (0, _map["default"])(_context = editor.config.colors).call(_context, function(color) {
                return {
                  $elem: dom_core_1["default"]('<i style="color:' + color + ';" class="w-e-icon-paint-brush"></i>'),
                  value: color
                };
              }),
              clickHandler: function clickHandler(value) {
                _this.command(value);
              }
            };
            _this = _super.call(this, $elem, editor, colorListConf) || this;
            return _this;
          }
          BackColor2.prototype.command = function(value) {
            var _a;
            var editor = this.editor;
            var isEmptySelection = editor.selection.isSelectionEmpty();
            var $selectionElem = (_a = editor.selection.getSelectionContainerElem()) === null || _a === void 0 ? void 0 : _a.elems[0];
            if ($selectionElem == null)
              return;
            var isSpan = ($selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.nodeName.toLowerCase()) !== "p";
            var bgColor = $selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.style.backgroundColor;
            var isSameColor = util_1.hexToRgb(value) === bgColor;
            if (isEmptySelection) {
              if (isSpan && !isSameColor) {
                var $elems = editor.selection.getSelectionRangeTopNodes();
                editor.selection.createRangeByElem($elems[0]);
                editor.selection.moveCursor($elems[0].elems[0]);
              }
              editor.selection.createEmptyRange();
            }
            editor.cmd["do"]("backColor", value);
            if (isEmptySelection) {
              editor.selection.collapseRange();
              editor.selection.restoreSelection();
            }
          };
          BackColor2.prototype.tryChangeActive = function() {
          };
          return BackColor2;
        }(DropListMenu_1["default"]);
        exports2["default"] = BackColor;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _map = _interopRequireDefault(__webpack_require__(26));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var DropListMenu_1 = tslib_1.__importDefault(__webpack_require__(24));
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var FontColor = function(_super) {
          tslib_1.__extends(FontColor2, _super);
          function FontColor2(editor) {
            var _context;
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u6587\u5B57\u989C\u8272">\n                <i class="w-e-icon-pencil2"></i>\n            </div>');
            var colorListConf = {
              width: 120,
              title: "\u6587\u5B57\u989C\u8272",
              type: "inline-block",
              list: (0, _map["default"])(_context = editor.config.colors).call(_context, function(color) {
                return {
                  $elem: dom_core_1["default"]('<i style="color:' + color + ';" class="w-e-icon-pencil2"></i>'),
                  value: color
                };
              }),
              clickHandler: function clickHandler(value) {
                _this.command(value);
              }
            };
            _this = _super.call(this, $elem, editor, colorListConf) || this;
            return _this;
          }
          FontColor2.prototype.command = function(value) {
            var _a;
            var editor = this.editor;
            var isEmptySelection = editor.selection.isSelectionEmpty();
            var $selectionElem = (_a = editor.selection.getSelectionContainerElem()) === null || _a === void 0 ? void 0 : _a.elems[0];
            if ($selectionElem == null)
              return;
            var $selectionText = editor.selection.getSelectionText();
            if ($selectionElem.nodeName === "A" && $selectionElem.textContent === $selectionText) {
              var _payloadElem = dom_core_1["default"]("<span>&#8203;</span>").getNode();
              $selectionElem.appendChild(_payloadElem);
            }
            editor.cmd["do"]("foreColor", value);
            if (isEmptySelection) {
              editor.selection.collapseRange();
              editor.selection.restoreSelection();
            }
          };
          FontColor2.prototype.tryChangeActive = function() {
          };
          return FontColor2;
        }(DropListMenu_1["default"]);
        exports2["default"] = FontColor;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var Panel_1 = tslib_1.__importDefault(__webpack_require__(32));
        var PanelMenu_1 = tslib_1.__importDefault(__webpack_require__(37));
        var create_panel_conf_1 = tslib_1.__importDefault(__webpack_require__(340));
        var index_1 = tslib_1.__importDefault(__webpack_require__(346));
        var Video = function(_super) {
          tslib_1.__extends(Video2, _super);
          function Video2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u89C6\u9891">\n                <i class="w-e-icon-play"></i>\n            </div>');
            _this = _super.call(this, $elem, editor) || this;
            index_1["default"](editor);
            return _this;
          }
          Video2.prototype.clickHandler = function() {
            this.createPanel("");
          };
          Video2.prototype.createPanel = function(iframe) {
            var conf = create_panel_conf_1["default"](this.editor, iframe);
            var panel = new Panel_1["default"](this, conf);
            panel.create();
          };
          Video2.prototype.tryChangeActive = function() {
          };
          return Video2;
        }(PanelMenu_1["default"]);
        exports2["default"] = Video;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _trim = _interopRequireDefault(__webpack_require__(17));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var util_1 = __webpack_require__(6);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var upload_video_1 = tslib_1.__importDefault(__webpack_require__(341));
        var const_1 = __webpack_require__(7);
        function default_1(editor, video) {
          var config = editor.config;
          var uploadVideo = new upload_video_1["default"](editor);
          var inputIFrameId = util_1.getRandom("input-iframe");
          var btnOkId = util_1.getRandom("btn-ok");
          var inputUploadId = util_1.getRandom("input-upload");
          var btnStartId = util_1.getRandom("btn-local-ok");
          function insertVideo(video2) {
            editor.cmd["do"]("insertHTML", video2 + const_1.EMPTY_P);
            editor.config.onlineVideoCallback(video2);
          }
          function checkOnlineVideo(video2) {
            var check = editor.config.onlineVideoCheck(video2);
            if (check === true) {
              return true;
            }
            if (typeof check === "string") {
              editor.config.customAlert(check, "error");
            }
            return false;
          }
          var tabsConf = [{
            title: editor.i18next.t("menus.panelMenus.video.\u4E0A\u4F20\u89C6\u9891"),
            tpl: '<div class="w-e-up-video-container">\n                    <div id="' + btnStartId + '" class="w-e-up-btn">\n                        <i class="w-e-icon-upload2"></i>\n                    </div>\n                    <div style="display:none;">\n                        <input id="' + inputUploadId + '" type="file" accept="video/*"/>\n                    </div>\n                 </div>',
            events: [
              {
                selector: "#" + btnStartId,
                type: "click",
                fn: function fn() {
                  var $file = dom_core_1["default"]("#" + inputUploadId);
                  var fileElem = $file.elems[0];
                  if (fileElem) {
                    fileElem.click();
                  } else {
                    return true;
                  }
                }
              },
              {
                selector: "#" + inputUploadId,
                type: "change",
                fn: function fn() {
                  var $file = dom_core_1["default"]("#" + inputUploadId);
                  var fileElem = $file.elems[0];
                  if (!fileElem) {
                    return true;
                  }
                  var fileList = fileElem.files;
                  if (fileList.length) {
                    uploadVideo.uploadVideo(fileList);
                  }
                  return true;
                }
              }
            ]
          }, {
            title: editor.i18next.t("menus.panelMenus.video.\u63D2\u5165\u89C6\u9891"),
            tpl: '<div>\n                    <input \n                        id="' + inputIFrameId + '" \n                        type="text" \n                        class="block" \n                        placeholder="' + editor.i18next.t("\u5982") + '\uFF1A<iframe src=... ></iframe>"/>\n                    </td>\n                    <div class="w-e-button-container">\n                        <button type="button" id="' + btnOkId + '" class="right">\n                            ' + editor.i18next.t("\u63D2\u5165") + "\n                        </button>\n                    </div>\n                </div>",
            events: [
              {
                selector: "#" + btnOkId,
                type: "click",
                fn: function fn() {
                  var _context;
                  var $video = dom_core_1["default"]("#" + inputIFrameId);
                  var video2 = (0, _trim["default"])(_context = $video.val()).call(_context);
                  if (!video2)
                    return;
                  if (!checkOnlineVideo(video2))
                    return;
                  insertVideo(video2);
                  return true;
                },
                bindEnter: true
              }
            ]
          }];
          var conf = {
            width: 300,
            height: 0,
            tabs: []
          };
          if (window.FileReader && (config.uploadVideoServer || config.customUploadVideo)) {
            conf.tabs.push(tabsConf[0]);
          }
          if (config.showLinkVideo) {
            conf.tabs.push(tabsConf[1]);
          }
          return conf;
        }
        exports2["default"] = default_1;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _some = _interopRequireDefault(__webpack_require__(132));
        var _bind = _interopRequireDefault(__webpack_require__(57));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        var _indexOf = _interopRequireDefault(__webpack_require__(27));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var util_1 = __webpack_require__(6);
        var upload_core_1 = tslib_1.__importDefault(__webpack_require__(135));
        var progress_1 = tslib_1.__importDefault(__webpack_require__(136));
        var const_1 = __webpack_require__(7);
        var util_2 = __webpack_require__(6);
        var UploadVideo = function() {
          function UploadVideo2(editor) {
            this.editor = editor;
          }
          UploadVideo2.prototype.uploadVideo = function(files) {
            var _this = this;
            if (!files.length) {
              return;
            }
            var editor = this.editor;
            var config = editor.config;
            var i18nPrefix = "validate.";
            var t = function t2(text) {
              return editor.i18next.t(i18nPrefix + text);
            };
            var uploadVideoServer = config.uploadVideoServer;
            var maxSize = config.uploadVideoMaxSize;
            var uploadVideoMaxSize = maxSize / 1024;
            var uploadVideoName = config.uploadVideoName;
            var uploadVideoParams = config.uploadVideoParams;
            var uploadVideoParamsWithUrl = config.uploadVideoParamsWithUrl;
            var uploadVideoHeaders = config.uploadVideoHeaders;
            var uploadVideoHooks = config.uploadVideoHooks;
            var uploadVideoTimeout = config.uploadVideoTimeout;
            var withVideoCredentials = config.withVideoCredentials;
            var customUploadVideo = config.customUploadVideo;
            var uploadVideoAccept = config.uploadVideoAccept;
            var resultFiles = [];
            var errInfos = [];
            util_1.arrForEach(files, function(file) {
              var name = file.name;
              var size = file.size / 1024 / 1024;
              if (!name || !size) {
                return;
              }
              if (!(uploadVideoAccept instanceof Array)) {
                errInfos.push("\u3010" + uploadVideoAccept + "\u3011" + t("uploadVideoAccept \u4E0D\u662FArray"));
                return;
              }
              if (!(0, _some["default"])(uploadVideoAccept).call(uploadVideoAccept, function(item) {
                return item === name.split(".")[name.split(".").length - 1];
              })) {
                errInfos.push("\u3010" + name + "\u3011" + t("\u4E0D\u662F\u89C6\u9891"));
                return;
              }
              if (uploadVideoMaxSize < size) {
                errInfos.push("\u3010" + name + "\u3011" + t("\u5927\u4E8E") + " " + uploadVideoMaxSize + "M");
                return;
              }
              resultFiles.push(file);
            });
            if (errInfos.length) {
              config.customAlert(t("\u89C6\u9891\u9A8C\u8BC1\u672A\u901A\u8FC7") + ": \n" + errInfos.join("\n"), "warning");
              return;
            }
            if (resultFiles.length === 0) {
              config.customAlert(t("\u4F20\u5165\u7684\u6587\u4EF6\u4E0D\u5408\u6CD5"), "warning");
              return;
            }
            if (customUploadVideo && typeof customUploadVideo === "function") {
              var _context;
              customUploadVideo(resultFiles, (0, _bind["default"])(_context = this.insertVideo).call(_context, this));
              return;
            }
            var formData = new FormData();
            (0, _forEach["default"])(resultFiles).call(resultFiles, function(file, index2) {
              var name = uploadVideoName || file.name;
              if (resultFiles.length > 1) {
                name = name + (index2 + 1);
              }
              formData.append(name, file);
            });
            if (uploadVideoServer) {
              var uploadVideoServerArr = uploadVideoServer.split("#");
              uploadVideoServer = uploadVideoServerArr[0];
              var uploadVideoServerHash = uploadVideoServerArr[1] || "";
              (0, _forEach["default"])(util_1).call(util_1, uploadVideoParams, function(key, val) {
                if (uploadVideoParamsWithUrl) {
                  if ((0, _indexOf["default"])(uploadVideoServer).call(uploadVideoServer, "?") > 0) {
                    uploadVideoServer += "&";
                  } else {
                    uploadVideoServer += "?";
                  }
                  uploadVideoServer = uploadVideoServer + key + "=" + val;
                }
                formData.append(key, val);
              });
              if (uploadVideoServerHash) {
                uploadVideoServer += "#" + uploadVideoServerHash;
              }
              var xhr = upload_core_1["default"](uploadVideoServer, {
                timeout: uploadVideoTimeout,
                formData,
                headers: uploadVideoHeaders,
                withCredentials: !!withVideoCredentials,
                beforeSend: function beforeSend(xhr2) {
                  if (uploadVideoHooks.before)
                    return uploadVideoHooks.before(xhr2, editor, resultFiles);
                },
                onTimeout: function onTimeout(xhr2) {
                  config.customAlert(t("\u4E0A\u4F20\u89C6\u9891\u8D85\u65F6"), "error");
                  if (uploadVideoHooks.timeout)
                    uploadVideoHooks.timeout(xhr2, editor);
                },
                onProgress: function onProgress(percent, e) {
                  var progressBar = new progress_1["default"](editor);
                  if (e.lengthComputable) {
                    percent = e.loaded / e.total;
                    progressBar.show(percent);
                  }
                },
                onError: function onError(xhr2) {
                  config.customAlert(t("\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF"), "error", t("\u4E0A\u4F20\u89C6\u9891\u9519\u8BEF") + "\uFF0C" + t("\u670D\u52A1\u5668\u8FD4\u56DE\u72B6\u6001") + ": " + xhr2.status);
                  if (uploadVideoHooks.error)
                    uploadVideoHooks.error(xhr2, editor);
                },
                onFail: function onFail(xhr2, resultStr) {
                  config.customAlert(t("\u4E0A\u4F20\u89C6\u9891\u5931\u8D25"), "error", t("\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + ("\uFF0C" + t("\u8FD4\u56DE\u7ED3\u679C") + ": ") + resultStr);
                  if (uploadVideoHooks.fail)
                    uploadVideoHooks.fail(xhr2, editor, resultStr);
                },
                onSuccess: function onSuccess(xhr2, result) {
                  if (uploadVideoHooks.customInsert) {
                    var _context2;
                    uploadVideoHooks.customInsert((0, _bind["default"])(_context2 = _this.insertVideo).call(_context2, _this), result, editor);
                    return;
                  }
                  if (result.errno != "0") {
                    config.customAlert(t("\u4E0A\u4F20\u89C6\u9891\u5931\u8D25"), "error", t("\u4E0A\u4F20\u89C6\u9891\u8FD4\u56DE\u7ED3\u679C\u9519\u8BEF") + "\uFF0C" + t("\u8FD4\u56DE\u7ED3\u679C") + " errno=" + result.errno);
                    if (uploadVideoHooks.fail)
                      uploadVideoHooks.fail(xhr2, editor, result);
                    return;
                  }
                  var data = result.data;
                  _this.insertVideo(data.url);
                  if (uploadVideoHooks.success)
                    uploadVideoHooks.success(xhr2, editor, result);
                }
              });
              if (typeof xhr === "string") {
                config.customAlert(xhr, "error");
              }
            }
          };
          UploadVideo2.prototype.insertVideo = function(url) {
            var editor = this.editor;
            var config = editor.config;
            var i18nPrefix = "validate.";
            var t = function t2(text, prefix) {
              if (prefix === void 0) {
                prefix = i18nPrefix;
              }
              return editor.i18next.t(prefix + text);
            };
            if (!config.customInsertVideo) {
              if (util_2.UA.isFirefox) {
                editor.cmd["do"]("insertHTML", '<p data-we-video-p="true"><video src="' + url + '" controls="controls" style="max-width:100%"></video></p><p>&#8203</p>');
              } else {
                editor.cmd["do"]("insertHTML", '<video src="' + url + '" controls="controls" style="max-width:100%"></video>' + const_1.EMPTY_P);
              }
            } else {
              config.customInsertVideo(url);
              return;
            }
            var video = document.createElement("video");
            video.onload = function() {
              video = null;
            };
            video.onerror = function() {
              config.customAlert(t("\u63D2\u5165\u89C6\u9891\u9519\u8BEF"), "error", "wangEditor: " + t("\u63D2\u5165\u89C6\u9891\u9519\u8BEF") + "\uFF0C" + t("\u89C6\u9891\u94FE\u63A5") + ' "' + url + '"\uFF0C' + t("\u4E0B\u8F7D\u94FE\u63A5\u5931\u8D25"));
              video = null;
            };
            video.onabort = function() {
              return video = null;
            };
            video.src = url;
          };
          return UploadVideo2;
        }();
        exports2["default"] = UploadVideo;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(343);
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(344);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(345);
        var path = __webpack_require__(9);
        module2.exports = path.Date.now;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        $({ target: "Date", stat: true }, {
          now: function now() {
            return new Date().getTime();
          }
        });
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var tooltip_event_1 = tslib_1.__importDefault(__webpack_require__(347));
        var keyboard_1 = tslib_1.__importDefault(__webpack_require__(349));
        function bindEvent(editor) {
          tooltip_event_1["default"](editor);
          keyboard_1["default"](editor);
        }
        exports2["default"] = bindEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.createShowHideFn = void 0;
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var Tooltip_1 = tslib_1.__importDefault(__webpack_require__(38));
        var video_alignment_1 = tslib_1.__importDefault(__webpack_require__(348));
        function createShowHideFn(editor) {
          var tooltip;
          var t = function t2(text, prefix) {
            if (prefix === void 0) {
              prefix = "";
            }
            return editor.i18next.t(prefix + text);
          };
          function showVideoTooltip($node) {
            var conf = [{
              $elem: dom_core_1["default"]("<span class='w-e-icon-trash-o'></span>"),
              onClick: function onClick(editor2, $node2) {
                $node2.remove();
                return true;
              }
            }, {
              $elem: dom_core_1["default"]("<span>100%</span>"),
              onClick: function onClick(editor2, $node2) {
                $node2.attr("width", "100%");
                $node2.removeAttr("height");
                return true;
              }
            }, {
              $elem: dom_core_1["default"]("<span>50%</span>"),
              onClick: function onClick(editor2, $node2) {
                $node2.attr("width", "50%");
                $node2.removeAttr("height");
                return true;
              }
            }, {
              $elem: dom_core_1["default"]("<span>30%</span>"),
              onClick: function onClick(editor2, $node2) {
                $node2.attr("width", "30%");
                $node2.removeAttr("height");
                return true;
              }
            }, {
              $elem: dom_core_1["default"]("<span>" + t("\u91CD\u7F6E") + "</span>"),
              onClick: function onClick(editor2, $node2) {
                $node2.removeAttr("width");
                $node2.removeAttr("height");
                return true;
              }
            }, {
              $elem: dom_core_1["default"]("<span>" + t("menus.justify.\u9760\u5DE6") + "</span>"),
              onClick: function onClick(editor2, $node2) {
                video_alignment_1["default"]($node2, "left");
                return true;
              }
            }, {
              $elem: dom_core_1["default"]("<span>" + t("menus.justify.\u5C45\u4E2D") + "</span>"),
              onClick: function onClick(editor2, $node2) {
                video_alignment_1["default"]($node2, "center");
                return true;
              }
            }, {
              $elem: dom_core_1["default"]("<span>" + t("menus.justify.\u9760\u53F3") + "</span>"),
              onClick: function onClick(editor2, $node2) {
                video_alignment_1["default"]($node2, "right");
                return true;
              }
            }];
            tooltip = new Tooltip_1["default"](editor, $node, conf);
            tooltip.create();
          }
          function hideVideoTooltip() {
            if (tooltip) {
              tooltip.remove();
              tooltip = null;
            }
          }
          return {
            showVideoTooltip,
            hideVideoTooltip
          };
        }
        exports2.createShowHideFn = createShowHideFn;
        function bindTooltipEvent(editor) {
          var _a = createShowHideFn(editor), showVideoTooltip = _a.showVideoTooltip, hideVideoTooltip = _a.hideVideoTooltip;
          editor.txt.eventHooks.videoClickEvents.push(showVideoTooltip);
          editor.txt.eventHooks.clickEvents.push(hideVideoTooltip);
          editor.txt.eventHooks.keyupEvents.push(hideVideoTooltip);
          editor.txt.eventHooks.toolbarClickEvents.push(hideVideoTooltip);
          editor.txt.eventHooks.menuClickEvents.push(hideVideoTooltip);
          editor.txt.eventHooks.textScrollEvents.push(hideVideoTooltip);
          editor.txt.eventHooks.changeEvents.push(hideVideoTooltip);
        }
        exports2["default"] = bindTooltipEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _includes = _interopRequireDefault(__webpack_require__(44));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        function setAlignment($node, value) {
          var NODENAME = ["P"];
          var topNode = getSelectedTopNode($node, NODENAME);
          if (topNode) {
            dom_core_1["default"](topNode).css("text-align", value);
          }
        }
        exports2["default"] = setAlignment;
        function getSelectedTopNode(el, tag) {
          var _a;
          var parentNode = el.elems[0];
          while (parentNode != null) {
            if ((0, _includes["default"])(tag).call(tag, parentNode === null || parentNode === void 0 ? void 0 : parentNode.nodeName)) {
              return parentNode;
            }
            if (((_a = parentNode === null || parentNode === void 0 ? void 0 : parentNode.parentNode) === null || _a === void 0 ? void 0 : _a.nodeName) === "BODY") {
              return null;
            }
            parentNode = parentNode.parentNode;
          }
          return parentNode;
        }
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var util_1 = __webpack_require__(6);
        function bindEventKeyboardEvent(editor) {
          if (!util_1.UA.isFirefox)
            return;
          var txt = editor.txt, selection = editor.selection;
          var keydownEvents = txt.eventHooks.keydownEvents;
          keydownEvents.push(function(e) {
            var $selectionContainerElem = selection.getSelectionContainerElem();
            if ($selectionContainerElem) {
              var $topElem = $selectionContainerElem.getNodeTop(editor);
              var $preElem = $topElem.length ? $topElem.prev().length ? $topElem.prev() : null : null;
              if ($preElem && $preElem.attr("data-we-video-p")) {
                if (selection.getCursorPos() === 0) {
                  if (e.keyCode === 8) {
                    $preElem.remove();
                  }
                }
              }
            }
          });
        }
        exports2["default"] = bindEventKeyboardEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _map = _interopRequireDefault(__webpack_require__(26));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var const_1 = __webpack_require__(7);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var Panel_1 = tslib_1.__importDefault(__webpack_require__(32));
        var PanelMenu_1 = tslib_1.__importDefault(__webpack_require__(37));
        var index_1 = tslib_1.__importDefault(__webpack_require__(351));
        var create_panel_conf_1 = tslib_1.__importDefault(__webpack_require__(364));
        var Image = function(_super) {
          tslib_1.__extends(Image2, _super);
          function Image2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u56FE\u7247"><i class="w-e-icon-image"></i></div>');
            var imgPanelConfig = create_panel_conf_1["default"](editor);
            if (imgPanelConfig.onlyUploadConf) {
              var _context;
              $elem = imgPanelConfig.onlyUploadConf.$elem;
              (0, _map["default"])(_context = imgPanelConfig.onlyUploadConf.events).call(_context, function(event) {
                var type = event.type;
                var fn = event.fn || const_1.EMPTY_FN;
                $elem.on(type, function(e) {
                  e.stopPropagation();
                  fn(e);
                });
              });
            }
            _this = _super.call(this, $elem, editor) || this;
            _this.imgPanelConfig = imgPanelConfig;
            index_1["default"](editor);
            return _this;
          }
          Image2.prototype.clickHandler = function() {
            if (!this.imgPanelConfig.onlyUploadConf) {
              this.createPanel();
            }
          };
          Image2.prototype.createPanel = function() {
            var conf = this.imgPanelConfig;
            var panel = new Panel_1["default"](this, conf);
            this.setPanel(panel);
            panel.create();
          };
          Image2.prototype.tryChangeActive = function() {
          };
          return Image2;
        }(PanelMenu_1["default"]);
        exports2["default"] = Image;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var paste_img_1 = tslib_1.__importDefault(__webpack_require__(352));
        var drop_img_1 = tslib_1.__importDefault(__webpack_require__(353));
        var drag_size_1 = tslib_1.__importDefault(__webpack_require__(354));
        var tooltip_event_1 = tslib_1.__importDefault(__webpack_require__(362));
        var keyboard_event_1 = tslib_1.__importDefault(__webpack_require__(363));
        function bindEvent(editor) {
          paste_img_1["default"](editor);
          drop_img_1["default"](editor);
          drag_size_1["default"](editor);
          tooltip_event_1["default"](editor);
          keyboard_event_1["default"](editor);
        }
        exports2["default"] = bindEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var paste_event_1 = __webpack_require__(130);
        var upload_img_1 = tslib_1.__importDefault(__webpack_require__(96));
        function _haveTextOrHtml(editor, e) {
          var config = editor.config;
          var pasteFilterStyle = config.pasteFilterStyle;
          var pasteIgnoreImg = config.pasteIgnoreImg;
          var pasteHtml = paste_event_1.getPasteHtml(e, pasteFilterStyle, pasteIgnoreImg);
          if (pasteHtml)
            return true;
          var pasteText = paste_event_1.getPasteText(e);
          if (pasteText)
            return true;
          return false;
        }
        function _haveFiles(editor, e) {
          var _a;
          var types = ((_a = e.clipboardData) === null || _a === void 0 ? void 0 : _a.types) || [];
          for (var i = 0; i < types.length; i++) {
            var type = types[i];
            if (type === "Files") {
              return true;
            }
          }
          return false;
        }
        function pasteImgHandler(e, editor) {
          if (!_haveFiles(editor, e)) {
            if (_haveTextOrHtml(editor, e)) {
              return;
            }
          }
          var pastedFiles = paste_event_1.getPasteImgs(e);
          if (!pastedFiles.length) {
            return;
          }
          var uploadImg = new upload_img_1["default"](editor);
          uploadImg.uploadImg(pastedFiles);
        }
        function bindPasteImg(editor) {
          editor.txt.eventHooks.pasteEvents.unshift(function(e) {
            pasteImgHandler(e, editor);
          });
        }
        exports2["default"] = bindPasteImg;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var upload_img_1 = tslib_1.__importDefault(__webpack_require__(96));
        function bindDropImg(editor) {
          function dropImgHandler(e) {
            var files = e.dataTransfer && e.dataTransfer.files;
            if (!files || !files.length) {
              return;
            }
            var uploadImg = new upload_img_1["default"](editor);
            uploadImg.uploadImg(files);
          }
          editor.txt.eventHooks.dropEvents.push(dropImgHandler);
        }
        exports2["default"] = bindDropImg;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _find = _interopRequireDefault(__webpack_require__(31));
        var _parseFloat2 = _interopRequireDefault(__webpack_require__(355));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.createShowHideFn = void 0;
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        __webpack_require__(360);
        var util_1 = __webpack_require__(6);
        function setDragStyle($drag, width, height, left, top) {
          $drag.attr("style", "width:" + width + "px; height:" + height + "px; left:" + left + "px; top:" + top + "px;");
        }
        function createDragBox(editor, $textContainerElem) {
          var $drag = dom_core_1["default"]('<div class="w-e-img-drag-mask">\n            <div class="w-e-img-drag-show-size"></div>\n            <div class="w-e-img-drag-rb"></div>\n         </div>');
          $drag.hide();
          $textContainerElem.append($drag);
          return $drag;
        }
        function showDargBox($textContainerElem, $drag, $img) {
          var boxRect = $textContainerElem.getBoundingClientRect();
          var rect = $img.getBoundingClientRect();
          var rectW = rect.width.toFixed(2);
          var rectH = rect.height.toFixed(2);
          (0, _find["default"])($drag).call($drag, ".w-e-img-drag-show-size").text(rectW + "px * " + rectH + "px");
          setDragStyle($drag, (0, _parseFloat2["default"])(rectW), (0, _parseFloat2["default"])(rectH), rect.left - boxRect.left, rect.top - boxRect.top);
          $drag.show();
        }
        function createShowHideFn(editor) {
          var $textContainerElem = editor.$textContainerElem;
          var $imgTarget;
          var $drag = createDragBox(editor, $textContainerElem);
          function bindDragEvents($drag2, $container) {
            $drag2.on("click", function(e) {
              e.stopPropagation();
            });
            $drag2.on("mousedown", ".w-e-img-drag-rb", function(e) {
              e.preventDefault();
              if (!$imgTarget)
                return;
              var firstX = e.clientX;
              var firstY = e.clientY;
              var boxRect = $container.getBoundingClientRect();
              var imgRect = $imgTarget.getBoundingClientRect();
              var width = imgRect.width;
              var height = imgRect.height;
              var left = imgRect.left - boxRect.left;
              var top = imgRect.top - boxRect.top;
              var ratio = width / height;
              var setW = width;
              var setH = height;
              var $document = dom_core_1["default"](document);
              function offEvents() {
                $document.off("mousemove", mouseMoveHandler);
                $document.off("mouseup", mouseUpHandler);
              }
              function mouseMoveHandler(ev) {
                ev.stopPropagation();
                ev.preventDefault();
                setW = width + (ev.clientX - firstX);
                setH = height + (ev.clientY - firstY);
                if (setW / setH != ratio) {
                  setH = setW / ratio;
                }
                setW = (0, _parseFloat2["default"])(setW.toFixed(2));
                setH = (0, _parseFloat2["default"])(setH.toFixed(2));
                (0, _find["default"])($drag2).call($drag2, ".w-e-img-drag-show-size").text(setW.toFixed(2).replace(".00", "") + "px * " + setH.toFixed(2).replace(".00", "") + "px");
                setDragStyle($drag2, setW, setH, left, top);
              }
              $document.on("mousemove", mouseMoveHandler);
              function mouseUpHandler() {
                $imgTarget.attr("width", setW + "");
                $imgTarget.attr("height", setH + "");
                var newImgRect = $imgTarget.getBoundingClientRect();
                setDragStyle($drag2, setW, setH, newImgRect.left - boxRect.left, newImgRect.top - boxRect.top);
                offEvents();
              }
              $document.on("mouseup", mouseUpHandler);
              $document.on("mouseleave", offEvents);
            });
          }
          function showDrag($target) {
            if (util_1.UA.isIE())
              return false;
            if ($target) {
              $imgTarget = $target;
              showDargBox($textContainerElem, $drag, $imgTarget);
            }
          }
          function hideDrag() {
            (0, _find["default"])($textContainerElem).call($textContainerElem, ".w-e-img-drag-mask").hide();
          }
          bindDragEvents($drag, $textContainerElem);
          dom_core_1["default"](document).on("click", hideDrag);
          editor.beforeDestroy(function() {
            dom_core_1["default"](document).off("click", hideDrag);
          });
          return {
            showDrag,
            hideDrag
          };
        }
        exports2.createShowHideFn = createShowHideFn;
        function bindDragImgSize(editor) {
          var _a = createShowHideFn(editor), showDrag = _a.showDrag, hideDrag = _a.hideDrag;
          editor.txt.eventHooks.imgClickEvents.push(showDrag);
          editor.txt.eventHooks.textScrollEvents.push(hideDrag);
          editor.txt.eventHooks.keyupEvents.push(hideDrag);
          editor.txt.eventHooks.toolbarClickEvents.push(hideDrag);
          editor.txt.eventHooks.menuClickEvents.push(hideDrag);
          editor.txt.eventHooks.changeEvents.push(hideDrag);
        }
        exports2["default"] = bindDragImgSize;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(356);
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(357);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(358);
        var path = __webpack_require__(9);
        module2.exports = path.parseFloat;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var parseFloatImplementation = __webpack_require__(359);
        $({ global: true, forced: parseFloat != parseFloatImplementation }, {
          parseFloat: parseFloatImplementation
        });
      },
      function(module2, exports2, __webpack_require__) {
        var global2 = __webpack_require__(8);
        var trim = __webpack_require__(90).trim;
        var whitespaces = __webpack_require__(68);
        var $parseFloat = global2.parseFloat;
        var FORCED = 1 / $parseFloat(whitespaces + "-0") !== -Infinity;
        module2.exports = FORCED ? function parseFloat2(string) {
          var trimmedString = trim(String(string));
          var result = $parseFloat(trimmedString);
          return result === 0 && trimmedString.charAt(0) == "-" ? -0 : result;
        } : $parseFloat;
      },
      function(module2, exports2, __webpack_require__) {
        var api = __webpack_require__(20);
        var content = __webpack_require__(361);
        content = content.__esModule ? content.default : content;
        if (typeof content === "string") {
          content = [[module2.i, content, ""]];
        }
        var options = {};
        options.insert = "head";
        options.singleton = false;
        api(content, options);
        module2.exports = content.locals || {};
      },
      function(module2, exports2, __webpack_require__) {
        var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
        exports2 = ___CSS_LOADER_API_IMPORT___(false);
        exports2.push([module2.i, ".w-e-text-container {\n  overflow: hidden;\n}\n.w-e-img-drag-mask {\n  position: absolute;\n  z-index: 1;\n  border: 1px dashed #ccc;\n  box-sizing: border-box;\n}\n.w-e-img-drag-mask .w-e-img-drag-rb {\n  position: absolute;\n  right: -5px;\n  bottom: -5px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #ccc;\n  cursor: se-resize;\n}\n.w-e-img-drag-mask .w-e-img-drag-show-size {\n  min-width: 110px;\n  height: 22px;\n  line-height: 22px;\n  font-size: 14px;\n  color: #999;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: #999;\n  color: #fff;\n  border-radius: 2px;\n  padding: 0 5px;\n}\n", ""]);
        module2.exports = exports2;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.createShowHideFn = void 0;
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var Tooltip_1 = tslib_1.__importDefault(__webpack_require__(38));
        function createShowHideFn(editor) {
          var tooltip;
          var t = function t2(text, prefix) {
            if (prefix === void 0) {
              prefix = "";
            }
            return editor.i18next.t(prefix + text);
          };
          function showImgTooltip($node) {
            var conf = [{
              $elem: dom_core_1["default"]("<span class='w-e-icon-trash-o'></span>"),
              onClick: function onClick(editor2, $node2) {
                editor2.selection.createRangeByElem($node2);
                editor2.selection.restoreSelection();
                editor2.cmd["do"]("delete");
                return true;
              }
            }, {
              $elem: dom_core_1["default"]("<span>30%</span>"),
              onClick: function onClick(editor2, $node2) {
                $node2.attr("width", "30%");
                $node2.removeAttr("height");
                return true;
              }
            }, {
              $elem: dom_core_1["default"]("<span>50%</span>"),
              onClick: function onClick(editor2, $node2) {
                $node2.attr("width", "50%");
                $node2.removeAttr("height");
                return true;
              }
            }, {
              $elem: dom_core_1["default"]("<span>100%</span>"),
              onClick: function onClick(editor2, $node2) {
                $node2.attr("width", "100%");
                $node2.removeAttr("height");
                return true;
              }
            }];
            conf.push({
              $elem: dom_core_1["default"]("<span>" + t("\u91CD\u7F6E") + "</span>"),
              onClick: function onClick(editor2, $node2) {
                $node2.removeAttr("width");
                $node2.removeAttr("height");
                return true;
              }
            });
            if ($node.attr("data-href")) {
              conf.push({
                $elem: dom_core_1["default"]("<span>" + t("\u67E5\u770B\u94FE\u63A5") + "</span>"),
                onClick: function onClick(editor2, $node2) {
                  var link = $node2.attr("data-href");
                  if (link) {
                    link = decodeURIComponent(link);
                    window.open(link, "_target");
                  }
                  return true;
                }
              });
            }
            tooltip = new Tooltip_1["default"](editor, $node, conf);
            tooltip.create();
          }
          function hideImgTooltip() {
            if (tooltip) {
              tooltip.remove();
              tooltip = null;
            }
          }
          return {
            showImgTooltip,
            hideImgTooltip
          };
        }
        exports2.createShowHideFn = createShowHideFn;
        function bindTooltipEvent(editor) {
          var _a = createShowHideFn(editor), showImgTooltip = _a.showImgTooltip, hideImgTooltip = _a.hideImgTooltip;
          editor.txt.eventHooks.imgClickEvents.push(showImgTooltip);
          editor.txt.eventHooks.clickEvents.push(hideImgTooltip);
          editor.txt.eventHooks.keyupEvents.push(hideImgTooltip);
          editor.txt.eventHooks.toolbarClickEvents.push(hideImgTooltip);
          editor.txt.eventHooks.menuClickEvents.push(hideImgTooltip);
          editor.txt.eventHooks.textScrollEvents.push(hideImgTooltip);
          editor.txt.eventHooks.imgDragBarMouseDownEvents.push(hideImgTooltip);
          editor.txt.eventHooks.changeEvents.push(hideImgTooltip);
        }
        exports2["default"] = bindTooltipEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        function bindEventKeyboardEvent(editor) {
          var txt = editor.txt, selection = editor.selection;
          var keydownEvents = txt.eventHooks.keydownEvents;
          keydownEvents.push(function(e) {
            var $selectionContainerElem = selection.getSelectionContainerElem();
            var range = selection.getRange();
            if (!range || !$selectionContainerElem || e.keyCode !== 8 || !selection.isSelectionEmpty()) {
              return;
            }
            var startContainer = range.startContainer, startOffset = range.startOffset;
            var prevNode = null;
            if (startOffset === 0) {
              while (startContainer !== $selectionContainerElem.elems[0] && $selectionContainerElem.elems[0].contains(startContainer) && startContainer.parentNode && !prevNode) {
                if (startContainer.previousSibling) {
                  prevNode = startContainer.previousSibling;
                  break;
                }
                startContainer = startContainer.parentNode;
              }
            } else if (startContainer.nodeType !== 3) {
              prevNode = startContainer.childNodes[startOffset - 1];
            }
            if (!prevNode) {
              return;
            }
            var lastChildNodeInPrevNode = prevNode;
            while (lastChildNodeInPrevNode.childNodes.length) {
              lastChildNodeInPrevNode = lastChildNodeInPrevNode.childNodes[lastChildNodeInPrevNode.childNodes.length - 1];
            }
            if (lastChildNodeInPrevNode instanceof HTMLElement && lastChildNodeInPrevNode.tagName === "IMG") {
              lastChildNodeInPrevNode.remove();
              e.preventDefault();
            }
          });
        }
        exports2["default"] = bindEventKeyboardEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _map = _interopRequireDefault(__webpack_require__(26));
        var _trim = _interopRequireDefault(__webpack_require__(17));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var util_1 = __webpack_require__(6);
        var upload_img_1 = tslib_1.__importDefault(__webpack_require__(96));
        function default_1(editor) {
          var _context;
          var config = editor.config;
          var uploadImg = new upload_img_1["default"](editor);
          var upTriggerId = util_1.getRandom("up-trigger-id");
          var upFileId = util_1.getRandom("up-file-id");
          var linkUrlId = util_1.getRandom("input-link-url");
          var linkUrlAltId = util_1.getRandom("input-link-url-alt");
          var linkUrlHrefId = util_1.getRandom("input-link-url-href");
          var linkBtnId = util_1.getRandom("btn-link");
          var i18nPrefix = "menus.panelMenus.image.";
          var t = function t2(text, prefix) {
            if (prefix === void 0) {
              prefix = i18nPrefix;
            }
            return editor.i18next.t(prefix + text);
          };
          function checkLinkImg(src, linkUrlAltText, linkUrlHrefText) {
            var check = config.linkImgCheck(src);
            if (check === true) {
              return true;
            } else if (typeof check === "string") {
              config.customAlert(check, "error");
            }
            return false;
          }
          var fileMultipleAttr = config.uploadImgMaxLength === 1 ? "" : 'multiple="multiple"';
          var accepts = (0, _map["default"])(_context = config.uploadImgAccept).call(_context, function(item) {
            return "image/" + item;
          }).join(",");
          var getUploadImgTpl = function getUploadImgTpl2(containerClass, iconClass, titleName) {
            return '<div class="' + containerClass + '" data-title="' + titleName + '">\n            <div id="' + upTriggerId + '" class="w-e-up-btn">\n                <i class="' + iconClass + '"></i>\n            </div>\n            <div style="display:none;">\n                <input id="' + upFileId + '" type="file" ' + fileMultipleAttr + ' accept="' + accepts + '"/>\n            </div>\n        </div>';
          };
          var uploadEvents = [
            {
              selector: "#" + upTriggerId,
              type: "click",
              fn: function fn() {
                var uploadImgFromMedia = config.uploadImgFromMedia;
                if (uploadImgFromMedia && typeof uploadImgFromMedia === "function") {
                  uploadImgFromMedia();
                  return true;
                }
                var $file = dom_core_1["default"]("#" + upFileId);
                var fileElem = $file.elems[0];
                if (fileElem) {
                  fileElem.click();
                } else {
                  return true;
                }
              }
            },
            {
              selector: "#" + upFileId,
              type: "change",
              fn: function fn() {
                var $file = dom_core_1["default"]("#" + upFileId);
                var fileElem = $file.elems[0];
                if (!fileElem) {
                  return true;
                }
                var fileList = fileElem.files;
                if (fileList === null || fileList === void 0 ? void 0 : fileList.length) {
                  uploadImg.uploadImg(fileList);
                }
                if (fileElem) {
                  fileElem.value = "";
                }
                return true;
              }
            }
          ];
          var linkImgInputs = ['<input\n            id="' + linkUrlId + '"\n            type="text"\n            class="block"\n            placeholder="' + t("\u56FE\u7247\u5730\u5740") + '"/>'];
          if (config.showLinkImgAlt) {
            linkImgInputs.push('\n        <input\n            id="' + linkUrlAltId + '"\n            type="text"\n            class="block"\n            placeholder="' + t("\u56FE\u7247\u6587\u5B57\u8BF4\u660E") + '"/>');
          }
          if (config.showLinkImgHref) {
            linkImgInputs.push('\n        <input\n            id="' + linkUrlHrefId + '"\n            type="text"\n            class="block"\n            placeholder="' + t("\u8DF3\u8F6C\u94FE\u63A5") + '"/>');
          }
          var tabsConf = [
            {
              title: t("\u4E0A\u4F20\u56FE\u7247"),
              tpl: getUploadImgTpl("w-e-up-img-container", "w-e-icon-upload2", ""),
              events: uploadEvents
            },
            {
              title: t("\u7F51\u7EDC\u56FE\u7247"),
              tpl: "<div>\n                    " + linkImgInputs.join("") + '\n                    <div class="w-e-button-container">\n                        <button type="button" id="' + linkBtnId + '" class="right">' + t("\u63D2\u5165", "") + "</button>\n                    </div>\n                </div>",
              events: [{
                selector: "#" + linkBtnId,
                type: "click",
                fn: function fn() {
                  var _context2;
                  var $linkUrl = dom_core_1["default"]("#" + linkUrlId);
                  var url = (0, _trim["default"])(_context2 = $linkUrl.val()).call(_context2);
                  if (!url)
                    return;
                  var linkUrlAltText;
                  if (config.showLinkImgAlt) {
                    var _context3;
                    linkUrlAltText = (0, _trim["default"])(_context3 = dom_core_1["default"]("#" + linkUrlAltId).val()).call(_context3);
                  }
                  var linkUrlHrefText;
                  if (config.showLinkImgHref) {
                    var _context4;
                    linkUrlHrefText = (0, _trim["default"])(_context4 = dom_core_1["default"]("#" + linkUrlHrefId).val()).call(_context4);
                  }
                  if (!checkLinkImg(url))
                    return;
                  uploadImg.insertImg(url, linkUrlAltText, linkUrlHrefText);
                  return true;
                },
                bindEnter: true
              }]
            }
          ];
          var conf = {
            width: 300,
            height: 0,
            tabs: [],
            onlyUploadConf: {
              $elem: dom_core_1["default"](getUploadImgTpl("w-e-menu", "w-e-icon-image", "\u56FE\u7247")),
              events: uploadEvents
            }
          };
          if (window.FileReader && (config.uploadImgShowBase64 || config.uploadImgServer || config.customUploadImg || config.uploadImgFromMedia)) {
            conf.tabs.push(tabsConf[0]);
          }
          if (config.showLinkImg) {
            conf.tabs.push(tabsConf[1]);
            conf.onlyUploadConf = void 0;
          }
          return conf;
        }
        exports2["default"] = default_1;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var DropListMenu_1 = tslib_1.__importDefault(__webpack_require__(24));
        var operate_element_1 = tslib_1.__importDefault(__webpack_require__(366));
        var Indent = function(_super) {
          tslib_1.__extends(Indent2, _super);
          function Indent2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u7F29\u8FDB">\n                <i class="w-e-icon-indent-increase"></i>\n            </div>');
            var dropListConf = {
              width: 130,
              title: "\u8BBE\u7F6E\u7F29\u8FDB",
              type: "list",
              list: [{
                $elem: dom_core_1["default"]('<p>\n                            <i class="w-e-icon-indent-increase w-e-drop-list-item"></i>\n                            ' + editor.i18next.t("menus.dropListMenu.indent.\u589E\u52A0\u7F29\u8FDB") + "\n                        <p>"),
                value: "increase"
              }, {
                $elem: dom_core_1["default"]('<p>\n                            <i class="w-e-icon-indent-decrease w-e-drop-list-item"></i>\n                            ' + editor.i18next.t("menus.dropListMenu.indent.\u51CF\u5C11\u7F29\u8FDB") + "\n                        <p>"),
                value: "decrease"
              }],
              clickHandler: function clickHandler(value) {
                _this.command(value);
              }
            };
            _this = _super.call(this, $elem, editor, dropListConf) || this;
            return _this;
          }
          Indent2.prototype.command = function(value) {
            var editor = this.editor;
            var $selectionElem = editor.selection.getSelectionContainerElem();
            if ($selectionElem && editor.$textElem.equal($selectionElem)) {
              var $elems = editor.selection.getSelectionRangeTopNodes();
              if ($elems.length > 0) {
                (0, _forEach["default"])($elems).call($elems, function(item) {
                  operate_element_1["default"](dom_core_1["default"](item), value, editor);
                });
              }
            } else {
              if ($selectionElem && $selectionElem.length > 0) {
                (0, _forEach["default"])($selectionElem).call($selectionElem, function(item) {
                  operate_element_1["default"](dom_core_1["default"](item), value, editor);
                });
              }
            }
            editor.selection.restoreSelection();
            this.tryChangeActive();
          };
          Indent2.prototype.tryChangeActive = function() {
            var editor = this.editor;
            var $selectionElem = editor.selection.getSelectionStartElem();
            var $selectionStartElem = dom_core_1["default"]($selectionElem).getNodeTop(editor);
            if ($selectionStartElem.length <= 0)
              return;
            if ($selectionStartElem.elems[0].style["paddingLeft"] != "") {
              this.active();
            } else {
              this.unActive();
            }
          };
          return Indent2;
        }(DropListMenu_1["default"]);
        exports2["default"] = Indent;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _slice = _interopRequireDefault(__webpack_require__(45));
        var _trim = _interopRequireDefault(__webpack_require__(17));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var increase_indent_style_1 = tslib_1.__importDefault(__webpack_require__(367));
        var decrease_indent_style_1 = tslib_1.__importDefault(__webpack_require__(368));
        var lengthRegex = /^(\d+)(\w+)$/;
        var percentRegex = /^(\d+)%$/;
        function parseIndentation(editor) {
          var indentation = editor.config.indentation;
          if (typeof indentation === "string") {
            if (lengthRegex.test(indentation)) {
              var _context;
              var _a = (0, _slice["default"])(_context = (0, _trim["default"])(indentation).call(indentation).match(lengthRegex)).call(_context, 1, 3), value = _a[0], unit = _a[1];
              return {
                value: Number(value),
                unit
              };
            } else if (percentRegex.test(indentation)) {
              return {
                value: Number((0, _trim["default"])(indentation).call(indentation).match(percentRegex)[1]),
                unit: "%"
              };
            }
          } else if (indentation.value !== void 0 && indentation.unit) {
            return indentation;
          }
          return {
            value: 2,
            unit: "em"
          };
        }
        function operateElement($node, type, editor) {
          var $elem = $node.getNodeTop(editor);
          var reg = /^(P|H[0-9]*)$/;
          if (reg.test($elem.getNodeName())) {
            if (type === "increase")
              increase_indent_style_1["default"]($elem, parseIndentation(editor));
            else if (type === "decrease")
              decrease_indent_style_1["default"]($elem, parseIndentation(editor));
          }
        }
        exports2["default"] = operateElement;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _slice = _interopRequireDefault(__webpack_require__(45));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        function increaseIndentStyle($node, options) {
          var $elem = $node.elems[0];
          if ($elem.style["paddingLeft"] === "") {
            $node.css("padding-left", options.value + options.unit);
          } else {
            var oldPL = $elem.style["paddingLeft"];
            var oldVal = (0, _slice["default"])(oldPL).call(oldPL, 0, oldPL.length - options.unit.length);
            var newVal = Number(oldVal) + options.value;
            $node.css("padding-left", "" + newVal + options.unit);
          }
        }
        exports2["default"] = increaseIndentStyle;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _slice = _interopRequireDefault(__webpack_require__(45));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        function decreaseIndentStyle($node, options) {
          var $elem = $node.elems[0];
          if ($elem.style["paddingLeft"] !== "") {
            var oldPL = $elem.style["paddingLeft"];
            var oldVal = (0, _slice["default"])(oldPL).call(oldPL, 0, oldPL.length - options.unit.length);
            var newVal = Number(oldVal) - options.value;
            if (newVal > 0) {
              $node.css("padding-left", "" + newVal + options.unit);
            } else {
              $node.css("padding-left", "");
            }
          }
        }
        exports2["default"] = decreaseIndentStyle;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var PanelMenu_1 = tslib_1.__importDefault(__webpack_require__(37));
        var Panel_1 = tslib_1.__importDefault(__webpack_require__(32));
        var create_panel_conf_1 = tslib_1.__importDefault(__webpack_require__(370));
        var Emoticon = function(_super) {
          tslib_1.__extends(Emoticon2, _super);
          function Emoticon2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u8868\u60C5">\n                <i class="w-e-icon-happy"></i>\n            </div>');
            _this = _super.call(this, $elem, editor) || this;
            return _this;
          }
          Emoticon2.prototype.createPanel = function() {
            var conf = create_panel_conf_1["default"](this.editor);
            var panel = new Panel_1["default"](this, conf);
            panel.create();
          };
          Emoticon2.prototype.clickHandler = function() {
            this.createPanel();
          };
          Emoticon2.prototype.tryChangeActive = function() {
          };
          return Emoticon2;
        }(PanelMenu_1["default"]);
        exports2["default"] = Emoticon;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _map = _interopRequireDefault(__webpack_require__(26));
        var _filter = _interopRequireDefault(__webpack_require__(70));
        var _trim = _interopRequireDefault(__webpack_require__(17));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        function default_1(editor) {
          var emotions = editor.config.emotions;
          function GenerateExpressionStructure(ele) {
            var res = [];
            if (ele.type == "image") {
              var _context;
              res = (0, _map["default"])(_context = ele.content).call(_context, function(con) {
                if (typeof con == "string")
                  return "";
                return '<span  title="' + con.alt + '">\n                    <img class="eleImg" data-emoji="' + con.alt + '" style src="' + con.src + '" alt="[' + con.alt + ']">\n                </span>';
              });
              res = (0, _filter["default"])(res).call(res, function(s) {
                return s !== "";
              });
            } else {
              var _context2;
              res = (0, _map["default"])(_context2 = ele.content).call(_context2, function(con) {
                return '<span class="eleImg" title="' + con + '">' + con + "</span>";
              });
            }
            return res.join("").replace(/&nbsp;/g, "");
          }
          var tabsConf = (0, _map["default"])(emotions).call(emotions, function(ele) {
            return {
              title: editor.i18next.t("menus.panelMenus.emoticon." + ele.title),
              tpl: "<div>" + GenerateExpressionStructure(ele) + "</div>",
              events: [{
                selector: ".eleImg",
                type: "click",
                fn: function fn(e) {
                  var $target = dom_core_1["default"](e.target);
                  var nodeName = $target.getNodeName();
                  var insertHtml;
                  if (nodeName === "IMG") {
                    var _context3;
                    insertHtml = (0, _trim["default"])(_context3 = $target.parent().html()).call(_context3);
                  } else {
                    insertHtml = "<span>" + $target.html() + "</span>";
                  }
                  editor.cmd["do"]("insertHTML", insertHtml);
                  return true;
                }
              }]
            };
          });
          var conf = {
            width: 300,
            height: 230,
            tabs: tabsConf
          };
          return conf;
        }
        exports2["default"] = default_1;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.createListHandle = exports2.ClassType = void 0;
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var WrapListHandle_1 = tslib_1.__importDefault(__webpack_require__(372));
        var JoinListHandle_1 = tslib_1.__importDefault(__webpack_require__(374));
        var StartJoinListHandle_1 = tslib_1.__importDefault(__webpack_require__(375));
        var EndJoinListHandle_1 = tslib_1.__importDefault(__webpack_require__(376));
        var OtherListHandle_1 = tslib_1.__importDefault(__webpack_require__(377));
        var ClassType;
        (function(ClassType2) {
          ClassType2["Wrap"] = "WrapListHandle";
          ClassType2["Join"] = "JoinListHandle";
          ClassType2["StartJoin"] = "StartJoinListHandle";
          ClassType2["EndJoin"] = "EndJoinListHandle";
          ClassType2["Other"] = "OtherListHandle";
        })(ClassType = exports2.ClassType || (exports2.ClassType = {}));
        var handle = {
          WrapListHandle: WrapListHandle_1["default"],
          JoinListHandle: JoinListHandle_1["default"],
          StartJoinListHandle: StartJoinListHandle_1["default"],
          EndJoinListHandle: EndJoinListHandle_1["default"],
          OtherListHandle: OtherListHandle_1["default"]
        };
        function createListHandle(classType, options, range) {
          if (classType === ClassType.Other && range === void 0) {
            throw new Error("other \u7C7B\u9700\u8981\u4F20\u5165 range");
          }
          return classType !== ClassType.Other ? new handle[classType](options) : new handle[classType](options, range);
        }
        exports2.createListHandle = createListHandle;
        var ListHandleCommand = function() {
          function ListHandleCommand2(handle2) {
            this.handle = handle2;
            this.handle.exec();
          }
          ListHandleCommand2.prototype.getSelectionRangeElem = function() {
            return dom_core_1["default"](this.handle.selectionRangeElem.get());
          };
          return ListHandleCommand2;
        }();
        exports2["default"] = ListHandleCommand;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var ListHandle_1 = __webpack_require__(58);
        var utils_1 = __webpack_require__(47);
        var WrapListHandle = function(_super) {
          tslib_1.__extends(WrapListHandle2, _super);
          function WrapListHandle2(options) {
            return _super.call(this, options) || this;
          }
          WrapListHandle2.prototype.exec = function() {
            var _a = this.options, listType = _a.listType, listTarget = _a.listTarget, $selectionElem = _a.$selectionElem, $startElem = _a.$startElem, $endElem = _a.$endElem;
            var $containerFragment;
            var $nodes = [];
            var containerNodeName = $selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.getNodeName();
            var $start = $startElem.prior;
            var $end = $endElem.prior;
            if (!$startElem.prior && !$endElem.prior || !($start === null || $start === void 0 ? void 0 : $start.prev().length) && !($end === null || $end === void 0 ? void 0 : $end.next().length)) {
              var _context;
              (0, _forEach["default"])(_context = $selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.children()).call(_context, function($node) {
                $nodes.push(dom_core_1["default"]($node));
              });
              if (containerNodeName === listType) {
                $containerFragment = utils_1.createElementFragment($nodes, utils_1.createDocumentFragment(), "p");
              } else {
                $containerFragment = utils_1.createElement(listTarget);
                (0, _forEach["default"])($nodes).call($nodes, function($node) {
                  $containerFragment.appendChild($node.elems[0]);
                });
              }
              this.selectionRangeElem.set($containerFragment);
              utils_1.insertBefore($selectionElem, $containerFragment, $selectionElem.elems[0]);
              $selectionElem.remove();
            } else {
              var $startDom = $start;
              while ($startDom.length) {
                $nodes.push($startDom);
                ($end === null || $end === void 0 ? void 0 : $end.equal($startDom)) ? $startDom = dom_core_1["default"](void 0) : $startDom = $startDom.next();
              }
              var $prveDom = $start.prev();
              var $nextDom = $end.next();
              if (containerNodeName === listType) {
                $containerFragment = utils_1.createElementFragment($nodes, utils_1.createDocumentFragment(), "p");
              } else {
                $containerFragment = utils_1.createElement(listTarget);
                (0, _forEach["default"])($nodes).call($nodes, function($node) {
                  $containerFragment.append($node.elems[0]);
                });
              }
              if ($prveDom.length && $nextDom.length) {
                var $tailDomArr = [];
                while ($nextDom.length) {
                  $tailDomArr.push($nextDom);
                  $nextDom = $nextDom.next();
                }
                var $tailDocFragment_1 = utils_1.createElement(containerNodeName);
                (0, _forEach["default"])($tailDomArr).call($tailDomArr, function($node) {
                  $tailDocFragment_1.append($node.elems[0]);
                });
                dom_core_1["default"]($tailDocFragment_1).insertAfter($selectionElem);
                this.selectionRangeElem.set($containerFragment);
                var $selectionNextDom = $selectionElem.next();
                $selectionNextDom.length ? utils_1.insertBefore($selectionElem, $containerFragment, $selectionNextDom.elems[0]) : $selectionElem.parent().elems[0].append($containerFragment);
              } else if (!$prveDom.length) {
                this.selectionRangeElem.set($containerFragment);
                utils_1.insertBefore($selectionElem, $containerFragment, $selectionElem.elems[0]);
              } else {
                this.selectionRangeElem.set($containerFragment);
                var $selectionNextDom = $selectionElem.next();
                $selectionNextDom.length ? utils_1.insertBefore($selectionElem, $containerFragment, $selectionNextDom.elems[0]) : $selectionElem.parent().elems[0].append($containerFragment);
              }
            }
          };
          return WrapListHandle2;
        }(ListHandle_1.ListHandle);
        exports2["default"] = WrapListHandle;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var SelectionRangeElem = function() {
          function SelectionRangeElem2() {
            this._element = null;
          }
          SelectionRangeElem2.prototype.set = function(data) {
            if (data instanceof DocumentFragment) {
              var _context;
              var childNode_1 = [];
              (0, _forEach["default"])(_context = data.childNodes).call(_context, function($node) {
                childNode_1.push($node);
              });
              data = childNode_1;
            }
            this._element = data;
          };
          SelectionRangeElem2.prototype.get = function() {
            return this._element;
          };
          SelectionRangeElem2.prototype.clear = function() {
            this._element = null;
          };
          return SelectionRangeElem2;
        }();
        exports2["default"] = SelectionRangeElem;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var ListHandle_1 = __webpack_require__(58);
        var utils_1 = __webpack_require__(47);
        var JoinListHandle = function(_super) {
          tslib_1.__extends(JoinListHandle2, _super);
          function JoinListHandle2(options) {
            return _super.call(this, options) || this;
          }
          JoinListHandle2.prototype.exec = function() {
            var _a, _b, _c, _d, _e, _f, _g;
            var _h = this.options, editor = _h.editor, listType = _h.listType, listTarget = _h.listTarget, $startElem = _h.$startElem, $endElem = _h.$endElem;
            var $containerFragment;
            var $nodes = editor.selection.getSelectionRangeTopNodes();
            var startNodeName = $startElem === null || $startElem === void 0 ? void 0 : $startElem.getNodeName();
            var endNodeName = $endElem === null || $endElem === void 0 ? void 0 : $endElem.getNodeName();
            if (startNodeName === endNodeName) {
              if ($nodes.length > 2) {
                $nodes.shift();
                $nodes.pop();
                $containerFragment = utils_1.createElementFragment(utils_1.filterSelectionNodes($nodes), utils_1.createDocumentFragment());
                if (startNodeName === listType) {
                  (_a = $endElem.children()) === null || _a === void 0 ? void 0 : (0, _forEach["default"])(_a).call(_a, function($list) {
                    $containerFragment.append($list);
                  });
                  $endElem.remove();
                  this.selectionRangeElem.set($containerFragment);
                  $startElem.elems[0].append($containerFragment);
                } else {
                  var $startFragment = document.createDocumentFragment();
                  var $endFragment_1 = document.createDocumentFragment();
                  var $startDom = utils_1.getStartPoint($startElem);
                  while ($startDom.length) {
                    var _element = $startDom.elems[0];
                    $startDom = $startDom.next();
                    $startFragment.append(_element);
                  }
                  var $endDom = utils_1.getEndPoint($endElem);
                  var domArr = [];
                  while ($endDom.length) {
                    domArr.unshift($endDom.elems[0]);
                    $endDom = $endDom.prev();
                  }
                  (0, _forEach["default"])(domArr).call(domArr, function($node) {
                    $endFragment_1.append($node);
                  });
                  var $orderFragment = utils_1.createElement(listTarget);
                  $orderFragment.append($startFragment);
                  $orderFragment.append($containerFragment);
                  $orderFragment.append($endFragment_1);
                  $containerFragment = $orderFragment;
                  this.selectionRangeElem.set($containerFragment);
                  dom_core_1["default"]($orderFragment).insertAfter($startElem);
                  !((_b = $startElem.children()) === null || _b === void 0 ? void 0 : _b.length) && $startElem.remove();
                  !((_c = $endElem.children()) === null || _c === void 0 ? void 0 : _c.length) && $endElem.remove();
                }
              } else {
                $nodes.length = 0;
                var $startDom = utils_1.getStartPoint($startElem);
                while ($startDom.length) {
                  $nodes.push($startDom);
                  $startDom = $startDom.next();
                }
                var $endDom = utils_1.getEndPoint($endElem);
                var domArr = [];
                while ($endDom.length) {
                  domArr.unshift($endDom);
                  $endDom = $endDom.prev();
                }
                $nodes.push.apply($nodes, domArr);
                if (startNodeName === listType) {
                  $containerFragment = utils_1.createElementFragment($nodes, utils_1.createDocumentFragment(), "p");
                  this.selectionRangeElem.set($containerFragment);
                  utils_1.insertBefore($startElem, $containerFragment, $endElem.elems[0]);
                } else {
                  $containerFragment = utils_1.createElement(listTarget);
                  (0, _forEach["default"])($nodes).call($nodes, function($list) {
                    $containerFragment.append($list.elems[0]);
                  });
                  this.selectionRangeElem.set($containerFragment);
                  dom_core_1["default"]($containerFragment).insertAfter($startElem);
                }
                !((_d = $startElem.children()) === null || _d === void 0 ? void 0 : _d.length) && $endElem.remove();
                !((_e = $endElem.children()) === null || _e === void 0 ? void 0 : _e.length) && $endElem.remove();
              }
            } else {
              var lowerListElems = [];
              var $endDom = utils_1.getEndPoint($endElem);
              while ($endDom.length) {
                lowerListElems.unshift($endDom);
                $endDom = $endDom.prev();
              }
              var upperListElems = [];
              var $startDom = utils_1.getStartPoint($startElem);
              while ($startDom.length) {
                upperListElems.push($startDom);
                $startDom = $startDom.next();
              }
              $containerFragment = utils_1.createDocumentFragment();
              $nodes.shift();
              $nodes.pop();
              (0, _forEach["default"])(upperListElems).call(upperListElems, function($list) {
                return $containerFragment.append($list.elems[0]);
              });
              $containerFragment = utils_1.createElementFragment(utils_1.filterSelectionNodes($nodes), $containerFragment);
              (0, _forEach["default"])(lowerListElems).call(lowerListElems, function($list) {
                return $containerFragment.append($list.elems[0]);
              });
              this.selectionRangeElem.set($containerFragment);
              if (startNodeName === listType) {
                $startElem.elems[0].append($containerFragment);
                !((_f = $endElem.children()) === null || _f === void 0 ? void 0 : _f.length) && $endElem.remove();
              } else {
                if ((_g = $endElem.children()) === null || _g === void 0 ? void 0 : _g.length) {
                  var $endElemChild = $endElem.children();
                  utils_1.insertBefore($endElemChild, $containerFragment, $endElemChild.elems[0]);
                } else {
                  $endElem.elems[0].append($containerFragment);
                }
              }
            }
          };
          return JoinListHandle2;
        }(ListHandle_1.ListHandle);
        exports2["default"] = JoinListHandle;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var ListHandle_1 = __webpack_require__(58);
        var utils_1 = __webpack_require__(47);
        var StartJoinListHandle = function(_super) {
          tslib_1.__extends(StartJoinListHandle2, _super);
          function StartJoinListHandle2(options) {
            return _super.call(this, options) || this;
          }
          StartJoinListHandle2.prototype.exec = function() {
            var _a;
            var _b = this.options, editor = _b.editor, listType = _b.listType, listTarget = _b.listTarget, $startElem = _b.$startElem;
            var $containerFragment;
            var $nodes = editor.selection.getSelectionRangeTopNodes();
            var startNodeName = $startElem === null || $startElem === void 0 ? void 0 : $startElem.getNodeName();
            $nodes.shift();
            var upperListElems = [];
            var $startDom = utils_1.getStartPoint($startElem);
            while ($startDom.length) {
              upperListElems.push($startDom);
              $startDom = $startDom.next();
            }
            if (startNodeName === listType) {
              $containerFragment = utils_1.createDocumentFragment();
              (0, _forEach["default"])(upperListElems).call(upperListElems, function($list) {
                return $containerFragment.append($list.elems[0]);
              });
              $containerFragment = utils_1.createElementFragment(utils_1.filterSelectionNodes($nodes), $containerFragment);
              this.selectionRangeElem.set($containerFragment);
              $startElem.elems[0].append($containerFragment);
            } else {
              $containerFragment = utils_1.createElement(listTarget);
              (0, _forEach["default"])(upperListElems).call(upperListElems, function($list) {
                return $containerFragment.append($list.elems[0]);
              });
              $containerFragment = utils_1.createElementFragment(utils_1.filterSelectionNodes($nodes), $containerFragment);
              this.selectionRangeElem.set($containerFragment);
              dom_core_1["default"]($containerFragment).insertAfter($startElem);
              !((_a = $startElem.children()) === null || _a === void 0 ? void 0 : _a.length) && $startElem.remove();
            }
          };
          return StartJoinListHandle2;
        }(ListHandle_1.ListHandle);
        exports2["default"] = StartJoinListHandle;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var ListHandle_1 = __webpack_require__(58);
        var utils_1 = __webpack_require__(47);
        var EndJoinListHandle = function(_super) {
          tslib_1.__extends(EndJoinListHandle2, _super);
          function EndJoinListHandle2(options) {
            return _super.call(this, options) || this;
          }
          EndJoinListHandle2.prototype.exec = function() {
            var _a, _b;
            var _c = this.options, editor = _c.editor, listType = _c.listType, listTarget = _c.listTarget, $endElem = _c.$endElem;
            var $containerFragment;
            var $nodes = editor.selection.getSelectionRangeTopNodes();
            var endNodeName = $endElem === null || $endElem === void 0 ? void 0 : $endElem.getNodeName();
            $nodes.pop();
            var lowerListElems = [];
            var $endDom = utils_1.getEndPoint($endElem);
            while ($endDom.length) {
              lowerListElems.unshift($endDom);
              $endDom = $endDom.prev();
            }
            if (endNodeName === listType) {
              $containerFragment = utils_1.createElementFragment(utils_1.filterSelectionNodes($nodes), utils_1.createDocumentFragment());
              (0, _forEach["default"])(lowerListElems).call(lowerListElems, function($list) {
                return $containerFragment.append($list.elems[0]);
              });
              this.selectionRangeElem.set($containerFragment);
              if ((_a = $endElem.children()) === null || _a === void 0 ? void 0 : _a.length) {
                var $endElemChild = $endElem.children();
                utils_1.insertBefore($endElemChild, $containerFragment, $endElemChild.elems[0]);
              } else {
                $endElem.elems[0].append($containerFragment);
              }
            } else {
              var $selectionNodes = utils_1.filterSelectionNodes($nodes);
              $selectionNodes.push.apply($selectionNodes, lowerListElems);
              $containerFragment = utils_1.createElementFragment($selectionNodes, utils_1.createElement(listTarget));
              this.selectionRangeElem.set($containerFragment);
              dom_core_1["default"]($containerFragment).insertBefore($endElem);
              !((_b = $endElem.children()) === null || _b === void 0 ? void 0 : _b.length) && $endElem.remove();
            }
          };
          return EndJoinListHandle2;
        }(ListHandle_1.ListHandle);
        exports2["default"] = EndJoinListHandle;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var ListHandle_1 = __webpack_require__(58);
        var utils_1 = __webpack_require__(47);
        var OtherListHandle = function(_super) {
          tslib_1.__extends(OtherListHandle2, _super);
          function OtherListHandle2(options, range) {
            var _this = _super.call(this, options) || this;
            _this.range = range;
            return _this;
          }
          OtherListHandle2.prototype.exec = function() {
            var _a = this.options, editor = _a.editor, listTarget = _a.listTarget;
            var $nodes = editor.selection.getSelectionRangeTopNodes();
            var $containerFragment = utils_1.createElementFragment(utils_1.filterSelectionNodes($nodes), utils_1.createElement(listTarget));
            this.selectionRangeElem.set($containerFragment);
            this.range.insertNode($containerFragment);
          };
          return OtherListHandle2;
        }(ListHandle_1.ListHandle);
        exports2["default"] = OtherListHandle;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        var _indexOf = _interopRequireDefault(__webpack_require__(27));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var DropListMenu_1 = tslib_1.__importDefault(__webpack_require__(24));
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var lineHeightList_1 = tslib_1.__importDefault(__webpack_require__(379));
        var LineHeight = function(_super) {
          tslib_1.__extends(LineHeight2, _super);
          function LineHeight2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u884C\u9AD8">\n                    <i class="w-e-icon-row-height"></i>\n                </div>');
            var lineHeightMenu = new lineHeightList_1["default"](editor, editor.config.lineHeights);
            var DropListMenu = {
              width: 100,
              title: "\u8BBE\u7F6E\u884C\u9AD8",
              type: "list",
              list: lineHeightMenu.getItemList(),
              clickHandler: function clickHandler(value) {
                editor.selection.saveRange();
                _this.command(value);
              }
            };
            _this = _super.call(this, $elem, editor, DropListMenu) || this;
            return _this;
          }
          LineHeight2.prototype.command = function(value) {
            var editor = this.editor;
            editor.selection.restoreSelection();
            var $containerElem = dom_core_1["default"](editor.selection.getSelectionContainerElem());
            if (!$containerElem.elems.length)
              return;
            if ($containerElem && editor.$textElem.equal($containerElem)) {
              var setStyleLock = false;
              var selectionStartElem = dom_core_1["default"](editor.selection.getSelectionStartElem()).elems[0];
              var SelectionEndElem = dom_core_1["default"](editor.selection.getSelectionEndElem()).elems[0];
              var StartElemWrap = this.getDom(selectionStartElem);
              var EndElemWrap = this.getDom(SelectionEndElem);
              var containerElemChildren = $containerElem.elems[0].children;
              for (var i = 0; i < containerElemChildren.length; i++) {
                var item = containerElemChildren[i];
                if (dom_core_1["default"](item).getNodeName() !== "P") {
                  continue;
                }
                if (item === StartElemWrap) {
                  setStyleLock = true;
                }
                if (setStyleLock) {
                  dom_core_1["default"](item).css("line-height", value);
                  if (item === EndElemWrap) {
                    setStyleLock = false;
                    return;
                  }
                }
              }
              editor.selection.createRangeByElems(selectionStartElem, SelectionEndElem);
              return;
            }
            var selectElem = $containerElem.elems[0];
            var selectElemWrapdom = this.getDom(selectElem);
            if (dom_core_1["default"](selectElemWrapdom).getNodeName() !== "P") {
              return;
            }
            dom_core_1["default"](selectElemWrapdom).css("line-height", value);
            editor.selection.createRangeByElems(selectElemWrapdom, selectElemWrapdom);
            return;
          };
          LineHeight2.prototype.getDom = function(dom) {
            var DOM = dom_core_1["default"](dom).elems[0];
            if (!DOM.parentNode) {
              return DOM;
            }
            function getParentNode($node, editor) {
              var $parent = dom_core_1["default"]($node.parentNode);
              if (editor.$textElem.equal($parent)) {
                return $node;
              } else {
                return getParentNode($parent.elems[0], editor);
              }
            }
            DOM = getParentNode(DOM, this.editor);
            return DOM;
          };
          LineHeight2.prototype.styleProcessing = function(styleList) {
            var styleStr = "";
            (0, _forEach["default"])(styleList).call(styleList, function(item) {
              item !== "" && (0, _indexOf["default"])(item).call(item, "line-height") === -1 ? styleStr = styleStr + item + ";" : "";
            });
            return styleStr;
          };
          LineHeight2.prototype.setRange = function(startDom, endDom) {
            var editor = this.editor;
            var selection = window.getSelection ? window.getSelection() : document.getSelection();
            selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
            var range = document.createRange();
            var star = startDom;
            var end = endDom;
            range.setStart(star, 0);
            range.setEnd(end, 1);
            selection === null || selection === void 0 ? void 0 : selection.addRange(range);
            editor.selection.saveRange();
            selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
            editor.selection.restoreSelection();
          };
          LineHeight2.prototype.tryChangeActive = function() {
            var editor = this.editor;
            var $selectionElem = editor.selection.getSelectionContainerElem();
            if ($selectionElem && editor.$textElem.equal($selectionElem)) {
              return;
            }
            var dom = dom_core_1["default"](editor.selection.getSelectionStartElem());
            if (dom.length === 0)
              return;
            dom = this.getDom(dom.elems[0]);
            var style = dom.getAttribute("style") ? dom.getAttribute("style") : "";
            if (style && (0, _indexOf["default"])(style).call(style, "line-height") !== -1) {
              this.active();
            } else {
              this.unActive();
            }
          };
          return LineHeight2;
        }(DropListMenu_1["default"]);
        exports2["default"] = LineHeight;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var lineHeightList = function() {
          function lineHeightList2(editor, list) {
            var _this = this;
            this.itemList = [{
              $elem: dom_core_1["default"]("<span>" + editor.i18next.t("\u9ED8\u8BA4") + "</span>"),
              value: ""
            }];
            (0, _forEach["default"])(list).call(list, function(item) {
              _this.itemList.push({
                $elem: dom_core_1["default"]("<span>" + item + "</span>"),
                value: item
              });
            });
          }
          lineHeightList2.prototype.getItemList = function() {
            return this.itemList;
          };
          return lineHeightList2;
        }();
        exports2["default"] = lineHeightList;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var BtnMenu_1 = tslib_1.__importDefault(__webpack_require__(23));
        var Undo = function(_super) {
          tslib_1.__extends(Undo2, _super);
          function Undo2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u64A4\u9500">\n                <i class="w-e-icon-undo"></i>\n            </div>');
            _this = _super.call(this, $elem, editor) || this;
            return _this;
          }
          Undo2.prototype.clickHandler = function() {
            var editor = this.editor;
            editor.history.revoke();
            var children = editor.$textElem.children();
            if (!(children === null || children === void 0 ? void 0 : children.length))
              return;
            var $last = children.last();
            editor.selection.createRangeByElem($last, false, true);
            editor.selection.restoreSelection();
          };
          Undo2.prototype.tryChangeActive = function() {
            if (!this.editor.isCompatibleMode) {
              if (this.editor.history.size[0]) {
                this.active();
              } else {
                this.unActive();
              }
            }
          };
          return Undo2;
        }(BtnMenu_1["default"]);
        exports2["default"] = Undo;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var BtnMenu_1 = tslib_1.__importDefault(__webpack_require__(23));
        var Redo = function(_super) {
          tslib_1.__extends(Redo2, _super);
          function Redo2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u6062\u590D">\n                <i class="w-e-icon-redo"></i>\n            </div>');
            _this = _super.call(this, $elem, editor) || this;
            return _this;
          }
          Redo2.prototype.clickHandler = function() {
            var editor = this.editor;
            editor.history.restore();
            var children = editor.$textElem.children();
            if (!(children === null || children === void 0 ? void 0 : children.length))
              return;
            var $last = children.last();
            editor.selection.createRangeByElem($last, false, true);
            editor.selection.restoreSelection();
          };
          Redo2.prototype.tryChangeActive = function() {
            if (!this.editor.isCompatibleMode) {
              if (this.editor.history.size[1]) {
                this.active();
              } else {
                this.unActive();
              }
            }
          };
          return Redo2;
        }(BtnMenu_1["default"]);
        exports2["default"] = Redo;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var PanelMenu_1 = tslib_1.__importDefault(__webpack_require__(37));
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var create_panel_conf_1 = tslib_1.__importDefault(__webpack_require__(383));
        var Panel_1 = tslib_1.__importDefault(__webpack_require__(32));
        var index_1 = tslib_1.__importDefault(__webpack_require__(392));
        var Table = function(_super) {
          tslib_1.__extends(Table2, _super);
          function Table2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u8868\u683C"><i class="w-e-icon-table2"></i></div>');
            _this = _super.call(this, $elem, editor) || this;
            index_1["default"](editor);
            return _this;
          }
          Table2.prototype.clickHandler = function() {
            this.createPanel();
          };
          Table2.prototype.createPanel = function() {
            var conf = create_panel_conf_1["default"](this.editor);
            var panel = new Panel_1["default"](this, conf);
            panel.create();
          };
          Table2.prototype.tryChangeActive = function() {
          };
          return Table2;
        }(PanelMenu_1["default"]);
        exports2["default"] = Table;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _isInteger = _interopRequireDefault(__webpack_require__(384));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var util_1 = __webpack_require__(6);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        __webpack_require__(389);
        var create_table_1 = tslib_1.__importDefault(__webpack_require__(391));
        function isPositiveInteger(n) {
          return n > 0 && (0, _isInteger["default"])(n);
        }
        function default_1(editor) {
          var createTable = new create_table_1["default"](editor);
          var colId = util_1.getRandom("w-col-id");
          var rowId = util_1.getRandom("w-row-id");
          var insertBtnId = util_1.getRandom("btn-link");
          var i18nPrefix = "menus.panelMenus.table.";
          var t = function t2(text) {
            return editor.i18next.t(text);
          };
          var tabsConf = [{
            title: t(i18nPrefix + "\u63D2\u5165\u8868\u683C"),
            tpl: '<div>\n                    <div class="w-e-table">\n                        <span>' + t("\u521B\u5EFA") + '</span>\n                        <input id="' + rowId + '"  type="text" class="w-e-table-input" value="5"/></td>\n                        <span>' + t(i18nPrefix + "\u884C") + '</span>\n                        <input id="' + colId + '" type="text" class="w-e-table-input" value="5"/></td>\n                        <span>' + (t(i18nPrefix + "\u5217") + t(i18nPrefix + "\u7684") + t(i18nPrefix + "\u8868\u683C")) + '</span>\n                    </div>\n                    <div class="w-e-button-container">\n                        <button type="button" id="' + insertBtnId + '" class="right">' + t("\u63D2\u5165") + "</button>\n                    </div>\n                </div>",
            events: [{
              selector: "#" + insertBtnId,
              type: "click",
              fn: function fn() {
                var colValue = Number(dom_core_1["default"]("#" + colId).val());
                var rowValue = Number(dom_core_1["default"]("#" + rowId).val());
                if (isPositiveInteger(rowValue) && isPositiveInteger(colValue)) {
                  createTable.createAction(rowValue, colValue);
                  return true;
                } else {
                  editor.config.customAlert("\u8868\u683C\u884C\u5217\u8BF7\u8F93\u5165\u6B63\u6574\u6570", "warning");
                  return false;
                }
              },
              bindEnter: true
            }]
          }];
          var conf = {
            width: 330,
            height: 0,
            tabs: []
          };
          conf.tabs.push(tabsConf[0]);
          return conf;
        }
        exports2["default"] = default_1;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(385);
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(386);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(387);
        var path = __webpack_require__(9);
        module2.exports = path.Number.isInteger;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var isInteger = __webpack_require__(388);
        $({ target: "Number", stat: true }, {
          isInteger
        });
      },
      function(module2, exports2, __webpack_require__) {
        var isObject = __webpack_require__(13);
        var floor = Math.floor;
        module2.exports = function isInteger(it) {
          return !isObject(it) && isFinite(it) && floor(it) === it;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var api = __webpack_require__(20);
        var content = __webpack_require__(390);
        content = content.__esModule ? content.default : content;
        if (typeof content === "string") {
          content = [[module2.i, content, ""]];
        }
        var options = {};
        options.insert = "head";
        options.singleton = false;
        api(content, options);
        module2.exports = content.locals || {};
      },
      function(module2, exports2, __webpack_require__) {
        var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
        exports2 = ___CSS_LOADER_API_IMPORT___(false);
        exports2.push([module2.i, ".w-e-table {\n  display: flex;\n}\n.w-e-table .w-e-table-input {\n  width: 40px;\n  text-align: center!important;\n  margin: 0 5px;\n}\n", ""]);
        module2.exports = exports2;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var const_1 = __webpack_require__(7);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var CreateTable = function() {
          function CreateTable2(editor) {
            this.editor = editor;
          }
          CreateTable2.prototype.createAction = function(rowValue, colValue) {
            var editor = this.editor;
            var $selectionElem = dom_core_1["default"](editor.selection.getSelectionContainerElem());
            var $ul = dom_core_1["default"]($selectionElem.elems[0]).parentUntilEditor("UL", editor);
            var $ol = dom_core_1["default"]($selectionElem.elems[0]).parentUntilEditor("OL", editor);
            if ($ul || $ol) {
              return;
            }
            var tableDom = this.createTableHtml(rowValue, colValue);
            editor.cmd["do"]("insertHTML", tableDom);
          };
          CreateTable2.prototype.createTableHtml = function(rowValue, colValue) {
            var rowStr = "";
            var colStr = "";
            for (var i = 0; i < rowValue; i++) {
              colStr = "";
              for (var j = 0; j < colValue; j++) {
                if (i === 0) {
                  colStr = colStr + "<th></th>";
                } else {
                  colStr = colStr + "<td></td>";
                }
              }
              rowStr = rowStr + "<tr>" + colStr + "</tr>";
            }
            var tableDom = '<table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody>' + rowStr + ("</tbody></table>" + const_1.EMPTY_P);
            return tableDom;
          };
          return CreateTable2;
        }();
        exports2["default"] = CreateTable;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var tooltip_event_1 = tslib_1.__importDefault(__webpack_require__(393));
        var table_event_1 = __webpack_require__(400);
        function bindEvent(editor) {
          tooltip_event_1["default"](editor);
          table_event_1.bindEventKeyboardEvent(editor);
          table_event_1.bindClickEvent(editor);
        }
        exports2["default"] = bindEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var Tooltip_1 = tslib_1.__importDefault(__webpack_require__(38));
        var operating_event_1 = tslib_1.__importDefault(__webpack_require__(394));
        var getNode_1 = tslib_1.__importDefault(__webpack_require__(399));
        var const_1 = __webpack_require__(7);
        function createShowHideFn(editor) {
          var tooltip;
          function showTableTooltip($node) {
            var getnode = new getNode_1["default"](editor);
            var i18nPrefix = "menus.panelMenus.table.";
            var t = function t2(text, prefix) {
              if (prefix === void 0) {
                prefix = i18nPrefix;
              }
              return editor.i18next.t(prefix + text);
            };
            var conf = [{
              $elem: dom_core_1["default"]("<span>" + t("\u5220\u9664\u8868\u683C") + "</span>"),
              onClick: function onClick(editor2, $node2) {
                editor2.selection.createRangeByElem($node2);
                editor2.selection.restoreSelection();
                editor2.cmd["do"]("insertHTML", const_1.EMPTY_P);
                return true;
              }
            }, {
              $elem: dom_core_1["default"]("<span>" + t("\u6DFB\u52A0\u884C") + "</span>"),
              onClick: function onClick(editor2, $node2) {
                var isMore = isMoreRowAction(editor2);
                if (isMore) {
                  return true;
                }
                var selectDom = dom_core_1["default"](editor2.selection.getSelectionStartElem());
                var $currentRow = getnode.getRowNode(selectDom.elems[0]);
                if (!$currentRow) {
                  return true;
                }
                var index2 = Number(getnode.getCurrentRowIndex($node2.elems[0], $currentRow));
                var htmlStr = getnode.getTableHtml($node2.elems[0]);
                var newdom = getnode.getTableHtml(operating_event_1["default"].ProcessingRow(dom_core_1["default"](htmlStr), index2).elems[0]);
                newdom = _isEmptyP($node2, newdom);
                editor2.selection.createRangeByElem($node2);
                editor2.selection.restoreSelection();
                editor2.cmd["do"]("insertHTML", newdom);
                return true;
              }
            }, {
              $elem: dom_core_1["default"]("<span>" + t("\u5220\u9664\u884C") + "</span>"),
              onClick: function onClick(editor2, $node2) {
                var isMore = isMoreRowAction(editor2);
                if (isMore) {
                  return true;
                }
                var selectDom = dom_core_1["default"](editor2.selection.getSelectionStartElem());
                var $currentRow = getnode.getRowNode(selectDom.elems[0]);
                if (!$currentRow) {
                  return true;
                }
                var index2 = Number(getnode.getCurrentRowIndex($node2.elems[0], $currentRow));
                var htmlStr = getnode.getTableHtml($node2.elems[0]);
                var trLength = operating_event_1["default"].DeleteRow(dom_core_1["default"](htmlStr), index2).elems[0].children[0].children.length;
                var newdom = "";
                editor2.selection.createRangeByElem($node2);
                editor2.selection.restoreSelection();
                if (trLength === 0) {
                  newdom = const_1.EMPTY_P;
                } else {
                  newdom = getnode.getTableHtml(operating_event_1["default"].DeleteRow(dom_core_1["default"](htmlStr), index2).elems[0]);
                }
                newdom = _isEmptyP($node2, newdom);
                editor2.cmd["do"]("insertHTML", newdom);
                return true;
              }
            }, {
              $elem: dom_core_1["default"]("<span>" + t("\u6DFB\u52A0\u5217") + "</span>"),
              onClick: function onClick(editor2, $node2) {
                var isMore = isMoreRowAction(editor2);
                if (isMore) {
                  return true;
                }
                var selectDom = dom_core_1["default"](editor2.selection.getSelectionStartElem());
                var index2 = getnode.getCurrentColIndex(selectDom.elems[0]);
                var htmlStr = getnode.getTableHtml($node2.elems[0]);
                var newdom = getnode.getTableHtml(operating_event_1["default"].ProcessingCol(dom_core_1["default"](htmlStr), index2).elems[0]);
                newdom = _isEmptyP($node2, newdom);
                editor2.selection.createRangeByElem($node2);
                editor2.selection.restoreSelection();
                editor2.cmd["do"]("insertHTML", newdom);
                return true;
              }
            }, {
              $elem: dom_core_1["default"]("<span>" + t("\u5220\u9664\u5217") + "</span>"),
              onClick: function onClick(editor2, $node2) {
                var isMore = isMoreRowAction(editor2);
                if (isMore) {
                  return true;
                }
                var selectDom = dom_core_1["default"](editor2.selection.getSelectionStartElem());
                var index2 = getnode.getCurrentColIndex(selectDom.elems[0]);
                var htmlStr = getnode.getTableHtml($node2.elems[0]);
                var newDom = operating_event_1["default"].DeleteCol(dom_core_1["default"](htmlStr), index2);
                var tdLength = newDom.elems[0].children[0].children[0].children.length;
                var newdom = "";
                editor2.selection.createRangeByElem($node2);
                editor2.selection.restoreSelection();
                if (tdLength === 0) {
                  newdom = const_1.EMPTY_P;
                } else {
                  newdom = getnode.getTableHtml(newDom.elems[0]);
                }
                newdom = _isEmptyP($node2, newdom);
                editor2.cmd["do"]("insertHTML", newdom);
                return true;
              }
            }, {
              $elem: dom_core_1["default"]("<span>" + t("\u8BBE\u7F6E\u8868\u5934") + "</span>"),
              onClick: function onClick(editor2, $node2) {
                var isMore = isMoreRowAction(editor2);
                if (isMore) {
                  return true;
                }
                var selectDom = dom_core_1["default"](editor2.selection.getSelectionStartElem());
                var $currentRow = getnode.getRowNode(selectDom.elems[0]);
                if (!$currentRow) {
                  return true;
                }
                var index2 = Number(getnode.getCurrentRowIndex($node2.elems[0], $currentRow));
                if (index2 !== 0) {
                  index2 = 0;
                }
                var htmlStr = getnode.getTableHtml($node2.elems[0]);
                var newdom = getnode.getTableHtml(operating_event_1["default"].setTheHeader(dom_core_1["default"](htmlStr), index2, "th").elems[0]);
                newdom = _isEmptyP($node2, newdom);
                editor2.selection.createRangeByElem($node2);
                editor2.selection.restoreSelection();
                editor2.cmd["do"]("insertHTML", newdom);
                return true;
              }
            }, {
              $elem: dom_core_1["default"]("<span>" + t("\u53D6\u6D88\u8868\u5934") + "</span>"),
              onClick: function onClick(editor2, $node2) {
                var selectDom = dom_core_1["default"](editor2.selection.getSelectionStartElem());
                var $currentRow = getnode.getRowNode(selectDom.elems[0]);
                if (!$currentRow) {
                  return true;
                }
                var index2 = Number(getnode.getCurrentRowIndex($node2.elems[0], $currentRow));
                if (index2 !== 0) {
                  index2 = 0;
                }
                var htmlStr = getnode.getTableHtml($node2.elems[0]);
                var newdom = getnode.getTableHtml(operating_event_1["default"].setTheHeader(dom_core_1["default"](htmlStr), index2, "td").elems[0]);
                newdom = _isEmptyP($node2, newdom);
                editor2.selection.createRangeByElem($node2);
                editor2.selection.restoreSelection();
                editor2.cmd["do"]("insertHTML", newdom);
                return true;
              }
            }];
            tooltip = new Tooltip_1["default"](editor, $node, conf);
            tooltip.create();
          }
          function hideTableTooltip() {
            if (tooltip) {
              tooltip.remove();
              tooltip = null;
            }
          }
          return {
            showTableTooltip,
            hideTableTooltip
          };
        }
        function isMoreRowAction(editor) {
          var $startElem = editor.selection.getSelectionStartElem();
          var $endElem = editor.selection.getSelectionEndElem();
          if (($startElem === null || $startElem === void 0 ? void 0 : $startElem.elems[0]) !== ($endElem === null || $endElem === void 0 ? void 0 : $endElem.elems[0])) {
            return true;
          } else {
            return false;
          }
        }
        function bindTooltipEvent(editor) {
          var _a = createShowHideFn(editor), showTableTooltip = _a.showTableTooltip, hideTableTooltip = _a.hideTableTooltip;
          editor.txt.eventHooks.tableClickEvents.push(showTableTooltip);
          editor.txt.eventHooks.clickEvents.push(hideTableTooltip);
          editor.txt.eventHooks.keyupEvents.push(hideTableTooltip);
          editor.txt.eventHooks.toolbarClickEvents.push(hideTableTooltip);
          editor.txt.eventHooks.menuClickEvents.push(hideTableTooltip);
          editor.txt.eventHooks.textScrollEvents.push(hideTableTooltip);
        }
        exports2["default"] = bindTooltipEvent;
        function _isEmptyP($node, newdom) {
          var nextNode = $node.elems[0].nextSibling;
          if (!nextNode || nextNode.innerHTML === "<br>") {
            newdom += "" + const_1.EMPTY_P;
          }
          return newdom;
        }
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _slice = _interopRequireDefault(__webpack_require__(45));
        var _splice = _interopRequireDefault(__webpack_require__(91));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        var _from = _interopRequireDefault(__webpack_require__(138));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        function ProcessingRow($node, _index) {
          var $dom = generateDomAction($node);
          var domArray = (0, _slice["default"])(Array.prototype).apply($dom.children);
          var childrenLength = domArray[0].children.length;
          var tr = document.createElement("tr");
          for (var i = 0; i < childrenLength; i++) {
            var td = document.createElement("td");
            tr.appendChild(td);
          }
          (0, _splice["default"])(domArray).call(domArray, _index + 1, 0, tr);
          removeAndInsertAction($dom, domArray);
          return dom_core_1["default"]($dom.parentNode);
        }
        function ProcessingCol($node, _index) {
          var $dom = generateDomAction($node);
          var domArray = (0, _slice["default"])(Array.prototype).apply($dom.children);
          var _loop_1 = function _loop_12(i2) {
            var _context;
            var cArray = [];
            (0, _forEach["default"])(_context = (0, _from["default"])(domArray[i2].children)).call(_context, function(item) {
              cArray.push(item);
            });
            while (domArray[i2].children.length !== 0) {
              domArray[i2].removeChild(domArray[i2].children[0]);
            }
            var td = dom_core_1["default"](cArray[0]).getNodeName() !== "TH" ? document.createElement("td") : document.createElement("th");
            (0, _splice["default"])(cArray).call(cArray, _index + 1, 0, td);
            for (var j = 0; j < cArray.length; j++) {
              domArray[i2].appendChild(cArray[j]);
            }
          };
          for (var i = 0; i < domArray.length; i++) {
            _loop_1(i);
          }
          removeAndInsertAction($dom, domArray);
          return dom_core_1["default"]($dom.parentNode);
        }
        function DeleteRow($node, _index) {
          var $dom = generateDomAction($node);
          var domArray = (0, _slice["default"])(Array.prototype).apply($dom.children);
          (0, _splice["default"])(domArray).call(domArray, _index, 1);
          removeAndInsertAction($dom, domArray);
          return dom_core_1["default"]($dom.parentNode);
        }
        function DeleteCol($node, _index) {
          var $dom = generateDomAction($node);
          var domArray = (0, _slice["default"])(Array.prototype).apply($dom.children);
          var _loop_2 = function _loop_22(i2) {
            var _context2;
            var cArray = [];
            (0, _forEach["default"])(_context2 = (0, _from["default"])(domArray[i2].children)).call(_context2, function(item) {
              cArray.push(item);
            });
            while (domArray[i2].children.length !== 0) {
              domArray[i2].removeChild(domArray[i2].children[0]);
            }
            (0, _splice["default"])(cArray).call(cArray, _index, 1);
            for (var j = 0; j < cArray.length; j++) {
              domArray[i2].appendChild(cArray[j]);
            }
          };
          for (var i = 0; i < domArray.length; i++) {
            _loop_2(i);
          }
          removeAndInsertAction($dom, domArray);
          return dom_core_1["default"]($dom.parentNode);
        }
        function setTheHeader($node, _index, type) {
          var $dom = generateDomAction($node);
          var domArray = (0, _slice["default"])(Array.prototype).apply($dom.children);
          var cols = domArray[_index].children;
          var tr = document.createElement("tr");
          var _loop_3 = function _loop_32(i2) {
            var _context3;
            var el = document.createElement(type);
            var col = cols[i2];
            (0, _forEach["default"])(_context3 = (0, _from["default"])(col.childNodes)).call(_context3, function(item) {
              el.appendChild(item);
            });
            tr.appendChild(el);
          };
          for (var i = 0; i < cols.length; i++) {
            _loop_3(i);
          }
          (0, _splice["default"])(domArray).call(domArray, _index, 1, tr);
          removeAndInsertAction($dom, domArray);
          return dom_core_1["default"]($dom.parentNode);
        }
        function removeAndInsertAction($dom, domArray) {
          while ($dom.children.length !== 0) {
            $dom.removeChild($dom.children[0]);
          }
          for (var i = 0; i < domArray.length; i++) {
            $dom.appendChild(domArray[i]);
          }
        }
        function generateDomAction($node) {
          var $dom = $node.elems[0].children[0];
          if ($dom.nodeName === "COLGROUP") {
            $dom = $node.elems[0].children[$node.elems[0].children.length - 1];
          }
          return $dom;
        }
        exports2["default"] = {
          ProcessingRow,
          ProcessingCol,
          DeleteRow,
          DeleteCol,
          setTheHeader
        };
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(396);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(50);
        __webpack_require__(397);
        var path = __webpack_require__(9);
        module2.exports = path.Array.from;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var from = __webpack_require__(398);
        var checkCorrectnessOfIteration = __webpack_require__(114);
        var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
          Array.from(iterable);
        });
        $({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
          from
        });
      },
      function(module2, exports2, __webpack_require__) {
        var bind = __webpack_require__(39);
        var toObject = __webpack_require__(29);
        var callWithSafeIterationClosing = __webpack_require__(113);
        var isArrayIteratorMethod = __webpack_require__(111);
        var toLength = __webpack_require__(34);
        var createProperty = __webpack_require__(69);
        var getIteratorMethod = __webpack_require__(112);
        module2.exports = function from(arrayLike) {
          var O = toObject(arrayLike);
          var C = typeof this == "function" ? this : Array;
          var argumentsLength = arguments.length;
          var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
          var mapping = mapfn !== void 0;
          var iteratorMethod = getIteratorMethod(O);
          var index2 = 0;
          var length, result, step, iterator, next, value;
          if (mapping)
            mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0, 2);
          if (iteratorMethod != void 0 && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
            iterator = iteratorMethod.call(O);
            next = iterator.next;
            result = new C();
            for (; !(step = next.call(iterator)).done; index2++) {
              value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index2], true) : step.value;
              createProperty(result, index2, value);
            }
          } else {
            length = toLength(O.length);
            result = new C(length);
            for (; length > index2; index2++) {
              value = mapping ? mapfn(O[index2], index2) : O[index2];
              createProperty(result, index2, value);
            }
          }
          result.length = index2;
          return result;
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        var _from = _interopRequireDefault(__webpack_require__(138));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var getNode = function() {
          function getNode2(editor) {
            this.editor = editor;
          }
          getNode2.prototype.getRowNode = function($node) {
            var _a;
            var DOM = dom_core_1["default"]($node).elems[0];
            if (!DOM.parentNode) {
              return DOM;
            }
            DOM = (_a = dom_core_1["default"](DOM).parentUntil("TR", DOM)) === null || _a === void 0 ? void 0 : _a.elems[0];
            return DOM;
          };
          getNode2.prototype.getCurrentRowIndex = function($node, $dom) {
            var _context;
            var _index = 0;
            var $nodeChild = $node.children[0];
            if ($nodeChild.nodeName === "COLGROUP") {
              $nodeChild = $node.children[$node.children.length - 1];
            }
            (0, _forEach["default"])(_context = (0, _from["default"])($nodeChild.children)).call(_context, function(item, index2) {
              item === $dom ? _index = index2 : "";
            });
            return _index;
          };
          getNode2.prototype.getCurrentColIndex = function($node) {
            var _context2;
            var _a;
            var _index = 0;
            var rowDom = dom_core_1["default"]($node).getNodeName() === "TD" || dom_core_1["default"]($node).getNodeName() === "TH" ? $node : (_a = dom_core_1["default"]($node).parentUntil("TD", $node)) === null || _a === void 0 ? void 0 : _a.elems[0];
            var colDom = dom_core_1["default"](rowDom).parent();
            (0, _forEach["default"])(_context2 = (0, _from["default"])(colDom.elems[0].children)).call(_context2, function(item, index2) {
              item === rowDom ? _index = index2 : "";
            });
            return _index;
          };
          getNode2.prototype.getTableHtml = function($node) {
            var htmlStr = '<table border="0" width="100%" cellpadding="0" cellspacing="0">' + dom_core_1["default"]($node).html() + "</table>";
            return htmlStr;
          };
          return getNode2;
        }();
        exports2["default"] = getNode;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.bindEventKeyboardEvent = exports2.bindClickEvent = void 0;
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        function isEmptyLine(topElem) {
          if (!topElem.length) {
            return false;
          }
          var dom = topElem.elems[0];
          return dom.nodeName === "P" && dom.innerHTML === "<br>";
        }
        function bindClickEvent(editor) {
          function handleTripleClick($dom, e) {
            if (e.detail >= 3) {
              var selection = window.getSelection();
              if (selection) {
                var focusNode = selection.focusNode, anchorNode = selection.anchorNode;
                var $anchorNode = dom_core_1["default"](anchorNode === null || anchorNode === void 0 ? void 0 : anchorNode.parentElement);
                if (!$dom.isContain(dom_core_1["default"](focusNode))) {
                  var $td = $anchorNode.elems[0].tagName === "TD" ? $anchorNode : $anchorNode.parentUntilEditor("td", editor);
                  if ($td) {
                    var range = editor.selection.getRange();
                    range === null || range === void 0 ? void 0 : range.setEnd($td.elems[0], $td.elems[0].childNodes.length);
                    editor.selection.restoreSelection();
                  }
                }
              }
            }
          }
          editor.txt.eventHooks.tableClickEvents.push(handleTripleClick);
        }
        exports2.bindClickEvent = bindClickEvent;
        function bindEventKeyboardEvent(editor) {
          var txt = editor.txt, selection = editor.selection;
          var keydownEvents = txt.eventHooks.keydownEvents;
          keydownEvents.push(function(e) {
            editor.selection.saveRange();
            var $selectionContainerElem = selection.getSelectionContainerElem();
            if ($selectionContainerElem) {
              var $topElem = $selectionContainerElem.getNodeTop(editor);
              var $preElem = $topElem.length ? $topElem.prev().length ? $topElem.prev() : null : null;
              if ($preElem && $preElem.getNodeName() === "TABLE" && selection.isSelectionEmpty() && selection.getCursorPos() === 0 && e.keyCode === 8) {
                var $nextElem = $topElem.next();
                var hasNext = !!$nextElem.length;
                if (hasNext && isEmptyLine($topElem)) {
                  $topElem.remove();
                  editor.selection.setRangeToElem($nextElem.elems[0]);
                }
                e.preventDefault();
              }
            }
          });
        }
        exports2.bindEventKeyboardEvent = bindEventKeyboardEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _map = _interopRequireDefault(__webpack_require__(26));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.formatCodeHtml = void 0;
        var tslib_1 = __webpack_require__(2);
        var PanelMenu_1 = tslib_1.__importDefault(__webpack_require__(37));
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var util_1 = __webpack_require__(6);
        var create_panel_conf_1 = tslib_1.__importDefault(__webpack_require__(402));
        var is_active_1 = tslib_1.__importDefault(__webpack_require__(139));
        var Panel_1 = tslib_1.__importDefault(__webpack_require__(32));
        var index_1 = tslib_1.__importDefault(__webpack_require__(403));
        function formatCodeHtml(editor, html) {
          if (!html)
            return html;
          html = deleteHighlightCode(html);
          html = formatEnterCode(html);
          html = util_1.replaceSpecialSymbol(html);
          return html;
          function formatEnterCode(html2) {
            var preArr = html2.match(/<pre[\s|\S]+?\/pre>/g);
            if (preArr === null)
              return html2;
            (0, _map["default"])(preArr).call(preArr, function(item) {
              html2 = html2.replace(item, item.replace(/<\/code><code>/g, "\n").replace(/<br>/g, ""));
            });
            return html2;
          }
          function deleteHighlightCode(html2) {
            var _context;
            var m = html2.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm);
            if (!m || !m.length)
              return html2;
            var r = (0, _map["default"])(_context = util_1.deepClone(m)).call(_context, function(i2) {
              i2 = i2.replace(/<span\sclass="hljs[^>]+>/, "");
              return i2.replace(/<\/span>/, "");
            });
            for (var i = 0; i < m.length; i++) {
              html2 = html2.replace(m[i], r[i]);
            }
            return deleteHighlightCode(html2);
          }
        }
        exports2.formatCodeHtml = formatCodeHtml;
        var Code = function(_super) {
          tslib_1.__extends(Code2, _super);
          function Code2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u4EE3\u7801"><i class="w-e-icon-terminal"></i></div>');
            _this = _super.call(this, $elem, editor) || this;
            index_1["default"](editor);
            return _this;
          }
          Code2.prototype.insertLineCode = function(text) {
            var editor = this.editor;
            var $code = dom_core_1["default"]("<code>" + text + "</code>");
            editor.cmd["do"]("insertElem", $code);
            editor.selection.createRangeByElem($code, false);
            editor.selection.restoreSelection();
          };
          Code2.prototype.clickHandler = function() {
            var editor = this.editor;
            var selectionText = editor.selection.getSelectionText();
            if (this.isActive) {
              return;
            } else {
              if (editor.selection.isSelectionEmpty()) {
                this.createPanel("", "");
              } else {
                this.insertLineCode(selectionText);
              }
            }
          };
          Code2.prototype.createPanel = function(text, languageType) {
            var conf = create_panel_conf_1["default"](this.editor, text, languageType);
            var panel = new Panel_1["default"](this, conf);
            panel.create();
          };
          Code2.prototype.tryChangeActive = function() {
            var editor = this.editor;
            if (is_active_1["default"](editor)) {
              this.active();
            } else {
              this.unActive();
            }
          };
          return Code2;
        }(PanelMenu_1["default"]);
        exports2["default"] = Code;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _map = _interopRequireDefault(__webpack_require__(26));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var util_1 = __webpack_require__(6);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var is_active_1 = tslib_1.__importDefault(__webpack_require__(139));
        var const_1 = __webpack_require__(7);
        function default_1(editor, text, languageType) {
          var _context;
          var inputIFrameId = util_1.getRandom("input-iframe");
          var languageId = util_1.getRandom("select");
          var btnOkId = util_1.getRandom("btn-ok");
          function insertCode(text2) {
            var _a;
            var active = is_active_1["default"](editor);
            if (active) {
              selectCodeElem();
            }
            var content = (_a = editor.selection.getSelectionStartElem()) === null || _a === void 0 ? void 0 : _a.elems[0].innerHTML;
            if (content) {
              editor.cmd["do"]("insertHTML", const_1.EMPTY_P);
            }
            editor.cmd["do"]("insertHTML", text2);
            var $code = editor.selection.getSelectionStartElem();
            var $codeElem = $code === null || $code === void 0 ? void 0 : $code.getNodeTop(editor);
            if (($codeElem === null || $codeElem === void 0 ? void 0 : $codeElem.getNextSibling().elems.length) === 0) {
              dom_core_1["default"](const_1.EMPTY_P).insertAfter($codeElem);
            }
          }
          function selectCodeElem() {
            if (!is_active_1["default"](editor))
              return;
            var $code = editor.selection.getSelectionStartElem();
            var $codeElem = $code === null || $code === void 0 ? void 0 : $code.getNodeTop(editor);
            if (!$codeElem)
              return;
            editor.selection.createRangeByElem($codeElem);
            editor.selection.restoreSelection();
          }
          var t = function t2(text2) {
            return editor.i18next.t(text2);
          };
          var conf = {
            width: 500,
            height: 0,
            tabs: [{
              title: t("menus.panelMenus.code.\u63D2\u5165\u4EE3\u7801"),
              tpl: '<div>\n                        <select name="" id="' + languageId + '">\n                            ' + (0, _map["default"])(_context = editor.config.languageType).call(_context, function(language) {
                return "<option " + (languageType == language ? "selected" : "") + ' value ="' + language + '">' + language + "</option>";
              }) + '\n                        </select>\n                        <textarea id="' + inputIFrameId + '" type="text" class="wang-code-textarea" placeholder="" style="height: 160px">' + text.replace(/&quot;/g, '"') + '</textarea>\n                        <div class="w-e-button-container">\n                            <button type="button" id="' + btnOkId + '" class="right">' + (is_active_1["default"](editor) ? t("\u4FEE\u6539") : t("\u63D2\u5165")) + "</button>\n                        </div>\n                    </div>",
              events: [
                {
                  selector: "#" + btnOkId,
                  type: "click",
                  fn: function fn() {
                    var formatCode, codeDom;
                    var $code = document.getElementById(inputIFrameId);
                    var $select = dom_core_1["default"]("#" + languageId);
                    var languageType2 = $select.val();
                    var code = $code.value;
                    if (editor.highlight) {
                      formatCode = editor.highlight.highlightAuto(code).value;
                    } else {
                      formatCode = "<xmp>" + code + "</xmp>";
                    }
                    if (!code)
                      return;
                    if (is_active_1["default"](editor)) {
                      return false;
                    } else {
                      codeDom = '<pre><code class="' + languageType2 + '">' + formatCode + "</code></pre>";
                      insertCode(codeDom);
                    }
                    return true;
                  }
                }
              ]
            }]
          };
          return conf;
        }
        exports2["default"] = default_1;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var tooltip_event_1 = tslib_1.__importDefault(__webpack_require__(404));
        var jump_code_block_down_1 = tslib_1.__importDefault(__webpack_require__(405));
        function bindEvent(editor) {
          tooltip_event_1["default"](editor);
          jump_code_block_down_1["default"](editor);
        }
        exports2["default"] = bindEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.createShowHideFn = void 0;
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var Tooltip_1 = tslib_1.__importDefault(__webpack_require__(38));
        function createShowHideFn(editor) {
          var tooltip;
          function showCodeTooltip($code) {
            var i18nPrefix = "menus.panelMenus.code.";
            var t = function t2(text, prefix) {
              if (prefix === void 0) {
                prefix = i18nPrefix;
              }
              return editor.i18next.t(prefix + text);
            };
            var conf = [{
              $elem: dom_core_1["default"]("<span>" + t("\u5220\u9664\u4EE3\u7801") + "</span>"),
              onClick: function onClick(editor2, $code2) {
                $code2.remove();
                return true;
              }
            }];
            tooltip = new Tooltip_1["default"](editor, $code, conf);
            tooltip.create();
          }
          function hideCodeTooltip() {
            if (tooltip) {
              tooltip.remove();
              tooltip = null;
            }
          }
          return {
            showCodeTooltip,
            hideCodeTooltip
          };
        }
        exports2.createShowHideFn = createShowHideFn;
        function bindTooltipEvent(editor) {
          var _a = createShowHideFn(editor), showCodeTooltip = _a.showCodeTooltip, hideCodeTooltip = _a.hideCodeTooltip;
          editor.txt.eventHooks.codeClickEvents.push(showCodeTooltip);
          editor.txt.eventHooks.clickEvents.push(hideCodeTooltip);
          editor.txt.eventHooks.toolbarClickEvents.push(hideCodeTooltip);
          editor.txt.eventHooks.menuClickEvents.push(hideCodeTooltip);
          editor.txt.eventHooks.textScrollEvents.push(hideCodeTooltip);
        }
        exports2["default"] = bindTooltipEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var const_1 = __webpack_require__(7);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        function bindEventJumpCodeBlock(editor) {
          var $textElem = editor.$textElem, selection = editor.selection, txt = editor.txt;
          var keydownEvents = txt.eventHooks.keydownEvents;
          keydownEvents.push(function(e) {
            var _a;
            if (e.keyCode !== 40)
              return;
            var node = selection.getSelectionContainerElem();
            var $lastNode = (_a = $textElem.children()) === null || _a === void 0 ? void 0 : _a.last();
            if ((node === null || node === void 0 ? void 0 : node.elems[0].tagName) === "XMP" && ($lastNode === null || $lastNode === void 0 ? void 0 : $lastNode.elems[0].tagName) === "PRE") {
              var $emptyP = dom_core_1["default"](const_1.EMPTY_P);
              $textElem.append($emptyP);
            }
          });
          keydownEvents.push(function(e) {
            editor.selection.saveRange();
            var $selectionContainerElem = selection.getSelectionContainerElem();
            if ($selectionContainerElem) {
              var $topElem = $selectionContainerElem.getNodeTop(editor);
              var $preElem = $topElem === null || $topElem === void 0 ? void 0 : $topElem.prev();
              var $nextElem = $topElem === null || $topElem === void 0 ? void 0 : $topElem.getNextSibling();
              if ($preElem.length && ($preElem === null || $preElem === void 0 ? void 0 : $preElem.getNodeName()) === "PRE" && $nextElem.length === 0) {
                if (selection.getCursorPos() === 0) {
                  if (e.keyCode === 8) {
                    var $emptyP = dom_core_1["default"](const_1.EMPTY_P);
                    $textElem.append($emptyP);
                  }
                }
              }
            }
          });
        }
        exports2["default"] = bindEventJumpCodeBlock;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var BtnMenu_1 = tslib_1.__importDefault(__webpack_require__(23));
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var index_1 = tslib_1.__importDefault(__webpack_require__(407));
        var util_1 = __webpack_require__(6);
        var const_1 = __webpack_require__(7);
        var splitLine = function(_super) {
          tslib_1.__extends(splitLine2, _super);
          function splitLine2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u5206\u5272\u7EBF"><i class="w-e-icon-split-line"></i></div>');
            _this = _super.call(this, $elem, editor) || this;
            index_1["default"](editor);
            return _this;
          }
          splitLine2.prototype.clickHandler = function() {
            var editor = this.editor;
            var range = editor.selection.getRange();
            var $selectionElem = editor.selection.getSelectionContainerElem();
            if (!($selectionElem === null || $selectionElem === void 0 ? void 0 : $selectionElem.length))
              return;
            var $DomElement = dom_core_1["default"]($selectionElem.elems[0]);
            var $tableDOM = $DomElement.parentUntil("TABLE", $selectionElem.elems[0]);
            var $imgDOM = $DomElement.children();
            if ($DomElement.getNodeName() === "CODE")
              return;
            if ($tableDOM && dom_core_1["default"]($tableDOM.elems[0]).getNodeName() === "TABLE")
              return;
            if ($imgDOM && $imgDOM.length !== 0 && dom_core_1["default"]($imgDOM.elems[0]).getNodeName() === "IMG" && !(range === null || range === void 0 ? void 0 : range.collapsed)) {
              return;
            }
            this.createSplitLine();
          };
          splitLine2.prototype.createSplitLine = function() {
            var splitLineDOM = "<hr/>" + const_1.EMPTY_P;
            if (util_1.UA.isFirefox) {
              splitLineDOM = "<hr/><p></p>";
            }
            this.editor.cmd["do"]("insertHTML", splitLineDOM);
          };
          splitLine2.prototype.tryChangeActive = function() {
          };
          return splitLine2;
        }(BtnMenu_1["default"]);
        exports2["default"] = splitLine;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var tooltip_event_1 = tslib_1.__importDefault(__webpack_require__(408));
        function bindEvent(editor) {
          tooltip_event_1["default"](editor);
        }
        exports2["default"] = bindEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var Tooltip_1 = tslib_1.__importDefault(__webpack_require__(38));
        function createShowHideFn(editor) {
          var tooltip;
          function showSplitLineTooltip($splitLine) {
            var conf = [{
              $elem: dom_core_1["default"]("<span>" + editor.i18next.t("menus.panelMenus.\u5220\u9664") + "</span>"),
              onClick: function onClick(editor2, $splitLine2) {
                editor2.selection.createRangeByElem($splitLine2);
                editor2.selection.restoreSelection();
                editor2.cmd["do"]("delete");
                return true;
              }
            }];
            tooltip = new Tooltip_1["default"](editor, $splitLine, conf);
            tooltip.create();
          }
          function hideSplitLineTooltip() {
            if (tooltip) {
              tooltip.remove();
              tooltip = null;
            }
          }
          return {
            showSplitLineTooltip,
            hideSplitLineTooltip
          };
        }
        function bindTooltipEvent(editor) {
          var _a = createShowHideFn(editor), showSplitLineTooltip = _a.showSplitLineTooltip, hideSplitLineTooltip = _a.hideSplitLineTooltip;
          editor.txt.eventHooks.splitLineEvents.push(showSplitLineTooltip);
          editor.txt.eventHooks.clickEvents.push(hideSplitLineTooltip);
          editor.txt.eventHooks.keyupEvents.push(hideSplitLineTooltip);
          editor.txt.eventHooks.toolbarClickEvents.push(hideSplitLineTooltip);
          editor.txt.eventHooks.menuClickEvents.push(hideSplitLineTooltip);
          editor.txt.eventHooks.textScrollEvents.push(hideSplitLineTooltip);
        }
        exports2["default"] = bindTooltipEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var BtnMenu_1 = tslib_1.__importDefault(__webpack_require__(23));
        var util_1 = __webpack_require__(97);
        var bind_event_1 = tslib_1.__importDefault(__webpack_require__(415));
        var todo_1 = tslib_1.__importDefault(__webpack_require__(140));
        var Todo = function(_super) {
          tslib_1.__extends(Todo2, _super);
          function Todo2(editor) {
            var _this = this;
            var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u5F85\u529E\u4E8B\u9879">\n                    <i class="w-e-icon-checkbox-checked"></i>\n                </div>');
            _this = _super.call(this, $elem, editor) || this;
            bind_event_1["default"](editor);
            return _this;
          }
          Todo2.prototype.clickHandler = function() {
            var editor = this.editor;
            if (!util_1.isAllTodo(editor)) {
              this.setTodo();
            } else {
              this.cancelTodo();
              this.tryChangeActive();
            }
          };
          Todo2.prototype.tryChangeActive = function() {
            if (util_1.isAllTodo(this.editor)) {
              this.active();
            } else {
              this.unActive();
            }
          };
          Todo2.prototype.setTodo = function() {
            var editor = this.editor;
            var topNodeElem = editor.selection.getSelectionRangeTopNodes();
            (0, _forEach["default"])(topNodeElem).call(topNodeElem, function($node) {
              var _a;
              var nodeName = $node === null || $node === void 0 ? void 0 : $node.getNodeName();
              if (nodeName === "P") {
                var todo = todo_1["default"]($node);
                var todoNode = todo.getTodo();
                var child = (_a = todoNode.children()) === null || _a === void 0 ? void 0 : _a.getNode();
                todoNode.insertAfter($node);
                editor.selection.moveCursor(child);
                $node.remove();
              }
            });
            this.tryChangeActive();
          };
          Todo2.prototype.cancelTodo = function() {
            var editor = this.editor;
            var $topNodeElems = editor.selection.getSelectionRangeTopNodes();
            (0, _forEach["default"])($topNodeElems).call($topNodeElems, function($topNodeElem) {
              var _a, _b, _c;
              var content = (_b = (_a = $topNodeElem.childNodes()) === null || _a === void 0 ? void 0 : _a.childNodes()) === null || _b === void 0 ? void 0 : _b.clone(true);
              var $p = dom_core_1["default"]("<p></p>");
              $p.append(content);
              $p.insertAfter($topNodeElem);
              (_c = $p.childNodes()) === null || _c === void 0 ? void 0 : _c.get(0).remove();
              editor.selection.moveCursor($p.getNode());
              $topNodeElem.remove();
            });
          };
          return Todo2;
        }(BtnMenu_1["default"]);
        exports2["default"] = Todo;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(411);
      },
      function(module2, exports2, __webpack_require__) {
        var parent = __webpack_require__(412);
        module2.exports = parent;
      },
      function(module2, exports2, __webpack_require__) {
        var every = __webpack_require__(413);
        var ArrayPrototype = Array.prototype;
        module2.exports = function(it) {
          var own = it.every;
          return it === ArrayPrototype || it instanceof Array && own === ArrayPrototype.every ? every : own;
        };
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(414);
        var entryVirtual = __webpack_require__(15);
        module2.exports = entryVirtual("Array").every;
      },
      function(module2, exports2, __webpack_require__) {
        var $ = __webpack_require__(5);
        var $every = __webpack_require__(30).every;
        var arrayMethodIsStrict = __webpack_require__(67);
        var arrayMethodUsesToLength = __webpack_require__(22);
        var STRICT_METHOD = arrayMethodIsStrict("every");
        var USES_TO_LENGTH = arrayMethodUsesToLength("every");
        $({ target: "Array", proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
          every: function every(callbackfn) {
            return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var util_1 = __webpack_require__(97);
        var todo_1 = tslib_1.__importDefault(__webpack_require__(140));
        var util_2 = __webpack_require__(97);
        var const_1 = __webpack_require__(7);
        function bindEvent(editor) {
          function todoEnter(e) {
            var _a, _b;
            if (util_1.isAllTodo(editor)) {
              e.preventDefault();
              var selection = editor.selection;
              var $topSelectElem = selection.getSelectionRangeTopNodes()[0];
              var $li = (_a = $topSelectElem.childNodes()) === null || _a === void 0 ? void 0 : _a.get(0);
              var selectionNode = (_b = window.getSelection()) === null || _b === void 0 ? void 0 : _b.anchorNode;
              var range = selection.getRange();
              if (!(range === null || range === void 0 ? void 0 : range.collapsed)) {
                var rangeChildNodes = range === null || range === void 0 ? void 0 : range.commonAncestorContainer.childNodes;
                var startContainer_1 = range === null || range === void 0 ? void 0 : range.startContainer;
                var endContainer_1 = range === null || range === void 0 ? void 0 : range.endContainer;
                var startPos = range === null || range === void 0 ? void 0 : range.startOffset;
                var endPos = range === null || range === void 0 ? void 0 : range.endOffset;
                var startElemIndex_1 = 0;
                var endElemIndex_1 = 0;
                var delList_1 = [];
                rangeChildNodes === null || rangeChildNodes === void 0 ? void 0 : (0, _forEach["default"])(rangeChildNodes).call(rangeChildNodes, function(v, i) {
                  if (v.contains(startContainer_1))
                    startElemIndex_1 = i;
                  if (v.contains(endContainer_1))
                    endElemIndex_1 = i;
                });
                if (endElemIndex_1 - startElemIndex_1 > 1) {
                  rangeChildNodes === null || rangeChildNodes === void 0 ? void 0 : (0, _forEach["default"])(rangeChildNodes).call(rangeChildNodes, function(v, i) {
                    if (i <= startElemIndex_1)
                      return;
                    if (i >= endElemIndex_1)
                      return;
                    delList_1.push(v);
                  });
                  (0, _forEach["default"])(delList_1).call(delList_1, function(v) {
                    v.remove();
                  });
                }
                util_2.dealTextNode(startContainer_1, startPos);
                util_2.dealTextNode(endContainer_1, endPos, false);
                editor.selection.moveCursor(endContainer_1, 0);
              }
              if ($topSelectElem.text() === "") {
                var $p = dom_core_1["default"](const_1.EMPTY_P);
                $p.insertAfter($topSelectElem);
                selection.moveCursor($p.getNode());
                $topSelectElem.remove();
                return;
              }
              var pos = selection.getCursorPos();
              var CursorNextNode = util_1.getCursorNextNode($li === null || $li === void 0 ? void 0 : $li.getNode(), selectionNode, pos);
              var todo = todo_1["default"](dom_core_1["default"](CursorNextNode));
              var $inputcontainer = todo.getInputContainer();
              var todoLiElem = $inputcontainer.parent().getNode();
              var $newTodo = todo.getTodo();
              var contentSection = $inputcontainer.getNode().nextSibling;
              if (($li === null || $li === void 0 ? void 0 : $li.text()) === "") {
                $li === null || $li === void 0 ? void 0 : $li.append(dom_core_1["default"]("<br>"));
              }
              $newTodo.insertAfter($topSelectElem);
              if (!contentSection || (contentSection === null || contentSection === void 0 ? void 0 : contentSection.textContent) === "") {
                if ((contentSection === null || contentSection === void 0 ? void 0 : contentSection.nodeName) !== "BR") {
                  var $br = dom_core_1["default"]("<br>");
                  $br.insertAfter($inputcontainer);
                }
                selection.moveCursor(todoLiElem, 1);
              } else {
                selection.moveCursor(todoLiElem);
              }
            }
          }
          function delDown(e) {
            var _a, _b;
            if (util_1.isAllTodo(editor)) {
              var selection = editor.selection;
              var $topSelectElem = selection.getSelectionRangeTopNodes()[0];
              var $li = (_a = $topSelectElem.childNodes()) === null || _a === void 0 ? void 0 : _a.getNode();
              var $p = dom_core_1["default"]("<p></p>");
              var p_1 = $p.getNode();
              var selectionNode = (_b = window.getSelection()) === null || _b === void 0 ? void 0 : _b.anchorNode;
              var pos = selection.getCursorPos();
              var prevNode = selectionNode.previousSibling;
              if ($topSelectElem.text() === "") {
                e.preventDefault();
                var $newP = dom_core_1["default"](const_1.EMPTY_P);
                $newP.insertAfter($topSelectElem);
                $topSelectElem.remove();
                selection.moveCursor($newP.getNode(), 0);
                return;
              }
              if ((prevNode === null || prevNode === void 0 ? void 0 : prevNode.nodeName) === "SPAN" && prevNode.childNodes[0].nodeName === "INPUT" && pos === 0) {
                var _context;
                e.preventDefault();
                $li === null || $li === void 0 ? void 0 : (0, _forEach["default"])(_context = $li.childNodes).call(_context, function(v, index2) {
                  if (index2 === 0)
                    return;
                  p_1.appendChild(v.cloneNode(true));
                });
                $p.insertAfter($topSelectElem);
                $topSelectElem.remove();
              }
            }
          }
          function deleteUp() {
            var selection = editor.selection;
            var $topSelectElem = selection.getSelectionRangeTopNodes()[0];
            if ($topSelectElem && util_2.isTodo($topSelectElem)) {
              if ($topSelectElem.text() === "") {
                dom_core_1["default"](const_1.EMPTY_P).insertAfter($topSelectElem);
                $topSelectElem.remove();
              }
            }
          }
          function inputClick(e) {
            if (e && e.target instanceof HTMLInputElement) {
              if (e.target.type === "checkbox") {
                if (e.target.checked) {
                  e.target.setAttribute("checked", "true");
                } else {
                  e.target.removeAttribute("checked");
                }
              }
            }
          }
          editor.txt.eventHooks.enterDownEvents.push(todoEnter);
          editor.txt.eventHooks.deleteUpEvents.push(deleteUp);
          editor.txt.eventHooks.deleteDownEvents.push(delDown);
          editor.txt.eventHooks.clickEvents.push(inputClick);
        }
        exports2["default"] = bindEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.selectorValidator = void 0;
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var util_1 = __webpack_require__(6);
        var const_1 = __webpack_require__(7);
        var text_1 = tslib_1.__importDefault(__webpack_require__(129));
        var styleSettings = {
          border: "1px solid #c9d8db",
          toolbarBgColor: "#FFF",
          toolbarBottomBorder: "1px solid #EEE"
        };
        function default_1(editor) {
          var toolbarSelector = editor.toolbarSelector;
          var $toolbarSelector = dom_core_1["default"](toolbarSelector);
          var textSelector = editor.textSelector;
          var config = editor.config;
          var height = config.height;
          var i18next = editor.i18next;
          var $toolbarElem = dom_core_1["default"]("<div></div>");
          var $textContainerElem = dom_core_1["default"]("<div></div>");
          var $textElem;
          var $children;
          var $subChildren = null;
          if (textSelector == null) {
            $children = $toolbarSelector.children();
            $toolbarSelector.append($toolbarElem).append($textContainerElem);
            $toolbarElem.css("background-color", styleSettings.toolbarBgColor).css("border", styleSettings.border).css("border-bottom", styleSettings.toolbarBottomBorder);
            $textContainerElem.css("border", styleSettings.border).css("border-top", "none").css("height", height + "px");
          } else {
            $toolbarSelector.append($toolbarElem);
            $subChildren = dom_core_1["default"](textSelector).children();
            dom_core_1["default"](textSelector).append($textContainerElem);
            $children = $textContainerElem.children();
          }
          $textElem = dom_core_1["default"]("<div></div>");
          $textElem.attr("contenteditable", "true").css("width", "100%").css("height", "100%");
          var $placeholder;
          var placeholder = editor.config.placeholder;
          if (placeholder !== text_1["default"].placeholder) {
            $placeholder = dom_core_1["default"]("<div>" + placeholder + "</div>");
          } else {
            $placeholder = dom_core_1["default"]("<div>" + i18next.t(placeholder) + "</div>");
          }
          $placeholder.addClass("placeholder");
          if ($children && $children.length) {
            $textElem.append($children);
            $placeholder.hide();
          } else {
            $textElem.append(dom_core_1["default"](const_1.EMPTY_P));
          }
          if ($subChildren && $subChildren.length) {
            $textElem.append($subChildren);
            $placeholder.hide();
          }
          $textContainerElem.append($textElem);
          $textContainerElem.append($placeholder);
          $toolbarElem.addClass("w-e-toolbar").css("z-index", editor.zIndex.get("toolbar"));
          $textContainerElem.addClass("w-e-text-container");
          $textContainerElem.css("z-index", editor.zIndex.get());
          $textElem.addClass("w-e-text");
          var toolbarElemId = util_1.getRandom("toolbar-elem");
          $toolbarElem.attr("id", toolbarElemId);
          var textElemId = util_1.getRandom("text-elem");
          $textElem.attr("id", textElemId);
          var textContainerCliheight = $textContainerElem.getBoundingClientRect().height;
          var textElemClientHeight = $textElem.getBoundingClientRect().height;
          if (textContainerCliheight !== textElemClientHeight) {
            $textElem.css("min-height", textContainerCliheight + "px");
          }
          editor.$toolbarElem = $toolbarElem;
          editor.$textContainerElem = $textContainerElem;
          editor.$textElem = $textElem;
          editor.toolbarElemId = toolbarElemId;
          editor.textElemId = textElemId;
        }
        exports2["default"] = default_1;
        function selectorValidator(editor) {
          var name = "data-we-id";
          var regexp = /^wangEditor-\d+$/;
          var textSelector = editor.textSelector, toolbarSelector = editor.toolbarSelector;
          var $el = {
            bar: dom_core_1["default"]("<div></div>"),
            text: dom_core_1["default"]("<div></div>")
          };
          if (toolbarSelector == null) {
            throw new Error("\u9519\u8BEF\uFF1A\u521D\u59CB\u5316\u7F16\u8F91\u5668\u65F6\u5019\u672A\u4F20\u5165\u4EFB\u4F55\u53C2\u6570\uFF0C\u8BF7\u67E5\u9605\u6587\u6863");
          } else {
            $el.bar = dom_core_1["default"](toolbarSelector);
            if (!$el.bar.elems.length) {
              throw new Error("\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A" + toolbarSelector);
            }
            if (regexp.test($el.bar.attr(name))) {
              throw new Error("\u521D\u59CB\u5316\u8282\u70B9\u5DF2\u5B58\u5728\u7F16\u8F91\u5668\u5B9E\u4F8B\uFF0C\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA\u7F16\u8F91\u5668");
            }
          }
          if (textSelector) {
            $el.text = dom_core_1["default"](textSelector);
            if (!$el.text.elems.length) {
              throw new Error("\u65E0\u6548\u7684\u8282\u70B9\u9009\u62E9\u5668\uFF1A" + textSelector);
            }
            if (regexp.test($el.text.attr(name))) {
              throw new Error("\u521D\u59CB\u5316\u8282\u70B9\u5DF2\u5B58\u5728\u7F16\u8F91\u5668\u5B9E\u4F8B\uFF0C\u65E0\u6CD5\u91CD\u590D\u521B\u5EFA\u7F16\u8F91\u5668");
            }
          }
          $el.bar.attr(name, editor.id);
          $el.text.attr(name, editor.id);
          editor.beforeDestroy(function() {
            $el.bar.removeAttr(name);
            $el.text.removeAttr(name);
          });
        }
        exports2.selectorValidator = selectorValidator;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var const_1 = __webpack_require__(7);
        function initSelection(editor, newLine) {
          var $textElem = editor.$textElem;
          var $children = $textElem.children();
          if (!$children || !$children.length) {
            $textElem.append(dom_core_1["default"](const_1.EMPTY_P));
            initSelection(editor);
            return;
          }
          var $last = $children.last();
          if (newLine) {
            var html = $last.html().toLowerCase();
            var nodeName = $last.getNodeName();
            if (html !== "<br>" && html !== "<br/>" || nodeName !== "P") {
              $textElem.append(dom_core_1["default"](const_1.EMPTY_P));
              initSelection(editor);
              return;
            }
          }
          editor.selection.createRangeByElem($last, false, true);
          if (editor.config.focus) {
            editor.selection.restoreSelection();
          } else {
            editor.selection.clearWindowSelectionRange();
          }
        }
        exports2["default"] = initSelection;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        function bindEvent(editor) {
          _bindChange(editor);
          _bindFocusAndBlur(editor);
          _bindInput(editor);
        }
        function _bindChange(editor) {
          editor.txt.eventHooks.changeEvents.push(function() {
            var onchange = editor.config.onchange;
            if (onchange) {
              var html = editor.txt.html() || "";
              editor.isFocus = true;
              onchange(html);
            }
            editor.txt.togglePlaceholder();
          });
        }
        function _bindFocusAndBlur(editor) {
          editor.isFocus = false;
          function listener(e) {
            var target = e.target;
            var $target = dom_core_1["default"](target);
            var $textElem = editor.$textElem;
            var $toolbarElem = editor.$toolbarElem;
            var isChild = $textElem.isContain($target);
            var isToolbar = $toolbarElem.isContain($target);
            var isMenu = $toolbarElem.elems[0] == e.target ? true : false;
            if (!isChild) {
              if (isToolbar && !isMenu || !editor.isFocus) {
                return;
              }
              _blurHandler(editor);
              editor.isFocus = false;
            } else {
              if (!editor.isFocus) {
                _focusHandler(editor);
              }
              editor.isFocus = true;
            }
          }
          if (document.activeElement === editor.$textElem.elems[0] && editor.config.focus) {
            _focusHandler(editor);
            editor.isFocus = true;
          }
          dom_core_1["default"](document).on("click", listener);
          editor.beforeDestroy(function() {
            dom_core_1["default"](document).off("click", listener);
          });
        }
        function _bindInput(editor) {
          editor.$textElem.on("compositionstart", function() {
            editor.isComposing = true;
            editor.txt.togglePlaceholder();
          }).on("compositionend", function() {
            editor.isComposing = false;
            editor.txt.togglePlaceholder();
          });
        }
        function _blurHandler(editor) {
          var _context;
          var config = editor.config;
          var onblur = config.onblur;
          var currentHtml = editor.txt.html() || "";
          (0, _forEach["default"])(_context = editor.txt.eventHooks.onBlurEvents).call(_context, function(fn) {
            return fn();
          });
          onblur(currentHtml);
        }
        function _focusHandler(editor) {
          var config = editor.config;
          var onfocus = config.onfocus;
          var currentHtml = editor.txt.html() || "";
          onfocus(currentHtml);
        }
        exports2["default"] = bindEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        function i18nextInit(editor) {
          var _a = editor.config, lang = _a.lang, languages = _a.languages;
          if (editor.i18next != null) {
            try {
              editor.i18next.init({
                ns: "wangEditor",
                lng: lang,
                defaultNS: "wangEditor",
                resources: languages
              });
            } catch (error) {
              throw new Error("i18next:" + error);
            }
            return;
          }
          editor.i18next = {
            t: function t(str) {
              var strArr = str.split(".");
              return strArr[strArr.length - 1];
            }
          };
        }
        exports2["default"] = i18nextInit;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _find = _interopRequireDefault(__webpack_require__(31));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.setUnFullScreen = exports2.setFullScreen = void 0;
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        __webpack_require__(421);
        var iconFullScreenText = "w-e-icon-fullscreen";
        var iconExitFullScreenText = "w-e-icon-fullscreen_exit";
        var classfullScreenEditor = "w-e-full-screen-editor";
        exports2.setFullScreen = function(editor) {
          var $editorParent = dom_core_1["default"](editor.toolbarSelector);
          var $textContainerElem = editor.$textContainerElem;
          var $toolbarElem = editor.$toolbarElem;
          var $iconElem = (0, _find["default"])($toolbarElem).call($toolbarElem, "i." + iconFullScreenText);
          var config = editor.config;
          $iconElem.removeClass(iconFullScreenText);
          $iconElem.addClass(iconExitFullScreenText);
          $editorParent.addClass(classfullScreenEditor);
          $editorParent.css("z-index", config.zIndexFullScreen);
          var bar = $toolbarElem.getBoundingClientRect();
          $textContainerElem.css("height", "calc(100% - " + bar.height + "px)");
        };
        exports2.setUnFullScreen = function(editor) {
          var $editorParent = dom_core_1["default"](editor.toolbarSelector);
          var $textContainerElem = editor.$textContainerElem;
          var $toolbarElem = editor.$toolbarElem;
          var $iconElem = (0, _find["default"])($toolbarElem).call($toolbarElem, "i." + iconExitFullScreenText);
          var config = editor.config;
          $iconElem.removeClass(iconExitFullScreenText);
          $iconElem.addClass(iconFullScreenText);
          $editorParent.removeClass(classfullScreenEditor);
          $editorParent.css("z-index", "auto");
          $textContainerElem.css("height", config.height + "px");
        };
        var initFullScreen = function initFullScreen2(editor) {
          if (editor.textSelector)
            return;
          if (!editor.config.showFullScreen)
            return;
          var $toolbarElem = editor.$toolbarElem;
          var $elem = dom_core_1["default"]('<div class="w-e-menu" data-title="\u5168\u5C4F">\n            <i class="' + iconFullScreenText + '"></i>\n        </div>');
          $elem.on("click", function(e) {
            var _context;
            var $elemIcon = (0, _find["default"])(_context = dom_core_1["default"](e.currentTarget)).call(_context, "i");
            if ($elemIcon.hasClass(iconFullScreenText)) {
              $elem.attr("data-title", "\u53D6\u6D88\u5168\u5C4F");
              exports2.setFullScreen(editor);
            } else {
              $elem.attr("data-title", "\u5168\u5C4F");
              exports2.setUnFullScreen(editor);
            }
          });
          $toolbarElem.append($elem);
        };
        exports2["default"] = initFullScreen;
      },
      function(module2, exports2, __webpack_require__) {
        var api = __webpack_require__(20);
        var content = __webpack_require__(422);
        content = content.__esModule ? content.default : content;
        if (typeof content === "string") {
          content = [[module2.i, content, ""]];
        }
        var options = {};
        options.insert = "head";
        options.singleton = false;
        api(content, options);
        module2.exports = content.locals || {};
      },
      function(module2, exports2, __webpack_require__) {
        var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
        exports2 = ___CSS_LOADER_API_IMPORT___(false);
        exports2.push([module2.i, ".w-e-full-screen-editor {\n  position: fixed;\n  width: 100%!important;\n  height: 100%!important;\n  left: 0;\n  top: 0;\n}\n", ""]);
        module2.exports = exports2;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _find = _interopRequireDefault(__webpack_require__(31));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var scrollToHead = function scrollToHead2(editor, id) {
          var _context;
          var $textElem = editor.isEnable ? editor.$textElem : (0, _find["default"])(_context = editor.$textContainerElem).call(_context, ".w-e-content-mantle");
          var $targetHead = (0, _find["default"])($textElem).call($textElem, "[id='" + id + "']");
          var targetTop = $targetHead.getOffsetData().top;
          $textElem.scrollTop(targetTop);
        };
        exports2["default"] = scrollToHead;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var style_1 = tslib_1.__importDefault(__webpack_require__(128));
        var tier = {
          menu: 2,
          panel: 2,
          toolbar: 1,
          tooltip: 1,
          textContainer: 1
        };
        var ZIndex = function() {
          function ZIndex2() {
            this.tier = tier;
            this.baseZIndex = style_1["default"].zIndex;
          }
          ZIndex2.prototype.get = function(tierName) {
            if (tierName && this.tier[tierName]) {
              return this.baseZIndex + this.tier[tierName];
            }
            return this.baseZIndex;
          };
          ZIndex2.prototype.init = function(editor) {
            if (this.baseZIndex == style_1["default"].zIndex) {
              this.baseZIndex = editor.config.zIndex;
            }
          };
          return ZIndex2;
        }();
        exports2["default"] = ZIndex;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _filter = _interopRequireDefault(__webpack_require__(70));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var mutation_1 = tslib_1.__importDefault(__webpack_require__(426));
        var util_1 = __webpack_require__(6);
        var const_1 = __webpack_require__(7);
        function mutationsFilter(mutations, tar) {
          return (0, _filter["default"])(mutations).call(mutations, function(_a) {
            var type = _a.type, target = _a.target, attributeName = _a.attributeName;
            return type != "attributes" || type == "attributes" && (attributeName == "contenteditable" || target != tar);
          });
        }
        var Change = function(_super) {
          tslib_1.__extends(Change2, _super);
          function Change2(editor) {
            var _this = _super.call(this, function(mutations, observer) {
              var _a;
              mutations = mutationsFilter(mutations, observer.target);
              (_a = _this.data).push.apply(_a, mutations);
              if (!editor.isCompatibleMode) {
                if (!editor.isComposing) {
                  return _this.asyncSave();
                }
              } else {
                _this.asyncSave();
              }
            }) || this;
            _this.editor = editor;
            _this.data = [];
            _this.asyncSave = const_1.EMPTY_FN;
            return _this;
          }
          Change2.prototype.save = function() {
            if (this.data.length) {
              this.editor.history.save(this.data);
              this.data.length = 0;
              this.emit();
            }
          };
          Change2.prototype.emit = function() {
            var _context;
            (0, _forEach["default"])(_context = this.editor.txt.eventHooks.changeEvents).call(_context, function(fn) {
              return fn();
            });
          };
          Change2.prototype.observe = function() {
            var _this = this;
            _super.prototype.observe.call(this, this.editor.$textElem.elems[0]);
            var timeout = this.editor.config.onchangeTimeout;
            this.asyncSave = util_1.debounce(function() {
              _this.save();
            }, timeout);
            if (!this.editor.isCompatibleMode) {
              this.editor.$textElem.on("compositionend", function() {
                _this.asyncSave();
              });
            }
          };
          return Change2;
        }(mutation_1["default"]);
        exports2["default"] = Change;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var Mutation = function() {
          function Mutation2(fn, options) {
            var _this = this;
            this.options = {
              subtree: true,
              childList: true,
              attributes: true,
              attributeOldValue: true,
              characterData: true,
              characterDataOldValue: true
            };
            this.callback = function(mutations) {
              fn(mutations, _this);
            };
            this.observer = new MutationObserver(this.callback);
            options && (this.options = options);
          }
          (0, _defineProperty["default"])(Mutation2.prototype, "target", {
            get: function get() {
              return this.node;
            },
            enumerable: false,
            configurable: true
          });
          Mutation2.prototype.observe = function(node) {
            if (!(this.node instanceof Node)) {
              this.node = node;
              this.connect();
            }
          };
          Mutation2.prototype.connect = function() {
            if (this.node) {
              this.observer.observe(this.node, this.options);
              return this;
            }
            throw new Error("\u8FD8\u672A\u521D\u59CB\u5316\u7ED1\u5B9A\uFF0C\u8BF7\u60A8\u5148\u7ED1\u5B9A\u6709\u6548\u7684 Node \u8282\u70B9");
          };
          Mutation2.prototype.disconnect = function() {
            var list = this.observer.takeRecords();
            list.length && this.callback(list);
            this.observer.disconnect();
          };
          return Mutation2;
        }();
        exports2["default"] = Mutation;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var content_1 = tslib_1.__importDefault(__webpack_require__(428));
        var scroll_1 = tslib_1.__importDefault(__webpack_require__(435));
        var range_1 = tslib_1.__importDefault(__webpack_require__(436));
        var History = function() {
          function History2(editor) {
            this.editor = editor;
            this.content = new content_1["default"](editor);
            this.scroll = new scroll_1["default"](editor);
            this.range = new range_1["default"](editor);
          }
          (0, _defineProperty["default"])(History2.prototype, "size", {
            get: function get() {
              return this.scroll.size;
            },
            enumerable: false,
            configurable: true
          });
          History2.prototype.observe = function() {
            this.content.observe();
            this.scroll.observe();
            !this.editor.isCompatibleMode && this.range.observe();
          };
          History2.prototype.save = function(mutations) {
            if (mutations.length) {
              this.content.save(mutations);
              this.scroll.save();
              !this.editor.isCompatibleMode && this.range.save();
            }
          };
          History2.prototype.revoke = function() {
            this.editor.change.disconnect();
            var res = this.content.revoke();
            if (res) {
              this.scroll.revoke();
              if (!this.editor.isCompatibleMode) {
                this.range.revoke();
                this.editor.$textElem.focus();
              }
            }
            this.editor.change.connect();
            res && this.editor.change.emit();
          };
          History2.prototype.restore = function() {
            this.editor.change.disconnect();
            var res = this.content.restore();
            if (res) {
              this.scroll.restore();
              if (!this.editor.isCompatibleMode) {
                this.range.restore();
                this.editor.$textElem.focus();
              }
            }
            this.editor.change.connect();
            res && this.editor.change.emit();
          };
          return History2;
        }();
        exports2["default"] = History;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var node_1 = tslib_1.__importDefault(__webpack_require__(429));
        var html_1 = tslib_1.__importDefault(__webpack_require__(433));
        var ContentCache = function() {
          function ContentCache2(editor) {
            this.editor = editor;
          }
          ContentCache2.prototype.observe = function() {
            if (this.editor.isCompatibleMode) {
              this.cache = new html_1["default"](this.editor);
            } else {
              this.cache = new node_1["default"](this.editor);
            }
            this.cache.observe();
          };
          ContentCache2.prototype.save = function(mutations) {
            if (this.editor.isCompatibleMode) {
              this.cache.save();
            } else {
              this.cache.compile(mutations);
            }
          };
          ContentCache2.prototype.revoke = function() {
            var _a;
            return (_a = this.cache) === null || _a === void 0 ? void 0 : _a.revoke();
          };
          ContentCache2.prototype.restore = function() {
            var _a;
            return (_a = this.cache) === null || _a === void 0 ? void 0 : _a.restore();
          };
          return ContentCache2;
        }();
        exports2["default"] = ContentCache;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var cache_1 = tslib_1.__importDefault(__webpack_require__(98));
        var compile_1 = tslib_1.__importDefault(__webpack_require__(431));
        var decompilation_1 = __webpack_require__(432);
        var NodeCache = function(_super) {
          tslib_1.__extends(NodeCache2, _super);
          function NodeCache2(editor) {
            var _this = _super.call(this, editor.config.historyMaxSize) || this;
            _this.editor = editor;
            return _this;
          }
          NodeCache2.prototype.observe = function() {
            this.resetMaxSize(this.editor.config.historyMaxSize);
          };
          NodeCache2.prototype.compile = function(data) {
            this.save(compile_1["default"](data));
            return this;
          };
          NodeCache2.prototype.revoke = function() {
            return _super.prototype.revoke.call(this, function(data) {
              decompilation_1.revoke(data);
            });
          };
          NodeCache2.prototype.restore = function() {
            return _super.prototype.restore.call(this, function(data) {
              decompilation_1.restore(data);
            });
          };
          return NodeCache2;
        }(cache_1["default"]);
        exports2["default"] = NodeCache;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.CeilStack = void 0;
        var CeilStack = function() {
          function CeilStack2(max) {
            if (max === void 0) {
              max = 0;
            }
            this.data = [];
            this.max = 0;
            this.reset = false;
            max = Math.abs(max);
            max && (this.max = max);
          }
          CeilStack2.prototype.resetMax = function(maxSize) {
            maxSize = Math.abs(maxSize);
            if (!this.reset && !isNaN(maxSize)) {
              this.max = maxSize;
              this.reset = true;
            }
          };
          (0, _defineProperty["default"])(CeilStack2.prototype, "size", {
            get: function get() {
              return this.data.length;
            },
            enumerable: false,
            configurable: true
          });
          CeilStack2.prototype.instack = function(data) {
            this.data.unshift(data);
            if (this.max && this.size > this.max) {
              this.data.length = this.max;
            }
            return this;
          };
          CeilStack2.prototype.outstack = function() {
            return this.data.shift();
          };
          CeilStack2.prototype.clear = function() {
            this.data.length = 0;
            return this;
          };
          return CeilStack2;
        }();
        exports2.CeilStack = CeilStack;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        var _indexOf = _interopRequireDefault(__webpack_require__(27));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.compliePosition = exports2.complieNodes = exports2.compileValue = exports2.compileType = void 0;
        var util_1 = __webpack_require__(6);
        function compileType(data) {
          switch (data) {
            case "childList":
              return "node";
            case "attributes":
              return "attr";
            default:
              return "text";
          }
        }
        exports2.compileType = compileType;
        function compileValue(data) {
          switch (data.type) {
            case "attributes":
              return data.target.getAttribute(data.attributeName) || "";
            case "characterData":
              return data.target.textContent;
            default:
              return "";
          }
        }
        exports2.compileValue = compileValue;
        function complieNodes(data) {
          var temp = {};
          if (data.addedNodes.length) {
            temp.add = util_1.toArray(data.addedNodes);
          }
          if (data.removedNodes.length) {
            temp.remove = util_1.toArray(data.removedNodes);
          }
          return temp;
        }
        exports2.complieNodes = complieNodes;
        function compliePosition(data) {
          var temp;
          if (data.previousSibling) {
            temp = {
              type: "before",
              target: data.previousSibling
            };
          } else if (data.nextSibling) {
            temp = {
              type: "after",
              target: data.nextSibling
            };
          } else {
            temp = {
              type: "parent",
              target: data.target
            };
          }
          return temp;
        }
        exports2.compliePosition = compliePosition;
        var tag = ["UL", "OL", "H1", "H2", "H3", "H4", "H5", "H6"];
        function compile(data) {
          var temp = [];
          var removeNode = false;
          var removeCache = [];
          (0, _forEach["default"])(data).call(data, function(record, index2) {
            var item = {
              type: compileType(record.type),
              target: record.target,
              attr: record.attributeName || "",
              value: compileValue(record) || "",
              oldValue: record.oldValue || "",
              nodes: complieNodes(record),
              position: compliePosition(record)
            };
            temp.push(item);
            if (!util_1.UA.isFirefox) {
              return;
            }
            if (removeNode && record.addedNodes.length && record.addedNodes[0].nodeType == 1) {
              var replenishNode = record.addedNodes[0];
              var replenishData = {
                type: "node",
                target: replenishNode,
                attr: "",
                value: "",
                oldValue: "",
                nodes: {
                  add: [removeNode]
                },
                position: {
                  type: "parent",
                  target: replenishNode
                }
              };
              if ((0, _indexOf["default"])(tag).call(tag, replenishNode.nodeName) != -1) {
                replenishData.nodes.add = util_1.toArray(replenishNode.childNodes);
                temp.push(replenishData);
              } else if (removeNode.nodeType == 3) {
                if (contains(replenishNode, removeCache)) {
                  replenishData.nodes.add = util_1.toArray(replenishNode.childNodes);
                }
                temp.push(replenishData);
              } else if ((0, _indexOf["default"])(tag).call(tag, record.target.nodeName) == -1 && contains(replenishNode, removeCache)) {
                replenishData.nodes.add = util_1.toArray(replenishNode.childNodes);
                temp.push(replenishData);
              }
            }
            if (item.type == "node" && record.removedNodes.length == 1) {
              removeNode = record.removedNodes[0];
              removeCache.push(removeNode);
            } else {
              removeNode = false;
              removeCache.length = 0;
            }
          });
          return temp;
        }
        exports2["default"] = compile;
        function contains(tar, childs) {
          var count = 0;
          for (var i = childs.length - 1; i > 0; i--) {
            if (tar.contains(childs[i])) {
              count++;
            } else {
              break;
            }
          }
          return count;
        }
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        var _entries = _interopRequireDefault(__webpack_require__(94));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.restore = exports2.revoke = void 0;
        function insertNode(data, list) {
          var reference = data.position.target;
          switch (data.position.type) {
            case "before":
              if (reference.nextSibling) {
                reference = reference.nextSibling;
                (0, _forEach["default"])(list).call(list, function(item) {
                  data.target.insertBefore(item, reference);
                });
              } else {
                (0, _forEach["default"])(list).call(list, function(item) {
                  data.target.appendChild(item);
                });
              }
              break;
            case "after":
              (0, _forEach["default"])(list).call(list, function(item) {
                data.target.insertBefore(item, reference);
              });
              break;
            default:
              (0, _forEach["default"])(list).call(list, function(item) {
                reference.appendChild(item);
              });
              break;
          }
        }
        function revokeNode(data) {
          for (var _i = 0, _a = (0, _entries["default"])(data.nodes); _i < _a.length; _i++) {
            var _b = _a[_i], relative = _b[0], list = _b[1];
            switch (relative) {
              case "add":
                (0, _forEach["default"])(list).call(list, function(item) {
                  data.target.removeChild(item);
                });
                break;
              default: {
                insertNode(data, list);
                break;
              }
            }
          }
        }
        function revokeAttr(data) {
          var target = data.target;
          if (data.oldValue == null) {
            target.removeAttribute(data.attr);
          } else {
            target.setAttribute(data.attr, data.oldValue);
          }
        }
        function revokeText(data) {
          data.target.textContent = data.oldValue;
        }
        var revokeFns = {
          node: revokeNode,
          text: revokeText,
          attr: revokeAttr
        };
        function revoke(data) {
          for (var i = data.length - 1; i > -1; i--) {
            var item = data[i];
            revokeFns[item.type](item);
          }
        }
        exports2.revoke = revoke;
        function restoreNode(data) {
          for (var _i = 0, _a = (0, _entries["default"])(data.nodes); _i < _a.length; _i++) {
            var _b = _a[_i], relative = _b[0], list = _b[1];
            switch (relative) {
              case "add": {
                insertNode(data, list);
                break;
              }
              default: {
                (0, _forEach["default"])(list).call(list, function(item) {
                  item.parentNode.removeChild(item);
                });
                break;
              }
            }
          }
        }
        function restoreText(data) {
          data.target.textContent = data.value;
        }
        function restoreAttr(data) {
          data.target.setAttribute(data.attr, data.value);
        }
        var restoreFns = {
          node: restoreNode,
          text: restoreText,
          attr: restoreAttr
        };
        function restore(data) {
          for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var item = data_1[_i];
            restoreFns[item.type](item);
          }
        }
        exports2.restore = restore;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var chain_1 = __webpack_require__(434);
        var HtmlCache = function() {
          function HtmlCache2(editor) {
            this.editor = editor;
            this.data = new chain_1.TailChain();
          }
          HtmlCache2.prototype.observe = function() {
            this.data.resetMax(this.editor.config.historyMaxSize);
            this.data.insertLast(this.editor.$textElem.html());
          };
          HtmlCache2.prototype.save = function() {
            this.data.insertLast(this.editor.$textElem.html());
            return this;
          };
          HtmlCache2.prototype.revoke = function() {
            var data = this.data.prev();
            if (data) {
              this.editor.$textElem.html(data);
              return true;
            }
            return false;
          };
          HtmlCache2.prototype.restore = function() {
            var data = this.data.next();
            if (data) {
              this.editor.$textElem.html(data);
              return true;
            }
            return false;
          };
          return HtmlCache2;
        }();
        exports2["default"] = HtmlCache;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _splice = _interopRequireDefault(__webpack_require__(91));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.TailChain = void 0;
        var TailChain = function() {
          function TailChain2() {
            this.data = [];
            this.max = 0;
            this.point = 0;
            this.isRe = false;
          }
          TailChain2.prototype.resetMax = function(maxSize) {
            maxSize = Math.abs(maxSize);
            maxSize && (this.max = maxSize);
          };
          (0, _defineProperty["default"])(TailChain2.prototype, "size", {
            get: function get() {
              return this.data.length;
            },
            enumerable: false,
            configurable: true
          });
          TailChain2.prototype.insertLast = function(data) {
            if (this.isRe) {
              var _context;
              (0, _splice["default"])(_context = this.data).call(_context, this.point + 1);
              this.isRe = false;
            }
            this.data.push(data);
            while (this.max && this.size > this.max) {
              this.data.shift();
            }
            this.point = this.size - 1;
            return this;
          };
          TailChain2.prototype.current = function() {
            return this.data[this.point];
          };
          TailChain2.prototype.prev = function() {
            !this.isRe && (this.isRe = true);
            this.point--;
            if (this.point < 0) {
              this.point = 0;
              return void 0;
            }
            return this.current();
          };
          TailChain2.prototype.next = function() {
            !this.isRe && (this.isRe = true);
            this.point++;
            if (this.point >= this.size) {
              this.point = this.size - 1;
              return void 0;
            }
            return this.current();
          };
          return TailChain2;
        }();
        exports2.TailChain = TailChain;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var cache_1 = tslib_1.__importDefault(__webpack_require__(98));
        var ScrollCache = function(_super) {
          tslib_1.__extends(ScrollCache2, _super);
          function ScrollCache2(editor) {
            var _this = _super.call(this, editor.config.historyMaxSize) || this;
            _this.editor = editor;
            _this.last = 0;
            _this.target = editor.$textElem.elems[0];
            return _this;
          }
          ScrollCache2.prototype.observe = function() {
            var _this = this;
            this.target = this.editor.$textElem.elems[0];
            this.editor.$textElem.on("scroll", function() {
              _this.last = _this.target.scrollTop;
            });
            this.resetMaxSize(this.editor.config.historyMaxSize);
          };
          ScrollCache2.prototype.save = function() {
            _super.prototype.save.call(this, [this.last, this.target.scrollTop]);
            return this;
          };
          ScrollCache2.prototype.revoke = function() {
            var _this = this;
            return _super.prototype.revoke.call(this, function(data) {
              _this.target.scrollTop = data[0];
            });
          };
          ScrollCache2.prototype.restore = function() {
            var _this = this;
            return _super.prototype.restore.call(this, function(data) {
              _this.target.scrollTop = data[1];
            });
          };
          return ScrollCache2;
        }(cache_1["default"]);
        exports2["default"] = ScrollCache;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var cache_1 = tslib_1.__importDefault(__webpack_require__(98));
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        var util_1 = __webpack_require__(6);
        function rangeToObject(range) {
          return {
            start: [range.startContainer, range.startOffset],
            end: [range.endContainer, range.endOffset],
            root: range.commonAncestorContainer,
            collapsed: range.collapsed
          };
        }
        var RangeCache = function(_super) {
          tslib_1.__extends(RangeCache2, _super);
          function RangeCache2(editor) {
            var _this = _super.call(this, editor.config.historyMaxSize) || this;
            _this.editor = editor;
            _this.lastRange = rangeToObject(document.createRange());
            _this.root = editor.$textElem.elems[0];
            _this.updateLastRange = util_1.debounce(function() {
              _this.lastRange = rangeToObject(_this.rangeHandle);
            }, editor.config.onchangeTimeout);
            return _this;
          }
          (0, _defineProperty["default"])(RangeCache2.prototype, "rangeHandle", {
            get: function get() {
              var selection = document.getSelection();
              return selection && selection.rangeCount ? selection.getRangeAt(0) : document.createRange();
            },
            enumerable: false,
            configurable: true
          });
          RangeCache2.prototype.observe = function() {
            var self2 = this;
            this.root = this.editor.$textElem.elems[0];
            this.resetMaxSize(this.editor.config.historyMaxSize);
            function selectionchange() {
              var handle = self2.rangeHandle;
              if (self2.root === handle.commonAncestorContainer || self2.root.contains(handle.commonAncestorContainer)) {
                if (!self2.editor.isComposing) {
                  self2.updateLastRange();
                }
              }
            }
            function deletecallback(e) {
              if (e.key == "Backspace" || e.key == "Delete") {
                self2.updateLastRange();
              }
            }
            dom_core_1["default"](document).on("selectionchange", selectionchange);
            this.editor.beforeDestroy(function() {
              dom_core_1["default"](document).off("selectionchange", selectionchange);
            });
            self2.editor.$textElem.on("keydown", deletecallback);
          };
          RangeCache2.prototype.save = function() {
            var current = rangeToObject(this.rangeHandle);
            _super.prototype.save.call(this, [this.lastRange, current]);
            this.lastRange = current;
            return this;
          };
          RangeCache2.prototype.set = function(range) {
            try {
              if (range) {
                var handle = this.rangeHandle;
                handle.setStart.apply(handle, range.start);
                handle.setEnd.apply(handle, range.end);
                this.editor.menus.changeActive();
                return true;
              }
            } catch (err) {
              return false;
            }
            return false;
          };
          RangeCache2.prototype.revoke = function() {
            var _this = this;
            return _super.prototype.revoke.call(this, function(data) {
              _this.set(data[0]);
            });
          };
          RangeCache2.prototype.restore = function() {
            var _this = this;
            return _super.prototype.restore.call(this, function(data) {
              _this.set(data[1]);
            });
          };
          return RangeCache2;
        }(cache_1["default"]);
        exports2["default"] = RangeCache;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _find = _interopRequireDefault(__webpack_require__(31));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var tslib_1 = __webpack_require__(2);
        var dom_core_1 = tslib_1.__importDefault(__webpack_require__(3));
        __webpack_require__(438);
        function disableInit(editor) {
          var isCurtain = false;
          var $contentDom;
          var $menuDom;
          editor.txt.eventHooks.changeEvents.push(function() {
            if (isCurtain) {
              (0, _find["default"])($contentDom).call($contentDom, ".w-e-content-preview").html(editor.$textElem.html());
            }
          });
          function disable() {
            if (isCurtain)
              return;
            editor.$textElem.hide();
            var textContainerZindexValue = editor.zIndex.get("textContainer");
            var content = editor.txt.html();
            $contentDom = dom_core_1["default"]('<div class="w-e-content-mantle" style="z-index:' + textContainerZindexValue + '">\n                <div class="w-e-content-preview w-e-text">' + content + "</div>\n            </div>");
            editor.$textContainerElem.append($contentDom);
            var menuZindexValue = editor.zIndex.get("menu");
            $menuDom = dom_core_1["default"]('<div class="w-e-menue-mantle" style="z-index:' + menuZindexValue + '"></div>');
            editor.$toolbarElem.append($menuDom);
            isCurtain = true;
            editor.isEnable = false;
          }
          function enable() {
            if (!isCurtain)
              return;
            $contentDom.remove();
            $menuDom.remove();
            editor.$textElem.show();
            isCurtain = false;
            editor.isEnable = true;
          }
          return {
            disable,
            enable
          };
        }
        exports2["default"] = disableInit;
      },
      function(module2, exports2, __webpack_require__) {
        var api = __webpack_require__(20);
        var content = __webpack_require__(439);
        content = content.__esModule ? content.default : content;
        if (typeof content === "string") {
          content = [[module2.i, content, ""]];
        }
        var options = {};
        options.insert = "head";
        options.singleton = false;
        api(content, options);
        module2.exports = content.locals || {};
      },
      function(module2, exports2, __webpack_require__) {
        var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(21);
        exports2 = ___CSS_LOADER_API_IMPORT___(false);
        exports2.push([module2.i, ".w-e-content-mantle {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n.w-e-content-mantle .w-e-content-preview {\n  width: 100%;\n  min-height: 100%;\n  padding: 0 10px;\n  line-height: 1.5;\n}\n.w-e-content-mantle .w-e-content-preview img {\n  cursor: default;\n}\n.w-e-content-mantle .w-e-content-preview img:hover {\n  box-shadow: none;\n}\n.w-e-menue-mantle {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n", ""]);
        module2.exports = exports2;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        var SelectionChange = function() {
          function SelectionChange2(editor) {
            var _this = this;
            this.editor = editor;
            var init = function init2() {
              var activeElement = document.activeElement;
              if (activeElement === editor.$textElem.elems[0]) {
                _this.emit();
              }
            };
            window.document.addEventListener("selectionchange", init);
            this.editor.beforeDestroy(function() {
              window.document.removeEventListener("selectionchange", init);
            });
          }
          SelectionChange2.prototype.emit = function() {
            var _a;
            var onSelectionChange = this.editor.config.onSelectionChange;
            if (onSelectionChange) {
              var selection = this.editor.selection;
              selection.saveRange();
              if (!selection.isSelectionEmpty())
                onSelectionChange({
                  text: selection.getSelectionText(),
                  html: (_a = selection.getSelectionContainerElem()) === null || _a === void 0 ? void 0 : _a.elems[0].innerHTML,
                  selection
                });
            }
          };
          return SelectionChange2;
        }();
        exports2["default"] = SelectionChange;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        var _assign = _interopRequireDefault(__webpack_require__(127));
        var _entries = _interopRequireDefault(__webpack_require__(94));
        var _forEach = _interopRequireDefault(__webpack_require__(4));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
        exports2.registerPlugin = void 0;
        var tslib_1 = __webpack_require__(2);
        var editor_1 = tslib_1.__importDefault(__webpack_require__(87));
        var util_1 = __webpack_require__(6);
        function registerPlugin(name, options, memory) {
          if (!name) {
            throw new TypeError("name is not define");
          }
          if (!options) {
            throw new TypeError("options is not define");
          }
          if (!options.intention) {
            throw new TypeError("options.intention is not define");
          }
          if (options.intention && typeof options.intention !== "function") {
            throw new TypeError("options.intention is not function");
          }
          if (memory[name]) {
            console.warn("plugin " + name + " \u5DF2\u5B58\u5728\uFF0C\u5DF2\u8986\u76D6\u3002");
          }
          memory[name] = options;
        }
        exports2.registerPlugin = registerPlugin;
        function initPlugins(editor) {
          var plugins = (0, _assign["default"])({}, util_1.deepClone(editor_1["default"].globalPluginsFunctionList), util_1.deepClone(editor.pluginsFunctionList));
          var values = (0, _entries["default"])(plugins);
          (0, _forEach["default"])(values).call(values, function(_a) {
            var name = _a[0], options = _a[1];
            console.info("plugin " + name + " initializing");
            var intention = options.intention, config = options.config;
            intention(editor, config);
            console.info("plugin " + name + " initialization complete");
          });
        }
        exports2["default"] = initPlugins;
      },
      function(module2, exports2, __webpack_require__) {
        var _interopRequireDefault = __webpack_require__(0);
        var _defineProperty = _interopRequireDefault(__webpack_require__(1));
        (0, _defineProperty["default"])(exports2, "__esModule", {
          value: true
        });
      }
    ])["default"];
  });
})(wangEditor);
var E = /* @__PURE__ */ getDefaultExportFromCjs(wangEditor.exports);
const _hoisted_1 = {
  key: 2,
  id: "editor"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    options: {
      type: Array,
      required: true
    },
    httpRequest: {
      type: Function
    }
  },
  emits: [
    "on-preview",
    "on-remove",
    "on-success",
    "on-error",
    "on-progress",
    "on-change",
    "before-upload",
    "before-remove",
    "on-exceed"
  ],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    let model = ref(null);
    let rules = ref(null);
    let form = ref();
    let edit = ref();
    let initForm = () => {
      if (props.options && props.options.length) {
        let m = {};
        let r = {};
        props.options.map((item) => {
          m[item.prop] = item.value;
          r[item.prop] = item.rules;
          if (item.type === "editor") {
            nextTick(() => {
              if (document.getElementById("editor")) {
                const editor = new E("#editor");
                editor.config.placeholder = item.placeholder;
                editor.create();
                editor.txt.html(item.value);
                editor.config.onchange = (newHtml) => {
                  model.value[item.prop] = newHtml;
                };
                edit.value = editor;
              }
            });
          }
        });
        model.value = lodash.exports.cloneDeep(m);
        rules.value = lodash.exports.cloneDeep(r);
      }
    };
    let resetFields = () => {
      form.value.resetFields();
      if (props.options && props.options.length) {
        let editorItem = props.options.find((item) => item.type === "editor");
        edit.value.txt.html(editorItem.value);
      }
    };
    let validate = () => {
      return form.value.validate;
    };
    let getFormData = () => {
      return model.value;
    };
    expose({
      resetFields,
      validate,
      getFormData
    });
    onMounted(() => {
      initForm();
    });
    watch(() => props.options, () => {
      initForm();
    }, { deep: true });
    let onPreview = (file) => {
      emits("on-preview", file);
    };
    let onRemove = (file, fileList) => {
      emits("on-remove", { file, fileList });
    };
    let onSuccess = (response, file, fileList) => {
      let uploadItem = props.options.find((item) => item.type === "upload");
      model.value[uploadItem.prop] = { response, file, fileList };
      emits("on-success", { response, file, fileList });
    };
    let onError = (err, file, fileList) => {
      emits("on-error", { err, file, fileList });
    };
    let onProgress = (event, file, fileList) => {
      emits("on-progress", { event, file, fileList });
    };
    let onChange = (file, fileList) => {
      emits("on-change", { file, fileList });
    };
    let beforeUpload = (file) => {
      emits("before-upload", file);
    };
    let beforeRemove = (file, fileList) => {
      emits("before-remove", { file, fileList });
    };
    let onExceed = (files, fileList) => {
      emits("on-exceed", { files, fileList });
    };
    return (_ctx, _cache) => {
      const _component_el_upload = resolveComponent("el-upload");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_form = resolveComponent("el-form");
      return unref(model) ? (openBlock(), createBlock(_component_el_form, mergeProps({
        key: 0,
        ref_key: "form",
        ref: form,
        "validate-on-rule-change": false,
        model: unref(model),
        rules: unref(rules)
      }, _ctx.$attrs), {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (item, index2) => {
            return openBlock(), createElementBlock(Fragment, { key: index2 }, [
              !item.children || !item.children.length ? (openBlock(), createBlock(_component_el_form_item, {
                key: 0,
                prop: item.prop,
                label: item.label
              }, {
                default: withCtx(() => [
                  item.type !== "upload" && item.type !== "editor" ? (openBlock(), createBlock(resolveDynamicComponent(`el-${item.type}`), mergeProps({
                    key: 0,
                    placeholder: item.placeholder
                  }, item.attrs, {
                    modelValue: unref(model)[item.prop],
                    "onUpdate:modelValue": ($event) => unref(model)[item.prop] = $event
                  }), null, 16, ["placeholder", "modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                  item.type === "upload" ? (openBlock(), createBlock(_component_el_upload, mergeProps({ key: 1 }, item.uploadAttrs, {
                    "on-preview": unref(onPreview),
                    "on-remove": unref(onRemove),
                    "on-success": unref(onSuccess),
                    "on-error": unref(onError),
                    "on-progress": unref(onProgress),
                    "on-change": unref(onChange),
                    "before-upload": unref(beforeUpload),
                    "before-remove": unref(beforeRemove),
                    "http-request": __props.httpRequest,
                    "on-exceed": unref(onExceed)
                  }), {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "uploadArea"),
                      renderSlot(_ctx.$slots, "uploadTip")
                    ]),
                    _: 2
                  }, 1040, ["on-preview", "on-remove", "on-success", "on-error", "on-progress", "on-change", "before-upload", "before-remove", "http-request", "on-exceed"])) : createCommentVNode("", true),
                  item.type === "editor" ? (openBlock(), createElementBlock("div", _hoisted_1)) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1032, ["prop", "label"])) : createCommentVNode("", true),
              item.children && item.children.length ? (openBlock(), createBlock(_component_el_form_item, {
                key: 1,
                prop: item.prop,
                label: item.label
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(`el-${item.type}`), mergeProps({
                    placeholder: item.placeholder
                  }, item.attrs, {
                    modelValue: unref(model)[item.prop],
                    "onUpdate:modelValue": ($event) => unref(model)[item.prop] = $event
                  }), {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(item.children, (child, i) => {
                        return openBlock(), createBlock(resolveDynamicComponent(`el-${child.type}`), {
                          key: i,
                          label: child.label,
                          value: child.value
                        }, null, 8, ["label", "value"]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1040, ["placeholder", "modelValue", "onUpdate:modelValue"]))
                ]),
                _: 2
              }, 1032, ["prop", "label"])) : createCommentVNode("", true)
            ], 64);
          }), 128)),
          createVNode(_component_el_form_item, null, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "action", {
                form: unref(form),
                model: unref(model)
              })
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 16, ["model", "rules"])) : createCommentVNode("", true);
    };
  }
});
var index = {
  install(app) {
    app.component("l-form", _sfc_main);
  }
};
export { index as default };
