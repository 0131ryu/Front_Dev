//프로퍼티 값 갱신

var person = {
    name : 'Lee'
};

person.name = 'Kim';

console.log(person); //{ name: 'Kim' }

person.age = 20; //프로퍼티 동적 생성

console.log(person); //{ name: 'Kim', age: 20 }

delete person.age; //프로퍼티 삭제
delete person.address;

console.log(person);  //{ name: 'Kim' }

//프로퍼티 축약 표현 
var x = 1, y = 2;

var obj = {
    x: x,
    y: y
};

console.log(obj); //{ x: 1, y: 2 }


let x1 = 1, y1 = 2;

const obj1 = {x1, y1};

console.log(obj1); //{ x1: 1, y1: 2 }


//계산된 프로퍼티 이름

var prefix = 'prop';
var i = 0;

var obj = {};

//계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj[prefix + '-' + ++i] = i; 
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj); //{ 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }

const prefix2 = 'prop';
let i2 = 0;

const obj2 = {
    [`${prefix2}-${++i2}`]: i2,
    [`${prefix2}-${++i2}`]: i2,
    [`${prefix2}-${++i2}`]: i2
};

console.log(obj2);  //{ 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }

//메서드 축약 표현
var obj = {
    name: 'Lee',
    sayHi: function() {
        console.log('Hi ' + this.name);
    }
};

obj.sayHi(); //Hi Lee

const obj3 = {
    name3 : 'Lee',
    sayHi3() {
        console.log('Hi ' + this.name3);
    }
}

obj3.sayHi3(); //