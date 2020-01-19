/*
@author: magician
@file:   high_order_func.js
@date:   2020/1/19
*/
'use strict';

function add(x, y, f) {
    return f(x) + f(y);
}

let x = add(-5, 6, Math.abs);
console.log(x);
