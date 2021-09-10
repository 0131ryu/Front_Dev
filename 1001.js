var person = {
    name: 'Lee',
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

console.log(typeof person); //object
console.log(person); //{ name: 'Lee', sayHello: [Function: sayHello] }

var empty = {};
console.log(typeof empty); //object

var person = {
    name: 'Lee', //프로퍼티 키 : name / 프로퍼티 값 : Lee
    age: 20 //프로퍼티 키 : age / 프로퍼티 값 : 20
};

var person2 = {
    firstName: 'Ung-mo',
    'last-name' : 'Lee' //식별자 네이밍 준수 x -> lastName
};

console.log(person2); //{ firstName: 'Ung-mo', 'last-name': 'Lee' }

var obj = {};
var key = 'hello';

obj[key] = 'world';

console.log(obj); //{ hello: 'world' }

var foo = {

};

console.log(foo); //{}

var foo =   {
    0: 1,
    1: 2,
    2: 3
};

console.log(foo); //{ '0': 1, '1': 2, '2': 3 }

var foo = {
    var: '',
    function: ''
};

console.log(foo); //{ var: '', function: '' }

var foo = {
    name: 'Lee',
    name: 'Kim'
};

console.log(foo); //{ name: 'Kim' }

var circle = {
    radius: 5, //프로퍼티

    getDiameter: function() { //메서드
        return 2 * this.radius; //this는 circle를 가리킴
    }
};

console.log(circle.getDiameter()); //10

//프로퍼티 접근
var person = {
    name: 'Lee'
};

console.log(person.name); //Lee
console.log(person['name']); //Lee
//console.log(person[name]); //오류 발생
console.log(person.age); //undefined

var person = {
    'last-name': 'Lee',
    1: 10
};

//console.log(person.'last-name'); //오류발생
//console.log(person.last-name); //오류 발생, 브라우저에서는 NaN 표기됨
//console.log([last-name]); //오류발생
console.log(person['last-name']); //Lee

// console.log(person.1); //오류발생
// console.log(person.'1');//오류발생
console.log(person[1]); //10
console.log(person['1']); //10