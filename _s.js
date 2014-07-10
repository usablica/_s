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

    //to keep status of negative parameters
    var reversed = false;

    //return empty array if given array is empty
    if (arr.length == 0) {
      return [];
    }

    //return the original array if there is no parameter
    if (isNaN(from) && isNaN(to) && isNaN(step)) {
      return arr;
    }

    //set default for both `from` and `to` if they are not defined
    if (isNaN(from) && isNaN(to)) {
      from = 0;
      to = arr.length;
    }

    //reverse the array if we have negative values
    if (from < 0 || to < 0 || step < 0) {
      arr = arr.reverse();
      reversed = true;

      //swap from and to
      from = [to, to = from][0];

      to = Math.abs(to);
      //if `from` is not defined, we should set it to = `to` - 1
      if (isNaN(from)) {
        from = to - 1;
      } else {
        from = Math.abs(from);
      }
      step = Math.abs(step);
    }

    //set default `from`
    if (typeof (from) == 'undefined') {
      from = 0;
    }

    //set default `to`
    if (isNaN(to)) {
      to = from + 1;
    }

    //slice the array with `from` and `to` variables
    var slicedArr = arr.slice(from, to);

    //return sliced array if there is no `step` value
    if (isNaN(step)) {
      return reversed ? slicedArr.reverse() : slicedArr;
    }

    var alteredArray = [];
    //apply `step` variable
    for (var i = 0, arrLength = slicedArr.length; i < arrLength;i = i + step) {
      alteredArray[alteredArray.length] = slicedArr[i];
    }

    return reversed ? alteredArray.reverse() : alteredArray;
  } else {
    throw Error('Bad expression for _s.')
  }
};
