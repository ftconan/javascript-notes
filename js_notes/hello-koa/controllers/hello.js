/*
@author: magician
@file:   hello.js
@date:   2020/2/13
*/
'use strict';

let fn_hello = async (ctx, next) => {
    let name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
};

module.exports = {
    'GET /hello/:name': fn_hello
};
