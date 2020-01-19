/*
@author: magician
@file:   scope_assign.js
@date:   2020/1/19
*/
'use strict';

function foo() {
    let x = 1;
    x += 1;
}

// x = x + 2; // ReferenceError! 无法在函数体外引用变量x

function bar() {
    let x = 'A';
    x += 'B';
}

function foo1() {
    let x = 1;

    function bar() {
        let y = x + 1;
    }

    // let z = y + 1; // ReferenceError! foo不可以访问bar的变量y!
    // console.log(z);
}

foo1();

function foo2() {
    let x = 1;

    function bar() {
        let x = 'A';
        console.log('x in bar() = ' + x);
    }

    console.log('x in foo2() = ' + x);
    bar();
}

foo2();

// 变量提升
function foo3() {
    let y = 'Bob';
    let x = 'Hello, ' + y;
    console.log(x);
    // y = 'Bob';
}

foo3();

function foo4() {
    let
        x = 1,
        y = x + 1,
        z, i;
    for (i=0; i<100; i++) {

    }
}

// 全局作用域
let course = 'Learn JavaScript';
console.log(course);
// console.log(window.course);

// 名字空间
let MYAPP = {};
MYAPP.name = 'myapp';
MYAPP.version = 1.0;

MYAPP.foo = function () {
    return 'foo';
};

// 局部作用域
function foo5() {
    for (var i=0; i<100; i++) {
        //
    }
    i += 100; // 仍然可以引用变量i
    console.log(i);
}

foo5();

function foo6() {
    let sum = 0;
    for (let i=0; i<100; i++) {
        sum += i;
    }
    // SyntaxError:
    // i += 1;
    // console.log(i);
}

foo6();

// 常量
const PI = 3.14;
// PI = 3;
console.log(PI);

// 解构赋值
let array = ['hello', 'JavaScript', 'ES6'];
let x1 = array[0];
let y1 = array[1];
let z1 = array[2];

// 如果浏览器支持解构赋值就不会报错:
let [x, y, z] = ['hello', 'JavaScript', 'ES6'];
// x, y, z分别被赋值为数组对应元素:
console.log('x = ' + x + ', y = ' + y + ', z = ' + z);

let [x2, [y2, z2]] = ['hello', 'JavaScript', 'ES6'];
console.log(x2);
console.log(y2);
console.log(z2);

let [, , z3] = ['hello', 'JavaScript', 'ES6'];
console.log(z3);

let person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school',
    address: {
        city: 'Beijing',
        street: 'No.1 Road',
        zipcode: '100001'
    }
};
// let {name, age, passport} = person;
// name, age, passport分别被赋值为对应属性:
// console.log('name = ' + name + ', age = ' + age + ', passport = ' + passport);

// let {name, address: {city, zip}} = person;
// console.log(name);
// console.log(city);
// console.log(zip);
// console.log(address);

// let {name, passport:id} = person;
// console.log(name);
// console.log(id);
// console.log(passport);

let {name, single=true} = person;
console.log(name);
console.log(single);

let x3, y3;
({x3, y3} = {name: '小明', x3: 100, y3:200});
console.log(x3);
console.log(y3);

// 使用场景
let x4=1, y4=2;
[x4, y4] = [y4, x4];
console.log(x4, y4);

// let {hostname:domain, pathname:path} = location;
// console.log(domain);

function buildDate({year, month, day, hour=0, minute=0, second=0}) {
    return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}

console.log(buildDate({year: 2017, month: 1, day: 1}));
console.log(buildDate({year: 2017, month: 1, day: 1, hour: 20, minute: 15}));
