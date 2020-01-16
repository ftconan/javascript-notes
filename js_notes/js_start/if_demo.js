/*
@author: magician
@file:   if_demo.js
@date:   2020/1/16
*/
'use strict';

let age = 20;
if (age >= 18) {
    console.log('adult');
} else {
    console.log('age < 18');
    console.log('teenager');
}

let age1 = 3;
if (age1 >= 18) {
    console.log('adult');
} else if (age >= 6) {
    console.log('teenager');
} else {
    console.log('kid');
}

if (age >= 18) {
    console.log('adult');
} else {
    if (age >= 6) {
        console.log('teenager');
    } else {
        console.log('kid');
    }
}

if (age >= 6 && age < 18) {
    console.log('teenager');
} else if (age >= 18) {
    console.log('adult');
} else {
    console.log('kid');
}

let s = '123';
if (s.length) {
    console.log(s.length);
}
