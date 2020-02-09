/*
@author: magician
@file:   module_demo.js
@date:   2020/2/9
*/
'use strict';

let greet = require('./hello_node');
let s = 'Michael';

greet(s);

console.log(global.console);
console.log(process === global.process);
console.log(process.version);
console.log(process.platform);
console.log(process.arch);
//返回当前工作目录
console.log(process.cwd);
// 切换当前工作目录
console.log(process.chdir('/private/tmp'));
console.log(process.cwd());

process.nextTick(function () {
    console.log('nextTick callback!');
});

console.log('nextTick was set!');

// 程序即将退出时的回调函数:
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});

// 判断JavaScript执行环境
if (typeof window === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}
