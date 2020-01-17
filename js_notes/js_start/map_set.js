/*
@author: magician
@file:   map_set.js
@date:   2020/1/17
*/
'use strict';

let m = new Map();
let s = new Set();
console.log('你的浏览器支持Map和Set！');

// Map
let m1 = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
console.log(m1.get('Michael'));

let m2 = new Map();
console.log(m2.set('Adam', 67));
console.log(m2.set('Bob', 59));
console.log(m2.has('Adam'));
console.log(m2.get('Adam'));
m2.delete('Adam');
console.log(m2.get('Adam'));

let m3 = new Map();
console.log(m3.set('Adam', 67));
console.log(m3.set('Adam', 88));
console.log(m3.get('Adam'));

// Set
let s1 = new Set();
let s2 = new Set([1, 2, 3]);

let s3 = new Set([1, 2, 3, 3, '3']);
console.log(s3);

s3.add(4);
console.log(s3);
s3.add(4);
console.log(s3);

let s4 = new Set([1, 2, 3]);
console.log(s4);
s4.delete(3);
console.log(s4);
