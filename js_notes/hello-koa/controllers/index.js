/*
@author: magician
@file:   index.js
@date:   2020/2/13
*/
'use strict';

module.exports = {
    'GET /': async (ctx, next) => {
        ctx.render('index.html');
    }
};

// module.exports = {
//     'GET /': async (ctx, next) => {
//         let user = ctx.state.user;
//
//         if (user) {
//             ctx.render('room.html', {
//                 user: user
//             });
//         } else {
//             ctx.response.redirect('/signin');
//         }
//     }
// };
