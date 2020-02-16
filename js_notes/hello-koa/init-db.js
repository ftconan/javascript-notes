/*
@author: magician
@file:   init-db.js
@date:   2020/2/16
*/
'use strict';

// require('babel-core/register') ({
//     presets: ['stage-3']
// });

const model = require('./model.js');

model.sequelize.sync({force: true}).then(() => {
    console.log('init db ok.');
    process.exit(0);
}).catch((e) => {
    console.log(`failed:${e}`);
    process.exit(0);
});
