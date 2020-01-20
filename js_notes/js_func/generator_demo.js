/*
@author: magician
@file:   generator_demo.js
@date:   2020/1/20
*/
'use strict';

function foo(x) {
    return x + x;
}

let r = foo(1);

function* foo1(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}

function fib(max) {
    let
        a = 0,
        b = 1,
        arr = [0, 1];
    while (arr.length < max) {
        [a, b] = [b, a + b];
        arr.push(b);
    }
    return arr;
}

// 测试:
console.log(fib(5));
console.log(fib(10));

function* fib1(max) {
    let
        a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a + b];
        n++;
    }
}

let f = fib1(5);
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());

for (let x of fib1(10)) {
    console.log(x);
}

// ajax('http://url-1', data1, function (err, result) {
//     if (err) {
//         return handle(err);
//     }
//     ajax('http://url-2', data2, function (err, result) {
//         if (err) {
//             return handle(err);
//         }
//         ajax('http://url-3', data3, function (err, result) {
//             if (err) {
//                 return handle(err);
//             }
//             return success(result);
//         });
//     });
// });

// try {
//     r1 = yield ajax('http://url-1', data1);
//     r2 = yield ajax('http://url-2', data1);
//     r3 = yield ajax('http://url-3', data1);
//     success(r3);
// } catch (err) {
//     handle(err);
// }

let current_id = 0;

function next_id() {
    current_id++;
    return current_id;
}

function* next_id1() {
    let current_id = 1;
    while (true) {
        yield current_id++;
    }
}

// 测试:
let
    x,
    pass = true,
    g = next_id1();
for (x = 1; x < 100; x++) {
    if (g.next().value !== x) {
        pass = false;
        console.log('测试失败!');
        break;
    }
}
if (pass) {
    console.log('测试通过!');
}
