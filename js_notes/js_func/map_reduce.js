/*
@author: magician
@file:   map_reduce.js
@date:   2020/1/19
*/
'use strict';

function pow(x) {
    return x * x;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let results = arr.map(pow);
console.log(results);

let f = function (x) {
    return x * x;
};
let result = [];
for (let i = 0; i < arr.length; i++) {
    result.push(f(arr[i]));
}

console.log(arr.map(String));

// reduce
function product(arr) {
    return arr.reduce(function (x, y) {
        return x * y;
    });
}

// 测试:
if (product([1, 2, 3, 4]) === 24 && product([0, 1, 2]) === 0 && product([99, 88, 77, 66]) === 44274384) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}

function string2int(s) {
    return s.split('').map(x => x * 1).reduce((x, y) => x * 10 + y);
}

// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        console.log('请勿使用parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        console.log('请勿使用Number()!');
    } else {
        console.log('测试通过!');
    }
} else {
    console.log('测试失败!');
}

function normalize(arr) {
    return arr.map(function (arr) {
        return arr[0].toUpperCase() + arr.substr(1).toLowerCase();
    });
}

// 测试:
if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}

let arr1 = ['1', '2', '3'];
let r;
r = arr1.map(function (x) {
    return parseInt(x);
});
console.log(r);
