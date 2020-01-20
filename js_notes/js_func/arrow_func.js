/*
@author: magician
@file:   arrow_func.js
@date:   2020/1/20
*/
'use strict';

// x => x * x;
// function (x) {
//     return x * x;
// }

let fn = x => x * x;
console.log('你的浏览器支持ES6的Arrow Function! ' + String(fn(6)));

let x = x => {
    if (x > 0) {
        return x * x;
    } else {
        return -x * x;
    }
};

// 两个参数:
let x1 = (x, y) => x * x + y * y;
// 无参数:
let x2 = () => 3.14;
// 可变参数:
let x3 = (x, y, ...rest) => {
    let sum = x + y;
    for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
};

// {}
let x4 = x => ({foo: x});

// this
let obj = {
    birth: 1990,
    getAge: function () {
        let b = this.birth;
        let fn = function () {
            return new Date().getFullYear() - b;
        };
        return fn();
    }
};
console.log(obj.getAge());

let obj1 = {
    birth: 1990,
    // getAge: function () {
    //     let fn = () => new Date().getFullYear() - this.birth;
    //     return fn();
    // }
    // getAge: function (year) {
    //     let fn = (y) => y - this.birth;
    //     return fn.call({birth: 2000}, year);
    // }
    getAge: () => new Date().getFullYear() - obj1.birth
};
// console.log(obj1.getAge());
// console.log(obj1.getAge(2020));
console.log(obj1.getAge());

let arr = [10, 20, 1, 2];
arr.sort((x, y) => {
    // if (x > y) {
    //     return 1;
    // }
    // if (x < y) {
    //     return -1;
    // }
    // return 0;
    return x - y;
});
console.log(arr);
