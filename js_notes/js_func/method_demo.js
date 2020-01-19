/*
@author: magician
@file:   method_demo.js
@date:   2020/1/19
*/
'use strict';

let xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        let y = new Date().getFullYear();
        return y - this.birth;
    }
};

console.log(xiaoming.age);
console.log(xiaoming.age());

function getAge() {
    let y = new Date().getFullYear();
    return y - this.birth; // TypeError: Cannot read property 'birth' of undefined
}

let xiaoming1 = {
    name: '小明',
    birth: 1990,
    age: getAge
};

// console.log(xiaoming.age());
// console.log(getAge());

// let fn = xiaoming.age;
// console.log(fn()); // TypeError: Cannot read property 'birth' of undefined

let xiaoming2 = {
    name: '小明',
    birth: 1990,
    age: function () {
        function getAgeFromBirth() {
            let y = new Date().getFullYear();
            return y - this.birth;
        }
        return getAgeFromBirth();
    }
};

// console.log(xiaoming2.age()); // TypeError: Cannot read property 'birth' of undefined

let xiaoming3 = {
    name: '小明',
    birth: 1990,
    age: function () {
        let that = this;
        function getAgeFromBirth() {
            let y = new Date().getFullYear();
            return y - that.birth;
        }
        return getAgeFromBirth();
    }
};

console.log(xiaoming3.age());

// apply
function getAge1() {
    let y = new Date().getFullYear();
    return y - this.birth;
}

let xiaoming4 = {
    name: '小明',
    birth: 1990,
    age: getAge1
};

console.log(xiaoming4.age());
console.log(getAge1.apply(xiaoming4, []));

console.log(Math.max.apply(null, [3, 5, 4]));
console.log(Math.max.call(null, 3, 5, 4));

// // 装饰器
// let count = 0;
// let oldParseInt = parseInt;
// window.oldParseInt = function () {
//     count += 1;
//     return oldParseInt.apply(null, arguments);
// };
//
// // 测试:
// parseInt('10');
// parseInt('20');
// parseInt('30');
// console.log('count = ' + count);
