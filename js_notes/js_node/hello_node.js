/*
@author: magician
@file:   hello_node.js
@date:   2020/2/9
*/
'use strict';

console.log('Hello, Node.js!');

let s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

module.exports = greet;
