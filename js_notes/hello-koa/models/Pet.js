/*
@author: magician
@file:   Pet.js
@date:   2020/2/16
*/
'use strict';

const db = require('../db');

module.exports = db.defineModel('pets', {
    ownerId: db.ID,
    name: db.STRING(50),
    gender: db.BOOLEAN,
    birth: db.STRING(10),
});