/*
@author: magician
@file:   oop_demo.js
@date:   2020/1/31
*/
'use strict';

let robot = {
    name: 'Robot',
    height: 1.6,
    run: function () {
        console.log(this.name + 'is running...');
    }
};

let Student = {
    name: 'Robot',
    height: 1.6,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

let xiaoming = {
    name: '小明'
};

xiaoming.__proto__ = Student;
console.log(xiaoming.name);
console.log(xiaoming.run());

let Bird = {
    fly: function () {
        console.log(this.name + ' is flying...');
    }
};

xiaoming.__proto__ = Bird;
console.log(xiaoming.fly());

// 原型对象
function createStudent(name) {
    // 基于Student原型创建一个新对象:
    let s = Object.create(Student);
    // 初始化新对象:
    s.name = name;

    return s;
}

let xiaoming1 = createStudent('小明');
console.log(xiaoming1.run());
console.log(xiaoming1.__proto__ === Student);
