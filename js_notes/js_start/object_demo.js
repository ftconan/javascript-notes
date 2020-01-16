/*
@author: magician
@file:   object_demo.js
@date:   2020/1/16
*/
'use strict';

let xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};
console.log(xiaoming.name);
console.log(xiaoming.birth);
console.log(xiaoming.age);

xiaoming.age = 18;
console.log(xiaoming.age);

// delete
delete xiaoming.age;
delete xiaoming['name'];
console.log(xiaoming.name);
delete xiaoming.school;

// in
console.log('name' in xiaoming);
console.log('grade' in xiaoming);
console.log('toString' in xiaoming);

// hasOwnProperty
console.log(xiaoming.hasOwnProperty('birth'));
console.log(xiaoming.hasOwnProperty('toString'));

let xiaohong = {
    name: '小红',
    'middle-school': 'No.1 Middle School'
};
console.log(xiaohong['middle-school']);
console.log(xiaohong['name']);
console.log(xiaohong.name);

