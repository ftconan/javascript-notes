/*
@author: magician
@file:   app.js
@date:   2020/2/10
*/
'use strict';

const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

const isProduction = process.env.NODE_ENV === 'production';

// log request URL
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    let
        start = new Date().getTime(),
        execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

// static file support:
if (!isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

// parse request body:
app.use(bodyParser());

// add nunjucks as view:
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}));

// add controller:
app.use(controller());

// 在端口3000监听:
app.listen(3000);
console.log('app start at port 3000...');
