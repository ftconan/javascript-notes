/*
@author: magician
@file:   regexp_demo.js
@date:   2020/1/24
*/
'use strict';

let re1 = /ABC-001/;
let re2 = new RegExp('ABC-001');
console.log(re1);
console.log(re2);

let re3 = /^\d{3}-\d{3,8}/;
console.log(re3.test('010-12345'));
console.log(re3.test('010-1234x'));
console.log(re3.test('010 12345'));

// 切分字符串
console.log('a b   c'.split(' '));
console.log('a b   c'.split(/\s+/));
console.log('a,b, c  d'.split(/[\s,]+/));
'a,b;; c  d'.split(/[\s,;]+/);

// 分组
let re4 = /^(\d{3})-(\d{3,8})$/;
console.log(re4.exec('010-12345'));
console.log(re4.exec('010 12345'));

let re5 = /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9]):(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|[0-9])$/;
console.log(re5.exec('19:05:30'));

// 贪婪匹配
let re6 = /^(\d+)(0*)$/;
console.log(re6.exec('102300'));

let re7 = /^(\d+?)(0*)$/;
console.log(re7.exec('102300'));

// 全局搜索
let r1 = /test/g;
let r2 = new RegExp('test', 'g');

let s = 'JavaScript, VBScript, JScript and ECMAScript';
let re8 = /[a-zA-Z]+Script/g;

// 使用全局匹配:
console.log(re8.exec(s));
console.log(re8.lastIndex);

console.log(re8.exec(s));
console.log(re8.lastIndex);

console.log(re8.exec(s));
console.log(re8.lastIndex);

console.log(re8.exec(s));
console.log(re8.lastIndex);

console.log(re8.exec(s));

let re9 = /^\w+\.?\w+@\w+\.\w+$/;
// 测试:
let
    i,
    success = true,
    should_pass = ['someone@gmail.com', 'bill.gates@microsoft.com', 'tom@voyager.org', 'bob2015@163.com'],
    should_fail = ['test#gmail.com', 'bill@microsoft', 'bill%gates@ms.com', '@voyager.org'];
for (i = 0; i < should_pass.length; i++) {
    if (!re9.test(should_pass[i])) {
        console.log('测试失败: ' + should_pass[i]);
        success = false;
        break;
    }
}
for (i = 0; i < should_fail.length; i++) {
    if (re9.test(should_fail[i])) {
        console.log('测试失败: ' + should_fail[i]);
        success = false;
        break;
    }
}
if (success) {
    console.log('测试通过!');
}

let re10 = /^<(\w+\s?\w+)>\s?(\w+\.?\w+@\w+\.\w+)$/;
// 测试:
let r = re10.exec('<Tom Paris> tom@voyager.org');
if (r === null || r.toString() !== ['<Tom Paris> tom@voyager.org', 'Tom Paris', 'tom@voyager.org'].toString()) {
    console.log('测试失败!');
} else {
    console.log('测试成功!');
}
