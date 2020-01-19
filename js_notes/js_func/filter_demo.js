/*
@author: magician
@file:   filter_demo.js
@date:   2020/1/19
*/
'use strict';

let arr = [1, 2, 4, 5, 6, 9, 10, 15];
let r = arr.filter(function (x) {
    return x % 2 !== 0;
});
console.log(r);

let arr1 = ['A', '', 'B', null, undefined, 'C', '  '];
let r1 = arr1.filter(function (s) {
    return s && s.trim();
});
console.log(r1);

// 回调函数
let arr2 = ['A', 'B', 'C'];
let r2 = arr2.filter(function (element, index, self) {
    console.log(element);
    console.log(index);
    console.log(self);
    return true;
});
console.log(r2);

let
    r3,
    arr3 = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
r3 = arr3.filter(function (element, index, self) {
    return self.indexOf(element) === index;
});
console.log(r3);
console.log(r3.toString());

function get_primes(arr) {
    return arr.filter(function (x) {
        if (x === 1) {
            return false;
        }
        for (let i = 2; i < x; i++) {
            if (x % i === 0) {
                return false;
            }
        }
        return x;
    });
}

// 测试:
let
    x,
    r4,
    arr4 = [];
for (x = 1; x < 100; x++) {
    arr4.push(x);
}
r4 = get_primes(arr4);
if (r4.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    console.log('测试通过!');
} else {
    console.log('测试失败: ' + r4.toString());
}
