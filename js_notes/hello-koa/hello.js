/*
@author: magician
@file:   hello.js
@date:   2020/2/16
*/
'use strict';

const data_txt = '/Users/magician/Project/javascript/js_notes/hello-koa/static/data/data.txt';
const fs = require('mz/fs');

// a simple sync function:
// module.exports = function (...rest) {
//     let sum = 0;
//     for (let n of rest) {
//         sum += n;
//     }
//
//     return sum;
// };

// a simple async function:
module.exports = async () => {
    let expression = await fs.readFile(data_txt, 'utf-8');
    let fn = new Function('return ' + expression);
    let r = fn();

    console.log(`Calculate: ${expression}=${r}`);
    return r;
};
