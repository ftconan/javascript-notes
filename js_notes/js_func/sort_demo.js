/*
@author: magician
@file:   sort_dem.js
@date:   2020/1/19
*/
'use strict';

console.log(['Google', 'Apple', 'Microsoft'].sort());
console.log(['Google', 'apple', 'Microsoft'].sort());
// Array的sort()方法默认把所有元素先转换为String再排序
console.log([10, 20, 1, 2].sort());

let arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
console.log(arr);

let arr1 = ['Google', 'apple', 'Microsoft'];
arr1.sort(function (s1, s2) {
    let x1 = s1.toLowerCase();
    let x2 = s2.toLowerCase();
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
});

let a1 = ['B', 'A', 'C'];
let a2 = a1.sort();
console.log(a1);
console.log(a2);
console.log(a1 === a2);
