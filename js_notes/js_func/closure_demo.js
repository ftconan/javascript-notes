/*
@author: magician
@file:   closure_demo.js
@date:   2020/1/19
*/
'use strict';

function sum(arr) {
    return arr.reduce(function (x, y) {
        return x + y;
    });
}

console.log(sum([1, 2, 3, 4, 5]));

function lazy_sum(arr) {
    return function () {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    };
}

let f = lazy_sum([1, 2, 3, 4, 5]);
console.log(f());

let f1 = lazy_sum([1, 2, 3, 4, 5]);
let f2 = lazy_sum([1, 2, 3, 4, 5]);
console.log(f1 === f2);

// 闭包
function count() {
    let arr = [];
    for (let i = 1; i <= 3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    return arr;
}

let results = count();
let f3 = results[0];
let f4 = results[1];
let f5 = results[2];
console.log(f3());
console.log(f4());
console.log(f5());

function count1() {
    let arr1 = [];
    for (let i = 1; i <= 3; i++) {
        arr1.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr1;
}

let results1 = count1();
let f6 = results1[0];
let f7 = results1[1];
let f8 = results1[2];
console.log(f6());
console.log(f7());
console.log(f8());

function create_counter(initial) {
    let x = initial || 0;
    return {
        inc: function () {
            x += 1;
            return x;
        }
    }
}

let c1 = create_counter();
console.log(c1.inc());
console.log(c1.inc());
console.log(c1.inc());

let c2 = create_counter(10);
console.log(c2.inc());
console.log(c2.inc());
console.log(c2.inc());

function make_pow(n) {
    return function (x) {
        return Math.pow(x, n);
    }
}

// 创建两个新函数:
let pow2 = make_pow(2);
let pow3 = make_pow(3);
console.log(pow2(5));
console.log(pow3(7));

// 脑洞大开
// 定义数字0:
let zero = function (f) {
    return function (x) {
        return x;
    }
};

// 定义数字1:
let one = function (f) {
    return function (x) {
        return f(x);
    }
};

// 定义加法:
function add(n, m) {
    return function (f) {
        return function (x) {
            return m(f)(n(f)(x));
        }
    }
}

// 计算数字2 = 1 + 1:
let two = add(one, one);

// 计算数字3 = 1 + 2:
let three = add(one, two);

// 计算数字5 = 2 + 3:
let five = add(two, three);

// 你说它是3就是3，你说它是5就是5，你怎么证明？

// 呵呵，看这里:

// 给3传一个函数,会打印3次:
(three(function () {
    console.log('print 3 times');
}))();

// 给5传一个函数,会打印5次:
(five(function () {
    console.log('print 5 times');
}))();

// 继续接着玩一会...
