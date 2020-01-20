/*
@author: magician
@file:   date_demo.js
@date:   2020/1/20
*/
'use strict';

let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());

let d = new Date(2015, 5, 19, 20, 15, 30, 123);
console.log(d);

let d1 = Date.parse('2015-06-24T19:49:22.875+08:00');
console.log(d1);

let d2 = new Date(1435146562875);
console.log(d2);
console.log(d.getMonth());

// 时区
let d3 = new Date(1435146562875);
console.log(d3.toLocaleString());
console.log(d3.toUTCString());

if (Date.now) {
    console.log(Date.now()); // 老版本IE没有now()方法
} else {
    console.log(new Date().getTime());
}

let today = new Date();
if (today.getMonth() === 1 && today.getDate() === 14) {
    console.log('亲爱的，我预定了晚餐，晚上6点在餐厅见！');
}
