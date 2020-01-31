/*
@author: magician
@file:   proto_inherit.js
@date:   2020/1/31
*/
'use strict';

function Student(props) {
    this.name = props.name || 'Unamed';
}

Student.prototype.hello = function () {
    console.log('Hello, ' + this.name + '!');
};

// PrimaryStudent构造函数:
function PrimaryStudent(props) {
    // 调用Student构造函数，绑定this变量:
    Student.call(this, props);
    this.grade = props.grade || 1;
}

// 空函数F:
function F() {

}

// 把F的原型指向Student.prototype:
F.prototype = Student.prototype;

// 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:
PrimaryStudent.prototype = new F();

// 把PrimaryStudent原型的构造函数修复为PrimaryStudent:
PrimaryStudent.prototype.constructor = PrimaryStudent;

// 继续在PrimaryStudent原型（就是new F()对象）上定义方法：
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

// 创建xiaoming:
let xiaoming = new PrimaryStudent({
    name: '小明',
    grade: 2
});
console.log(xiaoming.name);
console.log(xiaoming.grade);

// 验证原型:
console.log(xiaoming.__proto__ === PrimaryStudent.prototype);
console.log(xiaoming.__proto__.__proto__ === Student.prototype);
// 验证继承关系:
console.log(xiaoming instanceof PrimaryStudent);
console.log(xiaoming instanceof Student);

function inherits(Child, Parent) {
    let F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

function Student1(props) {
    this.name = props.name || 'Unamed';
}

Student1.prototype.hello = function () {
    console.log('Hello, ' + this.name + '!');
};

function PrimaryStudent1(props) {
    Student1.call(this, props);
    this.grade = props.grade || 1;
}

// 实现原型继承链:
inherits(PrimaryStudent1, Student1);

// 绑定其他方法到PrimaryStudent1原型:
PrimaryStudent1.prototype.getGrade = function () {
    return this.grade;
};
