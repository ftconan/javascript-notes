/*
@author: magician
@file:   fs_demo.js
@date:   2020/2/9
*/
'use strict';

// 异步读文件
let fs = require('fs');
const SAMPLE_TXT_PATH = '/Users/magician/Project/javascript/data/sample.txt';
const SAMPLE_PIC_PATH = '/Users/magician/Project/javascript/data/sample.png';
const OUTPUT_TXT_PATH = '/Users/magician/Project/javascript/data/output.txt';


fs.readFile(SAMPLE_TXT_PATH, 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

fs.readFile(SAMPLE_PIC_PATH, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + 'bytes');
    }
});

// Buffer -> String
// let text = data.toString('utf-8');
// console.log(text);

// String -> Buffer
// let buf = Buffer.from(text, 'utf-8');
// console.log(buf);

// 同步读文件
try {
    let data = fs.readFileSync(SAMPLE_TXT_PATH, 'utf-8');
    console.log(data);
} catch (e) {
    console.log(e);
}

// 写文件
let data = 'Hello, Node.js';

fs.writeFile(OUTPUT_TXT_PATH, data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});

// let data = 'Hello, Node.js';
// fs.writeFileSync(OUTPUT_TXT_PATH, data);

// stat
fs.stat(SAMPLE_TXT_PATH, function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});
