/*
@author: magician
@file:   app.js
@date:   2020/2/10
*/
'use strict';

// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

app.use(async (ctx, next) => {
    // 打印URL
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    // 调用下一个middleware
    await next();
});

app.use(async (ctx, next) => {
    const start = new Date().getTime();
    // 调用下一个middleware
    await next();
    const ms = new Date().getTime() - start;
    console.log(`Time: ${ms}ms`);
});

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

// 在端口3000监听:
app.listen(3000);
console.log('app start at port 3000...');
