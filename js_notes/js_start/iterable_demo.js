/*
@author: magician
@file:   iterable_demo.js
@date:   2020/1/18
*/
'use strict';

let a = [1, 2, 3];
for (let x of a) {
}
console.log('你的浏览器支持for ... of');

let a1 = ['A', 'B', 'C'];
let s = new Set(['A', 'B', 'C']);
let m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (let x of a) {
    console.log(x);
}
for (let x of s) {
    console.log(x);
}
for (let x of m) {
    console.log(x[0] + '=' + x[1]);
}

a1.name = 'Hello';
for (let x in a) {
    console.log(x);
}

a1.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element + ', index = ' + index);
});

let s1 = new Set(['A', 'B', 'C']);
s1.forEach(function (element, sameElement, set) {
    console.log(element);
});

m.forEach(function (value, key, map) {
    console.log(key + ': ' + value);
});

a1.forEach(function (element) {
    console.log(element);
});
