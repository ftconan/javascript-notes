/*
@author: magician
@file:   array_func.js
@date:   2020/1/19
*/
'use strict';

// every
let arr = ['Apple', 'pear', 'orange'];
console.log(arr.every(function (s) {
    return s.length > 0;
}));
console.log(arr.every(function (s) {
    return s.toLowerCase() === s;
}));

// find
console.log(arr.find(function (s) {
    return s.toLowerCase() === s;
}));
console.log(arr.find(function (s) {
    return s.toUpperCase() === s;
}));

// findIndex
console.log(arr.findIndex(function (s) {
    return s.toLowerCase() === s;
}));
console.log(arr.findIndex(function (s) {
    return s.toUpperCase() === s;
}));

// forEach
arr.forEach(console.log);
