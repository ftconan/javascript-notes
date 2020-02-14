/*
@author: magician
@file:   index.js
@date:   2020/2/13
*/
'use strict';

module.exports = {
    'GET /': async (ctx, next) => {
        ctx.render('index.html', {
            title: 'Welcome'
        });
    }
};
