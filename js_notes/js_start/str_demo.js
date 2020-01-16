/*
@author: magician
@file:   str_demo.js
@date:   2020/1/15
*/
'use strict';

console.log(`多行
字符串
测试`);

let name = '小明';
let age = 20;
let message = `你好，${name}, 你今年${age}岁了！`;
console.log(message);

// length
let s = 'Hello, world!';
console.log(s);

// index
console.log(s[0]);
console.log(s[6]);
console.log(s[7]);
console.log(s[12]);
console.log(s[13]);

let s1 = 'Text';
// s1[0] = 'X';
console.log(s1);

// toLowerCase
let s2 = 'Hello';
let lower = s2.toLowerCase();
console.log(lower);

// indexOf
let s3 = 'hello, world!';
console.log(s3.indexOf('world'));
console.log(s3.indexOf('World'));

// substring
let s4 = 'hello, world';
console.log(s4.substring(0, 5));
console.log(s4.substring(7));
