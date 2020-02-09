/*
@author: magician
@file:   error_demo.js
@date:   2020/2/9
*/
'use strict';

let r1, r2, s = null;

try {
    r1 = s.length;
    r2 = 100;
} catch (e) {
    console.log('出错了：' + e);
} finally {
    console.log('finally');
}

console.log('r1 = ' + r1);
console.log('r2 = ' + r2);

// 错误类型
try {
    console.log('exception');
} catch (e) {
    if (e instanceof TypeError) {
        console.log('Type error!');
    } else if (e instanceof Error) {
        console.log(e.message);
    } else {
        console.log('Error: ' + e);
    }
}

// 抛出错误
let r, n, s1;

try {
    s1 = prompt('请输入一个数字');
    n = parseInt(s1);
    if (isNaN(n)) {
        throw new Error('输入错误');
    }
    r = n * n;
    console.log(n + ' * ' + n + ' = ' + r);
} catch (e) {
    console.log('出错了：' + e);
}

