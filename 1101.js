const o = {};

o.a = 1;
console.log(o); //{ a: 1 }

//유사 배열 객체

var str = 'string';

console.log(str[0]); //s

console.log(str.length); //6
console.log(str.toUpperCase()); //STRING

var str = 'string';

str[0] = 'S';
console.log(str); //string

//값에 의한 전달(원시 값은 변경 안 되나, 변수는 가능)
var score = 80;
var copy = score;
 
console.log(score); //80
console.log(copy); //80

score = 100;

console.log(score); //100
console.log(copy); //80

var score2 = 80;

var copy2 = score2;

console.log(score2, copy2); //80 80
console.log(score2 === copy2); //true

score2 = 100;

console.log(score2, copy2); //100 80
console.log(score2 === copy2); //false

//객체

var person = {
    name : 'Lee'
};

console.log(person); //{name : 'Lee'}

person.name = 'Kim';
person.address = 'Seoul';

console.log(person); //{ name: 'Kim', address: 'Seoul' }



const o2 = { x: {y: 1} };

//얕은 복사
const c2 = {...o2};
console.log(c2 === o2); //false
console.log(c2.x === o2.x); //true

const _ = require('lodash');
//깊은 복사
const c3 = _.cloneDeep(o2);
console.log(c3 === o2); //false
console.log(c3.x === o2.x); //false

const v = 1;

const c1 = v;
console.log(c1 === v); //true

const o5 = { x : 1};

const c5 = o5;
console.log(c5 === o5); //true


//참조에 의한 전달
var person2 = {
    name: 'Lee'
};

var copy2 = person2;

console.log(copy2 === person2); //true

copy2.name = 'Kim';
person2.address = 'Seoul';

console.log(person2); //{ name: 'Kim', address: 'Seoul' }
console.log(copy2); //{ name: 'Kim', address: 'Seoul' }


var person3 = {
    name: 'Lee'
}

var person4 = {
    name: 'Lee'
}

console.log(person3 === person4); //false
console.log(person3.name === person4.name); //true