/*
@author: magician
@file:   array_demo
@date:   2020/1/16
*/
'use strict';

let arr = [1, 2, 3.14, 'Hello', null, true];
console.log(arr.length);

let arr1 = [1, 2, 3];
console.log(arr1.length);
arr1.length = 6;
console.log(arr1);
arr1.length = 2;
console.log(arr1);

let arr2 = [1, 2, 3];
arr2[5] = 'x';
console.log(arr2);

// indexOf
let arr3 = [10, 20, '30', 'xyz'];
console.log(arr3.indexOf(10));
console.log(arr3.indexOf(20));
console.log(arr3.indexOf(30));
console.log(arr3.indexOf('30'));

// slice
let arr4 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(arr4.slice(0, 3));
console.log(arr4.slice(3));
let arr4Copy = arr.slice();
console.log(arr4Copy);
console.log(arr4Copy === arr4);

// push and pop
let arr5 = [1, 2];
arr5.push('A', 'B');
console.log(arr5);
arr5.pop();
console.log(arr5);
arr5.pop();
arr5.pop();
arr5.pop();
console.log(arr5);
arr5.pop();
console.log(arr5);

// unshift and shift
let arr6 = [1, 2];
arr6.unshift('A', 'B');
console.log(arr6);
arr6.shift();
console.log(arr6);
arr6.shift();
arr6.shift();
arr6.shift();
console.log(arr6);
arr6.shift();
console.log(arr6);

// sort
let arr7 = ['B', 'C', 'A'];
arr7.sort();
console.log(arr7);


// reverse
let arr8 = ['one', 'two', 'three'];
arr8.reverse();
console.log(arr8);

// splice
let arr9 = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
arr9.splice(2, 3, 'Google', 'Facebook');
console.log(arr9);
arr9.splice(2, 2);
console.log(arr9);
arr9.splice(2, 0, 'Google', 'Facebook');
console.log(arr9);

// concat
let arr10 = ['A', 'B', 'C'];
let added = arr10.concat([1, 2, 3]);
console.log(added);
console.log(arr10);
arr10.concat(1, 2, [3, 4]);
console.log(arr10);

// join
let arr11 = ['A', 'B', 'C', 1, 2, 3];
let joinArr = arr11.join('-');
console.log(joinArr);
console.log(arr11);

//multi array
let arr12 = [[1, 2, 3], [400, 500, 600], '-'];
console.log(arr12);
console.log(arr12[1][1]);

let nameArr = ['小明', '小红', '大军', '阿黄'];
console.log('欢迎' + nameArr.slice(0, nameArr.length - 1) + '和' + nameArr[nameArr.length - 1] + '同学！');
