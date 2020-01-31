/*
@author: magician
@file:   create_obj.js
@date:   2020/1/31
*/
'use strict';

let arr = [1, 2, 3];

function foo() {
    return 0;
}

// 构造函数
function Student(name) {
    this.name = name;
    this.hello = function () {
        console.log('Hello, ' + '!');
    }
}

Student.prototype.hello = function () {
    console.log('Hello, ' + this.name + '!');
};

let xiaoming = new Student('小明');
console.log(xiaoming.name);
console.log(xiaoming.hello());

console.log(xiaoming.constructor === Student.prototype.constructor);
console.log(Student.prototype.constructor === Student);
console.log(Object.getPrototypeOf(xiaoming) === Student.prototype);
console.log(xiaoming instanceof Student);

let xiaohong = new Student('小红');
console.log(xiaoming.name);
console.log(xiaohong.name);
console.log(xiaoming.hello);
console.log(xiaohong.hello);
console.log(xiaoming.hello === xiaohong.hello);

// 忘记写new怎么办
function Student1(props) {
    this.name = props.name || '匿名';
    this.grade = props.grade || 1;
}

Student1.prototype.hello = function () {
    console.log('Hello, ' + this.name + '!');
};

function createStudent(props) {
    return new Student(props || {});
}

let xiaoming1 = createStudent({
    name: '小明'
});
console.log(xiaoming1.grade);

function Cat(name) {
    this.name = name;
}

Cat.prototype.say = function () {
    return ('Hello, ' + this.name + '!');
};
// 测试:
let kitty = new Cat('Kitty');
let doraemon = new Cat('哆啦A梦');
if (kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}
