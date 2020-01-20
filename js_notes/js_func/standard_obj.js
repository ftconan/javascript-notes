/*
@author: magician
@file:   standard_obj.js
@date:   2020/1/20
*/
'use strict';

console.log(typeof 123);
console.log(typeof NaN);
console.log(typeof 'str');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof Math.abs);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});

// 包装对象
let n = Number();
let b = Boolean();
let s = String('str');

console.log(typeof Number(123));
console.log(Number(123) === 123);

console.log(typeof Boolean(true));
console.log(Boolean(true) === true);

console.log(String('str'));
console.log(String('str') === 'str');

let n1 = Number('123');
console.log(typeof n1);
let b1 = Boolean('false');
console.log(typeof b1);
let s1 = String(123.45);
console.log(typeof s1);

(123).toString();