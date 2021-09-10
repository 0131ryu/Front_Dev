console.log(Number(true)); //1
console.log(Number(false)); //0

console.log(parseInt('0')); //0
console.log(parseInt('-1')); //-1
console.log(parseInt('10.53')); //10

console.log(+true); //1
console.log(+false); //0

console.log(true * 1); //1
console.log(false * 1); //0

//boolean 타입 변환
console.log(Boolean('x')); //true
console.log(Boolean('')); //false
console.log(Boolean('false')); //true

console.log(Boolean(0)); //false
console.log(Boolean(1)); //true
console.log(Boolean(NaN)); //false
console.log(Boolean(Infinity)); //true

console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false

console.log(Boolean({})); //true
console.log(Boolean([])); //true


//부정논리 연산자
console.log(!!'x'); //true
console.log(!!''); //false
console.log(!!'false'); //true
console.log(!!0); //false
console.log(!!1); //true
console.log(!!NaN); //false
console.log(!!Infinity); //true
console.log(!!null); //false
console.log(!!undefined); //false

console.log(!!{}); //true
console.log(!![]); //true

//단축 평가

console.log('Cat' && 'Dog'); //Dog
console.log('Cat' || 'Dog'); //Cat

console.log('Cat' ||'Dog'); //Cat
console.log(false || 'Dog'); //Dog
console.log('Cat' || false); //Cat

console.log('Cat' && 'Dog'); //Dog
console.log(false && 'Dog'); //false
console.log('Cat' && false); //false

var done = true;
var message = '';

if(done) message = '완료';

message = done && '완료';
console.log(message); //완료

var done = false;
var message = '';

if(!done) message = '미완료';

message = done || '미완료';
console.log(message); //미완료

var done = true;
var message = '';

if(done) message = '완료';
else     message = '미완료';
console.log(message); //완료

message = done ? '완료' : '미완료';
console.log(message); //완료

// var elem = null;
// var value = elem.value; -> 오류발생

// var elem = nul;
// var value = elem && elem.value; -> null(오류발생)


//함수 매개변수에 기본값을 설정하려고 할 때

function getStringLength(str) {
    str = str || '';
    return str.length;
}

console.log(getStringLength()); //0
console.log(getStringLength('hi')); //2

function getStringLegnth(str = '') {
    return str.length;
}
console.log(getStringLength()); //0
console.log(getStringLength('hi')); //2

//옵셔널 체이닝 연산자

var elem = null;
var value = elem?.value;
console.log(value); //undefined

var elem = null;
var value = elem && elem.value;
console.log(value); //null

var str = '';

var length = str && str.length;
console.log(length); //''

var length = str?.length;
console.log(length); //0

var foo = null ?? 'default string';
console.log(foo); //default string

var foo = '' || 'default string'
console.log(foo); //default string

var foo = '' ?? 'default string'
console.log(foo); //''