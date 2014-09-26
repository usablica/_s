/**
 * Pythonic array slicing
 *
 * By Afshin Mehrabani (@afshinmeh)
 */

(function (root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    factory(exports);
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports'], factory);
  } else {
    // Browser globals
    factory(root);
  }
} (this, function (exports) {
  //Default config/variables
  var VERSION = '0.2.0';

  var _s = function (arr, expr) {
    var isStr = /string/.test(Object.prototype.toString.call(arr).toLowerCase());

    var length = arr.length;

    if (isStr) {
      var str = Array.prototype.slice.call(arr);
      length = str.length;
    }

    var exprParts = expr.split(':');

  if (exprParts.length > 0) {
    var from = parseInt(exprParts[0]);
    var to   = parseInt(exprParts[1]);
    var step = parseInt(exprParts[2]);

    //clone the array
    var arr = arr.slice(0);

    //return empty array if given array is empty
    if (length == 0) {
      return [];
    }

    //return the original array if there is no parameter
    if (isNaN(from) && isNaN(to) && isNaN(step)) {
      return arr;
    }

    //set default for `from` if they are not defined
    if (isNaN(from)) {
      // default value depends on reverse or not
      from = step < 0 ? length : 0;
    }

    //change `from` if we have negative `from`
    if (from < 0) {
      from = length + from + 1;
    }

    //set default for `to` if they are not defined
    if (isNaN(to)) {
      if ( expr.indexOf(':') == -1 ) {
        //means only one digital in expr
        to = from + 1;
      } else {
        // default value depends on reverse or not
        to = step < 0 ? 0 : length;
      }
    }

    //change `to` if we have negative `to`
    if (to < 0) {
      to = length + to + 1;
    }

    //reverse the array if we have negative `step`
    if (step < 0) {
      isStr ? str = str.reverse() : arr = arr.reverse();

      to = length - to;
      from = length - from;

      step = Math.abs(step);
    }

    //slice the array with `from` and `to` variables
    var slicedArr = isStr ? str.slice(from, to) : arr.slice(from, to);

    //return sliced array if there is no `step` value
    if (isNaN(step)) {
      return slicedArr;
    }

    var alteredArray = [];
    //apply `step` variable
    for (var i = 0, arrLength = slicedArr.length; i < arrLength;i = i + step) {
      alteredArray[alteredArray.length] = slicedArr[i];
    }

    return alteredArray;
  } else {
    throw Error('Bad expression for _s.')
  }
  };

  /**
   * Current _s version
   *
   * @property version
   * @type String
   */
  _s.version = VERSION;

  return exports._s = _s;
}));
