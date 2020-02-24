/*
@author: magician
@file:   app.js
@date:   2020/2/10
*/
'use strict';

const url = require('url');
const ws = require('ws');
const Cookies = require('cookies');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');
const templating = require('./templating');
const WebSocketServer = ws.Server;

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

// const wss = new WebSocketServer({
//     port: 3000
// });
//
// wss.on('connection', function (ws) {
//     console.log(`[SERVER] connection()`);
//     ws.on('message', function (message) {
//         console.log(`[SERVER] Receieved: ${message}`);
//         setTimeout(() => {
//             ws.send(`What's your name?`, (err) => {
//                 if (err) {
//                     console.log(`[SERVER] error: ${err}`);
//                 }
//             });
//         }, 1000);
//     });
// });

// client test:
// let count = 0;
// let ws = new WebSocket('ws://localhost:3000/ws/chat');
//
// ws.on('open', function () {
//     console.log(`[CLIENT] open()`);
//     ws.send('Hello!');
// });
//
// ws.on('message', function (message) {
//     console.log(`[CLIENT] Received: ${message}`);
//     count++;
//     if (count > 3) {
//         ws.send('Goodbye!');
//         ws.close();
//     } else {
//         setTimeout(() => {
//             ws.send(`Hello, I'm Mr No.${count}!`);
//         }, 1000);
//     }
// });

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

// parse user from cookie:
app.use(async (ctx, next) => {
    ctx.state.user = parseUser(ctx.cookies.get('name' || ''));
    await next();
});

// app.use(async (ctx, next) => {
//     var name = ctx.request.query.name || 'world';
//     ctx.response.type = 'text/html';
//     ctx.response.body = `<h1>Hello, ${name}!</h1>`;
// });

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

let server = app.listen(3000);

function parseUser(obj) {
    if (!obj) {
        return false;
    }

    console.log('try parse: ' + obj);
    let s = '';
    if (typeof obj === 'string') {
        s = obj;
    } else if (obj.headers) {
        let cookies = new Cookies(obj, null);
        s = cookies.get('name');
    }
    if (s) {
        try {
            let user = JSON.parse(Buffer.from(s, 'base64').toString());
            console.log(`User: ${user.name}, ID: ${user.id}`);
            return user;
        } catch (e) {
            // ignore
            console.log(e);
        }
    }
}

function createWebSocketServer(server, onConnection, onMessage, onClose, onError) {
    let wss = new WebSocketServer({
        server: server
    });

    wss.broadcast = function broadcast(data) {
        wss.clients.forEach(function each(client) {
            client.send(data);
        });
    };
    onConnection = onConnection || function () {
        console.log('[WebSocket] connected.');
    };
    onMessage = onMessage || function (msg) {
        console.log('[WebSocket] message received: ' + msg);
    };
    onClose = onClose || function (code, message) {
        console.log(`[WebSocket] closed: ${code} - ${message}`);
    };
    onError = onError || function (err) {
        console.log('[WebSocket] error: ' + err);
    };
    wss.on('connection', function (ws) {
        let location = url.parse(ws.upgradeReq.url, true);
        console.log('[WebSocketServer] connection: ' + location.href);

        ws.on('message', onMessage);
        ws.on('close', onClose);
        ws.on('error', onError);

        if (location.pathname !== '/ws/chat') {
            // close ws:
            ws.close(4000, 'Invalid URL');
        }
        // check user:
        let user = parseUser(ws.upgradeReq);
        if (!user) {
            ws.close(4001, 'Invalid user');
        }
        ws.user = user;
        ws.wss = wss;
        onConnection.apply(ws);
    });

    console.log('WebSocketServer was attached.');
    return wss;
}

let messageIndex = 0;

function createMessage(type, user, data) {
    messageIndex++;
    return JSON.stringify({
        id: messageIndex,
        type: type,
        user: user,
        data: data
    });
}

function onConnect() {
    let user = this.user;
    let msg = createMessage('join', user, `${user.name} joined.`);

    this.wss.broadcast(msg);
    // build user list:
    let users = this.wss.clients.map(function (client) {
        return client.user;
    });
    this.send(createMessage('list', user, users));
}

function onMessage() {
    console.log(message);

    if (message && message.trim()) {
        let msg = createMessage('chat', this.user, message.trim());
        this.wss.broadcast(msg);
    }
}

function onClose() {
    let user = this.user;
    let msg = createMessage('left', user, `${user.name} is left.`);
    this.wss.broadcast(msg);
}

// module.exports = app;

app.wss = createWebSocketServer(server, onConnect, onMessage, onClose);

console.log('app started at port 3000...');
