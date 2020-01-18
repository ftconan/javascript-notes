/*
@author: magician
@file:   define_call.js
@date:   2020/1/18
*/
'use strict';

// 定义函数
function abs(x) {
    if (typeof x != 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

let abs1 = function (x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};

// 调用函数
console.log(abs(10));
console.log(abs(9));
console.log(abs(10, 'blablabla'));
console.log(abs(-9, 'haha', 'hehe', null));
// console.log(abs());

// arguments
function foo(x) {
    console.log('x = ' + x);
    for (let i = 0; i < arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]);
    }
}

console.log(foo(10, 20, 30));

function abs2() {
    if (arguments.length === 0) {
        return 0;
    }

    let x = arguments[0];
    return x >= 0 ? x : -x;
}

function foo1(a, b, c) {
    if (arguments.length === 2) {
        c = b;
        b = null;
    }
}

// rest参数
function foo2(a, b) {
    let i, rest = [];
    if (arguments.length > 2) {
        for (i = 2; i < arguments.length; i++) {
            rest.push(arguments[i]);
        }
    }
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

function foo3(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

console.log(foo(1, 2, 3, 4, 5));
console.log(foo(1));

function sum(...rest) {
    let total = 0;

    for (let i = 0; i < rest.length; i++) {
        total += rest[i];
    }

    return total;
}

// 测试:
let i, args = [];
for (i = 1; i <= 100; i++) {
    args.push(i);
}
if (sum() !== 0) {
    console.log('测试失败: sum() = ' + sum());
} else if (sum(1) !== 1) {
    console.log('测试失败: sum(1) = ' + sum(1));
} else if (sum(2, 3) !== 5) {
    console.log('测试失败: sum(2, 3) = ' + sum(2, 3));
} else if (sum.apply(null, args) !== 5050) {
    console.log('测试失败: sum(1, 2, 3, ..., 100) = ' + sum.apply(null, args));
} else {
    console.log('测试通过!');
}

function area_of_circle(r, pi) {
    return (pi || 3.14) * r * r;
}

// 测试:
if (area_of_circle(2) === 12.56 && area_of_circle(2, 3.1416) === 12.5664) {
    console.log('测试通过');
} else {
    console.log('测试失败');
}

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }

}

console.log(max(15, 20));
