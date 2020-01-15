/*
@author: magician
@file:   type_variable
@date:   2020/1/15
*/
'use strict';

let age = 15;
if (age >= 18) {
    console.log('adult');
} else {
    console.log('teenager');
}

console.log(isNaN(NaN));
console.log(Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001);

let arr = [1, 2, 3.14, 'Hello', null, true];
console.log(arr[0]);
console.log(arr[5]);
console.log(arr[6]);

let person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: 'true',
    zipcode: 'null',
};
console.log(person.name);
console.log(person.zipcode);
