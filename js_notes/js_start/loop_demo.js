/*
@author: magician
@file:   loop_demo.js
@date:   2020/1/17
*/
'use strict';

let x = 0;
let i;

for (i=1; i<=10000; i++) {
    x += i;
}
console.log(x);

let x1 = 1;
let i1;
for (i1=1; i1<=10; i1++) {
    x *= i1;
}
console.log(x1);

let arr = ['Apple', 'Google', 'Microsoft'];
let i2, x2;
for (i2=0; i2<arr.length; i2++) {
    x2 = arr[i2];
    console.log(x2);
}

let x3 = 0;
for (;;) {
    if (x3 > 100) {
        break;
    }
    x3 += 1;
}

// for ... in
let o = {
  name: 'Jack',
  age: 20,
  city: 'Beijing'
};
for (let key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(key);
    }
}

let a = ['A','B', 'C'];
for (let a1 in a) {
    if (a.hasOwnProperty(a1)) {
        console.log(a1);
        console.log(a[a1]);
    }
}

// while
let x4 = 0;
let n = 99;
while (n > 0) {
    x4 += n;
    n -= 2;
}
console.log(x4);

// do ... while
let n1 = 0;
do {
    n1 += 1;
} while (n1 < 100);
console.log(n1);

for (let i2 in arr) {
    if (arr.hasOwnProperty(i2)) {
        console.log('Hello, ' + arr[i2] + '!');
    }
}

let n2 = 0;
while (n2 <= arr.length-1) {
    console.log('Hello, ' + arr[n2] + '!');
    n2++;
}
