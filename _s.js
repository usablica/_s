/**
 * Pythonic array slicing
 *
 * By Afshin Mehrabani (@afshinmeh)
 */

Array.prototype._s = function (expr) {
  var exprParts = expr.split(':');

  if (exprParts.length > 0) {
    var from = parseInt(exprParts[0]);
    var to   = parseInt(exprParts[1]);
    var step = parseInt(exprParts[2]);

    //clone the array
    var arr = this.slice(0);

    //return empty array if given array is empty
    if (arr.length == 0) {
      return [];
    }

    //return the original array if there is no parameter
    if (isNaN(from) && isNaN(to) && isNaN(step)) {
      return arr;
    }

    //set default for `from` if they are not defined
    if (isNaN(from)) {
      from = step < 0 ? arr.length : 0;
    }

    if (from < 0) {
      from = arr.length + from + 1;
    }
    
    //set default for `to` if they are not defined
    if (isNaN(to)) {
      if ( expr.indexOf(':') == -1 ) {
        to = from + 1;
      } else {
        to = step < 0 ? 0 : arr.length;
      }
    }

    if (to < 0) {
      to = arr.length + to + 1;
    }

    //reverse the array if we have negative step
    if (step < 0) {
      arr = arr.reverse();

      to = arr.length - to;
      from = arr.length - from;

      step = Math.abs(step);
    }

    //slice the array with `from` and `to` variables
    var slicedArr = arr.slice(from, to);

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