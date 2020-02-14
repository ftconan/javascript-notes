/*
@author: magician
@file:   app.js
@date:   2020/2/10
*/
'use strict';

// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
// body parse
const bodyParser = require('koa-bodyparser');

// 创建一个Koa对象表示web app本身:
const app = new Koa();
app.use(bodyParser());

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

// 导入controller middleware:
const controller = require('./controller');

// 使用middleware:
app.use(controller());

// 模板引擎
const nunjucks = require('nunjucks');

function createEnv(path, opts) {
    let
        autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });

    if (opts.filters) {
        for (let f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }

    return env;
}

let env = createEnv('views', {
    watch: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
});

let s = env.render('hello.html', {name: '小明', fruits: ['apple', 'pear', 'banana']});
console.log(s);

console.log(env.render('extend.html', {
    header: 'Hello',
    body: 'bla bla bla...'
}));

// 在端口3000监听:
app.listen(3000);
console.log('app start at port 3000...');
