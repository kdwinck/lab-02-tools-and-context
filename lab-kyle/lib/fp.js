'use strict';

const fp = module.exports = {};

fp.map = (array, callback) => Array.prototype.map.call(array, callback);

fp.filter = (array, callback) => Array.prototype.filter.call(array, callback);

fp.reduce = (array, callback) => Array.prototype.reduce.apply(array, callback);

fp.concat = (array1, array2) => Array.prototype.concat.apply(array1, array2);

fp.splice = (array, args) =>  Array.prototype.splice.apply(array, args);

let result = fp.map([1,2,3,4], n => n * 2);
console.log(result);

let res2 = fp.filter([1, 2, 3, 4], n => n < 4);
console.log(res2);

let res3 = fp.reduce([1,2,3,4],[(a, c) => a + c]);
console.log(res3);

let res4 = fp.concat(['h','e','l','l','o'], ['k','y','l','e']);
console.log(res4);

let res5 = fp.splice([1,2,3,4], [0, 3]);
console.log(res5);
