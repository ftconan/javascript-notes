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

// const model = require('./model');
//
// let
//     Pet = model.Pet,
//     User = model.User;
//
// (async () => {
//     let user = await User.create({
//         name: 'John',
//         gender: false,
//         email: 'john-' + Date.now() + '@garfield.pet',
//         passwd: 'hahaha'
//     });
//
//     console.log('created: ' + JSON.stringify(user));
//
//     let cat = await Pet.create({
//         ownerId: user.id,
//         name: 'Garfield',
//         gender: false,
//         birth: '2007-07-07',
//     });
//
//     console.log('created: ' + JSON.stringify(cat));
//
//     let dog = await Pet.create({
//         ownerId: user.id,
//         name: 'Odie',
//         gender: false,
//         birth: '2008-08-08',
//     });
//
//     console.log('created: ' + JSON.stringify(dog));
// })();

const WebSocket = require('ws');
const WebSocketServer = WebSocket.Server;
const wss = new WebSocketServer({
    port: 3000
});

wss.on('connection', function (ws) {
    console.log(`[SERVER] connection()`);
    ws.on('message', function (message) {
        console.log(`[SERVER] Receieved: ${message}`);
        setTimeout(() => {
            ws.send(`What's your name?`, (err) => {
                if (err) {
                    console.log(`[SERVER] error: ${err}`);
                }
            });
        }, 1000);
    });
});

console.log('ws server started at port 3000...');

// client test:
let count = 0;
let ws = new WebSocket('ws://localhost:3000/ws/chat');

ws.on('open', function () {
    console.log(`[CLIENT] open()`);
    ws.send('Hello!');
});

ws.on('message', function (message) {
    console.log(`[CLIENT] Received: ${message}`);
    count++;
    if (count > 3) {
        ws.send('Goodbye!');
        ws.close();
    } else {
        setTimeout(() => {
            ws.send(`Hello, I'm Mr No.${count}!`);
        }, 1000);
    }
});

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

app.use(async (ctx, next) => {
    var name = ctx.request.query.name || 'world';
    ctx.response.type = 'text/html';
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

// static file support:
if (!isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

// parse request body:
app.use(bodyParser());

// add nunjucks as view:
// app.use(templating('views', {
//     noCache: !isProduction,
//     watch: !isProduction
// }));

// add controller:
// app.use(controller());

module.exports = app;
