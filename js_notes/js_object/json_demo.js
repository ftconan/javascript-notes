/*
@author: magician
@file:   json_demo.js
@date:   2020/1/29
*/
'use strict';

// 序列化
let xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C"\ Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return {
            'Name': this.name,
            'Age': this.age
        };
    }
};
let s = JSON.stringify(xiaoming);
console.log(s);

console.log(JSON.stringify(xiaoming, null, '  '));
console.log(JSON.stringify(xiaoming, ['name', 'skills'], '  '));

function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}
console.log(JSON.stringify(xiaoming, convert, '  '));
console.log(JSON.stringify(xiaoming));

// 反序列化
console.log(JSON.parse('[1,2,3,true]'));
console.log(JSON.parse('{"name": "小明", "age": 14}'));
console.log(JSON.parse('true'));
console.log(JSON.parse('123.45'));

let obj = JSON.parse('{"name": "小明", "age": 14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});
console.log(JSON.stringify(obj));
