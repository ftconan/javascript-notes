/*
@author: magician
@file:   class_inherit.js
@date:   2020/1/31
*/
'use strict';

// function Student(name) {
//     this.name = name;
// }
//
// Student.prototype.hello = function () {
//     console.log('Hello, ' + this.name + '!');
// };

class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log('Hello, ' + this.name + '!');
    }
}

let xiaoming = new Student('小明');
console.log(xiaoming.hello());

// class继承
class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        console.log('I am at grade' + this.grade);
    }
}

class Animal {
    constructor(name) {
        this.name = name;
    }

}

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    say() {
        return ('Hello, ' + this.name + '!');
    }
}

// 测试:
let kitty = new Cat('Kitty');
let doraemon = new Cat('哆啦A梦');
if ((new Cat('x') instanceof Animal) && kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}
