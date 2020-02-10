/*
@author: magician
@file:   stream_demo.js
@date:   2020/2/10
*/
'use strict';

let fs = require('fs');

const SAMPLE_TXT_PATH = '/Users/magician/Project/javascript/data/sample.txt';
const OUTPUT_TXT1_PATH = '/Users/magician/Project/javascript/data/output1.txt';
const OUTPUT_TXT2_PATH = '/Users/magician/Project/javascript/data/output2.txt';
const COPIED_TXT2_PATH = '/Users/magician/Project/javascript/data/copied.txt';

// 打开一个流:
let rs = fs.createReadStream(SAMPLE_TXT_PATH, 'utf-8');

rs.on('data', function (chunk) {
    console.log('DATA:');
    console.log(chunk);
});

rs.on('end', function () {
    console.log('END');
});

rs.on('error', function () {
    console.log('ERROR: ' + err);
});

let ws1 = fs.createWriteStream(OUTPUT_TXT1_PATH, 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();

let ws2 = fs.createWriteStream(OUTPUT_TXT2_PATH);
// TODO: DeprecationWarning: Buffer.alloc(),Buffer.allocUnsafe(),Buffer.from()
ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(new Buffer('END.', 'utf-8'));
ws2.end();

// pipe
let rs1 = fs.createReadStream(SAMPLE_TXT_PATH);
let ws3 = fs.createWriteStream(COPIED_TXT2_PATH);

rs1.pipe(ws3);
// readable.pipe(writable, {end: false});
